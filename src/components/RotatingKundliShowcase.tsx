import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Shield, Star, Clock, Flame, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useVedicTheme } from '../context/ThemeContext';

interface RotatingKundliShowcaseProps {
  onOpenBooking: () => void;
}

export const RotatingKundliShowcase: React.FC<RotatingKundliShowcaseProps> = ({ onOpenBooking }) => {
  const { currentTheme } = useVedicTheme();
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(45); // seconds per rotation
  const [activePreviewPage, setActivePreviewPage] = useState<number | null>(null);

  // 12 Zodiac signs with Sanskrit names, western names, and geometric coordinates for wheel
  const zodiacSigns = [
    { sign: 'ARIES', sanskrit: 'MESHA', symbol: '♈', angle: 0 },
    { sign: 'TAURUS', sanskrit: 'VRISHABHA', symbol: '♉', angle: 30 },
    { sign: 'GEMINI', sanskrit: 'MITHUNA', symbol: '♊', angle: 60 },
    { sign: 'CANCER', sanskrit: 'KARKATA', symbol: '♋', angle: 90 },
    { sign: 'LEO', sanskrit: 'SIMHA', symbol: '♌', angle: 120 },
    { sign: 'VIRGO', sanskrit: 'KANYA', symbol: '♍', angle: 150 },
    { sign: 'LIBRA', sanskrit: 'TULA', symbol: '♎', angle: 180 },
    { sign: 'SCORPIO', sanskrit: 'VRISCHIKA', symbol: '♏', angle: 210 },
    { sign: 'SAGITTARIUS', sanskrit: 'DHANU', symbol: '♐', angle: 240 },
    { sign: 'CAPRICORN', sanskrit: 'MAKARA', symbol: '♑', angle: 270 },
    { sign: 'AQUARIUS', sanskrit: 'KUMBHA', symbol: '♒', angle: 300 },
    { sign: 'PISCES', sanskrit: 'MEENA', symbol: '♓', angle: 330 },
  ];

  // Sample Kundli dossier preview pages
  const previewPages = [
    {
      page: 1,
      title: 'Lagna & 10th House Karma Bhava',
      description: 'Comprehensive assessment of the Ascendant lord, Sun dignity, and vocational house alignment.'
    },
    {
      page: 2,
      title: 'D10 Dashamsha Career Division',
      description: 'Granular planetary power matrix indicating high-authority executive elevation and promotions.'
    },
    {
      page: 3,
      title: 'Vimshottari Dasha & Transition Windows',
      description: '12 to 36 month chronological timeline highlighting auspicious job shifts and appraisal months.'
    },
    {
      page: 4,
      title: 'Custom Vedic Upaya & Gemstones',
      description: 'Personalized planetary pacification mantras, authentic gemstones, and energizing rituals.'
    }
  ];

  return (
    <section 
      id="kundli-showcase" 
      className="relative py-20 sm:py-28 overflow-hidden transition-colors duration-500"
      style={{ 
        background: 'linear-gradient(135deg, #9C5123 0%, #874117 50%, #6E320F 100%)',
        color: '#FFFFFF'
      }}
    >
      {/* Subtle Starry / Cosmic Dust Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Atmospheric Glow behind the Wheel */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5A84B]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT & CTAS ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow Badge matching uploaded screenshot style */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-medium text-[#FFF1DC] shadow-sm tracking-wide"
            >
              <span className="text-[#FFD27D]">✦</span>
              <span>Vedic Astrology &amp; Spiritual Guidance</span>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]"
            >
              Your Kundli Knows You Better Than You Think
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg sm:leading-relaxed text-[#F5DFCD] max-w-xl font-normal"
            >
              A powerful, personalized reading built to guide your biggest career and life decisions with astronomical confidence and Vedic clarity.
            </motion.p>

            {/* Feature Highlights Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-1"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F7EBE1]">
                <CheckCircle2 className="w-4 h-4 text-[#FFD27D] shrink-0" />
                <span>Exact Birth Casting</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F7EBE1]">
                <CheckCircle2 className="w-4 h-4 text-[#FFD27D] shrink-0" />
                <span>D10 Career Chart</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F7EBE1]">
                <CheckCircle2 className="w-4 h-4 text-[#FFD27D] shrink-0" />
                <span>100% Confidential</span>
              </div>
            </motion.div>

            {/* CTA Buttons in the exact aesthetic of the screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              {/* Primary Golden Glowing Button: "Show My Future" */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(245, 178, 74, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-[#46230B] shadow-lg transition-all cursor-pointer border border-[#FFE7A8] flex items-center justify-center gap-2.5"
                style={{
                  background: 'linear-gradient(180deg, #FFD27D 0%, #F5A732 50%, #E38914 100%)',
                }}
              >
                <Sparkles className="w-4 h-4 text-[#5D300E]" />
                <span className="tracking-wide">Show My Future</span>
              </motion.button>

              {/* Secondary Outline Button: "Book a Consultation" */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white border border-white/50 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </motion.button>
            </motion.div>

            {/* Interactive Wheel Speed & Rotation Control */}
            <div className="pt-3 flex items-center gap-3 text-xs text-[#E8C4AB]">
              <span className="text-[11px] uppercase tracking-wider font-semibold opacity-75">
                Cosmic Wheel Rotation:
              </span>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-mono transition-colors cursor-pointer"
              >
                {isRotating ? '⏸ Pause Wheel' : '▶ Spin Wheel'}
              </button>
              <button
                onClick={() => setRotationSpeed(rotationSpeed === 45 ? 20 : rotationSpeed === 20 ? 80 : 45)}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-mono transition-colors cursor-pointer"
              >
                Speed: {rotationSpeed === 45 ? 'Normal (45s)' : rotationSpeed === 20 ? 'Fast (20s)' : 'Gentle (80s)'}
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ROLLING BACKGROUND CIRCLE & 3D KUNDLI BOOK ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] overflow-visible">
            
            {/* 1. THE BEHIND CIRCLE (ROLLING ZODIAC ASTROLOGICAL WHEEL) */}
            <div className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] lg:w-[620px] lg:h-[620px] pointer-events-none flex items-center justify-center">
              <motion.div
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{
                  repeat: Infinity,
                  duration: rotationSpeed,
                  ease: "linear"
                }}
                className="w-full h-full relative"
              >
                {/* SVG High-Precision Zodiac & Kundli Astrolabe Wheel */}
                <svg viewBox="0 0 600 600" className="w-full h-full text-white/30 drop-shadow-sm select-none">
                  
                  {/* Concentric Outer Boundary Circles */}
                  <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4" />
                  <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="300" cy="300" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="300" cy="300" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />

                  {/* 12 Radiant Division Spoke Lines */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angleDeg = i * 30;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x1 = 300 + 80 * Math.cos(angleRad);
                    const y1 = 300 + 80 * Math.sin(angleRad);
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

                  {/* 72 Degree Hash Marks along the perimeter */}
                  {Array.from({ length: 72 }).map((_, i) => {
                    const angleDeg = i * 5;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const isMajor = i % 6 === 0;
                    const innerR = isMajor ? 272 : 276;
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
                        strokeWidth={isMajor ? "1.5" : "0.75"}
                      />
                    );
                  })}

                  {/* 12 Zodiac Text Names positioned on the outer ring */}
                  {zodiacSigns.map((z, idx) => {
                    // Position at middle of 30 deg sector
                    const sectorCenterDeg = z.angle + 15;
                    const rad = (sectorCenterDeg * Math.PI) / 180;
                    const textRadius = 258;
                    const x = 300 + textRadius * Math.cos(rad);
                    const y = 300 + textRadius * Math.sin(rad);

                    return (
                      <g key={idx} transform={`translate(${x}, ${y}) rotate(${sectorCenterDeg + 90})`}>
                        <text
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="rgba(255, 255, 255, 0.75)"
                          fontSize="9"
                          fontWeight="700"
                          letterSpacing="1.5"
                          fontFamily="sans-serif"
                        >
                          {z.sign}
                        </text>
                      </g>
                    );
                  })}

                  {/* Inner Vedic Astrological Sacred Diamond Geometry (Lagna Chakra Motif) */}
                  <polygon points="300,100 500,300 300,500 100,300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <polygon points="300,140 460,300 300,460 140,300" fill="none" stroke="currentColor" strokeWidth="0.75" />

                  {/* Central Sun/Surya Emblem */}
                  <circle cx="300" cy="300" r="30" fill="rgba(255, 210, 125, 0.15)" stroke="#FFD27D" strokeWidth="1.5" />
                  <circle cx="300" cy="300" r="10" fill="#FFD27D" />

                </svg>
              </motion.div>
            </div>

            {/* 2. THE 3D FLOATING KUNDLI BOOK / REPORT DOSSIER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                rotateZ: -4, 
                rotateY: 8, 
                scale: 1.04,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.45)"
              }}
              style={{
                transform: 'perspective(1000px) rotateY(-12deg) rotateZ(6deg)',
                transformStyle: 'preserve-3d',
              }}
              className="relative z-20 w-[260px] sm:w-[310px] bg-[#FAF6F0] text-[#3D2314] rounded-2xl p-5 sm:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.45)] border-2 border-[#EAD5BA] transition-all duration-300 group cursor-pointer"
              onClick={() => setActivePreviewPage(1)}
            >
              
              {/* Realistic 3D Book Spine Thickness Effect on the Left */}
              <div 
                className="absolute -left-3 top-2 bottom-2 w-3 rounded-l-md bg-gradient-to-r from-[#4A2612] via-[#783E1B] to-[#3D1E0C] border-l border-white/20 shadow-inner"
              />

              {/* Book Gold Edge Foil Strip */}
              <div className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-2xl bg-gradient-to-b from-[#FFE8B5] via-[#D89B37] to-[#FFE8B5] shadow-xs" />

              {/* Top Header Stamp */}
              <div className="flex items-center justify-between border-b border-[#E8D4BE] pb-3 mb-3 text-[10px] font-bold text-[#8C5D38]">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-[#8C5D38] text-white flex items-center justify-center text-[8px]">
                    53+
                  </div>
                  <span>53+ Yrs Vedic Heritage</span>
                </div>

                <div className="px-2 py-0.5 rounded-md bg-[#8C5D38]/10 text-[#8C5D38] font-mono">
                  1 Lakh+ Done
                </div>
              </div>

              {/* Book Subheading & Acharya Seal */}
              <div className="text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#9C5123] font-cinzel">
                  Astro Acharya Ganesh
                </div>
                <div className="text-[9px] text-[#8C7A70] italic">
                  Vedic Horoscope &amp; Career Astro Diagnostic
                </div>
              </div>

              {/* Book Main Title */}
              <div className="my-4 py-2 border-y border-[#E8D4BE] text-center bg-[#FFF8EE] rounded-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-[#9C5123]">
                  PREMIUM PERSONALIZED
                </div>
                <div className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#7D3812] tracking-tight leading-none mt-0.5">
                  KUNDLI
                </div>
                <div className="text-[9px] font-bold text-[#553E31] uppercase tracking-wider mt-1">
                  Career &amp; Destiny Blueprint
                </div>
              </div>

              {/* Center Kundli Chakra Illustration */}
              <div className="relative w-full aspect-square max-w-[170px] mx-auto my-3 bg-white p-2 rounded-xl border border-[#E8DACD] shadow-inner flex items-center justify-center">
                {/* Traditional North Indian Kundli Diamond Chart */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#9C5123]">
                  <rect x="2" y="2" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="2" x2="98" y2="98" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="98" y1="2" x2="2" y2="98" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="50,2 98,50 50,98 2,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* House Labels */}
                  <text x="50" y="28" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#7D3812">1 Lagna</text>
                  <text x="28" y="50" textAnchor="middle" fontSize="5" fill="#8C5D38">10 Karma</text>
                  <text x="72" y="50" textAnchor="middle" fontSize="5" fill="#8C5D38">4 Sukha</text>
                  <text x="50" y="76" textAnchor="middle" fontSize="5" fill="#8C5D38">7 Jaya</text>
                </svg>

                {/* Acharya Stamp Seal overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#8C5D38]/90 text-white flex flex-col items-center justify-center p-1 text-center shadow-md border border-[#FFD27D]">
                    <span className="text-[6px] font-bold uppercase tracking-wider leading-none">Astro</span>
                    <span className="text-[7px] font-extrabold leading-none">Ganesh</span>
                    <span className="text-[5px] text-[#FFD27D] leading-none">Verified</span>
                  </div>
                </div>
              </div>

              {/* Book Footer Bar */}
              <div className="mt-3 pt-2 border-t border-[#E8D4BE] flex items-center justify-between text-[10px] text-[#7A6B62]">
                <span className="font-semibold text-[#8C5D38]">Astronomical Precision</span>
                <span className="font-mono font-bold text-[9px] bg-white px-1.5 py-0.5 rounded border border-[#E8D4BE]">
                  100% Custom
                </span>
              </div>

              {/* Floating "Click to Inspect" Tag on Hover */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#2C1E16] text-[#FFD27D] text-[10px] font-bold rounded-full shadow-lg border border-[#FFD27D]/40 flex items-center gap-1.5 whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3 h-3" />
                <span>Click to Preview Kundli Dossier</span>
              </div>

            </motion.div>

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
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E8DACD] overflow-hidden z-10 text-[#2C1E16]"
            >
              {/* Modal Header */}
              <div 
                className="p-6 text-white flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, #9C5123 0%, #7D3812 100%)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD27D]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold">
                      Personalized Kundli Dossier Preview
                    </h3>
                    <p className="text-xs text-[#F5DFCD]">
                      Analyzed 1-on-1 during your career consultation
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
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C5D38]">
                  Select Report Chapter To Inspect:
                </div>

                {/* Chapter Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {previewPages.map((p) => {
                    const isSelected = activePreviewPage === p.page;
                    return (
                      <button
                        key={p.page}
                        onClick={() => setActivePreviewPage(p.page)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFF8EE] border-[#8C5D38] ring-2 ring-[#8C5D38]/30 shadow-xs'
                            : 'bg-white border-[#E8DACD] hover:bg-[#FAF6F0]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#8C5D38]">
                          <span>Chapter 0{p.page}</span>
                          {isSelected && <span className="text-[10px] bg-[#8C5D38] text-white px-1.5 py-0.2 rounded">Active</span>}
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#3D2314] mt-1 leading-snug">
                          {p.title}
                        </h4>
                      </button>
                    );
                  })}
                </div>

                {/* Active Chapter Details */}
                {(() => {
                  const activePageData = previewPages.find(p => p.page === activePreviewPage) || previewPages[0];
                  return (
                    <div className="p-4 rounded-2xl bg-white border border-[#E8DACD] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#8C5D38]">
                        <Star className="w-3.5 h-3.5 fill-[#FFD27D] text-[#FFD27D]" />
                        <span>Chapter Focus: {activePageData.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                        {activePageData.description}
                      </p>
                    </div>
                  );
                })()}

                {/* Consultation Direct Trigger */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8DACD]">
                  <span className="text-xs text-[#7A6B62]">
                    Includes full 45-min live reading + remedies
                  </span>

                  <button
                    onClick={() => {
                      setActivePreviewPage(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #9C5123 0%, #7D3812 100%)' }}
                  >
                    <span>Book Full Reading</span>
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
