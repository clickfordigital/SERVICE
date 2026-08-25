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
    question: 'Which Chart is Used for Career Prediction?',
    answer: 'In Vedic astrology, the Birth Chart with Dashamsha Chart (D10) are generally used for career prediction. These charts help to understand about the professional strengths, growth opportunities and future career. A detailed Career astrology analysis examines the planet positioning, houses and dashas to provide guidance with accuracy. Many choose career astrology by date of birth because it offers personalized insights and support for better planning through trusted astrology career prediction methods. Career astrology also things like your strengths, skills and timing of success. Book a consultation to know more about what kind of career is best for you.',
    category: 'houses',
    schemaAnswerHtml: 'In Vedic astrology, the <strong>Birth Chart with Dashamsha Chart (D10)</strong> are generally used for career prediction. These charts help to understand about the professional strengths, growth opportunities and future career.'
  },
  {
    question: 'Which House is for Career in Astrology?',
    answer: 'In career astrology, the 10th house is considered the main house in which we can check about profession and achievements. In career prediction astrology, an expert astrologer carefully analyzes the 10th house with this house ruling planet and supporting houses like 2, 6 and 11 respectively. A strong 10th house indicates better career growth and recognition. Career Astrology also studies planetary influences to understand work preferences and future opportunities. Through Career astrology by date of birth, it becomes easier to identify strengths, challenges and suitable career options.',
    category: 'houses',
    schemaAnswerHtml: 'In career astrology, the <strong>10th house</strong> is considered the main house in which we can check about profession and achievements, analyzed alongside supporting houses like the <strong>2nd, 6th and 11th</strong>.'
  },
  {
    question: 'Can Career Astrology Prediction Predicts when will I get a Job?',
    answer: 'Astrology can provide timing indications by studying planetary periods, transits and house activations. A detailed astrology career prediction can able to highlight favourable periods and employment opportunities. An expert combines job astrology with dasha analysis to tell when will professional growth may occur. While astrology cannot guarantee exact outcomes, it can tell the periods of growth and opportunities. A proper Career astrology consultation is able to understand career timing, improve preparation and helps to make better decision during professional life.',
    category: 'timing',
    schemaAnswerHtml: 'Astrology can provide timing indications by studying planetary periods, transits and house activations to highlight favourable periods and employment opportunities.'
  },
  {
    question: 'When will I get a Job Prediction?',
    answer: 'The timing of employment is generally analyzed by planetary dashas, transits and last the strength of career house. A personalized job prediction studies the 6th, 10th, and 11th houses to identify the most favourable periods for getting employment. Many people seek job prediction by date of birth to understand what opportunities and challenges may come in the future. Through career prediction astrology, an astrologer can provide phases for job opportunities and growth so that they can plan their efforts more effectively.',
    category: 'timing',
    schemaAnswerHtml: 'The timing of employment is generally analyzed by planetary dashas, transits and the strength of the <strong>6th, 10th, and 11th houses</strong> to identify favourable periods.'
  },
  {
    question: 'When will I get Job Astrology Calculator?',
    answer: 'An astrology calculator can only able to provide very basic insights but if someone wants accurate result a detailed chart analysis may be required. Professional job astrology considers planetary placements, dashas and transits that calculator cannot provide. For reliable job prediction by date of birth, a complete horoscope assessment is usually recommended. Many choose career astrology by date of birth because it offers personalized guidance instead of generic results. A detailed analysis can reveal better timing for employment, promotion or any career-related decisions.',
    category: 'general',
    schemaAnswerHtml: 'An astrology calculator only provides basic insights. For reliable job prediction by date of birth, a personalized chart assessment evaluating planetary placements, dashas, and transits is recommended.'
  },
  {
    question: 'Which House in Horoscope if for Career?',
    answer: 'The 10th house is the most important indicator for profession and achievements. A detailed career horoscope focuses on this house along with the 2nd, 6th and 11th houses to evaluate income, service and gains. In career astrology, the condition of the 10th house lord plays the major role as it determines the professional success. Through career prediction, astrologers study these types of combinations to provide insights on career potential, growth and suitable professional path for an individual.',
    category: 'houses',
    schemaAnswerHtml: 'The <strong>10th house</strong> is the most important indicator for profession and achievements, evaluated together with the 2nd (income), 6th (service), and 11th (gains) houses.'
  },
  {
    question: 'Why is Career Horoscope Today Trending Today?',
    answer: 'People seek guidance about their jobs, promotions, business growth and changing career opportunities. As a result, daily career horoscope updates have become very popular among professional as well as students. A well-prepared career prediction can provide motivation and help individuals to stay focused on their upcoming opportunities. Interest in astrology career prediction has also become very popular among people who wants better clarity about their future. Daily insights often help to plan for any important professional decisions with better awareness.',
    category: 'general',
    schemaAnswerHtml: 'Daily career horoscope updates are trending because professionals and students actively seek timely guidance, clarity, and motivation regarding jobs, promotions, and changing career opportunities.'
  },
  {
    question: 'Which Career is best for me According to Career Astrology?',
    answer: "The most suitable profession depends on placement of planets, their strengths and natural talents shown in the birth chart. Career astrology analyses these factors to identify career that align with a person's potential. Career astrology consultation can give insights about in what field you will perform better like in business or in a job. With the help of career astrology by date of birth, an astrologer provides personalized recommendations that support long-term professional growth and satisfaction.",
    category: 'general',
    schemaAnswerHtml: 'The most suitable profession depends on planetary placements, house strengths, and natural talents in your birth chart, helping determine whether a job or business aligns best with your potential.'
  },
  {
    question: 'How to Find Career in Astrology Chart?',
    answer: 'Finding the right profession involves studying the 10th house, its lord, planetary strengths, dashas and supporting houses. A detailed career prediction astrology analysis also examines the Moon, Sun and important yogas that influence professional success. Many people use Career astrology career to know what are their strengths and ideal working environment in which they can excel. Through astrology career prediction, identifying your career paths, growth opportunities and potential challenges becomes easy. A complete chart reading provides deeper insights than general horoscope reading.',
    category: 'houses',
    schemaAnswerHtml: 'Finding your career path involves evaluating the 10th house and its lord, Sun and Moon dignity, planetary yogas, and active Dashas.'
  },
  {
    question: 'How to Find Career in Astrology Chart? (Professional Assessment)',
    answer: 'A professional assessment starts by analyzing the 10th house in your birth chart. Career prediction technique also includes the Dashamsha Chart for detailed analysis. Many astrologers combines these to understand skills, ambitions and growth potential. By evaluating planetary strengths and timing factors, career astrology can help to identify suitable professions. A professional career astrology consultation can help to gain all the insights that a person needs to make proper decision for their career. Contact us to get the right guidance with the help of astrology.',
    category: 'general',
    schemaAnswerHtml: 'A professional assessment starts by analyzing the 10th house in your birth chart along with the <strong>Dashamsha Chart (D10)</strong> to evaluate skills, ambitions, planetary strengths, and timing.'
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

