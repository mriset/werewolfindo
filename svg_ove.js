// OBSIDIAN VANGUARD EDITION (DECK 1) SVGs

const svg_sp01 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="modGlow" cx="50%" cy="40%">
            <stop offset="0%" stop-color="#8a2be2" stop-opacity="0.9" />
            <stop offset="60%" stop-color="#d4af37" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#4a154b" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="40" r="35" fill="url(#modGlow)" />
    
    <!-- Celestial Rings -->
    <circle cx="50" cy="45" r="30" fill="none" stroke="#aa771c" stroke-width="0.5" stroke-dasharray="2,2" />
    <circle cx="50" cy="45" r="28" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <ellipse cx="50" cy="45" rx="35" ry="12" fill="none" stroke="#8a2be2" stroke-width="0.5" transform="rotate(30 50 45)" />
    <ellipse cx="50" cy="45" rx="35" ry="12" fill="none" stroke="#8a2be2" stroke-width="0.5" transform="rotate(-30 50 45)" />

    <!-- Inverted Pyramid -->
    <polygon points="50,85 20,25 80,25" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" />
    <polygon points="50,85 20,25 80,25" fill="rgba(138,43,226,0.15)" />
    <line x1="20" y1="25" x2="50" y2="55" stroke="#d4af37" stroke-width="1" />
    <line x1="80" y1="25" x2="50" y2="55" stroke="#d4af37" stroke-width="1" />
    <line x1="50" y1="85" x2="50" y2="55" stroke="#d4af37" stroke-width="1" />
    <polygon points="20,25 50,55 80,25" fill="#111" />

    <!-- The Zenith Eye -->
    <path d="M35,35 Q50,20 65,35 Q50,50 35,35 Z" fill="#fff" stroke="#d4af37" stroke-width="1.5" />
    <circle cx="50" cy="35" r="8" fill="#8a2be2" />
    <circle cx="50" cy="35" r="3" fill="#000" />
    <circle cx="52" cy="33" r="1.5" fill="#fff" />
    
    <!-- Energy Beams -->
    <path d="M50,15 L50,0 M40,18 L30,5 M60,18 L70,5" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="50" cy="0" r="1.5" fill="#fcf6ba" />
    <circle cx="30" cy="5" r="1.5" fill="#fcf6ba" />
    <circle cx="70" cy="5" r="1.5" fill="#fcf6ba" />
    
    <!-- Base anchors -->
    <polygon points="45,95 55,95 50,85" fill="#d4af37" />
</svg>`;

const svg_vl01 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="seerGlow" cx="50%" cy="40%">
            <stop offset="0%" stop-color="#4183d7" stop-opacity="0.9" />
            <stop offset="70%" stop-color="#0f2c59" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="40" r="35" fill="url(#seerGlow)" />
    
    <!-- Lotus / Astrolabe Base -->
    <path d="M40,75 Q50,90 60,75 Q50,60 40,75" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <path d="M25,65 Q50,95 75,65" fill="none" stroke="#d4af37" stroke-width="1" />
    <polygon points="35,80 65,80 50,95" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" />
    
    <!-- Astrolabe Rings -->
    <circle cx="50" cy="40" r="28" fill="none" stroke="#d4af37" stroke-width="1" />
    <ellipse cx="50" cy="40" rx="35" ry="10" fill="none" stroke="#d4af37" stroke-width="0.5" transform="rotate(20 50 40)" />
    <ellipse cx="50" cy="40" rx="35" ry="10" fill="none" stroke="#d4af37" stroke-width="0.5" transform="rotate(-20 50 40)" />
    <ellipse cx="50" cy="40" rx="28" ry="28" fill="none" stroke="#88aadd" stroke-dasharray="3,3" stroke-width="0.5" />

    <!-- The Seer's Crystal -->
    <circle cx="50" cy="40" r="18" fill="url(#seerGlow)" stroke="#fcf6ba" stroke-width="1.5" />
    <path d="M38,32 Q45,25 55,28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="48" cy="40" r="4" fill="#fff" />
    
    <!-- The Inner Eye inside crystal -->
    <path d="M42,40 Q50,33 58,40 Q50,47 42,40 Z" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="50" cy="40" r="2" fill="#4183d7" />

    <!-- Radiant Stars -->
    <path d="M50,5 L52,10 L57,12 L52,14 L50,19 L48,14 L43,12 L48,10 Z" fill="#fcf6ba" />
    <path d="M20,25 L21,28 L24,29 L21,30 L20,33 L19,30 L16,29 L19,28 Z" fill="#fcf6ba" />
    <path d="M80,25 L81,28 L84,29 L81,30 L80,33 L79,30 L76,29 L79,28 Z" fill="#fcf6ba" />
</svg>`;

const svg_vl02 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="guardGlow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#4183d7" stop-opacity="0.7" />
            <stop offset="50%" stop-color="#d4af37" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#guardGlow)" />
    
    <!-- Wing Structures -->
    <path d="M50,45 Q70,25 90,40 Q80,55 50,65" fill="none" stroke="#88aadd" stroke-width="1" />
    <path d="M50,45 Q90,10 95,30 Q85,45 50,55" fill="none" stroke="#88aadd" stroke-width="0.5" />
    <path d="M50,45 Q30,25 10,40 Q20,55 50,65" fill="none" stroke="#88aadd" stroke-width="1" />
    <path d="M50,45 Q10,10 5,30 Q15,45 50,55" fill="none" stroke="#88aadd" stroke-width="0.5" />
    
    <!-- Geometric Frame behind shield -->
    <polygon points="50,15 80,50 50,85 20,50" fill="none" stroke="#aa771c" stroke-width="1" stroke-dasharray="4,2" />

    <!-- Main Shield Aegis -->
    <path d="M30,30 L70,30 L70,50 C70,70 50,90 50,90 C50,90 30,70 30,50 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2.5" />
    <path d="M40,30 L60,30 L60,50 C60,65 50,80 50,80 C50,80 40,65 40,50 Z" fill="#16181c" stroke="#aa771c" stroke-width="1.5" />
    
    <!-- Cross Element -->
    <line x1="50" y1="35" x2="50" y2="75" stroke="#d4af37" stroke-width="2" />
    <line x1="35" y1="45" x2="65" y2="45" stroke="#d4af37" stroke-width="2" />
    
    <!-- Core Gem -->
    <polygon points="50,38 56,45 50,52 44,45" fill="#4183d7" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="50" cy="45" r="2" fill="#fff" />
    
    <!-- Halo -->
    <path d="M35,20 C45,10 55,10 65,20" fill="none" stroke="#fcf6ba" stroke-width="2" />
</svg>`;

const svg_vl14 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="villeGlow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#0f2c59" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#villeGlow)" />
    <!-- Background Astrolabe / Stars -->
    <circle cx="50" cy="50" r="35" fill="none" stroke="#0f2c59" stroke-width="1" />
    <line x1="15" y1="50" x2="85" y2="50" stroke="#0f2c59" stroke-width="0.5" />
    <line x1="50" y1="15" x2="50" y2="85" stroke="#0f2c59" stroke-width="0.5" />
    
    <!-- Constellation Grid (Leaves) -->
    <path d="M50,15 L65,25 L75,40 L65,35 L45,25 Z" fill="none" stroke="#88aadd" stroke-width="0.5" />
    <path d="M50,15 L35,25 L25,40 L35,35 L55,25 Z" fill="none" stroke="#88aadd" stroke-width="0.5" />
    <path d="M25,40 L35,55 L45,50 Z" fill="none" stroke="#88aadd" stroke-width="0.5" />
    <path d="M75,40 L65,55 L55,50 Z" fill="none" stroke="#88aadd" stroke-width="0.5" />

    <!-- Main Tree Stem (Geometric) -->
    <path d="M50,85 L50,60 L40,45 M50,60 L60,45 M40,65 L35,55 M60,65 L65,55 M50,45 L45,25 M50,45 L55,25" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Nodes (Stars/Leaves) -->
    <circle cx="50" cy="15" r="2.5" fill="#fcf6ba" />
    <circle cx="35" cy="25" r="2" fill="#fff" />
    <circle cx="65" cy="25" r="2" fill="#fff" />
    <circle cx="25" cy="40" r="2.5" fill="#fcf6ba" />
    <circle cx="75" cy="40" r="2.5" fill="#fcf6ba" />
    <circle cx="35" cy="55" r="1.5" fill="#88aadd" />
    <circle cx="65" cy="55" r="1.5" fill="#88aadd" />
    <circle cx="45" cy="25" r="1.5" fill="#88aadd" />
    <circle cx="55" cy="25" r="1.5" fill="#88aadd" />
    
    <!-- Foundation Roots -->
    <polygon points="40,85 60,85 50,95" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <line x1="30" y1="85" x2="70" y2="85" stroke="#fcf6ba" stroke-width="1.5" />
    <path d="M40,85 Q30,95 20,95 M60,85 Q70,95 80,95" fill="none" stroke="#d4af37" stroke-width="1" />
</svg>`;

const svg_ww01 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="wolfGlow" cx="50%" cy="45%">
            <stop offset="0%" stop-color="#dc143c" stop-opacity="0.9" />
            <stop offset="40%" stop-color="#8b0000" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#3a0404" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="45" r="40" fill="url(#wolfGlow)" />
    
    <!-- Target / Blood Moon Ring -->
    <circle cx="50" cy="45" r="30" fill="none" stroke="#dc143c" stroke-width="1" stroke-dasharray="8,4" />
    <circle cx="50" cy="45" r="25" fill="none" stroke="#8b0000" stroke-width="2" />
    <path d="M50,15 L50,5 M50,85 L50,75 M15,45 L5,45 M85,45 L75,45" stroke="#dc143c" stroke-width="1.5" />

    <!-- Angular Wolf Skull -->
    <polygon points="50,15 70,25 75,45 60,55 65,85 50,70 35,85 40,55 25,45 30,25" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <polygon points="50,15 70,25 75,45 60,55 50,70 50,15" fill="#1a0505" />
    
    <!-- Fangs & Jaw Detail -->
    <polygon points="40,55 45,70 35,85" fill="#dc143c" opacity="0.4" />
    <polygon points="60,55 55,70 65,85" fill="#dc143c" opacity="0.4" />
    <line x1="50" y1="15" x2="50" y2="70" stroke="#d4af37" stroke-width="1.5" />
    <path d="M42,75 L46,88 L50,80 L54,88 L58,75" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linejoin="round" />

    <!-- Hollow Eyes -->
    <polygon points="38,35 45,45 32,45" fill="#dc143c" stroke="#fcf6ba" stroke-width="1" />
    <polygon points="62,35 55,45 68,45" fill="#dc143c" stroke="#fcf6ba" stroke-width="1" />
    
    <!-- Piercing Glow in Eyes -->
    <circle cx="41" cy="42" r="1.5" fill="#fff" />
    <circle cx="59" cy="42" r="1.5" fill="#fff" />
    
    <!-- Floating Shards -->
    <polygon points="20,15 25,25 15,22" fill="#dc143c" />
    <polygon points="80,15 85,22 75,25" fill="#dc143c" />
    <polygon points="25,75 30,80 20,85" fill="#8b0000" />
    <polygon points="75,75 80,85 70,80" fill="#8b0000" />
