import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/careerAstrologyData';
import { 
  Calendar, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Video, 
  Compass, 
  Layers,
  Phone,
  ShieldCheck,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useVedicTheme } from '../context/ThemeContext';

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  FileText,
  Sparkles
};

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section 
      id="how-it-works" 
      className="py-16 sm:py-24 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Background Motifs */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-10 -left-16 w-80 h-80 pointer-events-none opacity-5">
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="200,30 347,285 53,285" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-10 -right-16 w-80 h-80 pointer-events-none opacity-5">
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border shadow-2xs"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Consultation Process</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight leading-tight">
            How Your Career Astrology Consultation Works
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 font-normal leading-relaxed max-w-2xl mx-auto">
            A simple, structured, and 100% confidential 3-step consultation process to unlock your astrological career roadmap.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.icon] || Sparkles;

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DACD] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-2xl font-serif-heading font-black opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: currentTheme.primary }}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-[#3D2314] group-hover:text-[#854820] transition-colors leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#854820] mt-1" style={{ color: currentTheme.primary }}>
                        {step.subtitle}
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed whitespace-pre-line font-normal">
                      {step.description}
                    </div>

                    {/* Step Details Checklist if present */}
                    {step.details && (
                      <div className="mt-4 pt-4 border-t border-[#E8DACD]/80 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B62] block">
                          Required Information:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#3D2314]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0" style={{ color: currentTheme.primary }} />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-[#E8DACD]/60 flex items-center justify-between text-xs text-[#8C7A70]">
                  <span className="font-semibold text-[#854820]" style={{ color: currentTheme.primary }}>
                    Step {step.stepNumber} of 03
                  </span>
                  <span className="text-[11px]">
                    100% Confidential
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div 
          className="p-6 sm:p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl transition-colors duration-500"
          style={{ backgroundColor: currentTheme.primary }}
        >
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold">
              Ready to Discover Your Astrological Career Blueprint?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8] leading-relaxed font-normal">
              Book your personal consultation with Acharya Ganesh for comprehensive analysis and practical solutions.
            </p>
          </div>
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#FAF6F0] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            style={{ color: currentTheme.primary }}
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
