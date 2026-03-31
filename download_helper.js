/**
 * download_helper.js
 * Pixel-perfect card downloader for all Werewolf card editions.
 * Uses html2canvas with embedded Google Fonts to guarantee
 * correct font rendering, gradients, SVGs, and backgrounds.
 */

// ─── Font URLs to fetch and embed ────────────────────────────────────────────
const FONT_URLS = [
    // Cinzel (used by ove, obsidianv, linearted, ultrapremium, arcana)
    'https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gt79mT7PkM.woff2',
    // Cinzel 700
    'https://fonts.gstatic.com/s/cinzel/v23/8vIJ7ww63mVu7gt7ZaH2YKs.woff2',
    // Cinzel 900
    'https://fonts.gstatic.com/s/cinzel/v23/8vIJ7ww63mVu7gt7ZaH2OKs.woff2',
    // Montserrat 400
    'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw0aXpsog.woff2',
    // Montserrat 600
    'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw0aXpsog.woff2',
    // Montserrat 800
    'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM6Hw0aXpsog.woff2',
    // Crimson Pro 400
    'https://fonts.gstatic.com/s/crimsonpro/v24/q5uUsoa5M_tv7IihmnkabC5XiXCAlXGks1WZzm18OA.woff2',
    // Crimson Pro 400 italic
    'https://fonts.gstatic.com/s/crimsonpro/v24/q5uYsoa5M_tv7IihmnkabC5XiXCAlXGks1WZTm18OA.woff2',
    // Crimson Pro 700
    'https://fonts.gstatic.com/s/crimsonpro/v24/q5uUsoa5M_tv7IihmnkabC5XiXCAlXGks1WZjm58OA.woff2',
    // Playfair Display 400
    'https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQ.woff2',
    // Playfair Display 700
    'https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vUDQ.woff2',
    // Cormorant Garamond 400
    'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQ.woff2',
    // Outfit 400
    'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C5g.woff2',
    // Outfit 700
    'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4g.woff2',
];

// Cache for base64-encoded fonts
const _fontCache = {};
let _fontsEmbedded = false;
let _fontStyleEl = null;

/**
 * Fetch a font file and return as base64 data URI.
 */
async function _fetchFontAsBase64(url) {
    if (_fontCache[url]) return _fontCache[url];
    try {
        const resp = await fetch(url);
        if (!resp.ok) return null;
        const blob = await resp.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                _fontCache[url] = reader.result;
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    } catch {
        return null;
    }
}

/**
 * Injects a <style> tag with all fonts as base64 @font-face rules.
 * This ensures html2canvas can use them during render.
 */
async function _embedFonts() {
    if (_fontsEmbedded) return;

    const fontFaces = [
        { family: 'Cinzel', weight: '400', url: FONT_URLS[0] },
        { family: 'Cinzel', weight: '700', url: FONT_URLS[1] },
        { family: 'Cinzel', weight: '900', url: FONT_URLS[2] },
        { family: 'Montserrat', weight: '400', url: FONT_URLS[3] },
        { family: 'Montserrat', weight: '600', url: FONT_URLS[4] },
        { family: 'Montserrat', weight: '800', url: FONT_URLS[5] },
        { family: 'Crimson Pro', weight: '400', style: 'normal', url: FONT_URLS[6] },
        { family: 'Crimson Pro', weight: '400', style: 'italic', url: FONT_URLS[7] },
        { family: 'Crimson Pro', weight: '700', style: 'normal', url: FONT_URLS[8] },
        { family: 'Playfair Display', weight: '400', url: FONT_URLS[9] },
        { family: 'Playfair Display', weight: '700', url: FONT_URLS[10] },
        { family: 'Cormorant Garamond', weight: '400', url: FONT_URLS[11] },
        { family: 'Outfit', weight: '400', url: FONT_URLS[12] },
        { family: 'Outfit', weight: '700', url: FONT_URLS[13] },
    ];

    const cssRules = await Promise.all(fontFaces.map(async (f) => {
        const b64 = await _fetchFontAsBase64(f.url);
        if (!b64) return '';
        const style = f.style || 'normal';
        return `@font-face { font-family: '${f.family}'; font-weight: ${f.weight}; font-style: ${style}; src: url('${b64}') format('woff2'); }`;
    }));

    if (_fontStyleEl) _fontStyleEl.remove();
    _fontStyleEl = document.createElement('style');
    _fontStyleEl.id = '_ww_embedded_fonts';
    _fontStyleEl.textContent = cssRules.join('\n');
    document.head.appendChild(_fontStyleEl);

    // Force fonts to be applied by the browser
    await document.fonts.ready;

    _fontsEmbedded = true;
}

