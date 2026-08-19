import React, { useState } from 'react';
import { CAREER_HOUSES } from '../data/careerAstrologyData';
import { Sparkles, Compass, ShieldCheck, ArrowRight, Eye, HelpCircle } from 'lucide-react';

const PLANETARY_CAREER_MAP = [
  {
    planet: 'Sun (Surya)',
    archetype: 'Authority, Government & Executive Leadership',
    domains: 'Civil Services (UPSC), Senior Management, Directors, Public Policy, Politics, Healthcare Leadership.',
    strengthEffect: 'Brings natural charisma, executive authority, recognition from top brass, and government tenders.',
    color: 'from-amber-600 to-orange-500'
  },
  {
    planet: 'Mercury (Budh)',
    archetype: 'Analytics, IT, Commerce & Communication',
    domains: 'Software Development, AI/Data Science, Financial Trading, Chartered Accountancy, Media, Marketing, Legal Advisory.',
    strengthEffect: 'Sharp analytical problem-solving, rapid adaptability in tech stacks, and high negotiation aptitude.',
    color: 'from-emerald-600 to-teal-500'
  },
  {
    planet: 'Mars (Mangal)',
    archetype: 'Execution, Engineering, Defense & Real Estate',
    domains: 'Civil/Mechanical Engineering, Real Estate Development, Surgery, Defense Services, Operations Management.',
    strengthEffect: 'Courage to take strategic business risks, relentless work stamina, and decisive project leadership.',
    color: 'from-red-600 to-rose-500'
  },
  {
    planet: 'Saturn (Shani)',
    archetype: 'Perseverance, Organization, Law & Heavy Industries',
    domains: 'Judiciary, Corporate Law, Oil & Gas, Mining, Supply Chain/Logistics, Manufacturing, Long-term Asset Building.',
    strengthEffect: 'Resilience under stressful deadlines, long-term mastery, and massive eventual success after 30-35.',
    color: 'from-indigo-700 to-blue-600'
  },
  {
    planet: 'Jupiter (Guru)',
    archetype: 'Wisdom, Strategic Advisory, Banking & Education',
    domains: 'Investment Banking, Wealth Management, Corporate Mentorship, Higher Academia, Research, Judiciary.',
    strengthEffect: 'Ethical reputation, visionary decision-making, global investor confidence, and steady wealth accumulation.',
    color: 'from-yellow-600 to-amber-500'
  },
  {
    planet: 'Venus (Shukra)',
    archetype: 'Design, Luxury, Digital Media & Hospitality',
    domains: 'UI/UX Design, Fashion & Luxury Brand Management, Entertainment, Fine Dining, Architecture, Creative Arts.',
    strengthEffect: 'Aesthetic mastery, exceptional client rapport, brand loyalty, and affluent high-net-worth clientele.',
    color: 'from-pink-600 to-rose-400'
  }
];

interface InteractiveCareerAnalyzerProps {
  onOpenBooking: () => void;
}

