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
    // Cormorant Garamond 400 normal (Latin)
    'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2',
    // Outfit 400
    'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C5g.woff2',
    // Outfit 700
    'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4g.woff2',
    // RPG Awesome (used by arcana)
    'https://cdn.jsdelivr.net/gh/nagoshiashumari/Rpg-Awesome@master/fonts/rpgawesome-webfont.woff',
    // ── Playfair Display SC (used by newcard Art Deco Luxe) ──
    // Playfair Display SC 400 normal (Latin)
    'https://fonts.gstatic.com/s/playfairdisplaysc/v18/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbkMEA.woff2',
    // Playfair Display SC 700 normal (Latin)
    'https://fonts.gstatic.com/s/playfairdisplaysc/v18/ke80OhoaMkR6-hSn7kbHVoFf7ZfgMPr_nQIpBcwXLg.woff2',
    // Playfair Display SC 900 normal (Latin)
    'https://fonts.gstatic.com/s/playfairdisplaysc/v18/ke80OhoaMkR6-hSn7kbHVoFf7ZfgMPr_nTorBcwXLg.woff2',
    // Playfair Display SC 400 italic (Latin)
    'https://fonts.gstatic.com/s/playfairdisplaysc/v18/ke87OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbw8Eusy.woff2',
    // ── Cormorant Garamond full set (used by newcard Art Deco Luxe) ──
    // Cormorant Garamond 300 normal (Latin)
    'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2',
    // Cormorant Garamond 600 normal (Latin)
    'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2',
    // Cormorant Garamond 400 italic (Latin)
    'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSo.woff2',
    // Cormorant Garamond 600 italic (Latin)
    'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSo.woff2',
];

// Cache for base64-encoded fonts
const _fontCache = {};
let _fontsEmbedded = false;
let _fontStyleEl = null;

// Reset font cache when called (useful for newcard.html which loads after helper)
function resetFontCache() {
    _fontsEmbedded = false;
    if (_fontStyleEl) { _fontStyleEl.remove(); _fontStyleEl = null; }
}

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
                const base64data = reader.result.split(',')[1];
                const fixedDataUrl = `data:font/woff2;charset=utf-8;base64,${base64data}`;
                _fontCache[url] = fixedDataUrl;
                resolve(fixedDataUrl);
            };
            reader.readAsDataURL(blob);
        });
    } catch {
        return null;
    }
}

/**
 * Fetches all Google Fonts referenced in the page's <link> tags,
 * converts each WOFF2 to base64, and stores them in _fontCache.
 * Also injects the CSS into the page for normal browser rendering.
 * 
 * KEY: dom-to-image SVG <foreignObject> cannot load any external URLs.
 * The ONLY working solution is to inline base64 directly inside the SVG string
 * after domtoimage.toSvg() generates it — see _inlineFontsInSvg().
 */
