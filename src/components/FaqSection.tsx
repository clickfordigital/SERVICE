import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/careerAstrologyData';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  Code, 
  Copy, 
  Check, 
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSchemaModal, setShowSchemaModal] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const rawJsonLdSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }, null, 2);

  const handleCopySchema = () => {
    navigator.clipboard.writeText(rawJsonLdSchema);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>High-Intent Questions &amp; Answers</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#6B5B52] mt-3">
            Everything you need to know about Career Astrology, Kundli prediction by date of birth, and consultation.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search career astrology questions (e.g. D10 chart, job timing, promotion, remedies)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#FAF6F0] border border-[#E8DACD] rounded-xl text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: 'All FAQs' },
                { id: 'houses', label: '10th House & Charts' },
                { id: 'timing', label: 'Job Timing & Dasha' },
                { id: 'general', label: 'Career Prediction' },
                { id: 'remedies', label: 'Vedic Remedies' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                    selectedCategory === cat.id
                      ? 'bg-[#854820] text-white border-[#854820]'
                      : 'bg-[#FAF6F0] text-[#5D4E45] border-[#E8DACD] hover:bg-[#F5EBE1]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View JSON-LD Schema button */}
            <button
              onClick={() => setShowSchemaModal(true)}
              className="text-xs font-semibold text-[#854820] hover:text-[#663312] flex items-center gap-1 bg-[#F5EBE1] px-2.5 py-1 rounded-md border border-[#E2D2C3] cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>FAQ Schema (JSON-LD)</span>
            </button>
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
              <p className="text-sm text-[#6B5B52]">No questions matched your search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-xs font-bold text-[#854820] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
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
            })
          )}
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

        {/* Schema Modal (JSON-LD) */}
        {showSchemaModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E8DACD]">
              <div className="p-4 border-b border-[#E8DACD] flex items-center justify-between bg-[#FAF6F0] rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#854820]" />
                  <span className="font-bold text-sm text-[#2C1E16]">FAQ Schema (JSON-LD) for Search Engines</span>
                </div>
                <button
                  onClick={() => setShowSchemaModal(false)}
                  className="text-xs font-bold text-[#7A6B62] hover:text-[#2C1E16]"
                >
                  ✕ Close
                </button>
              </div>

              <div className="p-4 overflow-y-auto font-mono text-xs bg-[#1E1E1E] text-[#9CDCFE] flex-1">
                <pre className="whitespace-pre-wrap">{rawJsonLdSchema}</pre>
              </div>

              <div className="p-4 border-t border-[#E8DACD] bg-[#FAF6F0] flex items-center justify-between rounded-b-2xl">
                <span className="text-xs text-[#7A6B62]">
                  Automatically injected into the page &lt;head&gt; for Google Rich Results.
                </span>
                <button
                  onClick={handleCopySchema}
                  className="px-4 py-2 bg-[#854820] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedSchema ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSchema ? 'Copied!' : 'Copy JSON-LD'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
