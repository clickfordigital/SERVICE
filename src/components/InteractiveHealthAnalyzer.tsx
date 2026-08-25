import React, { useState } from 'react';
import { 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Info, 
  ChevronRight, 
  Sun, 
  Moon, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Leaf,
  Layers
} from 'lucide-react';
import { 
  HEALTH_HOUSES, 
  PLANETARY_HEALTH_MAP, 
  HealthHouse, 
  PlanetaryHealthSignificator 
} from '../data/healthAstrologyData';

export const InteractiveHealthAnalyzer: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<number>(6);
  const [activePlanet, setActivePlanet] = useState<number>(0);

  const currentHouse: HealthHouse = 
    HEALTH_HOUSES.find((h) => h.houseNumber === selectedHouse) || HEALTH_HOUSES[0];
  
  const currentPlanet: PlanetaryHealthSignificator = 
    PLANETARY_HEALTH_MAP[activePlanet] || PLANETARY_HEALTH_MAP[0];

  return (
    <section id="health-analyzer" className="py-14 sm:py-20 bg-[#FAF6F0] border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Ayur-Jyotish Explorer</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            Explore Medical Astrology Houses &amp; Planetary Health Rulers
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            Click on any House (Bhava) or Planet (Graha) below to inspect how classical Vedic astrology maps anatomical regions, Tridoshas, and health tendencies.
          </p>
        </div>

        {/* 2-Part Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Medical Houses Selector */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-sm space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6 flex-1 flex flex-col">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif-heading text-2xl font-bold text-[#3D2314]">
                    Key Health Houses (Bhavas)
                  </h3>
                  <span className="text-xs font-semibold text-[#854820] bg-[#F5EBE1] px-2.5 py-1 rounded-full">
                    Click House to Inspect
                  </span>
                </div>
                <p className="text-xs text-[#6B5B52]">
                  In Vedic Medical Astrology, your physical constitution is decoded through specific Bhavas in your D1 and D30 charts.
                </p>
              </div>

              {/* House selection pills */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {HEALTH_HOUSES.map((house) => (
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
              <div className="p-5 rounded-xl bg-[#FAF6F0] border border-[#E8DACD] space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#854820] tracking-wider uppercase font-cinzel">
                      {currentHouse.sanskritName}
                    </span>
                    <span className="text-xs font-medium text-[#7A6B62] bg-white px-2 py-0.5 rounded border border-[#E8DACD]">
                      Rulers: {currentHouse.planetaryRulers}
                    </span>
                  </div>

                  <h4 className="font-serif-heading text-xl font-bold text-[#3D2314] mb-1.5">
                    {currentHouse.houseName}
                  </h4>

                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-[#4A3528] uppercase tracking-wider">Governed Anatomy: </span>
                    <span className="text-xs text-[#5D4E45]">{currentHouse.anatomicalAreas}</span>
                  </div>

                  <p className="text-sm text-[#5D4E45] leading-relaxed">
                    {currentHouse.healthSignificance}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8DACD]">
                  <div className="text-xs font-bold text-[#4A3528] mb-1.5">Impact on Health &amp; Immunity:</div>
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
          </div>

          {/* Right: Planetary Health Significators Explorer */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-sm space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6 flex-1 flex flex-col">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif-heading text-2xl font-bold text-[#3D2314]">
                    Planetary Health Influences (Grahas)
                  </h3>
                  <span className="text-xs font-semibold text-[#854820] bg-[#F5EBE1] px-2.5 py-1 rounded-full">
                    6 Key Rulers
                  </span>
                </div>
                <p className="text-xs text-[#6B5B52]">
                  Each planet governs specific anatomical tissues (Dhatus), metabolic fires, and Tridosha elemental flows.
                </p>
              </div>

              {/* Planetary Pills */}
              <div className="flex flex-wrap gap-2">
                {PLANETARY_HEALTH_MAP.map((p, idx) => (
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
              <div className="p-5 rounded-xl bg-[#FAF6F0] border border-[#E8DACD] space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                      {currentPlanet.planet}
                    </h4>
                    <span className="text-[11px] font-bold text-[#854820] bg-white px-2.5 py-1 rounded-full border border-[#E8DACD]">
                      {currentPlanet.doshaAffinity}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold text-[#4A3528] mb-0.5">Governed Organs &amp; Dhatus:</div>
                    <p className="text-xs text-[#5D4E45] font-medium">{currentPlanet.governedOrgans}</p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#4A3528] mb-0.5">Potential Health Vulnerabilities:</div>
                    <p className="text-xs text-[#6B5B52] leading-relaxed">{currentPlanet.vulnerabilities}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8DACD]">
                  <div className="text-xs font-bold text-[#4A3528] mb-0.5">Recommended Vedic &amp; Ayurvedic Remedy:</div>
                  <p className="text-xs text-[#5D4E45] leading-relaxed font-medium">{currentPlanet.healingRemedy}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
