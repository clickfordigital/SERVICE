import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

interface SeoContentGuideProps {
  onOpenBooking: () => void;
}

export const SeoContentGuide: React.FC<SeoContentGuideProps> = ({ onOpenBooking }) => {
  return (
    <article id="career-guide" className="py-16 sm:py-20 bg-white border-b border-[#EADBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guide Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DACD]">
            <BookOpen className="w-3.5 h-3.5 text-[#854820]" />
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
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
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
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
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
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              Which Houses Are Important for Career Prediction Astrology?
            </h3>
            <p>
              Several houses become important when studying professional life:
            </p>
            
            {/* Semantic Comparison Table */}
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs sm:text-sm border border-[#E8DACD] rounded-xl overflow-hidden shadow-2xs">
                <thead className="bg-[#854820] text-white">
                  <tr>
                    <th className="p-3 font-semibold">House</th>
                    <th className="p-3 font-semibold">Vedic Name</th>
                    <th className="p-3 font-semibold">Career Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DACD] bg-[#FAF6F0]">
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">10th House</td>
                    <td className="p-3 font-medium">Karma Bhava</td>
                    <td className="p-3">Profession, responsibilities, authority, reputation and public role</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">6th House</td>
                    <td className="p-3 font-medium">Seva Bhava</td>
                    <td className="p-3">Employment, competition, service, workplace challenges and routine work</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">2nd House</td>
                    <td className="p-3 font-medium">Dhana Bhava</td>
                    <td className="p-3">Earned income, accumulated resources, speech and financial stability</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">11th House</td>
                    <td className="p-3 font-medium">Labha Bhava</td>
                    <td className="p-3">Gains, salary growth, professional networks and fulfillment of ambitions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">7th House</td>
                    <td className="p-3 font-medium">Yuvati Bhava</td>
                    <td className="p-3">Business, partnerships, trade and dealings with the public</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#854820]">3rd House</td>
                    <td className="p-3 font-medium">Sahaja Bhava</td>
                    <td className="p-3">Initiative, communication, skills, courage and independent effort</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              No house should be interpreted independently. For example, a strong 10th house may show professional ambition, while the 11th house provides additional information about gains from that profession. This combined approach is an important part of career astrology.
            </p>
          </section>

          {/* Section 4: D10 Dashamsha */}
          <section className="space-y-3.5">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              Why Is the D10 Dashamsha Important for a Career?
            </h3>
            <p>
              One of the most popular divisional charts to study is the Dashamsha chart also known as D10 chart.
            </p>
            <p>
              The main D1 chart forms the basis and a D10 gives a further layer of detail pertaining to career, responsibilities, authority, reputation and profession.
            </p>
            <p>
              One of the steps of astrology career prediction is to see if the 10th lord is stronger or weaker than the career planets in both charts.
            </p>
            <p>
              For instance, if the main horoscope shows a strong Mars and the D10 shows a weaker Mars, it would be more deeply studied.
            </p>
            <p>
              Therefore the D10 is helpful when learning about professional development over a period of time and not just a single placement.
            </p>
          </section>

          {/* Section 5: Job Change & Promotion Timing */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              How Can Astrology Predict Job Change and Promotion Timing?
            </h3>
            <p className="font-medium text-[#3D2314]">
              The most common job astrology question is:
            </p>
            <blockquote className="bg-[#FAF6F0] p-3.5 rounded-xl border-l-4 border-[#854820] text-xs sm:text-sm italic text-[#5D4E45]">
              “When should I change my job?” or “When can I expect professional growth or promotion?”
            </blockquote>
            <p>
              Timing is primarily studied through Dasha periods and planetary transits:
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="font-bold text-sm text-[#854820] mb-1">Mahadasha &amp; Antardasha</h4>
                <p className="text-xs sm:text-sm text-[#5D4E45]">
                  The active planetary period creates the broader theme operating in your life. When planets connected with employment, profession, income or gains become active, career-related developments may receive greater emphasis.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="font-bold text-sm text-[#854820] mb-1">Jupiter Transit</h4>
                <p className="text-xs sm:text-sm text-[#5D4E45]">
                  Jupiter is associated with expansion, learning, guidance and opportunity. Its transit in relation to important career houses may become relevant during growth-oriented phases.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="font-bold text-sm text-[#854820] mb-1">Saturn Transit</h4>
                <p className="text-xs sm:text-sm text-[#5D4E45]">
                  Saturn represents discipline, structure, responsibility, delay, persistence and long-term effort. A difficult Saturn period does not automatically mean failure. It may instead indicate greater responsibilities, slower progress, restructuring or the need for sustained effort.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="font-bold text-sm text-[#854820] mb-1">Rahu and Ketu</h4>
                <p className="text-xs sm:text-sm text-[#5D4E45]">
                  The lunar nodes are traditionally associated with unconventional developments, sudden changes, foreign connections, technology, detachment and unusual professional directions.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6B5B52] italic pt-1">
              A detailed career astrology consultation evaluates these influences together rather than declaring a result from one transit alone.
            </p>
          </section>

          {/* Section 6: Job vs Business */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              Can Career Prediction Astrology Tell Whether Job or Business Is Better?
            </h3>
            <p>
              This is another common question among experienced professionals. Someone may have a secure job but want independence. Another person may already have a business but struggle with consistency. The answer requires comparison of several horoscope factors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <div className="font-bold text-[#854820] text-sm mb-2">When Employment May Be More Suitable:</div>
                <ul className="space-y-1.5 text-xs text-[#5D4E45]">
                  {[
                    'Strength of the 6th house',
                    'Condition of the 10th house',
                    "Saturn's role",
                    "Sun's influence",
                    'D10 stability',
                    'Current Dasha periods',
                    'Regular income patterns'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <div className="font-bold text-[#854820] text-sm mb-2">When Business May Be More Suitable:</div>
                <ul className="space-y-1.5 text-xs text-[#5D4E45]">
                  {[
                    '7th house strength',
                    '3rd house initiative',
                    "Mercury's condition",
                    '2nd and 11th house connections',
                    "Rahu's influence",
                    'Dhana Yogas',
                    'Partnership combinations'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              An individual career horoscope by date of birth helps compare these factors against your actual professional circumstances. The purpose of career astrology is not to force you into business or employment but to provide greater clarity before an important decision.
            </p>
          </section>

          {/* Section 7: Government Job Questions */}
          <section className="space-y-3.5">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              Can Job Astrology Help With Government Job Questions?
            </h3>
            <p>
              Government employment is a highly competitive career choice and no horoscope can replace preparation, eligibility, examination performance or recruitment procedures.
            </p>
            <p>
              However, job astrology can be used to study planetary combinations traditionally associated with government roles, authority, administration, competition and public service.
            </p>
            <p>
              The Sun, Saturn, Mars, Jupiter, 6th house, 10th house and relevant Dasha periods may receive particular attention depending on the horoscope.
            </p>
            <p>
              A detailed astrology career prediction can also help an aspirant understand whether continuing preparation, changing strategy or keeping parallel career options deserves consideration.
            </p>
          </section>

          {/* Section 8: Remedies for Career Growth */}
          <section className="space-y-4">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3D2314] border-b border-[#EADBD0] pb-2">
              What Remedies Are Used for Career Growth?
            </h3>
            <p>
              Remedies should be selected only after studying the complete horoscope. There is no single mantra, gemstone or Vastu change that is equally suitable for everyone.
            </p>
            
            <div className="space-y-3.5">
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="text-sm font-bold text-[#3D2314] mb-1">1. Gemstone Guidance</h4>
                <p className="text-xs sm:text-sm text-[#6B5B52]">
                  A gemstone may be considered when strengthening a particular functional benefic planet is appropriate according to the horoscope. Gemstones should not be selected merely because of a zodiac sign or online recommendation.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="text-sm font-bold text-[#3D2314] mb-1">2. Mantra &amp; Spiritual Practices</h4>
                <p className="text-xs sm:text-sm text-[#6B5B52]">
                  Traditional mantra practices may be suggested according to the planetary factors identified during the consultation.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="text-sm font-bold text-[#3D2314] mb-1">3. Behavioral Remedies</h4>
                <p className="text-xs sm:text-sm text-[#6B5B52]">
                  Sometimes the most useful recommendation is practical: becoming more disciplined, improving communication, avoiding impulsive decisions, developing additional skills or changing professional habits.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8DACD]">
                <h4 className="text-sm font-bold text-[#3D2314] mb-1">4. Workplace Vastu</h4>
                <p className="text-xs sm:text-sm text-[#6B5B52]">
                  Desk orientation, cabin arrangement, workspace organization and other practical Vastu considerations may also be discussed where relevant.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#854820] font-medium pt-1">
              The goal is to complement your career astrology reading with practical steps that can be followed consistently.
            </p>
          </section>

        </div>

        {/* CTA box inside guide */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#854820] to-[#5C2B0E] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-heading text-2xl font-bold">
              Gain Clarity on Your Career Destiny Today
            </h4>
            <p className="text-xs sm:text-sm text-[#F7EFE8]">
              Consult with Acharya Ganesh for an authentic, 1-on-1 Vedic Kundli analysis.
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

