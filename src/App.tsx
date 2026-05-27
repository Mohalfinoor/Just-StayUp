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
import stayupLogo from "./assets/images/StayUp Logo.png";
// @ts-ignore
import imageSix from "./assets/images/6.png";
// @ts-ignore
import imageFive from "./assets/images/5.png";

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
      title: "Bingung Mikirin Interior Rumah?",
      format: "Single Post - Engagement Campaign",
      image: imageSix, // <-- MASUKKAN GAMBAR UNTUK POST #2 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Visual interaktif bertema solusi penataan interior untuk hunian eksklusif Rinoka. Mengangkat pertanyaan mendasar seputar keselarasan warna, jenis tata pencahayaan (warm vs white light), serta trik cerdas menata ruangan agar fungsional, lapang, dan estetik dengan Call-to-Action (CTA) langsung.",
      dimensions: "1080 x 1080 px"
    },
    {
      id: 3,
      title: "Lokasi Rumah, Menentukan Kualitas Hidup",
      format: "Single Post - Location Infographics",
      image: imageFive, // <-- MASUKKAN GAMBAR UNTUK POST #3 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Visual interaktif bertema urgensi lokasi hunian strategis yang menentukan kualitas hidup masa depan. Menyertakan infografis 3 pilar utama: Akses mudah & menghemat waktu, kedekatan dengan fasilitas penting, serta nilai investasi yang lebih menjanjikan. Dilengkapi dengan jajak pendapat pertanyaan di bagian bawah untuk merangsang interaksi prospek.",
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
      <div className="print:hidden z-50">
        <Header onPrint={handlePrint} />
      </div>

      {/* Main Content Container stretching full width with elegant inner content bounds */}
      <main className="w-full bg-[#eeeeee] pt-16 pb-0 mt-0 relative z-10 space-y-24">
        
        {/* SECTION 1: BENEFIT PENAWARAN (Keuntungan Utama Sinergi) */}
        <section id="benefits" className="scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-150 relative overflow-hidden shadow-[0_10px_30px_rgba(33,60,48,0.03)]">
            
            {/* Header Strategy Badge & Title */}
            <div className="space-y-4 w-full mb-12 border-b border-slate-100 pb-8">
              <div className="inline-flex items-center gap-2 bg-[#E9EFEA] border border-[#355E4B]/15 px-3 py-1 rounded-full text-[10px] text-brand-teal font-sans font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                STRATEGI PEMASARAN DIGITAL
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 tracking-tight leading-tight">
                Mengubah Desain 3D Menjadi <span className="text-brand-teal italic font-light font-serif">Alat Penjualan yang Efektif</span>
              </h2>
              <p className="text-slate-550 text-sm sm:text-base font-light leading-relaxed text-left max-w-none">
                Kami menyelaraskan keindahan desain arsitektur <strong className="font-semibold text-slate-800 font-sans">Zen Modern-Tropical</strong> khas Cluster Rinoka (Summarecon Mutiara Makassar) dengan strategi copywriting yang teruji. Solusi digital ini dirancang khusus untuk menarik perhatian para pengusaha, investor properti, dan keluarga mapan di Sulawesi Selatan sejak fase pra-penjualan.
              </p>
            </div>

            {/* Scope Deliverables Strip - Minimal and clean */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase tracking-wider">PAKET UTAMA</span>
                <h4 className="text-sm font-bold text-slate-900">10 Desain Feed Utama</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Postingan gambar premium beresolusi tinggi untuk menyajikan keindahan fasad & kelebihan denah unit.
                </p>
              </div>
              <div className="space-y-1 sm:border-l border-slate-200/60 sm:pl-6">
                <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase tracking-wider">PAKET AUDIO-VISUAL</span>
                <h4 className="text-sm font-bold text-slate-900">5 Video Reels Cinematic</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Video pendek interaktif dengan transisi estetik & aransemen musik yang memukau mata di media sosial.
                </p>
              </div>
              <div className="space-y-1 sm:border-l border-slate-200/60 sm:pl-6">
                <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase tracking-wider">PAKET INTERAKTIF</span>
                <h4 className="text-sm font-bold text-slate-900">10 Instagram Stories</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Template Stories interaktif (Polling/QnA) untuk memancing minat tanya-jawab calon pembeli ke DM.
                </p>
              </div>
            </div>

            {/* Grid of 6 Pillars with Clear, Humble, Beautifully Spaced Copywriting */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Optimalisasi Visual 3D</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Mengolah cetak biru arsitektur atau master render 3D statis Anda menjadi rangkaian postingan yang terstruktur, hidup, dan terlihat prestisius bagi calon pembeli.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Strategi Pemasaran Awal</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Menciptakan momentum ketertarikan sejak dini lewat kampanye online untuk mendata calon pembeli potensial sebelum gerbang fisik rumah contoh resmi dibuka.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Instagram Stories Interaktif</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Menggunakan stiker interaktif untuk menyaring peminat secara spesifik, mengarahkan mereka untuk membalas Stories, dan langsung terhubung dengan tim sales Anda.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Sentuhan Estetika Jepang-Tropis</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Menyimpan kemewahan dalam kesederhanaan desain minimalis yang disesuaikan secara pas untuk mencerminkan status sosial dan kebanggaan keluarga elite lokal.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Produksi Rapi & Terjadwal</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Semua materi promosi dikerjakan dengan standar agensi profesional secara detail dan tuntas, serta diserahkan tepat waktu sesuai deadline yang disepakati.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-brand-teal/30 hover:shadow-[0_15px_30px_rgba(33,60,48,0.05)] transition-all duration-300 space-y-4">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-slate-900">Alur Kerja Praktis & Mudah</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed text-left font-sans">
                    Sistem folder peninjauan terpusat memudahkan Anda melihat semua rancangan konten, memberikan revisi, hingga menyetujui materi siap tayang kapan saja.
                  </p>
                </div>
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
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#FAF8F0] tracking-tight leading-tight">
                  Ruang Integrasi & Galeri <span className="text-amber-300 italic font-serif font-normal">Pratinjau Desain Rinoka</span>
                </h3>
              </div>
            </div>

            {/* Sub-section A: Grid Feed & Carousels (3 Posts) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 items-start">
                  <div className="p-1 px-2.5 bg-[#FAF8F0] text-[#355E4B] font-mono font-bold rounded text-xs select-none w-fit">FEED</div>
                  <h4 className="font-serif text-lg font-medium text-[#FAF8F0]">3 Rencana Mockup</h4>
                </div>
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

        {/* SECTION 3: PROPOSAL SOLUSI STRATEGIS & SIMULASI INVESTASI */}
        <section id="pricing" className="scroll-mt-20 py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            
            {/* Section Header */}
            <div className="text-center md:text-left space-y-3 mb-12 max-w-none">
              <div className="inline-flex items-center gap-2 bg-[#E9EFEA] border border-[#355E4B]/15 px-3.5 py-1.5 rounded-full text-[10px] text-brand-teal font-sans font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                REKOMENDASI SOLUSI PEMASARAN
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-light tracking-tight leading-tight">
                Proposal Penawaran <span className="text-brand-teal italic font-light font-serif">Kemitraan Estetik</span> Cluster Rinoka
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Kami tidak sekadar memproduksi konten media sosial secara acak. StayUp menyusun strategi visual terpadu berkelas tinggi untuk memicu konversi prospek sejak fase pra-penjualan (<em className="italic">pre-selling</em>).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
              {/* Left Column: Solution Architecture (Span 7) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Solusi Utama Card - 3D Effect Styled Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#213C30]/10 shadow-[0_20px_50px_rgba(33,60,48,0.06)] hover:shadow-[0_30px_70px_rgba(33,60,48,0.12)] transition-all duration-500 ease-out relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/[0.02] rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:scale-110"></div>
                  
                  <div className="border-b border-slate-100 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-pale border border-[#355E4B]/15 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-brand-teal/80 uppercase tracking-widest block">PILAR PERTAMA</span>
                        <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">
                          Arsitektur Konten Utama
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                    StayUp akan mengolah blueprint 3D statis Summarecon Mutiara Makassar Anda menjadi sebuah <strong className="font-semibold text-slate-800">Kampanye Pengalaman Visual</strong> interaktif untuk meningkatkan minat beli dan membangun ekspektasi gaya hidup elit secara organik.
                  </p>

                  {/* Program Deliverables List */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5 bg-slate-50/75 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-900 block">10 Media Feed Utama (Single & Carousel)</span>
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                          Visualisasi interior & fasad 3D berkualitas premium yang didukung copywriting persuasif bernarasi mewah untuk memicu kebanggaan memiliki unit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-slate-50/75 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-900 block">5 Cinematic Reels Video (Video Transisi 3D)</span>
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                          Video berdurasi pendek (<em className="italic">short-form video</em>) dengan transisi estetik, efek suara imersif, dan pemetaan sudut ruang yang menawan.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-slate-50/75 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-900 block">10 Instagram Stories (Interactive Panels)</span>
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                          Konten interaktif harian berupa polling kepuasan, slider desain ruangan, dan tanya-jawab guna memancing tanggapan pesan langsung (DM).
                        </p>
                      </div>
                    </div>
                  </div>


                </div>

                {/* Meta Ads Accelerator Option - Styled with 3D shadow and glow effect */}
                <div className="relative group">
                  {/* Subtle outer glow effect behind the toggle when active */}
                  <div className={`absolute -inset-0.5 rounded-3xl blur-md opacity-30 transition-all duration-500 ${
                    includeMetaAdsAddon ? "bg-brand-teal/40 group-hover:opacity-40" : "bg-transparent opacity-0"
                  }`} />
                  
                  <div className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-500 cursor-pointer ${
                    includeMetaAdsAddon 
                      ? "border-[#213C30]/40 shadow-[0_20px_50px_rgba(33,60,48,0.15)] bg-slate-50/95" 
                      : "border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-slate-350/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)]"
                  }`}
                  onClick={() => setIncludeMetaAdsAddon(!includeMetaAdsAddon)}
                  id="btn-toggle-meta-ads"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            includeMetaAdsAddon ? "bg-[#213C30] text-[#FAF8F0]" : "bg-brand-pale text-brand-teal"
                          }`}>
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono font-bold text-[#355E4B] tracking-wider uppercase block">AKSELERATOR PEMASARAN</span>
                            <h4 className="text-sm font-bold text-slate-900 leading-tight">
                              Meta Ads Lead Generation Campaign (Opsional)
                            </h4>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                          Tambahkan akselerator ini untuk menyalurkan seluruh materi kreatif langsung ke layar perangkat calon pembeli spesifik yang bermukim di Makassar, Gowa, dan Maros.
                        </p>

                        {/* Interactive checklist grids of Meta Ads capabilities */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-600 font-light">
                            <span className="w-4 h-4 rounded-full bg-brand-pale border border-[#355E4B]/15 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-brand-teal" />
                            </span>
                            <span>Targeting Segmen Pengusaha / Eksekutif Mapan</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-600 font-light">
                            <span className="w-4 h-4 rounded-full bg-brand-pale border border-[#355E4B]/15 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-brand-teal" />
                            </span>
                            <span>Setup Form leads instan pemicu Chat Tim Sales</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-600 font-light">
                            <span className="w-4 h-4 rounded-full bg-brand-pale border border-[#355E4B]/15 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-brand-teal" />
                            </span>
                            <span>Optimasi budget iklan harian secara real-time</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-600 font-light">
                            <span className="w-4 h-4 rounded-full bg-brand-pale border border-[#355E4B]/15 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-brand-teal" />
                            </span>
                            <span>Laporan jangkauan terperinci (30 Hari)</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-400 italic">
                          <span>* Anggaran biaya top-up saldo iklan ditanggung oleh Klien</span>
                        </div>
                      </div>

                      <div className="text-right sm:text-right shrink-0 bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl sm:min-w-[120px] transition-colors group-hover:bg-slate-100/30">
                        <span className="text-[8px] font-mono block uppercase text-slate-400">TARIF LAYANAN</span>
                        <span className="font-mono text-sm sm:text-base font-bold text-slate-900 block mt-0.5">
                          +{formatRupiah(metaAdsPrice)}
                        </span>
                        <div className="mt-2">
                          <span className={`inline-block font-sans text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            includeMetaAdsAddon ? "bg-[#213C30] text-amber-300" : "bg-slate-200 text-slate-550"
                          }`}>
                            {includeMetaAdsAddon ? "DIAKTIFKAN" : "KLIK UNTUK AKTIF"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow Card - Beautiful timeline accents */}
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-6 bg-brand-teal rounded-full block"></span>
                    <h4 className="font-serif text-sm font-bold text-slate-900">Alur Kerja & Standar Layanan Profesional</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 block font-semibold">01. LINE OF TIME</span>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        Penyelesaian riset, copywriting, & konsep visual dalam <strong className="font-medium text-slate-800">10-14 hari kerja</strong>.
                      </p>
                    </div>
                    <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200/65 pt-3 sm:pt-0 sm:pl-4">
                      <span className="text-[10px] font-mono text-slate-400 block font-semibold">02. REVISI PROTEKSI</span>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        Menyediakan garansi <strong className="font-medium text-slate-800">3x revisi minor visual</strong> demi hasil akhir yang sempurna.
                      </p>
                    </div>
                    <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200/65 pt-3 sm:pt-0 sm:pl-4">
                      <span className="text-[10px] font-mono text-slate-400 block font-semibold">03. DELIVERY FILES</span>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        Pengiriman dokumen master resolusi tinggi yang terorganisir aman via <strong className="font-medium text-slate-800">Google Drive Premium</strong>.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Solution Proposal Summary (Span 5) */}
              <div className="lg:col-span-5 relative">
                
                {/* 3D-effect Styled Container with sophisticated details */}
                <div className="bg-white rounded-3xl border-2 border-[#213C30]/10 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(33,60,48,0.15)] relative overflow-hidden sticky top-6">
                  {/* Absolute visual highlights */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#213C30]"></div>
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#213C30]/[0.02] rounded-full blur-2xl pointer-events-none"></div>

                  {/* Proposal Summary Headers */}
                  <div className="border-b border-slate-100 pb-5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-mono text-[#355E4B] tracking-wider uppercase font-bold">
                        DOKUMEN RESMI PENAWARAN
                      </span>
                      <span className="text-[9px] font-mono bg-brand-teal text-[#FAF8F0] px-2.5 py-0.5 rounded-full font-bold">
                        AKTIF
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-slate-950 font-semibold tracking-tight mt-1">Ringkasan Nilai Investasi</h3>
                    <p className="text-[9px] text-[#213C30]/70 font-semibold font-sans mt-0.5 uppercase tracking-wider">StayUp Solusi Kreatif x Cluster Rinoka</p>
                  </div>

                  {/* Value Line Items */}
                  <div className="space-y-4">
                    
                    <div className="space-y-3.5 border-b border-slate-100 pb-5 text-xs text-slate-650 font-light font-sans">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-0.5">
                          <span className="font-semibold text-slate-900 block text-xs">Arsitektur Konten Utama</span>
                          <span className="text-[10px] text-slate-400 block leading-tight">Format visualisasi 3D (15 Feed & 10 Stories)</span>
                        </div>
                        <span className="font-mono text-slate-900 font-bold shrink-0">
                          {formatRupiah(basePrice)}
                        </span>
                      </div>

                      {includeMetaAdsAddon ? (
                        <div className="flex justify-between items-start gap-4 text-[#213C30]">
                          <div className="space-y-0.5">
                            <span className="font-semibold text-[#213C30] block text-xs">+ Akselerator Pemasaran</span>
                            <span className="text-[10px] text-brand-teal block leading-tight">Pengelolaan kampanye Meta Ads (30 Hari)</span>
                          </div>
                          <span className="font-mono font-bold shrink-0">
                            +{formatRupiah(metaAdsPrice)}
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center py-1 text-slate-400 italic">
                          <span className="text-[11px]">Pengelolaan Meta Ads Campaign</span>
                          <span className="font-mono text-[8px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100/60 font-semibold uppercase tracking-wider font-sans">Belum Aktif</span>
                        </div>
                      )}
                    </div>

                    {/* Cost Subtotals */}
                    <div className="space-y-2.5 text-xs text-slate-500 font-light font-sans">
                      <div className="flex justify-between items-center">
                        <span className="font-light">Subtotal Biaya Produksi Jasa:</span>
                        <span className="font-mono text-slate-800">{formatRupiah(basePrice)}</span>
                      </div>
                      
                      {includeMetaAdsAddon && (
                        <div className="flex justify-between items-center text-slate-500">
                          <span className="font-light">Subtotal Layanan Optimasi Meta Ads:</span>
                          <span className="font-mono text-slate-800">{formatRupiah(metaAdsPrice)}</span>
                        </div>
                      )}
                    </div>

                    {/* Total Value Frame with 3D deep glow style */}
                    <div className="bg-slate-950 text-[#FAF8F0] p-6 rounded-2xl space-y-1 shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] border border-slate-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/20 rounded-full blur-xl pointer-events-none"></div>
                      <span className="text-[9px] font-mono text-slate-300 tracking-wider uppercase block font-semibold">
                        TOTAL ESTIMASI NILAI INVESTASI:
                      </span>
                      <div className="flex items-baseline justify-between relative z-10 pt-1">
                        <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-300 tracking-tight">
                          {formatRupiah(totalInvestment)}
                        </span>
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
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#213C30] border border-[#FAF8F0]/10 overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={stayupLogo} alt="StayUp Logo" className="w-full h-full object-contain p-2" referrerPolicy="no-referrer" />
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
