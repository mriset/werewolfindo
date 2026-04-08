const dossierArt = {};

dossierArt["moderator"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-3deg);"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e0e0e0;">
    <rect width="100" height="100" fill="#e0e0e0"/>
    <!-- Crosshairs -->
    <line x1="50" y1="0" x2="50" y2="100" stroke="#000" stroke-width="0.5" opacity="0.3" stroke-dasharray="2,2"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#000" stroke-width="0.5" opacity="0.3" stroke-dasharray="2,2"/>
    <!-- Eye Outline -->
    <path d="M10,50 Q50,20 90,50 Q50,80 10,50 Z" fill="none" stroke="#111" stroke-width="2.5"/>
    <!-- Camera Lens / Iris -->
    <circle cx="50" cy="50" r="15" fill="none" stroke="#111" stroke-width="2"/>
    <circle cx="50" cy="50" r="8" fill="#111"/>
    <circle cx="53" cy="47" r="2" fill="#fff"/>
    <!-- Occult Geometry -->
    <polygon points="50,15 80,65 20,65" fill="none" stroke="#111" stroke-width="1" opacity="0.7"/>
    <polygon points="50,85 80,35 20,35" fill="none" stroke="#111" stroke-width="1" opacity="0.7"/>
    <!-- Camera data overlay -->
    <text x="5" y="10" font-family="monospace" font-size="5" fill="#111">REC 00:00:00</text>
    <text x="75" y="95" font-family="monospace" font-size="5" fill="#111">CAM_01</text>
</svg>
<div class="stamp" style="color: var(--stamp-gold); border-color: var(--stamp-gold); transform: rotate(-8deg);">TOP SECRET</div>
`;

dossierArt["villager"] = `
<div class="tape" style="transform: translateX(-50%) rotate(4deg);"></div>
<div class="paperclip" style="transform: rotate(-10deg);"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e8e8e8;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.2" opacity="0.3"/>
    <!-- Chalk Outline / Silhouette -->
    <path d="M35,100 L45,60 L50,55 L55,65 L65,100" stroke="#1a1a1a" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="50" cy="40" r="8" fill="#1a1a1a" opacity="0.8"/>
    <!-- Vignette -->
    <radialGradient id="vig" cx="50%" cy="50%" r="50%">
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.9"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig)"/>
    <!-- Blood splatter / Evidence -->
    <circle cx="25" cy="25" r="9" fill="#8A0303" opacity="0.85"/>
    <circle cx="32" cy="18" r="3" fill="#8A0303" opacity="0.85"/>
    <circle cx="18" cy="32" r="4" fill="#8A0303" opacity="0.85"/>
    <path d="M25,25 Q35,60 30,85" stroke="#8A0303" stroke-width="2.5" fill="none" opacity="0.7"/>
    <text x="80" y="20" font-family="monospace" font-size="6" fill="#fff" opacity="0.6">#42</text>
</svg>
<div class="stamp" style="color: var(--stamp-red); border-color: var(--stamp-red); transform: rotate(-12deg);">CLASSIFIED</div>
`;

dossierArt["werewolf"] = `
<div class="tape" style="top: -2mm; left: 10%; transform: rotate(-15deg); width: 10mm;"></div>
<div class="tape" style="top: -2mm; left: 80%; transform: rotate(10deg); width: 12mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#111;">
    <!-- Film Grain / Noise pattern -->
    <rect width="100" height="100" fill="#111"/>
    <circle cx="50" cy="50" r="40" fill="#222" filter="blur(5px)"/>
    <!-- Glowing Eye in the dark -->
    <circle cx="40" cy="45" r="3" fill="#ff0000" filter="blur(1px)"/>
    <circle cx="40" cy="45" r="1.5" fill="#fff"/>
    <!-- Massive Blood Slashes across the photo -->
    <path d="M80,10 Q60,50 30,90" stroke="#A00000" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M65,5 Q45,50 15,85" stroke="#A00000" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M95,20 Q75,60 45,95" stroke="#A00000" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- Splatter from slash -->
    <circle cx="25" cy="80" r="4" fill="#A00000"/>
    <circle cx="40" cy="88" r="2.5" fill="#A00000"/>
    <circle cx="15" cy="70" r="3" fill="#A00000"/>
    <!-- Glitch/Timestamp overlay -->
    <text x="5" y="95" font-family="monospace" font-size="5" fill="#fff" opacity="0.5">23:59:59 ERRR</text>
</svg>
<div class="stamp" style="color: var(--stamp-red); border-color: var(--stamp-red); transform: rotate(15deg); top: 10mm; right: 5mm; font-size: 14pt;">LETHAL</div>
`;

dossierArt["jester"] = `
<div class="tape" style="transform: translateX(-50%) translateY(30mm) rotate(85deg); width: 25mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e4e3df;">
    <!-- Paper texture lines -->
    <line x1="0" y1="20" x2="100" y2="20" stroke="#b0b0b0" stroke-width="0.5"/>
    <line x1="0" y1="40" x2="100" y2="40" stroke="#b0b0b0" stroke-width="0.5"/>
    <line x1="0" y1="60" x2="100" y2="60" stroke="#b0b0b0" stroke-width="0.5"/>
    <line x1="0" y1="80" x2="100" y2="80" stroke="#b0b0b0" stroke-width="0.5"/>
    <!-- Inkblot / Joker Smile -->
    <g fill="#1a1a1a">
        <path d="M50,20 C30,10 20,30 30,45 C20,50 15,65 30,75 C40,85 45,70 50,60 Z" />
        <path d="M50,20 C70,10 80,30 70,45 C80,50 85,65 70,75 C60,85 55,70 50,60 Z" />
        <path d="M35,65 Q50,80 65,65" fill="none" stroke="#e4e3df" stroke-width="3" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="3" fill="#e4e3df"/>
        <circle cx="60" cy="40" r="3" fill="#e4e3df"/>
    </g>
    <!-- Additional Ink Splatters -->
    <circle cx="20" cy="20" r="2" fill="#1a1a1a"/>
    <circle cx="85" cy="80" r="4" fill="#1a1a1a"/>
    <circle cx="15" cy="60" r="1.5" fill="#1a1a1a"/>
