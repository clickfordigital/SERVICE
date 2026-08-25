import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/careerAstrologyData';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Phone,
  MessageCircle
} from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>High-Intent Career Astrology Questions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            Frequently Asked Questions About Career Astrology
          </h2>
          <p className="text-base text-[#6B5B52] mt-3">
            Find answers to common questions about our career guidance services.
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
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF6F0] border-[#854820]/60 shadow-sm'
                    : 'bg-[#FFFDF9] border-[#EBDCD0] hover:border-[#854820]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#3D2314]">
                    {faq.question}
                  </span>
                  <span className={`p-1 rounded-full shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#854820] text-white' : 'bg-[#F5EBE1] text-[#854820]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#5D4E45] leading-relaxed border-t border-[#E8DACD]/50 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif-heading text-xl font-bold text-[#3D2314]">
              Have a specific career dilemma not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5B52] mt-0.5">
              Acharya Hanish Bagga personally reviews every horoscope and addresses all queries directly.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenWhatsApp}
              className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-[#854820] hover:bg-[#663312] text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4" /> Book Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
