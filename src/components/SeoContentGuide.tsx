import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface SeoContentGuideProps {
  onOpenBooking: () => void;
}

export const SeoContentGuide: React.FC<SeoContentGuideProps> = ({ onOpenBooking }) => {
  return (
    <article id="career-guide" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guide Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>Vedic Career Astrology Guide &amp; Knowledge Hub</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            How Vedic Career Astrology Predicts Your Professional Success
          </h2>
          <p className="text-base text-[#6B5B52] mt-3">
            A comprehensive, scientific look at how planetary positions, Vimshottari Dashas, and the D10 Dashamsha chart shape your career trajectory.
          </p>
        </div>

        {/* Structured SEO Editorial Content */}
        <div className="space-y-12 text-[#4A3528] text-base leading-relaxed">
          
          {/* Section 1: Introduction & Principle */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              1. What is Career Astrology and How Does It Work from Date of Birth?
            </h3>
            <p>
              In Vedic Astrology (Jyotish Shastra), your professional life is not a matter of random chance or arbitrary luck. The exact moment of your birth—defined by your <strong>Date of Birth, Time of Birth, and Place of Birth</strong>—creates a precise astronomical snapshot of the cosmic sphere. This snapshot, known as the <em>Janma Kundli (Birth Chart)</em>, maps out your innate inclinations, intellectual strengths, leadership capacity, and career milestones.
            </p>
            <p>
              While contemporary aptitude tests evaluate current psychological preferences, <strong>Career Prediction Astrology</strong> analyzes both your inherent karmic aptitude (Swadharma) and your chronological timing cycles (Dasha and Gochar). This dual analysis explains why even highly skilled professionals occasionally experience career stagnation during unfavorable planetary transits, and why sudden exponential growth occurs once a supportive Mahadasha begins.
            </p>
          </section>

          {/* Section 2: 10th House and D10 Dashamsha */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              2. The Role of the 10th House (Karma Bhava) and D10 Dashamsha Chart
            </h3>
            <p>
              In a Vedic horoscope, twelve distinct houses govern various dimensions of human existence. The four pillars responsible for livelihood and wealth are known as the <em>Artha Trikona</em> (2nd, 6th, and 10th houses) alongside the 11th house of gains:
            </p>
            
            {/* Semantic Comparison Table */}
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs sm:text-sm border border-[#E8DACD] rounded-xl overflow-hidden">
                <thead className="bg-[#854820] text-white">
                  <tr>
                    <th className="p-3 font-semibold">House</th>
                    <th className="p-3 font-semibold">Vedic Name</th>
                    <th className="p-3 font-semibold">Professional Role</th>
                    <th className="p-3 font-semibold">Significator (Karaka)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DACD] bg-[#FAF6F0]">
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">10th House</td>
                    <td className="p-3">Karma Bhava</td>
                    <td className="p-3">Chief executive power, status, fame, and primary profession</td>
                    <td className="p-3">Sun, Mercury, Saturn, Mars</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">6th House</td>
                    <td className="p-3">Seva Bhava</td>
                    <td className="p-3">Employment, competitive exams, service industry, problem-solving</td>
                    <td className="p-3">Mars, Saturn</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">2nd House</td>
                    <td className="p-3">Dhana Bhava</td>
                    <td className="p-3">Liquid earned income, assets, financial advisory, spoken words</td>
                    <td className="p-3">Jupiter, Mercury</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">11th House</td>
                    <td className="p-3">Labha Bhava</td>
                    <td className="p-3">Salary appraisals, promotions, corporate networking, bonus realizations</td>
                    <td className="p-3">Jupiter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Beyond the main D1 chart, Vedic astrologers rely on the <strong>D10 Dashamsha Chart</strong>. The Dashamsha is a specialized 10-fold harmonic division focused entirely on career. An astrologer verifies whether a strong planet in the D1 chart retains its dignity in the D10. If the 10th lord is fortified in the Dashamsha, the native achieves long-term executive renown, whereas an afflicted D10 indicates frequent workplace disputes or unexpected organizational disruption.
            </p>
          </section>

          {/* Section 3: Job Change Timing & Dasha System */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              3. Predicting Job Timing and Promotions: The Dasha System
            </h3>
            <p>
              One of the most frequent questions asked during a <strong>Career Astrology Consultation</strong> is: <em>"When is the best time for me to change jobs or expect a promotion?"</em>
            </p>
            <p>
              Timing in Vedic Astrology is decoded through the <strong>Vimshottari Dasha System</strong> (a 120-year cycle of 9 planetary periods) and <strong>Gochar (Transits)</strong>:
            </p>
            
            <ul className="space-y-2.5 my-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DACD]">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                <span><strong>Mahadasha &amp; Antardasha Activation:</strong> When the active period connects with the 6th, 10th, or 11th house lords, high-paying job offers and senior promotions materialize rapidly.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                <span><strong>Jupiter's Auspicious Transit (Guru Gochar):</strong> Jupiter transiting or aspecting your 10th or 11th house brings mentorship, company leadership support, and prestigious opportunities.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                <span><strong>Saturn's Transit (Shani Gochar):</strong> Saturn rewards disciplined work but tests patience. Understanding Saturn's transits prevents impulsive resignations during difficult quarters.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#854820] shrink-0 mt-0.5" />
                <span><strong>Rahu-Ketu Nodes:</strong> Favorable Rahu periods trigger sudden foreign job relocations, breakthroughs in cutting-edge tech (AI, Blockchain), or explosive visibility.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Business vs Job Decision */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              4. Job vs. Business (Startup): Making the Right Strategic Move
            </h3>
            <p>
              Transitioning from a salaried position into entrepreneurship requires examining specific planetary yogas. Starting a business without adequate 7th house (Trade), 3rd house (Initiative), and Mercury strength can lead to rapid capital depletion.
            </p>
            <p>
              During your consultation, Acharya Hanish Bagga performs a comparative strength test:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <div className="font-bold text-[#854820] text-sm mb-1">When Corporate Job is Better:</div>
                <p className="text-xs text-[#5D4E45]">
                  Strong 6th house, dominant Saturn or Sun, stable D10 placement ensuring uninterrupted salary jumps, executive titles, and corporate stability.
                </p>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <div className="font-bold text-[#854820] text-sm mb-1">When Business/Venture is Better:</div>
                <p className="text-xs text-[#5D4E45]">
                  Prominent 7th house, active Dhana Yogas (2nd and 11th houses interconnected), fortified Mercury and Rahu, supporting venture capital and independent scale.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Practical Vedic Remedies */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              5. Proven Vedic Remedies for Career Growth and Stability
            </h3>
            <p>
              Vedic remedies are grounded in energy alignment rather than superstition. When an unfavorable planetary configuration causes delays or office politics, targeted Vedic remedies restore equilibrium:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F5EBE1] text-[#854820] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3D2314]">Certified Natural Gemstones (Ratna Therapy)</h4>
                  <p className="text-xs text-[#6B5B52]">
                    Strengthening functional benefic planets (e.g. Yellow Sapphire for Jupiter, Emerald for Mercury, Ruby for Sun, or Blue Sapphire for Saturn) after strict Lagna analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F5EBE1] text-[#854820] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3D2314]">Sound Vibration &amp; Beej Mantras</h4>
                  <p className="text-xs text-[#6B5B52]">
                    Chanting specific Vedic acoustic formulas that calm mental anxiety, enhance verbal persuasion, and harmonize planetary vibrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F5EBE1] text-[#854820] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3D2314]">Workplace Desk &amp; Cabin Vastu</h4>
                  <p className="text-xs text-[#6B5B52]">
                    Aligning your work desk facing North/East, positioning heavy files in the South-West, and removing energy blockages to foster clear thinking and leadership presence.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* CTA box inside guide */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#854820] to-[#5C2B0E] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-heading text-2xl font-bold">
              Gain Clarity on Your Career Destiny Today
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8]">
              Consult with Acharya Hanish Bagga for an authentic, 1-on-1 Vedic Kundli analysis.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 bg-white hover:bg-[#FAF6F0] text-[#854820] font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </article>
  );
};
