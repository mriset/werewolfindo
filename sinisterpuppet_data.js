const sinisterDeckData = [
    {
        "id": "moderator",
        "className": "moderator",
        "code": "SP-MOD-001",
        "faction": "SUPREME FACTION",
        "titleId": "MODERATOR",
        "titleEn": "THE MASTERMIND",
        "quote": "Aku yang menarik benangnya, kalian hanya menari di atas panggungku.",
        "ability": "Pemandu jalannya takdir. Memanggil setiap peran pada malam hari secara berurutan dan membacakan hasil penghakiman di siang hari. Tidak memihak siapapun."
    },
    {
        "id": "villager",
        "className": "villager",
        "code": "SP-VIL-042",
        "faction": "ALLIANCE FACTION",
        "titleId": "WARGA",
        "titleEn": "THE WOODEN PAWN",
        "quote": "Kami bergerak tanpa tahu siapa yang memegang kendali di atas sana.",
        "ability": "Tidak memiliki kemampuan khusus di malam hari. Gunakan insting, diskusi, dan analisismu di siang hari untuk mencari serta menyingkirkan serigala yang bersembunyi di antaramu."
    },
    {
        "id": "werewolf",
        "className": "werewolf",
        "code": "SP-WWF-666",
        "faction": "SHADOWS FACTION",
        "titleId": "WEREWOLF",
        "titleEn": "THE TORN MARIONETTE",
        "quote": "Benang ini takkan bisa menahan rasa laparku. Panggung ini akan bersimbah darah.",
        "ability": "Bangun setiap malam bersama kawananmu untuk memangsa satu pemain secara diam-diam. Di siang hari, jadilah boneka penurut dan menyamarlah sebagai warga biasa."
    },
    {
        "id": "jester",
        "className": "jester",
        "code": "SP-JST-099",
        "faction": "CHAOS FACTION",
        "titleId": "JESTER",
        "titleEn": "THE CRACKED DOLL",
        "quote": "Tawa yang paling nyaring akan terdengar justru di saat aku hancur berkeping-keping!",
        "ability": "Tujuanmu hanya satu: Kematian. Berpura-puralah menjadi ancaman dan manipulasi warga desa agar menggantung/mem-voting dirimu. Jika kamu dieksekusi, kamu menang sendirian."
    },
    {
        "id": "seer",
        "className": "seer",
        "code": "SP-SEE-013",
        "faction": "ALLIANCE FACTION",
        "titleId": "SEER",
        "titleEn": "THE GLASS EYE ORACLE",
        "quote": "Bola kaca ini tak pernah berbohong. Aku melihat jiwa di balik topengmu.",
        "ability": "Setiap malam, pilih satu pemain untuk diintip wujud aslinya. Moderator akan mengungkap apakah mereka Werewolf atau bukan. Gunakan pengetahuanmu dengan bijak — terlalu gegabah bisa membuatmu jadi sasaran."
    },
    {
        "id": "alpha-wolf",
        "className": "alpha-wolf",
        "code": "SP-AWF-001",
        "faction": "SHADOWS FACTION · ALPHA",
        "titleId": "ALPHA WOLF",
        "titleEn": "THE IRON THRONE PUPPET",
        "quote": "Aku tak hanya memangsa — aku memerintah. Kawananku adalah taringku.",
        "ability": "Pemimpin kawanan serigala. Setiap malam memimpin pemilihan mangsa bersama Werewolf lain. Memiliki satu kemampuan khusus: satu kali per permainan dapat mengganti hasil vote serigala secara diam-diam."
    },
    {
        "id": "cupid",
        "className": "cupid",
        "code": "SP-CPD-007",
        "faction": "CHAOS FACTION",
        "titleId": "CUPID",
        "titleEn": "THE ROSE THREAD WEAVER",
        "quote": "Cinta adalah rantai yang paling kuat — dan aku yang memilihkan siapa yang terikat.",
        "ability": "Di malam pertama, pilih dua pemain untuk diikat oleh benang merah takdir. Jika salah satu dari mereka mati, yang lain ikut mati. Pasangan ini menang bersama jika berhasil bertahan — atau mencabut jiwa semua orang lain."
    },
    {
        "id": "hunter",
        "className": "hunter",
        "code": "SP-HNT-044",
        "faction": "ALLIANCE FACTION",
        "titleId": "HUNTER",
        "titleEn": "THE IRON CROSSBOW PUPPET",
        "quote": "Jika aku jatuh, aku tidak jatuh sendiri. Satu peluru masih tersisa untukmu.",
        "ability": "Ketika Hunter mati — baik karena dimangsa serigala maupun dieksekusi warga — ia segera menembakkan satu panah terakhir. Pilih satu pemain untuk ikut terbunuh bersamamu."
    },
    {
        "id": "guardian",
        "className": "guardian",
        "code": "SP-GRD-009",
        "faction": "ALLIANCE FACTION",
        "titleId": "GUARDIAN",
        "titleEn": "THE IRON SHIELD PUPPET",
        "quote": "Selama aku berdiri, tidak ada yang bisa menyentuh mereka yang kubawa dalam lindunganku.",
        "ability": "Setiap malam, pilih satu pemain (termasuk dirimu) untuk dilindungi. Pemain itu kebal dari serangan serigala malam ini. Tidak bisa melindungi orang yang sama dua malam berturut-turut."
    },
    {
        "id": "witch",
        "className": "witch",
        "code": "SP-WTC-011",
        "faction": "ALLIANCE FACTION",
        "titleId": "WITCH",
        "titleEn": "THE VENOM VIAL PUPPET",
        "quote": "Satu ramuanku bisa menghidupkan — satu lainnya membunuh seketika. Pilihanku, bukan pilihanmu.",
        "ability": "Memiliki dua ramuan: Kehidupan (selamatkan korban serigala malam ini) dan Racun (bunuh satu pemain pilihanmu). Masing-masing hanya bisa dipakai sekali per permainan."
    },
    {
        "id": "wizard",
        "className": "wizard",
        "code": "SP-WZD-077",
        "faction": "ALLIANCE FACTION",
        "titleId": "WIZARD",
        "titleEn": "THE ARCANE SIGIL PUPPET",
        "quote": "Aku telah menenun sihir sejak sebelum benang-benang takdir ini dipintal.",
        "ability": "Sekali dalam permainan, saat fajar tiba, Wizard dapat memilih untuk menghentikan waktu. Hari itu akan di-skip sepenuhnya (tidak ada diskusi, tidak ada voting/eksekusi) dan langsung kembali ke malam hari."
    },
    {
        "id": "veteran",
        "className": "veteran",
        "code": "SP-VET-014",
        "faction": "ALLIANCE FACTION",
        "titleId": "VETERAN",
        "titleEn": "THE SCARRED IRON PUPPET",
        "quote": "Mendekatlah. Luka terburukku bukan dari taring serigala, tapi dari mereka yang tak bersiap.",
        "ability": "Tiga kali per permainan di malam hari, kamu dapat bersiaga (\"On Alert\"). Saat bersiaga, siapapun (Werewolf, Seer, dsb) yang mengunjungimu malam itu akan terbunuh seketika. Kamu tidak kebal jika tidak bersiaga."
    },
    {
        "id": "bodyguard",
        "className": "bodyguard",
        "code": "SP-BGD-247",
        "faction": "ALLIANCE FACTION",
        "titleId": "BODYGUARD",
        "titleEn": "THE HEAVY GAUNTLET PUPPET",
        "quote": "Armor ini dibuat bukan hanya untuk bertahan, tapi untuk menghancurkan apa pun yang menabraknya.",
        "ability": "Setiap malam, pilih satu pemain untuk dilindungi. Jika pemain itu diserang, kamu akan menyelamatkannya, membunuh sang penyerang, namun kamu juga akan mati dalam pertempuran tersebut."
    },
    {
        "id": "priest",
        "className": "priest",
        "code": "SP-PST-777",
        "faction": "ALLIANCE FACTION",
        "titleId": "PRIEST",
        "titleEn": "THE STAINED GLASS PUPPET",
        "quote": "Selama aku berdoa, benang emas ini akan menuntun jiwamu kembali dari kegelapan.",
        "ability": "Memiliki wewenang absolut untuk menyelamatkan jiwa. Satu kali per permainan, Priest dapat menyiram cipratan Air Suci (Holy Water) untuk membatalkan semua kematian yang terjadi di malam sebelumnya."
    },
    {
        "id": "mayor",
        "className": "mayor",
        "code": "SP-MYR-100",
        "faction": "ALLIANCE FACTION",
        "titleId": "MAYOR",
        "titleEn": "THE GILDED TOP-HAT PUPPET",
        "quote": "Suaraku bernilai lebih tinggi dari kalian semua bersatu. Dengarkan titahku!",
        "ability": "Sekali dalam permainan di siang hari, kamu bisa mengungkap identitasmu sebagai Walikota (Mayor) kepada semua pemain. Setelah diungkap, setiap satu votingmu dihidung sebagai DUA (atau TIGA) vote saat eksekusi."
    },
    {
        "id": "sheriff",
        "className": "sheriff",
        "code": "SP-SHF-009",
        "faction": "ALLIANCE FACTION",
        "titleId": "SHERIFF",
        "titleEn": "THE SILVER STAR PUPPET",
        "quote": "Tak ada tempat bersembunyi untuk mereka yang berniat jahat. Moncong peluruku yang akan mengadilinya.",
        "ability": "Penegak hukum di siang hari. Jika Mayor diungkap, Sheriff akan melindunginya. Bisa mengeksekusi satu pemain secara instan, namun jika yang ia bunuh ternyata Warga, ia akan bunuh diri karena rasa bersalah."
    },
    {
        "id": "villager-2",
        "className": "villager-2",
        "code": "SP-VIL-043",
        "faction": "ALLIANCE FACTION",
        "titleId": "WARGA",
        "titleEn": "THE TORCHBEARER PAWN",
        "quote": "Matahari telah terbenam, namun api di tanganku belum akan padam.",
        "ability": "Tidak memiliki kemampuan khusus di malam hari. Gunakan insting, diskusi, dan analisismu di siang hari untuk mencari serta menyingkirkan serigala yang bersembunyi di antaramu."
    },
    {
        "id": "villager-3",
        "className": "villager-3",
        "code": "SP-VIL-044",
        "faction": "ALLIANCE FACTION",
        "titleId": "WARGA",
        "titleEn": "THE PITCHFORK PAWN",
        "quote": "Jika keadilan tidak turun dari langit, kami akan menancapkannya dari bumi.",
        "ability": "Tidak memiliki kemampuan khusus di malam hari. Gunakan insting, diskusi, dan analisismu di siang hari untuk mencari serta menyingkirkan serigala yang bersembunyi di antaramu."
    },
    {
        "id": "werewolf-2",
        "className": "werewolf-2",
        "code": "SP-WWF-667",
        "faction": "SHADOWS FACTION",
        "titleId": "WEREWOLF",
        "titleEn": "THE HOWLING MARIONETTE",
        "quote": "Lolongan kami adalah lonceng kematianmu. Panggung malam ini milik kami.",
        "ability": "Bangun setiap malam bersama kawananmu untuk memangsa satu pemain secara diam-diam. Di siang hari, jadilah boneka penurut dan menyamarlah sebagai warga biasa."
    },
    {
        "id": "lonewolf",
        "className": "lonewolf",
        "code": "SP-LNW-404",
        "faction": "SHADOWS FACTION",
        "titleId": "LONE WOLF",
        "titleEn": "THE SOLITARY BEAST",
        "quote": "Aku memotong taliku sendiri. Aku tidak tunduk pada warga, dan tidak juga pada kawananku.",
        "ability": "Kamu menang JIKA ANDA ADALAH PEMAIN TERAKHIR YANG HIDUP. Karena kamu tidak memiliki kawan, kamu bisa memangsa siapa pun, baik itu Warga maupun sesama pasukan Wererwolf."
    },
    {
        "id": "doppelganger",
        "className": "doppelganger",
        "code": "SP-DPG-002",
        "faction": "UNBOUND FACTION",
        "titleId": "DOPPELGANGER",
        "titleEn": "THE FACELESS PUPPET",
        "quote": "Aku kosong di bagian dalam, cangkang yang menanti esensimu untuk mengisiku.",
        "ability": "Di malam pertama, pilih satu pemain. Kamu tidak melakukan apa pun hingga pemain yang kau pilih itu mati. Saat mereka mati, kamu secara instan menggantikan peran mereka dan meneruskan misi/faksi dari peran tersebut."
    },
    {
        "id": "serialkiller",
        "className": "serialkiller",
        "code": "SP-SK-616",
        "faction": "UNBOUND FACTION",
        "titleId": "SERIAL KILLER",
        "titleEn": "THE GRINNING BUTCHER",
        "quote": "Satu, dua, tiga... ah, mengapa mesti dihitung? Semua benang pada akhirnya harus diputus.",
        "ability": "Misi utamamu adalah menjadi satu-satunya pemain yang tersisa (mengalahkan Alliance dan Shadows). Setiap malam, bunuh satu orang. Kamu kebal terhadap serangan Serigala di malam hari."
    },
    {
        "id": "idiot",
        "className": "idiot",
        "code": "SP-IDT-000",
        "faction": "ALLIANCE FACTION",
        "titleId": "IDIOT",
        "titleEn": "THE DUNCE PAWN",
        "quote": "Hehe... benangku kusut, sepatuku terikat jadi satu. Tapi setidaknya aku tidak di tiang gantung!",
        "ability": "Kamu warga biasa. Namun, jika kamu divoting (lynched) mati di siang hari, kamu akan otomatis membalik kartumu dan selamat dari eksekusi. Konsekuensinya, kamu tetap hidup namun tidak lagi memiliki hak suara (voting)."
    },
    {
        "id": "prince",
        "className": "prince",
        "code": "SP-PRN-001",
        "faction": "ALLIANCE FACTION",
        "titleId": "PRINCE",
        "titleEn": "THE JEWELED CROWN PUPPET",
        "quote": "Potong taliku jika kau berani. Gelarku tidak akan hancur hanya karena tali kapukmu.",
        "ability": "Jika kamu menjadi target voting eksekusi mati (lynch) pada siang hari, identitasmu akan terungkap dan kamu selamat dari hukuman gantung tersebut. Kamu adalah kaum bangsawan yang kebal eksekusi massal (Namun kau tetap bisa dibunuh Serigala)."
    },
    {
        "id": "littlegirl",
        "className": "littlegirl",
        "code": "SP-LGL-013",
        "faction": "ALLIANCE FACTION",
        "titleId": "LITTLE GIRL",
        "titleEn": "THE PEEKING DOLL",
        "quote": "Mengapa tangan ini tak bisa menutup mataku? Aku tak ingin melihat apa yang serigala itu lakukan.",
        "ability": "Di malam hari saat serigala berburu, Little Girl dapat diam-diam membuka matanya dan mengintip identitas mereka. Tapi hati-hati: jika kamu ketahuan, serigala mungkin akan memangsamu di malam itu juga."
    },
    {
        "id": "card_back",
        "className": "back",
        "titleTop": "PUPPET EDITION",
        "titleBot": "WEREWOLF"
    }
];
