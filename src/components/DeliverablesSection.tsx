import React, { useState, useRef } from 'react';
import { WHAT_YOULL_GET_DELIVERABLES } from '../data/careerAstrologyData';
import { 
  Compass, 
  CalendarCheck, 
  TrendingUp, 
  Target, 
  Layers, 
  Sparkles, 
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Image as ImageIcon,
  Upload,
  CheckCircle2,
  X
} from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

const DELIVERABLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  CalendarCheck,
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  Sparkles
};

// Sample Deliverables Report Visual Presets
const DELIVERABLES_IMAGE_PRESETS = [
  {
    id: 'kundli-report-sheet',
    title: 'Kundli Career Blueprint Sheet',
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Comprehensive Vedic Horoscope & D10 Dashamsha Career Report'
  },
  {
    id: 'planetary-charts',
    title: 'Planetary Dasha & Gochar Matrix',
    url: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1000&q=80',
    caption: '12-Month Career Milestones & Auspicious Dasha Timing Window'
  },
  {
    id: 'vedic-remedies-doc',
    title: 'Customized Remedies & Yantra Guide',
    url: 'https://images.unsplash.com/photo-1507842229451-7f01be7ac102?auto=format&fit=crop&w=1000&q=80',
    caption: 'Step-by-Step Gemstone, Rudraksha & Vedic Upaya Prescription'
  }
];