</svg>`;

// --- DECK 2 SVGs ---
const svg_vl03 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="witchGlow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#witchGlow)" />
    <!-- Balance Scale Base -->
    <path d="M50,85 L50,15 M30,85 L70,85 M40,85 L50,65 L60,85 Z" fill="none" stroke="#d4af37" stroke-width="2" />
    <path d="M50,15 L20,35 M50,15 L80,35" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <line x1="20" y1="35" x2="20" y2="60" stroke="#fcf6ba" stroke-dasharray="2,2" stroke-width="1" />
    <line x1="80" y1="35" x2="80" y2="60" stroke="#fcf6ba" stroke-dasharray="2,2" stroke-width="1" />
    <!-- Life Vial (Blue) -->
    <path d="M15,50 L25,50 L25,65 C25,75 15,75 15,65 Z" fill="#4183d7" stroke="#88aadd" stroke-width="1.5" />
    <circle cx="20" cy="62" r="3" fill="#fff" />
    <!-- Death Vial (Crimson) -->
    <path d="M75,50 L85,50 L85,65 C85,75 75,75 75,65 Z" fill="#dc143c" stroke="#ff6666" stroke-width="1.5" />
    <circle cx="80" cy="62" r="3" fill="#fff" />
</svg>`;

const svg_vl04 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="huntGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#huntGlow)" />
    <!-- Target Moon -->
    <circle cx="50" cy="50" r="30" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="4,4" />
    <!-- Crossbow -->
    <path d="M20,70 Q50,40 80,70" fill="none" stroke="#d4af37" stroke-width="2.5" />
    <line x1="20" y1="70" x2="80" y2="70" stroke="#fcf6ba" stroke-width="1" />
    <polygon points="45,85 55,85 50,20" fill="#111" stroke="#d4af37" stroke-width="2" />
    <polygon points="48,20 52,20 50,10" fill="#fcf6ba" />
    <line x1="50" y1="20" x2="50" y2="85" stroke="#aa771c" stroke-width="1" />
</svg>`;

const svg_vl05 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="kingGlow" cx="50%" cy="40%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="40" r="40" fill="url(#kingGlow)" />
    <!-- Throne Mandala -->
    <circle cx="50" cy="60" r="35" fill="none" stroke="#4183d7" stroke-width="1" opacity="0.5" />
    <path d="M15,60 L85,60 M50,25 L50,95 M25,35 L75,85 M25,85 L75,35" stroke="#4183d7" stroke-width="0.5" opacity="0.5" />
    <!-- Floating Crown -->
    <polygon points="20,50 30,70 70,70 80,50 65,60 50,30 35,60" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <circle cx="20" cy="50" r="3" fill="#fcf6ba" />
    <circle cx="50" cy="30" r="4" fill="#fcf6ba" />
    <circle cx="80" cy="50" r="3" fill="#fcf6ba" />
    <!-- Veto Gem -->
    <polygon points="45,65 55,65 50,75" fill="#4183d7" stroke="#fff" stroke-width="1" />
</svg>`;

const svg_vl06 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="drunkGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#drunkGlow)" />
    <g transform="rotate(-30 50 50)">
        <!-- Chalice -->
        <path d="M30,30 Q50,70 70,30 Z" fill="#111" stroke="#d4af37" stroke-width="2" />
        <line x1="50" y1="50" x2="50" y2="80" stroke="#d4af37" stroke-width="2.5" />
        <ellipse cx="50" cy="80" rx="15" ry="5" fill="#111" stroke="#d4af37" stroke-width="2" />
        <ellipse cx="50" cy="30" rx="20" ry="6" fill="#0a0a0c" stroke="#d4af37" stroke-width="1.5" />
        <!-- Spilling Stardust -->
        <path d="M40,30 Q30,15 20,40" fill="none" stroke="#fcf6ba" stroke-dasharray="2,4" stroke-width="2" />
        <circle cx="25" cy="20" r="2" fill="#fff" />
        <circle cx="15" cy="35" r="3" fill="#88aadd" />
    </g>
    <!-- Background Bubbles -->
    <circle cx="70" cy="20" r="4" fill="#4183d7" opacity="0.6" />
    <circle cx="80" cy="40" r="6" fill="#4183d7" opacity="0.4" />
</svg>`;

const svg_vl07 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="girlGlow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.9" />
            <stop offset="60%" stop-color="#4183d7" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#girlGlow)" />
    <!-- Straight Beams -->
    <polygon points="50,45 10,95 90,95" fill="rgba(252,246,186,0.2)" />
    <line x1="50" y1="45" x2="20" y2="85" stroke="#fcf6ba" stroke-width="1" />
    <line x1="50" y1="45" x2="80" y2="85" stroke="#fcf6ba" stroke-width="1" />
    <!-- Outer Vault Frame -->
    <circle cx="50" cy="50" r="35" fill="none" stroke="#aa771c" stroke-width="1" stroke-dasharray="5,5" />
    <!-- Keyhole -->
    <path d="M42,40 A8,8 0 1,1 58,40 L60,65 L40,65 Z" fill="#000" stroke="#d4af37" stroke-width="2" />
    <circle cx="50" cy="40" r="4" fill="#0a0a0c" />
</svg>`;

const svg_vl09 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="sheriffGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#sheriffGlow)" />
    <!-- Hexagram Star Badge -->
    <polygon points="50,15 60,35 80,40 65,55 70,75 50,65 30,75 35,55 20,40 40,35" fill="#111" stroke="#d4af37" stroke-width="2.5" stroke-linejoin="round" />
    <!-- Inner Etchings -->
    <polygon points="50,25 55,40 70,45 60,55 62,70 50,60 38,70 40,55 30,45 45,40" fill="none" stroke="#fcf6ba" stroke-width="0.5" />
    <circle cx="50" cy="48" r="8" fill="none" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="50" cy="48" r="3" fill="#4183d7" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#aa771c" stroke-width="0.5" stroke-dasharray="2,6" />
</svg>`;

const svg_ww03 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="alphaGlow" cx="50%" cy="45%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.9" /><stop offset="60%" stop-color="#dc143c" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="45" r="45" fill="url(#alphaGlow)" />
    <!-- Dual Blood Moons -->
    <circle cx="45" cy="40" r="25" fill="none" stroke="#8b0000" stroke-width="1" />
    <circle cx="55" cy="50" r="30" fill="none" stroke="#dc143c" stroke-width="1.5" stroke-dasharray="6,2" />
    <!-- Grand Angular Wolf Skull -->
    <polygon points="50,10 75,25 80,50 65,60 70,90 50,75 30,90 35,60 20,50 25,25" fill="#080000" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <path d="M50,10 L75,25 L80,50 L65,60 L50,75 Z" fill="#1a0000" />
    <!-- Alpha Omega Sigil on Forehead -->
    <path d="M45,30 A5,5 0 1,1 55,30 M42,35 L45,30 M58,35 L55,30" fill="none" stroke="#ff1a1a" stroke-width="1.5" />
    <!-- Hollow Eyes (Deep Red) -->
    <polygon points="35,40 45,50 30,55" fill="#ff0000" stroke="#fff" stroke-width="0.5" />
    <polygon points="65,40 55,50 70,55" fill="#ff0000" stroke="#fff" stroke-width="0.5" />
    <circle cx="40" cy="48" r="2" fill="#fff" />
    <circle cx="60" cy="48" r="2" fill="#fff" />
</svg>`;

const svg_nt03 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cupidGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#e0e0e0" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#cupidGlow)" />
    <!-- Interlocking Rings -->
    <ellipse cx="40" cy="50" rx="15" ry="25" fill="none" stroke="#d4af37" stroke-width="2.5" transform="rotate(20 40 50)" />
    <ellipse cx="60" cy="50" rx="15" ry="25" fill="none" stroke="#fcf6ba" stroke-width="2.5" transform="rotate(-20 60 50)" />
    <!-- Piercing Light Arrow -->
    <line x1="20" y1="80" x2="80" y2="20" stroke="#fff" stroke-width="2" />
    <polygon points="75,15 85,15 80,25" fill="#fff" />
    <line x1="15" y1="85" x2="25" y2="75" stroke="#aaa" stroke-width="1" />
    <line x1="20" y1="90" x2="30" y2="80" stroke="#aaa" stroke-width="1" />
    <circle cx="50" cy="40" r="3" fill="#ff6666" opacity="0.8" />
</svg>`;

// --- DECK 3 SVGs ---
const svg_vl08 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="harlotGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#harlotGlow)" />
    <!-- Crescent Moon -->
    <path d="M70,20 A30,30 0 1,1 30,80 A35,35 0 1,0 70,20 Z" fill="none" stroke="#4183d7" stroke-width="2" />
    <!-- Masquerade Mask -->
    <path d="M20,40 Q50,70 80,40 Q65,60 50,55 Q35,60 20,40 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <path d="M30,45 A5,3 0 1,0 40,45 A5,3 0 1,0 30,45" fill="#8a2be2" />
    <path d="M60,45 A5,3 0 1,0 70,45 A5,3 0 1,0 60,45" fill="#8a2be2" />
    <!-- Feathers / Decor -->
    <path d="M80,40 Q90,20 70,10 Q80,30 80,40 Z" fill="#4183d7" stroke="#aa771c" stroke-width="1" />
    <path d="M20,40 Q10,30 25,15 Q20,30 20,40 Z" fill="#4183d7" stroke="#aa771c" stroke-width="1" />
</svg>`;

const svg_vl10 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="mayorGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#mayorGlow)" />
    <!-- Seal Base -->
    <circle cx="50" cy="65" r="25" fill="none" stroke="#aa771c" stroke-width="1.5" stroke-dasharray="4,2" transform="rotate(20 50 65) scale(1, 0.4)" />
    <!-- Gavel -->
    <polygon points="35,35 45,25 70,50 60,60" fill="#111" stroke="#d4af37" stroke-width="2" />
    <polygon points="25,35 45,15 55,25 35,45" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <line x1="30" y1="30" x2="50" y2="50" stroke="#fcf6ba" stroke-width="1.5" />
    <!-- Impact Burst -->
    <path d="M40,65 L30,55 M45,70 L45,85 M55,65 L70,70" stroke="#fcf6ba" stroke-width="2" stroke-linecap="round" />
    <circle cx="50" cy="65" r="3" fill="#fff" />
</svg>`;

const svg_vl11 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="detGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#detGlow)" />
    <!-- Asterism Fingerprint -->
    <path d="M40,20 Q60,10 70,30 Q80,50 50,70 Q20,50 30,30" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="2,3" />
    <path d="M45,30 Q60,25 60,40 Q60,55 50,60 Q40,55 40,40" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="2,3" />
    <!-- Magnifying Glass -->
    <circle cx="45" cy="45" r="20" fill="rgba(65, 131, 215, 0.2)" stroke="#d4af37" stroke-width="3" />
    <circle cx="45" cy="45" r="16" fill="none" stroke="#fcf6ba" stroke-width="0.5" />
    <line x1="60" y1="60" x2="80" y2="80" stroke="#aa771c" stroke-width="5" stroke-linecap="round" />
    <line x1="60" y1="60" x2="80" y2="80" stroke="#d4af37" stroke-width="2" stroke-linecap="round" />
    <circle cx="50" cy="40" r="2" fill="#fff" />
</svg>`;

