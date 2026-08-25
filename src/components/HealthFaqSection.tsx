import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { HEALTH_FAQS } from '../data/healthAstrologyData';

interface HealthFaqSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const HealthFaqSection: React.FC<HealthFaqSectionProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(HEALTH_FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="health-faqs" className="py-14 sm:py-20 bg-white border-b border-[#EBDCD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            Common Questions About Health &amp; Medical Astrology
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3">
            Get clear, authentic answers on how Ayur-Jyotish works alongside modern medical science.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {HEALTH_FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                id={`health-faq-${faq.id}`}
                className="border border-[#EBDCD0] rounded-2xl overflow-hidden transition-all bg-[#FAF6F0]"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EAE1] transition-colors"
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#3D2314]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#854820] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#854820] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5D4E45] leading-relaxed border-t border-[#EBDCD0] bg-[#FAF6F0]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DACD] text-center space-y-3">
          <h3 className="font-serif-heading text-lg font-bold text-[#3D2314]">
            Have a Specific Question About Your Medical Horoscope?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5B52] max-w-md mx-auto">
            Acharya Ganesh’s team is available to help clarify your requirements before your consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </button>
            <a
              href="tel:+917300004325"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F0E4D8] text-[#3D2314] border border-[#D6C4B4] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#854820]" />
              <span>Call Helpline: +91 73000-04325</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
