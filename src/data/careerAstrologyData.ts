import { 
  BenefitItem, 
  DeliverableItem, 
  ProcessStep, 
  FaqItem, 
  Testimonial, 
  InternalLinkItem,
  CareerHouseInfo
} from '../types';

export const HERO_STATS = [
  { label: 'TV Shows & Media', value: '10K+', highlight: 'National TV Expert' },
  { label: 'Happy Clients', value: '50,000+', highlight: '45+ Countries' },
  { label: 'Years Experience', value: '17+', highlight: 'Vedic Jyotish & Vastu' },
  { label: 'Accuracy & Trust', value: '98%', highlight: 'Kundli & D10 Precision' },
  { label: 'Google Rating', value: '4.9/5', highlight: '5,000+ Verified Reviews' },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Expert Insights',
    description: "Acharya Hanish Bagga's 17+ years of proven Vedic expertise in decoding career potential, Mahadasha, and Dashamsha (D10).",
    badge: '17+ Yrs Vedic Practice'
  },
  {
    title: 'Personalized Guidance',
    description: 'Every recommendation is customized using your exact Lagna Chart, Moon Sign, Navamsha, and D10 Dashamsha — never generic horoscopes.',
    badge: '100% Tailored Kundli'
  },
  {
    title: 'Action-Oriented Remedies',
    description: 'Practical, non-superstitious solutions including gemstone consultation, mantra alignment, behavioral remedies, and workplace Vastu.',
    badge: 'Scientific & Practical'
  },
  {
    title: 'Proven Track Record',
    description: 'Over 50,000 professionals, executives, software engineers, and founders successfully guided towards promotions, dream switches, and stability.',
    badge: '50K+ Career Transformations'
  },
];

