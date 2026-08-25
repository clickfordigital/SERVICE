import React from 'react';
import { Sparkles, Calendar, MessageCircle, Phone, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';

interface HealthConversionCtaSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const HealthConversionCtaSection: React.FC<HealthConversionCtaSectionProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  return (
    <section
      id="health-conversion-cta"
      className="relative py-16 sm:py-20 bg-[#854820] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5C2E11 0%, #854820 50%, #6C3515 100%)',
      }}
    >
      {/* Background radial highlights */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E5B869_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C68A2C]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FCEBD8] text-xs font-semibold backdrop-blur-sm shadow-sm">
          <HeartPulse className="w-3.5 h-3.5 text-[#E5B869]" />
          <span>Transform Health Uncertainty Into Proactive Vitality</span>
        </div>

        {/* Big impactful heading */}
        <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Take the First Step Towards Reclaiming Vibrant Health &amp; Longevity
        </h2>

        {/* Value subtext */}
        <p className="text-sm sm:text-base text-[#F7EFE8] max-w-2xl mx-auto leading-relaxed font-light">
          Whether you are navigating chronic bodily imbalances, planning surgical timing, or seeking harmony for your Ayurvedic Tridoshas, Acharya Ganesh &amp; Acharya Hanish Bagga’s 17+ years of Vedic expertise will give you constitutional clarity and proactive peace of mind.
        </p>

        {/* Core Guarantees Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#F2DFCE] pt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> 100% Confidential Consultation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> Doctor-Synergized Ethical Guidance
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> Non-Invasive Sattvic Remedies
          </span>
        </div>

        {/* Big Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#E5B869] hover:bg-[#D4A34F] text-[#3D2314] font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Health Consultation Now</span>
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-7 py-4 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Direct WhatsApp Helpline</span>
          </button>
        </div>

        {/* Helpline reassurance */}
        <div className="pt-2 text-xs text-[#EADBD0]">
          <span>Need immediate assistance? Call our dedicated desk: </span>
          <a href="tel:+917300004325" className="font-bold text-white underline hover:text-[#E5B869]">
            +91 73000-04325
          </a>
        </div>

      </div>
    </section>
  );
};
