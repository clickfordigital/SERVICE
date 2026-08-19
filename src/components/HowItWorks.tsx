import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/careerAstrologyData';
import { Calendar, FileText, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  FileText,
  Sparkles
};

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#854820]"></span>
            <span>Simple, Confidential &amp; Seamless</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3">
            3 simple steps to unlock absolute astrological clarity and career direction.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.icon] || Sparkles;
            return (
              <div
                key={step.stepNumber}
                id={`step-card-${step.stepNumber}`}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Step Number Floating Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                    {step.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-heading text-2xl font-bold text-[#3D2314] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#854820] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-sm text-[#5D4E45] leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F5EBE1]">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#6B5B52]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#8A7A70]">Step {idx + 1} of 3</span>
                  {idx === 0 && (
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-[#854820] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Start Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#854820] hover:bg-[#663312] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-[#A85A1D]"
          >
            <span>Book Your Consultation Slot Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#7A6B62] mt-2">
            Instant booking confirmation • Direct slot allocation with Acharya Hanish Bagga
          </p>
        </div>

      </div>
    </section>
  );
};
