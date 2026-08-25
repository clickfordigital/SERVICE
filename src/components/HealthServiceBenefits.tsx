import React from 'react';
import { 
  Activity, 
  Calendar, 
  Apple, 
  HeartPulse, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { HEALTH_BENEFITS } from '../data/healthAstrologyData';

interface HealthServiceBenefitsProps {
  onOpenBooking: () => void;
}

const ICON_COMPONENTS: Record<string, React.FC<{ className?: string }>> = {
  Activity: ({ className }) => <Activity className={className} />,
  Calendar: ({ className }) => <Calendar className={className} />,
  Apple: ({ className }) => <Apple className={className} />,
  HeartPulse: ({ className }) => <HeartPulse className={className} />,
  Clock: ({ className }) => <Clock className={className} />,
  ShieldCheck: ({ className }) => <ShieldCheck className={className} />
};

export const HealthServiceBenefits: React.FC<HealthServiceBenefitsProps> = ({ onOpenBooking }) => {
  return (
    <section id="health-service-benefits" className="py-14 sm:py-20 bg-white border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Health Astrology Services</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            6 Core Pillars of Vedic Health &amp; Medical Horoscope Analysis
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            From organ vulnerability mapping and surgery Muhurats to Ayurvedic Tridosha balance and non-invasive remedies, explore our tailored medical astrology solutions.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {HEALTH_BENEFITS.map((benefit) => {
            const Icon = ICON_COMPONENTS[benefit.iconType] || Activity;
            return (
              <div
                key={benefit.id}
                id={`health-benefit-card-${benefit.id}`}
                className="bg-[#FFFDF9] hover:bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#854820] bg-white px-3 py-1 rounded-full border border-[#E8DACD] shadow-2xs">
                      {benefit.badge}
                    </span>
                  </div>

                  <div className="min-h-[3.75rem] flex items-center mb-3">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] leading-snug">
                      {benefit.title}
                    </h3>
                  </div>

                  <div className="min-h-[3.5rem] mb-4">
                    <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                      {benefit.shortDesc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {benefit.keyAspects.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5A4A42] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 mt-2 border-t border-[#F0E4D8]">
                  <button
                    onClick={onOpenBooking}
                    className="w-full text-xs sm:text-sm font-bold text-white bg-[#854820] hover:bg-[#663312] px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer min-h-[42px]"
                  >
                    <span>Consult on Health Horoscope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
