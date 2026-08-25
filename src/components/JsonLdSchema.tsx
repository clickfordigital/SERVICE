import React, { useEffect } from 'react';
import { FAQ_ITEMS } from '../data/careerAstrologyData';

export const JsonLdSchema: React.FC = () => {
  useEffect(() => {
    // Inject JSON-LD Schema
    const scriptId = 'career-astrology-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://hanishbagga.com/#organization',
          'name': 'Acharya Hanish Bagga - Vedic Astrology & Vastu Consultation',
          'url': 'https://hanishbagga.com',
          'logo': 'https://hanishbagga.com/logo.png',
          'image': 'https://hanishbagga.com/acharyaji.jpg',
          'description': 'Premier Vedic Career Astrology consultation, job prediction by date of birth, Kundli analysis, and practical astrological remedies.',
          'telephone': '+91-73000-04325',
          'priceRange': '₹₹',
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5.0',
            'reviewCount': '5120',
            'bestRating': '5',
            'worstRating': '1'
          },
          'founder': {
            '@type': 'Person',
            'name': 'Acharya Hanish Bagga',
            'jobTitle': 'Vedic Astrologer & Vastu Expert',
            'knowsAbout': ['Vedic Astrology', 'Career Astrology', 'Kundli Analysis', 'D10 Dashamsha', 'Vastu Shastra'],
            'award': 'Jyotish Ratna & National Media Astrologer of the Year',
            'sameAs': [
              'https://www.youtube.com/@AcharyaHanishBagga',
              'https://www.instagram.com/acharyahanishbagga',
              'https://www.facebook.com/acharyahanishbagga'
            ]
          }
        },
        {
          '@type': 'Service',
          '@id': 'https://hanishbagga.com/services/career-astrology#service',
          'name': 'Career Astrology Consultation & Job Prediction by Date of Birth',
          'serviceType': 'Vedic Career Astrology Consultation',
          'provider': {
            '@id': 'https://hanishbagga.com/#organization'
          },
          'description': 'Comprehensive Vedic career astrology consultation providing personalized Kundli analysis, job change timing, promotion forecasting, D10 Dashamsha breakdown, and practical remedies.',
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Career Astrology Services',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Job Change Timing & Transition Forecast'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Promotion, Increment & Leadership Guidance'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Business vs Job Astrological Analysis'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Personalized Kundli & D10 Dashamsha Analysis'
                }
              }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://hanishbagga.com/services/career-astrology#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://hanishbagga.com'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services',
              'item': 'https://hanishbagga.com/services'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Career Astrology Consultation',
              'item': 'https://hanishbagga.com/services/career-astrology'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://hanishbagga.com/services/career-astrology#faq',
          'mainEntity': FAQ_ITEMS.map((item) => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.answer
            }
          }))
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Keep script for crawlers
    };
  }, []);

  return null;
};
