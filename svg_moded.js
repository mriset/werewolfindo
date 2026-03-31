const svgsModed = {

    /* ============================================================
       DECK 1 — Cards 1-9
       SP·01, VL·01, VL·02, VL·14-17, WW·01, WW·02
       ============================================================ */

    /* SP·01 — SANG NARATOR (Game Moderator)
       Konsep: Mata Tuhan yang mengawasi — satu pupil di tengah,
       dikelilingi segitiga providence & garis-garis aksis absolut.
       Warna Tema: Supreme / Purple (#553C9A) */
    "SP·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gsp01" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#EDE9FE"/>
          <stop offset="100%" stop-color="#FAF5FF"/>
        </radialGradient>
      </defs>
      <!-- Background -->
      <rect width="100" height="100" fill="url(#gsp01)" rx="4"/>
      <!-- Outer orbit rings -->
      <circle cx="50" cy="50" r="44" fill="none" stroke="#D6BCFA" stroke-width="0.5" stroke-dasharray="3,3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#B794F4" stroke-width="0.3"/>
      <!-- Providence Triangle -->
      <polygon points="50,12 88,78 12,78" fill="none" stroke="#553C9A" stroke-width="1.8" stroke-linejoin="round"/>
      <!-- Inner glow triangle -->
      <polygon points="50,22 78,70 22,70" fill="none" stroke="#7C3AED" stroke-width="0.5" stroke-dasharray="2,3"/>
      <!-- Radiating axis lines from center -->
      <line x1="50" y1="12" x2="50" y2="4" stroke="#553C9A" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="88" y1="78" x2="95" y2="82" stroke="#553C9A" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="12" y1="78" x2="5" y2="82" stroke="#553C9A" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Diamond vertices -->
      <circle cx="50" cy="4" r="1.8" fill="#553C9A"/>
      <circle cx="96" cy="83" r="1.8" fill="#553C9A"/>
      <circle cx="4" cy="83" r="1.8" fill="#553C9A"/>
      <!-- The All-Seeing Eye -->
      <ellipse cx="50" cy="52" rx="12" ry="7.5" fill="#fff" stroke="#553C9A" stroke-width="1.2"/>
      <circle cx="50" cy="52" r="4.5" fill="#553C9A"/>
      <circle cx="50" cy="52" r="2" fill="#322659"/>
      <circle cx="52" cy="50.5" r="0.8" fill="#fff"/>
      <!-- Lashes / rays from eye -->
      <line x1="38" y1="52" x2="32" y2="52" stroke="#7C3AED" stroke-width="0.7" stroke-linecap="round"/>
      <line x1="62" y1="52" x2="68" y2="52" stroke="#7C3AED" stroke-width="0.7" stroke-linecap="round"/>
      <line x1="50" y1="44.5" x2="50" y2="39" stroke="#7C3AED" stroke-width="0.7" stroke-linecap="round"/>
      <line x1="50" y1="59.5" x2="50" y2="65" stroke="#7C3AED" stroke-width="0.7" stroke-linecap="round"/>
      <!-- Corner cross marks -->
      <line x1="8" y1="10" x2="12" y2="10" stroke="#B794F4" stroke-width="0.8"/><line x1="10" y1="8" x2="10" y2="12" stroke="#B794F4" stroke-width="0.8"/>
      <line x1="88" y1="10" x2="92" y2="10" stroke="#B794F4" stroke-width="0.8"/><line x1="90" y1="8" x2="90" y2="12" stroke="#B794F4" stroke-width="0.8"/>
    </svg>`,

    /* VL·01 — PERAMAL (Seer)
       Konsep: Bola kristal dengan sorotan cahaya & aura misterius.
       Warna Tema: Alliance / Blue (#2B6CB0) */
    "VL·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl01_ball" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#EBF8FF"/>
          <stop offset="60%" stop-color="#BEE3F8"/>
          <stop offset="100%" stop-color="#2B6CB0" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="gvl01_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F0F8FF"/>
          <stop offset="100%" stop-color="#EBF8FF"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#gvl01_bg)" rx="4"/>
      <!-- Outer aura rings -->
      <circle cx="50" cy="54" r="43" fill="none" stroke="#BEE3F8" stroke-width="0.5" stroke-dasharray="2,4"/>
      <circle cx="50" cy="54" r="36" fill="none" stroke="#90CDF4" stroke-width="0.3"/>
      <!-- Rays emanating from crystal ball -->
      <line x1="50" y1="15" x2="50" y2="6" stroke="#2B6CB0" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="70" y1="22" x2="76" y2="16" stroke="#2B6CB0" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="30" y1="22" x2="24" y2="16" stroke="#2B6CB0" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="82" y1="42" x2="90" y2="38" stroke="#2B6CB0" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="18" y1="42" x2="10" y2="38" stroke="#2B6CB0" stroke-width="0.8" stroke-linecap="round"/>
      <!-- Stars -->
      <circle cx="50" cy="4" r="1.5" fill="#2B6CB0"/>
      <circle cx="78" cy="13" r="1.2" fill="#2B6CB0"/>
      <circle cx="22" cy="13" r="1.2" fill="#2B6CB0"/>
      <circle cx="93" cy="36" r="1" fill="#90CDF4"/>
      <circle cx="7" cy="36" r="1" fill="#90CDF4"/>
      <!-- Crystal Ball body -->
      <circle cx="50" cy="52" r="26" fill="url(#gvl01_ball)" stroke="#2B6CB0" stroke-width="1.5"/>
      <!-- Highlight on ball -->
      <ellipse cx="42" cy="41" rx="7" ry="4.5" fill="#fff" opacity="0.7" transform="rotate(-25 42 41)"/>
      <ellipse cx="40" cy="39" rx="3" ry="2" fill="#fff" opacity="0.9" transform="rotate(-25 40 39)"/>
      <!-- Inner vision / eye inside ball -->
      <ellipse cx="50" cy="53" rx="10" ry="6" fill="none" stroke="#1A365D" stroke-width="0.8" opacity="0.6"/>
      <circle cx="50" cy="53" r="4" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="50" cy="53" r="1.5" fill="#1A365D" opacity="0.8"/>
      <!-- Base pedestal -->
      <ellipse cx="50" cy="78" rx="15" ry="4" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <rect x="44" y="76" width="12" height="4" fill="#BEE3F8"/>
      <ellipse cx="50" cy="80" rx="18" ry="3" fill="none" stroke="#2B6CB0" stroke-width="1"/>
    </svg>`,

    /* VL·02 — PENJAGA (Guardian)
       Konsep: Perisai heraldik dengan ornamen garis melintang & titik.
       Warna Tema: Alliance / Blue (#2B6CB0) */
    "VL·02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl02_shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EBF8FF"/>
          <stop offset="100%" stop-color="#BEE3F8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#F0FAFF" rx="4"/>
      <!-- Background circle grid -->
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="1,5"/>
      <!-- Shield shape -->
      <path d="M50,10 L82,22 L82,55 Q82,80 50,92 Q18,80 18,55 L18,22 Z"
            fill="url(#gvl02_shield)" stroke="#2B6CB0" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- Inner shield -->
      <path d="M50,18 L74,28 L74,53 Q74,72 50,83 Q26,72 26,53 L26,28 Z"
            fill="none" stroke="#2B6CB0" stroke-width="0.8" stroke-dasharray="3,2"/>
      <!-- Heraldic cross inside shield -->
      <line x1="50" y1="22" x2="50" y2="82" stroke="#2B6CB0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="26" y1="50" x2="74" y2="50" stroke="#2B6CB0" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Center medallion -->
      <circle cx="50" cy="50" r="9" fill="#2B6CB0"/>
      <circle cx="50" cy="50" r="5.5" fill="#EBF8FF"/>
      <circle cx="50" cy="50" r="2.5" fill="#1A365D"/>
      <!-- Decorative shield corners (quadrant dots) -->
      <circle cx="38" cy="36" r="2" fill="#2B6CB0" opacity="0.7"/>
      <circle cx="62" cy="36" r="2" fill="#2B6CB0" opacity="0.7"/>
      <circle cx="38" cy="66" r="2" fill="#2B6CB0" opacity="0.7"/>
      <circle cx="62" cy="66" r="2" fill="#2B6CB0" opacity="0.7"/>
      <!-- Top crown ornament -->
      <line x1="50" y1="10" x2="50" y2="4" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="50" cy="3" r="2" fill="#2B6CB0"/>
      <line x1="40" y1="14" x2="37" y2="8" stroke="#2B6CB0" stroke-width="1" stroke-linecap="round"/>
      <circle cx="36" cy="7" r="1.5" fill="#2B6CB0"/>
      <line x1="60" y1="14" x2="63" y2="8" stroke="#2B6CB0" stroke-width="1" stroke-linecap="round"/>
      <circle cx="64" cy="7" r="1.5" fill="#2B6CB0"/>
    </svg>`,

    /* VL·14 — WARGA DESA / Villager #1
       Konsep: Rumah rakyat sederhana dengan pohon & padi — simbol komunitas.
       4 varian akan menggunakan variasi kecil yang berbeda.
       Warna Tema: Alliance / Blue */
    "VL·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <!-- Horizon line -->
      <line x1="5" y1="72" x2="95" y2="72" stroke="#BEE3F8" stroke-width="0.8"/>
      <!-- Background hills (subtle) -->
      <path d="M0,72 Q25,55 50,65 Q75,55 100,72" fill="#EBF8FF" stroke="#BEE3F8" stroke-width="0.5"/>
      <!-- House body -->
      <rect x="32" y="52" width="36" height="22" fill="#fff" stroke="#2B6CB0" stroke-width="1.5"/>
      <!-- Roof -->
      <polygon points="28,52 50,28 72,52" fill="#1A365D" stroke="#1A365D" stroke-width="1"/>
      <!-- Inner roof line -->
      <polygon points="32,52 50,32 68,52" fill="none" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Door -->
      <rect x="44" y="60" width="12" height="14" rx="1" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="54" cy="67" r="0.8" fill="#2B6CB0"/>
      <!-- Window left -->
      <rect x="34" y="56" width="7" height="7" rx="1" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="37.5" y1="56" x2="37.5" y2="63" stroke="#2B6CB0" stroke-width="0.5"/>
      <line x1="34" y1="59.5" x2="41" y2="59.5" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Window right -->
      <rect x="59" y="56" width="7" height="7" rx="1" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="62.5" y1="56" x2="62.5" y2="63" stroke="#2B6CB0" stroke-width="0.5"/>
      <line x1="59" y1="59.5" x2="66" y2="59.5" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Chimney -->
      <rect x="60" y="34" width="6" height="12" fill="#1A365D" stroke="#1A365D" stroke-width="0.5"/>
      <!-- Tree left -->
      <line x1="20" y1="72" x2="20" y2="50" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="20" cy="43" r="9" fill="#2B6CB0" opacity="0.6"/>
      <!-- Tree right -->
      <line x1="80" y1="72" x2="80" y2="55" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="80" cy="49" r="7" fill="#2B6CB0" opacity="0.5"/>
      <!-- Smoke puff -->
      <circle cx="61" cy="30" r="3" fill="none" stroke="#90CDF4" stroke-width="0.8" opacity="0.7"/>
      <circle cx="64" cy="26" r="2.5" fill="none" stroke="#90CDF4" stroke-width="0.6" opacity="0.5"/>
      <!-- Sun / decorative top -->
      <circle cx="50" cy="14" r="6" fill="none" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="50" y1="6" x2="50" y2="4" stroke="#2B6CB0" stroke-width="1"/>
      <line x1="57" y1="9" x2="59" y2="7" stroke="#2B6CB0" stroke-width="1"/>
      <line x1="43" y1="9" x2="41" y2="7" stroke="#2B6CB0" stroke-width="1"/>
    </svg>`,

    /* WW·01 — SERIGALA / Werewolf (SEMUA KARTU WW)
       Konsep: Kepala serigala binatang — moncong panjang, taring tajam, snarling.
       Digunakan untuk SEMUA kartu dengan nameEn === 'Werewolf'
       Warna Tema: Evil / Red (#C53030) */
    "WW·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gww01_bg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FFF0F0"/>
          <stop offset="100%" stop-color="#FFF5F5"/>
        </radialGradient>
        <radialGradient id="gww01_moonglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FC8181" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#FC8181" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <!-- Background -->
      <rect width="100" height="100" fill="url(#gww01_bg)" rx="4"/>
      <!-- Moon glow -->
      <circle cx="78" cy="16" r="22" fill="url(#gww01_moonglow)"/>
      <!-- Blood Moon (top right corner) -->
      <circle cx="78" cy="16" r="13" fill="#fff" stroke="#C53030" stroke-width="1"/>
      <circle cx="74" cy="13" r="2.5" fill="none" stroke="#FC8181" stroke-width="0.5" opacity="0.6"/>
      <circle cx="81" cy="19" r="1.5" fill="none" stroke="#FC8181" stroke-width="0.4" opacity="0.5"/>
      <!-- Orbit ring -->
      <circle cx="78" cy="16" r="18" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="1.5,3"/>

      <!-- === WOLF HEAD (proper animal, side-ish frontal) === -->

      <!-- EARS — tall pointy wolf ears -->
      <!-- Left ear outer -->
      <polygon points="22,48 14,18 38,34" fill="#742A2A" stroke="#5A1E1E" stroke-width="0.8"/>
      <!-- Left ear inner -->
      <polygon points="24,46 18,22 36,34" fill="#C53030" opacity="0.6"/>
      <!-- Right ear outer -->
      <polygon points="62,44 58,16 76,34" fill="#742A2A" stroke="#5A1E1E" stroke-width="0.8"/>
      <!-- Right ear inner -->
      <polygon points="63,42 60,20 73,33" fill="#C53030" opacity="0.6"/>

      <!-- SKULL / HEAD top rounded -->
      <path d="M20,48 Q18,38 22,30 Q28,20 45,18 Q60,16 68,26 Q76,36 74,48 Q72,58 62,64 Q52,70 40,68 Q26,66 20,56 Z"
            fill="#742A2A" stroke="#5A1E1E" stroke-width="0.6"/>

      <!-- FUR TEXTURE on head -->
      <path d="M22,32 Q26,28 30,30" fill="none" stroke="#5A1E1E" stroke-width="0.6" opacity="0.6" stroke-linecap="round"/>
      <path d="M24,38 Q28,34 33,36" fill="none" stroke="#5A1E1E" stroke-width="0.6" opacity="0.5" stroke-linecap="round"/>
      <path d="M64,32 Q60,28 56,30" fill="none" stroke="#5A1E1E" stroke-width="0.6" opacity="0.6" stroke-linecap="round"/>
      <path d="M65,40 Q61,36 57,37" fill="none" stroke="#5A1E1E" stroke-width="0.6" opacity="0.5" stroke-linecap="round"/>

      <!-- MUZZLE (elongated animal snout, lower half of face) -->
      <path d="M30,56 Q28,62 30,70 Q38,82 47,84 Q56,82 60,70 Q62,62 60,56 Q52,60 47,60 Q42,60 30,56 Z"
            fill="#8B3A3A" stroke="#5A1E1E" stroke-width="0.7"/>
      <!-- Muzzle lighter area (white/grey chest area) -->
      <path d="M34,58 Q33,65 35,72 Q40,80 47,81 Q54,80 56,72 Q58,65 56,58 Q52,62 47,62 Q42,62 34,58 Z"
            fill="#C47A7A" opacity="0.5"/>

      <!-- NOSE — wolf nose, wide and dark -->
      <path d="M38,58 Q47,54 56,58 Q53,64 47,65 Q41,64 38,58 Z" fill="#2D0D0D"/>
      <!-- Nose highlight -->
      <ellipse cx="44" cy="59" rx="3" ry="2" fill="#5A1E1E" opacity="0.5"/>
      <!-- Nose nostrils -->
      <ellipse cx="41" cy="60" rx="2" ry="1.2" fill="#1a0505"/>
      <ellipse cx="53" cy="60" rx="2" ry="1.2" fill="#1a0505"/>

      <!-- MOUTH OPEN — snarling / growling -->
      <!-- Upper lip -->
      <path d="M34,64 Q40,62 47,63 Q54,62 60,64" fill="none" stroke="#2D0D0D" stroke-width="1" stroke-linecap="round"/>
      <!-- Lower jaw open wide -->
      <path d="M33,66 Q34,76 40,82 Q47,86 54,82 Q60,76 61,66"
            fill="#8B3A3A" stroke="#5A1E1E" stroke-width="0.8"/>
      <!-- Inside mouth (dark red gullet) -->
      <path d="M36,67 Q40,75 47,78 Q54,75 58,67 Q52,72 47,73 Q42,72 36,67 Z"
            fill="#4A0000"/>
      <!-- Tongue -->
      <path d="M42,72 Q47,80 52,72" fill="#C53030" stroke="#742A2A" stroke-width="0.5"/>

      <!-- UPPER TEETH / FANGS -->
      <!-- Fang left (biggest) -->
      <path d="M36,65 Q34,73 37,77" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <path d="M36,65 L35,77 Q36,79 38,77 L38,65 Z" fill="#fff" stroke="#ddd" stroke-width="0.3"/>
      <!-- Small teeth left -->
      <rect x="39" y="65" width="3" height="7" rx="1" fill="#fff"/>
      <rect x="43" y="65" width="2.5" height="5" rx="1" fill="#f0f0f0"/>
      <!-- Small teeth right -->
      <rect x="51" y="65" width="2.5" height="5" rx="1" fill="#f0f0f0"/>
      <rect x="54.5" y="65" width="3" height="7" rx="1" fill="#fff"/>
      <!-- Fang right (biggest) -->
      <path d="M58.5,65 L59,77 Q60,79 62,77 L62,65 Z" fill="#fff" stroke="#ddd" stroke-width="0.3"/>

      <!-- LOWER TEETH (bottom jaw) -->
      <rect x="41" y="73" width="2.5" height="5" rx="1" fill="#f5f5f5"/>
      <rect x="44.5" y="73" width="2" height="4" rx="1" fill="#f5f5f5"/>
      <rect x="47.5" y="73" width="2" height="4" rx="1" fill="#f5f5f5"/>
      <rect x="50.5" y="73" width="2.5" height="5" rx="1" fill="#f5f5f5"/>

      <!-- EYES — fierce, slanted (wolf-like) -->
      <!-- Left eye area (brow shadow) -->
      <path d="M26,44 Q30,40 38,42" fill="#5A1E1E" stroke="none" opacity="0.8"/>
      <!-- Left eyeball -->
      <ellipse cx="32" cy="46" rx="6" ry="4.5" fill="#fff"/>
      <ellipse cx="32" cy="46" rx="4" ry="3.5" fill="#C53030"/>
      <ellipse cx="32" cy="46" rx="2" ry="3" fill="#1a0505"/>
      <circle cx="33.5" cy="44.5" r="0.8" fill="#fff" opacity="0.9"/>
      <!-- Left eye slant lid -->
      <path d="M26,44 Q30,42 38,44" fill="none" stroke="#3D0D0D" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M26,49 Q30,50 37,48" fill="none" stroke="#3D0D0D" stroke-width="0.8" stroke-linecap="round"/>

      <!-- Right eye area (brow shadow) -->
      <path d="M56,42 Q62,40 68,44" fill="#5A1E1E" stroke="none" opacity="0.8"/>
      <!-- Right eyeball -->
      <ellipse cx="62" cy="46" rx="6" ry="4.5" fill="#fff"/>
      <ellipse cx="62" cy="46" rx="4" ry="3.5" fill="#C53030"/>
      <ellipse cx="62" cy="46" rx="2" ry="3" fill="#1a0505"/>
      <circle cx="63.5" cy="44.5" r="0.8" fill="#fff" opacity="0.9"/>
      <!-- Right eye slant lid -->
      <path d="M56,44 Q62,42 68,44" fill="none" stroke="#3D0D0D" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M57,48 Q62,50 68,49" fill="none" stroke="#3D0D0D" stroke-width="0.8" stroke-linecap="round"/>

      <!-- WHISKER dots -->
      <circle cx="33" cy="63" r="0.8" fill="#5A1E1E" opacity="0.7"/>
      <circle cx="36" cy="65" r="0.7" fill="#5A1E1E" opacity="0.6"/>
      <circle cx="61" cy="63" r="0.8" fill="#5A1E1E" opacity="0.7"/>
      <circle cx="58" cy="65" r="0.7" fill="#5A1E1E" opacity="0.6"/>

      <!-- Drip of blood from fang -->
      <ellipse cx="36.5" cy="80" rx="1.2" ry="2" fill="#C53030"/>
      <ellipse cx="36.5" cy="83" rx="0.8" ry="1.5" fill="#C53030" opacity="0.7"/>
    </svg>`,


    /* ============================================================
       DECK 2 — Cards 10-18
       VL·03 Witch, VL·04 Hunter, VL·05 King, VL·06 Drunker,
       VL·07 Little Girl, VL·09 Sheriff, WW·03 Alpha Wolf,
       NT·01 Jester, NT·03 Cupid
       ============================================================ */

    "VL·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl03b" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#BEE3F8"/><stop offset="100%" stop-color="#2B6CB0"/></radialGradient>
        <radialGradient id="gvl03r" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#FEB2B2"/><stop offset="100%" stop-color="#C53030"/></radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <circle cx="12" cy="15" r="1.2" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="88" cy="12" r="1" fill="#2B6CB0" opacity="0.4"/>
      <circle cx="50" cy="8" r="1.5" fill="#2B6CB0" opacity="0.6"/>
      <rect x="23" y="22" width="10" height="6" rx="2" fill="#8B7355"/>
      <rect x="25" y="18" width="6" height="6" rx="1.5" fill="#6B5A3E"/>
      <rect x="24" y="28" width="8" height="8" rx="1" fill="url(#gvl03b)" stroke="#2B6CB0" stroke-width="0.8"/>
      <path d="M18,36 Q16,42 18,55 Q18,68 28,72 Q38,68 38,55 Q40,42 38,36 Z" fill="url(#gvl03b)" stroke="#2B6CB0" stroke-width="1.2"/>
      <ellipse cx="22" cy="44" rx="3" ry="7" fill="#fff" opacity="0.35" transform="rotate(-10 22 44)"/>
      <circle cx="30" cy="58" r="2.5" fill="none" stroke="#90CDF4" stroke-width="0.6" opacity="0.7"/>
      <rect x="20" y="46" width="16" height="8" rx="1.5" fill="#fff" opacity="0.6"/>
      <text x="28" y="52.5" text-anchor="middle" font-size="4.5" fill="#1A365D" font-family="sans-serif" font-weight="bold">LIFE</text>
      <rect x="67" y="22" width="10" height="6" rx="2" fill="#8B7355"/>
      <rect x="69" y="18" width="6" height="6" rx="1.5" fill="#6B5A3E"/>
      <rect x="68" y="28" width="8" height="8" rx="1" fill="url(#gvl03r)" stroke="#C53030" stroke-width="0.8"/>
      <path d="M62,36 Q60,42 62,55 Q62,68 72,72 Q82,68 82,55 Q84,42 82,36 Z" fill="url(#gvl03r)" stroke="#C53030" stroke-width="1.2"/>
      <ellipse cx="66" cy="44" rx="3" ry="7" fill="#fff" opacity="0.25" transform="rotate(-10 66 44)"/>
      <circle cx="74" cy="58" r="2.5" fill="none" stroke="#FC8181" stroke-width="0.6" opacity="0.7"/>
      <rect x="64" y="46" width="16" height="8" rx="1.5" fill="#fff" opacity="0.6"/>
      <text x="72" y="52.5" text-anchor="middle" font-size="4" fill="#742A2A" font-family="sans-serif" font-weight="bold">DEATH</text>
      <path d="M38,54 Q50,48 62,54" fill="none" stroke="#90CDF4" stroke-width="0.8" stroke-dasharray="2,2"/>
      <circle cx="50" cy="50" r="3" fill="#BEE3F8" opacity="0.8"/>
      <circle cx="50" cy="50" r="1.5" fill="#2B6CB0"/>
      <path d="M38,88 Q38,82 50,80 Q62,82 62,88 Q62,94 50,96 Q38,94 38,88 Z" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="50" cy="82" rx="12" ry="4" fill="#2B6CB0" opacity="0.7"/>
      <path d="M44,78 Q43,73 46,71" fill="none" stroke="#90CDF4" stroke-width="0.7" stroke-linecap="round" opacity="0.6"/>
      <path d="M50,77 Q49,72 52,70" fill="none" stroke="#90CDF4" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    </svg>`,

    "VL·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#BEE3F8" stroke-width="0.8"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="#BEE3F8" stroke-width="0.6"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="#90CDF4" stroke-width="0.5"/>
      <circle cx="50" cy="50" r="4" fill="#BEE3F8"/>
      <line x1="20" y1="50" x2="80" y2="50" stroke="#BEE3F8" stroke-width="0.5"/>
      <line x1="50" y1="20" x2="50" y2="80" stroke="#BEE3F8" stroke-width="0.5"/>
      <path d="M25,15 Q8,50 25,85" fill="none" stroke="#1A365D" stroke-width="4" stroke-linecap="round"/>
      <path d="M25,15 Q40,50 25,85" fill="none" stroke="#90CDF4" stroke-width="0.8"/>
      <line x1="25" y1="15" x2="25" y2="85" stroke="#BEE3F8" stroke-width="1"/>
      <line x1="28" y1="50" x2="88" y2="50" stroke="#8B7355" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="88,50 82,46 82,54" fill="#1A365D"/>
      <path d="M28,50 Q24,44 20,46 Q24,50 20,54 Q24,52 28,50 Z" fill="#2B6CB0" opacity="0.7"/>
      <path d="M32,50 Q28,45 24,46 Q28,50 24,54 Q28,52 32,50 Z" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="28" cy="50" r="2" fill="#1A365D"/>
      <path d="M70,12 Q74,18 70,24 Q66,18 70,12 Z" fill="#2B6CB0" opacity="0.5"/>
      <path d="M76,14 Q80,20 76,26 Q72,20 76,14 Z" fill="#1A365D" opacity="0.4"/>
      <line x1="70" y1="12" x2="70" y2="30" stroke="#8B7355" stroke-width="1"/>
      <line x1="76" y1="14" x2="76" y2="32" stroke="#8B7355" stroke-width="1"/>
    </svg>`,

    "VL·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl05c" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EBF8FF"/><stop offset="100%" stop-color="#BEE3F8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <line x1="50" y1="10" x2="50" y2="4" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="65" y1="14" x2="70" y2="9" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="35" y1="14" x2="30" y2="9" stroke="#2B6CB0" stroke-width="0.8"/>
      <circle cx="50" cy="3" r="1.5" fill="#2B6CB0"/>
      <circle cx="71" cy="8" r="1.2" fill="#2B6CB0"/>
      <circle cx="29" cy="8" r="1.2" fill="#2B6CB0"/>
      <rect x="18" y="56" width="64" height="14" rx="3" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.5"/>
      <circle cx="30" cy="63" r="3" fill="#2B6CB0"/><circle cx="30" cy="63" r="1.5" fill="#EBF8FF"/>
      <circle cx="50" cy="63" r="4" fill="#1A365D"/><circle cx="50" cy="63" r="2" fill="#BEE3F8"/>
      <circle cx="70" cy="63" r="3" fill="#2B6CB0"/><circle cx="70" cy="63" r="1.5" fill="#EBF8FF"/>
      <polygon points="18,56 14,28 28,56" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.3"/>
      <circle cx="14" cy="27" r="3" fill="#1A365D"/><circle cx="14" cy="27" r="1.5" fill="#BEE3F8"/>
      <polygon points="30,56 32,36 44,56" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.3"/>
      <circle cx="32" cy="35" r="2.5" fill="#2B6CB0"/><circle cx="32" cy="35" r="1.2" fill="#EBF8FF"/>
      <polygon points="42,56 50,16 58,56" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.5"/>
      <circle cx="50" cy="15" r="5" fill="#1A365D"/><circle cx="50" cy="15" r="2.5" fill="#90CDF4"/>
      <polygon points="56,56 68,36 70,56" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.3"/>
      <circle cx="68" cy="35" r="2.5" fill="#2B6CB0"/><circle cx="68" cy="35" r="1.2" fill="#EBF8FF"/>
      <polygon points="72,56 86,28 82,56" fill="url(#gvl05c)" stroke="#2B6CB0" stroke-width="1.3"/>
      <circle cx="86" cy="27" r="3" fill="#1A365D"/><circle cx="86" cy="27" r="1.5" fill="#BEE3F8"/>
      <rect x="15" y="68" width="70" height="6" rx="4" fill="#1A365D"/>
      <circle cx="50" cy="84" r="9" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1.2"/>
      <circle cx="50" cy="84" r="5" fill="#BEE3F8"/>
      <line x1="50" y1="75" x2="50" y2="93" stroke="#2B6CB0" stroke-width="0.7"/>
      <line x1="41" y1="84" x2="59" y2="84" stroke="#2B6CB0" stroke-width="0.7"/>
    </svg>`,

    "VL·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <circle cx="18" cy="22" r="5" fill="#BEE3F8" opacity="0.5"/>
      <circle cx="25" cy="14" r="4" fill="#BEE3F8" opacity="0.3"/>
      <circle cx="82" cy="20" r="5" fill="#BEE3F8" opacity="0.4"/>
      <g transform="rotate(-35 50 55)">
        <rect x="38" y="48" width="24" height="38" rx="4" fill="#1A365D" stroke="#2B6CB0" stroke-width="1"/>
        <rect x="44" y="36" width="12" height="16" rx="2" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
        <rect x="46" y="30" width="8" height="8" rx="2" fill="#2B6CB0"/>
        <rect x="47" y="26" width="6" height="6" rx="1.5" fill="#8B7355"/>
        <rect x="40" y="60" width="20" height="24" rx="3" fill="#2B6CB0" opacity="0.5"/>
        <rect x="40" y="56" width="20" height="14" rx="2" fill="#fff" opacity="0.5"/>
        <ellipse cx="43" cy="58" rx="2.5" ry="8" fill="#fff" opacity="0.15"/>
      </g>
      <g transform="rotate(15 72 68)">
        <path d="M62,52 L58,80 Q58,86 68,86 Q78,86 78,80 L74,52 Z" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1" opacity="0.8"/>
        <path d="M60,68 L59,80 Q59,86 68,86 Q77,86 77,80 L73,68 Z" fill="#2B6CB0" opacity="0.4"/>
        <ellipse cx="68" cy="52" rx="6" ry="2" fill="none" stroke="#2B6CB0" stroke-width="1"/>
      </g>
      <circle cx="62" cy="38" r="3.5" fill="#BEE3F8" opacity="0.8"/>
      <circle cx="55" cy="33" r="3" fill="#BEE3F8" opacity="0.7"/>
      <circle cx="66" cy="30" r="2.5" fill="#BEE3F8" opacity="0.6"/>
      <text x="14" y="55" font-size="14" fill="#2B6CB0" opacity="0.5" font-family="sans-serif">★</text>
      <text x="78" y="58" font-size="10" fill="#2B6CB0" opacity="0.4" font-family="sans-serif">★</text>
      <text x="10" y="70" font-size="10" fill="#90CDF4" opacity="0.4" font-family="sans-serif">✦</text>
    </svg>`,

    "VL·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl07e" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#90CDF4"/><stop offset="100%" stop-color="#2B6CB0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <rect x="0" y="0" width="28" height="100" fill="#1A365D" opacity="0.88"/>
      <rect x="72" y="0" width="28" height="100" fill="#1A365D" opacity="0.88"/>
      <rect x="0" y="0" width="100" height="28" fill="#1A365D" opacity="0.88"/>
      <rect x="0" y="74" width="100" height="26" fill="#1A365D" opacity="0.88"/>
      <rect x="28" y="28" width="44" height="46" fill="#EBF8FF"/>
      <line x1="28" y1="28" x2="28" y2="74" stroke="#2B6CB0" stroke-width="1.5"/>
      <line x1="72" y1="28" x2="72" y2="74" stroke="#2B6CB0" stroke-width="1.5"/>
      <line x1="28" y1="28" x2="72" y2="28" stroke="#2B6CB0" stroke-width="1.5"/>
      <line x1="28" y1="74" x2="72" y2="74" stroke="#2B6CB0" stroke-width="1.5"/>
      <ellipse cx="50" cy="51" rx="16" ry="10" fill="#fff" stroke="#1A365D" stroke-width="0.8"/>
      <ellipse cx="50" cy="51" rx="10" ry="9" fill="url(#gvl07e)"/>
      <ellipse cx="50" cy="51" rx="5" ry="7" fill="#0D1B2E"/>
      <circle cx="53" cy="47" r="2.5" fill="#fff" opacity="0.9"/>
      <path d="M34,51 Q42,40 50,39 Q58,40 66,51" fill="none" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M34,51 Q42,62 50,63 Q58,62 66,51" fill="none" stroke="#1A365D" stroke-width="1" stroke-linecap="round"/>
      <line x1="38" y1="44" x2="36" y2="40" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="43" y1="40" x2="42" y2="36" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="50" y1="39" x2="50" y2="35" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="57" y1="40" x2="58" y2="36" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="62" y1="44" x2="64" y2="40" stroke="#1A365D" stroke-width="0.8"/>
      <path d="M36,38 Q50,33 64,38" fill="none" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M68,42 Q70,38 72,42 Q72,46 70,47 Q68,46 68,42 Z" fill="#BEE3F8"/>
      <circle cx="14" cy="50" r="1.5" fill="#FEB2B2" opacity="0.7"/>
      <circle cx="86" cy="50" r="1.5" fill="#FEB2B2" opacity="0.7"/>
    </svg>`,

    "VL·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <circle cx="50" cy="36" r="24" fill="none" stroke="#BEE3F8" stroke-width="0.5"/>
      <rect x="36" y="22" width="28" height="28" rx="2" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.5"/>
      <rect x="36" y="22" width="28" height="28" rx="2" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.5" transform="rotate(45 50 36)"/>
      <circle cx="50" cy="36" r="10" fill="#1A365D"/>
      <circle cx="50" cy="36" r="7.5" fill="#EBF8FF"/>
      <text x="50" y="40" text-anchor="middle" font-size="6" fill="#1A365D" font-family="sans-serif" font-weight="bold">SHERIFF</text>
      <rect x="30" y="68" width="36" height="8" rx="3" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <rect x="64" y="69" width="5" height="2" rx="1" fill="#2B6CB0"/>
      <path d="M36,76 Q34,82 36,88 Q40,92 46,90 L48,76 Z" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <rect x="32" y="64" width="8" height="6" rx="1" fill="#2B6CB0"/>
      <path d="M44,76 Q48,82 52,76" fill="none" stroke="#2B6CB0" stroke-width="1.5"/>
      <line x1="47" y1="76" x2="47" y2="82" stroke="#1A365D" stroke-width="1.2"/>
      <line x1="58" y1="68" x2="58" y2="76" stroke="#2B6CB0" stroke-width="0.5" opacity="0.5"/>
      <path d="M66,70 Q72,68 74,72 Q72,76 66,74" fill="#BEE3F8" opacity="0.5"/>
    </svg>`,

    "WW·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gww03b" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FFF0F0"/><stop offset="100%" stop-color="#FFF5F5"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#gww03b)" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="1,5"/>
      <circle cx="80" cy="14" r="11" fill="#fff" stroke="#C53030" stroke-width="0.8"/>
      <path d="M28,40 Q20,28 16,16 Q22,18 24,28 Q28,20 30,12 Q34,22 30,30 Q36,24 42,18" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M72,40 Q80,28 84,16 Q78,18 76,28 Q72,20 70,12 Q66,22 70,30 Q64,24 58,18" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="16" cy="15" r="1.5" fill="#C53030"/>
      <circle cx="30" cy="11" r="1.5" fill="#C53030"/>
      <circle cx="42" cy="17" r="1.5" fill="#C53030"/>
      <circle cx="84" cy="15" r="1.5" fill="#C53030"/>
      <circle cx="70" cy="11" r="1.5" fill="#C53030"/>
      <circle cx="58" cy="17" r="1.5" fill="#C53030"/>
      <path d="M22,52 Q20,40 26,32 Q34,22 50,20 Q66,22 74,32 Q80,40 78,52 Q76,62 68,68 Q60,74 50,74 Q40,74 32,68 Q24,62 22,52 Z" fill="#742A2A" stroke="#5A1E1E" stroke-width="0.8"/>
      <polygon points="50,52 46,60 54,60" fill="#3D0D0D"/>
      <ellipse cx="36" cy="46" rx="8" ry="7" fill="#2D0D0D"/>
      <ellipse cx="64" cy="46" rx="8" ry="7" fill="#2D0D0D"/>
      <circle cx="36" cy="46" r="4" fill="#C53030" opacity="0.8"/>
      <circle cx="64" cy="46" r="4" fill="#C53030" opacity="0.8"/>
      <circle cx="36" cy="46" r="2" fill="#742A2A"/>
      <circle cx="64" cy="46" r="2" fill="#742A2A"/>
      <circle cx="37" cy="44" r="1" fill="#FEB2B2" opacity="0.7"/>
      <circle cx="65" cy="44" r="1" fill="#FEB2B2" opacity="0.7"/>
      <path d="M30,68 Q30,78 50,82 Q70,78 70,68" fill="#8B3A3A" stroke="#5A1E1E" stroke-width="0.8"/>
      <rect x="34" y="68" width="5" height="8" rx="1.5" fill="#fff"/>
      <rect x="41" y="68" width="4" height="6" rx="1" fill="#f0f0f0"/>
      <rect x="47" y="68" width="6" height="9" rx="1.5" fill="#fff"/>
      <rect x="55" y="68" width="4" height="6" rx="1" fill="#f0f0f0"/>
      <rect x="61" y="68" width="5" height="8" rx="1.5" fill="#fff"/>
      <text x="50" y="36" text-anchor="middle" font-size="9" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.9">α</text>
    </svg>`,

    "NT·01": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,4"/>
      <path d="M25,42 Q25,38 50,35 Q75,38 75,42 L80,42 Q80,38 50,33 Q20,38 20,42 Z" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <path d="M25,42 Q10,30 8,14 Q20,18 28,32 Q30,20 36,10 Q40,24 32,38 Q28,40 25,42 Z" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <path d="M42,35 Q44,20 50,10 Q56,20 58,35 Q54,32 50,32 Q46,32 42,35 Z" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <path d="M75,42 Q90,30 92,14 Q80,18 72,32 Q70,20 64,10 Q60,24 68,38 Q72,40 75,42 Z" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <circle cx="8" cy="14" r="4.5" fill="#9AE6B4" stroke="#276749" stroke-width="0.8"/>
      <line x1="8" y1="18" x2="8" y2="21" stroke="#276749" stroke-width="1"/><circle cx="8" cy="22" r="1" fill="#276749"/>
      <circle cx="50" cy="10" r="4" fill="#9AE6B4" stroke="#276749" stroke-width="0.8"/>
      <line x1="50" y1="14" x2="50" y2="17" stroke="#276749" stroke-width="1"/><circle cx="50" cy="18" r="1" fill="#276749"/>
      <circle cx="92" cy="14" r="4.5" fill="#9AE6B4" stroke="#276749" stroke-width="0.8"/>
      <line x1="92" y1="18" x2="92" y2="21" stroke="#276749" stroke-width="1"/><circle cx="92" cy="22" r="1" fill="#276749"/>
      <path d="M20,56 Q18,44 25,42 Q38,40 50,42 Q62,40 75,42 Q82,44 80,56 Q80,72 70,80 Q60,88 50,88 Q40,88 30,80 Q20,72 20,56 Z" fill="#fff" stroke="#276749" stroke-width="1.5"/>
      <path d="M30,54 Q36,48 42,54" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="28" cy="64" rx="5" ry="3" fill="#9AE6B4" opacity="0.5"/>
      <path d="M26,68 Q34,76 42,70" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="42" x2="50" y2="88" stroke="#9AE6B4" stroke-width="1.5" stroke-dasharray="3,2"/>
      <path d="M58,54 Q64,60 70,54" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M57,50 Q64,46 70,50" fill="none" stroke="#1C4532" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M60,58 Q59,62 61,64 Q63,62 62,58 Z" fill="#9AE6B4"/>
      <path d="M58,74 Q64,68 72,72" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="66" r="4" fill="#276749"/>
      <circle cx="49" cy="65" r="1.5" fill="#9AE6B4" opacity="0.5"/>
    </svg>`,

    "NT·03": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gnt03h" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#9AE6B4"/><stop offset="100%" stop-color="#276749"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,4"/>
      <circle cx="12" cy="20" r="1.5" fill="#276749" opacity="0.6"/>
      <circle cx="88" cy="18" r="1.2" fill="#276749" opacity="0.5"/>
      <path d="M32,52 Q16,40 10,26 Q22,28 24,40 Q16,32 22,44 Q26,38 30,46 Q24,42 28,52 Z" fill="#9AE6B4" stroke="#276749" stroke-width="0.8" opacity="0.9"/>
      <path d="M32,56 Q14,52 8,42 Q18,46 22,56 Q18,50 24,58 Z" fill="#9AE6B4" stroke="#276749" stroke-width="0.5" opacity="0.6"/>
      <path d="M68,52 Q84,40 90,26 Q78,28 76,40 Q84,32 78,44 Q74,38 70,46 Q76,42 72,52 Z" fill="#9AE6B4" stroke="#276749" stroke-width="0.8" opacity="0.9"/>
      <path d="M68,56 Q86,52 92,42 Q82,46 78,56 Q82,50 76,58 Z" fill="#9AE6B4" stroke="#276749" stroke-width="0.5" opacity="0.6"/>
      <path d="M30,38 Q26,50 30,62" fill="none" stroke="#1C4532" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="30" y1="38" x2="30" y2="62" stroke="#9AE6B4" stroke-width="0.8"/>
      <line x1="32" y1="58" x2="84" y2="28" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M84,28 Q86,24 88,26 Q90,22 88,20 Q84,22 84,28 Q84,22 80,20 Q78,22 80,26 Q82,24 84,28 Z" fill="#276749"/>
      <path d="M32,58 Q28,52 24,56 Q28,58 24,62 Q28,60 32,58 Z" fill="#276749" opacity="0.7"/>
      <path d="M38,50 Q38,42 50,46 Q62,42 62,50 Q62,62 50,72 Q38,62 38,50 Z" fill="url(#gnt03h)" stroke="#1C4532" stroke-width="1"/>
      <ellipse cx="44" cy="48" rx="4" ry="6" fill="#fff" opacity="0.25" transform="rotate(-20 44 48)"/>
      <path d="M72,68 Q72,64 76,66 Q80,64 80,68 Q80,72 76,76 Q72,72 72,68 Z" fill="#9AE6B4" opacity="0.7"/>
      <path d="M18,62 Q18,59 21,60 Q24,59 24,62 Q24,65 21,68 Q18,65 18,62 Z" fill="#9AE6B4" opacity="0.5"/>
    </svg>`,

    /* ============================================================
       DECK 3 — Cards 19-27
       VL·08 Harlot, VL·10 Mayor, VL·11 Detective, VL·12 Medium,
       VL·13 Wizard, VL·18 Bodyguard, VL·19 Priest, VL·20 Veteran,
       VL·21 Apprentice Seer
       ============================================================ */

    /* VL·08 — HARLOT (Pelacur) — Masker malam + pintu rumah dengan bayangan */
    "VL·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Night stars -->
      <circle cx="15" cy="12" r="1" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="28" cy="8" r="1.5" fill="#2B6CB0" opacity="0.4"/>
      <circle cx="80" cy="10" r="1.2" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="88" cy="18" r="1" fill="#90CDF4" opacity="0.4"/>
      <!-- DOOR frame -->
      <rect x="32" y="30" width="36" height="52" rx="3" fill="#fff" stroke="#1A365D" stroke-width="1.5"/>
      <!-- Door arch top -->
      <path d="M32,38 Q32,30 50,30 Q68,30 68,38" fill="#BEE3F8" stroke="#1A365D" stroke-width="1.5"/>
      <!-- Door panels -->
      <rect x="35" y="40" width="13" height="18" rx="2" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.7"/>
      <rect x="52" y="40" width="13" height="18" rx="2" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.7"/>
      <rect x="35" y="62" width="13" height="14" rx="2" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.7"/>
      <rect x="52" y="62" width="13" height="14" rx="2" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.7"/>
      <!-- Door knob -->
      <circle cx="60" cy="57" r="2.5" fill="#1A365D"/>
      <circle cx="60" cy="57" r="1.2" fill="#90CDF4"/>
      <!-- MASK (mysterious visitor) centered on door -->
      <path d="M38,50 Q38,42 50,40 Q62,42 62,50 Q60,58 50,60 Q40,58 38,50 Z"
            fill="#1A365D" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Mask eye holes -->
      <ellipse cx="43" cy="48" rx="4.5" ry="3.5" fill="#EBF8FF"/>
      <ellipse cx="57" cy="48" rx="4.5" ry="3.5" fill="#EBF8FF"/>
      <!-- Mask eyes (mysterious glow) -->
      <ellipse cx="43" cy="48" rx="2.5" ry="2.5" fill="#90CDF4" opacity="0.8"/>
      <ellipse cx="57" cy="48" rx="2.5" ry="2.5" fill="#90CDF4" opacity="0.8"/>
      <circle cx="44" cy="47.5" r="0.8" fill="#fff" opacity="0.9"/>
      <circle cx="58" cy="47.5" r="0.8" fill="#fff" opacity="0.9"/>
      <!-- Mask decoration -->
      <path d="M38,50 Q44,54 50,54 Q56,54 62,50" fill="none" stroke="#2B6CB0" stroke-width="0.8" opacity="0.5"/>
      <!-- Feathers on mask -->
      <path d="M38,46 Q30,36 26,28 Q32,32 34,44" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.5" opacity="0.8"/>
      <path d="M38,44 Q28,32 22,22 Q30,28 32,42" fill="#90CDF4" stroke="#2B6CB0" stroke-width="0.5" opacity="0.6"/>
      <path d="M40,42 Q34,30 32,20 Q38,26 38,40" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.5" opacity="0.5"/>
      <!-- Footstep shadow below door (visiting) -->
      <ellipse cx="42" cy="84" rx="6" ry="2.5" fill="#2B6CB0" opacity="0.2"/>
      <ellipse cx="56" cy="86" rx="5" ry="2" fill="#2B6CB0" opacity="0.15"/>
    </svg>`,

    /* VL·10 — KEPALA DESA (Mayor) — Lencana + podium + mikrofon */
    "VL·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- LARGE BADGE / MEDAL center -->
      <circle cx="50" cy="36" r="26" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="50" cy="36" r="22" fill="#BEE3F8" stroke="#1A365D" stroke-width="1.5"/>
      <circle cx="50" cy="36" r="16" fill="#fff" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Star in badge -->
      <polygon points="50,20 53,29 63,29 55,35 58,44 50,38 42,44 45,35 37,29 47,29"
               fill="#2B6CB0" stroke="#1A365D" stroke-width="0.5"/>
      <!-- Badge text arc -->
      <circle cx="50" cy="36" r="20" fill="none" stroke="#1A365D" stroke-width="0.3" stroke-dasharray="1,3"/>
      <!-- PODIUM structure -->
      <rect x="28" y="72" width="44" height="18" rx="3" fill="#1A365D"/>
      <rect x="31" y="75" width="38" height="3" fill="#2B6CB0" opacity="0.4"/>
      <rect x="36" y="62" width="28" height="12" rx="2" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Podium front detail -->
      <rect x="40" y="65" width="20" height="6" rx="1" fill="#BEE3F8" opacity="0.5"/>
      <line x1="50" y1="65" x2="50" y2="71" stroke="#1A365D" stroke-width="0.5" opacity="0.4"/>
      <!-- MICROPHONE on podium -->
      <line x1="50" y1="62" x2="50" y2="52" stroke="#1A365D" stroke-width="1.8"/>
      <line x1="46" y1="54" x2="54" y2="54" stroke="#1A365D" stroke-width="1.2"/>
      <ellipse cx="50" cy="50" rx="5" ry="6.5" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Mic grille lines -->
      <line x1="46" y1="48" x2="54" y2="48" stroke="#2B6CB0" stroke-width="0.5" opacity="0.6"/>
      <line x1="46" y1="51" x2="54" y2="51" stroke="#2B6CB0" stroke-width="0.5" opacity="0.6"/>
      <line x1="46" y1="54" x2="54" y2="54" stroke="#2B6CB0" stroke-width="0.5" opacity="0.6"/>
      <!-- Sound waves from mic -->
      <path d="M58,46 Q62,50 58,54" fill="none" stroke="#90CDF4" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M62,44 Q68,50 62,56" fill="none" stroke="#90CDF4" stroke-width="0.6" stroke-linecap="round" opacity="0.6"/>
      <path d="M42,46 Q38,50 42,54" fill="none" stroke="#90CDF4" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M38,44 Q32,50 38,56" fill="none" stroke="#90CDF4" stroke-width="0.6" stroke-linecap="round" opacity="0.6"/>
    </svg>`,

    /* VL·11 — DETEKTIF (Detective) — Kaca pembesar + cerutu + tanda tanya */
    "VL·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- MAGNIFYING GLASS -->
      <!-- Handle -->
      <line x1="68" y1="68" x2="85" y2="85" stroke="#1A365D" stroke-width="5" stroke-linecap="round"/>
      <line x1="68" y1="68" x2="85" y2="85" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <!-- Lens ring -->
      <circle cx="46" cy="46" r="30" fill="none" stroke="#1A365D" stroke-width="4"/>
      <circle cx="46" cy="46" r="28" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Inner lens glass (subtle grid) -->
      <circle cx="46" cy="46" r="28" fill="#F0F8FF" opacity="0.9"/>
      <line x1="18" y1="46" x2="74" y2="46" stroke="#BEE3F8" stroke-width="0.4"/>
      <line x1="46" y1="18" x2="46" y2="74" stroke="#BEE3F8" stroke-width="0.4"/>
      <!-- QUESTION MARK inside lens (investigation) -->
      <path d="M40,34 Q40,28 46,28 Q52,28 52,34 Q52,40 46,42 L46,46"
            fill="none" stroke="#1A365D" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="46" cy="51" r="2.5" fill="#1A365D"/>
      <!-- Fingerprint circles (detective detail) -->
      <circle cx="22" cy="22" r="3" fill="none" stroke="#BEE3F8" stroke-width="0.5"/>
      <circle cx="22" cy="22" r="6" fill="none" stroke="#BEE3F8" stroke-width="0.5"/>
      <circle cx="22" cy="22" r="9" fill="none" stroke="#BEE3F8" stroke-width="0.4"/>
      <!-- Clue dots corner -->
      <circle cx="82" cy="14" r="1.5" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="86" cy="20" r="1" fill="#2B6CB0" opacity="0.4"/>
      <circle cx="78" cy="20" r="1" fill="#2B6CB0" opacity="0.4"/>
    </svg>`,

    /* VL·12 — MEDIUM — Tangan menyentuh bola kristal + arwah melayang */
    "VL·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl12_ball" cx="38%" cy="33%" r="65%">
          <stop offset="0%" stop-color="#E8F4FE"/>
          <stop offset="50%" stop-color="#BEE3F8"/>
          <stop offset="100%" stop-color="#2B6CB0" stop-opacity="0.5"/>
        </radialGradient>
        <radialGradient id="gvl12_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#90CDF4" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#90CDF4" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Ghostly aura -->
      <circle cx="50" cy="45" r="30" fill="url(#gvl12_glow)"/>
      <!-- GHOST / SPIRIT shape (floating above crystal ball) -->
      <path d="M34,30 Q32,16 50,14 Q68,16 66,30 Q68,36 64,38 Q68,40 64,44 Q60,40 58,44 Q54,40 50,44 Q46,40 42,44 Q38,40 36,44 Q32,40 36,38 Q32,36 34,30 Z"
            fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8" opacity="0.7"/>
      <!-- Ghost eyes -->
      <circle cx="43" cy="26" r="3" fill="#1A365D" opacity="0.6"/>
      <circle cx="57" cy="26" r="3" fill="#1A365D" opacity="0.6"/>
      <circle cx="44" cy="25" r="1.2" fill="#fff" opacity="0.8"/>
      <circle cx="58" cy="25" r="1.2" fill="#fff" opacity="0.8"/>
      <!-- Ghost mouth (O shape) -->
      <ellipse cx="50" cy="32" rx="3" ry="2" fill="none" stroke="#1A365D" stroke-width="1" opacity="0.5"/>
      <!-- Spirit energy lines rising from ball -->
      <path d="M42,52 Q40,44 43,38" fill="none" stroke="#90CDF4" stroke-width="0.7" stroke-linecap="round" opacity="0.7"/>
      <path d="M50,50 Q50,42 50,36" fill="none" stroke="#90CDF4" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
      <path d="M58,52 Q60,44 57,38" fill="none" stroke="#90CDF4" stroke-width="0.7" stroke-linecap="round" opacity="0.7"/>
      <!-- CRYSTAL BALL body -->
      <circle cx="50" cy="62" r="18" fill="url(#gvl12_ball)" stroke="#2B6CB0" stroke-width="1.5"/>
      <!-- Ball highlight -->
      <ellipse cx="44" cy="55" rx="6" ry="4" fill="#fff" opacity="0.5" transform="rotate(-20 44 55)"/>
      <!-- Ball inner glow symbol -->
      <circle cx="50" cy="63" r="6" fill="none" stroke="#1A365D" stroke-width="0.5" opacity="0.4"/>
      <circle cx="50" cy="63" r="3" fill="#2B6CB0" opacity="0.3"/>
      <!-- HANDS reaching up to ball from below -->
      <!-- Left hand -->
      <path d="M30,88 Q28,80 32,74 Q36,70 40,72 Q38,76 40,80" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1.2"/>
      <path d="M40,80 Q42,76 40,72" fill="none" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Right hand -->
      <path d="M70,88 Q72,80 68,74 Q64,70 60,72 Q62,76 60,80" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1.2"/>
      <!-- Ball pedestal -->
      <ellipse cx="50" cy="80" rx="14" ry="3.5" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
    </svg>`,

    /* VL·13 — PENYIHIR PENUKAR (Wizard) — Dua kartu berputar + tongkat sihir */
    "VL·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Magic wand -->
      <line x1="50" y1="15" x2="50" y2="60" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="50" cy="13" r="5" fill="#2B6CB0"/>
      <circle cx="50" cy="13" r="2.5" fill="#BEE3F8"/>
      <circle cx="50" cy="13" r="1" fill="#fff"/>
      <!-- Magic sparkles from wand tip -->
      <circle cx="44" cy="8" r="1.2" fill="#90CDF4" opacity="0.8"/>
      <circle cx="57" cy="6" r="1" fill="#2B6CB0" opacity="0.7"/>
      <circle cx="42" cy="4" r="0.8" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="60" cy="10" r="1.5" fill="#90CDF4" opacity="0.6"/>
      <!-- Swap arrows (circular exchange) -->
      <path d="M26,48 Q16,36 26,26 Q38,16 50,20" fill="none" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <polygon points="50,20 44,16 46,24" fill="#2B6CB0"/>
      <path d="M74,52 Q84,64 74,74 Q62,84 50,80" fill="none" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <polygon points="50,80 56,84 54,76" fill="#2B6CB0"/>
      <!-- CARD LEFT (being swapped) -->
      <g transform="rotate(-15 30 62)">
        <rect x="18" y="54" width="24" height="34" rx="3" fill="#fff" stroke="#2B6CB0" stroke-width="1.2"/>
        <rect x="21" y="57" width="18" height="24" rx="1" fill="#BEE3F8" opacity="0.5"/>
        <circle cx="30" cy="64" r="4" fill="#2B6CB0" opacity="0.7"/>
        <line x1="22" y1="72" x2="38" y2="72" stroke="#2B6CB0" stroke-width="0.6"/>
        <line x1="22" y1="75" x2="38" y2="75" stroke="#2B6CB0" stroke-width="0.6"/>
        <line x1="22" y1="78" x2="34" y2="78" stroke="#2B6CB0" stroke-width="0.6"/>
      </g>
      <!-- CARD RIGHT (being swapped) -->
      <g transform="rotate(15 70 62)">
        <rect x="58" y="54" width="24" height="34" rx="3" fill="#fff" stroke="#1A365D" stroke-width="1.2"/>
        <rect x="61" y="57" width="18" height="24" rx="1" fill="#BEE3F8" opacity="0.5"/>
        <polygon points="70,57 78,66 62,66" fill="#1A365D" opacity="0.5"/>
        <line x1="62" y1="72" x2="78" y2="72" stroke="#1A365D" stroke-width="0.6"/>
        <line x1="62" y1="75" x2="78" y2="75" stroke="#1A365D" stroke-width="0.6"/>
        <line x1="62" y1="78" x2="74" y2="78" stroke="#1A365D" stroke-width="0.6"/>
      </g>
    </svg>`,

    /* VL·18 — PRAJURIT / BODYGUARD — Perisai + tombak, siap berkorban */
    "VL·18": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl18_shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EBF8FF"/>
          <stop offset="100%" stop-color="#BEE3F8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- SPEAR (left side) -->
      <line x1="25" y1="90" x2="55" y2="10" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Spear tip -->
      <polygon points="55,10 50,18 60,18" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="55" y1="10" x2="55" y2="22" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Spear butt -->
      <circle cx="24" cy="91" r="2.5" fill="#1A365D"/>
      <!-- SHIELD (main, center-right) -->
      <path d="M42,12 L80,24 L80,58 Q80,82 61,94 Q42,82 42,58 L42,24 Z"
            fill="url(#gvl18_shield)" stroke="#2B6CB0" stroke-width="2" stroke-linejoin="round"/>
      <!-- Inner shield border -->
      <path d="M47,18 L75,28 L75,56 Q75,76 61,88 Q47,76 47,56 L47,28 Z"
            fill="none" stroke="#2B6CB0" stroke-width="0.8" stroke-dasharray="3,2"/>
      <!-- Shield heraldic cross -->
      <line x1="61" y1="22" x2="61" y2="86" stroke="#2B6CB0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="47" y1="52" x2="75" y2="52" stroke="#2B6CB0" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Shield center emblem -->
      <circle cx="61" cy="52" r="10" fill="#2B6CB0"/>
      <circle cx="61" cy="52" r="6.5" fill="#EBF8FF"/>
      <circle cx="61" cy="52" r="3" fill="#1A365D"/>
      <!-- Star on shield center -->
      <polygon points="61,46 62.5,50 67,50 63.5,52.5 65,56.5 61,54 57,56.5 58.5,52.5 55,50 59.5,50"
               fill="#2B6CB0" opacity="0.6" transform="scale(0.7) translate(26,22)"/>
      <!-- Shield corner dots -->
      <circle cx="52" cy="32" r="2" fill="#2B6CB0" opacity="0.6"/>
      <circle cx="70" cy="32" r="2" fill="#2B6CB0" opacity="0.6"/>
      <!-- Crack on shield (sacrifice mark) -->
      <path d="M58,62 Q60,66 62,68 Q64,70 66,74" fill="none" stroke="#742A2A" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    </svg>`,

    /* VL·19 — PENDETA (Priest) — Salib + botol air suci menyiram */
    "VL·19": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- ORNATE CROSS center -->
      <!-- Vertical beam -->
      <rect x="44" y="10" width="12" height="62" rx="3" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Horizontal beam -->
      <rect x="28" y="26" width="44" height="12" rx="3" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Cross highlights -->
      <rect x="46" y="12" width="4" height="58" rx="1" fill="#2B6CB0" opacity="0.3"/>
      <rect x="30" y="28" width="40" height="4" rx="1" fill="#2B6CB0" opacity="0.3"/>
      <!-- Cross center gem -->
      <circle cx="50" cy="32" r="7" fill="#2B6CB0"/>
      <circle cx="50" cy="32" r="4.5" fill="#BEE3F8"/>
      <circle cx="50" cy="32" r="2" fill="#fff"/>
      <!-- HOLY WATER BOTTLE (small, right side) -->
      <rect x="68" y="38" width="10" height="18" rx="3" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1"/>
      <rect x="70" y="32" width="6" height="8" rx="1.5" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <rect x="71" y="28" width="4" height="6" rx="1" fill="#fff" stroke="#2B6CB0" stroke-width="0.7"/>
      <!-- Cross symbol on bottle -->
      <line x1="73" y1="40" x2="73" y2="50" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="70" y1="45" x2="76" y2="45" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Holy water dripping / splashing -->
      <path d="M72,56 Q70,62 68,66" fill="none" stroke="#90CDF4" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="66" cy="68" r="2" fill="#BEE3F8" opacity="0.7"/>
      <circle cx="70" cy="72" r="1.5" fill="#90CDF4" opacity="0.6"/>
      <circle cx="64" cy="74" r="1" fill="#BEE3F8" opacity="0.5"/>
      <!-- Holy glow around cross top -->
      <circle cx="50" cy="10" r="5" fill="none" stroke="#BEE3F8" stroke-width="0.5" opacity="0.6"/>
      <!-- Base of cross / pedestal -->
      <rect x="40" y="72" width="20" height="8" rx="2" fill="#2B6CB0"/>
      <rect x="36" y="78" width="28" height="6" rx="2" fill="#1A365D"/>
    </svg>`,

    /* VL·20 — VETERAN TUA (Veteran) — Medali perang + luka silang di badan */
    "VL·20": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- MILITARY MEDALS (hanging ribbons) -->
      <!-- Medal 1 -->
      <rect x="24" y="8" width="12" height="16" rx="1" fill="#1A365D"/>
      <line x1="26" y1="8" x2="36" y2="8" stroke="#2B6CB0" stroke-width="3"/>
      <circle cx="30" cy="26" r="7" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1.2"/>
      <polygon points="30,20 31.5,24.5 36.5,24.5 32.5,27 34,31.5 30,29 26,31.5 27.5,27 23.5,24.5 28.5,24.5" fill="#2B6CB0" transform="scale(0.55) translate(25,18)"/>
      <circle cx="30" cy="26" r="3" fill="#2B6CB0"/>
      <circle cx="30" cy="26" r="1.5" fill="#EBF8FF"/>
      <!-- Medal 2 -->
      <rect x="44" y="8" width="12" height="16" rx="1" fill="#742A2A"/>
      <line x1="46" y1="8" x2="56" y2="8" stroke="#C53030" stroke-width="3"/>
      <circle cx="50" cy="26" r="7" fill="#FFF5F5" stroke="#C53030" stroke-width="1.2"/>
      <circle cx="50" cy="26" r="3.5" fill="#C53030"/>
      <circle cx="50" cy="26" r="1.5" fill="#fff"/>
      <!-- Medal 3 -->
      <rect x="64" y="8" width="12" height="16" rx="1" fill="#1A365D"/>
      <line x1="66" y1="8" x2="76" y2="8" stroke="#2B6CB0" stroke-width="3"/>
      <circle cx="70" cy="26" r="7" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1.2"/>
      <circle cx="70" cy="26" r="4" fill="#1A365D"/>
      <circle cx="70" cy="26" r="2" fill="#90CDF4"/>
      <!-- SOLDIER SILHOUETTE (tough, scarred) -->
      <!-- Head/helmet -->
      <path d="M38,44 Q36,36 50,34 Q64,36 62,44 Q64,48 62,50 L50,52 L38,50 Q36,48 38,44 Z"
            fill="#1A365D" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Helmet brim -->
      <path d="M34,46 Q50,42 66,46" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.5"/>
      <!-- Face (weathered veteran) -->
      <path d="M40,50 Q40,56 46,60 Q50,62 54,60 Q60,56 60,50" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.6"/>
      <!-- Battle scar on face -->
      <path d="M47,52 Q49,54 48,58" fill="none" stroke="#742A2A" stroke-width="0.8" stroke-linecap="round" opacity="0.6"/>
      <!-- Eyes (battle-hardened) -->
      <line x1="43" y1="53" x2="47" y2="53" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="53" y1="53" x2="57" y2="53" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- UNIFORM BODY -->
      <path d="M36,62 Q32,66 32,80 L40,82 L42,70 L50,68 L58,70 L60,82 L68,80 L68,66 Q64,62 56,60 Q50,62 44,60 Q40,62 36,62 Z"
            fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Uniform buttons -->
      <circle cx="50" cy="66" r="1.2" fill="#1A365D"/>
      <circle cx="50" cy="71" r="1.2" fill="#1A365D"/>
      <circle cx="50" cy="76" r="1.2" fill="#1A365D"/>
      <!-- Wound mark on uniform (attacked but survived) -->
      <path d="M40,68 Q42,72 40,76" fill="none" stroke="#C53030" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
    </svg>`,

    /* VL·21 — MURID PERAMAL (Apprentice Seer) — Bola kristal kecil + buku + mata kecil */
    "VL·21": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl21_ball" cx="38%" cy="32%" r="60%">
          <stop offset="0%" stop-color="#E8F4FE"/>
          <stop offset="70%" stop-color="#BEE3F8"/>
          <stop offset="100%" stop-color="#2B6CB0" stop-opacity="0.4"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Stars (dormant, faint) -->
      <circle cx="14" cy="14" r="1.2" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="86" cy="12" r="1" fill="#BEE3F8" opacity="0.5"/>
      <circle cx="20" cy="30" r="0.8" fill="#90CDF4" opacity="0.4"/>
      <circle cx="82" cy="28" r="0.8" fill="#90CDF4" opacity="0.4"/>

      <!-- OPEN BOOK (studying, apprentice) -->
      <path d="M12,58 Q12,50 22,48 Q36,46 50,50 Q64,46 78,48 Q88,50 88,58 L88,82 Q78,80 64,82 Q54,84 50,82 Q46,84 36,82 Q22,80 12,82 Z"
            fill="#fff" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Book spine -->
      <line x1="50" y1="50" x2="50" y2="82" stroke="#2B6CB0" stroke-width="1.5"/>
      <!-- Book left page lines -->
      <line x1="16" y1="58" x2="46" y2="56" stroke="#BEE3F8" stroke-width="0.7"/>
      <line x1="16" y1="63" x2="46" y2="61" stroke="#BEE3F8" stroke-width="0.6"/>
      <line x1="16" y1="68" x2="46" y2="66" stroke="#BEE3F8" stroke-width="0.6"/>
      <line x1="16" y1="73" x2="46" y2="71" stroke="#BEE3F8" stroke-width="0.6"/>
      <!-- Book right page lines -->
      <line x1="54" y1="56" x2="84" y2="58" stroke="#BEE3F8" stroke-width="0.7"/>
      <line x1="54" y1="61" x2="84" y2="63" stroke="#BEE3F8" stroke-width="0.6"/>
      <line x1="54" y1="66" x2="84" y2="68" stroke="#BEE3F8" stroke-width="0.6"/>
      <line x1="54" y1="71" x2="84" y2="73" stroke="#BEE3F8" stroke-width="0.6"/>
      <!-- EYE SYMBOL on book left page (inherited sight) -->
      <ellipse cx="30" cy="64" rx="10" ry="6" fill="none" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="30" cy="64" r="4" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="30" cy="64" r="2" fill="#1A365D"/>
      <circle cx="31.2" cy="63" r="0.8" fill="#fff" opacity="0.8"/>
      <!-- Small crystal ball on right page (still learning) -->
      <circle cx="68" cy="64" r="10" fill="url(#gvl21_ball)" stroke="#2B6CB0" stroke-width="1"/>
      <ellipse cx="64" cy="59" rx="3.5" ry="2.5" fill="#fff" opacity="0.5" transform="rotate(-20 64 59)"/>
      <circle cx="68" cy="64" r="4" fill="none" stroke="#90CDF4" stroke-width="0.5" opacity="0.5" stroke-dasharray="2,2"/>
      <!-- Chain / connection between eye and ball (inheritance) -->
      <path d="M40,64 Q54,60 58,64" fill="none" stroke="#BEE3F8" stroke-width="0.8" stroke-dasharray="2,2"/>
      <!-- SMALL HAND reading / tracing -->
      <path d="M44,82 Q42,88 46,92 Q50,94 54,92 Q58,88 56,82"
            fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Fingers -->
      <line x1="44" y1="82" x2="43" y2="76" stroke="#EBF8FF" stroke-width="2" stroke-linecap="round"/>
      <line x1="47" y1="83" x2="46" y2="75" stroke="#EBF8FF" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="83" x2="50" y2="74" stroke="#EBF8FF" stroke-width="2" stroke-linecap="round"/>
      <line x1="53" y1="83" x2="54" y2="75" stroke="#EBF8FF" stroke-width="2" stroke-linecap="round"/>
      <line x1="56" y1="82" x2="57" y2="76" stroke="#EBF8FF" stroke-width="2" stroke-linecap="round"/>
      <!-- Book cover top -->
      <path d="M12,52 Q12,48 22,46 Q36,44 50,48 Q64,44 78,46 Q88,48 88,52 L88,56 Q78,54 64,56 Q54,58 50,56 Q46,58 36,56 Q22,54 12,56 Z"
            fill="#1A365D" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Book title on cover -->
      <line x1="20" y1="50" x2="46" y2="50" stroke="#2B6CB0" stroke-width="0.5" opacity="0.5"/>
      <line x1="54" y1="50" x2="80" y2="50" stroke="#2B6CB0" stroke-width="0.5" opacity="0.5"/>
    </svg>`,

    /* ============================================================
       DECK 4 — Cards 28-36
       VL·22 Aura Seer, VL·23 Beholder, VL·24 Diseased, VL·25 Ghost,
       VL·26 Village Idiot, VL·27 Insomniac, VL·28 Martyr,
       VL·29+VL·30 Mason (same SVG via roleAliases)
       ============================================================ */

    /* VL·22 — PENERAWANG AURA (Aura Seer)
       Konsep: Tangan mengeluarkan aura + siluet 2 pemain dengan aura berbeda */
    "VL·22": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl22_aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#90CDF4" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#90CDF4" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Background aura glow -->
      <circle cx="50" cy="50" r="36" fill="url(#gvl22_aura)"/>
      <!-- Aura rings emanating outward -->
      <circle cx="50" cy="50" r="28" fill="none" stroke="#BEE3F8" stroke-width="1" opacity="0.8"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#90CDF4" stroke-width="0.6" opacity="0.5"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" opacity="0.3"/>
      <!-- FIGURE LEFT (passive — no special power — dim aura) -->
      <!-- Body -->
      <ellipse cx="28" cy="60" rx="8" ry="14" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8" opacity="0.7"/>
      <!-- Head -->
      <circle cx="28" cy="42" r="8" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8" opacity="0.7"/>
      <!-- Dim aura (normal person) -->
      <circle cx="28" cy="52" r="16" fill="none" stroke="#BEE3F8" stroke-width="0.5" stroke-dasharray="2,3" opacity="0.5"/>
      <!-- X mark (no power) -->
      <line x1="24" y1="38" x2="32" y2="46" stroke="#2B6CB0" stroke-width="1" opacity="0.4"/>
      <line x1="32" y1="38" x2="24" y2="46" stroke="#2B6CB0" stroke-width="1" opacity="0.4"/>

      <!-- CENTER HAND (pointing/scanning) -->
      <!-- Palm -->
      <path d="M44,58 Q42,48 46,44 Q50,40 54,44 Q58,48 56,58 Z" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Fingers -->
      <line x1="46" y1="44" x2="44" y2="36" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="49" y1="42" x2="48" y2="33" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="42" x2="52" y2="33" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="55" y1="43" x2="56" y2="35" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Eye in palm (third eye / aura sensing) -->
      <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#EBF8FF"/>
      <circle cx="50" cy="52" r="2.5" fill="#2B6CB0"/>
      <circle cx="50" cy="52" r="1" fill="#1A365D"/>
      <circle cx="51" cy="51" r="0.6" fill="#fff" opacity="0.8"/>
      <!-- Scan beam from palm to right figure -->
      <path d="M55,50 Q66,46 68,46" fill="none" stroke="#90CDF4" stroke-width="1" stroke-dasharray="2,1" opacity="0.8"/>

      <!-- FIGURE RIGHT (has power — bright aura glowing) -->
      <!-- Glowing aura rings -->
      <circle cx="76" cy="52" r="20" fill="none" stroke="#2B6CB0" stroke-width="0.8" opacity="0.6"/>
      <circle cx="76" cy="52" r="16" fill="none" stroke="#90CDF4" stroke-width="1" opacity="0.8"/>
      <!-- Body -->
      <ellipse cx="76" cy="62" rx="8" ry="12" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8" opacity="0.9"/>
      <!-- Head -->
      <circle cx="76" cy="44" r="8" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8" opacity="0.9"/>
      <!-- Check mark (has special power) -->
      <path d="M72,44 Q75,48 80,40" fill="none" stroke="#BEE3F8" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    /* VL·23 — SANG PENGAWAS (Beholder)
       Konsep: Mata raksasa terbuka + siluet peramal kecil yang diawasi */
    "VL·23": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl23_iris" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stop-color="#90CDF4"/>
          <stop offset="60%" stop-color="#2B6CB0"/>
          <stop offset="100%" stop-color="#1A365D"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- BIG EYE (all-seeing, the Beholder) -->
      <!-- Outer almond shape -->
      <path d="M8,46 Q30,22 50,22 Q70,22 92,46 Q70,70 50,70 Q30,70 8,46 Z"
            fill="#fff" stroke="#1A365D" stroke-width="1.5"/>
      <!-- Iris -->
      <circle cx="50" cy="46" r="18" fill="url(#gvl23_iris)"/>
      <!-- Pupil -->
      <circle cx="50" cy="46" r="9" fill="#0D1B2E"/>
      <!-- Eye glint highlights -->
      <circle cx="55" cy="40" r="4" fill="#fff" opacity="0.7"/>
      <circle cx="57" cy="38" r="1.8" fill="#fff" opacity="0.5"/>
      <!-- Iris texture rings -->
      <circle cx="50" cy="46" r="14" fill="none" stroke="#BEE3F8" stroke-width="0.4" opacity="0.5"/>
      <!-- Eyelashes top -->
      <line x1="30" y1="32" x2="28" y2="26" stroke="#1A365D" stroke-width="1"/>
      <line x1="38" y1="25" x2="37" y2="19" stroke="#1A365D" stroke-width="1"/>
      <line x1="50" y1="22" x2="50" y2="16" stroke="#1A365D" stroke-width="1"/>
      <line x1="62" y1="25" x2="63" y2="19" stroke="#1A365D" stroke-width="1"/>
      <line x1="70" y1="32" x2="72" y2="26" stroke="#1A365D" stroke-width="1"/>
      <!-- Eyelid lines -->
      <path d="M8,46 Q30,22 50,22 Q70,22 92,46" fill="none" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M8,46 Q30,70 50,70 Q70,70 92,46" fill="none" stroke="#1A365D" stroke-width="1" stroke-linecap="round"/>
      <!-- SEER silhouette visible in pupil (what the Beholder knows) -->
      <circle cx="50" cy="44" r="3.5" fill="#2B6CB0" opacity="0.8"/>
      <rect x="48" y="47" width="4" height="6" rx="1" fill="#2B6CB0" opacity="0.7"/>
      <!-- Telescope/sight line from pupil downward -->
      <line x1="50" y1="70" x2="50" y2="80" stroke="#BEE3F8" stroke-width="0.8" stroke-dasharray="2,2"/>
      <circle cx="50" cy="83" r="3" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Watchful dots in corners -->
      <circle cx="10" cy="86" r="1.5" fill="#2B6CB0" opacity="0.4"/>
      <circle cx="90" cy="86" r="1.5" fill="#2B6CB0" opacity="0.4"/>
    </svg>`,

    /* VL·24 — WARGA BERPENYAKIT (Diseased)
       Konsep: Tengkorak warga + simbol racun/biohazard, kawanan serigala jatuh sakit */
    "VL·24": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Hazard/skull backing -->
      <circle cx="50" cy="42" r="28" fill="#BEE3F8" opacity="0.4"/>
      <!-- SKULL (human/villager) -->
      <!-- Skull dome -->
      <path d="M28,44 Q26,30 50,26 Q74,30 72,44 Q74,54 66,60 Q58,66 50,66 Q42,66 34,60 Q26,54 28,44 Z"
            fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1.2"/>
      <!-- Eye sockets -->
      <ellipse cx="40" cy="42" rx="7" ry="6" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="60" cy="42" rx="7" ry="6" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Sick X eyes -->
      <line x1="36" y1="38" x2="44" y2="46" stroke="#742A2A" stroke-width="1.2"/>
      <line x1="44" y1="38" x2="36" y2="46" stroke="#742A2A" stroke-width="1.2"/>
      <line x1="56" y1="38" x2="64" y2="46" stroke="#742A2A" stroke-width="1.2"/>
      <line x1="64" y1="38" x2="56" y2="46" stroke="#742A2A" stroke-width="1.2"/>
      <!-- Nose cavity -->
      <polygon points="50,50 47,56 53,56" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.6"/>
      <!-- Teeth (simple grin) -->
      <path d="M34,62 Q50,70 66,62" fill="none" stroke="#2B6CB0" stroke-width="1"/>
      <line x1="40" y1="62" x2="40" y2="68" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="46" y1="63" x2="46" y2="70" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="50" y1="64" x2="50" y2="71" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="54" y1="63" x2="54" y2="70" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="60" y1="62" x2="60" y2="68" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- BIOHAZARD / POISON symbol bottom -->
      <circle cx="50" cy="84" r="10" fill="none" stroke="#742A2A" stroke-width="1.2" opacity="0.7"/>
      <circle cx="50" cy="84" r="3" fill="none" stroke="#742A2A" stroke-width="1.5" opacity="0.8"/>
      <line x1="50" y1="81" x2="50" y2="74" stroke="#742A2A" stroke-width="1" opacity="0.7"/>
      <line x1="50" y1="87" x2="45" y2="93" stroke="#742A2A" stroke-width="1" opacity="0.7"/>
      <line x1="50" y1="87" x2="55" y2="93" stroke="#742A2A" stroke-width="1" opacity="0.7"/>
      <!-- Poison bubbles floating up -->
      <circle cx="36" cy="70" r="2.5" fill="none" stroke="#742A2A" stroke-width="0.7" opacity="0.5"/>
      <circle cx="30" cy="62" r="2" fill="none" stroke="#742A2A" stroke-width="0.6" opacity="0.4"/>
      <circle cx="70" cy="70" r="2.5" fill="none" stroke="#742A2A" stroke-width="0.7" opacity="0.5"/>
      <circle cx="76" cy="62" r="2" fill="none" stroke="#742A2A" stroke-width="0.6" opacity="0.4"/>
    </svg>`,

    /* VL·25 — HANTU GENTAYANGAN (Ghost)
       Konsep: Arwah transparan melayang + surat/pesan dari kubur */
    "VL·25": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl25_glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#90CDF4" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#90CDF4" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Ghost glow aura -->
      <circle cx="50" cy="38" r="34" fill="url(#gvl25_glow)"/>
      <!-- GHOST body (classic floating sheet ghost) -->
      <path d="M26,46 Q24,26 50,20 Q76,26 74,46 Q76,58 72,64 Q68,70 64,64 Q60,58 56,64 Q52,70 50,64 Q48,58 44,64 Q40,70 36,64 Q32,58 28,64 Q24,58 26,46 Z"
            fill="#BEE3F8" stroke="#2B6CB0" stroke-width="1" opacity="0.85"/>
      <!-- Ghost face -->
      <!-- Eyes (hollow/ghostly) -->
      <ellipse cx="41" cy="40" rx="5.5" ry="4.5" fill="#1A365D" opacity="0.7"/>
      <ellipse cx="59" cy="40" rx="5.5" ry="4.5" fill="#1A365D" opacity="0.7"/>
      <circle cx="42" cy="39" r="1.8" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="60" cy="39" r="1.8" fill="#BEE3F8" opacity="0.6"/>
      <!-- Wailing mouth (O) -->
      <ellipse cx="50" cy="50" rx="4" ry="5" fill="#1A365D" opacity="0.6"/>
      <!-- Ghost wisps / transparency lines -->
      <path d="M30,46 Q28,42 32,40" fill="none" stroke="#fff" stroke-width="0.8" opacity="0.5"/>
      <path d="M70,46 Q72,42 68,40" fill="none" stroke="#fff" stroke-width="0.8" opacity="0.5"/>
      <!-- LETTER / MESSAGE from the grave -->
      <g transform="rotate(-8 50 80)">
        <rect x="30" y="72" width="40" height="28" rx="2" fill="#fff" stroke="#2B6CB0" stroke-width="1"/>
        <!-- Envelope flap -->
        <path d="M30,72 L50,86 L70,72" fill="none" stroke="#2B6CB0" stroke-width="1"/>
        <!-- Letter lines inside -->
        <line x1="34" y1="80" x2="56" y2="80" stroke="#BEE3F8" stroke-width="0.6"/>
        <line x1="34" y1="84" x2="60" y2="84" stroke="#BEE3F8" stroke-width="0.6"/>
        <line x1="34" y1="88" x2="50" y2="88" stroke="#BEE3F8" stroke-width="0.6"/>
        <!-- Wax seal -->
        <circle cx="62" cy="86" r="5" fill="#2B6CB0"/>
        <text x="62" y="89" text-anchor="middle" font-size="5" fill="#EBF8FF" font-family="sans-serif">✦</text>
      </g>
      <!-- Floating sparkles around ghost -->
      <circle cx="18" cy="30" r="1.5" fill="#BEE3F8" opacity="0.7"/>
      <circle cx="82" cy="28" r="1.2" fill="#90CDF4" opacity="0.6"/>
      <circle cx="14" cy="50" r="1" fill="#BEE3F8" opacity="0.5"/>
      <circle cx="86" cy="52" r="1" fill="#BEE3F8" opacity="0.5"/>
    </svg>`,

    /* VL·26 — ORANG DUNGU (Village Idiot)
       Konsep: Kartu identitas terbuka + wajah bodoh tertawa + voting dibatalkan */
    "VL·26": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- ID CARD being revealed (open/flipped) -->
      <rect x="22" y="28" width="56" height="38" rx="4" fill="#fff" stroke="#2B6CB0" stroke-width="1.5"/>
      <!-- Card header bar -->
      <rect x="22" y="28" width="56" height="10" rx="4" fill="#2B6CB0"/>
      <rect x="22" y="34" width="56" height="4" fill="#2B6CB0"/>
      <!-- ID text on card -->
      <text x="50" y="36" text-anchor="middle" font-size="5" fill="#EBF8FF" font-family="sans-serif" font-weight="bold">VILLAGE IDIOT</text>
      <!-- Face on card (goofy) -->
      <!-- Face circle -->
      <circle cx="38" cy="53" r="10" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Goofy eyes (one big, one small - asymmetric) -->
      <circle cx="34" cy="50" r="3" fill="#1A365D"/>
      <circle cx="35" cy="49" r="1.2" fill="#fff"/>
      <circle cx="42" cy="51" r="2" fill="#1A365D"/>
      <circle cx="42.8" cy="50.2" r="0.8" fill="#fff"/>
      <!-- Big grin / dumb smile -->
      <path d="M31,56 Q38,62 45,56" fill="none" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Tongue sticking out -->
      <ellipse cx="36" cy="59" rx="3" ry="2" fill="#FC8181" opacity="0.8"/>
      <!-- Freckles -->
      <circle cx="32" cy="54" r="0.8" fill="#2B6CB0" opacity="0.4"/>
      <circle cx="44" cy="55" r="0.8" fill="#2B6CB0" opacity="0.4"/>
      <!-- Text lines on card (role description) -->
      <line x1="52" y1="44" x2="72" y2="44" stroke="#BEE3F8" stroke-width="0.7"/>
      <line x1="52" y1="48" x2="72" y2="48" stroke="#BEE3F8" stroke-width="0.6"/>
      <line x1="52" y1="52" x2="68" y2="52" stroke="#BEE3F8" stroke-width="0.6"/>
      <!-- VOTE CANCELLED stamp over card -->
      <circle cx="66" cy="60" r="12" fill="none" stroke="#C53030" stroke-width="2" opacity="0.7"/>
      <line x1="57" y1="51" x2="75" y2="69" stroke="#C53030" stroke-width="2.5" opacity="0.7" stroke-linecap="round"/>
      <!-- Crossed-out ballot below -->
      <rect x="28" y="72" width="44" height="18" rx="3" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="32" y1="78" x2="50" y2="78" stroke="#1A365D" stroke-width="0.7"/>
      <line x1="32" y1="82" x2="46" y2="82" stroke="#1A365D" stroke-width="0.7"/>
      <!-- X through ballot -->
      <line x1="54" y1="73" x2="70" y2="89" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
      <line x1="70" y1="73" x2="54" y2="89" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
    </svg>`,

    /* VL·27 — INSOMNIA (Insomniac)
       Konsep: Mata terbuka lebar di malam hari + jam menunjuk larut malam */
    "VL·27": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl27_eye" cx="43%" cy="38%" r="58%">
          <stop offset="0%" stop-color="#90CDF4"/>
          <stop offset="100%" stop-color="#1A365D"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Night stars (sleepless night) -->
      <circle cx="12" cy="12" r="1.5" fill="#2B6CB0" opacity="0.6"/>
      <circle cx="88" cy="10" r="1.2" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="20" cy="25" r="1" fill="#90CDF4" opacity="0.5"/>
      <circle cx="80" cy="22" r="1" fill="#90CDF4" opacity="0.5"/>
      <circle cx="6" cy="40" r="1.2" fill="#BEE3F8" opacity="0.4"/>
      <circle cx="94" cy="38" r="1" fill="#BEE3F8" opacity="0.4"/>
      <!-- WIDE OPEN EYE (cannot sleep) — top half -->
      <ellipse cx="50" cy="38" rx="22" ry="14" fill="#fff" stroke="#1A365D" stroke-width="1.2"/>
      <circle cx="50" cy="38" rx="14" r="14" fill="url(#gvl27_eye)"/>
      <circle cx="50" cy="38" r="8" fill="#0D1B2E"/>
      <!-- Eye shine (alert, awake) -->
      <circle cx="55" cy="33" r="3.5" fill="#fff" opacity="0.8"/>
      <circle cx="57" cy="31" r="1.5" fill="#fff" opacity="0.5"/>
      <!-- Iris detail rings -->
      <circle cx="50" cy="38" r="11" fill="none" stroke="#BEE3F8" stroke-width="0.4" opacity="0.6"/>
      <!-- Eyelashes (open, no drooping) -->
      <line x1="32" y1="32" x2="30" y2="27" stroke="#1A365D" stroke-width="0.9"/>
      <line x1="38" y1="27" x2="37" y2="22" stroke="#1A365D" stroke-width="0.9"/>
      <line x1="50" y1="24" x2="50" y2="19" stroke="#1A365D" stroke-width="0.9"/>
      <line x1="62" y1="27" x2="63" y2="22" stroke="#1A365D" stroke-width="0.9"/>
      <line x1="68" y1="32" x2="70" y2="27" stroke="#1A365D" stroke-width="0.9"/>
      <!-- Under-eye bags (tired) -->
      <path d="M30,48 Q40,52 50,52 Q60,52 70,48" fill="none" stroke="#1A365D" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M32,51 Q41,55 50,55 Q59,55 68,51" fill="none" stroke="#BEE3F8" stroke-width="0.5" opacity="0.6"/>
      <!-- CLOCK (showing very late hour — 3:00 AM) -->
      <circle cx="50" cy="76" r="16" fill="#fff" stroke="#1A365D" stroke-width="1.5"/>
      <circle cx="50" cy="76" r="14" fill="none" stroke="#2B6CB0" stroke-width="0.5"/>
      <!-- Clock ticks -->
      <line x1="50" y1="62" x2="50" y2="64" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="50" y1="88" x2="50" y2="90" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="34" y1="76" x2="36" y2="76" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="64" y1="76" x2="66" y2="76" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Clock hands 3:00 AM -->
      <line x1="50" y1="76" x2="50" y2="65" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="50" y1="76" x2="62" y2="76" stroke="#C53030" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="50" cy="76" r="1.5" fill="#1A365D"/>
      <!-- ZZZ drifting up (the irony, cannot sleep) -->
      <text x="72" y="60" font-size="8" fill="#BEE3F8" font-family="sans-serif" font-weight="bold" opacity="0.6">z</text>
      <text x="78" y="52" font-size="10" fill="#BEE3F8" font-family="sans-serif" font-weight="bold" opacity="0.5">z</text>
      <text x="85" y="42" font-size="12" fill="#90CDF4" font-family="sans-serif" font-weight="bold" opacity="0.4">Z</text>
    </svg>`,

    /* VL·28 — SANG MARTIR (Martyr)
       Konsep: Dua figur — satu diserang (target), satu melangkah maju mengorbankan diri */
    "VL·28": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Red moon (dramatic sacrifice) top corner  -->
      <circle cx="82" cy="14" r="10" fill="#FFF5F5" stroke="#C53030" stroke-width="0.8"/>
      <!-- TARGET PERSON (being saved, right side) — scared -->
      <circle cx="72" cy="38" r="9" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="72" cy="55" rx="9" ry="13" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Scared eyes -->
      <ellipse cx="68" cy="36" rx="2.5" ry="3" fill="#1A365D"/>
      <ellipse cx="76" cy="36" rx="2.5" ry="3" fill="#1A365D"/>
      <circle cx="68.8" cy="35" r="1" fill="#fff"/>
      <circle cx="76.8" cy="35" r="1" fill="#fff"/>
      <!-- Wolf claw mark on target (about to be attacked) -->
      <path d="M66,52 Q68,56 70,52" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>
      <path d="M70,52 Q72,57 74,52" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.5"/>
      <path d="M74,52 Q76,56 78,52" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>

      <!-- MARTYR FIGURE (rushing forward from left, arms outstretched) -->
      <!-- Running body leaning forward -->
      <circle cx="28" cy="36" r="10" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <path d="M22,46 Q18,56 22,68 Q28,72 34,68 Q38,56 34,46 Q30,44 28,44 Q26,44 22,46 Z"
            fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Rushing arms (outstretched to take the hit) -->
      <line x1="34" y1="50" x2="56" y2="44" stroke="#2B6CB0" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="26" y1="52" x2="14" y2="64" stroke="#2B6CB0" stroke-width="3" stroke-linecap="round"/>
      <!-- Martyr face (determined expression) -->
      <line x1="24" y1="34" x2="28" y2="34" stroke="#EBF8FF" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="32" y1="34" x2="36" y2="34" stroke="#EBF8FF" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M25,40 Q28,43 31,40" fill="none" stroke="#EBF8FF" stroke-width="1" stroke-linecap="round"/>
      <!-- Motion lines (rushing) -->
      <line x1="8" y1="38" x2="16" y2="38" stroke="#BEE3F8" stroke-width="1" opacity="0.7" stroke-linecap="round"/>
      <line x1="6" y1="44" x2="14" y2="44" stroke="#BEE3F8" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
      <line x1="8" y1="50" x2="16" y2="50" stroke="#BEE3F8" stroke-width="0.7" opacity="0.4" stroke-linecap="round"/>
      <!-- HALO above martyr -->
      <ellipse cx="28" cy="24" rx="12" ry="4" fill="none" stroke="#90CDF4" stroke-width="1" opacity="0.8"/>
      <ellipse cx="28" cy="24" rx="10" ry="3" fill="none" stroke="#BEE3F8" stroke-width="0.5" opacity="0.5"/>
      <!-- Heart between martyr and target -->
      <path d="M46,46 Q46,42 50,44 Q54,42 54,46 Q54,52 50,56 Q46,52 46,46 Z" fill="#2B6CB0" opacity="0.5"/>
    </svg>`,

    /* VL·29 — TUKANG BATU (Mason)
       Konsep: Dua figur berjabat tangan + simbol segitiga & kompas Mason */
    "VL·29": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- MASONIC COMPASS & SQUARE symbol (center top) -->
      <!-- Square (L-bracket) -->
      <path d="M38,12 L38,28 L54,28" fill="none" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Compass (spread V) -->
      <line x1="44" y1="12" x2="36" y2="28" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <line x1="56" y1="12" x2="64" y2="28" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <!-- G letter in center (Masonic) -->
      <text x="50" y="24" text-anchor="middle" font-size="10" fill="#2B6CB0" font-family="sans-serif" font-weight="bold" opacity="0.9">G</text>
      <!-- Decorative triangle (brotherhood triangle) -->
      <polygon points="50,32 30,60 70,60" fill="none" stroke="#BEE3F8" stroke-width="1" opacity="0.6"/>
      <!-- MASON FIGURE LEFT -->
      <circle cx="28" cy="50" r="9" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <ellipse cx="28" cy="66" rx="9" ry="12" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Left arm reaching right for handshake -->
      <line x1="36" y1="62" x2="50" y2="66" stroke="#2B6CB0" stroke-width="3.5" stroke-linecap="round"/>
      <!-- MASON FIGURE RIGHT -->
      <circle cx="72" cy="50" r="9" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="72" cy="66" rx="9" ry="12" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Right arm reaching left for handshake -->
      <line x1="64" y1="62" x2="50" y2="66" stroke="#1A365D" stroke-width="3.5" stroke-linecap="round"/>
      <!-- HANDSHAKE in middle -->
      <circle cx="50" cy="66" r="6" fill="#90CDF4" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="50" cy="66" r="3" fill="#2B6CB0" opacity="0.8"/>
      <!-- Brotherhood glow between figures -->
      <path d="M36,60 Q50,54 64,60" fill="none" stroke="#BEE3F8" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>
      <!-- Brick pattern at bottom (mason/bricklayer) -->
      <rect x="16" y="82" width="68" height="6" rx="1" fill="none" stroke="#BEE3F8" stroke-width="0.8"/>
      <rect x="16" y="82" width="20" height="6" rx="1" fill="#BEE3F8" opacity="0.4"/>
      <rect x="38" y="82" width="24" height="6" rx="1" fill="#90CDF4" opacity="0.3"/>
      <rect x="64" y="82" width="20" height="6" rx="1" fill="#BEE3F8" opacity="0.4"/>
      <rect x="26" y="88" width="18" height="5" rx="1" fill="#BEE3F8" opacity="0.3"/>
      <rect x="48" y="88" width="20" height="5" rx="1" fill="#BEE3F8" opacity="0.3"/>
      <rect x="72" y="88" width="12" height="5" rx="1" fill="#BEE3F8" opacity="0.3"/>
    </svg>`,

    /* VL·30 — TUKANG BATU (Mason) — shares VL·29 via roleAliases
       Keeping a direct key entry for safety */
    "VL·30": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <path d="M38,12 L38,28 L54,28" fill="none" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="44" y1="12" x2="36" y2="28" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <line x1="56" y1="12" x2="64" y2="28" stroke="#2B6CB0" stroke-width="2" stroke-linecap="round"/>
      <text x="50" y="24" text-anchor="middle" font-size="10" fill="#2B6CB0" font-family="sans-serif" font-weight="bold" opacity="0.9">G</text>
      <polygon points="50,32 30,60 70,60" fill="none" stroke="#BEE3F8" stroke-width="1" opacity="0.6"/>
      <circle cx="28" cy="50" r="9" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <ellipse cx="28" cy="66" rx="9" ry="12" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <line x1="36" y1="62" x2="50" y2="66" stroke="#2B6CB0" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="72" cy="50" r="9" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="72" cy="66" rx="9" ry="12" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="64" y1="62" x2="50" y2="66" stroke="#1A365D" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="66" r="6" fill="#90CDF4" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="50" cy="66" r="3" fill="#2B6CB0" opacity="0.8"/>
      <path d="M36,60 Q50,54 64,60" fill="none" stroke="#BEE3F8" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>
      <rect x="16" y="82" width="68" height="6" rx="1" fill="none" stroke="#BEE3F8" stroke-width="0.8"/>
      <rect x="16" y="82" width="20" height="6" rx="1" fill="#BEE3F8" opacity="0.4"/>
      <rect x="38" y="82" width="24" height="6" rx="1" fill="#90CDF4" opacity="0.3"/>
      <rect x="64" y="82" width="20" height="6" rx="1" fill="#BEE3F8" opacity="0.4"/>
      <rect x="26" y="88" width="18" height="5" rx="1" fill="#BEE3F8" opacity="0.3"/>
      <rect x="48" y="88" width="20" height="5" rx="1" fill="#BEE3F8" opacity="0.3"/>
    </svg>`,

    /* ============================================================
       DECK 5 — Cards 37-45
       VL·31 Old Hag, VL·32 Old Man, VL·33 P.I, VL·34 Pacifist,
       VL·35 Prince, VL·36 Spellcaster, VL·37 Tough Guy,
       VL·38 Troublemaker, VL·39 Fortune Teller
       ============================================================ */

    /* VL·31 — NENEK SIHIR TUA (Old Hag)
       Konsep: Nenek bungkuk dengan tongkat + tangan menunjuk kutuk + bibir terkunci */
    "VL·31": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Stars / witch magic -->
      <circle cx="14" cy="12" r="1.2" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="82" cy="10" r="1" fill="#90CDF4" opacity="0.5"/>
      <!-- OLD HAG SILHOUETTE (hunched, cloaked) -->
      <!-- Cloak/body (hunched forward) -->
      <path d="M26,90 Q20,80 24,70 Q26,60 30,56 Q34,52 36,48 Q38,44 40,38 Q44,30 50,26 Q58,28 60,34 Q64,42 60,52 Q56,60 58,70 Q62,78 62,90 Z"
            fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Pointy witch hat -->
      <polygon points="50,6 42,28 58,28" fill="#1A365D" stroke="#2B6CB0" stroke-width="1"/>
      <ellipse cx="50" cy="28" rx="12" ry="4" fill="#2B6CB0"/>
      <!-- Hat band -->
      <rect x="38" y="26" width="24" height="4" rx="1" fill="#90CDF4" opacity="0.5"/>
      <!-- Hat star decoration -->
      <circle cx="50" cy="14" r="2" fill="#BEE3F8" opacity="0.6"/>
      <!-- Face (old, wrinkled) -->
      <path d="M40,38 Q40,46 46,52 Q50,56 56,52 Q62,46 60,38" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.6"/>
      <!-- Wrinkle lines on face -->
      <path d="M42,42 Q44,40 46,42" fill="none" stroke="#BEE3F8" stroke-width="0.5"/>
      <path d="M54,42 Q56,40 58,42" fill="none" stroke="#BEE3F8" stroke-width="0.5"/>
      <!-- Eyes (narrow, menacing) -->
      <line x1="42" y1="43" x2="47" y2="43" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="53" y1="43" x2="58" y2="43" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Hooked nose -->
      <path d="M50,44 Q48,48 46,50" fill="none" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- POINTING FINGER (cursing someone) — arm extending right -->
      <line x1="58" y1="56" x2="82" y2="48" stroke="#1A365D" stroke-width="3" stroke-linecap="round"/>
      <circle cx="83" cy="47.5" r="3.5" fill="#1A365D"/>
      <!-- CURSE SYMBOL at finger tip -->
      <circle cx="90" cy="44" r="7" fill="none" stroke="#742A2A" stroke-width="0.8" opacity="0.6"/>
      <text x="90" y="47" text-anchor="middle" font-size="7" fill="#742A2A" font-family="sans-serif" opacity="0.7">⛔</text>
      <!-- WALKING STICK / CANE -->
      <path d="M26,90 Q22,88 20,80 Q20,72 24,70" fill="none" stroke="#8B7355" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="20" cy="69" r="3" fill="#8B7355"/>
    </svg>`,

    /* VL·32 — KAKEK RENTA (Old Man)
       Konsep: Jam pasir habis + wajah tua dengan penghitung mundur hari */
    "VL·32": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl32_sand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#BEE3F8"/>
          <stop offset="100%" stop-color="#2B6CB0"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- LARGE HOURGLASS (center piece) -->
      <!-- Outer frame top/bottom caps -->
      <rect x="28" y="8" width="44" height="8" rx="3" fill="#1A365D"/>
      <rect x="28" y="84" width="44" height="8" rx="3" fill="#1A365D"/>
      <!-- Hourglass body shape -->
      <path d="M30,16 L50,50 L70,16 Z" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8" opacity="0.5"/>
      <path d="M30,84 L50,50 L70,84 Z" fill="url(#gvl32_sand)" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Sand in lower half (almost empty at top = time running out) -->
      <path d="M38,76 L50,50 L62,76 Z" fill="#2B6CB0" opacity="0.7"/>
      <!-- Thin trickle of sand at waist -->
      <line x1="50" y1="47" x2="50" y2="53" stroke="#2B6CB0" stroke-width="1"/>
      <circle cx="50" cy="50" r="1.5" fill="#1A365D"/>
      <!-- Very little sand remaining on top half -->
      <path d="M46,22 L50,28 L54,22 Z" fill="#BEE3F8" opacity="0.6"/>
      <!-- Frame stand lines (decorative) -->
      <line x1="28" y1="16" x2="72" y2="16" stroke="#2B6CB0" stroke-width="0.8"/>
      <line x1="28" y1="84" x2="72" y2="84" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- COUNTDOWN numbers floating -->
      <text x="16" y="36" font-size="11" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.7">X</text>
      <text x="76" y="36" font-size="11" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.5">-1</text>
      <!-- Old man face (bottom, small) -->
      <circle cx="50" cy="96" r="0" fill="none"/>
      <!-- Wrinkle dots above hourglass / time marks -->
      <circle cx="20" cy="50" r="1.5" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="80" cy="50" r="1.5" fill="#BEE3F8" opacity="0.6"/>
      <circle cx="16" cy="60" r="1" fill="#BEE3F8" opacity="0.4"/>
      <circle cx="84" cy="60" r="1" fill="#BEE3F8" opacity="0.4"/>
      <!-- Skull & crossbones hint (will die) at left corner -->
      <circle cx="14" cy="80" r="6" fill="none" stroke="#BEE3F8" stroke-width="0.7" opacity="0.5"/>
      <circle cx="14" cy="78" r="2.5" fill="#BEE3F8" opacity="0.4"/>
      <line x1="11" y1="84" x2="17" y2="84" stroke="#BEE3F8" stroke-width="0.7" opacity="0.4"/>
      <line x1="14" y1="84" x2="14" y2="87" stroke="#BEE3F8" stroke-width="0.7" opacity="0.4"/>
    </svg>`,

    /* VL·33 — PENYIDIK GAIB (Paranormal Investigator)
       Konsep: Radar/sonar memancar + 2 siluet (satu serigala terdeteksi menghijau) */
    "VL·33": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gvl33_radar" cx="30%" cy="70%" r="70%">
          <stop offset="0%" stop-color="#276749" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#276749" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <!-- RADAR SCREEN (dark background) -->
      <circle cx="35" cy="60" r="32" fill="#0D2B1D" stroke="#276749" stroke-width="1.5"/>
      <!-- Radar grid rings -->
      <circle cx="35" cy="60" r="10" fill="none" stroke="#276749" stroke-width="0.5" opacity="0.5"/>
      <circle cx="35" cy="60" r="20" fill="none" stroke="#276749" stroke-width="0.5" opacity="0.4"/>
      <circle cx="35" cy="60" r="30" fill="none" stroke="#276749" stroke-width="0.4" opacity="0.3"/>
      <!-- Radar cross hairs -->
      <line x1="5" y1="60" x2="65" y2="60" stroke="#276749" stroke-width="0.5" opacity="0.4"/>
      <line x1="35" y1="30" x2="35" y2="90" stroke="#276749" stroke-width="0.5" opacity="0.4"/>
      <!-- Radar sweep line (scan angle) -->
      <path d="M35,60 L60,35" stroke="#9AE6B4" stroke-width="1.5" opacity="0.8" stroke-linecap="round"/>
      <!-- Radar sweep glow sector -->
      <path d="M35,60 L60,35 A32,32 0 0,1 66,65 Z" fill="url(#gvl33_radar)"/>
      <!-- CENTER dot (P.I. location) -->
      <circle cx="35" cy="60" r="3" fill="#9AE6B4"/>
      <!-- BLIP 1 — normal villager (small dot) -->
      <circle cx="24" cy="48" r="2.5" fill="#9AE6B4" opacity="0.7"/>
      <!-- BLIP 2 — WEREWOLF DETECTED (bright red/orange, larger) -->
      <circle cx="52" cy="44" r="4" fill="#C53030" opacity="0.9"/>
      <!-- Ring around wolf blip (alert!) -->
      <circle cx="52" cy="44" r="7" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>
      <circle cx="52" cy="44" r="10" fill="none" stroke="#C53030" stroke-width="0.4" opacity="0.3"/>
      <!-- Exclamation on wolf blip -->
      <text x="52" y="47" text-anchor="middle" font-size="5" fill="#fff" font-family="sans-serif" font-weight="bold">!</text>

      <!-- P.I. FIGURE with device (top right) -->
      <circle cx="76" cy="28" r="9" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <ellipse cx="76" cy="44" rx="9" ry="12" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Device/scanner in hand -->
      <rect x="82" y="36" width="12" height="8" rx="2" fill="#1A365D" stroke="#90CDF4" stroke-width="0.8"/>
      <circle cx="88" cy="40" r="2.5" fill="#9AE6B4" opacity="0.8"/>
      <!-- Scan beam from device to radar screen -->
      <path d="M82,40 Q60,52 65,60" fill="none" stroke="#9AE6B4" stroke-width="0.7" stroke-dasharray="2,2" opacity="0.6"/>
      <!-- Warning text -->
      <rect x="64" y="8" width="32" height="14" rx="2" fill="#742A2A" opacity="0.8"/>
      <text x="80" y="18" text-anchor="middle" font-size="5.5" fill="#fff" font-family="sans-serif" font-weight="bold">WOLF</text>
      <text x="80" y="12" text-anchor="middle" font-size="4" fill="#FEB2B2" font-family="sans-serif">DETECTED</text>
    </svg>`,

    /* VL·34 — CINTA DAMAI (Pacifist)
       Konsep: Tanda damai + tangan menghentikan pedang yang terangkat */
    "VL·34": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- PEACE SYMBOL (large, center) -->
      <circle cx="50" cy="44" r="26" fill="none" stroke="#2B6CB0" stroke-width="2.5"/>
      <!-- Vertical line down -->
      <line x1="50" y1="18" x2="50" y2="70" stroke="#2B6CB0" stroke-width="2.5"/>
      <!-- Left diagonal -->
      <line x1="50" y1="70" x2="31" y2="56" stroke="#2B6CB0" stroke-width="2.5"/>
      <!-- Right diagonal -->
      <line x1="50" y1="70" x2="69" y2="56" stroke="#2B6CB0" stroke-width="2.5"/>
      <!-- Peace symbol glow -->
      <circle cx="50" cy="44" r="22" fill="none" stroke="#BEE3F8" stroke-width="0.5" opacity="0.5"/>
      <!-- HAND raised (Stop / halt gesture) -->
      <path d="M72,80 Q68,72 70,64 Q72,58 76,56 Q80,58 80,64 Q80,72 78,80 Z"
            fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Fingers spread (stop gesture) -->
      <line x1="70" y1="64" x2="68" y2="54" stroke="#EBF8FF" stroke-width="3" stroke-linecap="round"/>
      <line x1="73" y1="62" x2="72" y2="50" stroke="#EBF8FF" stroke-width="3" stroke-linecap="round"/>
      <line x1="76" y1="62" x2="76" y2="50" stroke="#EBF8FF" stroke-width="3" stroke-linecap="round"/>
      <line x1="79" y1="62" x2="80" y2="52" stroke="#EBF8FF" stroke-width="3" stroke-linecap="round"/>
      <line x1="82" y1="64" x2="84" y2="56" stroke="#EBF8FF" stroke-width="3" stroke-linecap="round"/>
      <!-- Hand outline over -->
      <path d="M66,66 Q64,56 68,50 Q72,46 76,46 Q80,46 82,50 Q86,56 84,66 Q82,76 76,80 Q70,76 66,66 Z"
            fill="none" stroke="#2B6CB0" stroke-width="1.2"/>
      <!-- SWORD being blocked (left side, crossed out) -->
      <line x1="14" y1="80" x2="42" y2="52" stroke="#1A365D" stroke-width="2" stroke-linecap="round"/>
      <!-- Sword tip -->
      <polygon points="42,52 38,50 40,54" fill="#1A365D"/>
      <!-- Sword guard -->
      <line x1="24" y1="70" x2="30" y2="64" stroke="#1A365D" stroke-width="3" stroke-linecap="round"/>
      <!-- Block / cancel symbol over sword -->
      <circle cx="28" cy="66" r="8" fill="none" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
      <line x1="22" y1="60" x2="34" y2="72" stroke="#C53030" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>
    </svg>`,

    /* VL·35 — PANGERAN ELIT (Prince)
       Konsep: Kepala pangeran dengan mahkota & eksekusi yang dibatalkan (tali gantung diputus) */
    "VL·35": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl35_crown" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#BEE3F8"/>
          <stop offset="100%" stop-color="#EBF8FF"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,4"/>
      <!-- NOOSE / GALLOWS (broken/undone — executed escaped) -->
      <!-- Gallows beam top -->
      <rect x="12" y="14" width="40" height="5" rx="2" fill="#1A365D"/>
      <!-- Gallows vertical post -->
      <rect x="12" y="14" width="5" height="40" rx="2" fill="#1A365D"/>
      <!-- Noose rope (snapped/broken) -->
      <line x1="42" y1="19" x2="42" y2="36" stroke="#8B7355" stroke-width="1.5"/>
      <!-- Rope snap/fray at bottom -->
      <path d="M42,36 Q40,38 38,40" fill="none" stroke="#8B7355" stroke-width="1" stroke-linecap="round"/>
      <path d="M42,36 Q44,38 46,39" fill="none" stroke="#8B7355" stroke-width="1" stroke-linecap="round"/>
      <path d="M42,36 Q41,40 40,42" fill="none" stroke="#8B7355" stroke-width="0.8" stroke-linecap="round"/>
      <!-- CROWN (floating above prince head) -->
      <!-- 3-pointed small crown -->
      <rect x="38" y="36" width="26" height="10" rx="2" fill="url(#gvl35_crown)" stroke="#2B6CB0" stroke-width="1.2"/>
      <polygon points="40,36 43,26 46,36" fill="url(#gvl35_crown)" stroke="#2B6CB0" stroke-width="1.2"/>
      <polygon points="48,36 51,24 54,36" fill="url(#gvl35_crown)" stroke="#2B6CB0" stroke-width="1.5"/>
      <polygon points="56,36 59,26 62,36" fill="url(#gvl35_crown)" stroke="#2B6CB0" stroke-width="1.2"/>
      <!-- Crown gems -->
      <circle cx="43" cy="33" r="2" fill="#2B6CB0"/>
      <circle cx="51" cy="32" r="2.5" fill="#1A365D"/>
      <circle cx="59" cy="33" r="2" fill="#2B6CB0"/>
      <!-- PRINCE FACE (confident, smiling) -->
      <circle cx="62" cy="60" r="14" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Prince features -->
      <line x1="56" y1="57" x2="60" y2="57" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="64" y1="57" x2="68" y2="57" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Smirk (confident) -->
      <path d="M56,64 Q62,70 68,64" fill="none" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Prince collar/robe top -->
      <path d="M48,74 Q52,80 62,80 Q72,80 76,74" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Immune shield icon (protected from execution) -->
      <path d="M74,52 L80,56 L80,66 Q80,72 74,74 Q68,72 68,66 L68,56 Z"
            fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.8"/>
      <text x="74" y="66" text-anchor="middle" font-size="10" fill="#2B6CB0" font-family="sans-serif">✓</text>
    </svg>`,

    /* VL·36 — PERAPAL MANTRA (Spellcaster)
       Konsep: Mulut terkunci sihir + rune/spiral mantra melayang */
    "VL·36": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Magical rune circles -->
      <circle cx="50" cy="42" r="32" fill="none" stroke="#BEE3F8" stroke-width="0.5" stroke-dasharray="3,4"/>
      <circle cx="50" cy="42" r="24" fill="none" stroke="#90CDF4" stroke-width="0.4" stroke-dasharray="2,3"/>
      <!-- WAND casting the spell (diagonal) -->
      <line x1="18" y1="80" x2="54" y2="26" stroke="#1A365D" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Wand tip glow -->
      <circle cx="55" cy="25" r="5" fill="#90CDF4" opacity="0.6"/>
      <circle cx="55" cy="25" r="3" fill="#2B6CB0"/>
      <circle cx="55" cy="25" r="1" fill="#BEE3F8"/>
      <!-- Wand butt -->
      <circle cx="17" cy="81" r="2.5" fill="#8B7355"/>
      <!-- Spell spiral effects from wand -->
      <path d="M55,25 Q68,18 72,28 Q76,38 66,42 Q58,46 56,38" fill="none" stroke="#90CDF4" stroke-width="0.8" opacity="0.7"/>
      <circle cx="56" cy="38" r="2" fill="#BEE3F8" opacity="0.6"/>
      <!-- Rune symbols floating -->
      <text x="78" y="26" font-size="10" fill="#2B6CB0" font-family="sans-serif" opacity="0.5">ᚱ</text>
      <text x="84" y="44" font-size="9" fill="#90CDF4" font-family="sans-serif" opacity="0.4">ᚹ</text>
      <text x="76" y="58" font-size="8" fill="#2B6CB0" font-family="sans-serif" opacity="0.4">ᚦ</text>
      <!-- TARGET PERSON face with SEALED LIPS -->
      <circle cx="32" cy="56" r="16" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Eyes (normal, confused) -->
      <circle cx="27" cy="52" r="2.5" fill="#1A365D"/>
      <circle cx="37" cy="52" r="2.5" fill="#1A365D"/>
      <circle cx="27.8" cy="51.2" r="1" fill="#fff"/>
      <circle cx="37.8" cy="51.2" r="1" fill="#fff"/>
      <!-- SEALED MOUTH (glowing lock over lips) -->
      <path d="M24,62 Q32,66 40,62" fill="none" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Lock over mouth -->
      <rect x="28" y="62" width="8" height="6" rx="1.5" fill="#2B6CB0"/>
      <path d="M30,62 Q30,58 32,58 Q34,58 34,62" fill="none" stroke="#2B6CB0" stroke-width="1.5"/>
      <circle cx="32" cy="65" r="1.2" fill="#BEE3F8"/>
      <!-- Sparkle effects sealing the mouth -->
      <circle cx="24" cy="60" r="1" fill="#90CDF4" opacity="0.7"/>
      <circle cx="40" cy="60" r="1" fill="#90CDF4" opacity="0.7"/>
    </svg>`,

    /* VL·37 — JAGOAN KAMPUNG (Tough Guy)
       Konsep: Otot besi + tergigit serigala tapi tetap berdiri (dua malam) */
    "VL·37": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Red moon hint (at night, was attacked) -->
      <circle cx="82" cy="14" r="9" fill="#FFF5F5" stroke="#C53030" stroke-width="0.7" opacity="0.7"/>
      <!-- TOUGH GUY FIGURE (standing strong despite wound) -->
      <!-- Head -->
      <circle cx="50" cy="32" r="12" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Determined expression -->
      <!-- Eyebrows (furrowed) -->
      <path d="M42,29 Q44,27 47,28" fill="none" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M53,28 Q56,27 58,29" fill="none" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Eyes (squinting, tough) -->
      <line x1="42" y1="31" x2="47" y2="31" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="53" y1="31" x2="58" y2="31" stroke="#1A365D" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Clenched jaw -->
      <path d="M44,37 Q50,40 56,37" fill="none" stroke="#1A365D" stroke-width="1.2" stroke-linecap="round"/>
      <!-- MASSIVE ARMS (flexed/muscular) -->
      <!-- Left arm big bicep -->
      <path d="M28,50 Q16,46 14,54 Q12,62 22,64 Q28,66 32,62 Q36,56 34,50 Z"
            fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Right arm big bicep -->
      <path d="M72,50 Q84,46 86,54 Q88,62 78,64 Q72,66 68,62 Q64,56 66,50 Z"
            fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- BODY (broad, muscular) -->
      <path d="M34,50 Q32,64 34,80 L44,82 L46,66 L50,62 L54,66 L56,82 L66,80 L68,64 Q66,50 58,46 Q50,44 42,46 Z"
            fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Buttons on shirt -->
      <circle cx="50" cy="56" r="1.2" fill="#1A365D"/>
      <circle cx="50" cy="62" r="1.2" fill="#1A365D"/>
      <!-- WOLF BITE MARKS on left arm (attacked but survived) -->
      <path d="M18,52 Q20,56 18,60" fill="none" stroke="#C53030" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
      <path d="M22,50 Q24,55 22,59" fill="none" stroke="#C53030" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <path d="M16,56 Q18,58 16,62" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.5"/>
      <!-- TWO NIGHT markers (survived 2 attacks) -->
      <rect x="36" y="86" width="8" height="10" rx="1.5" fill="#C53030" opacity="0.6"/>
      <text x="40" y="94" text-anchor="middle" font-size="6" fill="#fff" font-family="sans-serif" font-weight="bold">1</text>
      <rect x="48" y="86" width="8" height="10" rx="1.5" fill="#1A365D" opacity="0.8"/>
      <text x="52" y="94" text-anchor="middle" font-size="6" fill="#fff" font-family="sans-serif" font-weight="bold">2</text>
    </svg>`,

    /* VL·38 — PEMBUAT ONAR (Troublemaker)
       Konsep: Tanda panah bertukar antara 2 figur + tanda tanya misterius */
    "VL·38": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Devil horns / mischief at top center -->
      <path d="M42,14 Q40,8 36,10 Q38,16 42,16" fill="#1A365D" opacity="0.5"/>
      <path d="M58,14 Q60,8 64,10 Q62,16 58,16" fill="#1A365D" opacity="0.5"/>
      <!-- FIGURE LEFT (original identity) -->
      <circle cx="22" cy="38" r="10" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <ellipse cx="22" cy="56" rx="10" ry="14" fill="#2B6CB0" stroke="#1A365D" stroke-width="0.8"/>
      <!-- Identity label A -->
      <text x="22" y="42" text-anchor="middle" font-size="10" fill="#EBF8FF" font-family="sans-serif" font-weight="bold">A</text>
      <!-- FIGURE RIGHT (original identity) -->
      <circle cx="78" cy="38" r="10" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <ellipse cx="78" cy="56" rx="10" ry="14" fill="#1A365D" stroke="#2B6CB0" stroke-width="0.8"/>
      <!-- Identity label B -->
      <text x="78" y="42" text-anchor="middle" font-size="10" fill="#BEE3F8" font-family="sans-serif" font-weight="bold">B</text>
      <!-- SWAP ARROWS (crossing over, chaotic) -->
      <!-- Arrow from A to B (top arc) -->
      <path d="M32,34 Q50,20 68,34" fill="none" stroke="#C53030" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="68,34 64,28 72,30" fill="#C53030"/>
      <!-- Arrow from B to A (bottom arc) -->
      <path d="M68,52 Q50,68 32,52" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="32,52 28,58 36,56" fill="#742A2A"/>
      <!-- CENTER mischief symbol -->
      <circle cx="50" cy="44" r="8" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Question mark -->
      <path d="M47,40 Q47,36 50,36 Q53,36 53,40 Q53,44 50,44 L50,46" fill="none" stroke="#1A365D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="48.5" r="1.5" fill="#1A365D"/>
      <!-- Confused swapped labels at bottom -->
      <text x="22" y="82" text-anchor="middle" font-size="10" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.6">B</text>
      <text x="78" y="82" text-anchor="middle" font-size="10" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.6">A</text>
    </svg>`,

    /* VL·39 — PEMBACA NASIB (Fortune Teller)
       Konsep: Kartu tarot terbalik terbuka + simbol kematian diungkap */
    "VL·39": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gvl39_card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EBF8FF"/>
          <stop offset="100%" stop-color="#BEE3F8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#EBF8FF" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#BEE3F8" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Background mystical stars -->
      <circle cx="12" cy="14" r="1.5" fill="#2B6CB0" opacity="0.5"/>
      <circle cx="88" cy="12" r="1.2" fill="#90CDF4" opacity="0.4"/>
      <circle cx="16" cy="80" r="1" fill="#BEE3F8" opacity="0.5"/>
      <circle cx="84" cy="78" r="1.2" fill="#2B6CB0" opacity="0.4"/>

      <!-- DEAD CARD (face down, upturned) — left -->
      <g transform="rotate(10 30 60)">
        <rect x="14" y="42" width="32" height="46" rx="3" fill="#1A365D" stroke="#2B6CB0" stroke-width="1"/>
        <!-- Card back pattern -->
        <rect x="17" y="45" width="26" height="40" rx="1" fill="#2B6CB0" opacity="0.3"/>
        <circle cx="30" cy="65" r="10" fill="none" stroke="#90CDF4" stroke-width="0.5" opacity="0.4"/>
        <line x1="17" y1="55" x2="43" y2="55" stroke="#2B6CB0" stroke-width="0.3" opacity="0.3"/>
        <line x1="17" y1="65" x2="43" y2="65" stroke="#2B6CB0" stroke-width="0.3" opacity="0.3"/>
        <line x1="17" y1="75" x2="43" y2="75" stroke="#2B6CB0" stroke-width="0.3" opacity="0.3"/>
      </g>

      <!-- REVEALED CARD (face up, flipped, showing identity) — front/right -->
      <g transform="rotate(-8 68 54)">
        <rect x="50" y="28" width="36" height="54" rx="3" fill="url(#gvl39_card)" stroke="#2B6CB0" stroke-width="1.5"/>
        <!-- Card face header -->
        <rect x="50" y="28" width="36" height="10" rx="3" fill="#2B6CB0"/>
        <rect x="50" y="34" width="36" height="4" fill="#2B6CB0"/>
        <text x="68" y="36" text-anchor="middle" font-size="4.5" fill="#EBF8FF" font-family="sans-serif" font-weight="bold">REVEALED</text>
        <!-- Card face illustration (skull — dead player identity) -->
        <circle cx="68" cy="52" r="10" fill="#EBF8FF" stroke="#2B6CB0" stroke-width="0.5"/>
        <ellipse cx="64" cy="50" rx="3" ry="3.5" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.4"/>
        <ellipse cx="72" cy="50" rx="3" ry="3.5" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.4"/>
        <!-- X eyes skull -->
        <line x1="62" y1="48" x2="66" y2="52" stroke="#742A2A" stroke-width="0.8"/>
        <line x1="66" y1="48" x2="62" y2="52" stroke="#742A2A" stroke-width="0.8"/>
        <line x1="70" y1="48" x2="74" y2="52" stroke="#742A2A" stroke-width="0.8"/>
        <line x1="74" y1="48" x2="70" y2="52" stroke="#742A2A" stroke-width="0.8"/>
        <!-- Triangle nose -->
        <polygon points="68,54 66,58 70,58" fill="#BEE3F8" stroke="#2B6CB0" stroke-width="0.4"/>
        <!-- Card role text lines -->
        <line x1="54" y1="66" x2="82" y2="66" stroke="#BEE3F8" stroke-width="0.7"/>
        <line x1="54" y1="70" x2="78" y2="70" stroke="#BEE3F8" stroke-width="0.6"/>
        <line x1="54" y1="74" x2="74" y2="74" stroke="#BEE3F8" stroke-width="0.6"/>
      </g>

      <!-- Magnifier eye looking at revealed card -->
      <circle cx="26" cy="24" r="12" fill="none" stroke="#1A365D" stroke-width="2"/>
      <circle cx="26" cy="24" r="10" fill="#EBF8FF" opacity="0.5"/>
      <!-- Eye in magnifier -->
      <ellipse cx="26" cy="24" rx="6" ry="4" fill="#2B6CB0" opacity="0.6"/>
      <circle cx="26" cy="24" r="2.5" fill="#1A365D"/>
      <circle cx="27.5" cy="22.5" r="1" fill="#fff" opacity="0.8"/>
      <!-- Magnifier handle -->
      <line x1="34" y1="32" x2="42" y2="42" stroke="#1A365D" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    /* ============================================================
       DECK 6 — Cards 46-54  (SHADOWS / TIM JAHAT)
       WW·04 Lycan, WW·05 Lone Wolf, WW·06 Sorcerer, WW·07 Minion,
       WW·08 Wolf Cub, WW·09 Big Bad Wolf, WW·10 White Wolf,
       WW·11 Dream Wolf, WW·12 Dire Wolf
       Palette: #1A0000 bg, #742A2A border, #C53030 accent, #FEB2B2 light
       ============================================================ */

    /* WW·04 — LIKAT (Lycan)
       Konsep: Wajah tersenyum ramah DI LUAR, tapi bayangan serigala di dalam */
    "WW·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gww04_bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#FFF5F5"/>
          <stop offset="100%" stop-color="#FED7D7"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Friendly face (disguise) -->
      <circle cx="50" cy="38" r="20" fill="#fff" stroke="#742A2A" stroke-width="1"/>
      <!-- Happy eyes -->
      <ellipse cx="42" cy="34" rx="3.5" ry="4" fill="#742A2A"/>
      <ellipse cx="58" cy="34" rx="3.5" ry="4" fill="#742A2A"/>
      <circle cx="43" cy="33" r="1.5" fill="#fff"/>
      <circle cx="59" cy="33" r="1.5" fill="#fff"/>
      <!-- Big warm smile -->
      <path d="M39,44 Q50,52 61,44" fill="none" stroke="#742A2A" stroke-width="2" stroke-linecap="round"/>
      <!-- Rosy cheeks (friendly/innocent looking) -->
      <circle cx="39" cy="42" r="4" fill="#FEB2B2" opacity="0.5"/>
      <circle cx="61" cy="42" r="4" fill="#FEB2B2" opacity="0.5"/>
      <!-- SHADOW BEHIND (wolf silhouette lurking) -->
      <!-- Wolf ear left -->
      <path d="M22,72 Q18,60 26,58 Q30,56 32,62" fill="#742A2A" opacity="0.7"/>
      <!-- Wolf ear right -->
      <path d="M78,72 Q82,60 74,58 Q70,56 68,62" fill="#742A2A" opacity="0.7"/>
      <!-- Wolf head shadow -->
      <ellipse cx="50" cy="72" rx="28" ry="20" fill="#742A2A" opacity="0.5"/>
      <!-- Wolf fangs peeking from smile shadow -->
      <path d="M42,76 Q44,82 40,84" fill="none" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
      <path d="M50,78 Q50,84 50,86" fill="none" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
      <path d="M58,76 Q56,82 60,84" fill="none" stroke="#C53030" stroke-width="1.5" opacity="0.7"/>
      <!-- Wolf eyes in shadow (glowing red) -->
      <circle cx="40" cy="70" r="3.5" fill="#C53030" opacity="0.8"/>
      <circle cx="60" cy="70" r="3.5" fill="#C53030" opacity="0.8"/>
      <circle cx="41" cy="69" r="1.2" fill="#fff" opacity="0.7"/>
      <circle cx="61" cy="69" r="1.2" fill="#fff" opacity="0.7"/>
      <!-- "APPEARS GOOD" label -->
      <rect x="20" y="60" width="60" height="0" fill="none"/>
      <!-- Seer symbol (false reading) -->
      <circle cx="84" cy="20" r="8" fill="none" stroke="#742A2A" stroke-width="1" opacity="0.5"/>
      <path d="M80,20 Q84,16 88,20 Q84,24 80,20 Z" fill="#742A2A" opacity="0.4"/>
      <!-- X over seer eye (misleading) -->
      <line x1="80" y1="16" x2="88" y2="24" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>
      <line x1="88" y1="16" x2="80" y2="24" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>
    </svg>`,

    /* WW·05 — SERIGALA PENYENDIRI (Lone Wolf)
       Konsep: Serigala sendirian di bulan purnama, terpisah dari kawanan */
    "WW·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Full moon -->
      <circle cx="50" cy="28" r="20" fill="#FFF5F5" stroke="#742A2A" stroke-width="1.2"/>
      <circle cx="50" cy="28" r="16" fill="none" stroke="#FEB2B2" stroke-width="0.6" opacity="0.6"/>
      <!-- LONE WOLF howling silhouette -->
      <!-- Wolf body (sitting, howling upward) -->
      <path d="M36,90 Q32,82 34,74 Q36,66 38,60 Q40,54 42,50 Q44,46 46,44 Q50,40 54,44 Q56,46 58,50 Q60,54 62,60 Q64,66 66,74 Q68,82 64,90 Z"
            fill="#742A2A" stroke="#C53030" stroke-width="0.5"/>
      <!-- Wolf tail -->
      <path d="M64,74 Q76,68 80,62 Q82,56 76,54" fill="none" stroke="#742A2A" stroke-width="4" stroke-linecap="round"/>
      <!-- Wolf ears (pointed up, howling) -->
      <polygon points="42,50 38,38 46,46" fill="#742A2A"/>
      <polygon points="58,50 62,38 54,46" fill="#742A2A"/>
      <!-- Wolf snout pointing to moon (howling) -->
      <path d="M46,44 Q44,38 46,34 Q48,30 50,28 Q52,30 54,34 Q56,38 54,44" fill="#C53030" opacity="0.5" stroke="#742A2A" stroke-width="0.5"/>
      <!-- Eyes (glowing red) -->
      <circle cx="45" cy="50" r="2.5" fill="#C53030"/>
      <circle cx="55" cy="50" r="2.5" fill="#C53030"/>
      <!-- PACK silhouettes (distant, separate) -->
      <path d="M10,88 Q14,82 12,78 Q14,74 16,78 Q18,82 22,88 Z" fill="#742A2A" opacity="0.3"/>
      <path d="M78,88 Q82,82 80,78 Q82,74 84,78 Q86,82 88,88 Z" fill="#742A2A" opacity="0.3"/>
      <!-- Distance line (separated) -->
      <path d="M22,84 Q50,80 78,84" fill="none" stroke="#FEB2B2" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
    </svg>`,

    /* WW·06 — PENYIHIR JAHAT (Sorcerer)
       Konsep: Bola kristal merah + simbol mata peramal yang diburu */
    "WW·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gww06_ball" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stop-color="#FFF5F5"/>
          <stop offset="50%" stop-color="#FEB2B2"/>
          <stop offset="100%" stop-color="#742A2A" stop-opacity="0.7"/>
        </radialGradient>
        <radialGradient id="gww06_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#C53030" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#C53030" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Dark aura -->
      <circle cx="50" cy="52" r="36" fill="url(#gww06_glow)"/>
      <!-- CRYSTAL BALL (red-tinted, evil) -->
      <circle cx="50" cy="58" r="28" fill="url(#gww06_ball)" stroke="#742A2A" stroke-width="1.5"/>
      <!-- Ball highlight -->
      <ellipse cx="42" cy="48" rx="9" ry="6" fill="#fff" opacity="0.4" transform="rotate(-20 42 48)"/>
      <!-- Seer eye SEEN inside the ball (hunting target) -->
      <!-- Eye white -->
      <ellipse cx="50" cy="60" rx="12" ry="8" fill="#FFF5F5" opacity="0.8"/>
      <!-- Iris (evil, target) -->
      <circle cx="50" cy="60" r="5" fill="#742A2A"/>
      <circle cx="50" cy="60" r="2.5" fill="#1A0000"/>
      <circle cx="51.5" cy="58.5" r="1" fill="#FEB2B2" opacity="0.8"/>
      <!-- Arrow/cursor targeting the eye (hunting Seer) -->
      <path d="M30,48 Q38,54 42,58" fill="none" stroke="#C53030" stroke-width="1.2" stroke-dasharray="2,1"/>
      <polygon points="42,58 36,55 40,52" fill="#C53030"/>
      <!-- Sorcerer hand (claw) reaching from top -->
      <path d="M40,16 Q38,24 36,30 Q34,36 36,40" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,14 Q50,22 50,28 Q50,34 48,38" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60,16 Q62,24 64,30 Q66,36 64,40" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Palm above ball -->
      <path d="M36,40 Q38,44 44,44 Q50,44 56,44 Q62,44 64,40 Q60,36 50,34 Q40,36 36,40 Z"
            fill="#742A2A" stroke="#C53030" stroke-width="0.5"/>
      <!-- Ball pedestal -->
      <ellipse cx="50" cy="86" rx="20" ry="5" fill="#FEB2B2" stroke="#742A2A" stroke-width="0.8" opacity="0.6"/>
    </svg>`,

    /* WW·07 — KAKI TANGAN (Minion)
       Konsep: Tangan memberikan sumpah setia kepada serigala + mata manusia tipuan */
    "WW·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- WOLF PAW (master, top center) -->
      <!-- Main pad -->
      <circle cx="50" cy="22" r="10" fill="#742A2A"/>
      <!-- Toe pads -->
      <circle cx="40" cy="14" r="5" fill="#742A2A"/>
      <circle cx="50" cy="12" r="5" fill="#742A2A"/>
      <circle cx="60" cy="14" r="5" fill="#742A2A"/>
      <circle cx="66" cy="22" r="5" fill="#742A2A"/>
      <circle cx="34" cy="22" r="5" fill="#742A2A"/>
      <!-- Claw tips -->
      <line x1="40" y1="10" x2="38" y2="5" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="50" y1="8" x2="50" y2="3" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="60" y1="10" x2="62" y2="5" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Inner pad markings -->
      <circle cx="50" cy="22" r="5" fill="#C53030" opacity="0.5"/>
      <!-- Chain / loyalty bond line from paw down -->
      <line x1="50" y1="32" x2="50" y2="52" stroke="#742A2A" stroke-width="1.5" stroke-dasharray="3,2"/>
      <!-- Circles on chain -->
      <circle cx="50" cy="36" r="2" fill="none" stroke="#742A2A" stroke-width="1"/>
      <circle cx="50" cy="42" r="2" fill="none" stroke="#742A2A" stroke-width="1"/>
      <circle cx="50" cy="48" r="2" fill="none" stroke="#742A2A" stroke-width="1"/>
      <!-- HUMAN FIGURE (minion, bowing/pledging loyalty) -->
      <circle cx="50" cy="62" r="10" fill="#FFF5F5" stroke="#742A2A" stroke-width="1"/>
      <!-- Face (normal human, but red tint) -->
      <line x1="45" y1="60" x2="48" y2="60" stroke="#742A2A" stroke-width="1" stroke-linecap="round"/>
      <line x1="52" y1="60" x2="55" y2="60" stroke="#742A2A" stroke-width="1" stroke-linecap="round"/>
      <path d="M45,66 Q50,70 55,66" fill="none" stroke="#742A2A" stroke-width="1" stroke-linecap="round"/>
      <!-- Minion body (bowing) -->
      <path d="M40,72 Q36,80 38,90 L62,90 Q64,80 60,72 Q56,68 50,68 Q44,68 40,72 Z"
            fill="#FFF5F5" stroke="#742A2A" stroke-width="0.8"/>
      <!-- "APPEARS GOOD" seer check (fake) -->
      <circle cx="82" cy="70" r="8" fill="none" stroke="#FEB2B2" stroke-width="0.8"/>
      <path d="M78,70 Q82,66 86,70 Q82,74 78,70 Z" fill="#FEB2B2" opacity="0.5"/>
      <text x="82" y="73" text-anchor="middle" font-size="7" fill="#9AE6B4" font-family="sans-serif">✓</text>
    </svg>`,

    /* WW·08 — ANAK SERIGALA (Wolf Cub)
       Konsep: Anak serigala kecil + dua kepala serigala dewasa murka (balas dendam) */
    "WW·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- CUB (small, center, cute but wolf) -->
      <!-- Cub ears -->
      <polygon points="38,44 34,34 42,40" fill="#742A2A"/>
      <polygon points="62,44 66,34 58,40" fill="#742A2A"/>
      <!-- Cub head -->
      <circle cx="50" cy="50" r="16" fill="#C53030" stroke="#742A2A" stroke-width="1"/>
      <!-- Cub snout -->
      <ellipse cx="50" cy="56" rx="8" ry="6" fill="#FEB2B2" stroke="#742A2A" stroke-width="0.7"/>
      <!-- Cub nose -->
      <ellipse cx="50" cy="53" rx="3" ry="2" fill="#1A0000"/>
      <!-- Cub eyes (innocent but red) -->
      <circle cx="44" cy="48" r="3.5" fill="#1A0000"/>
      <circle cx="56" cy="48" r="3.5" fill="#1A0000"/>
      <circle cx="44.8" cy="47" r="1.2" fill="#FEB2B2"/>
      <circle cx="56.8" cy="47" r="1.2" fill="#FEB2B2"/>
      <!-- Tiny fangs (cute) -->
      <path d="M47,58 Q48,60 47,62" fill="none" stroke="#fff" stroke-width="0.8"/>
      <path d="M53,58 Q52,60 53,62" fill="none" stroke="#fff" stroke-width="0.8"/>
      <!-- REVENGE WOLVES (large, angry, flanking) -->
      <!-- Left revenge wolf head -->
      <path d="M10,90 Q8,80 10,72 Q12,64 16,60 Q20,56 22,54" fill="none" stroke="#742A2A" stroke-width="3" stroke-linecap="round"/>
      <polygon points="22,54 16,50 14,58" fill="#742A2A"/>
      <circle cx="10" cy="66" r="4" fill="#C53030" opacity="0.6"/>
      <!-- Right revenge wolf head -->
      <path d="M90,90 Q92,80 90,72 Q88,64 84,60 Q80,56 78,54" fill="none" stroke="#742A2A" stroke-width="3" stroke-linecap="round"/>
      <polygon points="78,54 84,50 86,58" fill="#742A2A"/>
      <circle cx="90" cy="66" r="4" fill="#C53030" opacity="0.6"/>
      <!-- RAGE lines radiating from cub -->
      <line x1="34" y1="44" x2="24" y2="36" stroke="#C53030" stroke-width="0.8" opacity="0.5"/>
      <line x1="66" y1="44" x2="76" y2="36" stroke="#C53030" stroke-width="0.8" opacity="0.5"/>
      <line x1="50" y1="34" x2="50" y2="24" stroke="#C53030" stroke-width="0.8" opacity="0.5"/>
      <!-- X2 ATTACK label -->
      <rect x="40" y="78" width="20" height="12" rx="2" fill="#C53030" opacity="0.8"/>
      <text x="50" y="87" text-anchor="middle" font-size="7" fill="#fff" font-family="sans-serif" font-weight="bold">×2</text>
    </svg>`,

    /* WW·09 — SERIGALA RAKSASA (Big Bad Wolf)
       Konsep: Serigala besar dengan dua mangsa (haus darah ganda) */
    "WW·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gww09_aura" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#C53030" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#C53030" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <circle cx="50" cy="45" r="38" fill="url(#gww09_aura)"/>
      <!-- BIG BAD WOLF HEAD (large, dominant, filling card) -->
      <!-- Massive head -->
      <ellipse cx="50" cy="42" rx="32" ry="28" fill="#742A2A" stroke="#C53030" stroke-width="1"/>
      <!-- Big ears -->
      <polygon points="24,28 14,8 34,22" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <polygon points="76,28 86,8 66,22" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Ear inner -->
      <polygon points="24,26 17,12 30,22" fill="#C53030" opacity="0.5"/>
      <polygon points="76,26 83,12 70,22" fill="#C53030" opacity="0.5"/>
      <!-- Massive snout -->
      <ellipse cx="50" cy="52" rx="20" ry="14" fill="#C53030" stroke="#742A2A" stroke-width="0.8"/>
      <!-- Nose (huge) -->
      <ellipse cx="50" cy="46" rx="7" ry="5" fill="#1A0000"/>
      <!-- Nostrils -->
      <ellipse cx="47" cy="47" rx="1.5" ry="2" fill="#742A2A"/>
      <ellipse cx="53" cy="47" rx="1.5" ry="2" fill="#742A2A"/>
      <!-- MASSIVE FANGS (dripping) -->
      <path d="M36,56 Q34,66 32,72" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <path d="M44,60 Q42,70 41,76" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <path d="M56,60 Q58,70 59,76" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <path d="M64,56 Q66,66 68,72" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <!-- Blood drip tips -->
      <circle cx="32" cy="73" r="2" fill="#C53030"/>
      <circle cx="41" cy="77" r="2" fill="#C53030"/>
      <circle cx="59" cy="77" r="2" fill="#C53030"/>
      <circle cx="68" cy="73" r="2" fill="#C53030"/>
      <!-- Blazing eyes -->
      <ellipse cx="36" cy="36" rx="8" ry="6" fill="#C53030"/>
      <ellipse cx="64" cy="36" rx="8" ry="6" fill="#C53030"/>
      <circle cx="36" cy="36" r="4" fill="#1A0000"/>
      <circle cx="64" cy="36" r="4" fill="#1A0000"/>
      <circle cx="37.5" cy="34.5" r="1.5" fill="#fff" opacity="0.8"/>
      <circle cx="65.5" cy="34.5" r="1.5" fill="#fff" opacity="0.8"/>
      <!-- TWO SKULLS (double kill) at bottom -->
      <circle cx="30" cy="88" r="7" fill="#FEB2B2"/>
      <ellipse cx="27" cy="87" rx="2" ry="2.5" fill="#742A2A"/>
      <ellipse cx="33" cy="87" rx="2" ry="2.5" fill="#742A2A"/>
      <path d="M26,92 Q30,94 34,92" fill="none" stroke="#742A2A" stroke-width="0.8"/>
      <circle cx="70" cy="88" r="7" fill="#FEB2B2"/>
      <ellipse cx="67" cy="87" rx="2" ry="2.5" fill="#742A2A"/>
      <ellipse cx="73" cy="87" rx="2" ry="2.5" fill="#742A2A"/>
      <path d="M66,92 Q70,94 74,92" fill="none" stroke="#742A2A" stroke-width="0.8"/>
      <!-- +1 symbol -->
      <text x="50" y="92" text-anchor="middle" font-size="9" fill="#742A2A" font-family="sans-serif" font-weight="bold">+1</text>
    </svg>`,

    /* WW·10 — SERIGALA PUTIH (White Wolf)
       Konsep: Serigala putih memangsa serigala lain (pengkhianat kawanan) */
    "WW·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- WHITE WOLF (bright, distinct) -->
      <!-- Head -->
      <ellipse cx="50" cy="36" rx="22" ry="18" fill="#fff" stroke="#742A2A" stroke-width="1.2"/>
      <!-- Ears (white pointed) -->
      <polygon points="32,28 26,12 38,24" fill="#fff" stroke="#742A2A" stroke-width="1"/>
      <polygon points="68,28 74,12 62,24" fill="#fff" stroke="#742A2A" stroke-width="1"/>
      <!-- Inner ear (pale pink) -->
      <polygon points="32,27 28,15 36,24" fill="#FEB2B2" opacity="0.6"/>
      <polygon points="68,27 72,15 64,24" fill="#FEB2B2" opacity="0.6"/>
      <!-- Snout -->
      <ellipse cx="50" cy="44" rx="12" ry="8" fill="#FFF5F5" stroke="#742A2A" stroke-width="0.8"/>
      <!-- Nose (black) -->
      <ellipse cx="50" cy="41" rx="4" ry="3" fill="#1A0000"/>
      <!-- White wolf eyes (ice blue / pale) -->
      <ellipse cx="41" cy="32" rx="5" ry="4" fill="#E8F4FE"/>
      <ellipse cx="59" cy="32" rx="5" ry="4" fill="#E8F4FE"/>
      <circle cx="41" cy="32" r="2.5" fill="#1A365D"/>
      <circle cx="59" cy="32" r="2.5" fill="#1A365D"/>
      <circle cx="42" cy="31" r="1" fill="#fff"/>
      <circle cx="60" cy="31" r="1" fill="#fff"/>
      <!-- DARK WOLF BEING ATTACKED (white wolf killing own kind) -->
      <!-- Dark wolf, defeated/slain -->
      <path d="M18,90 Q14,82 16,74 Q18,66 22,60 Q26,54 28,48"
            fill="none" stroke="#742A2A" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="28" cy="46" rx="10" ry="8" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Dark wolf weak (X eyes) -->
      <line x1="25" y1="43" x2="29" y2="47" stroke="#C53030" stroke-width="0.8"/>
      <line x1="29" y1="43" x2="25" y2="47" stroke="#C53030" stroke-width="0.8"/>
      <!-- White wolf claw striking -->
      <path d="M50,54 Q42,54 36,52" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="36,52 38,46 32,50" fill="#742A2A"/>
      <!-- EVERY 2 NIGHTS label -->
      <rect x="56" y="72" width="38" height="14" rx="2" fill="#742A2A" opacity="0.8"/>
      <text x="75" y="82" text-anchor="middle" font-size="5" fill="#fff" font-family="sans-serif" font-weight="bold">SETIAP 2 MALAM</text>
      <!-- Crown (wins alone) -->
      <polygon points="50,8 53,14 58,14 54,18 56,24 50,20 44,24 46,18 42,14 47,14" fill="#742A2A" opacity="0.5" transform="scale(0.6) translate(33,0)"/>
    </svg>`,

    /* WW·11 — SERIGALA TIDUR (Dream Wolf)
       Konsep: Serigala tertidur pulas, tidak ikut kawanan berburu */
    "WW·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Moon (night, but wolf is sleeping) -->
      <path d="M76,18 Q82,24 80,32 Q78,40 70,44 Q62,48 54,44 Q62,36 64,28 Q68,18 76,18 Z"
            fill="#FEB2B2" stroke="#742A2A" stroke-width="0.8" opacity="0.7"/>
      <!-- SLEEPING WOLF (curled up, side view) -->
      <!-- Body (curled/rolled) -->
      <ellipse cx="50" cy="64" rx="28" ry="18" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Head on the curled body -->
      <circle cx="30" cy="60" r="14" fill="#C53030" stroke="#742A2A" stroke-width="0.8"/>
      <!-- Ears (drooped — sleeping) -->
      <path d="M24,52 Q18,44 22,40" fill="none" stroke="#742A2A" stroke-width="3" stroke-linecap="round"/>
      <path d="M36,50 Q36,42 40,40" fill="none" stroke="#742A2A" stroke-width="3" stroke-linecap="round"/>
      <!-- Snout pointing left -->
      <ellipse cx="18" cy="62" rx="10" ry="6" fill="#FEB2B2" stroke="#742A2A" stroke-width="0.7"/>
      <!-- Nose -->
      <ellipse cx="14" cy="60" rx="3" ry="2" fill="#1A0000"/>
      <!-- CLOSED EYES (sleeping Z style) -->
      <path d="M22,58 Q26,56 30,58" fill="none" stroke="#1A0000" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32,56 Q36,54 40,56" fill="none" stroke="#1A0000" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Tail curled around -->
      <path d="M78,64 Q88,70 86,80 Q84,88 76,86 Q68,84 68,76 Q68,70 72,68" fill="none" stroke="#742A2A" stroke-width="4" stroke-linecap="round"/>
      <!-- ZZZ symbols (deep sleep) -->
      <text x="50" y="30" font-size="12" fill="#742A2A" font-family="sans-serif" font-weight="bold" opacity="0.5">z</text>
      <text x="58" y="22" font-size="14" fill="#C53030" font-family="sans-serif" font-weight="bold" opacity="0.4">z</text>
      <text x="68" y="12" font-size="16" fill="#742A2A" font-family="sans-serif" font-weight="bold" opacity="0.3">Z</text>
      <!-- Pack wake symbol (others are awake, he's not) -->
      <rect x="72" y="74" width="22" height="16" rx="2" fill="#742A2A" opacity="0.6"/>
      <text x="83" y="85" text-anchor="middle" font-size="5" fill="#FEB2B2" font-family="sans-serif">TIDAK</text>
      <text x="83" y="79" text-anchor="middle" font-size="4.5" fill="#FEB2B2" font-family="sans-serif">BANGUN</text>
    </svg>`,

    /* WW·12 — SERIGALA BUAS (Dire Wolf)
       Konsep: Serigala besar + rantai darah ke manusia sebagai "Blood Brother" */
    "WW·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- DIRE WOLF (left, powerful, muscular wolf) -->
      <!-- Head -->
      <ellipse cx="30" cy="38" rx="18" ry="16" fill="#742A2A" stroke="#C53030" stroke-width="1"/>
      <!-- Ears (sharp, aggressive) -->
      <polygon points="16,28 10,12 24,24" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <polygon points="44,26 46,10 36,22" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Snout -->
      <ellipse cx="30" cy="46" rx="12" ry="8" fill="#C53030" stroke="#742A2A" stroke-width="0.7"/>
      <!-- Fangs -->
      <path d="M24,50 Q23,56 22,60" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M30,52 Q30,58 30,62" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M36,50 Q37,56 38,60" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Eyes (fierce, red) -->
      <ellipse cx="22" cy="34" rx="6" ry="5" fill="#C53030"/>
      <ellipse cx="38" cy="34" rx="6" ry="5" fill="#C53030"/>
      <circle cx="22" cy="34" r="3" fill="#1A0000"/>
      <circle cx="38" cy="34" r="3" fill="#1A0000"/>
      <circle cx="23" cy="33" r="1" fill="#FEB2B2" opacity="0.8"/>
      <circle cx="39" cy="33" r="1" fill="#FEB2B2" opacity="0.8"/>
      <!-- Dire wolf body -->
      <path d="M12,54 Q10,68 14,80 Q18,86 24,84 Q28,82 32,76 Q36,82 42,80 Q48,78 48,68 Q48,56 44,54 Q38,52 30,52 Q22,52 12,54 Z"
            fill="#742A2A" stroke="#C53030" stroke-width="0.5"/>
      <!-- BLOOD CHAIN connecting wolf to human (Blood Brother bond) -->
      <path d="M48,62 Q60,58 64,56" fill="none" stroke="#C53030" stroke-width="2"/>
      <!-- Chain links -->
      <ellipse cx="52" cy="61" rx="3" ry="2" fill="none" stroke="#C53030" stroke-width="1.2"/>
      <ellipse cx="58" cy="59" rx="3" ry="2" fill="none" stroke="#C53030" stroke-width="1.2"/>
      <ellipse cx="64" cy="57" rx="3" ry="2" fill="none" stroke="#C53030" stroke-width="1.2"/>
      <!-- BLOOD BROTHER (human figure, right) -->
      <circle cx="76" cy="42" r="10" fill="#FFF5F5" stroke="#742A2A" stroke-width="1"/>
      <ellipse cx="76" cy="58" rx="10" ry="14" fill="#FFF5F5" stroke="#742A2A" stroke-width="0.8"/>
      <!-- Blood brother face (fearful) -->
      <ellipse cx="72" cy="40" rx="2" ry="2.5" fill="#742A2A"/>
      <ellipse cx="80" cy="40" rx="2" ry="2.5" fill="#742A2A"/>
      <!-- X on blood brother (will trigger rage if killed) -->
      <circle cx="76" cy="80" r="8" fill="#C53030" opacity="0.7" stroke="#742A2A" stroke-width="0.8"/>
      <text x="76" y="84" text-anchor="middle" font-size="10" fill="#fff" font-family="sans-serif">!</text>
    </svg>`,

    /* ============================================================
       DECK 7 — Cards 55-63
       WW·13 Black Wolf, WW·14 Wolf Man,
       NT·02 Tanner, NT·04 Doppelganger, NT·05 Serial Killer,
       NT·06 Cult Leader, NT·07 Cursed, NT·08 Vampire, NT·09 The Count
       ============================================================ */

    /* WW·13 — SERIGALA HITAM (Black Wolf)
       Konsep: Serigala hitam total + aura pemblokir radar — semua serigala tak terdeteksi */
    "WW·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- DARK AURA (blocking all detection) -->
      <circle cx="50" cy="46" r="38" fill="#1A0000" opacity="0.15"/>
      <circle cx="50" cy="46" r="28" fill="#1A0000" opacity="0.15"/>
      <!-- BLACK WOLF HEAD (dominant, dark) -->
      <!-- Ears -->
      <polygon points="28,32 20,10 36,26" fill="#1A0000" stroke="#742A2A" stroke-width="0.8"/>
      <polygon points="72,32 80,10 64,26" fill="#1A0000" stroke="#742A2A" stroke-width="0.8"/>
      <!-- Inner ear (dark red) -->
      <polygon points="28,30 23,14 32,26" fill="#742A2A" opacity="0.6"/>
      <polygon points="72,30 77,14 68,26" fill="#742A2A" opacity="0.6"/>
      <!-- Head -->
      <ellipse cx="50" cy="44" rx="26" ry="22" fill="#1A0000" stroke="#742A2A" stroke-width="1.2"/>
      <!-- Snout -->
      <ellipse cx="50" cy="54" rx="16" ry="10" fill="#742A2A" stroke="#1A0000" stroke-width="0.8"/>
      <!-- Nose -->
      <ellipse cx="50" cy="49" rx="5" ry="4" fill="#0D0000"/>
      <!-- Piercing red eyes (the only thing visible in darkness) -->
      <ellipse cx="38" cy="38" rx="7" ry="5" fill="#C53030"/>
      <ellipse cx="62" cy="38" rx="7" ry="5" fill="#C53030"/>
      <circle cx="38" cy="38" r="3.5" fill="#742A2A"/>
      <circle cx="62" cy="38" r="3.5" fill="#742A2A"/>
      <circle cx="39" cy="37" r="1.5" fill="#FEB2B2" opacity="0.8"/>
      <circle cx="63" cy="37" r="1.5" fill="#FEB2B2" opacity="0.8"/>
      <!-- Fangs (subtle) -->
      <path d="M44,58 Q43,64 42,68" fill="none" stroke="#FFF5F5" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <path d="M56,58 Q57,64 58,68" fill="none" stroke="#FFF5F5" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <!-- RADAR BLOCKED symbols (strikethrough detection) -->
      <!-- Left: blocked eye symbol -->
      <circle cx="16" cy="76" r="9" fill="none" stroke="#742A2A" stroke-width="1" opacity="0.6"/>
      <path d="M10,70 Q16,76 22,70 Q16,82 10,76 Q16,70 22,76 Z" fill="#742A2A" opacity="0.3"/>
      <line x1="10" y1="68" x2="22" y2="84" stroke="#C53030" stroke-width="1.5" opacity="0.8" stroke-linecap="round"/>
      <!-- Right: blocked radar -->
      <circle cx="84" cy="76" r="9" fill="none" stroke="#742A2A" stroke-width="1" opacity="0.6"/>
      <circle cx="84" cy="76" r="4" fill="none" stroke="#742A2A" stroke-width="0.6" opacity="0.5"/>
      <line x1="78" y1="68" x2="90" y2="84" stroke="#C53030" stroke-width="1.5" opacity="0.8" stroke-linecap="round"/>
      <!-- Pack protection aura -->
      <circle cx="50" cy="46" r="44" fill="none" stroke="#742A2A" stroke-width="0.8" stroke-dasharray="4,6" opacity="0.4"/>
    </svg>`,

    /* WW·14 — MANUSIA SERIGALA (Wolf Man)
       Konsep: Manusia di luar, tapi Seer melihat serigala — dua sisi terbalik */
    "WW·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF5F5" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FEB2B2" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- SPLIT DOWN THE MIDDLE (half human / half wolf) -->
      <line x1="50" y1="5" x2="50" y2="95" stroke="#742A2A" stroke-width="1.5" stroke-dasharray="4,3"/>
      <!-- LEFT SIDE: Human (allied with village, GOOD) -->
      <!-- Human half-head -->
      <path d="M50,22 Q36,22 30,32 Q26,40 28,50 Q30,58 36,62 Q42,66 50,66 Z"
            fill="#EBF8FF" stroke="#2B6CB0" stroke-width="1"/>
      <!-- Human eye -->
      <circle cx="38" cy="40" r="4" fill="#2B6CB0"/>
      <circle cx="39" cy="39" r="1.5" fill="#fff"/>
      <!-- Human eyebrow -->
      <path d="M34,36 Q38,34 42,36" fill="none" stroke="#2B6CB0" stroke-width="1" stroke-linecap="round"/>
      <!-- Friendly half-smile (left) -->
      <path d="M36,54 Q42,58 50,56" fill="none" stroke="#2B6CB0" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Good symbol (blue heart) -->
      <path d="M24,74 Q24,70 28,72 Q32,70 32,74 Q32,80 28,84 Q24,80 24,74 Z" fill="#BEE3F8" opacity="0.8"/>
      <!-- RIGHT SIDE: Wolf (how Seer sees it) -->
      <!-- Wolf half-head -->
      <path d="M50,22 Q64,22 70,32 Q74,40 72,50 Q70,58 64,62 Q58,66 50,66 Z"
            fill="#742A2A" stroke="#C53030" stroke-width="1"/>
      <!-- Wolf ear (right) -->
      <polygon points="64,26 72,10 60,22" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Wolf eye (red, seer sees this) -->
      <ellipse cx="62" cy="40" rx="6" ry="5" fill="#C53030"/>
      <circle cx="62" cy="40" r="3" fill="#1A0000"/>
      <circle cx="63" cy="39" r="1.2" fill="#FEB2B2" opacity="0.8"/>
      <!-- Wolf fang (right) -->
      <path d="M58,58 Q58,64 57,68" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <path d="M64,56 Q64,62 65,66" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <!-- Evil symbol (red X) -->
      <circle cx="76" cy="74" r="8" fill="#FEB2B2" opacity="0.5"/>
      <line x1="72" y1="70" x2="80" y2="78" stroke="#C53030" stroke-width="1.5"/>
      <line x1="80" y1="70" x2="72" y2="78" stroke="#C53030" stroke-width="1.5"/>
      <!-- SEER EYE watching (top center, seeing the wolf side) -->
      <ellipse cx="50" cy="10" rx="10" ry="6" fill="#FFF5F5" stroke="#742A2A" stroke-width="0.8"/>
      <circle cx="50" cy="10" r="3.5" fill="#742A2A"/>
      <circle cx="50" cy="10" r="1.5" fill="#1A0000"/>
      <circle cx="51" cy="9" r="0.8" fill="#FEB2B2"/>
    </svg>`,

    /* NT·02 — PENYAMAK (Tanner)
       Konsep: Hanya menang jika DIEKSEKUSI warga — dirinya secara aktif terlihat mencurigakan */
    "NT·02": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- GALLOWS (execution by vote — the goal!) -->
      <!-- Gallows frame -->
      <rect x="14" y="10" width="5" height="52" rx="2" fill="#276749"/>
      <rect x="14" y="10" width="36" height="5" rx="2" fill="#276749"/>
      <!-- Noose -->
      <line x1="42" y1="15" x2="42" y2="32" stroke="#8B7355" stroke-width="2"/>
      <!-- FIGURE hanging (happily? this is their win condition!) -->
      <!-- Head (smiling!) -->
      <circle cx="42" cy="38" r="8" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Big grin (this is what they WANT) -->
      <path d="M37,40 Q42,46 47,40" fill="none" stroke="#276749" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Happy eyes -->
      <circle cx="39" cy="36" r="2" fill="#276749"/>
      <circle cx="45" cy="36" r="2" fill="#276749"/>
      <!-- Body (limp, hung) -->
      <line x1="42" y1="46" x2="42" y2="64" stroke="#276749" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Arms spread (welcoming death) -->
      <line x1="42" y1="52" x2="30" y2="60" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <line x1="42" y1="52" x2="54" y2="60" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="42" y1="64" x2="36" y2="76" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <line x1="42" y1="64" x2="48" y2="76" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <!-- VOTE TALLIES pointing to it (crowd voting to execute) -->
      <!-- Voting hands pointing right (toward execution) -->
      <path d="M68,36 Q74,34 80,36" fill="none" stroke="#276749" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="80,36 76,32 78,40" fill="#276749"/>
      <path d="M68,46 Q74,44 80,46" fill="none" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <polygon points="80,46 76,42 78,50" fill="#276749"/>
      <path d="M68,56 Q74,54 80,56" fill="none" stroke="#276749" stroke-width="1" stroke-linecap="round"/>
      <polygon points="80,56 76,52 78,60" fill="#276749"/>
      <!-- WIN star (achieving execution = victory) -->
      <circle cx="76" cy="76" r="12" fill="#9AE6B4" opacity="0.5" stroke="#276749" stroke-width="1"/>
      <polygon points="76,66 78.5,73 86,73 80,77.5 82.5,85 76,80.5 69.5,85 72,77.5 66,73 73.5,73"
               fill="#276749" transform="scale(0.55) translate(84,68)"/>
      <text x="76" y="80" text-anchor="middle" font-size="7" fill="#276749" font-family="sans-serif" font-weight="bold">WIN</text>
    </svg>`,

    /* NT·04 — PENIRU (Doppelganger)
       Konsep: Dua wajah cermin — satu mengambil alih identitas yang lain saat mati */
    "NT·04": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- MIRROR LINE (vertical center) -->
      <line x1="50" y1="8" x2="50" y2="92" stroke="#9AE6B4" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- DOPPELGANGER (left — original form, neutral) -->
      <circle cx="28" cy="38" r="14" fill="#F0FFF4" stroke="#276749" stroke-width="1.2"/>
      <!-- Eyes (neutral, shapeless) -->
      <ellipse cx="23" cy="36" rx="3" ry="3.5" fill="#276749" opacity="0.7"/>
      <ellipse cx="33" cy="36" rx="3" ry="3.5" fill="#276749" opacity="0.7"/>
      <!-- Neutral flat mouth -->
      <line x1="22" y1="43" x2="34" y2="43" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Body (transparent, shapeless) -->
      <ellipse cx="28" cy="62" rx="12" ry="16" fill="#F0FFF4" stroke="#276749" stroke-width="1" stroke-dasharray="2,2"/>
      <!-- Question mark (unknown identity) -->
      <text x="28" y="68" text-anchor="middle" font-size="14" fill="#276749" font-family="sans-serif" font-weight="bold" opacity="0.5">?</text>
      <!-- TARGET PERSON (right — who is being copied) -->
      <circle cx="72" cy="38" r="14" fill="#9AE6B4" stroke="#276749" stroke-width="1.2" opacity="0.8"/>
      <!-- Target's face (specific, distinct) -->
      <line x1="67" y1="35" x2="70" y2="35" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="74" y1="35" x2="77" y2="35" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M67,42 Q72,47 77,42" fill="none" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Target body -->
      <ellipse cx="72" cy="62" rx="12" ry="16" fill="#9AE6B4" stroke="#276749" stroke-width="1" opacity="0.8"/>
      <!-- DEATH + INHERIT arrows (target dies → doppelganger inherits role) -->
      <!-- X (target dies) -->
      <circle cx="72" cy="82" r="7" fill="#C53030" opacity="0.6"/>
      <line x1="68" y1="78" x2="76" y2="86" stroke="#fff" stroke-width="1.5"/>
      <line x1="76" y1="78" x2="68" y2="86" stroke="#fff" stroke-width="1.5"/>
      <!-- Arrow from right to left (role inherits) -->
      <path d="M60,50 Q50,46 40,50" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <polygon points="40,50 44,44 44,56" fill="#276749"/>
      <!-- Inheritance label -->
      <text x="50" y="88" text-anchor="middle" font-size="5.5" fill="#276749" font-family="sans-serif" font-weight="bold">WARISI PERAN</text>
    </svg>`,

    /* NT·05 — PEMBUNUH BERANTAI (Serial Killer)
       Konsep: Pisau + target crosshair + bisa kebal serangan serigala */
    "NT·05": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- LARGE KNIFE / BLADE (center, dominant) -->
      <!-- Blade -->
      <path d="M40,10 L68,38 Q72,44 68,50 L36,82 Q32,86 28,82 Z"
            fill="#9AE6B4" stroke="#276749" stroke-width="1.2"/>
      <!-- Blade edge shine -->
      <path d="M42,12 L66,36 Q70,42 66,48" fill="none" stroke="#fff" stroke-width="0.8" opacity="0.7"/>
      <!-- Blood on blade -->
      <path d="M38,70 Q36,76 34,78" fill="none" stroke="#C53030" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <circle cx="34" cy="79" r="2.5" fill="#C53030" opacity="0.7"/>
      <!-- Handle/guard -->
      <rect x="28" y="74" width="20" height="8" rx="2" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <!-- Handle grip -->
      <rect x="30" y="82" width="16" height="14" rx="3" fill="#1C4532" stroke="#276749" stroke-width="0.6"/>
      <!-- Grip wrapping lines -->
      <line x1="30" y1="86" x2="46" y2="86" stroke="#276749" stroke-width="0.5" opacity="0.6"/>
      <line x1="30" y1="90" x2="46" y2="90" stroke="#276749" stroke-width="0.5" opacity="0.6"/>
      <!-- CROSSHAIR TARGET (top right) -->
      <circle cx="76" cy="24" r="16" fill="none" stroke="#C53030" stroke-width="1.2" opacity="0.7"/>
      <circle cx="76" cy="24" r="8" fill="none" stroke="#C53030" stroke-width="0.8" opacity="0.6"/>
      <circle cx="76" cy="24" r="2" fill="#C53030" opacity="0.8"/>
      <!-- Crosshair lines -->
      <line x1="60" y1="24" x2="68" y2="24" stroke="#C53030" stroke-width="0.8" opacity="0.7"/>
      <line x1="84" y1="24" x2="92" y2="24" stroke="#C53030" stroke-width="0.8" opacity="0.7"/>
      <line x1="76" y1="8" x2="76" y2="16" stroke="#C53030" stroke-width="0.8" opacity="0.7"/>
      <line x1="76" y1="32" x2="76" y2="40" stroke="#C53030" stroke-width="0.8" opacity="0.7"/>
      <!-- IMMUNITY SHIELD (wolf cannot kill SK) -->
      <path d="M72,56 L78,60 L78,72 Q78,78 72,80 Q66,78 66,72 L66,60 Z"
            fill="#9AE6B4" stroke="#276749" stroke-width="0.8" opacity="0.8"/>
      <!-- Wolf X inside shield -->
      <line x1="68" y1="64" x2="76" y2="72" stroke="#C53030" stroke-width="1.2" opacity="0.7"/>
      <line x1="76" y1="64" x2="68" y2="72" stroke="#C53030" stroke-width="1.2" opacity="0.7"/>
    </svg>`,

    /* NT·06 — PEMIMPIN SEKTE (Cult Leader)
       Konsep: Sosok pemimpin dengan lingkaran murid yang terus bertambah */
    "NT·06": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- CULT RINGS (recruitment expanding) -->
      <circle cx="50" cy="44" r="36" fill="none" stroke="#9AE6B4" stroke-width="0.6" stroke-dasharray="3,4" opacity="0.5"/>
      <circle cx="50" cy="44" r="26" fill="none" stroke="#9AE6B4" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.6"/>
      <circle cx="50" cy="44" r="16" fill="none" stroke="#276749" stroke-width="1" opacity="0.7"/>
      <!-- CULT LEADER (center, elevated) -->
      <!-- Body/robe -->
      <path d="M38,60 Q36,72 38,82 L62,82 Q64,72 62,60 Q56,56 50,56 Q44,56 38,60 Z"
            fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <!-- Head -->
      <circle cx="50" cy="46" r="12" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Hood/cowl -->
      <path d="M38,48 Q38,38 50,34 Q62,38 62,48 Q62,54 50,56 Q38,54 38,48 Z"
            fill="#1C4532" stroke="#276749" stroke-width="0.8" opacity="0.8"/>
      <!-- Hood face opening -->
      <path d="M42,46 Q42,40 50,38 Q58,40 58,46 Q56,54 50,56 Q44,54 42,46 Z"
            fill="#F0FFF4" opacity="0.8"/>
      <!-- Eyes (hypnotic, spiraling) -->
      <circle cx="45" cy="45" r="3.5" fill="#276749"/>
      <circle cx="55" cy="45" r="3.5" fill="#276749"/>
      <circle cx="45" cy="45" r="1.5" fill="#9AE6B4"/>
      <circle cx="55" cy="45" r="1.5" fill="#9AE6B4"/>
      <!-- Raised arms (recruiting) -->
      <line x1="38" y1="62" x2="24" y2="52" stroke="#276749" stroke-width="3" stroke-linecap="round"/>
      <line x1="62" y1="62" x2="76" y2="52" stroke="#276749" stroke-width="3" stroke-linecap="round"/>
      <!-- CULT MEMBERS (small figures in a tightening circle) -->
      <!-- Member top -->
      <circle cx="50" cy="10" r="5" fill="#9AE6B4" stroke="#276749" stroke-width="0.7"/>
      <!-- Member bottom -->
      <circle cx="50" cy="84" r="5" fill="#9AE6B4" stroke="#276749" stroke-width="0.7"/>
      <!-- Member left -->
      <circle cx="16" cy="44" r="5" fill="#9AE6B4" stroke="#276749" stroke-width="0.7"/>
      <!-- Member right -->
      <circle cx="84" cy="44" r="5" fill="#9AE6B4" stroke="#276749" stroke-width="0.7"/>
      <!-- Connecting lines (bonds to leader) -->
      <line x1="50" y1="34" x2="50" y2="15" stroke="#9AE6B4" stroke-width="0.7" stroke-dasharray="2,2" opacity="0.6"/>
      <line x1="38" y1="62" x2="21" y2="47" stroke="#9AE6B4" stroke-width="0.7" stroke-dasharray="2,2" opacity="0.6"/>
      <line x1="62" y1="62" x2="79" y2="47" stroke="#9AE6B4" stroke-width="0.7" stroke-dasharray="2,2" opacity="0.6"/>
    </svg>`,

    /* NT·07 — DARAH TERKUTUK (Cursed)
       Konsep: Warga biasa yang saat digigit berubah jadi serigala — transformasi */
    "NT·07": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- TRANSFORMATION SPLIT (before → after) -->
      <!-- Arrow of transformation (left to right) -->
      <path d="M14,50 Q30,46 40,50 Q50,54 60,50 Q70,46 86,50"
            fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <polygon points="86,50 80,46 82,54" fill="#276749"/>
      <!-- BEFORE (left side — innocent villager) -->
      <circle cx="24" cy="34" r="10" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Villager eyes (normal) -->
      <circle cx="20" cy="32" r="2" fill="#276749"/>
      <circle cx="28" cy="32" r="2" fill="#276749"/>
      <path d="M19,38 Q24,42 29,38" fill="none" stroke="#276749" stroke-width="1" stroke-linecap="round"/>
      <!-- Villager body -->
      <ellipse cx="24" cy="52" rx="8" ry="12" fill="#F0FFF4" stroke="#276749" stroke-width="0.8"/>
      <!-- WOLF BITE on villager (the curse trigger) -->
      <path d="M28,40 Q32,44 36,40" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32,42 Q34,46 38,44" fill="none" stroke="#C53030" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <!-- AFTER (right side — transformed wolf) -->
      <ellipse cx="76" cy="34" rx="12" ry="10" fill="#742A2A" stroke="#C53030" stroke-width="1"/>
      <!-- Wolf ears -->
      <polygon points="66,28 62,16 72,24" fill="#742A2A" stroke="#C53030" stroke-width="0.7"/>
      <polygon points="86,28 90,16 80,24" fill="#742A2A" stroke="#C53030" stroke-width="0.7"/>
      <!-- Wolf snout -->
      <ellipse cx="76" cy="40" rx="8" ry="6" fill="#C53030" stroke="#742A2A" stroke-width="0.6"/>
      <!-- Nose -->
      <ellipse cx="76" cy="38" rx="3" ry="2" fill="#1A0000"/>
      <!-- Wolf eyes (red) -->
      <circle cx="70" cy="32" r="3" fill="#C53030"/>
      <circle cx="82" cy="32" r="3" fill="#C53030"/>
      <circle cx="70.8" cy="31" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="82.8" cy="31" r="1" fill="#fff" opacity="0.8"/>
      <!-- Wolf body -->
      <ellipse cx="76" cy="58" rx="10" ry="14" fill="#742A2A" stroke="#C53030" stroke-width="0.8"/>
      <!-- Seer reads "GOOD" label top left -->
      <circle cx="20" cy="76" r="10" fill="none" stroke="#276749" stroke-width="0.8"/>
      <path d="M14,76 Q20,70 26,76 Q20,82 14,76 Z" fill="#276749" opacity="0.4"/>
      <text x="20" y="79" text-anchor="middle" font-size="5.5" fill="#276749" font-family="sans-serif" font-weight="bold">GOOD</text>
    </svg>`,

    /* NT·08 — VAMPIR (Vampire)
       Konsep: Kelelawar + gigi taring + korban tertunda kematian */
    "NT·08": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Night sky / dark moon -->
      <circle cx="78" cy="14" r="10" fill="#E8F4FE" stroke="#276749" stroke-width="0.7" opacity="0.6"/>
      <!-- VAMPIRE HEAD (center, aristocratic) -->
      <circle cx="50" cy="36" r="18" fill="#F0FFF4" stroke="#276749" stroke-width="1.2"/>
      <!-- Widow's peak hairline -->
      <path d="M32,36 Q36,24 50,22 Q64,24 68,36" fill="#1C4532" stroke="#276749" stroke-width="0.5"/>
      <polygon points="50,22 46,30 54,30" fill="#1C4532"/>
      <!-- Vampire eyes (eerie pale green glow) -->
      <ellipse cx="42" cy="34" rx="5" ry="4" fill="#9AE6B4"/>
      <ellipse cx="58" cy="34" rx="5" ry="4" fill="#9AE6B4"/>
      <circle cx="42" cy="34" r="3" fill="#276749"/>
      <circle cx="58" cy="34" r="3" fill="#276749"/>
      <circle cx="43" cy="33" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="59" cy="33" r="1" fill="#fff" opacity="0.8"/>
      <!-- FANGS (prominent, dripping) -->
      <path d="M44,46 Q44,52 43,56" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M56,46 Q56,52 57,56" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Blood drip tips -->
      <circle cx="43" cy="57" r="2" fill="#C53030" opacity="0.7"/>
      <circle cx="57" cy="57" r="2" fill="#C53030" opacity="0.7"/>
      <!-- Red lips -->
      <path d="M43,44 Q50,48 57,44" fill="#C53030" opacity="0.5" stroke="#742A2A" stroke-width="0.5"/>
      <!-- CAPE (bat-like, spreading) -->
      <path d="M32,54 Q14,52 10,64 Q12,74 20,72 Q28,70 32,62 Q36,56 38,54"
            fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <path d="M68,54 Q86,52 90,64 Q88,74 80,72 Q72,70 68,62 Q64,56 62,54"
            fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Cape collar -->
      <path d="M32,54 Q50,60 68,54" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- NECK BITE on victim (bottom) -->
      <ellipse cx="50" cy="78" rx="12" ry="8" fill="#F0FFF4" stroke="#276749" stroke-width="0.8"/>
      <path d="M44,78 Q44,82 42,84" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M50,80 Q50,84 50,86" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Hourglass (1 day delay) -->
      <rect x="72" y="72" width="20" height="6" rx="1" fill="#276749"/>
      <rect x="72" y="88" width="20" height="6" rx="1" fill="#276749"/>
      <path d="M73,78 L82,85 L91,78 Z" fill="#9AE6B4" opacity="0.6"/>
      <path d="M73,88 L82,81 L91,88 Z" fill="#1C4532" opacity="0.8"/>
    </svg>`,

    /* NT·09 — SANG TUAN VAMPIR (The Count)
       Konsep: Mahkota vampir + lebih banyak pengikut yang direkrut / dimutasi */
    "NT·09": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- VAMPIRE CROWN (The Count — leader of vampires) -->
      <!-- Crown base -->
      <rect x="30" y="22" width="40" height="10" rx="2" fill="#1C4532" stroke="#276749" stroke-width="1"/>
      <!-- Crown points (5 points — count) -->
      <polygon points="32,22 35,10 38,22" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <polygon points="39,22 42,8 45,22" fill="#9AE6B4" stroke="#276749" stroke-width="1"/>
      <polygon points="46,22 50,6 54,22" fill="#1C4532" stroke="#276749" stroke-width="1.2"/>
      <polygon points="55,22 58,8 61,22" fill="#9AE6B4" stroke="#276749" stroke-width="1"/>
      <polygon points="62,22 65,10 68,22" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Crown gems -->
      <circle cx="35" cy="18" r="2.5" fill="#9AE6B4"/>
      <circle cx="42" cy="16" r="3" fill="#C53030"/>
      <circle cx="50" cy="14" r="3.5" fill="#9AE6B4"/>
      <circle cx="58" cy="16" r="3" fill="#C53030"/>
      <circle cx="65" cy="18" r="2.5" fill="#9AE6B4"/>
      <!-- THE COUNT FACE (beneath crown) -->
      <circle cx="50" cy="42" r="16" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Vampire widow's peak -->
      <path d="M34,42 Q38,32 50,30 Q62,32 66,42" fill="#1C4532" stroke="#276749" stroke-width="0.5"/>
      <polygon points="50,30 46,38 54,38" fill="#1C4532"/>
      <!-- Count's eyes (commanding, hypnotic) -->
      <ellipse cx="43" cy="40" rx="5" ry="4" fill="#9AE6B4"/>
      <ellipse cx="57" cy="40" rx="5" ry="4" fill="#9AE6B4"/>
      <circle cx="43" cy="40" r="3" fill="#276749"/>
      <circle cx="57" cy="40" r="3" fill="#276749"/>
      <circle cx="44" cy="39" r="1.2" fill="#fff" opacity="0.9"/>
      <circle cx="58" cy="39" r="1.2" fill="#fff" opacity="0.9"/>
      <!-- Aristocratic smile with fangs -->
      <path d="M43,48 Q50,52 57,48" fill="#C53030" opacity="0.4" stroke="#742A2A" stroke-width="0.5"/>
      <path d="M46,48 Q46,54 45,58" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54,48 Q54,54 55,58" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- VICTIM → VAMPIRE chain (mutation) -->
      <!-- Human figure -->
      <circle cx="24" cy="76" r="7" fill="#F0FFF4" stroke="#276749" stroke-width="0.8"/>
      <ellipse cx="24" cy="90" rx="7" ry="9" fill="#F0FFF4" stroke="#276749" stroke-width="0.8"/>
      <!-- Mutation arrow -->
      <path d="M32,78 Q46,76 56,74" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="56,74 52,70 54,78" fill="#C53030"/>
      <!-- Bat/vampire icon (mutated into vampire) -->
      <path d="M62,74 Q66,70 72,68 Q78,70 82,74 Q78,78 72,76 Q66,78 62,74 Z"
            fill="#1C4532" stroke="#276749" stroke-width="0.7"/>
      <!-- Bat eyes -->
      <circle cx="68" cy="73" r="1.5" fill="#9AE6B4"/>
      <circle cx="76" cy="73" r="1.5" fill="#9AE6B4"/>
      <!-- Count cape (regal) -->
      <path d="M34,58 Q18,56 14,68 Q16,76 24,74 Q30,72 34,66"
            fill="#1C4532" stroke="#276749" stroke-width="0.6" opacity="0.7"/>
      <path d="M66,58 Q82,56 86,68 Q84,76 76,74 Q70,72 66,66"
            fill="#1C4532" stroke="#276749" stroke-width="0.6" opacity="0.7"/>
    </svg>`,

    /* ============================================================
       DECK 8 — Cards 64-72  (FINAL DECK — ALL NEUTRAL)
       NT·10 Chupacabra, NT·11 Bogeyman, NT·12 Hoodlum,
       NT·13 Wild Child, NT·14 Sasquatch, NT·15 Leprechaun,
       NT·16 Bloody Mary, NT·17 The Thing, NT·18 Nostradamus
       Palette: #F0FFF4 bg, #276749 dark, #9AE6B4 accent, #1C4532 deep
       ============================================================ */

    /* NT·10 — PENGHISAP DARAH (Chupacabra)
       Konsep: Makhluk mitos + menyalin kekuatan serigala jika mengenai ww */
    "NT·10": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- CHUPACABRA creature silhouette (reptilian, hunched) -->
      <!-- Main body -->
      <ellipse cx="50" cy="58" rx="22" ry="18" fill="#276749" stroke="#1C4532" stroke-width="1"/>
      <!-- Neck -->
      <path d="M44,46 Q42,40 44,36 Q48,30 52,36 Q54,40 52,46" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <!-- Head (alien/reptilian) -->
      <ellipse cx="48" cy="32" rx="12" ry="10" fill="#1C4532" stroke="#276749" stroke-width="1"/>
      <!-- Spiny back ridge -->
      <path d="M36,48 Q32,40 30,32 Q28,24 30,18" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <circle cx="34" cy="44" r="3" fill="#9AE6B4" opacity="0.7"/>
      <circle cx="32" cy="36" r="2.5" fill="#9AE6B4" opacity="0.6"/>
      <circle cx="31" cy="28" r="2" fill="#9AE6B4" opacity="0.5"/>
      <circle cx="30" cy="20" r="1.5" fill="#9AE6B4" opacity="0.4"/>
      <!-- Eyes (predatory, green glowing) -->
      <ellipse cx="43" cy="29" rx="4" ry="3.5" fill="#9AE6B4"/>
      <ellipse cx="53" cy="29" rx="4" ry="3.5" fill="#9AE6B4"/>
      <circle cx="43" cy="29" r="2.5" fill="#1C4532"/>
      <circle cx="53" cy="29" r="2.5" fill="#1C4532"/>
      <circle cx="44" cy="28" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="54" cy="28" r="1" fill="#fff" opacity="0.8"/>
      <!-- Long fangs/beak -->
      <path d="M43,36 Q44,42 42,46" fill="none" stroke="#9AE6B4" stroke-width="2" stroke-linecap="round"/>
      <path d="M52,36 Q52,42 54,46" fill="none" stroke="#9AE6B4" stroke-width="2" stroke-linecap="round"/>
      <!-- Claws -->
      <path d="M32,66 Q26,70 22,76" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M28,68 Q22,72 18,78" fill="none" stroke="#1C4532" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M68,66 Q74,70 78,76" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M72,68 Q78,72 82,78" fill="none" stroke="#1C4532" stroke-width="1.5" stroke-linecap="round"/>
      <!-- COPY POWER arrows (absorbs wolf power) -->
      <!-- Wolf paw icon (right corner) -->
      <circle cx="78" cy="28" r="7" fill="#742A2A" opacity="0.5"/>
      <circle cx="74" cy="22" r="3.5" fill="#742A2A" opacity="0.5"/>
      <circle cx="79" cy="21" r="3.5" fill="#742A2A" opacity="0.5"/>
      <circle cx="84" cy="24" r="3.5" fill="#742A2A" opacity="0.5"/>
      <!-- Copy arrow from wolf to chupacabra -->
      <path d="M74,30 Q66,34 60,36" fill="none" stroke="#9AE6B4" stroke-width="1.2" stroke-dasharray="2,2"/>
      <polygon points="60,36 64,30 64,42" fill="#9AE6B4"/>
    </svg>`,

    /* NT·11 — SANG MOMOK / GENDERUWO (Bogeyman)
       Konsep: Makhluk tersembunyi dalam kegelapan + menang hanya jika dieksekusi oleh akibat pertukaran peran */
    "NT·11": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gnt11_dark" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#1C4532" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#1C4532" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Dark aura -->
      <circle cx="50" cy="50" r="40" fill="url(#gnt11_dark)"/>
      <!-- SHADOW CREATURE (barely visible, lurking) -->
      <!-- Shadow blob body -->
      <ellipse cx="50" cy="56" rx="28" ry="22" fill="#1C4532" opacity="0.7"/>
      <!-- Tentacle-like limbs -->
      <path d="M22,56 Q14,62 10,72 Q14,74 18,68 Q20,64 24,62" fill="#1C4532" opacity="0.6"/>
      <path d="M78,56 Q86,62 90,72 Q86,74 82,68 Q80,64 76,62" fill="#1C4532" opacity="0.6"/>
      <path d="M30,70 Q24,78 20,86" fill="none" stroke="#1C4532" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <path d="M70,70 Q76,78 80,86" fill="none" stroke="#1C4532" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <!-- GLOWING EYES (the only thing clearly visible) -->
      <ellipse cx="40" cy="52" rx="7" ry="5" fill="#9AE6B4" opacity="0.9"/>
      <ellipse cx="60" cy="52" rx="7" ry="5" fill="#9AE6B4" opacity="0.9"/>
      <circle cx="40" cy="52" r="4" fill="#276749"/>
      <circle cx="60" cy="52" r="4" fill="#276749"/>
      <circle cx="41.5" cy="51" r="1.8" fill="#9AE6B4"/>
      <circle cx="61.5" cy="51" r="1.8" fill="#9AE6B4"/>
      <!-- Jagged grin (barely visible) -->
      <path d="M34,62 Q42,68 50,66 Q58,68 66,62" fill="none" stroke="#9AE6B4" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <line x1="38" y1="62" x2="36" y2="68" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <line x1="44" y1="65" x2="44" y2="71" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <line x1="50" y1="66" x2="50" y2="72" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <line x1="56" y1="65" x2="56" y2="71" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <line x1="62" y1="62" x2="64" y2="68" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <!-- WIN CONDITION text (complex, confusing) — wins being wrongly killed at night -->
      <rect x="8" y="12" width="84" height="22" rx="3" fill="#1C4532" opacity="0.7"/>
      <text x="50" y="22" text-anchor="middle" font-size="5" fill="#9AE6B4" font-family="sans-serif" font-weight="bold">MENANG HANYA JIKA</text>
      <text x="50" y="30" text-anchor="middle" font-size="4.5" fill="#9AE6B4" font-family="sans-serif">Dieksekusi malam hari (akibat tukar peran)</text>
    </svg>`,

    /* NT·12 — SANG PREMAN (Hoodlum)
       Konsep: Kontrak rahasia — 2 target harus mati sebelum game selesai */
    "NT·12": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- CONTRACT PAPER (the hit list) -->
      <g transform="rotate(-5 50 50)">
        <rect x="22" y="14" width="56" height="72" rx="3" fill="#fff" stroke="#276749" stroke-width="1.2"/>
        <!-- Paper header -->
        <rect x="22" y="14" width="56" height="12" rx="3" fill="#1C4532"/>
        <rect x="22" y="22" width="56" height="4" fill="#1C4532"/>
        <text x="50" y="22" text-anchor="middle" font-size="5.5" fill="#9AE6B4" font-family="sans-serif" font-weight="bold">KONTRAK</text>
        <!-- Target 1 row -->
        <line x1="28" y1="38" x2="72" y2="38" stroke="#276749" stroke-width="0.6"/>
        <text x="30" y="36" font-size="5" fill="#276749" font-family="sans-serif">Target 1:</text>
        <!-- Redacted name (black bar) -->
        <rect x="54" y="30" width="14" height="6" rx="1" fill="#1C4532"/>
        <!-- Crossed-out / killed -->
        <line x1="28" y1="33" x2="68" y2="33" stroke="#C53030" stroke-width="1" opacity="0.8"/>
        <!-- Target 2 row -->
        <line x1="28" y1="52" x2="72" y2="52" stroke="#276749" stroke-width="0.6"/>
        <text x="30" y="50" font-size="5" fill="#276749" font-family="sans-serif">Target 2:</text>
        <!-- Redacted name (black bar) -->
        <rect x="54" y="44" width="14" height="6" rx="1" fill="#1C4532"/>
        <!-- NOT yet done (no cross) -->
        <!-- Checkbox row target 1 -->
        <rect x="28" y="56" width="6" height="6" rx="1" fill="none" stroke="#276749" stroke-width="0.8"/>
        <text x="35" y="61" font-size="4.5" fill="#C53030" font-family="sans-serif">MATI ✓</text>
        <!-- Checkbox row target 2 -->
        <rect x="28" y="64" width="6" height="6" rx="1" fill="none" stroke="#276749" stroke-width="0.8"/>
        <text x="35" y="69" font-size="4.5" fill="#276749" font-family="sans-serif">MASIH HIDUP</text>
        <!-- Signature line -->
        <line x1="28" y1="76" x2="56" y2="76" stroke="#276749" stroke-width="0.7"/>
        <text x="30" y="74" font-size="3.5" fill="#276749" font-family="sans-serif">Tanda Tangan Preman</text>
        <!-- Wax seal -->
        <circle cx="68" cy="73" r="7" fill="#276749" opacity="0.8"/>
        <text x="68" y="76" text-anchor="middle" font-size="7" fill="#9AE6B4" font-family="sans-serif">H</text>
      </g>
      <!-- Hoodlum figure (shadowy, standing guard) -->
      <circle cx="84" cy="28" r="7" fill="#1C4532" stroke="#276749" stroke-width="0.7"/>
      <ellipse cx="84" cy="42" rx="7" ry="10" fill="#1C4532" stroke="#276749" stroke-width="0.7"/>
      <!-- Arms crossed (intimidating) -->
      <path d="M77,40 Q82,38 84,40 Q86,38 91,40" fill="none" stroke="#1C4532" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,

    /* NT·13 — ANAK RIMBA LIAR (Wild Child)
       Konsep: Anak kecil + panutan + transformasi jika panutan mati */
    "NT·13": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- WILD CHILD (small, feral, center) -->
      <!-- Leaf/vine crown (wild nature) -->
      <path d="M38,28 Q36,20 40,18 Q44,20 42,28" fill="#276749" opacity="0.7"/>
      <path d="M42,26 Q40,18 46,16 Q50,18 48,26" fill="#9AE6B4" opacity="0.7"/>
      <path d="M50,26 Q50,18 56,16 Q60,18 58,26" fill="#276749" opacity="0.7"/>
      <path d="M58,26 Q60,20 64,18 Q68,20 64,28" fill="#9AE6B4" opacity="0.6"/>
      <!-- Head -->
      <circle cx="50" cy="36" r="13" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Wild child big eyes -->
      <circle cx="44" cy="34" r="4" fill="#276749"/>
      <circle cx="56" cy="34" r="4" fill="#276749"/>
      <circle cx="45" cy="33" r="1.5" fill="#fff"/>
      <circle cx="57" cy="33" r="1.5" fill="#fff"/>
      <!-- Feral grin -->
      <path d="M43,40 Q50,45 57,40" fill="none" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Messy hair (wild) -->
      <path d="M38,30 Q34,22 36,16" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M44,28 Q42,18 46,12" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M56,28 Q58,18 54,12" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M62,30 Q66,22 64,16" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <!-- Small body -->
      <ellipse cx="50" cy="58" rx="10" ry="14" fill="#F0FFF4" stroke="#276749" stroke-width="0.8"/>
      <!-- ROLE MODEL figure (left, upright, respected) -->
      <circle cx="22" cy="44" r="9" fill="#9AE6B4" stroke="#276749" stroke-width="1"/>
      <ellipse cx="22" cy="60" rx="9" ry="12" fill="#9AE6B4" stroke="#276749" stroke-width="0.8"/>
      <!-- Role model eyes (calm) -->
      <line x1="18" y1="42" x2="21" y2="42" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="23" y1="42" x2="26" y2="42" stroke="#276749" stroke-width="1.2" stroke-linecap="round"/>
      <!-- Bond line (panutan → anak liar) -->
      <path d="M30,52 Q36,50 40,50" fill="none" stroke="#9AE6B4" stroke-width="1.5" stroke-dasharray="3,2"/>
      <!-- Heart bond symbol -->
      <path d="M34,48 Q34,44 37,46 Q40,44 40,48 Q40,52 37,54 Q34,52 34,48 Z" fill="#9AE6B4" opacity="0.7"/>
      <!-- WOLF FORM potential (shadow on right if model dies) -->
      <!-- Shadow wolf ear -->
      <path d="M72,54 Q76,44 80,42" fill="none" stroke="#742A2A" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
      <path d="M68,52 Q66,42 70,40" fill="none" stroke="#742A2A" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
      <!-- Warning label -->
      <rect x="60" y="74" width="34" height="14" rx="2" fill="#742A2A" opacity="0.6"/>
      <text x="77" y="84" text-anchor="middle" font-size="4.5" fill="#FEB2B2" font-family="sans-serif" font-weight="bold">JIKA PANUTAN MATI</text>
    </svg>`,

    /* NT·14 — BIGFOOT / SASQUATCH
       Konsep: Makhluk raksasa setengah manusia-setengah binatang + menunggu panjang sebelum punya faksi */
    "NT·14": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- BIGFOOT / SASQUATCH SILHOUETTE (large, ape-like, hairy) -->
      <!-- Massive hairy body -->
      <ellipse cx="50" cy="62" rx="24" ry="28" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Fur texture (jagged edges) -->
      <path d="M26,52 Q22,46 24,40 Q28,34 30,40" fill="#1C4532" opacity="0.8"/>
      <path d="M74,52 Q78,46 76,40 Q72,34 70,40" fill="#1C4532" opacity="0.8"/>
      <path d="M30,78 Q24,84 22,92 Q28,90 32,84" fill="#1C4532" opacity="0.7"/>
      <path d="M70,78 Q76,84 78,92 Q72,90 68,84" fill="#1C4532" opacity="0.7"/>
      <!-- HUGE HEAD (ape-like) -->
      <ellipse cx="50" cy="36" rx="18" ry="16" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Head fur bump -->
      <path d="M34,32 Q32,22 36,18" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <path d="M50,24 Q50,16 50,10" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <path d="M66,32 Q68,22 64,18" fill="none" stroke="#276749" stroke-width="2" stroke-linecap="round"/>
      <!-- Eyes (small, wary) -->
      <circle cx="42" cy="34" r="4" fill="#9AE6B4"/>
      <circle cx="58" cy="34" r="4" fill="#9AE6B4"/>
      <circle cx="42" cy="34" r="2.5" fill="#1C4532"/>
      <circle cx="58" cy="34" r="2.5" fill="#1C4532"/>
      <circle cx="43" cy="33" r="1" fill="#fff" opacity="0.7"/>
      <circle cx="59" cy="33" r="1" fill="#fff" opacity="0.7"/>
      <!-- Wide flat nose -->
      <ellipse cx="50" cy="40" rx="6" ry="4" fill="#276749"/>
      <!-- Flat mouth -->
      <path d="M43,46 Q50,50 57,46" fill="none" stroke="#276749" stroke-width="1.5" stroke-linecap="round"/>
      <!-- MASSIVE FEET (bigfoot signature) -->
      <ellipse cx="36" cy="90" rx="12" ry="6" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <ellipse cx="64" cy="90" rx="12" ry="6" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Toes -->
      <circle cx="28" cy="88" r="3" fill="#276749"/>
      <circle cx="32" cy="87" r="3" fill="#276749"/>
      <circle cx="36" cy="86" r="3" fill="#276749"/>
      <circle cx="40" cy="87" r="3" fill="#276749"/>
      <circle cx="44" cy="88" r="3" fill="#276749"/>
      <circle cx="56" cy="88" r="3" fill="#276749"/>
      <circle cx="60" cy="87" r="3" fill="#276749"/>
      <circle cx="64" cy="86" r="3" fill="#276749"/>
      <circle cx="68" cy="87" r="3" fill="#276749"/>
      <circle cx="72" cy="88" r="3" fill="#276749"/>
      <!-- PATIENCE timer (waits to gain faction) -->
      <rect x="7" y="56" width="18" height="22" rx="2" fill="#276749" opacity="0.7"/>
      <text x="16" y="68" text-anchor="middle" font-size="8" fill="#9AE6B4" font-family="sans-serif" font-weight="bold">⏳</text>
    </svg>`,

    /* NT·15 — PERI PENIPU (Leprechaun)
       Konsep: Peri jahil + memindahkan kematian serigala ke orang lain */
    "NT·15": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- LEPRECHAUN HAT (iconic) -->
      <!-- Hat cylinder -->
      <rect x="32" y="16" width="36" height="26" rx="2" fill="#1C4532" stroke="#276749" stroke-width="1"/>
      <!-- Hat brim -->
      <rect x="22" y="40" width="56" height="6" rx="2" fill="#276749" stroke="#1C4532" stroke-width="0.8"/>
      <!-- Hat band (lucky gold) -->
      <rect x="32" y="36" width="36" height="6" fill="#9AE6B4"/>
      <!-- Four-leaf clover on band -->
      <circle cx="50" cy="39" r="3" fill="#276749"/>
      <circle cx="46" cy="37" r="2.5" fill="#276749"/>
      <circle cx="54" cy="37" r="2.5" fill="#276749"/>
      <circle cx="46" cy="41" r="2.5" fill="#276749"/>
      <circle cx="54" cy="41" r="2.5" fill="#276749"/>
      <circle cx="50" cy="39" r="1.5" fill="#9AE6B4"/>
      <!-- LEPRECHAUN FACE (mischievous) -->
      <circle cx="50" cy="58" r="14" fill="#F0FFF4" stroke="#276749" stroke-width="1"/>
      <!-- Bushy eyebrows -->
      <path d="M40,54 Q43,52 46,54" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <path d="M54,54 Q57,52 60,54" fill="none" stroke="#1C4532" stroke-width="2" stroke-linecap="round"/>
      <!-- Mischievous eyes (winking) -->
      <circle cx="43" cy="57" r="3.5" fill="#276749"/>
      <circle cx="44" cy="56" r="1.2" fill="#fff"/>
      <!-- Winking right eye -->
      <path d="M53,57 Q57,55 61,57" fill="none" stroke="#1C4532" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Big nose (bulbous) -->
      <circle cx="50" cy="62" r="3" fill="#9AE6B4" stroke="#276749" stroke-width="0.5"/>
      <!-- Cheaky grin -->
      <path d="M43,68 Q50,74 57,68" fill="none" stroke="#276749" stroke-width="1.5" stroke-linecap="round"/>
      <!-- DEATH-REDIRECT ARROWS (the power) -->
      <!-- Wolf attack skull (original target) -->
      <circle cx="14" cy="80" r="8" fill="#742A2A" opacity="0.5"/>
      <line x1="10" y1="76" x2="18" y2="84" stroke="#fff" stroke-width="1"/>
      <line x1="18" y1="76" x2="10" y2="84" stroke="#fff" stroke-width="1"/>
      <!-- Curved redirect arrow -->
      <path d="M22,80 Q36,72 48,76" fill="none" stroke="#276749" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="48,76 44,70 46,80" fill="#276749"/>
      <!-- New target (right) -->
      <circle cx="80" cy="80" r="8" fill="#276749" opacity="0.6"/>
      <text x="80" y="84" text-anchor="middle" font-size="8" fill="#9AE6B4" font-family="sans-serif">!</text>
      <!-- Lucky redirect line -->
      <path d="M52,76 Q66,74 72,76" fill="none" stroke="#9AE6B4" stroke-width="1.2" stroke-dasharray="2,2"/>
      <polygon points="72,76 68,70 70,82" fill="#9AE6B4"/>
    </svg>`,

    /* NT·16 — HANTU KACA (Bloody Mary)
       Konsep: Cermin retak + hantu merah + siapapun yang menyebut namanya mati */
    "NT·16": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- ORNATE MIRROR FRAME -->
      <rect x="18" y="8" width="64" height="78" rx="6" fill="#1C4532" stroke="#276749" stroke-width="2"/>
      <!-- Frame decorations -->
      <rect x="22" y="12" width="56" height="70" rx="4" fill="none" stroke="#9AE6B4" stroke-width="0.8" stroke-dasharray="3,3"/>
      <!-- Corner ornaments -->
      <circle cx="22" cy="12" r="3" fill="#9AE6B4"/>
      <circle cx="78" cy="12" r="3" fill="#9AE6B4"/>
      <circle cx="22" cy="82" r="3" fill="#9AE6B4"/>
      <circle cx="78" cy="82" r="3" fill="#9AE6B4"/>
      <!-- MIRROR GLASS (dark, eerie) -->
      <rect x="24" y="14" width="52" height="66" rx="3" fill="#1A2B1A" opacity="0.9"/>
      <!-- BLOODY MARY GHOST (visible in mirror) -->
      <!-- Ghost form -->
      <path d="M30,68 Q28,52 50,38 Q72,52 70,68 Q68,76 64,78 Q60,72 56,78 Q52,84 50,78 Q48,72 44,78 Q40,84 36,78 Q32,76 30,68 Z"
            fill="#C53030" stroke="#742A2A" stroke-width="0.8" opacity="0.7"/>
      <!-- Ghost face (hollow) -->
      <ellipse cx="42" cy="50" rx="6" ry="7" fill="#1A0000" opacity="0.6"/>
      <ellipse cx="58" cy="50" rx="6" ry="7" fill="#1A0000" opacity="0.6"/>
      <ellipse cx="50" cy="60" rx="5" ry="6" fill="#1A0000" opacity="0.5"/>
      <!-- Blood drips from mirror -->
      <path d="M32,80 Q32,86 30,90" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      <circle cx="30" cy="91" r="2" fill="#C53030" opacity="0.7"/>
      <path d="M50,80 Q50,86 50,90" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <circle cx="50" cy="91" r="2" fill="#C53030" opacity="0.6"/>
      <path d="M68,80 Q68,86 70,90" fill="none" stroke="#C53030" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      <circle cx="70" cy="91" r="2" fill="#C53030" opacity="0.7"/>
      <!-- MIRROR CRACK -->
      <path d="M56,14 Q60,28 58,40 Q62,48 68,56" fill="none" stroke="#9AE6B4" stroke-width="0.8" opacity="0.5"/>
      <path d="M58,40 Q54,46 52,54" fill="none" stroke="#9AE6B4" stroke-width="0.6" opacity="0.4"/>
      <!-- "NAME" warning at top -->
      <rect x="10" y="90" width="80" height="10" rx="2" fill="#742A2A" opacity="0.7"/>
      <text x="50" y="97" text-anchor="middle" font-size="5" fill="#FEB2B2" font-family="sans-serif" font-weight="bold">JANGAN SEBUT NAMAKU!</text>
    </svg>`,

    /* NT·17 — MAKHLUK RAWA (The Thing)
       Konsep: Tangan misterius mencolek dari kegelapan + menciptakan paranoia */
    "NT·17": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gnt17_dark" cx="20%" cy="70%" r="70%">
          <stop offset="0%" stop-color="#1C4532" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#1C4532" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Swamp darkness -->
      <circle cx="20" cy="70" r="40" fill="url(#gnt17_dark)"/>
      <!-- SWAMP / POND SURFACE -->
      <ellipse cx="50" cy="78" rx="44" ry="14" fill="#1C4532" opacity="0.4"/>
      <ellipse cx="50" cy="78" rx="36" ry="10" fill="#276749" opacity="0.2"/>
      <!-- Ripples on swamp surface -->
      <ellipse cx="30" cy="76" rx="10" ry="3" fill="none" stroke="#9AE6B4" stroke-width="0.5" opacity="0.5"/>
      <ellipse cx="70" cy="80" rx="8" ry="2.5" fill="none" stroke="#9AE6B4" stroke-width="0.4" opacity="0.4"/>
      <!-- THE THING'S BODY (barely visible, submerged) -->
      <ellipse cx="30" cy="82" rx="18" ry="8" fill="#1C4532" opacity="0.6"/>
      <!-- Glowing eyes in swamp -->
      <circle cx="22" cy="76" r="4" fill="#9AE6B4" opacity="0.8"/>
      <circle cx="34" cy="74" r="4" fill="#9AE6B4" opacity="0.8"/>
      <circle cx="22" cy="76" r="2.5" fill="#276749"/>
      <circle cx="34" cy="74" r="2.5" fill="#276749"/>
      <!-- THE REACHING HAND (the signature move!) -->
      <!-- Arm emerging from swamp -->
      <path d="M36,78 Q40,70 44,62 Q48,54 52,48" fill="none" stroke="#276749" stroke-width="5" stroke-linecap="round"/>
      <!-- Hand with fingers (reaching to poke/tap) -->
      <!-- Palm -->
      <path d="M48,50 Q46,44 52,42 Q58,44 56,50 Z" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Fingers reaching (about to tap someone's shoulder) -->
      <line x1="50" y1="42" x2="52" y2="30" stroke="#1C4532" stroke-width="3" stroke-linecap="round"/>
      <line x1="53" y1="41" x2="56" y2="29" stroke="#1C4532" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="43" x2="60" y2="32" stroke="#1C4532" stroke-width="3" stroke-linecap="round"/>
      <line x1="58" y1="46" x2="64" y2="36" stroke="#1C4532" stroke-width="2.5" stroke-linecap="round"/>
      <!-- PRIMARY FINGER POINTING at target -->
      <line x1="52" y1="30" x2="56" y2="18" stroke="#276749" stroke-width="3.5" stroke-linecap="round"/>
      <!-- PARANOIA effect (person being poked) — right side -->
      <!-- Shoulder/person outline -->
      <circle cx="76" cy="36" r="10" fill="#F0FFF4" stroke="#276749" stroke-width="0.8" opacity="0.7"/>
      <ellipse cx="76" cy="54" rx="10" ry="14" fill="#F0FFF4" stroke="#276749" stroke-width="0.8" opacity="0.7"/>
      <!-- Paranoia sweat drops -->
      <circle cx="66" cy="32" r="1.5" fill="#276749" opacity="0.5"/>
      <circle cx="63" cy="38" r="1.2" fill="#276749" opacity="0.4"/>
      <circle cx="62" cy="44" r="1" fill="#276749" opacity="0.3"/>
      <!-- Question marks around person (paranoid) -->
      <text x="88" y="34" font-size="10" fill="#276749" font-family="sans-serif" font-weight="bold" opacity="0.4">?</text>
      <text x="82" y="24" font-size="8" fill="#9AE6B4" font-family="sans-serif" opacity="0.4">?</text>
    </svg>`,

    /* NT·18 — PERAMAL KUNO (Nostradamus)
       Konsep: Gulungan ramalan tersegel + jam pasir waktu + prediksi siapa yang menang */
    "NT·18": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gnt18_scroll" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F0FFF4"/>
          <stop offset="100%" stop-color="#9AE6B4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#F0FFF4" rx="4"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9AE6B4" stroke-width="0.4" stroke-dasharray="2,5"/>
      <!-- Stars (prophetic sky) -->
      <circle cx="12" cy="14" r="1.5" fill="#276749" opacity="0.6"/>
      <circle cx="22" cy="8" r="1.2" fill="#9AE6B4" opacity="0.5"/>
      <circle cx="80" cy="10" r="1.5" fill="#276749" opacity="0.5"/>
      <circle cx="90" cy="18" r="1" fill="#9AE6B4" opacity="0.4"/>
      <circle cx="6" cy="44" r="1" fill="#276749" opacity="0.4"/>
      <circle cx="94" cy="40" r="1.2" fill="#9AE6B4" opacity="0.4"/>
      <!-- PROPHETIC SCROLL (center, sealed shut) -->
      <!-- Scroll top rod -->
      <rect x="14" y="22" width="72" height="7" rx="3.5" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Scroll bottom rod -->
      <rect x="14" y="76" width="72" height="7" rx="3.5" fill="#1C4532" stroke="#276749" stroke-width="0.8"/>
      <!-- Scroll paper body -->
      <rect x="18" y="29" width="64" height="47" fill="url(#gnt18_scroll)" stroke="#276749" stroke-width="0.8"/>
      <!-- SEALED WAX (confidential prophecy) -->
      <circle cx="50" cy="52" r="16" fill="#276749" stroke="#1C4532" stroke-width="1.5"/>
      <circle cx="50" cy="52" r="12" fill="#1C4532"/>
      <!-- Nostradamus symbol / N monogram -->
      <text x="50" y="57" text-anchor="middle" font-size="14" fill="#9AE6B4" font-family="sans-serif" font-weight="bold">N</text>
      <!-- Stars around seal -->
      <circle cx="38" cy="44" r="2" fill="#9AE6B4" opacity="0.7"/>
      <circle cx="62" cy="44" r="2" fill="#9AE6B4" opacity="0.7"/>
      <circle cx="38" cy="60" r="2" fill="#9AE6B4" opacity="0.7"/>
      <circle cx="62" cy="60" r="2" fill="#9AE6B4" opacity="0.7"/>
      <!-- Paper lines peeking above/below seal -->
      <line x1="22" y1="36" x2="44" y2="36" stroke="#276749" stroke-width="0.6" opacity="0.4"/>
      <line x1="22" y1="40" x2="40" y2="40" stroke="#276749" stroke-width="0.5" opacity="0.3"/>
      <line x1="56" y1="36" x2="74" y2="36" stroke="#276749" stroke-width="0.6" opacity="0.4"/>
      <line x1="60" y1="40" x2="74" y2="40" stroke="#276749" stroke-width="0.5" opacity="0.3"/>
      <line x1="22" y1="68" x2="44" y2="68" stroke="#276749" stroke-width="0.6" opacity="0.4"/>
      <line x1="56" y1="68" x2="74" y2="68" stroke="#276749" stroke-width="0.6" opacity="0.4"/>
      <!-- "RAMALAN" label at top -->
      <text x="50" y="20" text-anchor="middle" font-size="6" fill="#276749" font-family="sans-serif" font-weight="bold" letter-spacing="2">R A M A L A N</text>
      <!-- WIN CONDITION (bottom strip) -->
      <rect x="14" y="84" width="72" height="12" rx="2" fill="#276749" opacity="0.8"/>
      <text x="50" y="93" text-anchor="middle" font-size="5" fill="#9AE6B4" font-family="sans-serif" font-weight="bold">TEBAK SIAPA YANG MENANG!</text>
    </svg>`,

};
