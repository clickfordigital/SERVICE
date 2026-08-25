// Health & Medical Astrology Data File for Acharya Ganesh / Acharya Hanish Bagga

export interface HealthBenefit {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  keyAspects: string[];
  iconType: string;
}

export interface HealthReview {
  id: string;
  name: string;
  role: string;
  location: string;
  category: 'chronic' | 'surgery' | 'mental-peace' | 'digestive' | 'preventive';
  rating: number;
  date: string;
  story: string;
  outcome: string;
  verified: boolean;
}

export interface HealthHouse {
  houseNumber: number;
  houseName: string;
  sanskritName: string;
  anatomicalAreas: string;
  healthSignificance: string;
  planetaryRulers: string;
  sampleOutcomes: string[];
}

export interface PlanetaryHealthSignificator {
  planet: string;
  sanskritName: string;
  governedOrgans: string;
  doshaAffinity: string;
  vulnerabilities: string;
  healingRemedy: string;
}

export interface HealthFaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthDeliverableItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export const HEALTH_BENEFITS: HealthBenefit[] = [
  {
    id: 'vitality-organ-mapping',
    title: 'Disease Propensity & Organ Vulnerability Mapping',
    shortDesc: 'Identify underlying constitutional weaknesses and vulnerable organ systems before acute symptoms manifest.',
    badge: 'Constitutional Diagnosis',
    keyAspects: [
      'Identification of afflicted houses (6th, 8th, 12th Bhavas)',
      'Ayur-Jyotish Tridosha (Vata, Pitta, Kapha) balance mapping',
      'Analysis of Ascendant (Lagna) strength and natural immunity (Ojas)',
      'Understanding hereditary and karmic health tendencies'
    ],
    iconType: 'Activity'
  },
  {
    id: 'treatment-surgery-timing',
    title: 'Medical Treatment & Surgery Muhurat Timing',
    shortDesc: 'Determine astrologically favorable windows for elective medical procedures, treatments, and swift rehabilitation.',
    badge: 'Muhurat & Timing',
    keyAspects: [
      'Evaluation of Mars, Saturn, and Rahu transit influences on surgery',
      'Identifying periods of heightened bodily resilience and healing',
      'Minimizing post-operative complications through auspicious Muhurats',
      'Guidance on second opinions during confusing Rahu/Ketu Dasha periods'
    ],
    iconType: 'Calendar'
  },
  {
    id: 'ayurveda-lifestyle-alignment',
    title: 'Ayurvedic Prakriti & Dietary Rhythm Alignment',
    shortDesc: 'Harmonize your daily lifestyle, diet, and sleep cycles with your unique planetary and elemental blueprint.',
    badge: 'Ayur-Jyotish Synergy',
    keyAspects: [
      'Personalized dietary recommendations matching planetary ruling elements',
      'Circadian and seasonal (Ritucharya) daily routine alignment',
      'Identification of food allergens and digestive fire (Agni) imbalances',
      'Optimizing natural vitality through solar and lunar cycles'
    ],
    iconType: 'Apple'
  },
  {
    id: 'mental-health-sleep',
    title: 'Mental Peace, Anxiety & Sleep Pattern Restoration',
    shortDesc: 'Decode the astrological roots of chronic restlessness, emotional exhaustion, stress, and disrupted sleep cycles.',
    badge: 'Mind & Subconscious',
    keyAspects: [
      'In-depth study of Moon (Manas) and Mercury (Buddhi) placements',
      'Alleviating effects of Kemadruma, Rahu-Moon, or Saturn-Moon afflictions',
      'Calming meditative techniques, sound frequencies, and breathwork',
      'Restoring restful sleep through 12th house astrological remedies'
    ],
    iconType: 'HeartPulse'
  },
  {
    id: 'chronic-ailment-management',
    title: 'Chronic Condition & Dasha Period Management',
    shortDesc: 'Understand the timeline and transition phases of persistent or long-standing health challenges.',
    badge: 'Dasha & Transits',
    keyAspects: [
      'Mahadasha, Antardasha, and Pratyantardasha health timing analysis',
      'Tracking Saturn (Shani) and Rahu transits impacting physical well-being',
      'Forecasts on when bodily strength rebounds and symptoms subside',
      'Complementary spiritual and metaphysical support alongside doctor care'
    ],
    iconType: 'Clock'
  },
  {
    id: 'preventive-vedic-remedies',
    title: 'Customized Vedic Remedies, Mantras & Gemstones',
    shortDesc: 'Non-invasive, authentic remedial measures to strengthen benefic planets and neutralize malefic afflictions.',
    badge: 'Non-Invasive Remedies',
    keyAspects: [
      'Energized Rudraksha recommendations suited to your Lagna and health needs',
      'Specific Maha Mrityunjaya and planetary mantra sadhanas',
      'Color therapy, donation timings (Daan), and planetary yantras',
      'Strict adherence to ethical, non-fear-based astrological science'
    ],
    iconType: 'ShieldCheck'
  }
];