const svg_vl12 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="medGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.9" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#medGlow)" />
    <!-- Vortex -->
    <path d="M50,15 C65,15 75,30 50,45 C25,30 35,15 50,15 Z" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="4,4" />
    <!-- Planchette -->
    <path d="M50,20 C80,50 70,80 50,85 C30,80 20,50 50,20 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <!-- Viewing Window -->
    <circle cx="50" cy="45" r="10" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="50" cy="45" r="3" fill="#fff" />
    <!-- Ornaments -->
    <circle cx="35" cy="70" r="2" fill="#d4af37" />
    <circle cx="65" cy="70" r="2" fill="#d4af37" />
    <line x1="50" y1="20" x2="50" y2="10" stroke="#fcf6ba" stroke-width="2" />
</svg>`;

const svg_vl13 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="wizGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#wizGlow)" />
    <!-- Transmutation Circle -->
    <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3" />
    <polygon points="50,20 76,65 24,65" fill="none" stroke="#aa771c" stroke-width="1" />
    <polygon points="50,80 24,35 76,35" fill="none" stroke="#aa771c" stroke-width="1" />
    <!-- Infinity Rings Swapping -->
    <path d="M30,50 C30,30 50,50 70,30 C90,10 90,70 70,70 C50,70 50,50 30,50 C10,50 10,70 30,70 Z" fill="none" stroke="#fcf6ba" stroke-width="2.5" />
    <!-- Flashes -->
    <circle cx="30" cy="60" r="4" fill="#fff" />
    <circle cx="70" cy="40" r="4" fill="#fff" />
</svg>`;

const svg_vl18 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="guard2Glow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#guard2Glow)" />
    <!-- Crossed Halberds -->
    <line x1="20" y1="80" x2="80" y2="20" stroke="#d4af37" stroke-width="2" />
    <line x1="80" y1="80" x2="20" y2="20" stroke="#d4af37" stroke-width="2" />
    <polygon points="75,25 85,15 85,25 Z" fill="#fcf6ba" />
    <polygon points="25,25 15,15 15,25 Z" fill="#fcf6ba" />
    <!-- Scarred Shield -->
    <path d="M40,30 L60,30 L65,55 C65,75 50,85 50,85 C50,85 35,75 35,55 Z" fill="#0a0a0c" stroke="#aa771c" stroke-width="2.5" />
    <!-- Scratches -->
    <line x1="45" y1="40" x2="55" y2="55" stroke="#fcf6ba" stroke-width="1.5" />
    <line x1="42" y1="60" x2="50" y2="65" stroke="#fcf6ba" stroke-width="1" />
    <line x1="58" y1="45" x2="52" y2="50" stroke="#fcf6ba" stroke-width="1.5" />
</svg>`;

const svg_vl19 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="priestGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.9" /><stop offset="60%" stop-color="#4183d7" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="40" r="35" fill="url(#priestGlow)" />
    <!-- Holy Water Splash (Cross) -->
    <path d="M50,10 L50,90 M20,40 L80,40" stroke="#fff" stroke-width="1.5" stroke-dasharray="2,6" stroke-linecap="round" />
    <!-- Vial -->
    <polygon points="50,30 65,55 50,80 35,55" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <polygon points="50,40 60,55 50,70 40,55" fill="#4183d7" opacity="0.8" />
    <!-- Cork / Top -->
    <rect x="47" y="20" width="6" height="10" fill="#aa771c" />
    <line x1="45" y1="20" x2="55" y2="20" stroke="#fcf6ba" stroke-width="2" />
    <circle cx="50" cy="55" r="3" fill="#fff" />
</svg>`;

const svg_vl20 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="vetGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8b0000" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#vetGlow)" />
    <!-- Broken Arrows -->
    <line x1="15" y1="35" x2="40" y2="50" stroke="#fff" stroke-width="1" />
    <line x1="85" y1="25" x2="60" y2="45" stroke="#fff" stroke-width="1" />
    <line x1="75" y1="85" x2="65" y2="70" stroke="#fff" stroke-width="1" />
    <!-- Spartan / Heavy Helmet -->
    <path d="M30,50 C30,25 70,25 70,50 L70,80 L60,80 L60,60 L40,60 L40,80 L30,80 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <!-- Centurion Crest -->
    <path d="M50,25 C40,10 60,10 50,25 Z" fill="#dc143c" />
    <path d="M35,28 C50,15 65,28 65,28 Z" fill="none" stroke="#aa771c" stroke-width="2" />
    <!-- Scars on Helmet -->
    <line x1="35" y1="40" x2="45" y2="55" stroke="#fcf6ba" stroke-width="1" />
    <line x1="65" y1="45" x2="55" y2="40" stroke="#fcf6ba" stroke-width="1.5" />
</svg>`;

const svg_vl21 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="appGlow" cx="50%" cy="40%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" /><stop offset="50%" stop-color="#0f2c59" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="40" r="30" fill="url(#appGlow)" />
    <!-- Fragmented Crystal -->
    <polygon points="50,15 65,35 55,60 30,50 35,25" fill="none" stroke="#fcf6ba" stroke-width="1.5" stroke-linejoin="round" />
    <polygon points="35,25 50,40 65,35" fill="none" stroke="#88aadd" stroke-width="1" />
    <polygon points="30,50 50,40 55,60" fill="none" stroke="#88aadd" stroke-width="1" />
    <circle cx="45" cy="35" r="2" fill="#fff" />
    <!-- Hands / Pedestal -->
    <path d="M25,80 L40,65 L45,70 L30,85 Z" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <path d="M75,80 L60,65 L55,70 L70,85 Z" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <line x1="45" y1="70" x2="55" y2="70" stroke="#aa771c" stroke-width="2" />
</svg>`;

// --- DECK 4 SVGs ---
const svg_vl22 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="auraGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.8" /><stop offset="60%" stop-color="#4183d7" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#auraGlow)" />
    <!-- Concentric Waves -->
    <circle cx="50" cy="50" r="30" fill="none" stroke="#4183d7" stroke-width="0.5" stroke-dasharray="2,4" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="4,2" />
    <circle cx="50" cy="50" r="12" fill="none" stroke="#fcf6ba" stroke-width="1.5" />
    <!-- Radiating Lines -->
    <path d="M50,15 L50,5 M50,85 L50,95 M15,50 L5,50 M85,50 L95,50" stroke="#fcf6ba" stroke-width="1" />
    <path d="M25,25 L15,15 M75,75 L85,85 M25,75 L15,85 M75,25 L85,15" stroke="#4183d7" stroke-width="1" />
    <!-- Single Minimalist Eye -->
    <path d="M40,50 Q50,42 60,50 Q50,58 40,50 Z" fill="#000" stroke="#d4af37" stroke-width="2" />
    <circle cx="50" cy="50" r="3" fill="#fcf6ba" />
</svg>`;

const svg_vl23 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="beholdGlow" cx="50%" cy="30%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.8" /><stop offset="60%" stop-color="#d4af37" stop-opacity="0.3" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="40" r="40" fill="url(#beholdGlow)" />
    <!-- The Zenith Eye Mod (Looking Down) -->
    <path d="M20,25 Q50,10 80,25 Q50,50 20,25 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" />
    <circle cx="50" cy="28" r="8" fill="#8a2be2" />
    <circle cx="50" cy="28" r="3" fill="#000" />
    <polygon points="50,40 30,15 70,15" fill="none" stroke="#fcf6ba" stroke-width="1" opacity="0.5" />
    <!-- Guarding the Seer's Crystal -->
    <circle cx="50" cy="70" r="12" fill="#4183d7" opacity="0.6" stroke="#fff" stroke-width="1" />
    <path d="M45,65 Q50,60 55,62" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
    <line x1="50" y1="45" x2="50" y2="58" stroke="#fcf6ba" stroke-width="1" stroke-dasharray="2,2" />
</svg>`;

const svg_vl24 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="diseaseGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#2e8b57" stop-opacity="0.8" /><stop offset="60%" stop-color="#0d2b1a" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#diseaseGlow)" />
    <!-- Geometric Heart -->
    <path d="M50,35 L40,20 L25,30 L30,55 L50,80 L70,55 L75,30 L60,20 Z" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <path d="M50,35 L40,20 L25,30 L30,55 L50,80 Z" fill="#2e8b57" opacity="0.2" />
    <!-- Decay & Stardust Rot -->
    <polygon points="45,45 55,50 48,60" fill="#ccffcc" />
    <circle cx="60" cy="65" r="2" fill="#2e8b57" />
    <circle cx="35" cy="70" r="1.5" fill="#ccffcc" />
    <circle cx="45" cy="85" r="2.5" fill="#2e8b57" />
    <line x1="45" y1="65" x2="50" y2="90" stroke="#ccffcc" stroke-width="1" stroke-dasharray="2,2" />
    <!-- Tubes / Veins -->
    <path d="M40,20 Q30,10 20,15 M60,20 Q70,10 80,15" fill="none" stroke="#aa771c" stroke-width="1.5" />
    <path d="M50,35 L50,80" stroke="#aa771c" stroke-width="1" />
</svg>`;

const svg_vl25 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="ghostGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#ghostGlow)" />
    <!-- Inverted Astrolabe / Hourglass Frame -->
    <polygon points="30,20 70,20 50,50" fill="none" stroke="#aa771c" stroke-width="1.5" />
    <polygon points="30,80 70,80 50,50" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#4183d7" stroke-width="0.5" stroke-dasharray="2,4" />
    <!-- Will-o'-wisp / Ghost Flame -->
    <path d="M50,40 C60,40 65,55 50,75 C35,55 40,40 50,40 Z" fill="#fff" opacity="0.8" />
    <path d="M50,45 C55,45 58,55 50,70 C42,55 45,45 50,45 Z" fill="#4183d7" />
    <!-- Float Trails -->
    <path d="M45,80 Q50,90 55,80" fill="none" stroke="#88aadd" stroke-width="1" />
    <circle cx="50" cy="90" r="1.5" fill="#fff" />
</svg>`;

const svg_vl26 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="idiotGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#idiotGlow)" />
    <!-- Inverted / Battered Jester Cap -->
    <path d="M30,30 Q50,40 70,30 L65,60 Q50,70 35,60 Z" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <polygon points="30,30 20,15 45,35" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <polygon points="70,30 80,15 55,35" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <!-- Bells -->
    <circle cx="20" cy="15" r="4" fill="#fcf6ba" />
    <circle cx="80" cy="15" r="4" fill="#fcf6ba" />
    <circle cx="50" cy="20" r="4" fill="#fcf6ba" />
    <polygon points="45,35 50,20 55,35" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <!-- Wrapping Magic Thread -->
    <path d="M20,80 Q50,90 80,80" fill="none" stroke="#4183d7" stroke-width="1.5" stroke-dasharray="4,4" />
    <path d="M25,65 Q50,80 75,65" fill="none" stroke="#4183d7" stroke-width="1.5" />
    <circle cx="50" cy="75" r="2" fill="#fff" />
