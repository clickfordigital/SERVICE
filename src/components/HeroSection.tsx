import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Star,
  Tv,
  Award,
  Users,
  Check,
  Compass,
  Palette,
  Eye,
  Image as ImageIcon
} from 'lucide-react';
import { ConsultationFormData } from '../types';
import { HERO_STATS } from '../data/careerAstrologyData';
import { useVedicTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const { currentTheme, astrologicalMotifsEnabled, setIsCustomizerOpen } = useVedicTheme();

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Career Path & Suitable Field Analysis',
    consultationType: 'video',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'Male',
    message: '',
  });

  const [showBirthDetails, setShowBirthDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Acharya Hanish Bagga ji, I would like to book a Career Astrology consultation.\n` +
      `Name: ${formData.fullName || 'Career Seeker'}\n` +
      `Phone: ${formData.phone || 'Provided on chat'}\n` +
      `Service: ${formData.service}\n` +
      (formData.dateOfBirth ? `DOB: ${formData.dateOfBirth}, Time: ${formData.timeOfBirth || 'N/A'}, Place: ${formData.placeOfBirth || 'N/A'}\n` : '') +
      `Question: ${formData.message || 'Need career prediction & job growth guidance'}`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section 
      id="hero" 
      className="relative text-white pt-6 pb-16 md:py-16 overflow-hidden transition-colors duration-500"
      style={{
        background: currentTheme.gradientHero
      }}
    >
      {/* Astrological Sacred Geometry Backgrounds */}
      {astrologicalMotifsEnabled && (
        <>
          {/* Subtle Vedic Astrological background geometry */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#E5B869_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          {/* Rotating North Indian Kundli Diamond Chart Watermark (Left) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-28 -left-28 w-[500px] h-[500px] pointer-events-none opacity-10 z-0"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full text-white">
              {/* Outer square */}
              <rect x="10" y="10" width="280" height="280" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Diagonals */}
              <line x1="10" y1="10" x2="290" y2="290" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10" y1="290" x2="290" y2="10" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Diamond (Kendra Bhavas: 1, 4, 7, 10) */}
              <polygon points="150,10 290,150 150,290 10,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Rotating Celestial Astrolabe (Right) */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-36 -right-36 w-[550px] h-[550px] pointer-events-none opacity-15 z-0"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full text-[#E5B869]">
              <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="150" cy="150" r="110" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="150" cy="150" r="70" fill="none" stroke="currentColor" strokeWidth="0.75" />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="150"
                  y1="10"
                  x2="150"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  transform={`rotate(${i * 30} 150 150)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Glowing Cosmic Aura */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C68A2C]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4A2008]/40 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Breadcrumb Navigation with Theme Quick Customizer Tag */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs text-[#F2DFCE] flex-wrap">
              <li>
                <a href="#" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  Home
                </a>
              </li>
              <li><span className="text-[#C68A2C]">&rsaquo;</span></li>
              <li>
                <a href="#services" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  Services
                </a>
              </li>
              <li><span className="text-[#C68A2C]">&rsaquo;</span></li>
              <li className="text-white font-medium aria-current-page">
                Career Growth &amp; Job Uncertainty (Career Astrology)
              </li>
            </ol>
          </nav>

          {/* Theme Palette Indicator Button */}
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 hover:bg-black/40 border border-white/20 text-[11px] text-[#FCEBD8] transition-all cursor-pointer shadow-xs"
          >
            <Palette className="w-3.5 h-3.5 text-[#E5B869]" />
            <span>Theme: {currentTheme.name.split('&')[0]}</span>
          </button>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Authority Content & Conversion Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Authority Badges with Navagraha & 10th House Karma Tag */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5B869]/40 text-xs font-semibold text-[#FCEBD8] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B869] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5B869]"></span>
                </span>
                <span>Astrology for Career Growth &amp; Job Uncertainty</span>
              </div>

              {/* 10th House Karma Bhava Glyph Badge */}
              <div className="inline-flex items-center gap-1 bg-black/25 px-2.5 py-1 rounded-full border border-white/15 text-[11px] text-[#FCEBD8] font-cinzel">
                <Compass className="w-3 h-3 text-[#E5B869]" />
                <span>10th House Karma Bhava</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Understand Your Career Path with Vedic Astrology
              </h1>
              
              <p className="text-base sm:text-lg text-[#F7EFE8] font-light leading-relaxed">
                Career choices shape your financial stability, growth, and satisfaction. Through in-depth horoscope analysis by date of birth, Acharya Ganesh provides clear guidance to navigate job changes, promotions, business decisions, and professional challenges.
              </p>
            </div>

            {/* Planetary Ruling Glyphs Ribbon (Astrological Feel) */}
            <div className="p-3.5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs">
              {[
                { planet: 'Sun ☉', role: 'Authority & Govt.' },
                { planet: 'Jupiter ♃', role: 'Growth & Wisdom' },
                { planet: 'Saturn ♄', role: 'Karma & Tenure' },
                { planet: 'Mercury ☿', role: 'Business & Tech' },
                { planet: 'Rahu ☊', role: 'Foreign Careers' }
              ].map((p, idx) => (
                <div key={idx} className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-bold text-[#E5B869] text-[11px]">{p.planet}</div>
                  <div className="text-[9px] text-[#FCEBD8]/80 truncate">{p.role}</div>
                </div>
              ))}
            </div>

            {/* Core Value Checkpoints with High Contrast Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Identify suitable career fields matching your planetary strengths',
                'Understand auspicious timing for job change, promotion & growth',
                'Resolve business vs job dilemmas through Dashamsha (D10) chart',
                'Practical, time-tested Vedic remedies to overcome roadblocks'
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7EFE8] bg-black/15 p-2.5 rounded-xl border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E5B869] shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges & Social Proof */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F2DFCE]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E5B869]" />
                <span className="font-semibold text-white">100% Private &amp; Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E5B869]" />
                <span>17+ Yrs Vedic Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#E5B869]" />
                <span>50,000+ Consultations</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-2">
              {HERO_STATS.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10 text-center"
                >
                  <div className="text-lg sm:text-2xl font-bold text-[#E5B869] font-cinzel">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#F2DFCE] mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: High Converting Lead & Consultation Booking Form (5 cols) */}
          <div className="lg:col-span-5" id="hero-lead-form">
            <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl text-[#2C1E16] border-2 border-[#E5B869]/60 relative">
              
              {/* Form Header */}
              <div className="text-center mb-5 pb-3 border-b border-[#E8DACD]">
                <div className="inline-block bg-[#854820] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                  1-on-1 Consultation
                </div>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
                  Book Career Consultation
                </h3>
                <p className="text-xs text-[#6B5B52] mt-0.5">
                  Get personalized Vedic roadmap from Acharya Ganesh
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-[#10B981]/15 text-[#10B981] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-serif-heading text-xl font-bold text-[#2C1E16]">
                    Details Received Successfully!
                  </h4>
                  <p className="text-xs text-[#6B5B52] max-w-xs mx-auto">
                    Our consultation team will reach out via WhatsApp/Call to confirm your preferred time slot.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 bg-[#25D366] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp Directly</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#854820] underline font-semibold"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Full Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF6F0] border border-[#E8DACD] rounded-xl text-[#2C1E16] placeholder-[#9E8E84] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3528] mb-1">
                        Phone / WhatsApp <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF6F0] border border-[#E8DACD] rounded-xl text-[#2C1E16] placeholder-[#9E8E84] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4A3528] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF6F0] border border-[#E8DACD] rounded-xl text-[#2C1E16] placeholder-[#9E8E84] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Topic Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Primary Career Focus <span className="text-[#DC2626]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF6F0] border border-[#E8DACD] rounded-xl text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Career Path & Suitable Field Analysis">Career Path &amp; Suitable Field Analysis</option>
                      <option value="Job Change & Promotion Timing">Job Change &amp; Promotion Timing</option>
                      <option value="Job vs Business (Dashamsha Analysis)">Job vs Business (Dashamsha D10)</option>
                      <option value="Foreign Career & Relocation Prospects">Foreign Career &amp; Relocation Prospects</option>
                      <option value="Career Obstacles & Vedic Remedies">Career Obstacles &amp; Vedic Remedies</option>
                    </select>
                  </div>

                  {/* Toggle optional Birth Details */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowBirthDetails(!showBirthDetails)}
                      className="text-xs font-bold text-[#854820] hover:text-[#5C2E11] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#FAF6F0] border border-[#854820] flex items-center justify-center text-[10px]">
                        {showBirthDetails ? '−' : '+'}
                      </span>
                      <span>{showBirthDetails ? 'Hide Birth Details' : 'Add Birth Details Now (Optional for Faster Reading)'}</span>
                    </button>
                  </div>

                  {/* Optional Birth Details Fields */}
                  {showBirthDetails && (
                    <div className="space-y-3 pt-2 bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DACD]">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#4A3528] mb-0.5">Date of Birth</label>
                          <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#E8DACD] rounded-lg text-[#2C1E16]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-[#4A3528] mb-0.5">Time of Birth</label>
                          <input
                            type="time"
                            value={formData.timeOfBirth}
                            onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#E8DACD] rounded-lg text-[#2C1E16]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#4A3528] mb-0.5">Place of Birth (City, State)</label>
                        <input
                          type="text"
                          placeholder="e.g. New Delhi, India"
                          value={formData.placeOfBirth}
                          onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#E8DACD] rounded-lg text-[#2C1E16] placeholder-[#9E8E84]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 bg-[#854820] hover:bg-[#663312] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 border border-[#A85A1D]"
                  >
                    {loading ? (
                      <span className="text-xs">Processing consultation request...</span>
                    ) : (
                      <>
                        <span>Confirm Consultation Slot</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Fast WhatsApp alternative */}
                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-[#7A6B62]">or need instant assistance?</span>
                    <button
                      type="button"
                      onClick={onOpenWhatsApp}
                      className="mt-1 w-full py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Instant WhatsApp Booking (+91 73000-04325)</span>
                    </button>
                  </div>

                  {/* Micro reassurance */}
                  <p className="text-[10px] text-center text-[#8A7A70] pt-1">
                    🔒 Strict Confidentiality • 100% Verified Vedic Astrologers
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