</svg>
<div class="stamp" style="color: var(--stamp-purple); border-color: var(--stamp-purple); transform: rotate(5deg); bottom: 15mm; right: 2mm;">QUARANTINE</div>
`;

dossierArt["cupid"] = `
<div class="tape" style="transform: translateX(-50%) rotate(2deg);"></div>
<div class="paperclip" style="transform: rotate(5deg); top: 1mm; right: 2mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e8e8e8;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.2" opacity="0.3"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#b0b0b0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#b0b0b0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <path d="M15,90 L25,60 L35,90 Z" fill="#1a1a1a" opacity="0.6"/>
    <circle cx="25" cy="50" r="7" fill="#1a1a1a" opacity="0.6"/>
    <path d="M85,90 L75,60 L65,90 Z" fill="#1a1a1a" opacity="0.6"/>
    <circle cx="75" cy="50" r="7" fill="#1a1a1a" opacity="0.6"/>
    <path d="M25,50 L40,60 L50,40 L60,60 L75,50" stroke="#111" stroke-width="0.5" fill="none" opacity="0.4" stroke-dasharray="1,1"/>
    <path d="M25,50 Q40,10 50,30 Q60,10 75,50 Q60,85 50,95 Q40,85 25,50" fill="none" stroke="#B03060" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M25,50 Q40,20 50,35 Q60,20 75,50 Q60,75 50,85 Q40,75 25,50" fill="none" stroke="#B03060" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
    <circle cx="25" cy="50" r="2.5" fill="#A00000"/>
    <circle cx="25" cy="50" r="1" fill="#fff" opacity="0.6"/>
    <circle cx="75" cy="50" r="2.5" fill="#A00000"/>
    <circle cx="75" cy="50" r="1" fill="#fff" opacity="0.6"/>
    <circle cx="50" cy="30" r="2.5" fill="#111"/>
    <radialGradient id="vig-cupid" cx="50%" cy="50%" r="50%">
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.75"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-cupid)"/>
    <text x="5" y="10" font-family="monospace" font-size="5" fill="#111" opacity="0.6">EVID-14</text>
</svg>
<div class="stamp" style="color: var(--stamp-pink); border-color: var(--stamp-pink); transform: rotate(-8deg); bottom: 10mm; left: 2mm;">BONDED</div>
`;

dossierArt["seer"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-4deg); width: 22mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d9d9d9;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.2" opacity="0.3"/>
    <line x1="0" y1="25" x2="100" y2="25" stroke="#111" stroke-width="0.5" stroke-dasharray="1,2" opacity="0.4"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#111" stroke-width="0.5" stroke-dasharray="1,2" opacity="0.4"/>
    <line x1="0" y1="75" x2="100" y2="75" stroke="#111" stroke-width="0.5" stroke-dasharray="1,2" opacity="0.4"/>
    <path d="M 25,100 C 25,60 35,20 50,20 C 65,20 75,60 75,100 Z" fill="#1a1a1a" opacity="0.85"/>
    <rect x="30" y="42" width="40" height="12" fill="#000"/>
    <text x="50" y="50" font-family="'Courier Prime', monospace" font-size="5" fill="#fff" font-weight="bold" text-anchor="middle" letter-spacing="1">REDACTED</text>
    <path d="M 42,32 Q 50,24 58,32 Q 50,40 42,32 Z" fill="none" stroke="#A00000" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="50" cy="32" r="2.5" fill="#A00000"/>
    <path d="M 50,38 L 50,42" stroke="#A00000" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 45,36 L 43,40" stroke="#A00000" stroke-width="1.5" stroke-linecap="round"/>
    <radialGradient id="vig-seer" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-seer)"/>
    <text x="5" y="95" font-family="monospace" font-size="5" fill="#fff" opacity="0.7">CAM-INT:07</text>
</svg>
<div class="stamp" style="color: var(--stamp-blue); border-color: var(--stamp-blue); transform: rotate(12deg); bottom: 5mm; right: 2mm;">VERIFIED</div>
`;

dossierArt["hunter"] = `
<div class="tape" style="transform: translateX(-50%) rotate(5deg); width: 20mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d0d0c8;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.4"/>
    <path d="M 40,90 C 40,60 45,40 50,40 C 55,40 60,60 60,90 Z" fill="#1a1a1a" opacity="0.6" filter="blur(1px)"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="#111" stroke-width="2"/>
    <circle cx="50" cy="50" r="44" fill="none" stroke="#A00000" stroke-width="0.5" opacity="0.8"/>
    <line x1="5" y1="50" x2="40" y2="50" stroke="#111" stroke-width="1.5"/>
    <line x1="60" y1="50" x2="95" y2="50" stroke="#111" stroke-width="1.5"/>
    <line x1="50" y1="5" x2="50" y2="40" stroke="#111" stroke-width="1.5"/>
    <line x1="50" y1="60" x2="50" y2="95" stroke="#111" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="1.5" fill="#A00000"/>
    <line x1="45" y1="50" x2="55" y2="50" stroke="#A00000" stroke-width="0.5"/>
    <line x1="50" y1="45" x2="50" y2="55" stroke="#A00000" stroke-width="0.5"/>
    <circle cx="25" cy="50" r="1" fill="#111"/>
    <circle cx="75" cy="50" r="1" fill="#111"/>
    <circle cx="50" cy="25" r="1" fill="#111"/>
    <circle cx="50" cy="75" r="1" fill="#111"/>
    <radialGradient id="vig-scope" cx="50%" cy="50%" r="50%">
        <stop offset="70%" stop-color="transparent"/>
        <stop offset="95%" stop-color="#000" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#000" stop-opacity="1"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-scope)"/>
    <text x="15" y="15" font-family="monospace" font-size="4" fill="#A00000" opacity="0.8">TGT_LCK</text>
    <text x="65" y="90" font-family="monospace" font-size="4" fill="#fff" opacity="0.6">DIST: 400M</text>
</svg>
<div class="stamp" style="color: var(--stamp-orange); border-color: var(--stamp-orange); transform: rotate(-10deg); bottom: 10mm; left: 5mm;">ARMED</div>
`;

