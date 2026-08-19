import React, { useState } from 'react';
import { JsonLdSchema } from './components/JsonLdSchema';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceBenefits } from './components/ServiceBenefits';
import { HowItWorks } from './components/HowItWorks';
import { DeliverablesSection } from './components/DeliverablesSection';
import { InteractiveCareerAnalyzer } from './components/InteractiveCareerAnalyzer';
import { YouTubeVideoSection } from './components/YouTubeVideoSection';
import { SeoContentGuide } from './components/SeoContentGuide';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { InternalLinkingSection } from './components/InternalLinkingSection';
import { ConversionCtaSection } from './components/ConversionCtaSection';
import { ConsultationModal } from './components/ConsultationModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Acharya Hanish Bagga ji, I would like to consult regarding my Career Horoscope & Job Growth. Please share available consultation slots."
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1E16] flex flex-col font-sans selection:bg-[#854820] selection:text-white">
      {/* Dynamic SEO JSON-LD Schemas */}
      <JsonLdSchema />

      {/* Sticky Header with Navigation & Quick Actions */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onOpenWhatsApp={handleOpenWhatsApp} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section - Exact Theme Color & Layout from Screenshot with Lead Form */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 2. Why Choose Us - Exact 4 Cards from Screenshot */}
        <WhyChooseUs />

        {/* 3. Service Benefits - 6 Core Pillars of Career Astrology */}
        <ServiceBenefits 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 4. How It Works - 3 Step Process */}
        <HowItWorks 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 5. What You'll Get - Consultation Deliverables */}
        <DeliverablesSection 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 6. Interactive Vedic Career & House Explorer */}
        <InteractiveCareerAnalyzer 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 7. YouTube Masterclasses & Video Guides Section */}
        <YouTubeVideoSection 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 8. Comprehensive In-depth SEO Topical Guide */}
        <SeoContentGuide 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 8. Trust & Authority - Filterable Testimonials & Google Ratings */}
        <TestimonialsSection />

        {/* 9. High-Intent FAQ Section with JSON-LD Schema Inspector */}
        <FaqSection 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 10. Strategic Internal Linking Section */}
        <InternalLinkingSection 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 11. Final Conversion CTA Section */}
        <ConversionCtaSection 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />
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
