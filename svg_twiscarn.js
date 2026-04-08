const twiscarnArt = {
    'jester': `<svg viewBox="0 0 100 100">
                    <!-- Swirl Background -->
                    <path d="M 50 50 Q 80 10 90 50 T 50 90 T 10 50 T 50 10" fill="none" stroke="var(--c-alt)"
                        stroke-width="2.5" opacity="0.6" />

                    <!-- Twisted Hat -->
                    <path d="M 35 40 Q 10 10 5 35 Q 20 45 40 40 Z" fill="var(--c-neon)" stroke="#000"
                        stroke-width="3" />
                    <path d="M 65 40 Q 90 10 95 35 Q 80 45 60 40 Z" fill="var(--c-alt)" stroke="#000"
                        stroke-width="3" />
                    <circle cx="5" cy="35" r="5" fill="#fff" stroke="#000" stroke-width="2.5" />
                    <circle cx="95" cy="35" r="5" fill="#fff" stroke="#000" stroke-width="2.5" />

                    <!-- Split Mask -->
                    <path d="M 50 35 C 20 35 25 80 50 90 C 75 80 80 35 50 35 Z" fill="#fff" stroke="#000"
                        stroke-width="4" />
                    <line x1="50" y1="35" x2="50" y2="90" stroke="#000" stroke-width="3.5" />

                    <!-- Eyes -->
                    <circle cx="36" cy="55" r="7" fill="#000" />
                    <circle cx="36" cy="53" r="2.5" fill="var(--c-neon)" />
                    <path d="M 64 50 L 71 60 L 57 60 Z" fill="#000" /> <!-- Triangle psycho eye -->
                    <circle cx="64" cy="57" r="2" fill="var(--c-alt)" />

                    <!-- Mouths -->
                    <path d="M 28 75 Q 38 65 47 75" fill="none" stroke="#000" stroke-width="3" /> <!-- Frown -->
                    <path d="M 53 70 Q 66 88 77 65" fill="none" stroke="#000" stroke-width="4" /> <!-- Smile -->

                    <circle cx="36" cy="67" r="2" fill="#000" /> <!-- Tear -->
                </svg>`,
    'seer': `<svg viewBox="0 0 100 100">
                    <!-- Tarot cards swirling -->
                    <rect x="15" y="20" width="16" height="26" fill="var(--c-alt)" stroke="#000" stroke-width="2"
                        transform="rotate(-25 23 33)" />
                    <rect x="69" y="15" width="16" height="26" fill="var(--c-neon)" stroke="#000" stroke-width="2"
                        transform="rotate(35 77 28)" />
                    <rect x="75" y="60" width="16" height="26" fill="var(--c-alt)" stroke="#000" stroke-width="2"
                        transform="rotate(-45 83 73)" />

                    <!-- Crystal Ball Stand -->
                    <path d="M 35 85 L 65 85 L 60 75 L 40 75 Z" fill="var(--c-alt)" stroke="#000" stroke-width="3" />
                    <ellipse cx="50" cy="85" rx="18" ry="4" fill="var(--c-neon)" stroke="#000" stroke-width="2" />

                    <!-- Crystal Ball -->
                    <circle cx="50" cy="50" r="28" fill="rgba(0, 240, 255, 0.2)" stroke="var(--c-neon)"
                        stroke-width="3" />
                    <circle cx="50" cy="50" r="24" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="4,4"
                        opacity="0.6" />

                    <!-- The Eye Inside -->
                    <path d="M 28 50 Q 50 30 72 50 Q 50 70 28 50 Z" fill="#000" stroke="var(--c-alt)"
                        stroke-width="3" />
                    <circle cx="50" cy="50" r="10" fill="var(--c-neon)" />
                    <circle cx="50" cy="50" r="4" fill="#000" />
                    <circle cx="47" cy="47" r="2" fill="#fff" /> <!-- Eye glare -->
                </svg>`,
    'hunter': `<svg viewBox="0 0 100 100">
                    <!-- Shattered Bullseye Target -->
                    <circle cx="50" cy="45" r="35" fill="none" stroke="var(--c-neon)" stroke-width="4" />
                    <circle cx="50" cy="45" r="22" fill="none" stroke="var(--c-alt)" stroke-width="4" />
                    <circle cx="50" cy="45" r="8" fill="var(--c-neon)" />

                    <!-- Shatter lines -->
                    <path d="M 50 45 L 15 20 M 50 45 L 85 30 M 50 45 L 70 85 M 50 45 L 20 70" stroke="#000"
                        stroke-width="4" />
                    <path d="M 50 45 L 15 20 M 50 45 L 85 30 M 50 45 L 70 85 M 50 45 L 20 70" stroke="var(--c-alt)"
                        stroke-width="1.5" />

                    <!-- Heavy Crossbow Bolt firing up -->
                    <rect x="46" y="20" width="8" height="65" rx="2" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />

                    <!-- Bolt Head -->
                    <polygon points="50,5 40,25 60,25" fill="var(--c-alt)" stroke="#000" stroke-width="2" />
                    <line x1="50" y1="5" x2="50" y2="25" stroke="#000" stroke-width="2" />

                    <!-- Crossbow bow limbs (Abstract) -->
                    <path d="M 10 60 Q 50 40 90 60" fill="none" stroke="#000" stroke-width="8" stroke-linecap="round" />
                    <path d="M 10 60 Q 50 40 90 60" fill="none" stroke="var(--c-alt)" stroke-width="4"
                        stroke-linecap="round" />

                    <!-- Bow string drawn back -->
                    <path d="M 10 60 L 50 80 L 90 60" fill="none" stroke="var(--c-neon)" stroke-width="3"
                        stroke-linejoin="round" />
                </svg>`,
    'werewolf': `<svg viewBox="0 0 100 100">
                    <!-- Circus Ring of Fire Broken -->
                    <path d="M 15 50 A 35 35 0 1 1 85 50 A 35 35 0 0 1 70 80" fill="none" stroke="var(--c-alt)"
                        stroke-width="4" stroke-dasharray="8,4" />

                    <!-- Claw Slash in the background -->
                    <path d="M 75 10 Q 50 40 30 90 M 90 20 Q 65 50 45 100 M 60 0 Q 35 30 15 80" fill="none"
                        stroke="var(--c-neon)" stroke-width="3" opacity="0.8" />

                    <!-- Massive Wolf Jaws snapping -->
                    <!-- Upper Jaw -->
                    <path d="M 10 40 Q 50 10 90 40 L 80 50 Q 50 30 20 50 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <polygon points="25,48 30,65 35,42" fill="#fff" />
                    <polygon points="40,38 45,70 50,34" fill="var(--c-neon)" /> <!-- Main fang bleeding -->
                    <polygon points="55,32 60,60 65,37" fill="#fff" />
                    <polygon points="70,41 75,55 80,45" fill="#fff" />

                    <!-- Lower Jaw -->
                    <path d="M 15 75 Q 50 95 85 75 L 75 65 Q 50 80 25 65 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <polygon points="30,69 35,50 40,73" fill="#fff" />
                    <polygon points="45,77 50,45 55,79" fill="var(--c-alt)" /> <!-- Toxic fang -->
                    <polygon points="60,76 65,55 70,72" fill="#fff" />

                    <!-- Blood Drips -->
                    <path d="M 45 70 L 46 90 A 2 2 0 0 1 44 90 Z" fill="var(--c-neon)" />
                    <circle cx="50" cy="85" r="3" fill="var(--c-neon)" />
                    <circle cx="60" cy="80" r="2" fill="var(--c-neon)" />
                </svg>`,
    'guardian': `<svg viewBox="0 0 100 100">
                    <!-- Heavy Chains -->
                    <circle cx="15" cy="20" r="8" fill="none" stroke="#000" stroke-width="4" />
                    <circle cx="15" cy="20" r="8" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />
                    <circle cx="85" cy="20" r="8" fill="none" stroke="#000" stroke-width="4" />
                    <circle cx="85" cy="20" r="8" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />
                    <path d="M 15 28 L 30 45 M 85 28 L 70 45" stroke="#000" stroke-width="5" stroke-linecap="round" />

                    <!-- Massive Padlock / Shield -->
                    <rect x="25" y="40" width="50" height="45" rx="5" fill="#000" stroke="var(--c-neon)"
                        stroke-width="3" />
                    <rect x="30" y="45" width="40" height="35" rx="2" fill="var(--c-dark)" stroke="var(--c-alt)"
                        stroke-width="1" />

                    <!-- Lock U-Bar -->
                    <path d="M 35 40 L 35 25 A 15 15 0 0 1 65 25 L 65 40" fill="none" stroke="#000" stroke-width="8" />
                    <path d="M 35 40 L 35 25 A 15 15 0 0 1 65 25 L 65 40" fill="none" stroke="var(--c-neon)"
                        stroke-width="3" />

                    <!-- Glowing Keyhole -->
                    <circle cx="50" cy="55" r="6" fill="var(--c-alt)" />
                    <polygon points="46,60 54,60 56,75 44,75" fill="var(--c-alt)" />

                    <!-- Spikes on the shield -->
                    <polygon points="25,50 15,48 25,55" fill="var(--c-neon)" />
                    <polygon points="75,50 85,48 75,55" fill="var(--c-neon)" />
                    <polygon points="25,70 15,72 25,65" fill="var(--c-neon)" />
                    <polygon points="75,70 85,72 75,65" fill="var(--c-neon)" />
                </svg>`,
    'moderator': `<svg viewBox="0 0 100 100">
                    <!-- Theatrical spotlight beams from above -->
                    <path d="M 50 5 L 20 55 L 35 55 Z" fill="var(--c-neon)" opacity="0.15" />
                    <path d="M 50 5 L 65 55 L 80 55 Z" fill="var(--c-neon)" opacity="0.15" />
                    <path d="M 50 5 L 10 70 L 20 70 Z" fill="var(--c-neon)" opacity="0.08" />
                    <path d="M 50 5 L 80 70 L 90 70 Z" fill="var(--c-neon)" opacity="0.08" />

                    <!-- Ornate Top Hat -->
                    <rect x="30" y="25" width="40" height="32" rx="2" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2.5" />
                    <rect x="20" y="55" width="60" height="6" rx="3" fill="#1a1000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Hat band with star -->
                    <rect x="30" y="47" width="40" height="5" fill="var(--c-alt)" opacity="0.9" />
                    <polygon points="50,47 52,52 50,57 48,52" fill="var(--c-neon)" />
                    <!-- Hat top shine -->
                    <line x1="38" y1="30" x2="38" y2="52" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.5" />

                    <!-- Ringmaster Staff/Baton -->
                    <rect x="60" y="18" width="5" height="65" rx="2" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Staff ornament top -->
                    <circle cx="62" cy="16" r="6" fill="var(--c-alt)" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="62" cy="16" r="3" fill="var(--c-neon)" />
                    <!-- Staff rings -->
                    <rect x="59" y="40" width="7" height="4" rx="1" fill="var(--c-neon)" />
                    <rect x="59" y="60" width="7" height="4" rx="1" fill="var(--c-neon)" />

                    <!-- Monocle / Eye of authority -->
                    <circle cx="36" cy="72" r="10" fill="none" stroke="var(--c-neon)" stroke-width="2.5" />
                    <circle cx="36" cy="72" r="5" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />
                    <circle cx="36" cy="72" r="2" fill="var(--c-neon)" opacity="0.8" />
                    <line x1="44" y1="75" x2="55" y2="82" stroke="var(--c-neon)" stroke-width="1.5" />

                    <!-- Theatrical curtain hints -->
                    <path d="M 5 5 Q 15 30 5 55 Q 20 40 15 5 Z" fill="var(--c-alt)" opacity="0.4" />
                    <path d="M 95 5 Q 85 30 95 55 Q 80 40 85 5 Z" fill="var(--c-alt)" opacity="0.4" />
                </svg>`,
    'alphawolf': `<svg viewBox="0 0 100 100">
                    <!-- Full Moon glow -->
                    <circle cx="50" cy="38" r="28" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.3" />
                    <circle cx="50" cy="38" r="22" fill="#0d2a10" stroke="var(--c-neon)" stroke-width="2"
                        opacity="0.7" />
                    <circle cx="50" cy="38" r="19" fill="#c0f0c0" opacity="0.12" />
                    <!-- Moon craters -->
                    <circle cx="43" cy="32" r="3" fill="none" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.5" />
                    <circle cx="57" cy="42" r="2" fill="none" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.4" />

                    <!-- Howling Wolf Silhouette on ridge -->
                    <!-- Body -->
                    <path
                        d="M 20 85 L 20 70 Q 25 55 35 52 Q 40 50 45 48 Q 50 30 55 20 Q 57 15 60 20 Q 62 28 58 35 Q 65 30 70 35 Q 72 42 65 45 Q 72 48 73 55 L 80 85 Z"
                        fill="#030d05" stroke="var(--c-neon)" stroke-width="2" />
                    <!-- Wolf lifted head/snout -->
                    <path d="M 55 20 Q 57 10 62 8 Q 67 6 68 12 Q 65 18 60 20 Z" fill="#030d05" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Ears -->
                    <polygon points="50,30 45,15 55,22" fill="var(--c-alt)" stroke="var(--c-neon)" stroke-width="1" />
                    <!-- Glowing Alpha Eye -->
                    <circle cx="57" cy="25" r="3" fill="var(--c-alt)" />
                    <circle cx="57" cy="25" r="1.5" fill="var(--c-neon)" />

                    <!-- Ground ridge / hill -->
                    <path d="M 5 90 Q 30 72 50 75 Q 70 78 95 90 L 95 100 L 5 100 Z" fill="#061208"
                        stroke="var(--c-neon)" stroke-width="1.5" />

                    <!-- Spectral claw marks on moon -->
                    <path d="M 34 28 Q 36 34 34 42 M 40 25 Q 42 33 40 43 M 46 24 Q 48 33 46 43" fill="none"
                        stroke="var(--c-alt)" stroke-width="1.2" opacity="0.6" />

                    <!-- Pack howl ripple lines -->
                    <path d="M 62 8 Q 78 5 88 15" fill="none" stroke="var(--c-neon)" stroke-width="1"
                        stroke-dasharray="2,2" opacity="0.5" />
                    <path d="M 63 6 Q 82 1 95 12" fill="none" stroke="var(--c-neon)" stroke-width="0.8"
                        stroke-dasharray="2,3" opacity="0.3" />
                    <path d="M 61 10 Q 75 9 84 20" fill="none" stroke="var(--c-neon)" stroke-width="0.6"
                        stroke-dasharray="1,2" opacity="0.4" />
                </svg>`,
    'cupid': `<svg viewBox="0 0 100 100">
                    <!-- Chain links looping across card -->
                    <path d="M 5 80 Q 25 60 50 65 Q 75 70 95 50" fill="none" stroke="#555" stroke-width="3"
                        stroke-dasharray="5,3" />

                    <!-- Shattered Heart Left half -->
                    <path d="M 50 75 Q 20 55 20 38 Q 20 22 35 22 Q 44 22 50 32" fill="var(--c-neon)" stroke="#000"
                        stroke-width="3" />
                    <!-- Shattered Heart Right half -->
                    <path d="M 50 75 Q 80 55 80 38 Q 80 22 65 22 Q 56 22 50 32" fill="var(--c-alt)" stroke="#000"
                        stroke-width="3" />
                    <!-- Crack/split line -->
                    <polyline points="50,32 46,42 54,50 48,58 50,75" fill="none" stroke="#000" stroke-width="3.5" />

                    <!-- Arrow piercing the heart diagonally -->
                    <!-- Shaft -->
                    <line x1="15" y1="25" x2="80" y2="70" stroke="#000" stroke-width="4" stroke-linecap="round" />
                    <line x1="15" y1="25" x2="80" y2="70" stroke="var(--c-neon)" stroke-width="1.5" />
                    <!-- Arrowhead -->
                    <polygon points="80,70 68,62 75,58" fill="var(--c-alt)" stroke="#000" stroke-width="2" />
                    <!-- Feather fletching -->
                    <path d="M 15 25 Q 5 15 10 8 Q 18 20 20 15 Q 12 28 15 25 Z" fill="var(--c-neon)" stroke="#000"
                        stroke-width="1.5" />

                    <!-- Chain cuff left -->
                    <circle cx="22" cy="85" r="6" fill="none" stroke="#888" stroke-width="3" />
                    <circle cx="22" cy="85" r="3" fill="none" stroke="var(--c-neon)" stroke-width="1.5" />
                    <!-- Chain cuff right -->
                    <circle cx="78" cy="85" r="6" fill="none" stroke="#888" stroke-width="3" />
                    <circle cx="78" cy="85" r="3" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />

                    <!-- Blood/poison drips from crack -->
                    <path d="M 49 75 L 48 84 A 2 2 0 0 1 46 84 Z" fill="var(--c-neon)" />
                    <path d="M 52 72 L 54 80 A 2 2 0 0 0 56 79 Z" fill="var(--c-alt)" />

                    <!-- Small broken wings hint -->
                    <path d="M 28 32 Q 18 20 10 28 Q 20 34 28 32 Z" fill="#fff" opacity="0.15" />
                    <path d="M 72 32 Q 82 20 90 28 Q 80 34 72 32 Z" fill="#fff" opacity="0.15" />
                </svg>`,
    'witch': `<svg viewBox="0 0 100 100">
                    <!-- Smoke/vapor wisps from cauldron -->
                    <path d="M 38 52 Q 32 40 38 30 Q 44 20 36 12" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        stroke-dasharray="3,2" opacity="0.6" />
                    <path d="M 50 48 Q 45 36 50 25 Q 55 14 48 6" fill="none" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-dasharray="3,2" opacity="0.5" />
                    <path d="M 62 52 Q 68 40 62 30 Q 56 20 64 12" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        stroke-dasharray="3,2" opacity="0.6" />

                    <!-- Cauldron body -->
                    <ellipse cx="50" cy="72" rx="28" ry="8" fill="#1a1a1a" stroke="var(--c-neon)" stroke-width="2" />
                    <path d="M 22 72 Q 18 55 22 45 L 78 45 Q 82 55 78 72 Z" fill="#111" stroke="var(--c-neon)"
                        stroke-width="2.5" />
                    <!-- Cauldron rim -->
                    <ellipse cx="50" cy="45" rx="28" ry="7" fill="#222" stroke="var(--c-neon)" stroke-width="2" />
                    <!-- Cauldron legs -->
                    <rect x="30" y="78" width="6" height="10" rx="2" fill="#333" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <rect x="64" y="78" width="6" height="10" rx="2" fill="#333" stroke="var(--c-neon)"
                        stroke-width="1" />

                    <!-- Bubbling liquid inside -->
                    <ellipse cx="50" cy="46" rx="24" ry="5" fill="var(--c-alt)" opacity="0.35" />
                    <circle cx="40" cy="44" r="3" fill="var(--c-alt)" opacity="0.5" />
                    <circle cx="55" cy="43" r="4" fill="var(--c-neon)" opacity="0.4" />
                    <circle cx="63" cy="45" r="2" fill="var(--c-alt)" opacity="0.6" />

                    <!-- Life Potion (left) - green vial -->
                    <rect x="10" y="30" width="10" height="20" rx="3" fill="#001a00" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <rect x="12" y="22" width="6" height="10" rx="2" fill="#111" stroke="var(--c-alt)"
                        stroke-width="1.5" />
                    <ellipse cx="15" cy="30" rx="5" ry="2" fill="var(--c-alt)" opacity="0.5" />
                    <rect x="11" y="38" width="8" height="8" rx="1" fill="var(--c-alt)" opacity="0.6" />
                    <!-- Life label cross -->
                    <line x1="15" y1="34" x2="15" y2="40" stroke="#fff" stroke-width="1.5" />
                    <line x1="12" y1="37" x2="18" y2="37" stroke="#fff" stroke-width="1.5" />

                    <!-- Death Potion (right) - purple vial -->
                    <rect x="80" y="30" width="10" height="20" rx="3" fill="#1a0030" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <rect x="82" y="22" width="6" height="10" rx="2" fill="#111" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <ellipse cx="85" cy="30" rx="5" ry="2" fill="var(--c-neon)" opacity="0.5" />
                    <rect x="81" y="38" width="8" height="8" rx="1" fill="var(--c-neon)" opacity="0.6" />
                    <!-- Death label skull -->
                    <circle cx="85" cy="36" r="3" fill="#fff" opacity="0.8" />
                    <line x1="83" y1="39" x2="85" y2="42" stroke="#fff" stroke-width="1" />
                    <line x1="87" y1="39" x2="85" y2="42" stroke="#fff" stroke-width="1" />

                    <!-- Stirring spoon -->
                    <line x1="65" y1="20" x2="55" y2="48" stroke="#888" stroke-width="2" stroke-linecap="round" />
                    <ellipse cx="54" cy="50" rx="4" ry="2" fill="none" stroke="#888" stroke-width="1.5" />
                </svg>`,
    'wizard': `<svg viewBox="0 0 100 100">
                    <!-- Star constellation background -->
                    <circle cx="10" cy="12" r="1" fill="var(--c-alt)" opacity="0.8" />
                    <circle cx="25" cy="8" r="1.5" fill="var(--c-alt)" opacity="0.7" />
                    <circle cx="88" cy="10" r="1" fill="var(--c-alt)" opacity="0.9" />
                    <circle cx="78" cy="18" r="1.2" fill="var(--c-alt)" opacity="0.6" />
                    <circle cx="92" cy="28" r="1" fill="var(--c-alt)" opacity="0.8" />
                    <line x1="10" y1="12" x2="25" y2="8" stroke="var(--c-alt)" stroke-width="0.5" opacity="0.3" />
                    <line x1="78" y1="18" x2="92" y2="28" stroke="var(--c-alt)" stroke-width="0.5" opacity="0.3" />
                    <line x1="88" y1="10" x2="78" y2="18" stroke="var(--c-alt)" stroke-width="0.5" opacity="0.3" />

                    <!-- Open Grimoire / Arcane Book -->
                    <rect x="12" y="50" width="76" height="42" rx="3" fill="#0a0c20" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Spine of book -->
                    <line x1="50" y1="50" x2="50" y2="92" stroke="var(--c-neon)" stroke-width="2" />
                    <!-- Left page content: arcane sigil -->
                    <circle cx="31" cy="71" r="10" fill="none" stroke="var(--c-neon)" stroke-width="1" />
                    <polygon points="31,61 25,77 37,70 25,70 37,77" fill="none" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Right page: constellation map -->
                    <circle cx="62" cy="62" r="2" fill="var(--c-alt)" />
                    <circle cx="72" cy="68" r="1.5" fill="var(--c-alt)" />
                    <circle cx="65" cy="78" r="1.5" fill="var(--c-alt)" />
                    <circle cx="75" cy="80" r="1" fill="var(--c-alt)" />
                    <circle cx="58" cy="74" r="1" fill="var(--c-alt)" />
                    <line x1="62" y1="62" x2="72" y2="68" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.6" />
                    <line x1="72" y1="68" x2="65" y2="78" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.6" />
                    <line x1="65" y1="78" x2="75" y2="80" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.6" />
                    <line x1="62" y1="62" x2="58" y2="74" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.6" />

                    <!-- Wizard Wand (diagonal) -->
                    <rect x="10" y="28" width="4" height="36" rx="2" fill="#3a2000" stroke="var(--c-neon)"
                        stroke-width="1.5" transform="rotate(-35 28 42)" />
                    <!-- Wand tip glow -->
                    <circle cx="28" cy="20" r="5" fill="var(--c-neon)" opacity="0.9" />
                    <circle cx="28" cy="20" r="8" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.4" />
                    <circle cx="28" cy="20" r="12" fill="none" stroke="var(--c-neon)" stroke-width="0.5"
                        opacity="0.2" />

                    <!-- Arcane rune floating (top right) -->
                    <circle cx="80" cy="35" r="12" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.7" />
                    <text x="80" y="39" font-size="10" text-anchor="middle" fill="var(--c-neon)" font-family="serif"
                        opacity="0.8">&#x16B3;</text>

                    <!-- Magic burst sparks from wand -->
                    <line x1="28" y1="20" x2="20" y2="10" stroke="var(--c-neon)" stroke-width="1" opacity="0.6" />
                    <line x1="28" y1="20" x2="38" y2="12" stroke="var(--c-neon)" stroke-width="1" opacity="0.5" />
                    <line x1="28" y1="20" x2="16" y2="22" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.4" />
                </svg>`,
    'veteran': `<svg viewBox="0 0 100 100">
                    <!-- Bullet holes scattered -->
                    <circle cx="15" cy="18" r="4" fill="#000" stroke="#444" stroke-width="1.5" />
                    <circle cx="15" cy="18" r="2" fill="#111" />
                    <path d="M 11 14 L 19 22 M 11 22 L 19 14" stroke="#333" stroke-width="0.8" />
                    <circle cx="85" cy="25" r="3" fill="#000" stroke="#444" stroke-width="1.5" />
                    <circle cx="82" cy="88" r="2.5" fill="#000" stroke="#444" stroke-width="1" />

                    <!-- Rifle body -->
                    <rect x="8" y="48" width="70" height="8" rx="2" fill="#2a1a00" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Barrel -->
                    <rect x="68" y="50" width="24" height="4" rx="1" fill="#111" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Stock -->
                    <path d="M 8 48 L 5 44 L 5 60 L 8 56 Z" fill="#3d2800" stroke="var(--c-neon)" stroke-width="1" />
                    <!-- Trigger guard -->
                    <path d="M 25 56 Q 30 64 35 56" fill="none" stroke="#888" stroke-width="2" />
                    <!-- Trigger -->
                    <line x1="30" y1="54" x2="30" y2="61" stroke="#ccc" stroke-width="1.5" />
                    <!-- Scope -->
                    <rect x="38" y="42" width="22" height="8" rx="3" fill="#111" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <circle cx="49" cy="46" r="3" fill="none" stroke="var(--c-alt)" stroke-width="1" />
                    <line x1="46" y1="46" x2="52" y2="46" stroke="var(--c-alt)" stroke-width="0.8" />
                    <line x1="49" y1="43" x2="49" y2="49" stroke="var(--c-alt)" stroke-width="0.8" />

                    <!-- Dog Tags hanging -->
                    <line x1="20" y1="20" x2="20" y2="38" stroke="#aaa" stroke-width="1" />
                    <rect x="14" y="30" width="12" height="10" rx="2" fill="#333" stroke="#888" stroke-width="1.5" />
                    <line x1="14" y1="35" x2="26" y2="35" stroke="#555" stroke-width="0.7" />
                    <rect x="14" y="42" width="12" height="9" rx="2" fill="#2a2a2a" stroke="#888" stroke-width="1.5" />

                    <!-- Military medal (left) -->
                    <circle cx="75" cy="75" r="8" fill="#1a1000" stroke="var(--c-neon)" stroke-width="2" />
                    <polygon points="75,68 77,73 83,73 78,77 80,83 75,79 70,83 72,77 67,73 73,73" fill="var(--c-neon)"
                        opacity="0.8" />

                    <!-- Alert/Wary eye (top center) -->
                    <path d="M 40 18 Q 50 10 60 18 Q 50 26 40 18 Z" fill="#000" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <circle cx="50" cy="18" r="4" fill="var(--c-alt)" />
                    <circle cx="50" cy="18" r="2" fill="#000" />
                    <!-- Eyebrow (stern) -->
                    <path d="M 38 12 L 62 12" stroke="var(--c-neon)" stroke-width="2" stroke-linecap="round" />
                </svg>`,
    'bodyguard': `<svg viewBox="0 0 100 100">
                    <!-- Armor plate background -->
                    <rect x="20" y="15" width="60" height="65" rx="4" fill="#111c26" stroke="var(--c-neon)"
                        stroke-width="2" />

                    <!-- Chest armor plates -->
                    <path d="M 25 20 L 50 35 L 75 20 L 75 50 Q 50 65 25 50 Z" fill="#0d1a2a" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Center chest plate lines -->
                    <line x1="50" y1="20" x2="50" y2="65" stroke="var(--c-neon)" stroke-width="1.5" opacity="0.7" />
                    <path d="M 30 30 Q 50 40 70 30" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.5" />
                    <path d="M 28 40 Q 50 52 72 40" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.5" />

                    <!-- Shoulder pauldrons -->
                    <ellipse cx="20" cy="26" rx="10" ry="7" fill="#0f1e2e" stroke="var(--c-neon)" stroke-width="2"
                        transform="rotate(-20 20 26)" />
                    <ellipse cx="80" cy="26" rx="10" ry="7" fill="#0f1e2e" stroke="var(--c-neon)" stroke-width="2"
                        transform="rotate(20 80 26)" />
                    <!-- Spikes on pauldrons -->
                    <polygon points="12,18 20,10 28,18" fill="var(--c-neon)" opacity="0.8" />
                    <polygon points="72,18 80,10 88,18" fill="var(--c-neon)" opacity="0.8" />

                    <!-- Blood stain (sacrifice mark) -->
                    <ellipse cx="50" cy="45" rx="7" ry="5" fill="var(--c-alt)" opacity="0.6" />
                    <path d="M 50 50 L 48 62 A 2 2 0 0 1 46 61 Z" fill="var(--c-alt)" opacity="0.7" />
                    <path d="M 52 52 L 54 60 A 1.5 1.5 0 0 0 56 59 Z" fill="var(--c-alt)" opacity="0.5" />

                    <!-- Shield emblem on lower armor -->
                    <path d="M 35 60 L 50 55 L 65 60 L 65 75 Q 50 85 35 75 Z" fill="#0a1520" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <path d="M 40 63 L 50 59 L 60 63 L 60 74 Q 50 81 40 74 Z" fill="none" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Cross on shield -->
                    <line x1="50" y1="61" x2="50" y2="79" stroke="var(--c-neon)" stroke-width="1.5" />
                    <line x1="42" y1="68" x2="58" y2="68" stroke="var(--c-neon)" stroke-width="1.5" />

                    <!-- Rivets on armor -->
                    <circle cx="25" cy="22" r="2" fill="var(--c-neon)" opacity="0.7" />
                    <circle cx="75" cy="22" r="2" fill="var(--c-neon)" opacity="0.7" />
                    <circle cx="25" cy="55" r="2" fill="var(--c-neon)" opacity="0.7" />
                    <circle cx="75" cy="55" r="2" fill="var(--c-neon)" opacity="0.7" />

                    <!-- Glowing eyes slot on helm (top) -->
                    <rect x="34" y="10" width="32" height="10" rx="4" fill="#0d1a2a" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <ellipse cx="43" cy="15" rx="5" ry="3" fill="var(--c-alt)" opacity="0.8" />
                    <ellipse cx="57" cy="15" rx="5" ry="3" fill="var(--c-alt)" opacity="0.8" />
                    <ellipse cx="43" cy="15" rx="2" ry="1.5" fill="#fff" opacity="0.6" />
                    <ellipse cx="57" cy="15" rx="2" ry="1.5" fill="#fff" opacity="0.6" />
                </svg>`,
    'priest': `<svg viewBox="0 0 100 100">
                    <!-- Halo (broken/twisted) -->
                    <circle cx="50" cy="18" r="14" fill="none" stroke="var(--c-neon)" stroke-width="2.5"
                        stroke-dasharray="6,3" opacity="0.9" />
                    <circle cx="50" cy="18" r="10" fill="none" stroke="var(--c-alt)" stroke-width="1" opacity="0.5" />

                    <!-- Priest robe silhouette -->
                    <path d="M 30 35 L 20 95 L 80 95 L 70 35 Q 60 30 50 32 Q 40 30 30 35 Z" fill="#0e0a00"
                        stroke="var(--c-neon)" stroke-width="2" />
                    <!-- Robe collar -->
                    <path d="M 35 35 Q 50 42 65 35 L 65 48 Q 50 55 35 48 Z" fill="#1a1000" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Robe center stripe -->
                    <line x1="50" y1="48" x2="50" y2="92" stroke="var(--c-neon)" stroke-width="1.5" opacity="0.6" />
                    <!-- Robe hem decorative line -->
                    <path d="M 22 85 Q 50 80 78 85" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.5" />

                    <!-- Large Twisted Crucifix (center chest) -->
                    <!-- Vertical beam -->
                    <rect x="47" y="50" width="6" height="30" rx="1" fill="#1a0a00" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Horizontal beam -->
                    <rect x="36" y="57" width="28" height="5" rx="1" fill="#1a0a00" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <!-- Cross glow center -->
                    <circle cx="50" cy="59" r="3" fill="var(--c-neon)" opacity="0.9" />
                    <!-- Cross tip accents -->
                    <polygon points="50,48 48,52 52,52" fill="var(--c-alt)" />
                    <polygon points="36,59 40,57 40,62" fill="var(--c-alt)" />
                    <polygon points="64,59 60,57 60,62" fill="var(--c-alt)" />

                    <!-- Rosary beads looping from hand -->
                    <path d="M 22 60 Q 15 75 22 88" fill="none" stroke="#665500" stroke-width="1.5" />
                    <circle cx="22" cy="63" r="2" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="20" cy="70" r="2" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="19" cy="78" r="2" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="21" cy="85" r="2" fill="var(--c-neon)" opacity="0.8" />

                    <!-- Holy water vial (right hand) -->
                    <rect x="72" y="58" width="8" height="18" rx="3" fill="#000830" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <rect x="74" y="53" width="4" height="7" rx="2" fill="#111" stroke="var(--c-alt)"
                        stroke-width="1.5" />
                    <ellipse cx="76" cy="58" rx="4" ry="1.5" fill="var(--c-alt)" opacity="0.4" />
                    <rect x="73" y="66" width="6" height="6" rx="1" fill="var(--c-alt)" opacity="0.5" />
                    <!-- Cross symbol on vial -->
                    <line x1="76" y1="62" x2="76" y2="70" stroke="#fff" stroke-width="1" />
                    <line x1="73" y1="66" x2="79" y2="66" stroke="#fff" stroke-width="1" />

                    <!-- Shadowed face (top, hood) -->
                    <ellipse cx="50" cy="30" rx="10" ry="10" fill="#080600" stroke="var(--c-neon)" stroke-width="1" />
                    <!-- Glowing hollow eyes -->
                    <ellipse cx="45" cy="29" rx="3" ry="2" fill="var(--c-alt)" opacity="0.9" />
                    <ellipse cx="55" cy="29" rx="3" ry="2" fill="var(--c-alt)" opacity="0.9" />
                    <ellipse cx="45" cy="29" rx="1.5" ry="1" fill="#fff" opacity="0.5" />
                    <ellipse cx="55" cy="29" rx="1.5" ry="1" fill="#fff" opacity="0.5" />
                </svg>`,
    'mayor': `<svg viewBox="0 0 100 100">
                    <!-- Grand podium / pulpit -->
                    <rect x="20" y="62" width="60" height="30" rx="3" fill="#0a1225" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <rect x="25" y="67" width="50" height="20" rx="2" fill="#050a18" stroke="var(--c-alt)"
                        stroke-width="1" />
                    <!-- Podium seal -->
                    <circle cx="50" cy="77" r="8" fill="none" stroke="var(--c-neon)" stroke-width="1.5" />
                    <polygon points="50,70 52,75 58,75 53,79 55,85 50,81 45,85 47,79 42,75 48,75" fill="var(--c-neon)"
                        opacity="0.8" />

                    <!-- Mayor sash across chest -->
                    <path d="M 25 20 L 75 50" stroke="var(--c-alt)" stroke-width="8" stroke-linecap="round"
                        opacity="0.8" />
                    <path d="M 25 20 L 75 50" stroke="var(--c-neon)" stroke-width="2" stroke-linecap="round"
                        opacity="0.6" />
                    <!-- Medal on sash -->
                    <circle cx="55" cy="38" r="5" fill="var(--c-neon)" stroke="#000" stroke-width="1.5" />
                    <circle cx="55" cy="38" r="2.5" fill="var(--c-alt)" />

                    <!-- Imposing top hat (very tall, tilted) -->
                    <rect x="32" y="8" width="36" height="30" rx="2" fill="#050a18" stroke="var(--c-neon)"
                        stroke-width="2.5" transform="rotate(5 50 22)" />
                    <rect x="24" y="36" width="52" height="7" rx="3" fill="#0a1530" stroke="var(--c-neon)"
                        stroke-width="2" transform="rotate(5 50 39)" />
                    <!-- Hat band -->
                    <rect x="32" y="30" width="36" height="5" fill="var(--c-alt)" opacity="0.9"
                        transform="rotate(5 50 32)" />
                    <!-- Hat shine -->
                    <line x1="38" y1="12" x2="38" y2="36" stroke="var(--c-neon)" stroke-width="0.7" opacity="0.4"
                        transform="rotate(5 38 24)" />

                    <!-- Gavel (power symbol) -->
                    <rect x="62" y="28" width="18" height="8" rx="2" fill="#3a2800" stroke="var(--c-neon)"
                        stroke-width="2" transform="rotate(-35 71 32)" />
                    <line x1="58" y1="38" x2="74" y2="22" stroke="#5a3c00" stroke-width="3" stroke-linecap="round" />
                    <line x1="58" y1="38" x2="74" y2="22" stroke="var(--c-neon)" stroke-width="1" opacity="0.6" />

                    <!-- Ballot papers scattered (rigged votes) -->
                    <rect x="8" y="52" width="12" height="15" rx="1" fill="#fff" opacity="0.15"
                        transform="rotate(-15 14 59)" />
                    <line x1="10" y1="56" x2="18" y2="56" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.5"
                        transform="rotate(-15 14 56)" />
                    <line x1="10" y1="59" x2="18" y2="59" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.5"
                        transform="rotate(-15 14 59)" />
                    <rect x="80" y="48" width="12" height="15" rx="1" fill="#fff" opacity="0.15"
                        transform="rotate(10 86 55)" />
                    <line x1="82" y1="52" x2="90" y2="52" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.5"
                        transform="rotate(10 86 52)" />

                    <!-- Corrupt money bills falling -->
                    <rect x="10" y="20" width="14" height="8" rx="1" fill="#003a00" stroke="var(--c-alt)"
                        stroke-width="1" transform="rotate(20 17 24)" />
                    <line x1="12" y1="24" x2="22" y2="24" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.6"
                        transform="rotate(20 17 24)" />
                    <rect x="78" y="15" width="14" height="8" rx="1" fill="#003a00" stroke="var(--c-alt)"
                        stroke-width="1" transform="rotate(-12 85 19)" />

                    <!-- Shadowed face under hat -->
                    <ellipse cx="50" cy="44" rx="11" ry="9" fill="#070e1f" stroke="var(--c-neon)" stroke-width="1" />
                    <!-- Greedy smirk -->
                    <path d="M 42 48 Q 50 53 58 48" fill="none" stroke="var(--c-neon)" stroke-width="1.5" />
                    <!-- Beady eyes -->
                    <circle cx="44" cy="43" r="2.5" fill="var(--c-alt)" opacity="0.9" />
                    <circle cx="56" cy="43" r="2.5" fill="var(--c-alt)" opacity="0.9" />
                    <circle cx="44" cy="43" r="1" fill="#000" />
                    <circle cx="56" cy="43" r="1" fill="#000" />
                </svg>`,
    'sheriff': `<svg viewBox="0 0 100 100">
                    <!-- Wanted poster background -->
                    <rect x="12" y="8" width="76" height="55" rx="2" fill="#1a1000" stroke="var(--c-neon)"
                        stroke-width="2" opacity="0.7" />
                    <rect x="16" y="12" width="68" height="47" rx="1" fill="#0e0800" stroke="var(--c-neon)"
                        stroke-width="1" opacity="0.5" />
                    <text x="50" y="20" font-size="5" text-anchor="middle" fill="var(--c-neon)" font-family="serif"
                        font-weight="bold" opacity="0.7">WANTED</text>
                    <line x1="16" y1="22" x2="84" y2="22" stroke="var(--c-neon)" stroke-width="0.8" opacity="0.5" />
                    <text x="50" y="56" font-size="4" text-anchor="middle" fill="var(--c-alt)" font-family="serif"
                        opacity="0.6">DEAD OR ALIVE</text>

                    <!-- Silhouette face on wanted poster -->
                    <ellipse cx="50" cy="38" rx="14" ry="16" fill="#1a0f00" stroke="var(--c-neon)" stroke-width="1"
                        opacity="0.8" />
                    <!-- Cowboy hat on silhouette -->
                    <rect x="36" y="23" width="28" height="10" rx="2" fill="#0a0600" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <rect x="30" y="32" width="40" height="4" rx="2" fill="#120a00" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Eyes on poster -->
                    <ellipse cx="44" cy="38" rx="3" ry="2" fill="var(--c-alt)" opacity="0.7" />
                    <ellipse cx="56" cy="38" rx="3" ry="2" fill="var(--c-alt)" opacity="0.7" />

                    <!-- Large Sheriff Star Badge (bottom center) -->
                    <polygon points="50,62 53,70 62,70 55,75 58,83 50,78 42,83 45,75 38,70 47,70" fill="var(--c-neon)"
                        stroke="#000" stroke-width="2" />
                    <polygon points="50,65 52,70 58,70 53,73 55,79 50,76 45,79 47,73 42,70 48,70" fill="#120a00"
                        stroke="var(--c-neon)" stroke-width="1" />
                    <circle cx="50" cy="72" r="3" fill="var(--c-neon)" opacity="0.9" />

                    <!-- Revolver (left) -->
                    <!-- Barrel -->
                    <rect x="8" y="68" width="22" height="4" rx="1" fill="#1a1400" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Cylinder -->
                    <circle cx="22" cy="74" r="6" fill="#111" stroke="var(--c-neon)" stroke-width="1.5" />
                    <circle cx="20" cy="72" r="1.5" fill="var(--c-alt)" opacity="0.8" />
                    <circle cx="24" cy="72" r="1.5" fill="var(--c-alt)" opacity="0.8" />
                    <circle cx="22" cy="75" r="1.5" fill="var(--c-alt)" opacity="0.8" />
                    <!-- Handle -->
                    <path d="M 15 72 L 10 82 L 18 82 L 20 72 Z" fill="#3a2800" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Muzzle flash -->
                    <path d="M 8 68 L 3 65 M 8 70 L 2 70 M 8 72 L 3 75" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-linecap="round" opacity="0.8" />

                    <!-- Bullet casings scattered -->
                    <rect x="70" y="65" width="4" height="10" rx="1" fill="var(--c-neon)" opacity="0.6"
                        transform="rotate(15 72 70)" />
                    <rect x="78" y="72" width="4" height="10" rx="1" fill="var(--c-neon)" opacity="0.5"
                        transform="rotate(-10 80 77)" />
                    <rect x="85" y="62" width="4" height="10" rx="1" fill="var(--c-neon)" opacity="0.4"
                        transform="rotate(5 87 67)" />

                    <!-- Smoke wisps from barrel -->
                    <path d="M 8 68 Q 5 60 8 54" fill="none" stroke="#888" stroke-width="1" stroke-dasharray="2,2"
                        opacity="0.4" />
                    <path d="M 6 70 Q 3 62 5 55" fill="none" stroke="#666" stroke-width="0.8" stroke-dasharray="2,3"
                        opacity="0.3" />
                </svg>`,
    'villager1': `<svg viewBox="0 0 100 100">
                    <!-- Crossed pitchfork and torch -->

                    <!-- Torch handle (diagonal back) -->
                    <rect x="25" y="30" width="6" height="50" rx="2" fill="#3d2114" stroke="var(--c-neon)"
                        stroke-width="1.5" transform="rotate(35 28 55)" />
                    <!-- Torch basket -->
                    <polygon points="50,25 45,35 60,35 55,25" fill="#1a110d" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Torch Fire -->
                    <path d="M 52 25 Q 45 15 55 5 Q 60 15 52 25 Z" fill="var(--c-neon)" />
                    <path d="M 52 22 Q 50 15 55 10 Q 57 15 54 20 Z" fill="var(--c-alt)" />

                    <!-- Pitchfork handle (diagonal front) -->
                    <rect x="65" y="30" width="6" height="60" rx="3" fill="#4a2e1d" stroke="var(--c-alt)"
                        stroke-width="1.5" transform="rotate(-35 68 60)" />
                    <!-- Pitchfork head/tines -->
                    <path d="M 25 35 L 45 35 L 45 40 L 25 40 Z" fill="#1a110d" stroke="var(--c-alt)" stroke-width="1.5"
                        transform="rotate(-35 45 35)" />
                    <path d="M 25 35 L 20 15 M 35 35 L 35 15 M 45 35 L 50 15" stroke="var(--c-alt)" stroke-width="2.5"
                        stroke-linecap="square" />

                    <!-- Blood splatters on pitchfork -->
                    <circle cx="20" cy="15" r="2.5" fill="var(--c-alt)" opacity="0.8" />
                    <path d="M 20 15 L 18 22 A 1 1 0 0 0 22 22 Z" fill="var(--c-alt)" opacity="0.7" />
                    <circle cx="35" cy="18" r="2" fill="var(--c-alt)" opacity="0.8" />
                    <circle cx="50" cy="15" r="2.5" fill="var(--c-alt)" opacity="0.8" />

                    <!-- Hanging rope/noose (hint of hanging) -->
                    <path d="M 10 0 L 10 40 Q 10 50 20 50 Q 30 50 30 40 L 30 35" fill="none" stroke="#6b5035"
                        stroke-width="2.5" opacity="0.6" stroke-dasharray="2,1" />
                    <ellipse cx="20" cy="40" rx="10" ry="15" fill="none" stroke="#6b5035" stroke-width="2.5"
                        opacity="0.6" stroke-dasharray="2,1" />
                    <!-- Rope knot -->
                    <rect x="18" y="25" width="4" height="10" rx="1" fill="#6b5035" opacity="0.8" />

                    <!-- Angry eye / paranoia in the dark -->
                    <path d="M 75 75 Q 85 70 95 75 Q 85 80 75 75 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="1.5" opacity="0.8" />
                    <circle cx="85" cy="75" r="3" fill="var(--c-neon)" />
                    <circle cx="85" cy="75" r="1.5" fill="#000" />
                    <line x1="75" y1="70" x2="90" y2="73" stroke="var(--c-alt)" stroke-width="2"
                        stroke-linecap="round" />
                </svg>`,
    'villager2': `<svg viewBox="0 0 100 100">
                    <!-- Heavy Wooden Door Barricade -->
                    <rect x="25" y="10" width="50" height="80" rx="3" fill="#140f0c" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Wood planks on door -->
                    <line x1="40" y1="10" x2="40" y2="90" stroke="#0a0705" stroke-width="2" />
                    <line x1="60" y1="10" x2="60" y2="90" stroke="#0a0705" stroke-width="2" />
                    <!-- Wood grain details -->
                    <path d="M 30 15 Q 35 30 28 45 M 32 55 Q 38 70 30 85" fill="none" stroke="var(--c-neon)"
                        stroke-width="0.5" opacity="0.3" />
                    <path d="M 50 15 Q 45 40 52 65 M 50 75 Q 48 82 52 88" fill="none" stroke="var(--c-neon)"
                        stroke-width="0.5" opacity="0.3" />
                    <path d="M 70 20 Q 65 35 72 50 M 68 60 Q 75 75 68 85" fill="none" stroke="var(--c-neon)"
                        stroke-width="0.5" opacity="0.3" />

                    <!-- Heavy crossbars nailed shut -->
                    <rect x="15" y="25" width="70" height="8" rx="1" fill="#2d1c15" stroke="var(--c-alt)"
                        stroke-width="1.5" transform="rotate(-5 50 29)" />
                    <rect x="15" y="65" width="70" height="8" rx="1" fill="#2d1c15" stroke="var(--c-alt)"
                        stroke-width="1.5" transform="rotate(8 50 69)" />
                    <!-- Diagonal plank -->
                    <rect x="20" y="38" width="60" height="6" rx="1" fill="#2d1c15" stroke="var(--c-alt)"
                        stroke-width="1" transform="rotate(35 50 41)" />

                    <!-- Bent iron nails -->
                    <line x1="22" y1="26" x2="25" y2="28" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="25" cy="28" r="1.5" fill="#000" />
                    <line x1="75" y1="28" x2="72" y2="29" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="72" cy="29" r="1.5" fill="#000" />

                    <line x1="22" y1="65" x2="25" y2="67" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="25" cy="67" r="1.5" fill="#000" />
                    <line x1="75" y1="67" x2="72" y2="69" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="72" cy="69" r="1.5" fill="#000" />

                    <circle cx="50" cy="41" r="1.5" fill="#000" />

                    <!-- Glowing Keyhole leaking light -->
                    <path d="M 47 48 A 3 3 0 1 1 53 48 L 54 58 L 46 58 Z" fill="var(--c-neon)" />
                    <!-- Light rays from keyhole -->
                    <path d="M 50 53 L 10 90 L 90 90 Z" fill="var(--c-neon)" opacity="0.1" />

                    <!-- Scratch marks (tally) on the door -->
                    <line x1="32" y1="75" x2="32" y2="82" stroke="var(--c-neon)" stroke-width="1" opacity="0.7" />
                    <line x1="35" y1="74" x2="35" y2="83" stroke="var(--c-neon)" stroke-width="1" opacity="0.7" />
                    <line x1="38" y1="76" x2="38" y2="83" stroke="var(--c-neon)" stroke-width="1" opacity="0.7" />
                    <line x1="41" y1="74" x2="41" y2="81" stroke="var(--c-neon)" stroke-width="1" opacity="0.7" />
                    <!-- The 5th slash across -->
                    <line x1="28" y1="79" x2="44" y2="78" stroke="var(--c-neon)" stroke-width="1" opacity="0.7" />

                    <!-- Bloody handprint slowly sliding down right edge of door -->
                    <path d="M 62 45 Q 65 40 68 45 Q 65 52 62 45 Z" fill="var(--c-alt)" opacity="0.8" />
                    <line x1="63" y1="42" x2="63" y2="48" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-linecap="round" />
                    <line x1="65" y1="41" x2="65" y2="47" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-linecap="round" />
                    <line x1="67" y1="42" x2="67" y2="48" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-linecap="round" />
                    <line x1="69" y1="44" x2="69" y2="49" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path d="M 64 48 L 64 56" stroke="var(--c-alt)" stroke-width="1.5" stroke-dasharray="2,1"
                        opacity="0.6" />
                    <path d="M 66 47 L 66 54" stroke="var(--c-alt)" stroke-width="1" stroke-dasharray="1,2"
                        opacity="0.5" />
                </svg>`,
    'villager3': `<svg viewBox="0 0 100 100">
                    <!-- Fresh grave pile / dirt mound -->
                    <path d="M 10 85 Q 50 65 90 85 L 90 95 L 10 95 Z" fill="#111" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <path d="M 15 88 Q 50 72 85 88" fill="none" stroke="var(--c-alt)" stroke-width="1.5"
                        stroke-dasharray="4,2" opacity="0.6" />
                    <!-- Dirt clods -->
                    <circle cx="30" cy="88" r="2" fill="var(--c-alt)" />
                    <circle cx="45" cy="82" r="3" fill="var(--c-alt)" opacity="0.7" />
                    <circle cx="70" cy="85" r="2" fill="var(--c-alt)" opacity="0.8" />
                    <circle cx="38" cy="92" r="1.5" fill="var(--c-alt)" opacity="0.5" />

                    <!-- Broken shovel thrust into dirt -->
                    <!-- Handle -->
                    <line x1="60" y1="20" x2="45" y2="70" stroke="#2d1c15" stroke-width="3" stroke-linecap="round" />
                    <line x1="60" y1="20" x2="45" y2="70" stroke="var(--c-alt)" stroke-width="1" opacity="0.5" />
                    <!-- Shovel grip (broken piece flying off) -->
                    <path d="M 62 16 L 55 18 M 58 12 L 64 22" stroke="#2d1c15" stroke-width="2"
                        stroke-linecap="round" />
                    <line x1="68" y1="10" x2="72" y2="15" stroke="#2d1c15" stroke-width="2" opacity="0.8" />
                    <!-- Shovel head -->
                    <path d="M 46 65 L 40 75 Q 40 85 45 85 Q 50 85 50 75 L 44 65 Z" fill="#0c1014"
                        stroke="var(--c-neon)" stroke-width="1.5" />

                    <!-- Lantern tipped over -->
                    <g transform="translate(65, 80) rotate(-70)">
                        <rect x="-6" y="-12" width="12" height="15" rx="2" fill="#000" stroke="var(--c-neon)"
                            stroke-width="1.5" />
                        <line x1="-6" y1="-8" x2="6" y2="-8" stroke="var(--c-neon)" stroke-width="1" />
                        <line x1="-6" y1="-3" x2="6" y2="-3" stroke="var(--c-neon)" stroke-width="1" />
                        <!-- Extinguished / faint blue wisps -->
                        <path d="M -2 0 Q 0 -5 -3 -10" fill="none" stroke="var(--c-neon)" stroke-width="1"
                            opacity="0.5" />
                        <!-- Lantern top and ring -->
                        <polygon points="-4,-12 4,-12 0,-16" fill="var(--c-alt)" />
                        <circle cx="0" cy="-18" r="3" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />
                    </g>

                    <!-- Lone fading flower -->
                    <path d="M 25 80 Q 20 70 28 60" fill="none" stroke="#2d4a22" stroke-width="1.5" />
                    <circle cx="28" cy="60" r="2" fill="#fff" opacity="0.8" />
                    <ellipse cx="28" cy="56" rx="1.5" ry="3" fill="var(--c-neon)" opacity="0.7" />
                    <ellipse cx="25" cy="59" rx="3" ry="1.5" fill="var(--c-neon)" opacity="0.7" />
                    <ellipse cx="31" cy="59" rx="3" ry="1.5" fill="var(--c-neon)" opacity="0.7" />
                    <ellipse cx="28" cy="64" rx="1.5" ry="3" fill="var(--c-neon)" opacity="0.7" />

                    <!-- Ghostly silhouette/moonlight rays in background -->
                    <path d="M 50 10 L 20 90 L 80 90 Z" fill="var(--c-neon)" opacity="0.05" />
                    <path d="M 50 10 L 35 90 L 65 90 Z" fill="var(--c-neon)" opacity="0.08" />

                    <path d="M 50 40 Q 60 25 70 35 M 40 30 Q 30 15 20 25 M 65 50 Q 80 40 95 55" fill="none"
                        stroke="var(--c-neon)" stroke-width="1" stroke-dasharray="3,3" opacity="0.3" />
                </svg>`,
    'werewolf2': `<svg viewBox="0 0 100 100">
                    <!-- Background claw slash marks (diagonal) -->
                    <path d="M 10 20 Q 30 40 40 85 M 25 15 Q 45 35 55 80 M 40 10 Q 60 30 70 75 M 55 5 Q 75 25 85 70"
                        fill="none" stroke="var(--c-alt)" stroke-width="2.5" opacity="0.3" stroke-linecap="round" />

                    <!-- Deep bloody rips opening up the card -->
                    <path d="M 20 50 Q 50 30 80 40 Q 60 60 20 50 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <path d="M 15 25 Q 45 15 70 20 Q 50 40 15 25 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />
                    <path d="M 30 80 Q 60 60 90 70 Q 70 90 30 80 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="2" />

                    <!-- Werewolf Hand/Claw emerging from the dark tear -->
                    <!-- Palm/wrist area -->
                    <path d="M 60 100 C 65 80 50 70 40 75 C 30 80 40 100 40 100 Z" fill="#0c0202" stroke="var(--c-neon)"
                        stroke-width="1.5" />

                    <!-- Finger 1 -->
                    <path d="M 38 78 Q 20 60 15 45 Q 25 50 35 68" fill="#120303" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Claw 1 -->
                    <polygon points="15,45 8,30 20,40" fill="var(--c-alt)" stroke="#fff" stroke-width="1" />

                    <!-- Finger 2 (Longest) -->
                    <path d="M 45 74 Q 30 45 25 25 Q 38 40 50 67" fill="#150303" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Claw 2 -->
                    <polygon points="25,25 15,10 32,22" fill="var(--c-alt)" stroke="#fff" stroke-width="1" />

                    <!-- Finger 3 -->
                    <path d="M 55 75 Q 60 50 70 30 Q 75 45 62 68" fill="#120303" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Claw 3 -->
                    <polygon points="70,30 85,15 78,32" fill="var(--c-alt)" stroke="#fff" stroke-width="1" />

                    <!-- Thumb / Side finger -->
                    <path d="M 60 85 Q 80 75 90 60 Q 85 80 65 90" fill="#0c0202" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Claw thumb -->
                    <polygon points="90,60 98,50 88,65" fill="var(--c-alt)" stroke="#fff" stroke-width="1" />

                    <!-- Blood splatter from claws -->
                    <circle cx="12" cy="25" r="3" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="8" cy="20" r="1.5" fill="var(--c-neon)" />
                    <circle cx="20" cy="12" r="2.5" fill="var(--c-neon)" opacity="0.9" />
                    <circle cx="85" cy="20" r="2" fill="var(--c-neon)" />
                    <circle cx="95" cy="45" r="3" fill="var(--c-neon)" opacity="0.8" />
                    <path d="M 10 32 L 8 45 A 1 1 0 0 1 12 45 Z" fill="var(--c-neon)" />

                    <!-- Glowing primal eye in the background void -->
                    <ellipse cx="60" cy="35" rx="5" ry="3" fill="var(--c-alt)" opacity="0.9"
                        transform="rotate(-15 60 35)" />
                    <ellipse cx="60" cy="35" rx="2" ry="1.5" fill="#fff" />
                    <!-- Second eye partially hidden -->
                    <ellipse cx="40" cy="30" rx="4" ry="2" fill="var(--c-alt)" opacity="0.5"
                        transform="rotate(-15 40 30)" />
                </svg>`,
    'lonewolf': `<svg viewBox="0 0 100 100">
                    <!-- Solitary crescent/halo moon -->
                    <circle cx="50" cy="40" r="25" fill="none" stroke="var(--c-neon)" stroke-width="0.5"
                        opacity="0.3" />
                    <circle cx="50" cy="40" r="20" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.5" />
                    <path d="M 50 15 A 25 25 0 0 1 70 55 A 28 28 0 0 0 45 15 Z" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="50" cy="40" r="30" fill="none" stroke="var(--c-alt)" stroke-width="0.5" opacity="0.2"
                        stroke-dasharray="2,4" />

                    <!-- Lone standing wolf silhouette (back turned/looking over shoulder) -->
                    <!-- Body -->
                    <path d="M 30 85 Q 40 50 55 55 Q 65 58 70 70 Q 75 80 75 85 Z" fill="#03050a" stroke="var(--c-neon)"
                        stroke-width="1.5" />

                    <!-- Head & Snout pointed up howling slightly or looking back -->
                    <path d="M 50 55 Q 45 40 40 40 Q 30 40 28 48 Q 26 55 35 60 Z" fill="#03050a" stroke="var(--c-neon)"
                        stroke-width="1.5" />
                    <!-- Ear -->
                    <polygon points="45,40 38,28 35,40" fill="var(--c-alt)" stroke="var(--c-neon)" stroke-width="1" />

                    <!-- Piercing cold eye -->
                    <circle cx="35" cy="48" r="2" fill="var(--c-alt)" />
                    <line x1="33" y1="46" x2="38" y2="49" stroke="var(--c-neon)" stroke-width="0.8" />

                    <!-- Fluff / Scars on the back -->
                    <path d="M 55 55 Q 60 48 58 58" fill="none" stroke="var(--c-neon)" stroke-width="1" />
                    <path d="M 60 60 Q 66 55 64 65" fill="none" stroke="var(--c-neon)" stroke-width="1" />

                    <!-- Chains falling off -->
                    <path d="M 70 70 Q 80 75 80 85" fill="none" stroke="var(--c-alt)" stroke-width="2"
                        stroke-dasharray="4,2" />
                    <circle cx="70" cy="70" r="3" fill="none" stroke="var(--c-alt)" stroke-width="1.5" />

                    <!-- Bleak winter trees/dead branches in background -->
                    <path d="M 10 85 L 12 50 M 12 60 L 5 45 M 12 70 L 18 55" stroke="var(--c-neon)" stroke-width="1"
                        opacity="0.2" stroke-linecap="round" />
                    <path d="M 90 85 L 85 55 M 85 65 L 94 48" stroke="var(--c-neon)" stroke-width="1" opacity="0.2"
                        stroke-linecap="round" />

                    <!-- Ground / lonely rock -->
                    <path d="M 15 85 Q 50 80 85 85" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.5" />
                </svg>`,
    'doppelganger': `<svg viewBox="0 0 100 100">
                    <!-- Central vertical "mirror" line -->
                    <line x1="50" y1="5" x2="50" y2="95" stroke="var(--c-neon)" stroke-width="0.5"
                        stroke-dasharray="4,2" opacity="0.6" />

                    <!-- Left Face Silhouette (Human/Calm) -->
                    <path d="M 50 15 Q 30 15 25 35 Q 22 55 35 65 Q 40 70 45 80 L 50 85" fill="none"
                        stroke="var(--c-neon)" stroke-width="2" opacity="0.8" />
                    <!-- Left Eye -->
                    <ellipse cx="40" cy="40" rx="4" ry="2" fill="var(--c-neon)" opacity="0.4" />
                    <!-- Left Lips -->
                    <path d="M 42 60 Q 46 62 50 60" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.5" />

                    <!-- Right Face Silhouette (Demonic/Wolf/Glitch) -->
                    <path d="M 50 10 Q 75 10 80 30 Q 82 50 65 65 L 60 75 L 50 85" fill="none" stroke="var(--c-alt)"
                        stroke-width="2" />
                    <!-- Right Eye (Sharp) -->
                    <polygon points="56,38 65,36 62,42" fill="var(--c-alt)" />
                    <!-- Sharp jagged teeth -->
                    <path d="M 50 65 L 52 60 L 55 64 L 58 58 L 60 62" fill="none" stroke="var(--c-alt)"
                        stroke-width="1.5" />

                    <!-- Shattered mirror crack lines originating from center -->
                    <path d="M 50 40 L 70 20 M 50 40 L 80 50 M 50 40 L 60 70" stroke="var(--c-neon)" stroke-width="1"
                        opacity="0.7" />
                    <path d="M 50 40 L 25 25 M 50 40 L 15 45 M 50 40 L 30 65" stroke="var(--c-neon)" stroke-width="1"
                        opacity="0.5" stroke-dasharray="2,1" />

                    <!-- Floating glass shards -->
                    <polygon points="75,25 80,18 85,28" fill="var(--c-neon)" opacity="0.4" />
                    <polygon points="20,60 15,65 25,75" fill="var(--c-alt)" opacity="0.3" />
                    <polygon points="65,75 75,85 62,88" fill="var(--c-neon)" opacity="0.2" />
                    <polygon points="20,15 30,10 25,20" fill="var(--c-neon)" opacity="0.5" />

                    <!-- Identity shift wave (glitch effect around head) -->
                    <path d="M 15 35 L 20 35 M 10 40 L 18 40 M 12 45 L 22 45" stroke="var(--c-alt)"
                        stroke-width="1.5" />
                    <path d="M 85 30 L 92 30 M 80 35 L 88 35 M 82 40 L 95 40" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.6" />
                </svg>`,
    'serialkiller': `<svg viewBox="0 0 100 100">
                    <!-- Chaotic bloody slash background marks -->
                    <path d="M 10 90 L 40 20 M 15 95 L 45 25 M 60 15 L 85 80 M 55 10 L 80 75" stroke="var(--c-neon)"
                        stroke-width="1.5" stroke-linecap="round" opacity="0.4" />

                    <!-- Crossed Butcher Knives -->
                    <!-- Left Knife (pointing right-down) -->
                    <g transform="translate(45,45) rotate(45) translate(-45,-45)">
                        <!-- Handle -->
                        <rect x="42" y="10" width="6" height="25" rx="1" fill="#1a1111" stroke="var(--c-alt)"
                            stroke-width="1.5" />
                        <!-- Handle rivets -->
                        <circle cx="45" cy="15" r="1" fill="var(--c-alt)" />
                        <circle cx="45" cy="22" r="1" fill="var(--c-alt)" />
                        <circle cx="45" cy="29" r="1" fill="var(--c-alt)" />
                        <!-- Blade -->
                        <path d="M 40 35 L 50 35 L 50 75 Q 45 85 40 85 L 40 35 Z" fill="#12181c" stroke="var(--c-alt)"
                            stroke-width="2" />
                        <!-- Blood on blade edge -->
                        <path d="M 40 60 Q 45 70 43 82 Q 40 85 40 60 Z" fill="var(--c-neon)" />
                    </g>

                    <!-- Right Knife (pointing left-down) -->
                    <g transform="translate(55,45) rotate(-45) translate(-55,-45)">
                        <!-- Handle -->
                        <rect x="52" y="10" width="6" height="25" rx="1" fill="#1a1111" stroke="var(--c-alt)"
                            stroke-width="1.5" />
                        <!-- Handle rivets -->
                        <circle cx="55" cy="15" r="1" fill="var(--c-alt)" />
                        <circle cx="55" cy="22" r="1" fill="var(--c-alt)" />
                        <circle cx="55" cy="29" r="1" fill="var(--c-alt)" />
                        <!-- Blade -->
                        <path d="M 50 35 L 60 35 L 60 85 Q 55 85 50 75 L 50 35 Z" fill="#080c0f" stroke="var(--c-alt)"
                            stroke-width="2" />
                        <!-- Blood on blade edge -->
                        <path d="M 60 55 Q 55 65 58 82 Q 60 85 60 55 Z" fill="var(--c-neon)" />
                    </g>

                    <!-- Wide psychotic smiling mask floating below -->
                    <path d="M 25 80 Q 50 100 75 80 Q 65 95 50 95 Q 35 95 25 80 Z" fill="var(--c-neon)" stroke="#000"
                        stroke-width="1.5" />
                    <!-- Mask teeth lines -->
                    <line x1="35" y1="88" x2="33" y2="84" stroke="#000" stroke-width="1" />
                    <line x1="45" y1="92" x2="44" y2="86" stroke="#000" stroke-width="1.5" />
                    <line x1="55" y1="92" x2="56" y2="86" stroke="#000" stroke-width="1.5" />
                    <line x1="65" y1="88" x2="67" y2="84" stroke="#000" stroke-width="1" />

                    <!-- Eye slits of the mask reflecting madness -->
                    <polygon points="30,70 40,65 38,72" fill="var(--c-neon)" />
                    <polygon points="70,70 60,65 62,72" fill="var(--c-neon)" />

                    <!-- Floating blood drops and splatters -->
                    <circle cx="20" cy="50" r="3" fill="var(--c-neon)" opacity="0.9" />
                    <circle cx="18" cy="55" r="1.5" fill="var(--c-neon)" opacity="0.7" />
                    <circle cx="80" cy="45" r="4" fill="var(--c-neon)" opacity="0.9" />
                    <path d="M 80 41 L 78 45 A 2 2 0 0 0 82 45 Z" fill="var(--c-neon)" />

                    <path d="M 45 45 Q 50 50 55 45" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.6" />
                </svg>`,
    'idiot': `<svg viewBox="0 0 100 100">
                    <!-- Confusing overlapping spirals in background -->
                    <path d="M 50 50 Q 80 20 50 10 Q 20 0 10 30 Q 0 60 30 80 Q 60 100 85 70 Q 100 40 70 20" fill="none"
                        stroke="var(--c-neon)" stroke-width="1.5" stroke-dasharray="2,3" opacity="0.3" />

                    <!-- Dunce Cap (Paper Cone) -->
                    <path d="M 50 15 L 30 65 Q 50 75 70 65 Z" fill="#2d1c0a" stroke="var(--c-neon)" stroke-width="2" />
                    <!-- Wrinkles on the cap -->
                    <path d="M 45 25 L 50 40 L 40 55" fill="none" stroke="var(--c-alt)" stroke-width="1"
                        opacity="0.6" />
                    <path d="M 55 30 L 60 50 L 55 60" fill="none" stroke="var(--c-alt)" stroke-width="1"
                        opacity="0.6" />

                    <!-- Paper pinwheel stuck to the hat loosely -->
                    <g transform="translate(50, 20) rotate(15)">
                        <circle cx="0" cy="0" r="2" fill="var(--c-alt)" />
                        <path d="M 0 0 L -10 -5 L -5 -10 Z" fill="var(--c-neon)" opacity="0.8" />
                        <path d="M 0 0 L 10 5 L 5 10 Z" fill="var(--c-neon)" opacity="0.8" />
                        <path d="M 0 0 L 10 -5 L 5 10 Z" fill="var(--c-alt)" opacity="0.8" />
                        <!-- Wonky purposefully -->
                        <path d="M 0 0 L -10 5 L -5 -10 Z" fill="var(--c-alt)" opacity="0.8" />
                    </g>

                    <!-- Drool/spittle and an open confused mouth dropping a cog/gear -->
                    <path d="M 35 80 Q 50 95 65 80" fill="none" stroke="var(--c-neon)" stroke-width="2"
                        stroke-linecap="round" />
                    <!-- Tongue lolling out -->
                    <path d="M 55 83 Q 50 98 45 88" fill="var(--c-alt)" stroke="#000" stroke-width="1" />
                    <!-- String of drool -->
                    <path d="M 40 85 Q 40 92 38 98" fill="none" stroke="var(--c-neon)" stroke-width="1.5"
                        opacity="0.7" />
                    <circle cx="38" cy="99" r="1" fill="var(--c-neon)" opacity="0.8" />

                    <!-- A broken stick/wand held haphazardly -->
                    <line x1="15" y1="90" x2="35" y2="60" stroke="#4a2e15" stroke-width="3" stroke-linecap="round" />
                    <line x1="25" y1="75" x2="32" y2="70" stroke="#4a2e15" stroke-width="2" stroke-linecap="round" />
                    <!-- splinter -->
                    <!-- Star tied to the stick with loose string -->
                    <polygon points="15,90 18,95 24,94 19,88 20,83 15,86 9,84 12,89 8,94 13,92" fill="none"
                        stroke="var(--c-neon)" stroke-width="1.5" />
                    <path d="M 20 75 Q 10 80 15 90" fill="none" stroke="var(--c-alt)" stroke-width="1"
                        stroke-dasharray="1,1" />

                    <!-- Question marks bubbling up -->
                    <text x="80" y="40" font-family="serif" font-size="12" fill="var(--c-neon)" opacity="0.8"
                        transform="rotate(15 80 40)">?</text>
                    <text x="75" y="75" font-family="serif" font-size="8" fill="var(--c-alt)" opacity="0.6"
                        transform="rotate(-20 75 75)">?</text>
                    <text x="25" y="45" font-family="serif" font-size="10" fill="var(--c-neon)" opacity="0.7"
                        transform="rotate(-10 25 45)">?</text>
                </svg>`,
    'prince': `<svg viewBox="0 0 100 100">
                    <!-- Velvet Pillow (base) -->
                    <path d="M 15 80 Q 50 65 85 80 Q 95 85 85 90 Q 50 95 15 90 Q 5 85 15 80 Z" fill="var(--c-alt)"
                        stroke="var(--c-neon)" stroke-width="1.5" />
                    <!-- Tassels on pillow corners -->
                    <circle cx="10" cy="85" r="2" fill="var(--c-neon)" />
                    <circle cx="90" cy="85" r="2" fill="var(--c-neon)" />
                    <path d="M 10 87 L 7 93 M 10 87 L 13 93 M 10 87 L 10 93" stroke="var(--c-neon)" stroke-width="1" />
                    <path d="M 90 87 L 87 93 M 90 87 L 93 93 M 90 87 L 90 93" stroke="var(--c-neon)" stroke-width="1" />

                    <!-- Crossed Scepter and Sword behind -->
                    <!-- Scepter (diagonal right-up) -->
                    <line x1="20" y1="90" x2="70" y2="20" stroke="var(--c-neon)" stroke-width="2" />
                    <circle cx="72" cy="18" r="4" fill="var(--c-neon)" />
                    <circle cx="72" cy="18" r="2" fill="var(--c-alt)" />

                    <!-- Sword (diagonal left-up) -->
                    <line x1="80" y1="90" x2="40" y2="30" stroke="#888" stroke-width="2" />
                    <!-- Sword hilt -->
                    <line x1="68" y1="78" x2="82" y2="68" stroke="var(--c-neon)" stroke-width="1.5" />
                    <circle cx="82" cy="92" r="2" fill="var(--c-neon)" />
                    <line x1="80" y1="90" x2="75" y2="82" stroke="var(--c-neon)" stroke-width="2.5" />

                    <!-- Royal Crown -->
                    <path d="M 25 70 L 30 40 L 40 55 L 50 30 L 60 55 L 70 40 L 75 70 Z" fill="#4d3d00"
                        stroke="var(--c-neon)" stroke-width="2" />

                    <!-- Jewels on the crown -->
                    <!-- Center tip jewel -->
                    <polygon points="50,22 53,27 50,32 47,27" fill="var(--c-alt)" stroke="var(--c-neon)"
                        stroke-width="1" />
                    <!-- Side tip jewels -->
                    <circle cx="30" cy="37" r="2" fill="var(--c-neon)" />
                    <circle cx="70" cy="37" r="2" fill="var(--c-neon)" />

                    <!-- Base jewels -->
                    <ellipse cx="50" cy="65" rx="3" ry="2" fill="var(--c-alt)" />
                    <ellipse cx="38" cy="65" rx="2" ry="1.5" fill="#fff" opacity="0.8" />
                    <ellipse cx="62" cy="65" rx="2" ry="1.5" fill="#fff" opacity="0.8" />

                    <!-- Gleaming light rays from the crown -->
                    <line x1="50" y1="15" x2="50" y2="5" stroke="var(--c-neon)" stroke-width="1" opacity="0.8" />
                    <line x1="45" y1="18" x2="38" y2="10" stroke="var(--c-neon)" stroke-width="1" opacity="0.6" />
                    <line x1="55" y1="18" x2="62" y2="10" stroke="var(--c-neon)" stroke-width="1" opacity="0.6" />

                    <!-- Spilled wine drop (arrogance) -->
                    <path d="M 40 70 Q 42 80 40 85 Q 38 80 40 70 Z" fill="var(--c-alt)" opacity="0.8" />
                </svg>`,
    'littlegirl': `<svg viewBox="0 0 100 100">
                    <!-- Spying eye peeking from the dark (top background) -->
                    <path d="M 30 20 Q 50 10 70 20 Q 50 30 30 20 Z" fill="#000" stroke="var(--c-neon)"
                        stroke-width="1.5" opacity="0.6" />
                    <circle cx="50" cy="20" r="4" fill="var(--c-neon)" opacity="0.8" />
                    <circle cx="50" cy="20" r="1.5" fill="#000" />
                    <!-- Slit to peek through -->
                    <line x1="20" y1="20" x2="80" y2="20" stroke="var(--c-dark)" stroke-width="2" />
                    <line x1="20" y1="25" x2="80" y2="25" stroke="var(--c-neon)" stroke-width="0.5"
                        stroke-dasharray="2,4" opacity="0.4" />

                    <!-- Ragdoll / Teddy bear sitting in the corner -->
                    <!-- Body -->
                    <ellipse cx="50" cy="70" rx="15" ry="18" fill="#182230" stroke="var(--c-alt)" stroke-width="2" />

                    <!-- Right Arm (limp) -->
                    <path d="M 64 65 Q 75 75 80 90" fill="none" stroke="var(--c-alt)" stroke-width="5"
                        stroke-linecap="round" />
                    <path d="M 64 65 Q 75 75 80 90" fill="none" stroke="#182230" stroke-width="3"
                        stroke-linecap="round" />
                    <!-- Left Arm (pulled up to mouth, holding secret) -->
                    <path d="M 36 65 Q 25 55 40 48" fill="none" stroke="var(--c-alt)" stroke-width="5"
                        stroke-linecap="round" />
                    <path d="M 36 65 Q 25 55 40 48" fill="none" stroke="#182230" stroke-width="3"
                        stroke-linecap="round" />

                    <!-- Legs -->
                    <path d="M 40 85 Q 35 100 25 95" fill="none" stroke="var(--c-alt)" stroke-width="6"
                        stroke-linecap="round" />
                    <path d="M 40 85 Q 35 100 25 95" fill="none" stroke="#182230" stroke-width="4"
                        stroke-linecap="round" />
                    <path d="M 60 85 Q 65 100 75 95" fill="none" stroke="var(--c-alt)" stroke-width="6"
                        stroke-linecap="round" />
                    <path d="M 60 85 Q 65 100 75 95" fill="none" stroke="#182230" stroke-width="4"
                        stroke-linecap="round" />

                    <!-- Head -->
                    <circle cx="50" cy="45" r="14" fill="#182230" stroke="var(--c-alt)" stroke-width="2" />
                    <!-- Ears -->
                    <circle cx="38" cy="35" r="5" fill="#182230" stroke="var(--c-alt)" stroke-width="2" />
                    <circle cx="62" cy="35" r="5" fill="#182230" stroke="var(--c-alt)" stroke-width="2" />

                    <!-- Stitches on the bear -->
                    <line x1="50" y1="55" x2="50" y2="85" stroke="var(--c-neon)" stroke-width="1.5"
                        stroke-dasharray="2,2" />
                    <line x1="42" y1="42" x2="48" y2="48" stroke="var(--c-neon)" stroke-width="1.5" />
                    <line x1="48" y1="42" x2="42" y2="48" stroke="var(--c-neon)" stroke-width="1.5" /> <!-- X eye -->
                    <circle cx="58" cy="45" r="3" fill="none" stroke="var(--c-neon)" stroke-width="1.5" />
                    <!-- Button eye -->
                    <circle cx="59" cy="44" r="1" fill="var(--c-neon)" />

                    <!-- Pink ribbon bow around neck -->
                    <path d="M 50 60 L 40 55 L 45 65 Z" fill="var(--c-alt)" />
                    <path d="M 50 60 L 60 55 L 55 65 Z" fill="var(--c-alt)" />
                    <circle cx="50" cy="60" r="2" fill="var(--c-neon)" />

                    <!-- Delicate music box key sticking out of bear's back -->
                    <path d="M 65 65 L 75 55" stroke="var(--c-neon)" stroke-width="1.5" />
                    <path d="M 75 55 Q 82 50 80 60 Q 75 55 75 55" fill="none" stroke="var(--c-neon)"
                        stroke-width="1.5" />

                    <path d="M 46 51 Q 50 53 54 51" fill="none" stroke="var(--c-neon)" stroke-width="1" />
                </svg>`,
    'card_back': `<svg viewBox="0 0 100 100">
                    <!-- Outer ornate border -->
                    <rect x="5" y="5" width="90" height="90" fill="none" stroke="var(--c-neon)" stroke-width="2" rx="4" stroke-dasharray="12,6" opacity="0.8" />
                    <rect x="9" y="9" width="82" height="82" fill="none" stroke="var(--c-alt)" stroke-width="1" rx="2" opacity="0.5" />
                    
                    <!-- Hypnotic spiral rings -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="var(--c-alt)" stroke-width="1.5" opacity="0.3" stroke-dasharray="4,4" />
                    <circle cx="50" cy="50" r="28" fill="none" stroke="var(--c-neon)" stroke-width="1" opacity="0.2" stroke-dasharray="2,6" />
                    <circle cx="50" cy="50" r="18" fill="none" stroke="var(--c-alt)" stroke-width="0.8" opacity="0.4" stroke-dasharray="8,2" />

                    <!-- Centerpiece: The Carnival Tent of Nightmares -->
                    <!-- Tent Body Silhouette -->
                    <path d="M 50 20 L 25 65 L 75 65 Z" fill="#000" stroke="var(--c-neon)" stroke-width="2.5" />
                    <!-- Red Stripes -->
                    <polygon points="50,20 40,65 45,65" fill="var(--c-alt)" />
                    <polygon points="50,20 60,65 55,65" fill="var(--c-alt)" />
                    
                    <!-- Flag on top -->
                    <path d="M 50 20 L 50 8 L 62 12 Z" fill="var(--c-neon)" stroke="#000" stroke-width="1" />

                    <!-- The Watching Eye in the Tent -->
                    <path d="M 38 48 Q 50 35 62 48 Q 50 61 38 48 Z" fill="#111" stroke="var(--c-alt)" stroke-width="2" />
                    <circle cx="50" cy="48" r="6" fill="var(--c-neon)" />
                    <circle cx="50" cy="48" r="4" fill="var(--c-alt)" />
                    <!-- Slit pupil -->
                    <ellipse cx="50" cy="48" rx="1" ry="3.5" fill="#000" />
                    
                    <!-- Drips / Blood under the eye joining to the ground -->
                    <path d="M 46 54 L 46 62 A 1 1 0 0 1 45 62 Z" fill="var(--c-alt)" />
                    <path d="M 54 52 L 55 60 A 1 1 0 0 0 56 60 Z" fill="var(--c-neon)" />

                    <!-- Floating Dark Stars -->
                    <polygon points="20,35 22,40 27,40 23,43 24,48 20,45 16,48 17,43 13,40 18,40" fill="var(--c-alt)" opacity="0.6" />
                    <polygon points="80,35 82,40 87,40 83,43 84,48 80,45 76,48 77,43 73,40 78,40" fill="var(--c-neon)" opacity="0.6" />
                    
                    <!-- Ground/base under tent -->
                    <path d="M 15 65 L 85 65 L 80 72 L 20 72 Z" fill="var(--c-alt)" stroke="var(--c-neon)" stroke-width="1.5" />
                    <path d="M 25 72 L 75 72 L 65 78 L 35 78 Z" fill="#000" stroke="var(--c-neon)" stroke-width="1" />
                </svg>`,
};
