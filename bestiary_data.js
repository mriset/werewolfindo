const bestiaryDeckData = [
    {
        id: "seer",
        title: "Sang Peramal",
        subtitle: "ROLE: THE SEER // MYSTIC",
        quote: `"Mataku menguliti gelapnya malam, mengungkap wujud asli monster di balik senyum palsumu."`,
        desc: `<strong>MATA BATIN:</strong> Setiap malam, tunjuk 1 pemain. Kau akan melihat <strong>identitas dan faksi aslinya</strong>. Gunakan kebenaran ini di siang hari untuk membimbing warga, tapi jangan sampai serigala mencium aromamu.`,
        cssVars: `--c-main: #006D77; --c-alt: #3d1a78; --r-frame: -1deg; --r-head: 3deg; --r-art: -4deg; --r-box: -2deg;`,
        isBack: false
    },
    {
        id: "werewolf",
        title: "Serigala",
        subtitle: "ROLE: WEREWOLF // PREDATOR",
        quote: `"Lolongan kami adalah melodi kematian. Daging kalian hanyalah hidangan pembuka malam ini."`,
        desc: `<strong>INSTING PEMANGSA:</strong> Bangun setiap malam bersama kawanannya. Berdiskusilah secara diam-diam, lalu <strong>pilih 1 mangsa</strong> untuk dibunuh. Berbaur dan berpura-puralah menjadi warga biasa di siang hari.`,
        cssVars: `--c-main: #9B2226; --c-alt: #4A0000; --r-frame: 2deg; --r-head: -4deg; --r-art: -5deg; --r-box: 3deg;`,
        isBack: false
    },
    {
        id: "hunter",
        title: "Sang Pemburu",
        subtitle: "ROLE: THE HUNTER // VANGUARD",
        quote: `"Silakan cabut nyawaku, tapi aku pastikan pelatuk ini akan menyeret satu dari kalian ke neraka."`,
        desc: `<strong>PELATUK TERAKHIR:</strong> Saat kau mati terbunuh (baik digorok serigala di malam hari atau dieksekusi warga di siang hari), kau berhak untuk langsung <strong>menembak mati 1 pemain</strong> pilihanmu seketika itu juga.`,
        cssVars: `--c-main: #283618; --c-alt: #DDA15E; --r-frame: 1.5deg; --r-head: 2deg; --r-art: 4deg; --r-box: -3deg;`,
        isBack: false
    },
    {
        id: "jester",
        title: "Si Badut",
        subtitle: "ROLE: THE JESTER // CHAOS",
        quote: `"Hahaha... Ayo gantung aku! Sorakan dan caci maki kalian adalah melodi kemenanganku."`,
        desc: `<strong>KEMENANGAN GILA:</strong> Kau bukan warga, bukan pula serigala. Tujuan tunggalmu hanyalah memanipulasi warga agar menuduh dan <strong>mengeksekusimu (gantung)</strong> di siang hari. Jika kau berhasil digantung, kau menang mutlak sendirian!`,
        cssVars: `--c-main: #E85D04; --c-alt: #9D0208; --r-frame: -1deg; --r-head: -5deg; --r-art: 3deg; --r-box: 2deg;`,
        headStyle: `background: var(--c-alt); box-shadow: 2.5px 2.5px 0 var(--c-main);`,
        bottomStyle: `border-color: var(--c-alt); box-shadow: -2.5px 2.5px 0 var(--c-main);`,
        subtitleStyle: `color: var(--c-alt);`,
        quoteStyle: `color: var(--c-alt);`,
        isBack: false
    },
    {
        id: "guardian",
        title: "Pelindung",
        subtitle: "ROLE: THE GUARDIAN // AEGIS",
        quote: `"Berlindunglah di balik bayanganku. Taring maut harus menghancurkanku sebelum menyentuhmu."`,
        desc: `<strong>PERISAI GAIB:</strong> Setiap malam, kau dapat <strong>memilih 1 pemain</strong> untuk dilindungi. Jika pemain tersebut diserang oleh serigala, ia akan selamat. Kau tak bisa melindungi orang yang sama 2 malam berturut-turut.`,
        cssVars: `--c-main: #1D3557; --c-alt: #E9C46A; --r-frame: 2deg; --r-head: 4deg; --r-art: -3deg; --r-box: -2deg;`,
        isBack: false
    },
    {
        id: "moderator",
        title: "Moderator",
        subtitle: "ROLE: MODERATOR // DEITY",
        quote: `"Aturan adalah absolut. Nyawa kalian hanyalah pion di atas papan permainanku."`,
        desc: `<strong>SANG PENGENDALI:</strong> Mengatur jalannya takdir di siang dan malam. Penentu kehidupan yang tak bisa disentuh oleh tipu daya serigala maupun warga.`,
        cssVars: `--c-main: #212F3D; --c-alt: #F1C40F; --r-frame: 0deg; --r-head: 0deg; --r-art: 0deg; --r-box: 0deg;`,
        isBack: false
    },
    {
        id: "alphawolf",
        title: "Alpha Wolf",
        subtitle: "ROLE: ALPHA WOLF // APEX",
        quote: `"Aku tidak membunuh sembarangan. Aku memilih siapa yang pantas menjadi kawanan kita."`,
        desc: `<strong>GIGITAN MENULAR:</strong> Sekali dalam permainan di malam hari, kau dapat memilih 1 pemain untuk tidak di bunuh, melainkan <strong>diubah menjadi Werewolf</strong>.`,
        cssVars: `--c-main: #4A0404; --c-alt: #FF4500; --r-frame: -2deg; --r-head: 3deg; --r-art: 2deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "cupid",
        title: "Cupid",
        subtitle: "ROLE: THE CUPID // MATCHMAKER",
        quote: `"Cinta sejati selalu abadi... terutama jika kalian mati berdua."`,
        desc: `<strong>PANAH ASMARA:</strong> Di malam pertama, tunjuk 2 pemain. Mereka akan menjadi <strong>Sepasang Kekasih</strong>. Jika salah satu mati, pasangannya akan langsung mati bunuh diri karena patah hati.`,
        cssVars: `--c-main: #D81159; --c-alt: #FFBC42; --r-frame: 2deg; --r-head: -3deg; --r-art: 4deg; --r-box: 2deg;`,
        isBack: false
    },
    {
        id: "witch",
        title: "Penyihir",
        subtitle: "ROLE: THE WITCH // ALCHEMIST",
        quote: `"Satu tetes untuk menghidupkan, satu tetes untuk mematikan. Pilihan mutlak di tanganku."`,
        desc: `<strong>RAMUAN GAIB:</strong> Kau memiliki <strong>1 Ramuan Penyembuh</strong> untuk menyelamatkan korban serigala, dan <strong>1 Ramuan Racun</strong> untuk membunuh seseorang. Keduanya hanya bisa dipakai sekali!`,
        cssVars: `--c-main: #3B1C54; --c-alt: #27AE60; --r-frame: -1.5deg; --r-head: 2deg; --r-art: -1deg; --r-box: 3deg;`,
        isBack: false
    },
    {
        id: "wizard",
        title: "Wizard",
        subtitle: "ROLE: THE WIZARD // ARCANIST",
        quote: `"Mantra kuno ini menuntut keseimbangan. Sayangnya bagimu, keseimbangan itu meminta nyawamu."`,
        desc: `<strong>SIHIR KUNO:</strong> Dapat memberikan perlindungan gaib kepada seseorang di malam hari, dan sekali dalam permainan dapat <strong>menghentikan seluruh kematian</strong> yang terjadi pada malam tersebut.`,
        cssVars: `--c-main: #2980B9; --c-alt: #F39C12; --r-frame: 1deg; --r-head: -2deg; --r-art: 2deg; --r-box: -1.5deg;`,
        isBack: false
    },
    {
        id: "veteran",
        title: "Veteran",
        subtitle: "ROLE: THE VETERAN // WAR HERO",
        quote: `"Medan perang mengajarkanku satu hal: jangan biarkan siapapun mendekati pintumu tanpa peluru di dadanya."`,
        desc: `<strong>BUNKER PERTAHANAN:</strong> Dapat mengaktifkan mode siaga sebanyak 3x di malam hari. Saat siaga, siapapun yang mengunjunginya (Serigala atau Warga) akan <strong>ditembak mati seketika</strong>.`,
        cssVars: `--c-main: #273746; --c-alt: #E74C3C; --r-frame: -2deg; --r-head: 1.5deg; --r-art: -2.5deg; --r-box: 2deg;`,
        isBack: false
    },
    {
        id: "bodyguard",
        title: "Bodyguard",
        subtitle: "ROLE: THE BODYGUARD // DEFENDER",
        quote: `"Nyawaku adalah tamengmu. Silakan serang dia, tapi kau harus melangkahiku terlebih dahulu."`,
        desc: `<strong>TANGKUTAN MAUT:</strong> Setiap malam, pilih 1 orang untuk dilindungi. Jika orang itu diserang, kaulah yang akan mati menggantikannya. Tapi sebagai bayarannya, sang penyerang akan <strong>mati berdarah bersamamu</strong>.`,
        cssVars: `--c-main: #34495E; --c-alt: #8C1C13; --r-frame: 2deg; --r-head: -1deg; --r-art: -2deg; --r-box: 1deg;`,
        isBack: false
    },
    {
        id: "priest",
        title: "Pendeta",
        subtitle: "ROLE: THE PRIEST // HOLY",
        quote: `"Cahaya suci akan membakar segala dosa dan kebohongan yang bersembunyi dalam kegelapan."`,
        desc: `<strong>AIR SUCI ASTRAL:</strong> Sekali dalam permainan (siang hari), lemparkan air suci ke seseorang. Jika dia Serigala, ia mati terbakar. Jika Warga, <strong>kau yang mati</strong> karena dosa membunuh orang tak bersalah.`,
        cssVars: `--c-main: #1F2833; --c-alt: #D4AF37; --r-frame: -1deg; --r-head: 2deg; --r-art: 1deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "mayor",
        title: "Mayor",
        subtitle: "ROLE: THE MAYOR // LEADER",
        quote: `"Suara kalian berharga, tapi suara dariku adalah hukum yang mutlak."`,
        desc: `<strong>VETO POLITIK:</strong> Di siang hari, kau dapat mengungkapkan peranmu secara terbuka. Mulai saat itu, suaramu (saat voting eksekusi) akan <strong>dihitung sebagai 2 suara</strong>.`,
        cssVars: `--c-main: #8E44AD; --c-alt: #F1C40F; --r-frame: 1deg; --r-head: 0.5deg; --r-art: 1deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "sheriff",
        title: "Sheriff",
        subtitle: "ROLE: THE SHERIFF // INVESTIGATOR",
        quote: `"Kota ini punya terlalu banyak rahasia kotor, dan aku akan mengupasnya satu per satu."`,
        desc: `<strong>PENYIDIKAN MALAM:</strong> Setiap malam, pilih 1 orang untuk diinvestigasi. Kau akan tahu secara pasti apakah orang itu "Bersih" (Warga) atau "Mencurigakan" (Serigala/Pembunuh).`,
        cssVars: `--c-main: #CA6F1E; --c-alt: #17202A; --r-frame: -1.5deg; --r-head: -2deg; --r-art: 2deg; --r-box: 1.5deg;`,
        isBack: false
    },
    {
        id: "villager_blacksmith",
        title: "Pandai Besi",
        subtitle: "ROLE: VILLAGER // BLACKSMITH",
        quote: `"Besi yang kutempa lebih jujur daripada manusia yang bersembunyi di balik senyum."`,
        desc: `<strong>PENDUDUK BIASA:</strong> Tidak memiliki kemampuan khusus di malam hari. Namun di siang hari, kau adalah garis pertahanan terakhir. Gunakan intuisimu untuk mengeksekusi serigala.`,
        cssVars: `--c-main: #4D5656; --c-alt: #F39C12; --r-frame: 1.5deg; --r-head: -1deg; --r-art: -2deg; --r-box: 2deg;`,
        isBack: false
    },
    {
        id: "villager_farmer",
        title: "Petani",
        subtitle: "ROLE: VILLAGER // FARMER",
        quote: `"Kami menanam gandum di siang hari, dan berdoa agar tak ditanam ke liang kubur di malam hari."`,
        desc: `<strong>PENDUDUK BIASA:</strong> Tidak memiliki kemampuan gaib. Senjatamu hanyalah hak suaramu saat musyawarah siang. Jangan sampai eksekusi jatuh pada warga tak bersalah.`,
        cssVars: `--c-main: #6E2C00; --c-alt: #2ECC71; --r-frame: -1deg; --r-head: 2.5deg; --r-art: 1.5deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "villager_merchant",
        title: "Pedagang",
        subtitle: "ROLE: VILLAGER // MERCHANT",
        quote: `"Kepercayaan adalah komoditas mahal di desa ini. Tunjukkan koinmu, atau tunjukkan wujud aslimu."`,
        desc: `<strong>PENDUDUK BIASA:</strong> Tidak memiliki kemampuan sakti. Namun ucapan dan opininya seringkali bernilai tinggi seperti emas yang ia timbang. Bijaklah dalam melakukan voting.`,
        cssVars: `--c-main: #2C3E50; --c-alt: #E67E22; --r-frame: 2deg; --r-head: -1deg; --r-art: 1.5deg; --r-box: -1.5deg;`,
        isBack: false
    },
    {
        id: "werewolf_stalker",
        title: "Serigala",
        subtitle: "ROLE: WEREWOLF // STALKER",
        quote: `"Kalian boleh mengunci pintu dengan rapat. Aku akan menyusup masuk dan merobek lehermu dari dalam kegelapan."`,
        desc: `<strong>INSTING PEMANGSA:</strong> Bangun setiap malam bersama kawanannya untuk memilih 1 mangsa. Berbaur dan berpura-puralah menjadi penduduk biasa di siang hari.`,
        cssVars: `--c-main: #641E16; --c-alt: #F1C40F; --r-frame: -2.5deg; --r-head: 2deg; --r-art: -1deg; --r-box: 2.5deg;`,
        isBack: false
    },
    {
        id: "lonewolf",
        title: "Lone Wolf",
        subtitle: "ROLE: LONE WOLF // BETRAYER",
        quote: `"Terlalu banyak anjing bernapas di desa ini. Taringku akan memastikan aku menjadi satu-satunya yang tersisa."`,
        desc: `<strong>SERIGALA PENGKHIANAT:</strong> Bermain bersama kawanan Serigala di malam hari. Namun tujuan utamamu adalah memenangkan permainan ini <strong>sendirian</strong>. Pastikan serigala lain dan seluruh warga musnah.`,
        cssVars: `--c-main: #1C2833; --c-alt: #F1C40F; --r-frame: -2deg; --r-head: 2.5deg; --r-art: -1.5deg; --r-box: 2deg;`,
        isBack: false
    },
    {
        id: "doppelganger",
        title: "Doppelganger",
        subtitle: "ROLE: DOPPELGANGER // SHAPESHIFTER",
        quote: `"Wajahmu yang cantik... keahlianmu yang hebat... mulai malam ini semuanya akan jadi rahasia milikku."`,
        desc: `<strong>PENIRU ULUNG:</strong> Di malam pertama, tunjuk 1 orang untuk diikuti. Jika orang itu mati, kau akan <strong>otomatis berubah mengambil peran dan fraksi orang tersebut</strong> hingga akhir permainan.`,
        cssVars: `--c-main: #34495E; --c-alt: #E74C3C; --r-frame: 2.5deg; --r-head: -2deg; --r-art: 2deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "serial_killer",
        title: "Pembunuh",
        subtitle: "ROLE: SERIAL KILLER // PSYCHOPATH",
        quote: `"Malam yang indah. Aku ingin mendengar jeritan yang lebih merdu malam ini."`,
        desc: `<strong>HAUS DARAH:</strong> Bermain untuk dirimu sendiri. Bangun setiap malam untuk membunuh 1 orang. Jika diserang Serigala, kau <strong>kebal</strong>, dan mereka tidak akan tahu peran aslimu. Menang jika kamulah orang terakhir yang hidup.`,
        cssVars: `--c-main: #641E16; --c-alt: #1a1a1a; --r-frame: 1deg; --r-head: -1.5deg; --r-art: 2deg; --r-box: -1deg;`,
        isBack: false
    },
    {
        id: "idiot",
        title: "Si Bodoh",
        subtitle: "ROLE: THE IDIOT // FOOL",
        quote: `"Hahaha! Kenapa kalian semua tegang dan marah-marah? Aku kan cuma sedang menyanyi lagu gembira!"`,
        desc: `<strong>MENGGELIKAN:</strong> Berperan sebagai warga biasa. Jika kau divote mati di siang hari, kau <strong>tidak tertuduh dan tidak amati</strong>. Sebaliknya, peranmu akan terungkap, namun kau tidak boleh melakukan voting lagi siang harinya.`,
        cssVars: `--c-main: #D35400; --c-alt: #9B59B6; --r-frame: -2.5deg; --r-head: 2deg; --r-art: -1deg; --r-box: 2.5deg;`,
        isBack: false
    },
    {
        id: "prince",
        title: "Pangeran",
        subtitle: "ROLE: THE PRINCE // ROYALTY",
        quote: `"Kalian berani mengeksekusiku? Aku adalah keturunan darah biru di desa kotor ini!"`,
        desc: `<strong>KEBAL EKSEKUSI:</strong> Jika divote mati saat eksekusi siang, kekebalan darah birumu terungkap dan <strong>kau tidak akan mati</strong>. Namun identitasmu akan ketahuan dan malam harinya kau menjadi mangsa empuk.`,
        cssVars: `--c-main: #2980B9; --c-alt: #F1C40F; --r-frame: 1.5deg; --r-head: -1deg; --r-art: -2deg; --r-box: 1.5deg;`,
        isBack: false
    },
    {
        id: "little_girl",
        title: "Gadis Kecil",
        subtitle: "ROLE: LITTLE GIRL // SNOOP",
        quote: `"Ssshh... aku melihat mereka dari balik selimut semalam... mata mereka berkilat merah menakutkan."`,
        desc: `<strong>MENGINTIP MALAM:</strong> Bangun setiap malam untuk mengintip diam-diam. Kau bisa melihat siapa Serigala. Namun, jika Serigala tanpa sengaja menunjukmu, kau akan mati seketika malam itu juga karena syok.`,
        cssVars: `--c-main: #E74C3C; --c-alt: #BDC3C7; --r-frame: -2deg; --r-head: 1.5deg; --r-art: 2deg; --r-box: -2deg;`,
        isBack: false
    },
    {
        id: "back",
        title: "NIGHTMARE",
        subtitle: "DO NOT OPEN",
        quote: "",
        desc: "",
        cssVars: "",
        isBack: true
    }
];