async function _embedFonts() {
    if (_fontsEmbedded) return;

    const gLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]'));
    let cssText = '';

    for (const link of gLinks) {
        try {
            const resp = await fetch(link.href);
            if (resp.ok) cssText += await resp.text() + '\n';
        } catch (e) {
            console.warn('Failed to fetch Google Fonts CSS:', link.href, e);
        }
    }

    if (!cssText) { console.warn('No Google Fonts links found on page.'); }

    // Extract every font URL (woff2, woff, etc)
    const urlRegex = /url\((['"]?)(https:\/\/[^)'"]+)\1\)/g;
    let match;
    const fetchJobs = [];
    while ((match = urlRegex.exec(cssText)) !== null) {
        const fontUrl = match[2];
        if (!_fontCache[fontUrl]) {
            fetchJobs.push(_fetchFontAsBase64(fontUrl)); // pre-cache all
        }
    }
    await Promise.all(fetchJobs);

    // Build page-level @font-face CSS with the cached base64
    let embeddedCss = cssText;
    const replaceRegex2 = /url\((['"]?)(https:\/\/[^)'"]+)\1\)/g;
    embeddedCss = embeddedCss.replace(replaceRegex2, (full, q, url) => {
        const b64 = _fontCache[url];
        return b64 ? `url('${b64}')` : full;
    });

    if (_fontStyleEl) _fontStyleEl.remove();
    _fontStyleEl = document.createElement('style');
    _fontStyleEl.id = '_ww_embedded_fonts';
    _fontStyleEl.textContent = embeddedCss;
    document.head.appendChild(_fontStyleEl);

    await document.fonts.ready;
    _fontsEmbedded = true;
}

/**
 * Post-process an SVG data URL produced by dom-to-image:
 * Replace all https://fonts.gstatic.com/... URL references inside the
 * SVG's own <style> blocks with base64 data URIs from our cache.
 * 
 * This is the ONLY reliable way to embed fonts into SVG <foreignObject>
 * because the browser sandbox blocks all external URL loads in that context.
 */
async function _inlineFontsInSvg(svgDataUrl) {
    const prefix = 'data:image/svg+xml;charset=utf-8,';
    const base64prefix = 'data:image/svg+xml;base64,';
    let svgText;

    if (svgDataUrl.startsWith(base64prefix)) {
        // Base64-encoded SVG — decode safely with TextDecoder
        try {
            const binStr = atob(svgDataUrl.slice(base64prefix.length));
            const bytes = new Uint8Array(binStr.length);
            for (let i = 0; i < binStr.length; i++) bytes[i] = binStr.charCodeAt(i);
            svgText = new TextDecoder('utf-8').decode(bytes);
        } catch (e) {
            console.warn('[_inlineFontsInSvg] base64 decode failed', e);
            return svgDataUrl;
        }
    } else if (svgDataUrl.startsWith(prefix)) {
        // Percent-encoded SVG — use a safe decoder that won't throw on bad sequences
        try {
            svgText = decodeURIComponent(svgDataUrl.slice(prefix.length));
        } catch (e) {
            // Fallback: replace broken sequences minimally
            svgText = svgDataUrl.slice(prefix.length)
                .replace(/%(?![0-9A-Fa-f]{2})/g, '%25');
            try { svgText = decodeURIComponent(svgText); } catch (_) { return svgDataUrl; }
        }
    } else {
        return svgDataUrl; // unknown format, pass through
    }

    // Find all external font URLs inside the SVG string
    const urlRegex = /url\((['"]?)(https:\/\/fonts\.gstatic\.com[^)'"]*)\1\)/g;
    const urlsToFetch = new Set();
    let m;
    while ((m = urlRegex.exec(svgText)) !== null) urlsToFetch.add(m[2]);

    // Fetch any not yet cached
    await Promise.all([...urlsToFetch].map(u => _fetchFontAsBase64(u)));

    // Replace URLs with base64 inline
    svgText = svgText.replace(urlRegex, (full, q, url) => {
        const b64 = _fontCache[url];
        return b64 ? `url('${b64}')` : full;
    });

    // Re-encode safely: convert to base64 to avoid any encodeURIComponent issues
    const encoded = btoa(unescape(encodeURIComponent(svgText)));
    return base64prefix + encoded;
}

// ─── Shared print-quality settings ───────────────────────────────────────────
const _PRINT = {
    TARGET_DPI  : 1200,
    CARD_W_MM   : 54.5,
    CARD_H_MM   : 85.5,
    MM_PER_INCH : 25.4,
    get outW() { return Math.round((this.CARD_W_MM / this.MM_PER_INCH) * this.TARGET_DPI); }, // ~2574px
    get outH() { return Math.round((this.CARD_H_MM / this.MM_PER_INCH) * this.TARGET_DPI); }, // ~4040px
};

/**
 * Shared gradient-text + font fix applied to the html2canvas cloned node.
 * Also injects real <div> elements to replace ::before/::after pseudo-elements
 * on .t2-bg, which html2canvas cannot render natively.
 */
function _fixClonedCard(el, doc) {
    if (_fontStyleEl) doc.head.appendChild(_fontStyleEl.cloneNode(true));

    // ── Pseudo-element polyfill for .t2-bg ──────────────────────────────────
    // html2canvas cannot render ::before / ::after, so we inject real divs
    // that replicate the stripe pattern (::before) and faction gradient (::after).
    el.querySelectorAll('.t2-bg').forEach(bg => {
        const card = bg.closest('.card') || bg.parentElement;

        // ::before  — diagonal gold stripe repeating-linear-gradient
        const stripeBefore = doc.createElement('div');
        stripeBefore.style.cssText = [
            'position:absolute',
            'inset:0',
            'pointer-events:none',
            'z-index:0',
            'background:repeating-linear-gradient(' +
                '45deg,' +
                'transparent,transparent 2mm,' +
                'rgba(212,175,55,0.03) 2mm,' +
                'rgba(212,175,55,0.03) 4mm' +
            ')',
        ].join(';');
        bg.appendChild(stripeBefore);

        // ::after  — faction tint gradient at top of card
        let factionColor = null;
        if (card && card.classList.contains('faction-supreme')) factionColor = 'rgba(138,43,226,0.15)';
        else if (card && card.classList.contains('faction-good'))    factionColor = 'rgba(65,131,215,0.10)';
        else if (card && card.classList.contains('faction-evil'))    factionColor = 'rgba(220,20,60,0.15)';
        else if (card && card.classList.contains('faction-neutral')) factionColor = 'rgba(160,160,160,0.10)';

        if (factionColor) {
            const stripeAfter = doc.createElement('div');
            stripeAfter.style.cssText = [
                'position:absolute',
                'top:0',
                'left:0',
                'right:0',
                'height:40%',
                'pointer-events:none',
                'z-index:0',
                `background:linear-gradient(180deg,${factionColor} 0%,transparent 100%)`,
            ].join(';');
            bg.appendChild(stripeAfter);
        }
    });
    // ────────────────────────────────────────────────────────────────────────

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

// ─── dom-to-image-more based downloader (supports ::before/::after) ──────────
/**
 * Download a single card using dom-to-image-more.
 * Supports pseudo-elements (::before, ::after) unlike html2canvas.
 * Requires: <script src="https://cdn.jsdelivr.net/npm/dom-to-image-more@2.8.0/dist/dom-to-image-more.min.js">
 *
 * @param {HTMLElement} card     - The .card element to capture
 * @param {string}      filename - Base filename without extension
 * @param {object}      options  - { format: 'png'|'jpg', bgColor: '#hex'|null }
 */
async function downloadCardDomToImage(card, filename, options = {}) {
    if (typeof domtoimage === 'undefined') {
        console.warn('[downloadCardDomToImage] dom-to-image-more not loaded, falling back to html2canvas');
        return downloadCardFaithful(card, filename, options);
    }
    const format  = (options.format || 'png').toLowerCase();
    const ext     = format === 'jpg' ? 'jpg' : 'png';
    const bgColor = options.bgColor || null;
    const { outW, outH } = _PRINT;

    const loader = _makeLoader('⟳ Rendering…');
    try {
        await _embedFonts();
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 80));

        const scale = outW / (card.offsetWidth || 1);
        const param = {
            height: card.offsetHeight * scale,
            width:  card.offsetWidth  * scale,
            style:  {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width:  card.offsetWidth  + 'px',
                height: card.offsetHeight + 'px',
            },
            bgcolor: bgColor || undefined,
            quality: 1,
            // Inject embedded font stylesheet into the cloned node directly
            onclone: (clonedNode) => {
                if (_fontStyleEl) {
                    const s = _fontStyleEl.cloneNode(true);
                    clonedNode.prepend(s);
                }
                // Also copy all existing stylesheets to preserve CSS variables
                document.querySelectorAll('style').forEach(orig => {
                    const clone = document.createElement('style');
                    clone.textContent = orig.textContent;
                    clonedNode.prepend(clone);
                });
            },
        };

        // Step 1: get raw SVG from dom-to-image
        let svgDataUrl = await domtoimage.toSvg(card, param);
        
        // Step 2: inline all font URLs as base64 directly inside the SVG string.
        // This is the ONLY method that works — SVG <foreignObject> sandbox blocks
        // all external URL loads, so prepend/onclone approaches fail.
        svgDataUrl = await _inlineFontsInSvg(svgDataUrl);

        // Step 3: Render to canvas
        const img = new Image();
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = svgDataUrl;
        });

        const canvas = document.createElement('canvas');
        canvas.width = param.width; 
        canvas.height = param.height;
        const ctx = canvas.getContext('2d');
        if (param.bgcolor) { 
            ctx.fillStyle = param.bgcolor; 
            ctx.fillRect(0, 0, canvas.width, canvas.height); 
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL(format === 'jpg' ? 'image/jpeg' : 'image/png', 0.98);

        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `${filename}.${ext}`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);

        loader.textContent = `✓ Selesai! (${outW}×${outH}px)`;
        loader.style.color = '#7fff7f';
    } catch (err) {
        console.error('[downloadCardDomToImage]', err);
        loader.textContent = '✗ Gagal render'; loader.style.color = '#ff6666';
    } finally { setTimeout(() => loader.remove(), 3000); }
}

/**
 * Download ALL .card elements as ZIP using dom-to-image-more.
 * Requires JSZip + dom-to-image-more.
 *
 * @param {string} prefix   - ZIP & filename prefix
 * @param {object} options  - { format: 'png'|'jpg', bgColor: '#hex'|null }
 */
async function downloadAllCardsDomToImage(prefix = 'Werewolf', options = {}) {
    if (typeof domtoimage === 'undefined') {
        console.warn('[downloadAllCardsDomToImage] dom-to-image-more not loaded, falling back to html2canvas');
        return downloadAllCards(prefix, options);
    }
    if (typeof JSZip === 'undefined') {
        alert('JSZip tidak ditemukan. Pastikan halaman sudah selesai dimuat.'); return;
    }
    const format  = (options.format || 'png').toLowerCase();
    const ext     = format === 'jpg' ? 'jpg' : 'png';
    const bgColor = options.bgColor || null;
    const { outW, outH, TARGET_DPI } = _PRINT;

    const allCards = Array.from(document.querySelectorAll('.card'));
    if (!allCards.length) { alert('Tidak ada kartu ditemukan.'); return; }

    // ── Multi-range picker dialog ────────────────────────────────────────────
    const selectedIndices = await _showRangeDialog(allCards.length);
    if (!selectedIndices) return; // user cancelled
    const cards = selectedIndices.map(i => allCards[i - 1]); // 1-indexed → elements
    // ─────────────────────────────────────────────────────────────────────────

    const loader = _makeLoader('⟳ Mempersiapkan font…');
    try {
        await _embedFonts();
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 80));

        const zip = new JSZip();
        const folder = zip.folder(`${prefix}-Cards`);
        let cardBackAdded = false;
        let zippedCount = 0;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const globalIdx = selectedIndices[i]; // 1-indexed global position
            const idEl = card.querySelector('.card-id') || card.querySelector('.id');
            const isBack = card.classList.contains('theme-back') ||
                           card.classList.contains('card-back') ||
                           !idEl;
            if (isBack) {
                if (cardBackAdded) continue;
                cardBackAdded = true;
            }

            let cardId = idEl
                ? idEl.innerText.trim().replace(/·/g, '-').replace(/\s+/g, '-')
                : 'card-back';

            loader.textContent = `⟳ [${i + 1}/${cards.length}] Rendering ${cardId}…`;

            const scale = outW / (card.offsetWidth || 1);
            const param = {
                height: card.offsetHeight * scale,
                width:  card.offsetWidth  * scale,
                style: {
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width:  card.offsetWidth  + 'px',
                    height: card.offsetHeight + 'px',
                    boxShadow: 'none',
                },
                bgcolor: bgColor || undefined,
                quality: 1,
                onclone: (clonedNode) => {
                    if (_fontStyleEl) {
                        const s = _fontStyleEl.cloneNode(true);
                        clonedNode.prepend(s);
                    }
                    document.querySelectorAll('style').forEach(orig => {
                        const clone = document.createElement('style');
                        clone.textContent = orig.textContent;
                        clonedNode.prepend(clone);
                    });
                },
            };

            let svgDataUrl = await domtoimage.toSvg(card, param);
            svgDataUrl = await _inlineFontsInSvg(svgDataUrl);

            const img = new Image();
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
                img.src = svgDataUrl;
            });

            const canvas = document.createElement('canvas');
            canvas.width = param.width; 
            canvas.height = param.height;
            const ctx = canvas.getContext('2d');
            if (param.bgcolor) { 
                ctx.fillStyle = param.bgcolor; 
                ctx.fillRect(0, 0, canvas.width, canvas.height); 
            }
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const dataUrl = canvas.toDataURL(format === 'jpg' ? 'image/jpeg' : 'image/png', 0.98);

            const b64 = dataUrl.split(',')[1];
            const bin = atob(b64);
            const bytes = new Uint8Array(bin.length);
            for (let j = 0; j < bin.length; j++) bytes[j] = bin.charCodeAt(j);
            const blob = new Blob([bytes], { type: format === 'jpg' ? 'image/jpeg' : 'image/png' });

            folder.file(`${String(globalIdx).padStart(3, '0')}_${cardId}.${ext}`, blob);
            zippedCount++;

            await new Promise(r => setTimeout(r, 10));
        }

        loader.textContent = `⟳ Mengemas ZIP (${zippedCount} kartu)…`;
        const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });

        const rangeLabel = _indicesToRangeLabel(selectedIndices);
        const url = URL.createObjectURL(zipBlob);
        const a   = document.createElement('a');
        a.href = url;
        a.download = `${prefix}-Cards-[${rangeLabel}]-${TARGET_DPI}DPI.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);

        loader.textContent = `✓ ZIP berhasil! ${zippedCount} kartu (${rangeLabel})`;
        loader.style.color = '#7fff7f';
    } catch (err) {
        console.error('[downloadAllCardsDomToImage]', err);
        loader.textContent = '✗ Gagal: ' + err.message;
        loader.style.color = '#ff6666';
    } finally { setTimeout(() => loader.remove(), 4000); }
}

/**
 * Renders a single .card element to a Blob at print quality.
 * @returns {Promise<Blob>}
 */
async function _renderCardToBlob(card, format, bgColor) {
    const { outW, outH, TARGET_DPI } = _PRINT;
    const cssW = card.offsetWidth || 1;
    // Scale exactly to the target 600 DPI resolution, removing unnecessary 3.5x overhead
    // This makes rendering 12x faster while perfectly maintaining physical print quality.
    const HIGH_SCALE = outW / cssW;

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

    const allCards = Array.from(document.querySelectorAll('.card'));
    if (!allCards.length) { alert('Tidak ada kartu ditemukan.'); return; }

    // ── Multi-range picker dialog ────────────────────────────────────────────
    const selectedIndices = await _showRangeDialog(allCards.length);
    if (!selectedIndices) return; // user cancelled
    const cards = selectedIndices.map(i => allCards[i - 1]); // 1-indexed → elements
    // ─────────────────────────────────────────────────────────────────────────

    const loader = _makeLoader(`⟳ Mempersiapkan font…`);
    try {
        await _embedFonts();
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 80));

        const zip = new JSZip();
        const folder = zip.folder(`${prefix}-Cards`);
        let cardBackAdded = false; // only include the first card-back
        let zippedCount = 0;       // tracks actual number of cards added

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const globalIdx = selectedIndices[i]; // 1-indexed global position

            // Get card ID element first for reliable back-card detection
            const idEl = card.querySelector('.card-id') || card.querySelector('.id');
            
            // Skip duplicate card backs — they're all identical
            const isBack = card.classList.contains('theme-back') || 
                           card.classList.contains('card-back') || 
                           !idEl;
                           
            if (isBack) {
                if (cardBackAdded) continue; // skip this one
                cardBackAdded = true;        // render & include only the first
            }

            let cardId = idEl
                ? idEl.innerText.trim().replace(/·/g, '-').replace(/\s+/g, '-')
                : 'card-back';

            loader.textContent = `⟳ [${i + 1}/${cards.length}] Rendering ${cardId}…`;

            const blob = await _renderCardToBlob(card, format, bgColor);
            folder.file(`${String(globalIdx).padStart(3, '0')}_${cardId}.${ext}`, blob);
            zippedCount++;

            // Yield to browser between renders to avoid freezing UI
            await new Promise(r => setTimeout(r, 10));
        }

        loader.textContent = `⟳ Mengemas ZIP (${zippedCount} kartu)…`;
        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'STORE', // Images are already compressed, avoid wasting CPU
        });

        const rangeLabel = _indicesToRangeLabel(selectedIndices);
        const url = URL.createObjectURL(zipBlob);
        const a   = document.createElement('a');
        a.href = url;
        a.download = `${prefix}-Cards-[${rangeLabel}]-${TARGET_DPI}DPI.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);

        loader.textContent = `✓ ZIP berhasil! ${zippedCount} kartu (${rangeLabel}, ${outW}×${outH}px @ ${TARGET_DPI}DPI)`;
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

