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
  HeartPulse,
  Activity,
  Shield
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface HealthHeroSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

const HEALTH_HERO_STATS = [
  { value: '17+', label: 'Years Vedic Mastery' },
  { value: '12,500+', label: 'Health Charts Read' },
  { value: '98.4%', label: 'Positive Feedback' },
  { value: '4.9/5', label: 'Client Trust Rating' }
];

export const HealthHeroSection: React.FC<HealthHeroSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Health Horoscope & Constitutional Vulnerability Analysis',
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
      `Hello Acharya Hanish Bagga ji, I would like to book a Health & Medical Astrology consultation.\n` +
      `Name: ${formData.fullName || 'Health Seeker'}\n` +
      `Phone: ${formData.phone || 'Provided on chat'}\n` +
      `Service: ${formData.service}\n` +
      (formData.dateOfBirth ? `DOB: ${formData.dateOfBirth}, Time: ${formData.timeOfBirth || 'N/A'}, Place: ${formData.placeOfBirth || 'N/A'}\n` : '') +
      `Health Concern: ${formData.message || 'Need medical astrology guidance, vulnerable period timing & remedies'}`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section 
      id="health-hero" 
      className="relative bg-[#854820] text-white pt-6 pb-16 md:py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6C3515 0%, #854820 40%, #945025 80%, #5E2A0E 100%)'
      }}
    >
      {/* Subtle Vedic Astrological background geometry */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#E5B869_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C68A2C]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4A2008]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation - Semantic for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6">
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
              Health Astrology &amp; Medical Horoscope (Ayur-Jyotish)
            </li>
          </ol>
        </nav>

        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Value Proposition, Media & Authority Badges, Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Keyword Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FCEBD8] text-xs font-semibold backdrop-blur-sm shadow-sm">
              <Activity className="w-3.5 h-3.5 text-[#E5B869]" />
              <span>Vedic Ayur-Jyotish &amp; D30 Trimshamsha Medical Health Blueprint</span>
            </div>

            {/* Main Primary H1 Heading */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.18]">
              Understand Your Health Blueprint &amp; Reclaim Vitality with Medical Astrology
            </h1>

            {/* Core Value Proposition Paragraphs */}
            <div className="space-y-3 text-base sm:text-lg text-[#F7EFE8] leading-relaxed max-w-2xl font-light">
              <p className="font-normal text-white">
                Struggling with recurring health issues, unexplained fatigue, or anticipating surgical timing?
              </p>
              <p>
                Health astrology is the interpretation of your birth chart to understand your constitutional strengths (Ojas), vulnerable organ systems, Ayur-Jyotish Tridosha balance, and planetary Dasha cycles governing periods of disease and recovery.
              </p>
              <p>
                A personalized medical astrology forecast provides proactive clarity and supportive lifestyle remedies rather than navigating critical health decisions in stress and uncertainty.
              </p>
            </div>

            {/* Sub-hook Banner */}
            <div className="border-l-2 border-[#E5B869] pl-3 py-1 bg-black/10 rounded-r-md">
              <p className="text-xs sm:text-sm font-bold text-[#FCEBD8] tracking-wide">
                Health Astrology: Preventive Diagnosis, Vulnerable Period Timing &amp; Ayurvedic Remedies
              </p>
            </div>

            {/* Trust Metric Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {HEALTH_HERO_STATS.map((stat, idx) => (
                <div 
                  key={idx}
                  id={`health-hero-stat-${idx}`}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 text-center hover:bg-white/15 transition-all"
                >
                  <div className="text-xl sm:text-2xl font-bold font-serif-heading text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#F2DFCE] font-medium mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F7EFE8] pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> 1-on-1 Private Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> 100% Confidential Doctor Synergy
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> Non-Invasive Vedic Remedies
              </span>
            </div>

            {/* Media & Renowned Astrologer Callout */}
            <div className="pt-3 border-t border-white/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] p-0.5 border border-[#E5B869] shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#854820] to-[#5C2E11] flex items-center justify-center text-white font-serif font-bold text-xs">
                  AG
                </div>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">
                  Consult Directly with Acharya Ganesh &amp; Acharya Hanish Bagga
                </p>
                <p className="text-[#EADBD0] flex items-center gap-2 mt-0.5">
                  <span className="flex text-[#E5B869]">★★★★★</span>
                  <span>Trusted by 12,500+ Seekers &amp; Medical Professionals</span>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Lead Generation Form */}
          <div className="lg:col-span-5 w-full">
            <div 
              id="health-lead-form" 
              className="bg-[#FFFDF9] text-[#2C1E16] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DACD] relative"
            >
              {/* Top Form Header Banner */}
              <div className="mb-5 pb-4 border-b border-[#EADBD0]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#854820] bg-[#F5EBE1] px-2.5 py-0.5 rounded-full">
                    Direct Astrologer Booking
                  </span>
                  <span className="text-xs font-semibold text-[#854820] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Next Slot: Today
                  </span>
                </div>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mt-2">
                  Book Your Health Consultation
                </h3>
                <p className="text-xs text-[#6B5B52] mt-1">
                  Share your birth details for individual medical horoscope &amp; Ayur-Jyotish constitutional analysis.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-heading text-xl font-bold text-[#1F2937]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed max-w-sm mx-auto">
                    Acharya Ganesh’s appointment coordinator will contact you via WhatsApp / Call within 30 minutes to confirm your preferred time slot.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full mt-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#854820] underline cursor-pointer"
                  >
                    Book another slot or edit details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block font-semibold text-[#3D2314] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Verma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6C4B4] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#854820] text-sm text-[#2C1E16] placeholder-[#9E8E84]"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#3D2314] mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6C4B4] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#854820] text-sm text-[#2C1E16] placeholder-[#9E8E84]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#3D2314] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6C4B4] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#854820] text-sm text-[#2C1E16] placeholder-[#9E8E84]"
                      />
                    </div>
                  </div>

                  {/* Health Astrology Concern Focus */}
                  <div>
                    <label className="block font-semibold text-[#3D2314] mb-1">
                      Primary Health Astrology Focus <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D6C4B4] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#854820] text-xs sm:text-sm text-[#2C1E16]"
                    >
                      <option value="Health Horoscope & Constitutional Vulnerability Analysis">Health Horoscope &amp; Constitutional Vulnerability Analysis</option>
                      <option value="Chronic Condition Astrological Management & Dasha Timing">Chronic Condition Astrological Management &amp; Dasha Timing</option>
                      <option value="Surgery Muhurat & Medical Procedure Window Selection">Surgery Muhurat &amp; Medical Procedure Window Selection</option>
                      <option value="Ayurvedic Tridosha & Dietary Lifestyle Alignment">Ayurvedic Tridosha &amp; Dietary Lifestyle Alignment</option>
                      <option value="Mental Peace, Stress & Insomnia Astrological Guidance">Mental Peace, Stress &amp; Insomnia Astrological Guidance</option>
                      <option value="Complete Medical Kundli + Vedic Healing Remedies">Complete Medical Kundli + Vedic Healing Remedies</option>
                    </select>
                  </div>

                  {/* Toggle Birth Details Expand */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowBirthDetails(!showBirthDetails)}
                      className="text-xs font-semibold text-[#854820] hover:text-[#5C2E11] flex items-center gap-1.5 cursor-pointer underline-offset-2 hover:underline"
                    >
                      <span>{showBirthDetails ? '− Hide Birth Details (Optional for instant call)' : '+ Add Birth Details (Recommended for deeper analysis)'}</span>
                    </button>
                  </div>

                  {/* Conditional Birth Details Accordion */}
                  {showBirthDetails && (
                    <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#E8DACD] space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#3D2314] mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-[#D6C4B4] bg-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-[#3D2314] mb-1">
                            Exact Time of Birth
                          </label>
                          <input
                            type="time"
                            value={formData.timeOfBirth}
                            onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-[#D6C4B4] bg-white text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#3D2314] mb-1">
                          Place of Birth (City, State, Country)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. New Delhi, India"
                          value={formData.placeOfBirth}
                          onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-[#D6C4B4] bg-white text-xs"
                        />
                      </div>
                    </div>
                  )}

                  {/* Specific Health Concern / Question */}
                  <div>
                    <label className="block font-semibold text-[#3D2314] mb-1">
                      Specific Health Concerns or Questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Facing chronic sleep issues, ongoing treatment timing, or upcoming surgical Muhurat query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D6C4B4] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#854820] text-xs text-[#2C1E16] placeholder-[#9E8E84]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#854820] hover:bg-[#663312] text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Booking Consultation...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#E5B869]" />
                        <span>Confirm Health Consultation Slot</span>
                      </>
                    )}
                  </button>

                  {/* Or WhatsApp Instant Action */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#6B5B52]">
                    <span>Need immediate urgent query?</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="font-bold text-[#1E8E3E] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Direct WhatsApp Slot</span>
                    </button>
                  </div>

                  {/* Privacy Assurance */}
                  <div className="pt-2 text-center text-[10px] text-[#8A7A70] flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#854820]" />
                    <span>100% Confidential Medical Astrological Consultation. No spam.</span>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