// ─── Shared print-quality settings ───────────────────────────────────────────
const _PRINT = {
    TARGET_DPI  : 600,
    CARD_W_MM   : 54.5,
    CARD_H_MM   : 85.5,
    MM_PER_INCH : 25.4,
    get outW() { return Math.round((this.CARD_W_MM / this.MM_PER_INCH) * this.TARGET_DPI); }, // ~1287px
    get outH() { return Math.round((this.CARD_H_MM / this.MM_PER_INCH) * this.TARGET_DPI); }, // ~2020px
};

/**
 * Shared gradient-text + font fix applied to the html2canvas cloned node.
 */
function _fixClonedCard(el, doc) {
    if (_fontStyleEl) doc.head.appendChild(_fontStyleEl.cloneNode(true));

    const gradientFixes = [
        { sel: '.gold-text-fx',      color: '#d4af37' },
        { sel: '.silver-text-fx',    color: '#cccccc' },
        { sel: '.gold-text',         color: '#d4af37' },
        { sel: '.t2-name.gold-text', color: '#d4af37' },
    ];
    gradientFixes.forEach(({ sel, color }) => {
        el.querySelectorAll(sel).forEach(n => {
            n.style.backgroundImage = 'none';
            n.style.background = 'none';
            n.style.webkitBackgroundClip = 'unset';
            n.style.backgroundClip = 'unset';
            n.style.webkitTextFillColor = color;
            n.style.color = color;
        });
    });
    el.querySelectorAll('*').forEach(n => {
        const cs = getComputedStyle(n);
        if (cs.color === 'rgba(0, 0, 0, 0)' || cs.color === 'transparent') {
            n.style.backgroundImage = 'none';
            n.style.background = 'none';
            n.style.webkitBackgroundClip = 'unset';
            n.style.backgroundClip = 'unset';
            n.style.webkitTextFillColor = '#d4af37';
            n.style.color = '#d4af37';
        }
        n.style.fontFamily = cs.fontFamily;
        n.style.fontWeight = cs.fontWeight;
        n.style.fontStyle  = cs.fontStyle;
    });
}

/**
 * Renders a single .card element to a Blob at print quality.
 * @returns {Promise<Blob>}
 */
async function _renderCardToBlob(card, format, bgColor) {
    const { outW, outH, TARGET_DPI } = _PRINT;
    const cssW = card.offsetWidth || 1;
    const HIGH_SCALE = Math.ceil((outW / cssW) * 3.5);

    const hiRes = await html2canvas(card, {
        scale: HIGH_SCALE,
        useCORS: true,
        allowTaint: false,
        logging: false,
        backgroundColor: bgColor,
        imageTimeout: 15000,
        onclone: (doc, el) => _fixClonedCard(el, doc),
    });

    const canvas = document.createElement('canvas');
    canvas.width  = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    if (bgColor) { ctx.fillStyle = bgColor; ctx.fillRect(0, 0, outW, outH); }
    ctx.drawImage(hiRes, 0, 0, outW, outH);

    return new Promise(resolve => {
        if (format === 'jpg') {
            canvas.toBlob(resolve, 'image/jpeg', 1.0);
        } else {
            const raw = canvas.toDataURL('image/png');
            const dpiPng = _embedPngDpi(raw, TARGET_DPI);
            const b64 = dpiPng.split(',')[1];
            const bin = atob(b64);
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
            resolve(new Blob([bytes], { type: 'image/png' }));
        }
    });
}

