import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Video, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
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
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

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
      `Hello Acharya Hanish Bagga ji, I want to book a Career Consultation.\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Mode: ${formData.consultationType}\n` +
      `Service: ${formData.service}\n` +
      (formData.dateOfBirth ? `DOB: ${formData.dateOfBirth}, Time: ${formData.timeOfBirth || 'N/A'}, City: ${formData.placeOfBirth || 'N/A'}\n` : '') +
      `Question: ${formData.message || 'Need career horoscope analysis'}`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full my-8 shadow-2xl border border-[#E8DACD] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#854820] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FCEBD8] text-[11px] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" />
            <span>1-on-1 Confidential Vedic Session</span>
          </div>

          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
            Book Career Astrology Consultation
          </h3>
          <p className="text-xs text-[#F2DFCE] mt-1">
            Personalized horoscope analysis with Acharya Hanish Bagga.
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#1EBE5D] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-heading text-2xl font-bold text-[#2C1E16]">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-[#5D4E45] max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our appointment manager is preparing your chart coordinates and will reach out to <strong>{formData.phone}</strong> within 15 minutes to lock your preferred time slot.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" /> Connect on WhatsApp for Instant Booking
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="text-xs text-[#854820] font-semibold hover:underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="modal-consultation-form">
              
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-bold text-[#4A3528] mb-1.5">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'video', label: 'Video Call', icon: Video },
                    { id: 'phone', label: 'Phone Call', icon: Phone },
                    { id: 'report', label: 'Detailed Report', icon: FileText },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: mode.id as any })}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          formData.consultationType === mode.id
                            ? 'bg-[#854820] text-white border-[#854820] shadow-sm'
                            : 'bg-[#FAF6F0] text-[#4A3528] border-[#E8DACD] hover:bg-[#F5EBE1]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Full Name <span className="text-[#854820]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Phone / WhatsApp <span className="text-[#854820]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Primary Area of Guidance
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-xs sm:text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white cursor-pointer"
                  >
                    <optgroup label="Health Astrology (Ayur-Jyotish)">
                      <option value="Complete Medical Kundli & Vulnerability Mapping">Complete Medical Kundli &amp; Vulnerability Mapping</option>
                      <option value="Surgery Muhurat & Medical Treatment Timing">Surgery Muhurat &amp; Medical Treatment Timing</option>
                      <option value="Ayurvedic Tridosha & Prakriti Alignment">Ayurvedic Tridosha &amp; Prakriti Alignment</option>
                      <option value="Chronic Health & 6th/8th House Dasha Reading">Chronic Health &amp; 6th/8th House Dasha Reading</option>
                      <option value="Mental Peace, Stress & Sleep Restitution">Mental Peace, Stress &amp; Sleep Restitution</option>
                    </optgroup>
                    <optgroup label="Career Astrology">
                      <option value="Career Path & Suitable Field Analysis">Career Path &amp; Suitable Field Analysis</option>
                      <option value="Job Change Timing & Transition">Job Change Timing &amp; Transition</option>
                      <option value="Promotion & Appraisal Prospects">Promotion &amp; Appraisal Prospects</option>
                      <option value="Business vs Job Decision">Business vs Job Decision</option>
                      <option value="Foreign Job Relocation / Visa">Foreign Job Relocation &amp; Visa</option>
                      <option value="Career Obstacles & Vedic Remedies">Career Obstacles &amp; Vedic Remedies</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Birth Details Box */}
              <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#E8DACD] space-y-2.5">
                <div className="text-xs font-bold text-[#854820] flex items-center justify-between">
                  <span>Birth Details (for Kundli Calculation)</span>
                  <span className="text-[10px] text-[#7A6B62] font-normal">Accurate chart generation</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-[#5D4E45] mb-0.5">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full px-2 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#5D4E45] mb-0.5">Time of Birth</label>
                    <input
                      type="time"
                      value={formData.timeOfBirth}
                      onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                      className="w-full px-2 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#5D4E45] mb-0.5">Place / City of Birth</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Mumbai"
                      value={formData.placeOfBirth}
                      onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                      className="w-full px-2 py-1.5 bg-white border border-[#D8C7B8] rounded text-xs text-[#2C1E16]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                  Specific Questions / Career Dilemma
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. When will I switch to a higher paying job? Should I start my own startup?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#F5EBE1] border border-[#E2D2C3] rounded-lg text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#854820] hover:bg-[#663312] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#A85A1D]"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Confirm &amp; Book Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#7A6B62] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#854820]" /> 100% Confidential
                </span>
                <span>Direct session with Acharya Hanish Bagga</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
