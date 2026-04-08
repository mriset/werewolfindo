const dossierDeckData = [
    {
        "id": "moderator",
        "file": "FILE: MOD-001",
        "clearance": "CLEARANCE: OMNI",
        "photoStyle": "transform: rotate(1.5deg);",
        "titleId": "MODERATOR",
        "titleEn": "DIRECTOR / OMNISCIENT",
        "desc": "Mengatur jalannya eksperimen. Keputusanmu mutlak. Kematian subjek hanyalah <span class=\"redacted\">protokol</span> yang diperlukan. Awasi mereka, jangan berkedip."
    },
    {
        "id": "villager",
        "file": "FILE: VIL-042",
        "clearance": "STATUS: EXPENDABLE",
        "photoStyle": "transform: rotate(-1.5deg);",
        "titleId": "WARGA",
        "titleEn": "VILLAGER / THE INNOCENT",
        "desc": "Bertahan hidup adalah tujuan utama. Percayalah pada instingmu, temukan sang <span class=\"redacted\">pemangsa</span>, atau mati menjadi korban berikutnya."
    },
    {
        "id": "werewolf",
        "file": "FILE: WWF-666",
        "clearance": "THREAT: APEX PREDATOR",
        "photoStyle": "transform: rotate(2deg); padding:0; border: 2px solid #111;",
        "titleId": "SERIGALA",
        "titleEn": "WEREWOLF / THE APEX",
        "desc": "Rasa lapar yang tak terpuaskan. Robek daging mereka. Jangan tinggalkan <span class=\"redacted\">saksi mata</span>. Lenyapkan bukti keberadaanmu."
    },
    {
        "id": "jester",
        "file": "FILE: JST-000",
        "clearance": "STATUS: UNSTABLE",
        "photoStyle": "transform: rotate(-3deg);",
        "titleId": "SI BADUT",
        "titleEn": "JESTER / THE CHAOS",
        "desc": "Kematianmu adalah lelucon terbaik. Buat mereka memvotingmu mati, dan <span class=\"redacted\">tertawalah</span> keras dari balik jeruji neraka."
    },
    {
        "id": "cupid",
        "file": "FILE: CPD-014",
        "clearance": "STATUS: SYMBIOTIC",
        "photoStyle": "transform: rotate(1deg);",
        "titleId": "CUPID",
        "titleEn": "THE MATCHMAKER / FATAL LINK",
        "desc": "Pilih dua subjek uji untuk disuntikkan <span class=\"redacted\">ikatan fatal</span>. Jika salah satu dari mereka mati, subjek yang lain akan menyusul. Cinta adalah anomali yang mematikan."
    },
    {
        "id": "seer",
        "file": "FILE: SER-333",
        "clearance": "STATUS: CLAIRVOYANT",
        "photoStyle": "transform: rotate(2.5deg);",
        "titleId": "PENERAWANG",
        "titleEn": "SEER / THE ORACLE",
        "desc": "Setiap malam, kau diizinkan melihat identitas asli satu subjek uji. Kebenaran ini akan menggilakanmu. Temukan <span class=\"redacted\">serigala</span> sebelum mereka mencungkil matamu."
    },
    {
        "id": "hunter",
        "file": "FILE: HNT-007",
        "clearance": "STATUS: RETALIATION",
        "photoStyle": "transform: rotate(-1.5deg);",
        "titleId": "PEMBURU",
        "titleEn": "HUNTER / THE VIGILANTE",
        "desc": "Saat napas terakhirmu ditarik, kau bisa menyeret satu subjek lain bersamamu ke neraka. Tarik <span class=\"redacted\">pelatuknya</span> sebelum kesadaranmu hilang sepenuhnya."
    },
    {
        "id": "sheriff",
        "file": "FILE: SHF-911",
        "clearance": "STATUS: ENFORCER",
        "photoStyle": "transform: rotate(1deg);",
        "titleId": "SHERIFF",
        "titleEn": "SHERIFF / THE LAW",
        "desc": "Suaramu adalah hukum. Kau memiliki wewenang untuk mengeksekusi satu subjek di siang hari. Jangan sampai <span class=\"redacted\">pistolmu</span> membunuh orang yang tidak bersalah."
    },
    {
        "id": "alphawolf",
        "file": "FILE: AWF-001",
        "clearance": "THREAT: ALPHA PRIME",
        "photoStyle": "transform: rotate(-2.5deg); border: 2px solid #200;",
        "titleId": "ALPHA WOLF",
        "titleEn": "ALPHA WOLF / THE LEADER",
        "desc": "Sang pemimpin berdarah dingin. Target gigitan pertamamu tidak akan mati, melainkan <span class=\"redacted\">terinfeksi</span> dan berubah menjadi pengikutmu."
    },
    {
        "id": "guardian",
        "file": "FILE: GRD-999",
        "clearance": "STATUS: PROTECTOR",
        "photoStyle": "transform: rotate(1.5deg);",
        "titleId": "PENJAGA",
        "titleEn": "GUARDIAN / THE SHIELD",
        "desc": "Setiap malam kau bisa melindungi satu subjek dari eksekusi. Kau tak bisa melindungi dirimu sendiri. Bersiaplah <span class=\"redacted\">berdarah</span> demi mereka."
    },
    {
        "id": "witch",
        "file": "FILE: WTC-013",
        "clearance": "STATUS: TOXICOLOGIST",
        "photoStyle": "transform: rotate(-1deg);",
        "titleId": "PENYIHIR",
        "titleEn": "WITCH / THE BREWER",
        "desc": "Dua suntikan di tanganmu: satu menyembuhkan kebocoran fatal, satu <span class=\"redacted\">menyuntikkan</span> kematian instan. Gunakan dengan bijak."
    },
    {
        "id": "wizard",
        "file": "FILE: WZD-777",
        "clearance": "STATUS: ALCHEMIST",
        "photoStyle": "transform: rotate(3deg);",
        "titleId": "PENYIHIR PRIA",
        "titleEn": "WIZARD / THE ALCHEMIST",
        "desc": "Mampu menerawang lebih jauh dan membongkar asal usul fenomena malam. Ketahui peran pastinya, sebelum kau <span class=\"redacted\">dibakar</span> massa."
    },
    {
        "id": "veteran",
        "file": "FILE: VET-084",
        "clearance": "STATUS: PARANOID",
        "photoStyle": "transform: rotate(-2deg);",
        "titleId": "VETERAN",
        "titleEn": "VETERAN / THE SURVIVOR",
        "desc": "Tiga peluru mematikan. Siapapun yang mengunjungi ruang kerjamu malam ini—kawan atau lawan—akan <span class=\"redacted\">tertembak</span> mati di tempat."
    },
    {
        "id": "bodyguard",
        "file": "FILE: BGD-101",
        "clearance": "STATUS: SACRIFICIAL",
        "photoStyle": "transform: rotate(1deg);",
        "titleId": "PENGAWAL",
        "titleEn": "BODYGUARD / THE MEAT SHIELD",
        "desc": "Pilih satu subjek uji peliharaanmu. Jika maut mendekatinya, kau akan <span class=\"redacted\">menerima</span> serangan itu alih-alih mereka. Mengambil nyawa si pembunuh bersamamu."
    },
    {
        "id": "priest",
        "file": "FILE: PRT-316",
        "clearance": "STATUS: SPIRITUAL",
        "photoStyle": "transform: rotate(-1deg);",
        "titleId": "PENDETA",
        "titleEn": "PRIEST / THE PURIFIER",
        "desc": "Satu botol air sucimu mampu menyembuhkan target secara instan. Berikan mereka pengampunan sebelum mereka dikutuk menjadi <span class=\"redacted\">abu</span> di pagi hari."
    },
    {
        "id": "mayor",
        "file": "FILE: MYR-001",
        "clearance": "STATUS: DIPLOMAT",
        "photoStyle": "transform: rotate(2deg);",
        "titleId": "WALIKOTA",
        "titleEn": "MAYOR / THE LEADER",
        "desc": "Saat identitasmu terungkap, suaramu menjadi ganda dalam voting publik. Jangan sampai posisimu hanya mempercepat <span class=\"redacted\">eksekusimu</span> sendiri."
    },
    {
        "id": "villager2",
        "file": "FILE: VIL-043",
        "clearance": "STATUS: EXPENDABLE",
        "photoStyle": "transform: rotate(1deg);",
        "titleId": "WARGA (2)",
        "titleEn": "VILLAGER / THE PANICKED",
        "desc": "Rasa takut menyelimutimu. Bertahan hidup adalah tujuan utama. Temukan sang <span class=\"redacted\">pemangsa</span>, atau kau yang akan digorok malam ini."
    },
    {
        "id": "villager3",
        "file": "FILE: VIL-088",
        "clearance": "STATUS: EXPENDABLE",
        "photoStyle": "transform: rotate(-2deg);",
        "titleId": "WARGA (3)",
        "titleEn": "VILLAGER / THE SKEPTIC",
        "desc": "Kau tak percaya siapapun lagi. Setiap senyum adalah ancaman. Tetap tersembunyi jika tak ingin menjadi saksi <span class=\"redacted\">pembantaian</span> berikutnya."
    },
    {
        "id": "werewolf2",
        "file": "FILE: WWF-667",
        "clearance": "THREAT: APEX PREDATOR",
        "photoStyle": "transform: rotate(-1.5deg); border: 2px solid #111;",
        "titleId": "SERIGALA (2)",
        "titleEn": "WEREWOLF / THE HUNTER",
        "desc": "Cakar yang tak sabar menumpahkan darah. Berburulah bersama kawanannya dan pastikan jeritan korbanmu menjadi <span class=\"redacted\">simfoni</span> malam."
    },
    {
        "id": "lonewolf",
        "file": "FILE: LWF-000",
        "clearance": "THREAT: ROGUE",
        "photoStyle": "transform: rotate(2deg); border: 2px solid #300;",
        "titleId": "SERIGALA PENYENDIRI",
        "titleEn": "LONE WOLF / THE ROGUE",
        "desc": "Kau berdiri sendiri. Tak ada kawanan yang mempedulikanmu. Tujuan utamamu adalah menjadi satu-satunya yang <span class=\"redacted\">hidup</span> untuk menertawakan abu mereka."
    },
    {
        "id": "doppelganger",
        "file": "FILE: DPG-002",
        "clearance": "STATUS: PARASITE",
        "photoStyle": "transform: rotate(-1deg);",
        "titleId": "DOPPELGANGER",
        "titleEn": "DOPPELGANGER / THE FAKE",
        "desc": "Pilih satu target di malam pertama. Saat dia mati, identitas, wajah, dan kemampuannya menjadi <span class=\"redacted\">milikmu</span> sepenuhnya."
    },
    {
        "id": "serialkiller",
        "file": "FILE: SKL-404",
        "clearance": "THREAT: PSYCHOPATH",
        "photoStyle": "transform: rotate(3deg); border: 1px dashed #A00000;",
        "titleId": "PEMBUNUH BERANTAI",
        "titleEn": "SERIAL KILLER / THE PSYCHO",
        "desc": "Kebencian murni pada semua makhluk bernyawa. Setiap malam satu nyawa harus <span class=\"redacted\">dijagal</span>. Tersenyumlah di atas lautan darah."
    },
    {
        "id": "idiot",
        "file": "FILE: IDT-000",
        "clearance": "STATUS: UNPREDICTABLE",
        "photoStyle": "transform: rotate(-3deg);",
        "titleId": "SI PANDIR",
        "titleEn": "IDIOT / THE FOOL",
        "desc": "Tak mampu mencerna rasa takut. Saat mereka sepakat mengeksekusimu, kau bisa membuka kartu aslimu untuk <span class=\"redacted\">selamat</span>, namun hak suaramu dicabut selamanya."
    },
    {
        "id": "prince",
        "file": "FILE: PRC-001",
        "clearance": "STATUS: VIP",
        "photoStyle": "transform: rotate(1deg);",
        "titleId": "SANG PANGERAN",
        "titleEn": "PRINCE / THE ROYAL",
        "desc": "Darah bangsawan mengalir dalam dirimu. Jika penduduk kota mencoba mengeksekusimu, ungkapkan identitasmu untuk <span class=\"redacted\">kebal</span> dari hukuman gantung."
    },
    {
        "id": "littlegirl",
        "file": "FILE: LGL-009",
        "clearance": "STATUS: VULNERABLE",
        "photoStyle": "transform: rotate(-2deg);",
        "titleId": "GADIS KECIL",
        "titleEn": "LITTLE GIRL / THE SNOOP",
        "desc": "Mengintip di celah ketakutan. Kau bisa melihat siapa sang serigala saat mereka berburu keliling malam. Namun awas, kau prioritas <span class=\"redacted\">mangsa</span> pertama jika ketahuan."
    },
    {
        "id": "card_back",
        "isBack": true
    }
];
