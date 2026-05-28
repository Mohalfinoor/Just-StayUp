import React from "react";
import { Sparkles, Briefcase, Check, TrendingUp, MessageSquare, ArrowRight, MessageCircle } from "lucide-react";

interface PricingSectionProps {
  includeMetaAdsAddon: boolean;
  setIncludeMetaAdsAddon: (val: boolean) => void;
  metaAdsPrice: number;
  basePrice: number;
  totalInvestment: number;
  formatRupiah: (val: number) => string;
}

export default function PricingSection({
  includeMetaAdsAddon,
  setIncludeMetaAdsAddon,
  metaAdsPrice,
  basePrice,
  totalInvestment,
  formatRupiah,
}: PricingSectionProps) {
  const getWhatsAppUrl = () => {
    const baseMessage = `Halo StayUp!\n\nSaya tertarik dengan proposal kemitraan estetik untuk *Cluster Rinoka* (Summarecon Mutiara Makassar).\n\n*Rincian Paket Pilihan:*`;
    
    const mainPackage = `\n- Arsitektur Konten Utama (15 Feed & 10 Stories): ${formatRupiah(basePrice)}`;
    const adsAddon = includeMetaAdsAddon 
      ? `\n- Akselerator Pemasaran (Meta Ads Lead Gen 30 Hari): ${formatRupiah(metaAdsPrice)}` 
      : `\n- Akselerator Pemasaran (Meta Ads): Tidak Diambil`;
    
    const totalValue = `\n\n*Total Estimasi Nilai Investasi:* *${formatRupiah(totalInvestment)}*`;
    const footerMessage = `\n\nMohon informasi lebih lanjut mengenai langkah kerja sama berikutnya. Terima kasih!`;
    
    const fullText = `${baseMessage}${mainPackage}${adsAddon}${totalValue}${footerMessage}`;
    return `https://wa.me/6281257374628?text=${encodeURIComponent(fullText)}`;
  };

  return (
    <section id="pricing" className="scroll-mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12 max-w-none">
          <div className="inline-flex items-center gap-2 bg-[#E9EFEA] border border-[#355E4B]/15 px-3.5 py-1.5 rounded-full text-[10px] text-brand-teal font-sans font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            REKOMENDASI SOLUSI PEMASARAN
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-light tracking-tight leading-tight">
            Proposal Penawaran <span className="text-brand-teal italic font-light font-serif">Kemitraan Estetik</span> Cluster Rinoka
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed text-justify">
            Kami tidak sekadar memproduksi konten media sosial secara acak. StayUp menyusun strategi visual terpadu berkelas tinggi untuk memicu konversi prospek sejak fase pra-penjualan.
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
                  <div className="w-10 h-10 rounded-xl bg-[#E9EFEA] border border-[#355E4B]/15 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
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
                <div className="flex items-start gap-3.5 bg-[#FAF8F0] p-4 rounded-2xl border border-slate-200/60 shadow-[inset_0_3px_6px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.09)] transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#355E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FAF8F0]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-800 block">10 Media Feed Utama (Single & Carousel)</span>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                      Visualisasi interior & fasad 3D berkualitas premium yang didukung copywriting persuasif bernarasi mewah untuk memicu kebanggaan memiliki unit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-[#FAF8F0] p-4 rounded-2xl border border-slate-200/60 shadow-[inset_0_3px_6px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.09)] transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#355E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FAF8F0]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-800 block">5 Cinematic Reels Video (Video Transisi 3D)</span>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                      Video berdurasi pendek (<em className="italic">short-form video</em>) dengan transisi estetik, efek suara imersif, dan pemetaan sudut ruang yang menawan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-[#FAF8F0] p-4 rounded-2xl border border-slate-200/60 shadow-[inset_0_3px_6px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.09)] transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#355E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FAF8F0]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-800 block">10 Instagram Stories (Interactive Panels)</span>
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
                includeMetaAdsAddon ? "bg-[#355E4B]/40 group-hover:opacity-40" : "bg-transparent opacity-0"
              }`} />
              
              <div className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-500 cursor-pointer select-none ${
                includeMetaAdsAddon 
                  ? "border-[#213C30]/40 shadow-[0_20px_50px_rgba(33,60,48,0.12)] bg-white" 
                  : "border-slate-200 bg-slate-100/70 opacity-85 hover:opacity-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
              }`}
              onClick={() => setIncludeMetaAdsAddon(!includeMetaAdsAddon)}
              id="btn-toggle-meta-ads"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        includeMetaAdsAddon ? "bg-[#213C30] text-[#FAF8F0] scale-105" : "bg-slate-200 text-slate-400"
                      }`}>
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold leading-tight transition-colors ${
                          includeMetaAdsAddon ? "text-slate-900" : "text-slate-500"
                        }`}>
                          Meta Ads Lead Generation Campaign (Opsional)
                        </h4>
                      </div>
                    </div>

                    <p className={`text-xs font-light leading-relaxed transition-colors ${
                      includeMetaAdsAddon ? "text-slate-500" : "text-slate-450"
                    }`}>
                      Tambahkan akselerator ini untuk menyalurkan seluruh materi kreatif langsung ke layar perangkat calon pembeli spesifik yang bermukim di Makassar, Gowa, dan Maros.
                    </p>

                    {/* Interactive checklist grids of Meta Ads capabilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      <div className="flex items-center gap-2 text-[11px] font-light">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          includeMetaAdsAddon 
                            ? "bg-[#355E4B] border-transparent text-[#FAF8F0]" 
                            : "bg-slate-200/50 border-slate-300 text-slate-400"
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className={includeMetaAdsAddon ? "text-slate-600 font-medium" : "text-slate-400"}>Targeting Segmen Pengusaha / Eksekutif Mapan</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-light">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          includeMetaAdsAddon 
                            ? "bg-[#355E4B] border-transparent text-[#FAF8F0]" 
                            : "bg-slate-200/50 border-slate-300 text-slate-400"
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className={includeMetaAdsAddon ? "text-slate-600 font-medium" : "text-slate-400"}>Setup Form leads instan pemicu Chat Tim Sales</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-light">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          includeMetaAdsAddon 
                            ? "bg-[#355E4B] border-transparent text-[#FAF8F0]" 
                            : "bg-slate-200/50 border-slate-300 text-slate-400"
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className={includeMetaAdsAddon ? "text-slate-600 font-medium" : "text-slate-400"}>Optimasi budget iklan harian secara real-time</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-light">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          includeMetaAdsAddon 
                            ? "bg-[#355E4B] border-transparent text-[#FAF8F0]" 
                            : "bg-slate-200/50 border-slate-300 text-slate-400"
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className={includeMetaAdsAddon ? "text-slate-600 font-medium" : "text-slate-400"}>Laporan jangkauan terperinci (30 Hari)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-400 italic">
                      <span>* Anggaran biaya top-up saldo iklan ditanggung oleh Klien</span>
                    </div>
                  </div>

                  <div className={`text-left sm:text-right shrink-0 border p-3 sm:p-4 rounded-2xl sm:min-w-[125px] transition-all duration-350 ${
                    includeMetaAdsAddon 
                      ? "bg-[#FAF8F0] border-[#355E4B]/25 text-brand-teal shadow-xs" 
                      : "bg-slate-200/40 border-slate-300/40 text-slate-400"
                  }`}>
                    <div className="flex items-center justify-between sm:block gap-2 mb-1 sm:mb-0">
                      <span className="text-[8px] font-mono uppercase text-slate-400 font-bold">TARIF LAYANAN</span>
                      <div className="sm:hidden flex items-center">
                        <span className={`inline-block font-sans text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider transition-all ${
                          includeMetaAdsAddon ? "bg-[#213C30] text-amber-300" : "bg-red-600 text-white"
                        }`}>
                          {includeMetaAdsAddon ? "DIAKTIFKAN" : "KLIK UNTUK AKTIF"}
                        </span>
                      </div>
                    </div>
                    <span className={`font-mono text-sm sm:text-base font-bold block mt-0.5 transition-colors ${
                      includeMetaAdsAddon ? "text-brand-teal" : "text-slate-400"
                    }`}>
                      +{formatRupiah(metaAdsPrice)}
                    </span>
                    <div className="hidden sm:block mt-2 text-center w-full">
                       <span className={`block w-full font-sans text-[8px] font-bold py-1 rounded-md uppercase tracking-wider transition-all ${
                         includeMetaAdsAddon ? "bg-[#213C30] text-amber-300" : "bg-red-600 text-white"
                       }`}>
                         {includeMetaAdsAddon ? "DIAKTIFKAN" : "KLIK UNTUK AKTIF"}
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Solution Proposal Summary (Span 5) */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* 3D-effect Styled Container with sophisticated details */}
            <div className="bg-white rounded-3xl border-2 border-[#213C30]/10 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(33,60,48,0.15)] relative overflow-hidden">
              {/* Absolute visual highlights */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#213C30]"></div>
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#213C30]/[0.02] rounded-full blur-2xl pointer-events-none"></div>

              {/* Proposal Summary Headers */}
              <div className="border-b border-slate-100 pb-5">
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
                      <span className="font-mono text-[8px] bg-red-600 text-white px-2 py-0.5 rounded border border-red-500/30 font-semibold uppercase tracking-wider font-sans">Belum Aktif</span>
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
                <div className="bg-[#355E4B] text-[#FAF8F0] p-6 rounded-2xl space-y-1 shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)] border border-[#355E4B]/25 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/30 rounded-full blur-xl pointer-events-none"></div>
                  <span className="text-[9px] font-mono text-slate-300 tracking-wider uppercase block font-semibold">
                    TOTAL ESTIMASI NILAI INVESTASI:
                  </span>
                  <div className="flex items-baseline justify-between relative z-10 pt-1">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-300 tracking-tight">
                      {formatRupiah(totalInvestment)}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Order/Consultation Trigger */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 glass-stroke-wa text-white p-4.5 rounded-2xl active:translate-y-0 outline-none select-none w-full text-left font-sans group relative z-10"
                    id="btn-whatsapp-proposal"
                  >
                    {/* Glowing glossy overlay shine effect */}
                    <div className="animate-wa-sweep" />
                    <div className="flex items-center gap-3 w-full sm:w-auto relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/18 flex items-center justify-center shrink-0 shadow-inner">
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-5.5 h-5.5 text-white fill-current animate-pulse" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.112.551 4.164 1.597 5.973L.156 23.864a.563.563 0 0 0 .717.717l5.892-1.441c1.763.957 3.738 1.463 5.744 1.463C19.13 24.603 24.5 19.23 24.5 12.6c0-3.327-1.296-6.453-3.65-8.807C18.496 1.439 15.34 0 12.004 0zm0 2.25c2.738 0 5.31 1.066 7.243 3 1.933 1.933 3 4.505 3 7.243 0 5.652-4.591 10.244-10.243 10.244-1.782 0-3.518-.464-5.045-1.343a.562.562 0 0 0-.464-.047l-4.103 1 .998-4.081a.562.562 0 0 0-.056-.47C2.422 16.3 1.944 14.474 1.944 12.6c0-5.652 4.591-10.35 10.06-10.35zm5.176 11.238c-.284-.142-1.68-.83-1.94-.925-.262-.095-.453-.142-.643.142-.19.284-.738.925-.905 1.114-.166.19-.333.213-.617.071c-.284-.142-1.201-.442-2.287-1.41a8.55 8.55 0 0 1-1.583-1.969c-.166-.284-.018-.437.124-.579.128-.127.284-.33.426-.497.142-.166.19-.284.284-.473.095-.19.047-.355-.024-.497-.071-.142-.643-1.55-.881-2.119-.232-.555-.467-.479-.643-.489-.166-.008-.356-.009-.545-.009-.19 0-.5-.071-.76.213-.263.284-1.002.979-1.002 2.387s1.025 2.766 1.168 2.956c.142.19 2.016 3.08 4.885 4.316.682.294 1.215.47 1.63.602.686.218 1.31.187 1.803.114.55-.082 1.68-.687 1.917-1.354.237-.667.237-1.238.166-1.355-.071-.118-.261-.19-.545-.331z"/>
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-bold block leading-tight tracking-tight text-white font-sans">
                          Kirim Proposal via WhatsApp
                        </span>
                        <span className="text-[10px] text-white/95 font-light block leading-none font-sans">
                          Hubungi tim StayUp dengan konsep otomatis
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/15 hover:bg-white/20 px-3.5 py-2 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-colors shrink-0 w-full sm:w-auto justify-center font-sans relative z-10">
                      <span>KIRIM</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </a>
                </div>

              </div>

            </div>

            {/* Workflow Card - Beautiful timeline accents, placed beautifully right below the Investment Summary card */}
            <div className="bg-slate-50 border border-slate-150 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-[#355E4B] rounded-full block"></span>
                <h4 className="font-serif text-sm font-bold text-slate-900">Alur Kerja & Standar Layanan</h4>
              </div>
              
              <div className="grid grid-cols-1 gap-4 pt-1">
                <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
                  <span className="text-[10px] font-mono text-slate-450 block font-semibold tracking-wider">01. LINE OF TIME</span>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Penyelesaian riset, copywriting, & konsep visual dalam <strong className="font-medium text-slate-800">10-14 hari kerja</strong>.
                  </p>
                </div>
                <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
                  <span className="text-[10px] font-mono text-slate-450 block font-semibold tracking-wider">02. REVISI PROTEKSI</span>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Menyediakan garansi <strong className="font-medium text-slate-800">3x revisi minor visual</strong> demi hasil akhir sempurna.
                  </p>
                </div>
                <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
                  <span className="text-[10px] font-mono text-slate-450 block font-semibold tracking-wider">03. DELIVERY FILES</span>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Pengiriman dokumen master resolusi tinggi aman via <strong className="font-medium text-slate-800">Google Drive Premium</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
