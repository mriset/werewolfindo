const tacdosArt = {};

tacdosArt["moderator"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Latar Segel Resmi -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.35"/>
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#0A2342" stroke-width="0.5" stroke-dasharray="2,3"/>

                    <!-- Bintang Segel 8-titik -->
                    <polygon points="50,8 54,38 62,12 60,42 74,20 65,46 84,32 68,52 90,48 72,60 92,65 72,68 88,80 66,74 74,90 57,77 55,95 50,78 45,95 43,77 26,90 34,74 12,80 28,68 8,65 28,60 10,48 32,52 16,32 35,46 26,20 40,42 38,12 46,38" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.25"/>

                    <!-- Palu Hakim (Gavel) - Gagang -->
                    <rect x="48" y="35" width="5" height="42" rx="2" fill="#0A2342" transform="rotate(40 50 56)"/>

                    <!-- Palu Hakim - Kepala Palu -->
                    <rect x="28" y="28" width="30" height="12" rx="3" fill="#0A2342" stroke="#C9A84C" stroke-width="2" transform="rotate(40 43 34)"/>

                    <!-- Tanda Hati / Cap Hakim di Tengah Gavel -->
                    <rect x="31" y="30" width="24" height="8" rx="1.5" fill="#C9A84C" opacity="0.7" transform="rotate(40 43 34)"/>

                    <!-- Landasan Palu (Block) -->
                    <rect x="35" y="76" width="30" height="8" rx="2" fill="#0A2342" stroke="#C9A84C" stroke-width="1.5"/>
                    <rect x="38" y="79" width="24" height="2" rx="1" fill="#C9A84C" opacity="0.5"/>

                    <!-- Mahkota Wewenang di Atas -->
                    <path d="M 35 22 L 38 12 L 43 20 L 50 10 L 57 20 L 62 12 L 65 22 Z" fill="#C9A84C" stroke="#0A2342" stroke-width="1.2"/>
                    <circle cx="38" cy="12" r="2" fill="#C9A84C"/>
                    <circle cx="50" cy="10" r="2" fill="#C9A84C"/>
                    <circle cx="62" cy="12" r="2" fill="#C9A84C"/>
                </svg>`;


tacdosArt["hunter"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Target Radar -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#27AE60" stroke-width="1.5"
                        stroke-dasharray="3,3" opacity="0.5" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="#27AE60" stroke-width="1" opacity="0.3" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#27AE60" stroke-width="1" opacity="0.5" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#27AE60" stroke-width="1" opacity="0.5" />

                    <!-- Crossbow Tactical -->
                    <rect x="46" y="15" width="8" height="75" rx="2" fill="#1E272E" />
                    <!-- Busur -->
                    <path d="M 15 45 C 15 25 35 20 50 20 C 65 20 85 25 85 45" fill="none" stroke="#27AE60"
                        stroke-width="5" stroke-linecap="round" />
                    <!-- Tali Busur -->
                    <line x1="15" y1="45" x2="50" y2="35" stroke="#1E272E" stroke-width="2" />
                    <line x1="85" y1="45" x2="50" y2="35" stroke="#1E272E" stroke-width="2" />
                    <!-- Anak Panah Emas -->
                    <line x1="50" y1="5" x2="50" y2="45" stroke="#F1C40F" stroke-width="3" stroke-linecap="round" />
                    <polygon points="50,0 45,10 55,10" fill="#F1C40F" />
                    <!-- Scope/Kekeran -->
                    <circle cx="50" cy="65" r="8" fill="#1E272E" stroke="#27AE60" stroke-width="2" />
                    <circle cx="50" cy="65" r="3" fill="#F1C40F" />
                </svg>`;

tacdosArt["seer"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Ornamen Mistis -->
                    <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#8E44AD" stroke-width="2"
                        opacity="0.3" />
                    <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#3B1C54" stroke-width="2" />

                    <!-- Mata Ilahi -->
                    <path d="M 20 50 Q 50 20 80 50 Q 50 80 20 50 Z" fill="#fff" stroke="#8E44AD" stroke-width="3" />
                    <circle cx="50" cy="50" r="14" fill="#3B1C54" />
                    <circle cx="50" cy="50" r="10" fill="#F39C12" />
                    <circle cx="50" cy="50" r="4" fill="#111" />
                    <circle cx="53" cy="47" r="2" fill="#fff" />

                    <!-- Air Mata Cahaya -->
                    <path d="M 50 64 L 54 75 L 50 85 L 46 75 Z" fill="#F39C12" />

                    <!-- Konstelasi Bintang -->
                    <circle cx="20" cy="20" r="2" fill="#8E44AD" />
                    <circle cx="80" cy="20" r="2" fill="#8E44AD" />
                    <circle cx="20" cy="80" r="2" fill="#8E44AD" />
                    <circle cx="80" cy="80" r="2" fill="#8E44AD" />
                </svg>`;

tacdosArt["werewolf"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Bulan Sabit Darah Merah -->
                    <circle cx="55" cy="45" r="35" fill="none" stroke="#C0392B" stroke-width="2" opacity="0.3" />
                    <path d="M 75 25 A 30 30 0 1 0 75 85 A 25 25 0 1 1 75 25 Z" fill="#1A0505" />

                    <!-- Cakaran Brutal -->
                    <path d="M 80 10 Q 50 40 30 90" fill="none" stroke="#C0392B" stroke-width="8"
                        stroke-linecap="round" />
                    <path d="M 80 10 Q 50 40 30 90" fill="none" stroke="#FF5252" stroke-width="3"
                        stroke-linecap="round" />

                    <path d="M 95 30 Q 70 60 50 100" fill="none" stroke="#1A0505" stroke-width="9"
                        stroke-linecap="round" />
                    <path d="M 95 30 Q 70 60 50 100" fill="none" stroke="#C0392B" stroke-width="4"
                        stroke-linecap="round" />

                    <path d="M 65 -5 Q 35 25 10 75" fill="none" stroke="#1A0505" stroke-width="6"
                        stroke-linecap="round" />
                    <path d="M 65 -5 Q 35 25 10 75" fill="none" stroke="#C0392B" stroke-width="2"
                        stroke-linecap="round" />

                    <!-- Tetesan Darah -->
                    <circle cx="35" cy="85" r="3" fill="#C0392B" />
                    <path d="M 35 85 L 37 95 A 2 2 0 0 1 33 95 Z" fill="#C0392B" />
                </svg>`;

tacdosArt["jester"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Lingkaran Hipnotis Spiral -->
                    <path d="M 50 50 m 0 -40 a 40 40 0 1 1 -1 0" fill="none" stroke="#004D40" stroke-width="2"
                        stroke-dasharray="6,4" opacity="0.3" />
                    <path d="M 50 50 m 0 -25 a 25 25 0 1 1 -1 0" fill="none" stroke="#D81B60" stroke-width="2"
                        stroke-dasharray="4,4" opacity="0.5" />

                    <!-- Topeng Theater Psikopat -->
                    <path d="M 25 35 Q 50 90 75 35 Q 50 15 25 35 Z" fill="#fff" stroke="#004D40" stroke-width="3" />

                    <!-- Belah Tengah -->
                    <line x1="50" y1="26" x2="50" y2="62" stroke="#004D40" stroke-width="2" stroke-dasharray="3,2" />

                    <!-- Mata Silang (Kiri) -->
                    <line x1="32" y1="40" x2="42" y2="50" stroke="#D81B60" stroke-width="3" stroke-linecap="round" />
                    <line x1="42" y1="40" x2="32" y2="50" stroke="#D81B60" stroke-width="3" stroke-linecap="round" />

                    <!-- Mata Meringis (Kanan) -->
                    <path d="M 58 45 Q 65 38 72 45" fill="none" stroke="#004D40" stroke-width="3"
                        stroke-linecap="round" />

                    <!-- Senyum Dijahit -->
                    <path d="M 35 60 Q 50 75 65 55" fill="none" stroke="#D81B60" stroke-width="3" />
                    <line x1="40" y1="60" x2="42" y2="66" stroke="#004D40" stroke-width="2" />
                    <line x1="50" y1="64" x2="52" y2="70" stroke="#004D40" stroke-width="2" />
                    <line x1="60" y1="59" x2="62" y2="64" stroke="#004D40" stroke-width="2" />

                    <!-- Lonceng Topi -->
                    <circle cx="20" cy="20" r="6" fill="#1DE9B6" stroke="#004D40" stroke-width="2" />
                    <circle cx="80" cy="20" r="6" fill="#D81B60" stroke="#004D40" stroke-width="2" />
                </svg>`;

tacdosArt["guardian"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Aura Pertahanan -->
                    <polygon points="50,5 90,50 50,95 10,50" fill="#E3F2FD" stroke="#90CAF9" stroke-width="1" />

                    <!-- Sayap Baja di Belakang -->
                    <path d="M 40 40 L 5 25 L 20 45 L 0 55 L 25 65 L 10 80 L 40 70 Z" fill="#90CAF9" stroke="#0D47A1"
                        stroke-width="1.5" />
                    <path d="M 60 40 L 95 25 L 80 45 L 100 55 L 75 65 L 90 80 L 60 70 Z" fill="#90CAF9" stroke="#0D47A1"
                        stroke-width="1.5" />

                    <!-- Perisai Tower / Tameng -->
                    <path d="M 30 15 L 70 15 L 75 45 C 75 75 50 95 50 95 C 50 95 25 75 25 45 Z" fill="#1976D2"
                        stroke="#0D47A1" stroke-width="3" stroke-linejoin="round" />

                    <!-- Lapisan Dalam Perisai -->
                    <path d="M 35 22 L 65 22 L 68 45 C 68 68 50 84 50 84 C 50 84 32 68 32 45 Z" fill="#fff" />

                    <!-- Logo Banteng / Ornamen di Tengah Perisai -->
                    <path d="M 40 35 L 60 35 L 50 65 Z" fill="#0D47A1" />
                    <line x1="50" y1="22" x2="50" y2="84" stroke="#0D47A1" stroke-width="2" />
                    <circle cx="50" cy="45" r="5" fill="#1976D2" stroke="#0D47A1" stroke-width="2" />
                </svg>`;

tacdosArt["alpha_wolf"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Aura Merah Gelap -->
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#8B0000" stroke-width="3" opacity="0.18"/>
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#8B0000" stroke-width="1" stroke-dasharray="1,4" opacity="0.4"/>

                    <!-- Tiga Cakaran Alpha (lebih dalam & lebar dari werewolf) -->
                    <path d="M 22 5 Q 45 48 28 100" fill="none" stroke="#1C0000" stroke-width="10" stroke-linecap="round"/>
                    <path d="M 22 5 Q 45 48 28 100" fill="none" stroke="#8B0000" stroke-width="5" stroke-linecap="round"/>

                    <path d="M 50 0 Q 55 50 50 100" fill="none" stroke="#1C0000" stroke-width="10" stroke-linecap="round"/>
                    <path d="M 50 0 Q 55 50 50 100" fill="none" stroke="#FF2D2D" stroke-width="4" stroke-linecap="round"/>

                    <path d="M 78 5 Q 55 48 72 100" fill="none" stroke="#1C0000" stroke-width="10" stroke-linecap="round"/>
                    <path d="M 78 5 Q 55 48 72 100" fill="none" stroke="#8B0000" stroke-width="5" stroke-linecap="round"/>

                    <!-- Tengkorak Serigala + Mahkota Alpha -->
                    <!-- Kepala Tengkorak -->
                    <ellipse cx="50" cy="45" rx="18" ry="16" fill="#1C0000" stroke="#8B0000" stroke-width="2.5"/>
                    <!-- Telinga runcing -->
                    <polygon points="32,32 28,15 40,30" fill="#1C0000" stroke="#8B0000" stroke-width="2"/>
                    <polygon points="68,32 72,15 60,30" fill="#1C0000" stroke="#8B0000" stroke-width="2"/>
                    <!-- Mata membara -->
                    <ellipse cx="42" cy="43" rx="5" ry="4" fill="#FF2D2D" opacity="0.9"/>
                    <ellipse cx="58" cy="43" rx="5" ry="4" fill="#FF2D2D" opacity="0.9"/>
                    <ellipse cx="42" cy="43" rx="2" ry="2" fill="#1C0000"/>
                    <ellipse cx="58" cy="43" rx="2" ry="2" fill="#1C0000"/>
                    <!-- Moncong -->
                    <path d="M 42 53 Q 50 60 58 53" fill="none" stroke="#8B0000" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Gigi taring -->
                    <polygon points="46,57 44,66 48,57" fill="#FF2D2D"/>
                    <polygon points="54,57 56,66 52,57" fill="#FF2D2D"/>

                    <!-- Mahkota Taring Alpha -->
                    <path d="M 32 32 L 28 15 L 35 26 L 40 10 L 50 28 L 60 10 L 65 26 L 72 15 L 68 32" fill="none" stroke="#8B0000" stroke-width="2.5" stroke-linejoin="round"/>
                </svg>`;

/* ─── CUPID ─── deep rose + gold, linked hearts pierced by arrow */
tacdosArt["cupid"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Aura Cinta -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#E91E8C" stroke-width="1" opacity="0.2"/>
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#FF69B4" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4"/>

                    <!-- Hati Kiri -->
                    <path d="M 22 38 C 22 28 10 22 10 34 C 10 44 22 52 22 52 C 22 52 34 44 34 34 C 34 22 22 28 22 38 Z" fill="#E91E8C" stroke="#6B0A3D" stroke-width="1.5"/>
                    <!-- Hati Kanan -->
                    <path d="M 78 38 C 78 28 66 22 66 34 C 66 44 78 52 78 52 C 78 52 90 44 90 34 C 90 22 78 28 78 38 Z" fill="#E91E8C" stroke="#6B0A3D" stroke-width="1.5"/>

                    <!-- Rantai Pengikat antar hati -->
                    <path d="M 22 46 Q 50 62 78 46" fill="none" stroke="#FF69B4" stroke-width="2" stroke-dasharray="3,2"/>

                    <!-- Panah Asmara (diagonal) -->
                    <line x1="10" y1="75" x2="90" y2="20" stroke="#6B0A3D" stroke-width="3" stroke-linecap="round"/>
                    <polygon points="90,20 82,26 88,30" fill="#F9D342"/>
                    <path d="M 12 73 L 8 82 L 17 79 Z" fill="#F9D342"/>

                    <!-- Bintang Konstelasi Kecil -->
                    <circle cx="50" cy="80" r="2" fill="#FF69B4" opacity="0.8"/>
                    <circle cx="35" cy="72" r="1.5" fill="#FF69B4" opacity="0.6"/>
                    <circle cx="65" cy="72" r="1.5" fill="#FF69B4" opacity="0.6"/>
                    <circle cx="50" cy="90" r="1" fill="#E91E8C" opacity="0.5"/>
                </svg>`;

/* ─── WITCH ─── midnight purple + acid green, potion & cauldron */
tacdosArt["witch"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Lingkaran Sihir -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#4CAF50" stroke-width="1" opacity="0.3"/>
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#CE93D8" stroke-width="0.8" stroke-dasharray="3,5" opacity="0.4"/>

                    <!-- Kuali Besar -->
                    <path d="M 20 65 Q 20 90 50 90 Q 80 90 80 65 L 75 50 L 25 50 Z" fill="#1A0A2E" stroke="#4CAF50" stroke-width="2.5"/>
                    <!-- Isi Kuali (Gelembung) -->
                    <ellipse cx="50" cy="52" rx="26" ry="8" fill="#2D6A2D"/>
                    <circle cx="38" cy="50" r="3" fill="#4CAF50" opacity="0.8"/>
                    <circle cx="55" cy="48" r="4" fill="#4CAF50" opacity="0.7"/>
                    <circle cx="67" cy="51" r="2.5" fill="#6FD96F" opacity="0.9"/>
                    <!-- Kaki Kuali -->
                    <rect x="38" y="90" width="6" height="7" rx="1" fill="#1A0A2E" stroke="#4CAF50" stroke-width="1"/>
                    <rect x="56" y="90" width="6" height="7" rx="1" fill="#1A0A2E" stroke="#4CAF50" stroke-width="1"/>

                    <!-- Vial Ramuan Nyawa (kiri) -->
                    <rect x="12" y="30" width="10" height="22" rx="4" fill="#CE93D8" stroke="#1A0A2E" stroke-width="1.5"/>
                    <rect x="14" y="28" width="6" height="5" rx="1" fill="#1A0A2E"/>
                    <rect x="13" y="39" width="8" height="10" rx="1" fill="#9B59B6" opacity="0.8"/>
                    <text x="17" y="37" font-size="6" fill="#fff" text-anchor="middle" font-family="monospace">+</text>

                    <!-- Vial Ramuan Racun (kanan) -->
                    <rect x="78" y="30" width="10" height="22" rx="4" fill="#4CAF50" stroke="#1A0A2E" stroke-width="1.5"/>
                    <rect x="80" y="28" width="6" height="5" rx="1" fill="#1A0A2E"/>
                    <rect x="79" y="39" width="8" height="10" rx="1" fill="#2D6A2D" opacity="0.8"/>
                    <text x="83" y="37" font-size="6" fill="#fff" text-anchor="middle" font-family="monospace">☠</text>

                    <!-- Asap Kuali -->
                    <path d="M 35 50 Q 30 35 38 25" fill="none" stroke="#CE93D8" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                    <path d="M 50 48 Q 48 30 55 18" fill="none" stroke="#4CAF50" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                    <path d="M 65 50 Q 70 35 62 22" fill="none" stroke="#CE93D8" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                </svg>`;

/* ─── WIZARD ─── midnight indigo + violet, staff & arcane orb */
tacdosArt["wizard"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Lingkaran Arkana -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#7C4DFF" stroke-width="1.5" opacity="0.25"/>
                    <polygon points="50,8 92,34 92,66 50,92 8,66 8,34" fill="none" stroke="#7C4DFF" stroke-width="1" opacity="0.2"/>

                    <!-- Tongkat Penyihir -->
                    <line x1="28" y1="90" x2="62" y2="18" stroke="#0D0D2E" stroke-width="7" stroke-linecap="round"/>
                    <line x1="28" y1="90" x2="62" y2="18" stroke="#B39DDB" stroke-width="3" stroke-linecap="round"/>

                    <!-- Orb Sihir di Ujung Tongkat -->
                    <circle cx="64" cy="15" r="14" fill="#1a0545" stroke="#7C4DFF" stroke-width="2.5"/>
                    <circle cx="64" cy="15" r="10" fill="none" stroke="#B39DDB" stroke-width="1" stroke-dasharray="2,3" opacity="0.7"/>
                    <circle cx="64" cy="15" r="6" fill="#7C4DFF" opacity="0.8"/>
                    <circle cx="67" cy="12" r="2.5" fill="#fff" opacity="0.5"/>

                    <!-- Kilat Sihir dari Orb -->
                    <path d="M 72 8 L 80 5 L 77 12 L 88 10" fill="none" stroke="#B39DDB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M 68 3 L 72 -2" fill="none" stroke="#7C4DFF" stroke-width="1.5" stroke-linecap="round"/>

                    <!-- Simbol Arkana di Bawah -->
                    <circle cx="36" cy="72" r="12" fill="none" stroke="#7C4DFF" stroke-width="1.5" opacity="0.5"/>
                    <polygon points="36,62 44,76 28,76" fill="none" stroke="#B39DDB" stroke-width="1.5" opacity="0.7"/>
                    <polygon points="36,82 44,68 28,68" fill="none" stroke="#7C4DFF" stroke-width="1.2" opacity="0.5"/>

                    <!-- Bintang Berputar -->
                    <circle cx="80" cy="70" r="3" fill="#7C4DFF" opacity="0.8"/>
                    <circle cx="88" cy="62" r="2" fill="#B39DDB" opacity="0.7"/>
                    <circle cx="82" cy="80" r="1.5" fill="#7C4DFF" opacity="0.6"/>
                </svg>`;

/* ─── VETERAN ─── olive + khaki + burnt gold, dog tags & tactical */
tacdosArt["veteran"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Latar Grid Taktis -->
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#8D6E3A" stroke-width="0.5" opacity="0.2"/>
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#8D6E3A" stroke-width="0.5" opacity="0.2"/>
                    <line x1="0" y1="75" x2="100" y2="75" stroke="#8D6E3A" stroke-width="0.5" opacity="0.2"/>
                    <line x1="25" y1="0" x2="25" y2="100" stroke="#8D6E3A" stroke-width="0.5" opacity="0.2"/>
                    <line x1="75" y1="0" x2="75" y2="100" stroke="#8D6E3A" stroke-width="0.5" opacity="0.2"/>

                    <!-- Dog Tags -->
                    <rect x="32" y="10" width="36" height="26" rx="5" fill="#2C2A1E" stroke="#8D6E3A" stroke-width="2.5"/>
                    <rect x="36" y="14" width="28" height="18" rx="3" fill="#3A3720"/>
                    <line x1="40" y1="19" x2="64" y2="19" stroke="#8D6E3A" stroke-width="1.5" opacity="0.7"/>
                    <line x1="40" y1="24" x2="64" y2="24" stroke="#8D6E3A" stroke-width="1.5" opacity="0.7"/>
                    <line x1="40" y1="29" x2="56" y2="29" stroke="#8D6E3A" stroke-width="1.5" opacity="0.7"/>
                    <!-- Lubang Dog Tag -->
                    <circle cx="50" cy="10" r="2.5" fill="#1a1700" stroke="#8D6E3A" stroke-width="1"/>
                    <!-- Tali Dog Tag -->
                    <path d="M 50 12.5 Q 50 40 45 50 Q 40 65 50 70 Q 60 65 55 50 Q 50 40 50 12.5" fill="none" stroke="#8D6E3A" stroke-width="1.5" stroke-dasharray="2,2"/>

                    <!-- Lencana Siaga / Alert Badge -->
                    <polygon points="50,72 60,85 50,95 40,85" fill="#D4A84B" stroke="#2C2A1E" stroke-width="2"/>
                    <circle cx="50" cy="84" r="4" fill="#2C2A1E"/>
                    <text x="50" y="87" font-size="6" fill="#D4A84B" text-anchor="middle" font-weight="bold" font-family="monospace">!</text>

                    <!-- Tanda Coretan Tally (5 goresan musuh) -->
                    <line x1="10" y1="55" x2="10" y2="72" stroke="#8D6E3A" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="16" y1="55" x2="16" y2="72" stroke="#8D6E3A" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="22" y1="55" x2="22" y2="72" stroke="#8D6E3A" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="28" y1="55" x2="28" y2="72" stroke="#8D6E3A" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="8" y1="70" x2="30" y2="57" stroke="#D4A84B" stroke-width="2.5" stroke-linecap="round"/>
                </svg>`;

/* ─── BODYGUARD ─── steel gray + dark navy, armor vest & pistol */
tacdosArt["bodyguard"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Latar Hexagonal -->
                    <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#566573" stroke-width="1" opacity="0.2"/>
                    <polygon points="50,15 82,33 82,67 50,85 18,67 18,33" fill="none" stroke="#AEB6BF" stroke-width="0.8" opacity="0.15"/>

                    <!-- Rompi Anti Peluru Taktis -->
                    <path d="M 25 25 L 25 75 Q 25 85 35 85 L 65 85 Q 75 85 75 75 L 75 25 Q 65 15 50 12 Q 35 15 25 25 Z" fill="#1C2833" stroke="#566573" stroke-width="2"/>
                    <!-- Panel Rompi -->
                    <path d="M 35 30 L 35 75 L 65 75 L 65 30 Q 56 22 50 20 Q 44 22 35 30 Z" fill="#263545"/>
                    <!-- Lipatan Rompi -->
                    <line x1="50" y1="20" x2="50" y2="75" stroke="#566573" stroke-width="1.5" opacity="0.5"/>
                    <line x1="35" y1="50" x2="65" y2="50" stroke="#566573" stroke-width="1" opacity="0.4"/>
                    <!-- Tulisan GUARD -->
                    <rect x="36" y="55" width="28" height="10" rx="2" fill="#1C2833" stroke="#AEB6BF" stroke-width="1"/>

                    <!-- Pistol Taktis -->
                    <rect x="58" y="38" width="30" height="12" rx="3" fill="#1C2833" stroke="#AEB6BF" stroke-width="1.5"/>
                    <rect x="68" y="50" width="8" height="14" rx="2" fill="#1C2833" stroke="#566573" stroke-width="1"/>
                    <rect x="84" y="40" width="7" height="4" rx="1" fill="#566573"/>
                    <circle cx="61" cy="44" r="2" fill="#AEB6BF"/>

                    <!-- Lingkaran Kepercayaan -->
                    <circle cx="50" cy="42" r="8" fill="none" stroke="#AEB6BF" stroke-width="1.5" opacity="0.5"/>
                    <text x="50" y="46" font-size="8" fill="#AEB6BF" text-anchor="middle" font-family="monospace" opacity="0.7">★</text>
                </svg>`;

/* ─── PRIEST ─── cream + gold + maroon, cross & holy light */
tacdosArt["priest"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Cahaya Suci -->
                    <circle cx="50" cy="35" r="30" fill="none" stroke="#F9D342" stroke-width="1" opacity="0.3"/>
                    <line x1="50" y1="5" x2="50" y2="15" stroke="#F9D342" stroke-width="2" opacity="0.6"/>
                    <line x1="50" y1="5" x2="40" y2="12" stroke="#F9D342" stroke-width="1.5" opacity="0.5"/>
                    <line x1="50" y1="5" x2="60" y2="12" stroke="#F9D342" stroke-width="1.5" opacity="0.5"/>
                    <line x1="50" y1="5" x2="32" y2="8" stroke="#F9D342" stroke-width="1" opacity="0.4"/>
                    <line x1="50" y1="5" x2="68" y2="8" stroke="#F9D342" stroke-width="1" opacity="0.4"/>

                    <!-- Salib Besar -->
                    <rect x="40" y="10" width="20" height="70" rx="3" fill="#3E1F00" stroke="#C8860A" stroke-width="2.5"/>
                    <rect x="20" y="28" width="60" height="18" rx="3" fill="#3E1F00" stroke="#C8860A" stroke-width="2.5"/>

                    <!-- Kilau Salib Dalam -->
                    <rect x="44" y="14" width="12" height="62" rx="1.5" fill="#C8860A" opacity="0.3"/>
                    <rect x="24" y="32" width="52" height="10" rx="1.5" fill="#C8860A" opacity="0.3"/>

                    <!-- Tasbih / Rosario -->
                    <circle cx="50" cy="88" r="6" fill="#3E1F00" stroke="#C8860A" stroke-width="1.5"/>
                    <circle cx="50" cy="88" r="3" fill="#F9D342"/>
                    <path d="M 50 82 Q 38 78 30 68" fill="none" stroke="#C8860A" stroke-width="1.5" stroke-dasharray="2,2"/>
                    <path d="M 50 82 Q 62 78 70 68" fill="none" stroke="#C8860A" stroke-width="1.5" stroke-dasharray="2,2"/>

                    <!-- Sinar Halo -->
                    <circle cx="50" cy="35" r="12" fill="none" stroke="#F9D342" stroke-width="2" opacity="0.6"/>
                </svg>`;

/* ─── MAYOR ─── dark navy + gold, political seal & podium */
tacdosArt["mayor"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Lingkaran Segel Resmi -->
                    <circle cx="50" cy="42" r="36" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.4"/>
                    <circle cx="50" cy="42" r="30" fill="none" stroke="#1565C0" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>

                    <!-- Sash / Selempang Walikota -->
                    <path d="M 20 10 L 80 10 L 80 60 L 20 60 Z" fill="#0C2340" stroke="#FFD700" stroke-width="2"/>
                    <!-- Garis Sash -->
                    <line x1="20" y1="25" x2="80" y2="25" stroke="#FFD700" stroke-width="1.5" opacity="0.5"/>
                    <line x1="20" y1="45" x2="80" y2="45" stroke="#FFD700" stroke-width="1.5" opacity="0.5"/>

                    <!-- Bintang Mayor -->
                    <polygon points="50,15 53,24 63,24 55,30 58,39 50,34 42,39 45,30 37,24 47,24" fill="#FFD700" stroke="#0C2340" stroke-width="1.5"/>

                    <!-- Pin Lencana Bulat -->
                    <circle cx="50" cy="52" r="12" fill="#1565C0" stroke="#FFD700" stroke-width="2"/>
                    <circle cx="50" cy="52" r="8" fill="#0C2340"/>
                    <polygon points="50,44 52,50 58,50 53,54 55,60 50,56 45,60 47,54 42,50 48,50" fill="#FFD700" opacity="0.9"/>

                    <!-- Podium -->
                    <rect x="25" y="72" width="50" height="6" rx="2" fill="#1565C0" stroke="#FFD700" stroke-width="1.5"/>
                    <rect x="30" y="78" width="40" height="18" rx="1" fill="#0C2340" stroke="#1565C0" stroke-width="1"/>
                    <!-- Mikrofon -->
                    <circle cx="50" cy="68" r="3" fill="#FFD700" stroke="#0C2340" stroke-width="1"/>
                    <line x1="50" y1="71" x2="50" y2="74" stroke="#FFD700" stroke-width="2"/>
                </svg>`;

/* ─── SHERIFF ─── tan + gold + dark brown, star badge & revolver */
tacdosArt["sheriff"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Background Jagged Horizon (Wild West) -->
                    <path d="M 0 60 L 15 45 L 30 58 L 45 40 L 60 55 L 75 38 L 90 52 L 100 42 L 100 100 L 0 100 Z" fill="#2E1A00" opacity="0.15"/>

                    <!-- Bintang Sheriff 6-titik Besar -->
                    <polygon points="50,10 56,28 74,28 60,39 66,57 50,46 34,57 40,39 26,28 44,28" fill="#B7791A" stroke="#2E1A00" stroke-width="2.5"/>
                    <!-- Lapisan dalam Bintang -->
                    <polygon points="50,16 55,30 69,30 58,38 62,52 50,43 38,52 42,38 31,30 45,30" fill="#F5C842" opacity="0.6"/>
                    <!-- Lingkaran ID di bintang -->
                    <circle cx="50" cy="35" r="10" fill="#2E1A00" stroke="#B7791A" stroke-width="2"/>
                    <text x="50" y="39" font-size="7" fill="#F5C842" text-anchor="middle" font-family="monospace" font-weight="bold">★</text>

                    <!-- Revolver -->
                    <rect x="28" y="65" width="44" height="14" rx="4" fill="#2E1A00" stroke="#B7791A" stroke-width="2"/>
                    <!-- Laras -->
                    <rect x="65" y="68" width="22" height="6" rx="2" fill="#3D2200" stroke="#B7791A" stroke-width="1.5"/>
                    <!-- Silinder -->
                    <circle cx="44" cy="72" r="8" fill="#3D2200" stroke="#B7791A" stroke-width="1.5"/>
                    <circle cx="44" cy="72" r="3" fill="#2E1A00"/>
                    <circle cx="38" cy="69" r="1.5" fill="#B7791A"/>
                    <circle cx="50" cy="69" r="1.5" fill="#B7791A"/>
                    <circle cx="44" cy="65" r="1.5" fill="#B7791A"/>
                    <!-- Pelatuk -->
                    <path d="M 35 79 Q 33 86 36 88" fill="none" stroke="#B7791A" stroke-width="2" stroke-linecap="round"/>
                    <!-- Gagang -->
                    <rect x="25" y="69" width="12" height="22" rx="4" fill="#2E1A00" stroke="#B7791A" stroke-width="1.5"/>
                </svg>`;

/* ─── VILLAGER 1 ─── warm earth/brown, house & lantern */
tacdosArt["villager_1"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Langit Malam Sederhana -->
                    <circle cx="20" cy="18" r="4" fill="#D4915A" opacity="0.4"/>
                    <circle cx="75" cy="12" r="2.5" fill="#D4915A" opacity="0.3"/>
                    <circle cx="88" cy="25" r="1.5" fill="#D4915A" opacity="0.3"/>

                    <!-- Rumah Desa -->
                    <!-- Atap -->
                    <polygon points="20,45 50,12 80,45" fill="#3B2F1E" stroke="#A0714F" stroke-width="2"/>
                    <!-- Badan Rumah -->
                    <rect x="27" y="45" width="46" height="35" fill="#5C4033" stroke="#A0714F" stroke-width="2"/>
                    <!-- Pintu -->
                    <rect x="42" y="58" width="16" height="22" rx="2" fill="#3B2F1E" stroke="#D4915A" stroke-width="1.5"/>
                    <circle cx="55" cy="69" r="1.5" fill="#D4915A"/>
                    <!-- Jendela Kiri -->
                    <rect x="31" y="51" width="10" height="10" rx="1" fill="#3B2F1E" stroke="#D4915A" stroke-width="1"/>
                    <line x1="36" y1="51" x2="36" y2="61" stroke="#D4915A" stroke-width="0.8"/>
                    <line x1="31" y1="56" x2="41" y2="56" stroke="#D4915A" stroke-width="0.8"/>
                    <!-- Jendela Kanan -->
                    <rect x="59" y="51" width="10" height="10" rx="1" fill="#3B2F1E" stroke="#D4915A" stroke-width="1"/>
                    <line x1="64" y1="51" x2="64" y2="61" stroke="#D4915A" stroke-width="0.8"/>
                    <line x1="59" y1="56" x2="69" y2="56" stroke="#D4915A" stroke-width="0.8"/>

                    <!-- Lentera di Depan -->
                    <rect x="46" y="82" width="8" height="14" rx="2" fill="#D4915A" stroke="#3B2F1E" stroke-width="1"/>
                    <circle cx="50" cy="84" r="3" fill="#F9D342" opacity="0.9"/>
                    <line x1="50" y1="80" x2="50" y2="82" stroke="#3B2F1E" stroke-width="1.5"/>
                </svg>`;

/* ─── VILLAGER 2 ─── green/earth, wheat sheaf & community */
tacdosArt["villager_2"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Tanah Desa -->
                    <ellipse cx="50" cy="92" rx="42" ry="8" fill="#2A3B1E" opacity="0.2"/>

                    <!-- Berkas Gandum Besar (kiri) -->
                    <line x1="35" y1="88" x2="28" y2="30" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="35" y1="88" x2="35" y2="25" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="35" y1="88" x2="42" y2="30" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Biji gandum kiri -->
                    <ellipse cx="28" cy="25" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <ellipse cx="35" cy="20" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <ellipse cx="42" cy="25" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <!-- Tali ikat kiri -->
                    <ellipse cx="35" cy="65" rx="9" ry="4" fill="none" stroke="#D4A84B" stroke-width="2"/>

                    <!-- Berkas Gandum Besar (kanan) -->
                    <line x1="65" y1="88" x2="58" y2="30" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="65" y1="88" x2="65" y2="25" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="65" y1="88" x2="72" y2="30" stroke="#5D8A3C" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Biji gandum kanan -->
                    <ellipse cx="58" cy="25" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <ellipse cx="65" cy="20" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <ellipse cx="72" cy="25" rx="5" ry="9" fill="#88C057" stroke="#2A3B1E" stroke-width="1"/>
                    <!-- Tali ikat kanan -->
                    <ellipse cx="65" cy="65" rx="9" ry="4" fill="none" stroke="#D4A84B" stroke-width="2"/>

                    <!-- Simbol Persatuan (genggaman tangan) -->
                    <circle cx="50" cy="78" r="10" fill="#2A3B1E" stroke="#88C057" stroke-width="2"/>
                    <text x="50" y="83" font-size="11" fill="#88C057" text-anchor="middle">🤝</text>
                </svg>`;

/* ─── VILLAGER 3 ─── cool blue/teal, lantern & night watch */
tacdosArt["villager_3"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Bulan Purnama -->
                    <circle cx="50" cy="30" r="22" fill="none" stroke="#7EC8E3" stroke-width="1" opacity="0.4"/>
                    <circle cx="50" cy="30" r="18" fill="#1E2E3B" stroke="#4A7FA5" stroke-width="2"/>
                    <circle cx="50" cy="30" r="14" fill="#7EC8E3" opacity="0.2"/>

                    <!-- Lentera Besar -->
                    <!-- Rantai Lentera -->
                    <line x1="50" y1="45" x2="50" y2="52" stroke="#4A7FA5" stroke-width="2"/>
                    <!-- Badan Lentera -->
                    <rect x="36" y="52" width="28" height="32" rx="4" fill="#1E2E3B" stroke="#4A7FA5" stroke-width="2.5"/>
                    <!-- Kaca Lentera -->
                    <rect x="40" y="56" width="20" height="24" rx="2" fill="#7EC8E3" opacity="0.25"/>
                    <!-- Api dalam Lentera -->
                    <path d="M 50 72 Q 46 66 50 60 Q 54 66 50 72 Z" fill="#F9D342" opacity="0.9"/>
                    <path d="M 50 70 Q 48 66 50 62 Q 52 66 50 70 Z" fill="#fff" opacity="0.6"/>
                    <!-- Tiang Lentera Kiri Kanan -->
                    <line x1="40" y1="52" x2="40" y2="84" stroke="#4A7FA5" stroke-width="1.5"/>
                    <line x1="60" y1="52" x2="60" y2="84" stroke="#4A7FA5" stroke-width="1.5"/>
                    <!-- Pegangan Atas -->
                    <path d="M 36 52 Q 36 46 50 46 Q 64 46 64 52" fill="none" stroke="#4A7FA5" stroke-width="2"/>
                    <!-- Alas Lentera -->
                    <rect x="33" y="84" width="34" height="5" rx="2" fill="#4A7FA5"/>

                    <!-- Bintang Malam -->
                    <circle cx="20" cy="20" r="1.5" fill="#7EC8E3" opacity="0.7"/>
                    <circle cx="80" cy="15" r="2" fill="#7EC8E3" opacity="0.7"/>
                    <circle cx="10" cy="40" r="1" fill="#4A7FA5" opacity="0.6"/>
                    <circle cx="88" cy="38" r="1.5" fill="#7EC8E3" opacity="0.5"/>
                </svg>`;

/* ─── WEREWOLF 2 ─── same faction, different art: full moon silhouette */
tacdosArt["werewolf_2"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Bulan Purnama Merah -->
                    <circle cx="50" cy="38" r="32" fill="#1A0505" stroke="#C0392B" stroke-width="3"/>
                    <circle cx="50" cy="38" r="28" fill="#2A0808" />
                    <!-- Bercak Bulan -->
                    <circle cx="42" cy="30" r="5" fill="#1A0505" opacity="0.7"/>
                    <circle cx="58" cy="42" r="4" fill="#1A0505" opacity="0.6"/>
                    <circle cx="45" cy="46" r="3" fill="#1A0505" opacity="0.5"/>

                    <!-- Siluet Serigala Melolong di Bulan -->
                    <!-- Tubuh -->
                    <ellipse cx="50" cy="42" rx="10" ry="14" fill="#C0392B"/>
                    <!-- Kepala -->
                    <ellipse cx="50" cy="25" rx="8" ry="7" fill="#C0392B"/>
                    <!-- Moncong ke atas (melolong) -->
                    <path d="M 46 20 Q 50 8 54 20" fill="#C0392B"/>
                    <!-- Telinga -->
                    <polygon points="43,20 40,10 46,18" fill="#C0392B"/>
                    <polygon points="57,20 60,10 54,18" fill="#C0392B"/>
                    <!-- Ekor -->
                    <path d="M 58 50 Q 75 55 78 45 Q 72 38 65 44" fill="#C0392B"/>
                    <!-- Kaki Depan -->
                    <line x1="44" y1="54" x2="40" y2="65" stroke="#C0392B" stroke-width="4" stroke-linecap="round"/>
                    <line x1="56" y1="54" x2="60" y2="65" stroke="#C0392B" stroke-width="4" stroke-linecap="round"/>

                    <!-- Ring Merah -->
                    <circle cx="50" cy="38" r="32" fill="none" stroke="#FF5252" stroke-width="1.5" opacity="0.4"/>
                    <!-- Tanah / Ground -->
                    <path d="M 10 78 Q 50 72 90 78 L 100 100 L 0 100 Z" fill="#1A0505"/>
                </svg>`;

/* ─── LONE WOLF ─── dark grey/slate, solitary wolf silhouette + crescent */
tacdosArt["lone_wolf"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Langit Kelam -->
                    <rect x="0" y="0" width="100" height="100" fill="none"/>
                    <!-- Bintang Kesepian -->
                    <circle cx="15" cy="15" r="1.5" fill="#90CDF4" opacity="0.6"/>
                    <circle cx="82" cy="10" r="1" fill="#90CDF4" opacity="0.5"/>
                    <circle cx="90" cy="28" r="1.5" fill="#4A5568" opacity="0.5"/>
                    <circle cx="8" cy="35" r="1" fill="#90CDF4" opacity="0.4"/>

                    <!-- Bulan Sabit -->
                    <path d="M 72 8 A 28 28 0 1 0 72 58 A 20 20 0 1 1 72 8 Z" fill="#1A1A2E" stroke="#4A5568" stroke-width="1.5"/>

                    <!-- Bukit / Tebing Sendirian -->
                    <path d="M 0 85 Q 25 55 50 60 Q 65 63 100 85 L 100 100 L 0 100 Z" fill="#1A1A2E"/>

                    <!-- Siluet Serigala Menyendiri di Puncak -->
                    <!-- Tubuh kurus -->
                    <ellipse cx="50" cy="58" rx="8" ry="10" fill="#4A5568"/>
                    <!-- Kepala -->
                    <ellipse cx="50" cy="46" rx="6" ry="5" fill="#4A5568"/>
                    <!-- Moncong melolong ke atas -->
                    <path d="M 47 42 Q 50 32 53 42" fill="#4A5568"/>
                    <!-- Telinga runcing -->
                    <polygon points="45,43 42,35 48,42" fill="#4A5568"/>
                    <polygon points="55,43 58,35 52,42" fill="#4A5568"/>
                    <!-- Ekor panjang -->
                    <path d="M 57 62 Q 72 65 76 58 Q 72 52 65 56" fill="#4A5568"/>

                    <!-- Lingkaran Isolasi -->
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#4A5568" stroke-width="0.8" stroke-dasharray="2,5" opacity="0.4"/>
                </svg>`;

/* ─── DOPPELGANGER ─── split grey/dark, two mirrored silhouettes */
tacdosArt["doppelganger"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Garis Pemisah Cermin -->
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#607080" stroke-width="2" stroke-dasharray="4,4" opacity="0.7"/>

                    <!-- Aura Bayangan -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#B0BEC5" stroke-width="1" opacity="0.15"/>

                    <!-- Bayangan Gelap KIRI (diri sendiri) -->
                    <!-- Kepala -->
                    <circle cx="28" cy="28" r="12" fill="#1C1C1C" stroke="#607080" stroke-width="1.5"/>
                    <circle cx="24" cy="26" r="3" fill="#607080" opacity="0.8"/>
                    <circle cx="32" cy="26" r="3" fill="#607080" opacity="0.8"/>
                    <!-- Tubuh -->
                    <path d="M 16 40 Q 16 68 28 70 Q 40 68 40 40 Q 34 37 28 37 Q 22 37 16 40 Z" fill="#1C1C1C" stroke="#607080" stroke-width="1.5"/>

                    <!-- Bayangan Terang KANAN (tiruan) -->
                    <!-- Kepala -->
                    <circle cx="72" cy="28" r="12" fill="#B0BEC5" stroke="#1C1C1C" stroke-width="1.5"/>
                    <circle cx="68" cy="26" r="3" fill="#1C1C1C" opacity="0.8"/>
                    <circle cx="76" cy="26" r="3" fill="#1C1C1C" opacity="0.8"/>
                    <!-- Tubuh -->
                    <path d="M 60 40 Q 60 68 72 70 Q 84 68 84 40 Q 78 37 72 37 Q 66 37 60 40 Z" fill="#B0BEC5" stroke="#1C1C1C" stroke-width="1.5"/>

                    <!-- Tangan saling mengulur (menyatu di garis tengah) -->
                    <line x1="40" y1="55" x2="50" y2="55" stroke="#607080" stroke-width="3" stroke-linecap="round"/>
                    <line x1="60" y1="55" x2="50" y2="55" stroke="#B0BEC5" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="50" cy="55" r="3" fill="#607080"/>

                    <!-- Teks Bayangan -->
                    <text x="28" y="82" font-size="5.5" fill="#607080" text-anchor="middle" font-family="monospace" font-weight="bold">ORIGINAL</text>
                    <text x="72" y="82" font-size="5.5" fill="#1C1C1C" text-anchor="middle" font-family="monospace" font-weight="bold">COPY</text>
                </svg>`;

/* ─── SERIAL KILLER ─── pure black + crimson, knife & tally marks */
tacdosArt["serial_killer"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Tetesan Darah di Background -->
                    <circle cx="15" cy="20" r="4" fill="#B71C1C" opacity="0.4"/>
                    <path d="M 15 24 L 17 34 A 2 2 0 0 1 13 34 Z" fill="#B71C1C" opacity="0.4"/>
                    <circle cx="85" cy="35" r="3" fill="#B71C1C" opacity="0.35"/>
                    <path d="M 85 38 L 87 46 A 1.5 1.5 0 0 1 83 46 Z" fill="#B71C1C" opacity="0.35"/>

                    <!-- Pisau / Belati Besar -->
                    <!-- Gagang -->
                    <rect x="40" y="68" width="20" height="28" rx="5" fill="#0D0D0D" stroke="#B71C1C" stroke-width="2"/>
                    <!-- Guard -->
                    <rect x="36" y="65" width="28" height="7" rx="2" fill="#222" stroke="#B71C1C" stroke-width="1.5"/>
                    <!-- Bilah -->
                    <path d="M 42 65 L 42 12 L 50 5 L 58 12 L 58 65 Z" fill="#333" stroke="#B71C1C" stroke-width="1.5"/>
                    <!-- Kilap Bilah -->
                    <line x1="44" y1="60" x2="48" y2="10" stroke="#B71C1C" stroke-width="1.5" opacity="0.7"/>
                    <!-- Darah di bilah -->
                    <path d="M 56 30 Q 60 35 58 42 Q 56 38 54 35 Z" fill="#B71C1C" opacity="0.8"/>
                    <path d="M 55 45 Q 59 49 58 55 Q 55 51 53 48 Z" fill="#B71C1C" opacity="0.7"/>

                    <!-- Tally Marks (korban) -->
                    <line x1="10" y1="60" x2="10" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="17" y1="60" x2="17" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="24" y1="60" x2="24" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="31" y1="60" x2="31" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="8" y1="76" x2="33" y2="62" stroke="#B71C1C" stroke-width="2.5" stroke-linecap="round"/>

                    <line x1="70" y1="60" x2="70" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="77" y1="60" x2="77" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="84" y1="60" x2="84" y2="78" stroke="#EF5350" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="68" y1="76" x2="86" y2="62" stroke="#B71C1C" stroke-width="2.5" stroke-linecap="round"/>
                </svg>`;

/* ─── IDIOT ─── bright yellow + navy, dunce hat & confusion */
tacdosArt["idiot"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Tanda Seru Lucu di Background -->
                    <circle cx="12" cy="15" r="5" fill="#F9A825" opacity="0.3"/>
                    <circle cx="88" cy="20" r="4" fill="#FFEE58" opacity="0.3"/>
                    <circle cx="78" cy="82" r="3" fill="#F9A825" opacity="0.25"/>

                    <!-- Topi Dunce / Kerucut Bodoh -->
                    <polygon points="50,5 22,62 78,62" fill="#F9A825" stroke="#1A1A00" stroke-width="3"/>
                    <!-- Motif pada Topi -->
                    <polygon points="50,15 34,52 66,52" fill="#FFEE58" opacity="0.5"/>
                    <!-- Bintang Topi -->
                    <circle cx="50" cy="32" r="6" fill="#1A1A00" opacity="0.3"/>
                    <polygon points="50,26 52,31 57,31 53,34 55,39 50,36 45,39 47,34 43,31 48,31" fill="#FFEE58"/>

                    <!-- Topi Band / Pita -->
                    <rect x="22" y="58" width="56" height="8" rx="2" fill="#1A1A00" stroke="#F9A825" stroke-width="1.5"/>
                    <text x="50" y="65" font-size="5" fill="#FFEE58" text-anchor="middle" font-family="monospace" font-weight="bold">D-U-N-C-E</text>

                    <!-- Wajah Bingung -->
                    <circle cx="50" cy="80" r="16" fill="#FFEE58" stroke="#1A1A00" stroke-width="2.5"/>
                    <!-- Mata spiral bingung -->
                    <path d="M 43 76 Q 40 73 43 70 Q 46 73 43 76" fill="none" stroke="#1A1A00" stroke-width="2" stroke-linecap="round"/>
                    <path d="M 57 76 Q 60 73 57 70 Q 54 73 57 76" fill="none" stroke="#1A1A00" stroke-width="2" stroke-linecap="round"/>
                    <!-- Mulut O (kaget) -->
                    <ellipse cx="50" cy="83" rx="4" ry="5" fill="#1A1A00"/>
                    <!-- Tanda Tanya di Kepala -->
                    <text x="20" y="78" font-size="14" fill="#F9A825" text-anchor="middle" font-weight="bold" font-family="monospace">?</text>
                    <text x="80" y="78" font-size="14" fill="#F9A825" text-anchor="middle" font-weight="bold" font-family="monospace">?</text>
                </svg>`;

/* ─── PRINCE ─── royal purple + gold, ornate crown & scepter */
tacdosArt["prince"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Latar Kerajaan -->
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#CE93D8" stroke-width="1" opacity="0.2"/>
                    <polygon points="50,8 90,32 90,68 50,92 10,68 10,32" fill="none" stroke="#7B1FA2" stroke-width="1" opacity="0.15"/>

                    <!-- Mahkota Kerajaan Mewah -->
                    <path d="M 18 55 L 18 30 L 30 45 L 40 18 L 50 40 L 60 18 L 70 45 L 82 30 L 82 55 Z" fill="#2D0F5E" stroke="#CE93D8" stroke-width="2.5"/>
                    <!-- Band Mahkota -->
                    <rect x="18" y="52" width="64" height="12" rx="3" fill="#7B1FA2" stroke="#CE93D8" stroke-width="2"/>
                    <!-- Permata Mahkota -->
                    <!-- Permata Tengah (besar) -->
                    <ellipse cx="50" cy="58" rx="8" ry="6" fill="#CE93D8" stroke="#2D0F5E" stroke-width="1.5"/>
                    <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#F3E5F5" opacity="0.8"/>
                    <!-- Permata Kiri -->
                    <ellipse cx="30" cy="58" rx="5" ry="4" fill="#7B1FA2" stroke="#CE93D8" stroke-width="1"/>
                    <!-- Permata Kanan -->
                    <ellipse cx="70" cy="58" rx="5" ry="4" fill="#7B1FA2" stroke="#CE93D8" stroke-width="1"/>
                    <!-- Pucuk Mahkota Tengah (berlian) -->
                    <polygon points="50,18 56,35 50,40 44,35" fill="#CE93D8"/>
                    <polygon points="50,18 53,31 50,40 47,31" fill="#F3E5F5" opacity="0.6"/>

                    <!-- Tongkat Kerajaan / Scepter -->
                    <rect x="75" y="35" width="7" height="55" rx="3" fill="#7B1FA2" stroke="#CE93D8" stroke-width="1.5"/>
                    <!-- Kepala Tongkat -->
                    <circle cx="78.5" cy="32" r="10" fill="#2D0F5E" stroke="#CE93D8" stroke-width="2"/>
                    <circle cx="78.5" cy="32" r="6" fill="#CE93D8" opacity="0.7"/>
                    <circle cx="78.5" cy="32" r="3" fill="#F3E5F5"/>

                    <!-- Jubah Kerajaan (bawah) -->
                    <path d="M 20 68 Q 20 92 50 95 Q 80 92 80 68" fill="#2D0F5E" stroke="#7B1FA2" stroke-width="1.5" opacity="0.8"/>
                    <!-- Ermine Spots -->
                    <circle cx="30" cy="80" r="2" fill="#CE93D8" opacity="0.6"/>
                    <circle cx="45" cy="85" r="2" fill="#CE93D8" opacity="0.6"/>
                    <circle cx="60" cy="80" r="2" fill="#CE93D8" opacity="0.6"/>
                    <circle cx="70" cy="87" r="2" fill="#CE93D8" opacity="0.6"/>
                </svg>`;

/* ─── LITTLE GIRL ─── soft pink + deep rose, peeking eyes & stars */
tacdosArt["little_girl"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Bintang Lembut -->
                    <circle cx="15" cy="18" r="2" fill="#F48FB1" opacity="0.6"/>
                    <circle cx="82" cy="12" r="2.5" fill="#F48FB1" opacity="0.5"/>
                    <circle cx="90" cy="30" r="1.5" fill="#E91E8C" opacity="0.4"/>
                    <circle cx="10" cy="45" r="1.5" fill="#F48FB1" opacity="0.5"/>

                    <!-- Selimut / Penutup (bawah) -->
                    <path d="M 5 65 Q 5 100 50 100 Q 95 100 95 65 L 90 55 L 80 60 L 65 50 L 50 55 L 35 50 L 20 60 L 10 55 Z" fill="#880E4F" stroke="#E91E8C" stroke-width="1.5"/>
                    <!-- Motif Bintang di Selimut -->
                    <circle cx="25" cy="78" r="3" fill="#F48FB1" opacity="0.5"/>
                    <circle cx="50" cy="85" r="3" fill="#F48FB1" opacity="0.5"/>
                    <circle cx="75" cy="78" r="3" fill="#F48FB1" opacity="0.5"/>

                    <!-- Kepala Gadis Mengintip -->
                    <circle cx="50" cy="52" r="22" fill="#FFF0F5" stroke="#E91E8C" stroke-width="2.5"/>
                    <!-- Rambut -->
                    <path d="M 28 48 Q 28 28 50 26 Q 72 28 72 48" fill="#880E4F"/>
                    <!-- Poni -->
                    <path d="M 35 44 Q 42 38 50 40 Q 58 38 65 44" fill="#880E4F"/>
                    <!-- Mata Mengintip (setengah tertutup) -->
                    <!-- Mata Kiri -->
                    <ellipse cx="40" cy="52" rx="6" ry="4" fill="#fff"/>
                    <ellipse cx="40" cy="53" rx="4" ry="3" fill="#880E4F"/>
                    <circle cx="41" cy="52" r="1.5" fill="#fff"/>
                    <!-- Kelopak atas kiri (setengah menutup) -->
                    <path d="M 34 49 Q 40 46 46 49" fill="#880E4F"/>
                    <!-- Mata Kanan -->
                    <ellipse cx="60" cy="52" rx="6" ry="4" fill="#fff"/>
                    <ellipse cx="60" cy="53" rx="4" ry="3" fill="#880E4F"/>
                    <circle cx="61" cy="52" r="1.5" fill="#fff"/>
                    <!-- Kelopak atas kanan (setengah menutup) -->
                    <path d="M 54 49 Q 60 46 66 49" fill="#880E4F"/>
                    <!-- Pipi merah muda -->
                    <ellipse cx="34" cy="58" rx="5" ry="3" fill="#E91E8C" opacity="0.3"/>
                    <ellipse cx="66" cy="58" rx="5" ry="3" fill="#E91E8C" opacity="0.3"/>
                    <!-- Mulut sedikit ternganga (mengintip) -->
                    <path d="M 44 63 Q 50 67 56 63" fill="none" stroke="#E91E8C" stroke-width="2" stroke-linecap="round"/>
                </svg>`;

tacdosArt["card_back"] = `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <!-- Lingkaran Geometris Alkimia -->
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" stroke-width="1.5" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="4,2" />
                    <polygon points="50,5 90,75 10,75" fill="none" stroke="#D4AF37" stroke-width="1.5" />
                    <polygon points="50,95 10,25 90,25" fill="none" stroke="#D4AF37" stroke-width="1.5" />

                    <!-- Tengkorak Serigala Geometris (Pusat) -->
                    <polygon points="50,30 65,45 60,65 50,75 40,65 35,45" fill="#111" stroke="#D4AF37"
                        stroke-width="2" />
                    <polygon points="50,30 50,75 65,45" fill="#222" />

                    <!-- Mata Tengkorak -->
                    <polygon points="42,48 48,52 45,55" fill="#D4AF37" />
                    <polygon points="58,48 52,52 55,55" fill="#D4AF37" />

                    <!-- Moncong -->
                    <polygon points="46,65 54,65 50,72" fill="#D4AF37" />
                </svg>`;
