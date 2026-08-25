import React, { useState, useRef } from 'react';
import aboutCareerImage from '../assets/images/regenerated_image_1787641454539.jpg';
import { 
  Compass, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Image as ImageIcon, 
  Upload, 
  Link as LinkIcon, 
  RotateCcw, 
  Check, 
  X, 
  Calendar, 
  MessageCircle,
  CheckCircle2,
  Palette,
  Sun,
  Eye
} from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface AboutCareerAstrologyProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

const DEFAULT_IMAGE_URL = aboutCareerImage;

// Curated High Quality Vedic Astrological Image Presets
const VEDIC_IMAGE_PRESETS = [
  {
    id: 'acharya-reading',
    title: 'Acharya Kundli Consultation',
    url: aboutCareerImage,
    caption: '1-on-1 Vedic Kundli & 10th House Karma Bhava Reading'
  },
  {
    id: 'kundli-mandala',
    title: 'D10 Dashamsha Career Chart',
    url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80',
    caption: 'Astronomical & Vedic Divisional Chart (D10 Dashamsha) Diagnostics'
  },
  {
    id: 'sacred-remedies',
    title: 'Vedic Gemstones & Remedies',
    url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80',
    caption: 'Authentic Gemstone & Mantra Recommendations for Career Success'
  },
  {
    id: 'celestial-cosmos',
    title: 'Cosmic Planetary Alignment',
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80',
    caption: 'Navagraha Planetary Influences on Professional Milestones'
  }
];

