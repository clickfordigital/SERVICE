import React, { useState, useEffect } from 'react';
import { JsonLdSchema } from './components/JsonLdSchema';
import { HealthJsonLdSchema } from './components/HealthJsonLdSchema';
import { Header } from './components/Header';

// Career Components
import { HeroSection } from './components/HeroSection';
import { AboutCareerAstrology } from './components/AboutCareerAstrology';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceBenefits } from './components/ServiceBenefits';
import { HowItWorks } from './components/HowItWorks';
import { DeliverablesSection } from './components/DeliverablesSection';
import { SeoContentGuide } from './components/SeoContentGuide';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ConversionCtaSection } from './components/ConversionCtaSection';

// Health Astrology Components
import { HealthHeroSection } from './components/HealthHeroSection';
import { AboutHealthAstrology } from './components/AboutHealthAstrology';
import { HealthWhyChooseUs } from './components/HealthWhyChooseUs';
import { HealthServiceBenefits } from './components/HealthServiceBenefits';
import { HealthHowItWorks } from './components/HealthHowItWorks';
import { HealthDeliverablesSection } from './components/HealthDeliverablesSection';
import { InteractiveHealthAnalyzer } from './components/InteractiveHealthAnalyzer';
import { HealthSeoContentGuide } from './components/HealthSeoContentGuide';
import { HealthTestimonialsSection } from './components/HealthTestimonialsSection';
import { HealthFaqSection } from './components/HealthFaqSection';
import { HealthConversionCtaSection } from './components/HealthConversionCtaSection';

// Shared Components
import { YouTubeVideoSection } from './components/YouTubeVideoSection';
import { ConsultationModal } from './components/ConsultationModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { Footer } from './components/Footer';
import { HeartPulse, Briefcase, Sparkles } from 'lucide-react';

export default function App() {
  const [activeService, setActiveService] = useState<'health' | 'career'>('health');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('career')) {
        setActiveService('career');
      } else if (hash.includes('health')) {
        setActiveService('health');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenWhatsApp = () => {
    const text = activeService === 'health'
      ? encodeURIComponent(
          "Hello Acharya Hanish Bagga ji, I would like to consult regarding my Health Horoscope & Ayur-Jyotish constitutional analysis. Please share available consultation slots."
        )
      : encodeURIComponent(
          "Hello Acharya Hanish Bagga ji, I would like to consult regarding my Career Horoscope & Job Growth. Please share available consultation slots."
        );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1E16] flex flex-col font-sans selection:bg-[#854820] selection:text-white">
      {/* Dynamic SEO JSON-LD Schemas based on active service */}
      {activeService === 'health' ? <HealthJsonLdSchema /> : <JsonLdSchema />}

      {/* Sticky Header with Navigation & Quick Actions */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onOpenWhatsApp={handleOpenWhatsApp}
        activeService={activeService}
        onChangeService={(srv) => setActiveService(srv)}
      />

      {/* Quick Service Switcher Ribbon */}
      <div className="bg-[#FAF6F0] border-b border-[#EBDCD0] py-2.5 px-4 sticky top-[73px] sm:top-[81px] z-40 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5D4E45]">
            <Sparkles className="w-3.5 h-3.5 text-[#854820]" />
            <span className="hidden sm:inline">Active Astrological Consultation Service:</span>
            <span className="sm:hidden">Service:</span>
          </div>

          <div className="inline-flex p-1 bg-white rounded-xl border border-[#E8DACD] shadow-2xs">
            <button
              onClick={() => setActiveService('health')}
              className={`px-3.5 sm:px-5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeService === 'health'
                  ? 'bg-[#854820] text-white shadow-xs'
                  : 'text-[#5D4E45] hover:text-[#854820] hover:bg-[#FAF6F0]'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Health Astrology (Ayur-Jyotish)</span>
            </button>
            <button
              onClick={() => setActiveService('career')}
              className={`px-3.5 sm:px-5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeService === 'career'
                  ? 'bg-[#854820] text-white shadow-xs'
                  : 'text-[#5D4E45] hover:text-[#854820] hover:bg-[#FAF6F0]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Astrology</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">
        {activeService === 'health' ? (
          /* ========================================================================= */
          /* HEALTH ASTROLOGY SERVICE PAGE (EXACT SAME FORMAT & HIGH CRAFTSMANSHIP)    */
          /* ========================================================================= */
          <>
            {/* 1. Health Hero Section with Lead Form & Trust Badges */}
            <HealthHeroSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 2. Understanding Health & Medical Astrology (Ayur-Jyotish) */}
            <AboutHealthAstrology 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 3. Why Choose Us - 4 Pillars of Medical Astrology */}
            <HealthWhyChooseUs />

            {/* 4. Service Benefits - 6 Core Pillars of Health Astrology */}
            <HealthServiceBenefits 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 5. How It Works - 3 Step Process for Health Consultation */}
            <HealthHowItWorks 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 6. What You'll Get - Health Consultation Deliverables */}
            <HealthDeliverablesSection 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 7. Interactive Medical Houses & Planetary Health Explorer */}
            <InteractiveHealthAnalyzer />

            {/* 8. YouTube Masterclasses & Video Guides */}
            <YouTubeVideoSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 9. Comprehensive Medical Astrology SEO Guide */}
            <HealthSeoContentGuide 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 10. Real Patient & Seeker Health Testimonials */}
            <HealthTestimonialsSection />

            {/* 11. High-Intent Medical Astrology FAQ Section */}
            <HealthFaqSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 12. Final Conversion CTA Section */}
            <HealthConversionCtaSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />
          </>
        ) : (
          /* ========================================================================= */
          /* CAREER ASTROLOGY SERVICE PAGE                                             */
          /* ========================================================================= */
          <>
            {/* 1. Hero Section */}
            <HeroSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 2. Understanding Career Astrology */}
            <AboutCareerAstrology 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 3. Why Choose Us */}
            <WhyChooseUs />

            {/* 4. Service Benefits */}
            <ServiceBenefits 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 5. How It Works */}
            <HowItWorks 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 6. Deliverables */}
            <DeliverablesSection 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 7. YouTube Masterclasses */}
            <YouTubeVideoSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 8. SEO Topical Guide */}
            <SeoContentGuide 
              onOpenBooking={handleOpenBooking} 
            />

            {/* 9. Trust & Testimonials */}
            <TestimonialsSection />

            {/* 10. FAQs */}
            <FaqSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />

            {/* 11. Conversion CTA */}
            <ConversionCtaSection 
              onOpenBooking={handleOpenBooking} 
              onOpenWhatsApp={handleOpenWhatsApp} 
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
        onOpenWhatsApp={handleOpenWhatsApp} 
      />

      {/* Sticky Bottom Action Bar for Mobile Users */}
      <StickyBottomCta 
        onOpenBooking={handleOpenBooking} 
        onOpenWhatsApp={handleOpenWhatsApp} 
      />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBooking} 
      />
    </div>
  );
}
