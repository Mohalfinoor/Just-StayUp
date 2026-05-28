import React from "react";
import { Eye, Image as ImageIcon } from "lucide-react";

interface MockupFeed {
  id: number;
  title: string;
  format: string;
  image?: string;
  concept: string;
  dimensions: string;
}

interface MockupsSectionProps {
  mockupFeeds: MockupFeed[];
  setActiveLightboxImage: (img: string | null) => void;
  setActiveLightboxTitle: (title: string | null) => void;
}

export default function MockupsSection({
  mockupFeeds,
  setActiveLightboxImage,
  setActiveLightboxTitle,
}: MockupsSectionProps) {
  return (
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
                            const imgPath = feed.image ? (feed.image.startsWith("src/") ? "/" + feed.image : feed.image) : "";
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
  );
}
