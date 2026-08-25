import { 
  BenefitItem, 
  DeliverableItem, 
  ProcessStep, 
  FaqItem, 
  Testimonial, 
  InternalLinkItem,
  CareerHouseInfo,
  YouTubeVideo
} from '../types';

export const HERO_STATS = [
  { label: 'Consultations Done', value: '50K+', highlight: 'Global Clients' },
  { label: 'Years Experience', value: '17+', highlight: 'Vedic Jyotish & Vastu' },
  { label: 'Accuracy & Trust', value: '98%', highlight: 'Kundli & D10 Precision' },
  { label: 'Google Rating', value: '5/5', highlight: '5,000+ Verified Reviews' },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Get Expert Vedic Career Analysis',
    description: 'Acharya Ganesh brings 17+ years of experience in studying professional patterns through Vedic astrology. Your 10th house, 6th house, 2nd house, 11th house, planetary strengths, Mahadasha, Antardasha and Dashamsha chart are examined for a detailed astrology career prediction.',
    badge: '17+ Years of Vedic Practice'
  },
  {
    title: 'Personalized Horoscope-Based Guidance',
    description: "There's no such thing as a standard career path. Your consultation will be done using your Lagna chart, Moon chart, Dasha cycles, planetary positions and D10 Dashamsha. A detailed career horoscope by date of birth can be used to pinpoint your career tendencies and times to concentrate on.",
    badge: '100% Personalized Kundli Analysis'
  },
  {
    title: 'Practical Direction Instead of Generic Answers',
    description: 'The purpose of career astrology is not simply to say whether your career will be good or bad. The consultation focuses on questions you can actually act upon. You can discuss promotion timing, job changes, workplace difficulties, career breaks, professional studies and other concerns.',
    badge: 'Clear & Action-Oriented Guidance'
  },
  {
    title: 'Experience Across Different Career Situations',
    description: 'Professionals, executives, entrepreneurs, students, job seekers, government aspirants and business owners may face completely different challenges. A detailed job astrology assessment allows the horoscope to be evaluated according to your current professional situation.',
    badge: '50K+ Clients Guided'
  },
];

export const SERVICE_BENEFITS: BenefitItem[] = [
  {
    id: 'career-path',
    title: 'Career Path & Suitable Profession Analysis',
    shortDesc: 'One of the most important areas of study for professional direction, reputation, responsibilities, authority and long-term career development is the study of the 10th house.',
    fullDesc: 'Career prediction astrology is analysed on the basis of the power of 10th house, its lord, planetary aspects, planetary conjunctions, Dashamsha placement and the ongoing Dasha periods are all studied together.',
    iconName: 'Compass',
    keyAspects: [
      'Know about fields of work which might be more suited to your innate abilities. Contrast options of private jobs, MNCs, government, self-employment and entrepreneurship.',
      'Determine natural leadership, communication, analytical, technical, creative, advisory or management tendencies.',
      'Know if your field is meeting your overall career goals.',
      'Analyze significant professional learning, accountability and transition experiences.'
    ],
    idealFor: 'Students, graduates, and professionals seeking clarity on their most aligned industry, long-term vocation, and natural leadership strengths.',
    planetaryKey: '10th House – Karma Bhava'
  },
  {
    id: 'job-change',
    title: 'Job Change, Employment & Competition Analysis',
    shortDesc: 'Changing jobs at the wrong time can create unnecessary instability, while the right professional transition may open a stronger opportunity.',
    fullDesc: 'A detailed career by date of birth and time analysis studies your 6th and 10th houses along with relevant Dasha periods and transits to understand the broader timing surrounding employment changes. This part of career astrology is especially useful when you have two or more professional options and cannot decide which path deserves priority.',
    iconName: 'CalendarClock',
    keyAspects: [
      'Study supportive periods for job applications and interviews.',
      'Understand whether staying or switching deserves stronger consideration.',
      'Assess periods connected with workplace stress or competition.',
      'Discuss delays in getting employment after repeated applications.',
      'Analyze job security during restructuring or organizational changes.'
    ],
    idealFor: 'Professionals contemplating job switch, facing employment delays, evaluating counter-offers, or preparing for competitive examinations.',
    planetaryKey: '6th House – Seva Bhava'
  },
  {
    id: 'promotion-growth',
    title: 'Promotion, Salary Growth & Recognition Prospects',
    shortDesc: 'The 11th house in your birth chart represents gains, fulfillment of professional ambitions, professional networks, and recognition.',
    fullDesc: 'Your career prediction includes an assessment of the 10th and 11th houses along with relevant planetary periods to understand potential phases of professional advancement and leadership elevation.',
    iconName: 'TrendingUp',
    keyAspects: [
      'Study periods associated with appraisal and promotion opportunities.',
      'Understand possibilities for greater authority or leadership.',
      'Analyze professional networking and support from senior management.',
      'Identify periods requiring greater patience with office politics.',
      'Understand whether a role change may offer better long-term potential than waiting for an internal promotion.'
    ],
    idealFor: 'Senior professionals aiming for appraisals, leadership increments, overcoming workplace politics, and securing high-growth promotions.',
    planetaryKey: '11th House – Labha Bhava'
  }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Book Your Consultation',
    subtitle: 'Select Your Preferred Slot & Consultation Mode',
    description: 'Choose an available appointment and your preferred consultation option. Depending on available services, you can select a live video consultation, phone consultation or another listed consultation format.\n\nThe purpose is to provide enough time to discuss your professional situation and complete your career astrology analysis without relying on a generic automated report.',
    icon: 'Calendar'
  },
  {
    stepNumber: '02',
    title: 'Share Your Correct Birth Details',
    subtitle: 'Date, Exact Birth Time & Place of Birth',
    description: 'Provide your accurate birth details and career context for horoscope preparation:',
    details: [
      'Date of birth',
      'Accurate time of birth',
      'City and country of birth',
      'Current profession',
      'Major career concerns',
      'Any specific decision you are considering'
    ],
    icon: 'FileText'
  },
  {
    stepNumber: '03',
    title: 'Receive Personalized Career Guidance',
    subtitle: 'Detailed Horoscope Reading & Practical Roadmap',
    description: 'During your session, Acharya Ganesh explains the planetary factors influencing your professional life and addresses your important questions.\n\nYour career horoscope by date of birth may include discussion around suitable professional directions, Dasha periods, job transitions, promotions, challenges, income development and other career-related patterns visible in your horoscope. Where relevant, practical astrological remedies may also be suggested.',
    icon: 'Sparkles'
  }
];