/**
 * Parse a multi-range string like "1-5, 12-17, 22, 44-55"
 * into a sorted, deduplicated array of 1-indexed integers.
 * Returns null if there are any invalid tokens.
 *
 * @param {string} input - The user-typed range expression
 * @param {number} total - Maximum allowed index
 * @returns {{ indices: number[], error: string|null }}
 */
function _parseMultiRange(input, total) {
    const parts = input.split(',').map(s => s.trim()).filter(Boolean);
    if (!parts.length) return { indices: null, error: 'Input kosong.' };

    const set = new Set();
    for (const part of parts) {
        const rangePat = /^(\d+)\s*[-–]\s*(\d+)$/.exec(part);
        const singlePat = /^(\d+)$/.exec(part);
        if (rangePat) {
            const a = parseInt(rangePat[1], 10);
            const b = parseInt(rangePat[2], 10);
            if (a < 1 || b > total || a > b) return { indices: null, error: `Range "${part}" tidak valid (1–${total}).` };
            for (let n = a; n <= b; n++) set.add(n);
        } else if (singlePat) {
            const n = parseInt(singlePat[1], 10);
            if (n < 1 || n > total) return { indices: null, error: `Nomor "${part}" di luar rentang (1–${total}).` };
            set.add(n);
        } else {
            return { indices: null, error: `Token "${part}" tidak dikenali.` };
        }
    }
    return { indices: [...set].sort((a, b) => a - b), error: null };
}

/**
 * Convert a sorted array of indices back to a compact range string,
 * e.g. [1,2,3,5,7,8] → "1-3,5,7-8"
 *
 * @param {number[]} indices - Sorted 1-indexed array
 * @returns {string}
 */
function _indicesToRangeLabel(indices) {
    if (!indices || !indices.length) return '';
    const segments = [];
    let start = indices[0], end = indices[0];
    for (let i = 1; i < indices.length; i++) {
        if (indices[i] === end + 1) {
            end = indices[i];
        } else {
            segments.push(start === end ? `${start}` : `${start}-${end}`);
            start = end = indices[i];
        }
    }
    segments.push(start === end ? `${start}` : `${start}-${end}`);
    return segments.join(',');
}

/**
 * Shows a modal dialog to let the user choose cards using a multi-range expression.
 * Supports syntax like: "1-5, 12-17, 22, 44-55"
 * Returns a Promise that resolves to a sorted number[] of 1-indexed card positions,
 * or null if the user cancelled.
 *
 * @param {number} total - Total number of cards available
 * @returns {Promise<number[]|null>}
 */
function _showRangeDialog(total) {
    return new Promise((resolve) => {
        // Overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = [
            'position:fixed', 'inset:0', 'z-index:999998',
            'background:rgba(0,0,0,0.80)',
            'display:flex', 'align-items:center', 'justify-content:center',
        ].join(';');

        // Dialog box
        const box = document.createElement('div');
        box.style.cssText = [
            'background:#12100a',
            'border:1.5px solid rgba(212,175,55,0.55)',
            'border-radius:14px',
            'padding:28px 32px 24px',
            'width:420px',
            'max-width:95vw',
            'box-shadow:0 12px 60px rgba(0,0,0,0.9)',
            'font-family:sans-serif',
            'color:#e8d5a3',
        ].join(';');

        box.innerHTML = `
            <div style="font-size:15px;font-weight:700;letter-spacing:1.5px;color:#d4af37;margin-bottom:4px;">🃏 PILIH KARTU</div>
            <div style="font-size:11px;color:#777;margin-bottom:18px;">Total tersedia: <strong style="color:#d4af37">${total}</strong> kartu</div>

            <label style="display:block;font-size:10px;letter-spacing:1px;color:#aaa;margin-bottom:6px;">NOMOR KARTU / RANGE</label>
            <input id="_wd_range" type="text" placeholder="mis. 1-5, 12-17, 22, 44-55"
                style="width:100%;box-sizing:border-box;background:#0a0a08;border:1.5px solid rgba(212,175,55,0.45);border-radius:8px;color:#f0d070;font-size:15px;font-weight:600;padding:10px 14px;outline:none;letter-spacing:.5px;">

            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;" id="_wd_presets">
                <span style="font-size:10px;color:#666;align-self:center;">Cepat:</span>
                <button data-v="1-${total}"  style="font-size:10px;padding:3px 9px;border-radius:5px;border:1px solid rgba(212,175,55,0.3);background:rgba(212,175,55,0.08);color:#d4af37;cursor:pointer;">Semua</button>
                <button data-v="1-9"   style="font-size:10px;padding:3px 9px;border-radius:5px;border:1px solid rgba(212,175,55,0.3);background:rgba(212,175,55,0.08);color:#d4af37;cursor:pointer;">1–9</button>
                <button data-v="10-18" style="font-size:10px;padding:3px 9px;border-radius:5px;border:1px solid rgba(212,175,55,0.3);background:rgba(212,175,55,0.08);color:#d4af37;cursor:pointer;">10–18</button>
                <button data-v="19-27" style="font-size:10px;padding:3px 9px;border-radius:5px;border:1px solid rgba(212,175,55,0.3);background:rgba(212,175,55,0.08);color:#d4af37;cursor:pointer;">19–27</button>
            </div>

            <div id="_wd_hint" style="font-size:10.5px;min-height:16px;margin:14px 0 18px;padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.03);color:#888;"></div>

            <div style="display:flex;gap:10px;">
                <button id="_wd_cancel" style="flex:1;padding:10px;border:1px solid rgba(212,175,55,0.3);background:transparent;color:#888;border-radius:8px;cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.5px;">Batal</button>
                <button id="_wd_ok"     style="flex:2;padding:10px;border:none;background:linear-gradient(135deg,#b8860b,#d4af37);color:#000;border-radius:8px;cursor:pointer;font-size:13px;font-weight:700;letter-spacing:.8px;">▶ Download</button>
            </div>
        `;

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        const rangeEl   = box.querySelector('#_wd_range');
        const hintEl    = box.querySelector('#_wd_hint');
        const okBtn     = box.querySelector('#_wd_ok');
        const cancelBtn = box.querySelector('#_wd_cancel');

        // Preset buttons
        box.querySelectorAll('#_wd_presets button').forEach(btn => {
            btn.addEventListener('click', () => {
                rangeEl.value = btn.dataset.v;
                _validate();
                okBtn.focus();
            });
        });

        let _lastIndices = null;

        function _validate() {
            const raw = rangeEl.value.trim();
            if (!raw) {
                hintEl.textContent = 'Masukkan nomor kartu, mis. 1-5, 12, 44-55';
                hintEl.style.color = '#666';
                okBtn.disabled = true;
                okBtn.style.opacity = '0.4';
                _lastIndices = null;
                return false;
            }
            const { indices, error } = _parseMultiRange(raw, total);
            if (error) {
                hintEl.textContent = '⚠ ' + error;
                hintEl.style.color = '#ff7777';
                okBtn.disabled = true;
                okBtn.style.opacity = '0.4';
                _lastIndices = null;
                return false;
            }
            _lastIndices = indices;
            const label = _indicesToRangeLabel(indices);
            hintEl.innerHTML = `✓ <strong style="color:#d4af37">${indices.length}</strong> kartu dipilih &nbsp;·&nbsp; <span style="color:#aaa">${label}</span>`;
            hintEl.style.color = '#7fd47f';
            okBtn.disabled = false;
            okBtn.style.opacity = '1';
            return true;
        }

        rangeEl.addEventListener('input', _validate);

        // Pre-fill with "all" and validate
        rangeEl.value = `1-${total}`;
        _validate();
        setTimeout(() => { rangeEl.select(); rangeEl.focus(); }, 50);

        function _close(result) {
            overlay.remove();
            resolve(result);
        }

        okBtn.addEventListener('click', () => {
            if (!_validate()) return;
            _close(_lastIndices);
        });

        cancelBtn.addEventListener('click', () => _close(null));
        overlay.addEventListener('click', (e) => { if (e.target === overlay) _close(null); });

        box.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); okBtn.click(); }
            if (e.key === 'Escape') _close(null);
        });
    });
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

