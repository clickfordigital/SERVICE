import React from 'react';
import { WHAT_YOULL_GET_DELIVERABLES } from '../data/careerAstrologyData';
import { 
  Compass, 
  CalendarCheck, 
  TrendingUp, 
  Target, 
  Layers, 
  Sparkles, 
  Check, 
  FileCheck2,
  Lock,
  ArrowRight
} from 'lucide-react';

const DELIVERABLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  CalendarCheck,
  TrendingUp,
  Target,
  Layers,
  Sparkles
};

interface DeliverablesSectionProps {
  onOpenBooking: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="what-you-get" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck2 className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>Tangible Value &amp; Takeaways</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            What You'll Receive in Your Consultation
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3">
            Clear, actionable outputs designed to remove career confusion and guide your decisions for the next 3 to 5 years.
          </p>
        </div>

        {/* 6 Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_YOULL_GET_DELIVERABLES.map((item) => {
            const Icon = DELIVERABLE_ICONS[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                id={`deliverable-${item.id}`}
                className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#854820] bg-[#F5EBE1] border border-[#E2D2C3] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5D4E45] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Included list */}
                  <div className="bg-white/80 rounded-xl p-4 border border-[#E8DACD] space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#854820]">
                      Key Highlights:
                    </div>
                    {item.included.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#4A3528]">
                        <Check className="w-3.5 h-3.5 text-[#1EBE5D] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#854820]">
                  <span className="flex items-center gap-1 text-[#6B5B52]">
                    <Lock className="w-3 h-3 text-[#854820]" /> 100% Confidential
                  </span>
                  <span className="text-[#854820]">Included in Session</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Assurance Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#854820] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold">
              Ready to receive your comprehensive Career Blueprint?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8]">
              Get your custom roadmap, dasha timelines, and remedies directly from Acharya Hanish Bagga.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 bg-[#FAF6F0] hover:bg-white text-[#854820] font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