/**
 * Main function: download a single card element as PNG or JPG.
 * @param {HTMLElement} card - The .card element to capture
 * @param {string} filename - Base filename without extension
 * @param {object} options - { format: 'png'|'jpg', bgColor: '#hex'|null }
 */
async function downloadCardFaithful(card, filename, options = {}) {
    const format  = (options.format || 'png').toLowerCase();
    const ext     = format === 'jpg' ? 'jpg' : 'png';
    const bgColor = options.bgColor || null;
    const { outW, outH, TARGET_DPI } = _PRINT;

    const loader = _makeLoader('⟳ Rendering…');
    try {
        await _embedFonts();
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 80));

        const blob = await _renderCardToBlob(card, format, bgColor);
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `${filename}.${ext}`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);

        loader.textContent = `✓ Selesai! (${outW}×${outH}px @ ${TARGET_DPI}DPI)`;
        loader.style.color = '#7fff7f';
    } catch (err) {
        console.error('[downloadCardFaithful]', err);
        loader.textContent = '✗ Gagal render'; loader.style.color = '#ff6666';
    } finally { setTimeout(() => loader.remove(), 3000); }
}

/**
 * Download ALL .card elements on the page as a ZIP archive.
 * Requires JSZip to be loaded on the page.
 *
 * @param {string} prefix   - ZIP & filename prefix (e.g. 'ObsidianVanguard')
 * @param {object} options  - { format: 'png'|'jpg', bgColor: '#hex'|null }
 */
