import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, Stethoscope, Leaf, Clock } from 'lucide-react';
import { HEALTH_WHY_CHOOSE_ITEMS } from '../data/healthAstrologyData';

const ICONS = [Award, ShieldCheck, Leaf, Sparkles];

export const HealthWhyChooseUs: React.FC = () => {
  return (
    <section id="health-why-choose" className="py-12 sm:py-16 bg-[#FAF6F0] border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact typography & badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Why Trust Acharya Ganesh &amp; Acharya Hanish Bagga</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            Scientific, Ethical &amp; Authentic Vedic Medical Astrology
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            Combining 17+ years of classical Parashara &amp; Jaimini mastery with authentic Ayurvedic Tridosha diagnosis for actionable, non-fearmongering health guidance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {HEALTH_WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                id={`health-why-choose-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_28px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center mb-4 group-hover:bg-[#854820] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="min-h-[3.5rem] flex items-start mb-2.5">
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>

                {item.badge && (
                  <div className="mt-5 pt-4 border-t border-[#F0E4D8] flex items-center justify-between text-xs font-semibold text-[#854820] min-h-[44px]">
                    <span className="leading-tight">{item.badge}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A2C] shrink-0 ml-2"></span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
