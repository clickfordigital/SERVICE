import React from 'react';
import { 
  Activity, 
  Apple, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { HEALTH_DELIVERABLES } from '../data/healthAstrologyData';

interface HealthDeliverablesSectionProps {
  onOpenBooking: () => void;
}

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  Activity: ({ className }) => <Activity className={className} />,
  Apple: ({ className }) => <Apple className={className} />,
  Calendar: ({ className }) => <Calendar className={className} />,
  Clock: ({ className }) => <Clock className={className} />,
  ShieldCheck: ({ className }) => <ShieldCheck className={className} />,
  Headphones: ({ className }) => <Headphones className={className} />
};

export const HealthDeliverablesSection: React.FC<HealthDeliverablesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="health-deliverables" className="py-14 sm:py-20 bg-white border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Package Deliverables</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            What You Receive in Your Health Astrology Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            Every session delivers actionable, holistic, and deeply personalized astrological insights designed to support your longevity and well-being.
          </p>
        </div>

        {/* Deliverables Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {HEALTH_DELIVERABLES.map((item) => {
            const Icon = ICONS[item.iconName] || Activity;
            return (
              <div
                key={item.id}
                id={`health-deliverable-${item.id}`}
                className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-white text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-xs mb-4 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-h-[3rem] flex items-center mb-2">
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>

                {item.badge && (
                  <div className="mt-4 pt-3 border-t border-[#EBDCD0] flex items-center justify-between text-xs font-semibold text-[#854820] min-h-[36px]">
                    <span>{item.badge}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A2C]"></span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#854820] to-[#5C2E11] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold">
              Ready to decode your health blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7EFE8] mt-1 max-w-xl">
              Appointments are strictly 1-on-1 with Acharya Ganesh &amp; Acharya Hanish Bagga. Secure your confidential reading slot today.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap bg-[#E5B869] hover:bg-[#D4A34F] text-[#3D2314] font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