</svg>`;

const svg_vl27 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="insomGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.5" /><stop offset="60%" stop-color="#4a154b" stop-opacity="0.3" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#insomGlow)" />
    <!-- Empty Hourglass -->
    <g stroke="#d4af37" stroke-width="1.5" fill="none">
        <polygon points="35,15 65,15 55,40 45,40" />
        <polygon points="45,40 55,40 65,65 35,65" />
        <line x1="30" y1="15" x2="70" y2="15" stroke-width="2" />
        <line x1="30" y1="65" x2="70" y2="65" stroke-width="2" />
    </g>
    <!-- Grains of Sand at the bottom -->
    <polygon points="40,65 60,65 50,55" fill="#fcf6ba" />
    <!-- Giant Bloodshot Eye Below -->
    <path d="M25,85 Q50,65 75,85 Q50,100 25,85 Z" fill="#0a0a0c" stroke="#ff0000" stroke-width="1.5" />
    <circle cx="50" cy="85" r="6" fill="#fcf6ba" />
    <circle cx="50" cy="85" r="2" fill="#000" />
    <path d="M35,80 L38,82 M65,80 L62,82 M45,77 L48,80" stroke="#ff0000" stroke-width="0.5" />
</svg>`;

const svg_vl28 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="martyrGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.7" /><stop offset="50%" stop-color="#dc143c" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#martyrGlow)" />
    <!-- Angelic Crest -->
    <path d="M50,80 Q30,60 15,40 Q30,25 50,45 Q70,25 85,40 Q70,60 50,80 Z" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <path d="M25,45 Q35,35 50,50 Q65,35 75,45" fill="none" stroke="#fcf6ba" stroke-width="1" />
    <path d="M35,55 Q45,45 50,55 Q55,45 65,55" fill="none" stroke="#fcf6ba" stroke-width="1" />
    <!-- The Blood Dagger piercing the crest -->
    <polygon points="48,10 52,10 50,40" fill="#dc143c" stroke="#ff6666" stroke-width="1" />
    <rect x="46" y="8" width="8" height="2" fill="#8b0000" />
    <!-- Blood / Aura Drips -->
    <circle cx="50" cy="50" r="4" fill="#dc143c" />
    <line x1="50" y1="54" x2="50" y2="65" stroke="#ff0000" stroke-width="1.5" stroke-dasharray="2,2" />
    <circle cx="50" cy="70" r="1.5" fill="#ff0000" />
</svg>`;

const svg_vl29 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="masonGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.8" /><stop offset="80%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#masonGlow)" />
    <!-- Brick Foundation -->
    <rect x="30" y="60" width="40" height="15" fill="#0f2c59" stroke="#88aadd" stroke-width="1" />
    <rect x="20" y="75" width="25" height="15" fill="#0f2c59" stroke="#88aadd" stroke-width="1" />
    <rect x="55" y="75" width="25" height="15" fill="#0f2c59" stroke="#88aadd" stroke-width="1" />
    <!-- Crossed Mallets/Hammers -->
    <line x1="25" y1="80" x2="75" y2="30" stroke="#aa771c" stroke-width="2" />
    <line x1="75" y1="80" x2="25" y2="30" stroke="#aa771c" stroke-width="2" />
    <!-- Hammer Heads -->
    <polygon points="65,25 75,15 85,25 75,35" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <polygon points="15,25 25,15 35,25 25,35" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <circle cx="25" cy="25" r="2" fill="#fcf6ba" />
    <circle cx="75" cy="25" r="2" fill="#fcf6ba" />
    <circle cx="50" cy="55" r="3" fill="#fff" />
</svg>`;

// --- DECK 5 SVGs ---
const svg_vl31 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="hagGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.7" /><stop offset="60%" stop-color="#4183d7" stop-opacity="0.3" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#hagGlow)" />
    <!-- Gnarled Wand -->
    <path d="M70,20 L65,25 L75,35 L60,50 L65,60 L40,85 L35,80 L55,55 L45,45 L55,35 L50,30 L65,15 Z" fill="#111" stroke="#aa771c" stroke-width="2" stroke-linejoin="round" />
    <path d="M68,22 L42,82" stroke="#d4af37" stroke-width="1" />
    <!-- Silencing Aura Blast -->
    <circle cx="25" cy="25" r="15" fill="none" stroke="#4183d7" stroke-width="1.5" stroke-dasharray="4,4" />
    <circle cx="25" cy="25" r="8" fill="none" stroke="#8a2be2" stroke-width="2" />
    <line x1="60" y1="30" x2="35" y2="28" stroke="#4183d7" stroke-width="2" stroke-dasharray="2,2" />
    <line x1="55" y1="40" x2="33" y2="33" stroke="#8a2be2" stroke-width="1.5" stroke-dasharray="2,2" />
    <!-- Muted Lips Silhouette -->
    <path d="M15,25 Q25,20 35,25 Q25,30 15,25 Z" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <line x1="20" y1="20" x2="30" y2="30" stroke="#ff0000" stroke-width="1.5" />
    <line x1="30" y1="20" x2="20" y2="30" stroke="#ff0000" stroke-width="1.5" />
</svg>`;

const svg_vl32 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="oldmanGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.5" /><stop offset="60%" stop-color="#8b0000" stop-opacity="0.3" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#oldmanGlow)" />
    <!-- Giant Pocket Watch -->
    <circle cx="50" cy="55" r="28" fill="#111" stroke="#d4af37" stroke-width="3" />
    <circle cx="50" cy="55" r="24" fill="none" stroke="#aa771c" stroke-width="1" stroke-dasharray="2,6" />
    <!-- Watch Top -->
    <rect x="45" y="15" width="10" height="12" fill="#111" stroke="#d4af37" stroke-width="2" />
    <circle cx="50" cy="12" r="6" fill="none" stroke="#aa771c" stroke-width="2" />
    <!-- Fractures / Cracks -->
    <path d="M50,27 L55,40 L45,45 L50,55" fill="none" stroke="#fcf6ba" stroke-width="1" />
    <path d="M22,55 L35,50 L40,60" fill="none" stroke="#fcf6ba" stroke-width="0.5" />
    <!-- Clock Hands at Midnight -->
    <line x1="50" y1="55" x2="50" y2="32" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    <line x1="50" y1="55" x2="55" y2="40" stroke="#ff6666" stroke-width="3" stroke-linecap="round" />
    <circle cx="50" cy="55" r="3" fill="#d4af37" />
    <circle cx="50" cy="30" r="2" fill="#ff0000" />
</svg>`;

const svg_vl33 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="piGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#88aadd" stop-opacity="0.8" /><stop offset="80%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#piGlow)" />
    <!-- Dowsing Pendulum -->
    <polygon points="50,20 60,40 50,70 40,40" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <line x1="50" y1="10" x2="50" y2="20" stroke="#fcf6ba" stroke-width="1.5" stroke-dasharray="2,2" />
    <circle cx="50" cy="40" r="4" fill="#4183d7" />
    <!-- Radar Waves -->
    <path d="M25,75 Q50,90 75,75" fill="none" stroke="#4183d7" stroke-width="2" opacity="0.8" />
    <path d="M35,85 Q50,95 65,85" fill="none" stroke="#88aadd" stroke-width="1.5" opacity="0.6" />
    <!-- Hidden Wolf Claw Marks -->
    <g transform="translate(60, 60) rotate(-20)" stroke="#ff0000" stroke-width="1" fill="none" opacity="0.5">
        <path d="M0,0 Q5,10 0,20" />
        <path d="M8,2 Q13,12 8,22" />
        <path d="M16,4 Q21,14 16,24" />
    </g>
</svg>`;

const svg_vl34 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="pacifistGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" /><stop offset="60%" stop-color="#4183d7" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#pacifistGlow)" />
    <!-- Snapped Execution Sword -->
    <polygon points="30,70 35,65 45,75 40,80" fill="#111" stroke="#d4af37" stroke-width="2" />
    <polygon points="37,67 75,25 80,30 42,72" fill="#111" stroke="#aa771c" stroke-width="1.5" />
    <polygon points="55,45 60,35 70,45" fill="#000" />
    <line x1="50" y1="50" x2="65" y2="35" stroke="#fff" stroke-width="2" /> <!-- The Snap -->
    <!-- Geometric Peace Dove -->
    <path d="M20,40 L40,20 L45,35 L65,30 L50,55 L25,50 Z" fill="rgba(255,255,255,0.9)" stroke="#4183d7" stroke-width="1" stroke-linejoin="round" />
    <path d="M45,35 L50,55" stroke="#88aadd" stroke-width="0.5" />
    <circle cx="28" cy="42" r="1.5" fill="#000" />
</svg>`;

const svg_vl35 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="princeGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.8" /><stop offset="50%" stop-color="#d4af37" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#princeGlow)" />
    <!-- Royal Sun Crest -->
    <circle cx="50" cy="50" r="22" fill="#111" stroke="#d4af37" stroke-width="2" />
    <path d="M50,15 L55,28 L50,22 L45,28 Z" fill="#fcf6ba" />
    <path d="M50,85 L45,72 L50,78 L55,72 Z" fill="#fcf6ba" />
    <path d="M15,50 L28,45 L22,50 L28,55 Z" fill="#fcf6ba" />
    <path d="M85,50 L72,55 L78,50 L72,45 Z" fill="#fcf6ba" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="#fcf6ba" stroke-width="1" stroke-dasharray="2,2" />
    <!-- Vertical Knight Sword -->
    <line x1="50" y1="20" x2="50" y2="80" stroke="#fff" stroke-width="3" />
    <polygon points="40,30 60,30 50,20" fill="#d4af37" />
    <rect x="45" y="30" width="10" height="3" fill="#111" />
    <circle cx="50" cy="50" r="4" fill="#4183d7" />
</svg>`;

const svg_vl36 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="spellGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#spellGlow)" />
    <!-- Jagged Lips Contour -->
    <path d="M20,60 Q50,45 80,60 Q50,75 20,60 Z" fill="#000" stroke="#fcf6ba" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M25,60 Q50,55 75,60" fill="none" stroke="#d4af37" stroke-width="1" />
    <!-- Magic Padlock Piercing the Lips -->
    <rect x="40" y="35" width="20" height="20" rx="2" fill="#111" stroke="#8a2be2" stroke-width="2" />
    <path d="M45,35 L45,25 A5,5 0 0,1 55,25 L55,35" fill="none" stroke="#d4af37" stroke-width="2.5" />
    <circle cx="50" cy="45" r="3" fill="#4183d7" />
    <line x1="50" y1="48" x2="50" y2="52" stroke="#4183d7" stroke-width="1.5" />
    <!-- Sealing Runes -->
    <circle cx="50" cy="60" r="8" fill="rgba(138, 43, 226, 0.4)" stroke="#fff" stroke-width="0.5" />
</svg>`;

