import React from 'react';
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
  UserCheck
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
  return (
    <section id="service-benefits" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DACD]">
            <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
            <span>Comprehensive Career Astrology Solutions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Vedic Career Guidance for Every Stage of Your Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 leading-relaxed font-normal">
            From choosing a suitable profession to understanding a difficult job phase, career astrology can be used to study different professional questions through your individual horoscope.
          </p>
        </div>

        {/* 3 Core Benefit Cards in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {SERVICE_BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.iconName] || Sparkles;

            return (
              <div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                className="bg-[#FFFDF9] hover:bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] hover:border-[#854820]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#854820] bg-white px-3 py-1 rounded-full border border-[#E8DACD] shadow-2xs">
                      {benefit.planetaryKey}
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

                <div className="pt-4 mt-2 border-t border-[#F0E4D8]">
                  <button
                    onClick={onOpenBooking}
                    className="w-full text-xs sm:text-sm font-bold text-white bg-[#854820] hover:bg-[#663312] px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer min-h-[42px]"
                  >
                    <span>Consult Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page Trust & Booking Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#F5EBE1] via-[#FAF6F0] to-[#F5EBE1] border border-[#E8DACD] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#854820] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5 sm:mt-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
                Unsure Which Career Service Matches Your Situation?
              </h4>
              <div className="text-xs sm:text-sm text-[#6B5B52] mt-1 leading-relaxed max-w-2xl space-y-1">
                <p>You do not need to diagnose your horoscope yourself.</p>
                <p>During a complete career astrology consultation, Acharya Ganesh can evaluate multiple professional questions within the same session and explain the major factors influencing your current situation.</p>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 bg-[#854820] hover:bg-[#663312] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span>Book a 1-on-1 Career Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
