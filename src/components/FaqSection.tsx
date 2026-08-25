import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/careerAstrologyData';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Phone,
  MessageCircle,
  Sparkles,
  Compass
} from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-22 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Astrological background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-10 right-10 w-72 h-72 pointer-events-none opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#854820]">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="100,10 190,190 10,190" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>High-Intent Career Astrology Questions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            Frequently Asked Questions About Career Astrology
          </h2>
          <p className="text-base text-[#6B5B52] mt-3">
            Find answers to common questions regarding horoscope readings, birth chart requirements, and career predictions.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF6F0] shadow-sm'
                    : 'bg-[#FFFDF9] hover:bg-[#FAF6F0]/60'
                }`}
                style={{
                  borderColor: isOpen ? currentTheme.primary : currentTheme.cardBorder
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#3D2314]">
                    {faq.question}
                  </span>
                  <span 
                    className="p-1 rounded-full shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: isOpen ? currentTheme.primary : currentTheme.primaryLight,
                      color: isOpen ? '#FFFFFF' : currentTheme.primary
                    }}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-[#5D4E45] leading-relaxed border-t border-[#E8DACD]/60 pt-3.5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Prompt */}
        <div 
          className="mt-12 p-6 sm:p-7 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ 
            backgroundColor: currentTheme.primaryLight,
            borderColor: currentTheme.cardBorder
          }}
        >
          <div>
            <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
              Have a specific career dilemma not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5B52] mt-0.5">
              Acharya Hanish Bagga personally reviews every horoscope and addresses all queries directly.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenWhatsApp}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
