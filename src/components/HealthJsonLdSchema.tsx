import React from 'react';
import { HEALTH_FAQS } from '../data/healthAstrologyData';

export const HealthJsonLdSchema: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Health Astrology Consultation & Medical Horoscope Prediction',
    'serviceType': 'Vedic Medical Astrology (Ayur-Jyotish)',
    'provider': {
      '@type': 'Person',
      'name': 'Acharya Ganesh & Acharya Hanish Bagga',
      'jobTitle': 'Senior Vedic & Medical Astrologer',
      'telephone': '+91-7300004325',
      'url': 'https://acharyaganesh.com'
    },
    'description': 'Expert Vedic Health Astrology & Medical Kundli reading by Date of Birth by Acharya Ganesh. In-depth Lagna Ojas analysis, 6th/8th house Dasha timing, Tridosha balancing, and non-invasive remedies.',
    'areaServed': ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'UAE'],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Medical Astrology Consultations',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Comprehensive Health Kundli & Vulnerability Mapping'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Surgery Muhurat & Medical Treatment Timing'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Ayurvedic Tridosha & Prakriti Lifestyle Guidance'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': HEALTH_FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://acharyaganesh.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://acharyaganesh.com/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Health & Medical Astrology',
        'item': 'https://acharyaganesh.com/services/health-astrology'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
