import React from 'react';
import { INTERNAL_LINKS } from '../data/careerAstrologyData';
import { Link2, ArrowUpRight, Sparkles, BookOpen, Compass, ShieldCheck } from 'lucide-react';

interface InternalLinkingSectionProps {
  onOpenBooking: () => void;
}

export const InternalLinkingSection: React.FC<InternalLinkingSectionProps> = ({ onOpenBooking }) => {
  const services = INTERNAL_LINKS.filter(l => l.category === 'service');
  const blogs = INTERNAL_LINKS.filter(l => l.category === 'blog');
  const guides = INTERNAL_LINKS.filter(l => l.category === 'guide');

  return (
    <section id="internal-links" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] text-[#854820] text-xs font-bold uppercase tracking-wider mb-3">
            <Link2 className="w-3.5 h-3.5 text-[#C68A2C]" />
            <span>Related Services &amp; In-Depth Career Resources</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3D2314] tracking-tight">
            Explore Related Astrology Solutions &amp; Guides
          </h2>
          <p className="text-base text-[#6B5B52] mt-3">
            Discover complementary Vedic services and expert articles by Acharya Hanish Bagga.
          </p>
        </div>

        {/* 3 Columns: Related Services, Job Prediction Blogs, Career Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Related Astrology Services */}
          <div className="bg-white rounded-2xl p-6 border border-[#EBDCD0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#F5EBE1] text-[#854820] flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                  Complementary Services
                </h3>
              </div>

              <div className="space-y-3.5">
                {services.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F5EBE1] border border-[#E8DACD] transition-colors group cursor-pointer"
                    onClick={onOpenBooking}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#854820] group-hover:underline flex items-center gap-1">
                        {item.title}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-white text-[#854820] px-1.5 py-0.5 rounded border border-[#E8DACD]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6B5B52] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#F0E4D8]">
              <button
                onClick={onOpenBooking}
                className="w-full text-xs font-bold text-[#854820] hover:underline text-center cursor-pointer"
              >
                View All Astrological Services &rarr;
              </button>
            </div>
          </div>

          {/* Column 2: Job Prediction & Career Blogs */}
          <div className="bg-white rounded-2xl p-6 border border-[#EBDCD0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#F5EBE1] text-[#854820] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                  Job &amp; Career Articles
                </h3>
              </div>

              <div className="space-y-3.5">
                {blogs.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F5EBE1] border border-[#E8DACD] transition-colors group cursor-pointer"
                    onClick={onOpenBooking}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#854820] group-hover:underline flex items-center gap-1">
                        {item.title}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-white text-[#854820] px-1.5 py-0.5 rounded border border-[#E8DACD]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6B5B52] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#F0E4D8]">
              <a
                href="#career-guide"
                className="block text-xs font-bold text-[#854820] hover:underline text-center cursor-pointer"
              >
                Read Comprehensive Guide &rarr;
              </a>
            </div>
          </div>

          {/* Column 3: Planetary Calculation & Remedies Guides */}
          <div className="bg-white rounded-2xl p-6 border border-[#EBDCD0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#F5EBE1] text-[#854820] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#3D2314]">
                  Vedic Remedies &amp; Dasha
                </h3>
              </div>

              <div className="space-y-3.5">
                {guides.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F5EBE1] border border-[#E8DACD] transition-colors group cursor-pointer"
                    onClick={onOpenBooking}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#854820] group-hover:underline flex items-center gap-1">
                        {item.title}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-white text-[#854820] px-1.5 py-0.5 rounded border border-[#E8DACD]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6B5B52] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#F0E4D8]">
              <button
                onClick={onOpenBooking}
                className="w-full text-xs font-bold text-[#854820] hover:underline text-center cursor-pointer"
              >
                Schedule Career Consultation &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
