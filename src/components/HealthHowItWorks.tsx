import React from 'react';
import { Calendar, FileText, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface HealthHowItWorksProps {
  onOpenBooking: () => void;
}

export const HealthHowItWorks: React.FC<HealthHowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="health-how-it-works" className="py-14 sm:py-20 bg-[#FAF6F0] border-b border-[#EBDCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DACD] text-xs font-bold text-[#854820] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 3-Step Health Consultation Process</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D2314] leading-tight">
            How to Get Started with Your Health Astrology Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B52] mt-3 leading-relaxed">
            A transparent, professional, and completely confidential 3-step consultation experience with Acharya Ganesh &amp; Acharya Hanish Bagga.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Step 1 */}
          <div
            id="health-step-card-01"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  01
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="min-h-[3.25rem] flex items-center mb-1">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
                  Book Your Consultation
                </h3>
              </div>
              <div className="min-h-[2.5rem] flex items-center mb-3.5">
                <span className="text-xs font-semibold text-[#854820] uppercase tracking-wider">
                  Select Your Preferred Slot &amp; Consultation Mode
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1">
                <p>
                  Choose an available appointment and your preferred consultation option. Depending on your preference, select a private live video consultation, phone consultation, or direct detailed written guidance. We dedicate ample time to understand your medical history, symptoms, and specific questions without automated reports.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px]">
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-[#854820] hover:text-[#663312] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Select Appointment Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-medium text-[#8A7A70]">Step 1 of 3</span>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="health-step-card-02"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  02
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <div className="min-h-[3.25rem] flex items-center mb-1">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
                  Share Your Birth &amp; Health Details
                </h3>
              </div>
              <div className="min-h-[2.5rem] flex items-center mb-3.5">
                <span className="text-xs font-semibold text-[#854820] uppercase tracking-wider">
                  Date, Exact Birth Time, City &amp; Concerns
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed space-y-2 flex-1">
                <p className="font-semibold text-[#3D2314]">Provide:</p>
                <ul className="space-y-1.5 pl-0.5">
                  {[
                    'Exact Date of Birth (DD/MM/YYYY)',
                    'Accurate Time of Birth (Hours, Minutes, AM/PM)',
                    'City, State, and Country of Birth',
                    'Key health symptoms, chronic issues, or surgery queries'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px]">
              <span className="text-xs font-medium text-[#8A7A70]">Step 2 of 3</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            id="health-step-card-03"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDCD0] shadow-[0_4px_20px_rgba(133,72,32,0.06)] hover:shadow-[0_8px_30px_rgba(133,72,32,0.12)] hover:border-[#854820]/40 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-cinzel text-3xl font-extrabold text-[#854820]/80 tracking-wider">
                  03
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#F5EBE1] text-[#854820] flex items-center justify-center border border-[#E8DACD] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="min-h-[3.25rem] flex items-center mb-1">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#3D2314]">
                  Receive Personalized Health Guidance
                </h3>
              </div>
              <div className="min-h-[2.5rem] flex items-center mb-3.5">
                <span className="text-xs font-semibold text-[#854820] uppercase tracking-wider">
                  Detailed Horoscope Reading &amp; Practical Roadmap
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed flex-1">
                <p>
                  During your session, Acharya Ganesh explains the planetary factors influencing your constitutional vitality (Ojas) and addresses your health questions. Your medical horoscope consultation includes analysis of 6th/8th house Dasha periods, vulnerable organ systems, Ayur-Jyotish Tridosha balancing recommendations, and personalized sattvic remedies.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E4D8] flex items-center justify-between min-h-[44px]">
              <span className="text-xs font-medium text-[#8A7A70]">Step 3 of 3</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