const svg_vl37 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="toughGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.8" /><stop offset="80%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#toughGlow)" />
    <!-- Geometric Fist / Brass Knuckles -->
    <polygon points="35,70 65,70 75,40 60,30 40,30 25,40" fill="#111" stroke="#d4af37" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M40,30 L40,50 M50,25 L50,50 M60,30 L60,50 M35,70 L25,40" stroke="#aa771c" stroke-width="1.5" />
    <circle cx="35" cy="40" r="4" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="45" cy="35" r="4" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="55" cy="35" r="4" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="65" cy="40" r="4" fill="#000" stroke="#fcf6ba" stroke-width="1" />
    <!-- Broken Chains / Wolf Fangs -->
    <path d="M20,20 Q35,35 45,25 M80,20 Q65,35 55,25" fill="none" stroke="#fff" stroke-width="2" />
    <circle cx="20" cy="20" r="3" fill="none" stroke="#fff" stroke-width="1.5" />
    <circle cx="80" cy="20" r="3" fill="none" stroke="#fff" stroke-width="1.5" />
    <!-- Impact lines -->
    <line x1="50" y1="25" x2="50" y2="10" stroke="#fcf6ba" stroke-width="2" />
    <line x1="30" y1="35" x2="15" y2="25" stroke="#fcf6ba" stroke-width="1.5" />
    <line x1="70" y1="35" x2="85" y2="25" stroke="#fcf6ba" stroke-width="1.5" />
</svg>`;

const svg_vl38 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="troubleGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.7" /><stop offset="50%" stop-color="#8a2be2" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#troubleGlow)" />
    <!-- Twin Transition Vortexes -->
    <path d="M30,30 C50,10 70,50 50,70 C30,90 10,50 30,30 Z" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <path d="M70,70 C50,90 30,50 50,30 C70,10 90,50 70,70 Z" fill="none" stroke="#88aadd" stroke-width="1.5" />
    <!-- The Swapping Masks -->
    <polygon points="25,35 40,40 30,55" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <polygon points="75,65 60,60 70,45" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="32" cy="42" r="1.5" fill="#fff" />
    <circle cx="68" cy="58" r="1.5" fill="#fff" />
    <!-- Chaotic Motion Arrows -->
    <path d="M40,20 Q60,30 55,45" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M60,80 Q40,70 45,55" fill="none" stroke="#88aadd" stroke-width="1" stroke-dasharray="2,2" />
</svg>`;

const svg_vl39 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="fortuneGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#fcf6ba" stop-opacity="0.8" /><stop offset="70%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#fortuneGlow)" />
    <!-- Dead Skull -->
    <path d="M35,60 C35,40 65,40 65,60 L60,80 L40,80 Z" fill="#0a0a0c" stroke="#aa771c" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="43" cy="55" r="4" fill="#000" stroke="#fcf6ba" stroke-width="0.5" />
    <circle cx="57" cy="55" r="4" fill="#000" stroke="#fcf6ba" stroke-width="0.5" />
    <path d="M45,75 L45,70 M50,75 L50,70 M55,75 L55,70" stroke="#fcf6ba" stroke-width="1" />
    <!-- Glowing Star on Forehead -->
    <polygon points="50,42 52,48 58,50 52,52 50,58 48,52 42,50 48,48" fill="#fff" />
    <!-- Swinging Golden Pendulum above -->
    <line x1="50" y1="0" x2="35" y2="30" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="2,1" />
    <polygon points="35,25 40,30 35,35 30,30" fill="#d4af37" stroke="#fff" stroke-width="1" />
    <path d="M35,35 Q50,45 65,35" fill="none" stroke="#4183d7" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
</svg>`;

// --- DECK 6 SVGs (EVIL FACTION) ---
const svg_ww04 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="lycanGlow" cx="50%" cy="40%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.8" /><stop offset="50%" stop-color="#8b0000" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#lycanGlow)" />
    <!-- Human Mask Base -->
    <path d="M50,15 C20,15 25,45 25,65 C25,85 50,90 50,75 Z" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <path d="M50,15 C80,15 75,45 75,65 C75,85 50,90 50,75 Z" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <!-- Mask Cracks -->
    <path d="M50,15 L50,35 M50,45 L45,60 L50,75 M70,30 L60,40" stroke="#aa771c" stroke-width="1" fill="none" />
    <!-- The Hidden Wolf Skull Snout / Fangs peeking from under -->
    <polygon points="45,85 55,85 50,95" fill="#dc143c" />
    <polygon points="35,70 42,85 30,85" fill="#dc143c" stroke="#ff0000" stroke-width="1" />
    <polygon points="65,70 58,85 70,85" fill="#dc143c" stroke="#ff0000" stroke-width="1" />
    <!-- The One Red Wolf Eye -->
    <polygon points="35,45 45,52 30,55" fill="#ff0000" />
    <circle cx="38" cy="50" r="1.5" fill="#fcf6ba" />
    <ellipse cx="65" cy="50" rx="6" ry="3" fill="none" stroke="#fcf6ba" stroke-width="1" />
</svg>`;

const svg_ww05 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="loneGlow" cx="50%" cy="30%"><stop offset="0%" stop-color="#dc143c" stop-opacity="0.9" /><stop offset="60%" stop-color="#4a154b" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#loneGlow)" />
    <!-- Eclipsed Moon -->
    <circle cx="50" cy="30" r="20" fill="#000" stroke="#ff0000" stroke-width="1.5" stroke-dasharray="2,6" />
    <path d="M50,10 A20,20 0 1,1 30,30 A20,20 0 0,0 50,10 Z" fill="#ff0000" />
    <!-- Solitary Wolf Howling Silhouette -->
    <path d="M20,90 L25,75 Q35,60 45,55 Q50,45 60,35 Q65,40 55,50 Q65,65 75,90 Z" fill="#111" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <polygon points="60,35 62,25 65,33" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <!-- Base Rock -->
    <path d="M10,95 Q50,85 90,95 Z" fill="#0a0a0c" stroke="#aa771c" stroke-width="2" />
</svg>`;

const svg_ww06 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="sorcGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.8" /><stop offset="50%" stop-color="#4a154b" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#sorcGlow)" />
    <!-- Fractured Scrying Crystal -->
    <circle cx="50" cy="50" r="25" fill="#111" stroke="#8b0000" stroke-width="3" />
    <path d="M40,30 L55,45 L45,60 L60,80" fill="none" stroke="#ff0000" stroke-width="1.5" />
    <!-- Demonic Claw/Staff enveloping -->
    <path d="M20,90 Q15,50 30,30 L35,40" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" />
    <path d="M40,95 Q40,65 50,25 L55,30" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" />
    <path d="M80,90 Q85,50 70,30 L65,40" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" />
    <!-- Inverted Evil Eye within -->
    <polygon points="50,65 35,45 65,45" fill="none" stroke="#fcf6ba" stroke-width="1" />
    <circle cx="50" cy="45" r="4" fill="#ff0000" />
</svg>`;

const svg_ww07 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="minionGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8b0000" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#minionGlow)" />
    <!-- Kneeling Cultist Hood -->
    <path d="M50,30 C30,30 20,60 15,90 L85,90 C80,60 70,30 50,30 Z" fill="#111" stroke="#aa771c" stroke-width="2" stroke-linejoin="round" />
    <!-- Face Void -->
    <ellipse cx="50" cy="45" rx="10" ry="15" fill="#000" />
    <path d="M45,45 Q50,50 55,45" fill="none" stroke="#d4af37" stroke-width="1" />
    <!-- Offering the Blood Knife -->
    <polygon points="48,10 52,10 50,30" fill="#dc143c" stroke="#ff0000" stroke-width="1" />
    <rect x="47" y="30" width="6" height="5" fill="#d4af37" />
    <!-- Sacrificial Drip -->
    <circle cx="50" cy="20" r="2" fill="#fff" />
</svg>`;

const svg_ww08 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cubGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#dc143c" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#cubGlow)" />
    <!-- Giant Parental Shadow Eyes -->
    <polygon points="15,20 35,30 20,35" fill="#8b0000" />
    <polygon points="85,20 65,30 80,35" fill="#8b0000" />
    <line x1="20" y1="28" x2="30" y2="28" stroke="#ff0000" stroke-width="1" />
    <line x1="80" y1="28" x2="70" y2="28" stroke="#ff0000" stroke-width="1" />
    <!-- Cub Skull (Smaller, rounder) -->
    <path d="M50,45 C35,45 30,65 40,85 L60,85 C70,65 65,45 50,45 Z" fill="#0a0a0c" stroke="#d4af37" stroke-width="2" />
    <polygon points="35,48 45,48 30,40" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <polygon points="65,48 55,48 70,40" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <!-- Cute but deadly Fangs -->
    <polygon points="42,85 45,92 48,85" fill="#fcf6ba" />
    <polygon points="58,85 55,92 52,85" fill="#fcf6ba" />
    <!-- Innocent Eyes -->
    <ellipse cx="42" cy="65" rx="4" ry="6" fill="#ff0000" stroke="#fcf6ba" stroke-width="0.5" />
    <ellipse cx="58" cy="65" rx="4" ry="6" fill="#ff0000" stroke="#fcf6ba" stroke-width="0.5" />
    <circle cx="42" cy="63" r="1.5" fill="#fff" />
    <circle cx="58" cy="63" r="1.5" fill="#fff" />
</svg>`;

const svg_ww09 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bbGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="1" /><stop offset="60%" stop-color="#4a154b" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="45" fill="url(#bbGlow)" />
    <!-- Massive Beast Silhouette (Background) -->
    <path d="M50,10 L75,30 L90,60 L60,95 L40,95 L10,60 L25,30 Z" fill="#050005" stroke="#8b0000" stroke-width="2" />
    <!-- Triple Claws Slashing the center -->
    <path d="M20,20 Q50,50 30,80" fill="none" stroke="#fcf6ba" stroke-width="2.5" stroke-linecap="round" />
    <path d="M45,15 Q75,45 55,75" fill="none" stroke="#fcf6ba" stroke-width="3" stroke-linecap="round" />
    <path d="M70,30 Q100,60 80,90" fill="none" stroke="#fcf6ba" stroke-width="2.5" stroke-linecap="round" />
    <!-- Blood splatter from claws -->
    <circle cx="40" cy="60" r="2" fill="#ff0000" />
    <circle cx="30" cy="70" r="3" fill="#ff0000" />
    <circle cx="60" cy="40" r="2.5" fill="#ff0000" />
</svg>`;

const svg_ww10 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="whiteGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" /><stop offset="60%" stop-color="#88aadd" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#whiteGlow)" />
    <!-- Symmetrical Pure White Wolf Skull -->
    <polygon points="50,15 75,35 70,60 55,90 45,90 30,60 25,35" fill="#000" stroke="#fff" stroke-width="2" stroke-linejoin="round" />
    <path d="M50,15 L75,35 L70,60 L50,75 Z" fill="rgba(255,255,255,0.1)" />
    <!-- Pale Aura Sigil -->
    <polygon points="50,25 55,40 45,40" fill="none" stroke="#88aadd" stroke-width="1.5" />
    <!-- Frosty Empty Eyes -->
    <polygon points="35,45 45,55 35,60" fill="#fff" stroke="#88aadd" stroke-width="1" />
    <polygon points="65,45 55,55 65,60" fill="#fff" stroke="#88aadd" stroke-width="1" />
    <line x1="50" y1="75" x2="50" y2="90" stroke="#fff" stroke-width="2" />
</svg>`;

