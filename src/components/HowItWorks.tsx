import React from 'react';
import { Calendar, FileText, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DACD]">
            <span className="w-2 h-2 rounded-full bg-[#854820]"></span>
            <span>Simple, Private &amp; Convenient</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            How Career Astrology Consultation Works
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B52] mt-3 font-normal leading-relaxed">
            Your consultation follows a simple three-step process designed to make horoscope analysis easy and personalized.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Step 1 */}
          <div
            id="step-card-01"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  01
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mb-1">
                Book Your Consultation
              </h3>
              <div className="text-xs font-semibold text-[#854820] uppercase tracking-wider mb-3.5">
                Select Your Preferred Slot &amp; Consultation Mode
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                <p>
                  Choose an available appointment and your preferred consultation option. Depending on available services, you can select a live video consultation, phone consultation or another listed consultation format. The purpose is to provide enough time to discuss your professional situation and complete your career astrology analysis without relying on a generic automated report.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-[#854820] hover:text-[#663312] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Step 1 of 3 – Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step-card-02"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  02
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD]">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mb-1">
                Share Your Correct Birth Details
              </h3>
              <div className="text-xs font-semibold text-[#854820] uppercase tracking-wider mb-3.5">
                Date, Exact Birth Time &amp; Place of Birth
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-2.5">
                <p className="font-semibold text-[#3D2314]">Provide:</p>
                <ul className="space-y-1.5 pl-0.5">
                  {[
                    'Date of birth',
                    'Accurate time of birth',
                    'City and country of birth',
                    'Current profession',
                    'Major career concerns',
                    'Any specific decision you are considering'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#5D4E45]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-1.5 text-xs text-[#6B5B52] leading-relaxed">
                  These details are used for career astrology by date of birth and preparation of your individual horoscope.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between">
              <span className="text-xs font-medium text-[#8A7A70]">Step 2 of 3</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            id="step-card-03"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  03
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314] mb-1">
                Receive Personalized Career Guidance
              </h3>
              <div className="text-xs font-semibold text-[#854820] uppercase tracking-wider mb-3.5">
                Detailed Horoscope Reading &amp; Practical Roadmap
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                <p>
                  During your session, Acharya Ganesh explains the planetary factors influencing your professional life and addresses your important questions. Your career horoscope by date of birth may include discussion around suitable professional directions, Dasha periods, job transitions, promotions, challenges, income development and other career-related patterns visible in your horoscope.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between">
              <span className="text-xs font-medium text-[#8A7A70]">Step 3 of 3</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#854820] hover:bg-[#663312] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-[#A85A1D]"
          >
            <span>Book Your Career Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#7A6B62] mt-2">
            Instant booking confirmation • Direct consultation slot with Acharya Ganesh
          </p>
        </div>

      </div>
    </section>
  );
};

