const tornarchArt = {
    "mdr-00-nn": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Official Scroll / Oval Seal -->
                        <clipPath id="void-mod">
                            <ellipse cx="50" cy="50" rx="38" ry="42" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension: Deep authority gray -->
                    <ellipse cx="50" cy="50" rx="38" ry="42" fill="#1c2833" stroke="#7f8c8d" stroke-width="2" />

                    <g clip-path="url(#void-mod)">
                        <!-- Radial Authority Glow -->
                        <radialGradient id="mod-glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#2c3e50" />
                            <stop offset="100%" stop-color="#0a0f14" />
                        </radialGradient>
                        <ellipse cx="50" cy="50" rx="38" ry="42" fill="url(#mod-glow)" />

                        <!-- Scales of Justice -->
                        <!-- Fulcrum -->
                        <line x1="50" y1="30" x2="50" y2="70" stroke="#bdc3c7" stroke-width="2" />
                        <line x1="30" y1="42" x2="70" y2="42" stroke="#bdc3c7" stroke-width="1.5" />

                        <!-- Left pan -->
                        <line x1="30" y1="42" x2="28" y2="55" stroke="#95a5a6" stroke-width="1" />
                        <line x1="28" y1="55" x2="22" y2="55" stroke="#95a5a6" stroke-width="1" />
                        <path d="M 22 55 Q 25 65 28 55 Z" fill="#7f8c8d" />

                        <!-- Right pan (slightly lower — unbalanced) -->
                        <line x1="70" y1="42" x2="72" y2="59" stroke="#95a5a6" stroke-width="1" />
                        <line x1="72" y1="59" x2="78" y2="59" stroke="#95a5a6" stroke-width="1" />
                        <path d="M 72 59 Q 75 69 78 59 Z" fill="#7f8c8d" />

                        <!-- Gavel base -->
                        <rect x="41" y="68" width="18" height="4" rx="2" fill="#2c3e50" stroke="#bdc3c7" stroke-width="1" />

                        <!-- Top circle: Official Seal -->
                        <circle cx="50" cy="30" r="6" fill="none" stroke="#7f8c8d" stroke-width="1.5" stroke-dasharray="2 1" />
                        <circle cx="50" cy="30" r="2" fill="#bdc3c7" />

                        <!-- Stars of authority -->
                        <polygon points="35,28 36,31 39,31 37,33 38,36 35,34 32,36 33,33 31,31 34,31" fill="#7f8c8d" transform="scale(0.7) translate(12,16)" />
                        <polygon points="65,28 66,31 69,31 67,33 68,36 65,34 62,36 63,33 61,31 64,31" fill="#7f8c8d" transform="scale(0.7) translate(-29,16)" />
                    </g>

                    <!-- Outer details: Official border rings -->
                    <ellipse cx="50" cy="50" rx="44" ry="47" fill="none" stroke="#2c3e50" stroke-width="1" opacity="0.4" />
                    <ellipse cx="50" cy="50" rx="48" ry="49" fill="none" stroke="#7f8c8d" stroke-width="0.5" stroke-dasharray="3 4" opacity="0.3" />
                    <!-- Corner anchor ticks -->
                    <path d="M 5 50 L 12 50 M 95 50 L 88 50 M 50 3 L 50 10 M 50 97 L 50 90" stroke="#2c3e50" stroke-width="1.5" opacity="0.5" />
                </svg>`,
    "wwf-06-sh": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Jagged Claw Scratch -->
                        <clipPath id="void-ww">
                            <path d="M 0 20 L 15 15 L 30 35 L 45 10 L 60 40 L 75 5 L 100 30 L 100 90 L 80 85 L 60 95 L 40 80 L 20 95 L 0 85 Z" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension -->
                    <path d="M 0 20 L 15 15 L 30 35 L 45 10 L 60 40 L 75 5 L 100 30 L 100 90 L 80 85 L 60 95 L 40 80 L 20 95 L 0 85 Z" fill="#1a0000" stroke="#b30000" stroke-width="2" />

                    <g clip-path="url(#void-ww)">
                        <!-- Claws / Fangs inside the void -->
                        <polygon points="15,15 25,45 35,20" fill="#ffffff" opacity="0.9" />
                        <polygon points="45,10 50,55 55,15" fill="#ffffff" opacity="0.9" />
                        <polygon points="75,5 65,40 85,25" fill="#ffffff" opacity="0.9" />

                        <polygon points="20,95 30,60 40,80" fill="#ffffff" opacity="0.9" />
                        <polygon points="60,95 50,50 40,80" fill="#b30000" /> <!-- Blood stained fang -->
                        <polygon points="80,85 70,60 90,80" fill="#ffffff" opacity="0.9" />

                        <!-- Glowing Demonic Eyes -->
                        <ellipse cx="35" cy="55" rx="6" ry="3" fill="#ff0000" transform="rotate(-15 35 55)" />
                        <ellipse cx="65" cy="55" rx="6" ry="3" fill="#ff0000" transform="rotate(15 65 55)" />
                        <circle cx="35" cy="55" r="1.5" fill="#ffffff" />
                        <circle cx="65" cy="55" r="1.5" fill="#ffffff" />

                        <!-- Dripping Blood -->
                        <path d="M 50 55 L 50 85 A 2 2 0 0 1 48 85 Z" fill="#b30000" />
                        <circle cx="49" cy="90" r="2" fill="#b30000" />
                        <path d="M 25 45 L 25 70 A 1.5 1.5 0 0 1 23 70 Z" fill="#b30000" />
                        <circle cx="24" cy="75" r="1.5" fill="#b30000" />
                    </g>

                    <!-- Details on the outer white paper -->
                    <path d="M 5 40 Q 50 60 95 30" fill="none" stroke="#b30000" stroke-width="1.5" opacity="0.4" />
                    <path d="M 10 50 Q 50 70 90 40" fill="none" stroke="#b30000" stroke-width="1.5" opacity="0.4" />
                    <path d="M 15 60 Q 50 80 85 50" fill="none" stroke="#b30000" stroke-width="1.5" opacity="0.4" />
                </svg>`,

    "ser-01-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Mystical Eye/Crescent Tear -->
                        <clipPath id="void-seer">
                            <path d="M 10 40 Q 30 10 70 20 T 90 60 Q 60 90 30 80 T 10 40 Z" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension -->
                    <path d="M 10 40 Q 30 10 70 20 T 90 60 Q 60 90 30 80 T 10 40 Z" fill="#050a1f" stroke="#c89b3c" stroke-width="2" />

                    <g clip-path="url(#void-seer)">
                        <!-- Starry Night Background -->
                        <circle cx="30" cy="30" r="1" fill="#fff" opacity="0.5" />
                        <circle cx="70" cy="80" r="1.5" fill="#fff" opacity="0.7" />
                        <circle cx="20" cy="70" r="1" fill="#fff" opacity="0.4" />
                        <circle cx="85" cy="35" r="1" fill="#c89b3c" opacity="0.8" />

                        <!-- Glowing Constellations -->
                        <path d="M 25 35 L 40 25 L 55 30" fill="none" stroke="#c89b3c" stroke-width="0.5" opacity="0.5" stroke-dasharray="1 2" />
                        <circle cx="25" cy="35" r="1.5" fill="#c89b3c" />
                        <circle cx="40" cy="25" r="2" fill="#fff" />
                        <circle cx="55" cy="30" r="1.5" fill="#c89b3c" />

                        <!-- The All-Seeing Cosmic Eye -->
                        <path d="M 30 55 Q 50 35 70 55 Q 50 75 30 55 Z" fill="rgba(255,255,255,0.1)" stroke="#c89b3c" stroke-width="1.5" />
                        <circle cx="50" cy="55" r="9" fill="#c89b3c" />
                        <circle cx="50" cy="55" r="4" fill="#0f2c59" />
                        <circle cx="48" cy="53" r="1.5" fill="#fff" />

                        <!-- Radiant Beams inside the void -->
                        <path d="M 50 35 L 50 25 M 50 75 L 50 85 M 30 55 L 20 55 M 70 55 L 80 55" stroke="#c89b3c" stroke-width="1" opacity="0.6" />
                    </g>

                    <!-- Details on the outer white paper: Magical Geometric Lines -->
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#c89b3c" stroke-width="1" stroke-dasharray="2 6" opacity="0.5" />
                    <path d="M -10 50 L 20 50 M 80 50 L 110 50 M 50 -10 L 50 20 M 50 80 L 50 110" stroke="#0f2c59" stroke-width="1" opacity="0.2" />
                </svg>`,

    "hnt-99-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Explosive Blast Hole -->
                        <clipPath id="void-hunter">
                            <path d="M 45 10 L 55 25 L 80 15 L 75 40 L 95 55 L 70 70 L 80 90 L 55 80 L 40 95 L 30 75 L 10 80 L 25 55 L 5 40 L 30 30 Z" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension -->
                    <path d="M 45 10 L 55 25 L 80 15 L 75 40 L 95 55 L 70 70 L 80 90 L 55 80 L 40 95 L 30 75 L 10 80 L 25 55 L 5 40 L 30 30 Z" fill="#1a1005" stroke="#d35400" stroke-width="2" />

                    <g clip-path="url(#void-hunter)">
                        <!-- Sniper/Crossbow Scope Reticle -->
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#d35400" stroke-width="1.5" opacity="0.6" />
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#d35400" stroke-width="1" opacity="0.4" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#d35400" stroke-width="1" opacity="0.7" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#d35400" stroke-width="1" opacity="0.7" />

                        <!-- Gun Barrel / Crossbow Tip pointing Outwards -->
                        <circle cx="50" cy="50" r="6" fill="#000" stroke="#777" stroke-width="2" />
                        <polygon points="46,50 50,30 54,50" fill="#fff" opacity="0.8" /> <!-- Flare/flash -->

                        <!-- Bullet / Silver Arrow flying towards viewer -->
                        <circle cx="50" cy="50" r="3" fill="#fff" filter="drop-shadow(0 0 3px #d35400)" />

                        <!-- Sparks / Smoke inside -->
                        <circle cx="60" cy="40" r="1.5" fill="#f1c40f" />
                        <circle cx="35" cy="55" r="2" fill="#d35400" />
                        <circle cx="45" cy="65" r="1" fill="#fff" />
                    </g>

                    <!-- Details on the outer white paper: Burn marks and cracked lines -->
                    <path d="M 40 10 L 35 0 M 60 20 L 70 5 M 80 40 L 100 35 M 70 80 L 85 100 M 35 80 L 20 100 M 20 40 L 0 30" stroke="#2e1f18" stroke-width="1" opacity="0.3" stroke-dasharray="2 2" />
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#2e1f18" stroke-width="0.5" opacity="0.1" />
                </svg>`,

    "jst-00-ch": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Chaotic Zig-Zag Tear -->
                        <clipPath id="void-jester">
                            <path d="M 20 20 L 50 40 L 80 20 L 70 50 L 90 80 L 50 60 L 10 80 L 30 50 Z" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension -->
                    <path d="M 20 20 L 50 40 L 80 20 L 70 50 L 90 80 L 50 60 L 10 80 L 30 50 Z" fill="#110011" stroke="#8e44ad" stroke-width="2" />

                    <g clip-path="url(#void-jester)">
                        <!-- Swirling Madness Background -->
                        <path d="M 50 50 Q 20 10 50 0 T 50 50 T 80 100 T 50 50 Z" fill="none" stroke="#1abc9c" stroke-width="1.5" opacity="0.4" stroke-dasharray="3 3" />

                        <!-- The Split Jester Mask -->
                        <!-- Left Side: Sad -->
                        <path d="M 50 40 C 30 40 35 75 50 85 L 50 40 Z" fill="#fff" stroke="#2c0e3b" stroke-width="2" />
                        <circle cx="42" cy="55" r="4" fill="#2c0e3b" />
                        <path d="M 42 61 L 40 68 L 44 68 Z" fill="#8e44ad" /> <!-- Purple Tear -->
                        <path d="M 38 75 Q 45 68 48 75" fill="none" stroke="#2c0e3b" stroke-width="1.5" />
                        <!-- Frown -->

                        <!-- Right Side: Crazy Smile -->
                        <path d="M 50 40 C 70 40 65 75 50 85 L 50 40 Z" fill="#1abc9c" stroke="#2c0e3b" stroke-width="2" />
                        <polygon points="53,52 63,54 58,60" fill="#2c0e3b" />
                        <circle cx="58" cy="56" r="1" fill="#f1c40f" />
                        <path d="M 52 70 Q 62 85 68 68" fill="none" stroke="#2c0e3b" stroke-width="2.5" />
                        <!-- Smile -->
                        <path d="M 54 73 L 64 70" stroke="#fff" stroke-width="1" /> <!-- Teeth -->

                        <!-- Bells / Floating elements -->
                        <circle cx="35" cy="30" r="4" fill="#f1c40f" stroke="#2c0e3b" stroke-width="1" />
                        <circle cx="65" cy="30" r="4" fill="#f1c40f" stroke="#2c0e3b" stroke-width="1" />
                        <text x="50" y="30" fill="#8e44ad" font-size="12" font-family="Montserrat" font-weight="900" text-anchor="middle">?</text>
                    </g>

                    <!-- Details on the outer white paper: Inverted/Wrong shadows, stitches -->
                    <path d="M 20 20 L 15 10 M 50 40 L 50 30 M 80 20 L 85 10 M 70 50 L 85 45 M 90 80 L 100 90 M 50 60 L 50 75 M 10 80 L 0 90 M 30 50 L 15 55" stroke="#8e44ad" stroke-width="1.5" stroke-dasharray="1 2" />
                </svg>`,

    "grd-77-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Void Shape: Hexagonal / Fractured Shatter -->
                        <clipPath id="void-guardian">
                            <path d="M 50 15 L 60 20 L 75 15 L 85 30 L 80 45 L 90 60 L 75 75 L 60 85 L 50 75 L 40 85 L 25 75 L 10 60 L 20 45 L 15 30 L 25 15 L 40 20 Z" />
                        </clipPath>
                    </defs>

                    <!-- The Dark Inner Dimension -->
                    <path d="M 50 15 L 60 20 L 75 15 L 85 30 L 80 45 L 90 60 L 75 75 L 60 85 L 50 75 L 40 85 L 25 75 L 10 60 L 20 45 L 15 30 L 25 15 L 40 20 Z" fill="#0b131a" stroke="#2980b9" stroke-width="2" />

                    <g clip-path="url(#void-guardian)">
                        <!-- Internal Glowing Shield Geometry -->
                        <polygon points="50,25 75,40 75,65 50,85 25,65 25,40" fill="none" stroke="#2980b9" stroke-width="1.5" opacity="0.5" />
                        <polygon points="50,35 65,45 65,60 50,70 35,60 35,45" fill="#1a252f" stroke="#bdc3c7" stroke-width="2" />

                        <!-- Glowing Core Heart -->
                        <polygon points="50,45 55,52 50,60 45,52" fill="#2980b9" filter="drop-shadow(0 0 5px #2980b9)" />
                        <circle cx="50" cy="52" r="1.5" fill="#fff" />

                        <!-- Holy Wings abstract -->
                        <path d="M 35 52 Q 25 50 20 40 Q 25 45 35 45" fill="none" stroke="#bdc3c7" stroke-width="1.5" />
                        <path d="M 65 52 Q 75 50 80 40 Q 75 45 65 45" fill="none" stroke="#bdc3c7" stroke-width="1.5" />

                        <!-- Grid / Heavy Armor internal structure -->
                        <line x1="50" y1="25" x2="50" y2="35" stroke="#2980b9" stroke-width="2" />
                        <line x1="50" y1="70" x2="50" y2="85" stroke="#2980b9" stroke-width="2" />
                    </g>

                    <!-- Details on the outer white paper: Fractured Glass/Stone cracks -->
                    <path d="M 25 15 L 0 5 M 40 20 L 40 0 M 75 15 L 100 5 M 85 30 L 100 35 M 90 60 L 100 70 M 75 75 L 85 100 M 60 85 L 55 100 M 40 85 L 45 100 M 25 75 L 15 100 M 10 60 L 0 70 M 15 30 L 0 35" stroke="#1a252f" stroke-width="1" opacity="0.2" />
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#2980b9" stroke-width="2" opacity="0.1" />
                </svg>`,

    "alw-02-sh": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-alw"><path d="M 50 5 L 65 20 L 95 15 L 80 35 L 100 50 L 78 60 L 85 90 L 55 72 L 50 95 L 45 72 L 15 90 L 22 60 L 0 50 L 20 35 L 5 15 L 35 20 Z"/></clipPath></defs>
                    <path d="M 50 5 L 65 20 L 95 15 L 80 35 L 100 50 L 78 60 L 85 90 L 55 72 L 50 95 L 45 72 L 15 90 L 22 60 L 0 50 L 20 35 L 5 15 L 35 20 Z" fill="#1a0000" stroke="#8b0000" stroke-width="2"/>
                    <g clip-path="url(#void-alw)">
                        <radialGradient id="alw-g" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#3a0000"/><stop offset="100%" stop-color="#0a0000"/></radialGradient>
                        <path d="M 50 5 L 65 20 L 95 15 L 80 35 L 100 50 L 78 60 L 85 90 L 55 72 L 50 95 L 45 72 L 15 90 L 22 60 L 0 50 L 20 35 L 5 15 L 35 20 Z" fill="url(#alw-g)"/>
                        <!-- Wolf Crown -->
                        <path d="M 30 38 L 36 28 L 42 40 L 50 22 L 58 40 L 64 28 L 70 38 L 65 55 L 50 65 L 35 55 Z" fill="#8b0000" stroke="#ff4444" stroke-width="1"/>
                        <!-- Alpha Symbol -->
                        <text x="50" y="58" font-size="18" font-family="serif" font-weight="900" fill="#fff" text-anchor="middle" opacity="0.9">α</text>
                        <!-- Claw marks -->
                        <path d="M 22 65 L 28 80 M 26 63 L 32 78 M 30 62 L 36 77" stroke="#8b0000" stroke-width="1.5" opacity="0.8"/>
                        <path d="M 70 62 L 64 77 M 74 63 L 68 78 M 78 65 L 72 80" stroke="#8b0000" stroke-width="1.5" opacity="0.8"/>
                        <!-- Glowing eyes -->
                        <ellipse cx="42" cy="47" rx="4" ry="2.5" fill="#ff0000" transform="rotate(-10 42 47)"/>
                        <ellipse cx="58" cy="47" rx="4" ry="2.5" fill="#ff0000" transform="rotate(10 58 47)"/>
                        <circle cx="42" cy="47" r="1.2" fill="#fff"/><circle cx="58" cy="47" r="1.2" fill="#fff"/>
                    </g>
                    <path d="M 50 5 L 45 0 M 35 20 L 28 12 M 65 20 L 72 12 M 95 15 L 102 8 M 5 15 L -2 8" stroke="#8b0000" stroke-width="1" opacity="0.4"/>
                </svg>`,

    "cpd-03-ch": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-cpd"><path d="M 50 20 C 35 5 10 10 10 30 C 10 50 30 60 50 80 C 70 60 90 50 90 30 C 90 10 65 5 50 20 Z"/></clipPath></defs>
                    <path d="M 50 20 C 35 5 10 10 10 30 C 10 50 30 60 50 80 C 70 60 90 50 90 30 C 90 10 65 5 50 20 Z" fill="#3a0020" stroke="#e91e63" stroke-width="2"/>
                    <g clip-path="url(#void-cpd)">
                        <radialGradient id="cpd-g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#5a003a"/><stop offset="100%" stop-color="#1a0010"/></radialGradient>
                        <path d="M 50 20 C 35 5 10 10 10 30 C 10 50 30 60 50 80 C 70 60 90 50 90 30 C 90 10 65 5 50 20 Z" fill="url(#cpd-g)"/>
                        <!-- Cupid winged figure (silhouette) -->
                        <path d="M 50 55 C 45 50 38 48 35 52 C 32 48 30 44 34 40 C 38 36 45 40 50 45 C 55 40 62 36 66 40 C 70 44 68 48 65 52 C 62 48 55 50 50 55 Z" fill="#e91e63" opacity="0.8"/>
                        <!-- Wings -->
                        <path d="M 35 48 Q 20 38 18 28 Q 28 30 38 42 Z" fill="#f48fb1" opacity="0.7"/>
                        <path d="M 65 48 Q 80 38 82 28 Q 72 30 62 42 Z" fill="#f48fb1" opacity="0.7"/>
                        <!-- Arrows -->
                        <line x1="15" y1="65" x2="75" y2="35" stroke="#f8bbd0" stroke-width="1.5"/>
                        <polygon points="73,33 78,30 76,38" fill="#e91e63"/>
                        <line x1="18" y1="68" x2="14" y2="60" stroke="#f8bbd0" stroke-width="1.5"/>
                        <!-- Red thread linking two circles -->
                        <circle cx="25" cy="70" r="4" fill="none" stroke="#e91e63" stroke-width="1.5"/>
                        <circle cx="75" cy="70" r="4" fill="none" stroke="#e91e63" stroke-width="1.5"/>
                        <path d="M 29 70 Q 50 62 71 70" fill="none" stroke="#e91e63" stroke-width="1" stroke-dasharray="2 2"/>
                        <!-- Heart at center top -->
                        <path d="M 50 28 C 48 25 43 25 43 30 C 43 35 50 40 50 40 C 50 40 57 35 57 30 C 57 25 52 25 50 28 Z" fill="#ff4081"/>
                    </g>
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#e91e63" stroke-width="0.5" stroke-dasharray="4 6" opacity="0.3"/>
                    <path d="M 10 30 L 2 20 M 90 30 L 98 20 M 50 20 L 50 8" stroke="#e91e63" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "wtc-04-sh": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-wtc"><path d="M 38 8 L 62 8 L 75 25 L 82 55 L 70 90 L 50 95 L 30 90 L 18 55 L 25 25 Z"/></clipPath></defs>
                    <path d="M 38 8 L 62 8 L 75 25 L 82 55 L 70 90 L 50 95 L 30 90 L 18 55 L 25 25 Z" fill="#0e0033" stroke="#1abc9c" stroke-width="2"/>
                    <g clip-path="url(#void-wtc)">
                        <!-- Cauldron shape -->
                        <path d="M 28 60 Q 25 75 30 82 Q 50 90 70 82 Q 75 75 72 60 Z" fill="#1a0040" stroke="#1abc9c" stroke-width="1.5"/>
                        <ellipse cx="50" cy="60" rx="22" ry="8" fill="#0e0033" stroke="#1abc9c" stroke-width="1.5"/>
                        <!-- Bubbles in cauldron -->
                        <circle cx="44" cy="58" r="3" fill="#1abc9c" opacity="0.6"/>
                        <circle cx="55" cy="56" r="2" fill="#2ecc71" opacity="0.7"/>
                        <circle cx="50" cy="60" r="1.5" fill="#1abc9c" opacity="0.5"/>
                        <!-- Steam wisps -->
                        <path d="M 42 55 Q 38 45 42 35 Q 46 25 42 15" fill="none" stroke="#1abc9c" stroke-width="1.2" opacity="0.6"/>
                        <path d="M 50 52 Q 46 42 50 32 Q 54 22 50 12" fill="none" stroke="#1abc9c" stroke-width="1.2" opacity="0.6"/>
                        <path d="M 58 55 Q 62 45 58 35 Q 54 25 58 15" fill="none" stroke="#1abc9c" stroke-width="1.2" opacity="0.6"/>
                        <!-- Witch hat top -->
                        <polygon points="50,10 38,30 62,30" fill="#1a0040" stroke="#1abc9c" stroke-width="1.5"/>
                        <!-- Skull bottle stopper -->
                        <circle cx="35" cy="48" r="5" fill="#0e0033" stroke="#9b59b6" stroke-width="1"/>
                        <circle cx="33" cy="47" r="1" fill="#fff"/><circle cx="37" cy="47" r="1" fill="#fff"/>
                        <path d="M 33 51 L 37 51" stroke="#fff" stroke-width="0.8"/>
                        <!-- Stars floating -->
                        <text x="68" y="30" font-size="8" fill="#1abc9c" opacity="0.8">✦</text>
                        <text x="22" y="38" font-size="6" fill="#9b59b6" opacity="0.7">✦</text>
                    </g>
                    <path d="M 38 8 L 30 0 M 62 8 L 70 0 M 18 55 L 5 50 M 82 55 L 95 50" stroke="#1abc9c" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "wzd-05-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-wzd"><polygon points="50,8 90,35 78,80 50,92 22,80 10,35"/></clipPath></defs>
                    <polygon points="50,8 90,35 78,80 50,92 22,80 10,35" fill="#1c0a3a" stroke="#9b59b6" stroke-width="2"/>
                    <g clip-path="url(#void-wzd)">
                        <radialGradient id="wzd-g" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#2c1060"/><stop offset="100%" stop-color="#0a0520"/></radialGradient>
                        <polygon points="50,8 90,35 78,80 50,92 22,80 10,35" fill="url(#wzd-g)"/>
                        <!-- Magic circles -->
                        <circle cx="50" cy="50" r="28" fill="none" stroke="#9b59b6" stroke-width="1" opacity="0.5"/>
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
                        <circle cx="50" cy="50" r="12" fill="none" stroke="#9b59b6" stroke-width="1.5" opacity="0.7"/>
                        <!-- Rune lines connecting hexagon points -->
                        <line x1="50" y1="22" x2="50" y2="78" stroke="#9b59b6" stroke-width="0.8" opacity="0.4"/>
                        <line x1="26" y1="36" x2="74" y2="64" stroke="#9b59b6" stroke-width="0.8" opacity="0.4"/>
                        <line x1="74" y1="36" x2="26" y2="64" stroke="#9b59b6" stroke-width="0.8" opacity="0.4"/>
                        <!-- Wizard staff -->
                        <line x1="50" y1="22" x2="50" y2="78" stroke="#d4af37" stroke-width="2"/>
                        <polygon points="50,22 54,32 50,30 46,32" fill="#d4af37"/>
                        <!-- Orb at top of staff -->
                        <circle cx="50" cy="22" r="5" fill="#9b59b6" stroke="#d4af37" stroke-width="1"/>
                        <circle cx="48" cy="20" r="1.5" fill="#fff" opacity="0.7"/>
                        <!-- Stars -->
                        <circle cx="30" cy="35" r="1.5" fill="#d4af37"/><circle cx="70" cy="35" r="1.5" fill="#d4af37"/>
                        <circle cx="25" cy="60" r="1" fill="#9b59b6"/><circle cx="75" cy="60" r="1" fill="#9b59b6"/>
                        <circle cx="50" cy="75" r="1.5" fill="#d4af37"/>
                    </g>
                    <polygon points="50,8 90,35 78,80 50,92 22,80 10,35" fill="none" stroke="#9b59b6" stroke-width="0.5" stroke-dasharray="3 5" opacity="0.3"/>
                </svg>`,

    "vet-06-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-vet"><path d="M 50 10 L 62 25 L 90 22 L 78 45 L 95 65 L 68 68 L 60 92 L 50 75 L 40 92 L 32 68 L 5 65 L 22 45 L 10 22 L 38 25 Z"/></clipPath></defs>
                    <path d="M 50 10 L 62 25 L 90 22 L 78 45 L 95 65 L 68 68 L 60 92 L 50 75 L 40 92 L 32 68 L 5 65 L 22 45 L 10 22 L 38 25 Z" fill="#1e1408" stroke="#8d6e35" stroke-width="2"/>
                    <g clip-path="url(#void-vet)">
                        <!-- Military medal star background -->
                        <path d="M 50 10 L 62 25 L 90 22 L 78 45 L 95 65 L 68 68 L 60 92 L 50 75 L 40 92 L 32 68 L 5 65 L 22 45 L 10 22 L 38 25 Z" fill="#120d04"/>
                        <!-- Medal ribbon -->
                        <rect x="42" y="20" width="16" height="15" rx="2" fill="#8d6e35" opacity="0.8"/>
                        <!-- Medal disc -->
                        <circle cx="50" cy="50" r="20" fill="#2a1e0a" stroke="#8d6e35" stroke-width="2"/>
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2 2"/>
                        <!-- Dog tag / star inside -->
                        <polygon points="50,35 54,44 64,44 56,50 59,60 50,54 41,60 44,50 36,44 46,44" fill="#8d6e35" stroke="#d4af37" stroke-width="0.8"/>
                        <!-- Battle scars / bullet marks -->
                        <path d="M 20 30 L 25 38 M 75 32 L 80 40 M 15 60 L 22 65 M 78 62 L 85 68" stroke="#8d6e35" stroke-width="1.5" opacity="0.6"/>
                        <!-- 3 dots = 3 alerts remaining -->
                        <circle cx="38" cy="72" r="3" fill="#d4af37"/><circle cx="50" cy="74" r="3" fill="#d4af37"/><circle cx="62" cy="72" r="3" fill="#d4af37"/>
                    </g>
                    <path d="M 50 10 L 50 2 M 90 22 L 98 18 M 10 22 L 2 18 M 95 65 L 102 68 M 5 65 L -2 68" stroke="#8d6e35" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "bdg-07-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-bdg"><path d="M 20 15 L 50 8 L 80 15 L 92 50 L 80 80 L 50 95 L 20 80 L 8 50 Z"/></clipPath></defs>
                    <path d="M 20 15 L 50 8 L 80 15 L 92 50 L 80 80 L 50 95 L 20 80 L 8 50 Z" fill="#0d1b2a" stroke="#546e7a" stroke-width="2"/>
                    <g clip-path="url(#void-bdg)">
                        <radialGradient id="bdg-g" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1c2f3e"/><stop offset="100%" stop-color="#060d14"/></radialGradient>
                        <path d="M 20 15 L 50 8 L 80 15 L 92 50 L 80 80 L 50 95 L 20 80 L 8 50 Z" fill="url(#bdg-g)"/>
                        <!-- Shield shape layered -->
                        <path d="M 30 25 L 50 18 L 70 25 L 78 52 L 65 72 L 50 82 L 35 72 L 22 52 Z" fill="none" stroke="#546e7a" stroke-width="2" opacity="0.6"/>
                        <path d="M 36 32 L 50 26 L 64 32 L 70 52 L 60 66 L 50 74 L 40 66 L 30 52 Z" fill="#0d1b2a" stroke="#90a4ae" stroke-width="1.5"/>
                        <!-- Fist / arm silhouette -->
                        <rect x="40" y="42" width="20" height="15" rx="4" fill="#546e7a"/>
                        <rect x="38" y="40" width="6" height="12" rx="3" fill="#546e7a"/>
                        <rect x="44" y="38" width="6" height="14" rx="3" fill="#546e7a"/>
                        <rect x="50" y="39" width="6" height="13" rx="3" fill="#546e7a"/>
                        <circle cx="50" cy="58" rx="5" ry="4" r="3" fill="#90a4ae" opacity="0.5"/>
                        <!-- Chain links -->
                        <path d="M 22 52 Q 15 52 12 45 Q 9 38 15 34" fill="none" stroke="#90a4ae" stroke-width="1.5" stroke-dasharray="3 2"/>
                        <path d="M 78 52 Q 85 52 88 45 Q 91 38 85 34" fill="none" stroke="#90a4ae" stroke-width="1.5" stroke-dasharray="3 2"/>
                    </g>
                    <path d="M 20 15 L 10 8 M 80 15 L 90 8 M 8 50 L 0 50 M 92 50 L 100 50" stroke="#546e7a" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "prs-08-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-prs"><path d="M 35 5 L 65 5 L 65 30 L 90 30 L 90 55 L 65 55 L 55 95 L 45 95 L 35 55 L 10 55 L 10 30 L 35 30 Z"/></clipPath></defs>
                    <path d="M 35 5 L 65 5 L 65 30 L 90 30 L 90 55 L 65 55 L 55 95 L 45 95 L 35 55 L 10 55 L 10 30 L 35 30 Z" fill="#1a130a" stroke="#f39c12" stroke-width="2"/>
                    <g clip-path="url(#void-prs)">
                        <!-- Inner cross glow -->
                        <path d="M 35 5 L 65 5 L 65 30 L 90 30 L 90 55 L 65 55 L 55 95 L 45 95 L 35 55 L 10 55 L 10 30 L 35 30 Z" fill="#0f0a04"/>
                        <!-- Radiant light beams from center of cross -->
                        <radialGradient id="prs-g" cx="50%" cy="48%" r="50%"><stop offset="0%" stop-color="#f39c12" stop-opacity="0.4"/><stop offset="100%" stop-color="#0f0a04" stop-opacity="0"/></radialGradient>
                        <path d="M 35 5 L 65 5 L 65 30 L 90 30 L 90 55 L 65 55 L 55 95 L 45 95 L 35 55 L 10 55 L 10 30 L 35 30 Z" fill="url(#prs-g)"/>
                        <!-- Gold cross outline inner -->
                        <path d="M 38 8 L 62 8 L 62 33 L 87 33 L 87 52 L 62 52 L 52 92 L 48 92 L 38 52 L 13 52 L 13 33 L 38 33 Z" fill="none" stroke="#f39c12" stroke-width="1" opacity="0.5"/>
                        <!-- Dove / holy spirit symbol -->
                        <path d="M 42 42 Q 50 32 58 42 Q 54 46 50 44 Q 46 46 42 42 Z" fill="#fff" opacity="0.8"/>
                        <circle cx="50" cy="40" r="4" fill="#fff" opacity="0.9"/>
                        <!-- Incense wisps -->
                        <path d="M 35 65 Q 32 55 35 48" fill="none" stroke="#f39c12" stroke-width="1" opacity="0.5" stroke-dasharray="2 2"/>
                        <path d="M 65 65 Q 68 55 65 48" fill="none" stroke="#f39c12" stroke-width="1" opacity="0.5" stroke-dasharray="2 2"/>
                        <!-- Halo dots -->
                        <circle cx="50" cy="35" r="1" fill="#f39c12"/>
                        <circle cx="44" cy="37" r="1" fill="#f39c12" opacity="0.7"/>
                        <circle cx="56" cy="37" r="1" fill="#f39c12" opacity="0.7"/>
                    </g>
                    <path d="M 35 5 L 28 0 M 65 5 L 72 0 M 90 30 L 100 25 M 10 30 L 0 25 M 90 55 L 100 60 M 10 55 L 0 60" stroke="#f39c12" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "myr-09-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-myr"><path d="M 20 30 L 30 10 L 50 5 L 70 10 L 80 30 L 90 45 L 80 70 L 60 88 L 50 92 L 40 88 L 20 70 L 10 45 Z"/></clipPath></defs>
                    <path d="M 20 30 L 30 10 L 50 5 L 70 10 L 80 30 L 90 45 L 80 70 L 60 88 L 50 92 L 40 88 L 20 70 L 10 45 Z" fill="#2c0000" stroke="#c0392b" stroke-width="2"/>
                    <g clip-path="url(#void-myr)">
                        <radialGradient id="myr-g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#4a0000"/><stop offset="100%" stop-color="#100000"/></radialGradient>
                        <path d="M 20 30 L 30 10 L 50 5 L 70 10 L 80 30 L 90 45 L 80 70 L 60 88 L 50 92 L 40 88 L 20 70 L 10 45 Z" fill="url(#myr-g)"/>
                        <!-- Mayor's Crown -->
                        <path d="M 28 50 L 28 38 L 36 45 L 42 32 L 50 40 L 58 32 L 64 45 L 72 38 L 72 50 Z" fill="#c0392b" stroke="#d4af37" stroke-width="1.5"/>
                        <rect x="28" y="50" width="44" height="10" rx="2" fill="#8b0000" stroke="#d4af37" stroke-width="1.5"/>
                        <!-- Crown jewels -->
                        <circle cx="50" cy="38" r="4" fill="#d4af37" stroke="#fff" stroke-width="0.8"/>
                        <circle cx="36" cy="44" r="2.5" fill="#d4af37"/><circle cx="64" cy="44" r="2.5" fill="#d4af37"/>
                        <!-- Sash / chain of office -->
                        <path d="M 28 60 Q 18 68 22 78" fill="none" stroke="#d4af37" stroke-width="2"/>
                        <path d="M 72 60 Q 82 68 78 78" fill="none" stroke="#d4af37" stroke-width="2"/>
                        <!-- Decree scroll -->
                        <rect x="36" y="68" width="28" height="16" rx="3" fill="#1a0000" stroke="#d4af37" stroke-width="1"/>
                        <line x1="40" y1="73" x2="60" y2="73" stroke="#d4af37" stroke-width="0.8" opacity="0.7"/>
                        <line x1="40" y1="77" x2="60" y2="77" stroke="#d4af37" stroke-width="0.8" opacity="0.7"/>
                        <!-- Double-vote indicator -->
                        <text x="50" y="82" font-size="6" fill="#c0392b" text-anchor="middle" font-weight="900">x2</text>
                    </g>
                    <path d="M 20 30 L 12 24 M 30 10 L 25 2 M 70 10 L 75 2 M 80 30 L 88 24" stroke="#c0392b" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "shr-10-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-shr"><path d="M 50 8 L 61 18 L 75 15 L 80 28 L 92 35 L 88 50 L 95 63 L 82 70 L 80 84 L 65 85 L 55 95 L 45 95 L 35 85 L 20 84 L 18 70 L 5 63 L 12 50 L 8 35 L 20 28 L 25 15 L 39 18 Z"/></clipPath></defs>
                    <path d="M 50 8 L 61 18 L 75 15 L 80 28 L 92 35 L 88 50 L 95 63 L 82 70 L 80 84 L 65 85 L 55 95 L 45 95 L 35 85 L 20 84 L 18 70 L 5 63 L 12 50 L 8 35 L 20 28 L 25 15 L 39 18 Z" fill="#1a1a0a" stroke="#f1c40f" stroke-width="2"/>
                    <g clip-path="url(#void-shr)">
                        <!-- Badge background -->
                        <path d="M 50 8 L 61 18 L 75 15 L 80 28 L 92 35 L 88 50 L 95 63 L 82 70 L 80 84 L 65 85 L 55 95 L 45 95 L 35 85 L 20 84 L 18 70 L 5 63 L 12 50 L 8 35 L 20 28 L 25 15 L 39 18 Z" fill="#0e0e05"/>
                        <!-- Big star badge -->
                        <polygon points="50,22 55,36 70,36 58,46 63,60 50,52 37,60 42,46 30,36 45,36" fill="#f1c40f" stroke="#d4af37" stroke-width="1.5"/>
                        <!-- Badge center: Sheriff emblem -->
                        <circle cx="50" cy="44" r="7" fill="#1a1a0a" stroke="#f1c40f" stroke-width="1.5"/>
                        <text x="50" y="48" font-size="7" fill="#f1c40f" text-anchor="middle" font-weight="900">★</text>
                        <!-- Pistol silhouette -->
                        <path d="M 28 65 L 45 62 L 48 67 L 28 70 Z" fill="#546e7a"/>
                        <rect x="20" y="62" width="10" height="5" rx="1" fill="#546e7a"/>
                        <circle cx="22" cy="64.5" r="1" fill="#37474f"/>
                        <!-- Wanted sign outline -->
                        <rect x="58" y="62" width="22" height="18" rx="2" fill="none" stroke="#f1c40f" stroke-width="1" opacity="0.6"/>
                        <line x1="60" y1="67" x2="78" y2="67" stroke="#f1c40f" stroke-width="0.8" opacity="0.5"/>
                        <line x1="60" y1="71" x2="78" y2="71" stroke="#f1c40f" stroke-width="0.8" opacity="0.5"/>
                        <line x1="60" y1="75" x2="72" y2="75" stroke="#f1c40f" stroke-width="0.8" opacity="0.5"/>
                    </g>
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#f1c40f" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.2"/>
                </svg>`,

    "vl1-11-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-vl1"><path d="M 20 55 L 20 35 L 35 15 L 50 10 L 65 15 L 80 35 L 80 55 L 65 80 L 50 90 L 35 80 Z"/></clipPath></defs>
                    <path d="M 20 55 L 20 35 L 35 15 L 50 10 L 65 15 L 80 35 L 80 55 L 65 80 L 50 90 L 35 80 Z" fill="#0d2918" stroke="#27ae60" stroke-width="2"/>
                    <g clip-path="url(#void-vl1)">
                        <radialGradient id="vl1-g" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a4228"/><stop offset="100%" stop-color="#060e0a"/></radialGradient>
                        <path d="M 20 55 L 20 35 L 35 15 L 50 10 L 65 15 L 80 35 L 80 55 L 65 80 L 50 90 L 35 80 Z" fill="url(#vl1-g)"/>
                        <!-- House silhouette -->
                        <polygon points="50,22 70,40 70,68 30,68 30,40" fill="#0d2918" stroke="#27ae60" stroke-width="1.5"/>
                        <polygon points="50,18 75,40 25,40" fill="#27ae60" opacity="0.7"/>
                        <!-- Door -->
                        <rect x="44" y="54" width="12" height="14" rx="1" fill="#27ae60" opacity="0.8"/>
                        <!-- Window -->
                        <rect x="34" y="46" width="8" height="8" rx="1" fill="none" stroke="#27ae60" stroke-width="1.5"/>
                        <rect x="58" y="46" width="8" height="8" rx="1" fill="none" stroke="#27ae60" stroke-width="1.5"/>
                        <!-- Wheat stalks beside house -->
                        <line x1="22" y1="68" x2="22" y2="45" stroke="#8d6e35" stroke-width="1.5"/>
                        <ellipse cx="22" cy="43" rx="2" ry="4" fill="#8d6e35" transform="rotate(-10 22 43)"/>
                        <line x1="26" y1="68" x2="26" y2="47" stroke="#8d6e35" stroke-width="1"/>
                        <ellipse cx="26" cy="45" rx="1.5" ry="3" fill="#8d6e35" transform="rotate(10 26 45)"/>
                        <!-- Sun rays in sky -->
                        <circle cx="50" cy="30" r="4" fill="#f1c40f" opacity="0.3"/>
                    </g>
                    <path d="M 20 35 L 10 28 M 35 15 L 28 6 M 65 15 L 72 6 M 80 35 L 90 28 M 65 80 L 75 88 M 35 80 L 25 88" stroke="#27ae60" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "vl2-12-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-vl2"><path d="M 15 25 Q 50 5 85 25 Q 95 50 85 75 Q 50 95 15 75 Q 5 50 15 25 Z"/></clipPath></defs>
                    <path d="M 15 25 Q 50 5 85 25 Q 95 50 85 75 Q 50 95 15 75 Q 5 50 15 25 Z" fill="#0a1e1c" stroke="#16a085" stroke-width="2"/>
                    <g clip-path="url(#void-vl2)">
                        <radialGradient id="vl2-g" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#0f2e28"/><stop offset="100%" stop-color="#040c0a"/></radialGradient>
                        <path d="M 15 25 Q 50 5 85 25 Q 95 50 85 75 Q 50 95 15 75 Q 5 50 15 25 Z" fill="url(#vl2-g)"/>
                        <!-- Lantern (symbol of village light/hope) -->
                        <rect x="43" y="30" width="14" height="20" rx="3" fill="none" stroke="#16a085" stroke-width="1.5"/>
                        <line x1="50" y1="22" x2="50" y2="30" stroke="#16a085" stroke-width="1.5"/>
                        <!-- Lantern flame -->
                        <path d="M 50 35 C 47 33 47 38 50 40 C 53 38 53 33 50 35 Z" fill="#f39c12" opacity="0.9"/>
                        <!-- Crowd silhouettes below -->
                        <ellipse cx="32" cy="70" rx="6" ry="8" fill="#16a085" opacity="0.5"/>
                        <ellipse cx="44" cy="72" rx="6" ry="8" fill="#16a085" opacity="0.4"/>
                        <ellipse cx="56" cy="72" rx="6" ry="8" fill="#16a085" opacity="0.4"/>
                        <ellipse cx="68" cy="70" rx="6" ry="8" fill="#16a085" opacity="0.5"/>
                        <!-- Vote hands raised -->
                        <line x1="32" y1="62" x2="28" y2="52" stroke="#16a085" stroke-width="1.5"/>
                        <line x1="44" y1="64" x2="42" y2="54" stroke="#16a085" stroke-width="1.5"/>
                        <line x1="68" y1="62" x2="72" y2="52" stroke="#16a085" stroke-width="1.5"/>
                        <!-- Truth banner -->
                        <path d="M 30 56 L 70 56" stroke="#16a085" stroke-width="1" opacity="0.5" stroke-dasharray="2 3"/>
                    </g>
                    <circle cx="50" cy="50" r="47" fill="none" stroke="#16a085" stroke-width="0.5" stroke-dasharray="3 5" opacity="0.3"/>
                </svg>`,

    "vl3-13-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-vl3"><path d="M 10 50 L 25 20 L 50 8 L 75 20 L 90 50 L 75 80 L 50 92 L 25 80 Z"/></clipPath></defs>
                    <path d="M 10 50 L 25 20 L 50 8 L 75 20 L 90 50 L 75 80 L 50 92 L 25 80 Z" fill="#1f0e00" stroke="#e67e22" stroke-width="2"/>
                    <g clip-path="url(#void-vl3)">
                        <!-- Oak/village tree -->
                        <line x1="50" y1="85" x2="50" y2="50" stroke="#5d4037" stroke-width="4"/>
                        <ellipse cx="50" cy="42" rx="22" ry="18" fill="#1f4a00" stroke="#27ae60" stroke-width="1" opacity="0.8"/>
                        <ellipse cx="38" cy="48" rx="14" ry="11" fill="#1f4a00" opacity="0.7"/>
                        <ellipse cx="62" cy="48" rx="14" ry="11" fill="#1f4a00" opacity="0.7"/>
                        <!-- Autumn leaves falling -->
                        <ellipse cx="25" cy="60" rx="3" ry="5" fill="#e67e22" transform="rotate(-30 25 60)" opacity="0.8"/>
                        <ellipse cx="72" cy="58" rx="3" ry="5" fill="#e67e22" transform="rotate(20 72 58)" opacity="0.8"/>
                        <ellipse cx="30" cy="72" rx="2.5" ry="4" fill="#c0392b" transform="rotate(15 30 72)" opacity="0.7"/>
                        <ellipse cx="68" cy="70" rx="2.5" ry="4" fill="#d35400" transform="rotate(-20 68 70)" opacity="0.7"/>
                        <!-- Village path at base -->
                        <path d="M 30 85 Q 50 80 70 85" fill="none" stroke="#8d6e35" stroke-width="2"/>
                        <!-- Dawn sun behind tree -->
                        <circle cx="50" cy="25" r="8" fill="#e67e22" opacity="0.3"/>
                        <path d="M 50 14 L 50 10 M 62 18 L 66 14 M 38 18 L 34 14" stroke="#e67e22" stroke-width="1" opacity="0.4"/>
                    </g>
                    <path d="M 25 20 L 18 12 M 75 20 L 82 12 M 10 50 L 2 50 M 90 50 L 98 50" stroke="#e67e22" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "ww2-14-sh": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-ww2"><path d="M 30 5 C 10 15 5 30 8 50 C 5 70 12 85 30 92 L 50 98 L 70 92 C 88 85 95 70 92 50 C 95 30 90 15 70 5 Z"/></clipPath></defs>
                    <path d="M 30 5 C 10 15 5 30 8 50 C 5 70 12 85 30 92 L 50 98 L 70 92 C 88 85 95 70 92 50 C 95 30 90 15 70 5 Z" fill="#180000" stroke="#e74c3c" stroke-width="2"/>
                    <g clip-path="url(#void-ww2)">
                        <radialGradient id="ww2-g" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#2e0000"/><stop offset="100%" stop-color="#080000"/></radialGradient>
                        <path d="M 30 5 C 10 15 5 30 8 50 C 5 70 12 85 30 92 L 50 98 L 70 92 C 88 85 95 70 92 50 C 95 30 90 15 70 5 Z" fill="url(#ww2-g)"/>
                        <!-- Wolf paw print (different from WW1) -->
                        <circle cx="50" cy="55" r="12" fill="#e74c3c" opacity="0.7"/>
                        <circle cx="36" cy="40" r="6" fill="#e74c3c" opacity="0.6"/>
                        <circle cx="50" cy="36" r="6" fill="#e74c3c" opacity="0.6"/>
                        <circle cx="64" cy="40" r="6" fill="#e74c3c" opacity="0.6"/>
                        <circle cx="30" cy="52" r="5" fill="#e74c3c" opacity="0.5"/>
                        <!-- Dripping from paw -->
                        <path d="M 45 67 L 44 78 M 50 67 L 50 80 M 55 67 L 56 77" stroke="#8b0000" stroke-width="2"/>
                        <!-- Glowing menacing eyes different angle -->
                        <ellipse cx="38" cy="22" rx="6" ry="3" fill="#ff4444" transform="rotate(15 38 22)"/>
                        <ellipse cx="62" cy="22" rx="6" ry="3" fill="#ff4444" transform="rotate(-15 62 22)"/>
                        <circle cx="38" cy="22" r="2" fill="#fff"/><circle cx="62" cy="22" r="2" fill="#fff"/>
                        <!-- Claw tear marks (opposite direction from WW1) -->
                        <path d="M 78 60 L 68 72 M 82 65 L 72 77 M 86 70 L 76 82" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>
                    </g>
                    <path d="M 30 5 L 22 0 M 70 5 L 78 0 M 8 50 L 0 50 M 92 50 L 100 50 M 30 92 L 22 100 M 70 92 L 78 100" stroke="#e74c3c" stroke-width="1" opacity="0.4"/>
                </svg>`,

    "lnw-15-sh": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-lnw"><path d="M 50 8 C 75 8 92 25 92 50 C 92 72 72 92 50 92 C 28 92 8 72 8 50 C 8 25 25 8 50 8 Z M 50 8 C 38 8 28 18 28 30 Z"/></clipPath>
                    <clipPath id="void-lnw2"><circle cx="50" cy="50" r="42"/></clipPath></defs>
                    <circle cx="50" cy="50" r="42" fill="#0d0820" stroke="#6c5ce7" stroke-width="2"/>
                    <g clip-path="url(#void-lnw2)">
                        <radialGradient id="lnw-g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#1a1042"/><stop offset="100%" stop-color="#05030f"/></radialGradient>
                        <circle cx="50" cy="50" r="42" fill="url(#lnw-g)"/>
                        <!-- Crescent moon -->
                        <circle cx="50" cy="35" r="16" fill="#6c5ce7" opacity="0.8"/>
                        <circle cx="57" cy="30" r="13" fill="#0d0820"/>
                        <!-- Lone wolf howling silhouette -->
                        <path d="M 38 90 C 40 80 44 72 46 65 C 47 60 48 54 50 50 C 51 48 53 44 54 40" fill="none" stroke="#a29bfe" stroke-width="2.5" stroke-linecap="round"/>
                        <path d="M 38 90 L 55 90 L 50 75 Z" fill="#6c5ce7" opacity="0.6"/>
                        <!-- Ears -->
                        <path d="M 46 65 L 42 58 L 48 62 Z" fill="#a29bfe"/>
                        <path d="M 52 62 L 56 56 L 58 63 Z" fill="#a29bfe"/>
                        <!-- Stars (lone, isolated) -->
                        <circle cx="18" cy="25" r="1.5" fill="#a29bfe"/>
                        <circle cx="82" cy="30" r="1" fill="#6c5ce7"/>
                        <circle cx="75" cy="70" r="1.5" fill="#a29bfe"/>
                        <circle cx="22" cy="68" r="1" fill="#6c5ce7"/>
                        <circle cx="30" cy="20" r="1" fill="#a29bfe"/>
                    </g>
                    <circle cx="50" cy="50" r="47" fill="none" stroke="#6c5ce7" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.3"/>
                </svg>`,

    "dpg-16-ch": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-dpg"><path d="M 50 5 L 95 30 L 95 70 L 50 95 L 5 70 L 5 30 Z"/></clipPath></defs>
                    <path d="M 50 5 L 95 30 L 95 70 L 50 95 L 5 70 L 5 30 Z" fill="#002a30" stroke="#00bcd4" stroke-width="2"/>
                    <g clip-path="url(#void-dpg)">
                        <radialGradient id="dpg-g" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#004d5c"/><stop offset="100%" stop-color="#000e10"/></radialGradient>
                        <path d="M 50 5 L 95 30 L 95 70 L 50 95 L 5 70 L 5 30 Z" fill="url(#dpg-g)"/>
                        <!-- Mirror line down the middle -->
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#00bcd4" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6"/>
                        <!-- Left face (original) -->
                        <circle cx="32" cy="40" r="10" fill="#002a30" stroke="#00bcd4" stroke-width="1.5"/>
                        <circle cx="29" cy="38" r="2" fill="#00bcd4"/>
                        <circle cx="35" cy="38" r="2" fill="#00bcd4"/>
                        <path d="M 28 46 Q 32 50 36 46" fill="none" stroke="#00bcd4" stroke-width="1.5"/>
                        <!-- Right face (mirror/copy - slightly offset) -->
                        <circle cx="68" cy="42" r="10" fill="#001a20" stroke="#80deea" stroke-width="1.5" opacity="0.8"/>
                        <circle cx="65" cy="40" r="2" fill="#80deea" opacity="0.8"/>
                        <circle cx="71" cy="40" r="2" fill="#80deea" opacity="0.8"/>
                        <path d="M 64 48 Q 68 52 72 48" fill="none" stroke="#80deea" stroke-width="1.5" opacity="0.8"/>
                        <!-- Copy transformation signal -->
                        <path d="M 42 50 Q 50 44 58 50" fill="none" stroke="#00bcd4" stroke-width="1.5"/>
                        <polygon points="56,46 60,50 56,54" fill="#00bcd4"/>
                        <!-- Floating duplicate particles -->
                        <circle cx="20" cy="60" r="2" fill="#00bcd4" opacity="0.5"/>
                        <circle cx="80" cy="58" r="2" fill="#00bcd4" opacity="0.5"/>
                        <circle cx="50" cy="70" r="2" fill="#00bcd4" opacity="0.7"/>
                        <!-- Ghost silhouette at bottom -->
                        <path d="M 32 65 Q 30 75 32 82 Q 36 88 40 82 Q 44 76 50 80 Q 56 76 60 82 Q 64 88 68 82 Q 70 75 68 65 Q 60 60 50 60 Q 40 60 32 65 Z" fill="#00bcd4" opacity="0.2"/>
                    </g>
                    <path d="M 50 5 L 50 0 M 95 30 L 102 26 M 95 70 L 102 74 M 5 30 L -2 26 M 5 70 L -2 74 M 50 95 L 50 100" stroke="#00bcd4" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "skl-17-ch": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-skl"><path d="M 50 5 L 58 12 L 70 8 L 75 20 L 88 22 L 85 35 L 95 45 L 88 55 L 92 68 L 80 72 L 78 85 L 65 82 L 58 92 L 50 88 L 42 92 L 35 82 L 22 85 L 20 72 L 8 68 L 12 55 L 5 45 L 15 35 L 12 22 L 25 20 L 30 8 L 42 12 Z"/></clipPath></defs>
                    <path d="M 50 5 L 58 12 L 70 8 L 75 20 L 88 22 L 85 35 L 95 45 L 88 55 L 92 68 L 80 72 L 78 85 L 65 82 L 58 92 L 50 88 L 42 92 L 35 82 L 22 85 L 20 72 L 8 68 L 12 55 L 5 45 L 15 35 L 12 22 L 25 20 L 30 8 L 42 12 Z" fill="#0a0000" stroke="#e53935" stroke-width="2"/>
                    <g clip-path="url(#void-skl)">
                        <!-- Dark abyss background -->
                        <path d="M 50 5 L 58 12 L 70 8 L 75 20 L 88 22 L 85 35 L 95 45 L 88 55 L 92 68 L 80 72 L 78 85 L 65 82 L 58 92 L 50 88 L 42 92 L 35 82 L 22 85 L 20 72 L 8 68 L 12 55 L 5 45 L 15 35 L 12 22 L 25 20 L 30 8 L 42 12 Z" fill="#040000"/>
                        <!-- Blade / knife shape -->
                        <path d="M 50 20 L 54 28 L 54 70 L 52 72 L 50 74 L 48 72 L 46 70 L 46 28 Z" fill="#37474f" stroke="#90a4ae" stroke-width="1"/>
                        <!-- Knife edge reflection -->
                        <path d="M 50 20 L 51 28 L 51 70 L 50 74 L 50 20 Z" fill="#b0bec5" opacity="0.5"/>
                        <!-- Knife handle -->
                        <rect x="44" y="70" width="12" height="16" rx="2" fill="#1a0000" stroke="#e53935" stroke-width="1.5"/>
                        <!-- Blood drip -->
                        <path d="M 48 20 L 48 35 A 2 2 0 0 1 46 35 Z" fill="#e53935"/>
                        <circle cx="47" cy="38" r="2" fill="#e53935"/>
                        <path d="M 52 22 L 52 40 A 1.5 1.5 0 0 1 50.5 40 Z" fill="#8b0000" opacity="0.8"/>
                        <!-- Tally marks (kill count) -->
                        <line x1="22" y1="40" x2="22" y2="55" stroke="#e53935" stroke-width="1.5" opacity="0.7"/>
                        <line x1="26" y1="40" x2="26" y2="55" stroke="#e53935" stroke-width="1.5" opacity="0.7"/>
                        <line x1="30" y1="40" x2="30" y2="55" stroke="#e53935" stroke-width="1.5" opacity="0.7"/>
                        <line x1="18" y1="47" x2="34" y2="47" stroke="#e53935" stroke-width="1.5" opacity="0.7"/>
                        <!-- Shadow behind blade -->
                        <path d="M 55 25 L 60 70 L 55 74" fill="none" stroke="#000" stroke-width="3" opacity="0.5"/>
                    </g>
                    <path d="M 50 5 L 46 0 M 70 8 L 74 2 M 88 22 L 96 18 M 95 45 L 102 42 M 92 68 L 100 72 M 78 85 L 84 94 M 22 85 L 16 94 M 8 68 L 0 72 M 5 45 L -2 42 M 12 22 L 4 18 M 30 8 L 26 2" stroke="#e53935" stroke-width="0.8" opacity="0.3"/>
                </svg>`,

    "idt-18-ch": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-idt"><path d="M 15 40 L 25 15 L 50 8 L 75 15 L 85 40 L 90 65 L 75 88 L 50 95 L 25 88 L 10 65 Z"/></clipPath></defs>
                    <path d="M 15 40 L 25 15 L 50 8 L 75 15 L 85 40 L 90 65 L 75 88 L 50 95 L 25 88 L 10 65 Z" fill="#1a0d00" stroke="#ff9800" stroke-width="2"/>
                    <g clip-path="url(#void-idt)">
                        <radialGradient id="idt-g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#3a1c00"/><stop offset="100%" stop-color="#0a0500"/></radialGradient>
                        <path d="M 15 40 L 25 15 L 50 8 L 75 15 L 85 40 L 90 65 L 75 88 L 50 95 L 25 88 L 10 65 Z" fill="url(#idt-g)"/>
                        <!-- Dunce / fool hat -->
                        <polygon points="50,15 62,42 38,42" fill="#ff9800" stroke="#f1c40f" stroke-width="1.5"/>
                        <!-- Jingle bell at top -->
                        <circle cx="50" cy="18" r="3" fill="#f1c40f" stroke="#ff9800" stroke-width="1"/>
                        <!-- Silly face -->
                        <circle cx="50" cy="55" r="15" fill="#1a0d00" stroke="#ff9800" stroke-width="1.5"/>
                        <circle cx="44" cy="52" r="3" fill="#ff9800"/>
                        <circle cx="56" cy="52" r="3" fill="#ff9800"/>
                        <!-- Cross eyes -->
                        <line x1="42" y1="50" x2="46" y2="54" stroke="#fff" stroke-width="1.5"/>
                        <line x1="46" y1="50" x2="42" y2="54" stroke="#fff" stroke-width="1.5"/>
                        <line x1="54" y1="50" x2="58" y2="54" stroke="#fff" stroke-width="1.5"/>
                        <line x1="58" y1="50" x2="54" y2="54" stroke="#fff" stroke-width="1.5"/>
                        <!-- Big goofy grin -->
                        <path d="M 40 62 Q 50 72 60 62" fill="#ff9800" opacity="0.8"/>
                        <path d="M 42 62 Q 50 70 58 62" fill="none" stroke="#f1c40f" stroke-width="1.5"/>
                        <!-- Question marks floating -->
                        <text x="22" y="38" font-size="10" fill="#ff9800" opacity="0.7" font-weight="900">?</text>
                        <text x="72" y="42" font-size="8" fill="#ff9800" opacity="0.6" font-weight="900">?</text>
                        <text x="28" y="72" font-size="7" fill="#f1c40f" opacity="0.5" font-weight="900">!</text>
                        <!-- Stars from head bump -->
                        <circle cx="72" cy="28" r="2" fill="#f1c40f"/><circle cx="78" cy="35" r="1.5" fill="#f1c40f"/><circle cx="70" cy="38" r="1" fill="#f1c40f"/>
                    </g>
                    <path d="M 25 15 L 18 8 M 75 15 L 82 8 M 85 40 L 95 35 M 90 65 L 100 62 M 15 40 L 5 35 M 10 65 L 0 62" stroke="#ff9800" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "prc-19-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-prc"><path d="M 50 5 L 70 15 L 85 12 L 90 30 L 95 50 L 85 70 L 75 88 L 50 95 L 25 88 L 15 70 L 5 50 L 10 30 L 15 12 L 30 15 Z"/></clipPath></defs>
                    <path d="M 50 5 L 70 15 L 85 12 L 90 30 L 95 50 L 85 70 L 75 88 L 50 95 L 25 88 L 15 70 L 5 50 L 10 30 L 15 12 L 30 15 Z" fill="#0d0e2b" stroke="#5c6bc0" stroke-width="2"/>
                    <g clip-path="url(#void-prc)">
                        <radialGradient id="prc-g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#1a1d5f"/><stop offset="100%" stop-color="#050612"/></radialGradient>
                        <path d="M 50 5 L 70 15 L 85 12 L 90 30 L 95 50 L 85 70 L 75 88 L 50 95 L 25 88 L 15 70 L 5 50 L 10 30 L 15 12 L 30 15 Z" fill="url(#prc-g)"/>
                        <!-- Royal Crown (ornate) -->
                        <path d="M 25 52 L 25 40 L 34 48 L 40 32 L 50 42 L 60 32 L 66 48 L 75 40 L 75 52 Z" fill="#5c6bc0" stroke="#9fa8da" stroke-width="1.5"/>
                        <rect x="25" y="52" width="50" height="12" rx="3" fill="#3949ab" stroke="#9fa8da" stroke-width="1.5"/>
                        <!-- Crown jewels (ornate row) -->
                        <circle cx="50" cy="40" r="5" fill="#d4af37" stroke="#fff" stroke-width="1"/>
                        <circle cx="36" cy="46" r="3" fill="#e91e63" stroke="#fff" stroke-width="0.8"/>
                        <circle cx="64" cy="46" r="3" fill="#2ecc71" stroke="#fff" stroke-width="0.8"/>
                        <circle cx="28" cy="50" r="2" fill="#d4af37"/>
                        <circle cx="72" cy="50" r="2" fill="#d4af37"/>
                        <!-- Sceptre -->
                        <line x1="50" y1="64" x2="50" y2="88" stroke="#d4af37" stroke-width="2.5"/>
                        <circle cx="50" cy="64" r="5" fill="#5c6bc0" stroke="#d4af37" stroke-width="1.5"/>
                        <polygon points="50,25 53,33 50,31 47,33" fill="#d4af37"/>
                        <!-- Royal cape suggestion -->
                        <path d="M 25 52 Q 15 65 20 80" fill="none" stroke="#9fa8da" stroke-width="1.5" opacity="0.5"/>
                        <path d="M 75 52 Q 85 65 80 80" fill="none" stroke="#9fa8da" stroke-width="1.5" opacity="0.5"/>
                        <!-- Stars of royalty -->
                        <circle cx="20" cy="30" r="1.5" fill="#d4af37"/><circle cx="80" cy="28" r="1.5" fill="#d4af37"/>
                        <circle cx="18" cy="62" r="1" fill="#9fa8da"/><circle cx="82" cy="62" r="1" fill="#9fa8da"/>
                    </g>
                    <path d="M 50 5 L 50 0 M 85 12 L 92 6 M 15 12 L 8 6 M 95 50 L 102 50 M 5 50 L -2 50 M 75 88 L 80 96 M 25 88 L 20 96" stroke="#5c6bc0" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "lgl-20-al": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><clipPath id="void-lgl"><path d="M 50 10 Q 80 10 85 40 Q 90 65 70 85 Q 60 95 50 95 Q 40 95 30 85 Q 10 65 15 40 Q 20 10 50 10 Z"/></clipPath></defs>
                    <path d="M 50 10 Q 80 10 85 40 Q 90 65 70 85 Q 60 95 50 95 Q 40 95 30 85 Q 10 65 15 40 Q 20 10 50 10 Z" fill="#2a0a1c" stroke="#f06292" stroke-width="2"/>
                    <g clip-path="url(#void-lgl)">
                        <radialGradient id="lgl-g" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#4a1030"/><stop offset="100%" stop-color="#100408"/></radialGradient>
                        <path d="M 50 10 Q 80 10 85 40 Q 90 65 70 85 Q 60 95 50 95 Q 40 95 30 85 Q 10 65 15 40 Q 20 10 50 10 Z" fill="url(#lgl-g)"/>
                        <!-- Curtain/drapes being peeked through -->
                        <path d="M 15 15 Q 18 50 15 85 L 38 85 L 38 15 Z" fill="#1a0810" stroke="#f06292" stroke-width="1" opacity="0.8"/>
                        <path d="M 85 15 Q 82 50 85 85 L 62 85 L 62 15 Z" fill="#1a0810" stroke="#f06292" stroke-width="1" opacity="0.8"/>
                        <!-- Gap in curtains — child peeking eye zone -->
                        <path d="M 38 35 Q 50 28 62 35 Q 62 65 50 72 Q 38 65 38 35 Z" fill="#2a0a1c"/>
                        <!-- The peeping eye -->
                        <path d="M 38 50 Q 50 38 62 50 Q 50 62 38 50 Z" fill="rgba(240,98,146,0.15)" stroke="#f06292" stroke-width="1.5"/>
                        <circle cx="50" cy="50" r="8" fill="#f06292" opacity="0.8"/>
                        <circle cx="50" cy="50" r="4" fill="#2a0a1c"/>
                        <circle cx="48" cy="48" r="1.5" fill="#fff"/>
                        <!-- Child's small hand on curtain edge -->
                        <path d="M 38 60 L 34 56 M 38 64 L 33 62 M 38 68 L 35 70" stroke="#f06292" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
                        <!-- Sparkle / innocent stars -->
                        <circle cx="68" cy="25" r="1.5" fill="#f8bbd0"/><circle cx="78" cy="40" r="1" fill="#f8bbd0"/>
                        <circle cx="72" cy="55" r="1" fill="#f8bbd0"/>
                        <!-- Warning glint if caught -->
                        <path d="M 25 25 L 28 28 M 28 25 L 25 28" stroke="#e53935" stroke-width="1" opacity="0.5"/>
                    </g>
                    <path d="M 50 10 L 50 4 M 85 40 L 93 36 M 90 65 L 98 68 M 15 40 L 7 36 M 10 65 L 2 68 M 70 85 L 75 93 M 30 85 L 25 93" stroke="#f06292" stroke-width="1" opacity="0.3"/>
                </svg>`,

    "card-back": `<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bg-grad" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stop-color="#1c1608"/>
                            <stop offset="60%" stop-color="#0d0b04"/>
                            <stop offset="100%" stop-color="#050502"/>
                        </radialGradient>
                        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#fffde0"/>
                            <stop offset="60%" stop-color="#f5e090"/>
                            <stop offset="100%" stop-color="#d4af37"/>
                        </radialGradient>
                        <filter id="glow-gold">
                            <feGaussianBlur stdDeviation="1.5" result="blur"/>
                            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                        <filter id="glow-soft">
                            <feGaussianBlur stdDeviation="2.5" result="blur"/>
                            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                        <clipPath id="card-clip">
                            <rect x="0" y="0" width="100" height="100"/>
                        </clipPath>
                    </defs>

                    <!-- Deep background -->
                    <rect x="0" y="0" width="100" height="100" fill="url(#bg-grad)"/>

                    <!-- === OUTER BORDER FRAME === -->
                    <!-- Outermost thin gold line -->
                    <rect x="2.5" y="2.5" width="95" height="95" rx="1" fill="none" stroke="#d4af37" stroke-width="0.6" opacity="0.7"/>
                    <!-- Second border -->
                    <rect x="4" y="4" width="92" height="92" rx="0.5" fill="none" stroke="#8b7320" stroke-width="0.4" opacity="0.5"/>
                    <!-- Inner frame with pattern -->
                    <rect x="6" y="6" width="88" height="88" rx="0.5" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.9"/>
                    <!-- Innermost thin accent -->
                    <rect x="8" y="8" width="84" height="84" rx="0.5" fill="none" stroke="#c8a020" stroke-width="0.4" opacity="0.6"/>

                    <!-- === CORNER ORNAMENTS === -->
                    <!-- Top-left corner -->
                    <path d="M 6 18 L 6 6 L 18 6" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="6" cy="6" r="1.5" fill="#d4af37"/>
                    <path d="M 9 15 L 9 9 L 15 9" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.6"/>
                    <!-- Top-right corner -->
                    <path d="M 94 18 L 94 6 L 82 6" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="94" cy="6" r="1.5" fill="#d4af37"/>
                    <path d="M 91 15 L 91 9 L 85 9" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.6"/>
                    <!-- Bottom-left corner -->
                    <path d="M 6 82 L 6 94 L 18 94" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="6" cy="94" r="1.5" fill="#d4af37"/>
                    <path d="M 9 85 L 9 91 L 15 91" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.6"/>
                    <!-- Bottom-right corner -->
                    <path d="M 94 82 L 94 94 L 82 94" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="94" cy="94" r="1.5" fill="#d4af37"/>
                    <path d="M 91 85 L 91 91 L 85 91" fill="none" stroke="#d4af37" stroke-width="0.8" opacity="0.6"/>

                    <!-- === TOP HEADER SECTION === -->
                    <!-- Top divider line with flourish -->
                    <line x1="12" y1="20" x2="40" y2="20" stroke="#d4af37" stroke-width="0.7" opacity="0.8"/>
                    <line x1="60" y1="20" x2="88" y2="20" stroke="#d4af37" stroke-width="0.7" opacity="0.8"/>
                    <circle cx="50" cy="20" r="2" fill="#d4af37" opacity="0.9"/>
                    <circle cx="41" cy="20" r="1" fill="#d4af37" opacity="0.6"/>
                    <circle cx="59" cy="20" r="1" fill="#d4af37" opacity="0.6"/>

                    <!-- === MOON IN CENTER === -->
                    <!-- Outer moon halo -->
                    <circle cx="50" cy="47" r="24" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.3"/>
                    <circle cx="50" cy="47" r="21" fill="none" stroke="#d4af37" stroke-width="0.4" opacity="0.4" stroke-dasharray="2 3"/>
                    <!-- Moon glow bloom -->
                    <circle cx="50" cy="47" r="18" fill="#d4af37" opacity="0.08" filter="url(#glow-soft)"/>
                    <!-- Moon body -->
                    <circle cx="50" cy="47" r="15" fill="url(#moon-glow)" filter="url(#glow-gold)"/>
                    <!-- Moon surface craters -->
                    <circle cx="45" cy="43" r="2.5" fill="#c49b28" opacity="0.5"/>
                    <circle cx="54" cy="50" r="3" fill="#b88f20" opacity="0.4"/>
                    <circle cx="47" cy="54" r="1.8" fill="#c49b28" opacity="0.35"/>
                    <circle cx="53" cy="42" r="1.2" fill="#b88f20" opacity="0.45"/>
                    <!-- Moon sheen (highlight) -->
                    <ellipse cx="44" cy="41" rx="4" ry="2.5" fill="#fffde0" opacity="0.35" transform="rotate(-20 44 41)"/>




                    <!-- === CONSTELLATION / STARS === -->
                    <!-- Orion-like pattern top-left -->
                    <circle cx="15" cy="30" r="0.9" fill="#d4af37" opacity="0.85"/>
                    <circle cx="19" cy="25" r="1.2" fill="#d4af37" opacity="0.9"/>
                    <circle cx="23" cy="28" r="0.8" fill="#d4af37" opacity="0.7"/>
                    <line x1="15" y1="30" x2="19" y2="25" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
                    <line x1="19" y1="25" x2="23" y2="28" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
                    <!-- Stars top-right -->
                    <circle cx="78" cy="22" r="1.1" fill="#d4af37" opacity="0.9"/>
                    <circle cx="83" cy="28" r="0.7" fill="#d4af37" opacity="0.7"/>
                    <circle cx="74" cy="30" r="0.9" fill="#d4af37" opacity="0.8"/>
                    <line x1="78" y1="22" x2="83" y2="28" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
                    <line x1="78" y1="22" x2="74" y2="30" stroke="#d4af37" stroke-width="0.4" opacity="0.4"/>
                    <!-- Scattered stars -->
                    <circle cx="13" cy="50" r="0.8" fill="#d4af37" opacity="0.6"/>
                    <circle cx="87" cy="45" r="1" fill="#d4af37" opacity="0.7"/>
                    <circle cx="16" cy="60" r="0.7" fill="#c8a020" opacity="0.5"/>
                    <circle cx="85" cy="60" r="0.7" fill="#c8a020" opacity="0.5"/>
                    <circle cx="30" cy="15" r="0.9" fill="#d4af37" opacity="0.65"/>
                    <circle cx="70" cy="14" r="0.8" fill="#d4af37" opacity="0.6"/>

                    <!-- === BOTTOM DIVIDER === -->
                    <line x1="12" y1="75" x2="37" y2="75" stroke="#d4af37" stroke-width="0.7" opacity="0.7"/>
                    <line x1="63" y1="75" x2="88" y2="75" stroke="#d4af37" stroke-width="0.7" opacity="0.7"/>
                    <!-- Small diamond center -->
                    <path d="M 50 72 L 52 75 L 50 78 L 48 75 Z" fill="#d4af37" opacity="0.8"/>

                    <!-- === OWNER NAME: MRSETIAWAN === -->
                    <text x="50" y="86" font-family="Cinzel, Georgia, serif" font-size="5.2" font-weight="700" fill="#d4af37" text-anchor="middle" letter-spacing="2.5" opacity="0.95" filter="url(#glow-gold)">MRSETIAWAN</text>



                    <!-- === SIDE TICK MARKS === -->
                    <line x1="6" y1="40" x2="8" y2="40" stroke="#d4af37" stroke-width="1" opacity="0.6"/>
                    <line x1="6" y1="50" x2="8" y2="50" stroke="#d4af37" stroke-width="0.8" opacity="0.4"/>
                    <line x1="6" y1="60" x2="8" y2="60" stroke="#d4af37" stroke-width="1" opacity="0.6"/>
                    <line x1="94" y1="40" x2="92" y2="40" stroke="#d4af37" stroke-width="1" opacity="0.6"/>
                    <line x1="94" y1="50" x2="92" y2="50" stroke="#d4af37" stroke-width="0.8" opacity="0.4"/>
                    <line x1="94" y1="60" x2="92" y2="60" stroke="#d4af37" stroke-width="1" opacity="0.6"/>
                </svg>`
};