const svg_ww11 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="dreamGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.8" /><stop offset="80%" stop-color="#0a0a0c" stop-opacity="0.2" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#dreamGlow)" />
    <!-- Sleeping Skull -->
    <polygon points="50,20 70,35 65,65 50,85 35,65 30,35" fill="#111" stroke="#aa771c" stroke-width="2" stroke-linejoin="round" />
    <!-- Sealed Eyes -->
    <line x1="32" y1="45" x2="48" y2="55" stroke="#fcf6ba" stroke-width="2" stroke-linecap="round" />
    <line x1="68" y1="45" x2="52" y2="55" stroke="#fcf6ba" stroke-width="2" stroke-linecap="round" />
    <!-- ZZZ or Ethereal Haze -->
    <path d="M20,20 L30,20 L20,30 L30,30" fill="none" stroke="#4183d7" stroke-width="1" />
    <path d="M75,15 L85,15 L75,25 L85,25" fill="none" stroke="#4183d7" stroke-width="1.5" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#4183d7" stroke-width="0.5" stroke-dasharray="2,8" opacity="0.6" />
</svg>`;

const svg_ww12 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="direGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.7" /><stop offset="70%" stop-color="#8b0000" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#direGlow)" />
    <!-- Primal Heavy Armored Skull -->
    <polygon points="50,10 80,30 85,55 65,75 70,95 50,80 30,95 35,75 15,55 20,30" fill="#050005" stroke="#d4af37" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M50,10 L80,30 L85,55 L50,70 Z" fill="#2a0000" opacity="0.5" />
    <!-- Vicious Saber Fangs -->
    <polygon points="40,85 45,95 48,80" fill="#ff0000" stroke="#fcf6ba" stroke-width="1" />
    <polygon points="60,85 55,95 52,80" fill="#ff0000" stroke="#fcf6ba" stroke-width="1" />
    <!-- Blood Brother Bind Mark -->
    <line x1="20" y1="50" x2="80" y2="50" stroke="#ff0000" stroke-width="2" />
    <circle cx="50" cy="50" r="5" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="50" cy="50" r="2" fill="#ff0000" />
    <!-- Fiery Red Eyes -->
    <polygon points="30,40 45,45 35,50" fill="#ff0000" />
    <polygon points="70,40 55,45 65,50" fill="#ff0000" />
</svg>`;

// --- DECK 7 SVGs ---
const svg_ww13 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="blackWolfGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#111" stop-opacity="0.9" /><stop offset="70%" stop-color="#050005" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#blackWolfGlow)" />
    <!-- Complete Eclipse / Void -->
    <circle cx="50" cy="50" r="25" fill="#000" stroke="#8b0000" stroke-width="0.5" stroke-dasharray="2,2" />
    <path d="M50,15 A35,35 0 1,1 15,50 A35,35 0 0,0 50,15 Z" fill="#050005" />
    <!-- Hidden Glowing Red Eyes in the Dark -->
    <circle cx="42" cy="48" r="2" fill="#ff0000" opacity="0.8" />
    <circle cx="58" cy="48" r="2" fill="#ff0000" opacity="0.8" />
    <!-- Subtle Wolf Outline fading into black -->
    <path d="M35,60 L45,75 L55,75 L65,60" fill="none" stroke="#222" stroke-width="2" />
    <path d="M30,35 L40,40 L50,30 L60,40 L70,35" fill="none" stroke="#1a0000" stroke-width="1.5" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#222" stroke-width="1" />
</svg>`;

const svg_ww14 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="wolfmanGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4183d7" stop-opacity="0.6" /><stop offset="50%" stop-color="#8b0000" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#wolfmanGlow)" />
    <!-- Inner Human Face Outline (Blueish) -->
    <path d="M35,50 C35,25 65,25 65,50 C65,70 55,80 50,80 C45,80 35,70 35,50 Z" fill="none" stroke="#88aadd" stroke-width="1.5" />
    <!-- Overlaid Wolf Snout / Fangs (Reddish) -->
    <polygon points="50,45 65,65 50,85 35,65" fill="#111" stroke="#ff0000" stroke-width="1" opacity="0.8" />
    <polygon points="45,85 55,85 50,95" fill="#dc143c" />
    <!-- Human Eye vs Wolf Eye -->
    <ellipse cx="42" cy="45" rx="4" ry="2" fill="#fff" />
    <circle cx="42" cy="45" r="1.5" fill="#4183d7" />
    
    <polygon points="55,43 63,45 57,47" fill="#ff0000" />
    <circle cx="58" cy="45" r="1" fill="#fcf6ba" />
    <!-- Claw Scratches Ripping the Human Disguise -->
    <path d="M25,25 Q45,50 35,80" fill="none" stroke="#dc143c" stroke-width="2" stroke-linecap="round" />
    <path d="M75,25 Q55,50 65,80" fill="none" stroke="#dc143c" stroke-width="2" stroke-linecap="round" />
</svg>`;

const svg_nt02 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="tannerGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#808080" stop-opacity="0.7" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#tannerGlow)" />
    <!-- The Hangman's Noose -->
    <path d="M50,10 L50,40 M45,40 C35,40 35,60 50,60 C65,60 65,40 55,40" fill="none" stroke="#aa771c" stroke-width="2" stroke-linecap="round" />
    <line x1="45" y1="35" x2="55" y2="35" stroke="#aa771c" stroke-width="3" />
    <line x1="45" y1="38" x2="55" y2="38" stroke="#aa771c" stroke-width="3" />
    <!-- Grinning Skull / Depressive Face -->
    <circle cx="50" cy="70" r="12" fill="#111" stroke="#e0e0e0" stroke-width="1.5" />
    <!-- X Eyes for the Tanner wanting death -->
    <path d="M43,65 L47,69 M47,65 L43,69" stroke="#ff6666" stroke-width="1.5" />
    <path d="M53,65 L57,69 M57,65 L53,69" stroke="#ff6666" stroke-width="1.5" />
    <path d="M44,75 Q50,70 56,75" fill="none" stroke="#e0e0e0" stroke-width="1.5" />
    <!-- Stitching / Leather tanning tools -->
    <line x1="20" y1="50" x2="30" y2="60" stroke="#fcf6ba" stroke-width="1" />
    <line x1="80" y1="50" x2="70" y2="60" stroke="#fcf6ba" stroke-width="1" />
</svg>`;

const svg_nt04 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="doppelGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#66cccc" stop-opacity="0.8" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#doppelGlow)" />
    <!-- Twin Overlapping Silhouettes -->
    <path d="M40,25 C20,25 20,55 20,75 L60,75 C60,55 60,25 40,25 Z" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6" />
    <path d="M60,25 C80,25 80,55 80,75 L40,75 C40,55 40,25 60,25 Z" fill="none" stroke="#66cccc" stroke-width="1.5" />
    <!-- Connection Mirror line -->
    <line x1="50" y1="15" x2="50" y2="85" stroke="#fcf6ba" stroke-width="2" stroke-dasharray="4,2" />
    <!-- The Eyes -->
    <circle cx="35" cy="45" r="3" fill="#fff" opacity="0.6" />
    <circle cx="65" cy="45" r="3" fill="#66cccc" />
    <path d="M30,55 L40,55" stroke="#fff" stroke-width="1" opacity="0.6" />
    <path d="M60,55 L70,55" stroke="#66cccc" stroke-width="1" />
</svg>`;

const svg_nt05 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="skGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8b0000" stop-opacity="0.8" /><stop offset="80%" stop-color="#050005" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#skGlow)" />
    <!-- Bloody Chef/Hunting Knife -->
    <path d="M30,70 L25,85 L35,80 L40,70 Z" fill="#111" stroke="#aa771c" stroke-width="2" />
    <path d="M40,70 L80,30 L85,25 L75,25 L30,70 Z" fill="#111" stroke="#e0e0e0" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M40,70 L80,30 L85,25 L75,25 Z" fill="#ff0000" opacity="0.4" />
    <!-- Blood Drips -->
    <circle cx="65" cy="45" r="3" fill="#ff0000" />
    <path d="M70,35 L70,45" stroke="#ff0000" stroke-width="1.5" />
    <circle cx="50" cy="55" r="2" fill="#ff0000" />
    <circle cx="80" cy="40" r="1.5" fill="#ff0000" />
    <!-- Tally Marks -->
    <g stroke="#fcf6ba" stroke-width="1.5" fill="none">
        <line x1="20" y1="30" x2="20" y2="45" />
        <line x1="25" y1="30" x2="25" y2="45" />
        <line x1="30" y1="30" x2="30" y2="45" />
        <line x1="35" y1="30" x2="35" y2="45" />
        <line x1="15" y1="40" x2="40" y2="35" stroke="#ff0000" stroke-width="2" /> <!-- The 5th cross -->
    </g>
    <!-- Creepy Smiling Mask Silhouette -->
    <path d="M25,60 Q50,90 80,50" fill="none" stroke="#222" stroke-width="2" />
</svg>`;

const svg_nt06 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cultGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8a2be2" stop-opacity="0.8" /><stop offset="60%" stop-color="#300050" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#cultGlow)" />
    <!-- The All-Seeing Eye Pyramid -->
    <polygon points="50,15 20,70 80,70" fill="#050010" stroke="#d4af37" stroke-width="2" stroke-linejoin="round" />
    <line x1="25" y1="60" x2="75" y2="60" stroke="#d4af37" stroke-width="1" />
    <path d="M40,40 Q50,30 60,40 Q50,50 40,40 Z" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="50" cy="40" r="3" fill="#8a2be2" />
    <circle cx="50" cy="40" r="1" fill="#fff" />
    <!-- Followers Hoods below -->
    <path d="M30,85 C30,75 25,70 20,70 C15,70 10,75 10,85 Z" fill="#111" stroke="#8a2be2" stroke-width="1" />
    <path d="M50,85 C50,75 45,70 40,70 C35,70 30,75 30,85 Z" fill="#111" stroke="#8a2be2" stroke-width="1" />
    <path d="M70,85 C70,75 65,70 60,70 C55,70 50,75 50,85 Z" fill="#111" stroke="#8a2be2" stroke-width="1" />
    <path d="M90,85 C90,75 85,70 80,70 C75,70 70,75 70,85 Z" fill="#111" stroke="#8a2be2" stroke-width="1" />
    <!-- Mind Control Waves -->
    <path d="M50,45 L30,75 M50,45 L45,75 M50,45 L65,75 M50,45 L80,75" stroke="#88aadd" stroke-width="0.5" stroke-dasharray="2,2" />
</svg>`;

const svg_nt07 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cursedGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#2e8b57" stop-opacity="0.8" /><stop offset="60%" stop-color="#0a1a0f" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#cursedGlow)" />
    <!-- Innocent Villager Shield (Broken) -->
    <path d="M35,25 L65,25 L65,55 C65,70 50,80 50,80 C50,80 35,70 35,55 Z" fill="none" stroke="#88aadd" stroke-width="2" stroke-dasharray="5,2" />
    <!-- Dark Mutating Veins / Root of the Curse -->
    <path d="M50,80 Q40,60 50,40 T60,15" fill="none" stroke="#2e8b57" stroke-width="2" />
    <path d="M50,80 Q60,50 40,30 T30,10" fill="none" stroke="#2e8b57" stroke-width="1.5" />
    <!-- The Wolf's Bite (Three Puncture Wounds) -->
    <circle cx="45" cy="45" r="3" fill="#ff0000" stroke="#fcf6ba" stroke-width="0.5" />
    <circle cx="55" cy="45" r="3" fill="#ff0000" stroke="#fcf6ba" stroke-width="0.5" />
    <circle cx="50" cy="55" r="3" fill="#ff0000" stroke="#fcf6ba" stroke-width="0.5" />
    <!-- Corrupt Aura -->
    <circle cx="50" cy="50" r="25" fill="none" stroke="#fcf6ba" stroke-width="0.5" opacity="0.5" />
