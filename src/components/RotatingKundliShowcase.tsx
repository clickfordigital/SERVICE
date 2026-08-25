import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Clock, 
  Award, 
  Layers, 
  Eye, 
  RotateCw,
  Compass,
  FileCheck2,
  Calendar,
  Activity,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useVedicTheme } from '../context/ThemeContext';

interface RotatingKundliShowcaseProps {
  onOpenBooking: () => void;
}

export const RotatingKundliShowcase: React.FC<RotatingKundliShowcaseProps> = ({ onOpenBooking }) => {
  const { currentTheme } = useVedicTheme();
  
  // Interactive state
  const [isRotating, setIsRotating] = useState(true);
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [activePreviewPage, setActivePreviewPage] = useState<number | null>(null);

  // 4 Core Analysis Pillars for Tab/Pill Switching (Unique custom interactive element)
  const ANALYSIS_PILLARS = [
    {
      id: 0,
      title: '10th House Karma Matrix',
      badge: 'Vocation & Power',
      description: 'Reveals your leadership ceiling, high-growth sectors (Tech, Govt, Corporate), and recognition cycles.',
      stat: '98.4%',
      statLabel: 'Career Path Accuracy'
    },
    {
      id: 1,
      title: 'D10 Dashamsha Career Chart',
      badge: 'Divisional Strength',
      description: 'Deconstructs your professional micro-chart to forecast executive promotion timing and authority pivots.',
      stat: '36 Mo',
      statLabel: 'Timeline Window'
    },
    {
      id: 2,
      title: 'Vimshottari Dasha Windows',
      badge: 'Planetary Transits',
      description: 'Identifies exact months for job switching, overseas relocations, appraisal negotiations, and venture launch.',
      stat: '120 Yr',
      statLabel: 'Vedic Dasha Map'
    },
    {
      id: 3,
      title: 'Actionable Vedic Remedies',
      badge: 'Energization & Upaya',
      description: 'Prescribes consecrated gemstones, customized beej mantras, and dosha mitigation rituals without fear.',
      stat: '100%',
      statLabel: 'Sattvic Remedies'
    }
  ];

  // 12 Zodiac signs with Sanskrit names & celestial degree markers
  const ZODIAC_SIGNS = [
    { sign: 'ARIES', sanskrit: 'MESHA', symbol: '♈', rashi: 'मेष', element: 'Fire', angle: 0 },
    { sign: 'TAURUS', sanskrit: 'VRISHABHA', symbol: '♉', rashi: 'वृषभ', element: 'Earth', angle: 30 },
    { sign: 'GEMINI', sanskrit: 'MITHUNA', symbol: '♊', rashi: 'मिथुन', element: 'Air', angle: 60 },
    { sign: 'CANCER', sanskrit: 'KARKATA', symbol: '♋', rashi: 'कर्क', element: 'Water', angle: 90 },
    { sign: 'LEO', sanskrit: 'SIMHA', symbol: '♌', rashi: 'सिंह', element: 'Fire', angle: 120 },
    { sign: 'VIRGO', sanskrit: 'KANYA', symbol: '♍', rashi: 'कन्या', element: 'Earth', angle: 150 },
    { sign: 'LIBRA', sanskrit: 'TULA', symbol: '♎', rashi: 'तुला', element: 'Air', angle: 180 },
    { sign: 'SCORPIO', sanskrit: 'VRISCHIKA', symbol: '♏', rashi: 'वृश्चिक', element: 'Water', angle: 210 },
    { sign: 'SAGITTARIUS', sanskrit: 'DHANU', symbol: '♐', rashi: 'धनु', element: 'Fire', angle: 240 },
    { sign: 'CAPRICORN', sanskrit: 'MAKARA', symbol: '♑', rashi: 'मकर', element: 'Earth', angle: 270 },
    { sign: 'AQUARIUS', sanskrit: 'KUMBHA', symbol: '♒', rashi: 'कुम्भ', element: 'Air', angle: 300 },
    { sign: 'PISCES', sanskrit: 'MEENA', symbol: '♓', rashi: 'मीन', element: 'Water', angle: 330 },
  ];

  // Preview chapter items for the inspection dialog
  const PREVIEW_CHAPTERS = [
    {
      chapter: 1,
      title: 'Lagna & 10th House Karma Bhava',
      description: 'Comprehensive analysis of your ascendant lord, planetary dignities in the 10th house of profession, and natural vocation compatibility.',
      metric: 'House Dignity: Exalted'
    },
    {
      chapter: 2,
      title: 'D10 Dashamsha Divisional Blueprint',
      description: 'Microscopic breakdown of career strengths, managerial capability, foreign assignments, and authoritative reputation building.',
      metric: 'D10 Raja Yoga Check'
    },
    {
      chapter: 3,
      title: 'Vimshottari Dasha & Antardasha Trajectory',
      description: 'Chronological timeline of the next 24 to 36 months detailing optimal job switches, promotion windows, and caution periods.',
      metric: 'Transit Period: Active'
    },
    {
      chapter: 4,
      title: 'Tailored Vedic Upaya & Gemstone Guide',
      description: 'Authentic remedial steps including energized gemstones, specific Beej mantras, and behavioral adjustments aligned with your chart.',
      metric: 'Remedy Safety: 100% Sattvic'
    }
  ];

  return (
    <section 
      id="astral-kundli-showcase" 
      className="relative py-20 sm:py-28 overflow-hidden transition-colors duration-500"
      style={{ 
        background: 'linear-gradient(145deg, #2E180E 0%, #4D2612 35%, #753916 75%, #3B1B0C 100%)',
        color: '#FFFFFF'
      }}
    >
      {/* Decorative Vedic Constellation Grid & Radiant Dust Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#E8DACD_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Ambient Cosmic Radial Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C87D38]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B85D19]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-[#C86A2E]/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: HERO VALUE PROP & INTERACTIVE PILLARS ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Distinctive Vedic Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-[#FFF0DE] shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8C8A0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D49A4C]"></span>
              </span>
              <span className="tracking-wide">Deep Vedic Career Diagnostics &amp; Kundli Reading</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Decode Your True Calling Through the Sacred Kundli Wheel
            </motion.h2>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg text-[#F4E3D5] leading-relaxed font-normal max-w-2xl"
            >
              Your birth chart is an astronomical compass. Gain definitive answers on career growth, promotion timelines, job transitions, and authentic Vedic remedies.
            </motion.p>

            {/* Interactive Pillar Tabs - Unique Design Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-2"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8C8A0] mb-3 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Explore Core Dimensions Analyzed In Your Chart:</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ANALYSIS_PILLARS.map((pillar) => {
                  const isActive = selectedPillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                        isActive 
                          ? 'bg-white/20 border-[#E8C8A0] shadow-md ring-1 ring-[#E8C8A0]/40' 
                          : 'bg-white/5 border-white/15 hover:bg-white/10 text-white/80'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#E8C8A0] truncate">
                        {pillar.badge}
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-white mt-0.5 leading-snug line-clamp-1">
                        {pillar.title}
                      </div>
                      {isActive && (
                        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E8C8A0]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Pillar Card */}
              <div className="mt-3 p-4 rounded-2xl bg-black/25 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8C8A0] text-[#3D1E0C]">
                      {ANALYSIS_PILLARS[selectedPillar].badge}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {ANALYSIS_PILLARS[selectedPillar].title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#E8D4C4] leading-relaxed">
                    {ANALYSIS_PILLARS[selectedPillar].description}
                  </p>
                </div>

                <div className="sm:border-l sm:border-white/15 sm:pl-4 shrink-0 flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#E8C8A0]">
                    {ANALYSIS_PILLARS[selectedPillar].stat}
                  </div>
                  <div className="text-[10px] text-[#D8C4B4] uppercase tracking-wider">
                    {ANALYSIS_PILLARS[selectedPillar].statLabel}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs & Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary High-Contrast Action Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#3D2314] shadow-lg transition-all cursor-pointer border border-white/30 flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF6F0]"
              >
                <Sparkles className="w-4 h-4 text-[#8C4316]" />
                <span className="tracking-wide">Get My Career Reading</span>
                <ArrowRight className="w-4 h-4 text-[#8C4316]" />
              </motion.button>

              {/* Secondary Preview Button */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePreviewPage(1)}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-xs"
              >
                <Eye className="w-4 h-4 text-[#E8C8A0]" />
                <span>Preview Report Chapters</span>
              </motion.button>
            </motion.div>

            {/* Bottom Meta Trust Metrics */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-xs text-[#E8D4C4]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C8A0] shrink-0" />
                <span>1-on-1 Confidential</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C8A0] shrink-0" />
                <span>D10 Micro Chart</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C8A0] shrink-0" />
                <span>No Computerized Bots</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ROLLING SACRED WHEEL + GLASS KUNDLI SHOWCASE ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] sm:min-h-[560px]">
            
            {/* 1. BEHIND ROLLING SACRED ASTROLOGICAL WHEEL */}
            <div className="absolute w-[460px] h-[460px] sm:w-[540px] sm:h-[540px] lg:w-[590px] lg:h-[590px] pointer-events-none flex items-center justify-center select-none">
              <motion.div
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 50,
                  ease: "linear"
                }}
                className="w-full h-full relative"
              >
                <svg viewBox="0 0 600 600" className="w-full h-full text-[#E8C8A0]/35 drop-shadow-md">
                  
                  {/* Multi-layered Concentric Astronomical Ring Guides */}
                  <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="300" cy="300" r="245" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 4" />
                  <circle cx="300" cy="300" r="205" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="300" cy="300" r="85" fill="none" stroke="currentColor" strokeWidth="1.5" />

                  {/* 12 Radiant Sector Dividers */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angleDeg = i * 30;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x1 = 300 + 85 * Math.cos(angleRad);
                    const y1 = 300 + 85 * Math.sin(angleRad);
                    const x2 = 300 + 280 * Math.cos(angleRad);
                    const y2 = 300 + 280 * Math.sin(angleRad);

                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    );
                  })}

                  {/* 72 Degree Precise Astrolabe Hash Marks */}
                  {Array.from({ length: 72 }).map((_, i) => {
                    const angleDeg = i * 5;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const isMajor = i % 6 === 0;
                    const innerR = isMajor ? 270 : 275;
                    const x1 = 300 + innerR * Math.cos(angleRad);
                    const y1 = 300 + innerR * Math.sin(angleRad);
                    const x2 = 300 + 280 * Math.cos(angleRad);
                    const y2 = 300 + 280 * Math.sin(angleRad);

                    return (
                      <line
                        key={`hash-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth={isMajor ? "1.8" : "0.8"}
                      />
                    );
                  })}

                  {/* 12 Zodiac Text Signs & Sanskrit Rashi in the Outer Ring */}
                  {ZODIAC_SIGNS.map((z, idx) => {
                    const sectorCenterDeg = z.angle + 15;
                    const rad = (sectorCenterDeg * Math.PI) / 180;
                    const textRadius = 262;
                    const x = 300 + textRadius * Math.cos(rad);
                    const y = 300 + textRadius * Math.sin(rad);

                    return (
                      <g key={idx} transform={`translate(${x}, ${y}) rotate(${sectorCenterDeg + 90})`}>
                        <text
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="rgba(255, 240, 225, 0.85)"
                          fontSize="9"
                          fontWeight="700"
                          letterSpacing="1.2"
                          fontFamily="sans-serif"
                        >
                          {z.sign}
                        </text>
                      </g>
                    );
                  })}

                  {/* Sacred Inner Lagna Geometry */}
                  <polygon points="300,90 510,300 300,510 90,300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <polygon points="300,135 465,300 300,465 135,300" fill="none" stroke="currentColor" strokeWidth="0.8" />

                  {/* Radiant Center Sun/Surya Ring */}
                  <circle cx="300" cy="300" r="32" fill="rgba(232, 200, 160, 0.15)" stroke="#E8C8A0" strokeWidth="1.5" />
                  <circle cx="300" cy="300" r="12" fill="#E8C8A0" />

                </svg>
              </motion.div>
            </div>

            {/* 2. FOREGROUND FLOATING KUNDLI REPORT DOSSIER CARD WITH GLASS-MORPHISM & METRICS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 6,
                rotateZ: -2,
                scale: 1.03,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.55)"
              }}
              style={{
                transform: 'perspective(1200px) rotateY(-8deg) rotateZ(4deg)',
                transformStyle: 'preserve-3d',
              }}
              className="relative z-20 w-[270px] sm:w-[320px] bg-[#FAF5EE] text-[#3D2314] rounded-3xl p-5 sm:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-2 border-[#E8D4BE] transition-all duration-300 group cursor-pointer"
              onClick={() => setActivePreviewPage(1)}
            >
              {/* Premium Leather Embossed Spine on the Left */}
              <div className="absolute -left-3.5 top-3 bottom-3 w-3.5 rounded-l-lg bg-gradient-to-r from-[#2C1408] via-[#5C2E14] to-[#3D1E0C] border-l border-white/20 shadow-md" />

              {/* Gold Gilded Page Edge Accent on the Right */}
              <div className="absolute right-0 top-0 bottom-0 w-2 rounded-r-3xl bg-gradient-to-b from-[#E8D4BE] via-[#C87D38] to-[#E8D4BE] shadow-xs" />

              {/* Top Verified Header Strip */}
              <div className="flex items-center justify-between border-b border-[#E8D8C8] pb-3 mb-3 text-[10px] font-bold text-[#8C5D38]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#8C5D38] text-[#FAF5EE] flex items-center justify-center font-bold text-[9px] shadow-xs">
                    53+
                  </div>
                  <span>Vedic Lineage Legacy</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-[#8C5D38]/10 text-[#8C5D38] font-mono text-[9px]">
                  Verified D10
                </div>
              </div>

              {/* Acharya Signature Seal */}
              <div className="text-center space-y-0.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9C5123] font-cinzel">
                  Astro Acharya Ganesh
                </div>
                <div className="text-[9px] text-[#8C7A70] italic">
                  Chief Vedic Astrologer &amp; Karmic Guide
                </div>
              </div>

              {/* Main Title Plaque */}
              <div className="my-3 py-2.5 px-2 border-y border-[#E8D8C8] text-center bg-[#FFF8EE] rounded-xl shadow-2xs">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#9C5123]">
                  PREMIUM PERSONALIZED
                </div>
                <div className="font-serif-heading text-2xl sm:text-3xl font-black text-[#7D3812] tracking-tight leading-none mt-1">
                  KUNDLI
                </div>
                <div className="text-[9px] font-bold text-[#6D4C3A] uppercase tracking-wider mt-1">
                  Career, Wealth &amp; Destiny Dossier
                </div>
              </div>

              {/* Center Kundli Chakra Diagram */}
              <div className="relative w-full aspect-square max-w-[170px] mx-auto my-2.5 bg-white p-2.5 rounded-2xl border border-[#E8DACD] shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#9C5123]">
                  <rect x="2" y="2" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="2" x2="98" y2="98" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="98" y1="2" x2="2" y2="98" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="50,2 98,50 50,98 2,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Traditional House Labels */}
                  <text x="50" y="28" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#7D3812">1 Lagna</text>
                  <text x="28" y="50" textAnchor="middle" fontSize="5" fill="#8C5D38">10 Karma</text>
                  <text x="72" y="50" textAnchor="middle" fontSize="5" fill="#8C5D38">4 Sukha</text>
                  <text x="50" y="76" textAnchor="middle" fontSize="5" fill="#8C5D38">7 Jaya</text>
                </svg>

                {/* Acharya Verified Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#8C5D38] text-white flex flex-col items-center justify-center p-1 text-center shadow-md border border-[#E8C8A0]">
                    <span className="text-[6px] font-bold uppercase tracking-wider leading-none text-[#E8C8A0]">Astro</span>
                    <span className="text-[7px] font-extrabold leading-none">Ganesh</span>
                    <span className="text-[5px] text-[#F5ECE4] leading-none">Certified</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Bottom Metric Tag */}
              <div className="mt-3 pt-2.5 border-t border-[#E8D8C8] flex items-center justify-between text-[10px] text-[#7A6B62]">
                <div className="flex items-center gap-1 text-[#8C5D38] font-bold">
                  <Star className="w-3 h-3 fill-[#C87D38] text-[#C87D38]" />
                  <span>Custom Ephemeris</span>
                </div>
                <span className="font-mono font-bold text-[9px] bg-white px-2 py-0.5 rounded-full border border-[#E8D8C8] text-[#3D2314]">
                  100% Tailored
                </span>
              </div>

              {/* Floating "Click to Preview" Callout on Hover */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#2C1408] text-[#E8C8A0] text-[10px] font-bold rounded-full shadow-lg border border-[#E8C8A0]/40 flex items-center gap-1.5 whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3 h-3" />
                <span>Click to Inspect 4 Chapters</span>
              </div>
            </motion.div>

            {/* Wheel Spin Toggle Control floating on top right of canvas */}
            <div className="absolute top-2 right-2 z-30">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white text-[11px] font-medium backdrop-blur-md transition-all cursor-pointer"
                title="Toggle celestial rotation"
              >
                <RotateCw className={`w-3 h-3 text-[#E8C8A0] ${isRotating ? 'animate-spin' : ''}`} />
                <span>{isRotating ? 'Pause' : 'Spin Wheel'}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ================= INTERACTIVE KUNDLI DOSSIER PREVIEW MODAL ================= */}
      <AnimatePresence>
        {activePreviewPage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePreviewPage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E8DACD] overflow-hidden z-10 text-[#2C1E16]"
            >
              {/* Modal Header */}
              <div 
                className="p-6 text-white flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, #4D2612 0%, #2E180E 100%)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E8C8A0] border border-white/15">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold">
                      Personalized Kundli Dossier Preview
                    </h3>
                    <p className="text-xs text-[#F5DFCD]">
                      Analyzed 1-on-1 with Acharya Ganesh during your consultation
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActivePreviewPage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C5D38] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Select Report Chapter To Inspect:</span>
                </div>

                {/* Chapter Selectors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PREVIEW_CHAPTERS.map((p) => {
                    const isSelected = activePreviewPage === p.chapter;
                    return (
                      <button
                        key={p.chapter}
                        onClick={() => setActivePreviewPage(p.chapter)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFF8EE] border-[#8C5D38] ring-2 ring-[#8C5D38]/30 shadow-xs'
                            : 'bg-white border-[#E8DACD] hover:bg-[#FAF6F0]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#8C5D38]">
                          <span>Chapter 0{p.chapter}</span>
                          {isSelected && (
                            <span className="text-[9px] bg-[#8C5D38] text-white px-1.5 py-0.2 rounded font-mono">
                              Selected
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#3D2314] mt-1 leading-snug">
                          {p.title}
                        </h4>
                      </button>
                    );
                  })}
                </div>

                {/* Active Chapter Details Box */}
                {(() => {
                  const activeData = PREVIEW_CHAPTERS.find(p => p.chapter === activePreviewPage) || PREVIEW_CHAPTERS[0];
                  return (
                    <div className="p-4.5 rounded-2xl bg-white border border-[#E8DACD] space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-[#8C5D38]">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 fill-[#C87D38] text-[#C87D38]" />
                          <span>Focus: {activeData.title}</span>
                        </div>
                        <span className="text-[10px] bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E8DACD] text-[#6B5B52]">
                          {activeData.metric}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed font-normal">
                        {activeData.description}
                      </p>
                    </div>
                  );
                })()}

                {/* Consultation Direct Booking Trigger */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8DACD]">
                  <span className="text-xs text-[#7A6B62]">
                    Includes 45-min live video analysis + tailored remedies
                  </span>

                  <button
                    onClick={() => {
                      setActivePreviewPage(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #7D3812 0%, #4D2612 100%)' }}
                  >
                    <span>Reserve Session Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