dossierArt["sheriff"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-2deg); width: 18mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#b3b3a9;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    <line x1="0" y1="30" x2="100" y2="30" stroke="#000" stroke-width="0.2" opacity="0.3" stroke-dasharray="2,4"/>
    <line x1="0" y1="70" x2="100" y2="70" stroke="#000" stroke-width="0.2" opacity="0.3" stroke-dasharray="2,4"/>
    <circle cx="60" cy="65" r="9" fill="#8A0303" opacity="0.8"/>
    <path d="M60,65 Q80,85 70,100" stroke="#8A0303" stroke-width="3.5" fill="none" opacity="0.7"/>
    <circle cx="75" cy="80" r="3" fill="#8A0303" opacity="0.8"/>
    <g transform="rotate(-8 50 50)">
        <polygon points="50,15 59,38 84,38 64,53 71,78 50,63 29,78 36,53 16,38 41,38" fill="#c5a059" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/>
        <circle cx="50" cy="50" r="16" fill="none" stroke="#111" stroke-width="1.5"/>
        <circle cx="50" cy="50" r="13" fill="none" stroke="#111" stroke-width="0.5" stroke-dasharray="1,1"/>
        <text x="50" y="53" font-family="'Oswald', sans-serif" font-size="7" fill="#111" font-weight="bold" text-anchor="middle" letter-spacing="0.5">SHERIFF</text>
        <circle cx="50" cy="22" r="1.5" fill="#111"/>
        <circle cx="50" cy="74" r="1.5" fill="#111"/>
        <circle cx="38" cy="46" r="3.5" fill="#000"/>
        <circle cx="38" cy="46" r="4.5" fill="none" stroke="#111" stroke-width="0.5"/>
        <path d="M38,46 L30,40 M38,46 L35,53 M38,46 L45,43" stroke="#111" stroke-width="1"/>
    </g>
    <radialGradient id="vig-sheriff" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-sheriff)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.8">EV-BDG:01</text>
</svg>
<div class="stamp" style="color: var(--stamp-brass); border-color: var(--stamp-brass); transform: rotate(15deg); bottom: 12mm; right: 2mm;">EXECUTE</div>
`;

dossierArt["alphawolf"] = `
<div class="tape" style="top: -2mm; left: 50%; transform: translateX(-50%) rotate(0deg); width: 25mm; border-bottom: 2px solid #8A0303;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#0a0a0a;">
    <rect width="100" height="100" fill="#0a0a0a"/>
    <circle cx="50" cy="50" r="45" fill="#151515" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>
    
    <!-- Deep Scratch Marks resembling an 'A' for Alpha -->
    <path d="M50,15 L20,90" stroke="#B00000" stroke-width="4" fill="none" stroke-linecap="round" filter="blur(0.5px)"/>
    <path d="M50,15 L80,90" stroke="#B00000" stroke-width="5" fill="none" stroke-linecap="round" filter="blur(0.5px)"/>
    <path d="M30,65 L70,65" stroke="#B00000" stroke-width="3" fill="none" stroke-linecap="round" filter="blur(0.5px)"/>
    
    <path d="M48,15 L22,90" stroke="#ff1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M48,15 L78,90" stroke="#ff1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M32,65 L68,65" stroke="#ff1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/>

    <!-- Glowing Yellow Eyes (Leader trait) -->
    <circle cx="35" cy="40" r="3.5" fill="#ffcc00" filter="blur(1.5px)"/>
    <circle cx="35" cy="40" r="1.5" fill="#fff"/>
    <circle cx="65" cy="40" r="3.5" fill="#ffcc00" filter="blur(1.5px)"/>
    <circle cx="65" cy="40" r="1.5" fill="#fff"/>

    <!-- Fang marks -->
    <circle cx="45" cy="80" r="2" fill="#ff1a1a"/>
    <circle cx="55" cy="80" r="2" fill="#ff1a1a"/>

    <!-- Film overlay & vignette -->
    <radialGradient id="vig-alpha" cx="50%" cy="50%" r="50%">
        <stop offset="70%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.95"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-alpha)"/>
    
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#a0a0a0" opacity="0.6">CLASS: OMEGA/ALPHA</text>
    <text x="5" y="95" font-family="monospace" font-size="4" fill="#ffcc00" opacity="0.7">INFECTION: 100%</text>
