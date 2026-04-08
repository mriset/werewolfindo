const bestiaryArt = {
    seer: `<svg viewBox="0 0 100 100">
                    <!-- Geometri Latar -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#3d1a78" stroke-width="1.5"
                        stroke-dasharray="3,3" />
                    <polygon points="50,10 90,70 10,70" fill="none" stroke="#006D77" stroke-width="1" opacity="0.6" />
                    <polygon points="50,90 90,30 10,30" fill="none" stroke="#006D77" stroke-width="1" opacity="0.6" />

                    <!-- Tentakel / Akar Energi -->
                    <path d="M 50 50 Q 80 15 90 35 Q 70 50 50 50" fill="#3d1a78" opacity="0.8" />
                    <path d="M 50 50 Q 20 85 10 65 Q 30 50 50 50" fill="#3d1a78" opacity="0.8" />
                    <path d="M 50 50 Q 15 20 35 10 Q 40 30 50 50" fill="#006D77" opacity="0.8" />

                    <!-- Mata Utama -->
                    <path d="M 20 50 Q 50 25 80 50 Q 50 75 20 50 Z" fill="#ffffff" stroke="#1a1a1a"
                        stroke-width="3.5" />
                    <circle cx="50" cy="50" r="14" fill="#006D77" />
                    <circle cx="50" cy="50" r="5" fill="#1a1a1a" />

                    <!-- Iris Detail & Pantulan -->
                    <circle cx="50" cy="50" r="10" fill="none" stroke="#ffffff" stroke-width="0.5"
                        stroke-dasharray="1,2" opacity="0.8" />
                    <polygon points="46,44 47,40 50,44 54,44 50,46 48,50 46,46 42,44" fill="#ffffff" />

                    <!-- Air mata gaib -->
                    <path d="M 50 75 L 48 85 A 2 2 0 0 0 52 85 Z" fill="#3d1a78" />
                    <circle cx="45" cy="80" r="1.5" fill="#006D77" />
                </svg>`,
    werewolf: `<svg viewBox="0 0 100 100">
                    <!-- Cipratan Darah Latar -->
                    <circle cx="50" cy="50" r="30" fill="#9B2226" opacity="0.15" />
                    <path d="M 10 20 L 30 90 L 80 80 Z" fill="#9B2226" opacity="0.1" />

                    <!-- Cakaran -->
                    <path d="M 15 15 Q 40 40 75 90" stroke="#4A0000" stroke-width="4" fill="none" stroke-linecap="round"
                        opacity="0.4" />
                    <path d="M 30 10 Q 50 40 90 80" stroke="#4A0000" stroke-width="3" fill="none" stroke-linecap="round"
                        opacity="0.4" />

                    <!-- Rahang Atas -->
                    <path d="M 5 35 Q 35 10 95 30 L 85 45 Q 60 35 35 45 L 15 55 Z" fill="#1a1a1a" />
                    <!-- Rahang Bawah -->
                    <path d="M 10 95 Q 45 100 90 70 L 75 58 Q 55 70 30 75 Z" fill="#1a1a1a" />

                    <!-- Taring Atas -->
                    <polygon points="85,45 88,60 80,44" fill="#ffffff" />
                    <polygon points="70,41 71,55 65,41" fill="#ffffff" />
                    <polygon points="55,42 55,52 50,43" fill="#ffffff" />
                    <polygon points="40,46 37,58 33,48" fill="#9B2226" /> <!-- Taring Berdarah -->

                    <!-- Taring Bawah -->
                    <polygon points="75,58 77,46 70,61" fill="#ffffff" />
                    <polygon points="60,67 61,55 55,68" fill="#ffffff" />
                    <polygon points="45,71 43,56 37,71" fill="#ffffff" />

                    <!-- Air Liur/Darah Menetes -->
                    <path d="M 88 60 L 88 82 A 2 2 0 0 1 84 82 L 84 45 Z" fill="#9B2226" />
                    <circle cx="86" cy="88" r="2.5" fill="#9B2226" />
                    <path d="M 37 58 L 37 88 A 1.5 1.5 0 0 1 34 88 L 34 48 Z" fill="#9B2226" />

                    <!-- Mata Mengerikan -->
                    <path d="M 25 32 Q 35 20 48 32 Q 35 40 25 32 Z" fill="#ffffff" />
                    <circle cx="35" cy="30" r="4" fill="#9B2226" />
                    <circle cx="36" cy="29" r="1.5" fill="#ffffff" />
                </svg>`,
    hunter: `<svg viewBox="0 0 100 100">
                    <!-- Reticle Latar -->
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#DDA15E" stroke-width="1.5"
                        stroke-dasharray="4,4" opacity="0.6" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#DDA15E" stroke-width="1" opacity="0.6" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#DDA15E" stroke-width="1" opacity="0.6" />

                    <!-- Rangka Crossbow -->
                    <rect x="44" y="5" width="12" height="90" rx="2" fill="#1a1a1a" />
                    <!-- Busur Silang -->
                    <path d="M 10 40 Q 50 15 90 40" fill="none" stroke="#1a1a1a" stroke-width="8"
                        stroke-linecap="round" />
                    <path d="M 10 40 L 50 70 L 90 40" fill="none" stroke="#283618" stroke-width="2.5" />
                    <!-- Tali Busur Ditarik -->

                    <!-- Anak Panah Perak -->
                    <rect x="47" y="0" width="6" height="70" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5" />
                    <polygon points="50,-8 43,5 57,5" fill="#283618" /> <!-- Mata Panah -->
                    <path d="M 47 65 L 38 75 M 53 65 L 62 75" stroke="#1a1a1a" stroke-width="3"
                        stroke-linecap="round" /> <!-- Bulu Panah -->

                    <!-- Detail Rel -->
                    <line x1="50" y1="10" x2="50" y2="60" stroke="#283618" stroke-width="2" />

                    <!-- Cipratan lumpur/darah monster -->
                    <circle cx="20" cy="20" r="4" fill="#DDA15E" opacity="0.8" />
                    <circle cx="85" cy="65" r="3" fill="#DDA15E" opacity="0.8" />
                    <path d="M 15 20 Q 25 35 30 25" stroke="#DDA15E" stroke-width="2" fill="none" />
                </svg>`,
    jester: `<svg viewBox="0 10 100 80">
                    <!-- Cipratan Warna -->
                    <path d="M 10 50 Q 30 10 50 50 Q 80 80 90 30" fill="none" stroke="#E85D04" stroke-width="8"
                        opacity="0.2" stroke-linecap="round" />

                    <!-- Bentuk Dasar Topeng -->
                    <path d="M 20 20 C 50 -10 80 20 80 50 C 80 80 60 90 50 95 C 40 90 20 80 20 50 Z" fill="#ffffff"
                        stroke="#1a1a1a" stroke-width="3" />

                    <!-- Pembatas Sisi Kiri & Kanan -->
                    <path d="M 50 10 L 50 95" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="4,3" />

                    <!-- Sisi Kiri (Sedih) -->
                    <path d="M 32 40 Q 38 33 44 40" fill="none" stroke="#1a1a1a" stroke-width="3.5"
                        stroke-linecap="round" />
                    <circle cx="38" cy="46" r="4.5" fill="#1a1a1a" />
                    <path d="M 38 52 L 35 62 A 2.5 2.5 0 0 0 41 62 Z" fill="#9D0208" /> <!-- Air mata -->
                    <path d="M 32 75 Q 38 68 44 75" fill="none" stroke="#1a1a1a" stroke-width="3.5"
                        stroke-linecap="round" />

                    <!-- Sisi Kanan (Gila/Monster) -->
                    <path d="M 56 35 L 72 45 L 60 50 Z" fill="#E85D04" /> <!-- Rongga Mata -->
                    <circle cx="63" cy="44" r="2.5" fill="#ffffff" /> <!-- Pupil -->
                    <!-- Senyum Raksasa Bertaring -->
                    <path d="M 55 65 Q 75 95 86 60" fill="none" stroke="#1a1a1a" stroke-width="4.5" />
                    <polygon points="58,68 62,75 65,68" fill="#1a1a1a" />
                    <polygon points="66,70 69,78 72,70" fill="#1a1a1a" />
                    <polygon points="73,71 76,80 78,70" fill="#1a1a1a" />

                    <!-- Bel Topi -->
                    <circle cx="15" cy="20" r="6" fill="#E85D04" stroke="#1a1a1a" stroke-width="2.5" />
                    <line x1="15" y1="20" x2="22" y2="25" stroke="#1a1a1a" stroke-width="2.5" />
                    <circle cx="85" cy="20" r="6" fill="#9D0208" stroke="#1a1a1a" stroke-width="2.5" />
                    <line x1="85" y1="20" x2="78" y2="25" stroke="#1a1a1a" stroke-width="2.5" />
                </svg>`,
    guardian: `<svg viewBox="0 0 100 100">
                    <!-- Bentuk Perisai Raksasa -->
                    <path d="M 10 20 L 50 10 L 90 20 L 85 65 C 85 85 50 98 50 98 C 50 98 15 85 10 65 Z" fill="#1D3557"
                        stroke="#1a1a1a" stroke-width="3.5" />
                    <path d="M 20 28 L 50 20 L 80 28 L 76 60 C 76 75 50 88 50 88 C 50 88 24 75 20 60 Z"
                        fill="#2A4B7C" />

                    <!-- Retakan Perisai -->
                    <path d="M 20 50 L 35 45 L 40 55 L 50 50" fill="none" stroke="#1a1a1a" stroke-width="1.5"
                        opacity="0.7" />
                    <path d="M 80 35 L 65 40 L 60 30" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.7" />

                    <!-- Sayap Batu Gargoyle Memeluk Perisai -->
                    <path d="M 50 45 Q 15 20 5 50 Q 20 60 25 75 Q 35 55 50 55" fill="#e0e0e0" stroke="#1a1a1a"
                        stroke-width="2.5" />
                    <path d="M 25 38 L 15 48 M 35 45 L 25 58 M 40 50 L 35 65" stroke="#1a1a1a" stroke-width="1.5" />

                    <path d="M 50 45 Q 85 20 95 50 Q 80 60 75 75 Q 65 55 50 55" fill="#e0e0e0" stroke="#1a1a1a"
                        stroke-width="2.5" />
                    <path d="M 75 38 L 85 48 M 65 45 L 75 58 M 60 50 L 65 65" stroke="#1a1a1a" stroke-width="1.5" />

                    <!-- Inti Berlian Emas -->
                    <polygon points="50,58 62,68 50,85 38,68" fill="#E9C46A" stroke="#1a1a1a" stroke-width="2.5" />
                    <polygon points="50,62 56,68 50,78 44,68" fill="#FFFBEB" />
                </svg>`,
    moderator: `<svg viewBox="0 0 100 100">
                    <!-- Lingkaran Sempurna (Keteraturan) -->
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F1C40F" stroke-width="2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#212F3D" stroke-width="4" />
                    <!-- Timbangan Absolut -->
                    <line x1="50" y1="20" x2="50" y2="80" stroke="#F1C40F" stroke-width="4" stroke-linecap="round" />
                    <line x1="20" y1="35" x2="80" y2="35" stroke="#F1C40F" stroke-width="4" stroke-linecap="round" />
                    <!-- Piringan Timbangan Kiri -->
                    <line x1="20" y1="35" x2="10" y2="60" stroke="#F1C40F" stroke-width="1.5" />
                    <line x1="20" y1="35" x2="30" y2="60" stroke="#F1C40F" stroke-width="1.5" />
                    <path d="M 5 60 Q 20 70 35 60 Z" fill="#212F3D" />
                    <!-- Piringan Timbangan Kanan -->
                    <line x1="80" y1="35" x2="70" y2="60" stroke="#F1C40F" stroke-width="1.5" />
                    <line x1="80" y1="35" x2="90" y2="60" stroke="#F1C40F" stroke-width="1.5" />
                    <path d="M 65 60 Q 80 70 95 60 Z" fill="#212F3D" />
                    <!-- Mata Tak Berkedip -->
                    <path d="M 35 25 Q 50 15 65 25 Q 50 35 35 25 Z" fill="#ffffff" stroke="#212F3D" stroke-width="2" />
                    <circle cx="50" cy="25" r="4" fill="#F1C40F" />
                    <circle cx="50" cy="25" r="1.5" fill="#212F3D" />
                </svg>`,
    alphawolf: `<svg viewBox="0 0 100 100">
                    <!-- Bulan Darah Raksasa -->
                    <circle cx="50" cy="50" r="35" fill="#FF4500" opacity="0.2" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#FF4500" stroke-width="1" stroke-dasharray="2,4" />
                    
                    <!-- Kepala Serigala yang Agresif & Penuh Bekas Luka -->
                    <path d="M 20 60 L 10 30 L 35 35 L 50 10 L 65 35 L 90 30 L 80 60 Z" fill="#1a1a1a" stroke="#4A0404" stroke-width="2" />
                    <path d="M 20 60 L 50 95 L 80 60 Z" fill="#1a1a1a" />
                    
                    <!-- Bekas Luka Alpha (Scar) -->
                    <path d="M 35 25 L 45 45" stroke="#FF4500" stroke-width="2" opacity="0.8" />
                    <path d="M 30 28 L 40 48" stroke="#FF4500" stroke-width="2" opacity="0.8" />
                    <path d="M 40 22 L 50 42" stroke="#FF4500" stroke-width="2" opacity="0.8" />

                    <!-- Mata Kosong Membara -->
                    <path d="M 30 50 Q 40 45 45 52 Q 35 55 30 50 Z" fill="#FF4500" />
                    <path d="M 70 50 Q 60 45 55 52 Q 65 55 70 50 Z" fill="#FF4500" />
                    
                    <!-- Moncong & Taring Raksasa -->
                    <polygon points="50,75 55,65 45,65" fill="#FF4500" opacity="0.5" />
                    <polygon points="40,65 45,85 50,65" fill="#ffffff" />
                    <polygon points="60,65 55,85 50,65" fill="#ffffff" />
                    
                    <!-- Cairan Kental Menetes (Infeksi) -->
                    <path d="M 45 85 Q 45 95 48 95 Q 47 90 50 85 Z" fill="#FF4500" />
                    <path d="M 55 85 Q 55 95 52 95 Q 53 90 50 85 Z" fill="#FF4500" />
                </svg>`,
    cupid: `<svg viewBox="0 0 100 100">
                <!-- Aura Sayap Malaikat -->
                <path d="M 50 50 Q 20 20 10 50 Q 20 70 50 50 Z" fill="#FFBC42" opacity="0.3" />
                <path d="M 50 50 Q 80 20 90 50 Q 80 70 50 50 Z" fill="#FFBC42" opacity="0.3" />
                
                <!-- Busur Emas -->
                <path d="M 20 20 Q 50 10 80 20" fill="none" stroke="#FFBC42" stroke-width="4" stroke-linecap="round" />
                <line x1="20" y1="20" x2="80" y2="20" stroke="#FFBC42" stroke-width="1.5" stroke-dasharray="2,2" />

                <!-- Hati yang Tertusuk -->
                <path d="M 50 40 C 50 40 45 30 35 30 C 20 30 20 50 35 65 L 50 80 L 65 65 C 80 50 80 30 65 30 C 55 30 50 40 50 40 Z" fill="#D81159" stroke="#1a1a1a" stroke-width="2.5" />
                
                <!-- Panah Perak/Berdarah -->
                <line x1="25" y1="75" x2="40" y2="60" stroke="#1a1a1a" stroke-width="3" />
                <line x1="60" y1="40" x2="75" y2="25" stroke="#1a1a1a" stroke-width="3" />
                <polygon points="25,75 22,82 30,75" fill="#1a1a1a" /> <!-- Mata Panah -->
                <path d="M 68 32 L 72 28 M 72 35 L 75 32" stroke="#1a1a1a" stroke-width="2" /> <!-- Bulu Panah -->
                
                <!-- Tetesan Darah Cinta -->
                <path d="M 50 82 A 2 2 0 0 0 52 86 A 2 2 0 0 0 48 86 A 2 2 0 0 0 50 82 Z" fill="#D81159" />
                <circle cx="53" cy="90" r="1.5" fill="#D81159" />
            </svg>`,
    witch: `<svg viewBox="0 0 100 100">
                <!-- Aura Mistis -->
                <circle cx="50" cy="50" r="38" fill="none" stroke="#3B1C54" stroke-width="2" stroke-dasharray="8,4" />
                
                <!-- Ramuan Penyembuh (Hijau Terang) -->
                <path d="M 30 60 C 20 60 20 80 30 80 C 40 80 40 60 30 60 Z" fill="#27AE60" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 28 45 L 32 45 L 32 60 L 28 60 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="2" /> <!-- Leher Botol -->
                <rect x="27" y="42" width="6" height="3" fill="#1a1a1a" /> <!-- Tutup Gabus -->
                <!-- Cahaya Healing -->
                <circle cx="30" cy="70" r="4" fill="#ffffff" opacity="0.6" />
                <circle cx="34" cy="65" r="2" fill="#ffffff" opacity="0.4" />
                <path d="M 30 40 Q 35 30 30 20" stroke="#27AE60" stroke-width="1.5" fill="none" opacity="0.8" />

                <!-- Ramuan Racun (Ungu Gelap / Tengkorak) -->
                <path d="M 70 55 C 55 55 55 80 70 80 C 85 80 85 55 70 55 Z" fill="#3B1C54" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 67 40 L 73 40 L 73 55 L 67 55 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="2" /> <!-- Leher Botol -->
                <rect x="66" y="37" width="8" height="3" fill="#1a1a1a" /> <!-- Tutup Gabus -->
                <!-- Simbol Bahaya/Tengkorak -->
                <circle cx="67" cy="65" r="2" fill="#ffffff" />
                <circle cx="73" cy="65" r="2" fill="#ffffff" />
                <path d="M 68 70 L 72 70 M 69 73 L 71 73" stroke="#ffffff" stroke-width="1.5" />
                <!-- Uap Racun -->
                <path d="M 70 35 Q 60 25 70 15 Q 80 5 70 -5" stroke="#3B1C54" stroke-width="2" fill="none" opacity="0.8" />

                <!-- Simbol Pentagram Latar Tengah -->
                <polygon points="50,20 55,40 75,40 60,50 65,70 50,55 35,70 40,50 25,40 45,40" fill="none" stroke="#27AE60" stroke-width="1.5" opacity="0.3" />
            </svg>`,
    wizard: `<svg viewBox="0 0 100 100">
                <!-- Lingkaran Mana -->
                <circle cx="50" cy="50" r="40" fill="none" stroke="#2980B9" stroke-width="1.5" stroke-dasharray="2,6" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#2980B9" stroke-width="1" opacity="0.6" />
                
                <!-- Buku Sihir Terbuka -->
                <path d="M 15 80 Q 50 60 50 85 Q 50 60 85 80 L 80 90 Q 50 75 50 95 Q 50 75 20 90 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="2" />
                <!-- Jejak Mantra dari Buku -->
                <path d="M 30 75 Q 40 50 50 40" stroke="#F39C12" stroke-width="1.5" fill="none" opacity="0.7" />
                <path d="M 70 75 Q 60 50 50 40" stroke="#F39C12" stroke-width="1.5" fill="none" opacity="0.7" />
                <path d="M 25 80 Q 30 65 50 50" stroke="#F39C12" stroke-width="1.5" fill="none" opacity="0.5" />
                <path d="M 75 80 Q 70 65 50 50" stroke="#F39C12" stroke-width="1.5" fill="none" opacity="0.5" />

                <!-- Bola Kristal Arcane -->
                <circle cx="50" cy="40" r="18" fill="#2980B9" opacity="0.4" stroke="#2980B9" stroke-width="2" />
                <circle cx="50" cy="40" r="14" fill="#2980B9" opacity="0.6" />
                <path d="M 50 25 A 15 15 0 0 1 65 40 A 20 20 0 0 0 50 30 Z" fill="#ffffff" opacity="0.8" />
                <!-- Bintang Ajaib di dalam bola -->
                <polygon points="50,32 52,36 56,36 53,39 54,43 50,40 46,43 47,39 44,36 48,36" fill="#F39C12" />
            </svg>`,
    veteran: `<svg viewBox="0 0 100 100">
                <!-- Barikade / Target Latar -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#273746" stroke-width="2" opacity="0.5" stroke-dasharray="5,5" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#E74C3C" stroke-width="1.5" opacity="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#E74C3C" stroke-width="1.5" opacity="0.5" />

                <!-- Helm Tempur Baret/Steel -->
                <path d="M 25 50 C 25 25 75 25 75 50 L 80 55 L 20 55 Z" fill="#273746" stroke="#1a1a1a" stroke-width="3" />
                <!-- Guratan/Cakaran di Helm -->
                <path d="M 35 35 L 45 50 M 42 32 L 52 50 M 50 30 L 60 48" stroke="#1a1a1a" stroke-width="2" />

                <!-- Senapan / Pisau Tempur Menyilang -->
                <path d="M 15 80 L 85 20" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" />
                <path d="M 15 20 L 85 80" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" />
                <!-- Mata Pisau -->
                <polygon points="85,20 75,20 65,30 80,35" fill="#E74C3C" />
                <polygon points="15,20 25,20 35,30 20,35" fill="#E74C3C" />
                
                <!-- Cipratan Darah Peringatan -->
                <circle cx="70" cy="70" r="4" fill="#E74C3C" />
                <path d="M 70 70 L 65 85 A 2 2 0 0 0 75 85 Z" fill="#E74C3C" />
                <circle cx="30" cy="75" r="3" fill="#E74C3C" />
                <path d="M 30 75 L 27 85 A 1.5 1.5 0 0 0 33 85 Z" fill="#E74C3C" />
            </svg>`,
    bodyguard: `<svg viewBox="0 0 100 100">
                <!-- Latar Pertahanan -->
                <polygon points="20,10 80,10 90,50 50,95 10,50" fill="none" stroke="#34495E" stroke-width="2" opacity="0.4" />
                
                <!-- Tameng Baja Berduri -->
                <polygon points="30,20 70,20 80,50 50,85 20,50" fill="#34495E" stroke="#1a1a1a" stroke-width="3" />
                <polygon points="40,30 60,30 65,50 50,75 35,50" fill="#95A5A6" />
                <!-- Paku/Duri di Tameng (Counter Strike) -->
                <polygon points="50,40 55,55 45,55" fill="#1a1a1a" />
                <polygon points="40,30 35,20 45,30" fill="#1a1a1a" />
                <polygon points="60,30 65,20 55,30" fill="#1a1a1a" />
                
                <!-- Cakaran Serigala yang Terhalang & Berdarah -->
                <path d="M 10,30 Q 50,50 80,70" stroke="#8C1C13" stroke-width="4" fill="none" opacity="0.8" />
                <path d="M 15,20 Q 55,40 85,60" stroke="#8C1C13" stroke-width="3" fill="none" opacity="0.8" />
                <circle cx="50" cy="50" r="8" fill="#8C1C13" opacity="0.9" /> <!-- Titik Benturan Darah -->
                <path d="M 50 55 L 48 70 A 2 2 0 0 0 52 70 Z" fill="#8C1C13" />
            </svg>`,
    priest: `<svg viewBox="0 0 100 100">
                <!-- Aura Cahaya Suci -->
                <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="4,8" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.6" />
                <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="#D4AF37" stroke-width="1" opacity="0.5" />
                <path d="M 20 20 L 80 80 M 20 80 L 80 20" stroke="#D4AF37" stroke-width="1" opacity="0.3" />

                <!-- Salib Suci / Ankh / Simbol Cahaya -->
                <path d="M 45 20 L 55 20 L 55 40 L 75 40 L 75 50 L 55 50 L 55 80 L 45 80 L 45 50 L 25 50 L 25 40 L 45 40 Z" fill="#FDFEFE" stroke="#D4AF37" stroke-width="2.5" />
                <polygon points="50,25 52,35 48,35" fill="#D4AF37" />
                <polygon points="50,75 52,65 48,65" fill="#D4AF37" />

                <!-- Percikan Air Suci -->
                <path d="M 30 65 Q 35 55 40 65 Q 40 70 35 70 Q 30 70 30 65 Z" fill="#85C1E9" opacity="0.8" />
                <path d="M 70 65 Q 65 55 60 65 Q 60 70 65 70 Q 70 70 70 65 Z" fill="#85C1E9" opacity="0.8" />
                <circle cx="35" cy="62" r="1.5" fill="#FDFEFE" />
                <circle cx="65" cy="62" r="1.5" fill="#FDFEFE" />

                <!-- Asap Terbakar (Kutukan yang Lenyap) -->
                <path d="M 20 80 Q 25 70 15 60" stroke="#1a1a1a" stroke-width="2" fill="none" opacity="0.5" />
                <path d="M 80 80 Q 75 70 85 60" stroke="#1a1a1a" stroke-width="2" fill="none" opacity="0.5" />
            </svg>`,
    mayor: `<svg viewBox="0 0 100 100">
                <!-- Latar Geometris Mewah -->
                <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#F1C40F" stroke-width="2" stroke-dasharray="2,4" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#F1C40F" stroke-width="1.5" opacity="0.6" />
                
                <!-- Topi Tinggi (Top Hat) -->
                <path d="M 30 70 C 30 70 20 70 20 75 Q 50 85 80 75 C 80 70 70 70 70 70 Z" fill="#1a1a1a" stroke="#F1C40F" stroke-width="2" /> <!-- Pinggiran -->
                <path d="M 35 70 L 32 30 C 32 25 68 25 68 30 L 65 70 Z" fill="#8E44AD" stroke="#1a1a1a" stroke-width="2.5" /> <!-- Tabung Topi -->
                
                <!-- Pita Topi -->
                <polygon points="34,60 66,60 65,70 35,70" fill="#F1C40F" stroke="#1a1a1a" stroke-width="1" />
                
                <!-- Kaca Tunggal (Monocle) & Kumis -->
                <circle cx="65" cy="55" r="8" fill="#ffffff" opacity="0.8" stroke="#F1C40F" stroke-width="2" />
                <line x1="68" y1="62" x2="75" y2="85" stroke="#F1C40F" stroke-width="1.5" /> <!-- Rantai Monocle -->
                
                <!-- Dokumen Hukum / Mayor's Decree -->
                <path d="M 25 55 L 45 45 L 40 85 L 20 95 Z" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="1.5" />
                <line x1="30" y1="60" x2="40" y2="55" stroke="#1a1a1a" stroke-width="1" opacity="0.7" />
                <line x1="28" y1="68" x2="38" y2="63" stroke="#1a1a1a" stroke-width="1" opacity="0.7" />
                <circle cx="35" cy="75" r="4" fill="#E74C3C" /> <!-- Segel Lilin Merah -->
            </svg>`,
    sheriff: `<svg viewBox="0 0 100 100">
                <!-- Lingkaran Berdebu Latar -->
                <circle cx="50" cy="50" r="45" fill="none" stroke="#CA6F1E" stroke-width="1.5" stroke-dasharray="3,6" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#CA6F1E" stroke-width="2" opacity="0.5" />
                
                <!-- Bintang Sheriff Enam Sudut -->
                <g fill="#F1C40F" stroke="#17202A" stroke-width="3">
                    <polygon points="50,15 60,35 80,35 65,50 70,70 50,60 30,70 35,50 20,35 40,35" />
                    <polygon points="50,23 56,38 70,38 60,48 64,62 50,55 36,62 40,48 30,38 44,38" fill="#F39C12" stroke="none" /> <!-- Emboss Bintang Dalam -->
                </g>
                
                <!-- Siluet Revolver Kecil di dalam Bintang -->
                <path d="M 40 45 L 50 45 L 50 55 L 45 55 L 45 60 L 40 60 Z" fill="#17202A" />
                <circle cx="55" cy="50" r="5" fill="none" stroke="#17202A" stroke-width="2" />
                <line x1="60" y1="48" x2="65" y2="48" stroke="#17202A" stroke-width="2" />
                
                <!-- Tulisan Melingkar Abstrak pada Lencana -->
                <path d="M 35 30 A 25 25 0 0 1 65 30" fill="none" stroke="#17202A" stroke-width="1.5" opacity="0.5" />
                <path d="M 35 70 A 25 25 0 0 0 65 70" fill="none" stroke="#17202A" stroke-width="1.5" opacity="0.5" />

                <!-- Cipratan Jelaga / Bubuk Mesiu -->
                <circle cx="20" cy="75" r="2" fill="#17202A" opacity="0.8" />
                <circle cx="85" cy="40" r="1.5" fill="#17202A" opacity="0.8" />
                <circle cx="75" cy="85" r="3" fill="#17202A" opacity="0.8" />
            </svg>`,
    villager_blacksmith: `<svg viewBox="0 0 100 100">
                <!-- Latar Api Tungku -->
                <path d="M 50 85 Q 20 60 50 15 Q 80 60 50 85 Z" fill="#F39C12" opacity="0.3" />
                <path d="M 50 80 Q 30 65 50 30 Q 70 65 50 80 Z" fill="#E67E22" opacity="0.4" />
                <path d="M 50 75 Q 40 65 50 45 Q 60 65 50 75 Z" fill="#D35400" opacity="0.5" />

                <!-- Landasan Besi (Anvil) -->
                <path d="M 30 75 L 35 60 L 65 60 L 70 75 Z" fill="#4D5656" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 20 50 Q 30 60 35 60 L 75 60 Q 80 60 85 55 L 85 50 Q 80 50 75 50 L 35 50 Q 30 50 20 50 Z" fill="#34495E" stroke="#1a1a1a" stroke-width="2" />
                
                <!-- Palu Tempa Terbang -->
                <path d="M 55 15 L 75 35 L 70 40 L 50 20 Z" fill="#8B4513" stroke="#1a1a1a" stroke-width="2" /> <!-- Gagang -->
                <path d="M 40 25 L 55 10 L 65 20 L 50 35 Z" fill="#4D5656" stroke="#1a1a1a" stroke-width="2.5" /> <!-- Kepala Palu -->
                <polygon points="45,20 55,10 50,15 40,25" fill="#7F8C8D" />
                
                <!-- Percikan Panas (Sparks) -->
                <circle cx="35" cy="40" r="2" fill="#F1C40F" />
                <circle cx="28" cy="45" r="1.5" fill="#F1C40F" />
                <circle cx="65" cy="45" r="2.5" fill="#F1C40F" />
                <circle cx="75" cy="30" r="1.5" fill="#F1C40F" />
            </svg>`,
    villager_farmer: `<svg viewBox="0 0 100 100">
                <!-- Gandum Latar Pagi -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#2ECC71" stroke-width="2" stroke-dasharray="5,3" opacity="0.5" />
                
                <!-- Batang Gandum (Wheat) -->
                <path d="M 20 80 Q 25 50 15 20 M 80 80 Q 75 50 85 20" fill="none" stroke="#F1C40F" stroke-width="2" opacity="0.8" />
                <polygon points="20,40 15,30 25,35" fill="#F1C40F" opacity="0.8" />
                <polygon points="18,30 12,20 22,25" fill="#F1C40F" opacity="0.8" />
                <polygon points="80,40 85,30 75,35" fill="#F1C40F" opacity="0.8" />
                <polygon points="82,30 88,20 78,25" fill="#F1C40F" opacity="0.8" />
                
                <!-- Garpu Tanah (Pitchfork) dan Sabit Crossed -->
                <line x1="25" y1="85" x2="65" y2="25" stroke="#6E2C00" stroke-width="3" /> <!-- Gagang Sabit -->
                <path d="M 65 25 C 75 10 95 10 90 30 C 85 50 65 50 65 25" fill="#BDC3C7" stroke="#1a1a1a" stroke-width="2" /> <!-- Mata Sabit -->
                
                <line x1="75" y1="85" x2="35" y2="25" stroke="#6E2C00" stroke-width="3.5" /> <!-- Gagang Garpu -->
                <path d="M 30 20 L 40 30" stroke="#6E2C00" stroke-width="3" />
                <path d="M 25 10 L 30 20 L 35 15 L 35 25 L 45 20 L 40 30" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round" /> <!-- Duri Garpu -->
                <path d="M 25 10 L 32 22 M 35 15 L 37 25 M 45 20 L 40 28" stroke="#7F8C8D" stroke-width="2" /> <!-- Besi ujung Garpu -->
                
                <!-- Bercak Tanah Liat -->
                <circle cx="30" cy="70" r="4" fill="#6E2C00" opacity="0.6" />
                <circle cx="65" cy="75" r="3" fill="#6E2C00" opacity="0.6" />
                <path d="M 45 80 Q 50 90 60 85 Z" fill="#6E2C00" opacity="0.5" />
            </svg>`,
    villager_merchant: `<svg viewBox="0 0 100 100">
                <!-- Latar Mewah Klasik -->
                <polygon points="15,50 50,15 85,50 50,85" fill="none" stroke="#E67E22" stroke-width="2" stroke-dasharray="2,3" opacity="0.6" />
                
                <!-- Timbangan Pedagang -->
                <line x1="50" y1="25" x2="50" y2="80" stroke="#1a1a1a" stroke-width="3" /> <!-- Tiang -->
                <path d="M 40 80 L 60 80 L 55 85 L 45 85 Z" fill="#2C3E50" stroke="#1a1a1a" stroke-width="2" /> <!-- Dasar Tiang -->
                <path d="M 50 15 L 45 25 L 55 25 Z" fill="#E67E22" stroke="#1a1a1a" stroke-width="1.5" /> <!-- Puncak -->
                
                <!-- Lengan Timbangan -->
                <line x1="25" y1="35" x2="75" y2="40" stroke="#1a1a1a" stroke-width="2.5" />
                
                <!-- Piringan Kiri (Lebih Tinggi) -->
                <line x1="25" y1="35" x2="15" y2="55" stroke="#1a1a1a" stroke-width="1" />
                <line x1="25" y1="35" x2="35" y2="55" stroke="#1a1a1a" stroke-width="1" />
                <path d="M 10 55 Q 25 65 40 55 Z" fill="#2C3E50" stroke="#1a1a1a" stroke-width="1.5" />
                <!-- Koin Emas Piringan Kiri -->
                <ellipse cx="22" cy="53" rx="4" ry="2" fill="#F1C40F" stroke="#1a1a1a" stroke-width="0.5" />
                <ellipse cx="26" cy="51" rx="4" ry="2" fill="#F39C12" stroke="#1a1a1a" stroke-width="0.5" />
                
                <!-- Piringan Kanan (Lebih Berat, ada Permata Merah) -->
                <line x1="75" y1="40" x2="65" y2="60" stroke="#1a1a1a" stroke-width="1" />
                <line x1="75" y1="40" x2="85" y2="60" stroke="#1a1a1a" stroke-width="1" />
                <path d="M 60 60 Q 75 70 90 60 Z" fill="#2C3E50" stroke="#1a1a1a" stroke-width="1.5" />
                <!-- Permata Merah (Blood Diamond/Batu Rubah) -->
                <polygon points="75,50 82,54 75,58 68,54" fill="#E74C3C" stroke="#1a1a1a" stroke-width="1" />
                <polygon points="75,50 78,54 75,58 72,54" fill="#C0392B" />
                
                <!-- Koin Berjatuhan (Kecurangan / Suap) -->
                <circle cx="30" cy="70" r="3" fill="#F1C40F" />
                <circle cx="40" cy="65" r="2.5" fill="#F39C12" />
                <circle cx="35" cy="80" r="3.5" fill="#F1C40F" />
                <circle cx="20" cy="85" r="2" fill="#F39C12" />
            </svg>`,
    werewolf_stalker: `<svg viewBox="0 0 100 100">
                <!-- Langit Malam Gelap / Bulan Sabit Tajam -->
                <path d="M 70 20 A 15 15 0 1 1 80 45 A 20 20 0 1 0 70 20 Z" fill="#F1C40F" opacity="0.8" />
                
                <!-- Cakar Raksasa Merobek Kegelapan -->
                <path d="M 10 10 Q 30 50 20 90" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" opacity="0.5" />
                <path d="M 30 15 Q 50 60 40 95" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" opacity="0.5" />
                <path d="M 50 20 Q 70 70 60 100" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" opacity="0.5" />

                <!-- Siluet Serigala Bungkuk (Mengintai) -->
                <path d="M -10 100 Q 10 60 40 65 Q 55 50 70 65 Q 60 70 65 80 Q 75 80 80 90 Q 70 95 70 100 Z" fill="#1a1a1a" stroke="#641E16" stroke-width="1.5" />
                
                <!-- Rambut / Bulu Tengguk Berdiri -->
                <path d="M 10 65 L 15 50 L 25 62 L 35 48 L 40 65 Z" fill="#1a1a1a" />
                
                <!-- Mata Mengambang Keker / Stalking -->
                <path d="M 55 60 Q 60 58 63 61 Q 58 63 55 60 Z" fill="#F1C40F" />
                <circle cx="59.5" cy="60.5" r="1" fill="#1a1a1a" />

                <path d="M 68 62 Q 73 60 76 63 Q 71 65 68 62 Z" fill="#F1C40F" />
                <circle cx="72.5" cy="62.5" r="1" fill="#1a1a1a" />
                
                <!-- Tetesan Liur Hitam -->
                <path d="M 65 80 L 63 90 A 2 2 0 0 0 67 90 Z" fill="#1a1a1a" />
                <circle cx="65" cy="95" r="1.5" fill="#1a1a1a" />
                
                <!-- Cakaran Berdarah di Lensa/Jendela -->
                <path d="M 80 10 L 95 30" stroke="#641E16" stroke-width="3" fill="none" stroke-linecap="round" />
                <path d="M 75 15 L 90 35" stroke="#641E16" stroke-width="3" fill="none" stroke-linecap="round" />
            </svg>`,
    lonewolf: `<svg viewBox="0 0 100 100">
                <!-- Langit Malam Beku -->
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F1C40F" stroke-width="1.5" stroke-dasharray="2,6" opacity="0.6" />
                <path d="M 20 80 Q 50 30 80 80" fill="none" stroke="#F1C40F" stroke-width="1.5" opacity="0.3" />

                <!-- Tebing Runcing Patah -->
                <path d="M 20 100 L 40 65 L 50 70 L 60 55 L 75 100 Z" fill="#1C2833" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 40 65 L 45 80 L 50 70 M 60 55 L 65 80" stroke="#1a1a1a" stroke-width="1.5" fill="none" />

                <!-- Siluet Serigala Tunggal (Melolong Ke Arah Bawah/Berbalik Arah) -->
                <path d="M 50 50 C 40 50 40 40 45 35 C 55 30 65 35 60 45 C 65 50 63 55 58 55 C 53 55 52 50 50 50 Z" fill="#1a1a1a" stroke="#F1C40F" stroke-width="1.5" />
                <path d="M 60 45 Q 70 40 75 35 Q 70 30 63 35 Z" fill="#1a1a1a" stroke="#F1C40F" stroke-width="1" /> <!-- Moncong Melolong -->
                <path d="M 45 35 L 43 28 L 50 32 Z" fill="#1a1a1a" stroke="#F1C40F" stroke-width="1" /> <!-- Telinga -->
                
                <!-- Bintang/Garis Luka Pengkhianatan di Punggung -->
                <path d="M 55 35 L 65 45 M 50 40 L 60 50" stroke="#E74C3C" stroke-width="2" opacity="0.8" />
                
                <!-- Kuburan/Tulang Kawanannya Sendiri -->
                <path d="M 30 85 L 35 75 L 40 85" stroke="#FDFEFE" stroke-width="1.5" fill="none" opacity="0.5" /> <!-- Tulang Berserakan -->
                <circle cx="35" cy="88" r="2" fill="#E74C3C" />
            </svg>`,
    doppelganger: `<svg viewBox="0 0 100 100">
                <!-- Cermin Retak Latar -->
                <polygon points="20,10 80,10 90,50 80,90 20,90 10,50" fill="none" stroke="#E74C3C" stroke-width="2" opacity="0.4" />
                <path d="M 50 10 L 50 90 M 20 90 L 80 10 M 20 10 L 80 90" stroke="#E74C3C" stroke-width="1" opacity="0.2" />

                <!-- Topeng Kiri (Putih / Warga / Menangis) -->
                <path d="M 25 35 C 25 15 45 20 48 45 C 50 65 35 75 25 65 C 15 55 15 45 25 35 Z" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 30 40 L 38 40 M 34 55 Q 34 60 40 55" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round" />
                <circle cx="34" cy="40" r="2" fill="#1a1a1a" />
                <path d="M 32 43 L 30 50 A 1 1 0 0 0 34 50 Z" fill="#3498DB" /> <!-- Air Mata -->

                <!-- Topeng Kanan (Hitam / Serigala / Tersenyum Tajam) -->
                <path d="M 75 35 C 75 15 55 20 52 45 C 50 65 65 75 75 65 C 85 55 85 45 75 35 Z" fill="#1a1a1a" stroke="#E74C3C" stroke-width="2" />
                <path d="M 70 40 L 62 42 M 66 60 Q 66 50 58 55" stroke="#E74C3C" stroke-width="2" fill="none" stroke-linecap="round" />
                <path d="M 66 40 L 62 38 L 64 42 Z" fill="#E74C3C" />
                
                <!-- Tautan Retak / Benang Merah Mencuri Identitas -->
                <path d="M 48 45 Q 50 30 52 45" fill="none" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 48 45 Q 50 60 52 45" fill="none" stroke="#E74C3C" stroke-width="2" />
                <line x1="42" y1="50" x2="58" y2="50" stroke="#E74C3C" stroke-width="2" stroke-dasharray="2,2" />
                
                <!-- Energi Gelap Meresap dari Kiri ke Kanan atau Sebaliknya -->
                <circle cx="50" cy="80" r="3" fill="#E74C3C" opacity="0.8" />
                <circle cx="50" cy="20" r="3" fill="#1a1a1a" />
            </svg>`,
    serial_killer: `<svg viewBox="0 0 100 100">
                <!-- Lorong/Halaman Belakang Gelap -->
                <polygon points="10,10 90,10 70,50 30,50" fill="#1a1a1a" opacity="0.3" />
                <polygon points="30,50 70,50 90,90 10,90" fill="#641E16" opacity="0.2" />

                <!-- Pisau Daging Berdarah/Pisau Karat (Cleaver/Chef's Knife) -->
                <path d="M 25 80 L 35 60 L 50 63 L 40 85 Z" fill="#2C3E50" stroke="#1a1a1a" stroke-width="2" /> <!-- Gagang Pisau -->
                <polygon points="37,65 48,68 46,73 35,70" fill="#1a1a1a" /> <!-- Genggaman -->
                <circle cx="41" cy="67" r="1.5" fill="#7F8C8D" />
                <circle cx="43" cy="71" r="1.5" fill="#7F8C8D" />

                <path d="M 35 60 L 75 15 C 80 15 85 25 85 30 L 50 63 Z" fill="#BDC3C7" stroke="#1a1a1a" stroke-width="2" /> <!-- Bilah Pisau Besar -->
                
                <!-- Pantulan Senyum Psikopat pada Bilah Pisau -->
                <path d="M 50 35 Q 60 45 75 35" fill="none" stroke="#E74C3C" stroke-width="2" />
                <path d="M 50 35 Q 60 50 75 35" fill="none" stroke="#E74C3C" stroke-width="2" />
                <path d="M 55 38 L 55 42 M 65 40 L 65 45 M 70 38 L 70 42" stroke="#E74C3C" stroke-width="1.5" /> <!-- Gigi Hitam/Darah -->

                <!-- Noda/Cipratan Darah Segar -->
                <circle cx="80" cy="20" r="3" fill="#641E16" />
                <circle cx="85" cy="25" r="2" fill="#641E16" />
                <circle cx="80" cy="30" r="4" fill="#641E16" />
                <circle cx="30" cy="85" r="2" fill="#641E16" />
                <path d="M 80 30 Q 75 40 70 50" fill="none" stroke="#641E16" stroke-width="2" /> <!-- Tetes Darah Turun -->
                <circle cx="70" cy="50" r="2" fill="#641E16" />
            </svg>`,
    idiot: `<svg viewBox="0 0 100 100">
                <!-- Latar Meriah Tapi Kacau -->
                <circle cx="50" cy="50" r="40" fill="none" stroke="#D35400" stroke-width="2" stroke-dasharray="5,10" opacity="0.6" />
                <path d="M 20 20 L 80 80 M 20 80 L 80 20" stroke="#9B59B6" stroke-width="4" stroke-linecap="round" opacity="0.3" />

                <!-- Ember Kayu sebagai Topi -->
                <path d="M 30 50 L 35 25 L 65 25 L 70 50 Z" fill="#8B4513" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 30 50 C 30 55 70 55 70 50 Z" fill="#A0522D" stroke="#1a1a1a" stroke-width="2" /> <!-- Mulut Ember Bawah -->
                <ellipse cx="50" cy="25" rx="15" ry="3" fill="#A0522D" stroke="#1a1a1a" stroke-width="1.5" /> <!-- Mulut Ember Atas -->
                
                <!-- Garis Kayu pada Ember -->
                <line x1="40" y1="26" x2="37" y2="52" stroke="#1a1a1a" stroke-width="1.5" />
                <line x1="50" y1="27" x2="50" y2="53" stroke="#1a1a1a" stroke-width="1.5" />
                <line x1="60" y1="26" x2="63" y2="52" stroke="#1a1a1a" stroke-width="1.5" />

                <!-- Setetes Air atau Susu Tumpah dari Ember -->
                <path d="M 40 52 Q 40 60 35 65 Q 30 60 33 55 Z" fill="#FDFEFE" opacity="0.8" />
                
                <!-- Senyum Lebar Bodoh (Gigi Ompong) Muncul di bawah ember -->
                <path d="M 35 65 Q 50 85 65 65" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" />
                <rect x="42" y="68" width="5" height="6" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="1" />
                <rect x="52" y="72" width="6" height="5" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="1" />
                
                <!-- Bel Kincir di Tangan -->
                <circle cx="20" cy="40" r="4" fill="#F1C40F" stroke="#1a1a1a" stroke-width="1" />
                <circle cx="80" cy="60" r="4" fill="#F1C40F" stroke="#1a1a1a" stroke-width="1" />
                <!-- Jejak Kaki Kecil Acak-acakan di Sekitar (Dance moves) -->
                <path d="M 15 70 C 20 75 25 70 20 65" fill="#D35400" />
                <path d="M 75 30 C 80 35 85 30 80 25" fill="#D35400" />
            </svg>`,
    prince: `<svg viewBox="0 0 100 100">
                <!-- Latar Kebangsawanan -->
                <circle cx="50" cy="50" r="40" fill="none" stroke="#2980B9" stroke-width="1.5" stroke-dasharray="2,4" opacity="0.5" />
                <path d="M 50 10 L 90 50 L 50 90 L 10 50 Z" fill="none" stroke="#2980B9" stroke-width="3" opacity="0.3" />

                <!-- Mahkota Kerajaan Bertahta Emas -->
                <path d="M 25 65 L 20 35 L 35 45 L 50 25 L 65 45 L 80 35 L 75 65 Z" fill="#F1C40F" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round" />
                <path d="M 27 65 L 73 65 L 70 75 L 30 75 Z" fill="#E67E22" stroke="#1a1a1a" stroke-width="2" />
                <path d="M 32 75 L 68 75 Z" stroke="#1a1a1a" stroke-width="2" /> <!-- Cincin Bawah Mahkota -->
                <circle cx="50" cy="22" r="3" fill="#E74C3C" stroke="#1a1a1a" stroke-width="1" /> <!-- Permata Tengah Atas -->
                <circle cx="20" cy="32" r="2.5" fill="#3498DB" stroke="#1a1a1a" stroke-width="1" /> <!-- Permata Kiri Atas -->
                <circle cx="80" cy="32" r="2.5" fill="#3498DB" stroke="#1a1a1a" stroke-width="1" /> <!-- Permata Kanan Atas -->

                <!-- Permata di Mahkota -->
                <polygon points="50,55 55,60 50,65 45,60" fill="#E74C3C" stroke="#1a1a1a" stroke-width="1" />
                <circle cx="35" cy="60" r="2" fill="#2ECC71" />
                <circle cx="65" cy="60" r="2" fill="#2ECC71" />

                <!-- Perisai Perlindungan Kekebalan di Latar Belakang -->
                <path d="M 50 5 C 65 5 80 15 85 30 C 85 60 65 85 50 95 C 35 85 15 60 15 30 C 20 15 35 5 50 5 Z" fill="none" stroke="#F1C40F" stroke-width="1.5" opacity="0.4" />
                <!-- Jejak Penolakan Eksekusi (Tali putus / Guillotine menabrak perisai) -->
                <path d="M 15 85 L 30 70 M 85 85 L 70 70" stroke="#E74C3C" stroke-width="2" opacity="0.8" />
            </svg>`,
    little_girl: `<svg viewBox="0 0 100 100">
                <!-- Latar Kamar Gelap -->
                <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="#1a1a1a" opacity="0.3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#E74C3C" stroke-width="1" stroke-dasharray="1,5" />

                <!-- Selimut Ditarik Ke Atas -->
                <path d="M 10 90 C 20 60 40 50 50 55 C 60 50 80 60 90 90 Z" fill="#BDC3C7" stroke="#1a1a1a" stroke-width="2.5" />
                <path d="M 20 90 Q 30 70 50 75 Q 70 70 80 90" fill="none" stroke="#7F8C8D" stroke-width="2" opacity="0.5" />
                
                <!-- Dua Tangan Mungil Memegang Ujung Selimut -->
                <circle cx="40" cy="53" r="5" fill="#FAD7A1" stroke="#1a1a1a" stroke-width="1.5" />
                <circle cx="60" cy="53" r="5" fill="#FAD7A1" stroke="#1a1a1a" stroke-width="1.5" />
                <path d="M 37 50 Q 40 55 43 50" fill="none" stroke="#1a1a1a" stroke-width="1" />
                <path d="M 57 50 Q 60 55 63 50" fill="none" stroke="#1a1a1a" stroke-width="1" />

                <!-- Mata Mengintip Ketakutan di Balik Kegelapan (atas selimut) -->
                <circle cx="40" cy="35" r="9" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="1" />
                <circle cx="60" cy="35" r="9" fill="#FDFEFE" stroke="#1a1a1a" stroke-width="1" />
                <circle cx="43" cy="35" r="3" fill="#1a1a1a" /> <!-- Pupil kiri ke arah kanan -->
                <circle cx="63" cy="35" r="3" fill="#1a1a1a" /> <!-- Pupil kanan ke arah kanan -->

                <!-- Pantulan Merah Serigala di Mata -->
                <circle cx="44" cy="34" r="1" fill="#E74C3C" />
                <circle cx="64" cy="34" r="1" fill="#E74C3C" />

                <!-- Air Mata / Keringat Dingin -->
                <path d="M 33 40 Q 31 45 33 48 Q 35 45 33 40 Z" fill="#85C1E9" />
                <path d="M 67 40 Q 69 45 67 48 Q 65 45 67 40 Z" fill="#85C1E9" />
                
                <!-- Boneka Beruang Jatuh/Terkoyak di Latar (Siluet Darah) -->
                <path d="M 15 20 C 10 20 10 30 15 30 L 25 35 L 20 20 Z" fill="#E74C3C" opacity="0.5" />
                <circle cx="20" cy="22" r="1.5" fill="#1a1a1a" />
            </svg>`,
    back: `<svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#161616" stroke="#d4af37" stroke-width="2" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#8A0303" stroke-width="1.5"
                        stroke-dasharray="4,3" />

                    <!-- Lubang Kunci Segitiga/Monster -->
                    <path d="M 50 25 L 35 55 L 45 55 L 40 75 L 60 75 L 55 55 L 65 55 Z" fill="#8A0303" stroke="#d4af37"
                        stroke-width="2" />

                    <!-- Mata Mengerikan di dalam lubang kunci -->
                    <path d="M 45 42 Q 50 35 55 42 Q 50 48 45 42 Z" fill="#ffffff" />
                    <circle cx="50" cy="41" r="2" fill="#1a1a1a" />

                    <!-- Rantai Geometris Melilit -->
                    <path d="M 15 15 L 30 30 M 85 15 L 70 30 M 15 85 L 30 70 M 85 85 L 70 70" stroke="#d4af37"
                        stroke-width="3" stroke-linecap="round" />
                </svg>`
};
