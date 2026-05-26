import { AgencyProfile, ClientProfile, ProposalPricing, FullProposalStrategy } from "./types";

export const initialAgencyProfile: AgencyProfile = {
  name: "StayUp Creative",
  tagline: "Elevating Property Brands Through Sophisticated Digital Storytelling",
  description: "StayUp adalah agensi kreatif modern yang berdedikasi untuk menciptakan kampanye visual kelas atas yang tidak hanya memukau mata, tetapi juga mengonversi perhatian menjadi transaksi nyata. Kami menggabungkan estetika sinematik, strategi konten yang presisi, dan analisis audiens lokal untuk menghidupkan proyek real estate terkemuka.",
  logoColor: "#F5F1DF",
  keySpecialties: [
    "High-End Cinematography",
    "Japanese-inspired Aesthetic Art Direction",
    "Engaging Storytelling & Copywriting",
    "Macro & Micro Social Media Metrics Alignment",
    "Real Estate Digital Positioning Specialist"
  ],
  contactEmail: "hello@stayup.agency",
  contactPhone: "+62 811-4567-890",
  instagram: "@stayup.agency",
  website: "www.stayup.agency"
};

export const initialClientProfile: ClientProfile = {
  name: "Summarecon Mutiara Makassar",
  project: "Cluster Rinoka",
  developer: "PT Summarecon Agung Tbk.",
  city: "Makassar",
  description: "Rinoka adalah mahakarya hunian terbaru persembahan Summarecon Mutiara Makassar yang mengusung konsep modern tropical dengan sentuhan estetika Jepang (Zen-living). Cluster mewah ini dirancang khusus untuk memenuhi gaya hidup masyarakat modern Makassar yang produktif, membutuhkan keteduhan, kelengkapan fasilitas, kontrol teknologi cerdas, dan keamanan terintegrasi.",
  uspPoints: [
    "Desain Modern Tropical bernuansa Jepang yang minimalis nan elegan",
    "Smart Home System (Smart Lock, Smart Lighting, Intelligent Security)",
    "Fasilitas Club House Eksklusif (Kolam renang, gym, area hijau terpadu)",
    "Lokasi emas Makassar dengan akses langsung ke Tol Ir. Sutami dan Bandara Sultan Hasanuddin",
    "Reputasi Summarecon sebagai developer terpercaya dalam ketepatan waktu & kualitas bangunan premium"
  ]
};

export const initialPricing: ProposalPricing = {
  basePrice: 15500000, // IDR 15.5 Million
  discountRate: 10, // 10% Special collaboration discount if booked early
  addOns: [
    {
      id: "drone",
      name: "Cinematic Drone FPV Aerial Highlights",
      description: "Pengambilan video udara resolusi tinggi menggunakan FPV Drone untuk memperlihatkan skala cluster Rinoka dan kemegahan area terintegrasi Summarecon Mutiara Makassar secara dramatis.",
      price: 3500000,
      enabled: false
    },
    {
      id: "ads_setup",
      name: "Metas Ads Campaign Setup & Optimization",
      description: "Penyusunan target audiens spesifik investor Makassar, pembuatan materi iklan, setup budget, dan monitoring dashboard performa pasca posting selama 30 hari.",
      price: 4500000,
      enabled: false
    },
    {
      id: "voiceover",
      name: "Professional Studio Voice-Over & Talent Licensing",
      description: "Penyediaan voice-over artist premium bilingual (Bahasa & English) beserta talent profesional lokal Makassar untuk menjadi representasi visual di 5 konten video.",
      price: 2500000,
      enabled: false
    }
  ]
};

