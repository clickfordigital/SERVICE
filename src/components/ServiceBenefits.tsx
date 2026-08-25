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
  UserCheck,
  Sun,
  Moon,
  Zap,
  Globe
} from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  CalendarClock,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Sparkles
};

// Planetary Ruling Archetype details for deeper astrological feel
const PLANETARY_ARCHETYPES: Record<string, { glyph: string; planet: string; sanskrit: string }> = {
  '1': { glyph: '☉', planet: 'Sun & Mars', sanskrit: 'Surya & Mangala (Digbala)' },
  '2': { glyph: '♄', planet: 'Saturn & Jupiter', sanskrit: 'Shani & Guru (Dasha Karma)' },
  '3': { glyph: '☿', planet: 'Mercury & Venus', sanskrit: 'Budha & Shukra (D10 Vyapar)' },
  '4': { glyph: '☊', planet: 'Rahu & Moon', sanskrit: 'Rahu & Chandra (Videsh Gamana)' },
  '5': { glyph: '♃', planet: 'Jupiter & 10th Lord', sanskrit: 'Guru & Dashamesh' },
  '6': { glyph: '⚕', planet: 'Navagraha Upayas', sanskrit: 'Vedic Yantras & Mantras' }
};

interface ServiceBenefitsProps {
  onOpenBooking: () => void;
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ onOpenBooking }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  return (
    <section 
      id="service-benefits" 
      className="py-16 sm:py-22 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Astrological background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-1/3 -right-20 w-80 h-80 pointer-events-none opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#854820]">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="100,15 175,150 25,150" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="100,185 175,50 25,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Vedic Career Astrology Solutions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Vedic Career Guidance for Every Stage of Your Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 leading-relaxed font-normal">
            From choosing a suitable profession to understanding a difficult job phase, career astrology evaluates your specific professional questions through the exact planetary configurations in your horoscope.
          </p>
        </div>

        {/* 3 Core Benefit Cards in a Grid with Vedic Planetary Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {SERVICE_BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.iconName] || Sparkles;
            const astroData = PLANETARY_ARCHETYPES[benefit.id] || { glyph: '☉', planet: 'Vedic Planets', sanskrit: 'Navagraha' };

            return (
              <motion.div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FFFDF9] hover:bg-white rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_rgba(133,72,32,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                {/* Subtle top glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20 transition-transform group-hover:scale-125"
                  style={{ backgroundColor: currentTheme.accentGold }}
                />

                <div className="flex-1 flex flex-col relative z-10">
                  {/* Top Bar with Icon & Planetary Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors"
                      style={{ 
                        backgroundColor: currentTheme.primaryLight,
                        borderColor: currentTheme.cardBorder,
                        color: currentTheme.primary
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Planetary Ruling Glyph Badge */}
                    <div 
                      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-2xs bg-white"
                      style={{ 
                        borderColor: currentTheme.cardBorder,
                        color: currentTheme.primary
                      }}
                    >
                      <span className="font-serif font-black text-sm">{astroData.glyph}</span>
                      <span>{benefit.planetaryKey}</span>
                    </div>
                  </div>

                  <div className="min-h-[3.75rem] flex items-center mb-2">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] leading-snug group-hover:text-[#854820] transition-colors">
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
                        <CheckCircle2 
                          className="w-4 h-4 shrink-0 mt-0.5" 
                          style={{ color: currentTheme.primary }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className="pt-4 mt-2 border-t relative z-10"
                  style={{ borderColor: currentTheme.cardBorder }}
                >
                  <button
                    onClick={onOpenBooking}
                    className="w-full text-xs sm:text-sm font-bold text-white px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer min-h-[42px]"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <span>Consult Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