export const SERVICE_BENEFITS: BenefitItem[] = [
  {
    id: 'career-path',
    title: 'Career Path & Suitable Field Analysis',
    shortDesc: 'Discover the exact industries and professional domains where your planetary combinations naturally guarantee maximum success and fulfillment.',
    fullDesc: 'By analyzing the 10th house (Karma Bhava), its lord, planetary associations (Sun, Saturn, Mercury, Mars, Jupiter), and the D10 Dashamsha chart, we identify whether technology, civil services, corporate finance, creative arts, healthcare, or management will yield your greatest prosperity.',
    iconName: 'Compass',
    keyAspects: [
      'Identification of natural talent and karmic aptitude',
      'Govt vs Private vs MNC employment prospects',
      'Ideal job roles matching planetary strengths',
      'Specialized streams for higher studies and certifications'
    ],
    idealFor: 'College graduates, mid-career professionals seeking a directional pivot, or anyone feeling misaligned with their current job.',
    planetaryKey: '10th House (Karma) & Sun / Mercury / Mars alignment'
  },
  {
    id: 'job-change',
    title: 'Job Change Timing & Transition Windows',
    shortDesc: 'Know the precise months and planetary transits when switching jobs will bring salary leaps and seniority rather than insecurity.',
    fullDesc: 'A premature job switch during an unfavorable Antardasha or Sade Sati transit can lead to regret, toxic environments, or sudden layoffs. We map out your favorable transit windows (Gochar of Jupiter & Saturn) to maximize offer packages and ease onboarding.',
    iconName: 'CalendarClock',
    keyAspects: [
      'High-probability months for interview calls and offers',
      'Evaluation of counter-offers and resignation timing',
      'Risk assessment for sudden corporate restructuring',
      'Abroad job opportunities vs domestic transfers'
    ],
    idealFor: 'Professionals contemplating resignation, actively interviewing, or awaiting international visa/relocation opportunities.',
    planetaryKey: '6th (Service) & 10th House Transit + Dasha Bhukti'
  },
  {
    id: 'promotion-growth',
    title: 'Promotion, Appraisal & Leadership Prospects',
    shortDesc: 'Unlock high-level managerial authority, salary increments, and leadership recognition by activating favorable planetary periods.',
    fullDesc: 'The 11th house (Labha Bhava) governs gains and salary hikes, while the Sun and Mars govern executive authority. We determine when your promotion is due, how to overcome office politics, and how to gain appreciation from upper management.',
    iconName: 'TrendingUp',
    keyAspects: [
      'Timelines for appraisal cycles and leadership elevation',
      'Neutralizing hidden rivals, jealous peers, and office politics',
      'Building managerial charisma and executive presence',
      'Enhancing performance consistency under stressful cycles'
    ],
    idealFor: 'Senior professionals stuck in the same band, bypassed for promotions, or dealing with unsupportive superiors.',
    planetaryKey: '11th House of Gains & Sun (Royal Power / Authority)'
  },
  {
    id: 'business-vs-job',
    title: 'Business vs. Job Decision (Entrepreneurship)',
    shortDesc: 'Clear astrological clarity on whether you should continue salary employment or start your own venture, agency, or partnership.',
    fullDesc: 'The 7th house (Partnership/Trade), 3rd house (Self-effort/Initiative), and Mercury (Commerce) determine entrepreneurial aptitude. We assess financial risk appetite in your birth chart before you invest hard-earned savings.',
    iconName: 'Briefcase',
    keyAspects: [
      'Suitability for solo founder vs active partnership business',
      'Optimal timing for company incorporation and brand launch',
      'Capital funding periods and cash flow stability predictions',
      'Whether side-hustle or full-time venture is safer'
    ],
    idealFor: 'Aspiring startup founders, freelancers transitioning to agency owners, and professionals with family business options.',
    planetaryKey: '7th House (Business) vs 6th House (Job/Service)'
  },
  {
    id: 'obstacles-remedies',
    title: 'Career Obstacles & Practical Vedic Remedies',
    shortDesc: 'Neutralize the adverse effects of Rahu-Ketu doshas, debilitated Saturn, Kemdrum, or weak 10th house lords with authentic Vedic remedies.',
    fullDesc: 'Astrological remedies act as an umbrella in a planetary storm. We offer customized, actionable solutions including certified natural gemstones, personalized Beej Mantras, Rudraksha combinations, behavioral modifications, and workplace desk Vastu.',
    iconName: 'ShieldCheck',
    keyAspects: [
      'Gemstone recommendations with weight, metal, and energization rituals',
      'Mantra sadhana for overcoming persistent delays',
      'Charity (Daan) alignments tailored to malefic planets',
      'Workplace seating orientation and cabin Vastu corrections'
    ],
    idealFor: 'Individuals facing unexpected job losses, frequent probation extensions, legal hurdles, or continuous workplace friction.',
    planetaryKey: 'Remedial Jyotish & Energy Harmonization'
  },
  {
    id: 'kundli-dashamsha',
    title: 'Personalized Kundli & D10 Dashamsha Deep Dive',
    shortDesc: 'A microscopic evaluation of your D1 Lagna, D9 Navamsha, and D10 Dashamsha divisional charts for complete 5-year career forecasting.',
    fullDesc: 'While the birth chart shows overall life potential, the D10 Dashamsha is the dedicated divisional chart of profession, reputation, and public legacy. We synthesize all planetary influences to provide a clear, confident career blueprint.',
    iconName: 'Sparkles',
    keyAspects: [
      'Comprehensive 12-house career impact breakdown',
      'Vimshottari Mahadasha, Antardasha, and Pratyantardasha scan',
      'Planetary avasthas (degrees, dignity, combustion, retrogression)',
      'Detailed written roadmap with action checklist'
    ],
    idealFor: 'Anyone seeking a thorough, scientific Vedic audit of their professional destiny with clear timelines.',
    planetaryKey: 'D10 Divisional Chart & Dasha Timing Matrix'
  }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Book Your Consultation',
    subtitle: 'Select Your Slot & Mode',
    description: 'Choose your preferred consultation format (Live Video Call, Confidential Phone Call, or Detailed Written Report) and select an available time slot.',
    details: [
      'Simple online booking form with instant confirmation',
      'Flexible time slots accommodating global time zones',
      'Secure payment processing & confidential data handling'
    ],
    icon: 'Calendar'
  },
  {
    stepNumber: '02',
    title: 'Share Exact Birth Details',
    subtitle: 'Date, Time & Place of Birth',
    description: 'Provide your Date of Birth, exact Time of Birth (with AM/PM), and City/Country of Birth. Mention your specific career questions or dilemmas.',
    details: [
      'Time-rectification assistance available if birth time is approximate',
      'Specific questions on job switch, promotion, or business welcomed',
      'Thorough pre-session chart calculation by Acharya Hanish Bagga'
    ],
    icon: 'FileText'
  },
  {
    stepNumber: '03',
    title: 'Get 1-on-1 Guidance & Roadmap',
    subtitle: 'Live Session + Proven Remedies',
    description: 'Connect directly with Acharya Hanish Bagga for an in-depth reading, straightforward answers to your career dilemmas, timing windows, and practical remedies.',
    details: [
      'Direct, compassionate 1-on-1 discussion without rushing',
      'Clear timelines for next 12 to 36 months',
      'Actionable remedies (Gemstones, Mantras, Habits, Vastu tips)'
    ],
    icon: 'Sparkles'
  }
];

