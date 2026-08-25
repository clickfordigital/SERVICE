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
  CheckCircle2
} from 'lucide-react';

interface AboutCareerAstrologyProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

const DEFAULT_IMAGE_URL = aboutCareerImage;

export const AboutCareerAstrology: React.FC<AboutCareerAstrologyProps> = ({
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE_URL);
  const [imageCaption, setImageCaption] = useState<string>('Vedic Kundli & 10th House Karma Bhava Consultation');
  
  // Modal / Controls State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState<string>(imageUrl);
  const [inputCaption, setInputCaption] = useState<string>(imageCaption);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
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
      desc: 'Reveals your natural vocation, authority, and leadership potential.'
    },
    {
      icon: Layers,
      title: 'Dashamsha (D10) Chart',
      desc: 'Pinpoints career stability, promotions, and job vs business alignment.'
    },
    {
      icon: Clock,
      title: 'Dasha & Planetary Timing',
      desc: 'Identifies auspicious windows for job change, appraisals, and relocation.'
    },
    {
      icon: ShieldCheck,
      title: 'Practical Vedic Remedies',
      desc: 'Targeted gemstones, mantras and remedies to remove roadblocks after chart analysis.'
    }
  ];

  return (
    <section id="about-career-astrology" className="py-12 sm:py-16 bg-white border-b border-[#EBDCD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#854820]/10 text-[#854820] px-3.5 py-1 rounded-full text-xs font-semibold mb-2.5 border border-[#854820]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
            <span>Understanding Career Astrology</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            How Career Astrology Guides Your Journey
          </h2>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="mb-6 max-w-md mx-auto bg-[#2C1E16] text-[#FCEBD8] px-4 py-2.5 rounded-xl shadow-lg border border-[#E5B869]/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E5B869] shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* 2-Column Core Layout: Explanation & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Concise Explanation & 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="text-sm text-[#5A4A42] leading-relaxed">
              <p>
                Your <strong className="text-[#3D2314]">Lagna</strong>, <strong className="text-[#3D2314]">10th House Lord</strong> and planetary influences indicate where you grow. A personalized birth chart reading helps you in choosing the right path and time your next move with clarity and confidence.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 items-stretch">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EBDCD0] hover:border-[#854820]/40 transition-colors shadow-2xs flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#854820]/10 text-[#854820] flex items-center justify-center mb-2.5 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#3D2314] mb-1 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#6B5B52] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#854820] hover:bg-[#6D3815] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="bg-[#FAF6F0] hover:bg-[#F3EDE5] text-[#854820] border border-[#D5CBC1] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Relevant Career Service Image Frame with No Cropping */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group flex items-center justify-center">
              <img
                src={imageUrl}
                alt={imageCaption}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[580px] object-contain rounded-2xl sm:rounded-3xl transition-transform duration-500 ease-out"
              />
              
              {/* Subtle Image Actions (Top-Right on hover/focus) */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
                {isCustomized && (
                  <button
                    onClick={handleResetToDefault}
                    className="bg-black/70 hover:bg-black backdrop-blur-xs text-white p-2 rounded-xl text-xs transition-colors border border-white/20 shadow-md cursor-pointer"
                    title="Reset to default image"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={handleOpenEdit}
                  className="bg-black/70 hover:bg-[#854820] backdrop-blur-xs text-white p-2 rounded-xl text-xs font-semibold transition-all border border-white/20 flex items-center gap-1.5 shadow-md cursor-pointer"
                  title="Change Image"
                >
                  <ImageIcon className="w-4 h-4 text-[#E5B869]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Upload / Edit Image Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#EAE6E1] relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE4]">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#854820]" />
                <h3 className="font-serif font-bold text-lg text-[#2C1E16]">
                  Add / Change Service Image
                </h3>
              </div>
              <button 
                onClick={handleCloseEdit}
                className="text-gray-400 hover:text-gray-700 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Method Switch */}
            <div className="flex border-b border-[#F0EBE4] my-4">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
                  activeTab === 'upload'
                    ? 'border-[#854820] text-[#854820]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload From Device</span>
              </button>
              <button
                onClick={() => setActiveTab('url')}
                className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
                  activeTab === 'url'
                    ? 'border-[#854820] text-[#854820]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Image Web URL</span>
              </button>
            </div>

            {/* Tab: Upload Local File */}
            {activeTab === 'upload' && (
              <div className="space-y-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#D5CBC1] hover:border-[#854820] rounded-xl p-6 text-center cursor-pointer bg-[#FAF6F0] hover:bg-[#F3EDE5] transition-colors"
                >
                  <Upload className="w-8 h-8 text-[#854820] mx-auto mb-2" />
                  <p className="text-xs font-bold text-[#2C1E16]">Click to upload career service image</p>
                  <p className="text-[10px] text-gray-500 mt-1">PNG, JPG, WebP supported</p>
                </div>
              </div>
            )}

            {/* Tab: Image URL Input */}
            {activeTab === 'url' && (
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#2C1E16]">
                  Image URL:
                </label>
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                    setTempPreview(e.target.value);
                  }}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5CBC1] focus:outline-hidden focus:border-[#854820]"
                />

                {/* Quick Presets */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-gray-500">Astrology Presets:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {[
                      { label: 'Vedic Kundli Chart', url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80' },
                      { label: 'Astrology Desk & Books', url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80' },
                      { label: 'Sacred Ritual & Remedies', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80' },
                      { label: 'Executive Career Growth', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80' }
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setInputUrl(preset.url);
                          setTempPreview(preset.url);
                        }}
                        className="text-[10px] bg-[#FAF6F0] hover:bg-[#854820] hover:text-white text-[#5A4A42] px-2.5 py-1 rounded-md border border-[#EAE6E1] transition-colors"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Optional Caption Edit */}
            <div className="mt-4 pt-3 border-t border-[#F0EBE4] space-y-2">
              <label className="block text-xs font-semibold text-[#2C1E16]">
                Image Caption / Title:
              </label>
              <input
                type="text"
                value={inputCaption}
                onChange={(e) => setInputCaption(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#D5CBC1]"
              />
            </div>

            {/* Live Preview */}
            {tempPreview && (
              <div className="mt-3">
                <span className="text-[11px] font-bold text-[#2C1E16] block mb-1">Image Preview:</span>
                <div className="h-28 w-full rounded-lg overflow-hidden bg-gray-100 border border-[#EAE6E1]">
                  <img
                    src={tempPreview}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="mt-5 pt-3 border-t border-[#F0EBE4] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseEdit}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-[#854820] hover:bg-[#6D3815] text-white px-5 py-2 text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save &amp; Apply Image</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
