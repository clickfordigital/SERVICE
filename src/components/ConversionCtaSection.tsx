import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Star, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConversionCtaSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const ConversionCtaSection: React.FC<ConversionCtaSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  return (
    <section 
      id="final-cta" 
      className="py-16 sm:py-24 relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5C2B0E 0%, #854820 50%, #6E3516 100%)'
      }}
    >
      {/* Astrological grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#E5B869_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FCEBD8] text-xs font-semibold backdrop-blur-sm shadow-sm mx-auto">
          <Sparkles className="w-4 h-4 text-[#E5B869]" />
          <span>Transform Career Uncertainty Into Confident Growth</span>
        </div>

        {/* Big impactful heading */}
        <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Take the First Step Towards a Fulfilling Career
        </h2>

        {/* Value subtext */}
        <p className="text-base sm:text-lg text-[#F7EFE8] max-w-2xl mx-auto font-light leading-relaxed">
          Whether you are anticipating a crucial job switch, navigating workplace politics, or debating entrepreneurship, Acharya Hanish Bagga’s 17+ years of Vedic expertise will give you absolute clarity and timing
        </p>

        {/* Core Guarantees Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#FCEBD8]">
          <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#E5B869]" /> 100% Confidential Reading
          </span>
          <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            <Clock className="w-4 h-4 text-[#E5B869]" /> Instant Slot Confirmation
          </span>
          <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            <Star className="w-4 h-4 text-[#E5B869] fill-[#E5B869]" /> 4.9/5 Rated by 50,000+ Clients
          </span>
        </div>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            id="final-book-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#854820] font-bold text-base rounded-xl shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 border border-white"
          >
            <Phone className="w-5 h-5" />
            <span>Book Your Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenWhatsApp}
            id="final-whatsapp-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base rounded-xl shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Consultation Now</span>
          </button>
        </div>

        {/* Disclaimer note */}
        <p className="text-[11px] text-[#E6D7C8] max-w-xl mx-auto pt-2 opacity-80">
          * Consultations are conducted 1-on-1 via private video or phone call. Strict privacy assured. No computerized generic printouts.
        </p>

      </div>
    </section>
  );
};
