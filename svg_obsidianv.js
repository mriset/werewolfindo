/**
 * svg_obsidianv.js
 * Obsidian Vanguard Edition — SVG Illustrations per Card
 * Deck 1: Custom unique SVGs (9 cards)
 * Deck 2: Custom unique SVGs (9 cards)
 * Rest: Faction-based fallbacks (to be updated progressively)
 */

const svgsObsidianV = {

    // ══════════════════════════════════════════════════
    // DECK 1 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // SP·01 — Sang Narator (Game Moderator) — Supreme
    // Concept: All-seeing Eye of God atop an obsidian obelisk
    "SP·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.4"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" stroke-width="0.4" stroke-dasharray="2,4" opacity="0.6"/>
  <polygon points="44,80 56,80 54,22 46,22" fill="#1e1e22" stroke="#d4af37" stroke-width="1"/>
  <polygon points="46,22 54,22 50,12" fill="#d4af37" opacity="0.9"/>
  <line x1="45" y1="35" x2="55" y2="35" stroke="#d4af37" stroke-width="0.5" opacity="0.6"/>
  <line x1="45.5" y1="50" x2="54.5" y2="50" stroke="#d4af37" stroke-width="0.5" opacity="0.6"/>
  <line x1="46" y1="65" x2="54" y2="65" stroke="#d4af37" stroke-width="0.5" opacity="0.6"/>
  <ellipse cx="50" cy="10" rx="10" ry="5" fill="#0a0a0c" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="10" r="3" fill="#8a2be2"/>
  <circle cx="50" cy="10" r="1.5" fill="#d4af37"/>
  <line x1="50" y1="5" x2="50" y2="1" stroke="#d4af37" stroke-width="0.6"/>
  <line x1="56" y1="7" x2="60" y2="4" stroke="#d4af37" stroke-width="0.6"/>
  <line x1="44" y1="7" x2="40" y2="4" stroke="#d4af37" stroke-width="0.6"/>
  <rect x="38" y="80" width="24" height="4" rx="1" fill="#1a1a1a" stroke="#d4af37" stroke-width="0.8"/>
  <rect x="34" y="84" width="32" height="3" rx="1" fill="#111" stroke="#d4af37" stroke-width="0.6"/>
</svg>`,

    // VL·01 — Peramal (Seer) — Good
    // Concept: Crystal orb with fractal light — sees through darkness
    "VL·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="orbG" cx="40%" cy="35%">
      <stop offset="0%" stop-color="#a8d8ff"/>
      <stop offset="40%" stop-color="#4183d7" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0d1a2e" stop-opacity="0.95"/>
    </radialGradient>
    <radialGradient id="glwG" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#4183d7" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#4183d7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="46" r="28" fill="url(#glwG)"/>
  <polygon points="47,72 53,72 52,80 48,80" fill="#1a1a1a" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="50" cy="81" rx="9" ry="2.5" fill="#111" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="50" cy="46" r="22" fill="url(#orbG)" stroke="#d4af37" stroke-width="1.2"/>
  <path d="M38,36 L50,28 L62,36 L58,52 L42,52 Z" fill="none" stroke="#a8d8ff" stroke-width="0.5" opacity="0.6"/>
  <path d="M44,46 L50,35 L56,46" fill="rgba(168,216,255,0.15)" stroke="none"/>
  <ellipse cx="43" cy="37" rx="6" ry="3.5" fill="rgba(255,255,255,0.25)" transform="rotate(-20,43,37)"/>
  <line x1="66" y1="34" x2="82" y2="20" stroke="#d4af37" stroke-width="0.7" stroke-dasharray="2,2" opacity="0.7"/>
  <path d="M50,18 L51.5,23 L56,24 L51.5,25.5 L50,30 L48.5,25.5 L44,24 L48.5,23 Z" fill="#d4af37" opacity="0.9"/>
</svg>`,

    // VL·02 — Penjaga (Guardian) — Good
    // Concept: Geometric shield with energy core
    "VL·02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2a3a"/>
      <stop offset="100%" stop-color="#0a1015"/>
    </linearGradient>
  </defs>
  <path d="M50,12 L78,22 L78,52 C78,68 64,80 50,87 C36,80 22,68 22,52 L22,22 Z" fill="rgba(65,131,215,0.08)" stroke="#4183d7" stroke-width="0.5" opacity="0.5"/>
  <path d="M50,17 L73,25 L73,50 C73,64 61,75 50,82 C39,75 27,64 27,50 L27,25 Z" fill="url(#shGrad)" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M50,22 L68,29 L68,49 C68,61 58,70 50,76 C42,70 32,61 32,49 L32,29 Z" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.5"/>
  <line x1="50" y1="22" x2="50" y2="76" stroke="#d4af37" stroke-width="0.6" opacity="0.4"/>
  <line x1="32" y1="49" x2="68" y2="49" stroke="#d4af37" stroke-width="0.6" opacity="0.4"/>
  <circle cx="50" cy="49" r="10" fill="rgba(65,131,215,0.15)" stroke="#4183d7" stroke-width="1"/>
  <circle cx="50" cy="49" r="6" fill="rgba(65,131,215,0.3)" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="50" cy="49" r="3" fill="#4183d7"/>
  <circle cx="50" cy="22" r="2" fill="#d4af37"/>
  <circle cx="32" cy="49" r="2" fill="#d4af37"/>
  <circle cx="68" cy="49" r="2" fill="#d4af37"/>
  <circle cx="50" cy="74" r="2" fill="#d4af37"/>
</svg>`,

    // VL·14 — Warga Desa (Villager) — Good
    // Concept: Simple house silhouette — civilian
    "VL·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="50" x2="90" y2="50" stroke="#d4af37" stroke-width="0.3" opacity="0.15"/>
  <line x1="50" y1="10" x2="50" y2="90" stroke="#d4af37" stroke-width="0.3" opacity="0.15"/>
  <polygon points="50,15 80,40 74,40 74,75 26,75 26,40 20,40" fill="#0d1a2e" stroke="#4183d7" stroke-width="1.2"/>
  <polygon points="50,15 80,40 20,40" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <rect x="43" y="58" width="14" height="17" rx="7" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <rect x="30" y="50" width="10" height="8" rx="1" fill="rgba(65,131,215,0.2)" stroke="#4183d7" stroke-width="0.6"/>
  <line x1="35" y1="50" x2="35" y2="58" stroke="#4183d7" stroke-width="0.4"/>
  <rect x="60" y="50" width="10" height="8" rx="1" fill="rgba(65,131,215,0.2)" stroke="#4183d7" stroke-width="0.6"/>
  <line x1="65" y1="50" x2="65" y2="58" stroke="#4183d7" stroke-width="0.4"/>
  <line x1="50" y1="15" x2="50" y2="10" stroke="#d4af37" stroke-width="0.6"/>
  <rect x="46" y="5" width="8" height="10" rx="2" fill="#1a1a1a" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="50" cy="10" r="2" fill="#d4af37" opacity="0.8"/>
  <line x1="20" y1="75" x2="80" y2="75" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
</svg>`,

    // VL·15, VL·16, VL·17 — Warga Desa (same as VL·14)

    // WW·01 — Serigala — uses same design as WW·02

    // WW·02 — Serigala (Werewolf) — Evil
    // Concept: Claw slash marks over dark background
    "WW·02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cwBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a0000"/>
      <stop offset="100%" stop-color="#050506"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="url(#cwBg)" stroke="#dc143c" stroke-width="0.8" opacity="0.5"/>
  <polygon points="50,8 78,20 90,48 78,78 50,90 22,78 10,48 22,20" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.5"/>
  <path d="M26,20 C30,30 24,42 28,54 C31,62 29,70 32,78" fill="none" stroke="#dc143c" stroke-width="3" stroke-linecap="round"/>
  <path d="M26,20 C30,30 24,42 28,54 C31,62 29,70 32,78" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
  <path d="M38,15 C40,28 34,42 38,56 C41,66 39,74 42,82" fill="none" stroke="#dc143c" stroke-width="3" stroke-linecap="round"/>
  <path d="M38,15 C40,28 34,42 38,56 C41,66 39,74 42,82" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
  <path d="M52,13 C52,27 48,40 52,54 C55,65 53,73 56,82" fill="none" stroke="#dc143c" stroke-width="3" stroke-linecap="round"/>
  <path d="M52,13 C52,27 48,40 52,54 C55,65 53,73 56,82" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
  <path d="M66,18 C64,30 70,44 66,57 C63,66 65,74 62,82" fill="none" stroke="#dc143c" stroke-width="3" stroke-linecap="round"/>
  <path d="M66,18 C64,30 70,44 66,57 C63,66 65,74 62,82" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
  <circle cx="32" cy="82" r="2.5" fill="#dc143c" opacity="0.9"/>
  <circle cx="42" cy="85" r="2" fill="#dc143c" opacity="0.8"/>
  <circle cx="56" cy="86" r="2.5" fill="#dc143c"/>
  <circle cx="62" cy="84" r="2" fill="#dc143c" opacity="0.7"/>
  <circle cx="76" cy="26" r="3" fill="#dc143c" opacity="0.35"/>
  <circle cx="82" cy="22" r="2" fill="#dc143c" opacity="0.3"/>
  <circle cx="80" cy="30" r="2" fill="#dc143c" opacity="0.3"/>
  <circle cx="72" cy="32" r="2" fill="#dc143c" opacity="0.3"/>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 2 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // VL·03 — Penyihir (Witch) — Good
    // Concept: Two potion vials — life & death elixirs
    "VL·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="potGreen" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#00ff88" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#004422" stop-opacity="0.9"/>
    </radialGradient>
    <radialGradient id="potRed" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#ff4444" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#440000" stop-opacity="0.9"/>
    </radialGradient>
  </defs>
  <!-- Left potion: life (green) -->
  <path d="M28,38 L28,30 L38,30 L38,38 C44,44 46,54 44,65 L22,65 C20,54 22,44 28,38 Z" fill="url(#potGreen)" stroke="#d4af37" stroke-width="1.2"/>
  <rect x="28" y="25" width="10" height="7" rx="2" fill="#1a2a1a" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="33" cy="25" rx="5" ry="2" fill="#1a2a1a" stroke="#d4af37" stroke-width="0.6"/>
  <circle cx="33" cy="52" r="5" fill="rgba(0,255,136,0.3)" stroke="#00ff88" stroke-width="0.5"/>
  <!-- Bubbles life potion -->
  <circle cx="28" cy="58" r="2" fill="rgba(0,255,136,0.4)"/>
  <circle cx="38" cy="60" r="1.5" fill="rgba(0,255,136,0.3)"/>
  <text x="33" y="69" font-size="7" fill="#00ff88" text-anchor="middle" font-family="serif">✦</text>

  <!-- Right potion: death (red) -->
  <path d="M62,38 L62,30 L72,30 L72,38 C78,44 80,54 78,65 L56,65 C54,54 56,44 62,38 Z" fill="url(#potRed)" stroke="#d4af37" stroke-width="1.2"/>
  <rect x="62" y="25" width="10" height="7" rx="2" fill="#2a1a1a" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="67" cy="25" rx="5" ry="2" fill="#2a1a1a" stroke="#d4af37" stroke-width="0.6"/>
  <circle cx="67" cy="52" r="5" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="0.5"/>
  <!-- Skull symbol death potion -->
  <circle cx="67" cy="50" r="5" fill="none" stroke="#ff4444" stroke-width="0.6" opacity="0.6"/>
  <text x="67" y="68" font-size="7" fill="#ff4444" text-anchor="middle" font-family="serif">☠</text>

  <!-- Cross / divider -->
  <line x1="50" y1="25" x2="50" y2="72" stroke="#d4af37" stroke-width="0.5" stroke-dasharray="2,3" opacity="0.5"/>
  <!-- Base shelf -->
  <rect x="16" y="65" width="68" height="3" rx="1" fill="#1a1a1a" stroke="#d4af37" stroke-width="0.8"/>
  <line x1="16" y1="68" x2="84" y2="68" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
  <!-- Floating sparkles -->
  <circle cx="50" cy="20" r="1.5" fill="#d4af37" opacity="0.7"/>
  <circle cx="45" cy="16" r="1" fill="#d4af37" opacity="0.5"/>
  <circle cx="55" cy="15" r="1" fill="#d4af37" opacity="0.4"/>
</svg>`,

    // VL·04 — Pemburu (Hunter) — Good
    // Concept: Crossbow aimed — last shot vengeance
    "VL·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Target reticle background -->
  <circle cx="72" cy="32" r="16" fill="none" stroke="#dc143c" stroke-width="0.5" opacity="0.4"/>
  <circle cx="72" cy="32" r="10" fill="none" stroke="#dc143c" stroke-width="0.5" opacity="0.3"/>
  <circle cx="72" cy="32" r="4" fill="#dc143c" opacity="0.3"/>
  <line x1="56" y1="32" x2="88" y2="32" stroke="#dc143c" stroke-width="0.4" opacity="0.4"/>
  <line x1="72" y1="16" x2="72" y2="48" stroke="#dc143c" stroke-width="0.4" opacity="0.4"/>
  <!-- Crossbow stock -->
  <rect x="15" y="46" width="55" height="7" rx="3" fill="#3a2010" stroke="#d4af37" stroke-width="1"/>
  <!-- Crossbow body / rail -->
  <rect x="30" y="44" width="35" height="3" rx="1" fill="#2a1508" stroke="#d4af37" stroke-width="0.8"/>
  <!-- Bow limbs -->
  <path d="M30,44 C20,35 20,55 30,50" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
  <!-- Bowstring -->
  <line x1="30" y1="35" x2="30" y2="53" stroke="#d4af37" stroke-width="0.8" opacity="0.9"/>
  <!-- Arrow shaft -->
  <line x1="32" y1="47" x2="70" y2="47" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Arrow head -->
  <polygon points="70,44 78,47 70,50" fill="#d4af37"/>
  <!-- Arrow fletching -->
  <polygon points="32,44 26,47 32,50" fill="#d4af37" opacity="0.8"/>
  <!-- Scope/sight -->
  <rect x="48" y="40" width="12" height="7" rx="1" fill="none" stroke="#d4af37" stroke-width="0.6" opacity="0.6"/>
  <!-- Trigger guard -->
  <path d="M55,53 C55,60 65,60 65,53" fill="none" stroke="#d4af37" stroke-width="1"/>
  <!-- Ground shadow -->
  <ellipse cx="50" cy="85" rx="20" ry="3" fill="rgba(0,0,0,0.4)"/>
</svg>`,

    // VL·05 — Raja (King) — Good
    // Concept: Minimalist geometric crown — veto power
    "VL·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="crGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="50%" stop-color="#fcf6ba"/>
      <stop offset="100%" stop-color="#aa771c"/>
    </linearGradient>
  </defs>
  <!-- Crown glow aura -->
  <ellipse cx="50" cy="52" rx="34" ry="18" fill="rgba(212,175,55,0.08)"/>
  <!-- Crown base band -->
  <rect x="20" y="55" width="60" height="12" rx="2" fill="url(#crGrad)" stroke="#aa771c" stroke-width="1"/>
  <!-- Crown points -->
  <polygon points="20,55 20,35 32,48 50,28 68,48 80,35 80,55" fill="url(#crGrad)" stroke="#aa771c" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Gem center top -->
  <polygon points="50,28 45,36 50,32 55,36" fill="#8a2be2" stroke="#d4af37" stroke-width="0.8"/>
  <!-- Gems on base band -->
  <circle cx="30" cy="61" r="4" fill="#dc143c" stroke="#d4af37" stroke-width="0.6"/>
  <circle cx="50" cy="61" r="4" fill="#4183d7" stroke="#d4af37" stroke-width="0.6"/>
  <circle cx="70" cy="61" r="4" fill="#00aa44" stroke="#d4af37" stroke-width="0.6"/>
  <!-- Crown inner detail lines -->
  <line x1="20" y1="55" x2="80" y2="55" stroke="#aa771c" stroke-width="0.5" opacity="0.5"/>
  <line x1="36" y1="55" x2="36" y2="67" stroke="#aa771c" stroke-width="0.5" opacity="0.4"/>
  <line x1="64" y1="55" x2="64" y2="67" stroke="#aa771c" stroke-width="0.5" opacity="0.4"/>
  <!-- Crown shadow base -->
  <ellipse cx="50" cy="70" rx="28" ry="4" fill="rgba(0,0,0,0.4)"/>
  <!-- Stars flanking -->
  <path d="M16,42 L17.5,46 L22,47 L18,50 L19,55 L16,52 L13,55 L14,50 L10,47 L14.5,46 Z" fill="#d4af37" opacity="0.5" transform="scale(0.7) translate(5,10)"/>
  <path d="M84,42 L85.5,46 L90,47 L86,50 L87,55 L84,52 L81,55 L82,50 L78,47 L82.5,46 Z" fill="#d4af37" opacity="0.5" transform="scale(0.7) translate(40,10)"/>
</svg>`,

    // VL·06 — Pemabuk (Drunker) — Good
    // Concept: Tilted tankard spilling liquid — disruptive chaotic drunk
    "VL·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="beerG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffcc44"/>
      <stop offset="100%" stop-color="#cc8800"/>
    </linearGradient>
  </defs>
  <!-- Spill / splash drops -->
  <ellipse cx="78" cy="30" rx="8" ry="4" fill="rgba(255,204,68,0.3)" transform="rotate(-30,78,30)"/>
  <circle cx="85" cy="25" r="3" fill="rgba(255,204,68,0.4)"/>
  <circle cx="80" cy="18" r="2" fill="rgba(255,204,68,0.3)"/>
  <circle cx="90" cy="34" r="1.5" fill="rgba(255,204,68,0.5)"/>
  <!-- Tankard (tilted) -->
  <g transform="rotate(-25, 50, 60)">
    <!-- Handle -->
    <path d="M65,40 C80,40 80,65 65,65" fill="none" stroke="#d4af37" stroke-width="3" stroke-linecap="round"/>
    <!-- Body -->
    <path d="M22,38 L28,75 L62,75 L68,38 Z" fill="#2a1a00" stroke="#d4af37" stroke-width="1.5"/>
    <!-- Liquid -->
    <path d="M25,48 L26,75 L62,75 L63,48 Z" fill="url(#beerG)" opacity="0.9"/>
    <!-- Foam -->
    <ellipse cx="44" cy="48" rx="21" ry="6" fill="#ffffff" opacity="0.85"/>
    <circle cx="34" cy="46" r="4" fill="#fff" opacity="0.6"/>
    <circle cx="42" cy="44" r="5" fill="#fff" opacity="0.7"/>
    <circle cx="52" cy="45" r="4" fill="#fff" opacity="0.6"/>
    <!-- Rim highlight -->
    <line x1="22" y1="38" x2="68" y2="38" stroke="#d4af37" stroke-width="1.5"/>
    <!-- Rivets -->
    <circle cx="30" cy="55" r="1.5" fill="#d4af37"/>
    <circle cx="58" cy="55" r="1.5" fill="#d4af37"/>
  </g>
  <!-- Stars of drunkenness -->
  <text x="20" y="30" font-size="14" fill="#d4af37" opacity="0.6">★</text>
  <text x="12" y="50" font-size="10" fill="#d4af37" opacity="0.4">★</text>
</svg>`,

    // VL·07 — Gadis Kecil (Little Girl) — Good
    // Concept: Half-open eye peeking with lashes — spy in the dark
    "VL·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="eyeBg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#0d2040"/>
      <stop offset="100%" stop-color="#050a10"/>
    </radialGradient>
  </defs>
  <!-- Dark fog/shadow at top to simulate darkness -->
  <rect x="0" y="0" width="100" height="50" fill="rgba(0,0,0,0.5)" rx="4"/>
  <!-- Crack of light / peeking gap -->
  <rect x="10" y="48" width="80" height="2" fill="rgba(212,175,55,0.15)" rx="1"/>
  <!-- Eye outer -->
  <path d="M10,65 C10,45 90,45 90,65 C90,85 10,85 10,65 Z" fill="url(#eyeBg)" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Eyelid upper (half closed peeking) -->
  <path d="M10,65 C10,54 90,54 90,65 Z" fill="#0a0a0c"/>
  <path d="M10,65 C10,55 90,55 90,65 Z" stroke="#d4af37" stroke-width="1" fill="none"/>
  <!-- Upper lashes -->
  <line x1="20" y1="57" x2="18" y2="48" stroke="#d4af37" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="33" y1="53" x2="32" y2="44" stroke="#d4af37" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="50" y1="52" x2="50" y2="43" stroke="#d4af37" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="67" y1="53" x2="68" y2="44" stroke="#d4af37" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="80" y1="57" x2="82" y2="48" stroke="#d4af37" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Iris -->
  <circle cx="50" cy="70" r="12" fill="#4183d7" opacity="0.8"/>
  <circle cx="50" cy="70" r="7" fill="#0a1520"/>
  <circle cx="50" cy="70" r="3.5" fill="#4183d7" opacity="0.5"/>
  <!-- Pupil -->
  <circle cx="50" cy="70" r="4" fill="#000"/>
  <!-- Eye gleam -->
  <circle cx="54" cy="67" r="2" fill="rgba(255,255,255,0.6)"/>
  <!-- Lower lashes subtle -->
  <line x1="22" y1="79" x2="20" y2="86" stroke="#555" stroke-width="0.8" stroke-linecap="round"/>
  <line x1="50" y1="82" x2="50" y2="89" stroke="#555" stroke-width="0.8" stroke-linecap="round"/>
  <line x1="78" y1="79" x2="80" y2="86" stroke="#555" stroke-width="0.8" stroke-linecap="round"/>
</svg>`,

    // VL·09 — Polisi (Sheriff) — Good
    // Concept: Star badge with 2x vote authority
    "VL·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="badgeGrad" cx="50%" cy="40%">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="60%" stop-color="#aa771c"/>
      <stop offset="100%" stop-color="#7a5010"/>
    </radialGradient>
  </defs>
  <!-- Badge backing plate -->
  <path d="M50,8 L62,14 L74,10 L78,22 L88,30 L82,42 L86,55 L75,60 L74,73 L62,72 L50,80 L38,72 L26,73 L25,60 L14,55 L18,42 L12,30 L22,22 L26,10 L38,14 Z" fill="url(#badgeGrad)" stroke="#7a5010" stroke-width="1.5"/>
  <!-- Star points inner -->
  <path d="M50,16 L55,33 L72,33 L59,43 L64,60 L50,50 L36,60 L41,43 L28,33 L45,33 Z" fill="#1a0e00" stroke="#d4af37" stroke-width="1"/>
  <!-- Center circle -->
  <circle cx="50" cy="46" r="12" fill="#d4af37" opacity="0.15" stroke="#d4af37" stroke-width="1"/>
  <!-- Sheriff text -->
  <text x="50" y="51" font-family="'Cinzel', serif" font-size="9" fill="#fcf6ba" text-anchor="middle" font-weight="900">SHERIFF</text>
  <!-- Double vote symbol -->
  <text x="36" y="68" font-size="9" fill="#d4af37" text-anchor="middle" opacity="0.8">2×</text>
  <!-- Outer ring -->
  <circle cx="50" cy="44" r="34" fill="none" stroke="#d4af37" stroke-width="0.4" stroke-dasharray="3,3" opacity="0.5"/>
</svg>`,

    // WW·03 — Alpha Serigala (Alpha Wolf) — Evil
    // Concept: Wolf skull with alpha crown + infection virus icon
    "WW·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark glow -->
  <circle cx="50" cy="50" r="40" fill="rgba(220,20,60,0.05)"/>
  <!-- Alpha crown above skull -->
  <polygon points="30,28 36,20 44,26 50,16 56,26 64,20 70,28" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Skull outline -->
  <path d="M28,55 C28,38 72,38 72,55 C72,66 66,72 60,74 L60,82 L40,82 L40,74 C34,72 28,66 28,55 Z" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Skull eyes -->
  <ellipse cx="40" cy="55" rx="7" ry="8" fill="#0a0a0c" stroke="#dc143c" stroke-width="1"/>
  <ellipse cx="60" cy="55" rx="7" ry="8" fill="#0a0a0c" stroke="#dc143c" stroke-width="1"/>
  <!-- Eye glow -->
  <ellipse cx="40" cy="55" rx="4" ry="5" fill="#dc143c" opacity="0.6"/>
  <ellipse cx="60" cy="55" rx="4" ry="5" fill="#dc143c" opacity="0.6"/>
  <!-- Nose hole -->
  <path d="M47,66 L50,62 L53,66 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.5"/>
  <!-- Jaw teeth -->
  <rect x="40" y="82" width="5" height="6" rx="1" fill="#d4af37"/>
  <rect x="47" y="82" width="5" height="6" rx="1" fill="#d4af37"/>
  <rect x="54" y="82" width="5" height="6" rx="1" fill="#d4af37"/>
  <!-- Infection virus (ability) -->
  <circle cx="78" cy="20" r="6" fill="none" stroke="#00cc44" stroke-width="1"/>
  <line x1="78" y1="12" x2="78" y2="28" stroke="#00cc44" stroke-width="0.8"/>
  <line x1="70" y1="20" x2="86" y2="20" stroke="#00cc44" stroke-width="0.8"/>
  <line x1="73" y1="14" x2="83" y2="26" stroke="#00cc44" stroke-width="0.6"/>
  <line x1="83" y1="14" x2="73" y2="26" stroke="#00cc44" stroke-width="0.6"/>
  <circle cx="78" cy="20" r="2.5" fill="#00cc44" opacity="0.5"/>
</svg>`,

    // NT·01 — Badut (Jester) — Neutral
    // Concept: Venetian jester mask split half — laugh and cry
    "NT·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Diamond background -->
  <polygon points="50,8 88,50 50,92 12,50" fill="none" stroke="#555" stroke-width="0.8" opacity="0.4"/>
  <polygon points="50,16 80,50 50,84 20,50" fill="none" stroke="#333" stroke-width="0.5" opacity="0.3"/>
  <!-- Mask base right side (happy) -->
  <path d="M50,20 C68,18 82,32 82,55 C82,72 68,82 50,82 Z" fill="#8b0000" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Mask base left side (creepy) -->
  <path d="M50,20 C32,18 18,32 18,55 C18,72 32,82 50,82 Z" fill="#1a1a2a" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Center divide line -->
  <line x1="50" y1="20" x2="50" y2="82" stroke="#d4af37" stroke-width="1.5"/>
  <!-- Right eye (happy circle) -->
  <circle cx="64" cy="48" r="8" fill="#0a0a0c" stroke="#d4af37" stroke-width="1"/>
  <path d="M58,44 C62,40 70,44 66,50 Z" fill="#d4af37" opacity="0.6"/>
  <!-- Left eye (sad/creepy) -->
  <ellipse cx="36" cy="48" rx="7" ry="5" fill="#0a0a0c" stroke="#d4af37" stroke-width="1"/>
  <line x1="30" y1="54" x2="42" y2="54" stroke="#d4af37" stroke-width="0.8"/>
  <!-- Right smile -->
  <path d="M52,64 C57,72 72,70 74,62" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Left frown -->
  <path d="M26,68 C28,60 44,62 48,70" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Hat bells top -->
  <line x1="50" y1="20" x2="36" y2="8" stroke="#d4af37" stroke-width="1"/>
  <line x1="50" y1="20" x2="64" y2="8" stroke="#d4af37" stroke-width="1"/>
  <circle cx="36" cy="7" r="4" fill="#fcf6ba" stroke="#aa771c" stroke-width="0.8"/>
  <circle cx="64" cy="7" r="4" fill="#fcf6ba" stroke="#aa771c" stroke-width="0.8"/>
</svg>`,

    // NT·03 — Cupid — Neutral
    // Concept: Golden arrow through two hearts — eternal bond
    "NT·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="heart1G" cx="50%" cy="30%">
      <stop offset="0%" stop-color="#ff6688"/>
      <stop offset="100%" stop-color="#cc0033"/>
    </radialGradient>
    <radialGradient id="heart2G" cx="50%" cy="30%">
      <stop offset="0%" stop-color="#ff88aa"/>
      <stop offset="100%" stop-color="#990022"/>
    </radialGradient>
  </defs>
  <!-- Wing feathers left -->
  <path d="M16,50 C8,42 8,28 20,32 C14,36 14,44 20,48 Z" fill="#fcf6ba" opacity="0.7"/>
  <path d="M18,56 C6,52 4,36 18,40 C12,44 10,52 18,54 Z" fill="#fcf6ba" opacity="0.6"/>
  <path d="M20,63 C8,62 6,46 20,50 C14,54 12,62 20,62 Z" fill="#fcf6ba" opacity="0.5"/>
  <!-- Wing feathers right -->
  <path d="M84,50 C92,42 92,28 80,32 C86,36 86,44 80,48 Z" fill="#fcf6ba" opacity="0.7"/>
  <path d="M82,56 C94,52 96,36 82,40 C88,44 90,52 82,54 Z" fill="#fcf6ba" opacity="0.6"/>
  <path d="M80,63 C92,62 94,46 80,50 C86,54 88,62 80,62 Z" fill="#fcf6ba" opacity="0.5"/>
  <!-- Heart 1 (left) -->
  <path d="M30,42 C30,36 38,34 40,40 C42,34 50,36 50,42 C50,50 40,58 40,58 C40,58 30,50 30,42 Z" fill="url(#heart1G)" stroke="#d4af37" stroke-width="1"/>
  <!-- Heart 2 (right) -->
  <path d="M50,42 C50,36 58,34 60,40 C62,34 70,36 70,42 C70,50 60,58 60,58 C60,58 50,50 50,42 Z" fill="url(#heart2G)" stroke="#d4af37" stroke-width="1"/>
  <!-- Arrow shaft through both hearts -->
  <line x1="14" y1="62" x2="86" y2="38" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Arrow head -->
  <polygon points="86,38 78,38 84,46" fill="#d4af37"/>
  <!-- Arrow fletching -->
  <polygon points="14,62 22,62 16,54" fill="#d4af37"/>
  <!-- Arrow ring/wrap in middle -->
  <circle cx="50" cy="50" r="3" fill="#d4af37"/>
  <!-- Sparkle dots -->
  <circle cx="50" cy="18" r="2" fill="#d4af37" opacity="0.8"/>
  <circle cx="58" cy="14" r="1.5" fill="#d4af37" opacity="0.6"/>
  <circle cx="42" cy="14" r="1.5" fill="#d4af37" opacity="0.6"/>
  <circle cx="50" cy="80" r="2" fill="#d4af37" opacity="0.5"/>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 3 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // VL·08 — Pelacur (Harlot) — Good
    // Concept: Silhouette in moonlit doorway — visiting houses
    "VL·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="18" r="12" fill="rgba(212,175,55,0.1)" stroke="#d4af37" stroke-width="0.5"/>
  <circle cx="50" cy="18" r="8" fill="rgba(212,175,55,0.15)" stroke="#d4af37" stroke-width="0.8"/>
  <path d="M20,85 L20,40 L40,40 L40,30 L60,30 L60,40 L80,40 L80,85 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <rect x="44" y="62" width="12" height="23" rx="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <rect x="24" y="48" width="10" height="8" rx="1" fill="rgba(212,175,55,0.15)" stroke="#d4af37" stroke-width="0.5"/>
  <rect x="66" y="48" width="10" height="8" rx="1" fill="rgba(65,131,215,0.2)" stroke="#4183d7" stroke-width="0.5"/>
  <polygon points="20,40 50,20 80,40" fill="none" stroke="#d4af37" stroke-width="1.2"/>
  <ellipse cx="50" cy="18" rx="6" ry="3" fill="#d4af37" opacity="0.3"/>
  <circle cx="50" cy="18" r="2" fill="#d4af37" opacity="0.9"/>
  <path d="M40,85 C40,72 44,68 50,68 C56,68 60,72 60,85" fill="#1a1020" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="50" cy="55" rx="6" ry="8" fill="#1a1020" stroke="#d4af37" stroke-width="0.6" opacity="0.8"/>
  <circle cx="50" cy="46" r="4" fill="#1a1020" stroke="#d4af37" stroke-width="0.6"/>
</svg>`,

    // VL·10 — Kepala Desa (Mayor) — Good
    // Concept: Government building / mayoral chain of office
    "VL·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="22" y="45" width="56" height="38" rx="1" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.2"/>
  <polygon points="50,20 80,45 20,45" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.2"/>
  <line x1="32" y1="45" x2="32" y2="83" stroke="#d4af37" stroke-width="0.4" opacity="0.3"/>
  <line x1="50" y1="45" x2="50" y2="83" stroke="#d4af37" stroke-width="0.4" opacity="0.3"/>
  <line x1="68" y1="45" x2="68" y2="83" stroke="#d4af37" stroke-width="0.4" opacity="0.3"/>
  <rect x="43" y="63" width="14" height="20" rx="2" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <rect x="26" y="55" width="10" height="8" rx="1" fill="rgba(65,131,215,0.2)" stroke="#4183d7" stroke-width="0.5"/>
  <rect x="64" y="55" width="10" height="8" rx="1" fill="rgba(65,131,215,0.2)" stroke="#4183d7" stroke-width="0.5"/>
  <line x1="46" y1="20" x2="46" y2="12" stroke="#d4af37" stroke-width="1"/>
  <line x1="50" y1="20" x2="50" y2="10" stroke="#d4af37" stroke-width="1.5"/>
  <line x1="54" y1="20" x2="54" y2="12" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="9" r="3" fill="#d4af37"/>
  <path d="M28,83 L36,72 C38,68 44,68 44,63" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2,2" opacity="0.6"/>
  <circle cx="28" cy="83" r="4" fill="#d4af37" opacity="0.9"/>
  <path d="M36,83 L44,74" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2,2" opacity="0.4"/>
  <circle cx="36" cy="83" r="3" fill="#d4af37" opacity="0.7"/>
</svg>`,

    // VL·11 — Detektif (Detective) — Good
    // Concept: Two overlapping circles investigated — team comparison
    "VL·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="36" cy="48" r="22" fill="rgba(65,131,215,0.08)" stroke="#4183d7" stroke-width="1.5"/>
  <circle cx="64" cy="48" r="22" fill="rgba(220,20,60,0.08)" stroke="#dc143c" stroke-width="1.5"/>
  <path d="M50,28 C54,34 54,62 50,68 C46,62 46,34 50,28 Z" fill="rgba(212,175,55,0.2)"/>
  <line x1="36" y1="26" x2="36" y2="70" stroke="#4183d7" stroke-width="0.4" opacity="0.3"/>
  <line x1="64" y1="26" x2="64" y2="70" stroke="#dc143c" stroke-width="0.4" opacity="0.3"/>
  <text x="30" y="52" font-family="'Cinzel',serif" font-size="9" fill="#4183d7" text-anchor="middle" font-weight="700">A</text>
  <text x="70" y="52" font-family="'Cinzel',serif" font-size="9" fill="#dc143c" text-anchor="middle" font-weight="700">B</text>
  <text x="50" y="52" font-family="'Cinzel',serif" font-size="7" fill="#d4af37" text-anchor="middle" font-weight="900">?</text>
  <path d="M30,78 L44,72" stroke="#4183d7" stroke-width="1" stroke-linecap="round"/>
  <path d="M70,78 L56,72" stroke="#dc143c" stroke-width="1" stroke-linecap="round"/>
  <circle cx="50" cy="82" r="5" fill="none" stroke="#d4af37" stroke-width="1"/>
  <line x1="50" y1="68" x2="50" y2="76" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="50" cy="14" r="4" fill="#d4af37" opacity="0.7"/>
  <line x1="50" y1="18" x2="50" y2="26" stroke="#d4af37" stroke-width="0.6" stroke-dasharray="2,2"/>
</svg>`,

    // VL·12 — Medium — Good
    // Concept: Ghost hand reaching up from grave — spirit communication
    "VL·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ghostG" cx="50%" cy="80%">
      <stop offset="0%" stop-color="rgba(65,131,215,0.3)"/>
      <stop offset="100%" stop-color="rgba(65,131,215,0)"/>
    </radialGradient>
  </defs>
  <ellipse cx="50" cy="70" rx="30" ry="15" fill="url(#ghostG)"/>
  <line x1="20" y1="72" x2="80" y2="72" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
  <rect x="35" y="72" width="6" height="14" rx="1" fill="#111" stroke="#d4af37" stroke-width="0.6"/>
  <rect x="59" y="72" width="6" height="14" rx="1" fill="#111" stroke="#d4af37" stroke-width="0.6"/>
  <path d="M38,72 L32,58 L30,45 L35,35 L42,30 L50,28 L58,30 L65,35 L70,45 L68,58 L62,72 Z" fill="rgba(65,131,215,0.15)" stroke="#4183d7" stroke-width="1"/>
  <path d="M42,72 Q38,65 40,58 Q44,52 50,50 Q56,52 60,58 Q62,65 58,72" fill="rgba(65,131,215,0.1)" stroke="#4183d7" stroke-width="0.5"/>
  <path d="M44,30 C42,22 46,15 50,13 C54,15 58,22 56,30" fill="none" stroke="#4183d7" stroke-width="1" opacity="0.7"/>
  <ellipse cx="44" cy="40" rx="5" ry="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="56" cy="40" rx="5" ry="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <path d="M43,53 Q46,57 50,57 Q54,57 57,53" fill="none" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="50" cy="14" r="3" fill="#4183d7" opacity="0.6"/>
  <circle cx="44" cy="10" r="2" fill="#4183d7" opacity="0.4"/>
  <circle cx="56" cy="10" r="2" fill="#4183d7" opacity="0.4"/>
  <circle cx="50" cy="6" r="1.5" fill="#4183d7" opacity="0.3"/>
</svg>`,

    // VL·13 — Penyihir Penukar (Wizard) — Good
    // Concept: Two playing cards being swapped mid-air
    "VL·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M55,60 C65,55 75,45 70,30" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="3,3"/>
  <path d="M45,40 C35,45 25,55 30,70" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="3,3"/>
  <polygon points="68,26 72,34 64,34" fill="#d4af37"/>
  <polygon points="32,74 28,66 36,66" fill="#d4af37"/>
  <g transform="rotate(-15,35,45)">
    <rect x="18" y="28" width="30" height="42" rx="3" fill="#0d1a2e" stroke="#4183d7" stroke-width="1.5"/>
    <rect x="21" y="31" width="24" height="36" rx="2" fill="none" stroke="#4183d7" stroke-width="0.4" opacity="0.5"/>
    <text x="33" y="56" font-family="serif" font-size="18" fill="#4183d7" text-anchor="middle">♠</text>
    <text x="23" y="38" font-family="serif" font-size="7" fill="#4183d7" text-anchor="middle">A</text>
  </g>
  <g transform="rotate(15,65,55)">
    <rect x="52" y="30" width="30" height="42" rx="3" fill="#1a0000" stroke="#dc143c" stroke-width="1.5"/>
    <rect x="55" y="33" width="24" height="36" rx="2" fill="none" stroke="#dc143c" stroke-width="0.4" opacity="0.5"/>
    <text x="67" y="58" font-family="serif" font-size="18" fill="#dc143c" text-anchor="middle">♥</text>
    <text x="57" y="40" font-family="serif" font-size="7" fill="#dc143c" text-anchor="middle">K</text>
  </g>
  <circle cx="50" cy="50" r="5" fill="#d4af37" opacity="0.9"/>
  <path d="M47,50 L50,44 L53,50 L50,56 Z" fill="#0a0a0c"/>
</svg>`,

    // VL·18 — Prajurit (Bodyguard) — Good
    // Concept: Figure jumping in front of bullet — self-sacrifice
    "VL·18": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 78,22 78,52 50,75 22,52 22,22" fill="none" stroke="#4183d7" stroke-width="0.5" opacity="0.3"/>
  <path d="M50,18 L73,28 L73,50 C73,64 62,72 50,80 C38,72 27,64 27,50 L27,28 Z" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M50,24 L68,32 L68,50 C68,62 58,70 50,76 C42,70 32,62 32,50 L32,32 Z" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.4"/>
  <line x1="50" y1="24" x2="50" y2="76" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
  <line x1="32" y1="50" x2="68" y2="50" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
  <path d="M40,40 L50,32 L60,40 L56,56 L44,56 Z" fill="rgba(65,131,215,0.3)" stroke="#4183d7" stroke-width="1"/>
  <circle cx="50" cy="44" r="6" fill="rgba(65,131,215,0.5)" stroke="#d4af37" stroke-width="0.8"/>
  <line x1="78" y1="44" x2="60" y2="44" stroke="#dc143c" stroke-width="2" stroke-linecap="round"/>
  <polygon points="78,41 86,44 78,47" fill="#dc143c"/>
  <circle cx="60" cy="44" r="3" fill="#d4af37"/>
  <path d="M44,56 L40,68 M56,56 L60,68" stroke="#d4af37" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
</svg>`,

    // VL·19 — Pendeta (Priest) — Good
    // Concept: Holy water vial + cross — divine purification
    "VL·19": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="holyG" cx="50%" cy="30%">
      <stop offset="0%" stop-color="rgba(255,255,220,0.9)"/>
      <stop offset="100%" stop-color="rgba(200,200,100,0.3)"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="45" r="30" fill="rgba(255,255,180,0.04)" stroke="#d4af37" stroke-width="0.4" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="78" stroke="#d4af37" stroke-width="3" stroke-linecap="round"/>
  <line x1="32" y1="28" x2="68" y2="28" stroke="#d4af37" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="10" r="4" fill="#d4af37"/>
  <path d="M40,55 L40,40 Q40,35 45,35 L55,35 Q60,35 60,40 L60,55 Q60,75 50,80 Q40,75 40,55 Z" fill="url(#holyG)" stroke="#d4af37" stroke-width="1.2"/>
  <ellipse cx="50" cy="35" rx="10" ry="3" fill="rgba(255,255,220,0.8)" stroke="#d4af37" stroke-width="0.8"/>
  <line x1="43" y1="50" x2="57" y2="50" stroke="rgba(65,131,215,0.5)" stroke-width="0.6"/>
  <line x1="44" y1="56" x2="56" y2="56" stroke="rgba(65,131,215,0.4)" stroke-width="0.6"/>
  <line x1="45" y1="62" x2="55" y2="62" stroke="rgba(65,131,215,0.3)" stroke-width="0.5"/>
  <circle cx="50" cy="60" r="4" fill="rgba(65,131,215,0.3)"/>
  <path d="M34,36 C30,20 38,12 50,10" fill="none" stroke="#d4af37" stroke-width="0.6" opacity="0.4" stroke-dasharray="2,2"/>
  <circle cx="34" cy="36" r="2" fill="#d4af37" opacity="0.6"/>
</svg>`,

    // VL·20 — Veteran Tua (Veteran) — Good
    // Concept: Dog tags + bullet-wound scar — tough survivor
    "VL·20": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="none" stroke="#666" stroke-width="0.5" opacity="0.3"/>
  <line x1="43" y1="18" x2="43" y2="48" stroke="#aaa" stroke-width="1.5"/>
  <line x1="57" y1="18" x2="57" y2="48" stroke="#aaa" stroke-width="1.5"/>
  <rect x="34" y="48" width="18" height="24" rx="9" fill="#2a2a2a" stroke="#aaa" stroke-width="1.5"/>
  <rect x="48" y="48" width="18" height="24" rx="9" fill="#222" stroke="#888" stroke-width="1.5"/>
  <text x="43" y="60" font-family="'Cinzel',serif" font-size="5.5" fill="#aaa" text-anchor="middle">VETERAN</text>
  <text x="43" y="67" font-family="'Cinzel',serif" font-size="5" fill="#888" text-anchor="middle">VL·20</text>
  <text x="57" y="60" font-family="'Cinzel',serif" font-size="5.5" fill="#888" text-anchor="middle">DESA</text>
  <text x="57" y="67" font-family="'Cinzel',serif" font-size="5" fill="#666" text-anchor="middle">GOOD</text>
  <path d="M22,35 C28,28 38,30 42,40 C38,36 30,36 28,42 Z" fill="#3a2010" stroke="#d4af37" stroke-width="0.8"/>
  <path d="M72,62 C66,55 58,57 54,66 C58,62 66,62 68,68 Z" fill="#3a2010" stroke="#d4af37" stroke-width="0.8"/>
  <path d="M24,38 L38,44" stroke="#d4af37" stroke-width="0.6" opacity="0.5" stroke-dasharray="2,2"/>
  <path d="M70,65 L56,62" stroke="#d4af37" stroke-width="0.6" opacity="0.4" stroke-dasharray="2,2"/>
  <circle cx="50" cy="12" r="4" fill="none" stroke="#aaa" stroke-width="1.5"/>
  <circle cx="50" cy="12" r="1.5" fill="#aaa"/>
</svg>`,

    // VL·21 — Murid Peramal (Apprentice Seer) — Good
    // Concept: Smaller orb / half-open eye — inheriting the gift
    "VL·21": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="appOrb" cx="40%" cy="35%">
      <stop offset="0%" stop-color="#a8d8ff" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0d1a2e" stop-opacity="0.9"/>
    </radialGradient>
  </defs>
  <circle cx="36" cy="50" r="18" fill="url(#appOrb)" stroke="#d4af37" stroke-width="0.8" opacity="0.5"/>
  <text x="36" y="54" font-size="14" fill="#4183d7" text-anchor="middle" opacity="0.4">?</text>
  <line x1="52" y1="38" x2="62" y2="30" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="50" cy="30" r="1.5" fill="#d4af37" opacity="0.6"/>
  <circle cx="65" cy="45" r="22" fill="rgba(65,131,215,0.1)" stroke="#4183d7" stroke-width="1.2"/>
  <path d="M53,35 L65,27 L77,35 L73,51 L57,51 Z" fill="none" stroke="#a8d8ff" stroke-width="0.5" opacity="0.5"/>
  <ellipse cx="60" cy="36" rx="5" ry="3" fill="rgba(255,255,255,0.2)" transform="rotate(-20,60,36)"/>
  <circle cx="65" cy="45" r="7" fill="#0d1a2e" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="65" cy="45" r="3.5" fill="#4183d7" opacity="0.7"/>
  <circle cx="67" cy="43" r="1.5" fill="rgba(255,255,255,0.5)"/>
  <polygon points="47,72 53,72 52,80 48,80" fill="#1a1a1a" stroke="#d4af37" stroke-width="0.6"/>
  <ellipse cx="65" cy="67" rx="7" ry="2" fill="#111" stroke="#d4af37" stroke-width="0.6"/>
  <path d="M50,18 L51.5,23 L56,24 L51.5,25.5 L50,30 L48.5,25.5 L44,24 L48.5,23 Z" fill="#d4af37" opacity="0.5" transform="scale(0.6) translate(34,10)"/>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 4 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // VL·22 — Penerawang Aura (Aura Seer) — Good
    // Concept: Radiating aura lines around a silhouette
    "VL·22": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="42" r="32" fill="none" stroke="#4183d7" stroke-width="0.4" opacity="0.3"/>
  <circle cx="50" cy="42" r="24" fill="none" stroke="#4183d7" stroke-width="0.4" opacity="0.4"/>
  <circle cx="50" cy="42" r="16" fill="rgba(65,131,215,0.08)" stroke="#4183d7" stroke-width="0.6"/>
  <line x1="50" y1="10" x2="50" y2="20" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="78" y1="20" x2="71" y2="27" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="88" y1="48" x2="78" y2="48" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="78" y1="76" x2="71" y2="69" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="22" y1="20" x2="29" y2="27" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="12" y1="48" x2="22" y2="48" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="22" y1="76" x2="29" y2="69" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="50" cy="34" rx="7" ry="8" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <path d="M38,50 C38,42 62,42 62,50 L62,70 L38,70 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="42" r="4" fill="#d4af37" opacity="0.3"/>
  <ellipse cx="50" cy="80" rx="12" ry="3" fill="rgba(0,0,0,0.4)"/>
</svg>`,

    // VL·23 — Sang Pengawas (Beholder) — Good
    // Concept: Eye hidden behind a curtain/veil — secret watcher
    "VL·23": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="5" width="80" height="55" rx="3" fill="#0d1a2e" stroke="#d4af37" stroke-width="1"/>
  <path d="M10,5 C25,20 40,28 50,28 C60,28 75,20 90,5" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <rect x="10" y="5" width="10" height="55" rx="2" fill="#0a1520" stroke="#4183d7" stroke-width="0.5"/>
  <rect x="80" y="5" width="10" height="55" rx="2" fill="#0a1520" stroke="#4183d7" stroke-width="0.5"/>
  <path d="M20,35 C20,22 80,22 80,35 C80,48 20,48 20,35 Z" fill="rgba(65,131,215,0.1)" stroke="#4183d7" stroke-width="1"/>
  <circle cx="50" cy="35" r="10" fill="#0d1a2e" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="35" r="6" fill="#4183d7" opacity="0.8"/>
  <circle cx="50" cy="35" r="3" fill="#000"/>
  <circle cx="52" cy="33" r="1.5" fill="rgba(255,255,255,0.6)"/>
  <path d="M18,60 C20,75 80,75 82,60" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="18" cy="60" r="3" fill="#d4af37"/>
  <circle cx="82" cy="60" r="3" fill="#d4af37"/>
  <rect x="20" y="70" width="60" height="25" rx="2" fill="#0a0a0c" stroke="#333" stroke-width="0.5"/>
  <text x="50" y="86" font-family="'Cinzel',serif" font-size="7" fill="#d4af37" text-anchor="middle" opacity="0.7">BEHOLDER</text>
</svg>`,

    // VL·24 — Warga Berpenyakit (Diseased) — Good
    // Concept: Biohazard circle + wolf being repelled
    "VL·24": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="45" r="35" fill="rgba(0,200,0,0.04)" stroke="#00cc44" stroke-width="0.5" stroke-dasharray="3,3"/>
  <circle cx="50" cy="45" r="18" fill="rgba(0,200,0,0.08)" stroke="#00cc44" stroke-width="1"/>
  <circle cx="50" cy="45" r="6" fill="none" stroke="#00cc44" stroke-width="1.5"/>
  <path d="M50,39 L50,32 M44,42 L38,38 M56,42 L62,38" stroke="#00cc44" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M44,48 C44,52 46,55 50,55 C54,55 56,52 56,48" fill="none" stroke="#00cc44" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="50" cy="45" r="3" fill="#00cc44" opacity="0.8"/>
  <path d="M68,60 C74,54 78,62 72,70 C66,78 58,74 60,68 L64,64 Z" fill="#1a0000" stroke="#dc143c" stroke-width="1"/>
  <ellipse cx="70" cy="62" rx="3" ry="2" fill="#ff1a1a" opacity="0.7"/>
  <ellipse cx="74" cy="65" rx="3" ry="2" fill="#ff1a1a" opacity="0.5"/>
  <line x1="58" y1="60" x2="66" y2="60" stroke="#dc143c" stroke-width="1.5" opacity="0.6"/>
  <path d="M24,70 C28,62 38,65 36,74 C30,78 22,76 24,70 Z" fill="none" stroke="#00cc44" stroke-width="1" opacity="0.4" stroke-dasharray="2,2"/>
  <text x="50" y="90" font-family="'Cinzel',serif" font-size="6" fill="#00cc44" text-anchor="middle" opacity="0.6">DARAH BERACUN</text>
</svg>`,

    // VL·25 — Hantu Gentayangan (Ghost) — Good
    // Concept: Transparent ghost floating with letter dropping from sky
    "VL·25": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ghostAura" cx="50%" cy="60%">
      <stop offset="0%" stop-color="rgba(65,131,215,0.2)"/>
      <stop offset="100%" stop-color="rgba(65,131,215,0)"/>
    </radialGradient>
  </defs>
  <ellipse cx="50" cy="75" rx="22" ry="8" fill="url(#ghostAura)"/>
  <path d="M32,72 L32,45 C32,28 68,28 68,45 L68,72 C68,72 62,66 56,72 C50,78 44,66 38,72 C36,74 34,74 32,72 Z" fill="rgba(65,131,215,0.15)" stroke="#4183d7" stroke-width="1.2"/>
  <ellipse cx="42" cy="48" rx="5" ry="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <ellipse cx="58" cy="48" rx="5" ry="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="0.8"/>
  <circle cx="42" cy="48" r="3" fill="rgba(65,131,215,0.5)"/>
  <circle cx="58" cy="48" r="3" fill="rgba(65,131,215,0.5)"/>
  <path d="M43,60 Q46,63 50,63 Q54,63 57,60" fill="none" stroke="#4183d7" stroke-width="0.8"/>
  <rect x="38" y="8" width="24" height="18" rx="2" fill="#0d1a2e" stroke="#d4af37" stroke-width="1"/>
  <line x1="41" y1="13" x2="59" y2="13" stroke="#d4af37" stroke-width="0.6" opacity="0.5"/>
  <line x1="41" y1="17" x2="56" y2="17" stroke="#d4af37" stroke-width="0.6" opacity="0.4"/>
  <line x1="41" y1="21" x2="53" y2="21" stroke="#d4af37" stroke-width="0.6" opacity="0.3"/>
  <line x1="50" y1="26" x2="50" y2="34" stroke="#4183d7" stroke-width="1" stroke-dasharray="2,2"/>
  <polygon points="47,34 50,40 53,34" fill="#4183d7" opacity="0.7"/>
</svg>`,

    // VL·26 — Orang Dungu (Village Idiot) — Good
    // Concept: Noose with X crossed out — immune to execution
    "VL·26": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="5" x2="50" y2="28" stroke="#888" stroke-width="2"/>
  <path d="M50,28 C50,28 60,28 62,38 C64,48 56,52 50,52 C44,52 36,48 38,38 C40,28 50,28 50,28 Z" fill="#111" stroke="#888" stroke-width="1.5"/>
  <circle cx="50" cy="42" r="8" fill="#0a0a0c" stroke="#888" stroke-width="1"/>
  <line x1="34" y1="28" x2="66" y2="28" stroke="#888" stroke-width="2"/>
  <line x1="66" y1="10" x2="66" y2="28" stroke="#888" stroke-width="2"/>
  <line x1="30" y1="62" x2="70" y2="90" stroke="#4183d7" stroke-width="3" stroke-linecap="round"/>
  <line x1="70" y1="62" x2="30" y2="90" stroke="#4183d7" stroke-width="3" stroke-linecap="round"/>
  <circle cx="30" cy="62" r="4" fill="#4183d7"/>
  <circle cx="70" cy="62" r="4" fill="#4183d7"/>
  <circle cx="30" cy="90" r="4" fill="#4183d7"/>
  <circle cx="70" cy="90" r="4" fill="#4183d7"/>
  <circle cx="50" cy="76" r="14" fill="none" stroke="#4183d7" stroke-width="2"/>
  <text x="50" y="80" font-family="'Cinzel',serif" font-size="8" fill="#d4af37" text-anchor="middle" font-weight="900">KEBAL</text>
</svg>`,

    // VL·27 — Insomnia — Good
    // Concept: Open eye with moon and stars — always awake
    "VL·27": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="72" cy="22" r="12" fill="rgba(212,175,55,0.1)" stroke="#d4af37" stroke-width="1"/>
  <path d="M64,22 C64,14 70,10 76,12 C72,13 70,17 70,22 C70,27 72,31 76,32 C70,34 64,30 64,22 Z" fill="#d4af37" opacity="0.8"/>
  <circle cx="58" cy="14" r="1.5" fill="#d4af37" opacity="0.6"/>
  <circle cx="86" cy="14" r="1" fill="#d4af37" opacity="0.4"/>
  <circle cx="82" cy="30" r="1.5" fill="#d4af37" opacity="0.5"/>
  <circle cx="64" cy="32" r="1" fill="#d4af37" opacity="0.3"/>
  <path d="M10,58 C10,40 90,40 90,58 C90,76 10,76 10,58 Z" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M10,58 C10,48 90,48 90,58 Z" fill="#0a0a0c"/>
  <line x1="20" y1="52" x2="18" y2="44" stroke="#d4af37" stroke-width="1" stroke-linecap="round"/>
  <line x1="35" y1="48" x2="34" y2="40" stroke="#d4af37" stroke-width="1" stroke-linecap="round"/>
  <line x1="50" y1="46" x2="50" y2="38" stroke="#d4af37" stroke-width="1" stroke-linecap="round"/>
  <line x1="65" y1="48" x2="66" y2="40" stroke="#d4af37" stroke-width="1" stroke-linecap="round"/>
  <line x1="80" y1="52" x2="82" y2="44" stroke="#d4af37" stroke-width="1" stroke-linecap="round"/>
  <circle cx="50" cy="65" r="12" fill="#4183d7" opacity="0.7"/>
  <circle cx="50" cy="65" r="6" fill="#0a1520"/>
  <circle cx="50" cy="65" r="3" fill="#4183d7" opacity="0.4"/>
  <circle cx="53" cy="62" r="2" fill="rgba(255,255,255,0.5)"/>
</svg>`,

    // VL·28 — Sang Martir (Martyr) — Good
    // Concept: Cross with blood drop — self-sacrifice
    "VL·28": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="46" r="34" fill="rgba(212,175,55,0.04)" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
  <line x1="50" y1="12" x2="50" y2="82" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
  <line x1="28" y1="30" x2="72" y2="30" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
  <path d="M50,12 L54,16 L50,20 L46,16 Z" fill="#d4af37"/>
  <circle cx="50" cy="12" r="5" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M44,55 C44,48 56,48 56,55 C56,64 50,72 50,72 C50,72 44,64 44,55 Z" fill="#dc143c" stroke="#8b0000" stroke-width="1"/>
  <circle cx="50" cy="55" r="5" fill="#ff4444" opacity="0.6"/>
  <line x1="38" y1="72" x2="62" y2="72" stroke="#dc143c" stroke-width="1" opacity="0.5"/>
  <path d="M30,82 C30,76 38,74 38,72" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.4" stroke-dasharray="2,2"/>
  <path d="M70,82 C70,76 62,74 62,72" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.4" stroke-dasharray="2,2"/>
</svg>`,

    // VL·29 — Tukang Batu (Mason) — Good
    // Concept: Square & compass Freemason symbol — brotherhood
    "VL·29": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,72 L50,18 L80,72 Z" fill="none" stroke="#d4af37" stroke-width="2"/>
  <path d="M30,72 C30,52 70,52 70,72" fill="none" stroke="#d4af37" stroke-width="2"/>
  <line x1="50" y1="18" x2="50" y2="42" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <circle cx="50" cy="52" r="8" fill="rgba(212,175,55,0.15)" stroke="#d4af37" stroke-width="1"/>
  <text x="50" y="56" font-family="'Cinzel',serif" font-size="9" fill="#d4af37" text-anchor="middle" font-weight="900">G</text>
  <line x1="26" y1="82" x2="74" y2="82" stroke="#d4af37" stroke-width="1" opacity="0.4"/>
  <circle cx="20" cy="72" r="3" fill="#d4af37"/>
  <circle cx="80" cy="72" r="3" fill="#d4af37"/>
  <circle cx="50" cy="18" r="3" fill="#d4af37"/>
</svg>`,

    // VL·30 — Tukang Batu #2 (Mason) uses same SVG as VL·29

    // ══════════════════════════════════════════════════
    // DECK 5 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // VL·31 — Nenek Sihir Tua (Old Hag) — Good
    // Concept: Cauldron with silencing smoke
    "VL·31": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="78" rx="28" ry="7" fill="#111" stroke="#d4af37" stroke-width="1.2"/>
  <path d="M22,60 L28,78 L72,78 L78,60 C78,44 22,44 22,60 Z" fill="#1a1a1a" stroke="#d4af37" stroke-width="1.5"/>
  <ellipse cx="50" cy="60" rx="28" ry="10" fill="#0a0a0c" stroke="#d4af37" stroke-width="1"/>
  <path d="M35,55 C38,48 50,46 62,50 C56,50 50,52 44,55 Z" fill="rgba(138,43,226,0.3)"/>
  <path d="M40,60 C42,53 58,53 60,60" fill="rgba(138,43,226,0.2)" stroke="none"/>
  <path d="M30,44 C32,30 34,20 38,10" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M40,44 C40,32 42,22 44,14" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M50,44 C50,32 50,22 50,14" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="28" y1="12" x2="36" y2="12" stroke="#dc143c" stroke-width="1.5"/>
  <line x1="38" y1="12" x2="46" y2="12" stroke="#dc143c" stroke-width="1.5"/>
  <line x1="46" y1="12" x2="54" y2="12" stroke="#dc143c" stroke-width="1.5"/>
  <line x1="26" y1="60" x2="74" y2="60" stroke="#d4af37" stroke-width="1" opacity="0.4"/>
  <circle cx="28" cy="68" r="3" fill="rgba(138,43,226,0.5)"/>
  <circle cx="72" cy="68" r="3" fill="rgba(138,43,226,0.5)"/>
</svg>`,

    // VL·32 — Kakek Renta (Old Man) — Good
    // Concept: Hourglass almost empty — running out of time
    "VL·32": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="8" width="40" height="6" rx="2" fill="#d4af37"/>
  <rect x="30" y="86" width="40" height="6" rx="2" fill="#d4af37"/>
  <path d="M30,14 L50,50 L30,86 L70,86 L50,50 L70,14 Z" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M34,14 L50,46 L66,14 Z" fill="rgba(212,175,55,0.05)"/>
  <path d="M34,86 L50,54 L66,86 Z" fill="rgba(212,175,55,0.15)"/>
  <path d="M44,80 L50,54 L56,80 Z" fill="#d4af37" opacity="0.5"/>
  <line x1="36" y1="75" x2="64" y2="75" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
  <line x1="38" y1="80" x2="62" y2="80" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
  <circle cx="50" cy="47" r="2" fill="#d4af37"/>
  <path d="M48,20 L50,17 L52,20" fill="none" stroke="#dc143c" stroke-width="1" opacity="0.6"/>
  <line x1="50" y1="17" x2="50" y2="14" stroke="#dc143c" stroke-width="1" opacity="0.6"/>
  <text x="50" y="95" font-family="'Cinzel',serif" font-size="5" fill="#dc143c" text-anchor="middle" opacity="0.7">WAKTU HABIS</text>
</svg>`,

    // VL·33 — Penyidik Gaib (Paranormal Investigator) — Good
    // Concept: Radar circle expanding — risk of turning into wolf
    "VL·33": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="none" stroke="#00cc44" stroke-width="0.4" opacity="0.3"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#00cc44" stroke-width="0.5" opacity="0.4"/>
  <circle cx="50" cy="50" r="18" fill="none" stroke="#00cc44" stroke-width="0.7" opacity="0.5"/>
  <circle cx="50" cy="50" r="4" fill="rgba(0,204,68,0.3)" stroke="#00cc44" stroke-width="1"/>
  <line x1="50" y1="50" x2="50" y2="12" stroke="#00cc44" stroke-width="0.5" opacity="0.3"/>
  <line x1="50" y1="50" x2="88" y2="50" stroke="#00cc44" stroke-width="0.5" opacity="0.3"/>
  <line x1="50" y1="50" x2="50" y2="88" stroke="#00cc44" stroke-width="0.5" opacity="0.3"/>
  <line x1="50" y1="50" x2="12" y2="50" stroke="#00cc44" stroke-width="0.5" opacity="0.3"/>
  <path d="M50,50 L78,22" stroke="#00cc44" stroke-width="1.5" opacity="0.8"/>
  <circle cx="78" cy="22" r="4" fill="#00cc44" opacity="0.6"/>
  <circle cx="64" cy="36" r="3" fill="#dc143c" opacity="0.7"/>
  <line x1="62" y1="64" x2="74" y2="70" stroke="#dc143c" stroke-width="1" opacity="0.5"/>
  <polygon points="66,58 72,62 66,66" fill="#dc143c" opacity="0.6"/>
  <text x="50" y="92" font-family="'Cinzel',serif" font-size="5" fill="#00cc44" text-anchor="middle" opacity="0.6">RADAR AKTIF</text>
</svg>`,

    // VL·34 — Cinta Damai (Pacifist) — Good
    // Concept: White dove / peace + crossed swords blocked
    "VL·34": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="45" r="32" fill="rgba(65,131,215,0.05)" stroke="#4183d7" stroke-width="0.4" opacity="0.4"/>
  <path d="M50,26 C44,20 34,20 30,28 C36,26 44,28 50,36 C56,28 64,26 70,28 C66,20 56,20 50,26 Z" fill="#e8e8e8" stroke="#aaa" stroke-width="0.8"/>
  <path d="M50,36 C44,44 36,46 32,52 C38,50 48,48 50,44 C52,48 62,50 68,52 C64,46 56,44 50,36 Z" fill="#e8e8e8" stroke="#aaa" stroke-width="0.8"/>
  <circle cx="50" cy="40" r="5" fill="#e8e8e8" stroke="#aaa" stroke-width="0.8"/>
  <circle cx="48" cy="38" r="2" fill="#333"/>
  <path d="M48,44 L48,52 C48,58 43,62 50,64 C57,62 52,58 52,52 L52,44" fill="#e8e8e8" stroke="#aaa" stroke-width="0.8"/>
  <line x1="24" y1="75" x2="44" y2="68" stroke="#dc143c" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  <line x1="76" y1="75" x2="56" y2="68" stroke="#dc143c" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  <line x1="34" y1="82" x2="66" y2="65" stroke="#4183d7" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="66" y1="82" x2="34" y2="65" stroke="#4183d7" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

    // VL·35 — Pangeran Elit (Prince) — Good
    // Concept: Shield crest with crown — noble immunity
    "VL·35": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="prGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2a3a"/>
      <stop offset="100%" stop-color="#0a1015"/>
    </linearGradient>
  </defs>
  <path d="M50,15 L75,25 L75,55 C75,70 62,80 50,88 C38,80 25,70 25,55 L25,25 Z" fill="url(#prGrad)" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M50,20 L70,28 L70,54 C70,67 58,76 50,83 C42,76 30,67 30,54 L30,28 Z" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.4"/>
  <polygon points="38,32 42,26 50,20 58,26 62,32 56,38 50,36 44,38" fill="#d4af37" stroke="#aa771c" stroke-width="0.8"/>
  <polygon points="44,38 46,42 50,40 54,42 56,38" fill="#d4af37"/>
  <circle cx="42" cy="34" r="2" fill="#dc143c"/>
  <circle cx="58" cy="34" r="2" fill="#4183d7"/>
  <circle cx="50" cy="30" r="2" fill="#00aa44"/>
  <rect x="38" y="56" width="24" height="16" rx="2" fill="rgba(212,175,55,0.1)" stroke="#d4af37" stroke-width="0.8"/>
  <text x="50" y="68" font-family="'Cinzel',serif" font-size="8" fill="#d4af37" text-anchor="middle" font-weight="900">P</text>
  <circle cx="50" cy="15" r="4" fill="#d4af37"/>
</svg>`,

    // VL·36 — Perapal Mantra (Spellcaster) — Good
    // Concept: Sealed lips / rune of silence
    "VL·36": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="rgba(138,43,226,0.05)" stroke="#8a2be2" stroke-width="0.5" opacity="0.5"/>
  <path d="M20,50 C20,36 36,28 50,28 C64,28 80,36 80,50 C80,64 64,72 50,72 C36,72 20,64 20,50 Z" fill="#111" stroke="#8a2be2" stroke-width="1.2"/>
  <path d="M28,50 C32,42 42,38 50,38 C58,38 68,42 72,50" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M30,55 C34,63 42,68 50,68 C58,68 66,63 70,55" fill="none" stroke="#d4af37" stroke-width="1.5"/>
  <line x1="20" y1="50" x2="80" y2="50" stroke="#dc143c" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <circle cx="20" cy="50" r="4" fill="#dc143c"/>
  <circle cx="80" cy="50" r="4" fill="#dc143c"/>
  <path d="M36,38 C34,30 38,22 44,20" fill="none" stroke="#8a2be2" stroke-width="1" opacity="0.5"/>
  <path d="M64,38 C66,30 62,22 56,20" fill="none" stroke="#8a2be2" stroke-width="1" opacity="0.5"/>
  <circle cx="44" cy="20" r="3" fill="#8a2be2" opacity="0.6"/>
  <circle cx="56" cy="20" r="3" fill="#8a2be2" opacity="0.6"/>
</svg>`,

    // VL·37 — Jagoan Kampung (Tough Guy) — Good
    // Concept: Muscular arm with bite mark — survives one hit
    "VL·37": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M32,72 C28,62 26,45 30,32 C34,20 44,16 50,16 C56,16 66,20 70,32 C74,45 72,62 68,72" fill="#1a1a1a" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M36,68 C34,58 32,44 36,32 C40,22 46,18 50,18 C54,18 60,22 64,32 C68,44 66,58 64,68" fill="#222"/>
  <path d="M38,50 C38,40 62,40 62,50 C62,60 54,66 50,66 C46,66 38,60 38,50 Z" fill="#2a2a2a" stroke="#d4af37" stroke-width="1"/>
  <path d="M32,72 L68,72 L72,80 L28,80 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <ellipse cx="50" cy="72" rx="20" ry="5" fill="rgba(0,0,0,0.5)"/>
  <path d="M38,46 C42,42 58,42 62,46" fill="none" stroke="#dc143c" stroke-width="1.5" stroke-dasharray="2,1"/>
  <path d="M40,50 C44,46 56,46 60,50" fill="none" stroke="#dc143c" stroke-width="1" stroke-dasharray="2,1" opacity="0.6"/>
  <line x1="38" y1="46" x2="36" y2="40" stroke="#dc143c" stroke-width="0.8" opacity="0.5"/>
  <line x1="62" y1="46" x2="64" y2="40" stroke="#dc143c" stroke-width="0.8" opacity="0.5"/>
  <text x="50" y="92" font-family="'Cinzel',serif" font-size="5.5" fill="#d4af37" text-anchor="middle" opacity="0.7">BERTAHAN MALAM 1</text>
</svg>`,

    // VL·38 — Pembuat Onar (Troublemaker) — Good
    // Concept: Two arrows swapping — swap two positions
    "VL·38": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="25" cy="40" r="14" fill="#0d1a2e" stroke="#4183d7" stroke-width="1.5"/>
  <circle cx="75" cy="60" r="14" fill="#1a0000" stroke="#dc143c" stroke-width="1.5"/>
  <text x="25" y="44" font-family="'Cinzel',serif" font-size="10" fill="#4183d7" text-anchor="middle" font-weight="900">A</text>
  <text x="75" y="64" font-family="'Cinzel',serif" font-size="10" fill="#dc143c" text-anchor="middle" font-weight="900">B</text>
  <path d="M38,35 C50,20 65,28 70,48" fill="none" stroke="#d4af37" stroke-width="2"/>
  <polygon points="68,42 75,52 62,52" fill="#d4af37"/>
  <path d="M62,65 C50,80 35,72 30,52" fill="none" stroke="#d4af37" stroke-width="2"/>
  <polygon points="32,58 25,48 38,48" fill="#d4af37"/>
  <circle cx="50" cy="50" r="6" fill="#d4af37" opacity="0.9"/>
  <path d="M47,50 L50,44 L53,50 L50,56 Z" fill="#0a0a0c"/>
</svg>`,

    // VL·39 — Pembaca Nasib (Fortune Teller) — Good
    // Concept: Flipped corpse card reveal — reading the dead
    "VL·39": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(-8, 36, 52)">
    <rect x="14" y="30" width="32" height="46" rx="3" fill="#111" stroke="#555" stroke-width="1"/>
    <line x1="18" y1="40" x2="42" y2="40" stroke="#555" stroke-width="0.5" opacity="0.4"/>
    <line x1="18" y1="50" x2="42" y2="50" stroke="#555" stroke-width="0.5" opacity="0.3"/>
    <text x="30" y="62" font-family="serif" font-size="18" fill="#555" text-anchor="middle">☠</text>
  </g>
  <g transform="rotate(8, 64, 48)">
    <rect x="48" y="24" width="32" height="46" rx="3" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.5"/>
    <rect x="51" y="27" width="26" height="40" rx="2" fill="none" stroke="#d4af37" stroke-width="0.4" opacity="0.5"/>
    <text x="64" y="52" font-family="serif" font-size="18" fill="#4183d7" text-anchor="middle">♛</text>
    <text x="53" y="33" font-family="serif" font-size="7" fill="#d4af37" text-anchor="middle">Q</text>
  </g>
  <path d="M46,70 L54,64" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="50" cy="86" r="6" fill="rgba(212,175,55,0.15)" stroke="#d4af37" stroke-width="1"/>
  <text x="50" y="90" font-family="serif" font-size="8" fill="#d4af37" text-anchor="middle">?!</text>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 6 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // WW·04 — Lycan — Evil
    // Concept: Half human face, half wolf skull
    "WW·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,15 C30,15 20,35 20,55 C20,75 35,85 50,85 C65,85 80,75 80,55 C80,35 70,15 50,15 Z" fill="#111" stroke="#dc143c" stroke-width="1.5"/>
  <path d="M50,15 C65,15 80,35 80,55 C80,75 65,85 50,85 L50,15 Z" fill="#1a0000"/>
  <path d="M50,15 C50,15 55,30 50,85 C45,30 50,15 50,15 Z" fill="#dc143c" opacity="0.3"/>
  <ellipse cx="35" cy="45" rx="6" ry="4" fill="#d4af37" opacity="0.8"/>
  <circle cx="35" cy="45" r="2" fill="#000"/>
  <polygon points="50,65 65,60 75,70 65,80 50,75" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
  <circle cx="65" cy="45" r="6" fill="#dc143c" stroke="#ff4444" stroke-width="1"/>
  <path d="M50,85 L50,15" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="4,2"/>
</svg>`,

    // WW·05 — Serigala Penyendiri (Lone Wolf) — Evil
    // Concept: Solitary wolf howling at a red moon
    "WW·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="35" fill="#1a0000" stroke="#dc143c" stroke-width="1"/>
  <circle cx="65" cy="35" r="15" fill="#ff4444" opacity="0.8"/>
  <circle cx="60" cy="30" r="3" fill="#000" opacity="0.3"/>
  <circle cx="68" cy="40" r="4" fill="#000" opacity="0.3"/>
  <path d="M25,80 C30,60 40,50 50,45 C45,35 55,30 60,25 C60,35 55,45 65,55 C65,65 55,75 55,80 L25,80 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="1.5"/>
  <polygon points="52,38 56,36 54,42" fill="#111"/>
  <path d="M20,80 L80,80" stroke="#dc143c" stroke-width="2"/>
</svg>`,

    // WW·06 — Penyihir Hitam (Sorcerer) — Evil
    // Concept: Dark magic, red magic circle
    "WW·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="none" stroke="#dc143c" stroke-width="1" opacity="0.5"/>
  <circle cx="50" cy="50" r="35" fill="none" stroke="#dc143c" stroke-width="1" stroke-dasharray="5,5"/>
  <polygon points="50,15 80,70 20,70" fill="none" stroke="#ff4444" stroke-width="1.5"/>
  <polygon points="50,85 20,30 80,30" fill="none" stroke="#ff4444" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="15" fill="#1a0000" stroke="#d4af37" stroke-width="2"/>
  <circle cx="50" cy="50" r="5" fill="#d4af37"/>
  <text x="50" y="54" font-family="'Cinzel',serif" font-size="12" fill="#000" text-anchor="middle">S</text>
  <path d="M50,10 L50,0 M90,50 L100,50 M50,90 L50,100 M10,50 L0,50" stroke="#d4af37" stroke-width="1"/>
</svg>`,

    // WW·07 — Antek (Minion) — Evil
    // Concept: Hands holding an evil wolf idol
    "WW·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,20 60,20 70,50 50,80 30,50" fill="#111" stroke="#dc143c" stroke-width="1.5"/>
  <circle cx="45" cy="40" r="3" fill="#ff4444"/>
  <circle cx="55" cy="40" r="3" fill="#ff4444"/>
  <path d="M48,60 L52,60 L50,70 Z" fill="#d4af37"/>
  <path d="M20,70 Q35,80 40,65" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
  <path d="M80,70 Q65,80 60,65" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
  <circle cx="20" cy="70" r="4" fill="#d4af37"/>
  <circle cx="80" cy="70" r="4" fill="#d4af37"/>
  <line x1="16" y1="74" x2="24" y2="66" stroke="#111" stroke-width="1"/>
  <line x1="76" y1="74" x2="84" y2="66" stroke="#111" stroke-width="1"/>
</svg>`,

    // WW·08 — Anak Serigala (Wolf Cub) — Evil
    // Concept: Small wolf paw with sharp claws, cute but deadly
    "WW·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,60 C30,45 70,45 70,60 C70,75 60,85 50,85 C40,85 30,75 30,60 Z" fill="#111" stroke="#dc143c" stroke-width="1.5"/>
  <circle cx="35" cy="40" r="8" fill="#1a0000" stroke="#dc143c" stroke-width="1"/>
  <circle cx="50" cy="35" r="9" fill="#1a0000" stroke="#dc143c" stroke-width="1"/>
  <circle cx="65" cy="40" r="8" fill="#1a0000" stroke="#dc143c" stroke-width="1"/>
  <polygon points="35,28 32,20 38,20" fill="#d4af37"/>
  <polygon points="50,22 47,14 53,14" fill="#d4af37"/>
  <polygon points="65,28 62,20 68,20" fill="#d4af37"/>
  <circle cx="50" cy="65" r="5" fill="#ff4444" opacity="0.6"/>
</svg>`,

    // WW·09 — Serigala Jahat Tua (Big Bad Wolf) — Evil
    // Concept: Huge jaws and piercing red eyes
    "WW·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,40 C40,20 60,20 80,40 C85,60 70,80 50,80 C30,80 15,60 20,40 Z" fill="#0d0d0d" stroke="#dc143c" stroke-width="2"/>
  <path d="M25,50 Q50,70 75,50" fill="none" stroke="#d4af37" stroke-width="2"/>
  <polygon points="30,50 35,65 40,50" fill="#ff4444"/>
  <polygon points="45,52 50,68 55,52" fill="#ff4444"/>
  <polygon points="60,50 65,65 70,50" fill="#ff4444"/>
  <ellipse cx="35" cy="35" rx="6" ry="4" fill="#ff4444" transform="rotate(-15 35 35)"/>
  <ellipse cx="65" cy="35" rx="6" ry="4" fill="#ff4444" transform="rotate(15 65 35)"/>
  <circle cx="35" cy="35" r="2" fill="#000"/>
  <circle cx="65" cy="35" r="2" fill="#000"/>
</svg>`,

    // WW·10 — Serigala Putih (White Wolf) — Evil
    // Concept: Wolf skull with white glowing aura
    "WW·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.1)" stroke="#fff" stroke-width="0.5"/>
  <path d="M35,40 C35,20 65,20 65,40 C65,55 55,75 55,80 L45,80 C45,75 35,55 35,40 Z" fill="#e8e8e8" stroke="#888" stroke-width="1.5"/>
  <polygon points="40,80 45,90 50,80 55,90 60,80" fill="#e8e8e8" stroke="#888" stroke-width="1"/>
  <ellipse cx="42" cy="45" rx="4" ry="6" fill="#111"/>
  <ellipse cx="58" cy="45" rx="4" ry="6" fill="#111"/>
  <circle cx="42" cy="45" r="2" fill="#ff4444"/>
  <circle cx="58" cy="45" r="2" fill="#ff4444"/>
  <path d="M48,60 L52,60 L50,65 Z" fill="#111"/>
  <line x1="50" y1="20" x2="50" y2="30" stroke="#d4af37" stroke-width="2"/>
</svg>`,

    // WW·11 — Serigala Mimpi (Dream Wolf) — Evil
    // Concept: Sleeping wolf wrapped in mist/Zzz symbols
    "WW·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,70 C30,50 70,50 80,70 C60,80 40,80 20,70 Z" fill="#111" stroke="#a8d8ff" stroke-width="1.5"/>
  <path d="M30,65 Q50,75 70,65" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="60" y="30" font-family="'Cinzel',serif" font-size="14" fill="#a8d8ff" opacity="0.8">Z</text>
  <text x="75" y="20" font-family="'Cinzel',serif" font-size="10" fill="#a8d8ff" opacity="0.6">z</text>
  <text x="85" y="10" font-family="'Cinzel',serif" font-size="6" fill="#a8d8ff" opacity="0.4">z</text>
  <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="#4183d7" stroke-width="1.5" opacity="0.5"/>
  <circle cx="35" cy="55" r="3" fill="#ff4444" opacity="0.5"/>
</svg>`,

    // WW·12 — Serigala Ganas (Dire Wolf) — Evil
    // Concept: Extremely jagged and aggressive wolf emblem
    "WW·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,10 80,30 90,60 50,90 10,60 20,30" fill="#1a0000" stroke="#dc143c" stroke-width="2"/>
  <polygon points="50,30 70,45 60,70 50,80 40,70 30,45" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <polygon points="35,45 45,55 35,50" fill="#ff4444"/>
  <polygon points="65,45 55,55 65,50" fill="#ff4444"/>
  <path d="M45,70 L50,60 L55,70" fill="none" stroke="#d4af37" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="45" stroke="#dc143c" stroke-width="2"/>
  <circle cx="50" cy="50" r="2" fill="#ff4444"/>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 7 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // WW·13 — Serigala Hitam (Black Wolf) — Evil
    // Concept: Pure black shadow wolf with just red outlines
    "WW·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,10 L75,30 L85,60 L50,90 L15,60 L25,30 Z" fill="#000" stroke="#dc143c" stroke-width="1"/>
  <path d="M50,20 L65,35 L70,55 L50,80 L30,55 L35,35 Z" fill="#0a0a0c" stroke="#ff4444" stroke-width="0.5"/>
  <circle cx="40" cy="45" r="3" fill="#ff4444"/>
  <circle cx="60" cy="45" r="3" fill="#ff4444"/>
  <path d="M48,65 L52,65 L50,75 Z" fill="#dc143c"/>
</svg>`,

    // WW·14 — Manusia Serigala (Wolf Man) — Evil
    // Concept: Split face (half man/half wolf)
    "WW·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,15 C25,15 20,40 20,60 C20,80 40,85 50,85 L50,15 Z" fill="#0d1a2e" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M50,15 C75,15 80,40 80,60 C80,80 60,85 50,85 L50,15 Z" fill="#1a0000" stroke="#dc143c" stroke-width="1.5"/>
  <ellipse cx="35" cy="45" rx="5" ry="3" fill="#fff"/>
  <circle cx="35" cy="45" r="2" fill="#4183d7"/>
  <polygon points="60,40 70,45 60,50 65,45" fill="#ff4444"/>
  <path d="M35,65 Q50,70 65,60" fill="none" stroke="#d4af37" stroke-width="1"/>
  <polygon points="65,60 60,70 70,70" fill="#d4af37"/>
</svg>`,

    // NT·02 — Penyamak Kulit (Tanner) — Neutral
    // Concept: Noose and leather stitching (wants to die)
    "NT·02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="5" x2="50" y2="30" stroke="#d4af37" stroke-width="2"/>
  <circle cx="50" cy="40" r="10" fill="none" stroke="#d4af37" stroke-width="2"/>
  <path d="M20,60 L80,60 L70,90 L30,90 Z" fill="#3a2010" stroke="#d4af37" stroke-width="1.5"/>
  <line x1="25" y1="65" x2="75" y2="65" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="30" y1="75" x2="70" y2="75" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="35" y1="85" x2="65" y2="85" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="50" cy="40" r="15" fill="none" stroke="#ff4444" stroke-width="1" opacity="0.3"/>
</svg>`,

    // NT·04 — Peniru (Doppelganger) — Neutral
    // Concept: Two identical featureless masks overlapping
    "NT·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="40" cy="50" rx="20" ry="30" fill="#1a1a1a" stroke="#d4af37" stroke-width="1.5"/>
  <ellipse cx="60" cy="50" rx="20" ry="30" fill="#0d1a2e" stroke="#4183d7" stroke-width="1.5" opacity="0.8"/>
  <path d="M40,50 A20,30 0 0,0 60,50 A20,30 0 0,0 40,50 Z" fill="rgba(212,175,55,0.2)"/>
  <circle cx="35" cy="40" r="3" fill="#d4af37"/>
  <circle cx="65" cy="40" r="3" fill="#4183d7"/>
  <circle cx="50" cy="65" r="4" fill="#fff" opacity="0.5"/>
</svg>`,

    // NT·05 — Pembunuh Berantai (Serial Killer) — Neutral
    // Concept: Bloody knife on dark base
    "NT·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,80 L40,70 L50,90 L40,100 Z" fill="#222" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M40,70 L80,20 C85,15 90,20 85,25 L45,80 Z" fill="#e8e8e8" stroke="#888" stroke-width="1"/>
  <polygon points="80,20 85,25 75,35" fill="#ff4444"/>
  <circle cx="70" cy="45" r="3" fill="#ff4444"/>
  <circle cx="55" cy="60" r="2" fill="#ff4444"/>
  <circle cx="85" cy="40" r="4" fill="#ff4444"/>
  <circle cx="50" cy="30" r="2" fill="#ff4444"/>
  <line x1="30" y1="80" x2="50" y2="90" stroke="#d4af37" stroke-width="2"/>
</svg>`,

    // NT·06 — Pemimpin Sekte (Cult Leader) — Neutral
    // Concept: Hooded figure with red/gold sect symbol
    "NT·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,10 C30,30 20,60 20,90 L80,90 C80,60 70,30 50,10 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M50,20 C40,35 35,55 35,70 C45,65 55,65 65,70 C65,55 60,35 50,20 Z" fill="#111"/>
  <circle cx="50" cy="60" r="10" fill="none" stroke="#ff4444" stroke-width="1.5"/>
  <polygon points="50,45 62,68 38,68" fill="none" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="58" r="2" fill="#d4af37"/>
</svg>`,

    // NT·07 — Terkutuk (Cursed) — Neutral
    // Concept: Crescent moon with blood dripping, transitioning from good to evil
    "NT·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,10 A40,40 0 1,0 90,50 A30,30 0 1,1 50,10 Z" fill="#d4af37" stroke="#aa771c" stroke-width="1"/>
  <circle cx="35" cy="40" r="4" fill="#ff4444"/>
  <path d="M35,40 L35,60 A4,4 0 0,0 43,60 L43,40 Z" fill="#ff4444"/>
  <circle cx="55" cy="30" r="3" fill="#ff4444"/>
  <path d="M55,30 L55,45 A3,3 0 0,0 61,45 L61,30 Z" fill="#ff4444"/>
  <circle cx="20" cy="65" r="2" fill="#ff4444"/>
  <path d="M20,65 L20,75 A2,2 0 0,0 24,75 L24,65 Z" fill="#ff4444"/>
</svg>`,

    // NT·08 — Vampir (Vampire) — Neutral
    // Concept: Bat wings and fangs with a drop of blood
    "NT·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,40 C30,10 10,20 5,45 C15,40 25,50 30,65 C35,50 45,60 50,75 C55,60 65,50 70,65 C75,50 85,40 95,45 C90,20 70,10 50,40 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <polygon points="45,30 55,30 50,40" fill="#ff4444"/>
  <polygon points="42,30 44,38 46,30" fill="#fff"/>
  <polygon points="54,30 56,38 58,30" fill="#fff"/>
  <circle cx="50" cy="50" r="3" fill="#ff4444"/>
</svg>`,

    // NT·09 — Sang Pangeran Kegelapan (The Count) — Neutral
    // Concept: Ornate blood chalice and aristocratic collar
    "NT·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,20 C30,40 45,55 50,60 C55,55 70,40 70,20 Z" fill="#1a0000" stroke="#d4af37" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="50" y2="80" stroke="#d4af37" stroke-width="2"/>
  <ellipse cx="50" cy="80" rx="15" ry="5" fill="#d4af37"/>
  <ellipse cx="50" cy="20" rx="20" ry="5" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <path d="M35,20 C35,30 45,35 50,35 C55,35 65,30 65,20" fill="#ff4444" opacity="0.8"/>
  <path d="M10,50 L30,40 L30,60 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <path d="M90,50 L70,40 L70,60 Z" fill="#111" stroke="#d4af37" stroke-width="1"/>
</svg>`,

    // ══════════════════════════════════════════════════
    // DECK 8 — Custom Unique Illustrations
    // ══════════════════════════════════════════════════

    // NT·10 — Chupacabra (Penghisap Darah) — Neutral
    // Concept: Beast head with sharp teeth sucking a red energy thread
    "NT·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,20 C35,20 25,35 30,55 C35,65 50,70 50,70 C50,70 65,65 70,55 C75,35 65,20 50,20 Z" fill="#0d0d0d" stroke="#555" stroke-width="1.5"/>
  <circle cx="40" cy="40" r="3" fill="#ff4444"/>
  <circle cx="60" cy="40" r="3" fill="#ff4444"/>
  <path d="M45,60 L50,65 L55,60 Z" fill="#fff"/>
  <path d="M35,10 C45,15 50,25 50,25 C50,25 55,15 65,10" fill="none" stroke="#d4af37" stroke-width="2"/>
  <path d="M50,85 C50,80 48,75 50,70" fill="none" stroke="#ff4444" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="50" cy="90" r="4" fill="#ff4444" opacity="0.6"/>
</svg>`,

    // NT·11 — Bogeyman (Sang Momok) — Neutral
    // Concept: Scary shadow eyes glowing in the dark closet
    "NT·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="70" rx="2" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="90" stroke="#d4af37" stroke-width="1.5"/>
  <rect x="10" y="90" width="80" height="5" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <circle cx="45" cy="55" r="2" fill="#d4af37"/>
  <circle cx="55" cy="55" r="2" fill="#d4af37"/>
  <polygon points="50,20 20,20 20,90 50,90" fill="#0a0a0c" opacity="0.9"/>
  <polygon points="50,20 80,20 80,90 50,90" fill="#000" opacity="0.95"/>
  <ellipse cx="60" cy="40" rx="4" ry="2" fill="#d4af37" transform="rotate(-15 60 40)"/>
  <ellipse cx="70" cy="40" rx="4" ry="2" fill="#d4af37" transform="rotate(15 70 40)"/>
  <circle cx="60" cy="40" r="1.5" fill="#111"/>
  <circle cx="70" cy="40" r="1.5" fill="#111"/>
</svg>`,

    // NT·12 — Hoodlum (Sang Preman) — Neutral
    // Concept: Brass knuckles or dagger
    "NT·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,60 C20,30 30,20 50,20 C70,20 80,30 80,60 L70,60 C70,40 60,30 50,30 C40,30 30,40 30,60 Z" fill="#d4af37"/>
  <path d="M25,50 C25,40 35,40 35,50 C35,60 25,60 25,50 Z" fill="#0a0a0c"/>
  <path d="M40,50 C40,40 50,40 50,50 C50,60 40,60 40,50 Z" fill="#0a0a0c"/>
  <path d="M55,50 C55,40 65,40 65,50 C65,60 55,60 55,50 Z" fill="#0a0a0c"/>
  <path d="M70,50 C70,40 80,40 80,50 C80,60 70,60 70,50 Z" fill="#0a0a0c"/>
  <line x1="15" y1="50" x2="85" y2="50" stroke="#888" stroke-width="2"/>
  <line x1="20" y1="65" x2="80" y2="65" stroke="#888" stroke-width="2"/>
  <path d="M40,80 L60,80 L50,95 Z" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
</svg>`,

    // NT·13 — Anak Rimba Liar (Wild Child) — Neutral
    // Concept: Silhouette of a child with wolf shadow
    "NT·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,60 C40,45 60,45 60,60 L60,80 L40,80 Z" fill="#222" stroke="#d4af37" stroke-width="1"/>
  <circle cx="50" cy="40" r="8" fill="#222" stroke="#d4af37" stroke-width="1"/>
  <path d="M50,40 C65,30 85,30 85,50 C85,60 75,70 65,70" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
  <polygon points="75,25 80,35 85,25" fill="#555"/>
  <polygon points="65,30 70,40 75,30" fill="#555"/>
  <circle cx="80" cy="45" r="2" fill="#ff4444"/>
  <path d="M60,65 L70,80 L80,80 L80,75 L90,80" fill="none" stroke="#dc143c" stroke-width="1.5" opacity="0.6"/>
</svg>`,

    // NT·14 — Bigfoot (Sasquatch) — Neutral
    // Concept: Huge furry footprint
    "NT·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,40 C30,40 30,60 35,70 C40,80 60,80 65,70 C70,60 70,40 60,40 C55,30 45,30 40,40 Z" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <ellipse cx="40" cy="25" rx="4" ry="6" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <ellipse cx="50" cy="22" rx="4" ry="7" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <ellipse cx="60" cy="25" rx="4" ry="6" fill="#111" stroke="#d4af37" stroke-width="1"/>
  <path d="M35,50 L45,60" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
  <path d="M55,50 L45,60" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
  <path d="M65,50 L55,60" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
  <path d="M40,60 L50,70" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
</svg>`,

    // NT·15 — Peri Penipu (Leprechaun) — Neutral
    // Concept: Clover leaf intersecting with blood/claw mark
    "NT·15": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="45" cy="45" r="10" fill="#111" stroke="#00cc44" stroke-width="1.5"/>
  <circle cx="55" cy="45" r="10" fill="#111" stroke="#00cc44" stroke-width="1.5"/>
  <circle cx="50" cy="55" r="10" fill="#111" stroke="#00cc44" stroke-width="1.5"/>
  <path d="M50,65 C45,80 55,80 50,90 Z" fill="#111" stroke="#00cc44" stroke-width="1.5"/>
  <path d="M20,30 C40,40 60,60 80,70" fill="none" stroke="#dc143c" stroke-width="2"/>
  <path d="M30,20 C50,30 70,50 90,60" fill="none" stroke="#dc143c" stroke-width="2"/>
  <circle cx="50" cy="50" r="3" fill="#ff4444"/>
</svg>`,

    // NT·16 — Hantu Kaca (Bloody Mary) — Neutral
    // Concept: Smashed mirror with blood
    "NT·16": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="30" ry="40" fill="#111" stroke="#d4af37" stroke-width="2"/>
  <line x1="50" y1="50" x2="30" y2="20" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="70" y2="20" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="20" y2="50" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="80" y2="50" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="40" y2="85" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="60" y2="85" stroke="#888" stroke-width="1.5"/>
  <path d="M50,50 Q45,60 50,70 T50,90" fill="none" stroke="#dc143c" stroke-width="2"/>
  <circle cx="50" cy="95" r="2" fill="#ff4444"/>
  <circle cx="55" cy="75" r="1.5" fill="#ff4444"/>
  <circle cx="45" cy="65" r="1" fill="#ff4444"/>
  <text x="50" y="45" font-family="'Cinzel',serif" font-size="8" fill="#d4af37" text-anchor="middle" font-weight="900">M</text>
</svg>`,

    // NT·17 — Makhluk Rawa Misterius (The Thing) — Neutral
    // Concept: Slimy tentacle / hand touching shoulder
    "NT·17": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="70" rx="25" ry="5" fill="#111" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M30,70 C30,40 40,20 50,20 C60,20 70,40 70,70" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="3,3"/>
  <path d="M50,90 C40,90 20,70 10,50 C20,50 30,60 40,70" fill="#1a1a1a" stroke="#00cc44" stroke-width="1.5"/>
  <circle cx="15" cy="45" r="2" fill="#00cc44"/>
  <circle cx="20" cy="40" r="1.5" fill="#00cc44"/>
  <circle cx="25" cy="35" r="1" fill="#00cc44"/>
  <path d="M50,90 L60,80 L70,85 L65,75" fill="none" stroke="#111" stroke-width="2"/>
  <circle cx="45" cy="70" r="3" fill="#d4af37" opacity="0.5"/>
</svg>`,

    // NT·18 — Peramal Kuno (Nostradamus) — Neutral
    // Concept: Ancient scroll with a seal
    "NT·18": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="25" width="50" height="50" fill="#eeddcc" stroke="#d4af37" stroke-width="1.5" transform="rotate(-5 50 50)"/>
  <path d="M25,25 Q40,30 75,25" fill="none" stroke="#d4af37" stroke-width="1" transform="rotate(-5 50 50)"/>
  <path d="M25,75 Q40,70 75,75" fill="none" stroke="#d4af37" stroke-width="1" transform="rotate(-5 50 50)"/>
  <circle cx="45" cy="55" r="8" fill="#880000" stroke="#d4af37" stroke-width="1"/>
  <text x="45" y="58" font-family="'Cinzel',serif" font-size="8" fill="#d4af37" text-anchor="middle" font-weight="900">N</text>
  <line x1="30" y1="35" x2="65" y2="35" stroke="#aaa" stroke-width="1.5" stroke-dasharray="2,2"/>
  <line x1="30" y1="45" x2="60" y2="45" stroke="#aaa" stroke-width="1.5" stroke-dasharray="2,2"/>
  <line x1="60" y1="60" x2="70" y2="60" stroke="#aaa" stroke-width="1.5" stroke-dasharray="2,2"/>
</svg>`,

};

// ══════════════════════════════════════════════════
// ══════════════════════════════════════════════════
// Alias duplicates
// VL·15, VL·16, VL·17 → use VL·14 (Villager house)
// WW·01 → use WW·02 (Claw slashes)
// VL·30 → use VL·29 (Mason)
// ══════════════════════════════════════════════════
svgsObsidianV["VL·15"] = svgsObsidianV["VL·14"];
svgsObsidianV["VL·16"] = svgsObsidianV["VL·14"];
svgsObsidianV["VL·17"] = svgsObsidianV["VL·14"];
svgsObsidianV["WW·01"] = svgsObsidianV["WW·02"];
svgsObsidianV["VL·30"] = svgsObsidianV["VL·29"];


// ══════════════════════════════════════════════════
// Faction-based FALLBACK SVGs
// (Used for cards not yet assigned unique illustrations)
// ══════════════════════════════════════════════════

const svgFallbackSupreme = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,15 85,75 15,75" fill="none" stroke="#d4af37" stroke-width="1.5" />
  <polygon points="50,30 75,70 25,70" fill="rgba(138,43,226,0.2)" stroke="#8a2be2" stroke-width="1" />
  <circle cx="50" cy="60" r="12" fill="none" stroke="#fff" stroke-width="2" />
  <path d="M42,60 L58,60 M50,52 L50,68" stroke="#d4af37" stroke-width="1.5" />
  <line x1="50" y1="60" x2="50" y2="0" stroke="#fff" stroke-width="0.5" stroke-dasharray="2,2" />
  <line x1="50" y1="60" x2="0" y2="85" stroke="#fff" stroke-width="0.5" stroke-dasharray="2,2" />
  <line x1="50" y1="60" x2="100" y2="85" stroke="#fff" stroke-width="0.5" stroke-dasharray="2,2" />
</svg>`;

const svgFallbackGood = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="35" fill="none" stroke="#4183d7" stroke-width="0.5" opacity="0.5" />
  <circle cx="50" cy="50" r="25" fill="rgba(65,131,215,0.1)" />
  <path d="M40,30 L60,30 L65,70 L35,70 Z" fill="none" stroke="#d4af37" stroke-width="2" />
  <line x1="45" y1="30" x2="45" y2="70" stroke="#d4af37" stroke-width="1" />
  <line x1="55" y1="30" x2="55" y2="70" stroke="#d4af37" stroke-width="1" />
  <polygon points="35,30 65,30 50,15" fill="none" stroke="#d4af37" stroke-width="1.5" />
  <circle cx="50" cy="50" r="6" fill="#fff" opacity="0.9" />
  <path d="M47,50 L50,42 L53,50 L50,58 Z" fill="#d4af37" />
</svg>`;

const svgFallbackEvil = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,90 20,40 35,15 65,15 80,40" fill="none" stroke="#dc143c" stroke-width="1" opacity="0.3" />
  <polygon points="50,75 30,45 50,15 70,45" fill="#111" stroke="#d4af37" stroke-width="1.5" stroke-linejoin="round" />
  <polygon points="50,75 30,45 50,45" fill="#1a1a1a" />
  <polygon points="50,75 70,45 50,45" fill="#0d0d0d" />
  <polygon points="30,45 15,30 50,15" fill="none" stroke="#d4af37" stroke-width="1" />
  <polygon points="70,45 85,30 50,15" fill="none" stroke="#d4af37" stroke-width="1" />
  <polygon points="40,40 45,45 35,48" fill="#ff1a1a" />
  <polygon points="60,40 55,45 65,48" fill="#ff1a1a" />
</svg>`;

const svgFallbackNeutral = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#333" stroke-width="1" />
  <path d="M50,40 C30,40 10,20 15,10 C25,15 40,25 50,30 C60,25 75,15 85,10 C90,20 70,40 50,40 Z" fill="#8b0000" stroke="#d4af37" stroke-width="1.5" />
  <path d="M50,40 C40,60 20,80 10,70 C20,60 35,55 45,45 Z" fill="#1a1a1a" stroke="#d4af37" stroke-width="1.5" />
  <path d="M50,40 C60,60 80,80 90,70 C80,60 65,55 55,45 Z" fill="#1a1a1a" stroke="#d4af37" stroke-width="1.5" />
  <circle cx="15" cy="10" r="4" fill="#fcf6ba" />
  <circle cx="85" cy="10" r="4" fill="#fcf6ba" />
  <circle cx="10" cy="70" r="4" fill="#fcf6ba" />
  <circle cx="90" cy="70" r="4" fill="#fcf6ba" />
  <path d="M35,35 C35,60 65,60 65,35 Z" fill="#e0e0e0" stroke="#a0a0a0" stroke-width="1" />
  <path d="M42,42 Q45,40 48,42" fill="none" stroke="#111" stroke-width="1.5" />
  <path d="M58,42 Q55,40 52,42" fill="none" stroke="#111" stroke-width="1.5" />
  <path d="M40,50 C45,55 55,55 60,50 C55,58 45,58 40,50 Z" fill="#8b0000" />
</svg>`;

/**
 * Get SVG for a card by its ID.
 * Falls back to faction-based generic illustration if custom one is not yet made.
 * @param {string} cardId - e.g. "VL·01"
 * @param {string} factionUpClass - e.g. "faction-good"
 * @returns {string} SVG HTML string
 */
function getSvgObsidianV(cardId, factionUpClass) {
    if (svgsObsidianV[cardId]) return svgsObsidianV[cardId];
    if (factionUpClass === 'faction-supreme') return svgFallbackSupreme;
    if (factionUpClass === 'faction-good') return svgFallbackGood;
    if (factionUpClass === 'faction-evil') return svgFallbackEvil;
    return svgFallbackNeutral;
}