export const WHAT_YOULL_GET_DELIVERABLES: DeliverableItem[] = [
  {
    id: 'deliv-1',
    title: 'Personalized Career Roadmap',
    description: 'A structured 3 to 5-year outlook detailing your planetary career trajectory, peak earning periods, and potential consolidation phases.',
    badge: '3-5 Year Horizon',
    included: [
      'Complete 10th House & D10 analysis',
      'Peak recognition & earning cycles',
      'Strategic guidance for career milestones'
    ],
    icon: 'Compass'
  },
  {
    id: 'deliv-2',
    title: 'Job Change Timing Windows',
    description: 'Exact months when planetary transits support smooth resignations, salary jumps, and positive transitions without career gaps.',
    badge: 'Accurate Timing',
    included: [
      'Favorable months for applications & interviews',
      'Periods to avoid impulsive resignations',
      'Domestic vs Overseas transition prospects'
    ],
    icon: 'CalendarCheck'
  },
  {
    id: 'deliv-3',
    title: 'Promotion & Appraisal Probability',
    description: 'Analysis of your 11th House (Income/Gains) and 10th House (Status) to pinpoint the exact appraisal cycle when salary hikes are highest.',
    badge: 'Growth Forecast',
    included: [
      'Anticipated promotion timelines',
      'Overcoming managerial friction & biases',
      'Maximizing financial increments & bonuses'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'deliv-4',
    title: 'Most Suitable Career Fields',
    description: 'A pinpointed list of corporate domains, tech stacks, industries, or business sectors aligned with your natural planetary dignity.',
    badge: 'Industry Alignment',
    included: [
      'Job vs Startup/Business feasibility rating',
      'High-growth niche sectors for your chart',
      'Government vs Corporate vs Creative avenues'
    ],
    icon: 'Target'
  },
  {
    id: 'deliv-5',
    title: 'In-Depth Planetary & D10 Breakdown',
    description: 'Transparent explanation of your active Mahadasha, Antardasha, and the dignity of Saturn, Sun, Jupiter, and Mercury.',
    badge: 'Technical Jyotish',
    included: [
      'Vimshottari Dasha system breakdown',
      'Dashamsha (D10) divisional chart insights',
      'Sade Sati, Dhaiya, or Rahu transit mitigation'
    ],
    icon: 'Layers'
  },
  {
    id: 'deliv-6',
    title: 'Practical, Non-Superstitious Remedies',
    description: 'Customized action steps including certified natural gemstones, personalized Beej Mantras, workplace desk Vastu, and daily rituals.',
    badge: 'Actionable Solutions',
    included: [
      'Gemstone recommendation with metal & finger rules',
      'Practical behavioral & habit adjustments',
      'Desk orientation & workplace energy enhancements'
    ],
    icon: 'Sparkles'
  }
];

export const CAREER_HOUSES: CareerHouseInfo[] = [
  {
    houseNumber: 10,
    houseName: '10th House (Karma Bhava)',
    sanskritName: 'Karma & Rajya Sthana',
    careerSignificance: 'The supreme pillar of career, professional status, leadership dignity, authority in society, and executive achievements.',
    planetaryRulers: 'Sun, Saturn, Mercury, Mars',
    sampleOutcomes: ['Determines high-level executive positions', 'Public reputation and brand value', 'Relationship with government and top management']
  },
  {
    houseNumber: 6,
    houseName: '6th House (Shatru & Seva Bhava)',
    sanskritName: 'Seva & Pratiyogita',
    careerSignificance: 'Governs daily service, employment under someone, competitive examinations (UPSC/Banking), overcoming rivals, and handling workplace disputes.',
    planetaryRulers: 'Mars, Saturn, Rahu',
    sampleOutcomes: ['Success in competitive exams and job interviews', 'Ability to resolve peer conflicts', 'Service in corporate or government hierarchies']
  },
  {
    houseNumber: 2,
    houseName: '2nd House (Dhana Bhava)',
    sanskritName: 'Dhana & Kutumba',
    careerSignificance: 'Represents accumulated wealth, earned income through speech, advisory, and the tangible financial returns from your profession.',
    planetaryRulers: 'Jupiter, Venus, Mercury',
    sampleOutcomes: ['Salary growth and wealth accumulation', 'Success in finance, banking, or client-facing roles', 'Stability of liquid earnings']
  },
  {
    houseNumber: 11,
    houseName: '11th House (Labha Bhava)',
    sanskritName: 'Labha & Siddhi',
    careerSignificance: 'The house of all gains, promotions, bonuses, professional network expansion, and fulfillment of high ambitions.',
    planetaryRulers: 'Jupiter, Sun, Saturn',
    sampleOutcomes: ['Appraisal cycles and ESOP/bonus realization', 'Influential professional networking', 'Long-term wealth and business profits']
  },
  {
    houseNumber: 7,
    houseName: '7th House (Jaya & Vyapar Bhava)',
    sanskritName: 'Vyapar & Sahayog',
    careerSignificance: 'Governs independent trade, entrepreneurship, business partnerships, public interactions, and overseas commercial dealings.',
    planetaryRulers: 'Venus, Mercury',
    sampleOutcomes: ['Feasibility of starting your own company', 'Partnership success vs disputes', 'Client contracts and business expansion']
  },
  {
    houseNumber: 9,
    houseName: '9th House (Bhagya Bhava)',
    sanskritName: 'Bhagya & Dharma',
    careerSignificance: 'The house of fortune, mentors, higher specialized learning, international work visas, and sudden lucky breakthroughs in career.',
    planetaryRulers: 'Jupiter, Sun',
    sampleOutcomes: ['Foreign job relocation & H1B/work visa success', 'Guidance from supportive bosses & mentors', 'Luck factor during difficult job markets']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Rajesh Kulkarni',
    role: 'Principal Software Architect',
    location: 'Bengaluru, India',
    companyOrDomain: 'Tier 1 Global Tech MNC',
    category: 'job-switch',
    rating: 5,
    date: 'February 2026',
    story: 'I was stuck in the same position for 4 years with minimal increments despite stellar reviews. Acharya Hanish Bagga analyzed my D10 chart and accurately predicted a Mahadasha transition in November. He advised me strictly against switching in August and gave me specific timing for November.',
    outcome: 'Switched in December 2025 with a 65% salary hike and leadership role at a top US fintech firm. His timing accuracy was astonishing.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Pooja Sundaram',
    role: 'VP Marketing & Growth',
    location: 'Mumbai, India',
    companyOrDomain: 'Consumer FMCG Brand',
    category: 'promotion',
    rating: 5,
    date: 'January 2026',
    story: 'Facing intense corporate politics and unsupportive management, I felt my career was stalling. Acharya ji pointed out an active Rahu transit affecting my 10th house and suggested practical remedial gemstones and daily desk Vastu alignment.',
    outcome: 'Within 3 months of the consultation and remedies, the organizational restructuring favored my department and I was promoted to Vice President.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Vikramaditya Rao',
    role: 'Founder & Managing Director',
    location: 'Hyderabad / Dubai',
    companyOrDomain: 'Logistics Tech Startup',
    category: 'business',
    rating: 5,
    date: 'December 2025',
    story: 'I was torn between staying in my 35 LPA corporate job or committing fully to my logistics startup. Acharya Hanish Bagga decoded my 7th house and Mercury strength, advising me on the exact auspicious month to register and launch.',
    outcome: 'We closed our Seed Round funding right in the predicted auspicious quarter. His guidance gave me unshakeable clarity.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Dr. Ananya Sen',
    role: 'Clinical Research Director',
    location: 'London, United Kingdom',
    companyOrDomain: 'Global Pharma Research',
    category: 'foreign',
    rating: 5,
    date: 'November 2025',
    story: 'My international relocation visa was delayed multiple times, creating extreme anxiety. Acharya Bagga performed a deep Kundli check, identified the 9th and 12th house planetary blockages, and provided specific mantras and energized gemstone guidance.',
    outcome: 'My Tier-2 visa cleared smoothly within 6 weeks, and I relocated to London with full sponsorship.',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Abhishek Shrivastava',
    role: 'Deputy General Manager',
    location: 'New Delhi, India',
    companyOrDomain: 'Public Sector Enterprise',
    category: 'govt',
    rating: 5,
    date: 'October 2025',
    story: 'Departmental promotion exams had stalled for 2 years. Acharya ji analyzed my Sun and Mars placements, predicting a breakthrough in late autumn. His genuine, calm, and scientific demeanor gave me tremendous confidence.',
    outcome: 'Cleared the promotion board in first list and received transfer to preferred regional headquarters.',
    verified: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Which chart is used for career prediction in Vedic Astrology?',
    answer: 'In Vedic Astrology, career prediction is performed using a multi-layered chart synthesis. The primary chart is the D1 Lagna Kundli, specifically examining the 10th House (Karma Bhava), 6th House (Service), 2nd House (Earnings), and 11th House (Gains). To verify micro-level professional outcomes, Acharya Hanish Bagga thoroughly examines the D10 Dashamsha chart (the dedicated divisional chart for profession, authority, and public legacy) alongside the D9 Navamsha chart.',
    category: 'houses',
    schemaAnswerHtml: 'In Vedic Astrology, career prediction uses the <strong>D1 Lagna Kundli</strong> (10th, 6th, 2nd, and 11th houses) synthesized with the <strong>D10 Dashamsha Chart</strong>, which is the specialized divisional chart for career trajectory, fame, and authority.'
  },
  {
    question: 'Which house represents career, profession, and status in Kundli?',
    answer: 'The 10th House (Karma Bhava) is the primary house representing career, executive status, profession, and relationship with leadership. However, modern careers depend on a four-house network: the 10th house (Authority & Profession), the 6th house (Daily Job & Competitions), the 2nd house (Salary & Liquid Wealth), and the 11th house (Appraisals, Promos & Financial Gains).',
    category: 'houses',
    schemaAnswerHtml: 'The <strong>10th House (Karma Bhava)</strong> is the chief house for career and social status. Supporting houses include the 6th (service/job), 2nd (wealth/salary), and 11th (gains/promotions).'
  },
  {
    question: 'Can astrology accurately predict the timing of a job change or promotion?',
    answer: 'Yes. Vedic Astrology calculates precise timing using the Vimshottari Dasha system (Mahadasha, Antardasha, and Pratyantardasha) coupled with Gochar (planetary transits) of Jupiter, Saturn, and Rahu. When the operating dasha connects the 6th, 10th, or 11th house lords with favorable transits over the Lagna or 10th house, job switches bring major salary hikes and promotions.',
    category: 'timing',
    schemaAnswerHtml: 'Yes. By synchronizing the <strong>Vimshottari Dasha system</strong> with the transits (Gochar) of Jupiter and Saturn over your 10th, 6th, and 11th houses, astrology accurately forecasts favorable months for job switches and promotions.'
  },
  {
    question: 'How is career predicted from date of birth, time, and place?',
    answer: 'Your Date, exact Time, and Place of Birth determine the exact celestial coordinates and rising sign (Ascendant/Lagna) at the moment you took your first breath. This creates your unique Kundli showing planetary degrees, house lords, planetary dignity (exalted, debilitated, moolatrikona), and the D10 Dashamsha chart that governs your professional life.',
    category: 'general',
    schemaAnswerHtml: 'Your birth date, exact time, and location determine the rising ascendant and planetary degrees, constructing the 12 houses of your Kundli and the D10 Dashamsha chart to reveal your ideal profession and timing.'
  },
  {
    question: 'Which career field is most suitable according to my Kundli?',
    answer: 'The suitable field is determined by the strongest planetary influence on your 10th house and D10 chart. For example: Sun indicates Govt jobs, civil administration, and senior leadership; Mercury indicates Software, IT, Data Science, and Trading; Mars indicates Engineering, Defense, Real Estate, and Surgery; Saturn indicates Manufacturing, Law, Oil/Gas, and Mining; Venus indicates Design, Media, Luxury, and Hospitality; Jupiter indicates Banking, Advisory, Law, and Academia.',
    category: 'general',
    schemaAnswerHtml: 'Your optimal career field is dictated by planets ruling or aspecting your 10th house and D10 chart — such as Sun for administration/leadership, Mercury for IT/data, Mars for engineering, and Jupiter for finance/consulting.'
  },
  {
    question: 'How do I know if I should do a job or start my own business?',
    answer: 'Astrology evaluates the relative strength between the 6th House (Service/Employment) and the 7th House (Business/Partnerships/Trade), along with the 3rd House of self-effort and Mercury (the planet of commerce). If the 7th house and Mercury are dominant with strong Dhana Yogas, business is fruitful. If the 6th house and Saturn/Sun are stronger, corporate leadership or civil service delivers greater security.',
    category: 'general',
    schemaAnswerHtml: 'The comparison between the <strong>6th House (Job/Service)</strong> and the <strong>7th House (Business/Trade)</strong> alongside Mercury and 3rd house strength reveals whether salary employment or entrepreneurship will yield higher success.'
  },
  {
    question: 'What is the role of the D10 (Dashamsha) divisional chart?',
    answer: 'The D10 Dashamsha is the 10th harmonic divisional chart in Vedic Astrology, dedicated purely to profession, karma, status, and professional achievements. While the D1 Lagna chart shows overall destiny, the D10 reveals your micro-level career trajectory, why certain promotions get delayed, relationships with superiors, and the exact nature of your daily work.',
    category: 'houses',
    schemaAnswerHtml: 'The <strong>D10 Dashamsha</strong> is the dedicated divisional chart of profession in Vedic Jyotish, revealing specific job roles, public recognition, management relations, and karmic success patterns.'
  },
  {
    question: 'What if I do not know my exact time of birth?',
    answer: 'If you have an approximate time of birth (e.g. within 15–30 minutes), Acharya Hanish Bagga utilizes Prashna Kundli (Horary Astrology) and Birth Time Rectification (BTR) based on your major past life events (such as graduation year, marriage, past job changes) to verify your ascendant and provide accurate career guidance.',
    category: 'general',
    schemaAnswerHtml: 'If your birth time is approximate, Acharya Hanish Bagga uses <strong>Birth Time Rectification (BTR)</strong> and <strong>Prashna Astrology (Horary)</strong> aligned with past life milestones to accurately reconstruct your career chart.'
  },
  {
    question: 'Can Vedic remedies really help overcome workplace politics and slow growth?',
    answer: 'Yes. Vedic remedies work by harmonizing negative planetary vibrations and strengthening functional benefic planets. Remedies provided by Acharya Hanish Bagga include natural certified gemstones (tested for your specific Lagna), personalized Beej Mantras, specific charity days (Daan), and workplace desk Vastu corrections to repel negative office energies.',
    category: 'remedies',
    schemaAnswerHtml: 'Authentic remedies — such as energized certified gemstones, tailored Beej Mantras, targeted donations, and workplace desk Vastu — harmonize planetary energies and neutralize workplace friction.'
  },
  {
    question: 'How soon can I schedule a consultation and what is the process?',
    answer: 'Consultations are scheduled via the simple booking form or direct WhatsApp link. Once you submit your birth details and preferred time slot, our team confirms your appointment. You receive a direct 1-on-1 private video or phone call with Acharya Hanish Bagga, followed by a personalized remedy checklist.',
    category: 'timing',
    schemaAnswerHtml: 'You can book an immediate slot via our online form or WhatsApp. Sessions are conducted 1-on-1 privately via video or phone call with Acharya Hanish Bagga with post-consultation support.'
  }
];

export const INTERNAL_LINKS: InternalLinkItem[] = [
  {
    title: 'Business Astrology Consultation',
    href: '#services-business',
    category: 'service',
    badge: 'Popular',
    description: 'Kundli analysis for startup founders, partnership compatibility, and business launch timing.'
  },
  {
    title: 'Workplace & Office Vastu Consultation',
    href: '#services-vastu',
    category: 'service',
    badge: 'High Impact',
    description: 'Optimize cabin direction, seating posture, and entrance energies for maximum cash flow.'
  },
  {
    title: 'Corporate Numerology & Name Correction',
    href: '#services-numerology',
    category: 'service',
    badge: 'Fast Results',
    description: 'Harmonize your name number with your birth date for immediate recognition and luck.'
  },
  {
    title: 'Govt Job Prediction by Date of Birth',
    href: '#blog-govt-job',
    category: 'blog',
    badge: 'Guide',
    description: 'Astrological planetary combinations for UPSC, SSC, Banking, and PSU competitive exams.'
  },
  {
    title: 'Saturn in 10th House: Effects on Career & Fame',
    href: '#blog-saturn-10th-house',
    category: 'blog',
    badge: 'In-Depth',
    description: 'How Shani in the 10th house brings delays followed by monumental, long-lasting success.'
  },
  {
    title: 'Foreign Job Settlement & Visa in Astrology',
    href: '#blog-foreign-settlement',
    category: 'blog',
    badge: 'Global Careers',
    description: 'The role of 9th and 12th house lords in overseas relocation and green card/work visa approvals.'
  },
  {
    title: 'Vimshottari Dasha Career Calculator Guide',
    href: '#blog-dasha-timing',
    category: 'guide',
    badge: 'Technical',
    description: 'How to calculate your active Mahadasha and Antardasha to forecast job changes.'
  },
  {
    title: 'Gemstones for Career Growth & Confidence',
    href: '#blog-gemstones-career',
    category: 'guide',
    badge: 'Remedies',
    description: 'Which gemstone to wear: Yellow Sapphire, Blue Sapphire, Emerald, or Ruby for executive success.'
  }
];