export const HEALTH_REVIEWS: HealthReview[] = [
  {
    id: 'h-rev-1',
    name: 'Dr. Vivek Mehra',
    role: 'Senior Orthopedic Surgeon',
    location: 'Gurugram, India',
    category: 'chronic',
    rating: 5,
    date: 'January 2026',
    story: 'Being a medical surgeon, I was initially analytical about astrology. However, I was experiencing recurring fatigue and spinal stiffness that clinical tests could not fully explain. Acharya Ganesh analyzed my 6th house, Saturn placement, and ongoing Rahu Antardasha. He accurately highlighted bone density stress and suggested specific solar regimens, dietary modifications, and gemstone therapy.',
    outcome: 'Within 4 months of combining medical treatment with the recommended Ayurvedic lifestyle and planetary remedies, my vitality rebounded significantly. His non-dogmatic, scientific approach to Medical Astrology is truly commendable.',
    verified: true
  },
  {
    id: 'h-rev-2',
    name: 'Shalini Deshmukh',
    role: 'Financial Director',
    location: 'Mumbai, India',
    category: 'mental-peace',
    rating: 5,
    date: 'December 2025',
    story: 'Severe work burnout led to extreme insomnia, panic spells, and emotional turbulence. Acharya Hanish Bagga studied my Moon-Rahu conjunction in the 8th house and the 12th house of sleep. He gently explained why this specific Dasha period triggered acute anxiety and gave me actionable daily evening rituals, Chandra remedies, and Rudraksha guidance.',
    outcome: 'The mental clarity and peaceful sleep I have regained are invaluable. The consultation eliminated my fear and provided a clear timeline of when the difficult planetary phase would clear.',
    verified: true
  },
  {
    id: 'h-rev-3',
    name: 'Rohan Oberoi',
    role: 'Tech Entrepreneur',
    location: 'Bengaluru, India',
    category: 'surgery',
    rating: 5,
    date: 'November 2025',
    story: 'I was scheduled for an elective digestive surgery, but dates kept getting postponed due to unavoidable logistical issues. Acharya Ganesh identified an adverse Mars transit through my 6th house and calculated an auspicious Muhurat window two weeks later when benefic Jupiter exerted protective aspect on my Lagna.',
    outcome: 'The surgery went flawlessly on the chosen date with zero post-op complications, and hospital discharge occurred two days earlier than expected. Medical astrology proved to be an exceptional complementary guide.',
    verified: true
  }
];

