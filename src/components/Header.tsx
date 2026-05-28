import React from "react";
import { Sparkles, Calendar, FileText, Share2, Award, Zap, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import rinokaLogo from "../assets/images/rinoka_logo_image_1779784263810.jpg";
// @ts-ignore
import stayupLogo from "../assets/images/StayUp Logo.png";

interface HeaderProps {
  onPrint: () => void;
}

export default function Header({
  onPrint,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("pricing");

  const sections = [
    { id: "pricing", label: "Rate Card & Syarat", desc: "Investasi Bundling 2.5 Jt" },
    { id: "benefits", label: "Benefit Penawaran", desc: "Keuntungan Kolaborasi" },
    { id: "mockups", label: "Galeri Mockup Konten", desc: "Ruang Presentasi Visual" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset so transition happens when scroll enters section
      
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop - 95; // perfectly offset the fixed header with pleasant breathing room
      
      const startY = window.pageYOffset || document.documentElement.scrollTop;
      const difference = targetTop - startY;
      const startTime = performance.now();
      const duration = 600; // smooth 600ms transition duration

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quad ease-in-out easing
        const ease = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startY + difference * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      // Defer scroll animation just slightly to let the current turn of state transition finish
      setTimeout(() => {
        requestAnimationFrame(step);
      }, 30);
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl overflow-visible print:hidden flex items-center justify-between gap-4 animate-none ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 1. Left Pill: Brand Logos (StayUp x Rinoka) with Glassmorphism Background */}
      <div className="bg-white/40 backdrop-blur-lg border border-white/50 shadow-lg shadow-black/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-2.5 shrink-0 pointer-events-auto transition-transform duration-300 hover:scale-[1.02]">
        {/* Authentic StayUp Brand Logo - Round Container */}
        <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center shrink-0 overflow-hidden">
          <img 
            src={stayupLogo} 
            alt="StayUp Logo" 
            className="w-full h-full object-cover rounded-full" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Collaboration Multiply/X Indicator */}
        <span className="text-[#213C30]/50 font-sans font-bold text-xs select-none px-0.5 flex items-center justify-center leading-none">
          ×
        </span>

        {/* Rinoka Brand Luxury Logo Badge */}
        <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center shrink-0 shadow-md border border-white/10 overflow-hidden bg-[#355E4B]">
          <img 
            src={rinokaLogo} 
            alt="Rinoka Logo" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
  
      {/* 2. Center Pill (Desktop): Navigation Links - Transparent Container with Padding (Glassmorphism) */}
      <div className="hidden md:flex items-center gap-x-2 bg-white/40 backdrop-blur-lg border border-white/50 shadow-lg shadow-black/5 px-5 py-1.5 sm:py-2 rounded-full shrink-0 pointer-events-auto md:absolute md:left-1/2 md:-translate-x-1/2 z-50 w-max max-w-max flex-nowrap whitespace-nowrap transition-all duration-300">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => handleScrollTo(sec.id)}
              className={`shrink-0 outline-none font-sans text-[11px] sm:text-xs uppercase tracking-wider cursor-pointer px-4 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center border border-transparent ${
                isActive
                  ? "text-[#213C30] font-bold scale-105"
                  : "text-[#213C30]/60 hover:text-[#213C30] font-medium"
              }`}
              id={`nav-link-${sec.id}`}
            >
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Right Pill (Desktop): Cetak PDF CTA */}
      <div className="hidden md:flex items-center pointer-events-auto shrink-0 select-none">
        <button
          onClick={onPrint}
          className="flex items-center gap-1.5 bg-[#213C30]/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-4 py-2 hover:scale-[1.02] text-[#FAF8F0]/90 hover:text-white hover:bg-white/10 active:scale-95 focus:outline-none transition-all cursor-pointer text-xs font-medium tracking-wide"
        >
          <FileText className="w-3.5 h-3.5 text-white/70" />
          <span>Cetak PDF</span>
        </button>
      </div>

      {/* 4. Right Pill (Mobile): Hamburger Trigger */}
      <div className="md:hidden flex items-center pointer-events-auto shrink-0">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-[#213C30]/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-full text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10 focus:outline-none transition-all cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile Expandable Navbar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-[52px] left-0 right-0 border border-white/10 bg-[#213C30]/95 backdrop-blur-md rounded-3xl z-40 shadow-2xl overflow-hidden w-full pointer-events-auto"
          >
            <div className="px-5 py-4 space-y-2">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className={`block w-full text-left py-2.5 px-3.5 rounded-2xl font-sans font-medium text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FAF8F0] text-[#213C30] font-bold shadow-md"
                        : "text-white/90 hover:text-white hover:bg-white/5 active:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{sec.label}</span>
                      <span className={`text-[9px] font-sans tracking-wide uppercase ${isActive ? "text-[#213C30]/75 font-semibold" : "text-[#FAF8F0]/50 font-light"}`}>{sec.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