export const AboutCareerAstrology: React.FC<AboutCareerAstrologyProps> = ({
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const { currentTheme, astrologicalMotifsEnabled, setIsCustomizerOpen } = useVedicTheme();

  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE_URL);
  const [imageCaption, setImageCaption] = useState<string>('Vedic Kundli & 10th House Karma Bhava Consultation');
  
  // Modal / Controls State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState<string>(imageUrl);
  const [inputCaption, setInputCaption] = useState<string>(imageCaption);
  const [activeTab, setActiveTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [tempPreview, setTempPreview] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenEdit = () => {
    setInputUrl(imageUrl);
    setInputCaption(imageCaption);
    setTempPreview(imageUrl);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    setTempPreview(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setTempPreview(reader.result);
          setInputUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (tempPreview || inputUrl) {
      setImageUrl(tempPreview || inputUrl);
    }
    setImageCaption(inputCaption);
    
    setToastMessage('Section image updated successfully!');
    setTimeout(() => setToastMessage(null), 3000);
    handleCloseEdit();
  };

  const handleSelectPreset = (preset: typeof VEDIC_IMAGE_PRESETS[0]) => {
    setTempPreview(preset.url);
    setInputUrl(preset.url);
    setInputCaption(preset.caption);
  };

  const handleResetToDefault = () => {
    setImageUrl(DEFAULT_IMAGE_URL);
    setImageCaption('Vedic Kundli & 10th House Karma Bhava Consultation');
    setToastMessage('Reset to default image.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const isCustomized = imageUrl !== DEFAULT_IMAGE_URL;

  const PILLARS = [
    {
      icon: Compass,
      title: '10th House (Karma Bhava)',
      desc: 'Reveals your natural vocation, authority, executive power, and leadership potential.'
    },
    {
      icon: Layers,
      title: 'Dashamsha (D10) Chart',
      desc: 'Pinpoints career stability, promotions, recognition, and job vs business alignment.'
    },
    {
      icon: Clock,
      title: 'Dasha & Planetary Timing',
      desc: 'Identifies auspicious windows for job change, appraisals, business expansion, and relocation.'
    },
    {
      icon: ShieldCheck,
      title: 'Practical Vedic Remedies',
      desc: 'Targeted gemstones, mantras, and remedies to remove roadblocks after comprehensive chart analysis.'
    }
  ];

  return (
    <section 
      id="about-career-astrology" 
      className="py-12 sm:py-18 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Astrological motifs background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-10 right-5 w-72 h-72 pointer-events-none opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#854820]">
              <polygon points="100,10 190,190 10,190" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="100,190 190,10 10,10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-5 w-60 h-60 pointer-events-none opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#C68A2C]">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-2.5 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Career Astrology Insights</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Understanding Career Astrology by Date of Birth
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-2 font-normal">
            Bridging ancient Vedic wisdom with modern career dilemmas to give you actionable clarity.
          </p>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Text, 4 Key Pillars & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Paragraph 1 */}
            <div className="text-sm sm:text-base text-[#4A3528] leading-relaxed space-y-3">
              <p>
                Career astrology uses your exact date, time, and place of birth to evaluate your <strong className="text-[#854820] font-semibold">10th House (Karma Bhava)</strong>, governing planets, and current <strong className="text-[#854820] font-semibold">Mahadasha &amp; Antardasha cycles</strong>.
              </p>
              <p className="text-xs sm:text-sm text-[#6B5B52]">
                Rather than relying on vague sun-sign predictions, genuine Vedic astrology analyzes the micro-strengths of the Dashamsha (D10) divisional chart to uncover whether service, independent profession, government role, or entrepreneurship is best suited for your planetary combinations.
              </p>
            </div>

            {/* 4 Vedic Analytical Pillars in a clean 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-[#EBDCD0] bg-[#FAF6F0]/80 hover:bg-[#FAF6F0] transition-colors flex items-start gap-3 group"
                  >
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-[#E8DACD] transition-colors"
                      style={{ 
                        backgroundColor: currentTheme.primaryLight,
                        color: currentTheme.primary
                      }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-base font-bold text-[#3D2314] leading-snug group-hover:text-[#854820] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#6B5B52] mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="px-5 py-2.5 rounded-xl bg-white border border-[#E8DACD] text-[#4A3528] hover:text-[#854820] hover:border-[#854820] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* RIGHT: Image Showcase with Customization Controls (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Image Container Card */}
            <div className="w-full max-w-md bg-[#FAF6F0] p-3 rounded-2xl border border-[#EBDCD0] shadow-md relative group">
              
              {/* Image Customizer Action Trigger Button (Overlay on hover or click) */}
              <div className="absolute top-5 right-5 z-20">
                <button
                  onClick={handleOpenEdit}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md shadow-lg border border-white/20 transition-all cursor-pointer"
                  title="Add / Change Section Image"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#E5B869]" />
                  <span>Change Image</span>
                </button>
              </div>

              {/* Main Section Image */}
              <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-square bg-gray-100 border border-[#E8DACD]">
                <img
                  src={imageUrl}
                  alt={imageCaption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_IMAGE_URL;
                  }}
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Caption Bar Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 text-white z-10">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#E5B869] font-bold uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Kundli Diagnosis</span>
                  </div>
                  <p className="text-xs font-medium text-white/95 leading-tight drop-shadow-sm">
                    {imageCaption}
                  </p>
                </div>
              </div>

              {/* Bottom Image Status & Controls */}
              <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-[#8A7A70]">
                <span>10th House Karma Bhava Analysis</span>
                {isCustomized && (
                  <button
                    onClick={handleResetToDefault}
                    className="text-[#854820] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Image</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= IMAGE CUSTOMIZER MODAL ================= */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseEdit}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8DACD] overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div 
                className="px-6 py-4 text-white flex items-center justify-between"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#E5B869]" />
                  <h3 className="font-serif-heading text-lg font-bold">
                    Customize Section Image
                  </h3>
                </div>
                <button
                  onClick={handleCloseEdit}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#E8DACD] bg-[#FAF6F0] p-1 gap-1">
                <button
                  onClick={() => setActiveTab('presets')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'presets'
                      ? 'bg-white text-[#2C1E16] shadow-xs border border-[#E8DACD]'
                      : 'text-[#6B5B52] hover:text-[#2C1E16]'
                  }`}
                >
                  Astrology Presets
                </button>
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'upload'
                      ? 'bg-white text-[#2C1E16] shadow-xs border border-[#E8DACD]'
                      : 'text-[#6B5B52] hover:text-[#2C1E16]'
                  }`}
                >
                  Upload File
                </button>
                <button
                  onClick={() => setActiveTab('url')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'url'
                      ? 'bg-white text-[#2C1E16] shadow-xs border border-[#E8DACD]'
                      : 'text-[#6B5B52] hover:text-[#2C1E16]'
                  }`}
                >
                  Image URL
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                
                {/* PRESETS TAB */}
                {activeTab === 'presets' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#6B5B52]">
                      Select from curated authentic Vedic astrology visuals:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {VEDIC_IMAGE_PRESETS.map((preset) => {
                        const isSelected = (tempPreview || inputUrl) === preset.url;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => handleSelectPreset(preset)}
                            className={`p-2 rounded-xl border text-left flex flex-col gap-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#854820] bg-[#FAF6F0] ring-2 ring-[#854820]/20'
                                : 'border-[#E8DACD] hover:border-[#854820]/50'
                            }`}
                          >
                            <div className="w-full h-24 rounded-lg overflow-hidden bg-gray-100 relative">
                              <img
                                src={preset.url}
                                alt={preset.title}
                                className="w-full h-full object-cover"
                              />
                              {isSelected && (
                                <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#854820] text-white flex items-center justify-center">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <span className="text-xs font-bold text-[#2C1E16] truncate">
                              {preset.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* UPLOAD TAB */}
                {activeTab === 'upload' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#6B5B52]">
                      Upload your own Vedic chart, horoscope image, or astrologer portrait:
                    </p>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-[#854820]/40 hover:border-[#854820] rounded-xl p-6 text-center cursor-pointer bg-[#FAF6F0] hover:bg-[#F5EBE1] transition-colors"
                    >
                      <Upload className="w-8 h-8 text-[#854820] mx-auto mb-2" />
                      <span className="text-xs font-bold text-[#854820] block">
                        Click to browse or drag image here
                      </span>
                      <span className="text-[11px] text-[#8A7A70] block mt-1">
                        PNG, JPG, WEBP up to 5MB
                      </span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}

                {/* URL TAB */}
                {activeTab === 'url' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-[#4A3528]">
                      Direct Image Web Link
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://example.com/kundli-chart.jpg"
                        value={inputUrl}
                        onChange={(e) => {
                          setInputUrl(e.target.value);
                          setTempPreview(e.target.value);
                        }}
                        className="flex-1 px-3 py-2 text-xs border border-[#E8DACD] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#854820]"
                      />
                    </div>
                  </div>
                )}

                {/* Caption Input */}
                <div className="pt-2 border-t border-[#E8DACD] space-y-1.5">
                  <label className="block text-xs font-bold text-[#4A3528]">
                    Image Caption / Description
                  </label>
                  <input
                    type="text"
                    value={inputCaption}
                    onChange={(e) => setInputCaption(e.target.value)}
                    placeholder="e.g. 10th House Karma Bhava Consultation"
                    className="w-full px-3 py-2 text-xs border border-[#E8DACD] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#854820]"
                  />
                </div>

                {/* Live Preview Box */}
                {(tempPreview || inputUrl) && (
                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-[#8A7A70] uppercase tracking-wider block mb-1">
                      Preview
                    </span>
                    <div className="w-full h-32 rounded-xl overflow-hidden border border-[#E8DACD] bg-gray-100">
                      <img
                        src={tempPreview || inputUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="px-6 py-3.5 border-t border-[#E8DACD] bg-[#FAF6F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="text-xs font-semibold text-[#854820] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCloseEdit}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#E8DACD] text-[#6B5B52] hover:bg-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-white shadow-xs cursor-pointer"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    Apply Image
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#1F2937] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl border border-gray-700 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
