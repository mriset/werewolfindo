const tacdosDeckData = [
    {
        "id": "moderator",
        "cssVars": "--t-dark: #0A2342; --t-light: #F5F7FA; --t-accent: #C9A84C; --t-bg: #EDF0F5; --t-title: #C9A84C;",
        "code": "DOC: MOD-00 // AUTHORITY",
        "titleEn": "MODERATOR",
        "titleId": "SANG PENGADIL",
        "quote": "\"Aku bukan pemain. Aku adalah hukum yang menggerakkan papan ini.\"",
        "ability": "<strong>WEWENANG:</strong> Memimpin jalannya permainan. Mengelola fase malam & siang. Kartu ini tidak dimainkan — ini adalah otoritas tertinggi di meja.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "hunter",
        "cssVars": "--t-dark: #1E272E; --t-light: #F2F4F4; --t-accent: #27AE60; --t-bg: #E8F8F5; --t-title: #F1C40F;",
        "code": "DOC: ALL-05 // ALLIANCE",
        "titleEn": "HUNTER",
        "titleId": "SANG PEMBURU",
        "quote": "\"Jika nafasku harus berhenti, kupastikan ada monster yang menemaniku menyeberang ke neraka.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Saat kamu dibunuh (siang/malam), lepaskan 1 tembakan fatal untuk membunuh 1 pemain manapun bersamamu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "seer",
        "cssVars": "--t-dark: #3B1C54; --t-light: #F9F5FB; --t-accent: #8E44AD; --t-bg: #F4ECF7; --t-title: #F39C12;",
        "code": "DOC: ALL-02 // ALLIANCE",
        "titleEn": "SEER",
        "titleId": "SANG PERAMAL",
        "quote": "\"Tabir malam terlampau tipis untuk menyembunyikan wajah aslimu dari pandangan mataku.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Setiap malam, intip identitas 1 pemain. Hanya kamu yang tahu siapa monster yang bersembunyi di balik senyum.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "werewolf",
        "cssVars": "--t-dark: #1A0505; --t-light: #FDF5F5; --t-accent: #C0392B; --t-bg: #FDEDED; --t-title: #FF5252;",
        "code": "DOC: SHD-01 // SHADOW",
        "titleEn": "WEREWOLF",
        "titleId": "SANG SERIGALA",
        "quote": "\"Purnama adalah saksi, dan anyir darah ketakutan kalian adalah persembahannya.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Bangun di malam hari. Kawanan berdiskusi rahasia untuk merobek leher 1 mangsa tanpa sisa.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "jester",
        "cssVars": "--t-dark: #004D40; --t-light: #F4FBF9; --t-accent: #D81B60; --t-bg: #FCE4EC; --t-title: #1DE9B6;",
        "code": "DOC: CHS-01 // CHAOS",
        "titleEn": "JESTER",
        "titleId": "SANG BADUT",
        "quote": "\"Tali gantungan itu... oh sungguh ayunan yang paling indah untuk merayakan kemenanganku!\"",
        "ability": "<strong>KEMAMPUAN:</strong> Faksi Solo. Kamu MENANG MUTLAK seketika jika berhasil memanipulasi warga agar memvonis gantung dirimu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "guardian",
        "cssVars": "--t-dark: #0D47A1; --t-light: #F4F8FB; --t-accent: #1976D2; --t-bg: #E3F2FD; --t-title: #90CAF9;",
        "code": "DOC: ALL-06 // ALLIANCE",
        "titleEn": "GUARDIAN",
        "titleId": "SANG PELINDUNG",
        "quote": "\"Berlindunglah di balik punggungku, karena maut harus menembus bajaku terlebih dahulu.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Setiap malam, pilih 1 pemain. Serangan fatal terhadap pemain tersebut akan sepenuhnya digagalkan oleh perisaimu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "alpha_wolf",
        "cssVars": "--t-dark: #1C0000; --t-light: #FBF2F2; --t-accent: #8B0000; --t-bg: #F9E8E8; --t-title: #FF2D2D;",
        "code": "DOC: SHD-00 // APEX",
        "titleEn": "ALPHA WOLF",
        "titleId": "SANG ALFA",
        "quote": "\"Satu perintahku menggerakkan kawanan. Satu lolonganku membekukan darah mangsamu.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Setiap babak, Alpha Wolf berhak memveto keputusan kawanan & memilih 1 target tambahan untuk dieksekusi diam-diam tanpa sepengetahuan yang lain.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "cupid",
        "cssVars": "--t-dark: #6B0A3D; --t-light: #FFF5F9; --t-accent: #E91E8C; --t-bg: #FFE8F4; --t-title: #FF69B4;",
        "code": "DOC: CHS-02 // CHAOS",
        "titleEn": "CUPID",
        "titleId": "SANG ASMARA",
        "quote": "\"Kuciptakan ikatan yang tak bisa diputus — bahkan oleh maut sekalipun.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Malam pertama, tunjuk 2 pemain sebagai sepasang Kekasih. Jika salah satu mati, yang lain ikut mati. Jika keduanya bukan sejenis, mereka bisa memenangkan permainan bersama.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "witch",
        "cssVars": "--t-dark: #1A0A2E; --t-light: #F7F3FF; --t-accent: #4CAF50; --t-bg: #EDFBEE; --t-title: #CE93D8;",
        "code": "DOC: ALL-07 // ALLIANCE",
        "titleEn": "WITCH",
        "titleId": "SANG PENYIHIR",
        "quote": "\"Ada racun di satu tanganku, dan mukjizat di tangan lainnya. Tergantung moodku malam ini.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Punya 2 ramuan sekali pakai: <strong>Ramuan Nyawa</strong> (selamatkan korban malam ini) & <strong>Ramuan Racun</strong> (bunuh 1 pemain pilihan malam ini).",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "wizard",
        "cssVars": "--t-dark: #0D0D2E; --t-light: #F3F4FF; --t-accent: #7C4DFF; --t-bg: #EDE7F6; --t-title: #B39DDB;",
        "code": "DOC: ALL-08 // ALLIANCE",
        "titleEn": "WIZARD",
        "titleId": "SANG PENYIHIR AGUNG",
        "quote": "\"Ilmu sihirku tak terlihat, namun jejaknya terasa di setiap sudut malam yang fana ini.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Sekali per permainan, blokir kemampuan 1 pemain selama satu malam penuh — termasuk serigala. Mantra ini tidak dapat dideteksi.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "veteran",
        "cssVars": "--t-dark: #2C2A1E; --t-light: #F9F8F2; --t-accent: #8D6E3A; --t-bg: #F5F0E8; --t-title: #D4A84B;",
        "code": "DOC: ALL-09 // ALLIANCE",
        "titleEn": "VETERAN",
        "titleId": "SANG VETERAN",
        "quote": "\"Aku sudah melihat neraka sejati. Ini hanya malam lain bagi raga yang sudah lupa rasa takut.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Sekali per permainan, nyatakan siaga. Malam itu, siapapun yang menyerangmu akan langsung tewas — kawan maupun lawan.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "bodyguard",
        "cssVars": "--t-dark: #1C2833; --t-light: #F4F6F7; --t-accent: #566573; --t-bg: #EAECEE; --t-title: #AEB6BF;",
        "code": "DOC: ALL-10 // ALLIANCE",
        "titleEn": "BODYGUARD",
        "titleId": "SANG PENJAGA",
        "quote": "\"Pekerjaanku adalah mati lebih dulu. Dan aku sangat pandang dalam pekerjaanku.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Pilih 1 pemain per malam untuk dijaga. Jika diserang, kamu yang mati menggantikannya — dan si penyerang ikut terluka fatal.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "priest",
        "cssVars": "--t-dark: #3E1F00; --t-light: #FFFDF7; --t-accent: #C8860A; --t-bg: #FFF8E7; --t-title: #F9D342;",
        "code": "DOC: ALL-11 // ALLIANCE",
        "titleEn": "PRIEST",
        "titleId": "SANG PENDETA",
        "quote": "\"Berkat Tuhan menjadi perisai bagi jiwa yang layak. Bagi yang tidak… doa pun sia-sia.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Sekali per permainan, berkati 1 pemain. Pemain tersebut tidak bisa dieksekusi oleh vote warga pada siang hari berikutnya.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "mayor",
        "cssVars": "--t-dark: #0C2340; --t-light: #F5F8FC; --t-accent: #1565C0; --t-bg: #E8F0FB; --t-title: #FFD700;",
        "code": "DOC: ALL-12 // ALLIANCE",
        "titleEn": "MAYOR",
        "titleId": "SANG WALIKOTA",
        "quote": "\"Suaraku adalah suara rakyat — dan rakyat berkehendak agar kalian HANCUR.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Suara Mayor bernilai 2 saat voting eksekusi siang hari. Identitas Mayor tetap tersembunyi hingga ia memilih untuk mengungkapnya.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "sheriff",
        "cssVars": "--t-dark: #2E1A00; --t-light: #FFFBF2; --t-accent: #B7791A; --t-bg: #FDF5E0; --t-title: #F5C842;",
        "code": "DOC: ALL-13 // ALLIANCE",
        "titleEn": "SHERIFF",
        "titleId": "SANG SHERIFF",
        "quote": "\"Di wilayah ini hukum punya wajah — dan itulah wajahku. Ada masalah?\"",
        "ability": "<strong>KEMAMPUAN:</strong> Setiap malam, periksa 1 pemain. Ketahui apakah mereka manusia atau serigala. Bisa menunjuk Deputy untuk melanjutkan tugasnya.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "villager_1",
        "cssVars": "--t-dark: #3B2F1E; --t-light: #FEFCF8; --t-accent: #A0714F; --t-bg: #F9F2E8; --t-title: #D4915A;",
        "code": "DOC: ALL-14A // ALLIANCE",
        "titleEn": "VILLAGER",
        "titleId": "SANG WARGA",
        "quote": "\"Aku hanya warga biasa yang ingin tidur nyenyak tanpa takut dimakan malam ini.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Tak punya kemampuan khusus. Senjatamu adalah <strong>logika, observasi, dan suara</strong>. Vote dengan bijak — keselamatan desa ada di tanganmu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "villager_2",
        "cssVars": "--t-dark: #2A3B1E; --t-light: #F8FCF5; --t-accent: #5D8A3C; --t-bg: #EEF7E8; --t-title: #88C057;",
        "code": "DOC: ALL-14B // ALLIANCE",
        "titleEn": "VILLAGER",
        "titleId": "SANG WARGA",
        "quote": "\"Bersama kita kuat. Terpecah, kita menjadi makan malam kawanan serigala.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Tak punya kemampuan khusus. Kekuatanmu ada pada <strong>solidaritas dan kepercayaan</strong>. Bersatu dengan sesama warga untuk mengungkap ancaman.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "villager_3",
        "cssVars": "--t-dark: #1E2E3B; --t-light: #F5F8FB; --t-accent: #4A7FA5; --t-bg: #E8F2F9; --t-title: #7EC8E3;",
        "code": "DOC: ALL-14C // ALLIANCE",
        "titleEn": "VILLAGER",
        "titleId": "SANG WARGA",
        "quote": "\"Kegelapan malam tak bisa menyembunyikan kebenaran selamanya. Aku percaya cahaya.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Tak punya kemampuan khusus. Andalkan <strong>intuisi dan berdiskusi</strong> bersama warga lain. Setiap malam yang bertahan adalah kemenangan kecil.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "werewolf_2",
        "cssVars": "--t-dark: #1A0505; --t-light: #FDF5F5; --t-accent: #C0392B; --t-bg: #FDEDED; --t-title: #FF5252;",
        "code": "DOC: SHD-01B // SHADOW",
        "titleEn": "WEREWOLF",
        "titleId": "SANG SERIGALA",
        "quote": "\"Setiap wajah yang tersenyum padamu bisa saja menyembunyikan taringnya di balik situ.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Bangun bersama kawanan. Kenali sesama serigala. Tiap malam, pilih 1 korban manusia untuk dieksekusi secara diam-diam.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "lone_wolf",
        "cssVars": "--t-dark: #1A1A2E; --t-light: #F5F5FA; --t-accent: #4A5568; --t-bg: #ECEEF3; --t-title: #90CDF4;",
        "code": "DOC: INF-01 // INFECTED",
        "titleEn": "LONE WOLF",
        "titleId": "SANG SERIGALA PENYENDIRI",
        "quote": "\"Aku warga biasa... tapi mengapa gelap malam dan lolongan itu terasa begitu memanggil?\"",
        "ability": "<strong>KEMAMPUAN:</strong> Memulai sebagai <strong>warga desa biasa</strong>. Namun, jika menjadi <strong>target gigitan serigala</strong> di malam hari, kamu tidak mati, melainkan <strong>berubah wujud</strong> menjadi serigala bersama mereka.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "doppelganger",
        "cssVars": "--t-dark: #1C1C1C; --t-light: #F7F7F7; --t-accent: #607080; --t-bg: #EBEBEB; --t-title: #B0BEC5;",
        "code": "DOC: CHS-03 // CHAOS",
        "titleEn": "DOPPELGANGER",
        "titleId": "SANG PENIRU",
        "quote": "\"Siapa yang sebenarnya berdiri di sini — aku, atau bayangan dari dirimu?\"",
        "ability": "<strong>KEMAMPUAN:</strong> Malam pertama, pilih 1 pemain. Saat pemain itu mati, Doppelganger <strong>mengambil alih identitas dan kemampuannya sepenuhnya</strong> untuk sisa permainan.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "serial_killer",
        "cssVars": "--t-dark: #0D0D0D; --t-light: #F5F5F5; --t-accent: #B71C1C; --t-bg: #F0E8E8; --t-title: #EF5350;",
        "code": "DOC: CHS-04 // CHAOS",
        "titleEn": "SERIAL KILLER",
        "titleId": "SANG PEMBUNUH BERANTAI",
        "quote": "\"Serigala membunuh karena lapar. Aku membunuh karena aku <em>menikmatinya</em>.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Faksi Solo. Setiap malam, bunuh 1 pemain bebas (bukan kawanan serigala). Menang jika menjadi satu-satunya yang tersisa atau berdua dengan serigala.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "idiot",
        "cssVars": "--t-dark: #1A1A00; --t-light: #FFFEF0; --t-accent: #F9A825; --t-bg: #FFFDE7; --t-title: #FFEE58;",
        "code": "DOC: CHS-05 // CHAOS",
        "titleEn": "IDIOT",
        "titleId": "SANG TOLOL",
        "quote": "\"Heh? Aku yang mau digantung? WEHEHEHE — kalian semua sudah tertipu!\"",
        "ability": "<strong>KEMAMPUAN:</strong> Jika Idiot divoting untuk digantung, <strong>identitasnya terungkap dan ia selamat</strong> — namun kehilangan hak pilih untuk selamanya. Warga pun malu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "prince",
        "cssVars": "--t-dark: #2D0F5E; --t-light: #FAF6FF; --t-accent: #7B1FA2; --t-bg: #F3E5F5; --t-title: #CE93D8;",
        "code": "DOC: ALL-15 // ALLIANCE",
        "titleEn": "PRINCE",
        "titleId": "SANG PANGERAN",
        "quote": "\"Tali gantungan ini untuk rakyat jelata, bukan untuk keturunan mahkota.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Jika Prince dipilih untuk dieksekusi oleh voting warga, identitasnya otomatis terungkap dan ia <strong>tidak bisa digantung</strong>. Hanya bisa tewas di malam hari.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "little_girl",
        "cssVars": "--t-dark: #880E4F; --t-light: #FFF8FC; --t-accent: #E91E8C; --t-bg: #FCE4EC; --t-title: #F48FB1;",
        "code": "DOC: ALL-16 // ALLIANCE",
        "titleEn": "LITTLE GIRL",
        "titleId": "SANG GADIS KECIL",
        "quote": "\"Aku pura-pura tidur... tapi mataku selalu setengah terbuka untuk melihat kalian.\"",
        "ability": "<strong>KEMAMPUAN:</strong> Boleh mengintip saat serigala berdiskusi malam hari. Jika <strong>tertangkap basah</strong> oleh serigala, ia langsung tewas menggantikan korban malam itu.",
        "watermark": "NIGHTMARE ASYLUM"
    },
    {
        "id": "card_back",
        "isBack": true,
        "cssVars": "--t-dark: #111111; --t-light: #FDFBF7; --t-accent: #D4AF37; --t-bg: #FFFDF5; --t-title: #D4AF37;",
        "code": "EDITION: 1.0 // MRSETIAWAN",
        "titleEn": "ASYLUM",
        "titleId": "NIGHTMARE DECK",
        "quote": "\"MEMASUKI DIMENSI GELAP.\"",
        "ability": "TRUST NO ONE.",
        "watermark": "CLASSIFIED"
    }
];