</svg>`;

const svg_nt08 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="vampGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#dc143c" stop-opacity="0.8" /><stop offset="60%" stop-color="#3a000a" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#vampGlow)" />
    <!-- Bat / Vampire Wings Overlaid -->
    <path d="M50,40 Q25,10 10,30 Q20,50 15,70 Q35,60 50,80" fill="#111" stroke="#8b0000" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M50,40 Q75,10 90,30 Q80,50 85,70 Q65,60 50,80" fill="#111" stroke="#8b0000" stroke-width="1.5" stroke-linejoin="round" />
    <!-- Glowing Red Eyes -->
    <polygon points="35,45 42,48 38,52" fill="#ff6666" />
    <polygon points="65,45 58,48 62,52" fill="#ff6666" />
    <!-- Long Fangs -->
    <polygon points="45,60 48,70 50,60" fill="#fff" />
    <polygon points="55,60 52,70 50,60" fill="#fff" />
    <!-- Drip of Blood -->
    <circle cx="48" cy="73" r="1.5" fill="#ff0000" />
    <path d="M30,30 L40,40 M70,30 L60,40" stroke="#ff0000" stroke-width="1" />
</svg>`;

const svg_nt09 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="countGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.7" /><stop offset="40%" stop-color="#4a154b" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#countGlow)" />
    <!-- Aristocratic Collar -->
    <path d="M20,60 Q20,20 50,30 Q80,20 80,60 Q50,45 20,60 Z" fill="#050010" stroke="#d4af37" stroke-width="1.5" />
    <!-- Elegant Blood Goblet -->
    <path d="M40,50 L60,50 L55,70 L45,70 Z" fill="#111" stroke="#d4af37" stroke-width="2" />
    <ellipse cx="50" cy="50" rx="10" ry="3" fill="#4a154b" stroke="#d4af37" stroke-width="1" />
    <line x1="50" y1="70" x2="50" y2="85" stroke="#aa771c" stroke-width="2.5" />
    <ellipse cx="50" cy="85" rx="8" ry="2" fill="#111" stroke="#d4af37" stroke-width="2" />
    <!-- Swirling Blood inside -->
    <path d="M45,52 Q50,60 55,52" fill="none" stroke="#ff0000" stroke-width="1.5" />
    <!-- The Count's Ruby Pendant -->
    <polygon points="50,65 53,70 50,75 47,70" fill="#ff0000" stroke="#fff" stroke-width="0.5" />
    <circle cx="50" cy="40" r="2" fill="#fff" opacity="0.5" />
</svg>`;

// --- DECK 8 SVGs ---
const svg_nt10 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="chupaGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4a154b" stop-opacity="0.8" /><stop offset="60%" stop-color="#dc143c" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#chupaGlow)" />
    <!-- Three Spike Crest -->
    <polygon points="50,15 55,25 45,25" fill="#111" stroke="#dc143c" stroke-width="1.5" />
    <polygon points="40,20 45,30 35,30" fill="#111" stroke="#dc143c" stroke-width="1.5" />
    <polygon points="60,20 65,30 55,30" fill="#111" stroke="#dc143c" stroke-width="1.5" />
    <!-- Demonic Reptilian/Wolf Skull -->
    <path d="M50,25 C35,25 30,55 40,85 L60,85 C70,55 65,25 50,25 Z" fill="#0a0a0c" stroke="#aa771c" stroke-width="2" stroke-linejoin="round" />
    <!-- Narrow Slit Eyes -->
    <polygon points="35,50 45,55 35,60" fill="#ff0000" />
    <polygon points="65,50 55,55 65,60" fill="#ff0000" />
    <circle cx="42" cy="55" r="1.5" fill="#fff" />
    <circle cx="58" cy="55" r="1.5" fill="#fff" />
    <!-- Siphoning Fangs -->
    <polygon points="45,85 46,95 48,85" fill="#ff0000" />
    <polygon points="55,85 54,95 52,85" fill="#ff0000" />
    <!-- Blood drops -->
    <circle cx="46" cy="98" r="1.5" fill="#ff0000" />
    <circle cx="54" cy="97" r="1.5" fill="#ff0000" />
</svg>`;

const svg_nt11 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bogeyGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#050005" stop-opacity="0.9" /><stop offset="70%" stop-color="#8a2be2" stop-opacity="0.3" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#bogeyGlow)" />
    <!-- Dark Closet / Bed Frame -->
    <rect x="25" y="20" width="50" height="60" fill="#050505" stroke="#222" stroke-width="2" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="#111" stroke-width="2" />
    <!-- Shadowy Tendrils -->
    <path d="M25,80 Q10,75 15,60 T35,50" fill="none" stroke="#8a2be2" stroke-width="1.5" opacity="0.6" />
    <path d="M75,20 Q90,30 85,50 T65,60" fill="none" stroke="#8a2be2" stroke-width="1.5" opacity="0.6" />
    <!-- Multiple Eyes Peering from the Void -->
    <circle cx="40" cy="35" r="3" fill="#fff" />
    <circle cx="40" cy="35" r="1" fill="#000" />
    <circle cx="65" cy="45" r="3" fill="#fff" />
    <circle cx="65" cy="45" r="1" fill="#000" />
    <circle cx="35" cy="65" r="4" fill="#fff" />
    <circle cx="35" cy="65" r="1.5" fill="#000" />
    <circle cx="55" cy="70" r="2.5" fill="#fff" />
    <circle cx="55" cy="70" r="1" fill="#000" />
    <circle cx="45" cy="50" r="5" fill="#8a2be2" stroke="#fff" stroke-width="1" />
    <circle cx="45" cy="50" r="2" fill="#000" />
</svg>`;

const svg_nt12 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="hoodGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#8b0000" stop-opacity="0.7" /><stop offset="60%" stop-color="#2a2a2a" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#hoodGlow)" />
    <!-- The Hitman's Fedora Silhouette -->
    <path d="M20,40 Q50,20 80,40 Q50,45 20,40 Z" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <path d="M30,35 Q50,15 70,35 L65,40 Q50,30 35,40 Z" fill="#050505" stroke="#d4af37" stroke-width="1" />
    <!-- Two Hit Targets (Skulls / Contracts) -->
    <circle cx="35" cy="65" r="8" fill="rgba(255,0,0,0.2)" stroke="#ff0000" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="30" y1="60" x2="40" y2="70" stroke="#ff0000" stroke-width="1" />
    <line x1="40" y1="60" x2="30" y2="70" stroke="#ff0000" stroke-width="1" />
    
    <circle cx="65" cy="65" r="8" fill="rgba(255,0,0,0.2)" stroke="#ff0000" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="60" y1="60" x2="70" y2="70" stroke="#ff0000" stroke-width="1" />
    <line x1="70" y1="60" x2="60" y2="70" stroke="#ff0000" stroke-width="1" />
    <!-- Shadowy switchblade -->
    <polygon points="50,45 52,60 50,85 48,60" fill="#fff" stroke="#aa771c" stroke-width="1" />
    <path d="M47,60 L53,60 M49,50 L51,50 M49,55 L51,55" stroke="#111" stroke-width="1" />
</svg>`;

const svg_nt13 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="wildGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#2e8b57" stop-opacity="0.8" /><stop offset="60%" stop-color="#8b0000" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#wildGlow)" />
    <!-- Wild Child Split Face -->
    <!-- Left Side: Innocent Boy/Girl (Greenish hue) -->
    <path d="M50,20 C30,20 25,45 30,75 C35,85 45,85 50,85 Z" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="38" cy="45" r="4" fill="#fff" />
    <circle cx="38" cy="45" r="1.5" fill="#4183d7" />
    <!-- Right Side: Dark Feral Wolf (Reddish hue) -->
    <path d="M50,20 C70,20 75,45 70,75 L50,85 Z" fill="#050005" stroke="#ff0000" stroke-width="2" />
    <polygon points="62,40 70,45 60,50" fill="#ff0000" />
    <!-- The split line -->
    <line x1="50" y1="15" x2="50" y2="90" stroke="#d4af37" stroke-width="2" stroke-dasharray="6,4" />
    <!-- Wolf Fang peeking right side -->
    <polygon points="52,80 55,88 58,80" fill="#fcf6ba" />
    <!-- Forest Leaves floating left -->
    <path d="M20,40 Q25,30 30,35 Q25,45 20,40 Z" fill="#2e8b57" />
    <path d="M25,60 Q30,50 35,55 Q30,65 25,60 Z" fill="#2e8b57" />
</svg>`;

const svg_nt14 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="sasquatchGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#654321" stop-opacity="0.8" /><stop offset="70%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#sasquatchGlow)" />
    <!-- Fog / Mist -->
    <path d="M10,70 Q25,60 40,75 T70,60 T90,75" fill="none" stroke="#88aadd" stroke-width="3" opacity="0.3" stroke-linecap="round" />
    <!-- Giant Hairy Silhouette -->
    <path d="M40,20 Q50,10 60,20 Q70,40 75,70 Q60,65 50,75 Q40,65 25,70 Q30,40 40,20 Z" fill="#050505" stroke="#8b4513" stroke-width="1.5" stroke-linejoin="round" />
    <!-- Glowing yellow eyes in the dark body -->
    <circle cx="45" cy="35" r="2.5" fill="#fcf6ba" opacity="0.9" />
    <circle cx="55" cy="35" r="2.5" fill="#fcf6ba" opacity="0.9" />
    <!-- Giant Footprint Overlay (Subtle) -->
    <path d="M60,80 C50,70 40,70 30,80 C35,95 55,95 60,80 Z" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" />
    <circle cx="34" cy="74" r="2" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5" />
    <circle cx="42" cy="71" r="2" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5" />
    <circle cx="50" cy="71" r="2" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5" />
    <circle cx="58" cy="74" r="2" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.5" />
</svg>`;

const svg_nt15 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="lepreGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4CAF50" stop-opacity="0.8" /><stop offset="60%" stop-color="#228B22" stop-opacity="0.4" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#lepreGlow)" />
    <!-- Green Top Hat -->
    <path d="M35,45 L40,15 L60,15 L65,45 Z" fill="#050a05" stroke="#fcf6ba" stroke-width="1.5" />
    <ellipse cx="50" cy="45" rx="25" ry="5" fill="#111" stroke="#fcf6ba" stroke-width="1.5" />
    <rect x="37" y="38" width="26" height="5" fill="#228B22" />
    <rect x="45" y="37" width="10" height="7" fill="none" stroke="#d4af37" stroke-width="1.5" />
    <!-- The Dark / Cursed Clover -->
    <path d="M50,70 A5,5 0 1,1 40,70 A5,5 0 1,1 50,60 A5,5 0 1,1 60,70 A5,5 0 1,1 50,70 Z" fill="#2e8b57" stroke="#000" stroke-width="1" />
    <line x1="50" y1="70" x2="50" y2="85" stroke="#2e8b57" stroke-width="2" />
    <circle cx="50" cy="65" r="2" fill="#ff0000" /> <!-- Evil twist -->
    <!-- Gold coins scattering -->
    <ellipse cx="30" cy="80" rx="4" ry="2" fill="#fcf6ba" transform="rotate(-20 30 80)" />
    <ellipse cx="70" cy="75" rx="4" ry="2" fill="#fcf6ba" transform="rotate(30 70 75)" />
    <ellipse cx="65" cy="85" rx="4" ry="2" fill="#fcf6ba" transform="rotate(10 65 85)" />
