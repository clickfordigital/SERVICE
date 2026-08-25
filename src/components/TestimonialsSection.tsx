import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/careerAstrologyData';
import { Star, CheckCircle2, Quote, Filter, User, MapPin, Building, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReviews = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DACD]">
            <Star className="w-3.5 h-3.5 text-[#854820] fill-[#854820]" />
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
            <div className="flex items-center gap-1 text-[#C68A2C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C68A2C]" />
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
                  ? 'bg-[#854820] text-white border-[#854820] shadow-sm'
                  : 'bg-white text-[#4A3528] border-[#E8DACD] hover:bg-[#F5EBE1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              id={`review-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-md transition-all flex flex-col justify-between h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C68A2C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C68A2C]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8A7A70] font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Story quote */}
                <div className="relative mb-4 flex-1">
                  <Quote className="w-8 h-8 text-[#EADBD0] absolute -top-3 -left-2 -z-0 opacity-60" />
                  <p className="text-xs sm:text-sm text-[#4A3528] leading-relaxed relative z-10 italic min-h-[5.5rem]">
                    "{item.story}"
                  </p>
                </div>

                {/* Highlighted Outcome Box */}
                <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DACD] mb-5 min-h-[5.5rem] flex flex-col justify-center">
                  <div className="text-[10px] font-bold text-[#854820] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C68A2C]" /> Outcome Achieved:
                  </div>
                  <p className="text-xs font-semibold text-[#2C1E16] leading-snug">
                    {item.outcome}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[52px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5EBE1] text-[#854820] font-bold font-serif flex items-center justify-center border border-[#E8DACD] shrink-0">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2C1E16] flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1EBE5D]" />
                      )}
                    </div>
                    <div className="text-[11px] text-[#7A6B62]">
                      {item.role}
                    </div>
                    <div className="text-[10px] text-[#9A8B82] flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" /> {item.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