</svg>
<div class="stamp" style="color: var(--stamp-gold); border-color: var(--stamp-gold); transform: rotate(-5deg); top: 10mm; left: 5mm; font-size: 16pt;">APEX</div>
`;

dossierArt["guardian"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-3deg); width: 22mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#ccd1d1;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Large Shield Outline -->
    <path d="M50,15 L85,25 L85,55 C85,80 50,95 50,95 C50,95 15,80 15,55 L15,25 Z" fill="none" stroke="#111" stroke-width="2" opacity="0.8"/>
    <path d="M50,22 L78,30 L78,55 C78,75 50,86 50,86 C50,86 22,75 22,55 L22,30 Z" fill="none" stroke="#111" stroke-width="0.5" stroke-dasharray="2,2"/>
    
    <!-- Bullet holes absorbed by the shield -->
    <circle cx="35" cy="45" r="2.5" fill="#111"/>
    <circle cx="35" cy="45" r="4" fill="none" stroke="#111" stroke-width="0.5" stroke-dasharray="1,1"/>
    
    <circle cx="60" cy="70" r="2.5" fill="#111"/>
    <circle cx="60" cy="70" r="4" fill="none" stroke="#111" stroke-width="0.5" stroke-dasharray="1,1"/>
    
    <circle cx="70" cy="40" r="2.5" fill="#111"/>
    <circle cx="70" cy="40" r="4" fill="none" stroke="#111" stroke-width="0.5" stroke-dasharray="1,1"/>

    <!-- Small Blood Spatters (stopped damage) -->
    <circle cx="38" cy="48" r="1.5" fill="#8A0303" opacity="0.8"/>
    <path d="M35,45 Q40,60 38,70" stroke="#8A0303" stroke-width="1" fill="none" opacity="0.6"/>
    
    <radialGradient id="vig-guardian" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.7"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-guardian)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.8">DEF-PROT: ON</text>
</svg>
<div class="stamp" style="color: var(--stamp-blue); border-color: var(--stamp-blue); transform: rotate(8deg); bottom: 10mm; right: 5mm;">SECURED</div>
`;

dossierArt["witch"] = `
<div class="tape" style="transform: translateX(-50%) rotate(2deg); width: 20mm;"></div>
<div class="paperclip" style="transform: rotate(15deg); top: 5mm; right: 5mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d9e0d9;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Erlenmeyer Flask & Chemicals -->
    <path d="M45,20 L55,20 L55,40 L70,80 L30,80 L45,40 Z" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M45,20 L55,20 L55,40 L70,80 L30,80 L45,40 Z" fill="#66bb6a" opacity="0.4"/>
    <path d="M35,66 Q50,60 65,66 L65,78 L35,78 Z" fill="#2e7d32" opacity="0.7"/>
    <circle cx="45" cy="70" r="2" fill="#fff" opacity="0.8"/>
    <circle cx="55" cy="72" r="1.5" fill="#fff" opacity="0.8"/>
    <circle cx="50" cy="65" r="3" fill="#fff" opacity="0.8"/>
    
    <!-- Syringes crossed -->
    <g transform="rotate(45 30 40)">
        <rect x="25" y="30" width="6" height="20" fill="none" stroke="#111" stroke-width="1"/>
        <line x1="28" y1="20" x2="28" y2="30" stroke="#111" stroke-width="1"/>
        <line x1="26" y1="26" x2="30" y2="26" stroke="#111" stroke-width="1"/>
        <!-- Healing fluid -->
        <rect x="25.5" y="35" width="5" height="15" fill="#42a5f5" opacity="0.8"/>
    </g>
    <g transform="rotate(-45 70 40)">
        <rect x="65" y="30" width="6" height="20" fill="none" stroke="#111" stroke-width="1"/>
        <line x1="68" y1="20" x2="68" y2="30" stroke="#111" stroke-width="1"/>
        <line x1="66" y1="26" x2="70" y2="26" stroke="#111" stroke-width="1"/>
        <!-- Poison fluid -->
        <rect x="65.5" y="35" width="5" height="15" fill="#8A0303" opacity="0.8"/>
    </g>
    
    <radialGradient id="vig-witch" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.7"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-witch)"/>
    <text x="5" y="95" font-family="monospace" font-size="4" fill="#111" opacity="0.8">CHEM-BIO LAB</text>
</svg>
<div class="stamp" style="color: var(--stamp-green); border-color: var(--stamp-green); transform: rotate(-10deg); bottom: 10mm; left: 5mm;">BIOHAZARD</div>
`;