export const HEALTH_HOUSES: HealthHouse[] = [
  {
    houseNumber: 1,
    houseName: 'First House (Tanu Bhava / Lagna)',
    sanskritName: 'Tanu Bhava',
    anatomicalAreas: 'Head, brain, overall physical constitution, vitality, complexion & cellular immunity',
    healthSignificance: 'The supreme anchor of your physical life force (Ojas). A strong Lagna and Lagnesha gives swift recovery from any disease.',
    planetaryRulers: 'Sun, Mars, Ascendant Lord',
    sampleOutcomes: [
      'Determines fundamental constitutional resilience and stamina',
      'Indicates resistance against infectious diseases and environmental toxins',
      'Signifies mental fortitude and physical endurance under stress'
    ]
  },
  {
    houseNumber: 5,
    houseName: 'Fifth House (Putra / Pancham Bhava)',
    sanskritName: 'Pancham Bhava',
    anatomicalAreas: 'Stomach, upper abdomen, liver, spleen, pancreas, digestive enzymes (Agni) & vital organs',
    healthSignificance: 'Governs digestion, emotional intellect, and the core metabolic engine that sustains health.',
    planetaryRulers: 'Sun, Jupiter',
    sampleOutcomes: [
      'Highlights metabolic disorders, acidity, and digestive vulnerabilities',
      'Reflects genetic vitality and longevity factors passed down through lineage',
      'Key significator for cardiac rhythm and upper abdominal wellness'
    ]
  },
  {
    houseNumber: 6,
    houseName: 'Sixth House (Roga Bhava)',
    sanskritName: 'Roga Bhava',
    anatomicalAreas: 'Intestines, kidneys, lower abdomen, immune defense, inflammation & acute diseases',
    healthSignificance: 'The primary house of sickness, bodily imbalances, infections, and the capacity of the immune system to fight off pathogens.',
    planetaryRulers: 'Mars, Saturn, Mercury',
    sampleOutcomes: [
      'Pinpoints exact timing and nature of acute ailments during Dasha periods',
      'Indicates bacterial/viral vulnerability and inflammatory reactions',
      'Reveals whether a disease will be overcome quickly or require prolonged care'
    ]
  },
  {
    houseNumber: 8,
    houseName: 'Eighth House (Ayur Bhava)',
    sanskritName: 'Ayur Bhava',
    anatomicalAreas: 'Excretory organs, reproductive system, chronic ailments, surgeries, longevity & regeneration',
    healthSignificance: 'The house of longevity (Ayush), chronic or hidden illnesses, surgeries, deep cellular regeneration, and life transformation.',
    planetaryRulers: 'Saturn, Mars',
    sampleOutcomes: [
      'Signifies long-term, hard-to-diagnose, or latent health conditions',
      'Reveals surgical interventions, accidents, and sudden bodily transformations',
      'Indicates lifespan potential and capacity for cellular rejuvenation'
    ]
  },
  {
    houseNumber: 12,
    houseName: 'Twelfth House (Vyaya Bhava)',
    sanskritName: 'Vyaya Bhava',
    anatomicalAreas: 'Feet, eyes, lymphatic system, hospitalization, deep sleep cycles & subconscious psyche',
    healthSignificance: 'Represents bodily recuperation, hospital stays, sleep quality, psycho-somatic ailments, and energetic discharge.',
    planetaryRulers: 'Jupiter, Venus, Ketu',
    sampleOutcomes: [
      'Reflects chronic insomnia, disturbed dreams, and subconscious mental stress',
      'Indicates periods of hospital admission, quarantine, or intensive therapy',
      'Governs lymphatic drainage, fluid retention, and spiritual healing'
    ]
  },
  {
    houseNumber: 7,
    houseName: 'Seventh House (Maraka Bhava)',
    sanskritName: 'Maraka Bhava',
    anatomicalAreas: 'Lower pelvis, urinary tract, balance of internal homeostasis & life transitions',
    healthSignificance: 'As a primary Maraka (energy depleter) house, its Dasha periods test physical reserves and require proactive preventive care.',
    planetaryRulers: 'Venus, 7th Lord',
    sampleOutcomes: [
      'Identifies critical transition phases requiring elevated health precautions',
      'Highlights urinary, reproductive, and pelvic vitality',
      'Guides timely lifestyle moderation to prevent depletion of reserves'
    ]
  }
];

