import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/careerAstrologyData';
import { Star, CheckCircle2, Quote, Filter, User, MapPin, Building, Sparkles, Compass } from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

// Astrological Rashi / Lagna details for testimonials
const ASTRO_DETAILS = [
  { lagna: 'Leo Ascendant (Simha)', dasha: 'Sun Mahadasha Activation' },
  { lagna: 'Capricorn Lagna (Makara)', dasha: 'Saturn Sasa Yoga & D10 Transit' },
  { lagna: 'Gemini Lagna (Mithuna)', dasha: 'Mercury-Jupiter Dasha Cycle' },
  { lagna: 'Scorpio Lagna (Vrischika)', dasha: 'Mars 10th Digbala Period' },
  { lagna: 'Taurus Lagna (Vrishabha)', dasha: 'Venus Raj Yoga Activation' },
  { lagna: 'Aries Lagna (Mesha)', dasha: 'Jupiter Transit over 10th Karma' }
];

export const TestimonialsSection: React.FC = () => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReviews = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-22 border-b relative overflow-hidden transition-colors duration-500"
      style={{ 
        backgroundColor: currentTheme.bgCream,
        borderColor: currentTheme.cardBorder 
      }}
    >
      {/* Astrological background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#854820]">
              <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Verified Client Success Stories</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            Trusted by Professionals Across Different Career Stages
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3 font-normal leading-relaxed">
            Real experiences from working professionals, senior executives, entrepreneurs, overseas job seekers and government-sector aspirants who sought guidance through career astrology.
          </p>

          {/* Google Review Trust Badge */}
          <div className="mt-5 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[#E8DACD] shadow-xs">
            <div className="flex items-center gap-1" style={{ color: currentTheme.accentGold }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#2C1E16]">
              4.9 / 5 Rating
            </span>
            <span className="text-xs text-[#7A6B62] border-l border-[#E8DACD] pl-3">
              5,000+ Verified Google Reviews
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'job-switch', label: 'Job Switch & Timing' },
            { id: 'promotion', label: 'Promotion & Growth' },
            { id: 'business', label: 'Business & Startups' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'text-white shadow-sm'
                  : 'bg-white text-[#4A3528] border-[#E8DACD] hover:bg-[#F5EBE1]'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? currentTheme.primary : undefined,
                borderColor: activeCategory === cat.id ? currentTheme.primary : undefined
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((item, index) => {
            const astro = ASTRO_DETAILS[index % ASTRO_DETAILS.length];

            return (
              <motion.div
                key={item.id}
                id={`review-${item.id}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-md transition-all flex flex-col justify-between h-full relative"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <div className="flex-1 flex flex-col">
                  {/* Rating & Astrological Lagna Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1" style={{ color: currentTheme.accentGold }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-[#854820] font-cinzel">
                      {astro.lagna.split(' ')[0]} Lagna
                    </span>
                  </div>

                  {/* Story quote */}
                  <div className="relative mb-4 flex-1">
                    <Quote className="w-8 h-8 text-[#EADBD0] absolute -top-3 -left-2 -z-0 opacity-60" />
                    <p className="text-xs sm:text-sm text-[#4A3528] leading-relaxed relative z-10 italic min-h-[5rem]">
                      "{item.story}"
                    </p>
                  </div>

                  {/* Highlighted Outcome Box */}
                  <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DACD] mb-4 min-h-[4.5rem] flex flex-col justify-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1" style={{ color: currentTheme.primary }}>
                      <Sparkles className="w-3 h-3" style={{ color: currentTheme.accentGold }} />
                      <span>Outcome Achieved:</span>
                    </div>
                    <p className="text-xs text-[#2C1E16] font-semibold leading-tight">
                      {item.outcome}
                    </p>
                  </div>
                </div>

                {/* Author Info & Astrological Timing Tag */}
                <div className="pt-3 border-t border-[#EBDCD0] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#2C1E16] flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <div className="text-[11px] text-[#7A6B62]">
                      {item.role} • {item.location}
                    </div>
                  </div>
                  <span className="text-[10px] text-[#8A7A70]">{item.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
