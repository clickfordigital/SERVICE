import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AstrologicalThemeCustomizer } from './components/AstrologicalThemeCustomizer';
import { JsonLdSchema } from './components/JsonLdSchema';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutCareerAstrology } from './components/AboutCareerAstrology';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceBenefits } from './components/ServiceBenefits';
import { HowItWorks } from './components/HowItWorks';
import { DeliverablesSection } from './components/DeliverablesSection';
import { RotatingKundliShowcase } from './components/RotatingKundliShowcase';
import { YouTubeVideoSection } from './components/YouTubeVideoSection';
import { SeoContentGuide } from './components/SeoContentGuide';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
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
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-[#2C1E16] flex flex-col font-sans selection:bg-[#854820] selection:text-white transition-colors duration-500">
        {/* SEO JSON-LD Schema */}
        <JsonLdSchema />

        {/* Sticky Header with Navigation & Quick Contact */}
        <Header 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Main Career Astrology Content */}
        <main className="flex-1">
          {/* 1. Hero Section with Birth Detail Form */}
          <HeroSection 
            onOpenBooking={handleOpenBooking} 
            onOpenWhatsApp={handleOpenWhatsApp} 
          />

          {/* 2. Understanding Career Astrology (10th House, D10 Dashamsha) with Image Customizer */}
          <AboutCareerAstrology 
            onOpenBooking={handleOpenBooking} 
            onOpenWhatsApp={handleOpenWhatsApp} 
          />

          {/* 3. Why Choose Us (17+ Yrs Exp, 50k+ Horoscopes, Practical Remedies) */}
          <WhyChooseUs />

          {/* 4. Core Service Benefits (Job Timing, Promotions, Business vs Job, Foreign Travel) */}
          <ServiceBenefits 
            onOpenBooking={handleOpenBooking} 
          />

          {/* 5. How It Works (Fully Animated Cosmic Astrolabe & 3 Simple Steps) */}
          <HowItWorks 
            onOpenBooking={handleOpenBooking} 
          />

          {/* 6. Consultation Deliverables with Sample Chart Preview & Image Customizer */}
          <DeliverablesSection 
            onOpenBooking={handleOpenBooking} 
          />

          {/* 7. Premium Personalized Kundli Showcase with Smooth Rolling Background Astrolabe Circle */}
          <RotatingKundliShowcase 
            onOpenBooking={handleOpenBooking} 
          />

          {/* 8. YouTube Masterclasses & Video Guides (155K Subscribers) */}
          <YouTubeVideoSection 
            onOpenBooking={handleOpenBooking} 
            onOpenWhatsApp={handleOpenWhatsApp} 
          />

          {/* 8. Comprehensive SEO Career Astrology Guide with Kundli Chakra */}
          <SeoContentGuide 
            onOpenBooking={handleOpenBooking} 
          />

          {/* 9. Real Client Testimonials with Lagna/Rashi Badges */}
          <TestimonialsSection />

          {/* 10. Frequently Asked Questions */}
          <FaqSection 
            onOpenBooking={handleOpenBooking} 
            onOpenWhatsApp={handleOpenWhatsApp} 
          />

          {/* 11. Conversion Call-To-Action */}
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

        {/* Mobile Sticky Quick Action Bar */}
        <StickyBottomCta 
          onOpenBooking={handleOpenBooking} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* Interactive Booking Modal */}
        <ConsultationModal 
          isOpen={isBookingModalOpen} 
          onClose={handleCloseBooking} 
        />

        {/* Astrological & Theme Customizer Drawer Widget */}
        <AstrologicalThemeCustomizer />
      </div>
    </ThemeProvider>
  );
}
