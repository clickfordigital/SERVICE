import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/careerAstrologyData';
import { Sparkles, UserCheck, ShieldAlert, Award, Compass, Sun, Moon, Zap } from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

const ICONS = [Sparkles, UserCheck, ShieldAlert, Award];

const VEDIC_BADGES = [
  'Parashari & Jaimini Sutras',
  '1-on-1 Personalized Reading',
  'Precise Dasha & Gochar Timing',
  'Authentic Sattvic Upayas'
];

export const WhyChooseUs: React.FC = () => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  return (
    <section 
      id="why-choose" 
      className="py-14 sm:py-20 border-b relative overflow-hidden transition-colors duration-500"
      style={{ 
        backgroundColor: currentTheme.bgCream,
        borderColor: currentTheme.cardBorder 
      }}
    >
      {/* Astrological motifs watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none opacity-5">
            <svg viewBox="0 0 400 400" className="w-full h-full text-[#854820]">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
              <polygon points="200,20 380,320 20,320" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="200,380 380,80 20,80" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching screenshot with Vedic tag */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>17+ Years of Authentic Astrological Excellence</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Why Choose Our Career Astrology Services?
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 font-normal leading-relaxed">
            Professional choices can impact financial earnings, security, self-assurance, family obligations and future development.
          </p>
        </div>

        {/* 4 Cards Grid - Enhanced with Vedic motifs & Theme styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const vedicTag = VEDIC_BADGES[idx % VEDIC_BADGES.length];

            return (
              <motion.div
                key={idx}
                id={`why-choose-card-${idx}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                {/* Subtle corner glyph watermark */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#C68A2C]/10 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />

                <div className="flex-1 flex flex-col relative z-10">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 shrink-0 border"
                    style={{ 
                      backgroundColor: currentTheme.primaryLight,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.primary
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="min-h-[3.5rem] flex items-start mb-2.5">
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] tracking-tight leading-snug group-hover:text-[#854820] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>

                <div 
                  className="mt-5 pt-4 border-t flex items-center justify-between text-xs font-semibold min-h-[44px] relative z-10"
                  style={{ 
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.primary
                  }}
                >
                  <span className="leading-tight">{item.badge || vedicTag}</span>
                  <span 
                    className="w-2 h-2 rounded-full shrink-0 ml-2"
                    style={{ backgroundColor: currentTheme.accentGold }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
