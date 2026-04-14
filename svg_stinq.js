const stinqArt = {
    "mod-01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-m-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#C9A84C" />
                                    <stop offset="100%" stop-color="#2C2C2C" />
                                </radialGradient>
                                <linearGradient id="t1-brass" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#E5C77A"/>
                                    <stop offset="50%" stop-color="#9C7E30"/>
                                    <stop offset="100%" stop-color="#544111"/>
                                </linearGradient>
                            </defs>
                            <!-- BG: Gear & Steam -->
                            <rect width="100" height="100" fill="url(#t1-m-bg)"/>
                            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#544111" stroke-width="2" opacity="0.3"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A84C" stroke-width="4" stroke-dasharray="8 4" opacity="0.5"/>
                            <circle cx="20" cy="20" r="15" fill="none" stroke="#1A1A1A" stroke-width="6" stroke-dasharray="4 2"/>
                            <circle cx="80" cy="80" r="20" fill="none" stroke="#1A1A1A" stroke-width="8" stroke-dasharray="5 3"/>
                            
                            <!-- MG: The Machine -->
                            <path d="M 30 100 L 30 70 C 30 60 40 50 50 50 C 60 50 70 60 70 70 L 70 100 Z" fill="#2C2C2C" stroke="#1a1a1a" stroke-width="2"/>
                            
                            <!-- FG: Judge Face/Gavel -->
                            <circle cx="50" cy="45" r="18" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="50" cy="45" r="12" fill="#2C2C2C"/>
                            <!-- Glowing Eye -->
                            <circle cx="50" cy="45" r="4" fill="#F9F7F2" filter="drop-shadow(0 0 3px #C9A84C)"/>
                            <!-- Gavel Crossed -->
                            <path d="M 15 80 L 85 40" stroke="#1A1A1A" stroke-width="6" stroke-linecap="round"/>
                            <path d="M 15 80 L 85 40" stroke="url(#t1-brass)" stroke-width="4" stroke-linecap="round"/>
                            <rect x="75" y="30" width="15" height="20" fill="#2C2C2C" stroke="url(#t1-brass)" stroke-width="2" transform="rotate(-30 82 40)"/>
                            <!-- Steam vents -->
                            <path d="M 35 65 Q 25 55 10 60" fill="none" stroke="#C9A84C" stroke-width="3" opacity="0.6"/>
                            <path d="M 65 65 Q 75 55 90 60" fill="none" stroke="#C9A84C" stroke-width="3" opacity="0.6"/>
                        </svg>`,
    "ser-02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-s-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#C0C0C0" />
                                    <stop offset="100%" stop-color="#1A2744" />
                                </radialGradient>
                                <linearGradient id="t1-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#ffffff"/>
                                    <stop offset="50%" stop-color="#6b8cc7"/>
                                    <stop offset="100%" stop-color="#1A2744"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-s-bg)"/>
                            <!-- BG grid lines -->
                            <path d="M 0 20 L 100 20 M 0 40 L 100 40 M 0 60 L 100 60 M 0 80 L 100 80" stroke="#1A2744" stroke-width="1" opacity="0.3"/>
                            
                            <!-- MG: Optic Mount -->
                            <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50 Z" fill="#2C2C2C" stroke="#C0C0C0" stroke-width="2"/>
                            
                            <!-- FG: Mechanical Eye Array -->
                            <circle cx="50" cy="50" r="22" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="3"/>
                            <circle cx="50" cy="50" r="16" fill="url(#t1-glass)"/>
                            <circle cx="50" cy="50" r="8" fill="#F9F7F2" filter="drop-shadow(0 0 5px #fff)"/>
                            <!-- Extruding lenses -->
                            <circle cx="30" cy="40" r="10" fill="url(#t1-glass)" stroke="url(#t1-brass)" stroke-width="2"/>
                            <circle cx="70" cy="60" r="8" fill="url(#t1-glass)" stroke="url(#t1-brass)" stroke-width="2"/>
                            <!-- Wires -->
                            <path d="M 50 72 C 40 90 20 80 0 90" fill="none" stroke="#C0C0C0" stroke-width="4"/>
                            <path d="M 50 28 C 60 10 80 20 100 10" fill="none" stroke="#1A1A1A" stroke-width="3"/>
                        </svg>`,
    "ww-03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-w-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#8B1A1A" />
                                    <stop offset="100%" stop-color="#2C2C2C" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-w-bg)"/>
                            <!-- Smoke/Steam BG -->
                            <circle cx="20" cy="80" r="25" fill="#1a1a1a" opacity="0.4"/>
                            <circle cx="80" cy="20" r="30" fill="#1a1a1a" opacity="0.4"/>
                            
                            <!-- MG: Pipes -->
                            <rect x="10" y="0" width="8" height="100" fill="#3A3A3A" stroke="#1A1A1A" stroke-width="2"/>
                            <rect x="80" y="0" width="12" height="100" fill="#3A3A3A" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- FG: Mechanical Wolf Skull -->
                            <path d="M 30 20 L 70 20 L 80 50 L 65 80 L 50 85 L 35 80 L 20 50 Z" fill="#2C2C2C" stroke="url(#t1-brass)" stroke-width="2"/>
                            <!-- Snout -->
                            <path d="M 40 60 L 60 60 L 55 95 L 45 95 Z" fill="#1A1A1A"/>
                            <polygon points="45,95 50,105 55,95" fill="url(#t1-brass)"/>
                            <!-- Razor Teeth -->
                            <polygon points="40,60 45,75 48,60" fill="#F9F7F2"/>
                            <polygon points="60,60 55,75 52,60" fill="#F9F7F2"/>
                            <!-- Glowing Red Eyes -->
                            <polygon points="35,40 45,45 40,55 30,50" fill="#8B1A1A"/>
                            <polygon points="65,40 55,45 60,55 70,50" fill="#8B1A1A"/>
                            <!-- Steam Exhaust -->
                            <path d="M 25 30 Q 15 20 0 25" fill="none" stroke="#F9F7F2" stroke-width="4" opacity="0.5"/>
                            <path d="M 75 30 Q 85 20 100 25" fill="none" stroke="#F9F7F2" stroke-width="4" opacity="0.5"/>
                        </svg>`,
    "jes-04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-j-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#555" />
                                    <stop offset="100%" stop-color="#1A1A1A" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-j-bg)"/>
                            
                            <!-- MG: The Box -->
                            <rect x="25" y="70" width="50" height="40" fill="#2C2C2C" stroke="#F5F0E8" stroke-width="2"/>
                            <line x1="35" y1="70" x2="35" y2="100" stroke="#1a1a1a" stroke-width="2"/>
                            <line x1="65" y1="70" x2="65" y2="100" stroke="#1a1a1a" stroke-width="2"/>
                            
                            <!-- FG: Spring & Broken Mask -->
                            <!-- Spring -->
                            <path d="M 50 70 Q 30 65 50 60 Q 70 55 50 50" fill="none" stroke="url(#t1-brass)" stroke-width="6"/>
                            <!-- Mask Base -->
                            <path d="M 25 30 C 25 10 75 10 75 30 C 75 50 60 55 50 60 C 40 55 25 50 25 30 Z" fill="#F5F0E8" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Face Paint/Gears -->
                            <path d="M 25 30 Q 35 35 45 30" fill="none" stroke="#1A1A1A" stroke-width="3"/>
                            <path d="M 75 30 Q 65 35 55 30" fill="none" stroke="#1A1A1A" stroke-width="3"/>
                            <!-- Smile stitched -->
                            <path d="M 35 45 Q 50 55 65 45" fill="none" stroke="#1A1A1A" stroke-width="2"/>
                            <line x1="40" y1="44" x2="42" y2="48" stroke="#1A1A1A" stroke-width="2"/>
                            <line x1="50" y1="46" x2="50" y2="52" stroke="#1A1A1A" stroke-width="2"/>
                            <line x1="60" y1="44" x2="58" y2="48" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Hat/Bells -->
                            <path d="M 30 20 Q 10 0 0 20" fill="none" stroke="#1A1A1A" stroke-width="8"/>
                            <circle cx="0" cy="20" r="5" fill="url(#t1-brass)"/>
                            <path d="M 70 20 Q 90 0 100 20" fill="none" stroke="#1A1A1A" stroke-width="8"/>
                            <circle cx="100" cy="20" r="5" fill="url(#t1-brass)"/>
                        </svg>`,
    "aw-05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-aw-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#8B1A1A" />
                                    <stop offset="100%" stop-color="#1A1A1A" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-aw-bg)"/>
                            <!-- Background Claw Marks -->
                            <path d="M 20 80 Q 40 40 60 10" fill="none" stroke="#2C2C2C" stroke-width="6" opacity="0.6"/>
                            <path d="M 40 90 Q 60 50 80 20" fill="none" stroke="#2C2C2C" stroke-width="6" opacity="0.6"/>
                            <path d="M 60 100 Q 80 60 100 30" fill="none" stroke="#2C2C2C" stroke-width="6" opacity="0.6"/>
                            
                            <!-- MG: Heavier frame -->
                            <path d="M 10 20 L 90 20 L 90 80 L 10 80 Z" fill="none" stroke="#3A3A3A" stroke-width="4"/>
                            
                            <!-- FG: Alpha Wolf Skull Detail -->
                            <path d="M 20 15 L 80 15 L 90 45 L 70 85 L 50 95 L 30 85 L 10 45 Z" fill="#1A1A1A" stroke="url(#t1-brass)" stroke-width="3"/>
                            <!-- Snout -->
                            <path d="M 35 55 L 65 55 L 55 95 L 45 95 Z" fill="#2C2C2C" stroke="url(#t1-brass)" stroke-width="2"/>
                            <!-- Alpha symbol inscribed on forehead -->
                            <path d="M 50 25 L 40 45 M 50 25 L 60 45 M 42 40 L 58 40" stroke="#8B1A1A" stroke-width="3" fill="none"/>
                            
                            <!-- Three Glowing Red Eyes -->
                            <polygon points="30,45 40,50 35,60 25,55" fill="#8B1A1A"/>
                            <polygon points="70,45 60,50 65,60 75,55" fill="#8B1A1A"/>
                            <circle cx="50" cy="40" r="5" fill="#F9F7F2" filter="drop-shadow(0 0 4px #8B1A1A)"/>
                            
                            <!-- Huge Razor Teeth -->
                            <polygon points="35,55 45,75 45,55" fill="#F9F7F2"/>
                            <polygon points="65,55 55,75 55,55" fill="#F9F7F2"/>
                            <polygon points="45,55 50,85 55,55" fill="#F9F7F2"/>
                        </svg>`,
    "cup-06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-cup-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#C0C0C0" />
                                    <stop offset="100%" stop-color="#1A2744" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-cup-bg)"/>
                            <!-- MG: Wing Gears -->
                            <path d="M 50 50 Q 20 20 10 50 C 10 70 30 70 50 50" fill="none" stroke="#2C2C2C" stroke-width="6"/>
                            <circle cx="15" cy="50" r="8" fill="none" stroke="url(#t1-brass)" stroke-width="3" stroke-dasharray="4 2"/>
                            <path d="M 50 50 Q 80 20 90 50 C 90 70 70 70 50 50" fill="none" stroke="#2C2C2C" stroke-width="6"/>
                            <circle cx="85" cy="50" r="8" fill="none" stroke="url(#t1-brass)" stroke-width="3" stroke-dasharray="4 2"/>
                            <!-- FG: Mechanical Bow -->
                            <path d="M 30 20 Q 50 10 70 20 Q 80 50 70 80 Q 50 90 30 80" fill="none" stroke="url(#t1-brass)" stroke-width="4"/>
                            <!-- Bow String -->
                            <path d="M 30 20 L 10 50 L 30 80" fill="none" stroke="#F9F7F2" stroke-width="1" opacity="0.6"/>
                            <!-- Glowing Heart Arrow -->
                            <path d="M 10 50 L 80 50" stroke="#F9F7F2" stroke-width="3" filter="drop-shadow(0 0 5px #6b8cc7)"/>
                            <path d="M 80 50 L 70 45 L 70 55 Z" fill="#F9F7F2" filter="drop-shadow(0 0 5px #6b8cc7)"/>
                            <!-- Heart shape at tip -->
                            <path d="M 82 48 C 82 45 86 45 88 48 C 90 45 94 45 94 48 C 94 52 88 56 88 56 C 88 56 82 52 82 48 Z" fill="#6b8cc7" stroke="#1A1A1A" stroke-width="1" transform="rotate(-90 88 50) translate(-3 6)"/>
                             <!-- Fletching -->
                             <path d="M 10 50 L 5 45 L 20 50 L 5 55 Z" fill="#C0C0C0"/>
                        </svg>`,
    "ww-07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-w2-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#5a1818" />
                                    <stop offset="100%" stop-color="#111" />
                                </radialGradient>
                                <linearGradient id="t1-steel" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#A0A0A0"/>
                                    <stop offset="100%" stop-color="#3A3A3A"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-w2-bg)"/>
                            <!-- Background Gears -->
                            <path d="M 0 0 L 100 100 M 100 0 L 0 100" stroke="#2a0a0a" stroke-width="4" opacity="0.3"/>
                            <circle cx="50" cy="50" r="35" fill="none" stroke="#2a0a0a" stroke-width="6" stroke-dasharray="10 5" opacity="0.4"/>
                            
                            <!-- MG: Giant Mechanical Claw -->
                            <!-- Arm base -->
                            <path d="M 20 100 L 40 60 L 60 70 L 40 110 Z" fill="url(#t1-steel)" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Claw Joint -->
                            <circle cx="45" cy="60" r="10" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="45" cy="60" r="4" fill="#1A1A1A"/>
                            
                            <!-- FG: Claws swooping down -->
                            <!-- Claw 1 -->
                            <path d="M 40 60 Q 20 20 10 30 Q 30 50 45 65 Z" fill="url(#t1-steel)" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Claw 2 -->
                            <path d="M 45 55 Q 40 10 30 15 Q 45 45 50 60 Z" fill="url(#t1-steel)" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Claw 3 -->
                            <path d="M 50 55 Q 70 15 65 20 Q 60 45 55 60 Z" fill="url(#t1-steel)" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Blood/Oil drips -->
                            <path d="M 15 35 Q 15 45 15 50 M 32 20 Q 32 30 32 35 M 63 25 Q 63 40 63 45" stroke="#8B1A1A" stroke-width="2" stroke-linecap="round"/>
                        </svg>`,
    "lw-08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-lw-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4a4f5c" />
                                    <stop offset="100%" stop-color="#1a1a1a" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-lw-bg)"/>
                            
                            <!-- BG: Dimmed Full Moon -->
                            <circle cx="50" cy="40" r="25" fill="#AAAAAA" opacity="0.3"/>
                            
                            <!-- MG: Cliff Edge/Gears -->
                            <path d="M 0 100 L 40 65 L 60 70 L 100 100 Z" fill="#2C2C2C" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="30" cy="80" r="15" fill="none" stroke="url(#t1-brass)" stroke-width="4" stroke-dasharray="5 3"/>
                            
                            <!-- FG: Solitary Wolf Profile -->
                            <path d="M 40 65 Q 45 45 60 30 Q 75 40 65 60 L 60 60 L 55 70 Z" fill="#1A1A1A" stroke="#5A5A5A" stroke-width="2"/>
                            <!-- Snout howling up -->
                            <path d="M 60 30 L 75 15 L 80 25 L 70 35 Z" fill="#1A1A1A" stroke="#5A5A5A" stroke-width="2"/>
                            
                            <!-- Solitary Glowing Eye -->
                            <circle cx="65" cy="30" r="2" fill="#F9F7F2" filter="drop-shadow(0 0 3px #fff)"/>
                            
                            <!-- Chains trailing -->
                            <path d="M 50 60 Q 30 70 20 90" fill="none" stroke="url(#t1-brass)" stroke-width="2" stroke-dasharray="4 2"/>
                        </svg>`,
    "gd-09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-gua-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#2a3f54" />
                                    <stop offset="100%" stop-color="#0e151c" />
                                </radialGradient>
                                <linearGradient id="t1-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#C0C0C0"/>
                                    <stop offset="100%" stop-color="#4A4A4A"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-gua-bg)"/>
                            
                            <!-- BG Lines -->
                            <path d="M 10 10 L 90 90 M 90 10 L 10 90" stroke="#4a4f5c" stroke-width="2" opacity="0.4"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#4a4f5c" stroke-width="4" stroke-dasharray="10 10" opacity="0.3"/>
                            
                            <!-- MG: Base Shield shape -->
                            <path d="M 20 20 L 80 20 L 80 50 Q 80 80 50 95 Q 20 80 20 50 Z" fill="url(#t1-shield)" stroke="#1a1a1a" stroke-width="4"/>
                            <path d="M 30 30 L 70 30 L 70 50 Q 70 70 50 80 Q 30 70 30 50 Z" fill="#2C2C2C" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- FG: Energy Core and Gears -->
                            <circle cx="50" cy="45" r="15" fill="none" stroke="url(#t1-brass)" stroke-width="6" stroke-dasharray="8 4"/>
                            <circle cx="50" cy="45" r="10" fill="#6b8cc7" filter="drop-shadow(0 0 8px #6b8cc7)"/>
                            <!-- Lock details -->
                            <rect x="45" y="65" width="10" height="15" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="50" cy="72" r="3" fill="#1a1a1a"/>
                        </svg>`,
    "wt-10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-wit-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#3d2b4a" />
                                    <stop offset="100%" stop-color="#140b1a" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-wit-bg)"/>
                            
                            <!-- BG: Alchemy circles -->
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#9065b0" stroke-width="2" opacity="0.4"/>
                            <polygon points="50,15 85,75 15,75" fill="none" stroke="#9065b0" stroke-width="1" opacity="0.3"/>
                            
                            <!-- Flask 1: Life (Green) -->
                            <!-- Stand/Holder -->
                            <path d="M 25 35 L 55 90 T 50 95 L 15 35 Z" fill="#2c2c2c" stroke="#1a1a1a" stroke-width="2"/>
                            <!-- Vial -->
                            <rect x="25" y="25" width="14" height="35" rx="7" fill="#1a1a1a" stroke="url(#t1-glass)" stroke-width="2" transform="rotate(-30 32 40)"/>
                            <rect x="26" y="35" width="12" height="20" rx="3" fill="#4caf50" transform="rotate(-30 32 40)" filter="drop-shadow(0 0 5px #4caf50)"/>
                            <!-- Gear cap -->
                            <rect x="28" y="20" width="8" height="6" fill="url(#t1-brass)" transform="rotate(-30 32 40)"/>
                            
                            <!-- Flask 2: Death (Red/Magenta) -->
                            <!-- Stand/Holder -->
                            <path d="M 75 35 L 45 90 T 50 95 L 85 35 Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Vial -->
                            <rect x="61" y="25" width="14" height="35" rx="7" fill="#1a1a1a" stroke="url(#t1-glass)" stroke-width="2" transform="rotate(30 68 40)"/>
                            <rect x="62" y="35" width="12" height="20" rx="3" fill="#e91e63" transform="rotate(30 68 40)" filter="drop-shadow(0 0 5px #e91e63)"/>
                            <!-- Gear cap -->
                            <rect x="64" y="20" width="8" height="6" fill="url(#t1-brass)" transform="rotate(30 68 40)"/>
                            
                            <!-- Cross point gears -->
                            <circle cx="50" cy="70" r="10" fill="#3a3a3a" stroke="url(#t1-brass)" stroke-width="3" stroke-dasharray="6 3"/>
                            <circle cx="50" cy="70" r="3" fill="#1a1a1a"/>
                        </svg>`,
    "wz-11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-wiz-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#142850" />
                                    <stop offset="100%" stop-color="#0a1428" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-wiz-bg)"/>
                            
                            <!-- BG: Signal Waves -->
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#27496d" stroke-width="2" stroke-dasharray="4 8" opacity="0.6"/>
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#00909e" stroke-width="2" stroke-dasharray="2 6" opacity="0.8"/>
                            
                            <!-- MG: Floating Tech-Orb -->
                            <circle cx="50" cy="50" r="15" fill="#142850" stroke="url(#t1-brass)" stroke-width="4"/>
                            <circle cx="50" cy="50" r="10" fill="#00909e" filter="drop-shadow(0 0 10px #00909e)"/>
                            
                            <!-- FG: Energy Lightning / Jamming signals -->
                            <path d="M 50 35 L 45 20 L 55 10 L 50 0" fill="none" stroke="#dae1e7" stroke-width="2" filter="drop-shadow(0 0 5px #00909e)"/>
                            <path d="M 50 65 L 55 80 L 45 90 L 50 100" fill="none" stroke="#dae1e7" stroke-width="2" filter="drop-shadow(0 0 5px #00909e)"/>
                            <path d="M 35 50 L 20 45 L 10 55 L 0 50" fill="none" stroke="#dae1e7" stroke-width="2" filter="drop-shadow(0 0 5px #00909e)"/>
                            <path d="M 65 50 L 80 55 L 90 45 L 100 50" fill="none" stroke="#dae1e7" stroke-width="2" filter="drop-shadow(0 0 5px #00909e)"/>
                            
                            <!-- Metallic Rings circling the orb -->
                            <ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="#A0A0A0" stroke-width="3" transform="rotate(30 50 50)"/>
                            <ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="#A0A0A0" stroke-width="3" transform="rotate(-60 50 50)"/>
                        </svg>`,
    "hn-12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-hun-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4e342e" />
                                    <stop offset="100%" stop-color="#1c1311" />
                                </radialGradient>
                                <linearGradient id="t1-gun" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#A0A0A0"/>
                                    <stop offset="100%" stop-color="#2C2C2C"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-hun-bg)"/>
                            
                            <!-- BG: Crosshair -->
                            <circle cx="50" cy="50" r="35" fill="none" stroke="#ff5722" stroke-width="2" opacity="0.3"/>
                            <line x1="15" y1="50" x2="85" y2="50" stroke="#ff5722" stroke-width="1" opacity="0.4"/>
                            <line x1="50" y1="15" x2="50" y2="85" stroke="#ff5722" stroke-width="1" opacity="0.4"/>
                            
                            <!-- MG: Steampunk Shotgun/Rifle -->
                            <!-- Stock -->
                            <path d="M 0 100 L 25 75 L 35 85 L 10 110 Z" fill="#5d4037" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Mechanism -->
                            <rect x="25" y="65" width="20" height="20" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="3" transform="rotate(-45 35 75)"/>
                            <!-- Barrels -->
                            <rect x="35" y="35" width="50" height="10" fill="url(#t1-gun)" stroke="#1A1A1A" stroke-width="2" transform="rotate(-45 35 75)"/>
                            <rect x="38" y="45" width="45" height="8" fill="url(#t1-gun)" stroke="#1A1A1A" stroke-width="2" transform="rotate(-45 35 75)"/>
                            
                            <!-- FG: Scope & Smoke -->
                            <circle cx="45" cy="55" r="8" fill="#1A1A1A" stroke="#A0A0A0" stroke-width="3"/>
                            <circle cx="45" cy="55" r="4" fill="#ff5722"/>
                            <!-- Smoke from barrel -->
                            <circle cx="85" cy="15" r="10" fill="#EEEEEE" opacity="0.2" filter="drop-shadow(0 0 10px #CCC)"/>
                            <circle cx="75" cy="5" r="8" fill="#EEEEEE" opacity="0.2" filter="drop-shadow(0 0 10px #CCC)"/>
                        </svg>`,
    "vt-13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-vet-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4f4035" />
                                    <stop offset="100%" stop-color="#1c1612" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-vet-bg)"/>
                            
                            <!-- BG: Battlefield Scars -->
                            <path d="M 10 20 L 30 10 M 70 80 L 90 90 M 20 80 L 10 70 M 80 20 L 90 30" stroke="#1A1A1A" stroke-width="2" opacity="0.5"/>
                            <circle cx="50" cy="50" r="35" fill="none" stroke="#2a221c" stroke-width="6" stroke-dasharray="10 5" opacity="0.6"/>
                            
                            <!-- MG: Battered Helmet -->
                            <path d="M 25 55 C 25 20 75 20 75 55 L 75 75 L 25 75 Z" fill="#4A4A4A" stroke="#1a1a1a" stroke-width="3"/>
                            <!-- Visor -->
                            <rect x="35" y="45" width="30" height="10" rx="3" fill="#1a1a1a" stroke="url(#t1-brass)" stroke-width="2"/>
                            <rect x="40" y="47" width="20" height="6" fill="#ff5722" filter="drop-shadow(0 0 5px #ff5722)"/>
                            
                            <!-- FG: Scratches and Damage -->
                            <path d="M 30 35 L 45 30 L 40 40" fill="none" stroke="#2C2C2C" stroke-width="2"/>
                            <path d="M 65 30 L 70 40" fill="none" stroke="#2C2C2C" stroke-width="2"/>
                            <path d="M 30 65 L 45 60 L 50 70" fill="none" stroke="#2C2C2C" stroke-width="2"/>
                            <circle cx="65" cy="65" r="4" fill="#1a1a1a" stroke="url(#t1-brass)" stroke-width="1"/>
                            
                            <!-- A hanging dog tag / gear -->
                            <path d="M 50 75 L 50 90" stroke="url(#t1-brass)" stroke-width="2" stroke-dasharray="2 2"/>
                            <rect x="45" y="85" width="10" height="12" rx="2" fill="#C0C0C0" stroke="#1A1A1A" stroke-width="1" transform="rotate(15 50 90)"/>
                        </svg>`,
    "bg-14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-body-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#3d4c53" />
                                    <stop offset="100%" stop-color="#151b1e" />
                                </radialGradient>
                                <linearGradient id="t1-steel-fist" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#A0A0A0"/>
                                    <stop offset="100%" stop-color="#3A3A3A"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-body-bg)"/>
                            
                            <!-- BG: Heavy Plate Armor -->
                            <path d="M 10 10 L 90 90 M 90 10 L 10 90" stroke="#151b1e" stroke-width="10" opacity="0.3"/>
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#2C2C2C" stroke-width="4" opacity="0.5"/>
                            
                            <!-- MG: Protected Core / Heart -->
                            <circle cx="50" cy="50" r="15" fill="#1a1a1a" stroke="url(#t1-brass)" stroke-width="4"/>
                            <path d="M 50 40 C 50 35 60 30 65 40 C 70 55 50 65 50 65 C 50 65 30 55 35 40 C 40 30 50 35 50 40 Z" fill="#ff4081" filter="drop-shadow(0 0 5px #ff4081)"/>
                            
                            <!-- FG: Crossed Mechanical Fists -->
                            <!-- Left Fist -->
                            <path d="M 10 80 C 30 70 40 60 45 55 L 55 65 C 50 70 30 90 20 100 Z" fill="url(#t1-steel-fist)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="45" cy="65" r="8" fill="#4A4A4A" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="35" cy="72" r="6" fill="#4A4A4A" stroke="#1a1a1a" stroke-width="2"/>
                            
                            <!-- Right Fist -->
                            <path d="M 90 80 C 70 70 60 60 55 55 L 45 65 C 50 70 70 90 80 100 Z" fill="url(#t1-steel-fist)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="55" cy="65" r="8" fill="#4A4A4A" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="65" cy="72" r="6" fill="#4A4A4A" stroke="#1a1a1a" stroke-width="2"/>
                        </svg>`,
    "pr-15": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-pri-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#493a54" />
                                    <stop offset="100%" stop-color="#19131d" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-pri-bg)"/>
                            
                            <!-- BG: Light rays and Sacred Geometry -->
                            <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" stroke="#f6e58d" stroke-width="1" opacity="0.1"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#f6e58d" stroke-width="2" opacity="0.2" stroke-dasharray="8 4"/>
                            
                            <!-- MG: Metallic Cross Wrench -->
                            <!-- Wrench Base -->
                            <path d="M 45 30 L 55 30 L 55 85 L 45 85 Z" fill="#2C2C2C" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="50" cy="85" r="5" fill="none" stroke="url(#t1-brass)" stroke-width="2"/>
                            <!-- Crossbar Wrench endpoints -->
                            <path d="M 25 45 L 75 45 L 75 55 L 25 55 Z" fill="#2C2C2C" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- FG: Ornate Thurible / Censer core -->
                            <ellipse cx="50" cy="25" rx="15" ry="10" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="50" cy="25" r="5" fill="#f6e58d" filter="drop-shadow(0 0 8px #f6e58d)"/>
                            <path d="M 40 25 C 40 10 60 10 60 25" fill="none" stroke="url(#t1-brass)" stroke-width="2"/>
                            
                            <!-- Holy water droplets dripping -->
                            <path d="M 33 55 Q 33 65 33 70" stroke="#00909e" stroke-width="3" stroke-linecap="round"/>
                            <circle cx="33" cy="73" r="2" fill="#00909e"/>
                            <path d="M 67 55 Q 67 60 67 65" stroke="#00909e" stroke-width="3" stroke-linecap="round"/>
                        </svg>`,
    "my-16": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-myr-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#543828" />
                                    <stop offset="100%" stop-color="#1e130c" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-myr-bg)"/>
                            
                            <!-- BG: Podium / Rising Sun effect -->
                            <path d="M 50 10 L 100 100 L 0 100 Z" fill="#251810" opacity="0.6"/>
                            <circle cx="50" cy="100" r="50" fill="none" stroke="url(#t1-brass)" stroke-width="4" stroke-dasharray="10 5" opacity="0.3"/>
                            
                            <!-- MG: Megaphone -->
                            <path d="M 60 70 L 90 90 L 90 50 Z" fill="#2C2C2C" stroke="url(#t1-brass)" stroke-width="3"/>
                            <circle cx="65" cy="70" r="8" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- FG: The Top Hat & Badge -->
                            <!-- Brim -->
                            <ellipse cx="40" cy="65" rx="30" ry="8" fill="#1A1A1A" stroke="#3A3A3A" stroke-width="2" transform="rotate(-15 40 65)"/>
                            <!-- Crown -->
                            <path d="M 22 65 L 28 25 Q 40 20 52 25 L 58 65" fill="#202020" stroke="#3A3A3A" stroke-width="2" transform="rotate(-15 40 65)"/>
                            <!-- Hat band and gears -->
                            <path d="M 22 55 Q 40 60 58 55 L 58 65 Q 40 70 22 65 Z" fill="#8B1A1A" stroke="#1A1A1A" stroke-width="1" transform="rotate(-15 40 65)"/>
                            <circle cx="45" cy="60" r="5" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="1" transform="rotate(-15 40 65)"/>
                            <circle cx="35" cy="58" r="4" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="1" transform="rotate(-15 40 65)"/>
                            
                            <!-- Golden Mayor Badge -->
                            <path d="M 20 80 L 30 75 L 40 80 L 35 95 L 20 95 Z" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="30" cy="85" r="3" fill="#1A1A1A"/>
                        </svg>`,
    "sh-17": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-shr-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4e382b" />
                                    <stop offset="100%" stop-color="#140f0c" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-shr-bg)"/>
                            
                            <!-- BG: Wild West Sun & Dust -->
                            <path d="M 0 50 Q 50 20 100 50 L 100 100 L 0 100 Z" fill="#251810" opacity="0.6"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#d35400" stroke-width="1" opacity="0.4"/>
                            
                            <!-- MG: Heavy Sheriff Star Badge -->
                            <path d="M 50 15 L 60 40 L 85 40 L 65 55 L 75 80 L 50 65 L 25 80 L 35 55 L 15 40 L 40 40 Z" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="50" cy="50" r="12" fill="#2C2C2C"/>
                            <!-- Cog center inside badge -->
                            <path d="M 50 42 L 53 47 L 58 50 L 53 53 L 50 58 L 47 53 L 42 50 L 47 47 Z" fill="#A0A0A0"/>
                            
                            <!-- FG: Front-facing Revolver Barrel -->
                            <circle cx="50" cy="50" r="10" fill="#2C2C2C" stroke="#1A1A1A" stroke-width="3"/>
                            <!-- Cylinder details -->
                            <circle cx="50" cy="50" r="25" fill="none" stroke="#2C2C2C" stroke-width="8" stroke-dasharray="10 5" opacity="0.8"/>
                            <!-- Barrel hole -->
                            <circle cx="50" cy="50" r="6" fill="#000"/>
                            <!-- Bullet leaving -->
                            <circle cx="50" cy="50" r="2" fill="#ff5722" filter="drop-shadow(0 0 5px #ff5722)"/>
                            
                            <!-- Single bullet resting down -->
                            <rect x="15" y="65" width="8" height="18" rx="2" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="2" transform="rotate(-30 19 74)"/>
                            <path d="M 15 65 L 19 55 L 23 65 Z" fill="#C0C0C0" stroke="#1a1a1a" stroke-width="1" transform="rotate(-30 19 74)"/>
                        </svg>`,
    "dp-18": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-dop-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#2a3f54" />
                                    <stop offset="100%" stop-color="#111" />
                                </radialGradient>
                                <linearGradient id="t1-mirror" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#ffffff"/>
                                    <stop offset="100%" stop-color="#6b8cc7"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-dop-bg)"/>
                            
                            <!-- BG: Matrix/Wires -->
                            <path d="M 30 0 L 30 100 M 70 0 L 70 100 M 0 30 L 100 30 M 0 70 L 100 70" stroke="#6b8cc7" stroke-width="1" opacity="0.3"/>
                            
                            <!-- MG: Framed Mirror -->
                            <ellipse cx="50" cy="50" rx="35" ry="45" fill="#2C2C2C" stroke="url(#t1-brass)" stroke-width="5"/>
                            <ellipse cx="50" cy="50" rx="30" ry="40" fill="url(#t1-mirror)"/>
                            
                            <!-- Mirror Cracks -->
                            <path d="M 50 15 L 45 45 L 25 55 M 45 45 L 80 50 M 45 45 L 55 90" fill="none" stroke="#111" stroke-width="2"/>
                            <polygon points="45,45 25,55 55,90" fill="#1a1a1a" opacity="0.7"/>
                            
                            <!-- FG: The True Form revealing through crack -->
                            <!-- Red glowing eye from void -->
                            <circle cx="40" cy="55" r="4" fill="#ff4081" filter="drop-shadow(0 0 5px #ff4081)"/>
                            <!-- Gear showing behind glass -->
                            <circle cx="45" cy="65" r="12" fill="none" stroke="url(#t1-brass)" stroke-width="3" stroke-dasharray="4 2"/>
                            
                            <!-- Mask overlapping -->
                            <path d="M 60 40 C 60 20 80 20 80 40 C 80 60 70 70 60 70 Z" fill="#FFF" stroke="#A0A0A0" stroke-width="2" opacity="0.8"/>
                            <path d="M 65 45 L 75 45" stroke="#1A1A1A" stroke-width="2"/>
                        </svg>`,
    "sk-19": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-sk-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4a0f0f" />
                                    <stop offset="100%" stop-color="#0e0505" />
                                </radialGradient>
                                <linearGradient id="t1-blade" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#ffffff"/>
                                    <stop offset="50%" stop-color="#A0A0A0"/>
                                    <stop offset="100%" stop-color="#1A1A1A"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-sk-bg)"/>
                            
                            <!-- BG: Splatter / Chaos -->
                            <path d="M 20 20 L 80 80 M 80 20 L 20 80" stroke="#8B1A1A" stroke-width="4" opacity="0.3"/>
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#8B1A1A" stroke-width="2" stroke-dasharray="2 10" opacity="0.5"/>
                            
                            <!-- splatter drops -->
                            <circle cx="20" cy="30" r="5" fill="#8B1A1A" opacity="0.6"/>
                            <circle cx="25" cy="40" r="3" fill="#8B1A1A" opacity="0.6"/>
                            <circle cx="85" cy="65" r="4" fill="#8B1A1A" opacity="0.6"/>
                            
                            <!-- MG: Jagged Gear-Blade -->
                            <!-- Handle -->
                            <path d="M 10 90 L 30 70 L 40 80 L 20 100 Z" fill="#2C2C2C" stroke="#1a1a1a" stroke-width="2"/>
                            <rect x="15" y="75" width="20" height="6" fill="url(#t1-brass)" transform="rotate(-45 25 78)"/>
                            
                            <!-- Blade Guard -->
                            <path d="M 25 65 L 45 85 L 50 80 L 30 60 Z" fill="#4A4A4A" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- The Blade -->
                            <path d="M 35 75 L 85 25 Q 95 15 90 10 L 85 15 Q 75 25 70 30 L 65 25 Q 55 35 50 40 L 45 35 Z" fill="url(#t1-blade)" stroke="#1a1a1a" stroke-width="2"/>
                            
                            <!-- FG: Dripping Blood -->
                            <path d="M 70 30 Q 75 40 75 45" fill="none" stroke="#c0392b" stroke-width="3" stroke-linecap="round"/>
                            <circle cx="75" cy="50" r="2" fill="#c0392b"/>
                            <path d="M 50 40 Q 55 50 55 60" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="55" cy="65" r="2" fill="#c0392b"/>
                        </svg>`,
    "id-20": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-idi-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#3d4c53" />
                                    <stop offset="100%" stop-color="#14181a" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-idi-bg)"/>
                            
                            <!-- BG: Error signs -->
                            <text x="50" y="30" font-family="monospace" font-size="12" fill="#f39c12" text-anchor="middle" opacity="0.3">ERR: 404</text>
                            <text x="20" y="80" font-family="monospace" font-size="10" fill="#f39c12" opacity="0.2">GLITCH</text>
                            <text x="70" y="70" font-family="monospace" font-size="10" fill="#f39c12" opacity="0.2">SYS_FAIL</text>
                            
                            <!-- MG: Sparking, loose wires -->
                            <path d="M 0 50 Q 20 20 40 60 T 80 40 T 100 70" fill="none" stroke="#e74c3c" stroke-width="4"/>
                            <path d="M 10 80 Q 30 100 50 50 T 90 20 T 100 0" fill="none" stroke="#f1c40f" stroke-width="3" stroke-dasharray="5 5"/>
                            <path d="M 50 10 L 45 15 L 55 25 L 45 35 L 50 45" fill="none" stroke="#3498db" stroke-width="3"/>
                            
                            <!-- FG: Smashed lightbulb / core -->
                            <!-- Base -->
                            <rect x="40" y="70" width="20" height="15" fill="url(#t1-brass)" stroke="#1a1a1a" stroke-width="2"/>
                            <rect x="42" y="85" width="16" height="5" fill="#2C2C2C"/>
                            
                            <!-- Bulb Glass (Cracked) -->
                            <path d="M 40 70 C 20 50 30 20 50 20 C 70 20 80 50 60 70 Z" fill="#FFF" stroke="#6b8cc7" stroke-width="2" opacity="0.6"/>
                            <!-- Crack lines -->
                            <path d="M 50 20 L 45 40 L 55 50 L 40 60" fill="none" stroke="#1A1A1A" stroke-width="1"/>
                            <!-- Filament broken -->
                            <path d="M 45 70 L 45 50 M 55 70 L 55 45" stroke="#f39c12" stroke-width="2"/>
                            <!-- Electricity spark -->
                            <circle cx="45" cy="50" r="3" fill="#f39c12" filter="drop-shadow(0 0 5px #f39c12)"/>
                            <path d="M 45 50 L 35 40 L 30 45" fill="none" stroke="#f1c40f" stroke-width="2" filter="drop-shadow(0 0 2px #fff)"/>
                        </svg>`,
    "pc-21": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-prn-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#463116" />
                                    <stop offset="100%" stop-color="#140f04" />
                                </radialGradient>
                                <linearGradient id="t1-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#f1c40f"/>
                                    <stop offset="50%" stop-color="#d35400"/>
                                    <stop offset="100%" stop-color="#f39c12"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-prn-bg)"/>
                            
                            <!-- BG: Royal Banners / Drapery -->
                            <path d="M 0 0 L 30 0 L 20 40 L 0 30 Z" fill="#c0392b" opacity="0.5"/>
                            <path d="M 100 0 L 70 0 L 80 40 L 100 30 Z" fill="#c0392b" opacity="0.5"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#t1-gold)" stroke-width="1" stroke-dasharray="10 10" opacity="0.4"/>
                            
                            <!-- MG: Red Velvet Pillow with gears -->
                            <ellipse cx="50" cy="80" rx="35" ry="10" fill="#8B1A1A" stroke="#1a1a1a" stroke-width="2"/>
                            <!-- Pillow tassels / gears hanging -->
                            <circle cx="15" cy="80" r="3" fill="url(#t1-brass)"/>
                            <circle cx="85" cy="80" r="3" fill="url(#t1-brass)"/>
                            
                            <!-- FG: Clockwork Crown -->
                            <!-- Base band -->
                            <ellipse cx="50" cy="70" rx="25" ry="6" fill="#2C2C2C" stroke="url(#t1-gold)" stroke-width="3"/>
                            <!-- Center spire -->
                            <path d="M 50 70 L 50 25 L 55 45 L 45 45 Z" fill="url(#t1-gold)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="50" cy="25" r="5" fill="#e74c3c" filter="drop-shadow(0 0 5px #e74c3c)"/> <!-- Ruby core -->
                            <!-- Left spire -->
                            <path d="M 35 72 L 20 40 L 32 55 L 28 55 Z" fill="url(#t1-gold)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="20" cy="40" r="3" fill="#3498db"/>
                            <!-- Right spire -->
                            <path d="M 65 72 L 80 40 L 68 55 L 72 55 Z" fill="url(#t1-gold)" stroke="#1a1a1a" stroke-width="2"/>
                            <circle cx="80" cy="40" r="3" fill="#3498db"/>
                            <!-- Large gear embedded in crown -->
                            <circle cx="50" cy="55" r="10" fill="none" stroke="url(#t1-brass)" stroke-width="3" stroke-dasharray="4 2"/>
                        </svg>`,
    "lg-22": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-lgl-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#2a2438" />
                                    <stop offset="100%" stop-color="#0e0a14" />
                                </radialGradient>
                                <linearGradient id="t1-doll" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#ffeaa7"/>
                                    <stop offset="100%" stop-color="#b2bec3"/>
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-lgl-bg)"/>
                            
                            <!-- BG: Peeking through keyhole / slit -->
                            <path d="M 0 0 L 40 0 L 35 100 L 0 100 Z" fill="#000" opacity="0.8"/>
                            <path d="M 100 0 L 80 0 L 85 100 L 100 100 Z" fill="#000" opacity="0.8"/>
                            
                            <!-- MG: Shadows and fear -->
                            <path d="M 50 10 Q 70 30 50 50 T 50 90" fill="none" stroke="#6c5ce7" stroke-width="1" opacity="0.3"/>
                            
                            <!-- FG: The Hand and The Optic Device -->
                            <!-- The Brass / Porcelain Hand -->
                            <path d="M 10 90 L 30 75 Q 35 70 40 75 L 35 85 Q 45 80 50 85" fill="none" stroke="url(#t1-doll)" stroke-width="4" stroke-linecap="round"/>
                            <!-- Joints -->
                            <circle cx="30" cy="75" r="3" fill="url(#t1-brass)"/>
                            <circle cx="35" cy="85" r="3" fill="url(#t1-brass)"/>
                            
                            <!-- The Mechanical Monocle / Spy Lens -->
                            <circle cx="60" cy="45" r="18" fill="#1A1A1A" stroke="url(#t1-brass)" stroke-width="4"/>
                            <circle cx="60" cy="45" r="14" fill="#6c5ce7" opacity="0.4"/>
                            
                            <!-- Reflection/Lens crack -->
                            <path d="M 55 35 L 65 55 M 65 35 L 55 55" stroke="#FFF" stroke-width="1" opacity="0.8"/>
                            <!-- Glowing internal eye inside the lens -->
                            <ellipse cx="60" cy="45" rx="6" ry="10" fill="#a29bfe" filter="drop-shadow(0 0 5px #a29bfe)"/>
                            <circle cx="60" cy="45" r="3" fill="#000"/>
                            
                            <!-- Connecting wire/chain -->
                            <path d="M 50 85 Q 70 80 65 63" fill="none" stroke="#A0A0A0" stroke-width="2" stroke-dasharray="2 2"/>
                        </svg>`,
    "vl-23": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-vl1-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4d4133" />
                                    <stop offset="100%" stop-color="#14110b" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-vl1-bg)"/>
                            <!-- BG Gears -->
                            <path d="M 10 10 L 90 90 M 90 10 L 10 90" stroke="#f1c40f" stroke-width="2" stroke-dasharray="10 5" opacity="0.2"/>
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#2c3e50" stroke-width="5" opacity="0.5"/>
                            
                            <!-- Crossed Tools -->
                            <!-- Wrench -->
                            <path d="M 20 80 L 70 30 L 75 35 L 25 85 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <path d="M 65 35 C 65 20 85 20 85 35 C 80 35 75 40 75 45 C 70 45 65 40 65 35 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="23" cy="82" r="3" fill="#1A1A1A"/>
                            <!-- Screwdriver -->
                            <path d="M 80 80 L 30 30 L 25 35 L 75 85 Z" fill="#95a5a6" stroke="#1A1A1A" stroke-width="2"/>
                            <rect x="70" y="70" width="15" height="25" rx="3" fill="#e67e22" stroke="#1A1A1A" stroke-width="2" transform="rotate(-45 77 82)"/>
                            <!-- Center Bolt -->
                            <circle cx="50" cy="50" r="7" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <polygon points="50,45 54,48 54,52 50,55 46,52 46,48" fill="#e74c3c"/>
                        </svg>`,
    "vl-24": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-vl2-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#2c3e50" />
                                    <stop offset="100%" stop-color="#0f1419" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-vl2-bg)"/>
                            <!-- BG Coins & Ledger -->
                            <path d="M 10 30 L 90 30 M 10 50 L 90 50 M 10 70 L 90 70" stroke="#f1c40f" stroke-width="1" opacity="0.3"/>
                            
                            <!-- Balance Scale Center -->
                            <rect x="47" y="30" width="6" height="60" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <path d="M 35 90 L 65 90 L 60 85 L 40 85 Z" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Crossbar -->
                            <path d="M 20 40 L 80 40 L 80 35 L 20 35 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <!-- Center pivot -->
                            <circle cx="50" cy="37" r="5" fill="#e74c3c" stroke="#1A1A1A" stroke-width="2"/>
                            
                            <!-- Left Scale (Gear) -->
                            <path d="M 25 40 L 15 65 L 35 65 Z" fill="none" stroke="#A0A0A0" stroke-width="1"/>
                            <path d="M 15 65 C 15 75 35 75 35 65 Z" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <circle cx="25" cy="63" r="5" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="1" stroke-dasharray="2 2"/>
                            
                            <!-- Right Scale (Coins) -->
                            <path d="M 75 40 L 65 65 L 85 65 Z" fill="none" stroke="#A0A0A0" stroke-width="1"/>
                            <path d="M 65 65 C 65 75 85 75 85 65 Z" fill="url(#t1-brass)" stroke="#1A1A1A" stroke-width="2"/>
                            <ellipse cx="75" cy="62" rx="4" ry="2" fill="#f1c40f" stroke="#1A1A1A" stroke-width="1"/>
                            <ellipse cx="75" cy="60" rx="4" ry="2" fill="#f1c40f" stroke="#1A1A1A" stroke-width="1"/>
                            <ellipse cx="75" cy="58" rx="4" ry="2" fill="#f1c40f" stroke="#1A1A1A" stroke-width="1"/>
                        </svg>`,
    "vl-25": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-vl3-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#4a3e35" />
                                    <stop offset="100%" stop-color="#181512" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-vl3-bg)"/>
                            <!-- BG Chains & Smoke -->
                            <path d="M 20 0 L 20 100 M 80 0 L 80 100" stroke="#2C2C2C" stroke-width="4" stroke-dasharray="10 5" opacity="0.4"/>
                            <circle cx="50" cy="50" r="35" fill="none" stroke="#1A1A1A" stroke-width="10" opacity="0.2"/>
                            
                            <!-- MG: Heavy Robotic Work Glove reaching up -->
                            <path d="M 35 100 L 40 60 L 60 60 L 65 100 Z" fill="#524a41" stroke="#1A1A1A" stroke-width="3"/>
                            <path d="M 40 60 L 35 45 Q 40 40 45 45 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/> <!-- Palm / Base of finger -->
                            <path d="M 45 60 L 43 35 Q 50 30 52 35 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <path d="M 52 60 L 55 35 Q 60 30 62 35 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/>
                            <path d="M 60 60 L 65 45 Q 70 40 65 50 Z" fill="#7f8c8d" stroke="#1A1A1A" stroke-width="2"/> <!-- Thumb/Pinky -->
                            
                            <!-- Joint Rivets -->
                            <circle cx="45" cy="55" r="2" fill="url(#t1-brass)"/>
                            <circle cx="52" cy="55" r="2" fill="url(#t1-brass)"/>
                            <circle cx="59" cy="55" r="2" fill="url(#t1-brass)"/>
                            
                            <!-- FG: Glowing Coal / Power Cell -->
                            <polygon points="50,25 60,35 50,45 40,35" fill="#f39c12" filter="drop-shadow(0 0 10px #f39c12)"/>
                            <polygon points="50,30 55,35 50,40 45,35" fill="#f1c40f"/>
                        </svg>`,
    "back-01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="t1-b-bg" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#3A3A3A" />
                                    <stop offset="100%" stop-color="#1A1A1A" />
                                </radialGradient>
                            </defs>
                            <rect width="100" height="100" fill="url(#t1-b-bg)"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A84C" stroke-width="2" stroke-dasharray="4 4" opacity="0.4"/>
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#E5C77A" stroke-width="4" stroke-dasharray="8 4" opacity="0.6"/>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#544111" stroke-width="8" stroke-dasharray="6 2" opacity="0.8"/>
                            <circle cx="50" cy="50" r="10" fill="#2C2C2C" stroke="#C9A84C" stroke-width="2"/>
                            <!-- Central Gear -->
                            <path d="M 50 35 L 55 45 L 65 50 L 55 55 L 50 65 L 45 55 L 35 50 L 45 45 Z" fill="#E5C77A" stroke="#1a1a1a" stroke-width="1"/>
                            <circle cx="50" cy="50" r="4" fill="#1A1A1A"/>
                        </svg>`
};
