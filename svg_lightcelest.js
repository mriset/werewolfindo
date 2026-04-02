const svgsLightCelest = {
    'SP·01': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="supGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#d4af37" />
                        <stop offset="50%" stop-color="#8a5a19" />
                        <stop offset="100%" stop-color="#5c3a0d" />
                    </linearGradient>
                    <filter id="supDropShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#8a5a19" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#supGrad)" stroke-width="0.5" opacity="0.8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#supGrad)" stroke-width="1.5" stroke-dasharray="2 4"/>
                <polygon points="50,20 80,85 20,85" fill="none" stroke="url(#supGrad)" stroke-width="1.5" opacity="0.6"/>
                <polygon points="50,20 65,85 35,85" fill="url(#supGrad)" opacity="0.1"/>
                <polygon points="50,20 50,85 35,85" fill="url(#supGrad)" opacity="0.2"/>
                <g filter="url(#supDropShadow)">
                    <path d="M 30 45 Q 50 30 70 45 Q 50 60 30 45 Z" fill="#ffffff" stroke="url(#supGrad)" stroke-width="2"/>
                    <circle cx="50" cy="45" r="8" fill="url(#supGrad)"/>
                    <circle cx="50" cy="45" r="3" fill="#ffffff"/>
                </g>
                <line x1="50" y1="5" x2="50" y2="15" stroke="url(#supGrad)" stroke-width="1.5"/>
                <line x1="50" y1="75" x2="50" y2="95" stroke="url(#supGrad)" stroke-width="1.5"/>
            </svg>`,
    'VL·01': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00acc1" />
                        <stop offset="50%" stop-color="#00838f" />
                        <stop offset="100%" stop-color="#004d40" />
                    </linearGradient>
                    <filter id="goodShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00838f" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <polygon points="50,15 65,50 50,85 35,50" fill="none" stroke="url(#goodGrad)" stroke-width="1.5" opacity="0.7"/>
                <polygon points="50,25 60,50 50,75 40,50" fill="url(#goodGrad)" opacity="0.15"/>
                <path d="M48,10 L52,10 L52,70 L48,70 Z" fill="url(#goodGrad)"/>
                <polygon points="50,5 53,10 47,10" fill="url(#goodGrad)"/>
                <path d="M35,70 L65,70 L65,74 L35,74 Z" fill="url(#goodGrad)"/>
                <circle cx="50" cy="80" r="4" fill="url(#goodGrad)"/>
                <g stroke="url(#goodGrad)" fill="none" stroke-width="2">
                    <path d="M 45 40 Q 20 20 10 40 Q 20 50 35 60" />
                    <path d="M 45 45 Q 15 35 15 55 Q 25 60 38 65" />
                    <path d="M 46 50 Q 25 50 25 65 Q 35 68 42 70" />
                    <path d="M 55 40 Q 80 20 90 40 Q 80 50 65 60" />
                    <path d="M 55 45 Q 85 35 85 55 Q 75 60 62 65" />
                    <path d="M 54 50 Q 75 50 75 65 Q 65 68 58 70" />
                </g>
                <circle cx="50" cy="50" r="6" fill="#00bcd4" filter="url(#goodShadow)"/>
            </svg>`,
    'WW·03': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="evilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e53935" />
                        <stop offset="50%" stop-color="#b71c1c" />
                        <stop offset="100%" stop-color="#7f0000" />
                    </linearGradient>
                    <filter id="evilShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#d32f2f" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <g fill="none" stroke="url(#evilGrad)" stroke-width="1.5" stroke-linejoin="round">
                    <polygon points="50,10 70,30 85,25 75,50 80,75 50,95 20,75 25,50 15,25 30,30" opacity="0.5"/>
                    <polygon points="50,20 65,35 75,35 65,55 70,75 50,85 30,75 35,55 25,35 35,35" stroke-width="2"/>
                    <polygon points="50,55 60,70 50,85 40,70" />
                    <polygon points="50,75 55,80 50,85 45,80" fill="url(#evilGrad)"/>
                    <path d="M 50 20 L 50 45 M 40 30 L 50 40 L 60 30" />
                </g>
                <g filter="url(#evilShadow)">
                    <polygon points="35,45 45,48 40,53" fill="#ff1744" />
                    <polygon points="65,45 55,48 60,53" fill="#ff1744" />
                </g>
                <polygon points="45,85 48,95 50,85" fill="#e53935" />
                <polygon points="55,85 52,95 50,85" fill="#e53935" />
            </svg>`,
    'NT·01': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="neuGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#8e24aa" />
                        <stop offset="50%" stop-color="#6a1b9a" />
                        <stop offset="100%" stop-color="#4a148c" />
                    </linearGradient>
                    <filter id="neuShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#8e24aa" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50" fill="none" stroke="url(#neuGrad)" stroke-width="1.5" opacity="0.4"/>
                <path d="M 25 50 Q 50 25 75 50 Q 50 75 25 50" fill="none" stroke="url(#neuGrad)" stroke-width="1.5" opacity="0.6"/>
                <polygon points="20,40 35,50 50,35 65,50 80,40 70,20 50,15 30,20" fill="none" stroke="url(#neuGrad)" stroke-width="2"/>
                <circle cx="20" cy="40" r="3" fill="url(#neuGrad)"/>
                <circle cx="50" cy="35" r="3" fill="url(#neuGrad)"/>
                <circle cx="80" cy="40" r="3" fill="url(#neuGrad)"/>
                <path d="M 35 50 C 35 40 65 40 65 50 C 65 70 55 85 50 85 C 45 85 35 70 35 50 Z" fill="#ffffff" stroke="url(#neuGrad)" stroke-width="2"/>
                <circle cx="43" cy="55" r="5" fill="#d500f9" filter="url(#neuShadow)"/>
                <circle cx="57" cy="55" r="5" fill="#651fff" filter="url(#neuShadow)"/>
                <path d="M 40 75 Q 50 80 60 75" fill="none" stroke="url(#neuGrad)" stroke-width="2"/>
                <line x1="45" y1="73" x2="45" y2="78" stroke="url(#neuGrad)" stroke-width="2"/>
                <line x1="50" y1="74" x2="50" y2="79" stroke="url(#neuGrad)" stroke-width="2"/>
                <line x1="55" y1="73" x2="55" y2="78" stroke="url(#neuGrad)" stroke-width="2"/>
            </svg>`,
    'NT·03': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="cupidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="50%" stop-color="#c2185b" />
                        <stop offset="100%" stop-color="#880e4f" />
                    </linearGradient>
                    <filter id="cupidShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#c2185b" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <path d="M 15 50 C 15 25 50 15 50 15 C 50 15 85 25 85 50 C 85 75 50 85 50 85 C 50 85 15 75 15 50 Z" fill="none" stroke="url(#cupidGrad)" stroke-width="1.5" opacity="0.2"/>
                <g fill="none" stroke="url(#cupidGrad)" stroke-width="1.5" opacity="0.6">
                    <path d="M 45 40 Q 25 25 15 35 Q 25 45 35 50" />
                    <path d="M 40 50 Q 20 40 10 50 Q 20 60 35 60" />
                    <path d="M 42 60 Q 25 55 15 65 Q 25 70 38 68" />
                    <path d="M 55 40 Q 75 25 85 35 Q 75 45 65 50" />
                    <path d="M 60 50 Q 80 40 90 50 Q 80 60 65 60" />
                    <path d="M 58 60 Q 75 55 85 65 Q 75 70 62 68" />
                </g>
                <path d="M 50 40 C 50 25 35 25 25 35 C 15 45 30 65 50 85 C 70 65 85 45 75 35 C 65 25 50 25 50 40 Z" fill="#ffffff" stroke="url(#cupidGrad)" stroke-width="2"/>
                <path d="M 50 45 C 50 35 40 35 32 42 C 25 50 35 65 50 80 C 65 65 75 50 68 42 C 60 35 50 35 50 45 Z" fill="url(#cupidGrad)" opacity="0.15"/>
                <line x1="50" y1="10" x2="50" y2="85" stroke="url(#cupidGrad)" stroke-width="2"/>
                <polygon points="45,75 55,75 50,85" fill="#f50057" filter="url(#cupidShadow)"/>
                <path d="M 45 15 L 50 20 L 55 15 M 45 22 L 50 27 L 55 22 M 45 29 L 50 34 L 55 29" stroke="url(#cupidGrad)" fill="none" stroke-width="1.5"/>
                <circle cx="35" cy="45" r="3" fill="#ff4081" filter="url(#cupidShadow)"/>
                <circle cx="65" cy="45" r="3" fill="#ff4081" filter="url(#cupidShadow)"/>
            </svg>`,
    'VL·04': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="hunterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#4caf50" />
                        <stop offset="50%" stop-color="#2e7d32" />
                        <stop offset="100%" stop-color="#1b5e20" />
                    </linearGradient>
                    <filter id="hunterShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#2e7d32" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#hunterGrad)" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 4"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="url(#hunterGrad)" stroke-width="1" opacity="0.6"/>
                <line x1="10" y1="50" x2="90" y2="50" stroke="url(#hunterGrad)" stroke-width="1" opacity="0.4"/>
                <line x1="50" y1="10" x2="50" y2="90" stroke="url(#hunterGrad)" stroke-width="1" opacity="0.4"/>
                <path d="M 15 60 Q 50 30 85 60" fill="none" stroke="url(#hunterGrad)" stroke-width="2.5"/>
                <path d="M 20 65 Q 50 40 80 65" fill="none" stroke="url(#hunterGrad)" stroke-width="1.5" opacity="0.6"/>
                <path d="M 15 60 L 50 75 L 85 60" fill="none" stroke="url(#hunterGrad)" stroke-width="1" opacity="0.8"/>
                <polygon points="46,85 54,85 52,35 48,35" fill="url(#hunterGrad)" opacity="0.2"/>
                <line x1="50" y1="35" x2="50" y2="85" stroke="url(#hunterGrad)" stroke-width="2"/>
                <line x1="50" y1="75" x2="50" y2="15" stroke="url(#hunterGrad)" stroke-width="2.5"/>
                <polygon points="45,25 55,25 50,10" fill="#4caf50" filter="url(#hunterShadow)"/>
                <path d="M 45 65 L 50 70 L 55 65 M 45 70 L 50 75 L 55 70" fill="none" stroke="url(#hunterGrad)" stroke-width="1.5"/>
                <circle cx="35" cy="50" r="3" fill="#81c784" filter="url(#hunterShadow)"/>
                <circle cx="65" cy="50" r="3" fill="#81c784" filter="url(#hunterShadow)"/>
            </svg>`,
    'VL·02': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="guardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#94a3b8" />
                        <stop offset="50%" stop-color="#64748b" />
                        <stop offset="100%" stop-color="#334155" />
                    </linearGradient>
                    <filter id="guardShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#475569" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <path d="M 50 10 L 85 25 L 85 55 C 85 80 50 95 50 95 C 50 95 15 80 15 55 L 15 25 Z" fill="none" stroke="url(#guardGrad)" stroke-width="2.5" opacity="0.4"/>
                <path d="M 50 18 L 78 30 L 78 55 C 78 75 50 88 50 88 C 50 88 22 75 22 55 L 22 30 Z" fill="none" stroke="url(#guardGrad)" stroke-width="1.5" opacity="0.8"/>
                <path d="M 50 25 L 70 34 L 70 55 C 70 70 50 80 50 80 C 50 80 30 70 30 55 L 30 34 Z" fill="url(#guardGrad)" opacity="0.15"/>
                <line x1="50" y1="25" x2="50" y2="80" stroke="url(#guardGrad)" stroke-width="2"/>
                <line x1="30" y1="52" x2="70" y2="52" stroke="url(#guardGrad)" stroke-width="2"/>
                <polygon points="50,45 52,50 57,52 52,54 50,59 48,54 43,52 48,50" fill="#cbd5e1" filter="url(#guardShadow)"/>
                <circle cx="50" cy="18" r="1.5" fill="url(#guardGrad)"/>
                <circle cx="78" cy="30" r="1.5" fill="url(#guardGrad)"/>
                <circle cx="22" cy="30" r="1.5" fill="url(#guardGrad)"/>
            </svg>`,
    'VL·03': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="witchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffb300" />
                        <stop offset="50%" stop-color="#ff8f00" />
                        <stop offset="100%" stop-color="#e65100" />
                    </linearGradient>
                    <filter id="witchShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#e65100" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="url(#witchGrad)" stroke-width="1.5" opacity="0.3"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="url(#witchGrad)" stroke-width="1" opacity="0.4" stroke-dasharray="2 4"/>
                <path d="M 42 25 L 58 25 L 56 40 L 75 75 C 80 85 70 90 50 90 C 30 90 20 85 25 75 L 44 40 Z" fill="none" stroke="url(#witchGrad)" stroke-width="2.5"/>
                <polygon points="38,20 62,20 60,25 40,25" fill="url(#witchGrad)"/>
                <polygon points="45,10 55,10 52,20 48,20" fill="none" stroke="url(#witchGrad)" stroke-width="1.5"/>
                <path d="M 32 60 L 68 60 L 72 70 C 75 80 65 85 50 85 C 35 85 25 80 28 70 Z" fill="url(#witchGrad)" opacity="0.15"/>
                <path d="M 32 60 Q 50 70 68 60 Q 50 50 32 60 Z" fill="url(#witchGrad)" opacity="0.4"/>
                <circle cx="45" cy="75" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="55" cy="68" r="1.5" fill="#ffffff" opacity="0.7"/>
                <circle cx="50" cy="80" r="1.5" fill="#ffffff" opacity="0.8"/>
                <path d="M 40 10 Q 30 0 20 15 T 15 5" fill="none" stroke="url(#witchGrad)" stroke-width="1.5" opacity="0.8"/>
                <path d="M 60 10 Q 70 0 80 15 T 85 5" fill="none" stroke="url(#witchGrad)" stroke-width="1.5" opacity="0.8"/>
                <circle cx="25" cy="50" r="4" fill="#ffb300" filter="url(#witchShadow)"/>
                <circle cx="75" cy="50" r="4" fill="#ffb300" filter="url(#witchShadow)"/>
            </svg>`,
    'WW·01': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="wwGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e53935" />
                        <stop offset="50%" stop-color="#b71c1c" />
                        <stop offset="100%" stop-color="#7f0000" />
                    </linearGradient>
                    <filter id="wwShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#d32f2f" flood-opacity="0.8"/>
                    </filter>
                </defs>
                <g stroke="url(#wwGrad)" stroke-width="2" opacity="0.2" stroke-linecap="round">
                    <path d="M 15 20 L 30 80 M 85 20 L 70 80" />
                    <path d="M 5 40 L 20 90 M 95 40 L 80 90" />
                </g>
                <path d="M 30 15 L 40 25 L 50 20 L 60 25 L 70 15 L 75 35 L 85 50 L 70 60 L 80 85 L 60 80 L 50 95 L 40 80 L 20 85 L 30 60 L 15 50 L 25 35 Z" fill="url(#wwGrad)" opacity="0.1"/>
                <path d="M 30 15 L 40 25 L 50 20 L 60 25 L 70 15 L 75 35 L 85 50 L 70 60 L 80 85 L 60 80 L 50 95 L 40 80 L 20 85 L 30 60 L 15 50 L 25 35 Z" fill="none" stroke="url(#wwGrad)" stroke-width="2" opacity="0.8"/>
                <path d="M 32 20 L 38 30 L 42 27" fill="none" stroke="url(#wwGrad)" stroke-width="1.5"/>
                <path d="M 68 20 L 62 30 L 58 27" fill="none" stroke="url(#wwGrad)" stroke-width="1.5"/>
                <path d="M 28 40 L 42 46 L 50 38 L 58 46 L 72 40" fill="none" stroke="url(#wwGrad)" stroke-width="2.5" stroke-linejoin="round"/>
                <path d="M 45 46 L 42 62 L 50 66 L 58 62 L 55 46" fill="url(#wwGrad)" opacity="0.15" stroke="url(#wwGrad)" stroke-width="1"/>
                <polygon points="46,62 54,62 50,68" fill="url(#wwGrad)"/>
                <g filter="url(#wwShadow)">
                    <polygon points="36,46 43,47 40,51" fill="#ff1744" />
                    <polygon points="64,46 57,47 60,51" fill="#ff1744" />
                </g>
                <path d="M 38 72 Q 50 66 62 72 L 55 86 C 52 88 48 88 45 86 Z" fill="#4a0000" stroke="url(#wwGrad)" stroke-width="2" opacity="0.6"/>
                <polygon points="39,72 42,82 44,71" fill="url(#wwGrad)"/>
                <polygon points="61,72 58,82 56,71" fill="url(#wwGrad)"/>
                <polygon points="46,69 47,74 49,69" fill="url(#wwGrad)"/>
                <polygon points="54,69 53,74 51,69" fill="url(#wwGrad)"/>
                <polygon points="43,84 46,75 48,86" fill="url(#wwGrad)"/>
                <polygon points="57,84 54,75 52,86" fill="url(#wwGrad)"/>
            </svg>`,
    'VL·13': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="wizardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#7986cb" />
                        <stop offset="50%" stop-color="#3f51b5" />
                        <stop offset="100%" stop-color="#1a237e" />
                    </linearGradient>
                    <filter id="wizardShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#303f9f" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <circle cx="50" cy="40" r="25" fill="none" stroke="url(#wizardGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
                <circle cx="50" cy="40" r="30" fill="none" stroke="url(#wizardGrad)" stroke-width="1" stroke-dasharray="1 3" opacity="0.4"/>
                <polygon points="50,15 58,32 75,32 62,43 67,60 50,50 33,60 38,43 25,32 42,32" fill="none" stroke="url(#wizardGrad)" stroke-width="1.5" opacity="0.3"/>
                <path d="M 50 85 C 30 85 15 75 15 75 L 15 55 C 15 55 30 65 50 65 Z" fill="url(#wizardGrad)" opacity="0.15"/>
                <path d="M 50 85 C 30 85 15 75 15 75 L 15 55 C 15 55 30 65 50 65" fill="none" stroke="url(#wizardGrad)" stroke-width="2"/>
                <path d="M 50 85 C 70 85 85 75 85 75 L 85 55 C 85 55 70 65 50 65 Z" fill="url(#wizardGrad)" opacity="0.15"/>
                <path d="M 50 85 C 70 85 85 75 85 75 L 85 55 C 85 55 70 65 50 65" fill="none" stroke="url(#wizardGrad)" stroke-width="2"/>
                <line x1="50" y1="65" x2="50" y2="85" stroke="url(#wizardGrad)" stroke-width="2.5"/>
                <polygon points="50,25 58,40 50,55 42,40" fill="#ffffff" stroke="url(#wizardGrad)" stroke-width="2"/>
                <polygon points="50,25 54,40 50,55" fill="url(#wizardGrad)" opacity="0.4"/>
                <circle cx="35" cy="30" r="2.5" fill="#8c9eff" filter="url(#wizardShadow)"/>
                <circle cx="65" cy="30" r="2.5" fill="#8c9eff" filter="url(#wizardShadow)"/>
                <circle cx="50" cy="15" r="2" fill="#8c9eff" filter="url(#wizardShadow)"/>
                <path d="M 30 60 Q 40 50 45 45" fill="none" stroke="url(#wizardGrad)" stroke-width="1.5" stroke-dasharray="2 2"/>
                <path d="M 70 60 Q 60 50 55 45" fill="none" stroke="url(#wizardGrad)" stroke-width="1.5" stroke-dasharray="2 2"/>
            </svg>`,
    'VL·20': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="soldierGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#bcaaa4" />
                        <stop offset="50%" stop-color="#8d6e63" />
                        <stop offset="100%" stop-color="#3e2723" />
                    </linearGradient>
                    <filter id="soldierShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#3e2723" flood-opacity="0.6"/>
                    </filter>
                </defs>
                <line x1="25" y1="80" x2="75" y2="30" stroke="url(#soldierGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
                <line x1="75" y1="80" x2="25" y2="30" stroke="url(#soldierGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
                <polygon points="22,83 28,77 25,75" fill="url(#soldierGrad)" opacity="0.6"/>
                <polygon points="78,83 72,77 75,75" fill="url(#soldierGrad)" opacity="0.6"/>
                <path d="M 50 10 C 35 10 25 25 25 25 C 30 20 40 18 50 18 C 60 18 70 20 75 25 C 75 25 65 10 50 10 Z" fill="url(#soldierGrad)" opacity="0.8"/>
                <path d="M 50 12 C 40 12 30 22 28 25 C 35 22 42 20 50 20 C 58 20 65 22 72 25 C 70 22 60 12 50 12 Z" fill="#ffffff" opacity="0.3"/>
                <path d="M 35 25 C 28 40 30 70 35 80 L 45 70 L 50 75 L 55 70 L 65 80 C 70 70 72 40 65 25 C 55 20 45 20 35 25 Z" fill="#ffffff" stroke="url(#soldierGrad)" stroke-width="2.5"/>
                <path d="M 35 25 C 28 40 30 70 35 80 L 45 70 L 50 75 L 55 70 L 65 80 C 70 70 72 40 65 25 C 55 20 45 20 35 25 Z" fill="url(#soldierGrad)" opacity="0.1"/>
                <path d="M 40 40 L 60 40 L 60 46 L 53 46 L 53 65 L 47 65 L 47 46 L 40 46 Z" fill="#3e2723" filter="url(#soldierShadow)"/>
                <circle cx="38" cy="32" r="1.5" fill="url(#soldierGrad)"/>
                <circle cx="62" cy="32" r="1.5" fill="url(#soldierGrad)"/>
                <circle cx="43" cy="72" r="1.5" fill="url(#soldierGrad)"/>
                <circle cx="57" cy="72" r="1.5" fill="url(#soldierGrad)"/>
            </svg>`,
    'VL·18': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="bodyguardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#9e9e9e" />
                        <stop offset="50%" stop-color="#616161" />
                        <stop offset="100%" stop-color="#212121" />
                    </linearGradient>
                    <filter id="bodyguardShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#212121" flood-opacity="0.6"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="30" fill="none" stroke="url(#bodyguardGrad)" stroke-width="2" opacity="0.2"/>
                <path d="M 30 15 L 70 15 L 70 70 C 70 85 50 95 50 95 C 50 95 30 85 30 70 Z" fill="#ffffff" stroke="url(#bodyguardGrad)" stroke-width="2.5" filter="url(#bodyguardShadow)"/>
                <path d="M 30 15 L 70 15 L 70 70 C 70 85 50 95 50 95 C 50 95 30 85 30 70 Z" fill="url(#bodyguardGrad)" opacity="0.15"/>
                <path d="M 38 23 L 62 23 L 62 68 C 62 78 50 85 50 85 C 50 85 38 78 38 68 Z" fill="none" stroke="url(#bodyguardGrad)" stroke-width="1.5" opacity="0.6"/>
                <line x1="50" y1="15" x2="50" y2="95" stroke="url(#bodyguardGrad)" stroke-width="2" opacity="0.4"/>
                <line x1="15" y1="40" x2="35" y2="50" stroke="#d32f2f" stroke-width="1.5"/>
                <polygon points="32,48 38,51 34,54" fill="#d32f2f"/>
                <path d="M 15 40 L 12 35 M 15 40 L 10 42" stroke="#d32f2f" stroke-width="1"/>
                <line x1="85" y1="65" x2="65" y2="75" stroke="#d32f2f" stroke-width="1.5"/>
                <polygon points="68,73 62,76 66,79" fill="#d32f2f"/>
                <path d="M 85 65 L 88 60 M 85 65 L 90 67" stroke="#d32f2f" stroke-width="1"/>
                <path d="M 50 45 C 50 35 40 35 35 42 C 30 50 40 60 50 70 C 60 60 70 50 65 42 C 60 35 50 35 50 45 Z" fill="#ffffff" stroke="url(#bodyguardGrad)" stroke-width="2"/>
                <path d="M 50 45 C 50 35 40 35 35 42 C 30 50 40 60 50 70 C 60 60 70 50 65 42 C 60 35 50 35 50 45 Z" fill="url(#bodyguardGrad)" opacity="0.4"/>
            </svg>`,
    'VL·19': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="priestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#fff59d" />
                        <stop offset="50%" stop-color="#fbc02d" />
                        <stop offset="100%" stop-color="#f57f17" />
                    </linearGradient>
                    <filter id="priestShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#fbc02d" flood-opacity="0.6"/>
                    </filter>
                </defs>
                <g stroke="url(#priestGrad)" stroke-width="1.5" opacity="0.3">
                    <line x1="50" y1="5" x2="50" y2="95"/>
                    <line x1="5" y1="50" x2="95" y2="50"/>
                    <line x1="18" y1="18" x2="82" y2="82"/>
                    <line x1="18" y1="82" x2="82" y2="18"/>
                </g>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#priestGrad)" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.5"/>
                <path d="M 35 85 L 65 85 L 60 75 L 40 75 Z" fill="url(#priestGrad)" opacity="0.8"/>
                <path d="M 46 75 L 54 75 L 52 65 L 48 65 Z" fill="url(#priestGrad)"/>
                <ellipse cx="50" cy="65" rx="8" ry="3" fill="#ffffff" filter="url(#priestShadow)"/>
                <path d="M 48 65 L 52 65 L 50 55 Z" fill="url(#priestGrad)"/>
                <path d="M 50 55 C 30 55 25 35 25 25 C 25 22 75 22 75 25 C 75 35 70 55 50 55 Z" fill="#ffffff" stroke="url(#priestGrad)" stroke-width="2" filter="url(#priestShadow)"/>
                <path d="M 50 55 C 30 55 25 35 25 25 C 25 22 75 22 75 25 C 75 35 70 55 50 55 Z" fill="url(#priestGrad)" opacity="0.2"/>
                <path d="M 50 8 C 50 8 44 18 44 22 C 44 26 56 26 56 22 C 56 18 50 8 50 8 Z" fill="#ffffff" stroke="url(#priestGrad)" stroke-width="1.5" filter="url(#priestShadow)"/>
                <polygon points="30,15 32,20 37,22 32,24 30,29 28,24 23,22 28,20" fill="url(#priestGrad)"/>
                <polygon points="70,15 72,20 77,22 72,24 70,29 68,24 63,22 68,20" fill="url(#priestGrad)"/>
            </svg>`,
    'VL·10': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="mayorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#64b5f6" />
                        <stop offset="50%" stop-color="#1e88e5" />
                        <stop offset="100%" stop-color="#0d47a1" />
                    </linearGradient>
                    <filter id="mayorShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#0d47a1" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <g stroke="url(#mayorGrad)" stroke-width="1.5" opacity="0.2">
                    <line x1="50" y1="5" x2="50" y2="95"/>
                    <line x1="5" y1="50" x2="95" y2="50"/>
                    <line x1="18" y1="18" x2="82" y2="82"/>
                    <line x1="18" y1="82" x2="82" y2="18"/>
                </g>
                <path d="M 40 45 L 28 85 L 38 78 L 45 88 L 50 45 Z" fill="url(#mayorGrad)" opacity="0.6"/>
                <path d="M 60 45 L 72 85 L 62 78 L 55 88 L 50 45 Z" fill="url(#mayorGrad)" opacity="0.6"/>
                <path d="M 15 15 Q 50 60 85 15" fill="none" stroke="url(#mayorGrad)" stroke-width="2.5" stroke-dasharray="4 2" opacity="0.8"/>
                <path d="M 25 10 Q 50 50 75 10" fill="none" stroke="url(#mayorGrad)" stroke-width="1.5" opacity="0.5"/>
                <polygon points="50,20 60,28 72,25 68,38 80,45 68,52 72,65 60,62 50,70 40,62 28,65 32,52 20,45 32,38 28,25 40,28" fill="#ffffff" stroke="url(#mayorGrad)" stroke-width="2" filter="url(#mayorShadow)"/>
                <polygon points="50,25 58,32 68,30 64,40 74,45 64,50 68,60 58,58 50,65 42,58 32,60 36,50 26,45 36,40 32,30 42,32" fill="url(#mayorGrad)" opacity="0.15"/>
                <circle cx="50" cy="45" r="15" fill="#ffffff" stroke="url(#mayorGrad)" stroke-width="2.5"/>
                <circle cx="50" cy="45" r="10" fill="none" stroke="url(#mayorGrad)" stroke-width="1" stroke-dasharray="2 2"/>
                <polygon points="50,34 53,42 61,42 55,47 57,55 50,50 43,55 45,47 39,42 47,42" fill="url(#mayorGrad)" filter="url(#mayorShadow)"/>
            </svg>`,
    'VL·09': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="sheriffGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#b0bec5" />
                        <stop offset="50%" stop-color="#78909c" />
                        <stop offset="100%" stop-color="#37474f" />
                    </linearGradient>
                    <filter id="sheriffShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#263238" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <line x1="20" y1="80" x2="80" y2="20" stroke="url(#sheriffGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
                <line x1="80" y1="80" x2="20" y2="20" stroke="url(#sheriffGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
                <line x1="20" y1="80" x2="30" y2="70" stroke="url(#sheriffGrad)" stroke-width="4.5" stroke-linecap="round" opacity="0.7"/>
                <line x1="80" y1="80" x2="70" y2="70" stroke="url(#sheriffGrad)" stroke-width="4.5" stroke-linecap="round" opacity="0.7"/>
                <polygon points="50,15 80,70 20,70" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="2.5" filter="url(#sheriffShadow)"/>
                <polygon points="50,15 80,70 20,70" fill="url(#sheriffGrad)" opacity="0.15"/>
                <polygon points="50,85 80,30 20,30" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="2.5" filter="url(#sheriffShadow)"/>
                <polygon points="50,85 80,30 20,30" fill="url(#sheriffGrad)" opacity="0.15"/>
                <circle cx="50" cy="15" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="80" cy="70" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="20" cy="70" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="50" cy="85" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="80" cy="30" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="20" cy="30" r="2.5" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="1.5"/>
                <circle cx="50" cy="50" r="18" fill="#ffffff" stroke="url(#sheriffGrad)" stroke-width="2"/>
                <circle cx="50" cy="50" r="14" fill="url(#sheriffGrad)" opacity="0.2"/>
                <polygon points="50,40 53,47 60,47 54,52 56,59 50,55 44,59 46,52 40,47 47,47" fill="url(#sheriffGrad)" filter="url(#sheriffShadow)"/>
            </svg>`,
    'VL·14': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="goodGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00acc1" />
                        <stop offset="50%" stop-color="#00838f" />
                        <stop offset="100%" stop-color="#004d40" />
                    </linearGradient>
                    <filter id="goodShadow1">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00838f" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#goodGrad1)" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.4"/>
                <rect x="30" y="30" width="6" height="15" fill="none" stroke="url(#goodGrad1)" stroke-width="1.5"/>
                <rect x="64" y="30" width="6" height="15" fill="none" stroke="url(#goodGrad1)" stroke-width="1.5"/>
                <polygon points="50,25 80,55 20,55" fill="url(#goodGrad1)" opacity="0.2"/>
                <polygon points="50,25 80,55 20,55" fill="none" stroke="url(#goodGrad1)" stroke-width="2.5" stroke-linejoin="round"/>
                <polygon points="28,55 72,55 72,85 28,85" fill="none" stroke="url(#goodGrad1)" stroke-width="2"/>
                <path d="M 42 85 L 42 65 C 42 60 58 60 58 65 L 58 85 Z" fill="#00bcd4" filter="url(#goodShadow1)"/>
                <path d="M 50 62 L 50 85" stroke="#ffffff" stroke-width="1.5"/>
                <rect x="32" y="65" width="6" height="8" fill="url(#goodGrad1)" opacity="0.6"/>
                <rect x="62" y="65" width="6" height="8" fill="url(#goodGrad1)" opacity="0.6"/>
            </svg>`,
    'VL·15': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="goodGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00acc1" />
                        <stop offset="50%" stop-color="#00838f" />
                        <stop offset="100%" stop-color="#004d40" />
                    </linearGradient>
                    <filter id="goodShadow2">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00838f" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#goodGrad2)" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.4"/>
                <polygon points="50,15 85,50 15,50" fill="none" stroke="url(#goodGrad2)" stroke-width="2" stroke-linejoin="round"/>
                <polygon points="50,30 75,50 25,50" fill="url(#goodGrad2)" opacity="0.3"/>
                <polygon points="50,30 75,50 25,50" fill="none" stroke="url(#goodGrad2)" stroke-width="1.5"/>
                <polygon points="20,50 80,50 80,85 20,85" fill="none" stroke="url(#goodGrad2)" stroke-width="2"/>
                <line x1="35" y1="50" x2="35" y2="85" stroke="url(#goodGrad2)" stroke-width="2"/>
                <line x1="65" y1="50" x2="65" y2="85" stroke="url(#goodGrad2)" stroke-width="2"/>
                <polygon points="40,85 40,60 60,60 60,85" fill="#00bcd4" filter="url(#goodShadow2)"/>
                <line x1="50" y1="60" x2="50" y2="85" stroke="#ffffff" stroke-width="2"/>
                <circle cx="50" cy="40" r="4" fill="#ffffff" filter="url(#goodShadow2)"/>
            </svg>`,
    'VL·16': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="goodGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00acc1" />
                        <stop offset="50%" stop-color="#00838f" />
                        <stop offset="100%" stop-color="#004d40" />
                    </linearGradient>
                    <filter id="goodShadow3">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00838f" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#goodGrad3)" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.4"/>
                <polygon points="50,20 70,35 80,60 20,60 30,35" fill="url(#goodGrad3)" opacity="0.15" stroke="url(#goodGrad3)" stroke-width="2" stroke-linejoin="round"/>
                <polygon points="25,60 75,60 75,85 25,85" fill="none" stroke="url(#goodGrad3)" stroke-width="2"/>
                <line x1="25" y1="60" x2="75" y2="85" stroke="url(#goodGrad3)" stroke-width="1.5" opacity="0.5"/>
                <line x1="75" y1="60" x2="25" y2="85" stroke="url(#goodGrad3)" stroke-width="1.5" opacity="0.5"/>
                <polygon points="50,35 58,45 50,55 42,45" fill="#00bcd4" filter="url(#goodShadow3)"/>
                <polygon points="40,65 60,65 60,85 40,85" fill="#ffffff" opacity="0.9"/>
                <polygon points="40,65 60,65 60,85 40,85" fill="none" stroke="url(#goodGrad3)" stroke-width="2"/>
                <line x1="50" y1="65" x2="50" y2="85" stroke="url(#goodGrad3)" stroke-width="1.5"/>
            </svg>`,
    'WW·02': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="ww3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e53935" />
                        <stop offset="50%" stop-color="#b71c1c" />
                        <stop offset="100%" stop-color="#7f0000" />
                    </linearGradient>
                    <filter id="ww3Shadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#d32f2f" flood-opacity="0.8"/>
                    </filter>
                </defs>
                <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="url(#ww3Grad)" stroke-width="1.5" opacity="0.3"/>
                <circle cx="50" cy="50" r="28" fill="none" stroke="url(#ww3Grad)" stroke-width="1" opacity="0.4" stroke-dasharray="2 4"/>
                <g stroke="url(#ww3Grad)" stroke-linejoin="round" stroke-linecap="round">
                    <path d="M 50 20 C 30 20 22 35 25 50 C 28 60 38 60 40 70 L 42 80 L 58 80 L 60 70 C 62 60 72 60 75 50 C 78 35 70 20 50 20 Z" fill="url(#ww3Grad)" opacity="0.15" stroke-width="2"/>
                    <path d="M 50 20 L 50 45" fill="none" stroke-width="1.5" opacity="0.5"/>
                    <path d="M 35 28 C 30 35 30 45 35 50" fill="none" stroke-width="1.5" opacity="0.5"/>
                    <path d="M 65 28 C 70 35 70 45 65 50" fill="none" stroke-width="1.5" opacity="0.5"/>
                    <path d="M 43 45 C 35 45 30 52 32 55 C 38 55 42 50 43 45 Z" fill="#4a0000" stroke-width="1.5"/>
                    <path d="M 57 45 C 65 45 70 52 68 55 C 62 55 58 50 57 45 Z" fill="#4a0000" stroke-width="1.5"/>
                    <circle cx="36" cy="52" r="2" fill="#ff1744" filter="url(#ww3Shadow)"/>
                    <circle cx="64" cy="52" r="2" fill="#ff1744" filter="url(#ww3Shadow)"/>
                    <polygon points="50,60 46,70 54,70" fill="#4a0000" stroke-width="1.5"/>
                    <path d="M 42 80 L 42 88 L 45 82 L 48 86 L 50 82 L 52 86 L 55 82 L 58 88 L 58 80" fill="none" stroke-width="1.5"/>
                    <path d="M 40 80 L 38 92 L 43 83" fill="url(#ww3Grad)" stroke-width="1.5"/>
                    <path d="M 60 80 L 62 92 L 57 83" fill="url(#ww3Grad)" stroke-width="1.5"/>
                    <path d="M 38 95 C 45 102 55 102 62 95 L 58 92 C 55 96 45 96 42 92 Z" fill="url(#ww3Grad)" opacity="0.6" stroke-width="1.5"/>
                    <path d="M 42 92 L 40 85 L 44 93" fill="url(#ww3Grad)" stroke-width="1.5"/>
                    <path d="M 58 92 L 60 85 L 56 93" fill="url(#ww3Grad)" stroke-width="1.5"/>
                </g>
            </svg>`,
    'WW·05': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="lwGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#4db6ac" />
                        <stop offset="50%" stop-color="#00897b" />
                        <stop offset="100%" stop-color="#004d40" />
                    </linearGradient>
                    <filter id="lwShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#004d40" flood-opacity="0.6"/>
                    </filter>
                </defs>
                <path d="M 50 15 C 30 15 15 30 15 50 C 15 40 30 30 50 30 C 70 30 85 40 85 50 C 85 30 70 15 50 15 Z" fill="url(#lwGrad)" opacity="0.7"/>
                <g stroke="url(#lwGrad)" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
                    <path d="M 35 50 L 25 65 L 35 75 L 45 85" fill="none" opacity="0.6"/>
                    <path d="M 65 50 L 75 65 L 65 75 L 55 85" fill="none" opacity="0.6"/>
                    <polygon points="50,35 38,50 42,75 50,85 58,75 62,50" fill="url(#lwGrad)" opacity="0.15"/>
                    <polygon points="50,35 38,50 42,75 50,85 58,75 62,50" fill="none"/>
                    <polygon points="38,50 32,25 45,43" fill="none"/>
                    <polygon points="62,50 68,25 55,43" fill="none"/>
                    <polygon points="50,55 42,75 50,85 58,75" fill="none"/>
                    <polygon points="47,80 53,80 50,85" fill="url(#lwGrad)"/>
                    <line x1="50" y1="35" x2="50" y2="55" opacity="0.5"/>
                </g>
                <polygon points="40,55 45,57 42,60" fill="#1de9b6" filter="url(#lwShadow)"/>
                <polygon points="60,55 55,57 58,60" fill="#1de9b6" filter="url(#lwShadow)"/>
                <g fill="none" stroke="url(#lwGrad)" stroke-width="1.5">
                    <circle cx="25" cy="80" r="3"/>
                    <circle cx="18" cy="85" r="3" stroke-dasharray="2 2"/>
                    <circle cx="75" cy="80" r="3"/>
                    <circle cx="82" cy="85" r="3" stroke-dasharray="2 2"/>
                </g>
            </svg>`,
    'NT·04': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="doppelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#a78bfa" />
                        <stop offset="50%" stop-color="#7c3aed" />
                        <stop offset="100%" stop-color="#4c1d95" />
                    </linearGradient>
                    <filter id="doppelShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#4c1d95" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="28" fill="none" stroke="url(#doppelGrad)" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.5"/>
                <path d="M 50 20 C 30 20 25 35 25 50 C 25 65 35 80 50 85 Z" fill="url(#doppelGrad)"/>
                <path d="M 50 20 C 70 20 75 35 75 50 C 75 65 65 80 50 85 Z" fill="none" stroke="url(#doppelGrad)" stroke-width="2"/>
                <path d="M 45 45 C 40 45 35 48 38 52 C 42 52 45 48 45 45 Z" fill="#ffffff"/>
                <path d="M 55 45 C 60 45 65 48 62 52 C 58 52 55 48 55 45 Z" fill="#7c3aed" filter="url(#doppelShadow)"/>
                <line x1="50" y1="15" x2="50" y2="90" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4 2"/>
                <path d="M 45 70 Q 40 72 35 68" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                <path d="M 55 70 Q 60 72 65 68" fill="none" stroke="url(#doppelGrad)" stroke-width="2" stroke-linecap="round"/>
                <path d="M 20 30 Q 30 20 50 15" fill="none" stroke="url(#doppelGrad)" stroke-width="1.5" opacity="0.6"/>
                <path d="M 80 30 Q 70 20 50 15" fill="none" stroke="url(#doppelGrad)" stroke-width="1.5" opacity="0.6"/>
            </svg>`,
    'NT·05': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="killerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#9e9e9e" />
                        <stop offset="50%" stop-color="#424242" />
                        <stop offset="100%" stop-color="#212121" />
                    </linearGradient>
                    <filter id="killerShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#d32f2f" flood-opacity="0.6"/>
                    </filter>
                </defs>
                <g stroke="url(#killerGrad)" stroke-width="1.5" stroke-linecap="round" opacity="0.3">
                    <line x1="25" y1="25" x2="75" y2="75" />
                    <line x1="75" y1="25" x2="25" y2="75" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke-dasharray="2 6"/>
                </g>
                <path d="M 35 25 L 45 40 L 30 55 M 65 25 L 55 40 L 70 55" fill="none" stroke="#d32f2f" stroke-width="1" opacity="0.4"/>
                <circle cx="50" cy="15" r="4" fill="url(#killerGrad)"/>
                <circle cx="50" cy="15" r="1.5" fill="#d32f2f" filter="url(#killerShadow)"/>
                <path d="M 46 19 L 54 19 L 53 35 L 47 35 Z" fill="url(#killerGrad)"/>
                <line x1="47" y1="23" x2="53" y2="23" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
                <line x1="47" y1="27" x2="53" y2="27" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
                <line x1="47" y1="31" x2="53" y2="31" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
                <path d="M 35 35 L 65 35 L 60 40 L 40 40 Z" fill="url(#killerGrad)"/>
                <polygon points="35,35 40,30 45,35" fill="url(#killerGrad)"/>
                <polygon points="65,35 60,30 55,35" fill="url(#killerGrad)"/>
                <path d="M 45 40 L 55 40 L 52 75 L 50 85 L 48 75 Z" fill="#ffffff" stroke="url(#killerGrad)" stroke-width="2.5" filter="url(#killerShadow)"/>
                <path d="M 45 40 L 55 40 L 52 75 L 50 85 L 48 75 Z" fill="url(#killerGrad)" opacity="0.15"/>
                <line x1="50" y1="40" x2="50" y2="65" stroke="url(#killerGrad)" stroke-width="1.5" opacity="0.8"/>
                <path d="M 49 60 Q 52 65 51 72 Q 50 80 50 85 L 48 75 Q 47 68 49 60 Z" fill="#d32f2f" opacity="0.9"/>
                <path d="M 50 88 C 48 93 52 93 50 88 Z" fill="#d32f2f" filter="url(#killerShadow)"/>
                <circle cx="50" cy="95" r="1.5" fill="#d32f2f"/>
                <circle cx="53" cy="91" r="1" fill="#d32f2f" opacity="0.7"/>
            </svg>`,
    'VL·26': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="idiotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#dce775" />
                        <stop offset="50%" stop-color="#c0ca33" />
                        <stop offset="100%" stop-color="#827717" />
                    </linearGradient>
                    <filter id="idiotShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#827717" flood-opacity="0.4"/>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#idiotGrad)" stroke-width="2" stroke-dasharray="4 6" opacity="0.5"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="url(#idiotGrad)" stroke-width="2" stroke-dasharray="2 4" opacity="0.3"/>
                <polygon points="30,12 32,16 36,17 32,19 30,23 28,19 24,17 28,16" fill="url(#idiotGrad)"/>
                <polygon points="70,12 72,16 76,17 72,19 70,23 68,19 64,17 68,16" fill="url(#idiotGrad)"/>
                <polygon points="50,2 52,5 55,6 52,8 50,11 48,8 45,6 48,5" fill="url(#idiotGrad)"/>
                <circle cx="50" cy="65" r="18" fill="url(#idiotGrad)" opacity="0.15"/>
                <circle cx="50" cy="65" r="18" fill="none" stroke="url(#idiotGrad)" stroke-width="2"/>
                <g stroke="url(#idiotGrad)" stroke-width="2.5" stroke-linecap="round">
                    <line x1="40" y1="58" x2="44" y2="62"/>
                    <line x1="44" y1="58" x2="40" y2="62"/>
                    <line x1="56" y1="58" x2="60" y2="62"/>
                    <line x1="60" y1="58" x2="56" y2="62"/>
                </g>
                <path d="M 40 70 Q 50 78 60 70" fill="none" stroke="url(#idiotGrad)" stroke-width="2" stroke-linecap="round"/>
                <path d="M 47 74 L 47 82 C 47 86 53 86 53 82 L 53 74 Z" fill="#ff5252" filter="url(#idiotShadow)"/>
                <line x1="50" y1="74" x2="50" y2="80" stroke="#b71c1c" stroke-width="1"/>
                <path d="M 28 48 L 50 15 L 72 48 Z" fill="#ffffff" stroke="url(#idiotGrad)" stroke-width="2"/>
                <path d="M 28 48 L 50 15 L 72 48 Z" fill="url(#idiotGrad)" opacity="0.3"/>
                <ellipse cx="50" cy="48" rx="26" ry="5" fill="#ffffff" stroke="url(#idiotGrad)" stroke-width="2"/>
                <ellipse cx="50" cy="48" rx="26" ry="5" fill="url(#idiotGrad)" opacity="0.5"/>
                <polygon points="45,30 55,28 58,38 48,40" fill="url(#idiotGrad)" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="43" y1="32" x2="47" y2="28" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="53" y1="26" x2="57" y2="30" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="56" y1="40" x2="60" y2="36" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="46" y1="42" x2="50" y2="38" stroke="#ffffff" stroke-width="1.5"/>
            </svg>`,
    'VL·35': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="princeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ff8a65" />
                        <stop offset="50%" stop-color="#ff5722" />
                        <stop offset="100%" stop-color="#d84315" />
                    </linearGradient>
                    <filter id="princeShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#d84315" flood-opacity="0.5"/>
                    </filter>
                </defs>
                <polygon points="50,10 85,50 50,90 15,50" fill="none" stroke="url(#princeGrad)" stroke-width="1.5" opacity="0.3" stroke-dasharray="2 4"/>
                <polygon points="50,20 75,50 50,80 25,50" fill="none" stroke="url(#princeGrad)" stroke-width="1" opacity="0.5"/>
                <path d="M 20 65 L 25 35 L 35 50 L 50 25 L 65 50 L 75 35 L 80 65 Z" fill="#ffffff" stroke="url(#princeGrad)" stroke-width="2.5" filter="url(#princeShadow)"/>
                <path d="M 20 65 L 25 35 L 35 50 L 50 25 L 65 50 L 75 35 L 80 65 Z" fill="url(#princeGrad)" opacity="0.2"/>
                <path d="M 22 70 L 78 70 L 75 80 L 25 80 Z" fill="url(#princeGrad)" stroke="url(#princeGrad)" stroke-width="1.5"/>
                <line x1="30" y1="65" x2="70" y2="65" stroke="url(#princeGrad)" stroke-width="1.5"/>
                <circle cx="50" cy="25" r="3.5" fill="#ff1744" filter="url(#princeShadow)"/>
                <circle cx="25" cy="35" r="2.5" fill="#ff1744" filter="url(#princeShadow)"/>
                <circle cx="75" cy="35" r="2.5" fill="#ff1744" filter="url(#princeShadow)"/>
                <polygon points="50,45 53,50 50,55 47,50" fill="#00bcd4" filter="url(#princeShadow)"/>
                <circle cx="35" cy="75" r="1.5" fill="#ffffff"/>
                <circle cx="50" cy="75" r="2" fill="#ffffff"/>
                <circle cx="65" cy="75" r="1.5" fill="#ffffff"/>
            </svg>`,
    'VL·07': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="girlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#f06292" />
                        <stop offset="50%" stop-color="#d81b60" />
                        <stop offset="100%" stop-color="#880e4f" />
                    </linearGradient>
                    <filter id="girlShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#880e4f" flood-opacity="0.4"/>
                    </filter>
                </defs>

                <!-- Soft mysterious aura -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#girlGrad)" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.6"/>
                <circle cx="50" cy="50" r="28" fill="none" stroke="url(#girlGrad)" stroke-width="1" opacity="0.3"/>

                <!-- Vintage Keyhole Frame -->
                <path d="M 50 15 C 30 15 25 35 30 50 C 25 65 30 85 50 85 C 70 85 75 65 70 50 C 75 35 70 15 50 15 Z" fill="none" stroke="url(#girlGrad)" stroke-width="1.5" opacity="0.4"/>

                <!-- The Keyhole Base -->
                <path d="M 50 30 C 40 30 36 38 42 46 L 36 70 L 64 70 L 58 46 C 64 38 60 30 50 30 Z" fill="#ffffff" stroke="url(#girlGrad)" stroke-width="2.5" filter="url(#girlShadow)"/>
                <path d="M 50 30 C 40 30 36 38 42 46 L 36 70 L 64 70 L 58 46 C 64 38 60 30 50 30 Z" fill="url(#girlGrad)" opacity="0.15"/>

                <!-- The Hole -->
                <path d="M 50 38 C 45 38 43 44 46 48 L 43 62 L 57 62 L 54 48 C 57 44 55 38 50 38 Z" fill="#4a0000" opacity="0.8"/>

                <!-- Glowing Eye inside -->
                <path d="M 46 44 C 50 41 54 44 54 44 C 54 44 50 47 46 44 Z" fill="#ffffff" opacity="0.9"/>
                <circle cx="50" cy="44" r="1.5" fill="#ff1744" filter="url(#girlShadow)"/>

                <!-- Creepy stitch marks on the sides -->
                <line x1="20" y1="50" x2="25" y2="50" stroke="url(#girlGrad)" stroke-width="1.5"/>
                <line x1="22" y1="48" x2="22" y2="52" stroke="url(#girlGrad)" stroke-width="1.5"/>

                <line x1="75" y1="50" x2="80" y2="50" stroke="url(#girlGrad)" stroke-width="1.5"/>
                <line x1="78" y1="48" x2="78" y2="52" stroke="url(#girlGrad)" stroke-width="1.5"/>
            </svg>`,
};
