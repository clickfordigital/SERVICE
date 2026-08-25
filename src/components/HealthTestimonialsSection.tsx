import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Sparkles, HeartPulse } from 'lucide-react';
import { HEALTH_REVIEWS, HealthReview } from '../data/healthAstrologyData';

export const HealthTestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'chronic' | 'surgery' | 'mental-peace'>('all');

  const filteredReviews = filter === 'all' 
    ? HEALTH_REVIEWS 
    : HEALTH_REVIEWS.filter(r => r.category === filter);

  return (
    <section id="health-testimonials" className="py-14 sm:py-20 bg-[#FAF6F0] border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Verified Patient &amp; Client Experiences</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            Real Stories of Health Recovery, Clarity &amp; Rejuvenation
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            Read how individuals and healthcare professionals utilized Vedic Medical Astrology to uncover constitutional root causes and regain vitality.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { label: 'All Reviews', value: 'all' },
            { label: 'Chronic Vitality & Spine', value: 'chronic' },
            { label: 'Surgery Timing & Muhurat', value: 'surgery' },
            { label: 'Mental Peace & Sleep', value: 'mental-peace' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filter === btn.value
                  ? 'bg-[#854820] text-white border-[#854820] shadow-sm'
                  : 'bg-white text-[#4A3528] border-[#E8DACD] hover:bg-[#F5EBE1]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid with Equal Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              id={`health-review-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-md transition-all flex flex-col justify-between h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C68A2C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#8A7A70]">
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
                    <h4 className="font-bold text-xs sm:text-sm text-[#2C1E16]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#7A6B62]">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-[#1E8E3E] bg-[#E6F4EA] px-2 py-0.5 rounded-full border border-[#CEEAD6] shrink-0">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
