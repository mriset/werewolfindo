const carntickArt = {
  'moderator': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Cahaya Sorot Panggung -->
    <defs>
      <radialGradient id="spotlight-md" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stop-color="var(--c2)" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="35" rx="40" ry="30" fill="url(#spotlight-md)"/>

    <!-- Tongkat Komando (The Ringmaster's Baton) -->
    <line x1="25" y1="80" x2="72" y2="20" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="72" cy="20" r="5" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="25" cy="80" r="3" fill="var(--c1)"/>

    <!-- Topi Top Hat Sang Dalang -->
    <rect x="35" y="22" width="30" height="22" rx="2" fill="var(--c1)"/>
    <rect x="28" y="44" width="44" height="5" rx="1" fill="var(--c1)"/>
    <rect x="38" y="20" width="24" height="4" rx="1" fill="var(--c2)"/>

    <!-- Pita Merah di Topi -->
    <line x1="35" y1="35" x2="65" y2="35" stroke="var(--c2)" stroke-width="2.5"/>

    <!-- Dekorasi Tirai Panggung Kiri & Kanan -->
    <path d="M 5 0 Q 10 25 5 50 Q 15 45 18 25 Z" fill="var(--c2)" opacity="0.5"/>
    <path d="M 95 0 Q 90 25 95 50 Q 85 45 82 25 Z" fill="var(--c2)" opacity="0.5"/>

    <!-- Tali Mikrofon / Garis Panggung -->
    <path d="M 28 49 Q 15 65 20 85" fill="none" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.5"/>

    <!-- Bintang Pertunjukan -->
    <polygon points="50,70 52,76 58,76 53,80 55,86 50,82 45,86 47,80 42,76 48,76" fill="var(--c2)" opacity="0.8"/>
    <polygon points="15,60 16,63 19,63 17,65 18,68 15,66 12,68 13,65 11,63 14,63" fill="var(--c1)" opacity="0.4"/>
    <polygon points="85,55 86,58 89,58 87,60 88,63 85,61 82,63 83,60 81,58 84,58" fill="var(--c1)" opacity="0.4"/>
  </svg>`,
  'seer': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Latar Tenda Strip Karnaval -->
                        <path d="M 0 0 L 20 100 L 40 0 L 60 100 L 80 0 L 100 100" fill="none"
                            stroke="rgba(40, 53, 147, 0.08)" stroke-width="15" />

                        <!-- Bola Kristal -->
                        <circle cx="50" cy="45" r="28" fill="rgba(40, 53, 147, 0.1)" stroke="var(--c1)"
                            stroke-width="2.5" />
                        <circle cx="50" cy="45" r="24" fill="none" stroke="var(--c2)" stroke-width="1.5"
                            stroke-dasharray="4 2" />

                        <!-- Mata Gaib di dalam Kristal -->
                        <path d="M 30 45 Q 50 25 70 45 Q 50 65 30 45 Z" fill="var(--c1)" />
                        <circle cx="50" cy="45" r="8" fill="var(--c2)" />
                        <circle cx="50" cy="45" r="3" fill="#fff" />
                        <path d="M 50 20 L 50 12 M 50 70 L 50 78 M 20 45 L 12 45 M 80 45 L 88 45" stroke="var(--c2)"
                            stroke-width="2" stroke-linecap="round" />

                        <!-- Dudukan Kristal Emas -->
                        <path d="M 35 70 Q 50 78 65 70 L 70 85 L 30 85 Z" fill="var(--c2)" stroke="var(--c1)"
                            stroke-width="2.5" stroke-linejoin="round" />
                        <line x1="30" y1="85" x2="70" y2="85" stroke="var(--c1)" stroke-width="4" />
                        <circle cx="40" cy="80" r="1.5" fill="var(--c1)" />
                        <circle cx="50" cy="80" r="1.5" fill="var(--c1)" />
                        <circle cx="60" cy="80" r="1.5" fill="var(--c1)" />
                    </svg>`,

  'hunter': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Ornamen Bintang Karnaval -->
                        <polygon points="15,15 18,25 28,25 20,32 23,42 15,36 7,42 10,32 2,25 12,25"
                            fill="rgba(255, 87, 34, 0.15)" />
                        <polygon points="85,65 88,75 98,75 90,82 93,92 85,86 77,92 80,82 72,75 82,75"
                            fill="rgba(27, 94, 32, 0.1)" />

                        <!-- Papan Target Tembak (Bullseye) -->
                        <circle cx="50" cy="50" r="32" fill="none" stroke="var(--c1)" stroke-width="3"
                            stroke-dasharray="6 3" />
                        <circle cx="50" cy="50" r="22" fill="none" stroke="var(--c1)" stroke-width="2" />
                        <circle cx="50" cy="50" r="10" fill="var(--c2)" />

                        <!-- Tanda Bidikan Silang -->
                        <line x1="50" y1="10" x2="50" y2="90" stroke="var(--c1)" stroke-width="1.5" opacity="0.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="var(--c1)" stroke-width="1.5" opacity="0.5" />

                        <!-- Anak Panah Tertancap -->
                        <line x1="85" y1="15" x2="52" y2="48" stroke="var(--c1)" stroke-width="4"
                            stroke-linecap="round" />
                        <polygon points="52,48 58,40 42,58" fill="var(--c1)" /> <!-- Mata Panah -->
                        <!-- Bulu Panah (Fletching) -->
                        <path d="M 85 15 L 92 8 M 80 20 L 88 12 M 75 25 L 82 17" stroke="var(--c2)" stroke-width="2.5"
                            stroke-linecap="round" />

                        <!-- Lubang Peluru Ekstra -->
                        <circle cx="35" cy="35" r="2" fill="var(--c1)" />
                        <circle cx="30" cy="65" r="1.5" fill="var(--c1)" />
                        <circle cx="70" cy="70" r="2.5" fill="var(--c1)" />
                    </svg>`,

  'werewolf': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Tralis Besi Kandang Karnaval -->
                        <line x1="25" y1="0" x2="25" y2="100" stroke="var(--c2)" stroke-width="4" opacity="0.4" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="var(--c2)" stroke-width="4" opacity="0.4" />
                        <line x1="75" y1="0" x2="75" y2="100" stroke="var(--c2)" stroke-width="4" opacity="0.4" />

                        <!-- Bulan Sabit Merah Darah -->
                        <path d="M 60 20 A 25 25 0 1 0 85 45 A 20 20 0 1 1 60 20 Z" fill="rgba(183, 28, 28, 0.2)" />

                        <!-- Siluet Kepala Serigala Mengaum -->
                        <path
                            d="M 20 85 Q 30 60 45 45 Q 60 30 75 25 L 65 35 Q 85 40 95 60 Q 80 50 65 55 L 70 70 Q 55 60 45 75 Q 35 90 20 85 Z"
                            fill="var(--c2)" />
                        <path d="M 45 45 Q 60 30 75 25 L 65 35 Q 85 40 95 60" fill="none" stroke="var(--c1)"
                            stroke-width="2" /> <!-- Garis merah bulu -->

                        <!-- Cakaran Ganas Merobek Tiket -->
                        <path d="M 10 30 Q 30 40 50 80" fill="none" stroke="var(--c1)" stroke-width="3"
                            stroke-linecap="round" />
                        <path d="M 20 20 Q 45 35 70 85" fill="none" stroke="var(--c1)" stroke-width="4"
                            stroke-linecap="round" />
                        <path d="M 35 15 Q 60 30 85 75" fill="none" stroke="var(--c1)" stroke-width="3"
                            stroke-linecap="round" />

                        <!-- Tetesan Darah (Air Liur) -->
                        <circle cx="70" cy="75" r="2" fill="var(--c1)" />
                        <path d="M 73 80 L 75 88 A 2 2 0 0 1 71 88 Z" fill="var(--c1)" />
                    </svg>`,

  'jester': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Latar Pola Wajik (Diamond) Karnaval -->
                        <g opacity="0.15" fill="var(--c1)">
                            <polygon points="50,0 65,15 50,30 35,15" />
                            <polygon points="15,35 30,50 15,65 0,50" />
                            <polygon points="85,35 100,50 85,65 70,50" />
                            <polygon points="50,70 65,85 50,100 35,85" />
                        </g>

                        <!-- Topi Badut Terbelah -->
                        <path d="M 35 45 Q 10 10 5 35 Q 20 45 40 42 Z" fill="var(--c2)" stroke="var(--c1)"
                            stroke-width="2.5" />
                        <path d="M 65 45 Q 90 10 95 35 Q 80 45 60 42 Z" fill="var(--c2)" stroke="var(--c1)"
                            stroke-width="2.5" />
                        <path d="M 40 42 Q 50 15 60 42 Z" fill="#fff" stroke="var(--c1)" stroke-width="2.5" />

                        <!-- Lonceng -->
                        <circle cx="5" cy="35" r="5" fill="#fff" stroke="var(--c1)" stroke-width="2" />
                        <circle cx="95" cy="35" r="5" fill="#fff" stroke="var(--c1)" stroke-width="2" />
                        <circle cx="50" cy="15" r="5" fill="var(--c2)" stroke="var(--c1)" stroke-width="2" />

                        <!-- Wajah Psikopat Terbelah Dua -->
                        <path d="M 50 40 C 20 40 25 85 50 95 C 75 85 80 40 50 40 Z" fill="#fff" stroke="var(--c1)"
                            stroke-width="3" />
                        <path d="M 50 40 C 75 40 80 85 50 95 Z" fill="var(--c1)" />

                        <!-- Mata Kiri (Sedih/Silang) -->
                        <line x1="32" y1="52" x2="42" y2="62" stroke="var(--c1)" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="42" y1="52" x2="32" y2="62" stroke="var(--c1)" stroke-width="2.5"
                            stroke-linecap="round" />
                        <circle cx="37" cy="68" r="2.5" fill="var(--c2)" /> <!-- Air mata Pink -->

                        <!-- Mata Kanan (Membelalak Gila) -->
                        <circle cx="63" cy="57" r="6" fill="#fff" />
                        <circle cx="63" cy="57" r="2.5" fill="var(--c2)" />
                        <path d="M 53 51 Q 63 45 73 53" fill="none" stroke="#fff" stroke-width="2"
                            stroke-linecap="round" /> <!-- Alis -->

                        <!-- Mulut Jahitan vs Tawa Lebar -->
                        <path d="M 30 78 Q 40 80 50 82" fill="none" stroke="var(--c1)" stroke-width="2" />
                        <line x1="33" y1="76" x2="35" y2="80" stroke="var(--c1)" stroke-width="1.5" />
                        <line x1="40" y1="77" x2="42" y2="81" stroke="var(--c1)" stroke-width="1.5" />
                        <path d="M 50 82 Q 65 95 78 72" fill="none" stroke="#fff" stroke-width="3"
                            stroke-linecap="round" />
                    </svg>`,

  'guardian': `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Motif Besi / Gear Background -->
                        <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(38, 50, 56, 0.1)" stroke-width="6"
                            stroke-dasharray="10 5" />

                        <!-- Perisai Tiket Besi (Gerbang Karnaval) -->
                        <path d="M 30 20 L 70 20 L 75 35 L 75 60 Q 75 85 50 95 Q 25 85 25 60 L 25 35 Z" fill="none"
                            stroke="var(--c1)" stroke-width="3" />
                        <path d="M 35 25 L 65 25 L 68 35 L 68 58 Q 68 80 50 88 Q 32 80 32 58 L 32 35 Z"
                            fill="rgba(0, 188, 212, 0.1)" stroke="var(--c2)" stroke-width="2" />

                        <!-- Barbell Kuno Sang Strongman -->
                        <line x1="15" y1="50" x2="85" y2="50" stroke="var(--c1)" stroke-width="4"
                            stroke-linecap="round" />
                        <!-- Beban Kiri -->
                        <rect x="22" y="32" width="6" height="36" rx="1" fill="var(--c1)" />
                        <rect x="14" y="38" width="6" height="24" rx="1" fill="var(--c2)" />
                        <!-- Beban Kanan -->
                        <rect x="72" y="32" width="6" height="36" rx="1" fill="var(--c1)" />
                        <rect x="80" y="38" width="6" height="24" rx="1" fill="var(--c2)" />

                        <!-- Gembok Keamanan (Padlock) di tengah -->
                        <rect x="40" y="55" width="20" height="15" rx="2" fill="var(--c1)" />
                        <path d="M 44 55 L 44 45 A 6 6 0 0 1 56 45 L 56 55" fill="none" stroke="var(--c1)"
                            stroke-width="3" />
                        <circle cx="50" cy="62" r="2.5" fill="#fff" />
                        <path d="M 49 64 L 51 64 L 51 68 L 49 68 Z" fill="#fff" />

                        <!-- Tanda Bintang Aman -->
                        <polygon points="50,12 52,18 58,18 53,22 55,28 50,24 45,28 47,22 42,18 48,18"
                            fill="var(--c2)" />
                    </svg>`,

  'alpha-wolf': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Bulan Darurat Merah -->
    <defs>
      <radialGradient id="moon-aw" cx="50%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#BF360C" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="18" rx="38" ry="22" fill="url(#moon-aw)"/>

    <!-- Mahkota Duri Alfa -->
    <path d="M 25 38 L 32 22 L 37 34 L 44 16 L 50 32 L 56 16 L 63 34 L 68 22 L 75 38 Z"
      fill="var(--c1)" stroke="var(--c2)" stroke-width="2" stroke-linejoin="round"/>

    <!-- Kepala Serigala Frontal -->
    <path d="M 28 65 Q 28 40 50 38 Q 72 40 72 65 Q 72 85 50 90 Q 28 85 28 65 Z"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="2.5"/>
    <!-- Moncong -->
    <path d="M 38 70 Q 50 75 62 70 L 62 82 Q 50 88 38 82 Z"
      fill="var(--c1)" opacity="0.4"/>
    <!-- Hidung -->
    <ellipse cx="50" cy="70" rx="5" ry="3" fill="var(--c1)"/>
    <!-- Mata Kiri -->
    <ellipse cx="38" cy="58" rx="5" ry="4" fill="#fff"/>
    <circle cx="38" cy="58" r="2.5" fill="#BF360C"/>
    <circle cx="39" cy="57" r="1" fill="#fff"/>
    <!-- Mata Kanan -->
    <ellipse cx="62" cy="58" rx="5" ry="4" fill="#fff"/>
    <circle cx="62" cy="58" r="2.5" fill="#BF360C"/>
    <circle cx="63" cy="57" r="1" fill="#fff"/>
    <!-- Taring -->
    <path d="M 44 80 L 42 90 L 46 80 Z" fill="#fff"/>
    <path d="M 56 80 L 54 90 L 58 80 Z" fill="#fff"/>
    <!-- Cakar kiri & kanan -->
    <path d="M 15 75 Q 22 68 28 72" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 12 82 Q 20 75 26 80" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 85 75 Q 78 68 72 72" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 88 82 Q 80 75 74 80" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  'cupid': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Hati Lembut -->
    <path d="M 50 90 Q 10 65 15 40 A 18 18 0 0 1 50 35 A 18 18 0 0 1 85 40 Q 90 65 50 90 Z"
      fill="rgba(240,98,146,0.12)"/>

    <!-- Sosok Cupid -->
    <!-- Tubuh -->
    <ellipse cx="50" cy="55" rx="14" ry="17" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <!-- Kepala -->
    <circle cx="50" cy="32" r="12" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <!-- Mahkota Daun -->
    <path d="M 40 25 Q 43 18 47 22 Q 50 15 53 22 Q 57 18 60 25" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <!-- Mata Imut -->
    <circle cx="45" cy="31" r="2.5" fill="var(--c1)"/>
    <circle cx="55" cy="31" r="2.5" fill="var(--c1)"/>
    <circle cx="46" cy="30" r="1" fill="#fff"/>
    <circle cx="56" cy="30" r="1" fill="#fff"/>
    <!-- Pipi -->
    <circle cx="42" cy="36" r="3" fill="#FF80AB" opacity="0.5"/>
    <circle cx="58" cy="36" r="3" fill="#FF80AB" opacity="0.5"/>
    <!-- Senyum -->
    <path d="M 45 39 Q 50 43 55 39" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <!-- Sayap Kiri -->
    <path d="M 36 50 Q 18 42 20 58 Q 28 55 36 58 Z" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <path d="M 36 58 Q 16 55 18 70 Q 26 65 36 67 Z" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Sayap Kanan -->
    <path d="M 64 50 Q 82 42 80 58 Q 72 55 64 58 Z" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <path d="M 64 58 Q 84 55 82 70 Q 74 65 64 67 Z" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Busur -->
    <path d="M 20 75 Q 50 55 80 75" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <line x1="20" y1="75" x2="80" y2="75" stroke="var(--c2)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <!-- Anak panah -->
    <line x1="30" y1="90" x2="75" y2="62" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="75,62 68,63 70,69" fill="var(--c1)"/>
    <path d="M 30 90 L 25 94 M 28 87 L 23 91" stroke="var(--c2)" stroke-width="2" stroke-linecap="round"/>
    <!-- Hati kecil melayang -->
    <path d="M 85 20 Q 82 16 85 13 Q 88 16 85 20 Z" fill="var(--c2)"/>
    <path d="M 15 30 Q 12 26 15 23 Q 18 26 15 30 Z" fill="var(--c2)"/>
  </svg>`,

  'witch': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Asap Ungu Magis -->
    <defs>
      <radialGradient id="cauldron-glow" cx="50%" cy="70%" r="50%">
        <stop offset="0%" stop-color="#7C4DFF" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="70" rx="40" ry="28" fill="url(#cauldron-glow)"/>

    <!-- Topi Penyihir -->
    <path d="M 30 40 L 70 40 L 65 20 L 50 5 L 35 20 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <rect x="24" y="38" width="52" height="6" rx="3" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Gesper emas topi -->
    <rect x="44" y="39" width="12" height="4" rx="1" fill="#FFD700"/>
    <rect x="46" y="40" width="8" height="2" rx="0.5" fill="var(--c1)"/>

    <!-- Wajah Penyihir -->
    <ellipse cx="50" cy="55" rx="16" ry="14" fill="var(--c2)" opacity="0.2" stroke="var(--c1)" stroke-width="2"/>
    <!-- Mata -->
    <ellipse cx="43" cy="53" rx="4" ry="3" fill="var(--c1)"/>
    <ellipse cx="57" cy="53" rx="4" ry="3" fill="var(--c1)"/>
    <circle cx="44" cy="52" r="1.5" fill="var(--c2)"/>
    <circle cx="58" cy="52" r="1.5" fill="var(--c2)"/>

    <!-- Periuk Ajaib (Cauldron) -->
    <path d="M 22 80 Q 22 95 50 95 Q 78 95 78 80 L 72 70 L 28 70 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <ellipse cx="50" cy="70" rx="22" ry="6" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <!-- Kaki periuk -->
    <rect x="32" y="93" width="6" height="5" rx="1" fill="var(--c1)"/>
    <rect x="62" y="93" width="6" height="5" rx="1" fill="var(--c1)"/>

    <!-- Asap Mendidih -->
    <path d="M 40 68 Q 36 58 42 52" fill="none" stroke="var(--c2)" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M 50 68 Q 46 55 52 46" fill="none" stroke="var(--c2)" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M 60 68 Q 64 58 58 50" fill="none" stroke="var(--c2)" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>

    <!-- Ramuan Botol -->
    <rect x="80" y="65" width="8" height="14" rx="2" fill="#4CAF50" stroke="var(--c1)" stroke-width="1.5"/>
    <rect x="81" y="62" width="6" height="4" rx="1" fill="var(--c1)"/>
    <circle cx="84" cy="72" r="2" fill="rgba(255,255,255,0.5)"/>
    <rect x="8" y="65" width="8" height="14" rx="2" fill="#E53935" stroke="var(--c1)" stroke-width="1.5"/>
    <rect x="9" y="62" width="6" height="4" rx="1" fill="var(--c1)"/>
    <circle cx="12" cy="72" r="2" fill="rgba(255,255,255,0.5)"/>
  </svg>`,

  'wizard': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Aura Biru Langit -->
    <defs>
      <radialGradient id="wizard-aura" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#29B6F6" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="40" rx="42" ry="35" fill="url(#wizard-aura)"/>

    <!-- Jubah Penyihir Agung -->
    <path d="M 20 100 L 28 55 L 50 48 L 72 55 L 80 100 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <!-- Kerah -->
    <path d="M 36 58 Q 50 65 64 58 L 60 70 Q 50 75 40 70 Z" fill="var(--c2)" opacity="0.4"/>
    <!-- Bintang di jubah -->
    <polygon points="50,68 51,72 55,72 52,74 53,78 50,76 47,78 48,74 45,72 49,72" fill="var(--c2)" opacity="0.8"/>
    <polygon points="35,78 36,81 39,81 37,83 38,86 35,84 32,86 33,83 31,81 34,81" fill="var(--c2)" opacity="0.5"/>
    <polygon points="65,78 66,81 69,81 67,83 68,86 65,84 62,86 63,83 61,81 64,81" fill="var(--c2)" opacity="0.5"/>

    <!-- Topi Puncak Biru -->
    <path d="M 32 44 L 68 44 L 60 22 L 50 5 L 40 22 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2.5"/>
    <rect x="26" y="42" width="48" height="6" rx="3" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Bintang Ujung Topi -->
    <polygon points="50,5 51.5,9 56,9 52.5,11.5 54,16 50,13.5 46,16 47.5,11.5 44,9 48.5,9" fill="#FFD700"/>

    <!-- Wajah Bijaksana -->
    <ellipse cx="50" cy="54" rx="14" ry="12" fill="var(--c2)" opacity="0.2" stroke="var(--c1)" stroke-width="2"/>
    <!-- Alis tebal -->
    <path d="M 40 49 Q 44 46 48 49" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 52 49 Q 56 46 60 49" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Mata -->
    <circle cx="44" cy="53" r="3" fill="var(--c1)"/>
    <circle cx="56" cy="53" r="3" fill="var(--c1)"/>
    <circle cx="45" cy="52" r="1" fill="var(--c2)"/>
    <circle cx="57" cy="52" r="1" fill="var(--c2)"/>
    <!-- Janggut -->
    <path d="M 42 62 Q 46 70 50 68 Q 54 70 58 62" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <path d="M 46 68 Q 50 76 50 76" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>

    <!-- Tongkat Sihir -->
    <line x1="75" y1="100" x2="65" y2="45" stroke="var(--c2)" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Kristal Tongkat -->
    <polygon points="65,45 60,38 65,32 70,38" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="65" cy="38" r="3" fill="#fff" opacity="0.6"/>
    <!-- Percikan Sihir -->
    <line x1="60" y1="32" x2="55" y2="26" stroke="var(--c2)" stroke-width="1.5" opacity="0.7"/>
    <line x1="65" y1="30" x2="65" y2="22" stroke="var(--c2)" stroke-width="1.5" opacity="0.7"/>
    <line x1="70" y1="32" x2="76" y2="26" stroke="var(--c2)" stroke-width="1.5" opacity="0.7"/>
    <circle cx="55" cy="25" r="2" fill="var(--c2)"/>
    <circle cx="65" cy="21" r="2" fill="var(--c2)"/>
    <circle cx="76" cy="25" r="2" fill="var(--c2)"/>
  </svg>`,

  'veteran': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Karat & Debu -->
    <rect x="0" y="0" width="100" height="100" fill="rgba(62,39,35,0.04)"/>
    <line x1="0" y1="25" x2="100" y2="25" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>
    <line x1="0" y1="75" x2="100" y2="75" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>

    <!-- Mantel Militer -->
    <path d="M 15 100 L 22 58 L 50 52 L 78 58 L 85 100 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <!-- Bahu Epaulet -->
    <rect x="16" y="56" width="18" height="5" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <rect x="66" y="56" width="18" height="5" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>

    <!-- Medali & Lencana -->
    <!-- Medali bintang -->
    <polygon points="30,72 31.5,77 36,77 32.5,79.5 34,84 30,81.5 26,84 27.5,79.5 24,77 28.5,77" fill="#FFD700" stroke="var(--c1)" stroke-width="1"/>
    <!-- Medali lingkaran -->
    <circle cx="42" cy="74" r="4.5" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <circle cx="42" cy="74" r="2.5" fill="var(--c1)"/>
    <!-- Medali pita -->
    <rect x="50" y="70" width="8" height="4" rx="1" fill="#1565C0" stroke="var(--c1)" stroke-width="1"/>
    <rect x="50" y="74" width="8" height="2" rx="0.5" fill="#E53935"/>

    <!-- Kepala Veteran -->
    <circle cx="50" cy="38" r="15" fill="var(--c2)" opacity="0.25" stroke="var(--c1)" stroke-width="2"/>
    <!-- Helm Militer -->
    <path d="M 33 36 Q 33 18 50 18 Q 67 18 67 36 L 67 32 Q 67 14 50 14 Q 33 14 33 32 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="1.5"/>
    <rect x="28" y="34" width="44" height="5" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Mata lelah -->
    <path d="M 40 38 Q 44 36 48 38" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 52 38 Q 56 36 60 38" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Bekas luka -->
    <path d="M 48 42 L 52 46" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <!-- Kumis -->
    <path d="M 42 47 Q 50 49 58 47" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Senjata Laras Panjang -->
    <line x1="5" y1="95" x2="85" y2="25" stroke="var(--c2)" stroke-width="4" stroke-linecap="round"/>
    <rect x="4" y="92" width="12" height="6" rx="2" fill="var(--c1)" transform="rotate(-37 4 92)"/>
    <!-- Bidikan -->
    <line x1="80" y1="28" x2="88" y2="20" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="88" cy="20" r="3" fill="none" stroke="var(--c1)" stroke-width="1.5"/>
  </svg>`,

  'bodyguard': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Biru Tegas -->
    <rect x="0" y="0" width="100" height="100" fill="rgba(26,35,126,0.04)"/>
    <!-- Segi-6 Perisai Besar -->
    <path d="M 50 8 L 80 24 L 80 56 Q 80 80 50 95 Q 20 80 20 56 L 20 24 Z"
      fill="rgba(84,110,122,0.15)" stroke="var(--c1)" stroke-width="3"/>
    <path d="M 50 16 L 74 29 L 74 54 Q 74 73 50 86 Q 26 73 26 54 L 26 29 Z"
      fill="none" stroke="var(--c2)" stroke-width="2" stroke-dasharray="5 3"/>
    <!-- Inisial B di Perisai -->
    <text x="50" y="62" font-family="'Rye',cursive" font-size="30" fill="var(--c1)"
      text-anchor="middle" opacity="0.7">B</text>
    <!-- Bintang Keberanian -->
    <polygon points="50,20 51.5,25 56,25 52.5,27.5 54,32 50,29.5 46,32 47.5,27.5 44,25 48.5,25"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="1"/>
    <!-- Lengan bersilang kiri -->
    <path d="M 8 70 Q 20 60 35 65 Q 25 72 20 85" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <!-- Lengan bersilang kanan -->
    <path d="M 92 70 Q 80 60 65 65 Q 75 72 80 85" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <!-- Kepalan tangan kiri -->
    <ellipse cx="18" cy="87" rx="6" ry="5" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <!-- Kepalan tangan kanan -->
    <ellipse cx="82" cy="87" rx="6" ry="5" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
  </svg>`,

  'priest': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Sinar Ilahi -->
    <defs>
      <radialGradient id="holy-light" cx="50%" cy="20%" r="60%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="20" rx="45" ry="30" fill="url(#holy-light)"/>
    <!-- Salib Suci -->
    <rect x="44" y="8" width="12" height="55" rx="3" fill="var(--c1)"/>
    <rect x="25" y="22" width="50" height="12" rx="3" fill="var(--c1)"/>
    <!-- Ornamen Salib Emas -->
    <rect x="46" y="10" width="8" height="51" rx="2" fill="var(--c2)" opacity="0.5"/>
    <rect x="27" y="24" width="46" height="8" rx="2" fill="var(--c2)" opacity="0.5"/>
    <!-- Cahaya Salib Kecil di Ujung -->
    <circle cx="50" cy="8" r="4" fill="var(--c2)"/>
    <circle cx="25" cy="28" r="3" fill="var(--c2)"/>
    <circle cx="75" cy="28" r="3" fill="var(--c2)"/>
    <!-- Jubah Pendeta -->
    <path d="M 15 100 L 30 65 Q 50 60 70 65 L 85 100 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <!-- Kerah Putih -->
    <path d="M 38 65 Q 50 72 62 65 L 58 78 Q 50 82 42 78 Z" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Rosario / Tasbih -->
    <circle cx="50" cy="90" r="3" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <line x1="50" y1="87" x2="50" y2="63" stroke="var(--c2)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <!-- Bintang Kecil -->
    <polygon points="85,10 86,14 90,14 87,16 88,20 85,18 82,20 83,16 80,14 84,14" fill="var(--c2)" opacity="0.6"/>
    <polygon points="15,10 16,14 20,14 17,16 18,20 15,18 12,20 13,16 10,14 14,14" fill="var(--c2)" opacity="0.6"/>
  </svg>`,

  'mayor': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Strip Horizontal Bendera -->
    <rect x="0" y="0" width="100" height="33" fill="rgba(27,58,107,0.08)"/>
    <rect x="0" y="67" width="100" height="33" fill="rgba(192,57,43,0.08)"/>
    <!-- Podium Pidato -->
    <path d="M 20 90 L 30 65 L 70 65 L 80 90 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <rect x="27" y="65" width="46" height="5" rx="1" fill="var(--c2)" opacity="0.4"/>
    <!-- Microfon -->
    <line x1="50" y1="65" x2="50" y2="30" stroke="var(--c2)" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="26" rx="8" ry="10" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <!-- Garis Mikrofon -->
    <line x1="42" y1="22" x2="58" y2="22" stroke="var(--c2)" stroke-width="1.5" opacity="0.5"/>
    <line x1="42" y1="26" x2="58" y2="26" stroke="var(--c2)" stroke-width="1.5" opacity="0.5"/>
    <line x1="42" y1="30" x2="58" y2="30" stroke="var(--c2)" stroke-width="1.5" opacity="0.5"/>
    <!-- Kabel Mik -->
    <path d="M 50 36 Q 40 50 45 60" fill="none" stroke="var(--c2)" stroke-width="2" stroke-dasharray="3 2"/>
    <!-- Bintang Lencana Walikota -->
    <polygon points="50,48 52,54 58,54 53.5,57.5 55.5,63.5 50,60 44.5,63.5 46.5,57.5 42,54 48,54"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Nama Jabatan -->
    <rect x="28" y="72" width="44" height="10" rx="2" fill="var(--c2)" opacity="0.2"/>
    <line x1="30" y1="78" x2="70" y2="78" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="4 2"/>
    <!-- Kipas Karnaval Kiri Kanan -->
    <path d="M 5 30 Q 15 20 20 35" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round"/>
    <path d="M 95 30 Q 85 20 80 35" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'sheriff': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Kayu Papan -->
    <line x1="0" y1="20" x2="100" y2="20" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>
    <line x1="0" y1="40" x2="100" y2="40" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>
    <line x1="0" y1="60" x2="100" y2="60" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>
    <line x1="0" y1="80" x2="100" y2="80" stroke="var(--c2)" stroke-width="0.5" opacity="0.3"/>
    <!-- Bintang Lencana Sheriff Besar -->
    <polygon points="50,12 54,26 68,26 57,35 61,49 50,40 39,49 43,35 32,26 46,26"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="2.5"/>
    <polygon points="50,18 53,27 62,27 55,32 58,41 50,36 42,41 45,32 38,27 47,27"
      fill="none" stroke="var(--c1)" stroke-width="1.5"/>
    <circle cx="50" cy="30" r="5" fill="var(--c1)"/>
    <circle cx="50" cy="30" r="2.5" fill="var(--c2)"/>
    <!-- Pistol Revolver Kiri -->
    <rect x="12" y="60" width="22" height="8" rx="3" fill="var(--c1)"/>
    <rect x="26" y="56" width="6" height="12" rx="1" fill="var(--c1)"/>
    <line x1="12" y1="64" x2="8" y2="64" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 18 68 L 20 75 L 16 75 Z" fill="var(--c2)"/>
    <!-- Pistol Revolver Kanan -->
    <rect x="66" y="60" width="22" height="8" rx="3" fill="var(--c1)"/>
    <rect x="68" y="56" width="6" height="12" rx="1" fill="var(--c1)"/>
    <line x1="88" y1="64" x2="92" y2="64" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 82 68 L 80 75 L 84 75 Z" fill="var(--c2)"/>
    <!-- Topi Koboi -->
    <path d="M 28 55 Q 50 45 72 55 L 68 42 Q 50 35 32 42 Z" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <rect x="22" y="53" width="56" height="5" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Pita Topi -->
    <line x1="30" y1="48" x2="70" y2="48" stroke="var(--c2)" stroke-width="2" opacity="0.7"/>
    <!-- Kepala Sheriff -->
    <ellipse cx="50" cy="88" rx="14" ry="10" fill="var(--c2)" opacity="0.2" stroke="var(--c1)" stroke-width="1.5"/>
    <path d="M 42 86 Q 46 84 50 86 Q 54 84 58 86" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'villager-1': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Hijau Alam -->
    <path d="M 0 70 Q 25 60 50 68 Q 75 76 100 70 L 100 100 L 0 100 Z" fill="rgba(46,125,50,0.1)"/>
    <!-- Pohon Karnaval -->
    <line x1="50" y1="100" x2="50" y2="55" stroke="var(--c1)" stroke-width="5" stroke-linecap="round"/>
    <circle cx="50" cy="42" r="20" fill="var(--c1)" opacity="0.8"/>
    <circle cx="38" cy="52" r="13" fill="var(--c1)" opacity="0.7"/>
    <circle cx="62" cy="52" r="13" fill="var(--c1)" opacity="0.7"/>
    <!-- Bunga di Pohon -->
    <circle cx="44" cy="36" r="3" fill="var(--c2)"/>
    <circle cx="56" cy="32" r="3.5" fill="var(--c2)"/>
    <circle cx="50" cy="45" r="2.5" fill="var(--c2)"/>
    <circle cx="38" cy="46" r="2" fill="var(--c2)"/>
    <circle cx="62" cy="46" r="2" fill="var(--c2)"/>
    <!-- Pagar Carnaval -->
    <line x1="10" y1="80" x2="90" y2="80" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <line x1="20" y1="74" x2="20" y2="84" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="35" y1="74" x2="35" y2="84" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="50" y2="84" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="65" y1="74" x2="65" y2="84" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="80" y1="74" x2="80" y2="84" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Karcis di tangan -->
    <rect x="60" y="85" width="25" height="12" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <line x1="72" y1="85" x2="72" y2="97" stroke="var(--c1)" stroke-width="1" stroke-dasharray="2 2"/>
    <!-- Bayangan Sosok -->
    <ellipse cx="25" cy="90" rx="10" ry="8" fill="var(--c1)" opacity="0.15"/>
  </svg>`,

  'villager-2': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Langit Biru Cerah -->
    <path d="M 0 0 Q 50 15 100 0 L 100 45 Q 50 30 0 45 Z" fill="rgba(1,87,155,0.08)"/>
    <!-- Awan -->
    <circle cx="20" cy="18" r="8" fill="rgba(1,87,155,0.1)"/>
    <circle cx="30" cy="14" r="10" fill="rgba(1,87,155,0.1)"/>
    <circle cx="40" cy="18" r="8" fill="rgba(1,87,155,0.1)"/>
    <circle cx="70" cy="22" r="7" fill="rgba(1,87,155,0.1)"/>
    <circle cx="80" cy="18" r="9" fill="rgba(1,87,155,0.1)"/>
    <!-- Balon Warna-warni -->
    <ellipse cx="30" cy="40" rx="10" ry="13" fill="var(--c1)" opacity="0.7"/>
    <line x1="30" y1="53" x2="32" y2="70" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <ellipse cx="50" cy="35" rx="11" ry="14" fill="var(--c2)" opacity="0.8" stroke="var(--c1)" stroke-width="1.5"/>
    <line x1="50" y1="49" x2="50" y2="70" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <ellipse cx="70" cy="40" rx="10" ry="13" fill="#E91E63" opacity="0.7"/>
    <line x1="70" y1="53" x2="68" y2="70" stroke="var(--c1)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <!-- Tali Balon Pegangan -->
    <path d="M 32 70 Q 50 72 68 70 L 65 78 Q 50 80 35 78 Z" fill="var(--c1)" opacity="0.3"/>
    <!-- Kilap Balon -->
    <ellipse cx="46" cy="30" rx="3" ry="5" fill="rgba(255,255,255,0.5)" transform="rotate(-20 46 30)"/>
    <ellipse cx="27" cy="35" rx="2.5" ry="4" fill="rgba(255,255,255,0.5)" transform="rotate(-20 27 35)"/>
    <ellipse cx="67" cy="35" rx="2.5" ry="4" fill="rgba(255,255,255,0.5)" transform="rotate(-20 67 35)"/>
    <!-- Bintang Kecil -->
    <polygon points="15,55 16,59 20,59 17,61 18,65 15,63 12,65 13,61 10,59 14,59" fill="var(--c2)" opacity="0.7"/>
    <polygon points="85,58 86,62 90,62 87,64 88,68 85,66 82,68 83,64 80,62 84,62" fill="var(--c2)" opacity="0.7"/>
    <!-- Kartu Undian -->
    <rect x="35" y="82" width="30" height="14" rx="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="50" cy="89" r="3" fill="var(--c1)"/>
  </svg>`,

  'villager-3': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Api Obor Orange -->
    <defs>
      <radialGradient id="fire-glow" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#FFCC80" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="30" rx="35" ry="25" fill="url(#fire-glow)"/>
    <!-- Obor Karnaval -->
    <rect x="46" y="50" width="8" height="40" rx="3" fill="var(--c1)"/>
    <!-- Api -->
    <path d="M 50 50 Q 40 42 43 30 Q 46 20 50 12 Q 54 20 57 30 Q 60 42 50 50 Z"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <path d="M 50 48 Q 44 42 46 33 Q 48 25 50 20 Q 52 25 54 33 Q 56 42 50 48 Z"
      fill="#fff" opacity="0.5"/>
    <!-- Lingkaran Api -->
    <circle cx="50" cy="65" r="30" fill="none" stroke="var(--c2)" stroke-width="3" stroke-dasharray="8 5"/>
    <!-- Aksesori Akrobat -->
    <path d="M 15 70 Q 25 55 35 65" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 85 70 Q 75 55 65 65" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <!-- Sosok Akrobat -->
    <circle cx="50" cy="88" r="7" fill="var(--c1)" opacity="0.3" stroke="var(--c1)" stroke-width="2"/>
    <!-- Bintang API -->
    <polygon points="50,92 51.5,96 55.5,96 52.5,98.5 53.5,102 50,100 46.5,102 47.5,98.5 44.5,96 48.5,96"
      fill="var(--c2)" opacity="0.8"/>
  </svg>`,

  'werewolf-2': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Siluet Malam Karnaval -->
    <rect x="0" y="0" width="100" height="100" fill="rgba(33,33,33,0.05)"/>
    <!-- Bulan di Balik Awan -->
    <circle cx="75" cy="18" r="14" fill="rgba(97,97,97,0.2)" stroke="var(--c2)" stroke-width="2"/>
    <path d="M 68 12 Q 55 18 62 28 Q 50 22 58 12 Z" fill="rgba(97,97,97,0.4)"/>
    <!-- Siluet Tubuh Serigala Berdiri -->
    <!-- Kaki -->
    <path d="M 38 100 L 42 75 L 50 72 L 58 75 L 62 100" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <!-- Tubuh -->
    <ellipse cx="50" cy="65" rx="18" ry="20" fill="var(--c2)" stroke="var(--c1)" stroke-width="2.5"/>
    <!-- Dada berbulu -->
    <path d="M 35 60 Q 45 55 50 60 Q 55 55 65 60" fill="none" stroke="var(--c1)" stroke-width="1.5" opacity="0.5"/>
    <path d="M 34 65 Q 42 60 50 65 Q 58 60 66 65" fill="none" stroke="var(--c1)" stroke-width="1.5" opacity="0.5"/>
    <!-- Kepala -->
    <ellipse cx="50" cy="40" rx="16" ry="18" fill="var(--c2)" stroke="var(--c1)" stroke-width="2.5"/>
    <!-- Telinga Runcing -->
    <path d="M 38 30 L 34 15 L 46 26 Z" fill="var(--c1)"/>
    <path d="M 62 30 L 66 15 L 54 26 Z" fill="var(--c1)"/>
    <!-- Moncong -->
    <ellipse cx="50" cy="46" rx="8" ry="5" fill="var(--c1)" opacity="0.4"/>
    <ellipse cx="50" cy="44" rx="4" ry="2.5" fill="var(--c1)"/>
    <!-- Mata Bersinar -->
    <circle cx="43" cy="37" r="3.5" fill="#fff"/>
    <circle cx="57" cy="37" r="3.5" fill="#fff"/>
    <circle cx="43" cy="37" r="2" fill="var(--c1)"/>
    <circle cx="57" cy="37" r="2" fill="var(--c1)"/>
    <!-- Taring -->
    <path d="M 46 50 L 44 58 L 48 50 Z" fill="#fff"/>
    <path d="M 54 50 L 52 58 L 56 50 Z" fill="#fff"/>
    <!-- Cakar -->
    <path d="M 25 62 Q 32 55 38 62" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 62 62 Q 68 55 75 62" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  'lone-wolf': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Langit Malam Sepi -->
    <rect x="0" y="0" width="100" height="100" fill="rgba(38,50,56,0.05)"/>
    <!-- Bulan Penuh Sendirian -->
    <circle cx="50" cy="22" r="18" fill="rgba(120,144,156,0.25)" stroke="var(--c2)" stroke-width="2.5"/>
    <circle cx="45" cy="17" r="4" fill="rgba(38,50,56,0.15)"/>
    <circle cx="55" cy="25" r="3" fill="rgba(38,50,56,0.1)"/>
    <!-- Bintang Jauh -->
    <circle cx="10" cy="12" r="1.5" fill="var(--c2)" opacity="0.6"/>
    <circle cx="88" cy="8" r="1" fill="var(--c2)" opacity="0.5"/>
    <circle cx="25" cy="5" r="1.5" fill="var(--c2)" opacity="0.4"/>
    <circle cx="75" cy="15" r="1" fill="var(--c2)" opacity="0.6"/>
    <!-- Bukit Gelap -->
    <path d="M 0 75 Q 25 55 50 65 Q 75 75 100 60 L 100 100 L 0 100 Z" fill="var(--c1)" opacity="0.15"/>
    <!-- Siluet Serigala Mengaum SENDIRIAN -->
    <path d="M 30 95 Q 35 75 42 65 Q 48 58 50 48 Q 55 40 62 38 L 57 47 Q 70 48 75 62 Q 63 55 58 62 L 60 72 Q 52 65 46 75 Q 40 88 30 95 Z"
      fill="var(--c1)"/>
    <!-- Howling (Lengkungan Aum) -->
    <path d="M 48 48 Q 40 32 50 20" fill="none" stroke="var(--c2)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3"/>
    <path d="M 52 46 Q 62 30 55 18" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 3" opacity="0.6"/>
    <!-- Luka Cakar di Badan -->
    <path d="M 40 70 L 44 80" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    <path d="M 43 68 L 47 78" fill="none" stroke="var(--c2)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  </svg>`,

  'doppelganger': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Cermin Belah -->
    <line x1="50" y1="0" x2="50" y2="100" stroke="var(--c1)" stroke-width="2" stroke-dasharray="6 3"/>
    <rect x="0" y="0" width="50" height="100" fill="rgba(74,20,140,0.05)"/>
    <rect x="50" y="0" width="50" height="100" fill="rgba(206,147,216,0.08)"/>
    <!-- Sosok Kiri (Asli) -->
    <circle cx="28" cy="28" r="12" fill="var(--c1)" opacity="0.7" stroke="var(--c1)" stroke-width="2"/>
    <path d="M 10 70 L 17 48 L 28 44 L 39 48 L 46 70 Z" fill="var(--c1)" opacity="0.7" stroke="var(--c1)" stroke-width="2"/>
    <!-- Sosok Kanan (Salinan) -->
    <circle cx="72" cy="28" r="12" fill="var(--c2)" opacity="0.5" stroke="var(--c2)" stroke-width="2" stroke-dasharray="4 2"/>
    <path d="M 54 70 L 61 48 L 72 44 L 83 48 L 90 70 Z" fill="var(--c2)" opacity="0.5" stroke="var(--c2)" stroke-width="2" stroke-dasharray="4 2"/>
    <!-- Mata Kiri -->
    <circle cx="23" cy="26" r="3" fill="#fff"/>
    <circle cx="23" cy="26" r="1.5" fill="var(--c1)"/>
    <circle cx="33" cy="26" r="3" fill="#fff"/>
    <circle cx="33" cy="26" r="1.5" fill="var(--c1)"/>
    <!-- Mata Kanan (Cermin) -->
    <circle cx="67" cy="26" r="3" fill="#fff" opacity="0.7"/>
    <circle cx="67" cy="26" r="1.5" fill="var(--c2)"/>
    <circle cx="77" cy="26" r="3" fill="#fff" opacity="0.7"/>
    <circle cx="77" cy="26" r="1.5" fill="var(--c2)"/>
    <!-- Tanda Tanya di tengah cermin -->
    <text x="50" y="90" font-family="'Rye',cursive" font-size="24" fill="var(--c1)"
      text-anchor="middle" opacity="0.4">?</text>
    <!-- Panah Saling Menunjuk -->
    <path d="M 38 35 L 46 35" fill="none" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <polygon points="46,35 42,32 42,38" fill="var(--c1)"/>
    <path d="M 54 38 L 62 38" fill="none" stroke="var(--c2)" stroke-width="2" stroke-linecap="round"/>
    <polygon points="54,38 58,35 58,41" fill="var(--c2)"/>
  </svg>`,

  'serial-killer': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Merah Darah Tetes -->
    <path d="M 15 0 L 22 15 A 4 4 0 0 1 8 15 Z" fill="rgba(183,28,28,0.3)"/>
    <path d="M 85 5 L 90 18 A 3 3 0 0 1 80 18 Z" fill="rgba(183,28,28,0.2)"/>
    <path d="M 50 0 L 56 12 A 3.5 3.5 0 0 1 44 12 Z" fill="rgba(183,28,28,0.2)"/>
    <!-- Pisau / Senjata -->
    <path d="M 20 90 L 75 20 L 82 15 L 80 25 L 80 28 L 68 22 L 27 95 Z"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="2" stroke-linejoin="round"/>
    <!-- Kilap Pisau -->
    <path d="M 73 22 L 65 28" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <!-- Gagang Pisau -->
    <rect x="14" y="84" width="16" height="10" rx="3" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <line x1="14" y1="89" x2="30" y2="89" stroke="var(--c2)" stroke-width="1.5" opacity="0.5"/>
    <!-- Topeng Badut Psikopat -->
    <circle cx="65" cy="65" r="22" fill="#fff" stroke="var(--c1)" stroke-width="2.5"/>
    <!-- Senyum Lebar Menyeramkan -->
    <path d="M 52 72 Q 65 84 78 72" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 54 72 L 52 68" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <path d="M 76 72 L 78 68" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/>
    <!-- Mata X -->
    <line x1="57" y1="58" x2="62" y2="63" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="62" y1="58" x2="57" y2="63" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Mata Membelalak -->
    <circle cx="73" cy="60" r="5" fill="var(--c1)"/>
    <circle cx="74" cy="59" r="2" fill="#fff"/>
    <!-- Tetesan Merah -->
    <path d="M 60 88 L 62 96 A 2 2 0 0 1 58 96 Z" fill="var(--c1)"/>
  </svg>`,

  'idiot': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Confetti Jatuh -->
    <rect x="10" y="5" width="6" height="6" rx="1" fill="var(--c2)" transform="rotate(20 10 5)" opacity="0.6"/>
    <rect x="80" y="10" width="5" height="5" rx="1" fill="var(--c1)" transform="rotate(-15 80 10)" opacity="0.5"/>
    <circle cx="25" cy="15" r="3" fill="var(--c2)" opacity="0.5"/>
    <circle cx="75" cy="8" r="2.5" fill="#E91E63" opacity="0.5"/>
    <!-- Wajah Polos Bulat Besar -->
    <circle cx="50" cy="45" r="32" fill="var(--c2)" opacity="0.3" stroke="var(--c1)" stroke-width="3"/>
    <!-- Kepala rambut acak-acakan -->
    <path d="M 25 35 Q 22 20 30 18 Q 28 28 35 26" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 35 26 Q 38 12 46 14 Q 44 24 50 22" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 50 22 Q 55 10 64 14 Q 60 24 66 22" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <path d="M 66 22 Q 73 18 76 30 Q 70 28 72 38" fill="none" stroke="var(--c1)" stroke-width="3" stroke-linecap="round"/>
    <!-- Mata Besar Bingung -->
    <circle cx="40" cy="42" r="7" fill="#fff" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="60" cy="42" r="7" fill="#fff" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="38" cy="41" r="3.5" fill="var(--c1)"/>
    <circle cx="58" cy="43" r="3.5" fill="var(--c1)"/>
    <circle cx="39" cy="40" r="1.5" fill="#fff"/>
    <circle cx="59" cy="42" r="1.5" fill="#fff"/>
    <!-- Alis Bingung tidak simetris -->
    <path d="M 33 34 Q 38 30 44 34" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 56 32 Q 64 37 68 33" fill="none" stroke="var(--c1)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Mulut O kaget -->
    <ellipse cx="50" cy="57" rx="8" ry="6" fill="var(--c1)"/>
    <ellipse cx="50" cy="57" rx="5" ry="4" fill="#fff"/>
    <!-- Hidung -->
    <circle cx="50" cy="50" r="3" fill="var(--c1)" opacity="0.5"/>
    <!-- Tanda Tanya di atas kepala -->
    <text x="50" y="90" font-family="'Rye',cursive" font-size="22" fill="var(--c2)"
      text-anchor="middle" opacity="0.7">???</text>
  </svg>`,

  'prince': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Aura Keemasan -->
    <defs>
      <radialGradient id="royal-glow" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="30" rx="45" ry="35" fill="url(#royal-glow)"/>
    <!-- Mahkota Pangeran -->
    <path d="M 20 42 L 20 28 L 32 36 L 40 18 L 50 32 L 60 18 L 68 36 L 80 28 L 80 42 Z"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="20" y="40" width="60" height="7" rx="2" fill="var(--c1)" stroke="var(--c2)" stroke-width="1.5"/>
    <!-- Permata Mahkota -->
    <circle cx="50" cy="26" r="5" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/>
    <circle cx="50" cy="26" r="2.5" fill="#fff" opacity="0.5"/>
    <circle cx="32" cy="34" r="3" fill="var(--c1)" stroke="var(--c2)" stroke-width="1.5"/>
    <circle cx="68" cy="34" r="3" fill="var(--c1)" stroke="var(--c2)" stroke-width="1.5"/>
    <!-- Jubah Kerajaan -->
    <path d="M 12 100 L 22 65 Q 36 58 50 62 Q 64 58 78 65 L 88 100 Z"
      fill="var(--c1)" stroke="var(--c2)" stroke-width="2.5"/>
    <!-- Ornamen Jubah -->
    <path d="M 35 68 Q 50 75 65 68" fill="none" stroke="var(--c2)" stroke-width="2" stroke-dasharray="4 2"/>
    <path d="M 30 78 Q 50 86 70 78" fill="none" stroke="var(--c2)" stroke-width="2" stroke-dasharray="4 2"/>
    <!-- Medali Kerajaan -->
    <polygon points="50,82 52,87 57,87 53,90 55,95 50,92 45,95 47,90 43,87 48,87"
      fill="var(--c2)" stroke="var(--c1)" stroke-width="1.5"/>
    <!-- Kancing Jubah Emas -->
    <circle cx="50" cy="68" r="2.5" fill="var(--c2)" stroke="var(--c1)" stroke-width="1"/>
    <circle cx="50" cy="56" r="2" fill="var(--c2)" stroke="var(--c1)" stroke-width="1"/>
    <!-- Tongkat Kerajaan -->
    <line x1="80" y1="100" x2="70" y2="50" stroke="var(--c2)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="70" cy="48" r="6" fill="var(--c2)" stroke="var(--c1)" stroke-width="2"/>
    <circle cx="70" cy="48" r="3" fill="var(--c1)"/>
  </svg>`,

  'little-girl': `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Latar Lembut -->
    <circle cx="50" cy="50" r="45" fill="rgba(244,143,177,0.08)"/>
    <!-- Jari-jari Tangan Mengintip -->
    <!-- Tangan kiri -->
    <path d="M 5 45 Q 20 42 25 55" fill="none" stroke="var(--c1)" stroke-width="5" stroke-linecap="round"/>
    <!-- Jari-jari kiri -->
    <path d="M 8 40 Q 14 35 18 42" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 14 36 Q 20 30 24 38" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 20 34 Q 26 28 30 37" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <!-- Tangan kanan -->
    <path d="M 95 45 Q 80 42 75 55" fill="none" stroke="var(--c1)" stroke-width="5" stroke-linecap="round"/>
    <!-- Jari-jari kanan -->
    <path d="M 92 40 Q 86 35 82 42" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 86 36 Q 80 30 76 38" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <path d="M 80 34 Q 74 28 70 37" fill="none" stroke="var(--c1)" stroke-width="4" stroke-linecap="round"/>
    <!-- Kepala Anak Kecil Intip di Tengah -->
    <circle cx="50" cy="60" r="22" fill="var(--c2)" opacity="0.3" stroke="var(--c1)" stroke-width="2.5"/>
    <!-- Poni Rambut -->
    <path d="M 30 52 Q 35 40 50 38 Q 65 40 70 52" fill="var(--c1)" opacity="0.7"/>
    <path d="M 30 52 Q 32 42 28 55" fill="var(--c1)" opacity="0.7"/>
    <path d="M 70 52 Q 68 42 72 55" fill="var(--c1)" opacity="0.7"/>
    <!-- Pita Rambut -->
    <path d="M 62 42 Q 66 38 70 42 Q 66 44 62 42 Z" fill="var(--c2)"/>
    <path d="M 68 42 Q 72 38 75 42 Q 72 44 68 42 Z" fill="var(--c2)"/>
    <circle cx="69" cy="42" r="2" fill="var(--c1)"/>
    <!-- Mata Mengintip -->
    <ellipse cx="41" cy="62" rx="7" ry="5" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <ellipse cx="59" cy="62" rx="7" ry="5" fill="#fff" stroke="var(--c1)" stroke-width="1.5"/>
    <circle cx="42" cy="62" r="3" fill="var(--c1)"/>
    <circle cx="60" cy="62" r="3" fill="var(--c1)"/>
    <circle cx="43" cy="61" r="1.5" fill="#fff"/>
    <circle cx="61" cy="61" r="1.5" fill="#fff"/>
    <!-- Pipi Lucu -->
    <circle cx="34" cy="68" r="4" fill="var(--c2)" opacity="0.5"/>
    <circle cx="66" cy="68" r="4" fill="var(--c2)" opacity="0.5"/>
    <!-- Celah Intip Kecil antara jari -->
    <line x1="30" y1="50" x2="70" y2="50" stroke="var(--c1)" stroke-width="2" opacity="0.2"/>
    <!-- Bintang Kecil -->
    <polygon points="15,80 16.5,85 21,85 17.5,87.5 19,92 15,89.5 11,92 12.5,87.5 9,85 13.5,85" fill="var(--c2)" opacity="0.6"/>
    <polygon points="85,80 86.5,85 91,85 87.5,87.5 89,92 85,89.5 81,92 82.5,87.5 79,85 83.5,85" fill="var(--c2)" opacity="0.6"/>
  </svg>`,

  'back': `<svg viewBox="0 0 100 150" width="100%" height="100%">
    <defs>
      <!-- Pola Diagonal Garis Karnaval -->
      <pattern id="carnival-stripe-back" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="#1A1A1A"/>
        <rect width="4" height="8" fill="#111111"/>
      </pattern>
      <!-- Cahaya Radial Tengah -->
      <radialGradient id="center-glow-back" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.18"/>
        <stop offset="60%" stop-color="#D4AF37" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <!-- Cahaya Atas -->
      <radialGradient id="top-glow-back" cx="50%" cy="0%" r="60%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>

    <!-- Latar Dasar Gelap + Stripe -->
    <rect width="100" height="150" fill="url(#carnival-stripe-back)"/>
    <!-- Overlay gradien tengah -->
    <rect width="100" height="150" fill="url(#center-glow-back)"/>
    <rect width="100" height="150" fill="url(#top-glow-back)"/>

    <!-- ══ BINGKAI LUAR TEBAL ══ -->
    <rect x="3" y="3" width="94" height="144" rx="2" fill="none" stroke="#D4AF37" stroke-width="2.5"/>
    <!-- Bingkai Kedua Putus -->
    <rect x="6.5" y="6.5" width="87" height="137" rx="1.5" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-dasharray="6 3"/>
    <!-- Bingkai Ketiga Tipis -->
    <rect x="9" y="9" width="82" height="132" rx="1" fill="none" stroke="#D4AF37" stroke-width="0.4" opacity="0.5"/>

    <!-- ══ ORNAMEN POJOK GANDA ══ -->
    <!-- Kiri Atas -->
    <path d="M 3 18 Q 3 10 11 10" fill="none" stroke="#D4AF37" stroke-width="1.8"/>
    <path d="M 3 22 Q 5 14 13 14" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <circle cx="6.5" cy="6.5" r="2.5" fill="#D4AF37" opacity="0.8"/>
    <!-- Kanan Atas -->
    <path d="M 97 18 Q 97 10 89 10" fill="none" stroke="#D4AF37" stroke-width="1.8"/>
    <path d="M 97 22 Q 95 14 87 14" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <circle cx="93.5" cy="6.5" r="2.5" fill="#D4AF37" opacity="0.8"/>
    <!-- Kiri Bawah -->
    <path d="M 3 132 Q 3 140 11 140" fill="none" stroke="#D4AF37" stroke-width="1.8"/>
    <path d="M 3 128 Q 5 136 13 136" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <circle cx="6.5" cy="143.5" r="2.5" fill="#D4AF37" opacity="0.8"/>
    <!-- Kanan Bawah -->
    <path d="M 97 132 Q 97 140 89 140" fill="none" stroke="#D4AF37" stroke-width="1.8"/>
    <path d="M 97 128 Q 95 136 87 136" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <circle cx="93.5" cy="143.5" r="2.5" fill="#D4AF37" opacity="0.8"/>

    <!-- ══ BINTANG BESAR MELEDAK (TOP) ══ -->
    <!-- Sinar panjang -->
    <g transform="translate(50, 30)">
      <line x1="0" y1="-16" x2="0" y2="-11" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="11.3" y1="-11.3" x2="7.8" y2="-7.8" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="16" y1="0" x2="11" y2="0" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="11.3" y1="11.3" x2="7.8" y2="7.8" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="0" y1="16" x2="0" y2="11" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="-11.3" y1="11.3" x2="-7.8" y2="7.8" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="-16" y1="0" x2="-11" y2="0" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="-11.3" y1="-11.3" x2="-7.8" y2="-7.8" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Bintang 8 Ujung -->
      <polygon points="0,-10 1.8,-4 7,-4 2,-1 4,5 0,2 -4,5 -2,-1 -7,-4 -1.8,-4"
        fill="#D4AF37"/>
      <circle cx="0" cy="0" r="3" fill="#1A1A1A"/>
      <circle cx="0" cy="0" r="1.5" fill="#D4AF37"/>
    </g>

    <!-- ══ GARIS DEKORATIF TENGAH-ATAS ══ -->
    <line x1="13" y1="47" x2="87" y2="47" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <!-- Ornamen bunga tengah garis -->
    <circle cx="50" cy="47" r="2.5" fill="#1A1A1A" stroke="#D4AF37" stroke-width="0.8"/>
    <circle cx="50" cy="47" r="1" fill="#D4AF37"/>
    <circle cx="30" cy="47" r="1.2" fill="#D4AF37" opacity="0.7"/>
    <circle cx="70" cy="47" r="1.2" fill="#D4AF37" opacity="0.7"/>

    <!-- ══ LABEL "NIGHTMARE CARNIVAL" ══ -->
    <text x="50" y="58" font-family="'Rye', cursive" font-size="6.5" fill="#D4AF37"
      text-anchor="middle" letter-spacing="1.5" opacity="0.9">NIGHTMARE</text>
    <text x="50" y="66" font-family="'Rye', cursive" font-size="6.5" fill="#D4AF37"
      text-anchor="middle" letter-spacing="1.5" opacity="0.9">CARNIVAL</text>

    <!-- ══ GARIS PEMISAH TENGAH ══ -->
    <line x1="13" y1="70" x2="40" y2="70" stroke="#D4AF37" stroke-width="0.6" opacity="0.5"/>
    <polygon points="50,70 52,67 54,70 52,73" fill="#D4AF37" opacity="0.8"/>
    <line x1="60" y1="70" x2="87" y2="70" stroke="#D4AF37" stroke-width="0.6" opacity="0.5"/>

    <!-- ══ NAMA UTAMA: MRSETIAWAN ══ -->
    <!-- Kotak latar nama -->
    <rect x="11" y="74" width="78" height="20" rx="2" fill="#D4AF37" opacity="0.12"/>
    <rect x="11" y="74" width="78" height="20" rx="2" fill="none" stroke="#D4AF37" stroke-width="1"/>
    <!-- Highlight sudut kotak -->
    <rect x="13" y="76" width="74" height="16" rx="1.5" fill="none" stroke="#D4AF37" stroke-width="0.4" opacity="0.5" stroke-dasharray="4 3"/>
    <!-- Nama -->
    <text x="50" y="88" font-family="'Rye', cursive" font-size="7" fill="#D4AF37"
      text-anchor="middle" letter-spacing="2">MRSETIAWAN</text>

    <!-- ══ GARIS BAWAH NAMA ══ -->
    <line x1="13" y1="97" x2="40" y2="97" stroke="#D4AF37" stroke-width="0.6" opacity="0.5"/>
    <circle cx="50" cy="97" r="2" fill="#D4AF37" opacity="0.7"/>
    <line x1="60" y1="97" x2="87" y2="97" stroke="#D4AF37" stroke-width="0.6" opacity="0.5"/>

    <!-- ══ LABEL "ADMIT ONE" ══ -->
    <text x="50" y="109" font-family="'Special Elite', monospace" font-size="5" fill="#D4AF37"
      text-anchor="middle" letter-spacing="3" opacity="0.7">✦ ADMIT ONE ✦</text>

    <!-- ══ BARCODE DEKORATIF ══ -->
    <g opacity="0.4">
      <rect x="16" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="19.5" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="22" y="113" width="3" height="9" fill="#D4AF37"/>
      <rect x="26.5" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="29" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="32.5" y="113" width="3" height="9" fill="#D4AF37"/>
      <rect x="37" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="39.5" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="43" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="45.5" y="113" width="3" height="9" fill="#D4AF37"/>
      <rect x="50" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="52.5" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="56" y="113" width="3" height="9" fill="#D4AF37"/>
      <rect x="60.5" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="63" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="66.5" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="69" y="113" width="3" height="9" fill="#D4AF37"/>
      <rect x="73.5" y="113" width="2" height="9" fill="#D4AF37"/>
      <rect x="77" y="113" width="1" height="9" fill="#D4AF37"/>
      <rect x="79.5" y="113" width="3" height="9" fill="#D4AF37"/>
      <text x="50" y="126.5" font-family="'Special Elite', monospace" font-size="4"
        fill="#D4AF37" text-anchor="middle" letter-spacing="1">★ NC-2024-MSW ★</text>
    </g>

    <!-- ══ GARIS DEKORATIF BAWAH ══ -->
    <line x1="13" y1="130" x2="87" y2="130" stroke="#D4AF37" stroke-width="0.8" opacity="0.6"/>
    <circle cx="50" cy="130" r="2.5" fill="#1A1A1A" stroke="#D4AF37" stroke-width="0.8"/>
    <circle cx="50" cy="130" r="1" fill="#D4AF37"/>
    <circle cx="30" cy="130" r="1.2" fill="#D4AF37" opacity="0.7"/>
    <circle cx="70" cy="130" r="1.2" fill="#D4AF37" opacity="0.7"/>

    <!-- ══ BINTANG BESAR MELEDAK (BOTTOM) ══ -->
    <g transform="translate(50, 141)">
      <line x1="0" y1="-7" x2="0" y2="-5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="5" y1="-5" x2="3.5" y2="-3.5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="7" y1="0" x2="5" y2="0" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="5" y1="5" x2="3.5" y2="3.5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="0" y1="7" x2="0" y2="5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="-5" y1="5" x2="-3.5" y2="3.5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="-7" y1="0" x2="-5" y2="0" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="-5" y1="-5" x2="-3.5" y2="-3.5" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
      <polygon points="0,-5 0.9,-2 3,-2 1.2,-0.8 2,2 0,0.8 -2,2 -1.2,-0.8 -3,-2 -0.9,-2"
        fill="#D4AF37"/>
    </g>

    <!-- Lubang Punch Kiri & Kanan (Efek Tiket) -->
    <circle cx="3" cy="75" r="3" fill="#1A1A1A"/>
    <circle cx="97" cy="75" r="3" fill="#1A1A1A"/>
  </svg>`
};
