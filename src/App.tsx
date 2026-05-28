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
  Download,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import PricingSection from "./components/PricingSection";
import BenefitsSection from "./components/BenefitsSection";
import MockupsSection from "./components/MockupsSection";
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
      title: "Lokasi Rumah, Menentukan Kualitas Hidup",
      format: "Single Post - Location Infographics",
      image: imageFive, // <-- MASUKKAN GAMBAR UNTUK POST #2 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Visual interaktif bertema urgensi lokasi hunian strategis yang menentukan kualitas hidup masa depan. Menyertakan infografis 3 pilar utama: Akses mudah & menghemat waktu, kedekatan dengan fasilitas penting, serta nilai investasi yang lebih menjanjikan. Dilengkapi dengan jajak pendapat pertanyaan di bagian bawah untuk merangsang interaksi prospek.",
      dimensions: "1080 x 1080 px"
    },
    {
      id: 3,
      title: "Bingung Mikirin Interior Rumah?",
      format: "Single Post - Engagement Campaign",
      image: imageSix, // <-- MASUKKAN GAMBAR UNTUK POST #3 DI SINI (Contoh: "https://alamat-gambar.jpg" atau import file)
      concept: "Visual interaktif bertema solusi penataan interior untuk hunian eksklusif Rinoka. Mengangkat pertanyaan mendasar seputar keselarasan warna, jenis tata pencahayaan (warm vs white light), serta trik cerdas menata ruangan agar fungsional, lapang, dan estetik dengan Call-to-Action (CTA) langsung.",
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
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
        
        {/* SECTION 3: PROPOSAL SOLUSI STRATEGIS & SIMULASI INVESTASI (Rate Card & Syarat) */}
        <PricingSection
          includeMetaAdsAddon={includeMetaAdsAddon}
          setIncludeMetaAdsAddon={setIncludeMetaAdsAddon}
          metaAdsPrice={metaAdsPrice}
          basePrice={basePrice}
          totalInvestment={totalInvestment}
          formatRupiah={formatRupiah}
        />

        {/* SECTION 1: BENEFIT PENAWARAN (Keuntungan Utama Sinergi) */}
        <BenefitsSection
          expandedCards={expandedCards}
          toggleCard={toggleCard}
        />

        {/* SECTION 2: GALERI MOCKUP KONTEN (Pratinjau Desain Rinoka) */}
        <MockupsSection
          mockupFeeds={mockupFeeds}
          setActiveLightboxImage={setActiveLightboxImage}
          setActiveLightboxTitle={setActiveLightboxTitle}
        />

        {/* Decorative Brand footer */}
        <footer className="bg-[#213C30] border-t border-[#FAF8F0]/10 py-12 px-6 sm:px-8 text-center text-[11px] text-[#FAF8F0]/70 font-light tracking-wide space-y-6 w-full">
          {/* Centered StayUp Logo Icon Badge */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={stayupLogo} alt="StayUp Logo" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            </div>
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