dossierArt["wizard"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-4deg); width: 25mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e4dfd9;">
    <!-- Geometric Hexagram Pattern -->
    <path d="M50,15 L80,75 L20,75 Z" fill="none" stroke="#111" stroke-width="0.5" opacity="0.6"/>
    <path d="M50,85 L20,25 L80,25 Z" fill="none" stroke="#111" stroke-width="0.5" opacity="0.6"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="#111" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
    
    <!-- Chalk symbols -->
    <text x="50" y="30" font-family="'Courier Prime', monospace" font-size="6" fill="#111" font-weight="bold" text-anchor="middle" opacity="0.7">∆</text>
    <text x="32" y="65" font-family="'Courier Prime', monospace" font-size="6" fill="#111" font-weight="bold" text-anchor="middle" opacity="0.7">☿</text>
    <text x="68" y="65" font-family="'Courier Prime', monospace" font-size="6" fill="#111" font-weight="bold" text-anchor="middle" opacity="0.7">♀</text>
    
    <!-- Magnifying Glass Focus -->
    <circle cx="50" cy="50" r="15" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <line x1="60" y1="60" x2="75" y2="75" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="13" fill="#fff" opacity="0.1"/>
    
    <!-- Glowing Eye inside -->
    <path d="M40,50 Q50,42 60,50 Q50,58 40,50" fill="none" stroke="#B00000" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="3" fill="#B00000"/>
    
    <radialGradient id="vig-wizard" cx="50%" cy="50%" r="50%">
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-wizard)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.8">RND: 777</text>
</svg>
<div class="stamp" style="color: var(--stamp-purple); border-color: var(--stamp-purple); transform: rotate(12deg); bottom: 10mm; right: 5mm;">OBSERVED</div>
`;

dossierArt["veteran"] = `
<div class="tape" style="transform: translateX(-50%) rotate(3deg); width: 22mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#c1c1b1;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Dog tags -->
    <rect x="40" y="30" width="20" height="40" rx="10" ry="10" fill="none" stroke="#111" stroke-width="2"/>
    <circle cx="50" cy="35" r="2" fill="#111"/>
    <path d="M50,15 L50,33" stroke="#111" stroke-width="1.5" stroke-dasharray="2,1"/>
    
    <!-- Second overlapping dog tag -->
    <g transform="rotate(15 50 50)">
        <rect x="45" y="35" width="20" height="40" rx="10" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <circle cx="55" cy="40" r="2" fill="#1a1a1a"/>
        <path d="M55,20 L55,38" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="2,1"/>
    </g>

    <!-- Three Bullet Holes (Paranoia) -->
    <circle cx="20" cy="80" r="3" fill="#111"/>
    <circle cx="20" cy="80" r="4" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="1,2"/>
    <circle cx="75" cy="70" r="3" fill="#111"/>
    <circle cx="75" cy="70" r="4" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="1,2"/>
    <circle cx="30" cy="20" r="3" fill="#111"/>
    <circle cx="30" cy="20" r="4" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="1,2"/>

    <radialGradient id="vig-vet" cx="50%" cy="50%" r="50%">
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-vet)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.8">KIA-STATUS: NEGATIVE</text>
</svg>
<div class="stamp" style="color: var(--stamp-orange); border-color: var(--stamp-orange); transform: rotate(-5deg); bottom: 10mm; right: 5mm;">NO TRESPASSING</div>
`;

dossierArt["bodyguard"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-1deg); width: 25mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d4d4d4;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Human silhouette shielding another -->
    <path d="M40,90 C40,70 30,50 60,50 C60,50 50,70 60,90 Z" fill="#444" opacity="0.6"/>
    <path d="M25,100 C25,75 40,40 65,40 L70,100 Z" fill="#1a1a1a" opacity="0.9"/>
    
    <circle cx="50" cy="35" r="10" fill="#444" opacity="0.6"/>
    <circle cx="55" cy="28" r="12" fill="#1a1a1a" opacity="0.9"/>

    <!-- Massive Blood spatter on the front shield -->
    <circle cx="35" cy="65" r="6" fill="#8A0303" opacity="0.8"/>
    <circle cx="42" cy="72" r="3" fill="#8A0303" opacity="0.8"/>
    <path d="M35,65 Q30,80 35,95" stroke="#8A0303" stroke-width="3" fill="none" opacity="0.7"/>
    <path d="M35,65 Q45,75 50,90" stroke="#8A0303" stroke-width="2" fill="none" opacity="0.7"/>

    <radialGradient id="vig-bodyguard" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-bodyguard)"/>
    <text x="5" y="95" font-family="monospace" font-size="4" fill="#fff" opacity="0.7">ASSET SECURED</text>
</svg>
<div class="stamp" style="color: var(--stamp-gold); border-color: var(--stamp-gold); transform: rotate(10deg); top: 5mm; left: 5mm;">SACRIFICE</div>
`;

dossierArt["priest"] = `
<div class="tape" style="transform: translateX(-50%) rotate(5deg); width: 18mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#dedede;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Bloody Cross -->
    <rect x="47" y="20" width="6" height="60" fill="#8A0303" opacity="0.9"/>
    <rect x="30" y="35" width="40" height="6" fill="#8A0303" opacity="0.9"/>
    
    <!-- Water / Holy droplet -->
    <path d="M50,45 C45,55 45,65 50,65 C55,65 55,55 50,45 Z" fill="#fff" opacity="0.8"/>
    <path d="M50,45 C45,55 45,65 50,65 C55,65 55,55 50,45 Z" fill="none" stroke="#42a5f5" stroke-width="1.5"/>
    <circle cx="50" cy="60" r="1.5" fill="#42a5f5"/>

    <!-- Subtle prayer text line -->
    <line x1="20" y1="80" x2="80" y2="80" stroke="#111" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.4"/>
    <line x1="20" y1="85" x2="60" y2="85" stroke="#111" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.4"/>

    <radialGradient id="vig-priest" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-priest)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.7">SCT: 316</text>
</svg>
<div class="stamp" style="color: var(--stamp-blue); border-color: var(--stamp-blue); transform: rotate(-8deg); bottom: 12mm; right: 5mm;">PURGED</div>
`;

dossierArt["mayor"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-2deg); width: 25mm;"></div>
<div class="paperclip" style="transform: rotate(-10deg); top: 5mm; left: 5mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e8e5d1;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.2"/>
    
    <!-- Document lines -->
    <line x1="20" y1="30" x2="80" y2="30" stroke="#111" stroke-width="1" opacity="0.7"/>
    <line x1="20" y1="40" x2="80" y2="40" stroke="#111" stroke-width="1" opacity="0.7"/>
    <line x1="20" y1="50" x2="60" y2="50" stroke="#111" stroke-width="1" opacity="0.7"/>
    
    <!-- Fancy Signature -->
    <path d="M40,75 C45,70 50,70 55,75 C60,80 65,70 70,75 C75,80 80,65 85,75" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Large Wax Seal -->
    <circle cx="30" cy="75" r="12" fill="#8A0303" opacity="0.9"/>
    <circle cx="30" cy="75" r="10" fill="none" stroke="#600000" stroke-width="1.5"/>
    <text x="30" y="78" font-family="'Oswald', sans-serif" font-size="7" fill="#e8e5d1" font-weight="bold" text-anchor="middle">M</text>

    <!-- Formal Ribbon -->
    <path d="M25,85 L20,100 L30,95 L40,100 L35,85 Z" fill="#B00000" opacity="0.8"/>

    <radialGradient id="vig-mayor" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-mayor)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.6">DOC: 0X-AA</text>
