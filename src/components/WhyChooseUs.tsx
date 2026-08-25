import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/careerAstrologyData';
import { Sparkles, UserCheck, ShieldAlert, Award } from 'lucide-react';

const ICONS = [Sparkles, UserCheck, ShieldAlert, Award];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose" className="py-14 sm:py-18 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Why Choose Our Career Astrology Services?
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 font-normal leading-relaxed">
            Professional choices can impact financial earnings, security, self-assurance, family obligations and future development. The career astrology consultation is based on your horoscope rather than making general predictions on the basis of your zodiac sign.
          </p>
        </div>

        {/* 4 Cards Grid - Enhanced visual replica of screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                id={`why-choose-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_28px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center mb-4 group-hover:bg-[#854820] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#6B5B52] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F0E4D8] flex items-center justify-between text-xs font-semibold text-[#854820]">
                  <span>{item.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C68A2C]"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