// ─── Print Guide Overlay System ────────────────────────────────────────────────
/**
 * Print Guide: tampilkan garis bantu berupa outline kertas (A4/F4/A3/A3+)
 * yang diinjeksi langsung ke dalam setiap elemen .page menggunakan CSS mm units.
 * Toolbar floating di pojok kiri bawah.
 *
 * Ukuran kertas standar (portrait, dalam mm):
 *   A4    : 210 × 297
 *   F4    : 215 × 330  (Folio / Legal Indonesia)
 *   A3    : 297 × 420
 *   A3+   : 329 × 483  (Super B / 13×19")
 */
(function _initPrintGuide() {
    const PAPERS = [
        { id: 'a4',     label: 'A4',  wMm: 210, hMm: 297, color: '#4fc3f7' },
        { id: 'f4',     label: 'F4',  wMm: 215, hMm: 330, color: '#81c784' },
        { id: 'a3',     label: 'A3',  wMm: 297, hMm: 420, color: '#ffb74d' },
        { id: 'a3plus', label: 'A3+', wMm: 329, hMm: 483, color: '#ce93d8' },
    ];

    const OV_CLASS   = '_pg_overlay';
    const CROP_CLASS = '_pg_crop';

    let _guideVisible  = false;
    let _cropMarksOn   = true;       // crop marks default ON when guide is ON
    let _activeGuides  = new Set(['a4', 'f4', 'a3', 'a3plus']);
    let _toolbar       = null;

    function _injectBaseCSS() {
        if (document.getElementById('_pg_base_css')) return;
        const s = document.createElement('style');
        s.id = '_pg_base_css';
        // Paper overlays: screen only.  Crop marks: visible during print too.
        // NOTE: _pg_crop (SVG garis potong) sengaja TIDAK disembunyikan agar ikut tercetak.
        s.textContent = `
            @media print {
                .${OV_CLASS}, #_pg_toolbar, #_pcs_trigger { display:none!important }
                .${CROP_CLASS} {
                    display:block!important;
                    position:absolute!important;
                    top:0!important; left:0!important;
                    pointer-events:none!important;
                    z-index:99992!important;
                    overflow:visible!important;
                    -webkit-print-color-adjust:exact!important;
                    print-color-adjust:exact!important;
                }
            }
        `;
        document.head.appendChild(s);

        // Redraw crop marks with fresh pixel coords just before browser prints.
        // getBoundingClientRect() returns different values in print layout,
        // so we must redraw to get the correct print-time positions.
        window.addEventListener('beforeprint', function() {
            if (_cropMarksOn) {
                // Remove stale screen-coord SVGs and inject fresh print-coord ones
                _clearCropMarks();
                _drawCropMarks();
            }
        });

        window.addEventListener('afterprint', function() {
            // Redraw with screen coords after print dialog closes
            if (_cropMarksOn) {
                _clearCropMarks();
                _drawCropMarks();
            }
        });
    }

    function _clearOverlays() {
        // Only remove the paper-outline overlays, not the crop marks SVGs.
        document.querySelectorAll('.' + OV_CLASS).forEach(el => el.remove());
    }

    function _clearCropMarks() {
        document.querySelectorAll('.' + CROP_CLASS).forEach(el => el.remove());
    }

    /**
     * Build one paper-outline overlay using CSS mm units.
     * Injected as position:absolute inside .page (which is position:relative).
     * CSS mm automatically matches the browser's page layout — no pixel math needed.
     */
    function _makeOverlay(paper, pageW_mm, pageH_mm) {
        const offX = (pageW_mm - paper.wMm) / 2;
        const offY = (pageH_mm - paper.hMm) / 2;

        const wrap = document.createElement('div');
        wrap.className = OV_CLASS;
        wrap.setAttribute('data-paper', paper.id);
        wrap.style.cssText = [
            'position:absolute',
            'pointer-events:none',
            'z-index:99990',
            `left:${offX}mm`,
            `top:${offY}mm`,
            `width:${paper.wMm}mm`,
            `height:${paper.hMm}mm`,
            'box-sizing:border-box',
            `border:0.5mm dashed ${paper.color}`,
            'border-radius:0.5mm',
        ].join(';');

        // Label badge
        const badge = document.createElement('div');
        badge.style.cssText = [
            'position:absolute', 'top:0', 'left:0',
            `background:${paper.color}`,
            'color:#000', 'font-size:8px', 'font-weight:900',
            'font-family:sans-serif', 'letter-spacing:.5px',
            'padding:1px 6px', 'border-radius:0 0 3px 0',
            'line-height:16px', 'white-space:nowrap',
        ].join(';');
        badge.textContent = `${paper.label}  ${paper.wMm}×${paper.hMm}mm`;
        wrap.appendChild(badge);

        // Corner crosshairs (4 corners)
        [
            { top: '-4mm',    left: '-4mm'  },
            { top: '-4mm',    right: '-4mm' },
            { bottom: '-4mm', left: '-4mm'  },
            { bottom: '-4mm', right: '-4mm' },
        ].forEach(pos => {
            const c = document.createElement('div');
            const posCSS = Object.entries(pos).map(([k, v]) => `${k}:${v}`).join(';');
            c.style.cssText = `position:absolute;width:8mm;height:8mm;pointer-events:none;${posCSS}`;
            c.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="0" x2="4" y2="8" stroke="${paper.color}" stroke-width="0.7" opacity="0.85"/>
                <line x1="0" y1="4" x2="8" y2="4" stroke="${paper.color}" stroke-width="0.7" opacity="0.85"/>
                <circle cx="4" cy="4" r="0.9" fill="${paper.color}"/>
            </svg>`;
            wrap.appendChild(c);
        });

        // Faint centre guides
        const hRule = document.createElement('div');
        hRule.style.cssText = `position:absolute;top:${paper.hMm/2}mm;left:0;width:${paper.wMm}mm;height:0;border-top:0.2mm dashed ${paper.color};opacity:0.20;`;
        wrap.appendChild(hRule);

        const vRule = document.createElement('div');
        vRule.style.cssText = `position:absolute;left:${paper.wMm/2}mm;top:0;width:0;height:${paper.hMm}mm;border-left:0.2mm dashed ${paper.color};opacity:0.20;`;
        wrap.appendChild(vRule);

        return wrap;
    }

    function _drawGuides() {
        _clearOverlays();
        if (!_guideVisible) return;

        const pages = Array.from(document.querySelectorAll('.page'));
        if (!pages.length) return;

        pages.forEach(page => {
            // Ensure .page can host absolutely-positioned children
            const cs = getComputedStyle(page);
            if (cs.position === 'static') page.style.position = 'relative';

            // Measure page size in mm using a temporary mm-ruler injected into the page.
            // This way we don't need any viewport pixel math — CSS mm units match exactly.
            const ruler = document.createElement('div');
            ruler.style.cssText = 'position:absolute;width:100mm;height:0;visibility:hidden;pointer-events:none;top:0;left:0;';
            page.appendChild(ruler);
            const ppm = ruler.getBoundingClientRect().width / 100; // px per mm
            ruler.remove();

            const rect = page.getBoundingClientRect();
            const pageW_mm = rect.width  / ppm;
            const pageH_mm = rect.height / ppm;

            const currentPaperSize = document.getElementById('paper-size')?.value;
            PAPERS.forEach(paper => {
                // If single is selected, don't show any print outline, or if defined, only show matching
                if (currentPaperSize && currentPaperSize !== 'single') {
                    if (paper.id !== currentPaperSize) return;
                } else if (!currentPaperSize) {
                    if (!_activeGuides.has(paper.id)) return;
                } else {
                    return; // single or unknown
                }
                
                page.appendChild(_makeOverlay(paper, pageW_mm, pageH_mm));
            });
        });
    }
    /**
     * Draw crop marks (garis potong) at the corner of each .card using SVG.
     * One <svg> element is injected per .page — SVG renders reliably in print
     * preview, unlike zero-height divs with borders.
     * overflow:visible lets lines extend outside the SVG's own bounding box
     * into the gap area between cards.
     */
    function _drawCropMarks() {
        _clearCropMarks();
        if (!_cropMarksOn) return;

        const NS = 'http://www.w3.org/2000/svg';

        document.querySelectorAll('.page').forEach(page => {
            const cs = getComputedStyle(page);
            if (cs.position === 'static') page.style.position = 'relative';

            // Measure px-per-mm via a temporary ruler div
            const ruler = document.createElement('div');
            ruler.style.cssText = 'position:absolute;width:100mm;height:0;visibility:hidden;pointer-events:none;top:0;left:0;';
            page.appendChild(ruler);
            const ppm = ruler.getBoundingClientRect().width / 100; // px per mm
            ruler.remove();

            const pageRect = page.getBoundingClientRect();
            const pageW    = pageRect.width;
            const pageH    = pageRect.height;

            // One SVG that covers the entire .page, overflow:visible so
            // lines can extend into the gap between cards
            const svg = document.createElementNS(NS, 'svg');
            svg.classList.add(CROP_CLASS);
            svg.setAttribute('xmlns', NS);
            svg.setAttribute('width',  pageW);
            svg.setAttribute('height', pageH);
            svg.setAttribute('viewBox', `0 0 ${pageW} ${pageH}`);
            svg.style.cssText = [
                'position:absolute', 'top:0', 'left:0',
                'pointer-events:none',
                'z-index:99992',
                'overflow:visible',
                '-webkit-print-color-adjust:exact',
                'print-color-adjust:exact',
            ].join(';');

            const MARK_PX = 3   * ppm;   // 3 mm
            const GAP_PX  = 0.8 * ppm;   // 0.8 mm gap from card edge
            const STR_W   = Math.max(0.5, 0.3 * ppm); // stroke width ≥ 0.5px

            page.querySelectorAll('.card, .card-wrapper').forEach(card => {
                const cRect = card.getBoundingClientRect();

                // Card position in px relative to .page
                const cx0 = cRect.left - pageRect.left;
                const cy0 = cRect.top  - pageRect.top;
                const cx1 = cx0 + cRect.width;
                const cy1 = cy0 + cRect.height;

                // [corner x, corner y, h-direction, v-direction]
                const corners = [
                    [cx0, cy0, -1, -1],   // top-left
                    [cx1, cy0, +1, -1],   // top-right
                    [cx0, cy1, -1, +1],   // bottom-left
                    [cx1, cy1, +1, +1],   // bottom-right
                ];

                corners.forEach(([cx, cy, hd, vd]) => {
                    // Horizontal arm
                    const hx1 = hd < 0 ? cx - GAP_PX - MARK_PX : cx + GAP_PX;
                    const hx2 = hd < 0 ? cx - GAP_PX            : cx + GAP_PX + MARK_PX;
                    const hLine = document.createElementNS(NS, 'line');
                    hLine.setAttribute('x1', hx1); hLine.setAttribute('y1', cy);
                    hLine.setAttribute('x2', hx2); hLine.setAttribute('y2', cy);
                    hLine.setAttribute('stroke', '#000');
                    hLine.setAttribute('stroke-width', STR_W);
                    hLine.setAttribute('stroke-linecap', 'butt');
                    svg.appendChild(hLine);

                    // Vertical arm
                    const vy1 = vd < 0 ? cy - GAP_PX - MARK_PX : cy + GAP_PX;
                    const vy2 = vd < 0 ? cy - GAP_PX            : cy + GAP_PX + MARK_PX;
                    const vLine = document.createElementNS(NS, 'line');
                    vLine.setAttribute('x1', cx); vLine.setAttribute('y1', vy1);
                    vLine.setAttribute('x2', cx); vLine.setAttribute('y2', vy2);
                    vLine.setAttribute('stroke', '#000');
                    vLine.setAttribute('stroke-width', STR_W);
                    vLine.setAttribute('stroke-linecap', 'butt');
                    svg.appendChild(vLine);
                });
            });

            page.appendChild(svg);
        });
    }

    function _buildToolbar() {
        if (_toolbar) return;
        _injectBaseCSS();

        _toolbar = document.createElement('div');
        _toolbar.id = '_pg_toolbar';
        _toolbar.style.cssText = [
            'position:fixed', 'bottom:20px', 'left:20px',
            'z-index:99997',
            'background:rgba(10,8,4,0.93)',
            'border:1.5px solid rgba(212,175,55,0.45)',
            'border-radius:12px',
            'padding:10px 14px 12px',
            'font-family:sans-serif',
            'box-shadow:0 6px 32px rgba(0,0,0,0.7)',
            'user-select:none',
            'min-width:210px',
        ].join(';');

        // Header
        const header = document.createElement('div');
        header.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:10px;';

        const title = document.createElement('span');
        title.style.cssText = 'flex:1;font-size:11px;font-weight:800;letter-spacing:1.2px;color:#d4af37;';
        title.textContent = '📐 GARIS BANTU CETAK';

        const toggleBtn = document.createElement('button');
        toggleBtn.id = '_pg_toggle';
        toggleBtn.style.cssText = [
            'background:linear-gradient(135deg,#7a3200,#c04000)',
            'color:#fff', 'border:none', 'border-radius:5px',
            'font-size:10px', 'font-weight:800', 'letter-spacing:.7px',
            'padding:3px 10px', 'cursor:pointer', 'min-width:36px',
        ].join(';');
        toggleBtn.textContent = 'OFF';

        function _setToggleState(on) {
            _guideVisible = on;
            toggleBtn.textContent = on ? 'ON' : 'OFF';
            toggleBtn.style.background = on
                ? 'linear-gradient(135deg,#1b5e20,#43a047)'
                : 'linear-gradient(135deg,#7a3200,#c04000)';
            _drawGuides();
            _drawCropMarks();
        }

        toggleBtn.addEventListener('click', () => _setToggleState(!_guideVisible));

        header.appendChild(title);
        header.appendChild(toggleBtn);
        _toolbar.appendChild(header);

        // Automatically bind to main paper-size dropdown to auto-redraw
        const mainPaperSelect = document.getElementById('paper-size');
        if (mainPaperSelect) {
            mainPaperSelect.addEventListener('change', () => {
                // Short timeout to let the page restructure finish before drawing guides
                setTimeout(() => { if (_guideVisible) _drawGuides(); _drawCropMarks(); }, 50);
            });
        }


        // ── Divider ───────────────────────────────────────────────────────────
        const divider = document.createElement('div');
        divider.style.cssText = 'border-top:1px solid rgba(212,175,55,0.15);margin:10px -2px 8px;';
        _toolbar.appendChild(divider);

        // ── Crop Marks toggle row ─────────────────────────────────────────────
        const cropRow = document.createElement('div');
        cropRow.style.cssText = 'display:flex;align-items:center;gap:8px;';

        const cropLabel = document.createElement('span');
        cropLabel.style.cssText = 'flex:1;font-size:10.5px;font-weight:700;color:#e8d5a3;letter-spacing:.3px;';
        cropLabel.textContent = '\u2702 Garis Potong Kartu';

        const cropBtn = document.createElement('button');
        cropBtn.style.cssText = [
            'background:linear-gradient(135deg,#1b5e20,#43a047)',
            'color:#fff', 'border:none', 'border-radius:5px',
            'font-size:10px', 'font-weight:800', 'letter-spacing:.7px',
            'padding:3px 8px', 'cursor:pointer', 'min-width:36px',
        ].join(';');
        cropBtn.textContent = 'ON';
        cropBtn.addEventListener('click', () => {
            _cropMarksOn = !_cropMarksOn;
            cropBtn.textContent = _cropMarksOn ? 'ON' : 'OFF';
            cropBtn.style.background = _cropMarksOn
                ? 'linear-gradient(135deg,#1b5e20,#43a047)'
                : 'linear-gradient(135deg,#7a3200,#c04000)';
            _drawCropMarks();
        });

        cropRow.appendChild(cropLabel);
        cropRow.appendChild(cropBtn);
        _toolbar.appendChild(cropRow);

        const cropHint = document.createElement('div');
        cropHint.style.cssText = 'font-size:8.5px;color:#555;margin-top:4px;line-height:1.4;';
        cropHint.textContent = 'Panduan potong kartu \u2014 ikut tercetak';
        _toolbar.appendChild(cropHint);

        // Refresh button
        const refreshBtn = document.createElement('button');
        refreshBtn.style.cssText = [
            'margin-top:10px', 'width:100%',
            'background:rgba(212,175,55,0.08)',
            'border:1px solid rgba(212,175,55,0.3)',
            'color:#d4af37', 'border-radius:5px',
            'font-size:10px', 'font-weight:700', 'letter-spacing:.5px',
            'padding:5px', 'cursor:pointer',
        ].join(';');
        refreshBtn.textContent = '\u27f3 Refresh Posisi';
        refreshBtn.addEventListener('click', () => { _drawGuides(); _drawCropMarks(); });
        _toolbar.appendChild(refreshBtn);

        document.body.appendChild(_toolbar);

        // Redraw on scroll / resize (debounced)
        let _raf = null;
        const _redraw = () => {
            if (_raf) cancelAnimationFrame(_raf);
            _raf = requestAnimationFrame(() => { _drawGuides(); _drawCropMarks(); });
        };
        window.addEventListener('scroll', () => { if (_guideVisible) _redraw(); }, { passive: true });
        window.addEventListener('resize', () => { if (_guideVisible) _redraw(); }, { passive: true });
    }

    // Auto-init after DOM ready — wait for document.body
    function _init() {
        if(window.location.search.includes('preview=1')) return;
        if (document.body) {
            _buildToolbar();
        } else {
            document.addEventListener('DOMContentLoaded', _buildToolbar);
        }
    }

    // Expose globally so pages can call togglePrintGuide() if needed
    window.togglePrintGuide = function() {
        _guideVisible = !_guideVisible;
        const btn = document.getElementById('_pg_toggle');
        if (btn) {
            btn.click(); // reuse toggle logic
            // prevent double-click by restoring state
            _guideVisible = !_guideVisible;
            btn.click();
        } else {
            _drawGuides();
        }
    };

    _init();
})();

// ─── Card Print Selector ────────────────────────────────────────────────────────
/**
 * Lets the user pick exactly which cards appear in the print layout.
 * On "Terapkan", selected cards are re-packed into .page divs according
 * to the current paper size grid (cols × rows auto-detected from DOM).
 *
 * Public API:
 *   showPrintCardSelector()  — open the dialog
 *   resetPrintCardSelector() — restore original layout
 */
(function _initCardSelector() {

    // ── Snapshot storage ──────────────────────────────────────────────────────
    // We store the original page HTML so we can always reset.
    let _originalPages = null; // serialised HTML of #pages-container children

    function _saveSnapshot() {
        const c = _getContainer();
        if (c && !_originalPages) _originalPages = c.innerHTML;
    }

    function _getContainer() {
        return document.getElementById('pages-container') ||
               document.querySelector('.pages-container');
    }

    // ── Detect layout metrics ─────────────────────────────────────────────────
    function _detectLayout() {
        // Returns { cardsPerPage, frontPages, backPage }
        const allPages = Array.from(document.querySelectorAll('.page'));
        // A "back page" has no .card-id elements in its cards
        const frontPages = allPages.filter(p =>
            p.querySelector('.card-id, [class*="card-id"], .id') !== null
        );
        const backPages = allPages.filter(p =>
            p.querySelector('.card-id, [class*="card-id"], .id') === null &&
            p.querySelectorAll('.card').length > 0
        );

        const cardsPerPage = frontPages.length > 0
            ? frontPages[0].querySelectorAll('.card').length
            : 9;

        return { cardsPerPage, frontPages, backPage: backPages[0] || null };
    }

    // ── Collect front card info ───────────────────────────────────────────────
    function _collectCards(frontPages) {
        const cards = [];
        frontPages.forEach(page => {
            page.querySelectorAll('.card').forEach(card => {
                const idEl = card.querySelector('.card-id, .id');
                const nameEl = card.querySelector(
                    '.card-name, .t2-name, .name, h2, [class*="name"]'
                );
                const roleEl = card.querySelector('.card-role, .role, .subtitle');
                cards.push({
                    el:   card,
                    id:   idEl   ? idEl.innerText.trim()   : `#${cards.length + 1}`,
                    name: nameEl ? nameEl.innerText.trim() : '',
                    role: roleEl ? roleEl.innerText.trim() : '',
                });
            });
        });
        return cards;
    }

    // ── Apply selection: re-pack cards into pages ─────────────────────────────
    function _applySelection(cardInfos, selectedIds, cardsPerPage, backPage) {
        const container = _getContainer();
        if (!container) return;

        _saveSnapshot(); // ensure snapshot exists before we modify DOM

        const selected = cardInfos.filter(c => selectedIds.has(c.id));
        if (selected.length === 0) return;

        // Build new front pages
        const newPages = [];
        for (let i = 0; i < selected.length; i += cardsPerPage) {
            const chunk = selected.slice(i, i + cardsPerPage);
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page';
            chunk.forEach(info => pageDiv.appendChild(info.el.cloneNode(true)));
            newPages.push(pageDiv);
        }

        // Rebuild back page(s) to match new page count
        const backPages = [];
        if (backPage) {
            // Clone a single back card to tile
            const backCardTemplate = backPage.querySelector('.card');
            if (backCardTemplate) {
                // One back page per front page
                newPages.forEach(() => {
                    const bp = document.createElement('div');
                    bp.className = 'page';
                    // Fill with same count as cardsPerPage
                    for (let i = 0; i < cardsPerPage; i++) {
                        bp.appendChild(backCardTemplate.cloneNode(true));
                    }
                    backPages.push(bp);
                });
            }
        }

        // Re-draw container
        container.innerHTML = '';
        newPages.forEach(p  => container.appendChild(p));
        backPages.forEach(p => container.appendChild(p));

        // Re-trigger crop marks / paper guide if active
        if (window._pg_redraw) window._pg_redraw();
    }

    // ── Reset to original layout ──────────────────────────────────────────────
    function resetPrintCardSelector() {
        const container = _getContainer();
        if (container && _originalPages !== null) {
            container.innerHTML = _originalPages;
            _originalPages = null; // allow re-snapshot if changed again
        }
    }
    window.resetPrintCardSelector = resetPrintCardSelector;

    // ── Dialog ────────────────────────────────────────────────────────────────
    function showPrintCardSelector() {
        _saveSnapshot();

        const { cardsPerPage, frontPages, backPage } = _detectLayout();
        const cardInfos = _collectCards(frontPages);

        if (cardInfos.length === 0) {
            alert('Tidak ada kartu ditemukan di halaman ini.'); return;
        }

        // Current selection state (all ON by default)
        const selected = new Set(cardInfos.map(c => c.id));

        // ── Overlay ───────────────────────────────────────────────────────────
        const overlay = document.createElement('div');
        overlay.id = '_pcs_overlay';
        overlay.style.cssText = [
            'position:fixed', 'inset:0', 'z-index:999999',
            'background:rgba(0,0,0,0.82)',
            'display:flex', 'align-items:center', 'justify-content:center',
            'font-family:sans-serif',
            'backdrop-filter:blur(3px)',
        ].join(';');

        // ── Modal ─────────────────────────────────────────────────────────────
        const modal = document.createElement('div');
        modal.style.cssText = [
            'background:#100d06',
            'border:1.5px solid rgba(212,175,55,0.50)',
            'border-radius:16px',
            'padding:22px 26px 18px',
            'width:min(720px, 96vw)',
            'max-height:88vh',
            'overflow:hidden',
            'display:flex',
            'flex-direction:column',
            'gap:12px',
            'box-shadow:0 20px 80px rgba(0,0,0,0.9)',
            'color:#e8d5a3',
        ].join(';');

        // Header
        const headerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <div style="flex:1">
                    <div style="font-size:15px;font-weight:800;letter-spacing:1.2px;color:#d4af37;">🃏 PILIH KARTU UNTUK DICETAK</div>
                    <div style="font-size:10px;color:#666;margin-top:3px;">
                        Layout: <strong style="color:#d4af37">${cardsPerPage}</strong> kartu/halaman &nbsp;·&nbsp;
                        Total: <strong style="color:#d4af37">${cardInfos.length}</strong> kartu
                    </div>
                </div>
                <div style="text-align:right;line-height:1.3">
                    <div id="_pcs_badge" style="font-size:20px;font-weight:900;color:#d4af37;">
                        ${cardInfos.length}
                    </div>
                    <div style="font-size:9px;color:#666;">kartu dipilih</div>
                </div>
            </div>`;

        // Deck Selection Dropdown
        const deckSelectHTML = `
            <div style="margin-top: 14px; margin-bottom: 10px;">
                <select id="_pcs_deck_select" style="
                    width: 100%;
                    padding: 8px 12px;
                    background: #0a0a08;
                    border: 1.5px solid rgba(212,175,55,0.45);
                    border-radius: 8px;
                    color: #f0d070;
                    font-size: 13px;
                    font-weight: 600;
                    outline: none;
                    cursor: pointer;
                    appearance: none;
                ">
                    <option value="custom">Pilih Deck Prasetel...</option>
                    <option value="starter">1. Starter Deck (9 Kartu) - "Classic Village"</option>
                    <option value="expansion">2. Expansion Deck (18 Kartu) - "Town in Panic"</option>
                    <option value="main">3. Main Deck (25 Kartu) - "Obsidian Vanguard"</option>
                    <option value="advanced">4. Advanced Deck (35 Kartu) - "Blood & Magic"</option>
                    <option value="large">5. Large Deck (45 Kartu) - "The Grand Inquisition"</option>
                    <option value="jumbo">6. Jumbo Deck (50 Kartu) - "Vampire's Eclipse"</option>
                    <option value="alliance">7a. Pure Alliance Deck (39 Kartu)</option>
                    <option value="shadows">7b. Shadows Core Deck (14 Kartu)</option>
                    <option value="neutral">7c. Neutral Chaos Deck (18 Kartu)</option>
                    <option value="full">8. The Full Deck (72 Kartu) - "Absolute Vanguard"</option>
                </select>
            </div>
        `;

        // Quick-select toolbar
        const toolbarHTML = `
            <div style="display:flex;gap:7px;flex-shrink:0;">
                <button id="_pcs_all"    style="${_btnStyle('#d4af37', 'rgba(212,175,55,0.12)')}">☑ Semua</button>
                <button id="_pcs_none"   style="${_btnStyle('#888', 'rgba(255,255,255,0.04)')}">☐ Kosongkan</button>
                <button id="_pcs_invert" style="${_btnStyle('#888', 'rgba(255,255,255,0.04)')}">⇄ Balik</button>
                <div style="flex:1"></div>
                <div id="_pcs_pages_info" style="
                    font-size:10px;color:#7fd47f;align-self:center;font-weight:700;
                "></div>
            </div>`;

        // Card grid container
        const gridHTML = `
            <div id="_pcs_grid" style="
                display:grid;
                grid-template-columns:repeat(auto-fill, minmax(148px, 1fr));
                gap:8px;
                overflow-y:auto;
                flex:1;
                padding:2px 4px 2px 2px;
            "></div>`;

        // Footer
        const footerHTML = `
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                <button id="_pcs_reset"  style="${_btnStyle('#f88', 'rgba(255,100,100,0.10)',true)}">↺ Reset Layout</button>
                <div style="flex:1"></div>
                <button id="_pcs_cancel" style="${_btnStyle('#777', 'transparent',true)}">Batal</button>
                <button id="_pcs_apply"  style="
                    padding:10px 24px;
                    background:linear-gradient(135deg,#b8860b,#d4af37);
                    color:#000;border:none;border-radius:8px;
                    cursor:pointer;font-size:13px;font-weight:900;letter-spacing:.5px;
                ">▶ Terapkan ke Layout</button>
            </div>`;

        modal.innerHTML = headerHTML + deckSelectHTML + toolbarHTML + gridHTML + footerHTML;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // ── Populate card grid ────────────────────────────────────────────────
        const grid      = modal.querySelector('#_pcs_grid');
        const badge     = modal.querySelector('#_pcs_badge');
        const pagesInfo = modal.querySelector('#_pcs_pages_info');
        const cbMap     = {};

        function _updateUI() {
            const n = selected.size;
            const pages = Math.ceil(n / cardsPerPage);
            badge.textContent = n;
            badge.style.color = n > 0 ? '#d4af37' : '#f88';
            pagesInfo.textContent = n > 0
                ? `→ ${pages} halaman`
                : '⚠ belum dipilih';
            pagesInfo.style.color = n > 0 ? '#7fd47f' : '#f88';
        }

        cardInfos.forEach((info, idx) => {
            const item = document.createElement('label');
            item.style.cssText = [
                'display:flex', 'align-items:flex-start', 'gap:8px',
                'background:rgba(255,255,255,0.03)',
                'border:1px solid rgba(212,175,55,0.15)',
                'border-radius:8px', 'padding:9px 10px',
                'cursor:pointer', 'transition:all .12s',
            ].join(';');

            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.checked = true;
            cb.style.cssText = 'width:15px;height:15px;accent-color:#d4af37;flex-shrink:0;margin-top:1px;cursor:pointer;';
            cbMap[info.id] = cb;

            cb.addEventListener('change', () => {
                if (cb.checked) { selected.add(info.id); }
                else            { selected.delete(info.id); }
                _styleItem(item, cb.checked);
                _updateUI();
            });

            const num = document.createElement('span');
            num.style.cssText = 'font-size:9px;color:#555;font-weight:700;flex-shrink:0;padding-top:1px;min-width:18px;';
            num.textContent = String(idx + 1).padStart(2, '0');

            const text = document.createElement('div');
            text.style.cssText = 'flex:1;min-width:0;';
            text.innerHTML = `
                <div style="font-size:10px;font-weight:800;color:#d4af37;letter-spacing:.5px;line-height:1.2;">${info.id}</div>
                ${info.name ? `<div style="font-size:9.5px;color:#aaa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${info.name}</div>` : ''}
                ${info.role ? `<div style="font-size:8.5px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${info.role}</div>` : ''}
            `;

            item.appendChild(cb);
            item.appendChild(num);
            item.appendChild(text);
            _styleItem(item, true);
            grid.appendChild(item);
        });

        _updateUI();

        // Quick-select buttons
        function _setAll(val) {
            cardInfos.forEach(info => {
                const cb = cbMap[info.id];
                const changed = cb.checked !== val;
                cb.checked = val;
                if (val) selected.add(info.id); else selected.delete(info.id);
                _styleItem(cb.closest('label'), val);
            });
            _updateUI();
        }

        modal.querySelector('#_pcs_all').addEventListener('click',    () => _setAll(true));
        modal.querySelector('#_pcs_none').addEventListener('click',   () => _setAll(false));
        modal.querySelector('#_pcs_invert').addEventListener('click', () => {
            cardInfos.forEach(info => {
                const cb = cbMap[info.id];
                cb.checked = !cb.checked;
                if (cb.checked) selected.add(info.id); else selected.delete(info.id);
                _styleItem(cb.closest('label'), cb.checked);
            });
            _updateUI();
            modal.querySelector('#_pcs_deck_select').value = 'custom';
        });

        // Add event listeners that reset deck select to "custom"
        modal.querySelector('#_pcs_all').addEventListener('click', () => { modal.querySelector('#_pcs_deck_select').value = 'custom'; });
        modal.querySelector('#_pcs_none').addEventListener('click', () => { modal.querySelector('#_pcs_deck_select').value = 'custom'; });
        // And for individual clicks, let's just observe changes to checkboxes
        grid.addEventListener('change', (e) => {
            if(e.target.type === 'checkbox') {
                modal.querySelector('#_pcs_deck_select').value = 'custom';
            }
        });

        // Deck selection logic
        const deckDefinitions = {
            starter: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16'],
            expansion: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16', 'WW·03', 'WW·05', 'VL·04', 'VL·07', 'VL·09', 'VL·10', 'VL·26', 'NT·01', 'NT·03'],
            main: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16', 'WW·03', 'WW·05', 'VL·04', 'VL·07', 'VL·09', 'VL·10', 'VL·26', 'NT·01', 'NT·03', 'VL·13', 'VL·18', 'VL·19', 'VL·20', 'VL·35', 'NT·04', 'NT·05'],
            advanced: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16', 'WW·03', 'WW·05', 'VL·04', 'VL·07', 'VL·09', 'VL·10', 'VL·26', 'NT·01', 'NT·03', 'VL·13', 'VL·18', 'VL·19', 'VL·20', 'VL·35', 'NT·04', 'NT·05', 'WW·06', 'WW·04', 'VL·05', 'VL·06', 'VL·08', 'VL·11', 'VL·12', 'VL·21', 'NT·13', 'NT·02'],
            large: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16', 'WW·03', 'WW·05', 'VL·04', 'VL·07', 'VL·09', 'VL·10', 'VL·26', 'NT·01', 'NT·03', 'VL·13', 'VL·18', 'VL·19', 'VL·20', 'VL·35', 'NT·04', 'NT·05', 'WW·06', 'WW·04', 'VL·05', 'VL·06', 'VL·08', 'VL·11', 'VL·12', 'VL·21', 'NT·13', 'NT·02', 'WW·07', 'WW·08', 'WW·10', 'VL·17', 'VL·22', 'VL·29', 'VL·30', 'VL·38', 'NT·06', 'NT·07'],
            jumbo: ['SP·01', 'WW·01', 'WW·02', 'VL·01', 'VL·02', 'VL·03', 'VL·14', 'VL·15', 'VL·16', 'WW·03', 'WW·05', 'VL·04', 'VL·07', 'VL·09', 'VL·10', 'VL·26', 'NT·01', 'NT·03', 'VL·13', 'VL·18', 'VL·19', 'VL·20', 'VL·35', 'NT·04', 'NT·05', 'WW·06', 'WW·04', 'VL·05', 'VL·06', 'VL·08', 'VL·11', 'VL·12', 'VL·21', 'NT·13', 'NT·02', 'WW·07', 'WW·08', 'WW·10', 'VL·17', 'VL·22', 'VL·29', 'VL·30', 'VL·38', 'NT·06', 'NT·07', 'WW·09', 'VL·23', 'VL·24', 'NT·08', 'NT·09'],
        };

        modal.querySelector('#_pcs_deck_select').addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'custom') return;

            let idsToSelect = new Set();
            
            if (val === 'full') {
                cardInfos.forEach(c => idsToSelect.add(c.id));
            } else if (val === 'alliance') {
                cardInfos.forEach(c => { if (c.id.startsWith('VL·')) idsToSelect.add(c.id); });
            } else if (val === 'shadows') {
                cardInfos.forEach(c => { if (c.id.startsWith('WW·')) idsToSelect.add(c.id); });
            } else if (val === 'neutral') {
                cardInfos.forEach(c => { if (c.id.startsWith('NT·')) idsToSelect.add(c.id); });
            } else if (deckDefinitions[val]) {
                deckDefinitions[val].forEach(id => idsToSelect.add(id));
            }

            cardInfos.forEach(info => {
                const cb = cbMap[info.id];
                const shouldBeChecked = idsToSelect.has(info.id);
                if (cb.checked !== shouldBeChecked) {
                    cb.checked = shouldBeChecked;
                    if (shouldBeChecked) selected.add(info.id); else selected.delete(info.id);
                    _styleItem(cb.closest('label'), shouldBeChecked);
                }
            });
            _updateUI();
        });

        // Close
        function _close() { overlay.remove(); }
        modal.querySelector('#_pcs_cancel').addEventListener('click', _close);
        overlay.addEventListener('click', e => { if (e.target === overlay) _close(); });

        // Reset
        modal.querySelector('#_pcs_reset').addEventListener('click', () => {
            resetPrintCardSelector();
            _close();
        });

        // Apply
        modal.querySelector('#_pcs_apply').addEventListener('click', () => {
            if (selected.size === 0) { alert('Pilih minimal satu kartu.'); return; }
            _applySelection(cardInfos, selected, cardsPerPage, backPage);
            _close();
        });
    }

    // Helper: style a card item based on checked state
    function _styleItem(item, checked) {
        item.style.background     = checked ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.02)';
        item.style.borderColor    = checked ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.10)';
        item.style.opacity        = checked ? '1' : '0.45';
    }

    // Helper: button style
    function _btnStyle(color, bg, small) {
        return [
            `padding:${small ? '8px 14px' : '7px 12px'}`,
            `background:${bg}`,
            `border:1px solid ${color}40`,
            `color:${color}`,
            'border-radius:7px', 'cursor:pointer',
            'font-size:11px', 'font-weight:700',
        ].join(';');
    }

    // ── Floating trigger button ───────────────────────────────────────────────
    function _buildTriggerBtn() {
        if (document.getElementById('_pcs_trigger')) return;

        const style = document.createElement('style');
        style.textContent = '@media print { #_pcs_trigger, #_pcs_overlay { display: none !important; } }';
        document.head.appendChild(style);

        const btn = document.createElement('button');
        btn.id = '_pcs_trigger';
        btn.textContent = '🃏 Pilih Kartu';
        btn.title = 'Pilih kartu mana saja yang akan dicetak';
        btn.style.cssText = [
            'position:fixed', 'bottom:20px', 'right:20px',
            'z-index:99997',
            'background:linear-gradient(135deg,#1a1208,#2e2208)',
            'border:1.5px solid rgba(212,175,55,0.55)',
            'color:#d4af37',
            'border-radius:10px',
            'padding:10px 16px',
            'font-family:sans-serif',
            'font-size:12px', 'font-weight:800', 'letter-spacing:.5px',
            'cursor:pointer',
            'box-shadow:0 4px 20px rgba(0,0,0,0.6)',
            'transition:all .15s',
        ].join(';');

        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'linear-gradient(135deg,#2a1e08,#4a3610)';
            btn.style.borderColor = 'rgba(212,175,55,0.85)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'linear-gradient(135deg,#1a1208,#2e2208)';
            btn.style.borderColor = 'rgba(212,175,55,0.55)';
        });
        btn.addEventListener('click', showPrintCardSelector);

        document.body.appendChild(btn);
    }

    // Expose globally
    window.showPrintCardSelector = showPrintCardSelector;

    // Auto-init
    function _init() {
        if(window.location.search.includes('preview=1')) return;
        if (document.body) { _buildTriggerBtn(); }
        else { document.addEventListener('DOMContentLoaded', _buildTriggerBtn); }
    }
    _init();

})();

// ─── Print Layout Centralization ──────────────────────────────────────────────
window.CardPrintLayout = {
    getBackOffsetXMM: function() {
        try {
            const raw = localStorage.getItem('ww_back_offset_x_mm');
            const n = parseFloat(raw);
            return Number.isFinite(n) ? n : 0;
        } catch (_) {
            return 0;
        }
    },

    setBackOffsetXMM: function(mm) {
        let v = parseFloat(mm);
        if (!Number.isFinite(v)) v = 0;
        if (v > 5) v = 5;
        if (v < -5) v = -5;
        try {
            localStorage.setItem('ww_back_offset_x_mm', String(v));
        } catch (_) {}
        if (typeof window.changePaperSize === 'function') {
            window.changePaperSize();
        }
        return v;
    },

    getPaperConfig: function(paperId) {
        let cols = 3, rows = 3;
        let wMM = 210, hMM = 297, cssGap = "4.5mm", cssPadding = "5mm"; 
        if (paperId === 'a4') { cols = 3; rows = 3; wMM = 210; hMM = 297; cssPadding="11mm"; }
        else if (paperId === 'f4') { cols = 3; rows = 3; wMM = 215; hMM = 330; cssPadding = "15mm"; cssGap = "5mm"; }
        else if (paperId === 'a3') { cols = 5; rows = 4; wMM = 297; hMM = 420; cssPadding = "12mm"; cssGap = "3mm"; }
        else if (paperId === 'a3plus') { cols = 5; rows = 5; wMM = 329; hMM = 483; cssPadding = "10mm"; cssGap = "4mm"; }
        else if (paperId === 'single') { cols = 1; rows = 1; wMM = 54.5; hMM = 85.5; cssGap = "0mm"; cssPadding = "0"; }
        return { cols, rows, wMM, hMM, cssGap, cssPadding, cardsPerPage: cols * rows };
    },
    
    applyCSS: function(paperId, dpiScale) {
        const config = this.getPaperConfig(paperId);
        const backOffsetXMM = this.getBackOffsetXMM();
        let styleEl = document.getElementById('dynamic-paper-style');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'dynamic-paper-style';
            document.head.appendChild(styleEl);
        }
        
        const printTargetWidth = parseFloat(config.wMM.toFixed(2)) + "mm";
        const printTargetHeight = parseFloat(config.hMM.toFixed(2)) + "mm";
        
        styleEl.innerHTML = `
            @page { size: ${printTargetWidth} ${printTargetHeight}; margin: 0; }
            @media print {
                .screen-only, .print-title, .print-subtitle, .screen-note { display: none !important; }
                html, body { margin: 0 !important; padding: 0 !important; }
                body { padding: 0 !important; background: transparent !important; }
                .page { 
                    width: ${config.wMM}mm; height: ${config.hMM}mm; 
                    padding: ${config.cssPadding} !important; gap: ${config.cssGap} !important; 
                    margin: 0 !important; page-break-after: always; page-break-inside: avoid; 
                    display: flex !important; flex-wrap: wrap !important; align-content: center !important; justify-content: center !important;
                    box-shadow: none !important; background: transparent !important;
                }
                .page.page-back {
                    transform: translate(${backOffsetXMM}mm, 0mm);
                    transform-origin: top left;
                }
            }
            .page {
                width: ${config.wMM}mm;
                min-height: ${config.hMM}mm;
                padding: ${config.cssPadding};
                gap: ${config.cssGap};
                display: flex !important;
                flex-wrap: wrap !important;
                align-content: center !important;
                justify-content: center !important;
                margin: 0 auto 30px auto;
            }
            .page.page-back {
                transform: translate(${backOffsetXMM}mm, 0mm);
                transform-origin: top left;
            }
        `;
        return config;
    }
};

// ─── Triple Click/Tap Download Centralization ───────────────────────────────
(function _initBackOffsetCalibrator() {
    if (window.location.search.includes('preview=1')) return;

    function ensureControl() {
        const panels = Array.from(document.querySelectorAll('.control-panel'));
        if (!panels.length) return;

        for (const panel of panels) {
            if (panel.querySelector('input[data-role="back-offset-x"]')) continue;

            const firstGroup = panel.querySelector('.control-group');
            const targetRow = firstGroup ? firstGroup.parentElement : panel;
            if (!targetRow) continue;

            const group = document.createElement('div');
            group.className = 'control-group screen-only';

            const label = document.createElement('label');
            label.textContent = 'Offset X:';
            label.style.fontSize = '11px';
            label.style.fontWeight = '700';
            label.style.color = '#ccc';
            label.style.textTransform = 'uppercase';

            const input = document.createElement('input');
            input.type = 'number';
            input.step = '0.1';
            input.min = '-5';
            input.max = '5';
            input.value = window.CardPrintLayout.getBackOffsetXMM().toFixed(1);
            input.setAttribute('data-role', 'back-offset-x');
            input.title = 'Kompensasi horizontal halaman belakang (mm)';
            input.style.width = '68px';
            input.style.padding = '4px 6px';
            input.style.borderRadius = '4px';
            input.style.border = '1px solid #555';
            input.style.background = '#333';
            input.style.color = '#fff';
            input.style.fontSize = '12px';
            input.style.fontWeight = '700';
            input.style.outline = 'none';

            const unit = document.createElement('span');
            unit.textContent = 'mm';
            unit.style.fontSize = '11px';
            unit.style.color = '#aaa';
            unit.style.fontWeight = '700';

            input.addEventListener('change', function() {
                const v = window.CardPrintLayout.setBackOffsetXMM(input.value);
                input.value = v.toFixed(1);
            });

            group.appendChild(label);
            group.appendChild(input);
            group.appendChild(unit);
            targetRow.appendChild(group);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureControl);
    } else {
        ensureControl();
    }
})();

(function _initTripleClickDownload() {
    if(window.location.search.includes('preview=1')) return;
    let clickCount = 0;
    let clickTimer = null;
    let lastCardTapped = null;

    function handleInteraction(e) {
        const card = e.target.closest('.card');
        if (!card) {
            clickCount = 0;
            return;
        }

        if (lastCardTapped !== card) {
            clickCount = 1;
            lastCardTapped = card;
        } else {
            clickCount++;
        }

        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickCount = 0;
            lastCardTapped = null;
        }, 600); // 600ms window for 3 rapid clicks/taps

        if (clickCount >= 3) {
            clickCount = 0;
            lastCardTapped = null;
            if (e.cancelable && e.preventDefault) e.preventDefault();
            
            const formatEl = document.getElementById('export-format');
            const format = (formatEl?.value || 'png').toLowerCase();
            const bgColor = format === 'jpg' ? '#ffffff' : null;
            
            let cardId = 'Card';
            const idEl = card.querySelector('.id, .card-id') || card.getAttribute('data-id');
            if (typeof idEl === 'string') cardId = idEl.trim().replace(/·/g, '-');
            else if (idEl) cardId = idEl.innerText.trim().replace(/·/g, '-').replace(/\s+/g, '-');
            else if (card.classList.contains('card-back') || card.classList.contains('theme-back')) cardId = 'card-back';
            
            let prefix = 'Werewolf';
            if (document.title.includes('Dossier')) prefix = 'Dossier';
            else if (document.title.includes('Obsidian')) prefix = 'ObsidianVanguard';
            else {
                const titleParts = document.title.split('-');
                if (titleParts.length > 0) prefix = titleParts[0].trim().replace(/\s+/g, '-');
            }
            
            const filename = `${prefix}-${cardId}`;
            
            if (typeof downloadCardDomToImage !== 'undefined') {
                downloadCardDomToImage(card, filename, { format, bgColor });
            } else if (typeof downloadCardFaithful !== 'undefined') {
                downloadCardFaithful(card, filename, { format, bgColor });
            }
        }
    }

    // Capture standard clicks and touch ends using pointerup. 
    // Fallbacks to standard event listeners for robust coverage.
    if (window.PointerEvent) {
        document.addEventListener('pointerup', handleInteraction);
    } else {
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchend', handleInteraction, {passive: false});
    }
})();