export const WHAT_YOULL_GET_DELIVERABLES: DeliverableItem[] = [
  {
    id: 'deliv-1',
    title: 'Personalized Career Roadmap',
    description: 'Understand the broader direction of your professional journey and the areas where your chart shows stronger potential.',
    badge: 'Strategic Direction',
    included: [],
    icon: 'Compass'
  },
  {
    id: 'deliv-2',
    title: 'Job Change Timing',
    description: 'Your career prediction astrology analysis can identify planetary periods that may be more supportive or demanding for professional transitions.',
    badge: 'Timing Analysis',
    included: [],
    icon: 'CalendarCheck'
  },
  {
    id: 'deliv-3',
    title: 'Promotion & Appraisal Prospects',
    description: 'Understand the astrological factors connected with professional recognition, additional responsibilities, leadership opportunities and salary development.',
    badge: 'Growth & Authority',
    included: [],
    icon: 'TrendingUp'
  },
  {
    id: 'deliv-4',
    title: 'Suitable Professional Fields',
    description: 'Your horoscope can be studied to identify professions and working environments that may align better with your natural planetary strengths.',
    badge: 'Field Alignment',
    included: [],
    icon: 'Target'
  },
  {
    id: 'deliv-5',
    title: 'D1 & D10 Career Analysis',
    description: 'Detailed astrology career prediction considers the main birth chart together with the Dashamsha and important planetary periods instead of depending on one isolated placement.',
    badge: 'D1 & D10 Charts',
    included: [],
    icon: 'Layers'
  },
  {
    id: 'deliv-6',
    title: 'Career Challenges & Workplace Patterns',
    description: 'Know from the astrological point of view, recurring professional difficulties/differences, stalled progress, instability and discontent.',
    badge: 'Obstacle Mitigation',
    included: [],
    icon: 'ShieldCheck'
  },
  {
    id: 'deliv-7',
    title: 'Practical Vedic Remedies',
    description: 'In case of appropriate, remedies can be given as mantra, behavioral guidance, gemstone as per proper horoscope evaluation or Vastu related suggestions etc.',
    badge: 'Actionable Remedies',
    included: [],
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
    story: 'Salary and destination have hardly changed since the last four years, even regardless of good reviews. I studied my D10 chart, current Dasha and upcoming periods and got some good insights from Acharya Ganesh about the time that would be more favourable for me to move to another job.',
    outcome: 'Changing jobs during the recommended time frame and advancing to a more fulfilling position with greater challenge and higher pay. Here is the reason I was able to wait for the right job because the career prediction had given me enough confidence to do so.',
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
    story: 'During consultation, Acharya ji analyzed my career prediction astrology 10th house, Dasha periods and Rahu influence and told me that going back to work with such difficult times and pressure from seniors, etc. was short-lived and he gave me some tips for doing so as well as some patience in my career.',
    outcome: "In the next couple of months there was a big organizational change here and I was offered a better leadership position. I've avoided an emotional resignation at the wrong time by following the astrology career prediction.",
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
    story: 'When I looked at my date of birth chart and calculated the astrology of my 6th, 7th, 10th and 11th houses, along with Mercury, Rahu and my chart, it was evident that my career had a significant scope for improvement and transition from the job to a business was best done at a specific time.',
    outcome: 'I had planned my exit, instead of exiting suddenly and I started the business at the recommended time. The consultation process assisted me in making a thoughtful decision with clarity between a job and entrepreneurship.',
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

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Job Change Timing in Kundli: Which Year & Month is Right for You?',
    hindiHeadline: 'कुंडली में नौकरी कब बदलेगी? सटीक महीना व वर्ष',
    description: 'Learn how the 10th house, 6th house, and active Vimshottari Mahadasha reveal the exact high-probability window for switching your job with substantial salary hikes.',
    category: 'job-timing',
    views: '340K+ views',
    duration: '16:45',
    highlight: 'Dasha & Transit Secrets',
    topics: ['10th House', 'Vimshottari Dasha', 'Salary Hike Timing', 'Jupiter Transit'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#E67E22'
  },
  {
    id: 'yt-2',
    youtubeId: '7NOSnzc_oU4',
    title: 'Government Job vs Private Job: Astrological Combinations for Civil Services & PSUs',
    hindiHeadline: 'सरकारी नौकरी के राजयोग | Surya & Mangal Strength',
    description: 'Understand the specific roles of the Sun (Surya), Mars (Mangal), and Saturn in clearing competitive exams, public sector interviews, and judicial appointments.',
    category: 'govt-job',
    views: '520K+ views',
    duration: '21:10',
    highlight: 'Sun & Mars Alignment',
    topics: ['Surya Strength', 'UPSC & SSC Yogas', '6th House Competitions', 'Authority Yogas'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#D35400'
  },
  {
    id: 'yt-3',
    youtubeId: '3JZ_D3ELwOQ',
    title: 'Job vs Business in Astrology: Who Should NEVER Do a 9-to-5 Job?',
    hindiHeadline: 'नौकरी या व्यापार? कुंडली बताएगी सही रास्ता',
    description: 'A comprehensive guide analyzing the 7th house (Vyapar), 3rd house (Enterprise), and Mercury placement to determine whether startup entrepreneurship or corporate salary suits you best.',
    category: 'business',
    views: '410K+ views',
    duration: '18:30',
    highlight: '7th House & Mercury',
    topics: ['7th House Vyapar', '3rd House Courage', 'Mercury Strength', 'Startup Yogas'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#27AE60'
  },
  {
    id: 'yt-4',
    youtubeId: 'kJQP7kiw5Fk',
    title: 'Saturn (Shani) in 10th House: Karmic Career Delays & Monumental Executive Rise',
    hindiHeadline: '10वें भाव में शनि: शुरुआत में संघर्ष या बड़ा पद?',
    description: 'Why Saturn in the 10th house often creates initial hurdles before age 32, followed by unstoppable authority, leadership power, and unmatched reputation.',
    category: 'promotion',
    views: '680K+ views',
    duration: '24:15',
    highlight: 'Shani Dev Karma Bhava',
    topics: ['Shani in 10th', 'Karmic Timing', 'Leadership Rise', 'Practical Shani Remedies'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#2C3E50'
  },
  {
    id: 'yt-5',
    youtubeId: 'L_LUpnjgPso',
    title: 'Overcoming Workplace Politics & Stalled Promotions with Simple Vedic Remedies',
    hindiHeadline: 'ऑफिस पॉलिटिक्स से छुटकारा व प्रमोशन के उपाय',
    description: 'Practical, non-superstitious remedies including Lagna-specific gemstones, desk orientation Vastu, and specific day Beej Mantras to neutralize toxic workplace energy.',
    category: 'remedies',
    views: '295K+ views',
    duration: '14:50',
    highlight: 'Actionable Remedies',
    topics: ['Office Politics', 'Desk Vastu', 'Appraisal Yogas', 'Energized Gemstones'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#8E44AD'
  },
  {
    id: 'yt-6',
    youtubeId: 'fJ9rUzIMcZQ',
    title: 'Foreign Job Settlement & Overseas Visa Combinations in Vedic Horoscope',
    hindiHeadline: 'विदेश में नौकरी व सेटलमेंट के ज्योतिषीय योग',
    description: 'Discover how the 9th house (Long Travel), 12th house (Foreign Lands), and Rahu align to grant overseas job placements, multinational transfers, and work permits.',
    category: 'job-timing',
    views: '380K+ views',
    duration: '19:05',
    highlight: '12th House & Rahu',
    topics: ['Foreign Relocation', '12th House', 'Rahu Placement', 'Work Visa Yogas'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#2980B9'
  }
];