interface DeliverablesSectionProps {
  onOpenBooking: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onOpenBooking }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  // Deliverable Chart Image Customizer
  const [deliverableImage, setDeliverableImage] = useState<string>(DELIVERABLES_IMAGE_PRESETS[0].url);
  const [deliverableCaption, setDeliverableCaption] = useState<string>(DELIVERABLES_IMAGE_PRESETS[0].caption);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [tempCaption, setTempCaption] = useState<string>(deliverableCaption);
  const [activeTab, setActiveTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [customUrl, setCustomUrl] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setTempImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyImage = () => {
    if (tempImage || customUrl) {
      setDeliverableImage(tempImage || customUrl);
    }
    setDeliverableCaption(tempCaption);
    setIsModalOpen(false);
  };

  return (
    <section 
      id="what-you-get" 
      className="py-16 sm:py-24 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Astrological background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-10 right-10 w-96 h-96 pointer-events-none opacity-5">
            <svg viewBox="0 0 300 300" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
              <polygon points="150,20 270,240 30,240" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="150,280 270,60 30,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 w-80 h-80 pointer-events-none opacity-5">
            <svg viewBox="0 0 300 300" className="w-full h-full" style={{ color: currentTheme.primary }}>
              <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="150" cy="150" r="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border shadow-2xs"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Tangible Outcomes &amp; Clear Roadmaps</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight leading-tight">
            What You'll Receive in Your Career Astrology Session
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 font-normal leading-relaxed max-w-2xl mx-auto">
            A comprehensive, personalized breakdown of planetary influences, career timing, and actionable Vedic remedies delivered directly during your consultation.
          </p>
        </div>

        {/* ================= 7 DELIVERABLES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {WHAT_YOULL_GET_DELIVERABLES.map((item, idx) => {
            const Icon = DELIVERABLE_ICONS[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#E8DACD] hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top brand accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: currentTheme.primary }}
                />

                <div className="space-y-4">
                  
                  {/* Top Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-white"
                      style={{ 
                        color: currentTheme.primary,
                        borderColor: currentTheme.cardBorder 
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314] group-hover:text-[#854820] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D4E45] mt-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Bottom Number Indicator */}
                <div className="mt-6 pt-4 border-t border-[#E8DACD]/80 flex items-center justify-between text-xs text-[#8C7A70]">
                  <span className="font-semibold text-[#854820]" style={{ color: currentTheme.primary }}>
                    Verified Vedic Analysis
                  </span>
                  <span className="font-mono font-bold">
                    0{idx + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Deliverables Visual Chart & Blueprint Preview Card with Image Option */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#EBDCD0] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#854820] border border-[#E8DACD]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Deliverable Blueprint</span>
            </div>
            
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314]">
              Personalized Vedic Horoscope &amp; Career Report Summary
            </h3>
            
            <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
              Every consultation includes an in-depth breakdown of your 10th House, D10 Dashamsha, upcoming Mahadasha transit windows, and a structured list of actionable remedies tailored specifically for your horoscope.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                '10th House (Karma Bhava) Strength Rating',
                'D10 Dashamsha Divisional Chart Mapping',
                'Favorable Job Switch & Appraisal Timeline',
                'Custom Gemstone & Mantra Prescription'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#3D2314] font-medium bg-white p-2.5 rounded-xl border border-[#E8DACD]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentTheme.primary }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span>Reserve Your Consultation Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Sample Chart Image with Edit / Customizer Option */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white p-3 rounded-2xl border border-[#EBDCD0] shadow-sm relative group">
              
              {/* Image Change Button */}
              <div className="absolute top-5 right-5 z-20">
                <button
                  onClick={() => {
                    setTempImage(deliverableImage);
                    setTempCaption(deliverableCaption);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md shadow-md border border-white/20 transition-all cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#E5B869]" />
                  <span>Change Chart Image</span>
                </button>
              </div>

              {/* Chart Image */}
              <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-gray-100 border border-[#E8DACD]">
                <img
                  src={deliverableImage}
                  alt={deliverableCaption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 p-3 text-white">
                  <div className="text-[10px] text-[#E5B869] font-bold uppercase tracking-wider">
                    Vedic Report Document
                  </div>
                  <p className="text-xs font-medium text-white/95 leading-tight">
                    {deliverableCaption}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Deliverables Bottom Assurance Box */}
        <div 
          className="mt-12 p-6 sm:p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl transition-colors duration-500"
          style={{ backgroundColor: currentTheme.primary }}
        >
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold">
              Looking to Get a Better Perspective on Your Career?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8] leading-relaxed font-normal">
              Get Career Astrology Chart Reading Advice according to your horoscope, Dasha Periods, Career Houses and Career Concerns.
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

      {/* Image Customizer Modal for Deliverables */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8DACD] overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div 
                className="px-6 py-4 text-white flex items-center justify-between"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#E5B869]" />
                  <h3 className="font-serif-heading text-lg font-bold">
                    Customize Deliverable Chart Preview
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#E8DACD] bg-[#FAF6F0] p-1 gap-1">
                <button
                  onClick={() => setActiveTab('presets')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg cursor-pointer ${
                    activeTab === 'presets' ? 'bg-white shadow-xs border border-[#E8DACD]' : 'text-[#6B5B52]'
                  }`}
                >
                  Report Presets
                </button>
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg cursor-pointer ${
                    activeTab === 'upload' ? 'bg-white shadow-xs border border-[#E8DACD]' : 'text-[#6B5B52]'
                  }`}
                >
                  Upload Chart
                </button>
                <button
                  onClick={() => setActiveTab('url')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg cursor-pointer ${
                    activeTab === 'url' ? 'bg-white shadow-xs border border-[#E8DACD]' : 'text-[#6B5B52]'
                  }`}
                >
                  Image Link
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {activeTab === 'presets' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#6B5B52]">Choose sample report layout:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {DELIVERABLES_IMAGE_PRESETS.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setTempImage(p.url);
                            setTempCaption(p.caption);
                          }}
                          className={`p-2 rounded-xl border text-left flex flex-col gap-1.5 cursor-pointer ${
                            (tempImage || deliverableImage) === p.url
                              ? 'border-[#854820] bg-[#FAF6F0] ring-2 ring-[#854820]/20'
                              : 'border-[#E8DACD]'
                          }`}
                        >
                          <img src={p.url} alt={p.title} className="w-full h-20 object-cover rounded-lg" />
                          <span className="text-xs font-bold truncate">{p.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'upload' && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#854820]/40 rounded-xl p-6 text-center cursor-pointer bg-[#FAF6F0]"
                  >
                    <Upload className="w-8 h-8 text-[#854820] mx-auto mb-2" />
                    <span className="text-xs font-bold text-[#854820] block">Upload Chart Preview File</span>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </div>
                )}

                {activeTab === 'url' && (
                  <div>
                    <label className="block text-xs font-bold mb-1">Image URL</label>
                    <input
                      type="url"
                      value={customUrl}
                      onChange={(e) => {
                        setCustomUrl(e.target.value);
                        setTempImage(e.target.value);
                      }}
                      placeholder="https://..."
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold mb-1">Caption</label>
                  <input
                    type="text"
                    value={tempCaption}
                    onChange={(e) => setTempCaption(e.target.value)}
                    className="w-full px-3 py-2 text-xs border rounded-xl"
                  />
                </div>
              </div>

              <div className="px-6 py-3.5 border-t border-[#E8DACD] bg-[#FAF6F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs text-[#6B5B52]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyImage}
                  className="px-5 py-2 text-xs font-bold text-white rounded-xl"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  Save Image
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