export const PLANETARY_HEALTH_MAP: PlanetaryHealthSignificator[] = [
  {
    planet: 'Sun (Surya)',
    sanskritName: 'Surya Graha',
    governedOrgans: 'Heart, spine, eyesight, bones, vital heat, arterial circulation & Ojas (immunity)',
    doshaAffinity: 'Pitta (Fire/Heat)',
    vulnerabilities: 'Cardiac strain, low vitality, vitamin D deficiency, headaches, eye strain & sluggish blood flow.',
    healingRemedy: 'Surya Namaskar at dawn, Gayatri Mantra chanting, copper water consumption & Ruby / Sunstone remedies.'
  },
  {
    planet: 'Moon (Chandra)',
    sanskritName: 'Chandra Graha',
    governedOrgans: 'Brain, nervous fluids, chest, stomach lining, blood plasma, lymphatic system & sleep',
    doshaAffinity: 'Kapha & Vata (Water/Moisture)',
    vulnerabilities: 'Anxiety, depression, insomnia, fluid retention, hormonal fluctuations, cough & emotional fatigue.',
    healingRemedy: 'Evening meditation, silver cup hydration, Moonstone / Pearl therapy & cooling herbal teas.'
  },
  {
    planet: 'Mars (Mangal)',
    sanskritName: 'Mangal Graha',
    governedOrgans: 'Blood, red blood cells, bone marrow, muscles, head, liver bile & surgical resilience',
    doshaAffinity: 'Pitta (Intense Fire/Acid)',
    vulnerabilities: 'Inflammations, fevers, cuts/burns, hypertension, muscle spasms, bile disorders & surgical procedures.',
    healingRemedy: 'Pranayama cooling practices, regular physical discipline, red coral guidance & blood-cleansing herbs.'
  },
  {
    planet: 'Mercury (Budha)',
    sanskritName: 'Budha Graha',
    governedOrgans: 'Nervous system, skin, vocal cords, bronchial tubes, sensory faculties & cognitive speed',
    doshaAffinity: 'Tridoshic (Vata-predominant)',
    vulnerabilities: 'Skin allergies, eczema, nervous exhaustion, speech stammering, tremors & gastro-intestinal colic.',
    healingRemedy: 'Emerald / Green Tourmaline alignment, green leafy diet, grounding meditation & Budha Beej Mantra.'
  },
  {
    planet: 'Jupiter (Guru)',
    sanskritName: 'Guru Graha',
    governedOrgans: 'Liver, gallbladder, fat metabolism, ears, arterial health, pancreas & cellular regeneration',
    doshaAffinity: 'Kapha (Ether & Water)',
    vulnerabilities: 'Fatty liver, weight gain, diabetes risk, cholesterol imbalances, jaundice & sluggish metabolism.',
    healingRemedy: 'Turmeric & saffron intake, yellow sapphire recommendation, periodic fasting & Guru Mantra.'
  },
  {
    planet: 'Saturn (Shani)',
    sanskritName: 'Shani Graha',
    governedOrgans: 'Bones, teeth, joints, knees, sciatic nerve, chronic degenerative conditions & aging',
    doshaAffinity: 'Vata (Cold/Dry Air)',
    vulnerabilities: 'Arthritis, joint stiffness, chronic fatigue, neuromuscular weakness, constipation & dental decay.',
    healingRemedy: 'Sesame oil warm massage (Abhyanga), Maha Mrityunjaya Japa, Blue Sapphire / Amethyst & seva/charity.'
  }
];

export const HEALTH_WHY_CHOOSE_ITEMS = [
  {
    title: '17+ Years of Authentic Medical Astrology Experience',
    description: 'Deep expertise in analyzing thousands of complex birth charts with clinical correlation, D30 divisional charts, and classical Ayur-Jyotish scriptures.',
    badge: '17+ Yrs Proven Expertise'
  },
  {
    title: 'Complementary & Ethical Synergy with Modern Medicine',
    description: 'We strictly collaborate with medical science without fearmongering, never replacing doctors, but providing crucial timing and constitutional clarity.',
    badge: 'Ethical & Non-Dogmatic'
  },
  {
    title: 'Precise Ayur-Jyotish Tridosha & Prakriti Mapping',
    description: 'Combines the ancient wisdom of Charaka Samhita with Parashara astrology to pinpoint your exact bodily composition, dietary needs, and vulnerable seasons.',
    badge: 'Ayurveda + Vedic Jyotish'
  },
  {
    title: 'Targeted Non-Invasive Remedies & Lifestyle Therapy',
    description: 'Practical, personalized remedies including energized Rudraksha, sacred Mantras, gemstone therapy, and circadian routine adjustments that fit modern living.',
    badge: '100% Practical Remedies'
  }
];