</svg>
<div class="stamp" style="color: var(--stamp-brass); border-color: var(--stamp-brass); transform: rotate(5deg); top: 15mm; right: 5mm;">AUTHORIZED</div>
`;

dossierArt["villager2"] = `
<div class="tape" style="transform: translateX(-50%) rotate(4deg); width: 18mm;"></div>
<div class="paperclip" style="transform: rotate(20deg); top: 3mm; left: 8mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#dedede;">
    <!-- Different Chalk Outline -->
    <path d="M20,100 C20,70 40,60 50,55 C60,60 80,70 80,100" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <circle cx="50" cy="35" r="9" fill="#1a1a1a" opacity="0.7"/>
    
    <!-- Scratch marks / panicked writing -->
    <line x1="15" y1="20" x2="35" y2="25" stroke="#111" stroke-width="1" opacity="0.6"/>
    <line x1="18" y1="26" x2="40" y2="30" stroke="#111" stroke-width="1" opacity="0.6"/>
    <line x1="20" y1="32" x2="38" y2="35" stroke="#111" stroke-width="1" opacity="0.6"/>

    <!-- Handprint in blood -->
    <g transform="scale(0.5) translate(130, 80)" fill="#8A0303" opacity="0.7">
        <path d="M40,50 C40,40 45,35 50,35 C55,35 60,40 60,50 C60,60 55,70 50,70 C45,70 40,60 40,50 Z"/>
        <path d="M42,38 L35,20 L40,18 L48,35 Z"/>
        <path d="M48,35 L45,15 L50,13 L53,35 Z"/>
        <path d="M53,35 L55,16 L60,15 L58,36 Z"/>
        <path d="M57,38 L65,22 L68,25 L59,42 Z"/>
    </g>

    <radialGradient id="vig-v2" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-v2)"/>
    <text x="80" y="20" font-family="monospace" font-size="6" fill="#111" opacity="0.6">#43</text>
</svg>
<div class="stamp" style="color: var(--stamp-red); border-color: var(--stamp-red); transform: rotate(-8deg); bottom: 15mm; left: 5mm;">CASUALTY</div>
`;

dossierArt["villager3"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-6deg); width: 22mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d2d2d2;">
    <!-- Burned paper edges / vignette effect -->
    <rect width="100" height="100" fill="#000" opacity="0.1"/>
    
    <!-- Eyes peering out -->
    <path d="M30,50 Q40,40 50,50 Q40,60 30,50 Z" fill="#111" stroke="#000" stroke-width="1" opacity="0.8"/>
    <circle cx="40" cy="50" r="3" fill="#fff"/>
    <circle cx="40" cy="50" r="1" fill="#000"/>

    <path d="M60,50 Q70,40 80,50 Q70,60 60,50 Z" fill="#111" stroke="#000" stroke-width="1" opacity="0.8"/>
    <circle cx="70" cy="50" r="3" fill="#fff"/>
    <circle cx="70" cy="50" r="1" fill="#000"/>

    <!-- Polaroid Frame Look -->
    <rect x="15" y="15" width="70" height="70" fill="none" stroke="#111" stroke-width="2" stroke-dasharray="5,2" opacity="0.5"/>

    <!-- Messy red X -->
    <line x1="20" y1="20" x2="80" y2="80" stroke="#8A0303" stroke-width="4" opacity="0.7"/>
    <line x1="80" y1="20" x2="20" y2="80" stroke="#8A0303" stroke-width="4" opacity="0.7"/>

    <radialGradient id="vig-v3" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.9"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-v3)"/>
    <text x="80" y="20" font-family="monospace" font-size="6" fill="#fff" opacity="0.6">#88</text>
</svg>
<div class="stamp" style="color: var(--stamp-purple); border-color: var(--stamp-purple); transform: rotate(18deg); bottom: 20mm; left: 10mm;">DISCARDED</div>
`;

dossierArt["werewolf2"] = `
<div class="tape" style="top: -2mm; left: 20%; transform: rotate(-5deg); width: 12mm;"></div>
<div class="tape" style="top: 80%; left: 80%; transform: rotate(15deg); width: 12mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#050505;">
    <!-- More aggressive claw marks -->
    <path d="M20,10 Q50,50 80,90" stroke="#B00000" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M40,5 Q60,50 90,80" stroke="#B00000" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M5,30 Q30,60 60,95" stroke="#B00000" stroke-width="7" fill="none" stroke-linecap="round"/>
    
    <!-- White core of claws -->
    <path d="M22,12 Q52,52 80,88" stroke="#ffcccc" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M42,7 Q62,52 88,78" stroke="#ffcccc" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M7,32 Q32,62 58,93" stroke="#ffcccc" stroke-width="1.5" fill="none" stroke-linecap="round"/>

    <!-- Single Glowing red eye in bottom left -->
    <circle cx="20" cy="80" r="4" fill="#ff0000" filter="blur(2px)"/>
    <circle cx="20" cy="80" r="1.5" fill="#fff"/>

    <radialGradient id="vig-ww2" cx="50%" cy="50%" r="50%">
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="1"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-ww2)"/>
</svg>
<div class="stamp" style="color: var(--stamp-red); border-color: var(--stamp-red); transform: rotate(-20deg); top: 15mm; right: 5mm; font-size: 14pt;">TORN</div>
`;