</svg>`;

const svg_nt16 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="maryGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.7" /><stop offset="70%" stop-color="#050005" stop-opacity="0.5" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#maryGlow)" />
    <!-- Shattered Mirror Frame -->
    <polygon points="30,15 70,15 80,50 70,85 30,85 20,50" fill="rgba(65, 131, 215, 0.1)" stroke="#d4af37" stroke-width="2" />
    <polygon points="35,20 65,20 73,50 65,80 35,80 27,50" fill="rgba(65, 131, 215, 0.2)" stroke="#88aadd" stroke-width="1" />
    <!-- Shatter cracks -->
    <path d="M50,50 L35,20 M50,50 L65,20 M50,50 L73,50 M50,50 L65,80 M50,50 L35,80 M50,50 L27,50" stroke="#fff" stroke-width="1" opacity="0.7" />
    <path d="M40,35 L45,50 L40,65" fill="none" stroke="#fff" stroke-width="1" opacity="0.6" />
    <!-- Terrifying Ghost Face Reflection (Partial) -->
    <circle cx="50" cy="45" r="15" fill="#111" stroke="#ff6666" stroke-width="1" opacity="0.8" />
    <ellipse cx="45" cy="42" rx="2" ry="3" fill="#ff0000" />
    <ellipse cx="55" cy="42" rx="2" ry="3" fill="#ff0000" />
    <path d="M45,52 Q50,60 55,52" fill="none" stroke="#ff0000" stroke-width="2" />
    <!-- Bloody Handprint -->
    <path d="M50,70 L48,60 L50,65 L52,58 L52,65 L55,60 M50,70 L52,75 L48,75 Z" fill="#8b0000" stroke="#ff0000" stroke-width="1" opacity="0.8" />
</svg>`;

const svg_nt17 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="thingGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#006400" stop-opacity="0.9" /><stop offset="60%" stop-color="#051005" stop-opacity="0.6" /><stop offset="100%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#thingGlow)" />
    <!-- Swamp Pond / Puddle -->
    <ellipse cx="50" cy="75" rx="30" ry="10" fill="#050a05" stroke="#2e8b57" stroke-width="1.5" />
    <!-- Creepy Tangled Vines or Tentacles emerging -->
    <path d="M40,75 C30,40 20,30 30,15 C35,25 45,50 45,75" fill="#111" stroke="#2e8b57" stroke-width="2" />
    <path d="M60,75 C70,40 80,30 70,15 C65,25 55,50 55,75" fill="#111" stroke="#2e8b57" stroke-width="2" />
    <path d="M50,75 C50,45 40,35 50,25 C60,35 50,45 50,75" fill="#111" stroke="#88aadd" stroke-width="1.5" stroke-dasharray="2,2" />
    <!-- Unknown Eyes inside the muck -->
    <circle cx="45" cy="68" r="1.5" fill="#fcf6ba" />
    <circle cx="55" cy="68" r="1.5" fill="#fcf6ba" />
    <!-- Bubbles -->
    <circle cx="35" cy="80" r="2" fill="none" stroke="#2e8b57" stroke-width="1" />
    <circle cx="65" cy="73" r="1.5" fill="none" stroke="#2e8b57" stroke-width="1" />
</svg>`;

const svg_nt18 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="nostradamusGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.8" /><stop offset="70%" stop-color="#0a0a0c" stop-opacity="0" /></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#nostradamusGlow)" />
    <!-- Ancient Scroll -->
    <path d="M30,25 L70,25 Q75,25 75,30 Q75,35 70,35 L30,35 Q25,35 25,30 Q25,25 30,25 Z" fill="#111" stroke="#d4af37" stroke-width="1.5" />
    <path d="M30,35 L30,75 Q25,75 25,80 Q25,85 30,85 L70,85 Q75,85 75,80 Q75,75 70,75 L70,35" fill="none" stroke="#aa771c" stroke-width="1.5" />
    <!-- All Seeing Prophecy Eye -->
    <path d="M35,55 Q50,45 65,55 Q50,65 35,55 Z" fill="#000" stroke="#fcf6ba" stroke-width="1.5" />
    <circle cx="50" cy="55" r="4" fill="#4183d7" />
    <circle cx="50" cy="55" r="1.5" fill="#fff" />
    <!-- Constellation Stars -->
    <circle cx="35" cy="45" r="1" fill="#fff" />
    <circle cx="65" cy="45" r="1.5" fill="#fff" />
    <circle cx="45" cy="70" r="1" fill="#fff" />
    <circle cx="55" cy="70" r="1.5" fill="#fff" />
    <path d="M35,45 L50,55 L65,45 M50,55 L45,70 L55,70 Z" fill="none" stroke="#fcf6ba" stroke-width="0.5" stroke-dasharray="1,2" opacity="0.6" />
    <!-- Quill Pen -->
    <path d="M80,15 Q75,30 65,40 L70,45 Q90,30 80,15 Z" fill="#4183d7" stroke="#88aadd" stroke-width="1" />
    <path d="M72.5,42.5 L60,50" stroke="#fcf6ba" stroke-width="1" />
</svg>`;

const svg_neutral_fallback = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="neutralGlow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#e0e0e0" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#2a2a2a" stop-opacity="0" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="45" r="35" fill="url(#neutralGlow)" />
    <!-- Floating Cards / Shards -->
    <polygon points="20,20 30,15 25,30" fill="none" stroke="#d4af37" stroke-width="1" />
    <polygon points="80,20 70,15 75,30" fill="none" stroke="#a0a0a0" stroke-width="1" />
    <polygon points="15,60 25,70 10,75" fill="none" stroke="#a0a0a0" stroke-width="1" />
    <polygon points="85,60 75,70 90,75" fill="none" stroke="#d4af37" stroke-width="1" />

    <!-- Split Mask -->
    <path d="M50,15 C20,15 10,45 25,75 Q50,95 50,75 Z" fill="#111" stroke="#e0e0e0" stroke-width="1.5" />
    <path d="M50,15 C80,15 90,45 75,75 Q50,95 50,75 Z" fill="#d4af37" stroke="#aa771c" stroke-width="1.5" />
    <line x1="50" y1="15" x2="50" y2="75" stroke="#111" stroke-width="1" />

    <!-- Eyes -->
    <ellipse cx="35" cy="45" rx="6" ry="4" fill="#000" stroke="#e0e0e0" stroke-width="1" />
    <ellipse cx="65" cy="45" rx="6" ry="4" fill="#111" stroke="#111" stroke-width="1" />
    <circle cx="35" cy="45" r="1.5" fill="#fff" />

    <!-- Smile / Frown -->
    <path d="M25,65 Q35,55 45,65" fill="none" stroke="#e0e0e0" stroke-width="1.5" />
    <path d="M55,60 Q65,75 75,60" fill="none" stroke="#111" stroke-width="1.5" />
</svg>`;

const svg_nt01 = svg_neutral_fallback; // Jester is specifically the mask

function getSvgOve(id, factionClass) {
    if (id === 'SP·01') return svg_sp01;
    if (id === 'VL·01') return svg_vl01;
    if (id === 'VL·02') return svg_vl02;
    if (id === 'VL·03') return svg_vl03;
    if (id === 'VL·04') return svg_vl04;
    if (id === 'VL·05') return svg_vl05;
    if (id === 'VL·06') return svg_vl06;
    if (id === 'VL·07') return svg_vl07;
    if (id === 'VL·08') return svg_vl08;
    if (id === 'VL·09') return svg_vl09;
    if (id === 'VL·10') return svg_vl10;
    if (id === 'VL·11') return svg_vl11;
    if (id === 'VL·12') return svg_vl12;
    if (id === 'VL·13') return svg_vl13;
    if (['VL·14', 'VL·15', 'VL·16', 'VL·17'].includes(id)) return svg_vl14;
    if (id === 'VL·18') return svg_vl18;
    if (id === 'VL·19') return svg_vl19;
    if (id === 'VL·20') return svg_vl20;
    if (id === 'VL·21') return svg_vl21;
    if (id === 'VL·22') return svg_vl22;
    if (id === 'VL·23') return svg_vl23;
    if (id === 'VL·24') return svg_vl24;
    if (id === 'VL·25') return svg_vl25;
    if (id === 'VL·26') return svg_vl26;
    if (id === 'VL·27') return svg_vl27;
    if (id === 'VL·28') return svg_vl28;
    if (['VL·29', 'VL·30'].includes(id)) return svg_vl29;
    if (id === 'VL·31') return svg_vl31;
    if (id === 'VL·32') return svg_vl32;
    if (id === 'VL·33') return svg_vl33;
    if (id === 'VL·34') return svg_vl34;
    if (id === 'VL·35') return svg_vl35;
    if (id === 'VL·36') return svg_vl36;
    if (id === 'VL·37') return svg_vl37;
    if (id === 'VL·38') return svg_vl38;
    if (id === 'VL·39') return svg_vl39;
    
    if (['WW·01', 'WW·02'].includes(id)) return svg_ww01;
    if (id === 'WW·03') return svg_ww03;
    if (id === 'WW·04') return svg_ww04;
    if (id === 'WW·05') return svg_ww05;
    if (id === 'WW·06') return svg_ww06;
    if (id === 'WW·07') return svg_ww07;
    if (id === 'WW·08') return svg_ww08;
    if (id === 'WW·09') return svg_ww09;
    if (id === 'WW·10') return svg_ww10;
    if (id === 'WW·11') return svg_ww11;
    if (id === 'WW·12') return svg_ww12;
    if (id === 'WW·13') return svg_ww13;
    if (id === 'WW·14') return svg_ww14;
    
    if (id === 'NT·01') return svg_nt01;
    if (id === 'NT·02') return svg_nt02;
    if (id === 'NT·03') return svg_nt03;
    if (id === 'NT·04') return svg_nt04;
    if (id === 'NT·05') return svg_nt05;
    if (id === 'NT·06') return svg_nt06;
    if (id === 'NT·07') return svg_nt07;
    if (id === 'NT·08') return svg_nt08;
    if (id === 'NT·09') return svg_nt09;
    if (id === 'NT·10') return svg_nt10;
    if (id === 'NT·11') return svg_nt11;
    if (id === 'NT·12') return svg_nt12;
    if (id === 'NT·13') return svg_nt13;
    if (id === 'NT·14') return svg_nt14;
    if (id === 'NT·15') return svg_nt15;
    if (id === 'NT·16') return svg_nt16;
    if (id === 'NT·17') return svg_nt17;
    if (id === 'NT·18') return svg_nt18;
    
    // Fallback based on faction for Deck 7-8
    if (factionClass === 'faction-supreme') return svg_sp01;
    if (factionClass === 'faction-evil') return svg_ww01;
    if (factionClass === 'faction-good') return svg_vl14;
    
    return svg_neutral_fallback;
}
