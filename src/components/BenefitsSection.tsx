import React from "react";
import { Sparkles, Layers, ChevronDown, TrendingUp, Smartphone, Award, Clock, CheckCircle } from "lucide-react";

interface BenefitsSectionProps {
  expandedCards: Record<number, boolean>;
  toggleCard: (id: number) => void;
}

export default function BenefitsSection({
  expandedCards,
  toggleCard,
}: BenefitsSectionProps) {
  return (
    <section id="benefits" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_10px_30px_rgba(33,60,48,0.03)]">
        
          {/* Header Strategy Badge & Title */}
          <div className="space-y-4 w-full mb-12 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 bg-[#E9EFEA] border border-[#355E4B]/15 px-3 py-1 rounded-full text-[10px] text-brand-teal font-sans font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              STRATEGI PEMASARAN DIGITAL
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 tracking-tight leading-tight">
              Mengubah Desain 3D Menjadi <span className="text-brand-teal italic font-light font-serif">Alat Penjualan yang Efektif</span>
            </h2>
            <p className="text-slate-550 text-sm sm:text-base font-light leading-relaxed text-justify max-w-none">
              Kami menyelaraskan keindahan desain arsitektur <strong className="font-semibold text-slate-800 font-sans">Zen Modern-Tropical</strong> khas Cluster Rinoka (Summarecon Mutiara Makassar) dengan strategi copywriting yang teruji. Solusi digital ini dirancang khusus untuk menarik perhatian para pengusaha, investor properti, dan keluarga mapan di Sulawesi Selatan sejak fase pra-penjualan.
            </p>
          </div>

          {/* Scope Deliverables Strip - Minimal and clean */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.04)]">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">10 Desain Feed Utama</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Postingan gambar premium beresolusi tinggi untuk menyajikan keindahan fasad & kelebihan denah unit.
              </p>
            </div>
            <div className="space-y-1 border-t border-slate-200/60 pt-6 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-6">
              <h4 className="text-sm font-bold text-slate-900">5 Video Reels Cinematic</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                 Video pendek interaktif dengan transisi estetik & aransemen musik yang memukau mata di media sosial.
              </p>
            </div>
            <div className="space-y-1 border-t border-slate-200/60 pt-6 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-6">
              <h4 className="text-sm font-bold text-slate-900">10 Instagram Stories</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Template Stories interaktif (Polling/QnA) untuk memancing minat tanya-jawab calon pembeli ke DM.
              </p>
            </div>
          </div>

          {/* Grid of 6 Pillars with Clear, Humble, Beautifully Spaced Copywriting */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
             {/* Card 1 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(1)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Optimalisasi Visual 3D</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[1] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[1] ? "block" : "hidden md:block"
              }`}>
                Mengolah cetak biru arsitektur atau master render 3D statis Anda menjadi rangkaian postingan yang terstruktur, hidup, dan terlihat prestisius bagi calon pembeli.
              </p>
            </div>

             {/* Card 2 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(2)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Strategi Pemasaran Awal</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[2] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[2] ? "block" : "hidden md:block"
              }`}>
                Menciptakan momentum ketertarikan sejak dini lewat kampanye online untuk mendata calon pembeli potensial sebelum gerbang fisik rumah contoh resmi dibuka.
              </p>
            </div>

             {/* Card 3 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(3)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Instagram Stories Interaktif</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[3] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[3] ? "block" : "hidden md:block"
              }`}>
                Menggunakan stiker interaktif untuk menyaring peminat secara spesifik, mengarahkan mereka untuk membalas Stories, dan langsung terhubung dengan tim sales Anda.
              </p>
            </div>

             {/* Card 4 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(4)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Sentuhan Estetika Jepang-Tropis</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[4] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[4] ? "block" : "hidden md:block"
              }`}>
                Menyimpan kemewahan dalam kesederhanaan desain minimalis yang disesuaikan secara pas untuk mencerminkan status sosial dan kebanggaan keluarga elite lokal.
              </p>
            </div>

             {/* Card 5 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(5)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Produksi Rapi & Terjadwal</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[5] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[5] ? "block" : "hidden md:block"
              }`}>
                Semua materi promosi dikerjakan dengan standar agensi profesional secara detail dan tuntas, serta diserahkan tepat waktu sesuai deadline yang disepakati.
              </p>
            </div>

             {/* Card 6 */}
            <div className="bg-[#FAF8F0] border border-[#355E4B]/10 p-5 sm:p-6 rounded-2xl shadow-[inset_0_3px_10px_rgba(33,60,48,0.06)] hover:shadow-[0_15px_30px_rgba(33,60,48,0.08),_inset_0_3px_10px_rgba(33,60,48,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-pale text-brand-teal rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                </div>
                <div 
                  onClick={() => toggleCard(6)}
                  className="flex-1 min-w-0 flex items-center justify-between gap-2 cursor-pointer md:cursor-default select-none group/title"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">Alur Kerja Praktis & Mudah</h3>
                  <div className="md:hidden p-1 text-slate-400 group-hover/title:text-brand-teal rounded-full transition-all shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[6] ? "rotate-180 text-brand-teal" : ""}`} />
                  </div>
                </div>
              </div>
              <p className={`text-xs text-slate-500 font-light leading-relaxed text-justify font-sans transition-all duration-300 ${
                expandedCards[6] ? "block" : "hidden md:block"
              }`}>
                Sistem folder peninjauan terpusat memudahkan Anda melihat semua rancangan konten, memberikan revisi, hingga menyetujui materi siap tayang kapan saja.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
