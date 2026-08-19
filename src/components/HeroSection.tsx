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
  Check
} from 'lucide-react';
import { ConsultationFormData } from '../types';
import { HERO_STATS } from '../data/careerAstrologyData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
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
              Career Growth &amp; Job Uncertainty (Career Astrology)
            </li>
          </ol>
        </nav>

        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Value Proposition, Media & Authority Badges, Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Keyword Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FCEBD8] text-xs font-semibold backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" />
              <span>Vedic Jyotish &amp; D10 Dashamsha Career Blueprint</span>
            </div>

            {/* Main Primary H1 Heading - Exact and SEO Optimized */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.18]">
              Get Clear Career Direction &amp; Overcome Job Uncertainty
            </h1>

            {/* Core Value Proposition Paragraph */}
            <p className="text-base sm:text-lg text-[#F7EFE8] leading-relaxed max-w-2xl font-light">
              Stuck in your job? Unsure about career growth or promotion? Astrology can reveal 
              the right path, the best timing, and remedies for success. With your Birth Chart 
              as a Guide, we help you make smart decisions, grab opportunities, and build a stable future.
            </p>

            {/* Bold Sub-hook matching screenshot */}
            <div className="border-l-2 border-[#E5B869] pl-3 py-1 bg-black/10 rounded-r-md">
              <p className="text-xs sm:text-sm font-bold text-[#FCEBD8] tracking-wide uppercase">
                CAREER ASTROLOGY: UNLOCK GROWTH, STABILITY &amp; THE RIGHT PATH TO SUCCESS.
              </p>
            </div>

            {/* Acharya Hanish Bagga Profile Preview Card */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#E5B869] to-[#854820] p-1 shadow-md">
                  <div className="w-full h-full rounded-full bg-[#5D2E12] flex items-center justify-center text-white text-2xl font-bold font-serif overflow-hidden">
                    <span className="font-serif-heading text-2xl tracking-wider text-[#FCEBD8]">HB</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#C68A2C] text-[#2C1E16] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-white flex items-center gap-0.5">
                  <Award className="w-3 h-3" /> Expert
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-white font-cinzel tracking-wide">
                    Acharya Hanish Bagga
                  </h2>
                  <span className="bg-[#25D366]/20 border border-[#25D366]/40 text-[#A7F3D0] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span> Available Today
                  </span>
                </div>
                <p className="text-xs text-[#E6D7C8] mt-0.5">
                  Celebrity Vedic Astrologer &amp; Vastu Shastra Mentor • 17+ Years of Experience
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-[#FCEBD8]">
                  <span className="bg-black/20 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                    <Tv className="w-3 h-3 text-[#E5B869]" /> Zee News &amp; India TV Panellist
                  </span>
                  <span className="bg-black/20 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#E5B869] fill-[#E5B869]" /> 5.0 Google Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Metric Stats Grid - Exact replica & refinement of screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 pt-2">
              {HERO_STATS.map((stat, idx) => (
                <div 
                  key={idx}
                  id={`hero-stat-${idx}`}
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
                <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> No Generic Software Reports
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5B869]" /> Practical, Proven Vedic Remedies
              </span>
            </div>

          </div>

          {/* Right Column: Book Your Consultation Form (Card from Screenshot) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-[#2C1E16] shadow-2xl border border-[#E8DACD] relative">
              
              {/* Gold decorative accent bar */}
              <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-[#C68A2C] via-[#854820] to-[#C68A2C] rounded-b-md"></div>

              {/* Form Title matching screenshot */}
              <div className="mb-5 pt-1">
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314]">
                  Book Your Consultation
                </h3>
                <p className="text-xs text-[#6B5B52] mt-1">
                  Fill in your details for a personalized Kundli career reading.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EBF7EE] text-[#1EBE5D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-heading text-2xl font-bold text-[#2C1E16]">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-[#5D4E45]">
                    Your request for <strong>{formData.service}</strong> has been received. Our consultation coordinator will contact you within <strong>15 minutes</strong> to confirm your slot with Acharya Hanish Bagga.
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" /> Connect Instantly on WhatsApp
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#854820] font-semibold underline mt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5" id="hero-lead-form">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Full name <span className="text-[#854820]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter mail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                        Phone number <span className="text-[#854820]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Career Path & Suitable Field Analysis">Career Path &amp; Suitable Field Analysis</option>
                      <option value="Job Change Timing & Transition">Job Change Timing &amp; Transition</option>
                      <option value="Promotion & Appraisal Prospects">Promotion &amp; Appraisal Prospects</option>
                      <option value="Business vs Job Decision (Startup/Venture)">Business vs Job Decision</option>
                      <option value="Foreign Job Relocation / Visa">Foreign Job Relocation &amp; Visa</option>
                      <option value="Career Obstacles & Vedic Remedies">Career Obstacles &amp; Vedic Remedies</option>
                      <option value="Comprehensive Kundli & D10 Audit">Comprehensive Kundli &amp; D10 Audit</option>
                    </select>
                  </div>

                  {/* Optional Birth Details Toggle */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowBirthDetails(!showBirthDetails)}
                      className="text-xs font-semibold text-[#854820] hover:text-[#663312] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{showBirthDetails ? '− Hide Birth Details' : '+ Add Birth Details (DOB, Time, Place) for instant prep'}</span>
                    </button>

                    {showBirthDetails && (
                      <div className="mt-2.5 p-3 bg-[#FAF6F0] rounded-lg border border-[#E8DACD] space-y-2.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-semibold text-[#5D4E45] mb-0.5">Date of Birth</label>
                            <input
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                              className="w-full px-2.5 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-[#5D4E45] mb-0.5">Time of Birth (if known)</label>
                            <input
                              type="time"
                              value={formData.timeOfBirth}
                              onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                              className="w-full px-2.5 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-[#5D4E45] mb-0.5">City / Place of Birth</label>
                          <input
                            type="text"
                            placeholder="e.g. New Delhi, Mumbai, Bengaluru, Dubai"
                            value={formData.placeOfBirth}
                            onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Write your career question or situation here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Primary Submit Button matching screenshot exact styling */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="hero-form-submit-btn"
                      className="w-full py-3.5 bg-[#A85A1D] hover:bg-[#8C4516] text-white font-bold text-base rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#8C4516]"
                    >
                      {loading ? (
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Submit &amp; Book Consultation</span>
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* WhatsApp Quick Alternative Button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#15803D] font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-[#25D366]/30 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#15803D]" />
                    <span>Prefer WhatsApp? Click here for instant chat</span>
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-[11px] text-[#7A6B62] flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#854820]" />
                      <span>100% Confidential • Direct discussion with Acharya Hanish Bagga</span>
                    </p>
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
