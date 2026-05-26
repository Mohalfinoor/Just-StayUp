import React, { useState } from "react";
import {
  Sparkles,
  Award,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle,
  Home,
  Smartphone,
  Layers,
  Video,
  Instagram,
  Plus,
  Check,
  Percent,
  MapPin,
  Image as ImageIcon,
  Copy,
  ExternalLink,
  DollarSign,
  Briefcase,
  AlertCircle,
  TrendingUp,
  Sliders,
  Users,
  Eye,
  Activity,
  UploadCloud,
  EyeOff,
  ChevronRight,
  RefreshCw,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import { initialAgencyProfile, initialClientProfile } from "./data";

// @ts-ignore
import yourFutureHome from "./assets/images/Your Future Home.png";
// @ts-ignore
import stayupLogo from "./assets/images/stayup_logo_1779803920242.png";

export default function App() {
  // Mockup customizer states - stores pasted URLs or falls back to elegant placeholders
  // ==========================================
  // TEMPAT UNTUK MELETAKKAN GAMBAR MOCKUP ANDA:
  // Anda dapat memasukkan import gambar di bagian paling atas file ini,
  // lalu letakkan nama variabel import tersebut atau tulis langsung string URL / path gambarnya di field 'image' di bawah ini:
  // Contoh jika memakai URL: image: "https://domain.com/gambar-anda.jpg"
  // Contoh jika memakai file lokal (setelah diimport di atas): image: namaVariabelGambar
  // ==========================================
  const [mockupFeeds, setMockupFeeds] = useState([
    {
      id: 1,
      title: "Fasad Utama Rinoka 3D Render",
      format: "Single Post - Hero Campaign",
      image: yourFutureHome, // <-- MASUKKAN GAMBAR UNTUK POST #1 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Visual promosi premium kolaborasi Summarecon & Sumitomo Forestry. Headline: 'Your Future Home Begins at Rinoka' dengan tagline 'Live Fully, Live Fullied'. Menyertakan penawaran cicilan mulai Rp 8,8 Jt/bulan, ornamen daun Zen segar melayang, dan kontak hubungi kami di footer.",
      dimensions: "1080 x 1080 px"
    },
    {
      id: 2,
      title: "Konektivitas Emas & Aksesibilitas Tinggi",
      format: "Single Post",
      image: "", // <-- MASUKKAN GAMBAR UNTUK POST #2 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Peta infografis arsitektur minimalis yang menunjukkan kedekatan strategis 10 menit menuju Bandara Sultan Hasanuddin dan akses tol langsung untuk mobilitas harian yang optimal.",
      dimensions: "1080 x 1080 px"
    },
    {
      id: 3,
      title: "Integrasi Teknologi Smart Home",
      format: "Carousel - Slide 2",
      image: "", // <-- MASUKKAN GAMBAR UNTUK POST #3 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Close-up interaksi modern dengan sistem keyless smart door lock yang aman dan lampu otomatis terintegrasi. Headline: 'Kenyamanan Pintar dan Proteksi Maksimal dalam Genggaman.'",
      dimensions: "1080 x 1080 px"
    }
  ]);

  // Pricing calculator states
  const basePrice = 2500000; // Rp 2.500.000 package
  const [includeMetaAdsAddon, setIncludeMetaAdsAddon] = useState(false);
  const metaAdsPrice = 1000000; // Opsional tambahan 1 JT jika ingin ads management
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [activeLightboxTitle, setActiveLightboxTitle] = useState<string | null>(null);
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Helper formatting for Rupiah
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.log("Print error or blocked in iframe sandbox", e);
    }
    setShowPrintModal(true);
  };

  const totalInvestment = basePrice + (includeMetaAdsAddon ? metaAdsPrice : 0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxImage(null);
        setActiveLightboxTitle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-gold/30 selection:text-brand-teal-dark pb-0 print:pb-0">
      
      {/* Header component */}
      <div className="print:hidden sticky top-0 z-50 bg-white">
        <Header onPrint={handlePrint} />
      </div>

      {/* Main Content Container stretching full width with elegant inner content bounds */}
      <main className="w-full bg-[#eeeeee] pt-16 pb-0 mt-0 relative z-10 space-y-24">
        
        {/* SECTION 1: BENEFIT PENAWARAN (Keuntungan Utama Sinergi) */}
        <section id="benefits" className="scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-300/20 relative overflow-hidden shadow-sm">
            
            {/* Context Badge explaining local construction realities */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-[#E9EFEA] border border-[#355E4B]/10 rounded-2xl p-4 mb-10 text-xs text-brand-teal max-w-4xl font-sans">
              <span className="font-mono bg-[#355E4B] text-[#FAF8F0] font-bold px-2.5 py-1 rounded-lg shrink-0 text-[10px] tracking-wide text-center uppercase">
                LATAR BELAKANG STRATEGIS
              </span>
              <p className="font-light leading-relaxed text-justify text-slate-750">
                Dalam rangka mengoptimalkan fase pra-penjualan (<em className="font-medium">pre-selling</em>) unit <strong className="font-semibold">Cluster Rinoka</strong> yang saat ini sedang dalam proses perampungan pembangunan fisik, StayUp menghadirkan solusi pemasaran berbasis visual 3D render yang interaktif dan mewah. Paket produksi kami dirancang komprehensif mencakup total <strong className="font-semibold">15 Konten Feed Utama (10 Post Desain & 5 Video Cinematic Reels) ditambah 10 Instagram Stories</strong> seharga <strong className="font-semibold">2,5 Juta nett</strong>. Sebagai pratinjau awal, galeri di bawah menyajikan simulasi <strong className="font-semibold">3 Desain Feed</strong> utama sebagai representasi langsung hasil akhir produksi visual kami.
              </p>
            </div>

            {/* Title Block */}
            <div className="space-y-4 max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-5xl font-serif font-light leading-tight text-slate-900 tracking-tight">
                Mentranslasikan Desain <span className="text-brand-teal italic font-light font-serif">3D Modeling</span> Menjadi Magnet Pemasaran Digital
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed text-justify">
                StayUp memadukan keindahan arsitektur berkonsep modern tropical Zen dari Summarecon Mutiara Makassar dengan narasi pesan (copywriting) premium yang menyentuh keinginan emosional dan prestise keluarga mapan di Sulawesi Selatan.
              </p>
            </div>

            {/* Grid of Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Layers className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Optimalisasi Visual 3D</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Kami mengolah blueprint arsitektural dan file render 3D statis menjadi tata letak visual media sosial yang hidup, dinamis, serta memberikan perspektif spasial yang nyata bagi calon pembeli.
                </p>
              </div>

              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Strategi Pra-Penjualan Eksklusif</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Membangun prestise dan urgensi pemasaran Cluster Rinoka sejak dini. Pola komunikasi kami dirancang khusus demi menjaring minat reservasi unit secara eksklusif sebelum pembukaan resmi unit contoh.
                </p>
              </div>

              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Smartphone className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Daya Tarik Interaktif Stories</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Memaksimalkan fitur interaktif Instagram Stories (Polling, Slider, Pertanyaan) untuk memicu tanggapan dan percakapan organik, sehingga sistem algoritma meningkatkan jangkauan akun secara berkelanjutan.
                </p>
              </div>

              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Estetika Tropis Jepang Premium</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Perpaduan desain minimalis, nuansa alam yang tenang, serta sentuhan modern yang diselaraskan khusus untuk memenuhi ekspektasi dan gaya hidup elite pengusaha maupun eksekutif Sulawesi Selatan.
                </p>
              </div>

              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Clock className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Efisiensi Kampanye Tinggi</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Menyajikan standar pengerjaan materi iklan berkualitas tinggi khas agensi profesional papan atas melalui nilai investasi terpadu yang kompetitif untuk jaminan waktu peluncuran yang tepat waktu.
                </p>
              </div>

              <div className="relative bg-white border border-slate-100/80 p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(53,94,75,0.06),_0_5px_15px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-10px_rgba(53,94,75,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-2.5 transition-all duration-500 ease-out space-y-4 cursor-pointer group">
                <div className="w-10 h-10 bg-brand-teal text-[#FAF8F0] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle className="w-5 h-5 text-[#FAF8F0]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 group-hover:text-brand-teal transition-colors">Infrastruktur Peninjauan Praktis</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed text-justify">
                  Sistem presentasi interaktif kami dirancang agar tim manajemen Rinoka dapat meninjau tata letak visual materi promosi dalam perspektif media sosial secara komprehensif dan nyaman.
                </p>
              </div>

            </div>

          </div>
          </div>
        </section>

        {/* SECTION 2: GALERI MOCKUP KONTEN (Sediakan tempat mockup mandiri) */}
        <section id="mockups" className="scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="bg-[#355E4B] rounded-3xl p-8 sm:p-12 border border-[#FAF8F0]/15 space-y-12 shadow-[0_30px_60px_-15px_rgba(53,94,75,0.4)]">
            
            <div className="border-b border-[#FAF8F0]/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-serif font-light text-[#FAF8F0]">
                  Ruang Integrasi & Galeri Pratinjau Desain Rinoka
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F0]/80 font-light w-full leading-relaxed text-justify">
                  Secara keseluruhan, rancangan produksi utama kami mencakup total <strong className="text-[#FAF8F0] font-bold">15 Konten Feed (10 Desain Feed & 5 Video Cinematic Reels) ditambah 10 Instagram Stories</strong>. Di bawah ini, kami menyajikan pratinjau terhadap <strong className="text-[#FAF8F0] font-bold">3 Pilar Desain Feed Utama</strong> sebagai representasi estetika hasil karya kami.
                </p>
              </div>
            </div>

            {/* Sub-section A: Grid Feed & Carousels (3 Posts) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 items-start">
                  <div className="p-1 px-2.5 bg-[#FAF8F0] text-[#355E4B] font-mono font-bold rounded text-xs select-none w-fit">FEED</div>
                  <h4 className="font-serif text-lg font-medium text-[#FAF8F0]">3 Rencana Mockup Grid / Carousel Feed</h4>
                </div>
                <span className="text-[10px] text-[#FAF8F0]/65 font-mono">Size Ratio 1:1</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockupFeeds.map((feed) => (
                  <div key={feed.id} className="bg-[#213C30] border border-[#FAF8F0]/10 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
                    <div>
                      {/* Interactive Visual Canvas Container */}
                      <div className="relative bg-[#1a3026] aspect-square flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#FAF8F0]/10">
                        {feed.image ? (
                          <div 
                            className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden group/img"
                            onClick={() => {
                              const imgPath = feed.image.startsWith("src/") ? "/" + feed.image : feed.image;
                              setActiveLightboxImage(imgPath);
                              setActiveLightboxTitle(feed.title);
                            }}
                          >
                            <img 
                              src={feed.image.startsWith("src/") ? "/" + feed.image : feed.image} 
                              alt={feed.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" 
                              referrerPolicy="no-referrer"
                            />
                            {/* Zoom/Expand Overlay */}
                            <div className="absolute inset-0 bg-[#162720]/75 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 backdrop-blur-sm">
                              <div className="bg-[#FAF8F0] text-[#213C30] p-2 rounded-full shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                                <Eye className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] font-sans text-[#FAF8F0] tracking-wider uppercase font-bold mt-1">
                                Klik untuk Ukuran Penuh
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 relative z-10 flex flex-col items-center p-6">
                            <ImageIcon className="w-8 h-8 text-[#FAF8F0]/25 group-hover:scale-110 transition-transform duration-300" />
                            <span className="inline-block bg-[#FAF8F0]/10 text-[#F5C443] text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                              Soon
                            </span>
                          </div>
                        )}
                        <div className="absolute top-2 left-2 bg-[#213C30]/90 border border-[#FAF8F0]/10 text-[#FAF8F0] font-mono text-[9px] px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none z-20">
                          Post #{feed.id}
                        </div>
                      </div>

                      {/* Content details and description */}
                      <div className="p-5 space-y-3 pb-6 border-t border-[#FAF8F0]/10 mt-auto">
                        <div className="text-[9px] font-mono text-[#F5C443] uppercase tracking-wider font-semibold">
                          {feed.image ? feed.format : "Soon"}
                        </div>
                        <p className="text-xs text-[#FAF8F0]/85 font-light leading-relaxed min-h-[48px]">
                          {feed.image ? feed.concept : "Materi konsep kreatif untuk pilar desain konten ini sedang dalam penyelarasan visual..."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          </div>
        </section>

        {/* SECTION 3: RATE CARD & INVOICE SIMULATOR (Bundling Rp 2.500.000 + Optional Ads) */}
        <section id="pricing" className="scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Bundling Package Details & Configuration (Span 7) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 space-y-8">
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="text-3xl font-serif font-light text-slate-900 mt-1">
                    StayUp All-In Content Bundling
                  </h3>
                  <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed text-justify">
                    Satu kesepakatan harga terpadu yang mencakup pengolahan serta optimalisasi materi 3D rendering arsitektural menjadi rangkaian konten promosi sosial berkualitas tinggi, berfokus pada ketepatan penyetelan dan penyampaian keunikan unit.
                  </p>
                </div>

                {/* Base Package Highlights */}
                <div className="bg-brand-pale border border-[#355E4B]/10 p-6 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold text-[#355E4B] uppercase tracking-wider block">
                      PAKET CREATIVE PRODUCTION UTAMA:
                    </span>
                    <h4 className="text-base font-semibold text-slate-900">
                      15 Konten Feed (10 Desain + 5 Video Reels) + 10 Stories
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light text-justify">
                      Layanan menyeluruh meliputi riset pasar properti Makassar, penyusunan rancangan naskah persuasif (copywriting), penyelarasan estetika brand, serta penyediaan pratinjau interaktif di atas.
                    </p>
                  </div>
                  <div className="text-right sm:text-right shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono block">NILAI KONTRAK</span>
                    <span className="font-mono text-2xl font-bold text-slate-950 block">
                      {formatRupiah(basePrice)}
                    </span>
                  </div>
                </div>

                {/* Optional Ads Separator - Matches user instruction "Belum termasuk meta adsnya" */}
                <div className="space-y-4 pt-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#355E4B] tracking-widest uppercase block font-semibold">
                      Layanan Tambahan Khusus (Meta Ads Setup & Optimization)
                    </span>
                    <p className="text-xs text-slate-500 font-light text-justify">
                      Paket dasar produksi kreatif di atas <strong className="text-slate-900 font-medium">belum termasuk biaya setup & pengelolaan iklan Meta Ads</strong>. Layanan ini sepenuhnya opsional dan dikhususkan hanya untuk yang ingin memasang iklan bersponsor di Facebook & Instagram guna menjaring prospek secara terarah:
                    </p>
                  </div>

                  <button
                    onClick={() => setIncludeMetaAdsAddon(!includeMetaAdsAddon)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-6 ${
                      includeMetaAdsAddon
                        ? "bg-slate-950 text-[#FAF8F0] border-slate-950 shadow-md"
                        : "bg-white border-slate-100 text-slate-800 hover:bg-slate-50 shadow-sm"
                    }`}
                    id="btn-toggle-meta-ads"
                  >
                    <div className="space-y-1.5 flex-1 select-none">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-sans tracking-wide block">
                          Spesialis Pengelolaan Kampanye Meta Ads (Facebook & Instagram)
                        </span>
                        {includeMetaAdsAddon && (
                          <span className="bg-[#FAF8F0] text-slate-900 font-mono text-[9px] px-2 py-0.5 rounded font-bold">
                            AKTIF
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] font-light leading-relaxed text-justify ${includeMetaAdsAddon ? "text-slate-300" : "text-slate-500"}`}>
                        Penyusunan target demografi bernilai tinggi di Sulawesi Selatan (Makassar, Gowa, Maros), pengawasan konsumsi budget harian secara presisi, penyetelan pelacakan prospek formulir digital, serta pelaporan kinerja kampanye bersponsor secara intensif selama 30 hari. *(Pemberian saldo iklan bersponsor ditanggung langsung oleh pihak klien).*
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[9px] font-mono block uppercase text-slate-400">TARIF META ADS</span>
                      <span className="font-mono text-sm font-bold block">
                        +{formatRupiah(metaAdsPrice)}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Quick Info Sheet for Agency standard work terms */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-xs text-slate-500 font-light leading-relaxed space-y-1.5">
                  <span className="font-semibold text-slate-900 block mb-1">Ketentuan Distribusi Karya & Alur Kerja:</span>
                  <p>• Seluruh materi produksi total 15 Konten Feed (10 Post Desain & 5 Video Cinematic Reels) ditambah 10 Stories dikerjakan dalam periode estimasi 10 - 14 hari kerja.</p>
                  <p>• Menyediakan jaminan 3x revisi minor (penyesuaian tata letak aksen visual atau teks) demi hasil akhir yang sempurna.</p>
                  <p>• Penyerahan seluruh berkas digital bersolusi tinggi dilakukan melalu tautan Google Drive premium StayUp yang dinamis dan terorganisir.</p>
                </div>

              </div>

            </div>

            {/* Right Column: Invoice Summary (Span 5) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl border border-slate-100 p-8 space-y-6 shadow-sm sticky top-6">
                
                <div className="border-b border-slate-100 pb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-semibold">
                      RESMI PENAWARAN HARGA
                    </span>
                    <span className="text-[9px] font-mono bg-[#E9EFEA] text-brand-teal px-2 py-0.5 rounded">
                      IDR Penawaran
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-light text-slate-900 mt-1">Ringkasan Anggaran Investasi</h3>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">StayUp Creative Agency • Makassar</p>
                </div>

                <div className="space-y-4">
                  
                  {/* Item table layout */}
                  <div className="space-y-3.5 border-b border-slate-100 pb-5 text-xs text-slate-600 font-light">
                    <div className="flex justify-between items-center">
                      <span>Paket Jasa Produksi Kreatif Utama (15 Feed & 10 Stories)</span>
                      <span className="font-mono text-slate-900 font-medium">
                        {formatRupiah(basePrice)}
                      </span>
                    </div>

                    {includeMetaAdsAddon ? (
                      <div className="flex justify-between items-center text-slate-800 font-light">
                        <span>+ Pengelolaan Kampanye Meta Ads (Opsional)</span>
                        <span className="font-mono text-slate-950 font-medium">
                          +{formatRupiah(metaAdsPrice)}
                        </span>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center text-slate-400 italic">
                        <span>Pengelolaan Kampanye Meta Ads</span>
                        <span className="font-mono text-[10px]">Tidak Termasuk</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing calculations details */}
                  <div className="space-y-2.5 text-xs text-slate-500 font-light">
                    <div className="flex justify-between items-center">
                      <span>Total Biaya Produksi Seni Visual</span>
                      <span className="font-mono text-slate-800">{formatRupiah(basePrice)}</span>
                    </div>
                    
                    {includeMetaAdsAddon && (
                      <div className="flex justify-between items-center">
                        <span>Layanan Setup & Optimasi Meta Ads</span>
                        <span className="font-mono text-slate-800">{formatRupiah(metaAdsPrice)}</span>
                      </div>
                    )}
                  </div>

                  {/* Final Net Amount Display */}
                  <div className="bg-slate-900 text-[#FAF8F0] p-6 rounded-2xl space-y-1.5 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl pointer-events-none"></div>
                    <span className="text-[9px] font-mono text-slate-350 tracking-widest uppercase block font-semibold">
                      PROYEKSI TOTAL NILAI INVESTASI:
                    </span>
                    <div className="flex items-baseline justify-between relative z-10">
                      <span className="text-3xl font-mono font-bold text-[#FAF8F0] tracking-tight">
                        {formatRupiah(totalInvestment)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Milestone Split */}
                  <div className="space-y-3 pt-4 text-[11px] text-slate-450 leading-relaxed font-light">
                    <span className="font-semibold text-slate-800 block mb-1">Skema Pembayaran Bertahap (Termin):</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <span className="font-medium text-slate-700 block text-[9px] uppercase tracking-wider font-mono">Termin 1 (Down Payment)</span>
                        <strong className="text-slate-900 block font-mono font-semibold text-xs mt-0.5">
                          {formatRupiah(totalInvestment * 0.5)} (50%)
                        </strong>
                        <span className="text-[9px] text-slate-400 block mt-1">Dibayarkan saat penandatanganan MOU</span>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <span className="font-medium text-slate-700 block text-[9px] uppercase tracking-wider font-mono">Termin 2 (Full Settlement)</span>
                        <strong className="text-slate-900 block font-mono font-semibold text-xs mt-0.5">
                          {formatRupiah(totalInvestment * 0.5)} (50%)
                        </strong>
                        <span className="text-[9px] text-slate-400 block mt-1">Dibayarkan pasca penyerahan seluruh file</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Decorative Brand footer */}
        <footer className="bg-[#213C30] border-t border-[#FAF8F0]/10 py-12 px-6 sm:px-8 text-center text-[11px] text-[#FAF8F0]/70 font-light tracking-wide space-y-6 w-full">
          {/* Centered StayUp Logo Icon Badge */}
          <div className="flex justify-center">
            <div className="w-14 h-14 bg-[#1a3026] rounded-full flex items-center justify-center shadow-lg border border-[#FAF8F0]/10 overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={stayupLogo} 
                alt="StayUp Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              id="footer-download-btn"
              className="inline-flex items-center gap-2 bg-[#F5C443] hover:bg-[#F5C443]/90 text-slate-900 font-sans font-semibold text-xs py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-900" />
              Unduh / Cetak Proposal Rate Card (PDF)
            </button>
            <p className="text-[10px] text-[#FAF8F0]/40 font-light">Membuka dialog pencetakan browser untuk disimpan sebagai berkas PDF premium</p>
          </div>

          <div className="space-y-1 pt-2">
            <p className="font-semibold text-[#FAF8F0] tracking-wider text-xs">StayUp Creative Agency • Makassar</p>
            <p className="text-[#FAF8F0]/60">Sinergi Premium bersama Summarecon Mutiara Makassar.</p>
          </div>
        </footer>

      </main>

      {/* Dynamic Full-Screen Image Lightbox */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md cursor-zoom-out select-none"
            onClick={() => {
              setActiveLightboxImage(null);
              setActiveLightboxTitle(null);
            }}
          >
            {/* Close Button on top right */}
            <button
               onClick={(e) => {
                 e.stopPropagation();
                 setActiveLightboxImage(null);
                 setActiveLightboxTitle(null);
               }}
               className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 hover:rotate-90 shadow-2xl border border-white/10 cursor-pointer"
               title="Tutup (Esc)"
               id="lightbox-close-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Image Wrapper Card */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-[95vw] max-h-[82vh] rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 flex items-center justify-center bg-zinc-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeLightboxImage} 
                alt={activeLightboxTitle || "Mockup Preview"} 
                className="max-w-full max-h-[82vh] object-contain pointer-events-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Bottom metadata tag info */}
            {activeLightboxTitle && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-center max-w-md pointer-events-none"
              >
                <p className="text-xs text-[#FAF8F0] font-sans font-medium tracking-wide">
                  {activeLightboxTitle}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print / Download PDF Instruction Guide Modal */}
      <AnimatePresence>
        {showPrintModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            onClick={() => setShowPrintModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.25)] p-6 sm:p-8 max-w-lg w-full relative overflow-hidden text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon button */}
              <button
                onClick={() => setShowPrintModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                id="print-modal-close-icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FAF1CC] rounded-xl flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5 text-[#C48F00]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-tight">
                      Unduh Proposal Rate Card (PDF)
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">Panduan Penyimpanan Berkas</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                  <div className="flex gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#355E4B] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 font-light leading-relaxed text-justify">
                      Karena halaman ini dimuat di dalam <strong>iframe pratinjau editor AI Studio</strong>, beberapa browser membatasi dialog cetak/unduh langsung demi keamanan sandbox.
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-200/60 pt-3 space-y-2.5">
                    <span className="text-[10px] font-bold text-[#355E4B] block uppercase tracking-wider">Langkah Download Sangat Mudah:</span>
                    <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside font-light">
                      <li>Klik tombol <strong className="text-slate-900 font-medium">"Buka di Tab Baru ↗"</strong> di bawah ini.</li>
                      <li>Di halaman baru yang terbuka, silakan klik kembali tombol <strong className="text-slate-900 font-medium">"Unduh / Cetak Proposal Rate Card"</strong> di ujung bawah.</li>
                      <li>Pada jendela browser yang muncul, ubah pilihan Printer/Target menjadi <strong className="text-[#355E4B] font-semibold">"Save as PDF"</strong> (Simpan sebagai PDF), lalu klik tombol <strong className="text-slate-900 font-medium">Save</strong>.</li>
                    </ol>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => {
                      window.open(window.location.href, "_blank");
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF8F0] hover:bg-[#FAF8F0]/80 text-[#355E4B] border border-[#355E4B]/20 font-sans font-bold text-xs py-3 px-5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow hover:-translate-y-0.5"
                    id="btn-open-new-tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Buka di Tab Baru ↗
                  </button>

                  <button
                    onClick={() => handleCopyText(window.location.href, "print-url")}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#355E4B] hover:bg-[#355E4B]/95 text-[#FAF8F0] font-sans font-bold text-xs py-3 px-5 rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    id="btn-copy-proposal-url"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copiedId === "print-url" ? "Tautan Tersalin!" : "Salin Tautan Halaman"}
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowPrintModal(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4 cursor-pointer font-light transition-colors"
                    id="btn-close-print-helper"
                  >
                    Tutup Panduan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
