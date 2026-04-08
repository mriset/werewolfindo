const popArtSvg = {
  "seer": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Offset background circle -->
                    <circle cx="55" cy="55" r="35" fill="#FFEA00" />
                    <!-- Main Crystal Ball -->
                    <circle cx="45" cy="45" r="35" fill="#00E5FF" stroke="#111" stroke-width="3" />
                    <!-- Big Eye -->
                    <path d="M 15,45 Q 45,15 75,45 Q 45,75 15,45 Z" fill="#fff" stroke="#111" stroke-width="3" />
                    <circle cx="45" cy="45" r="12" fill="#FFEA00" stroke="#111" stroke-width="3" />
                    <circle cx="45" cy="45" r="4" fill="#111" />
                    <circle cx="48" cy="42" r="2" fill="#fff" />
                    <!-- Magic Zaps -->
                    <path d="M 10,20 L 20,25 L 15,35" fill="none" stroke="#111" stroke-width="3"
                        stroke-linejoin="round" />
                    <path d="M 80,15 L 85,25 L 95,20" fill="none" stroke="#111" stroke-width="3"
                        stroke-linejoin="round" />
                    <!-- Star -->
                    <polygon points="85,85 87,75 95,73 87,71 85,61 83,71 75,73 83,75" fill="#FFEA00" stroke="#111"
                        stroke-width="2" />
                </svg>`,
  "hunter": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Offset Blast -->
                    <polygon points="50,5 65,35 95,35 70,55 80,85 50,65 20,85 30,55 5,35 35,35" fill="#FF3D00" />
                    <!-- Main Blast -->
                    <polygon points="45,10 60,40 90,40 65,60 75,90 45,70 15,90 25,60 0,40 30,40" fill="#2962FF"
                        stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Target Scope -->
                    <circle cx="45" cy="55" r="25" fill="#fff" stroke="#111" stroke-width="3" />
                    <!-- Crosshairs -->
                    <line x1="45" y1="20" x2="45" y2="90" stroke="#111" stroke-width="3" />
                    <line x1="10" y1="55" x2="80" y2="55" stroke="#111" stroke-width="3" />
                    <!-- Bullet Hole -->
                    <circle cx="55" cy="45" r="6" fill="#111" />
                    <path d="M 55,45 L 65,35 M 55,45 L 65,55 M 55,45 L 45,35" stroke="#111" stroke-width="2" />
                </svg>`,
  "wolf": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Offset shadow mouth -->
                    <path d="M 5,45 Q 50,85 95,45 Q 50,15 5,45 Z" fill="#424242" />
                    <!-- Main Snarling Mouth -->
                    <path d="M 0,40 Q 50,80 100,40 Q 50,10 0,40 Z" fill="#D50000" stroke="#111" stroke-width="3" />
                    <!-- Inner Mouth/Darkness -->
                    <path d="M 10,40 Q 50,70 90,40 Q 50,20 10,40 Z" fill="#111" />
                    <!-- Sharp Fangs -->
                    <polygon points="20,35 25,55 30,35" fill="#fff" stroke="#111" stroke-width="2" />
                    <polygon points="40,28 45,60 50,28" fill="#fff" stroke="#111" stroke-width="2" />
                    <polygon points="60,28 65,60 70,28" fill="#fff" stroke="#111" stroke-width="2" />
                    <polygon points="80,35 85,55 90,35" fill="#fff" stroke="#111" stroke-width="2" />
                    <!-- Bottom Fangs -->
                    <polygon points="35,55 40,40 45,58" fill="#fff" stroke="#111" stroke-width="2" />
                    <polygon points="55,58 60,40 65,55" fill="#fff" stroke="#111" stroke-width="2" />
                    <!-- Drool/Blood -->
                    <path d="M 30,70 Q 30,90 35,90 Q 40,90 40,75" fill="#D50000" stroke="#111" stroke-width="2" />
                    <path d="M 60,75 Q 60,95 65,95 Q 70,95 70,65" fill="#D50000" stroke="#111" stroke-width="2" />
                </svg>`,
  "jester": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Offset Shadow -->
                    <circle cx="55" cy="55" r="35" fill="#00E676" />
                    <!-- Main Face Split -->
                    <path d="M 50,15 A 35,35 0 0,0 50,85 Z" fill="#D500F9" stroke="#111" stroke-width="3" />
                    <path d="M 50,15 A 35,35 0 0,1 50,85 Z" fill="#fff" stroke="#111" stroke-width="3" />
                    <!-- Crazy Eyes -->
                    <circle cx="35" cy="40" r="8" fill="#fff" stroke="#111" stroke-width="3" />
                    <circle cx="35" cy="40" r="3" fill="#111" />
                    <rect x="60" y="35" width="12" height="12" fill="#00E676" stroke="#111" stroke-width="3"
                        transform="rotate(25 66 41)" />
                    <circle cx="66" cy="41" r="3" fill="#111" />
                    <!-- Stitched Smile -->
                    <path d="M 25,65 Q 50,90 75,65" fill="none" stroke="#111" stroke-width="4" />
                    <line x1="35" y1="63" x2="35" y2="75" stroke="#111" stroke-width="3" />
                    <line x1="45" y1="68" x2="45" y2="80" stroke="#111" stroke-width="3" />
                    <line x1="55" y1="68" x2="55" y2="80" stroke="#111" stroke-width="3" />
                    <line x1="65" y1="63" x2="65" y2="75" stroke="#111" stroke-width="3" />
                </svg>`,
  "guard": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Wings Offset -->
                    <path d="M 50,55 Q 10,20 0,60 Q 30,80 50,55 Z" fill="#00B0FF" />
                    <path d="M 50,55 Q 90,20 100,60 Q 70,80 50,55 Z" fill="#00B0FF" />
                    <!-- Wings Main -->
                    <path d="M 50,50 Q 15,15 5,55 Q 30,75 50,50 Z" fill="#fff" stroke="#111" stroke-width="3"
                        stroke-linejoin="round" />
                    <path d="M 50,50 Q 85,15 95,55 Q 70,75 50,50 Z" fill="#fff" stroke="#111" stroke-width="3"
                        stroke-linejoin="round" />
                    <!-- Shield / Padlock Offset -->
                    <path d="M 35,25 A 15,15 0 0,1 65,25 L 65,40 L 35,40 Z" fill="#FF4081" />
                    <rect x="25" y="45" width="50" height="45" rx="5" fill="#FF4081" />
                    <!-- Shield / Padlock Main -->
                    <path d="M 30,20 A 20,20 0 0,1 70,20 L 70,35 L 30,35 Z" fill="none" stroke="#111"
                        stroke-width="4" />
                    <rect x="20" y="35" width="60" height="55" rx="8" fill="#00B0FF" stroke="#111" stroke-width="3" />
                    <!-- Keyhole -->
                    <circle cx="50" cy="55" r="8" fill="#111" />
                    <polygon points="45,60 55,60 60,80 40,80" fill="#111" />
                </svg>`,
  "mod": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Offset Crown Shadow -->
                    <polygon points="55,10 65,35 90,25 80,50 95,55 55,55 15,55 30,50 10,25 35,35" fill="#888" />
                    <!-- Main Crown -->
                    <polygon points="50,5 60,30 85,20 75,45 90,50 50,50 10,50 25,45 15,20 40,30" fill="#FFD600"
                        stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Crown Gems -->
                    <circle cx="50" cy="28" r="5" fill="#111" stroke="#FFD600" stroke-width="1.5" />
                    <circle cx="26" cy="38" r="4" fill="#111" stroke="#FFD600" stroke-width="1.5" />
                    <circle cx="74" cy="38" r="4" fill="#111" stroke="#FFD600" stroke-width="1.5" />
                    <!-- Gavel Handle -->
                    <rect x="46" y="48" width="8" height="40" rx="3" fill="#8B4513" stroke="#111" stroke-width="2"
                        transform="rotate(-30 50 68)" />
                    <!-- Gavel Head Offset -->
                    <rect x="48" y="52" width="30" height="14" rx="4" fill="#888" transform="rotate(-30 60 60)" />
                    <!-- Gavel Head Main -->
                    <rect x="44" y="48" width="30" height="14" rx="4" fill="#FFD600" stroke="#111" stroke-width="3"
                        transform="rotate(-30 60 56)" />
                    <!-- Action spark lines -->
                    <line x1="80" y1="25" x2="90" y2="15" stroke="#111" stroke-width="3" stroke-linecap="round" />
                    <line x1="83" y1="32" x2="96" y2="28" stroke="#111" stroke-width="2" stroke-linecap="round" />
                    <line x1="75" y1="18" x2="80" y2="8" stroke="#111" stroke-width="2" stroke-linecap="round" />
                </svg>`,
  "alpha_wolf": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Moon Offset -->
                    <circle cx="53" cy="38" r="28" fill="#6A0DAD" />
                    <!-- Full Moon -->
                    <circle cx="50" cy="35" r="28" fill="#B71C1C" stroke="#111" stroke-width="3" />
                    <!-- Moon Craters -->
                    <circle cx="38" cy="28" r="4" fill="none" stroke="#111" stroke-width="2" />
                    <circle cx="60" cy="42" r="3" fill="none" stroke="#111" stroke-width="1.5" />
                    <!-- Wolf Silhouette Head -->
                    <polygon points="50,10 42,30 20,35 35,50 30,70 50,60 70,70 65,50 80,35 58,30" fill="#111" />
                    <!-- Wolf Ears (pointy) -->
                    <polygon points="30,22 22,0 40,18" fill="#111" />
                    <polygon points="70,22 78,0 60,18" fill="#111" />
                    <!-- Red Glowing Eyes -->
                    <ellipse cx="41" cy="38" rx="5" ry="4" fill="#B71C1C" />
                    <ellipse cx="59" cy="38" rx="5" ry="4" fill="#B71C1C" />
                    <circle cx="41" cy="38" r="2" fill="#fff" />
                    <circle cx="59" cy="38" r="2" fill="#fff" />
                    <!-- Claw Marks -->
                    <path d="M 5,60 Q 15,65 10,80" fill="none" stroke="#B71C1C" stroke-width="3"
                        stroke-linecap="round" />
                    <path d="M 12,57 Q 22,62 17,77" fill="none" stroke="#B71C1C" stroke-width="3"
                        stroke-linecap="round" />
                    <path d="M 19,55 Q 29,60 24,75" fill="none" stroke="#B71C1C" stroke-width="3"
                        stroke-linecap="round" />
                    <!-- Howl lines -->
                    <path d="M 70,20 Q 80,15 90,20" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" />
                    <path d="M 73,28 Q 85,23 95,30" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" />
                    <path d="M 72,36 Q 82,33 90,40" fill="none" stroke="#111" stroke-width="1.5"
                        stroke-linecap="round" />
                </svg>`,
  "cupid": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Left heart offset shadow -->
                    <path d="M 27,38 A 14,14 0 0,1 55,38 A 14,14 0 0,1 83,38 Q 83,55 55,75 Q 27,55 27,38 Z"
                        fill="#FF1744" transform="translate(4,4)" />
                    <!-- Left Heart -->
                    <path d="M 25,35 A 13,13 0 0,1 50,35 A 13,13 0 0,1 75,35 Q 75,52 50,72 Q 25,52 25,35 Z"
                        fill="#FF1493" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Small heart (top left) -->
                    <path d="M 5,10 A 7,7 0 0,1 18,10 A 7,7 0 0,1 31,10 Q 31,20 18,28 Q 5,20 5,10 Z" fill="#FF1744"
                        stroke="#111" stroke-width="2" stroke-linejoin="round" />
                    <!-- Arrow shaft -->
                    <line x1="10" y1="90" x2="90" y2="10" stroke="#111" stroke-width="5" stroke-linecap="round" />
                    <!-- Arrow tip (top-right) -->
                    <polygon points="90,10 78,14 86,22" fill="#FF1493" stroke="#111" stroke-width="2"
                        stroke-linejoin="round" />
                    <!-- Arrow feathers (bottom-left) -->
                    <path d="M 10,90 L 5,78 L 18,82 Z" fill="#FF1493" stroke="#111" stroke-width="2" />
                    <path d="M 10,90 L 20,97 L 18,82 Z" fill="#FF1744" stroke="#111" stroke-width="2" />
                    <!-- Sparkles -->
                    <polygon points="82,55 84,50 86,55 91,57 86,59 84,64 82,59 77,57" fill="#FF1493" stroke="#111"
                        stroke-width="1.5" />
                    <polygon points="18,65 19,61 20,65 24,67 20,69 19,73 18,69 14,67" fill="#FF1744" stroke="#111"
                        stroke-width="1.5" />
                </svg>`,
  "witch": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Cauldron shadow offset -->
                    <ellipse cx="55" cy="78" rx="30" ry="10" fill="#76FF03" />
                    <path d="M 27,55 Q 22,80 55,88 Q 78,80 73,55 Z" fill="#76FF03" />
                    <!-- Cauldron body -->
                    <path d="M 22,50 Q 17,78 50,86 Q 83,78 78,50 Z" fill="#333" stroke="#111" stroke-width="3" />
                    <!-- Cauldron rim -->
                    <ellipse cx="50" cy="50" rx="28" ry="8" fill="#555" stroke="#111" stroke-width="3" />
                    <!-- Cauldron legs -->
                    <rect x="28" y="82" width="8" height="10" rx="2" fill="#333" stroke="#111" stroke-width="2" />
                    <rect x="64" y="82" width="8" height="10" rx="2" fill="#333" stroke="#111" stroke-width="2" />
                    <!-- Toxic Brew surface -->
                    <ellipse cx="50" cy="50" rx="24" ry="6" fill="#76FF03" />
                    <!-- Bubbles -->
                    <circle cx="40" cy="44" r="5" fill="#76FF03" stroke="#111" stroke-width="2" />
                    <circle cx="58" cy="40" r="7" fill="#AA00FF" stroke="#111" stroke-width="2" />
                    <circle cx="68" cy="46" r="4" fill="#76FF03" stroke="#111" stroke-width="2" />
                    <!-- Skull in brew -->
                    <circle cx="50" cy="55" r="10" fill="#fff" stroke="#111" stroke-width="2" />
                    <rect x="44" y="60" width="12" height="6" rx="1" fill="#fff" stroke="#111" stroke-width="1.5" />
                    <circle cx="46" cy="54" r="2.5" fill="#111" />
                    <circle cx="54" cy="54" r="2.5" fill="#111" />
                    <line x1="48" y1="61" x2="48" y2="65" stroke="#111" stroke-width="1.5" />
                    <line x1="52" y1="61" x2="52" y2="65" stroke="#111" stroke-width="1.5" />
                    <!-- Magic stars -->
                    <polygon points="15,15 17,8 19,15 26,17 19,19 17,26 15,19 8,17" fill="#AA00FF" stroke="#111"
                        stroke-width="1.5" />
                    <polygon points="80,8 81,4 82,8 86,9 82,10 81,14 80,10 76,9" fill="#76FF03" stroke="#111"
                        stroke-width="1" />
                </svg>`,
  "wizard": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Tome shadow -->
                    <rect x="18" y="53" width="44" height="34" rx="4" fill="#FFD700" />
                    <!-- Spell Tome -->
                    <rect x="15" y="50" width="44" height="34" rx="4" fill="#1a237e" stroke="#111" stroke-width="3" />
                    <!-- Tome spine -->
                    <rect x="15" y="50" width="7" height="34" rx="3" fill="#0D47A1" stroke="#111" stroke-width="2" />
                    <!-- Tome pages -->
                    <line x1="27" y1="60" x2="52" y2="60" stroke="#FFD700" stroke-width="1.5" />
                    <line x1="27" y1="66" x2="52" y2="66" stroke="#FFD700" stroke-width="1.5" />
                    <line x1="27" y1="72" x2="45" y2="72" stroke="#FFD700" stroke-width="1.5" />
                    <!-- Arcane star on tome -->
                    <polygon points="37,55 39,49 41,55 47,57 41,59 39,65 37,59 31,57" fill="#00B0FF" stroke="#111"
                        stroke-width="1.5" />
                    <!-- Wand shadow -->
                    <line x1="62" y1="88" x2="92" y2="18" stroke="#FFD700" stroke-width="7" stroke-linecap="round" />
                    <!-- Wand -->
                    <line x1="60" y1="86" x2="90" y2="16" stroke="#8B4513" stroke-width="5" stroke-linecap="round" />
                    <!-- Wand tip glow -->
                    <circle cx="90" cy="16" r="7" fill="#00B0FF" stroke="#111" stroke-width="3" />
                    <circle cx="90" cy="16" r="3" fill="#fff" />
                    <!-- Lightning bolt from wand -->
                    <polygon points="90,16 75,40 82,40 65,68 80,42 73,42" fill="#FFD700" stroke="#111" stroke-width="2"
                        stroke-linejoin="round" />
                    <!-- Arcane runes -->
                    <text x="5" y="20" font-size="12" fill="#00B0FF" font-family="serif" stroke="#111"
                        stroke-width="0.5">✦</text>
                    <text x="80" y="88" font-size="10" fill="#FFD700" font-family="serif" stroke="#111"
                        stroke-width="0.5">✧</text>
                </svg>`,
  "veteran": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Medal ribbon offset -->
                    <polygon points="50,10 60,30 50,20 40,30" fill="#FF6F00" />
                    <!-- Medal ribbon -->
                    <polygon points="48,8 58,28 48,18 38,28" fill="#FF6F00" stroke="#111" stroke-width="2" />
                    <!-- Grenade shadow -->
                    <ellipse cx="38" cy="68" rx="18" ry="20" fill="#558B2F" />
                    <!-- Grenade body -->
                    <ellipse cx="35" cy="65" rx="18" ry="20" fill="#33691E" stroke="#111" stroke-width="3" />
                    <!-- Grenade texture lines -->
                    <line x1="17" y1="62" x2="53" y2="62" stroke="#111" stroke-width="2" />
                    <line x1="35" y1="45" x2="35" y2="85" stroke="#111" stroke-width="2" />
                    <line x1="19" y1="72" x2="51" y2="52" stroke="#111" stroke-width="1.5" />
                    <line x1="19" y1="52" x2="51" y2="72" stroke="#111" stroke-width="1.5" />
                    <!-- Grenade cap -->
                    <rect x="29" y="38" width="12" height="10" rx="3" fill="#558B2F" stroke="#111" stroke-width="2" />
                    <!-- Pin -->
                    <circle cx="35" cy="35" r="4" fill="none" stroke="#111" stroke-width="2.5" />
                    <line x1="35" y1="30" x2="28" y2="25" stroke="#FF6F00" stroke-width="3" stroke-linecap="round" />
                    <!-- Medal -->
                    <circle cx="73" cy="55" r="16" fill="#FF6F00" stroke="#111" stroke-width="3" />
                    <circle cx="73" cy="55" r="10" fill="#FFD700" stroke="#111" stroke-width="2" />
                    <!-- Star on medal -->
                    <polygon points="73,47 75,53 81,53 76,57 78,63 73,59 68,63 70,57 65,53 71,53" fill="#111" />
                    <!-- Bullet holes -->
                    <circle cx="82" cy="20" r="4" fill="#111" />
                    <circle cx="90" cy="30" r="3" fill="#111" />
                    <circle cx="85" cy="38" r="2.5" fill="#111" />
                </svg>`,
  "card_back": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Giant Exclamation / Action shape offset -->
                    <polygon points="50,0 65,35 100,35 75,55 85,90 50,70 15,90 25,55 0,35 35,35" fill="#00E5FF" />
                    <!-- Main Shape -->
                    <polygon points="45,5 60,40 95,40 70,60 80,95 45,75 10,95 20,60 -5,40 30,40" fill="#FFEA00"
                        stroke="#fff" stroke-width="3" stroke-linejoin="round" />

                    <!-- Wolf Head Silhouette -->
                    <polygon points="45,25 65,45 60,75 40,65 20,75 35,45" fill="#111" />
                    <!-- Wolf Ears -->
                    <polygon points="20,20 35,45 40,35" fill="#111" />
                    <polygon points="70,20 55,45 50,35" fill="#111" />
                    <!-- Glowing Wolf Eyes -->
                    <path d="M 35,50 Q 40,45 45,50 Z" fill="#D500F9" />
                    <path d="M 55,50 Q 50,45 45,50 Z" fill="#D500F9" transform="translate(10, 0)" />
                </svg>`,
  "bodyguard": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Shield shadow offset -->
                    <path d="M 55,10 L 90,20 L 90,55 Q 90,85 55,95 Q 20,85 20,55 L 20,20 Z" fill="#C62828" />
                    <!-- Shield main -->
                    <path d="M 50,7 L 85,18 L 85,52 Q 85,82 50,92 Q 15,82 15,52 L 15,18 Z" fill="#1565C0" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Shield inner layer -->
                    <path d="M 50,18 L 75,26 L 75,50 Q 75,72 50,80 Q 25,72 25,50 L 25,26 Z" fill="#1976D2" stroke="#111" stroke-width="2" />
                    <!-- Shield cross emblem -->
                    <rect x="44" y="30" width="12" height="35" rx="3" fill="#fff" />
                    <rect x="31" y="43" width="38" height="12" rx="3" fill="#fff" />
                    <!-- Bullet holes on shield -->
                    <circle cx="30" cy="30" r="4" fill="#111" />
                    <path d="M 26,26 L 34,34 M 26,34 L 34,26" stroke="#C62828" stroke-width="1.5" />
                    <circle cx="72" cy="35" r="3" fill="#111" />
                    <path d="M 69,32 L 75,38 M 69,38 L 75,32" stroke="#C62828" stroke-width="1.5" />
                    <circle cx="65" cy="70" r="3.5" fill="#111" />
                    <path d="M 62,67 L 68,73 M 62,73 L 68,67" stroke="#C62828" stroke-width="1.5" />
                    <!-- Impact sparks -->
                    <polygon points="82,60 85,53 88,60 95,63 88,66 85,73 82,66 75,63" fill="#C62828" stroke="#111" stroke-width="1.5" />
                    <polygon points="10,55 12,49 14,55 20,57 14,59 12,65 10,59 4,57" fill="#FFD700" stroke="#111" stroke-width="1.5" />
                </svg>`,
  "priest": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Light rays (background) -->
                    <line x1="50" y1="50" x2="10" y2="5" stroke="#FFD700" stroke-width="3" stroke-linecap="round" opacity="0.6" />
                    <line x1="50" y1="50" x2="90" y2="5" stroke="#FFD700" stroke-width="3" stroke-linecap="round" opacity="0.6" />
                    <line x1="50" y1="50" x2="5" y2="40" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.5" />
                    <line x1="50" y1="50" x2="95" y2="40" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.5" />
                    <line x1="50" y1="50" x2="20" y2="95" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.4" />
                    <line x1="50" y1="50" x2="80" y2="95" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.4" />
                    <!-- Cross shadow -->
                    <rect x="48" y="8" width="12" height="70" rx="3" fill="#888" transform="translate(4,4)" />
                    <rect x="20" y="28" width="68" height="12" rx="3" fill="#888" transform="translate(4,4)" />
                    <!-- Cross main -->
                    <rect x="44" y="5" width="12" height="70" rx="3" fill="#FFD700" stroke="#111" stroke-width="2" />
                    <rect x="16" y="25" width="68" height="12" rx="3" fill="#FFD700" stroke="#111" stroke-width="2" />
                    <!-- Cross glow center -->
                    <circle cx="50" cy="31" r="7" fill="#fff" stroke="#FFD700" stroke-width="2" />
                    <!-- Holy water drops -->
                    <path d="M 15,72 Q 15,83 20,83 Q 25,83 25,72 Q 20,62 15,72 Z" fill="#00B0FF" stroke="#111" stroke-width="1.5" />
                    <path d="M 75,65 Q 75,74 79,74 Q 83,74 83,65 Q 79,57 75,65 Z" fill="#00B0FF" stroke="#111" stroke-width="1.5" />
                    <path d="M 88,80 Q 88,87 91,87 Q 94,87 94,80 Q 91,74 88,80 Z" fill="#00B0FF" stroke="#111" stroke-width="1" />
                </svg>`,
  "mayor": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Megaphone shadow -->
                    <path d="M 58,18 L 88,5 L 88,55 L 58,42 Z" fill="#E53935" transform="translate(4,4)" />
                    <!-- Megaphone body -->
                    <path d="M 54,16 L 84,3 L 84,52 L 54,40 Z" fill="#1A237E" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Megaphone opening (bell) -->
                    <ellipse cx="84" cy="27" rx="10" ry="24" fill="#E53935" stroke="#111" stroke-width="3" />
                    <!-- Megaphone handle box -->
                    <rect x="20" y="22" width="36" height="30" rx="4" fill="#1A237E" stroke="#111" stroke-width="3" />
                    <!-- Handle grip lines -->
                    <line x1="20" y1="33" x2="56" y2="33" stroke="#fff" stroke-width="1.5" opacity="0.5" />
                    <line x1="20" y1="40" x2="56" y2="40" stroke="#fff" stroke-width="1.5" opacity="0.5" />
                    <!-- Sound waves -->
                    <path d="M 88,12 Q 98,12 98,27" fill="none" stroke="#E53935" stroke-width="3" stroke-linecap="round" />
                    <path d="M 88,6 Q 104,6 104,27" fill="none" stroke="#E53935" stroke-width="2" stroke-linecap="round" opacity="0.6" />
                    <!-- Ballot paper -->
                    <rect x="10" y="62" width="48" height="32" rx="3" fill="#fff" stroke="#111" stroke-width="2" />
                    <!-- Ballot lines -->
                    <line x1="18" y1="73" x2="50" y2="73" stroke="#111" stroke-width="1.5" />
                    <line x1="18" y1="80" x2="50" y2="80" stroke="#111" stroke-width="1.5" />
                    <line x1="18" y1="87" x2="38" y2="87" stroke="#111" stroke-width="1.5" />
                    <!-- Checkmark X2 stamp -->
                    <text x="52" y="60" font-size="22" fill="#E53935" font-family="sans-serif" font-weight="900" stroke="#111" stroke-width="1">x2</text>
                    <!-- Stars -->
                    <polygon points="8,20 9,15 10,20 15,21 10,22 9,27 8,22 3,21" fill="#E53935" stroke="#111" stroke-width="1"/>
                    <polygon points="78,72 79,67 80,72 85,73 80,74 79,79 78,74 73,73" fill="#1A237E" stroke="#111" stroke-width="1"/>
                </svg>`,
  "sheriff": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Background star burst -->
                    <polygon points="50,5 60,35 95,35 70,55 80,95 50,70 20,95 30,55 5,35 40,35" fill="#FFB300" opacity="0.3" transform="scale(0.9) translate(5,5)" />
                    <!-- Gun 1 (Left to Right) shadow -->
                    <path d="M 12,82 L 42,52 L 28,42 Z" fill="#1565C0" opacity="0.5" transform="translate(3,3)" />
                    <!-- Gun 1 -->
                    <path d="M 10,80 L 45,50 M 30,40 L 45,50" stroke="#111" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                    <!-- Gun 1 handle -->
                    <path d="M 10,80 L 25,70" stroke="#795548" stroke-width="6" stroke-linecap="round" />
                    <circle cx="15" cy="75" r="2" fill="#111" />
                    <!-- Gun 2 (Right to Left) -->
                    <path d="M 90,80 L 55,50 M 70,40 L 55,50" stroke="#111" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                    <!-- Gun 2 handle -->
                    <path d="M 90,80 L 75,70" stroke="#795548" stroke-width="6" stroke-linecap="round" />
                    <circle cx="85" cy="75" r="2" fill="#111" />
                    <!-- Bullet shots & Smoke -->
                    <circle cx="20" cy="20" r="15" fill="#f5f5f5" stroke="#111" stroke-width="2" opacity="0.8" />
                    <circle cx="80" cy="20" r="15" fill="#f5f5f5" stroke="#111" stroke-width="2" opacity="0.8" />
                    <circle cx="20" cy="20" r="4" fill="#FFB300" stroke="#111" stroke-width="1.5" />
                    <circle cx="80" cy="20" r="4" fill="#FFB300" stroke="#111" stroke-width="1.5" />
                    <!-- Sheriff Star Badge Main -->
                    <polygon points="50,15 60,40 85,40 65,60 75,85 50,70 25,85 35,60 15,40 40,40" fill="#FFB300" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Badge inner details -->
                    <circle cx="50" cy="52" r="12" fill="none" stroke="#111" stroke-width="2" />
                    <text x="50" y="56" font-family="'Righteous', cursive" font-size="10" fill="#111" text-anchor="middle">LAW</text>
                    <!-- Sparkles on badge -->
                    <polygon points="40,25 41,20 42,25 47,26 42,27 41,32 40,27 35,26" fill="#fff" stroke="#111" stroke-width="1"/>
                </svg>`,
  "vil1": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 47,22 L 47,82 M 40,25 Q 47,40 54,25" stroke="#FBC02D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(4,4)"/>
                    <line x1="42" y1="20" x2="42" y2="35" stroke="#FBC02D" stroke-width="5" stroke-linecap="round" transform="translate(4,4)"/>
                    <line x1="52" y1="20" x2="52" y2="35" stroke="#FBC02D" stroke-width="5" stroke-linecap="round" transform="translate(4,4)"/>
                    <!-- pitchfork -->
                    <path d="M 47,22 L 47,82 M 40,25 Q 47,45 54,25" stroke="#111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <line x1="42" y1="20" x2="42" y2="35" stroke="#111" stroke-width="3" stroke-linecap="round"/>
                    <line x1="52" y1="20" x2="52" y2="35" stroke="#111" stroke-width="3" stroke-linecap="round"/>
                    <!-- wheat -->
                    <path d="M 60,80 Q 70,60 80,40" stroke="#FBC02D" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <ellipse cx="73" cy="53" rx="3" ry="8" fill="#FBC02D" stroke="#111" stroke-width="1.5" transform="rotate(30 73 53)"/>
                    <ellipse cx="68" cy="62" rx="3" ry="8" fill="#FBC02D" stroke="#111" stroke-width="1.5" transform="rotate(40 68 62)"/>
                    <ellipse cx="78" cy="46" rx="3" ry="8" fill="#FBC02D" stroke="#111" stroke-width="1.5" transform="rotate(20 78 46)"/>
                    <ellipse cx="65" cy="50" rx="3" ry="8" fill="#FBC02D" stroke="#111" stroke-width="1.5" transform="rotate(60 65 50)"/>
                    <ellipse cx="73" cy="42" rx="3" ry="8" fill="#FBC02D" stroke="#111" stroke-width="1.5" transform="rotate(70 73 42)"/>
                    <!-- sun -->
                    <circle cx="25" cy="30" r="12" fill="#FBC02D" stroke="#111" stroke-width="2"/>
                    <line x1="25" y1="10" x2="25" y2="15" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <line x1="25" y1="45" x2="25" y2="50" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <line x1="5" y1="30" x2="10" y2="30" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <line x1="40" y1="30" x2="45" y2="30" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                </svg>`,
  "vil2": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 20,70 L 80,30" stroke="#F48FB1" stroke-width="18" stroke-linecap="round" transform="translate(4,4)"/>
                    <rect x="25" y="45" width="40" height="25" rx="10" fill="#F48FB1" transform="translate(4,4)"/>
                    <!-- rolling pin -->
                    <path d="M 20,70 L 80,30" stroke="#111" stroke-width="14" stroke-linecap="round" />
                    <path d="M 24,67 L 76,33" stroke="#F48FB1" stroke-width="10" stroke-linecap="round" />
                    <line x1="12" y1="75" x2="22" y2="68" stroke="#111" stroke-width="6" stroke-linecap="round" />
                    <line x1="78" y1="32" x2="88" y2="25" stroke="#111" stroke-width="6" stroke-linecap="round" />
                    <!-- bread loaf -->
                    <path d="M 25,60 Q 25,45 45,45 Q 65,45 65,60 L 65,70 L 25,70 Z" fill="#8D6E63" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                    <!-- score marks -->
                    <line x1="35" y1="50" x2="30" y2="60" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <line x1="45" y1="50" x2="40" y2="60" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <line x1="55" y1="50" x2="50" y2="60" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    <!-- flour dust/sparkles -->
                    <circle cx="20" cy="40" r="2" fill="#F48FB1"/>
                    <circle cx="28" cy="30" r="3" fill="#F48FB1"/>
                    <circle cx="70" cy="80" r="2" fill="#F48FB1"/>
                    <circle cx="60" cy="85" r="3" fill="#F48FB1"/>
                </svg>`,
  "vil3": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 20,70 L 80,70 L 70,50 L 85,50 Q 90,50 85,40 L 30,40 L 30,50 L 40,50 Z" fill="#D84315" transform="translate(4,4)"/>
                    <!-- anvil -->
                    <path d="M 20,70 L 80,70 L 70,50 L 85,50 L 85,45 Q 95,45 85,38 L 25,38 L 25,47 L 35,50 Z" fill="#607D8B" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                    <line x1="35" y1="50" x2="70" y2="50" stroke="#111" stroke-width="2"/>
                    <line x1="40" y1="45" x2="75" y2="45" stroke="#fff" stroke-width="1.5" opacity="0.3"/>
                    <!-- hammer -->
                    <line x1="50" y1="10" x2="30" y2="40" stroke="#111" stroke-width="6" stroke-linecap="round" />
                    <rect x="25" y="28" width="16" height="24" rx="2" fill="#D84315" stroke="#111" stroke-width="3" transform="rotate(-55 33 40)"/>
                    <!-- sparks -->
                    <polygon points="15,35 17,30 22,32 18,36" fill="#FFC107" />
                    <polygon points="10,48 15,48 12,52 10,48" fill="#D84315" />
                    <circle cx="8" cy="40" r="2" fill="#FFC107"/>
                    <circle cx="24" cy="22" r="3" fill="#D84315"/>
                    <circle cx="48" cy="30" r="2" fill="#FFC107"/>
                </svg>`,
  "werewolf2": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 25,10 Q 15,50 30,90" fill="none" stroke="#311B92" stroke-width="12" stroke-linecap="round" transform="translate(4,4)" />
                    <path d="M 50,5 Q 40,50 55,95" fill="none" stroke="#311B92" stroke-width="12" stroke-linecap="round" transform="translate(4,4)" />
                    <path d="M 75,15 Q 65,55 80,85" fill="none" stroke="#311B92" stroke-width="12" stroke-linecap="round" transform="translate(4,4)" />
                    <!-- slash marks base white (like tearing canvas) -->
                    <path d="M 25,10 Q 15,50 30,90" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" />
                    <path d="M 50,5 Q 40,50 55,95" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" />
                    <path d="M 75,15 Q 65,55 80,85" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" />
                    <!-- inner tear orange/red -->
                    <path d="M 25,10 Q 15,50 30,90" fill="none" stroke="#FF6D00" stroke-width="4" stroke-linecap="round" />
                    <path d="M 50,5 Q 40,50 55,95" fill="none" stroke="#D50000" stroke-width="4" stroke-linecap="round" />
                    <path d="M 75,15 Q 65,55 80,85" fill="none" stroke="#FF6D00" stroke-width="4" stroke-linecap="round" />
                    <!-- details - jagged edges and blood spatter -->
                    <path d="M 23,40 L 15,45 M 24,60 L 18,55" stroke="#111" stroke-width="2" />
                    <path d="M 47,30 L 35,35 M 48,70 L 42,75" stroke="#111" stroke-width="2" />
                    <path d="M 72,50 L 65,45" stroke="#111" stroke-width="2" />
                    <!-- blood drops -->
                    <circle cx="35" cy="85" r="3" fill="#D50000" stroke="#111" stroke-width="1.5" />
                    <circle cx="62" cy="70" r="2" fill="#D50000" stroke="#111" stroke-width="1.5" />
                    <circle cx="45" cy="25" r="2" fill="#D50000" stroke="#111" stroke-width="1.5" />
                </svg>`,
  "lone_wolf": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 50,10 C 20,10 15,40 25,85 L 50,85 Z" fill="#4A148C" transform="translate(4,4)" />
                    <path d="M 50,10 C 80,10 85,40 75,85 L 50,85 Z" fill="#C6FF00" transform="translate(4,4)" />
                    
                    <!-- left face (human) -->
                    <path d="M 50,10 C 20,10 15,40 25,85 L 50,85 Z" fill="#f5f5f5" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                    <!-- left eye -->
                    <ellipse cx="38" cy="45" rx="5" ry="3" fill="#fff" stroke="#111" stroke-width="2"/>
                    <circle cx="38" cy="45" r="1.5" fill="#111"/>
                    <!-- left mouth & nose -->
                    <path d="M 50,60 L 45,65 L 50,65" fill="none" stroke="#111" stroke-width="2"/>
                    <path d="M 40,75 C 45,75 48,76 50,75" fill="none" stroke="#111" stroke-width="2"/>
                    
                    <!-- right face (wolf) -->
                    <path d="M 50,10 C 80,10 85,40 75,85 L 50,85 Z" fill="#111" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                    <!-- wolf ear fur -->
                    <polygon points="50,10 65,5 70,25 60,15 50,15" fill="#111" />
                    <polygon points="75,30 85,25 80,45 75,40" fill="#111" />
                    <!-- right eye (wolf glowing) -->
                    <polygon points="55,42 67,38 65,47 57,47" fill="#C6FF00" />
                    <circle cx="61" cy="43" r="1.5" fill="#111" />
                    <!-- right mouth & fangs -->
                    <path d="M 50,70 L 65,65 C 60,80 50,80 50,80 Z" fill="#D50000" />
                    <polygon points="53,70 55,75 57,71 59,76 62,70" fill="#fff" />
                    <path d="M 50,70 L 65,65 C 60,80 50,80 50,80" fill="none" stroke="#fff" stroke-width="2" />
                    
                    <!-- split line down the middle -->
                    <polyline points="50,10 47,30 52,50 48,70 50,85" fill="none" stroke="#111" stroke-width="3"/>
                    <!-- transformation zaps on the line -->
                    <path d="M 40,25 L 55,30 L 45,35" fill="none" stroke="#C6FF00" stroke-width="2"/>
                    <path d="M 55,60 L 45,65 L 58,70" fill="none" stroke="#C6FF00" stroke-width="2"/>
                </svg>`,
  "doppelganger": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Background Mask (Cyan) -->
                    <path d="M 30,15 C 10,15 10,55 30,80 C 50,55 50,15 30,15 Z" fill="#00ACC1" opacity="0.6" transform="translate(15, -5)" stroke="#111" stroke-width="2"/>
                    <!-- Second Background Mask (Pink) -->
                    <path d="M 30,15 C 10,15 10,55 30,80 C 50,55 50,15 30,15 Z" fill="#FF4081" opacity="0.6" transform="translate(-15, 5)" stroke="#111" stroke-width="2"/>
                    
                    <!-- Main Foreground Mask (White/Grey) -->
                    <path d="M 50,20 C 20,20 20,65 50,90 C 80,65 80,20 50,20 Z" fill="#fff" stroke="#111" stroke-width="3"/>
                    
                    <!-- Main Mask Eyes (hollow) -->
                    <path d="M 35,45 Q 40,40 45,45 Q 40,50 35,45 Z" fill="#111" />
                    <path d="M 55,45 Q 60,40 65,45 Q 60,50 55,45 Z" fill="#111" />
                    
                    <!-- Main Mask Mouth (smiling sinisterly) -->
                    <path d="M 40,65 Q 50,75 60,65 Q 50,70 40,65 Z" fill="#111" />
                    
                    <!-- Glitch effect lines overlapping the face -->
                    <line x1="20" y1="35" x2="80" y2="35" stroke="#FF4081" stroke-width="3" opacity="0.8"/>
                    <line x1="15" y1="55" x2="85" y2="55" stroke="#00ACC1" stroke-width="3" opacity="0.8"/>
                    <line x1="25" y1="75" x2="75" y2="75" stroke="#111" stroke-width="2" opacity="0.5"/>
                    <polyline points="45,45 40,45 40,55 45,55" stroke="#00ACC1" stroke-width="3" fill="none" opacity="0.8"/>
                    <polyline points="55,45 60,45 60,55 55,55" stroke="#FF4081" stroke-width="3" fill="none" opacity="0.8"/>
                    
                    <!-- Floating identity shards in background -->
                    <polygon points="10,20 15,15 20,25 12,30" fill="#00ACC1" stroke="#111" stroke-width="1.5"/>
                    <polygon points="85,30 95,25 90,40 80,35" fill="#FF4081" stroke="#111" stroke-width="1.5"/>
                    <polygon points="80,75 88,80 82,90 75,85" fill="#FFEA00" stroke="#111" stroke-width="1.5"/>
                </svg>`,
  "serial_killer": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 60,10 L 80,90 A 5,5 0 0 1 70,90 L 50,10 Z" fill="#C62828" transform="translate(6,6)" />
                    <circle cx="45" cy="50" r="30" fill="#FFEA00" transform="translate(6,6)" />
                    
                    <!-- Knife -->
                    <path d="M 60,10 L 80,90 A 5,5 0 0 1 70,90 L 50,10 Z" fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Knife handle -->
                    <path d="M 72,70 L 80,90 A 5,5 0 0 1 70,90 L 62,70 Z" fill="#111" />
                    <!-- Blood on Knife -->
                    <path d="M 60,10 L 65,30 Q 62,35 60,40 Q 55,30 55,20 Z" fill="#C62828" />
                    <circle cx="58" cy="45" r="2.5" fill="#C62828" />
                    <circle cx="53" cy="30" r="1.5" fill="#C62828" />

                    <!-- Hockey Mask -->
                    <circle cx="45" cy="50" r="30" fill="#f5f5f5" stroke="#111" stroke-width="3" />
                    <!-- Mask details (holes) -->
                    <circle cx="45" cy="30" r="2" fill="#111" />
                    <circle cx="35" cy="32" r="2" fill="#111" />
                    <circle cx="55" cy="32" r="2" fill="#111" />
                    <circle cx="45" cy="70" r="2" fill="#111" />
                    <circle cx="35" cy="65" r="2" fill="#111" />
                    <circle cx="55" cy="65" r="2" fill="#111" />
                    <circle cx="30" cy="55" r="2" fill="#111" />
                    <circle cx="60" cy="55" r="2" fill="#111" />
                    <circle cx="45" cy="60" r="2" fill="#111" />
                    <!-- Mask eye holes -->
                    <ellipse cx="32" cy="45" rx="5" ry="4" fill="#111" transform="rotate(-15 32 45)" />
                    <ellipse cx="58" cy="45" rx="5" ry="4" fill="#111" transform="rotate(15 58 45)" />
                    <!-- Red marks on mask -->
                    <polygon points="40,25 50,25 45,35" fill="#C62828" opacity="0.8" />
                    <polygon points="25,40 30,50 20,45" fill="#C62828" opacity="0.8" />
                    <polygon points="65,40 60,50 70,45" fill="#C62828" opacity="0.8" />
                </svg>`,
  "idiot": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 30,85 L 50,30 L 70,85 C 60,95 40,95 30,85 Z" fill="#D500F9" transform="translate(5,5)" />
                    <!-- Dunce Cap -->
                    <path d="M 30,85 L 50,30 L 70,85 C 60,95 40,95 30,85 Z" fill="#FFEA00" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Big Question Mark -->
                    <text x="50" y="75" font-family="'Righteous', cursive" font-size="40" fill="#111" stroke="#fff" stroke-width="1.5" text-anchor="middle" font-weight="900" transform="rotate(-10 50 75)">?</text>
                    <!-- Cap base rim -->
                    <path d="M 25,85 C 40,100 60,100 75,85 C 60,80 40,80 25,85 Z" fill="#fff" stroke="#111" stroke-width="2" />
                    <!-- Pinwheel Stick -->
                    <line x1="50" y1="30" x2="50" y2="15" stroke="#111" stroke-width="3" />
                    <!-- Pinwheel Blades -->
                    <path d="M 50,15 L 40,10 L 50,5 L 60,10 Z" fill="#FFEA00" stroke="#111" stroke-width="2" transform="rotate(45 50 15)" />
                    <path d="M 50,15 L 40,10 L 50,5 L 60,10 Z" fill="#D500F9" stroke="#111" stroke-width="2" transform="rotate(135 50 15)" />
                    <circle cx="50" cy="15" r="2.5" fill="#111" />
                    
                    <!-- Dazed stars floating -->
                    <polygon points="20,30 22,25 24,30 29,32 24,34 22,39 20,34 15,32" fill="#D500F9" stroke="#111" stroke-width="1.5" />
                    <polygon points="85,45 87,40 89,45 94,47 89,49 87,54 85,49 80,47" fill="#fff" stroke="#111" stroke-width="1.5" />
                    <polygon points="75,20 76,17 77,20 80,21 77,22 76,25 75,22 72,21" fill="#FFEA00" stroke="#111" stroke-width="1.5" />
                </svg>`,
  "prince": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- shadow -->
                    <path d="M 20,70 L 10,35 L 30,50 L 50,20 L 70,50 L 90,35 L 80,70 Z" fill="#2962FF" transform="translate(5,5)" />
                    <!-- Crown Base Shape -->
                    <path d="M 20,70 L 10,35 L 30,50 L 50,20 L 70,50 L 90,35 L 80,70 Z" fill="#FFC107" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                    <!-- Crown Lower Band -->
                    <rect x="22" y="70" width="56" height="10" rx="2" fill="#fff" stroke="#111" stroke-width="3" />
                    <!-- Base Gems -->
                    <circle cx="35" cy="75" r="3" fill="#D50000" stroke="#111" stroke-width="1.5" />
                    <circle cx="50" cy="75" r="3" fill="#2962FF" stroke="#111" stroke-width="1.5" />
                    <circle cx="65" cy="75" r="3" fill="#00E676" stroke="#111" stroke-width="1.5" />
                    <!-- Peak Gems -->
                    <circle cx="10" cy="35" r="4" fill="#fff" stroke="#111" stroke-width="2" />
                    <circle cx="30" cy="50" r="3" fill="#fff" stroke="#111" stroke-width="2" />
                    <circle cx="50" cy="20" r="5" fill="#fff" stroke="#111" stroke-width="2" />
                    <circle cx="70" cy="50" r="3" fill="#fff" stroke="#111" stroke-width="2" />
                    <circle cx="90" cy="35" r="4" fill="#fff" stroke="#111" stroke-width="2" />
                    
                    <!-- Inner details -->
                    <path d="M 22,65 C 40,80 60,80 78,65" fill="none" stroke="#2962FF" stroke-width="2" opacity="0.5" />
                    <path d="M 35,45 L 50,30 L 65,45" fill="none" stroke="#D50000" stroke-width="2" stroke-linecap="round" />
                    <!-- Sparkles -->
                    <polygon points="50,5 51,0 52,5 57,6 52,7 51,12 50,7 45,6" fill="#fff" stroke="#111" stroke-width="1" />
                    <polygon points="25,25 26,21 27,25 31,26 27,27 26,31 25,27 21,26" fill="#FFC107" stroke="#111" stroke-width="1" />
                    <polygon points="75,25 76,21 77,25 81,26 77,27 76,31 75,27 71,26" fill="#FFC107" stroke="#111" stroke-width="1" />
                </svg>`,
  "little_girl": `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- pitch black background offset for pop-art -->
                    <rect x="0" y="0" width="100" height="100" fill="#6200EA" transform="translate(4,4)" />
                    <rect x="0" y="0" width="100" height="100" fill="#111" stroke="#111" stroke-width="3" />
                    
                    <!-- Left Eye -->
                    <ellipse cx="30" cy="50" rx="18" ry="12" fill="#fff" stroke="#64FFDA" stroke-width="3" />
                    <circle cx="30" cy="50" r="6" fill="#6200EA" />
                    <circle cx="32" cy="48" r="2" fill="#fff" />
                    
                    <!-- Right Eye -->
                    <ellipse cx="70" cy="50" rx="18" ry="12" fill="#fff" stroke="#64FFDA" stroke-width="3" />
                    <circle cx="70" cy="50" r="6" fill="#D50000" /> <!-- Right eye pupil red for terror/wolf reflection -->
                    <circle cx="72" cy="48" r="2" fill="#fff" />

                    <!-- Eyelashes & Brows -->
                    <path d="M 12,45 C 20,35 40,35 48,45" fill="none" stroke="#64FFDA" stroke-width="2" stroke-linecap="round" />
                    <path d="M 52,45 C 60,35 80,35 88,45" fill="none" stroke="#64FFDA" stroke-width="2" stroke-linecap="round" />
                    
                    <!-- Tiny Hands tugging at the bottom edge -->
                    <path d="M 20,100 C 20,85 40,85 40,100 Z" fill="#f5f5f5" stroke="#64FFDA" stroke-width="2" />
                    <line x1="25" y1="90" x2="25" y2="100" stroke="#64FFDA" stroke-width="2" />
                    <line x1="30" y1="88" x2="30" y2="100" stroke="#64FFDA" stroke-width="2" />
                    <line x1="35" y1="90" x2="35" y2="100" stroke="#64FFDA" stroke-width="2" />

                    <path d="M 60,100 C 60,85 80,85 80,100 Z" fill="#f5f5f5" stroke="#64FFDA" stroke-width="2" />
                    <line x1="65" y1="90" x2="65" y2="100" stroke="#64FFDA" stroke-width="2" />
                    <line x1="70" y1="88" x2="70" y2="100" stroke="#64FFDA" stroke-width="2" />
                    <line x1="75" y1="90" x2="75" y2="100" stroke="#64FFDA" stroke-width="2" />

                    <!-- Floating ZZZs or question marks above -->
                    <text x="50" y="25" font-family="'Righteous', cursive" font-size="12" fill="#64FFDA" opacity="0.6">?</text>
                    <text x="25" y="15" font-family="'Righteous', cursive" font-size="10" fill="#6200EA" opacity="0.8">?</text>
                    <text x="80" y="20" font-family="'Righteous', cursive" font-size="16" fill="#D50000" opacity="0.8">!</text>
                </svg>`,
};
