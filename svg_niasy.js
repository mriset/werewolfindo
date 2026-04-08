const niasyArt = {};

niasyArt["moderator"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Tirai Panggung Abstrak di Latar Belakang -->
                        <path d="M 0 0 Q 20 20 5 100 L 0 100 Z" fill="rgba(59,0,89,0.1)" />
                        <path d="M 100 0 Q 80 20 95 100 L 100 100 Z" fill="rgba(59,0,89,0.1)" />
                        <path d="M 5 0 Q 30 15 15 100 L 0 100 Z" fill="rgba(17,17,17,0.05)" />
                        <path d="M 95 0 Q 70 15 85 100 L 100 100 Z" fill="rgba(17,17,17,0.05)" />

                        <!-- Tangan Dalang Raksasa Hitam (Siluet Tangan dari Atas) -->
                        <path d="M 30 -5 Q 40 10 45 15 Q 48 18 50 15 Q 52 18 55 15 Q 60 10 70 -5 Z" fill="#111"
                            opacity="0.8" />

                        <!-- Salib Marionette (Alat kontrol boneka) -->
                        <line x1="50" y1="12" x2="50" y2="35" stroke="#3b0059" stroke-width="3"
                            stroke-linecap="round" />
                        <line x1="25" y1="20" x2="75" y2="20" stroke="#3b0059" stroke-width="3"
                            stroke-linecap="round" />

                        <!-- Cincin kontrol di ujung kayu -->
                        <circle cx="25" cy="20" r="3" fill="#fff" stroke="#111" stroke-width="1.5" />
                        <circle cx="75" cy="20" r="3" fill="#fff" stroke="#111" stroke-width="1.5" />
                        <circle cx="50" cy="12" r="3" fill="#fff" stroke="#111" stroke-width="1.5" />
                        <circle cx="50" cy="35" r="3" fill="#fff" stroke="#111" stroke-width="1.5" />

                        <!-- Tali pengendali boneka -->
                        <!-- Tali kiri -->
                        <line x1="25" y1="23" x2="33" y2="52" stroke="#111" stroke-width="1.5" stroke-dasharray="3,2" />
                        <!-- Tali kanan -->
                        <line x1="75" y1="23" x2="67" y2="52" stroke="#111" stroke-width="1.5" stroke-dasharray="3,2" />
                        <!-- Tali tengah atas ke kepala -->
                        <line x1="50" y1="38" x2="50" y2="48" stroke="#111" stroke-width="1.5" stroke-dasharray="3,2" />

                        <!-- Bidak Catur (Pawn) terikat benang -->
                        <!-- Kepala bidak -->
                        <circle cx="50" cy="53" r="7" fill="#111" />
                        <circle cx="52.5" cy="50.5" r="2" fill="#fff" opacity="0.4" /> <!-- Kilap kepala -->
                        <!-- Leher bidak & kerah -->
                        <path d="M 44 63 L 56 63 L 53 66 L 47 66 Z" fill="#3b0059" />
                        <!-- Badan bidak (kurva halus bidak pion) -->
                        <path d="M 47 66 C 44 76 35 84 30 88 L 70 88 C 65 84 56 76 53 66 Z" fill="#111" />
                        <!-- Alas bidak bertingkat -->
                        <rect x="28" y="88" width="44" height="4" rx="1.5" fill="#3b0059" />
                        <rect x="24" y="92" width="52" height="4" rx="2" fill="#111" />

                        <!-- Pin pengait di tubuh bidak (tempat tali menempel) -->
                        <circle cx="50" cy="46" r="1.5" fill="#fff" />
                        <circle cx="33" cy="52" r="1.5" fill="#fff" />
                        <circle cx="67" cy="52" r="1.5" fill="#fff" />

                        <!-- Bayangan retakan di badan bidak (menyimbolkan kefanaan/bidak rapuh) -->
                        <path d="M 50 66 L 47 72 L 52 78 L 46 84" stroke="#fff" stroke-width="1.5" fill="none"
                            opacity="0.8" />
                        <path d="M 52 78 L 56 80" stroke="#fff" stroke-width="1" fill="none" opacity="0.8" />

                        <!-- Genangan merah darah/ungu di bawah -->
                        <ellipse cx="50" cy="98" rx="38" ry="4" fill="#3b0059" opacity="0.7" />
                        <ellipse cx="50" cy="98" rx="25" ry="2" fill="#111" opacity="0.5" />
                        <!-- Cipratan darah/genangan -->
                        <circle cx="85" cy="95" r="2.5" fill="#3b0059" />
                        <circle cx="92" cy="97" r="1.5" fill="#3b0059" opacity="0.6" />
                        <circle cx="15" cy="95" r="3" fill="#3b0059" />
                    </svg>`;

niasyArt["seer"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Cahaya Aura Ramalan Latar -->
                        <circle cx="50" cy="48" r="38" fill="rgba(74,0,128,0.04)" />
                        <!-- Kristal Bola Ramalan -->
                        <circle cx="50" cy="48" r="28" fill="none" stroke="#4a0080" stroke-width="2" />
                        <circle cx="50" cy="48" r="26" fill="rgba(74,0,128,0.06)" />
                        
                        <!-- Asap/Kabut di Dalam Bola -->
                        <path d="M 25 48 C 30 35 40 45 45 35 C 50 25 65 35 70 45 C 75 55 60 70 50 70 C 40 70 20 60 25 48 Z" fill="rgba(200,150,255,0.25)" />
                        <path d="M 30 55 C 35 45 45 55 55 45 C 65 35 75 55 60 65 C 50 75 25 65 30 55 Z" fill="rgba(150,80,220,0.2)" />

                        <!-- Rahasia terungkap: Siluet Serigala melolong di dalam bola -->
                        <path d="M 38 65 Q 42 50 48 44 Q 52 40 55 34 L 58 38 L 56 42 Q 62 48 58 65 Z" fill="#1a0033" opacity="0.85" />
                        <polygon points="56,42 66,35 60,48" fill="#1a0033" opacity="0.85" />
                        <polygon points="48,44 52,32 55,41" fill="#1a0033" opacity="0.85" />
                        
                        <!-- Kilap Bola Kristal (Refleksi Cahaya) -->
                        <path d="M 26 40 A 24 24 0 0 1 50 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity="0.6" />
                        <path d="M 30 32 A 24 24 0 0 1 42 26" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
                        <ellipse cx="68" cy="62" rx="4" ry="2" fill="#fff" opacity="0.5" transform="rotate(-30 68 62)" />

                        <!-- Tangan Peramal menyangga bola -->
                        <!-- Tangan kiri -->
                        <path d="M 15 85 Q 25 70 34 68 Q 38 67 40 70 Q 35 75 30 95 Z" fill="#4a0080" />
                        <path d="M 34 68 Q 38 62 42 66 Q 40 70 38 68" fill="#3a0060" /> 
                        <!-- Tangan kanan -->
                        <path d="M 85 85 Q 75 70 66 68 Q 62 67 60 70 Q 65 75 70 95 Z" fill="#4a0080" />
                        <path d="M 66 68 Q 62 62 58 66 Q 60 70 62 68" fill="#3a0060" /> 

                        <!-- Alas Bola / Tatakan Kayu Mistis -->
                        <path d="M 42 75 L 58 75 L 62 82 L 38 82 Z" fill="#1a0033" />
                        <rect x="36" y="82" width="28" height="4" rx="1" fill="#4a0080" />
                        <circle cx="50" cy="78" r="2" fill="#b060ff" />

                        <!-- Kartu Tarot Melayang Bebas -->
                        <rect x="15" y="32" width="10" height="15" fill="#faf5ff" stroke="#4a0080" stroke-width="1" transform="rotate(-15 20 42)" />
                        <rect x="16" y="33" width="8" height="13" fill="none" stroke="#6a0090" stroke-width="0.5" stroke-dasharray="1,1" transform="rotate(-15 20 42)" />
                        <circle cx="20" cy="39.5" r="1.5" fill="#4a0080" transform="rotate(-15 20 42)" />

                        <rect x="75" y="45" width="10" height="15" fill="#faf5ff" stroke="#4a0080" stroke-width="1" transform="rotate(20 80 52)" />
                        <rect x="76" y="46" width="8" height="13" fill="none" stroke="#6a0090" stroke-width="0.5" stroke-dasharray="1,1" transform="rotate(20 80 52)" />
                        <polygon points="80,49 82,54 78,54" fill="#4a0080" transform="rotate(20 80 52)" />

                        <!-- Percikan Energi Bintang -->
                        <polygon points="20,15 22,23 30,25 22,27 20,35 18,27 10,25 18,23" fill="#b060ff" opacity="0.6" />
                        <polygon points="80,18 81,22 85,23 81,24 80,28 79,24 75,23 79,22" fill="#b060ff" opacity="0.6" />
                        <circle cx="32" cy="18" r="1.5" fill="#b060ff" opacity="0.8" />
                        <circle cx="72" cy="15" r="1" fill="#b060ff" opacity="0.8" />
                        <circle cx="35" cy="88" r="1" fill="#b060ff" opacity="0.5" />
                        <circle cx="65" cy="88" r="1.5" fill="#b060ff" opacity="0.5" />
                    </svg>`;

niasyArt["alpha_wolf"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Bulan darah di belakang -->
                        <circle cx="50" cy="38" r="28" fill="none" stroke="#6b0000" stroke-width="1.5" opacity="0.4" />
                        <circle cx="50" cy="38" r="24" fill="rgba(107,0,0,0.08)" />
                        <!-- Siluet kepala serigala Alpha — besar & dominan (warna di-lighten untuk cetak) -->
                        <!-- Telinga lancip kiri -->
                        <polygon points="24,18 18,3 35,16" fill="rgba(170, 0, 0, 0.1)" stroke="#8b0000"
                            stroke-width="2" />
                        <!-- Telinga lancip kanan -->
                        <polygon points="76,18 82,3 65,16" fill="rgba(170, 0, 0, 0.1)" stroke="#8b0000"
                            stroke-width="2" />
                        <!-- Kepala -->
                        <path
                            d="M 22 20 Q 15 45 22 60 L 35 68 Q 50 75 65 68 L 78 60 Q 85 45 78 20 Q 65 10 50 10 Q 35 10 22 20 Z"
                            fill="rgba(170, 0, 0, 0.05)" stroke="#8b0000" stroke-width="2.5" />
                        <!-- Moncong -->
                        <path d="M 38 52 Q 50 68 62 52 Q 55 60 50 62 Q 45 60 38 52 Z" fill="rgba(200, 0, 0, 0.15)"
                            stroke="#a81010" stroke-width="2" />
                        <!-- Hidung -->
                        <ellipse cx="50" cy="50" rx="7" ry="5" fill="#6b0000" />
                        <ellipse cx="48" cy="49" rx="2" ry="1.5" fill="#ff4d4d" opacity="0.8" />
                        <!-- Mata serigala Alpha — merah membara (terang) -->
                        <ellipse cx="36" cy="38" rx="6" ry="4" fill="#6b0000" />
                        <ellipse cx="64" cy="38" rx="6" ry="4" fill="#6b0000" />
                        <circle cx="36" cy="38" r="2.5" fill="#ff1a1a" />
                        <circle cx="64" cy="38" r="2.5" fill="#ff1a1a" />
                        <circle cx="34" cy="36" r="1" fill="#fff" opacity="0.9" />
                        <circle cx="62" cy="36" r="1" fill="#fff" opacity="0.9" />
                        <!-- Cakar/luka merah di dagu -->
                        <path d="M 42 70 L 44 82 M 50 72 L 50 85 M 58 70 L 56 82" stroke="#6b0000" stroke-width="2"
                            fill="none" stroke-linecap="round" />
                        <!-- Tetesan darah -->
                        <path d="M 50 85 L 52 96 A 2.5 2.5 0 0 1 47 96 Z" fill="#8b0000" />
                    </svg>`;

niasyArt["cupid"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Dua hati yang terikat -->
                        <path
                            d="M 25 40 C 25 30 15 25 15 35 C 15 42 25 50 25 50 C 25 50 35 42 35 35 C 35 25 25 30 25 40 Z"
                            fill="#b5005b" opacity="0.85" />
                        <path
                            d="M 75 40 C 75 30 65 25 65 35 C 65 42 75 50 75 50 C 75 50 85 42 85 35 C 85 25 75 30 75 40 Z"
                            fill="#b5005b" opacity="0.85" />
                        <!-- Rantai pengikat antar dua hati -->
                        <path d="M 35 42 Q 50 55 65 42" fill="none" stroke="#8b003a" stroke-width="2"
                            stroke-dasharray="4,3" />
                        <circle cx="50" cy="52" r="3" fill="none" stroke="#8b003a" stroke-width="2" />
                        <!-- Panah Cupid melintang diagonal -->
                        <line x1="10" y1="75" x2="90" y2="25" stroke="#b5005b" stroke-width="3"
                            stroke-linecap="round" />
                        <!-- Mata panah -->
                        <polygon points="90,25 78,22 80,34" fill="#b5005b" />
                        <!-- Bulu ekor panah -->
                        <path d="M 10 75 L 5 68 M 10 75 L 3 78 M 10 75 L 16 82" stroke="#8b003a" stroke-width="2"
                            stroke-linecap="round" />
                        <!-- Sayap kecil di kiri atas (abstrak) -->
                        <path d="M 18 20 C 10 14 5 22 12 25 C 8 22 14 30 20 26" fill="none" stroke="#b5005b"
                            stroke-width="1.5" opacity="0.7" />
                        <path d="M 22 18 C 16 8 8 14 14 20 C 10 16 17 25 22 22" fill="none" stroke="#b5005b"
                            stroke-width="1.5" opacity="0.5" />
                        <!-- Sayap kecil di kanan atas (abstrak) -->
                        <path d="M 82 20 C 90 14 95 22 88 25 C 92 22 86 30 80 26" fill="none" stroke="#b5005b"
                            stroke-width="1.5" opacity="0.7" />
                        <path d="M 78 18 C 84 8 92 14 86 20 C 90 16 83 25 78 22" fill="none" stroke="#b5005b"
                            stroke-width="1.5" opacity="0.5" />
                        <!-- Titik hati kecil dekoratif -->
                        <path
                            d="M 50 80 C 50 77 47 76 47 78 C 47 80 50 82 50 82 C 50 82 53 80 53 78 C 53 76 50 77 50 80 Z"
                            fill="#b5005b" opacity="0.6" />
                        <path
                            d="M 50 90 C 50 87 47 86 47 88 C 47 90 50 92 50 92 C 50 92 53 90 53 88 C 53 86 50 87 50 90 Z"
                            fill="#b5005b" opacity="0.4" />
                    </svg>`;

niasyArt["hunter"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Busur Silang (Crossbow) -->
                        <!-- Gagang panjang vertikal -->
                        <rect x="47" y="10" width="6" height="80" rx="3" fill="#3a2010" />
                        <!-- Palang horizontal -->
                        <rect x="15" y="35" width="70" height="8" rx="4" fill="#3a2010" />
                        <!-- Pegangan / grip -->
                        <rect x="44" y="55" width="12" height="20" rx="3" fill="#2a1608" />
                        <!-- Busur melengkung -->
                        <path d="M 18 39 C 18 20 35 12 50 12 C 65 12 82 20 82 39" fill="none" stroke="#2d5a1b"
                            stroke-width="3.5" stroke-linecap="round" />
                        <!-- Senar busur -->
                        <line x1="18" y1="39" x2="50" y2="32" stroke="#1a3a0e" stroke-width="1.5" />
                        <line x1="82" y1="39" x2="50" y2="32" stroke="#1a3a0e" stroke-width="1.5" />
                        <!-- Rel panah / groove -->
                        <line x1="50" y1="15" x2="50" y2="43" stroke="#5a3a20" stroke-width="2" />
                        <!-- Anak panah siap lepas -->
                        <line x1="50" y1="15" x2="50" y2="45" stroke="#6b4a28" stroke-width="2.5"
                            stroke-linecap="round" />
                        <polygon points="50,8 46,18 54,18" fill="#2d5a1b" />
                        <!-- Bulu ekor anak panah -->
                        <path d="M 46 42 L 42 46 M 46 44 L 42 50" stroke="#2d5a1b" stroke-width="1.5"
                            stroke-linecap="round" />
                        <path d="M 54 42 L 58 46 M 54 44 L 58 50" stroke="#2d5a1b" stroke-width="1.5"
                            stroke-linecap="round" />
                        <!-- Lingkaran target (scope) -->
                        <circle cx="50" cy="85" r="10" fill="none" stroke="#2d5a1b" stroke-width="1.5"
                            stroke-dasharray="3,3" />
                        <line x1="50" y1="73" x2="50" y2="97" stroke="#2d5a1b" stroke-width="1" opacity="0.5" />
                        <line x1="38" y1="85" x2="62" y2="85" stroke="#2d5a1b" stroke-width="1" opacity="0.5" />
                        <circle cx="50" cy="85" r="2" fill="#2d5a1b" />
                    </svg>`;

niasyArt["guardian"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Perisai utama besar -->
                        <path d="M 50 8 L 85 22 L 85 55 Q 85 80 50 95 Q 15 80 15 55 L 15 22 Z" fill="none"
                            stroke="#1a4a7a" stroke-width="3" />
                        <path d="M 50 14 L 80 26 L 80 54 Q 80 75 50 88 Q 20 75 20 54 L 20 26 Z"
                            fill="rgba(26,74,122,0.07)" />
                        <!-- Detail perisai: salib di tengah -->
                        <line x1="50" y1="22" x2="50" y2="80" stroke="#1a4a7a" stroke-width="2.5" />
                        <line x1="26" y1="48" x2="74" y2="48" stroke="#1a4a7a" stroke-width="2.5" />
                        <!-- Bintang di 4 kuadran -->
                        <circle cx="37" cy="35" r="4" fill="none" stroke="#1a4a7a" stroke-width="1.5" />
                        <circle cx="63" cy="35" r="4" fill="none" stroke="#1a4a7a" stroke-width="1.5" />
                        <circle cx="37" cy="62" r="4" fill="none" stroke="#1a4a7a" stroke-width="1.5" />
                        <circle cx="63" cy="62" r="4" fill="none" stroke="#1a4a7a" stroke-width="1.5" />
                        <!-- Ornamen mahkota di atas perisai -->
                        <path d="M 35 22 L 38 14 L 42 20 L 50 10 L 58 20 L 62 14 L 65 22" fill="none" stroke="#1a4a7a"
                            stroke-width="2" stroke-linejoin="round" />
                        <!-- Cahaya aura proteksi -->
                        <circle cx="50" cy="51" r="12" fill="none" stroke="#4a8aca" stroke-width="1"
                            stroke-dasharray="2,4" opacity="0.6" />
                        <!-- Inti perisai: simbol tangan melindungi -->
                        <circle cx="50" cy="51" r="6" fill="#1a4a7a" />
                        <circle cx="48" cy="49" r="2" fill="#fff" opacity="0.6" />
                    </svg>`;

niasyArt["villager"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Papan Kayu Berlindung -->
                        <rect x="10" y="15" width="80" height="20" fill="#fff" stroke="#113247" stroke-width="3" />
                        <rect x="10" y="40" width="80" height="20" fill="#fff" stroke="#113247" stroke-width="3" />
                        <rect x="10" y="65" width="80" height="20" fill="#fff" stroke="#113247" stroke-width="3" />
                        <!-- Paku -->
                        <circle cx="15" cy="25" r="2" fill="#111" />
                        <circle cx="85" cy="25" r="2" fill="#111" />
                        <circle cx="15" cy="50" r="2" fill="#111" />
                        <circle cx="85" cy="50" r="2" fill="#111" />
                        <circle cx="15" cy="75" r="2" fill="#111" />
                        <circle cx="85" cy="75" r="2" fill="#111" />
                        <!-- Mata Mengintip Ketakutan -->
                        <path d="M 35 37 Q 50 22 65 37 Q 50 50 35 37 Z" fill="#fff" stroke="#111" stroke-width="2.5" />
                        <circle cx="50" cy="36" r="6" fill="#113247" />
                        <circle cx="48" cy="34" r="1.5" fill="#fff" />
                        <line x1="50" y1="42" x2="50" y2="48" stroke="#111" stroke-width="2" /> <!-- Air mata -->
                        <!-- Garpu Rumput di background menyilang -->
                        <path d="M 75 95 L 75 55 M 68 62 L 68 50 L 82 50 L 82 62 M 75 55 L 75 45" stroke="#111"
                            stroke-width="2.5" fill="none" opacity="0.8" />
                    </svg>`;

niasyArt["witch"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Topi lancip penyihir -->
                        <polygon points="50,5 30,40 70,40" fill="#0e3a19" />
                        <rect x="24" y="38" width="52" height="8" rx="3" fill="#1a5c2a" />
                        <!-- Api sihir di bawah topi - aura mistis -->
                        <ellipse cx="50" cy="48" rx="20" ry="5" fill="rgba(26,92,42,0.15)" />
                        <!-- Kuali mendidih -->
                        <path d="M 22 72 Q 22 95 50 95 Q 78 95 78 72 Z" fill="#0e3a19" />
                        <ellipse cx="50" cy="72" rx="28" ry="8" fill="#1a5c2a" />
                        <!-- Gelembung di kuali -->
                        <circle cx="40" cy="68" r="3" fill="none" stroke="#5adc7a" stroke-width="1.5" opacity="0.8" />
                        <circle cx="55" cy="65" r="2" fill="none" stroke="#5adc7a" stroke-width="1.5" opacity="0.6" />
                        <circle cx="65" cy="70" r="2.5" fill="none" stroke="#5adc7a" stroke-width="1.5" opacity="0.7" />
                        <!-- Asap naik -->
                        <path d="M 38 62 Q 34 52 38 44 Q 42 36 38 28" fill="none" stroke="#1a5c2a" stroke-width="1.5"
                            stroke-dasharray="3,3" opacity="0.5" />
                        <path d="M 50 60 Q 46 48 50 38 Q 54 28 50 18" fill="none" stroke="#1a5c2a" stroke-width="1.5"
                            stroke-dasharray="3,3" opacity="0.4" />
                        <path d="M 62 62 Q 66 52 62 44 Q 58 36 62 28" fill="none" stroke="#1a5c2a" stroke-width="1.5"
                            stroke-dasharray="3,3" opacity="0.5" />
                        <!-- Dua botol ramuan kiri & kanan kuali -->
                        <rect x="8" y="60" width="10" height="18" rx="3" fill="#1a5c2a" />
                        <ellipse cx="13" cy="60" rx="5" ry="3" fill="#0e3a19" />
                        <rect x="11" y="52" width="4" height="8" fill="#0e3a19" />
                        <rect x="82" y="60" width="10" height="18" rx="3" fill="#1a5c2a" />
                        <ellipse cx="87" cy="60" rx="5" ry="3" fill="#0e3a19" />
                        <rect x="85" y="52" width="4" height="8" fill="#0e3a19" />
                        <!-- Tengkorak kecil di dalam kuali -->
                        <circle cx="50" cy="80" r="6" fill="#f0fff4" opacity="0.25" />
                        <circle cx="47" cy="78" r="1.2" fill="#0e3a19" opacity="0.4" />
                        <circle cx="53" cy="78" r="1.2" fill="#0e3a19" opacity="0.4" />
                    </svg>`;

niasyArt["wizard"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Tongkat sihir / Staff -->
                        <line x1="50" y1="5" x2="50" y2="85" stroke="#2a0f58" stroke-width="4" stroke-linecap="round" />
                        <!-- Orb di ujung tongkat -->
                        <circle cx="50" cy="12" r="10" fill="none" stroke="#3d1a78" stroke-width="2.5" />
                        <circle cx="50" cy="12" r="7" fill="rgba(61,26,120,0.15)" />
                        <circle cx="50" cy="12" r="3" fill="#3d1a78" />
                        <circle cx="47" cy="9" r="1.5" fill="#fff" opacity="0.7" />
                        <!-- Kilat / Lightning bolt kiri -->
                        <path d="M 20 30 L 32 45 L 24 45 L 36 62" fill="none" stroke="#3d1a78" stroke-width="2.5"
                            stroke-linejoin="round" stroke-linecap="round" />
                        <!-- Kilat / Lightning bolt kanan -->
                        <path d="M 80 30 L 68 45 L 76 45 L 64 62" fill="none" stroke="#3d1a78" stroke-width="2.5"
                            stroke-linejoin="round" stroke-linecap="round" />
                        <!-- Rune melingkar di tengah -->
                        <circle cx="50" cy="50" r="16" fill="none" stroke="#3d1a78" stroke-width="1"
                            stroke-dasharray="2,3" />
                        <!-- Simbol rune bintang 6 -->
                        <polygon points="50,36 53,44 62,44 55,49 58,57 50,53 42,57 45,49 38,44 47,44"
                            fill="rgba(61,26,120,0.3)" stroke="#3d1a78" stroke-width="1.5" />
                        <!-- Bintang kecil dekoratif -->
                        <circle cx="18" cy="20" r="2" fill="#3d1a78" opacity="0.6" />
                        <circle cx="82" cy="18" r="1.5" fill="#3d1a78" opacity="0.5" />
                        <circle cx="15" cy="65" r="1.5" fill="#3d1a78" opacity="0.4" />
                        <circle cx="85" cy="72" r="2" fill="#3d1a78" opacity="0.6" />
                        <!-- Kaki tongkat: ornamen -->
                        <path d="M 42 82 Q 50 90 58 82" fill="none" stroke="#2a0f58" stroke-width="2.5"
                            stroke-linecap="round" />
                        <circle cx="42" cy="82" r="2" fill="#3d1a78" />
                        <circle cx="58" cy="82" r="2" fill="#3d1a78" />
                    </svg>`;

niasyArt["veteran"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Medali kehormatan utama -->
                        <circle cx="50" cy="30" r="22" fill="none" stroke="#5a4a00" stroke-width="2.5" />
                        <circle cx="50" cy="30" r="18" fill="rgba(90,74,0,0.08)" />
                        <!-- Bintang militer di tengah medali -->
                        <polygon points="50,14 53,23 63,23 55,29 58,38 50,33 42,38 45,29 37,23 47,23" fill="#5a4a00" />
                        <!-- Pita medali di atas -->
                        <rect x="44" y="5" width="12" height="10" rx="2" fill="#3a3000" />
                        <line x1="44" y1="8" x2="56" y2="8" stroke="#7a6500" stroke-width="1.5" />
                        <line x1="44" y1="11" x2="56" y2="11" stroke="#7a6500" stroke-width="1.5" />
                        <!-- Dog tags / Plat militer -->
                        <rect x="33" y="57" width="16" height="21" rx="3" fill="none" stroke="#5a4a00"
                            stroke-width="2" />
                        <circle cx="41" cy="59" r="2" fill="none" stroke="#5a4a00" stroke-width="1.5" />
                        <line x1="35" y1="65" x2="47" y2="65" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <line x1="35" y1="69" x2="47" y2="69" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <line x1="35" y1="73" x2="47" y2="73" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <rect x="51" y="57" width="16" height="21" rx="3" fill="none" stroke="#5a4a00"
                            stroke-width="2" />
                        <circle cx="59" cy="59" r="2" fill="none" stroke="#5a4a00" stroke-width="1.5" />
                        <line x1="53" y1="65" x2="65" y2="65" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <line x1="53" y1="69" x2="65" y2="69" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <line x1="53" y1="73" x2="65" y2="73" stroke="#5a4a00" stroke-width="1" opacity="0.5" />
                        <!-- Rantai dog tags -->
                        <path d="M 41 57 Q 41 52 50 50 Q 59 52 59 57" fill="none" stroke="#3a3000" stroke-width="1.5"
                            stroke-dasharray="2,2" />
                        <!-- Tanda ALERT / siaga -->
                        <path d="M 15 45 L 20 35 L 25 45 Z" fill="#5a4a00" opacity="0.7" />
                        <path d="M 75 45 L 80 35 L 85 45 Z" fill="#5a4a00" opacity="0.7" />
                        <line x1="20" y1="41" x2="20" y2="43" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="20" cy="44.5" r="0.7" fill="#fff" />
                        <line x1="80" y1="41" x2="80" y2="43" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="80" cy="44.5" r="0.7" fill="#fff" />
                    </svg>`;

niasyArt["bodyguard"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Rompi Anti Peluru (Kevlar Vest) -->
                        <path
                            d="M 30 20 C 30 15 40 10 50 10 C 60 10 70 15 70 20 L 75 40 Q 80 60 70 85 L 30 85 Q 20 60 25 40 Z"
                            fill="none" stroke="#2b3a42" stroke-width="3" stroke-linejoin="round" />
                        <path d="M 35 25 L 65 25 L 68 40 Q 72 60 65 80 L 35 80 Q 28 60 32 40 Z"
                            fill="rgba(43,58,66,0.1)" />
                        <!-- Garis panel rompi -->
                        <line x1="32" y1="45" x2="68" y2="45" stroke="#2b3a42" stroke-width="2" />
                        <line x1="30" y1="60" x2="70" y2="60" stroke="#2b3a42" stroke-width="2" />
                        <line x1="28" y1="75" x2="72" y2="75" stroke="#2b3a42" stroke-width="2" />
                        <line x1="50" y1="25" x2="50" y2="80" stroke="#2b3a42" stroke-width="2" />
                        <!-- Lencana (Badge) di dada kiri -->
                        <path d="M 58 28 L 64 28 L 64 36 L 61 39 L 58 36 Z" fill="#2b3a42" />
                        <circle cx="61" cy="33" r="1.5" fill="#f4f6f7" />
                        <!-- Dua tongkat (baton) menyilang di latar belakang -->
                        <line x1="15" y1="75" x2="85" y2="25" stroke="#172025" stroke-width="4"
                            stroke-linecap="round" />
                        <line x1="20" y1="70" x2="30" y2="63" stroke="#2b3a42" stroke-width="6"
                            stroke-linecap="round" />
                        <line x1="15" y1="25" x2="85" y2="75" stroke="#172025" stroke-width="4"
                            stroke-linecap="round" />
                        <line x1="20" y1="30" x2="30" y2="37" stroke="#2b3a42" stroke-width="6"
                            stroke-linecap="round" />
                        <!-- Ceceran darah pelindung -->
                        <path d="M 40 40 L 45 52 A 3 3 0 0 1 35 52 Z" fill="#2b3a42" opacity="0.4" />
                        <circle cx="38" cy="58" r="2" fill="#2b3a42" opacity="0.4" />
                        <circle cx="46" cy="46" r="1.5" fill="#2b3a42" opacity="0.3" />
                    </svg>`;

niasyArt["priest"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Cahaya suci / Holy aura di belakang -->
                        <circle cx="50" cy="45" r="30" fill="none" stroke="#b89300" stroke-width="1"
                            stroke-dasharray="2,4" opacity="0.6" />
                        <circle cx="50" cy="45" r="22" fill="rgba(184,147,0,0.1)" />
                        <!-- Botol Air Suci / Holy Water Vial -->
                        <path d="M 46 25 L 54 25 L 54 30 L 58 35 L 58 55 C 58 65 42 65 42 55 L 42 35 L 46 30 Z"
                            fill="none" stroke="#b89300" stroke-width="3" stroke-linejoin="round" />
                        <path d="M 44 42 L 56 42 L 56 55 C 56 61 44 61 44 55 Z" fill="#b89300" /> <!-- Isi air suci -->
                        <!-- Salib suci di dalam botol -->
                        <line x1="50" y1="45" x2="50" y2="52" stroke="#fffdf5" stroke-width="2" />
                        <line x1="47" y1="48" x2="53" y2="48" stroke="#fffdf5" stroke-width="2" />
                        <!-- Tutup botol / Penyumbat Gabus -->
                        <rect x="47" y="18" width="6" height="7" fill="#8f7200" />
                        <line x1="45" y1="25" x2="55" y2="25" stroke="#8f7200" stroke-width="2" />
                        <!-- Percikan Air Suci / Holy Water Splash -->
                        <path d="M 30 50 Q 20 60 25 75 Q 35 65 40 60" fill="none" stroke="#b89300" stroke-width="2"
                            stroke-linecap="round" />
                        <path d="M 70 50 Q 80 60 75 75 Q 65 65 60 60" fill="none" stroke="#b89300" stroke-width="2"
                            stroke-linecap="round" />
                        <circle cx="25" cy="78" r="2" fill="#b89300" />
                        <circle cx="32" cy="72" r="1.5" fill="#b89300" />
                        <circle cx="75" cy="78" r="2" fill="#b89300" />
                        <circle cx="68" cy="72" r="1.5" fill="#b89300" />
                        <!-- Simbol Pendaran Bintang (Sparkles) -->
                        <path d="M 50 5 L 51 12 L 58 13 L 51 14 L 50 21 L 49 14 L 42 13 L 49 12 Z" fill="#cca300" />
                        <path d="M 28 25 L 29 29 L 33 30 L 29 31 L 28 35 L 27 31 L 23 30 L 27 29 Z" fill="#cca300"
                            opacity="0.6" />
                        <path d="M 72 25 L 73 29 L 77 30 L 73 31 L 72 35 L 71 31 L 67 30 L 71 29 Z" fill="#cca300"
                            opacity="0.6" />
                    </svg>`;

niasyArt["mayor"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Medali / Kalung Pejabat Besar -->
                        <path d="M 20 85 Q 50 110 80 85" fill="none" stroke="#d4af37" stroke-width="5"
                            stroke-linecap="round" />
                        <path d="M 23 83 Q 50 105 77 83" fill="none" stroke="#0b1a3d" stroke-width="1.5" />
                        <!-- Topi Tinggi (Top Hat) Elegan -->
                        <path d="M 25 55 L 75 55 L 75 50 L 65 50 L 65 15 L 35 15 L 35 50 L 25 50 Z" fill="#0b1a3d" />
                        <rect x="35" y="42" width="30" height="8" fill="#d4af37" />
                        <!-- Pita merah kecil di topi -->
                        <rect x="35" y="44" width="30" height="1" fill="#8b0000" />
                        <!-- Monocle (Kacamata Sebelah) -->
                        <circle cx="60" cy="65" r="8" fill="none" stroke="#d4af37" stroke-width="2.5" />
                        <circle cx="60" cy="65" r="5" fill="rgba(212,175,55,0.2)" />
                        <!-- Rantai Monocle -->
                        <path d="M 68 65 Q 85 75 80 90" fill="none" stroke="#d4af37" stroke-width="1.5"
                            stroke-dasharray="2,2" />
                        <!-- Kumis tebal ala bangsawan -->
                        <path
                            d="M 50 72 C 40 72 35 80 32 85 C 38 82 45 80 50 82 C 55 80 62 82 68 85 C 65 80 60 72 50 72 Z"
                            fill="#111" />
                        <!-- Stempel Resmi (Stamp) / Surat Suara di belakang -->
                        <rect x="15" y="25" width="25" height="35" rx="2" fill="#fff" stroke="#0b1a3d" stroke-width="2"
                            transform="rotate(-15 27 42)" />
                        <line x1="20" y1="35" x2="35" y2="35" stroke="#0b1a3d" stroke-width="1.5"
                            transform="rotate(-15 27 42)" />
                        <line x1="20" y1="40" x2="30" y2="40" stroke="#0b1a3d" stroke-width="1.5"
                            transform="rotate(-15 27 42)" />
                        <circle cx="27" cy="50" r="4" fill="#8b0000" transform="rotate(-15 27 42)" />
                        <!-- Segel lilin merah -->
                        <!-- Simbol Timbangan Keadilan kecil -->
                        <line x1="43" y1="30" x2="57" y2="30" stroke="#d4af37" stroke-width="1.5" />
                        <polygon points="50,22 49,30 51,30" fill="#d4af37" />
                        <path d="M 43 30 L 40 38 L 46 38 Z" fill="none" stroke="#d4af37" stroke-width="1" />
                        <path d="M 57 30 L 54 38 L 60 38 Z" fill="none" stroke="#d4af37" stroke-width="1" />
                    </svg>`;

niasyArt["sheriff"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Bintang Sheriff besar 6 titik -->
                        <polygon
                            points="50,8 55,22 70,18 62,30 76,35 62,40 70,52 55,47 50,62 45,47 30,52 38,40 24,35 38,30 30,18 45,22"
                            fill="#7a4800" stroke="#4a2a00" stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Lingkaran bagian dalam bintang -->
                        <circle cx="50" cy="35" r="10" fill="none" stroke="#4a2a00" stroke-width="2" />
                        <circle cx="50" cy="35" r="7" fill="#fff9f0" />
                        <circle cx="50" cy="35" r="3" fill="#7a4800" />
                        <!-- Revolver / Pistol di kiri bawah -->
                        <rect x="12" y="68" width="28" height="9" rx="3" fill="#2a1a00" />
                        <rect x="37" y="62" width="7" height="15" rx="2" fill="#2a1a00" />
                        <rect x="10" y="72" width="4" height="14" rx="1" fill="#3a2a10" />
                        <circle cx="14" cy="72" r="3" fill="#1a0e00" />
                        <!-- Silinder revolver -->
                        <ellipse cx="27" cy="68" rx="5" ry="5" fill="#3a2a10" stroke="#2a1a00" stroke-width="1" />
                        <circle cx="27" cy="68" r="2" fill="#1a0e00" />
                        <!-- Borgol di kanan bawah -->
                        <circle cx="72" cy="75" r="8" fill="none" stroke="#7a4800" stroke-width="3" />
                        <circle cx="88" cy="75" r="8" fill="none" stroke="#7a4800" stroke-width="3" />
                        <line x1="80" y1="75" x2="80" y2="75" stroke="#4a2a00" stroke-width="2" />
                        <path d="M 79 72 L 81 72 L 81 78 L 79 78 Z" fill="#4a2a00" />
                        <!-- Rantai borgol -->
                        <path d="M 72 83 Q 80 90 88 83" fill="none" stroke="#7a4800" stroke-width="2"
                            stroke-dasharray="2,2" />
                    </svg>`;

niasyArt["werewolf"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Siluet Rahang Raksasa & Darah -->
                        <path d="M 5 45 Q 50 -5 95 45" fill="none" stroke="#111" stroke-width="6" />
                        <path d="M 5 55 Q 50 105 95 55" fill="none" stroke="#111" stroke-width="6" />
                        <!-- Taring Atas -->
                        <polygon points="15,40 20,60 25,38" fill="#111" />
                        <polygon points="30,30 35,55 40,28" fill="#111" />
                        <polygon points="45,20 50,55 55,20" fill="#8b0000" /> <!-- Taring Utama Merah -->
                        <polygon points="60,28 65,55 70,30" fill="#111" />
                        <polygon points="75,38 80,60 85,40" fill="#111" />
                        <!-- Taring Bawah -->
                        <polygon points="20,60 25,38 30,62" fill="#111" />
                        <polygon points="40,70 45,40 50,72" fill="#8b0000" /> <!-- Taring Utama Merah -->
                        <polygon points="60,72 65,40 70,70" fill="#111" />
                        <!-- Tetesan Darah -->
                        <circle cx="50" cy="85" r="4" fill="#8b0000" />
                        <path d="M 50 85 L 52 100 A 2 2 0 0 1 48 100 Z" fill="#8b0000" />
                    </svg>`;

niasyArt["jester"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Topeng Terbelah (Sedih & Gila) -->
                        <path d="M 50 10 C 10 10 10 80 50 95 C 90 80 90 10 50 10 Z" fill="none" stroke="#0a421b"
                            stroke-width="4" />
                        <line x1="50" y1="10" x2="50" y2="95" stroke="#0a421b" stroke-width="2.5"
                            stroke-dasharray="6,4" />
                        <!-- Kiri: Sedih -->
                        <circle cx="33" cy="45" r="7" fill="none" stroke="#111" stroke-width="3" />
                        <line x1="20" y1="35" x2="45" y2="40" stroke="#111" stroke-width="3" />
                        <path d="M 25 75 Q 35 60 45 70" fill="none" stroke="#111" stroke-width="3" />
                        <circle cx="35" cy="58" r="2" fill="#111" /> <!-- Air mata -->
                        <!-- Kanan: Psikopat -->
                        <circle cx="67" cy="40" r="7" fill="#0a421b" />
                        <circle cx="67" cy="40" r="2" fill="#fff" />
                        <line x1="55" y1="40" x2="80" y2="25" stroke="#0a421b" stroke-width="4" />
                        <path d="M 55 65 Q 75 95 85 60" fill="none" stroke="#0a421b" stroke-width="5" />
                        <path d="M 55 65 L 85 60" stroke="#111" stroke-width="1.5" /> <!-- Gigi tajam abstrak -->
                        <!-- Topi Badut -->
                        <path d="M 75 20 Q 100 -5 95 40 Q 85 25 75 20" fill="none" stroke="#111" stroke-width="3" />
                        <circle cx="95" cy="40" r="4" fill="#0a421b" />
                        <path d="M 25 25 Q 0 -5 5 40 Q 15 30 25 25" fill="none" stroke="#111" stroke-width="3" />
                        <circle cx="5" cy="40" r="4" fill="#0a421b" />
                    </svg>`;

niasyArt["werewolf_2"] = `<svg viewBox="0 0 100 120" width="100%" height="100%">
                        <!-- Bulan purnama berdarah besar di belakang -->
                        <circle cx="50" cy="38" r="28" fill="rgba(139,0,20,0.18)" stroke="#4a0010" stroke-width="1.5" />
                        <circle cx="50" cy="38" r="22" fill="rgba(180,0,30,0.10)" />
                        <!-- Tekstur permukaan bulan: kawah abstrak -->
                        <circle cx="42" cy="30" r="4" fill="none" stroke="#4a0010" stroke-width="0.8" opacity="0.4" />
                        <circle cx="58" cy="44" r="3" fill="none" stroke="#4a0010" stroke-width="0.8" opacity="0.3" />
                        <circle cx="50" cy="48" r="2" fill="none" stroke="#4a0010" stroke-width="0.8" opacity="0.3" />
                        <!-- Siluet serigala melolong dari samping (menghadap kanan) -->
                        <!-- Tubuh -->
                        <path d="M 8 100 Q 10 85 20 80 Q 30 76 40 78 Q 55 82 65 75 Q 75 68 80 58 Q 85 50 82 42"
                            fill="#0d0005" stroke="none" />
                        <!-- Leher & kepala -->
                        <path d="M 82 42 Q 85 32 78 25 Q 72 18 65 22 Q 58 26 58 35 Q 58 42 65 46 Q 72 50 80 58"
                            fill="#0d0005" />
                        <!-- Moncong memanjang melolong ke atas -->
                        <path d="M 65 22 Q 70 14 72 6 Q 74 0 70 5 Q 66 10 62 18 Q 58 26 65 22 Z" fill="#0d0005" />
                        <!-- Telinga lancip -->
                        <polygon points="72,25 78,12 82,28" fill="#0d0005" />
                        <polygon points="72,25 76,14 78,26" fill="#2a0008" opacity="0.5" />
                        <!-- Kaki depan -->
                        <path d="M 40 78 L 36 95 L 32 110 L 36 112 L 40 98 L 44 112 L 48 112 L 44 96 L 46 80"
                            fill="#0d0005" />
                        <!-- Kaki belakang -->
                        <path d="M 14 95 L 10 110 L 14 112 L 18 98 L 22 112 L 26 110 L 20 95" fill="#0d0005" />
                        <!-- Ekor melengkung dramatis ke atas -->
                        <path d="M 8 100 Q 0 88 5 75 Q 10 62 18 68 Q 14 75 14 82 Q 14 92 8 100" fill="#0d0005" />
                        <!-- Mata menyala merah -->
                        <ellipse cx="70" cy="24" rx="3" ry="2" fill="#cc0020" />
                        <circle cx="69" cy="23" r="0.8" fill="#fff" opacity="0.7" />
                        <!-- Tetesan darah dari moncong -->
                        <path d="M 68 7 L 69 14 A 1.5 1.5 0 0 1 66 14 Z" fill="#8b0000" />
                        <circle cx="67" cy="15" r="1.2" fill="#8b0000" />
                        <!-- Bayangan di tanah -->
                        <ellipse cx="35" cy="112" rx="30" ry="4" fill="rgba(13,0,5,0.25)" />
                        <!-- Bintang kecil di langit -->
                        <circle cx="15" cy="20" r="1" fill="#4a0010" opacity="0.5" />
                        <circle cx="28" cy="12" r="0.8" fill="#4a0010" opacity="0.4" />
                        <circle cx="88" cy="18" r="1" fill="#4a0010" opacity="0.4" />
                        <circle cx="95" cy="30" r="0.7" fill="#4a0010" opacity="0.35" />
                    </svg>`;

niasyArt["lone_wolf"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Bulan sabit dingin di sudut kanan atas -->
                        <path d="M 82 8 A 16 16 0 1 1 82 38 A 10 10 0 1 0 82 8 Z" fill="#2a3540" opacity="0.85" />
                        <!-- Bintang-bintang redup -->
                        <circle cx="20" cy="12" r="1" fill="#2a3540" opacity="0.5" />
                        <circle cx="35" cy="8" r="0.7" fill="#2a3540" opacity="0.4" />
                        <circle cx="55" cy="6" r="1" fill="#2a3540" opacity="0.45" />
                        <circle cx="10" cy="28" r="0.8" fill="#2a3540" opacity="0.35" />
                        <circle cx="15" cy="45" r="0.6" fill="#2a3540" opacity="0.3" />
                        <!-- Siluet pegunungan / hutan di horizon (latar) -->
                        <polygon points="0,70 12,48 24,70" fill="#3d5060" opacity="0.3" />
                        <polygon points="10,70 25,40 40,70" fill="#2a3540" opacity="0.25" />
                        <polygon points="30,70 48,35 66,70" fill="#3d5060" opacity="0.3" />
                        <polygon points="55,70 72,42 90,70" fill="#2a3540" opacity="0.25" />
                        <!-- Permukaan salju / tanah -->
                        <path d="M 0 72 Q 25 68 50 72 Q 75 76 100 72 L 100 100 L 0 100 Z" fill="rgba(42,53,64,0.08)" />
                        <!-- Siluet serigala tunggal berdiri tegak menatap bulan (dari belakang) -->
                        <!-- Badan -->
                        <ellipse cx="50" cy="60" rx="12" ry="9" fill="#14202a" />
                        <!-- Kepala -->
                        <circle cx="50" cy="48" r="8" fill="#14202a" />
                        <!-- Telinga lancip kiri & kanan -->
                        <polygon points="44,42 40,32 48,40" fill="#14202a" />
                        <polygon points="56,42 60,32 52,40" fill="#14202a" />
                        <!-- Inner ear kiri -->
                        <polygon points="44,41 41,34 47,40" fill="#2a3540" opacity="0.4" />
                        <!-- Inner ear kanan -->
                        <polygon points="56,41 59,34 53,40" fill="#2a3540" opacity="0.4" />
                        <!-- Leher -->
                        <rect x="45" y="54" width="10" height="8" rx="3" fill="#14202a" />
                        <!-- Kaki depan kiri -->
                        <path d="M 41 68 L 39 82 L 37 92 L 41 92 L 43 82 L 45 68" fill="#14202a" />
                        <!-- Kaki depan kanan -->
                        <path d="M 55 68 L 57 82 L 59 92 L 63 92 L 61 82 L 59 68" fill="#14202a" />
                        <!-- Kaki belakang kiri (lebih tebal) -->
                        <path d="M 40 68 L 36 78 L 34 90 L 38 90 L 40 78" fill="#14202a" />
                        <!-- Kaki belakang kanan -->
                        <path d="M 60 68 L 64 78 L 66 90 L 62 90 L 60 78" fill="#14202a" />
                        <!-- Ekor terangkat bangga -->
                        <path d="M 62 66 Q 78 58 85 45 Q 88 38 84 35 Q 80 40 78 48 Q 72 58 62 64" fill="#14202a" />
                        <!-- Jejak cakar tunggal di salju (kiri bawah) — kesan sendirian -->
                        <g opacity="0.55" transform="translate(8, 78)">
                            <!-- Telapak cakar -->
                            <ellipse cx="8" cy="10" rx="5" ry="4" fill="#2a3540" />
                            <!-- 4 jari cakar -->
                            <ellipse cx="4" cy="5" rx="2.2" ry="1.8" fill="#2a3540" />
                            <ellipse cx="8" cy="3.5" rx="2.2" ry="1.8" fill="#2a3540" />
                            <ellipse cx="12" cy="4.5" rx="2.2" ry="1.8" fill="#2a3540" />
                            <ellipse cx="14.5" cy="8" rx="2" ry="1.8" fill="#2a3540" />
                        </g>
                        <!-- Bayangan serigala di salju -->
                        <ellipse cx="50" cy="93" rx="14" ry="3" fill="rgba(20,32,42,0.2)" />
                        <!-- Garis tanda terisolasi: X menyilang di sudut kiri bawah -->
                        <line x1="5" y1="88" x2="14" y2="97" stroke="#2a3540" stroke-width="1.5" opacity="0.35" />
                        <line x1="14" y1="88" x2="5" y2="97" stroke="#2a3540" stroke-width="1.5" opacity="0.35" />
                    </svg>`;

niasyArt["doppelganger"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Bingkai cermin elips besar -->
                        <ellipse cx="50" cy="50" rx="38" ry="44" fill="none" stroke="#2d0a5e" stroke-width="2.5" />
                        <ellipse cx="50" cy="50" rx="34" ry="40" fill="rgba(45,10,94,0.05)" />
                        <!-- Ornamen bingkai cermin atas & bawah -->
                        <path d="M 36 8 Q 50 2 64 8" fill="none" stroke="#2d0a5e" stroke-width="2" />
                        <circle cx="50" cy="5" r="3" fill="#2d0a5e" />
                        <path d="M 36 92 Q 50 98 64 92" fill="none" stroke="#2d0a5e" stroke-width="2" />
                        <circle cx="50" cy="95" r="3" fill="#2d0a5e" />
                        <!-- Garis tengah cermin (batas duplikat) -->
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#2d0a5e" stroke-width="1.5"
                            stroke-dasharray="3,3" />
                        <!-- Retakan cermin (diagonal dari tengah) -->
                        <path d="M 50 40 L 60 28 L 65 32 L 72 18" stroke="#5a2aaa" stroke-width="1" fill="none"
                            opacity="0.7" />
                        <path d="M 50 40 L 44 52 L 38 48 L 30 62" stroke="#5a2aaa" stroke-width="1" fill="none"
                            opacity="0.5" />
                        <path d="M 50 40 L 56 58 L 68 54" stroke="#5a2aaa" stroke-width="0.8" fill="none"
                            opacity="0.4" />
                        <!-- Siluet kiri (ASLI) - menghadap ke kanan -->
                        <!-- Kepala kiri -->
                        <circle cx="32" cy="38" r="9" fill="#1a0040" />
                        <!-- Badan kiri -->
                        <path d="M 24 52 Q 24 70 32 72 Q 40 70 40 52 L 38 47 L 26 47 Z" fill="#1a0040" />
                        <!-- Lengan kiri bawah - menunjuk ke cermin -->
                        <path d="M 40 55 L 48 52" stroke="#1a0040" stroke-width="3" stroke-linecap="round" />
                        <!-- Siluet kanan (DUPLIKAT) - menghadap ke kiri, sedikit berbeda (lebih pudar) -->
                        <!-- Kepala kanan -->
                        <circle cx="68" cy="38" r="9" fill="#2d0a5e" opacity="0.75" />
                        <!-- Badan kanan -->
                        <path d="M 60 52 Q 60 70 68 72 Q 76 70 76 52 L 74 47 L 62 47 Z" fill="#2d0a5e" opacity="0.75" />
                        <!-- Lengan kanan - menunjuk balik ke cermin -->
                        <path d="M 60 55 L 52 52" stroke="#2d0a5e" stroke-width="3" stroke-linecap="round"
                            opacity="0.75" />
                        <!-- Mata siluet kiri -->
                        <circle cx="29" cy="36" r="2" fill="#7a40cc" />
                        <circle cx="35" cy="36" r="2" fill="#7a40cc" />
                        <!-- Mata siluet kanan (duplikat — satu mata berbeda warna) -->
                        <circle cx="65" cy="36" r="2" fill="#7a40cc" opacity="0.7" />
                        <circle cx="71" cy="36" r="2" fill="#cc0050" opacity="0.8" />
                        <!-- Kilap cermin: pantulan cahaya putih diagonal -->
                        <path d="M 20 16 L 26 28" stroke="#fff" stroke-width="2" stroke-linecap="round"
                            opacity="0.35" />
                        <path d="M 22 20 L 26 24" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity="0.2" />
                        <!-- Bayangan di bawah -->
                        <ellipse cx="32" cy="74" rx="9" ry="2.5" fill="rgba(26,0,64,0.25)" />
                        <ellipse cx="68" cy="74" rx="9" ry="2.5" fill="rgba(45,10,94,0.15)" />
                        <!-- Tanda tanya di atas kepala duplikat -->
                        <text x="70" y="27" font-size="8" fill="#2d0a5e" font-family="serif" opacity="0.65">?</text>
                    </svg>`;

niasyArt["serial_killer"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Tembok batu kasar di latar (tekstur kotak-kotak) -->
                        <rect x="0" y="0" width="100" height="100" fill="rgba(92,0,0,0.04)" />
                        <line x1="0" y1="25" x2="100" y2="25" stroke="#5c0000" stroke-width="0.4" opacity="0.2" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#5c0000" stroke-width="0.4" opacity="0.2" />
                        <line x1="0" y1="75" x2="100" y2="75" stroke="#5c0000" stroke-width="0.4" opacity="0.2" />
                        <!-- Tally marks korban: 4 garis tegak + 1 coret diagonal (kelipatan 5) -->
                        <!-- Grup 1 -->
                        <line x1="10" y1="18" x2="10" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="16" y1="18" x2="16" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="22" y1="18" x2="22" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="28" y1="18" x2="28" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="7" y1="34" x2="32" y2="16" stroke="#8a0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <!-- Grup 2 -->
                        <line x1="38" y1="18" x2="38" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="44" y1="18" x2="44" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="50" y1="18" x2="50" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="56" y1="18" x2="56" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="35" y1="34" x2="60" y2="16" stroke="#8a0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <!-- Grup 3 (belum selesai — 2 garis) -->
                        <line x1="66" y1="18" x2="66" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="72" y1="18" x2="72" y2="34" stroke="#5c0000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <!-- Pisau besar diagonal di tengah kartu -->
                        <!-- Bilah pisau -->
                        <path d="M 30 80 L 72 38 L 78 44 L 36 86 Z" fill="#1a0000" />
                        <!-- Tepi tajam bilah (highlight) -->
                        <line x1="72" y1="38" x2="30" y2="80" stroke="#666" stroke-width="0.8" opacity="0.5" />
                        <!-- Punggung bilah -->
                        <line x1="78" y1="44" x2="36" y2="86" stroke="#2a0000" stroke-width="1" />
                        <!-- Gagang pisau -->
                        <rect x="22" y="80" width="18" height="12" rx="3" fill="#5c0000"
                            transform="rotate(-45 31 86)" />
                        <!-- Guard / pelindung gagang -->
                        <rect x="28" y="76" width="6" height="14" rx="1" fill="#2a0000" transform="rotate(-45 31 83)" />
                        <!-- Darah menetes dari ujung pisau -->
                        <path d="M 72 38 L 76 30 A 3 3 0 0 1 70 30 Z" fill="#8a0000" />
                        <path d="M 74 34 L 77 25 A 2.5 2.5 0 0 1 71 25 Z" fill="#5c0000" opacity="0.7" />
                        <!-- Genangan darah di pojok kanan bawah -->
                        <ellipse cx="82" cy="88" rx="12" ry="7" fill="#8a0000" opacity="0.35" />
                        <ellipse cx="80" cy="90" rx="7" ry="4" fill="#5c0000" opacity="0.4" />
                        <!-- Percikan darah kecil -->
                        <circle cx="88" cy="78" r="1.5" fill="#8a0000" opacity="0.6" />
                        <circle cx="92" cy="82" r="1" fill="#8a0000" opacity="0.5" />
                        <circle cx="84" cy="76" r="1" fill="#5c0000" opacity="0.5" />
                        <!-- Sidik jari samar di sudut kiri bawah (abstrak) -->
                        <ellipse cx="12" cy="85" rx="8" ry="10" fill="none" stroke="#5c0000" stroke-width="0.6"
                            opacity="0.2" />
                        <ellipse cx="12" cy="85" rx="5" ry="7" fill="none" stroke="#5c0000" stroke-width="0.6"
                            opacity="0.15" />
                        <ellipse cx="12" cy="85" rx="2" ry="4" fill="none" stroke="#5c0000" stroke-width="0.6"
                            opacity="0.1" />
                    </svg>`;

niasyArt["village_idiot"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Wajah bulat besar (ekspresi polos-goblok) -->
                        <circle cx="50" cy="46" r="32" fill="#fff" stroke="#b86000" stroke-width="2.5" />
                        <!-- Pipi kemerahan -->
                        <circle cx="32" cy="52" r="7" fill="#ffaaaa" opacity="0.5" />
                        <circle cx="68" cy="52" r="7" fill="#ffaaaa" opacity="0.5" />
                        <!-- Mata bulat besar (polos) -->
                        <circle cx="38" cy="40" r="7" fill="#fff" stroke="#b86000" stroke-width="2" />
                        <circle cx="62" cy="40" r="7" fill="#fff" stroke="#b86000" stroke-width="2" />
                        <circle cx="40" cy="41" r="4" fill="#1a0e00" />
                        <circle cx="64" cy="41" r="4" fill="#1a0e00" />
                        <!-- Sorotan mata (lucu) -->
                        <circle cx="41" cy="39" r="1.5" fill="#fff" />
                        <circle cx="65" cy="39" r="1.5" fill="#fff" />
                        <!-- Alis tebal miring (bingung) -->
                        <path d="M 32 31 Q 38 27 44 32" fill="none" stroke="#6a3800" stroke-width="3"
                            stroke-linecap="round" />
                        <path d="M 56 32 Q 62 27 68 31" fill="none" stroke="#6a3800" stroke-width="3"
                            stroke-linecap="round" />
                        <!-- Senyum lebar bodoh (U besar) -->
                        <path d="M 32 57 Q 50 76 68 57" fill="none" stroke="#b86000" stroke-width="3.5"
                            stroke-linecap="round" />
                        <!-- Lidah menjulur -->
                        <ellipse cx="50" cy="68" rx="7" ry="5" fill="#ff8080" />
                        <line x1="47" y1="68" x2="47" y2="73" stroke="#d46060" stroke-width="1" opacity="0.5" />
                        <!-- Mahkota TERBALIK di bawah wajah (simbol kebalikan nasib) -->
                        <path d="M 22 88 L 78 88 L 78 80 L 68 90 L 58 80 L 50 90 L 42 80 L 32 90 L 22 80 Z"
                            fill="#b86000" />
                        <rect x="22" y="85" width="56" height="5" rx="2" fill="#d47800" />
                        <!-- Permata mahkota terbalik -->
                        <circle cx="50" cy="88" r="3" fill="#ffe8b0" stroke="#6a3800" stroke-width="1" />
                        <circle cx="35" cy="87" r="2" fill="#ffe8b0" stroke="#6a3800" stroke-width="0.8" />
                        <circle cx="65" cy="87" r="2" fill="#ffe8b0" stroke="#6a3800" stroke-width="0.8" />
                        <!-- Tanda X melingkar (kebal eksekusi) di sudut kanan atas -->
                        <circle cx="82" cy="16" r="10" fill="none" stroke="#b86000" stroke-width="2" />
                        <line x1="77" y1="11" x2="87" y2="21" stroke="#b86000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <line x1="87" y1="11" x2="77" y2="21" stroke="#b86000" stroke-width="2.5"
                            stroke-linecap="round" />
                        <!-- Bintang-bintang kecil melayang (efek "keberuntungan bodoh") -->
                        <path d="M 15 20 L 16 24 L 20 25 L 16 26 L 15 30 L 14 26 L 10 25 L 14 24 Z" fill="#d47800"
                            opacity="0.6" />
                        <path d="M 82 36 L 83 39 L 86 40 L 83 41 L 82 44 L 81 41 L 78 40 L 81 39 Z" fill="#d47800"
                            opacity="0.5" />
                    </svg>`;

niasyArt["prince"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Aura kerajaan: lingkaran cahaya redup -->
                        <circle cx="50" cy="42" r="35" fill="rgba(10,42,122,0.06)" />
                        <!-- Mahkota megah besar di atas -->
                        <rect x="24" y="38" width="52" height="10" rx="3" fill="#0a2a7a" />
                        <!-- Gigi mahkota: 5 puncak -->
                        <polygon points="24,38 28,22 32,38" fill="#0a2a7a" />
                        <polygon points="35,38 39,14 43,38" fill="#0a2a7a" />
                        <polygon points="47,38 50,10 53,38" fill="#0a2a7a" />
                        <polygon points="57,38 61,14 65,38" fill="#0a2a7a" />
                        <polygon points="68,38 72,22 76,38" fill="#0a2a7a" />
                        <!-- Band emas mahkota -->
                        <rect x="24" y="42" width="52" height="4" rx="1" fill="#d4af37" />
                        <!-- Permata mahkota: tengah merah, kiri-kanan biru -->
                        <ellipse cx="50" cy="44" rx="5" ry="3.5" fill="#cc1010" stroke="#0a2a7a" stroke-width="0.8" />
                        <ellipse cx="35" cy="44" rx="3.5" ry="2.5" fill="#1a6acc" stroke="#0a2a7a" stroke-width="0.8" />
                        <ellipse cx="65" cy="44" rx="3.5" ry="2.5" fill="#1a6acc" stroke="#0a2a7a" stroke-width="0.8" />
                        <!-- Kilap permata -->
                        <circle cx="49" cy="43" r="1" fill="#fff" opacity="0.6" />
                        <!-- Jubah kerajaan (V-shape, lebar ke bawah) -->
                        <path d="M 30 50 L 22 95 L 50 85 L 78 95 L 70 50 Z" fill="rgba(10,42,122,0.12)" stroke="#0a2a7a"
                            stroke-width="1.5" />
                        <!-- Kerah jubah (ornamented collar) -->
                        <path d="M 30 50 Q 50 62 70 50 L 68 56 Q 50 68 32 56 Z" fill="#0a2a7a" opacity="0.8" />
                        <!-- Detail jubah: garis emas vertikal -->
                        <line x1="50" y1="60" x2="50" y2="90" stroke="#d4af37" stroke-width="1.5" opacity="0.7" />
                        <!-- Bandul / Medali raja di dada -->
                        <circle cx="50" cy="72" r="7" fill="none" stroke="#d4af37" stroke-width="2" />
                        <circle cx="50" cy="72" r="4.5" fill="#d4af37" opacity="0.3" />
                        <polygon points="50,67 51.5,71 56,71 52.5,73.5 53.8,78 50,75.5 46.2,78 47.5,73.5 44,71 48.5,71"
                            fill="#d4af37" />
                        <!-- Epaulet bahu kiri & kanan -->
                        <ellipse cx="24" cy="53" rx="7" ry="4" fill="#0a2a7a" />
                        <line x1="18" y1="53" x2="30" y2="53" stroke="#d4af37" stroke-width="1" opacity="0.8" />
                        <ellipse cx="76" cy="53" rx="7" ry="4" fill="#0a2a7a" />
                        <line x1="70" y1="53" x2="82" y2="53" stroke="#d4af37" stroke-width="1" opacity="0.8" />
                        <!-- Segel mahkota di pojok kanan atas -->
                        <circle cx="82" cy="18" r="10" fill="#0a2a7a" opacity="0.9" />
                        <path
                            d="M 78 18 L 79.5 22 L 84 22 L 80.5 24.5 L 82 28.5 L 78 26 L 74 28.5 L 75.5 24.5 L 72 22 L 76.5 22 Z"
                            fill="#d4af37" transform="scale(0.7) translate(47 8)" />
                        <text x="76" y="23" font-size="6" fill="#d4af37" font-family="serif" font-weight="bold">P</text>
                    </svg>`;

niasyArt["little_girl"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Latar gelap (malam / koridor gelap) -->
                        <rect x="0" y="0" width="100" height="100" fill="rgba(26,0,16,0.06)" />
                        <!-- Pintu besar (hampir menutupi seluruh kartu) -->
                        <rect x="10" y="5" width="80" height="90" rx="4" fill="#2a1a20" opacity="0.85" />
                        <!-- Bingkai pintu -->
                        <rect x="10" y="5" width="80" height="90" rx="4" fill="none" stroke="#4a0028"
                            stroke-width="3" />
                        <!-- Panel pintu atas -->
                        <rect x="18" y="12" width="64" height="30" rx="2" fill="none" stroke="#3a1020"
                            stroke-width="1.5" opacity="0.6" />
                        <!-- Panel pintu bawah -->
                        <rect x="18" y="48" width="64" height="40" rx="2" fill="none" stroke="#3a1020"
                            stroke-width="1.5" opacity="0.6" />
                        <!-- Gagang pintu -->
                        <circle cx="78" cy="50" r="4" fill="#8a0050" stroke="#4a0028" stroke-width="1.5" />
                        <line x1="78" y1="54" x2="78" y2="62" stroke="#4a0028" stroke-width="2"
                            stroke-linecap="round" />
                        <!-- CELAH PINTU terbuka sedikit dari kiri -->
                        <rect x="10" y="5" width="22" height="90" rx="4" fill="#fff5fa" opacity="0.95" />
                        <!-- Cahaya dari celah: gradient terang ke kanan -->
                        <rect x="28" y="5" width="8" height="90" fill="rgba(255,245,250,0.4)" />
                        <rect x="32" y="5" width="5" height="90" fill="rgba(255,245,250,0.15)" />
                        <!-- MATA mengintip di celah pintu — sepasang mata besar -->
                        <!-- Putih mata kiri -->
                        <ellipse cx="24" cy="44" rx="9" ry="6" fill="#fff" stroke="#8a0050" stroke-width="1.5" />
                        <!-- Pupil (melirik ke kanan — mengintip) -->
                        <circle cx="27" cy="44" r="4" fill="#1a0010" />
                        <circle cx="28" cy="43" r="1.5" fill="#fff" opacity="0.8" />
                        <!-- Bulu mata atas -->
                        <line x1="17" y1="39" x2="15" y2="36" stroke="#1a0010" stroke-width="1.2"
                            stroke-linecap="round" />
                        <line x1="21" y1="38" x2="20" y2="35" stroke="#1a0010" stroke-width="1.2"
                            stroke-linecap="round" />
                        <line x1="25" y1="38" x2="25" y2="35" stroke="#1a0010" stroke-width="1.2"
                            stroke-linecap="round" />
                        <line x1="29" y1="39" x2="30" y2="36" stroke="#1a0010" stroke-width="1.2"
                            stroke-linecap="round" />
                        <!-- Hidung kecil di celah -->
                        <ellipse cx="23" cy="52" rx="3" ry="2" fill="#ffaacc" opacity="0.7" />
                        <!-- Rambut ikal mengintip dari atas celah -->
                        <path d="M 10 12 Q 16 8 22 14 Q 18 10 24 16" fill="none" stroke="#5a2a10" stroke-width="3"
                            stroke-linecap="round" />
                        <path d="M 14 10 Q 20 5 26 12" fill="none" stroke="#5a2a10" stroke-width="3"
                            stroke-linecap="round" />
                        <!-- Tangan kecil memegang tepian pintu -->
                        <path d="M 32 60 Q 30 58 28 62 Q 26 66 28 68 Q 30 70 32 68" fill="none" stroke="#ffccdd"
                            stroke-width="3" stroke-linecap="round" />
                        <!-- Jari-jari kecil -->
                        <line x1="30" y1="58" x2="28" y2="55" stroke="#ffccdd" stroke-width="2"
                            stroke-linecap="round" />
                        <line x1="32" y1="57" x2="31" y2="54" stroke="#ffccdd" stroke-width="2"
                            stroke-linecap="round" />
                        <line x1="34" y1="58" x2="34" y2="55" stroke="#ffccdd" stroke-width="2"
                            stroke-linecap="round" />
                        <!-- Boneka kelinci kecil yang dibawa (di samping tangan) -->
                        <!-- Kepala boneka -->
                        <circle cx="20" cy="76" r="7" fill="#ffd6ec" stroke="#8a0050" stroke-width="1.2" />
                        <!-- Telinga kelinci (panjang) -->
                        <ellipse cx="16" cy="67" rx="2.5" ry="6" fill="#ffd6ec" stroke="#8a0050" stroke-width="1" />
                        <ellipse cx="24" cy="67" rx="2.5" ry="6" fill="#ffd6ec" stroke="#8a0050" stroke-width="1" />
                        <!-- Inner telinga pink -->
                        <ellipse cx="16" cy="67" rx="1.2" ry="4" fill="#ffaacc" opacity="0.6" />
                        <ellipse cx="24" cy="67" rx="1.2" ry="4" fill="#ffaacc" opacity="0.6" />
                        <!-- Mata boneka (X) -->
                        <line x1="17" y1="75" x2="19" y2="77" stroke="#8a0050" stroke-width="1.2" />
                        <line x1="19" y1="75" x2="17" y2="77" stroke="#8a0050" stroke-width="1.2" />
                        <line x1="22" y1="75" x2="24" y2="77" stroke="#8a0050" stroke-width="1.2" />
                        <line x1="24" y1="75" x2="22" y2="77" stroke="#8a0050" stroke-width="1.2" />
                        <!-- Badan boneka -->
                        <ellipse cx="20" cy="87" rx="6" ry="5" fill="#ffd6ec" stroke="#8a0050" stroke-width="1" />
                    </svg>`;

niasyArt["villager_2"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Cahaya lentera redup di tengah -->
                        <circle cx="50" cy="50" r="35" fill="rgba(255,200,100,0.1)" />
                        <circle cx="50" cy="50" r="20" fill="rgba(255,200,100,0.15)" />

                        <!-- Bilah Sabit Besar (Sickle) -->
                        <path d="M 30 20 Q 80 5 90 40 Q 95 60 75 70 Q 85 50 75 35 Q 65 20 40 30 Z" fill="#1a300e"
                            stroke="#2b4a1b" stroke-width="1.5" />

                        <!-- Gagang Kayu Sabit -->
                        <rect x="25" y="18" width="8" height="40" rx="3" fill="#2a1608" transform="rotate(-20 29 38)" />

                        <!-- Tetesan Darah di Sabit -->
                        <path d="M 88 45 Q 88 52 86 55 Q 89 50 88 45 Z" fill="#8b0000" />
                        <circle cx="86" cy="58" r="1.5" fill="#8b0000" />
                        <circle cx="84" cy="62" r="1" fill="#8a0000" />

                        <!-- Lentera Besi Tua Kecil -->
                        <rect x="42" y="60" width="16" height="20" rx="2" fill="none" stroke="#2b4a1b"
                            stroke-width="2.5" />
                        <polygon points="40,60 50,52 60,60" fill="#2b4a1b" />
                        <rect x="46" y="62" width="8" height="14" rx="1" fill="rgba(255,200,100,0.4)" />
                        <!-- Nyala Api Kecil -->
                        <path d="M 50 64 Q 48 70 50 74 Q 52 70 50 64 Z" fill="#ffaa00" />
                        <!-- Handle Lentera -->
                        <path d="M 45 52 Q 50 45 55 52" fill="none" stroke="#1a300e" stroke-width="1.5" />
                        <!-- Tali gantungan samar di latar belakang -->
                        <line x1="20" y1="0" x2="20" y2="40" stroke="#111" stroke-width="2" opacity="0.4" />
                        <circle cx="20" cy="45" r="5" fill="none" stroke="#111" stroke-width="2" opacity="0.4" />
                    </svg>`;

niasyArt["villager_3"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Siluet massa marah di latar (banyak tombak/obor angkat) -->
                        <path d="M 10 90 L 15 65 L 18 90 Z" fill="#4a1500" opacity="0.3" />
                        <circle cx="15" cy="62" r="3" fill="#e64500" opacity="0.4" />
                        <path d="M 85 90 L 90 70 L 92 90 Z" fill="#4a1500" opacity="0.3" />
                        <circle cx="90" cy="67" r="2.5" fill="#e64500" opacity="0.4" />
                        <path d="M 25 90 L 30 75 L 35 90 Z" fill="#4a1500" opacity="0.2" />
                        <path d="M 75 90 L 70 80 L 65 90 Z" fill="#4a1500" opacity="0.2" />

                        <!-- Gagang Garpu Rumput (kiri bawah ke kanan atas) -->
                        <line x1="20" y1="85" x2="70" y2="30" stroke="#3a1a05" stroke-width="6"
                            stroke-linecap="round" />
                        <!-- Ujung Garpu Rumput -->
                        <path d="M 68 32 L 80 18 M 65 28 L 74 15 M 72 35 L 85 24 M 64 34 L 88 16" fill="none"
                            stroke="#2a1000" stroke-width="2.5" stroke-linecap="round" />
                        <path d="M 62 38 Q 70 30 78 36" fill="none" stroke="#2a1000" stroke-width="4" />

                        <!-- Gagang Obor Api (kanan bawah ke kiri atas) -->
                        <line x1="80" y1="85" x2="30" y2="30" stroke="#4a1500" stroke-width="7"
                            stroke-linecap="round" />
                        <!-- Kain/lilitan obor -->
                        <path d="M 28 26 L 36 34 L 32 38 L 24 30 Z" fill="#2a1000" />
                        <line x1="26" y1="28" x2="34" y2="36" stroke="#fffaf5" stroke-width="0.8" opacity="0.5" />
                        <line x1="29" y1="31" x2="33" y2="39" stroke="#fffaf5" stroke-width="0.8" opacity="0.5" />

                        <!-- Nyala Api Besar -->
                        <path d="M 30 28 C 15 15 25 -5 40 5 C 35 15 45 10 30 28 Z" fill="#e64500" />
                        <path d="M 32 30 C 22 20 30 10 38 18 C 36 22 40 20 32 30 Z" fill="#ffaa00" />
                        <path d="M 30 26 C 25 20 28 15 32 20 C 31 22 34 21 30 26 Z" fill="#fff" />

                        <!-- Percikan Bunga Api (Sparks) -->
                        <circle cx="20" cy="15" r="1.5" fill="#ffaa00" />
                        <circle cx="45" cy="8" r="1.2" fill="#e64500" />
                        <circle cx="35" cy="-2" r="1.5" fill="#ffaa00" />
                        <circle cx="15" cy="25" r="1" fill="#e64500" />
                        <circle cx="50" cy="22" r="1" fill="#e64500" />

                        <!-- Bayangan api bersinar -->
                        <circle cx="35" cy="20" r="25" fill="rgba(230,69,0,0.15)" />
                        <!-- Asap tipis -->
                        <path d="M 40 5 Q 45 -5 35 -10" fill="none" stroke="#1a0800" stroke-width="3" opacity="0.1" />
                    </svg>`;

niasyArt["card_back"] = `<svg viewBox="0 0 100 100" width="100%" height="100%">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" stroke-width="1.5" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8c6a21" stroke-width="1.5"
                            stroke-dasharray="2,3" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" stroke-width="1" />

                        <!-- Geometri Bintang -->
                        <polygon points="50,15 80,65 20,65" fill="none" stroke="#d4af37" stroke-width="1" />
                        <polygon points="50,85 20,35 80,35" fill="none" stroke="#d4af37" stroke-width="1" />

                        <!-- Prisma Hexagonal & Portal Misterius Tengah -->
                        <polygon points="50,28 69,39 69,61 50,72 31,61 31,39" fill="#1a1a1a" stroke="#d4af37" stroke-width="2" />
                        <polygon points="50,33 64,41 64,59 50,67 36,59 36,41" fill="none" stroke="#8c6a21" stroke-width="1" />
                        
                        <!-- Geometri Serigala (Wolf Geometric Icon) di pusat -->
                        <path d="M 50 38 L 56 46 L 56 56 L 50 62 L 44 56 L 44 46 Z" fill="none" stroke="#d4af37" stroke-width="1.5" />
                        <polygon points="44,46 50,56 56,46" fill="#d4af37" />
                        <polygon points="47,56 50,62 53,56" fill="#d4af37" />
                        <!-- Telinga Geometris Kiri & Kanan -->
                        <polygon points="41,39 44,46 47,42" fill="#d4af37" />
                        <polygon points="59,39 56,46 53,42" fill="#d4af37" />

                        <!-- Aksen Bulan Sabit -->
                        <path d="M 45 10 A 40 40 0 0 0 55 10 A 35 35 0 0 1 45 10 Z" fill="#d4af37" />
                        <path d="M 45 90 A 40 40 0 0 1 55 90 A 35 35 0 0 0 45 90 Z" fill="#d4af37" />
                    </svg>`;