export const HEALTH_DELIVERABLES: HealthDeliverableItem[] = [
  {
    id: 'hd-1',
    title: 'Complete Kundli Health & Ojas Assessment',
    description: 'Thorough evaluation of your Ascendant (Lagna), Sun, Moon, and 6th/8th/12th houses to determine baseline constitutional vitality, immunity, and organ health.',
    badge: 'Comprehensive Diagnosis',
    iconName: 'Activity'
  },
  {
    id: 'hd-2',
    title: 'Ayur-Jyotish Tridosha & Dietary Roadmap',
    description: 'Custom breakdown of your Vata-Pitta-Kapha elemental balance with tailored nutritional recommendations, seasonal guidelines, and digestive Agni enhancers.',
    badge: 'Personalized Lifestyle Plan',
    iconName: 'Apple'
  },
  {
    id: 'hd-3',
    title: 'Dasha & Transit Health Vulnerability Timeline',
    description: 'Chronological forecast of upcoming planetary cycles (Mahadasha/Antardasha), pinpointing vulnerable periods to take preventive health measures.',
    badge: 'Preventive Timing',
    iconName: 'Calendar'
  },
  {
    id: 'hd-4',
    title: 'Medical Procedure & Surgery Timing Guidance',
    description: 'Astrological assessment of elective medical treatment windows, planetary transits, and Muhurat selection for maximum recovery and minimal complication.',
    badge: 'Muhurat Support',
    iconName: 'Clock'
  },
  {
    id: 'hd-5',
    title: 'Tailored Vedic Remedies, Mantras & Gemstones',
    description: 'Personalized remedial prescriptions including authentic Rudrakshas, planetary color therapy, Maha Mrityunjaya sadhana, and charitable donation timing.',
    badge: 'Non-Invasive Remedies',
    iconName: 'ShieldCheck'
  },
  {
    id: 'hd-6',
    title: 'Direct 1-on-1 Consultation & Recorded Guidance',
    description: 'Live interactive video or audio consultation with Acharya Ganesh / Acharya Hanish Bagga with full opportunity for Q&A and confidential advice.',
    badge: 'Direct Live Session',
    iconName: 'Headphones'
  }
];

export const HEALTH_FAQS: HealthFaqItem[] = [
  {
    id: 'h-faq-1',
    category: 'Foundations',
    question: 'Can Medical Astrology replace modern medical diagnosis and treatment?',
    answer: 'No. Medical Astrology (Ayur-Jyotish) is an analytical and preventive diagnostic science designed to complement modern medicine, not replace qualified medical practitioners. While your doctor diagnoses the physical condition and prescribes clinical treatments, Vedic astrology reveals the underlying energetic roots, constitutional vulnerabilities, karmic influences, and planetary timing of disease onset and recovery.'
  },
  {
    id: 'h-faq-2',
    category: 'Analysis',
    question: 'How does Vedic Astrology predict vulnerable health periods?',
    answer: 'Vedic astrology analyzes the 6th house (acute diseases), 8th house (chronic conditions and longevity), and 12th house (hospitalization/sleep disorders), alongside the planetary periods (Vimshottari Dasha) and transits of Saturn, Rahu, and Mars. When malefic planets afflict the Lagna (Ascendant) or Sun/Moon, vitality dips, signaling a window where proactive medical attention and lifestyle modifications are needed.'
  },
  {
    id: 'h-faq-3',
    category: 'Preparation',
    question: 'What details are required for a Health Astrology consultation?',
    answer: 'You will need to provide your exact date of birth, accurate time of birth (hours and minutes), and city/country of birth. It is also very helpful to mention your primary health symptoms, ongoing treatments, or specific questions regarding elective surgery timing or chronic ailments so that Acharya ji can cross-examine the D1 Lagna and D30 (Trimshamsha) divisional charts.'
  },
  {
    id: 'h-faq-4',
    category: 'Remedies',
    question: 'What kind of health remedies does Acharya Ganesh recommend?',
    answer: 'Acharya Ganesh prescribes purely sattvic, non-fearmongering remedies. These include personalized Vedic mantras (such as Maha Mrityunjaya and Surya Gayatri), energized Rudrakshas suited to your Lagna, specific dietary and lifestyle adjustments based on your Ayur-Jyotish Tridosha, color therapy, and benevolent charitable acts on specific planetary weekdays.'
  },
  {
    id: 'h-faq-5',
    category: 'Timing',
    question: 'Can astrology help in selecting the best date for medical surgery?',
    answer: 'Yes. In Vedic astrology, Medical Muhurat analysis evaluates planetary transits, lunar phases (Tithi and Nakshatra), and planetary aspects to identify dates when the body’s healing capacity is peak and malefic planetary influences (such as Mars-Rahu afflictions) are neutralized, supporting smooth surgical outcomes and prompt recovery.'
  },
  {
    id: 'h-faq-6',
    category: 'Confidentiality',
    question: 'Is my medical history and personal consultation confidential?',
    answer: 'Absolutely. 100% of your birth data, medical history, discussed concerns, and consultation recordings are treated with strict confidentiality and never shared with third parties.'
  }
];
