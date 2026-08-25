import React from 'react';
import { WHAT_YOULL_GET_DELIVERABLES } from '../data/careerAstrologyData';
import { 
  Compass, 
  CalendarCheck, 
  TrendingUp, 
  Target, 
  Layers, 
  Sparkles, 
  ShieldCheck,
  FileCheck2,
  ArrowRight
} from 'lucide-react';

const DELIVERABLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  CalendarCheck,
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DACD]">
            <FileCheck2 className="w-3.5 h-3.5 text-[#854820]" />
            <span>Clear Value From Your Consultation</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            What You'll Receive in Your Career Astrology Session
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3 font-normal leading-relaxed">
            A useful career astrology session should leave you with better clarity about your professional choices rather than creating more confusion.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#854820] uppercase tracking-wider mt-3">
            Your consultation may cover:
          </p>
        </div>

        {/* 7 Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WHAT_YOULL_GET_DELIVERABLES.map((item, idx) => {
            const Icon = DELIVERABLE_ICONS[item.icon] || Sparkles;
            const isLastSingle = idx === WHAT_YOULL_GET_DELIVERABLES.length - 1 && WHAT_YOULL_GET_DELIVERABLES.length % 3 === 1;
            return (
              <div
                key={item.id}
                id={`deliverable-${item.id}`}
                className={`bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isLastSingle ? 'lg:col-span-3 max-w-xl mx-auto w-full' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-xs mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Bottom Assurance Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#854820] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold">
              Looking to Get a Better Perspective on Your Career?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8] leading-relaxed font-normal">
              Get Career Astrology Chart Reading Advice according to your horoscope, Dasha Periods, Career Houses and Career Concerns.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 bg-[#FAF6F0] hover:bg-white text-[#854820] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