async function downloadAllCards(prefix = 'Werewolf', options = {}) {
    if (typeof JSZip === 'undefined') {
        alert('JSZip tidak ditemukan. Pastikan halaman sudah selesai dimuat.'); return;
    }
    const format  = (options.format || 'png').toLowerCase();
    const ext     = format === 'jpg' ? 'jpg' : 'png';
    const bgColor = options.bgColor || null;
    const { outW, outH, TARGET_DPI } = _PRINT;

    const cards = Array.from(document.querySelectorAll('.card'));
    if (!cards.length) { alert('Tidak ada kartu ditemukan.'); return; }

    const loader = _makeLoader(`⟳ Mempersiapkan font…`);
    try {
        await _embedFonts();
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 80));

        const zip = new JSZip();
        const folder = zip.folder(`${prefix}-Cards`);
        let cardBackAdded = false; // only include the first card-back

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];

            // Skip duplicate card backs — they're all identical
            const isBack = card.classList.contains('card-back');
            if (isBack) {
                if (cardBackAdded) continue; // skip this one
                cardBackAdded = true;        // render & include only the first
            }

            // Get card ID for filename
            const idEl = card.querySelector('.card-id') || card.querySelector('.id');
            let cardId = idEl
                ? idEl.innerText.trim().replace(/·/g, '-').replace(/\s+/g, '-')
                : (isBack ? 'card-back' : `card-${String(i + 1).padStart(3, '0')}`);

            loader.textContent = `⟳ [${i + 1}/${cards.length}] Rendering ${cardId}…`;

            const blob = await _renderCardToBlob(card, format, bgColor);
            folder.file(`${String(i + 1).padStart(3, '0')}_${cardId}.${ext}`, blob);

            // Yield to browser between renders to avoid freezing UI
            await new Promise(r => setTimeout(r, 10));
        }

        loader.textContent = `⟳ Mengemas ZIP (${cards.length} kartu)…`;
        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 },
        });

        const url = URL.createObjectURL(zipBlob);
        const a   = document.createElement('a');
        a.href = url;
        a.download = `${prefix}-AllCards-${TARGET_DPI}DPI.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);

        loader.textContent = `✓ ZIP berhasil! ${cards.length} kartu (${outW}×${outH}px @ ${TARGET_DPI}DPI)`;
        loader.style.color = '#7fff7f';
    } catch (err) {
        console.error('[downloadAllCards]', err);
        loader.textContent = '✗ Gagal: ' + err.message;
        loader.style.color = '#ff6666';
    } finally { setTimeout(() => loader.remove(), 4000); }
}

/** Creates and appends a floating toast loader. Returns the element. */
function _makeLoader(text) {
    const el = document.createElement('div');
    el.style.cssText = `
        position: fixed; top: 16px; right: 16px; z-index: 99999;
        background: rgba(0,0,0,0.90); color: #d4af37;
        font-family: sans-serif; font-size: 12px; font-weight: 700;
        padding: 12px 18px; border-radius: 8px; max-width: 320px;
        border: 1px solid rgba(212,175,55,0.4); letter-spacing: 0.5px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.6); line-height: 1.5;
    `;
    el.textContent = text;
    document.body.appendChild(el);
    return el;
}

// ─── PNG pHYs DPI Metadata Injector ──────────────────────────────────────────
/**
 * Injects a pHYs chunk into a PNG data URL so that image editors
 * and printers interpret the image at the correct physical DPI.
 * @param {string} dataUrl  - PNG data URL from canvas.toDataURL
 * @param {number} dpi      - Target DPI (e.g. 300 or 600)
 * @returns {string}        - PNG data URL with embedded pHYs chunk
 */
function _embedPngDpi(dataUrl, dpi) {
    try {
        const base64 = dataUrl.split(',')[1];
        const binary  = atob(base64);
        const bytes   = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

        // Pixels per metre (1 inch = 25.4mm, 1m = 1000mm)
        const ppm = Math.round(dpi * 1000 / 25.4);

        // Build pHYs data (9 bytes): ppmX(4) + ppmY(4) + unit(1=metre)
        const chunkType = new Uint8Array([0x70, 0x48, 0x59, 0x73]); // "pHYs"
        const chunkData = new Uint8Array(9);
        for (let i = 0; i < 4; i++) {
            chunkData[i]   = (ppm >> (24 - i * 8)) & 0xff; // ppmX
            chunkData[i+4] = chunkData[i];                  // ppmY same as X
        }
        chunkData[8] = 0x01; // unit = metre

        // CRC32 over [chunkType + chunkData]
        const crcBuf = new Uint8Array(13);
        crcBuf.set(chunkType, 0);
        crcBuf.set(chunkData, 4);
        const crc = _crc32(crcBuf);

        // Full pHYs chunk: length(4) + type(4) + data(9) + CRC(4) = 21 bytes
        const phys = new Uint8Array(21);
        phys[3] = 9; // length = 9 (big-endian, top bytes are 0)
        phys.set(chunkType, 4);
        phys.set(chunkData, 8);
        phys[17] = (crc >> 24) & 0xff;
        phys[18] = (crc >> 16) & 0xff;
        phys[19] = (crc >>  8) & 0xff;
        phys[20] =  crc        & 0xff;

        // Insert after IHDR (PNG sig 8B + IHDR chunk 4+4+13+4=25B → offset 33)
        const IHDR_END = 33;
        const result = new Uint8Array(bytes.length + phys.length);
        result.set(bytes.subarray(0, IHDR_END), 0);
        result.set(phys, IHDR_END);
        result.set(bytes.subarray(IHDR_END), IHDR_END + phys.length);

        let out = '';
        result.forEach(b => { out += String.fromCharCode(b); });
        return 'data:image/png;base64,' + btoa(out);
    } catch (e) {
        console.warn('[_embedPngDpi] failed, returning original:', e);
        return dataUrl;
    }
}

/** Standard CRC32 used by the PNG spec */
function _crc32(buf) {
    if (!_crc32._t) {
        _crc32._t = new Uint32Array(256);
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            _crc32._t[i] = c;
        }
    }
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) crc = _crc32._t[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
}
