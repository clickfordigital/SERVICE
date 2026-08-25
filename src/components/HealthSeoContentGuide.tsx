import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  HeartPulse, 
  Leaf, 
  Activity, 
  Clock 
} from 'lucide-react';

interface HealthSeoContentGuideProps {
  onOpenBooking: () => void;
}

export const HealthSeoContentGuide: React.FC<HealthSeoContentGuideProps> = ({ onOpenBooking }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('sec-1');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id="health-guide" className="py-14 sm:py-20 bg-white border-b border-[#EBDCD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Medical Astrology Authority Guide</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            The Definitive Guide to Vedic Health &amp; Medical Astrology (Ayur-Jyotish)
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            Learn how classical Vedic Jyotish identifies constitutional tendencies, planetary Dasha health cycles, and preventive Ayurvedic lifestyle remedies.
          </p>
        </div>

        {/* Accordion / Deep Dive Guide Modules */}
        <div className="space-y-4">
          
          {/* Section 1 */}
          <div className="border border-[#EBDCD0] rounded-2xl overflow-hidden shadow-2xs bg-[#FAF6F0]">
            <button
              onClick={() => toggleSection('sec-1')}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EAE1] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#854820]/10 text-[#854820] flex items-center justify-center font-bold font-cinzel text-sm shrink-0">
                  01
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
                  What is Medical Astrology (Ayur-Jyotish) &amp; How Does It Work?
                </h3>
              </div>
              {expandedSection === 'sec-1' ? (
                <ChevronUp className="w-5 h-5 text-[#854820] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#854820] shrink-0" />
              )}
            </button>

            {expandedSection === 'sec-1' && (
              <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-3 bg-[#FAF6F0] border-t border-[#EBDCD0]">
                <p>
                  Medical Astrology, classically termed <em>Ayur-Jyotish</em>, is an ancient sub-discipline of Vedic astrology that maps the positions of celestial bodies at birth to the physiological, biochemical, and psychological constitution of an individual.
                </p>
                <p>
                  In the Vedic worldview, the human body is a microcosm (<em>Pindanda</em>) of the macrocosm (<em>Brahmanda</em>). Every zodiac sign corresponds to specific anatomical segments (from Aries governing the head down to Pisces governing the lymphatic system and feet), while the nine planets govern distinct biological tissues (<em>Sapta Dhatus</em>) and metabolic energies.
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E8DACD] space-y-2">
                  <div className="font-bold text-[#3D2314]">The 7 Dhatus and Their Planetary Governors:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li><strong className="text-[#854820]">Rasa (Plasma/Fluids):</strong> Governed by the Moon</li>
                    <li><strong className="text-[#854820]">Rakta (Blood/Hemoglobin):</strong> Governed by Mars &amp; Sun</li>
                    <li><strong className="text-[#854820]">Mamsa (Muscle tissue):</strong> Governed by Mars</li>
                    <li><strong className="text-[#854820]">Meda (Adipose/Fat):</strong> Governed by Jupiter</li>
                    <li><strong className="text-[#854820]">Asthi (Bones &amp; Teeth):</strong> Governed by Saturn &amp; Sun</li>
                    <li><strong className="text-[#854820]">Majja (Bone Marrow/Nerves):</strong> Governed by Mercury &amp; Mars</li>
                    <li><strong className="text-[#854820]">Shukra (Reproductive Vitality/Ojas):</strong> Governed by Venus</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="border border-[#EBDCD0] rounded-2xl overflow-hidden shadow-2xs bg-[#FAF6F0]">
            <button
              onClick={() => toggleSection('sec-2')}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EAE1] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#854820]/10 text-[#854820] flex items-center justify-center font-bold font-cinzel text-sm shrink-0">
                  02
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
                  Decoding the Trika Houses (6th, 8th &amp; 12th Bhavas) in Health Prediction
                </h3>
              </div>
              {expandedSection === 'sec-2' ? (
                <ChevronUp className="w-5 h-5 text-[#854820] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#854820] shrink-0" />
              )}
            </button>

            {expandedSection === 'sec-2' && (
              <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-3 bg-[#FAF6F0] border-t border-[#EBDCD0]">
                <p>
                  The dusthana (challenging) houses in a birth chart are the primary anchors for medical astrology analysis:
                </p>
                <ul className="space-y-2">
                  <li className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <strong className="text-[#3D2314] font-bold">6th House (Roga Bhava):</strong> Governs acute diseases, immune fights, bacterial infections, digestive tract ailments, and competitive bodily stress. Benefic influences here help swiftly overcome diseases.
                  </li>
                  <li className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <strong className="text-[#3D2314] font-bold">8th House (Ayur Bhava):</strong> Determines longevity, chronic degenerative illnesses, unexpected surgical interventions, and latent hereditary conditions.
                  </li>
                  <li className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <strong className="text-[#3D2314] font-bold">12th House (Vyaya Bhava):</strong> Represents hospitalization, quarantine, sleep quality, psycho-somatic ailments, and the body’s ability to detoxify during rest.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="border border-[#EBDCD0] rounded-2xl overflow-hidden shadow-2xs bg-[#FAF6F0]">
            <button
              onClick={() => toggleSection('sec-3')}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EAE1] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#854820]/10 text-[#854820] flex items-center justify-center font-bold font-cinzel text-sm shrink-0">
                  03
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
                  Ayurvedic Tridoshas (Vata, Pitta, Kapha) in the Horoscope
                </h3>
              </div>
              {expandedSection === 'sec-3' ? (
                <ChevronUp className="w-5 h-5 text-[#854820] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#854820] shrink-0" />
              )}
            </button>

            {expandedSection === 'sec-3' && (
              <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-3 bg-[#FAF6F0] border-t border-[#EBDCD0]">
                <p>
                  According to Charaka Samhita and classical Ayur-Jyotish, an imbalance in the three biological humors (Doshas) is the root cause of all illnesses. Your Kundli reveals your inborn constitution (<em>Prakriti</em>) and current imbalance (<em>Vikriti</em>):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <div className="font-bold text-[#854820] mb-1">Vata (Air &amp; Ether)</div>
                    <p className="text-xs text-[#6B5B52]">Governed by Saturn, Rahu, and dry Mercury. Imbalances manifest as insomnia, joint stiffness, tremors, and dry skin.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <div className="font-bold text-[#854820] mb-1">Pitta (Fire &amp; Water)</div>
                    <p className="text-xs text-[#6B5B52]">Governed by Sun, Mars, and Ketu. Imbalances trigger inflammations, fevers, hyperacidity, hypertension, and bile issues.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E8DACD]">
                    <div className="font-bold text-[#854820] mb-1">Kapha (Earth &amp; Water)</div>
                    <p className="text-xs text-[#6B5B52]">Governed by Moon, Venus, and Jupiter. Imbalances produce sluggish metabolism, respiratory congestion, fluid retention, and weight gain.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div className="border border-[#EBDCD0] rounded-2xl overflow-hidden shadow-2xs bg-[#FAF6F0]">
            <button
              onClick={() => toggleSection('sec-4')}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EAE1] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#854820]/10 text-[#854820] flex items-center justify-center font-bold font-cinzel text-sm shrink-0">
                  04
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#3D2314]">
                  Timing Health Transitions: Vimshottari Dasha &amp; Planetary Transits
                </h3>
              </div>
              {expandedSection === 'sec-4' ? (
                <ChevronUp className="w-5 h-5 text-[#854820] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#854820] shrink-0" />
              )}
            </button>

            {expandedSection === 'sec-4' && (
              <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-3 bg-[#FAF6F0] border-t border-[#EBDCD0]">
                <p>
                  One of the most valuable aspects of Vedic medical astrology is chronological timing. Vimshottari Dasha reveals when specific planetary energies take center stage:
                </p>
                <p>
                  During the Mahadasha or Antardasha of the 6th or 8th lord, or when Saturn and Rahu make adverse transits across the natal Moon or Lagnesha, bodily vitality naturally experiences temporary dips. Knowing these windows in advance allows seekers to implement preventative routines, schedule routine screenings, and avoid excessive physical exhaustion.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* CTA Box inside guide */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-serif-heading text-lg font-bold text-[#3D2314]">
              Seek Personalized Insights for Your Health Chart
            </div>
            <p className="text-xs text-[#6B5B52] mt-0.5">
              Get an individualized breakdown of your Lagna strength, 6th/8th house Dasha, and Ayurvedic Tridosha balance.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap bg-[#854820] hover:bg-[#663312] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-xs cursor-pointer"
          >
            Consult Acharya Ganesh
          </button>
        </div>

      </div>
    </section>
  );
};