dossierArt["lonewolf"] = `
<div class="tape" style="transform: translateX(-50%) rotate(2deg); width: 25mm; border-bottom: 2px dashed #000;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#151515;">
    <!-- Single centered scratch mark straight down -->
    <path d="M50,15 L50,85" stroke="#900000" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50,17 L50,83" stroke="#ffcccc" stroke-width="1.5" fill="none" stroke-linecap="round"/>

    <!-- Lonely moon silhouette -->
    <circle cx="50" cy="50" r="25" fill="none" stroke="#fff" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/>
    
    <!-- One Yellow/Red eye -->
    <circle cx="50" cy="40" r="3.5" fill="#ffcc00" filter="blur(1px)"/>
    <circle cx="50" cy="40" r="1.5" fill="#fff"/>

    <radialGradient id="vig-lw" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.95"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-lw)"/>
    <text x="5" y="95" font-family="monospace" font-size="4" fill="#a0a0a0" opacity="0.5">ISOLATED THREAT</text>
</svg>
<div class="stamp" style="color: var(--stamp-gold); border-color: var(--stamp-gold); transform: rotate(15deg); bottom: 15mm; left: 5mm;">ROGUE</div>
`;

dossierArt["doppelganger"] = `
<div class="tape" style="transform: translateX(-50%) rotate(1deg); width: 15mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d0d0d0;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>

    <!-- Two identical faces mirroring each other -->
    <path d="M48,30 C30,30 20,45 20,60 L48,60 Z" fill="#1a1a1a" opacity="0.8"/>
    <path d="M52,30 C70,30 80,45 80,60 L52,60 Z" fill="#1a1a1a" opacity="0.5"/>
    
    <!-- Question marks -->
    <text x="35" y="50" font-family="'Courier Prime', monospace" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">?</text>
    <text x="65" y="50" font-family="'Courier Prime', monospace" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle" opacity="0.6">?</text>

    <!-- Fingerprint / Identity match lines -->
    <line x1="15" y1="80" x2="85" y2="80" stroke="#111" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="30" y1="75" x2="70" y2="85" stroke="#111" stroke-width="0.5"/>
    
    <radialGradient id="vig-dop" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-dop)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.5">ID: PENDING</text>
</svg>
<div class="stamp" style="color: var(--stamp-purple); border-color: var(--stamp-purple); transform: rotate(-5deg); bottom: 10mm; left: 15mm;">FRAUD</div>
`;

dossierArt["serialkiller"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-4deg); width: 25mm; border-bottom: 2px solid #8A0303;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#c0c0c0;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Tally marks for kills -->
    <line x1="20" y1="20" x2="20" y2="40" stroke="#111" stroke-width="2"/>
    <line x1="25" y1="20" x2="25" y2="40" stroke="#111" stroke-width="2"/>
    <line x1="30" y1="20" x2="30" y2="40" stroke="#111" stroke-width="2"/>
    <line x1="35" y1="20" x2="35" y2="40" stroke="#111" stroke-width="2"/>
    <line x1="15" y1="25" x2="40" y2="35" stroke="#111" stroke-width="2"/>

    <line x1="60" y1="30" x2="60" y2="50" stroke="#111" stroke-width="2"/>
    <line x1="65" y1="30" x2="65" y2="50" stroke="#111" stroke-width="2"/>
    <line x1="70" y1="30" x2="70" y2="50" stroke="#111" stroke-width="2"/>
    <line x1="75" y1="30" x2="75" y2="50" stroke="#111" stroke-width="2"/>
    <line x1="55" y1="45" x2="80" y2="35" stroke="#111" stroke-width="2"/>

    <!-- Bloody Knife outline -->
    <path d="M50,90 L45,60 L50,55 L55,60 Z" fill="#1a1a1a"/>
    <path d="M50,55 L50,15 L52,10 L55,55 Z" fill="#b0b0b0" stroke="#111" stroke-width="1"/>
    <path d="M50,15 L50,35" stroke="#8A0303" stroke-width="3" opacity="0.8"/>
    <circle cx="50" cy="45" r="2" fill="#8A0303"/>

    <!-- Massive blood stains -->
    <circle cx="48" cy="10" r="4" fill="#8A0303" opacity="0.8"/>
    <circle cx="55" cy="20" r="3" fill="#8A0303" opacity="0.8"/>

    <radialGradient id="vig-sk" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-sk)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.7">TARGET: ANY</text>
</svg>
<div class="stamp" style="color: var(--stamp-red); border-color: var(--stamp-red); transform: rotate(8deg); bottom: 15mm; right: 5mm;">LETHAL</div>
`;

dossierArt["idiot"] = `
<div class="tape" style="transform: translateX(-50%) rotate(5deg); width: 20mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#e8e8e8;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Simple crudely drawn face like a stick figure (foolish) -->
    <circle cx="50" cy="40" r="20" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <circle cx="43" cy="35" r="2" fill="#1a1a1a"/>
    <circle cx="57" cy="35" r="2" fill="#1a1a1a"/>
    <!-- Goofy crooked smile -->
    <path d="M40,48 Q50,55 60,45" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    
    <!-- "X" marks over eyes to denote error/stupidity or near execution -->
    <path d="M41,33 L45,37 M45,33 L41,37" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M55,33 L59,37 M59,33 L55,37" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>

    <!-- A stamp that says "VOID" hand written -->
    <text x="50" y="80" font-family="'Courier Prime', monospace" font-size="14" fill="#8A0303" font-weight="bold" text-anchor="middle" transform="rotate(-15 50 80)" opacity="0.6">VOID</text>

    <radialGradient id="vig-idt" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-idt)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.5">INT: LOW</text>
