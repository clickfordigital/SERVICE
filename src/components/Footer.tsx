import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  return (
    <footer className="bg-[#26140A] text-[#F2DFCE] pt-14 pb-24 md:pb-14 border-t border-[#4A2612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C68A2C] to-[#854820] flex items-center justify-center text-white font-serif font-bold text-lg">
                HB
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold text-white tracking-wider block">
                  ACHARYA HANISH BAGGA
                </span>
                <span className="text-[11px] text-[#C68A2C] font-semibold tracking-wide uppercase">
                  Vedic Astrologer &amp; Vastu Master
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D8C7B8] leading-relaxed">
              With 17+ years of experience and 50,000+ satisfied clients across 45+ countries, Acharya Hanish Bagga provides deeply accurate Vedic Career Astrology, Kundli analysis, and actionable remedies.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#E5B869]">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Jyotish Acharya &amp; Vastu Mentor</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-lg font-bold text-white tracking-wide border-b border-[#C68A2C]/30 pb-1">
              Astrological Services
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C7B8]">
              <li><a href="#hero" className="hover:text-white transition-colors">Career Astrology &amp; Job Timing</a></li>
              <li><a href="#service-benefits" className="hover:text-white transition-colors">Promotion &amp; Appraisal Guidance</a></li>
              <li><a href="#service-benefits" className="hover:text-white transition-colors">Business vs Job Decision</a></li>
              <li><a href="#service-benefits" className="hover:text-white transition-colors">Foreign Job &amp; Visa Astrology</a></li>
              <li><a href="#about-career-astrology" className="hover:text-white transition-colors">Vedic Career Chart Analysis</a></li>
              <li><a href="#what-you-get" className="hover:text-white transition-colors">Consultation Deliverables</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">Astrology Video Masterclasses</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Vedic Remedies &amp; Gemstones</a></li>
            </ul>
          </div>

          {/* Col 3: Career Guides & Queries */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-lg font-bold text-white tracking-wide border-b border-[#C68A2C]/30 pb-1">
              Career Astrology Insights
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C7B8]">
              <li><a href="#career-guide" className="hover:text-white transition-colors">Career Prediction by Date of Birth</a></li>
              <li><a href="#career-guide" className="hover:text-white transition-colors">10th House (Karma Bhava) Analysis</a></li>
              <li><a href="#career-guide" className="hover:text-white transition-colors">D10 Dashamsha Divisional Chart</a></li>
              <li><a href="#career-explorer" className="hover:text-white transition-colors">Vimshottari Dasha Job Timing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Astrology for Office Politics</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Gemstones for Career Success</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Appointments */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-lg font-bold text-white tracking-wide border-b border-[#C68A2C]/30 pb-1">
              Appointment Desk
            </h4>
            <p className="text-xs text-[#D8C7B8]">
              Consultations are conducted privately via Video Call (Zoom/Google Meet) or Phone.
            </p>

            <div className="space-y-2 text-xs text-[#E6D7C8] pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C68A2C]" />
                <span>+91 73000-04325 / +91 73000-04326</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C68A2C]" />
                <span>consult@hanishbagga.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C68A2C]" />
                <span>New Delhi, India (Global Online Consultation)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2 bg-[#854820] hover:bg-[#A85A1D] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer border border-[#C68A2C]/40"
              >
                Book 1-on-1 Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8988D] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Acharya Hanish Bagga. All Rights Reserved. Vedic Astrology &amp; Vastu Consultancy.
          </p>
          <div className="flex items-center space-x-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Consultation</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

        {/* Ethical Astrology Disclaimer */}
        <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-[#8C7A70] text-center max-w-4xl mx-auto">
          Disclaimer: Vedic Astrology is a predictive science and diagnostic guide based on ancient mathematical and celestial systems. Individual outcomes may vary depending on personal Karma, hard work, and free will.
        </div>

      </div>
    </footer>
  );
};