export const initialCampaignStrategy: FullProposalStrategy = {
  summaryOverview: "Kampanye 'Harmoni Kebahagiaan Baru di Rinoka' dirancang untuk menonjolkan perpaduan keindahan estetika Jepang yang tenang dengan gaya hidup dinamis modern Makassar. Melalui total paket produksi 15 konten feed terintegrasi (terdiri dari 10 Desain Feed & 5 Video Reels sinematik) ditambah 10 Instagram Stories interaktif, StayUp akan mengemas visual properti premium ini secara eksklusif guna membangun reputasi premium serta menjaring leads prospek secara langsung.", // Narrative overview
  campaignKPIs: {
    estimatedReach: "95,000 - 150,000 Impressions",
    engagementRate: "7.2% Target Engagement",
    kpiGoalDescription: "Mengoptimalkan reels algoritmik Makassar, micro-targeting visual modern minimalis, dan polling sticker interaktif untuk memicu direct messages (DM) prospek."
  },
  designs: [
    {
      id: 1,
      title: "The Art of Zen-Living: Selamat Datang di Rinoka",
      format: "Carousel",
      visualConcept: "Tone warna Teal (#355351) dipadukan dengan aksen emas halus. Slide pertama menampilkan gambar fasad depan rumah Rinoka dengan pencahayaan golden-hour hangat, layout asimetris elegan mirip majalah arsitektur.",
      caption: "Membawa kedamaian rumah impian Jepang modern ke tengah hangatnya kota Makassar. 🌸\n\nMemperkenalkan Cluster Rinoka, harmoni sempurna antara Zen-minimalism dengan gaya hidup tropis yang asri. Dirancang khusus bagi Anda yang menghargai ketenangan berbalut kemewahan.\n\nKira-kira, bagian rumah mana yang paling penting untuk menyambut kepulangan Anda? Geser untuk mengeksplorasi.\n\n#RinokaSummarecon #SummareconMutiaraMakassar #StayUp #JapaneseZenLiving",
      tacticGoal: "Branding & First Impression (High Shareable)",
      slideBreakdown: [
        "Slide 1: Cover Fasad Megah Rinoka - 'Keseimbangan Jiwa Dimulai dari Rumah'",
        "Slide 2: Detail Ruang Tamu dengan Pencahayaan Alami Tinggi",
        "Slide 3: Area inner courtyard tersembunyi untuk relaksasi keluarga",
        "Slide 4: Keuntungan Cluster Terbuka berpagar ganda"
      ]
    },
    {
      id: 2,
      title: "Konektivitas Emas Makassar: Bandara & Tol dalam Genggaman",
      format: "Single Feed",
      visualConcept: "Infografis peta bergaya minimalis arsitektur, bukan peta Google biasa. Menunjukkan ring jalan tol, ikon bandara Sultan Hasanuddin, dan kemudahan akses instan.",
      caption: "Waktu Anda terlalu berharga untuk dihabiskan di jalan. ⏱️\n\nBerlokasi strategis di simpul pertumbuhan Makassar Timur, Cluster Rinoka memberi Anda akses langsung menuju Gerbang Tol Ir. Sutami dan hanya hitungan menit menuju Bandara Internasional Sultan Hasanuddin.\n\nKombinasi sempurna mobilitas perkotaan yang cepat dengan kedamaian hunian privat.\n\nHubungi marketing kami sekarang melalui Link di Bio untuk Private Preview.\n\n#SummareconMakassar #RinokaConnectivity #PropertyInvestasi #MakassarKeren",
      tacticGoal: "Edukasi USP Properti (Saveable)",
      slideBreakdown: [
        "Desain Single Feed berkecepatan tinggi yang merangkum poin 'Akses 5 Menit ke Gerbang Tol' & '10 Menit ke Bandara'."
      ]
    },
    {
      id: 3,
      title: "Smart Home, Cerdas & Aman untuk Produktivitas Tanpa Khawatir",
      format: "Carousel",
      visualConcept: "Foto close-up berestetika tinggi yang menunjukkan interaksi tangan elegan menyentuh Keyless Smart Doorlock dan mengontrol pencahayaan via smartphone.",
      caption: "Kendali penuh rumah Anda berada di ujung jari, di mana pun Anda berada. 📱🔒\n\nSetiap unit di Cluster Rinoka dipersenjatai dengan fitur Smart Home System premium terintegrasi:\n🔐 Smart Door Lock untuk keamanan optimal\n💡 Intelligent Wireless Lighting Controls\n📹 Camera monitoring terhubung handphone\n\nTinggal dengan nyaman, bepergian tanpa was-was.\n\nTulis pendapatmu tentang teknologi rumah masa kini di kolom komentar!\n\n#RinokaSmartHome #SmartLiving #SummareconMutiara #StayUpTech",
      tacticGoal: "Engagement & Tech USP Demonstration",
      slideBreakdown: [
        "Slide 1: Close-up Smart Door Lock dengan aksen cahaya hangat",
        "Slide 2: Diagram interaktif konektivitas smartphone ke sistem rumah",
        "Slide 3: Keuntungan efisiensi energi berkat automation lighting",
        "Slide 4: Call to Action: 'Ketik RINOKA untuk mengunduh brosur fitur lengkap'"
      ]
    },
    {
      id: 4,
      title: "The Club House: Fasilitas Bintang Lima di Halaman Belakangmu",
      format: "Carousel",
      visualConcept: "Foto rendering atau realisasi 3D dari infinity pool yang asri, gym ruangan kaca estetik menghadap taman Jepang yang rimbun.",
      caption: "Bayangkan pagi hari dimulai dengan berenang segar di air jernih, dilanjutkan dengan sesi olahraga privat dengan pemandangan taman Zen yang meneduhkan. 🏊‍♂️🧘‍♀️\n\nDi Cluster Rinoka, ini bukanlah liburan akhir pekan—ini adalah rutinitas harian Anda. Club House Eksklusif hadir eksklusif hanya untuk para penghuni Rinoka.\n\nSatu langkah dari pintu rumah Anda menuju pemulihan stamina yang hakiki.\n\n#RinokaClubhouse #PremiumFacilities #SummareconMutiara #MakassarLifestyle",
      tacticGoal: "Lifestyle Positioning (Desire Building)",
      slideBreakdown: [
        "Slide 1: Pemandangan aerial area Club House & Kolam Renang biru bersih",
        "Slide 2: Indoor Gym premium modern dengan peralatan mutakhir",
        "Slide 3: Kids Playground asri, aman, yang dirancang ramah anak",
        "Slide 4: RSVP Invitation untuk kunjungan langsung ke lokasi"
      ]
    },
    {
      id: 5,
      title: "Investasi Tanpa Cemas: Mengapa Nama Summarecon Adalah Jaminan",
      format: "Single Feed",
      visualConcept: "Foto potret profesional CEO/arsitek berwibawa didampingi teks tebal nan elegan bertuliskan: 'Kualitas, Komitmen, dan Nilai Investasi yang Terus Bertumbuh'.",
      caption: "Membeli properti bukan hanya tentang membeli bata dan semen, melainkan tentang memilih partner masa depan yang bisa dipercaya. 🤝✨\n\nSelama puluhan tahun, Summarecon Agung Tbk. telah membuktikan integritasnya membangun kota mandiri bergengsi. Di Makassar, komitmen pembangunan tepat waktu, sertifikat aman, dan apresiasi nilai investasi tinggi diteruskan di Cluster Rinoka.\n\nInvestasi teraman adalah investasi bersama developer bereputasi dunia.\n\n#SummareconDeveloper #TrustFactor #RinokaMakassar #PropertyInvestasi",
      tacticGoal: "Trust Building & Brand Authority",
      slideBreakdown: [
        "Desain Single Feed bernuansa korporat premium-minimalis yang melambangkan kemantapan finansial dan komitmen developer."
      ]
    },
    {
      id: 6,
      title: "Lantai Bawah Tanpa Sekat: Area Komunal Keluarga Serbaguna",
      format: "Carousel",
      visualConcept: "Layout arsitektur render 3D cross-section yang asri menyajikan transisi lembut dari dry kitchen menuju ruang makan dan area TV keluarga, memanfaatkan pencahayaan silang.",
      caption: "Ruang yang bernapas. Konsep 'Open Plan Living' di lantai bawah Rinoka menghilangkan batasan kaku dinding, menciptakan aliran udara silang dan pencahayaan alami yang melimpah. 🌬️✨\n\nTempat terbaik untuk merayakan tawa anak-anak, makan malam hangat, hingga sudut kerja produktif tipe WFH yang bebas pengap.\n\nRumah menawan untuk ikatan keluarga yang mendalam.\n\n#ZenArchitecture #OpenPlanDesign #IndoorOutdoorLiving #RinokaLayout",
      tacticGoal: "Edukasi Layout Interior",
      slideBreakdown: [
        "Slide 1: Showroom Living Room yang menyatu dengan Dry Kitchen",
        "Slide 2: Fokus pada pintu geser kaca besar menghadap ke taman samping",
        "Slide 3: Penjelasan teknis Cross Ventilation (Sirkulasi udara silang)",
        "Slide 4: CTA: Jual kenyamanan hidup sehat"
      ]
    },
    {
      id: 7,
      title: "Japanese Modern Master Bedroom: Oasis Keheningan Pribadi",
      format: "Carousel",
      visualConcept: "Bedding berestetika linen putih bersih hangat didampingi panel kayu cedar cokelat alami, jendela lebar menyajikan pemandangan hijau asri Makassar pagi hari.",
      caption: "Di sinilah hari sibuk Anda berakhir dengan keheningan, dan hari baru dimulai dengan ketenangan. 🛏️🌅\n\nMaster Bedroom di Cluster Rinoka dirancang sebagai oasis pribadi. Layout simetris ala Jepang, pencahayaan indirect yang menangkan mata, serta ruang wardrobe lapang terintegrasi.\n\nKualitas tidur terbaik adalah rahasia performa produktif Anda esok hari.\n\n#MasterBedroomIdea #ZenStyleBedroom #RinokaInterior #SummareconMutiara",
      tacticGoal: "Emotional Desire & Interior Highlight",
      slideBreakdown: [
        "Slide 1: Sudut tempat tidur Master Bedroom dengan aksen cahaya ambient",
        "Slide 2: Walk-In Closet vanity mirror terintegrasi",
        "Slide 3: Kamar mandi dalam dengan saniter berkualitas tinggi",
        "Slide 4: Swipe up untuk schedule janji temu dengan Property Advisor"
      ]
    },
    {
      id: 8,
      title: "Summarecon Mutiara Makassar: Masa Depan Baru Kota Daeng",
      format: "Single Feed",
      visualConcept: "Visual satelit rendering atau ilustrasi wilayah yang memposisikan Mutiara Makassar sebagai jantung baru kota terpadu, lengkap dengan icon area komersial di sekeliling cluster.",
      caption: "Makassar Timur sedang bertransformasi pesat, dan Anda bisa berada di episentrumnya. 🗺️🚀\n\nSebagai kota mandiri modern terintegrasi pertama di Makassar, Summarecon Mutiara Makassar menyatukan hunian premium Rinoka dengan pusat perbelanjaan, F&B komersial terkemuka, sekolah, dan perkantoran.\n\nBukan sekadar kompleks perumahan biasa, ini adalah cetak biru masa depan kehidupan Anda.\n\n#MakassarDevelopment #SummareconTownship #Propertyinvestment #MakassarTimur",
      tacticGoal: "Township Scale & Value Positioning",
      slideBreakdown: [
        "Visual tunggal infografis prestisius berskala raksasa, memperlihatkan integrasi kawasan masa depan."
      ]
    },
    {
      id: 9,
      title: "Spesifikasi Kokoh Tanpa Kompromi: Detil Kecil, Dampak Besar",
      format: "Carousel",
      visualConcept: "Latar teal tua dengan detail macro material bangunan: ubin homogen mewah, kusen alumunium powder coating kokoh anti-bising, dan pondasi kokoh.",
      caption: "Keindahan sejati sebuah rumah terletak pada apa yang tidak kasat mata namun dirasakan kekuatannya puluhan tahun mendatang. 🏗️🏠\n\nStayUP membawa Anda melihat detail spesifikasi teknik material premium Rinoka:\n💎 Homogeneous Tile ukuran besar untuk kesan lapang\n🪵 Panel dinding bertekstur kayu tahan rayap & cuaca\n🧬 Atap baja ringan berkepadatan tinggi\n\nKarena rumah impian Anda layak mendapatkan pertahanan terbaik.\n\n#MaterialSpec #RinokaQuality #SummareconAgung #BuildToLast",
      tacticGoal: "Rational Quality Validation (Buying Decision Trigger)",
      slideBreakdown: [
        "Slide 1: Close up Homogeneous Tile & panel kayu estetik",
        "Slide 2: List poin spesifikasi sipil konstruksi presisi tinggi",
        "Slide 3: Penjelasan garansi kebocoran penyerahan Summarecon",
        "Slide 4: Hubungi Marketing Gallery"
      ]
    },
    {
      id: 10,
      title: "Kesempatan Terakhir: Unit Terbatas Eksklusif Cluster Rinoka",
      format: "Single Feed",
      visualConcept: "Tipografi modern minimalis yang berani berbayang emas dengan background gelap: 'Hanya Tersisa Sedikit Unit untuk Launching Tahap Pertama'. Sangat elegan tanpa murahan.",
      caption: "Kesempatan tidak datang dua kali untuk sebuah mahakarya. ⏳✨\n\nSesi Private Preview Cluster Rinoka disambut luar biasa tinggi oleh para antusias properti Sulawesi Selatan. Kini unit utama dengan letak strategis mendekati kapasitas penuh.\n\nAmankan posisi masa depan keluarga Anda saat ini sebelum harga tahap berikutnya mengalami penyesuaian.\n\n📞 Klik link di bio marketing untuk mengamankan nomor antrean Unit prioritas sekarang!\n\n#LimitedOffer #RinokaLaunch #SummareconMutiara #ExclusiveProperty",
      tacticGoal: "Urgency and Conversion Call-To-Action (Leads)",
      slideBreakdown: [
        "Desain Single Feed visual tipografik ultra-elegan bernilai tinggi yang langsung bernuansa eksklusivitas 'Final Offering' ."
      ]
    }
  ],
  videos: [
    {
      id: 1,
      title: "The Silent Morning Walking Tour (ASMR Showcase)",
      hook: "Bunyi gemerincing bel angin Jepang (Windchime) disusul ketukan kayu tipis saat melangkah di lantai vinyl Rinoka yang estetik (Detik 1-3).",
      storyboard: "Video dimulai tanpa musik bising, mengandalkan ASMR alami: pintu geser terbuka, kopi dituang di dapur minimalis, mentari menyinari ruang tamu kaca lebar, dan langkah kaki keluar ke taman inner courtyard. Teks minimalis mengambang di layar: 'Ketenangan Jepang di Makassar'. Diakhiri dengan logo Rinoka × StayUP.",
      audio: "Ambient sounds (burung berkicau, angin asri) + Lofi piano instrumental lembut bertempo lambat.",
      visualDirection: "Shot cinematic slow-motion menggunakan stabilizer gimbal, perlahan mengikuti aktivitas talent dari belakang, memanfaatkan dynamic range cahaya alami pagi hari."
    },
    {
      id: 2,
      title: "Transition Day to Dusk: Eksotika Fasad Desain Jepang",
      hook: "Transisi instan/perubahan sekejap (snap transition) fasad rumah dari siang benderang menjadi malam bertabur lampu sorot warm-white yang menawan (Detik 1-2).",
      storyboard: "Memfokuskan keindahan simetris fasad modern tropical Rinoka. Scene 1: Fasad sore hari berawan. Scene 2 (Snap transisi): Tepat di malam hari dengan tata lampu eksterior menyala indah. Dilanjutkan dengan quick tour 15 detik menunjukkan ruang keluarga malam hari yang sangat homey.",
      audio: "Elegant cinematic deep synth pad, berkesan prestisius dan misterius sekaligus menenangkan.",
      visualDirection: "Menggunakan tripod kokoh di titik koordinat sama. Teknik masking transisi warna langit dari biru terang menuju jingga lalu malam gelap secara mulus."
    },
    {
      id: 3,
      title: "Uji Nyali Mobilitas: Dari Tol Ir. Sutami ke Rinoka (POV Map Run)",
      hook: "Visual cepat hyperlapse berkendara dari gerbang tol bandara langsung masuk ke bundaran ikonik Summarecon Mutiara Makassar (Detik 1-3).",
      storyboard: "Menggunakan visual POV pengendara mobil berestetika tinggi. Menampilkan petunjuk waktu di sudut bawah layar (0 hingga 5 menit) untuk membuktikan posisi strategis Rinoka. Menyelipkan info spot komersial rute jalan utama.",
      audio: "Upbeat modern hip-hop lofi dengan ketukan drum tegas namun santai, bergaya vlog modern.",
      visualDirection: "Pasang action-cam di dashboard mobil atau windshield beresolusi 4K, kecepatan video dimodifikasi (time-warp) diselingi transisi whip-pan saat mendekati kluster."
    },
    {
      id: 4,
      title: "Smart Home System Test: Hidup dalam Kendali Jari",
      hook: "Talent mengetuk layar Apple Watch/Smartphone, lampu rumah menyala redup romantis secara bersamaan di latar belakang (Detik 1-3).",
      storyboard: "Vlog interaktif pendek berdurasi 30 detik. Host StayUP memperagakan kemudahan: 1) Masuk rumah tap-fingerprint tanpa kunci, 2) Menyalakan AC & TV via voice command/apps, 3) Monitoring kondisi depan rumah dari kasur kamar tidur.",
      audio: "Future digital pop synth bernuansa cerdas, tech-savvy, energik, dan optimis.",
      visualDirection: "Banyak memakai teknik jump-cuts kreatif dengan detail macro yang tajam pada layar HP dan reaksi gadget di rumah secara responsif."
    },
    {
      id: 5,
      title: "Unboxing Hunian Impian: Reaksi Jujur Milenial Makassar",
      hook: "Ekspresi terkesima pasangan muda lokal Makassar saat diajak membuka pintu depan dan melihat betapa tingginya ceiling (langit-langit) rumah Rinoka (Detik 1-3).",
      storyboard: "Mengikuti perjalanan emosional sepasang calon pembeli menjelajahi show unit. Menyoroti rasa kagum mereka pada luasnya kamar anak, sirkulasi udara sejuk, dan area backyard yang pas untuk berkumpul. Diakhiri ajakan untuk daftar Private Preview.",
      audio: "Acoustic ukulele & warm handpan rhythm yang mengundang keakraban, ramah, dan membumi.",
      visualDirection: "Vibe hand-held camera yang natural (reels hand-phone style premium) untuk memberi kesan ulasan jujur organik tanpa rekayasa kaku."
    }
  ],
  stories: [
    {
      id: 1,
      title: "Interactive Poll: Modern Tropical vs Modern Classic",
      creativeIdea: "Menampilkan dua kolase desain rumah, menanyakan selera arsitektur audiens Makassar.",
      sticker: "Interactive Poll Sticker ('Tropical Zen 🎋' vs 'Modern Classic 🏛️')",
      cta: "Sentuh pilihanmu & amati mana yang paling diminati warga Makassar!"
    },
    {
      id: 2,
      title: "Location Proximity Quiz: Tebak Waktu Menuju Bandara",
      creativeIdea: "Visual interaktif dari gerbang Rinoka menuju Bandara Sultan Hasanuddin.",
      sticker: "Quiz Sticker (Berapa menit? A. 30 menit, B. 10 menit, C. 45 menit)",
      cta: "Ketuk jawaban benar! Clue: Lebih dekat dari yang Anda bayangkan."
    },
    {
      id: 3,
      title: "Architectural Detail: Slider Reaction on Bathroom Aesthetic",
      creativeIdea: "Menampilkan keindahan kamar mandi Rinoka dengan sliding glass dan shower premium.",
      sticker: "Heart-eyes Reaction Slider Sticker (😍)",
      cta: "Geser slider ini seberapa ingin kamu memiliki kamar mandi seestetik ini!"
    },
    {
      id: 4,
      title: "Launch Day Countdown",
      creativeIdea: "Halaman hitung mundur pendaftaran Private Preview launching tahap pertama cluster Rinoka.",
      sticker: "Countdown Timer Sticker ('Rinoka Stage 1 Launch')",
      cta: "Ketuk 'Remind Me' agar tidak ketinggalan kuota terbatas launching perdana!"
    },
    {
      id: 5,
      title: "Q&A Session: Ask Marketing Anything About Down Payment",
      creativeIdea: "Latar video sinematik livingroom Rinoka dengan ajakan bertanya mengenai persentase DP atau skema KPR.",
      sticker: "Question Box Sticker ('Tanya apa saja tentang skema pembayaran Rinoka? 📝')",
      cta: "Ketik pertanyaanmu di box ini, Property Advisor kami akan langsung menjawab via DM!"
    },
    {
      id: 6,
      title: "The Neighborhood Highlight: Fasilitas Terdekat",
      creativeIdea: "Tampilan grid logo sekolah, F&B komersial, dan pusat belanja yang sudah bergabung di Summarecon Mutiara Makassar.",
      sticker: "Link Sticker ('Eksplor Peta Kawasan')",
      cta: "Klik link untuk melihat perkembangan masterplan kota mandiri Summarecon Mutiara."
    },
    {
      id: 7,
      title: "Behind The Scenes: Shooting Day with StayUP Team",
      creativeIdea: "Video candid tim videografer StayUP mengarahkan kamera profesional/FPV drone di area taman Rinoka.",
      sticker: "Slider Sticker ('Vibe shooting tim StayUP 🎬')",
      cta: "Menciptakan karya terbaik untuk branding terbaik. Tap untuk intip prosesnya."
    },
    {
      id: 8,
      title: "Virtual Handover Trust Factor: Testimoni Penghuni Terdahulu",
      creativeIdea: "Kutipan senang dari keluarga Makassar yang sudah melakukan serah terima kunci unit cluster terdahulu tepat waktu.",
      sticker: "Reaction Tap Sticker (🙌)",
      cta: "Komitmen Summarecon terbukti nyata di Makassar. Tap untuk memberi apresiasi."
    },
    {
      id: 9,
      title: "Exclusive Privilege Promo Alert",
      creativeIdea: "Desain poster digital yang merangkum Free biaya KPR, Free AC tiap kamar tidur, dan subsidi service charge khusus pendaftar minggu ini.",
      sticker: "DM Trigger Tag ('DM kata \"PROMO\" sekarang')",
      cta: "Kirim pesan berisi 'PROMO' untuk langsung terhubung dengan admin promo kami."
    },
    {
      id: 10,
      title: "CTA: Jendela Hubungi Kami",
      creativeIdea: "Video estetik pintu depan Rinoka perlahan terbuka menyambut kedatangan Anda secara hangat.",
      sticker: "Interactive Custom Link Link Sticker ('Booking Jadwal Visit')",
      cta: "Kami siap menyambut Anda. Klik link untuk mengamankan slot kunjungan privat showroom Rinoka."
    }
  ]
};
