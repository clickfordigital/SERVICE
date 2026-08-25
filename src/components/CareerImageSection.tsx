import React, { useState, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Link as LinkIcon, 
  RotateCcw, 
  Check, 
  X, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface CareerImageSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

const DEFAULT_IMAGE = {
  url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
  title: 'Vedic Career Horoscope & 10th House Karma Bhava Analysis',
  subtitle: 'Personalized Planetary Mapping for Job Timing, Promotions, Business Alignment & Astrological Remedies'
};

export const CareerImageSection: React.FC<CareerImageSectionProps> = ({
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE.url);
  const [imageTitle, setImageTitle] = useState<string>(DEFAULT_IMAGE.title);
  const [imageSubtitle, setImageSubtitle] = useState<string>(DEFAULT_IMAGE.subtitle);
  
  // Modal / Controls State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState<string>(imageUrl);
  const [inputTitle, setInputTitle] = useState<string>(imageTitle);
  const [inputSubtitle, setInputSubtitle] = useState<string>(imageSubtitle);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [tempPreview, setTempPreview] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenEdit = () => {
    setInputUrl(imageUrl);
    setInputTitle(imageTitle);
    setInputSubtitle(imageSubtitle);
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
    setImageTitle(inputTitle);
    setImageSubtitle(inputSubtitle);
    
    setToastMessage('Career astrology image updated successfully!');
    setTimeout(() => setToastMessage(null), 3000);
    handleCloseEdit();
  };

  const handleResetToDefault = () => {
    setImageUrl(DEFAULT_IMAGE.url);
    setImageTitle(DEFAULT_IMAGE.title);
    setImageSubtitle(DEFAULT_IMAGE.subtitle);
    setToastMessage('Reset to default career astrology image.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const isCustomized = imageUrl !== DEFAULT_IMAGE.url;

  return (
    <section id="career-image" className="py-14 sm:py-20 bg-[#FAF6F0] border-t border-[#EAE6E1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Action Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#854820]/10 text-[#854820] px-3.5 py-1 rounded-full text-xs font-semibold mb-2.5 border border-[#854820]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
              <span>Career Astrology Visual Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2C1E16] tracking-tight">
              {imageTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5A4A42] max-w-2xl">
              {imageSubtitle}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {isCustomized && (
              <button
                onClick={handleResetToDefault}
                className="bg-white hover:bg-gray-100 text-[#5A4A42] border border-[#D5CBC1] px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Reset to default image"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
            <button
              onClick={handleOpenEdit}
              className="bg-[#854820] hover:bg-[#6D3815] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4 text-[#E5B869]" />
              <span>{isCustomized ? 'Change Image' : 'Add / Upload Image'}</span>
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="mb-6 bg-[#2C1E16] text-[#FCEBD8] px-4 py-3 rounded-xl shadow-lg border border-[#E5B869]/40 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E5B869] shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Main Image Showcase Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#2C1E16] border border-[#EAE6E1] shadow-xl group">
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 max-h-[520px] overflow-hidden">
            <img
              src={imageUrl}
              alt={imageTitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient vignette for elegant contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

            {/* Bottom Overlay Info & Booking Trigger */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="text-white max-w-xl">
                <span className="inline-block bg-[#854820]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Vedic Jyotish &amp; Dashamsha (D10)
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-white leading-snug">
                  {imageTitle}
                </h3>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 sm:flex-initial bg-[#E5B869] hover:bg-[#D4A350] text-[#2C1E16] font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                <button
                  onClick={onOpenWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
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
                  Add / Change Career Image
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
                  <p className="text-xs font-bold text-[#2C1E16]">Click to upload career image or diagram</p>
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
                  <span className="text-[11px] font-semibold text-gray-500">Quick Astrology Presets:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {[
                      { label: 'Vedic Kundli Chart', url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80' },
                      { label: 'Astrology Workspace', url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80' },
                      { label: 'Sacred Ritual & Remedies', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80' }
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

            {/* Optional Title Edit */}
            <div className="mt-4 pt-3 border-t border-[#F0EBE4] space-y-2">
              <label className="block text-xs font-semibold text-[#2C1E16]">
                Section Headline (Optional):
              </label>
              <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
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
