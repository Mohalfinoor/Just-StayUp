import React from "react";
import { Sparkles, Calendar, FileText, Share2, Award, Zap, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import rinokaLogo from "../assets/images/rinoka_logo_image_1779784263810.jpg";

interface HeaderProps {
  onPrint: () => void;
}

export default function Header({
  onPrint,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const sections = [
    { id: "benefits", label: "Benefit Penawaran", desc: "Keuntungan Kolaborasi" },
    { id: "mockups", label: "Galeri Mockup Konten", desc: "Ruang Presentasi Visual" },
    { id: "pricing", label: "Rate Card & Syarat", desc: "Investasi Bundling 2.5 Jt" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white text-slate-800 border-b border-slate-100 shadow-sm overflow-visible animate-none">
 
      {/* Main Centered Header Track */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-stretch justify-between gap-4 relative z-10 w-full">
        
        {/* Brand Logo Alignment */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Authentic StayUp Brand Logo with deep green background matching the uploaded logo */}
          <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[#355E4B]/10 p-1.5 hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 102 44" className="h-[14px] sm:h-4 w-auto animate-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stay in white */}
              <text x="0" y="31" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" fontWeight="800" fontSize="25" letterSpacing="-1px">Stay</text>
              {/* "u" with the upward arrow */}
              <rect x="58" y="19" width="5.5" height="12" rx="1" fill="#F5C443" />
              <path d="M58 29.5 C58 33.5, 69 33.5, 69 29.5" stroke="#F5C443" strokeWidth="5.5" strokeLinecap="round" fill="none" />
              <rect x="66.5" y="14" width="5.5" height="17" fill="#F5C443" />
              <polygon points="69.25,3 62,14 76.5,14" fill="#F5C443" />
              {/* Letter p */}
              <path d="M79.5 19.5 L79.5 37.5 M79.5 23 C82.5 20, 90.5 20, 90.5 25.5 C90.5 31, 82.5 31, 79.5 31" stroke="#F5C443" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* Collaboration Multiply/X Indicator */}
          <span className="text-slate-400 font-mono text-xs sm:text-sm select-none px-1.5 flex items-center justify-center leading-none">
            x
          </span>

          {/* Rinoka Brand Luxury Logo Badge (pure image reference in rounded-full container based on the user-provided logo asset) */}
          <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[#355E4B]/10 overflow-hidden bg-[#355E4B] hover:scale-105 transition-transform duration-300">
            <img 
              src={rinokaLogo} 
              alt="Rinoka Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Elegant accompanying title text for Rinoka (visible from sm screen) */}
          <div className="hidden xs:flex flex-col justify-center leading-none text-brand-teal-light pl-0.5">
            <span className="font-serif font-bold text-sm tracking-[0.14em] uppercase leading-none">Rinoka</span>
            <span className="font-sans text-[8px] font-semibold tracking-widest uppercase text-slate-400 mt-1 leading-none">Exclusive</span>
          </div>
        </div>
  
        {/* Navigation Links Aligned Next to Logo / on the Right - Desktop */}
        <div className="hidden md:flex items-center gap-x-8 lg:gap-x-10">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleScrollTo(sec.id)}
              className="shrink-0 outline-none text-brand-teal/80 hover:text-brand-teal font-sans font-bold text-xs uppercase tracking-wider cursor-pointer relative py-2 group transition-colors duration-300 flex items-center justify-center"
              id={`nav-link-${sec.id}`}
            >
              <span className="relative">
                {sec.label}
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </span>
            </button>
          ))}
        </div>
 
        {/* Hamburger Menu Trigger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-slate-600 hover:text-brand-teal focus:outline-none transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 animate-none" />
            ) : (
              <Menu className="w-5 h-5 animate-none" />
            )}
          </button>
        </div>
 
      </div>

      {/* Mobile Expandable Navbar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 bg-white relative z-20 shadow-inner overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className="block w-full text-left py-2 text-slate-700 hover:text-brand-teal font-sans font-bold text-xs sm:text-sm tracking-tight transition-colors border-b border-slate-50 last:border-b-0 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span>{sec.label}</span>
                    <span className="text-[10px] text-slate-400 font-light font-sans">{sec.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
