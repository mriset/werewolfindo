const punksylArt = {
    'WLF-00': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Aggressive Wolf Jaw Stencil -->
                        <path d="M 10 90 L 25 50 L 15 35 L 40 45 L 45 10 L 60 35 L 85 15 L 75 50 L 95 65 L 65 75 L 80 95 L 50 80 Z" fill="var(--c-black)" />
                        <!-- Teeth -->
                        <path d="M 30 80 L 40 60 L 45 70 L 50 50 L 60 65 L 70 80 Z" fill="var(--c-white)" />
                        <!-- Eyes -->
                        <circle cx="35" cy="40" r="4" fill="var(--c-white)" />
                        <circle cx="35" cy="40" r="1.5" fill="var(--accent)" />
                        <circle cx="60" cy="40" r="4" fill="var(--c-white)" />
                        <circle cx="60" cy="40" r="1.5" fill="var(--accent)" />
                        <!-- Blood spray splatters -->
                        <circle cx="20" cy="20" r="2.5" fill="var(--accent)" />
                        <circle cx="25" cy="15" r="1.5" fill="var(--accent)" />
                        <circle cx="80" cy="80" r="3.5" fill="var(--accent)" />
                        <circle cx="85" cy="72" r="1.5" fill="var(--accent)" />
                        <circle cx="70" cy="15" r="2" fill="var(--accent)" />
                    </svg>`,
    'SER-EYE': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Crying Eye Stencil -->
                        <path d="M 5 50 Q 50 10 95 50 Q 50 90 5 50 Z" fill="none" stroke="var(--c-black)" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="50" cy="50" r="18" fill="var(--c-black)" />
                        <!-- Jagged Iris inside -->
                        <polygon points="50,35 60,45 55,65 45,65 40,45" fill="var(--accent)" />
                        <circle cx="50" cy="50" r="4" fill="var(--c-black)" />
                        <!-- Paint Drips (Tears) -->
                        <path d="M 35 70 L 35 90" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="35" cy="95" r="2" fill="var(--accent)" />
                        <path d="M 65 70 L 65 85" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <!-- Crossed Out X marks -->
                        <path d="M 75 15 L 85 25 M 85 15 L 75 25" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <path d="M 15 20 L 25 30 M 25 20 L 15 30" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                    </svg>`,
    'HNT-X9': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Skull Base -->
                        <path d="M 30 25 C 30 5 70 5 70 25 C 70 45 65 55 65 75 L 55 75 L 55 70 L 45 70 L 45 75 L 35 75 C 35 55 30 45 30 25 Z" fill="var(--c-black)" />
                        <!-- Skull Eyes -->
                        <path d="M 35 35 L 45 40 L 40 30 Z" fill="var(--accent)" />
                        <path d="M 65 35 L 55 40 L 60 30 Z" fill="var(--accent)" />
                        <!-- Nose -->
                        <polygon points="50,45 53,52 47,52" fill="var(--accent)" />
                        <!-- Crosshair Target Overlay -->
                        <circle cx="50" cy="50" r="35" fill="none" stroke="var(--c-black)" stroke-width="4" stroke-dasharray="15 10"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5"/>
                        <!-- Target lines -->
                        <line x1="0" y1="50" x2="30" y2="50" stroke="var(--c-black)" stroke-width="4" />
                        <line x1="70" y1="50" x2="100" y2="50" stroke="var(--c-black)" stroke-width="4" />
                        <line x1="50" y1="0" x2="50" y2="20" stroke="var(--c-black)" stroke-width="4" />
                        <line x1="50" y1="80" x2="50" y2="100" stroke="var(--c-black)" stroke-width="4" />
                        <!-- Bullet hole impact -->
                        <circle cx="25" cy="70" r="4" fill="var(--c-black)" />
                        <path d="M 25 70 L 15 65 M 25 70 L 20 80 M 25 70 L 35 75" stroke="var(--c-black)" stroke-width="2" />
                    </svg>`,
    'JST-HAHA': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Grinning jagged mouth -->
                        <path d="M 5 50 Q 50 100 95 50 L 80 65 Q 50 85 20 65 Z" fill="var(--c-black)" />
                        <!-- Teeth grid -->
                        <path d="M 15 58 L 25 50 L 35 62 L 45 52 L 55 64 L 65 52 L 75 62 L 85 55" fill="none" stroke="var(--c-white)" stroke-width="3" stroke-linejoin="miter"/>
                        <!-- X Eyes painted aggressively -->
                        <path d="M 20 15 L 45 40 M 45 15 L 20 40" stroke="var(--c-black)" stroke-width="8" stroke-linecap="square"/>
                        <path d="M 55 10 L 85 45 M 85 10 L 55 45" stroke="var(--c-black)" stroke-width="9" stroke-linecap="square"/>
                        <!-- HAHA text stamped in background -->
                        <text x="5" y="30" fill="none" stroke="var(--c-magenta)" stroke-width="1.5" font-family="Anton" font-size="20" transform="rotate(-15)">HA!</text>
                        <text x="65" y="85" fill="none" stroke="var(--c-magenta)" stroke-width="1.5" font-family="Anton" font-size="22" transform="rotate(10)">HA!</text>
                        <text x="10" y="80" fill="var(--c-magenta)" font-family="Anton" font-size="14" transform="rotate(-25)">HA!</text>
                    </svg>`,
    'GRD-DEF': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Street Sign / Barrier Shield Base -->
                        <polygon points="15,10 85,10 90,55 50,95 10,55" fill="var(--c-black)" />
                        <polygon points="25,20 75,20 78,50 50,80 22,50" fill="var(--c-white)" />
                        <!-- Anarchy / Protection Spray Paint Symbol -->
                        <circle cx="50" cy="45" r="18" fill="none" stroke="var(--accent)" stroke-width="5" />
                        <path d="M 50 20 L 50 70 M 35 55 L 65 55 M 38 32 L 62 58 M 62 32 L 38 58" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
                        <!-- Rivets / Screws -->
                        <circle cx="22" cy="16" r="2" fill="var(--c-white)" />
                        <circle cx="78" cy="16" r="2" fill="var(--c-white)" />
                        <circle cx="50" cy="85" r="2" fill="var(--c-white)" />
                    </svg>`,
    'MOD-000': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Gavel / Judge Hammer -->
                        <rect x="10" y="42" width="60" height="16" rx="2" fill="var(--c-black)" transform="rotate(-35 40 50)"/>
                        <rect x="8" y="20" width="28" height="18" rx="3" fill="var(--c-black)" transform="rotate(-35 22 29)"/>
                        <!-- Handle grip lines -->
                        <line x1="22" y1="68" x2="55" y2="35" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/>
                        <!-- Authority Star badge -->
                        <polygon points="82,10 86,22 98,22 88,30 92,42 82,34 72,42 76,30 66,22 78,22" fill="var(--accent)"/>
                        <circle cx="82" cy="27" r="5" fill="var(--c-black)"/>
                        <!-- Impact shatter lines bottom-left -->
                        <path d="M 5 90 L 20 75 M 5 75 L 18 85 M 15 95 L 25 80" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
                        <!-- SILENCE stamp -->
                        <text x="5" y="98" fill="var(--accent)" font-family="Anton" font-size="11" transform="rotate(-8 5 98)">SILENCE!</text>
                    </svg>`,
    'ALF-REX': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Wolf Crown silhouette -->
                        <path d="M 20 70 L 15 30 L 35 50 L 50 10 L 65 50 L 85 30 L 80 70 Z" fill="var(--c-black)"/>
                        <!-- Crown spikes -->
                        <polygon points="20,70 28,55 36,70" fill="var(--accent)"/>
                        <polygon points="44,70 50,52 56,70" fill="var(--accent)"/>
                        <polygon points="64,70 72,55 80,70" fill="var(--accent)"/>
                        <!-- Wolf eyes glowing -->
                        <circle cx="37" cy="42" r="5" fill="var(--c-purple)"/>
                        <circle cx="37" cy="42" r="2" fill="var(--c-yellow)"/>
                        <circle cx="63" cy="42" r="5" fill="var(--c-purple)"/>
                        <circle cx="63" cy="42" r="2" fill="var(--c-yellow)"/>
                        <!-- Claw slashes -->
                        <path d="M 5 80 L 18 90 M 10 75 L 20 88 M 2 87 L 15 95" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <!-- Alpha symbol -->
                        <text x="38" y="98" fill="var(--accent)" font-family="Anton" font-size="18" opacity="0.8">α</text>
                    </svg>`,
    'CPD-LUV': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Cupid Bow punk-style -->
                        <path d="M 15 80 Q 50 20 85 80" fill="none" stroke="var(--c-black)" stroke-width="7" stroke-linecap="round"/>
                        <!-- Bowstring (jagged) -->
                        <path d="M 15 80 L 35 50 L 50 65 L 65 45 L 85 80" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <!-- Arrow -->
                        <line x1="20" y1="25" x2="78" y2="70" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <!-- Arrowhead -->
                        <polygon points="78,70 65,62 72,55" fill="var(--accent)"/>
                        <!-- Arrow tail feathers -->
                        <path d="M 20 25 L 10 18 M 20 25 L 14 32" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <!-- Broken heart spray-painted -->
                        <path d="M 42 42 C 42 36 34 34 34 40 C 34 46 42 52 50 58 C 58 52 66 46 66 40 C 66 34 58 36 58 42 C 56 38 44 38 42 42 Z" fill="var(--accent)" opacity="0.85"/>
                        <line x1="50" y1="36" x2="50" y2="58" stroke="var(--c-black)" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>`,
    'WTC-HEX': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Cauldron silhouette -->
                        <path d="M 20 55 Q 15 85 50 90 Q 85 85 80 55 Z" fill="var(--c-black)"/>
                        <ellipse cx="50" cy="55" rx="30" ry="10" fill="var(--c-black)"/>
                        <ellipse cx="50" cy="55" rx="28" ry="8" fill="#001a00"/>
                        <!-- Bubbles from potion -->
                        <circle cx="38" cy="48" r="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <circle cx="55" cy="42" r="6" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <circle cx="65" cy="50" r="3" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <!-- Toxic drip down sides -->
                        <path d="M 22 68 L 18 82 L 22 82" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" fill="none"/>
                        <path d="M 78 70 L 82 85" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <!-- Skull and crossbones above cauldron -->
                        <circle cx="50" cy="25" r="10" fill="var(--c-black)"/>
                        <circle cx="45" cy="22" r="2.5" fill="var(--accent)"/>
                        <circle cx="55" cy="22" r="2.5" fill="var(--accent)"/>
                        <path d="M 40 35 L 48 28 M 60 35 L 52 28" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <!-- WARNING stamp -->
                        <text x="5" y="14" fill="var(--accent)" font-family="Anton" font-size="8" transform="rotate(6 5 14)">TOXIC</text>
                    </svg>`,
    'WZD-ARC': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Magic Staff / Wand -->
                        <line x1="50" y1="95" x2="50" y2="20" stroke="var(--c-black)" stroke-width="6" stroke-linecap="round"/>
                        <!-- Crystal orb top -->
                        <circle cx="50" cy="15" r="12" fill="var(--c-black)"/>
                        <circle cx="50" cy="15" r="9" fill="var(--accent)"/>
                        <circle cx="46" cy="11" r="3" fill="var(--c-white)" opacity="0.6"/>
                        <!-- Magic circuit lines radiating -->
                        <path d="M 50 15 L 15 30 M 50 15 L 85 30 M 50 15 L 20 60 M 50 15 L 80 60" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8"/>
                        <!-- Hex symbols -->
                        <polygon points="25,45 30,37 40,37 45,45 40,53 30,53" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <polygon points="55,45 60,37 70,37 75,45 70,53 60,53" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <!-- Binary code ambient -->
                        <text x="5" y="85" fill="var(--accent)" font-family="Space Mono" font-size="7" opacity="0.5">01001010</text>
                        <text x="5" y="95" fill="var(--accent)" font-family="Space Mono" font-size="7" opacity="0.4">10110100</text>
                    </svg>`,
    'VET-WAR': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Dog tags -->
                        <rect x="34" y="8" width="32" height="22" rx="4" fill="var(--c-black)"/>
                        <rect x="37" y="11" width="26" height="16" rx="2" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
                        <text x="50" y="20" fill="var(--accent)" font-family="Space Mono" font-size="5" text-anchor="middle">VET</text>
                        <text x="50" y="27" fill="var(--accent)" font-family="Space Mono" font-size="4" text-anchor="middle">B-NEG</text>
                        <!-- Chain -->
                        <path d="M 50 30 Q 50 42 50 50" stroke="var(--c-black)" stroke-width="3" fill="none" stroke-dasharray="4 2"/>
                        <!-- Rifle / Gun silhouette -->
                        <path d="M 10 65 L 75 55 L 80 58 L 90 55 L 88 60 L 80 63 L 75 60 L 15 70 Z" fill="var(--c-black)"/>
                        <!-- Barrel -->
                        <rect x="75" y="56" width="20" height="4" rx="1" fill="var(--c-black)"/>
                        <!-- Trigger guard -->
                        <path d="M 35 65 Q 30 75 40 72" fill="none" stroke="var(--c-black)" stroke-width="3" stroke-linecap="round"/>
                        <!-- PTSD crack marks -->
                        <path d="M 5 80 L 20 90 M 10 88 L 22 78 M 18 95 L 28 82" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
                        <!-- Stars/Rank -->
                        <text x="68" y="95" fill="var(--accent)" font-family="Anton" font-size="14">★★★</text>
                    </svg>`,
    'BGD-IRON': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Bullet-riddled shield front -->
                        <polygon points="50,5 90,20 90,60 50,95 10,60 10,20" fill="var(--c-black)"/>
                        <polygon points="50,15 80,27 80,57 50,82 20,57 20,27" fill="#607d8b"/>
                        <!-- Cross emblem on shield -->
                        <rect x="44" y="30" width="12" height="35" rx="2" fill="var(--accent)"/>
                        <rect x="30" y="44" width="40" height="10" rx="2" fill="var(--accent)"/>
                        <!-- Bullet holes punched in shield -->
                        <circle cx="28" cy="35" r="3.5" fill="var(--c-black)"/>
                        <path d="M 28 35 L 22 30 M 28 35 L 24 40 M 28 35 L 34 32" stroke="#263238" stroke-width="1.5"/>
                        <circle cx="72" cy="65" r="3" fill="var(--c-black)"/>
                        <path d="M 72 65 L 66 60 M 72 65 L 68 70 M 72 65 L 78 62" stroke="#263238" stroke-width="1.5"/>
                        <!-- HELD THE LINE graffiti text -->
                        <text x="50" y="98" fill="var(--accent)" font-family="Anton" font-size="9" text-anchor="middle" opacity="0.9">HELD THE LINE</text>
                    </svg>`,
    'PRS-HOLY': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Gothic Cross -->
                        <rect x="43" y="5" width="14" height="65" rx="3" fill="var(--c-black)"/>
                        <rect x="20" y="22" width="60" height="14" rx="3" fill="var(--c-black)"/>
                        <!-- Golden glow halo around cross -->
                        <ellipse cx="50" cy="38" rx="28" ry="28" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 3" opacity="0.7"/>
                        <!-- Rosary beads hanging -->
                        <circle cx="50" cy="72" r="3.5" fill="var(--c-black)"/>
                        <circle cx="50" cy="85" r="3" fill="var(--c-black)"/>
                        <circle cx="50" cy="96" r="2.5" fill="var(--c-black)"/>
                        <line x1="50" y1="70" x2="50" y2="98" stroke="var(--c-black)" stroke-width="1.5"/>
                        <!-- Flame candles flanking -->
                        <path d="M 18 75 Q 22 60 20 50 Q 18 60 16 75 Z" fill="var(--accent)" opacity="0.9"/>
                        <rect x="17" y="75" width="6" height="18" rx="1" fill="#8b6914"/>
                        <path d="M 82 75 Q 86 60 84 50 Q 82 60 80 75 Z" fill="var(--accent)" opacity="0.9"/>
                        <rect x="81" y="75" width="6" height="18" rx="1" fill="#8b6914"/>
                        <!-- AMEN stamp -->
                        <text x="50" y="15" fill="var(--accent)" font-family="Anton" font-size="10" text-anchor="middle" opacity="0.6">AMEN</text>
                    </svg>`,
    'MYR-VOTE': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Mayor sash / ribbon diagonal -->
                        <path d="M 0 30 L 100 70" stroke="var(--c-black)" stroke-width="18"/>
                        <path d="M 0 30 L 100 70" stroke="var(--accent)" stroke-width="12" stroke-dasharray="20 8"/>
                        <!-- MAYOR badge round -->
                        <circle cx="50" cy="50" r="22" fill="var(--c-black)"/>
                        <circle cx="50" cy="50" r="18" fill="#8b0000"/>
                        <circle cx="50" cy="50" r="14" fill="none" stroke="var(--accent)" stroke-width="2"/>
                        <!-- Star in badge center -->
                        <polygon points="50,38 53,47 63,47 55,53 58,63 50,57 42,63 45,53 37,47 47,47" fill="var(--accent)"/>
                        <!-- Ballot papers scattered -->
                        <rect x="8" y="8" width="18" height="22" rx="1" fill="var(--c-white)" opacity="0.9" transform="rotate(-15 8 8)"/>
                        <line x1="11" y1="14" x2="23" y2="14" stroke="var(--c-black)" stroke-width="1.5" transform="rotate(-15 8 8)"/>
                        <line x1="11" y1="18" x2="23" y2="18" stroke="var(--c-black)" stroke-width="1.5" transform="rotate(-15 8 8)"/>
                        <rect x="74" y="72" width="16" height="20" rx="1" fill="var(--c-white)" opacity="0.9" transform="rotate(12 74 72)"/>
                        <line x1="77" y1="77" x2="86" y2="77" stroke="var(--c-black)" stroke-width="1.5" transform="rotate(12 74 72)"/>
                        <line x1="77" y1="81" x2="86" y2="81" stroke="var(--c-black)" stroke-width="1.5" transform="rotate(12 74 72)"/>
                    </svg>`,
    'SHR-BANG': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Sheriff star badge large -->
                        <polygon points="50,5 57,28 80,28 62,42 69,65 50,51 31,65 38,42 20,28 43,28" fill="var(--c-black)"/>
                        <polygon points="50,13 56,31 76,31 61,42 67,60 50,49 33,60 39,42 24,31 44,31" fill="var(--accent)"/>
                        <circle cx="50" cy="40" r="8" fill="var(--c-black)"/>
                        <!-- Revolver gun bottom -->
                        <path d="M 15 82 L 65 72 L 68 76 L 78 73 L 76 80 L 65 78 L 62 80 L 20 88 Z" fill="var(--c-black)"/>
                        <rect x="65" y="73" width="22" height="5" rx="1" fill="var(--c-black)"/>
                        <!-- Cylinder of revolver -->
                        <circle cx="55" cy="79" r="7" fill="#b8860b"/>
                        <circle cx="55" cy="79" r="5" fill="var(--c-black)"/>
                        <circle cx="55" cy="75" r="1.5" fill="var(--accent)"/>
                        <circle cx="59" cy="77" r="1.5" fill="var(--accent)"/>
                        <circle cx="59" cy="82" r="1.5" fill="var(--accent)"/>
                        <circle cx="55" cy="84" r="1.5" fill="var(--accent)"/>
                        <circle cx="51" cy="82" r="1.5" fill="var(--accent)"/>
                        <circle cx="51" cy="77" r="1.5" fill="var(--accent)"/>
                    </svg>`,
    'VLG-001': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Megaphone / protest horn -->
                        <path d="M 8 38 L 8 62 L 22 62 L 50 80 L 50 20 L 22 38 Z" fill="var(--c-black)"/>
                        <rect x="22" y="42" width="8" height="16" rx="1" fill="var(--c-black)"/>
                        <!-- Sound waves -->
                        <path d="M 55 35 Q 70 50 55 65" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
                        <path d="M 62 25 Q 85 50 62 75" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <path d="M 70 15 Q 98 50 70 85" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
                        <!-- Protest sign on stick -->
                        <line x1="30" y1="62" x2="30" y2="95" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <rect x="14" y="82" width="32" height="14" rx="1" fill="var(--c-black)"/>
                        <text x="30" y="93" fill="var(--accent)" font-family="Anton" font-size="8" text-anchor="middle">VOTE!</text>
                        <!-- Ink splatter top right -->
                        <circle cx="82" cy="18" r="4" fill="var(--accent)" opacity="0.7"/>
                        <circle cx="90" cy="12" r="2" fill="var(--accent)" opacity="0.5"/>
                        <circle cx="76" cy="10" r="2.5" fill="var(--accent)" opacity="0.6"/>
                    </svg>`,
    'VLG-002': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Suspicious eye looking sideways -->
                        <path d="M 5 50 Q 50 15 95 50 Q 50 85 5 50 Z" fill="none" stroke="var(--c-black)" stroke-width="5" stroke-linecap="round"/>
                        <circle cx="50" cy="50" r="16" fill="var(--c-black)"/>
                        <circle cx="56" cy="47" r="8" fill="var(--accent)"/>
                        <circle cx="58" cy="46" r="4" fill="var(--c-black)"/>
                        <circle cx="60" cy="44" r="1.5" fill="var(--c-white)"/>
                        <!-- Sweat drops of anxiety -->
                        <path d="M 18 28 Q 15 18 20 14" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="20" cy="13" r="2" fill="var(--accent)"/>
                        <path d="M 28 20 Q 27 12 31 8" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
                        <circle cx="31" cy="7" r="1.5" fill="var(--accent)"/>
                        <!-- SUSPECT labels -->
                        <text x="5" y="80" fill="var(--accent)" font-family="Anton" font-size="9" transform="rotate(-10 5 80)">SUSPECT?</text>
                        <text x="50" y="96" fill="var(--accent)" font-family="Space Mono" font-size="6" text-anchor="middle" opacity="0.7">everyone is lying</text>
                    </svg>`,
    'VLG-003': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Molotov cocktail / torch (provocateur) -->
                        <path d="M 38 55 L 42 95 L 58 95 L 62 55 Z" fill="var(--c-black)"/>
                        <ellipse cx="50" cy="55" rx="13" ry="5" fill="var(--c-black)"/>
                        <!-- Rag / fuse -->
                        <path d="M 46 55 Q 40 45 50 30" fill="none" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <!-- Flame at top -->
                        <path d="M 50 30 Q 55 15 50 8 Q 45 15 48 22 Q 43 12 44 5 Q 38 15 40 25 Q 52 10 50 30 Z" fill="var(--accent)"/>
                        <path d="M 50 30 Q 53 20 50 14 Q 47 20 50 30 Z" fill="var(--c-yellow)"/>
                        <!-- Fire sparks -->
                        <circle cx="38" cy="20" r="2" fill="var(--accent)" opacity="0.8"/>
                        <circle cx="62" cy="15" r="2.5" fill="var(--accent)" opacity="0.7"/>
                        <circle cx="30" cy="12" r="1.5" fill="var(--accent)" opacity="0.5"/>
                        <circle cx="68" cy="25" r="1.5" fill="var(--accent)" opacity="0.6"/>
                        <!-- BURN label -->
                        <text x="50" y="11" fill="var(--accent)" font-family="Anton" font-size="8" text-anchor="middle" opacity="0" visibility="hidden">BURN</text>
                        <!-- Cracks on bottle -->
                        <path d="M 44 70 L 48 65 M 52 80 L 56 75" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
                        <!-- Ground shadow -->
                        <ellipse cx="50" cy="95" rx="12" ry="3" fill="#bf360c" opacity="0.4"/>
                    </svg>`,
    'WLF-02': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Full moon backdrop -->
                        <circle cx="50" cy="38" r="32" fill="none" stroke="var(--accent)" stroke-width="3" opacity="0.5"/>
                        <circle cx="50" cy="38" r="26" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
                        <!-- Howling wolf silhouette (different pose from WLF-00 — sitting/howling) -->
                        <!-- Body -->
                        <ellipse cx="50" cy="78" rx="18" ry="14" fill="var(--c-black)"/>
                        <!-- Neck & head tilted up howling -->
                        <path d="M 42 68 Q 38 50 42 35 Q 50 20 55 30 Q 58 38 52 48 L 50 68 Z" fill="var(--c-black)"/>
                        <!-- Snout open howl -->
                        <path d="M 42 35 Q 35 28 30 18 Q 42 22 50 20" fill="var(--c-black)"/>
                        <!-- Ears -->
                        <polygon points="42,35 38,20 48,30" fill="var(--c-black)"/>
                        <!-- Eye glow -->
                        <circle cx="46" cy="38" r="3" fill="var(--accent)"/>
                        <circle cx="46" cy="38" r="1.5" fill="var(--c-black)"/>
                        <!-- Tail curled -->
                        <path d="M 62 80 Q 80 70 78 55 Q 76 48 68 52" fill="none" stroke="var(--c-black)" stroke-width="7" stroke-linecap="round"/>
                        <!-- Blood drip from mouth -->
                        <path d="M 36 30 Q 34 38 36 44" stroke="var(--accent)" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <circle cx="36" cy="46" r="2" fill="var(--accent)"/>
                    </svg>`,
    'LWF-SOL': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Lone wolf walking away into darkness -->
                        <!-- Ground line -->
                        <line x1="0" y1="82" x2="100" y2="82" stroke="#333" stroke-width="2"/>
                        <!-- Wolf silhouette walking (side view) -->
                        <!-- Body -->
                        <ellipse cx="52" cy="68" rx="20" ry="10" fill="#555"/>
                        <!-- Head -->
                        <circle cx="72" cy="60" r="10" fill="#555"/>
                        <!-- Snout -->
                        <path d="M 80 58 L 90 55 L 88 60 Z" fill="#555"/>
                        <!-- Ear -->
                        <polygon points="68,52 72,42 76,52" fill="#555"/>
                        <!-- Tail up -->
                        <path d="M 32 65 Q 20 50 28 40" fill="none" stroke="#555" stroke-width="6" stroke-linecap="round"/>
                        <!-- Legs walking -->
                        <line x1="58" y1="78" x2="54" y2="82" stroke="#555" stroke-width="5" stroke-linecap="round"/>
                        <line x1="64" y1="78" x2="70" y2="82" stroke="#555" stroke-width="5" stroke-linecap="round"/>
                        <line x1="44" y1="78" x2="38" y2="82" stroke="#555" stroke-width="5" stroke-linecap="round"/>
                        <line x1="50" y1="78" x2="48" y2="82" stroke="#555" stroke-width="5" stroke-linecap="round"/>
                        <!-- Moon top left -->
                        <circle cx="18" cy="18" r="14" fill="#aaa"/>
                        <circle cx="24" cy="13" r="10" fill="var(--c-white)"/>
                        <!-- Stars scattered -->
                        <circle cx="55" cy="12" r="1.5" fill="#aaa"/>
                        <circle cx="70" cy="20" r="1" fill="#aaa"/>
                        <circle cx="85" cy="10" r="2" fill="#aaa"/>
                        <circle cx="40" cy="25" r="1" fill="#aaa"/>
                        <circle cx="92" cy="35" r="1.5" fill="#aaa"/>
                        <!-- OUTCAST stamp -->
                        <text x="50" y="97" fill="#555" font-family="Anton" font-size="8" text-anchor="middle" letter-spacing="2">OUTCAST</text>
                    </svg>`,
    'DPG-COPY': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Mirror / reflection split -->
                        <!-- Left silhouette (original) -->
                        <ellipse cx="28" cy="30" rx="10" ry="12" fill="var(--c-black)"/>
                        <path d="M 18 42 Q 18 70 28 72 Q 38 70 38 42 Z" fill="var(--c-black)"/>
                        <!-- Right silhouette (copy — purple tinted) -->
                        <ellipse cx="72" cy="30" rx="10" ry="12" fill="var(--accent)" opacity="0.85"/>
                        <path d="M 62 42 Q 62 70 72 72 Q 82 70 82 42 Z" fill="var(--accent)" opacity="0.85"/>
                        <!-- Mirror crack line down the middle -->
                        <path d="M 50 0 L 48 20 L 52 35 L 47 55 L 53 70 L 50 100" stroke="var(--c-white)" stroke-width="2" stroke-linecap="round"/>
                        <!-- Shard fragments -->
                        <polygon points="50,18 44,28 50,22" fill="var(--c-white)" opacity="0.5"/>
                        <polygon points="50,45 56,52 50,48" fill="var(--c-white)" opacity="0.4"/>
                        <!-- Mirror frame top -->
                        <path d="M 10 5 L 90 5 L 90 10 L 10 10 Z" fill="var(--c-black)"/>
                        <!-- Glitch scan lines on copy side -->
                        <line x1="62" y1="35" x2="82" y2="35" stroke="var(--c-white)" stroke-width="1" opacity="0.3"/>
                        <line x1="62" y1="42" x2="82" y2="42" stroke="var(--c-white)" stroke-width="1" opacity="0.3"/>
                        <line x1="62" y1="49" x2="82" y2="49" stroke="var(--c-white)" stroke-width="1" opacity="0.3"/>
                        <!-- COPY text glitched -->
                        <text x="50" y="92" fill="var(--accent)" font-family="Anton" font-size="12" text-anchor="middle">C0PY</text>
                        <text x="52" y="92" fill="var(--c-white)" font-family="Anton" font-size="12" text-anchor="middle" opacity="0.25">C0PY</text>
                    </svg>`,
    'SKL-KILL': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Dripping bloody knife -->
                        <!-- Blade -->
                        <path d="M 38 5 L 62 5 L 68 70 L 50 75 L 32 70 Z" fill="var(--c-black)"/>
                        <!-- Blood on blade -->
                        <path d="M 48 20 L 50 75 L 52 20 Z" fill="var(--accent)" opacity="0.6"/>
                        <!-- Knife guard / cross piece -->
                        <rect x="28" y="68" width="44" height="8" rx="2" fill="#3d0000"/>
                        <!-- Handle -->
                        <rect x="35" y="76" width="30" height="22" rx="3" fill="#1a0000"/>
                        <!-- Handle wrap lines -->
                        <line x1="35" y1="82" x2="65" y2="82" stroke="var(--accent)" stroke-width="1.5" opacity="0.6"/>
                        <line x1="35" y1="88" x2="65" y2="88" stroke="var(--accent)" stroke-width="1.5" opacity="0.6"/>
                        <line x1="35" y1="94" x2="65" y2="94" stroke="var(--accent)" stroke-width="1.5" opacity="0.6"/>
                        <!-- Blood drips falling -->
                        <path d="M 44 75 Q 42 85 44 92" stroke="var(--accent)" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <circle cx="44" cy="94" r="3" fill="var(--accent)"/>
                        <path d="M 55 75 Q 57 83 55 88" stroke="var(--accent)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        <circle cx="55" cy="90" r="2" fill="var(--accent)"/>
                        <!-- Blood splatter top -->
                        <circle cx="20" cy="15" r="4" fill="var(--accent)" opacity="0.8"/>
                        <circle cx="28" cy="8" r="2.5" fill="var(--accent)" opacity="0.6"/>
                        <circle cx="80" cy="20" r="3" fill="var(--accent)" opacity="0.7"/>
                        <circle cx="75" cy="10" r="2" fill="var(--accent)" opacity="0.5"/>
                    </svg>`,
    'IDT-FOOL': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Jester / Fool hat -->
                        <path d="M 20 55 Q 18 30 35 20 Q 28 5 20 8 Q 35 15 38 28 Q 50 10 62 28 Q 65 15 80 8 Q 72 5 65 20 Q 82 30 80 55 Z" fill="var(--c-black)"/>
                        <!-- Hat bells at tips -->
                        <circle cx="20" cy="8" r="5" fill="var(--accent)"/>
                        <circle cx="65" cy="20" r="5" fill="var(--accent)"/>
                        <circle cx="50" cy="10" r="5" fill="var(--accent)"/>
                        <!-- Face with big dumb grin -->
                        <ellipse cx="50" cy="68" rx="22" ry="20" fill="var(--c-white)"/>
                        <!-- Eyes - one big spiral, one X -->
                        <circle cx="41" cy="63" r="5" fill="var(--c-black)"/>
                        <circle cx="41" cy="63" r="3" fill="var(--c-white)"/>
                        <circle cx="41" cy="63" r="1.5" fill="var(--c-black)"/>
                        <path d="M 54 60 L 62 68 M 62 60 L 54 68" stroke="var(--c-black)" stroke-width="3" stroke-linecap="round"/>
                        <!-- Big dopey smile -->
                        <path d="M 35 73 Q 50 88 65 73" fill="var(--accent)" stroke="var(--c-black)" stroke-width="2"/>
                        <!-- Teeth -->
                        <rect x="41" y="73" width="6" height="7" fill="var(--c-white)"/>
                        <rect x="49" y="73" width="6" height="7" fill="var(--c-white)"/>
                        <!-- Freckles -->
                        <circle cx="38" cy="72" r="1.5" fill="#b8860b" opacity="0.7"/>
                        <circle cx="62" cy="72" r="1.5" fill="#b8860b" opacity="0.7"/>
                    </svg>`,
    'PRC-CROWN': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Royal Crown large -->
                        <path d="M 10 65 L 10 40 L 25 55 L 50 20 L 75 55 L 90 40 L 90 65 Z" fill="var(--c-black)"/>
                        <!-- Crown top spikes filled accent -->
                        <circle cx="10" cy="40" r="5" fill="var(--accent)"/>
                        <circle cx="50" cy="20" r="7" fill="var(--accent)"/>
                        <circle cx="90" cy="40" r="5" fill="var(--accent)"/>
                        <!-- Crown band -->
                        <rect x="10" y="60" width="80" height="12" rx="2" fill="var(--accent)"/>
                        <!-- Gems on band -->
                        <polygon points="28,60 32,52 36,60" fill="var(--c-black)"/>
                        <circle cx="50" cy="56" r="5" fill="var(--c-black)"/>
                        <polygon points="64,60 68,52 72,60" fill="var(--c-black)"/>
                        <!-- Sceptre below crown -->
                        <line x1="50" y1="72" x2="50" y2="98" stroke="var(--c-black)" stroke-width="5" stroke-linecap="round"/>
                        <circle cx="50" cy="98" r="4" fill="var(--accent)"/>
                        <!-- Punk chains hanging from crown -->
                        <path d="M 18 65 Q 15 78 18 85" stroke="var(--c-black)" stroke-width="2" fill="none" stroke-dasharray="3 2"/>
                        <path d="M 82 65 Q 85 78 82 85" stroke="var(--c-black)" stroke-width="2" fill="none" stroke-dasharray="3 2"/>
                        <!-- VETO stamp diagonal -->
                        <text x="15" y="98" fill="var(--accent)" font-family="Anton" font-size="9" transform="rotate(-6 15 98)" opacity="0.7">VETO!</text>
                    </svg>`,
    'LGR-SPY': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Silhouette of small girl peeking -->
                        <!-- Body crouched small -->
                        <ellipse cx="50" cy="82" rx="16" ry="10" fill="var(--c-black)"/>
                        <!-- Head small, peeking up -->
                        <circle cx="50" cy="62" r="13" fill="var(--c-black)"/>
                        <!-- Pigtails -->
                        <path d="M 40 56 Q 30 48 28 40 Q 32 48 38 54" fill="none" stroke="var(--c-black)" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="27" cy="38" r="4" fill="var(--c-black)"/>
                        <path d="M 60 56 Q 70 48 72 40 Q 68 48 62 54" fill="none" stroke="var(--c-black)" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="73" cy="38" r="4" fill="var(--c-black)"/>
                        <!-- Eyes barely open — peeking slits glowing -->
                        <path d="M 42 61 Q 50 58 58 61" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                        <!-- One eye slightly open -->
                        <ellipse cx="50" cy="62" rx="5" ry="2" fill="var(--accent)" opacity="0.9"/>
                        <circle cx="50" cy="62" r="1.5" fill="var(--c-black)"/>
                        <!-- Darkness frame — peeking from behind wall -->
                        <rect x="0" y="0" width="15" height="100" fill="var(--c-black)" opacity="0.7"/>
                        <rect x="85" y="0" width="15" height="100" fill="var(--c-black)" opacity="0.7"/>
                        <!-- Small hands gripping edge -->
                        <path d="M 14 75 Q 20 72 22 78" fill="none" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <path d="M 86 75 Q 80 72 78 78" fill="none" stroke="var(--c-black)" stroke-width="4" stroke-linecap="round"/>
                        <!-- SHHH whisper stamp -->
                        <text x="50" y="98" fill="var(--accent)" font-family="Anton" font-size="10" text-anchor="middle" opacity="0.85">shhh...</text>
                    </svg>`,
    'card_back': `<svg viewBox="0 0 100 100" width="100%" height="100%">

                        <!-- Massive dripping question mark mixed with a skull -->
                        <path d="M 30 30 C 30 5 70 5 70 30 C 70 50 50 50 50 65" fill="none" stroke="var(--accent)" stroke-width="12" stroke-linecap="square"/>
                        <!-- The dot is a distorted skull -->
                        <path d="M 40 85 C 40 75 60 75 60 85 L 55 95 L 45 95 Z" fill="var(--accent)" />
                        <circle cx="46" cy="85" r="2" fill="var(--c-black)" />
                        <circle cx="54" cy="85" r="2" fill="var(--c-black)" />
                        
                        <!-- Extra abstract ink splatters -->
                        <circle cx="20" cy="20" r="3.5" fill="var(--c-black)" />
                        <circle cx="25" cy="28" r="1.5" fill="var(--c-black)" />
                        <circle cx="85" cy="50" r="4.5" fill="var(--accent)" />
                        <path d="M 85 50 L 82 65 M 85 50 L 88 60" stroke="var(--accent)" stroke-width="2" />
                        <!-- Caution tape lines -->
                        <line x1="-10" y1="40" x2="30" y2="40" stroke="var(--c-black)" stroke-width="3" stroke-dasharray="8 4" transform="rotate(-20)"/>
                    </svg>`
};