</svg>
<div class="stamp" style="color: var(--stamp-green); border-color: var(--stamp-green); transform: rotate(2deg); bottom: 10mm; right: 5mm;">REJECTED</div>
`;

dossierArt["prince"] = `
<div class="tape" style="transform: translateX(-50%) rotate(-3deg); width: 22mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#d9d0c0;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Royal Crown silhouette -->
    <path d="M25,60 L20,30 L40,45 L50,20 L60,45 L80,30 L75,60 Z" fill="#1a1a1a" opacity="0.8"/>
    <rect x="25" y="65" width="50" height="5" fill="#1a1a1a" opacity="0.8"/>

    <!-- Jewels in Crown -->
    <circle cx="50" cy="55" r="3" fill="#c5a059"/>
    <circle cx="35" cy="55" r="2" fill="#8A0303"/>
    <circle cx="65" cy="55" r="2" fill="#8A0303"/>

    <!-- Formal borders -->
    <rect x="10" y="10" width="80" height="80" fill="none" stroke="#c5a059" stroke-width="1.5" opacity="0.8"/>
    <rect x="12" y="12" width="76" height="76" fill="none" stroke="#c5a059" stroke-width="0.5" opacity="0.6"/>

    <radialGradient id="vig-prc" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-prc)"/>
    <text x="15" y="95" font-family="monospace" font-size="4" fill="#111" opacity="0.5">VIP-SEC</text>
</svg>
<div class="stamp" style="color: var(--stamp-brass); border-color: var(--stamp-brass); transform: rotate(-10deg); bottom: 15mm; right: 8mm;">IMMUNE</div>
`;

dossierArt["littlegirl"] = `
<div class="tape" style="transform: translateX(-50%) rotate(4deg); width: 18mm;"></div>
<svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#cfcfcf;">
    <path d="M0,0 L100,100 M100,0 L0,100" stroke="#000" stroke-width="0.1" opacity="0.3"/>
    
    <!-- Peeking eyes through a cracked door or paper -->
    <rect x="40" y="20" width="5" height="60" fill="#050505"/>
    <rect x="45" y="25" width="6" height="10" fill="#cfcfcf"/> <!-- Hole/crack to peek -->
    
    <!-- One small eye peeking -->
    <path d="M46,28 Q48,26 50,28 Q48,30 46,28" fill="#fff" stroke="#111" stroke-width="0.5"/>
    <circle cx="48" cy="28" r="0.8" fill="#111"/>

    <!-- Creepy child drawing (like a stick figure wolf) -->
    <path d="M60,60 L70,50 L80,60 L80,80 L60,80 Z" fill="none" stroke="#111" stroke-width="0.8" stroke-dasharray="2,1"/>
    <circle cx="65" cy="55" r="1" fill="#8A0303"/>
    <path d="M68,58 L72,58" stroke="#111" stroke-width="0.8"/>

    <!-- Bloody handprint of a small child -->
    <g transform="scale(0.3) translate(60, 200)" fill="#8A0303" opacity="0.8">
        <path d="M40,50 C40,40 45,35 50,35 C55,35 60,40 60,50 C60,60 55,70 50,70 C45,70 40,60 40,50 Z"/>
        <path d="M42,38 L38,25 L40,24 L45,36 Z"/>
        <path d="M48,35 L48,20 L50,19 L52,35 Z"/>
        <path d="M53,35 L55,22 L58,22 L55,36 Z"/>
        <path d="M57,38 L62,28 L64,29 L58,40 Z"/>
    </g>

    <radialGradient id="vig-lg" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="transparent"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.9"/>
    </radialGradient>
    <rect width="100" height="100" fill="url(#vig-lg)"/>
    <text x="5" y="10" font-family="monospace" font-size="4" fill="#111" opacity="0.5">SILENT WITNESS</text>
</svg>
<div class="stamp" style="color: var(--stamp-pink); border-color: var(--stamp-pink); transform: rotate(8deg); top: 10mm; right: 5mm;">FRAGILE</div>
`;

dossierArt["card_back"] = `
<div class="back-tape" style="top: 15mm; transform: rotate(-25deg);"></div>
<div class="back-tape" style="bottom: 15mm; transform: rotate(25deg);"></div>
<div class="back-border">
    <svg viewBox="0 0 100 100" width="40mm" height="40mm" style="z-index: 20;">
        <circle cx="50" cy="50" r="48" fill="#111" stroke="#fff" stroke-width="2"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="50" y1="2" x2="50" y2="98" stroke="#A00000" stroke-width="1.5"/>
        <line x1="2" y1="50" x2="98" y2="50" stroke="#A00000" stroke-width="1.5"/>
        <path d="M30,35 L50,20 L70,35 L65,65 L50,80 L35,65 Z" fill="none" stroke="#fff" stroke-width="2"/>
        <polygon points="40,45 48,45 44,55" fill="#fff"/>
        <polygon points="60,45 52,45 56,55" fill="#fff"/>
        <polygon points="50,60 52,65 48,65" fill="#A00000"/>
        <path id="curve-top" d="M 20,50 A 30,30 0 0,1 80,50" fill="none"/>
        <text font-family="'Courier Prime', monospace" font-size="8" fill="#fff" font-weight="bold" letter-spacing="1">
            <textPath href="#curve-top" startOffset="50%" text-anchor="middle">CONFIDENTIAL</textPath>
        </text>
        <path id="curve-bot" d="M 80,50 A 30,30 0 0,1 20,50" fill="none"/>
        <text font-family="'Courier Prime', monospace" font-size="8" fill="#fff" font-weight="bold" letter-spacing="1">
            <textPath href="#curve-bot" startOffset="50%" text-anchor="middle">PROJECT WW</textPath>
        </text>
    </svg>
    <div style="margin-top: 10mm; text-align: center; font-family: 'Oswald', sans-serif; z-index: 20; background: #111; padding: 2px 5px;">
        <h1 style="margin: 0; font-size: 14pt; letter-spacing: 2px; color: #fff;">DO NOT OPEN</h1>
        <p style="margin: 0; font-family: 'Courier Prime', monospace; font-size: 6pt; color: #888;">MRSETIAWAN. #666</p>
    </div>
</div>
`;
