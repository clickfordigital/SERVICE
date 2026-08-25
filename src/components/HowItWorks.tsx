import React from 'react';
import { 
  Calendar, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Video, 
  Phone,
  Compass, 
  Layers,
  Sparkle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useVedicTheme } from '../context/ThemeContext';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  const stepsData = [
    {
      number: '01',
      stepNum: 1,
      title: 'Book Your Consultation',
      subtitle: 'Select Your Preferred Slot & Mode',
      icon: Calendar,
      badge: 'Step 1 of 4 • Reservation',
      phaseLabel: 'Initiation',
      pills: [
        { label: 'Live Video (Meet / Zoom)', icon: Video },
        { label: 'Direct Audio Call', icon: Phone },
        { label: 'Instant Slot Confirmation', icon: Clock }
      ],
      highlight: 'Direct slot reservation with instant confirmation'
    },
    {
      number: '02',
      stepNum: 2,
      title: 'Share Correct Birth Details',
      subtitle: 'Date, Exact Time & Place of Birth',
      icon: FileText,
      badge: 'Step 2 of 4 • Astronomical Input',
      phaseLabel: 'Chart Casting',
      checklist: [
        'Date of birth (DD/MM/YYYY)',
        'Accurate time of birth (with AM/PM)',
        'City, state and country of birth',
        'Current profession & designation',
        'Major career concerns or stagnations',
        'Any specific impending decision you are considering'
      ],
      highlight: 'Precise coordinates ensure exact Lagna (Ascendant) & house calculations'
    },
    {
      number: '03',
      stepNum: 3,
      title: 'Kundli & D10 Chart Analysis',
      subtitle: '10th House Karma & Divisional Study',
      icon: Layers,
      badge: 'Step 3 of 4 • Planetary Diagnostic',
      phaseLabel: 'Vedic Assessment',
      tags: [
        '10th House Karma Bhava',
        'D10 Dashamsha Divisional Chart',
        'Vimshottari Dasha & Antardasha Cycles',
        'Planetary Yogas, Combustions & Transits',
        '6th House (Service) & 11th House (Gains)',
        'Amatyakaraka (Career Indicator Planet)'
      ],
      highlight: 'Holistic assessment combining D1 foundation and D10 career chart'
    },
    {
      number: '04',
      stepNum: 4,
      title: 'Receive 1-on-1 Guidance',
      subtitle: 'Horoscope Reading & Practical Roadmap',
      icon: Sparkles,
      badge: 'Step 4 of 4 • Actionable Clarity',
      phaseLabel: 'Remedial Roadmap',
      tags: [
        'Career Timing & Transition Windows',
        'Promotion & Appraisal Outlook',
        'Authentic Vedic Remedies & Gemstone Advice',
        'Comprehensive 1-on-1 Interactive Q&A'
      ],
      highlight: 'Live 1-on-1 discussion & structured professional action plan'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative py-18 sm:py-24 border-b overflow-hidden transition-colors duration-500"
      style={{ 
        backgroundColor: currentTheme.bgCream,
        borderColor: currentTheme.cardBorder 
      }}
    >
      {/* Background Astrological Watermark Motifs */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-12 -left-20 w-80 h-80 pointer-events-none opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="200,30 347,285 53,285" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <polygon points="200,370 347,115 53,115" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </svg>
          </div>
          <div className="absolute bottom-10 -right-20 w-80 h-80 pointer-events-none opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border shadow-2xs"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Consultation Process • 4 Step Sequence</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight leading-tight">
            How Career Astrology Consultation Works
          </h2>

          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 leading-relaxed font-normal">
            A structured, transparent four-stage consultation process engineered to give you precise planetary insights, career timing, and actionable Vedic remedies.
          </p>
        </div>

        {/* ================= CONNECTED TIMELINE: LINE & NODES AT LEFT, CARD AT RIGHT ================= */}
        <div className="relative">
          
          <div className="space-y-8 sm:space-y-10">
            {stepsData.map((step, idx) => {
              const IconComponent = step.icon;
              const isFirst = idx === 0;
              const isLast = idx === stepsData.length - 1;

              return (
                <div key={idx} className="flex items-stretch gap-3 sm:gap-6 relative">
                  
                  {/* LEFT SIDE: CONTINUOUS CONNECTED TIMELINE LINE & MILESTONE NODE */}
                  <div className="w-12 sm:w-16 shrink-0 flex flex-col items-center relative">
                    
                    {/* Top Segment of Vertical Connecting Line */}
                    <div 
                      className={`w-0.5 flex-1 transition-colors duration-500 ${isFirst ? 'opacity-0' : 'opacity-100'}`}
                      style={{ backgroundColor: '#DBC5B5' }}
                    />

                    {/* Step Milestone Node on the Line */}
                    <div className="relative my-2 z-10">
                      <div 
                        className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex flex-col items-center justify-center font-cinzel text-xs font-bold text-white shadow-md border-2 transition-transform hover:scale-105"
                        style={{ 
                          backgroundColor: currentTheme.primary,
                          borderColor: currentTheme.primaryDark 
                        }}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <span className="font-mono text-[10px] font-bold mt-0.5">{step.number}</span>
                      </div>
                    </div>

                    {/* Bottom Segment of Vertical Connecting Line */}
                    <div 
                      className={`w-0.5 flex-1 transition-colors duration-500 ${isLast ? 'opacity-0' : 'opacity-100'}`}
                      style={{ backgroundColor: '#DBC5B5' }}
                    />

                  </div>

                  {/* RIGHT SIDE: STEP CARD */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex-1 bg-white rounded-2xl border p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: currentTheme.cardBorder }}
                  >
                    {/* Subtle Top Accent */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: currentTheme.primary }}
                    />

                    <div className="space-y-4">
                      
                      {/* Top Header Badge & Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span 
                            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border"
                            style={{ 
                              backgroundColor: currentTheme.primaryLight,
                              color: currentTheme.primary,
                              borderColor: currentTheme.cardBorder
                            }}
                          >
                            {step.badge}
                          </span>
                          <span className="text-[11px] font-semibold text-[#8C7A70] hidden sm:inline">
                            • Phase: {step.phaseLabel}
                          </span>
                        </div>

                        <span className="text-xs font-mono font-bold text-[#A8988D]">
                          0{step.stepNum} / 04
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium mt-0.5" style={{ color: currentTheme.primary }}>
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Step-Specific Structured Data Elements */}
                      
                      {/* 1. Pills (Step 1) */}
                      {step.pills && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                          {step.pills.map((pill, pIdx) => {
                            const PillIcon = pill.icon;
                            return (
                              <div 
                                key={pIdx}
                                className="p-2 sm:p-2.5 rounded-xl bg-[#FAF6F0] border border-[#EAE0D5] flex items-center gap-2"
                              >
                                <div 
                                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: currentTheme.primaryLight, color: currentTheme.primary }}
                                >
                                  <PillIcon className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs font-semibold text-[#3D2314]">{pill.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* 2. Checklist (Step 2) */}
                      {step.checklist && (
                        <div className="pt-1">
                          <div className="text-xs font-bold text-[#3D2314] mb-2 flex items-center gap-1.5">
                            <span>Required Birth Input Parameters:</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.checklist.map((item, cIdx) => (
                              <div 
                                key={cIdx} 
                                className="flex items-center gap-2 text-xs text-[#4A3528] p-1.5 rounded-lg bg-[#FAF6F0] border border-[#EAE0D5]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: currentTheme.primary }} />
                                <span className="font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 3. Tags / Astrological Focus Areas (Step 3 & 4) */}
                      {step.tags && (
                        <div className="pt-1">
                          <div className="text-xs font-bold text-[#3D2314] mb-2 flex items-center gap-1.5">
                            <span>Astrological Focus Areas:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx}
                                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#EAE0D5] text-[#5D4E45] flex items-center gap-1"
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bottom Highlight Footer Bar inside Card */}
                      <div 
                        className="pt-3 border-t border-[#F0E4D8] flex items-center justify-between text-xs text-[#7A6B62]"
                      >
                        <div className="flex items-center gap-1.5">
                          <Sparkle className="w-3.5 h-3.5 text-[#C68A2C]" />
                          <span className="font-medium text-[#4A3528]">{step.highlight}</span>
                        </div>
                        
                        <span 
                          className="font-bold text-[11px] hidden sm:inline"
                          style={{ color: currentTheme.primary }}
                        >
                          Verified Vedic Method
                        </span>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Minimal Classy Bottom Action */}
        <div className="mt-14 sm:mt-18 text-center max-w-xl mx-auto space-y-3.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#E5B869]/30 group"
            style={{ backgroundColor: currentTheme.primary }}
          >
            <span className="font-serif-heading tracking-wide">Book Your Career Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <p className="text-xs text-[#7A6B62] font-normal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>Direct 1-on-1 slot with Acharya Ganesh • 100% Confidential</span>
          </p>
        </div>

      </div>
    </section>
  );
};
