import React, { useState } from 'react';
import { 
  Activity, 
  Shield, 
  Sparkles, 
  HeartPulse, 
  Sun, 
  Moon, 
  Flame, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle,
  FileCheck,
  Zap,
  Leaf
} from 'lucide-react';

interface AboutHealthAstrologyProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

const HEALTH_PILLARS = [
  {
    icon: Activity,
    title: 'Lagna & Ojas (Immunity)',
    desc: 'The 1st house and its lord determine your baseline constitutional resilience, cellular vitality, and power to overcome ailments.'
  },
  {
    icon: Shield,
    title: '6th House (Roga Bhava)',
    desc: 'Analyzes disease susceptibility, inflammatory tendencies, bacterial/viral vulnerability, and acute immune responses.'
  },
  {
    icon: Clock,
    title: '8th House & Longevity (Ayush)',
    desc: 'Governs chronic or deep-seated conditions, surgeries, cellular regeneration, and long-term vitality management.'
  },
  {
    icon: Leaf,
    title: 'Ayurvedic Tridoshas & D30',
    desc: 'Evaluates Vata, Pitta, and Kapha elemental balances and the D-30 Trimshamsha divisional chart for karmic health roots.'
  }
];

export const AboutHealthAstrology: React.FC<AboutHealthAstrologyProps> = ({
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'bhavas' | 'doshas' | 'remedies'>('foundation');

  const imageUrl = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80";
  const imageCaption = "Ayur-Jyotish & Holistic Health Horoscope Consultation by Acharya Ganesh";

  return (
    <section 
      id="about-health-astrology" 
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#EBDCD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Comprehensive Explanation & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs">
              <Activity className="w-3.5 h-3.5" />
              <span>Vedic Medical Astrology (Ayur-Jyotish) Explained</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
              Understanding Health &amp; Medical Astrology: The Cosmic Science of Vitality
            </h2>

            {/* Core Explanatory Copy */}
            <div className="text-sm sm:text-base text-[#5D4E45] leading-relaxed space-y-3.5 font-normal">
              <p>
                Your physical well-being is influenced by genetics, nutrition, medical care, environment, mental stress, and daily lifestyle habits. Vedic Medical Astrology (Ayur-Jyotish) provides an extraordinary, time-tested diagnostic layer to decode your underlying constitutional blueprint and the energetic roots of physical imbalances.
              </p>
              <p>
                In classical Jyotish, diseases do not occur in isolation. They reflect cosmic imbalances across the planetary rulers of bodily tissues (Dhatus), planetary Dasha transitions, and afflictions across the 6th, 8th, and 12th houses of your Kundli.
              </p>
              <p className="font-medium text-[#3D2314] bg-[#FAF6F0] p-3 rounded-xl border border-[#EBDCD0]">
                A complete medical horoscope consultation harmonizes ancient Ayurvedic Tridosha wisdom with modern clinical contexts to offer proactive timing, prevention, and non-invasive Vedic remedies.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 items-stretch">
              {HEALTH_PILLARS.map((pillar, idx) => {
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

            {/* CTA Buttons in Left Column */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#854820] hover:bg-[#663312] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Book Health Astrology Reading
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="bg-[#FAF6F0] hover:bg-[#F0E4D8] text-[#854820] border border-[#D6C4B4] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
              >
                Discuss on WhatsApp
              </button>
            </div>

          </div>

          {/* Right Column: Relevant Health Service Image Frame with No Cropping */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group flex items-center justify-center">
              <img
                src={imageUrl}
                alt={imageCaption}
                className="w-full h-auto max-h-[580px] object-contain rounded-2xl sm:rounded-3xl transition-transform duration-500 ease-out"
              />
              
              {/* Subtle Image Caption Overlay at Bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FCEBD8] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" />
                  <span>Ayur-Jyotish &amp; Planetary Health Analysis</span>
                </div>
                <p className="text-xs text-[#EADBD0] leading-snug">
                  Personalized analysis of Lagna, Sun vitality, 6th/8th house Dasha periods, and holistic Vedic remedies.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
