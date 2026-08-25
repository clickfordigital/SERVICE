import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Image as ImageIcon, 
  Check, 
  X, 
  RotateCcw, 
  Sun, 
  Moon, 
  Compass, 
  Layers, 
  Sliders, 
  Upload,
  Link as LinkIcon,
  ShieldCheck,
  Zap,
  Eye
} from 'lucide-react';
import { useVedicTheme, VEDIC_THEMES, VedicThemeId } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

export const AstrologicalThemeCustomizer: React.FC = () => {
  const { 
    currentTheme, 
    themeId, 
    setTheme, 
    isCustomizerOpen, 
    setIsCustomizerOpen, 
    astrologicalMotifsEnabled, 
    setAstrologicalMotifsEnabled 
  } = useVedicTheme();

  const [activeTab, setActiveTab] = useState<'theme' | 'motifs'>('theme');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const handleSelectTheme = (id: VedicThemeId) => {
    setTheme(id);
    setCopiedNotification(`Applied theme: ${VEDIC_THEMES[id].name}`);
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  return (
    <>
      {/* Floating Astrological Theme & Customizer Trigger Button */}
      <div className="fixed bottom-24 right-5 sm:bottom-8 sm:right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCustomizerOpen(true)}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full shadow-2xl transition-all cursor-pointer border text-white font-bold text-xs sm:text-sm group"
          style={{
            backgroundColor: currentTheme.primary,
            borderColor: currentTheme.accentGold,
            boxShadow: `0 8px 25px ${currentTheme.accentGlow}`
          }}
          aria-label="Customize Vedic Theme & Astrological Styling"
        >
          <div className="relative">
            <Palette className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#CA8A04] animate-ping" />
          </div>
          <span className="hidden sm:inline font-medium">Theme &amp; Style</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 font-cinzel">
            Vedic UI
          </span>
        </motion.button>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copiedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1F2937] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xl border border-gray-700 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#CA8A04]" />
            <span>{copiedNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-over Customizer Panel */}
      <AnimatePresence>
        {isCustomizerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCustomizerOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-screen max-w-md bg-white shadow-2xl border-l border-[#EADBD0] flex flex-col justify-between"
              >
                {/* Header */}
                <div 
                  className="p-5 text-white flex items-center justify-between"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-lg font-bold leading-tight">
                        Vedic Theme &amp; Astrological Styling
                      </h3>
                      <p className="text-[11px] text-white/80">
                        {currentTheme.sanskritName}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCustomizerOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[#E8DACD] bg-[#FAF6F0] p-1.5 gap-1.5">
                  <button
                    onClick={() => setActiveTab('theme')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'theme'
                        ? 'bg-white text-[#2C1E16] shadow-xs border border-[#E8DACD]'
                        : 'text-[#6B5B52] hover:text-[#2C1E16]'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5 text-[#854820]" />
                    <span>Color Palettes (5)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('motifs')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'motifs'
                        ? 'bg-white text-[#2C1E16] shadow-xs border border-[#E8DACD]'
                        : 'text-[#6B5B52] hover:text-[#2C1E16]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
                    <span>Astrological Motifs</span>
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                  
                  {/* TAB 1: COLOR PALETTES */}
                  {activeTab === 'theme' && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">
                          Select Planetary Vedic Color Theme
                        </h4>
                        <p className="text-xs text-[#6B5B52]">
                          Instantly switches all section gradients, badges, borders, CTA buttons, and accents.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {(Object.keys(VEDIC_THEMES) as VedicThemeId[]).map((id) => {
                          const theme = VEDIC_THEMES[id];
                          const isSelected = themeId === id;
                          return (
                            <button
                              key={id}
                              onClick={() => handleSelectTheme(id)}
                              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col gap-2.5 ${
                                isSelected
                                  ? 'border-[#854820] bg-[#FAF6F0] shadow-md ring-2 ring-[#854820]/15'
                                  : 'border-[#E8DACD] bg-white hover:border-[#854820]/40 hover:bg-[#FAF6F0]/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-[#2C1E16] flex items-center gap-2">
                                    <span>{theme.name}</span>
                                    {isSelected && (
                                      <span className="w-5 h-5 rounded-full bg-[#854820] text-white flex items-center justify-center">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[11px] text-[#8A7A70] font-cinzel">
                                    {theme.sanskritName}
                                  </div>
                                </div>
                                
                                {/* Color Swatches */}
                                <div className="flex items-center gap-1.5">
                                  <span 
                                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs" 
                                    style={{ backgroundColor: theme.primary }} 
                                  />
                                  <span 
                                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs" 
                                    style={{ backgroundColor: theme.accentGold }} 
                                  />
                                  <span 
                                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs" 
                                    style={{ backgroundColor: theme.bgCream }} 
                                  />
                                </div>
                              </div>

                              <p className="text-[11px] text-[#6B5B52] leading-tight">
                                {theme.tagline}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: ASTROLOGICAL MOTIFS */}
                  {activeTab === 'motifs' && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">
                          Sacred Astrological Geometry
                        </h4>
                        <p className="text-xs text-[#6B5B52]">
                          Control planetary watermarks, rotating astrolabes, Kundli chakras, and Navagraha glyphs.
                        </p>
                      </div>

                      {/* Motifs Toggle */}
                      <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DACD] flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-[#2C1E16] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
                            <span>Astrological Sacred Backgrounds</span>
                          </div>
                          <p className="text-[11px] text-[#6B5B52]">
                            Display sacred Vedic mandalas, zodiac glyphs &amp; constellations
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={astrologicalMotifsEnabled} 
                            onChange={(e) => setAstrologicalMotifsEnabled(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#854820]"></div>
                        </label>
                      </div>

                      {/* Quick Navigation to Section Image Customizers */}
                      <div className="space-y-3 pt-2">
                        <h5 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">
                          Section Image Options
                        </h5>
                        <p className="text-[11px] text-[#6B5B52]">
                          You can customize images directly in specific sections using their dedicated edit buttons:
                        </p>

                        <div className="space-y-2">
                          <a
                            href="#about-career-astrology"
                            onClick={() => setIsCustomizerOpen(false)}
                            className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DACD] hover:border-[#854820] text-xs font-semibold text-[#2C1E16] transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <ImageIcon className="w-4 h-4 text-[#854820]" />
                              <span>About Career Astrology (Kundli / Portrait)</span>
                            </span>
                            <span className="text-[11px] text-[#854820] underline">Edit Section</span>
                          </a>

                          <a
                            href="#what-you-get"
                            onClick={() => setIsCustomizerOpen(false)}
                            className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DACD] hover:border-[#854820] text-xs font-semibold text-[#2C1E16] transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-[#854820]" />
                              <span>Deliverables (Sample Horoscope Report)</span>
                            </span>
                            <span className="text-[11px] text-[#854820] underline">Edit Section</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-[#E8DACD] bg-[#FAF6F0] flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTheme('terracotta-gold')}
                    className="text-xs font-semibold text-[#6B5B52] hover:text-[#2C1E16] flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Default Theme</span>
                  </button>
                  <button
                    onClick={() => setIsCustomizerOpen(false)}
                    className="px-5 py-2 rounded-xl bg-[#854820] text-white text-xs font-bold hover:bg-[#663312] transition-colors cursor-pointer shadow-xs"
                  >
                    Done
                  </button>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
