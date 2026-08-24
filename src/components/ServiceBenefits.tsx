import React, { useState } from 'react';
import { SERVICE_BENEFITS } from '../data/careerAstrologyData';
import { 
  Compass, 
  CalendarClock, 
  TrendingUp, 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  CalendarClock,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Sparkles
};

interface ServiceBenefitsProps {
  onOpenBooking: () => void;
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ onOpenBooking }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="service-benefits" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>Comprehensive Vedic Career Coverage</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            Vedic Career Astrology Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3 max-w-2xl mx-auto">
            From discovering your true calling to timing salary appraisals and overcoming workplace politics — tailored guidance for every stage of your career.
          </p>
        </div>

        {/* 3 Core Benefit Cards in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.iconName] || Sparkles;
            const isExpanded = expandedCard === benefit.id;

            return (
              <div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                className="bg-[#FFFDF9] hover:bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#854820] bg-white px-2.5 py-1 rounded-full border border-[#E8DACD]">
                      {benefit.planetaryKey.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mb-2.5 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#5D4E45] leading-relaxed mb-4">
                    {benefit.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {benefit.keyAspects.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#6B5B52]">
                        <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded full description if toggled */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#E8DACD] text-xs text-[#5D4E45] space-y-2.5 bg-white/60 p-3 rounded-lg">
                      <p className="leading-relaxed font-normal">{benefit.fullDesc}</p>
                      <p className="text-[#854820] font-semibold">
                        <strong>Ideal For:</strong> {benefit.idealFor}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-2 border-t border-[#F0E4D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpandedCard(isExpanded ? null : benefit.id)}
                    className="text-xs font-semibold text-[#854820] hover:text-[#663312] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less Details' : 'Read Full Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-white bg-[#854820] hover:bg-[#663312] px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page Trust & Booking Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#F5EBE1] via-[#FAF6F0] to-[#F5EBE1] border border-[#E8DACD] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#854820] text-white flex items-center justify-center shrink-0 shadow-md">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
                Unsure which service matches your exact career situation?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5B52] mt-0.5">
                Acharya Hanish Bagga reviews your complete horoscope and addresses all career queries simultaneously in a single session.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 bg-[#854820] hover:bg-[#663312] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book 1-on-1 Career Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
