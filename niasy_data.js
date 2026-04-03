const niasyDeckData = [
    {
        "id": "moderator",
        "style": "--f-color: #3b0059;",
        "titleEn": "MODERATOR",
        "code": "DOC: SUP-00 // SUPREME",
        "titleId": "SANG NARATOR",
        "quote": "\"Kalian hanyalah bidak rapuh yang menari <span>di atas genangan darah</span>\n                        hingga aku menutup panggung cerita ini.\"",
        "ability": "KEMAMPUAN:<br>Bertindak sebagai arsitek mutlak. Mengontrol seluruh narasi\n                        dan interaksi di setiap fase siang dan malam."
    },
    {
        "id": "seer",
        "style": "--f-color: #4a0080; --bg-color: #faf5ff; --box-bg: #f0e6ff; --text-color: #1a0033; --code-color: #6a0090; --border-color: #3a0060; --sidebar-text: #fff;",
        "titleEn": "SEER",
        "code": "DOC: ALL-02 // ALLIANCE",
        "titleId": "SANG PERAMAL",
        "quote": "\"Mataku menembus tabir sang malam. <span>Aku tahu wajah aslimu</span>, wahai\n                        monster yang bersembunyi di balik senyum polosmu.\"",
        "ability": "KEMAMPUAN:<br>Setiap malam, pilih 1 pemain untuk diintip identitasnya. Hanya\n                        kamu yang tahu siapa serigala sejati."
    },
    {
        "id": "alpha_wolf",
        "style": "--f-color: #6b0000; --bg-color: #fff8f8; --box-bg: #ffe8e8; --text-color: #1a0000; --code-color: #8b0000; --border-color: #4a0000; --sidebar-text: #fff;",
        "titleEn": "ALPHA WOLF",
        "code": "DOC: SHD-02 // SHADOW",
        "titleId": "SANG PEMIMPIN",
        "quote": "\"Aku adalah hukum di sini. <span>Kawananku berburu atas perintahku</span>, dan\n                        nyawa mangsaku adalah hak prerogatifku semata.\"",
        "ability": "KEMAMPUAN:<br>Pemimpin Kawanan. Sekali per game, dapat memilih target\n                        tambahan di malam hari tanpa konsensus kawanan."
    },
    {
        "id": "cupid",
        "style": "--f-color: #b5005b; --bg-color: #fff5f9; --box-bg: #ffe0ef; --text-color: #1a0010; --code-color: #c0006a; --border-color: #8b003a; --sidebar-text: #fff;",
        "titleEn": "CUPID",
        "code": "DOC: CHS-02 // CHAOS",
        "titleId": "SANG ASMARA",
        "quote": "\"Kupertemukan dua jiwa yang terikat takdir — <span>cinta atau kematian\n                            bersama</span> adalah satu-satunya pilihan yang kusisakan untuk mereka.\"",
        "ability": "KEMAMPUAN:<br>Di malam pertama, pilih 2 pemain sebagai pasangan cinta. Jika\n                        salah satu mati, yang lain ikut mati."
    },
    {
        "id": "hunter",
        "style": "--f-color: #2d5a1b; --bg-color: #f5fff0; --box-bg: #e0f5d0; --text-color: #0d1a07; --code-color: #3a7022; --border-color: #1a3a0e; --sidebar-text: #fff;",
        "titleEn": "HUNTER",
        "code": "DOC: ALL-05 // ALLIANCE",
        "titleId": "SANG PEMBURU",
        "quote": "\"Anggaplah aku korban mudah. Tapi ingat — <span>jika aku mati, kamu ikut\n                            mati</span> bersamaku di ujung anak panahku yang terakhir.\"",
        "ability": "KEMAMPUAN:<br>Saat dibunuh (siang/malam), tunjuk 1 pemain yang ikut mati\n                        bersamamu."
    },
    {
        "id": "guardian",
        "style": "--f-color: #1a4a7a; --bg-color: #f0f7ff; --box-bg: #d8edff; --text-color: #060e1a; --code-color: #1a5a9a; --border-color: #0e2a4a; --sidebar-text: #fff;",
        "titleEn": "GUARDIAN",
        "code": "DOC: ALL-06 // ALLIANCE",
        "titleId": "SANG PELINDUNG",
        "quote": "\"Tubuhku adalah tembok terakhir. <span>Tidak ada yang menyentuhmu</span>\n                        selama nyawaku masih berdenyut di balik perisai ini.\"",
        "ability": "KEMAMPUAN:<br>Setiap malam, pilih 1 pemain untuk dilindungi. Serangan\n                        serigala pada target tersebut akan gagal malam itu."
    },
    {
        "id": "villager",
        "style": "--f-color: #113247;",
        "titleEn": "VILLAGER",
        "code": "DOC: ALL-14 // ALLIANCE",
        "titleId": "WARGA DESA",
        "quote": "\"Kami mungkin tak bertaring tajam, namun <span>tali gantungan warga</span>\n                        yang akan memutus leher monstermu.\"",
        "ability": "KEMAMPUAN:<br>Tidak memiliki kekuatan gaib. Mengandalkan insting dalam\n                        diskusi siang untuk memvonis mati serigala."
    },
    {
        "id": "witch",
        "style": "--f-color: #1a5c2a; --bg-color: #f0fff4; --box-bg: #d0f0dc; --text-color: #061209; --code-color: #1f7a34; --border-color: #0e3a19; --sidebar-text: #fff;",
        "titleEn": "WITCH",
        "code": "DOC: SHD-03 // SHADOW",
        "titleId": "SANG PENYIHIR",
        "quote": "\"Dua racun, dua nyawa. <span>Satu untuk membunuh</span>, satu untuk\n                        menghidupkan — dan keduanya ada di tanganku malam ini.\"",
        "ability": "KEMAMPUAN:<br>Punya 2 ramuan: satu racun (bunuh 1 orang) & satu antidot\n                        (selamatkan 1 yang diserang). Masing-masing hanya sekali."
    },
    {
        "id": "wizard",
        "style": "--f-color: #3d1a78; --bg-color: #f8f5ff; --box-bg: #e8dcff; --text-color: #0d0820; --code-color: #5a2aaa; --border-color: #2a0f58; --sidebar-text: #fff;",
        "titleEn": "WIZARD",
        "code": "DOC: CHS-03 // CHAOS",
        "titleId": "SANG PENYIHIR AGUNG",
        "quote": "\"Ilmu sihirku tak mengenal batas faksi. <span>Kutentukan sendiri</span> kepada\n                        siapa mantraku berpihak malam ini.\"",
        "ability": "KEMAMPUAN:<br>Sekali per game, blokir kemampuan 1 pemain di malam itu.\n                        Target tidak bisa menggunakan perannya."
    },
    {
        "id": "veteran",
        "style": "--f-color: #5a4a00; --bg-color: #fffdf0; --box-bg: #f5edcc; --text-color: #1a1400; --code-color: #7a6500; --border-color: #3a3000; --sidebar-text: #fff;",
        "titleEn": "VETERAN",
        "code": "DOC: ALL-07 // ALLIANCE",
        "titleId": "SANG VETERAN",
        "quote": "\"Aku pernah mati sekali di medan perang. <span>Sekarang giliranmu</span>\n                        merasakan apa artinya menembak veteran yang sudah siaga.\"",
        "ability": "KEMAMPUAN:<br>Bisa masuk mode siaga 3x. Siapa pun yang mengunjungimu malam\n                        itu — kawan atau lawan — akan terbunuh."
    },
    {
        "id": "bodyguard",
        "style": "--f-color: #2b3a42; --bg-color: #f4f6f7; --box-bg: #e2e8ea; --text-color: #0b0f11; --code-color: #3b5059; --border-color: #172025; --sidebar-text: #fff;",
        "titleEn": "BODYGUARD",
        "code": "DOC: ALL-08 // ALLIANCE",
        "titleId": "SANG PENGAWAL",
        "quote": "\"Aku dibayar untuk menerima peluru asasin, tapi <span>cakar serigala?</span>\n                        Itu tantangan yang siap kurima, meski bayarannya nyawa.\"",
        "ability": "KEMAMPUAN:<br>Pilih 1 pemain setiap malam. Jika target diserang, kamu mati\n                        menggantikannya tapi 1 serigala juga ikut mati."
    },
    {
        "id": "priest",
        "style": "--f-color: #b89300; --bg-color: #fffdf5; --box-bg: #fff5c2; --text-color: #1a1500; --code-color: #cca300; --border-color: #8f7200; --sidebar-text: #fff;",
        "titleEn": "PRIEST",
        "code": "DOC: ALL-09 // ALLIANCE",
        "titleId": "SANG PENDETA",
        "quote": "\"Air suci ini akan membakar daging terkutukmu. <span>Satu tetes saja</span>\n                        cukup untuk mengirim rohmu kembali ke jurang neraka.\"",
        "ability": "KEMAMPUAN:<br>Sekali per game, siram air suci ke 1 pemain. Jika target\n                        serigala, ia mati. Jika warga/non-serigala, kamu yang mati."
    },
    {
        "id": "mayor",
        "style": "--f-color: #0b1a3d; --bg-color: #f2f5fc; --box-bg: #d9e2f5; --text-color: #030814; --code-color: #17357a; --border-color: #060e21; --sidebar-text: #fff;",
        "titleEn": "MAYOR",
        "code": "DOC: ALL-10 // ALLIANCE",
        "titleId": "SANG WALIKOTA",
        "quote": "\"Demokrasi kalian hanyalah ilusi. <span>Suaraku adalah titah mutlak</span>\n                        yang akan menutup peti mati siapapun yang kutunjuk.\"",
        "ability": "KEMAMPUAN:<br>Di siang hari dapat mengungkapkan diri sebagai Walikota.\n                        Setelah itu, suara votingmu dihitung 2 (ganda)."
    },
    {
        "id": "sheriff",
        "style": "--f-color: #7a4800; --bg-color: #fff9f0; --box-bg: #f5e6cc; --text-color: #1a0e00; --code-color: #a06000; --border-color: #4a2a00; --sidebar-text: #fff;",
        "titleEn": "SHERIFF",
        "code": "DOC: ALL-11 // ALLIANCE",
        "titleId": "SANG SHERIFF",
        "quote": "\"Kau bisa lari dari desa ini, tapi <span>tidak dari timah panas</span> yang\n                        sudah aku arahkan tepat ke dadamu, serigala.\"",
        "ability": "KEMAMPUAN:<br>Setiap malam, periksa 1 pemain. Jika terbukti serigala, kamu\n                        boleh menembaknya mati saat itu juga."
    },
    {
        "id": "werewolf",
        "style": "--f-color: #8b0000;",
        "titleEn": "WEREWOLF",
        "code": "DOC: SHD-01 // SHADOW",
        "titleId": "SERIGALA",
        "quote": "\"Cahaya purnama tak menuntut damai. <span>Lehermu murni harus terburai</span>\n                        diterkam maut oleh rahang kami.\"",
        "ability": "KEMAMPUAN:<br>Bangun di malam hari. Kawanan serigala berdiskusi diam-diam\n                        untuk memilih 1 mangsa untuk dibunuh."
    },
    {
        "id": "jester",
        "style": "--f-color: #0a421b;",
        "titleEn": "JESTER",
        "code": "DOC: CHS-01 // CHAOS",
        "titleId": "SANG BADUT",
        "quote": "\"Seret tubuh gilaku ke tiang gantungan. <span>Di ujung tali itulah</span>\n                        letak kejayaan mutlak kemenanganku!\"",
        "ability": "KEMAMPUAN:<br>Faksi Independen. Kamu MENANG MUTLAK jika berhasil\n                        memanipulasi warga agar memvonis gantung dirimu."
    },
    {
        "id": "werewolf_2",
        "style": "--f-color: #4a0010; --bg-color: #fff8fa; --box-bg: #ffe0e8; --text-color: #1a0008; --code-color: #7a0020; --border-color: #2a0008; --sidebar-text: #fff;",
        "titleEn": "WEREWOLF",
        "code": "DOC: SHD-04 // SHADOW",
        "titleId": "SERIGALA",
        "quote": "\"<span>Lolonganku</span> adalah satu-satunya mantra yang perlu kau dengar\n                        sebelum mati.\"",
        "ability": "KEMAMPUAN:<br>Bangun malam hari bersama kawanan. Diskusi diam-diam memilih 1\n                        mangsa sebelum fajar."
    },
    {
        "id": "lone_wolf",
        "style": "--f-color: #2a3540; --bg-color: #f5f8fa; --box-bg: #dde6ed; --text-color: #0a0e11; --code-color: #3d5060; --border-color: #14202a; --sidebar-text: #fff;",
        "titleEn": "LONE WOLF",
        "code": "DOC: SLD-01 // SOLO",
        "titleId": "SERIGALA TUNGGAL",
        "quote": "\"Aku terlihat seperti warga biasa. Tapi <span>sentuh aku, dan aku\n                            berubah</span> menjadi sesuatu yang jauh lebih berbahaya.\"",
        "ability": "KEMAMPUAN:<br>Tampil sebagai warga biasa. Jika serigala memilihmu di malam\n                        hari, kamu BERGABUNG dengan kawanan dan ikut berburu."
    },
    {
        "id": "doppelganger",
        "style": "--f-color: #2d0a5e; --bg-color: #f8f5ff; --box-bg: #e8dcff; --text-color: #0d0820; --code-color: #5a2aaa; --border-color: #1a0040; --sidebar-text: #fff;",
        "titleEn": "DOPPELGANGER",
        "code": "DOC: SLD-02 // SOLO",
        "titleId": "SI KEMBAR GELAP",
        "quote": "\"Siapa aku? <span>Tanyakan pada cerminmu</span> — karena aku sudah menjadi\n                        kamu sebelum kamu menyadarinya.\"",
        "ability": "KEMAMPUAN:<br>Di malam pertama, pilih 1 pemain untuk ditiru. Jika mereka\n                        mati, kamu mewarisi peran dan kemampuannya."
    },
    {
        "id": "serial_killer",
        "style": "--f-color: #5c0000; --bg-color: #fff5f5; --box-bg: #ffd6d6; --text-color: #1a0000; --code-color: #8a0000; --border-color: #2a0000; --sidebar-text: #fff;",
        "titleEn": "SERIAL KILLER",
        "code": "DOC: SLD-03 // SOLO",
        "titleId": "SANG PEMBUNUH",
        "quote": "\"Bukan serigala, bukan warga. <span>Aku hanya menghitung</span> — dan belum\n                        selesai menghitung.\"",
        "ability": "KEMAMPUAN:<br>Setiap malam bunuh 1 orang. Menang jika hanya kamu yang\n                        tersisa — tanpa pandang faksi."
    },
    {
        "id": "village_idiot",
        "style": "--f-color: #b86000; --bg-color: #fffbf0; --box-bg: #ffe8b0; --text-color: #1a0e00; --code-color: #d47800; --border-color: #6a3800; --sidebar-text: #fff;",
        "titleEn": "VILLAGE IDIOT",
        "code": "DOC: ALL-15 // ALLIANCE",
        "titleId": "SI BODOH KEBAL",
        "quote": "\"Eh, kalian mau gantung aku? <span>Silakan saja.</span> Aku masih di sini\n                        setelahnya — senyum-senyum.\"",
        "ability": "KEMAMPUAN:<br>Jika divoting pada siang hari, buka identitasmu dan kamu BATAL\n                        MATI, tapi kehilangan hak suara selamanya."
    },
    {
        "id": "prince",
        "style": "--f-color: #0a2a7a; --bg-color: #f5f8ff; --box-bg: #d8e4ff; --text-color: #04101e; --code-color: #1a4aaa; --border-color: #04124a; --sidebar-text: #fff;",
        "titleEn": "PRINCE",
        "code": "DOC: ALL-16 // ALLIANCE",
        "titleId": "SANG PANGERAN",
        "quote": "\"Hukum berlaku bagi kalian. <span>Bukan bagiku.</span> Sekali saja kalian\n                        melupakan itu — maka aku yang mengingatkan.\"",
        "ability": "KEMAMPUAN:<br>Jika terpilih untuk digantung pertama kali, hukuman\n                        DIBATALKAN. Hanya berlaku sekali sepanjang game."
    },
    {
        "id": "little_girl",
        "style": "--f-color: #8a0050; --bg-color: #fff5fa; --box-bg: #ffd6ec; --text-color: #1a0010; --code-color: #aa0060; --border-color: #4a0028; --sidebar-text: #fff;",
        "titleEn": "LITTLE GIRL",
        "code": "DOC: ALL-17 // ALLIANCE",
        "titleId": "SI GADIS KECIL",
        "quote": "\"Ssst… <span>aku lihat semuanya</span> dari balik celah ini. Jangan sampai\n                        mereka tahu aku di sini.\"",
        "ability": "KEMAMPUAN:<br>Boleh mengintip saat serigala berdiskusi malam. Jika\n                        tertangkap, langsung mati saat itu juga."
    },
    {
        "id": "villager_2",
        "style": "--f-color: #2b4a1b; --bg-color: #f7f9f5; --box-bg: #dde8d5; --text-color: #0e1a06; --code-color: #3b6028; --border-color: #1a300e; --sidebar-text: #fff;",
        "titleEn": "VILLAGER",
        "code": "DOC: ALL-18 // ALLIANCE",
        "titleId": "WARGA DESA",
        "quote": "\"Aku hanya petani miskin. Tapi jika makhluk itu berani menginjak ladangku,\n                        <span>sabit panen ini pun akan kumuatkan sebagai senjataku.</span>\"",
        "ability": "KEMAMPUAN:<br>Tidak memiliki kekuatan gaib. Mengandalkan insting dalam\n                        diskusi siang untuk memvonis mati serigala."
    },
    {
        "id": "villager_3",
        "style": "--f-color: #a83200; --bg-color: #fffaf5; --box-bg: #ffe8d6; --text-color: #1a0800; --code-color: #e64500; --border-color: #4a1500; --sidebar-text: #fff;",
        "titleEn": "VILLAGER",
        "code": "DOC: ALL-19 // ALLIANCE",
        "titleId": "WARGA DESA",
        "quote": "\"Tidak ada sidang, tidak ada pengampunan. <span>Malam ini kami yang jadi\n                            hakim</span> dan apilah yang jadi algojonya.\"",
        "ability": "KEMAMPUAN:<br>Tidak memiliki kekuatan gaib. Mengandalkan insting dalam\n                        diskusi siang untuk memvonis mati serigala."
    },
    {
        "id": "card_back",
        "style": "--bg-color: #0f1115; --f-color: #d4af37; --border-color: #333; --sidebar-text: #0f1115; --code-color: #888; --box-bg: #0f1115; --text-color: #fff; --bg-opacity: 0.05;",
        "titleEn": "ASYLUM",
        "code": "EDITION: 1.0//MRSETIAWAN",
        "titleId": "NIGHTMARE DECK",
        "quote": "\"Memasuki dimensi gelap <span>NIGHTMARE ASYLUM</span>. Jangan pernah mempercayai siapapun...\"",
        "ability": "TRUST NO ONE."
    }
];
