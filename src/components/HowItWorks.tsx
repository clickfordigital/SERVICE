import React, { useState, useEffect } from 'react';
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
  Flame, 
  Stars, 
  Orbit, 
  Zap, 
  Award,
  ChevronRight,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);

  // Optional auto-cycle step preview if user wants interactive visual preview
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const stepsData = [
    {
      number: '01',
      title: 'Book Your Consultation',
      subtitle: 'Select Your Preferred Slot & Consultation Mode',
      icon: Calendar,
      tag: 'Step 1 of 3',
      color: '#854820',
      badge: 'Immediate Slot Reservation',
      contentParagraph:
        'Choose an available appointment and your preferred consultation option. Depending on available services, you can select a live video consultation, phone consultation or another listed consultation format. The purpose is to provide enough time to discuss your professional situation and complete your career astrology analysis without relying on a generic automated report.',
      highlight: 'Direct slot reservation with instant confirmation'
    },
    {
      number: '02',
      title: 'Share Your Correct Birth Details',
      subtitle: 'Date, Exact Birth Time & Place of Birth',
      icon: FileText,
      tag: 'Step 2 of 3',
      color: '#C68A2C',
      badge: 'Astronomical Precision',
      items: [
        'Date of birth',
        'Accurate time of birth',
        'City and country of birth',
        'Current profession',
        'Major career concerns',
        'Any specific decision you are considering'
      ],
      footerNote:
        'These details are used for career astrology by date of birth and preparation of your individual horoscope.'
    },
    {
      number: '03',
      title: 'Receive Personalized Career Guidance',
      subtitle: 'Detailed Horoscope Reading & Practical Roadmap',
      icon: Sparkles,
      tag: 'Step 3 of 3',
      color: '#A85A1D',
      badge: '1-on-1 Vedic Guidance',
      contentParagraph:
        'During your session, Acharya Ganesh explains the planetary factors influencing your professional life and addresses your important questions. Your career horoscope by date of birth may include discussion around suitable professional directions, Dasha periods, job transitions, promotions, challenges, income development and other career-related patterns visible in your horoscope.',
      highlight: 'Interactive 1-on-1 discussion & practical action plan'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#FAF6F0] border-b border-[#EADBD0] overflow-hidden">
      
      {/* ================= BACKGROUND COSMIC ANIMATIONS ================= */}
      
      {/* Rotating Sacred Astrological Astrolabe Ring (Left) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-36 -left-36 w-[550px] h-[550px] pointer-events-none opacity-25 z-0"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#854820]">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 4" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="10"
              x2="200"
              y2="40"
              stroke="currentColor"
              strokeWidth="1.5"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
          {[...Array(24)].map((_, i) => (
            <circle
              key={i}
              cx="200"
              cy="40"
              r="2"
              fill="currentColor"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Rotating Sacred Astrological Ring (Right) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-36 -right-36 w-[600px] h-[600px] pointer-events-none opacity-20 z-0"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#C68A2C]">
          <circle cx="200" cy="200" r="195" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="12 6" />
          <polygon points="200,30 350,320 50,320" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <polygon points="200,370 350,80 50,80" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Floating Glowing Cosmic Nebulae / Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-radial from-[#C68A2C]/20 via-[#854820]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.55, 0.3],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 left-1/5 w-[500px] h-[500px] bg-radial from-[#854820]/18 via-[#E67E22]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Particle Stars */}
      {[
        { top: '15%', left: '10%', delay: 0, size: 3 },
        { top: '28%', left: '88%', delay: 1.2, size: 4 },
        { top: '75%', left: '12%', delay: 0.7, size: 3.5 },
        { top: '82%', left: '85%', delay: 2, size: 4 },
        { top: '45%', left: '94%', delay: 1.5, size: 2.5 },
        { top: '60%', left: '6%', delay: 2.5, size: 3 }
      ].map((star, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: [0.6, 1.4, 0.6],
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 3 + idx,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut'
          }}
          style={{ top: star.top, left: star.left, width: star.size * 4, height: star.size * 4 }}
          className="absolute pointer-events-none text-[#C68A2C] z-0 hidden sm:block"
        >
          <Sparkle className="w-full h-full fill-[#C68A2C]" />
        </motion.div>
      ))}

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Animated Motion Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          
          {/* Animated Pill Badge with Glowing Pulse */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-sm mb-4 relative overflow-hidden group"
          >
            {/* Shimmer line across badge */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#C68A2C]/20 to-transparent skew-x-12"
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#854820] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#854820]"></span>
            </span>
            <span className="tracking-wide">Simple, Private &amp; Convenient</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF6F0] text-[#7A3E15] border border-[#EADBD0]">
              3-Step Vedic Path
            </span>
          </motion.div>

          {/* Heading with Serif Elegance & Motion */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight leading-tight"
          >
            How Career Astrology Consultation Works
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#6B5B52] mt-4 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Your consultation follows a simple three-step process designed to make horoscope analysis easy and personalized.
          </motion.p>

          {/* Interactive Stepper Navigation (Quick Switcher with Layout Motion) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 sm:gap-4 mt-8 flex-wrap"
          >
            {stepsData.map((s, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative group flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                    isCurrent
                      ? 'text-white border-[#854820] shadow-[0_8px_20px_rgba(133,72,32,0.25)]'
                      : 'bg-white/80 backdrop-blur-sm text-[#5D4E45] border-[#E8DACD] hover:bg-[#F5EBE1] hover:text-[#3D2314] hover:border-[#854820]/40'
                  }`}
                >
                  {/* Morphing active background pill */}
                  {isCurrent && (
                    <motion.div 
                      layoutId="activeStepIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#854820] via-[#A85A1D] to-[#854820] rounded-2xl -z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span className={`relative z-10 font-cinzel text-xs font-black px-1.5 py-0.5 rounded-md ${
                    isCurrent ? 'bg-white/20 text-white' : 'bg-[#FAF6F0] text-[#854820]'
                  }`}>
                    {s.number}
                  </span>
                  
                  <span className="relative z-10 font-medium">
                    {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                  </span>

                  {isCurrent && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#F5EBE1]"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ================= CONNECTED 3-STEP CARDS WITH COSMIC ENERGY BEAM ================= */}
        <div className="relative">
          
          {/* Animated Connecting Laser / Flowing Beam on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-[#EADBD0] -z-0 pointer-events-none rounded-full overflow-hidden">
            {/* Flowing Glowing Photon Spark */}
            <motion.div 
              animate={{ 
                x: ['-20%', '120%']
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="w-48 h-full bg-gradient-to-r from-transparent via-[#C68A2C] to-transparent shadow-[0_0_12px_#C68A2C]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
            
            {/* ================= STEP 1 CARD ================= */}
            <motion.div
              id="step-card-01"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setActiveStep(0)}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group overflow-hidden ${
                activeStep === 0
                  ? 'border-[#854820] shadow-[0_20px_40px_rgba(133,72,32,0.14)] ring-2 ring-[#854820]/15'
                  : 'border-[#EBDCD0] shadow-[0_6px_24px_rgba(133,72,32,0.04)] hover:border-[#854820]/60 hover:shadow-xl'
              }`}
            >
              {/* Top Card Ambient Gradient */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#854820]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

              {/* Holographic sweep effect on card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-[#C68A2C]/5 to-transparent" />

              <div className="flex-1 flex flex-col relative z-10">
                
                {/* Step Top Bar with Astrolabe Icon Orbit */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {/* Number Badge with Rotating Halo */}
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-1 rounded-2xl border border-dashed border-[#854820]/40"
                      />
                      <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#854820] to-[#5C2E11] text-white flex items-center justify-center font-cinzel text-base font-bold shadow-md">
                        01
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#854820] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#E8DACD] uppercase tracking-wider block w-fit">
                        Step 1 of 3
                      </span>
                    </div>
                  </div>

                  {/* Icon with Glowing Pulse */}
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-inner group-hover:bg-[#854820] group-hover:text-white transition-colors duration-300"
                  >
                    <Calendar className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] leading-tight group-hover:text-[#854820] transition-colors">
                    Book Your Consultation
                  </h3>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xs font-bold text-[#854820] tracking-wide uppercase bg-[#FAF6F0] px-2.5 py-1 rounded-lg border border-[#EADBD0]/70">
                    Select Your Preferred Slot &amp; Consultation Mode
                  </span>
                </div>

                {/* Interactive Consultation Modes Visual Pills */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Live Video', icon: Video },
                    { label: 'Audio Call', icon: Phone },
                    { label: 'Direct Slot', icon: Clock }
                  ].map((mode, mIdx) => {
                    const IconComp = mode.icon;
                    return (
                      <div 
                        key={mIdx}
                        className="p-2 rounded-xl bg-[#FAF6F0]/90 border border-[#EAE0D5] text-center flex flex-col items-center justify-center gap-1 group-hover:border-[#C68A2C]/50 transition-colors"
                      >
                        <IconComp className="w-3.5 h-3.5 text-[#854820]" />
                        <span className="text-[10px] font-bold text-[#4A3528] truncate w-full">{mode.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Body Text */}
                <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1 space-y-3">
                  <p>
                    Choose an available appointment and your preferred consultation option. Depending on available services, you can select a live video consultation, phone consultation or another listed consultation format. The purpose is to provide enough time to discuss your professional situation and complete your career astrology analysis without relying on a generic automated report.
                  </p>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px] relative z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                  className="text-xs font-bold text-[#854820] hover:text-[#5C2E11] flex items-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>Step 1 of 3 – Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1.5" />
                </button>
                <span className="w-2.5 h-2.5 rounded-full bg-[#854820] group-hover:scale-125 transition-transform" />
              </div>
            </motion.div>

            {/* ================= STEP 2 CARD ================= */}
            <motion.div
              id="step-card-02"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setActiveStep(1)}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group overflow-hidden ${
                activeStep === 1
                  ? 'border-[#C68A2C] shadow-[0_20px_40px_rgba(198,138,44,0.18)] ring-2 ring-[#C68A2C]/20'
                  : 'border-[#EBDCD0] shadow-[0_6px_24px_rgba(133,72,32,0.04)] hover:border-[#C68A2C]/70 hover:shadow-xl'
              }`}
            >
              {/* Top Card Ambient Gradient */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#C68A2C]/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
              
              {/* Holographic sweep effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-[#854820]/5 to-transparent" />

              <div className="flex-1 flex flex-col relative z-10">
                
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {/* Number Badge with Rotating Halo */}
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-1 rounded-2xl border border-dashed border-[#C68A2C]/50"
                      />
                      <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C68A2C] to-[#854820] text-white flex items-center justify-center font-cinzel text-base font-bold shadow-md">
                        02
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#854820] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#E8DACD] uppercase tracking-wider block w-fit">
                        Step 2 of 3
                      </span>
                    </div>
                  </div>

                  {/* Icon with Glowing Pulse */}
                  <motion.div 
                    whileHover={{ rotate: -15, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-inner group-hover:bg-[#C68A2C] group-hover:text-white transition-colors duration-300"
                  >
                    <FileText className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] leading-tight group-hover:text-[#854820] transition-colors">
                    Share Your Correct Birth Details
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="inline-block text-xs font-bold text-[#854820] tracking-wide uppercase bg-[#FAF6F0] px-2.5 py-1 rounded-lg border border-[#EADBD0]/70">
                    Date, Exact Birth Time &amp; Place of Birth
                  </span>
                </div>

                {/* Body Content with Organized Staggered Checklist Cards */}
                <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#3D2314] text-xs uppercase tracking-wider">Provide:</p>
                    <span className="text-[10px] text-[#854820] font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#C68A2C]" /> Exact Coordinates
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Date of birth',
                      'Accurate time of birth',
                      'City and country of birth',
                      'Current profession',
                      'Major career concerns',
                      'Any specific decision you are considering'
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF6F0] border border-[#EAE0D5] text-[11px] text-[#4A3528] font-medium group-hover:border-[#C68A2C]/40 transition-colors shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0" />
                        <span className="truncate leading-snug">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="pt-2 text-xs text-[#6B5B52] leading-relaxed">
                    These details are used for career astrology by date of birth and preparation of your individual horoscope.
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px] relative z-10">
                <span className="text-xs font-semibold text-[#854820]">Step 2 of 3 – Chart Construction</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C68A2C] group-hover:scale-125 transition-transform" />
              </div>
            </motion.div>

            {/* ================= STEP 3 CARD ================= */}
            <motion.div
              id="step-card-03"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setActiveStep(2)}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group overflow-hidden ${
                activeStep === 2
                  ? 'border-[#854820] shadow-[0_20px_40px_rgba(133,72,32,0.16)] ring-2 ring-[#854820]/15'
                  : 'border-[#EBDCD0] shadow-[0_6px_24px_rgba(133,72,32,0.04)] hover:border-[#854820]/60 hover:shadow-xl'
              }`}
            >
              {/* Top Card Ambient Gradient */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#854820]/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
              
              {/* Holographic sweep effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-[#C68A2C]/5 to-transparent" />

              <div className="flex-1 flex flex-col relative z-10">
                
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {/* Number Badge with Rotating Halo */}
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-1 rounded-2xl border border-dashed border-[#854820]/40"
                      />
                      <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#854820] to-[#A85A1D] text-white flex items-center justify-center font-cinzel text-base font-bold shadow-md">
                        03
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#854820] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#E8DACD] uppercase tracking-wider block w-fit">
                        Step 3 of 3
                      </span>
                    </div>
                  </div>

                  {/* Icon with Glowing Pulse */}
                  <motion.div 
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shadow-inner group-hover:bg-[#854820] group-hover:text-white transition-colors duration-300"
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] leading-tight group-hover:text-[#854820] transition-colors">
                    Receive Personalized Career Guidance
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="inline-block text-xs font-bold text-[#854820] tracking-wide uppercase bg-[#FAF6F0] px-2.5 py-1 rounded-lg border border-[#EADBD0]/70">
                    Detailed Horoscope Reading &amp; Practical Roadmap
                  </span>
                </div>

                {/* Planetary Diagnostic Micro Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['10th House Karma', 'D10 Dashamsha', 'Dasha Timing', 'Yogas & Remedies'].map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#7A3E15] border border-[#E8DACD] flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#854820]" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Body Text */}
                <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1 space-y-3">
                  <p>
                    During your session, Acharya Ganesh explains the planetary factors influencing your professional life and addresses your important questions. Your career horoscope by date of birth may include discussion around suitable professional directions, Dasha periods, job transitions, promotions, challenges, income development and other career-related patterns visible in your horoscope.
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px] relative z-10">
                <span className="text-xs font-semibold text-[#854820]">Step 3 of 3 – Live 1-on-1 Clarity</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#854820] group-hover:scale-125 transition-transform" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* ================= CRAZY ANIMATED BOTTOM CTA BAR ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 sm:mt-18 text-center max-w-xl mx-auto space-y-4 relative"
        >
          {/* Glowing Aura behind button */}
          <div className="absolute inset-0 bg-radial from-[#854820]/30 to-transparent blur-xl pointer-events-none -z-10" />

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 20px 35px -8px rgba(133,72,32,0.45)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#854820] via-[#A85A1D] to-[#854820] text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl transition-all cursor-pointer border border-[#E5B869]/40 group"
          >
            {/* Shimmer sweep effect inside button */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
            />
            
            <span className="relative z-10 font-serif-heading tracking-wide">Book Your Career Consultation</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </motion.button>

          <p className="text-xs text-[#7A6B62] font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Instant booking confirmation • Direct consultation slot with Acharya Ganesh</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
