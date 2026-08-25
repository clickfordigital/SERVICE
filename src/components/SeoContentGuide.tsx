import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';

interface SeoContentGuideProps {
  onOpenBooking: () => void;
}

export const SeoContentGuide: React.FC<SeoContentGuideProps> = ({ onOpenBooking }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  return (
    <article 
      id="career-guide" 
      className="py-16 sm:py-22 bg-white border-b relative overflow-hidden transition-colors duration-500"
      style={{ borderColor: currentTheme.cardBorder }}
    >
      {/* Astrological background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute top-20 right-10 w-96 h-96 pointer-events-none opacity-5">
            <svg viewBox="0 0 300 300" className="w-full h-full text-[#854820]">
              <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="150,20 270,240 30,240" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="150,280 270,60 30,60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Guide Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder,
              color: currentTheme.primary
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vedic Career Astrology Guide &amp; Knowledge Hub</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            How Vedic Astrology Studies Your Professional Life
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3.5 leading-relaxed font-normal">
            Your career is influenced by education, skills, experience, choices, economic conditions, opportunities and personal effort. Astrology provides an additional framework for understanding your profession.
          </p>
        </div>

        {/* Structured Editorial Content */}
        <div className="space-y-12 text-[#4A3528] text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: What is Career Astrology */}
          <section className="space-y-3.5">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              What Is Career Astrology?
            </h3>
            <p>
              In the professional domain, an astrologer looks at the houses related to career, work, income, gains, initiative, business, education and fortune. Personalised career predictions, thus, call for more than merely reading the Sun sign.
            </p>
            <p>
              The scheduling aspect is also crucial. Vimshottari Dasha, Antardasha and the important planetary transits are studied to determine the time when certain career themes will get more active. This is the difference between career prediction astrology and a daily or monthly horoscope.
            </p>
          </section>

          {/* Section 2: Career Astrology by Date of Birth */}
          <section className="space-y-3.5">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              How Does Career Astrology by Date of Birth Work?
            </h3>
            <p>
              Your date of birth determines the positions of your planets for the day you were born. But Birth time/place is generally also needed for an exact professional analysis.
            </p>
            <p>
              Career astrology by date of birth involves looking at the position of planets in the horoscope of an individual and not only his zodiac sign.
            </p>
            <p>
              The ascendant changes only about two hours and therefore, the birth time is especially critical for house calculations.
            </p>
            <p>
              Therefore, a full career by time and date reading will be able to offer more individual information than a sun sign reading.
            </p>
          </section>

          {/* Section 3: Important Houses */}
          <section className="space-y-4">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              Which Houses Are Important for Career Prediction Astrology?
            </h3>
            <p>
              Several houses become important when studying professional life:
            </p>
            
            {/* Semantic Comparison Table */}
            <div className="overflow-x-auto my-4">
              <table 
                className="w-full text-left text-xs sm:text-sm border rounded-xl overflow-hidden shadow-2xs"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <thead 
                  className="text-white"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <tr>
                    <th className="p-3 font-semibold">House</th>
                    <th className="p-3 font-semibold">Vedic Name</th>
                    <th className="p-3 font-semibold">Career Significance</th>
                  </tr>
                </thead>
                <tbody 
                  className="divide-y bg-[#FAF6F0]"
                  style={{ borderColor: currentTheme.cardBorder }}
                >
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>10th House</td>
                    <td className="p-3 font-medium">Karma Bhava</td>
                    <td className="p-3">Profession, responsibilities, authority, reputation and public role</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>6th House</td>
                    <td className="p-3 font-medium">Seva Bhava</td>
                    <td className="p-3">Employment, competition, service, workplace challenges and routine work</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>2nd House</td>
                    <td className="p-3 font-medium">Dhana Bhava</td>
                    <td className="p-3">Earned income, accumulated resources, speech and financial stability</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>11th House</td>
                    <td className="p-3 font-medium">Labha Bhava</td>
                    <td className="p-3">Gains, salary growth, professional networks and fulfillment of ambitions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>9th House</td>
                    <td className="p-3 font-medium">Bhagya Bhava</td>
                    <td className="p-3">Higher knowledge, fortune, mentors, ethics, long-distance journeys</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: currentTheme.primary }}>7th House</td>
                    <td className="p-3 font-medium">Kalatra / Vyapar</td>
                    <td className="p-3">Partnerships, public dealing, direct commerce and trade relations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-[#6B5B52]">
              Because of this, an experienced career astrologer studies the 10th house along with the full horoscope structure rather than isolating one single factor.
            </p>
          </section>

          {/* Section 4: Key Planets */}
          <section className="space-y-4">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              Which Planets Matter Most in Career Astrology?
            </h3>
            <p>
              Different planets represent different professional qualities and fields:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { planet: 'Sun (Surya ☉)', role: 'Authority, leadership, government, executive administration and public visibility.' },
                { planet: 'Saturn (Shani ♄)', role: 'Discipline, persistence, labor, organizational systems, industry, and mass-scale work.' },
                { planet: 'Mercury (Budha ☿)', role: 'Communication, commerce, writing, logic, technology, analytics and business trade.' },
                { planet: 'Jupiter (Guru ♃)', role: 'Advisory, teaching, law, finance, philosophy, expansion and higher wisdom.' },
                { planet: 'Mars (Mangala ♂)', role: 'Engineering, defense, initiative, real estate, surgical and technical energy.' },
                { planet: 'Venus (Shukra ♀)', role: 'Creative arts, hospitality, design, finance, luxury markets and media.' }
              ].map((p, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-xl border bg-[#FAF6F0]"
                  style={{ borderColor: currentTheme.cardBorder }}
                >
                  <h4 className="font-bold text-xs sm:text-sm" style={{ color: currentTheme.primary }}>
                    {p.planet}
                  </h4>
                  <p className="text-xs text-[#5D4E45] mt-1 leading-relaxed">
                    {p.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Divisional Chart (D10) */}
          <section className="space-y-3.5">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              The Role of the Dashamsha (D10) Chart in Career Astrology
            </h3>
            <p>
              In Vedic astrology, divisional charts (Vargas) are used to study specific life dimensions in greater detail. The <strong className="font-semibold" style={{ color: currentTheme.primary }}>Dashamsha (D10) chart</strong> is specifically examined for profession, status, impact in society and professional progression.
            </p>
            <p>
              While the main birth chart (Rashi or D1) gives the foundation, the D10 chart offers more refined insight into how your professional actions manifest and where your true success lies.
            </p>
          </section>

          {/* Section 6: When Should You Consult */}
          <section className="space-y-3.5">
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b pb-2"
              style={{ borderColor: currentTheme.cardBorder }}
            >
              When Can Career Astrology Help?
            </h3>
            <p>
              People often turn to career prediction astrology during important transitions or challenging phases:
            </p>

            <ul className="space-y-2.5 pt-1">
              {[
                'Confusion about choosing the right career stream or domain',
                'Uncertainty about switching jobs or waiting for a promotion',
                'Debating between stable employment versus starting a business',
                'Prolonged periods of stagnation or delayed professional recognition',
                'Exploring opportunities in foreign countries or distant cities',
                'Aligning professional ambitions with supportive planetary cycles'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3528]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentTheme.primary }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* In-article CTA block */}
          <div 
            className="p-6 sm:p-8 rounded-2xl border text-center space-y-4"
            style={{ 
              backgroundColor: currentTheme.primaryLight,
              borderColor: currentTheme.cardBorder 
            }}
          >
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
              Discover What Your Horoscope Reveals About Your Career
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5B52] max-w-xl mx-auto">
              Get an in-depth chart reading from Acharya Hanish Bagga with clear planetary analysis, auspicious timelines, and authentic Vedic remedies.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <span>Book Your Career Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