export const InteractiveCareerAnalyzer: React.FC<InteractiveCareerAnalyzerProps> = ({ onOpenBooking }) => {
  const [selectedHouse, setSelectedHouse] = useState<number>(10);
  const [activePlanet, setActivePlanet] = useState<number>(0);

  const currentHouse = CAREER_HOUSES.find(h => h.houseNumber === selectedHouse) || CAREER_HOUSES[0];
  const currentPlanet = PLANETARY_CAREER_MAP[activePlanet];

  return (
    <section id="career-explorer" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>Interactive Vedic Astrological Explorer</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            How Your Birth Chart Governs Your Career
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3">
            Click through the Vedic Career Houses and Ruling Planets to understand the cosmic blueprint behind your professional destiny.
          </p>
        </div>

        {/* 2-Part Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Career Houses Selector */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-sm space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-heading text-2xl font-bold text-[#3D2314]">
                  Key Career Houses (Bhavas)
                </h3>
                <span className="text-xs font-semibold text-[#854820] bg-[#F5EBE1] px-2.5 py-1 rounded-full">
                  Click House to Inspect
                </span>
              </div>
              <p className="text-xs text-[#6B5B52]">
                In Vedic Jyotish, your professional trajectory is decoded through specific Bhavas in your D1 and D10 charts.
              </p>
            </div>

            {/* House selection pills */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {CAREER_HOUSES.map((house) => (
                <button
                  key={house.houseNumber}
                  onClick={() => setSelectedHouse(house.houseNumber)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border ${
                    selectedHouse === house.houseNumber
                      ? 'bg-[#854820] text-white border-[#854820] shadow-md scale-105'
                      : 'bg-[#FAF6F0] text-[#4A3528] border-[#E8DACD] hover:bg-[#F0E4D8]'
                  }`}
                >
                  <div className="text-sm font-cinzel">{house.houseNumber}th</div>
                  <div className="text-[10px] font-normal opacity-90 truncate">House</div>
                </button>
              ))}
            </div>

            {/* Selected House Deep Dive Card */}
            <div className="p-5 rounded-xl bg-[#FAF6F0] border border-[#E8DACD] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#854820] tracking-wider uppercase font-cinzel">
                  {currentHouse.sanskritName}
                </span>
                <span className="text-xs font-medium text-[#7A6B62] bg-white px-2 py-0.5 rounded border border-[#E8DACD]">
                  Rulers: {currentHouse.planetaryRulers}
                </span>
              </div>

              <h4 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                {currentHouse.houseName}
              </h4>

              <p className="text-sm text-[#5D4E45] leading-relaxed">
                {currentHouse.careerSignificance}
              </p>

              <div className="pt-2 border-t border-[#E8DACD]">
                <div className="text-xs font-bold text-[#4A3528] mb-1.5">Impact on Your Career:</div>
                <ul className="space-y-1.5">
                  {currentHouse.sampleOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="text-xs text-[#6B5B52] flex items-start gap-2">
                      <span className="text-[#854820] font-bold">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Planetary Significator Explorer */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-sm space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-heading text-2xl font-bold text-[#3D2314]">
                  Planetary Career Influences (Grahas)
                </h3>
                <span className="text-xs font-semibold text-[#854820] bg-[#F5EBE1] px-2.5 py-1 rounded-full">
                  6 Key Rulers
                </span>
              </div>
              <p className="text-xs text-[#6B5B52]">
                Your dominant planet determines your professional archetype, work style, and industry fit.
              </p>
            </div>

            {/* Planetary Pills */}
            <div className="flex flex-wrap gap-2">
              {PLANETARY_CAREER_MAP.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePlanet(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                    activePlanet === idx
                      ? 'bg-[#854820] text-white border-[#854820] shadow-sm'
                      : 'bg-[#FAF6F0] text-[#4A3528] border-[#E8DACD] hover:bg-[#F0E4D8]'
                  }`}
                >
                  {p.planet.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Planet Card */}
            <div className="p-5 rounded-xl bg-[#FAF6F0] border border-[#E8DACD] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                  {currentPlanet.planet}
                </h4>
                <span className="text-[11px] font-bold text-[#854820] bg-white px-2.5 py-1 rounded-full border border-[#E8DACD]">
                  {currentPlanet.archetype.split(',')[0]}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-[#4A3528] mb-0.5">Core Archetype:</div>
                <p className="text-xs text-[#5D4E45] font-medium">{currentPlanet.archetype}</p>
              </div>

              <div>
                <div className="text-xs font-bold text-[#4A3528] mb-0.5">Suitable Domains &amp; Industries:</div>
                <p className="text-xs text-[#6B5B52] leading-relaxed">{currentPlanet.domains}</p>
              </div>

              <div className="pt-2 border-t border-[#E8DACD]">
                <div className="text-xs font-bold text-[#4A3528] mb-0.5">When Strong in Your Kundli:</div>
                <p className="text-xs text-[#5D4E45] leading-relaxed">{currentPlanet.strengthEffect}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Conclusion Banner */}
        <div className="mt-8 p-6 rounded-xl bg-[#F5EBE1] border border-[#E8DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#854820] shrink-0" />
            <p className="text-xs sm:text-sm text-[#4A3528]">
              <strong>Want to know which houses and planets are currently active in your horoscope?</strong> Acharya Hanish Bagga provides a complete breakdown in your 1-on-1 session.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-5 py-2.5 bg-[#854820] hover:bg-[#663312] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow"
          >
            <span>Analyze My Horoscope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
