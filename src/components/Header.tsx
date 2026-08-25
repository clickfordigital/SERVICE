import React, { useState } from 'react';
import { Phone, User, Menu, X, Palette, Sparkles, Compass } from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenBooking, 
  onOpenWhatsApp 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme, setIsCustomizerOpen } = useVedicTheme();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAE6E1] shadow-xs font-sans transition-all">
      
      {/* Top Astrological Navagraha & Vedic Ribbon */}
      <div 
        className="text-white py-1 px-4 text-[11px] font-medium text-center flex items-center justify-between transition-colors duration-500 overflow-hidden"
        style={{ backgroundColor: currentTheme.primaryDark }}
      >
        <div className="hidden sm:flex items-center gap-3 text-white/80 font-serif">
          <span>☉ Surya</span>
          <span>•</span>
          <span>☽ Chandra</span>
          <span>•</span>
          <span>♂ Mangala</span>
          <span>•</span>
          <span>☿ Budha</span>
          <span>•</span>
          <span>♃ Guru</span>
          <span>•</span>
          <span>♀ Shukra</span>
          <span>•</span>
          <span>♄ Shani</span>
        </div>

        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-[#E5B869]" />
          <span>Vedic Career Horoscope Consultation • Acharya Ganesh</span>
        </div>

        {/* Theme button on top bar */}
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-[10px] font-bold text-white transition-colors cursor-pointer border border-white/20"
        >
          <Palette className="w-3 h-3 text-[#E5B869]" />
          <span>Change Theme ({currentTheme.name.split('&')[0]})</span>
        </button>
      </div>

      {/* TOP ROW: Logo on left, Contact numbers & Login buttons on right */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Authentic circular Acharya emblem logo */}
            <div className="relative flex items-center justify-center">
              <div className="w-14 h-14 sm:w-15 sm:h-15 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#A85A1D] drop-shadow-sm">
                  <circle cx="50" cy="50" r="46" fill="#FBF6EE" stroke={currentTheme.primary} strokeWidth="2.5" strokeDasharray="3 2" />
                  <circle cx="50" cy="50" r="41" fill="#F6ECE0" stroke={currentTheme.primaryDark} strokeWidth="1.5" />
                  
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="5"
                      x2="50"
                      y2="9"
                      stroke={currentTheme.primary}
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`rotate(${i * 22.5} 50 50)`}
                    />
                  ))}

                  <circle cx="50" cy="46" r="28" fill="#FCE8CF" stroke="#D49B45" strokeWidth="1.5" />
                  
                  <g transform="translate(24, 22) scale(0.52)">
                    <ellipse cx="50" cy="22" rx="10" ry="12" fill={currentTheme.primary} />
                    <ellipse cx="50" cy="11" rx="5" ry="6" fill={currentTheme.primaryDark} />
                    <circle cx="50" cy="7" r="3" fill="#D49B45" />
                    <path d="M43 24 Q50 35 57 24 Q50 40 43 24 Z" fill={currentTheme.primaryDark} />
                    <path d="M30 42 C26 55, 20 72, 16 80 C32 82, 68 82, 84 80 C80 72, 74 55, 70 42 C62 38, 38 38, 30 42 Z" fill="#E67E22" stroke="#B95C08" strokeWidth="2" />
                    <path d="M42 54 C46 50, 54 50, 58 54 C58 64, 42 64, 42 54 Z" fill="#FAD7A0" />
                    <path d="M39 37 Q50 48 61 37" fill="none" stroke={currentTheme.primaryDark} strokeWidth="2.5" strokeDasharray="2 2" />
                  </g>
                </svg>

                <div 
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-[8px] sm:text-[9px] font-serif font-bold px-2 py-0.5 rounded shadow-sm border border-[#E5B869]/60"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  Acharya Ganesh
                </div>
              </div>
            </div>
          </a>

          {/* Right Side: Phone Numbers & Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            
            {/* Phone 1: +91 73000-04325 */}
            <a 
              href="tel:+917300004325"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#854820] transition-colors group cursor-pointer"
            >
              <div 
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{ borderColor: currentTheme.primary, color: currentTheme.primary }}
              >
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-tight text-[15px]">+91 73000-04325</span>
            </a>

            {/* Phone 2: +91 73000-04326 */}
            <a 
              href="tel:+917300004326"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#854820] transition-colors group cursor-pointer"
            >
              <div 
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{ borderColor: currentTheme.primary, color: currentTheme.primary }}
              >
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-tight text-[15px]">+91 73000-04326</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 text-xs font-bold transition-all cursor-pointer shadow-xs"
              style={{
                borderColor: currentTheme.primary,
                color: currentTheme.primary,
                backgroundColor: currentTheme.primaryLight
              }}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Theme</span>
            </button>

            {/* Log in Pill Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-[#1F2937] text-xs font-bold text-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <User className="w-3.5 h-3.5" />
              <span>Log in</span>
            </button>

            {/* Course Login Pill Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center px-5 py-2 rounded-full text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <span>Course Login</span>
            </button>

          </div>

          {/* Tablet/Mobile Quick Contact & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="p-2 rounded-full border"
              style={{ color: currentTheme.primary, borderColor: currentTheme.cardBorder }}
              title="Theme switcher"
            >
              <Palette className="w-4 h-4" />
            </button>

            <a
              href="tel:+917300004325"
              className="flex items-center gap-1 text-xs font-bold text-[#1F2937] bg-[#F3F4F6] px-2.5 py-1.5 rounded-full border border-gray-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F2937] hover:text-[#854820] rounded-lg border border-gray-300"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* BOTTOM ROW: Navigation Links */}
      <div className="hidden lg:block border-t border-[#F0EBE4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-10 py-3 text-sm font-semibold text-[#1F2937]">
            
            <a href="#" className="hover:text-[#854820] transition-colors py-1">
              Home
            </a>

            <a href="#about-career-astrology" className="hover:text-[#854820] transition-colors py-1">
              About
            </a>

            <a 
              href="#service-benefits" 
              className="hover:text-[#854820] transition-colors py-1 font-bold"
              style={{ color: currentTheme.primary }}
            >
              Career Services
            </a>

            <a href="#how-it-works" className="hover:text-[#854820] transition-colors py-1">
              How It Works
            </a>

            <a href="#what-you-get" className="hover:text-[#854820] transition-colors py-1">
              Deliverables
            </a>

            <a href="#videos" className="hover:text-[#854820] transition-colors py-1">
              Masterclasses
            </a>

            <a href="#faq" className="hover:text-[#854820] transition-colors py-1">
              FAQs
            </a>

            <a 
              href="#hero-lead-form" 
              className="hover:opacity-90 transition-opacity py-1 font-bold"
              style={{ color: currentTheme.primary }}
            >
              Book Consultation
            </a>

          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-[#1F2937]">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              Home
            </a>
            <a href="#about-career-astrology" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              About Career Astrology
            </a>
            <a href="#service-benefits" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100 font-bold" style={{ color: currentTheme.primary }}>
              Career Guidance Services
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              How Consultation Works
            </a>
            <a href="#what-you-get" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              Deliverables &amp; Outcomes
            </a>
            <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              YouTube Masterclasses (155K+)
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-100">
              FAQs
            </a>
            <a href="#hero-lead-form" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg font-bold" style={{ color: currentTheme.primary }}>
              Book Consultation
            </a>
          </div>

          <div className="pt-2 border-t border-gray-200 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCustomizerOpen(true);
              }}
              className="flex-1 py-2.5 text-xs font-bold rounded-xl border flex items-center justify-center gap-1.5"
              style={{ borderColor: currentTheme.primary, color: currentTheme.primary }}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Change Theme</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex-1 py-2.5 text-xs font-bold text-white rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <span>Book Call</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
