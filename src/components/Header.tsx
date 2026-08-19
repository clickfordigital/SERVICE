import React, { useState } from 'react';
import { Phone, User, Menu, X, ChevronDown, Sparkles, BookOpen, ShoppingBag, Layers, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAE6E1] shadow-xs font-sans transition-all">
      {/* TOP ROW: Logo on left, Contact numbers & Login buttons on right */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Authentic circular Acharya emblem logo matching the screenshot */}
            <div className="relative flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center">
                {/* Mandala / Sun wheel outer ring */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#A85A1D] drop-shadow-sm">
                  {/* Outer decorative ring with rays */}
                  <circle cx="50" cy="50" r="46" fill="#FBF6EE" stroke="#A85A1D" strokeWidth="2.5" strokeDasharray="3 2" />
                  <circle cx="50" cy="50" r="41" fill="#F6ECE0" stroke="#7A3E15" strokeWidth="1.5" />
                  
                  {/* Rays geometry */}
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="5"
                      x2="50"
                      y2="9"
                      stroke="#A85A1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`rotate(${i * 22.5} 50 50)`}
                    />
                  ))}

                  {/* Inner golden halo */}
                  <circle cx="50" cy="46" r="28" fill="#FCE8CF" stroke="#D49B45" strokeWidth="1.5" />
                  
                  {/* Meditating Acharya icon silhouette / graphic */}
                  <g transform="translate(24, 22) scale(0.52)">
                    {/* Head with Topknot (Shikha) */}
                    <ellipse cx="50" cy="22" rx="10" ry="12" fill="#854820" />
                    <ellipse cx="50" cy="11" rx="5" ry="6" fill="#663312" />
                    <circle cx="50" cy="7" r="3" fill="#D49B45" />
                    {/* Beard / Tilak */}
                    <path d="M43 24 Q50 35 57 24 Q50 40 43 24 Z" fill="#663312" />
                    {/* Saffron Angavastra / Robe */}
                    <path d="M30 42 C26 55, 20 72, 16 80 C32 82, 68 82, 84 80 C80 72, 74 55, 70 42 C62 38, 38 38, 30 42 Z" fill="#E67E22" stroke="#B95C08" strokeWidth="2" />
                    {/* Namaste / Dhyana hands */}
                    <path d="M42 54 C46 50, 54 50, 58 54 C58 64, 42 64, 42 54 Z" fill="#FAD7A0" />
                    {/* Rudraksha Mala */}
                    <path d="M39 37 Q50 48 61 37" fill="none" stroke="#663312" strokeWidth="2.5" strokeDasharray="2 2" />
                  </g>
                </svg>

                {/* Banner at bottom of logo */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#854820] via-[#A85A1D] to-[#854820] text-white text-[8px] sm:text-[9px] font-serif font-bold px-2 py-0.5 rounded shadow-sm border border-[#E5B869]/60">
                  Acharya Ganesh
                </div>
              </div>
            </div>
          </a>

          {/* Right Side: Phone Numbers & Login Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            
            {/* Phone 1: +91 73000-04325 */}
            <a 
              href="tel:+917300004325"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#854820] transition-colors group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#1F2937] group-hover:border-[#854820] flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-[#1F2937] group-hover:text-[#854820] transition-colors" />
              </div>
              <span className="tracking-tight text-[15px]">+91 73000-04325</span>
            </a>

            {/* Phone 2: +91 73000-04326 */}
            <a 
              href="tel:+917300004326"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#854820] transition-colors group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#1F2937] group-hover:border-[#854820] flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-[#1F2937] group-hover:text-[#854820] transition-colors" />
              </div>
              <span className="tracking-tight text-[15px]">+91 73000-04326</span>
            </a>

            {/* Log in Pill Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#1F2937] text-sm font-semibold text-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <User className="w-4 h-4" />
              <span>Log in</span>
            </button>

            {/* Course Login Pill Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#1F2937] text-sm font-semibold text-[#1F2937] hover:bg-[#854820] hover:border-[#854820] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>Course Login</span>
            </button>

          </div>

          {/* Tablet/Mobile Quick Contact & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+917300004325"
              className="flex items-center gap-1.5 text-xs font-bold text-[#1F2937] bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-gray-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 73000-04325</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-black"
            >
              Log in
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F2937] hover:text-[#854820] rounded-lg border border-gray-300"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* BOTTOM ROW: Centered Navigation Links matching screenshot */}
      <div className="hidden lg:block border-t border-[#F0EBE4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-12 py-3.5 text-[15px] font-semibold text-[#1F2937]">
            
            <a 
              href="#" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              Home
            </a>

            <a 
              href="#why-choose" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              About
            </a>

            <a 
              href="#internal-links" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              Courses
            </a>

            <a 
              href="#what-you-get" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              Products
            </a>

            {/* Services with active underline indicator since this is the Career Astrology Service page */}
            <div className="relative group">
              <a 
                href="#service-benefits" 
                className="text-[#854820] font-bold transition-colors py-1 flex items-center gap-1"
              >
                <span>Services</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#854820]"></span>
              </a>
            </div>

            <a 
              href="#hero-lead-form" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              Contact
            </a>

            <a 
              href="#career-guide" 
              className="hover:text-[#854820] transition-colors relative py-1"
            >
              Blogs
            </a>

          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 pt-3 pb-6 space-y-4 shadow-xl">
          
          {/* Mobile Links */}
          <div className="flex flex-col space-y-2 text-base font-semibold text-[#1F2937]">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Home
            </a>
            <a 
              href="#why-choose" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              About
            </a>
            <a 
              href="#internal-links" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Courses
            </a>
            <a 
              href="#what-you-get" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Products
            </a>
            <a 
              href="#service-benefits" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg bg-[#FAF6F0] text-[#854820] font-bold"
            >
              Services (Career Astrology)
            </a>
            <a 
              href="#hero-lead-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Contact
            </a>
            <a 
              href="#career-guide" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Blogs
            </a>
          </div>

          {/* Contact Numbers in Drawer */}
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <div className="text-xs font-bold text-gray-500 uppercase">Direct Helpline</div>
            <a 
              href="tel:+917300004325"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] py-1"
            >
              <Phone className="w-4 h-4 text-[#854820]" />
              <span>+91 73000-04325</span>
            </a>
            <a 
              href="tel:+917300004326"
              className="flex items-center gap-2 text-sm font-semibold text-[#1F2937] py-1"
            >
              <Phone className="w-4 h-4 text-[#854820]" />
              <span>+91 73000-04326</span>
            </a>
          </div>

          {/* Mobile Login Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="py-2.5 rounded-full border-2 border-black text-center text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <User className="w-4 h-4" />
              <span>Log in</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="py-2.5 rounded-full bg-[#854820] text-white text-center text-sm font-semibold"
            >
              Course Login
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
