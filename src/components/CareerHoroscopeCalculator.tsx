import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Compass, 
  Calendar, 
  Clock, 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Sun, 
  Moon, 
  Flame, 
  Award,
  Zap,
  Gem,
  BookOpen
} from 'lucide-react';

interface CareerHoroscopeCalculatorProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

interface CalculationResult {
  rashi: string;
  sanskritRashi: string;
  rulingPlanet: string;
  planetIcon: string;
  element: string;
  archetype: string;
  score: number;
  suitableIndustries: string[];
  careerGrowthTip: string;
  timingWindow: string;
  favorableDay: string;
  favorableColor: string;
  suggestedGemstone: string;
  dailyMicroRemedy: string;
  keyStrength: string;
  avoidPitfall: string;
}

export const CareerHoroscopeCalculator: React.FC<CareerHoroscopeCalculatorProps> = ({ 
  onOpenBooking, 
  onOpenWhatsApp 
}) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('10:30');
  const [birthPlace, setBirthPlace] = useState('');
  const [currentField, setCurrentField] = useState('tech');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateHoroscope = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;

    setIsCalculating(true);

    setTimeout(() => {
      const dateObj = new Date(birthDate);
      const month = dateObj.getMonth() + 1; // 1 - 12
      const day = dateObj.getDate();
      const timeHour = parseInt(birthTime.split(':')[0] || '12', 10);

      // Vedic Astrological Archetypes based on date & time algorithm
      const rashiTable: { [key: number]: { rashi: string; sanskrit: string; planet: string; elem: string; arch: string; color: string; day: string; gem: string } } = {
        1: { rashi: 'Capricorn / Makara', sanskrit: 'मकर', planet: 'Saturn (Shani)', elem: 'Earth', arch: 'Strategic Organizer & Long-Term Builder', color: 'Navy Blue & Charcoal', day: 'Saturday', gem: 'Blue Sapphire (Neelam)' },
        2: { rashi: 'Aquarius / Kumbha', sanskrit: 'कुम्भ', planet: 'Saturn & Rahu', elem: 'Air', arch: 'Tech Innovator & Unconventional Thinker', color: 'Electric Blue & Black', day: 'Saturday', gem: 'Hessonite (Gomed)' },
        3: { rashi: 'Pisces / Meena', sanskrit: 'मीन', planet: 'Jupiter (Guru)', elem: 'Water', arch: 'Visionary Mentor & Strategic Consultant', color: 'Golden Yellow & Saffron', day: 'Thursday', gem: 'Yellow Sapphire (Pukhraj)' },
        4: { rashi: 'Aries / Mesha', sanskrit: 'मेष', planet: 'Mars (Mangal)', elem: 'Fire', arch: 'Pioneer Leader & High-Stakes Decision Maker', color: 'Deep Crimson & Copper', day: 'Tuesday', gem: 'Red Coral (Moonga)' },
        5: { rashi: 'Taurus / Vrishabha', sanskrit: 'वृषभ', planet: 'Venus (Shukra)', elem: 'Earth', arch: 'Wealth Creator & Quality Specialist', color: 'White & Pastel Green', day: 'Friday', gem: 'Diamond / White Sapphire' },
        6: { rashi: 'Gemini / Mithuna', sanskrit: 'मिथुन', planet: 'Mercury (Budha)', elem: 'Air', arch: 'Master Communicator & Data Strategist', color: 'Emerald Green', day: 'Wednesday', gem: 'Emerald (Panna)' },
        7: { rashi: 'Cancer / Karka', sanskrit: 'कर्क', planet: 'Moon (Chandra)', elem: 'Water', arch: 'Empathetic Director & People Leader', color: 'Pearl White & Silver', day: 'Monday', gem: 'Natural Pearl (Moti)' },
        8: { rashi: 'Leo / Simha', sanskrit: 'सिंह', planet: 'Sun (Surya)', elem: 'Fire', arch: 'Executive Authority & Public Figure', color: 'Golden Amber & Ruby Red', day: 'Sunday', gem: 'Ruby (Manikya)' },
        9: { rashi: 'Virgo / Kanya', sanskrit: 'कन्या', planet: 'Mercury (Budha)', elem: 'Earth', arch: 'Precision Analyst & Operations Architect', color: 'Dark Green & Beige', day: 'Wednesday', gem: 'Emerald (Panna)' },
        10: { rashi: 'Libra / Tula', sanskrit: 'तुला', planet: 'Venus (Shukra)', elem: 'Air', arch: 'Diplomatic Negotiator & Brand Visionary', color: 'Royal Blue & Cream', day: 'Friday', gem: 'Opal / White Zircon' },
        11: { rashi: 'Scorpio / Vrishchika', sanskrit: 'वृश्चिक', planet: 'Mars & Ketu', elem: 'Water', arch: 'Deep Research Specialist & Crisis Manager', color: 'Rust Red & Maroon', day: 'Tuesday', gem: 'Red Coral (Moonga)' },
        12: { rashi: 'Sagittarius / Dhanu', sanskrit: 'धनु', planet: 'Jupiter (Guru)', elem: 'Fire', arch: 'Global Strategist & High-Growth Advisor', color: 'Bright Yellow & Gold', day: 'Thursday', gem: 'Yellow Sapphire (Pukhraj)' },
      };

      const selectedRashi = rashiTable[month] || rashiTable[8];

      // Domain-specific tailored tips
      let tip = '';
      let timing = '';
      let industries: string[] = [];
      let strength = '';
      let pitfall = '';

      if (currentField === 'tech') {
        tip = `Your 10th house planetary ruler indicates high gains through AI, system architecture, or technical leadership. In the coming quarter, prioritize ownership over pure execution. Aligning your North desk energy will unlock direct mentorship from senior management.`;
        timing = 'Favorable Switch Window: Q3 2025 to Q1 2026 (Major salary appraisal probable)';
        industries = ['Software & Cloud Architecture', 'AI & Data Engineering', 'Fintech Leadership', 'Product Management'];
        strength = 'Rapid problem solving and intuitive logic under complex timelines';
        pitfall = 'Hesitating to negotiate leadership packages or staying too long in comfortable legacy stacks';
      } else if (currentField === 'finance') {
        tip = `Strong Dhana Yoga indicators suggest lucrative transitions in investment advisory, corporate treasury, or risk compliance. Ensure you do not sign binding partnership contracts on Tuesdays or Saturdays during retrogrades.`;
        timing = 'Optimal Growth Window: Next 4 to 8 months for portfolio expansion or firm transition';
        industries = ['Investment Banking & Wealth Advisory', 'Corporate Finance', 'Fintech Analytics', 'Chartered Advisory'];
        strength = 'Acute financial risk calculation and strategic asset structuring';
        pitfall = 'Over-analyzing entry timing or accepting equity cuts without guaranteed vesting milestones';
      } else if (currentField === 'govt') {
        tip = `Surya (Sun) and 6th house karma bhava indicate high aptitude for civil authority, PSU leadership, or competitive exams. Channel focused study hours between 6:00 AM – 9:00 AM (Brahma Muhurta) to maximize retentive intellect.`;
        timing = 'Breakthrough Window: Upcoming exam cycles in late Autumn & Spring';
        industries = ['UPSC / Civil Services', 'PSU & Banking Management', 'Judicial & State Administration', 'Public Policy'];
        strength = 'Administrative discipline and dignified public leadership';
        pitfall = 'Getting distracted by multi-tasking instead of mastering single exam syllabi';
      } else if (currentField === 'business') {
        tip = `The synergy between your 3rd house (enterprise) and 7th house (trade) strongly favors independent venture scaling. Focus on B2B relationship building. Consider launching new product lines on Thursdays during Shukla Paksha.`;
        timing = 'High Cash-Flow Window: Next 6 to 12 months for market expansion & fundraising';
        industries = ['D2C Brands & Supply Chain', 'Consulting & B2B Services', 'Technology SaaS', 'Import/Export & Real Estate'];
        strength = 'Unmatched commercial intuition and visionary market timing';
        pitfall = 'Delegating core financial controls too early without airtight contracts';
      } else {
        tip = `Your planetary configuration reflects high creative and strategic versatility. When transitioning roles, emphasize your cross-functional impact. Wearing ${selectedRashi.color.split('&')[0]} during key client pitches will project authoritative calm.`;
        timing = 'Active Progression Window: Upcoming quarterly review cycle';
        industries = ['Corporate Strategy', 'Creative & Brand Direction', 'Operations Consulting', 'Executive Management'];
        strength = 'Adaptive communication and natural talent for bridging executive vision with team execution';
        pitfall = 'Underestimating your market value during annual appraisal meetings';
      }

      // Micro-remedy
      const remedies: { [key: string]: string } = {
        'Sun (Surya)': 'Offer Arghya (fresh water in copper vessel) to the rising Sun every morning and avoid negative office gossip.',
        'Moon (Chandra)': 'Keep a silver square coin in your professional bag and drink water from a silver vessel on Mondays.',
        'Mars (Mangal)': 'Recite Hanuman Chalisa on Tuesdays and keep your physical workspace clutter-free.',
        'Mercury (Budha)': 'Place a small green indoor plant on the North/East corner of your work desk and donate green lentils on Wednesdays.',
        'Jupiter (Guru)': 'Apply a subtle saffron/turmeric tilak on your forehead before vital job interviews and respect mentors.',
        'Venus (Shukra)': 'Keep aromatic natural sandalwood or white flowers at home and maintain immaculate footwear.',
        'Saturn (Shani)': 'Feed stray animals on Saturdays, donate dark sesame seeds, and maintain strict punctuality with junior staff.',
        'Saturn & Rahu': 'Keep blue or dark accessories on your tech desk and feed birds daily in the morning.'
      };

      setResult({
        rashi: selectedRashi.rashi,
        sanskritRashi: selectedRashi.sanskrit,
        rulingPlanet: selectedRashi.planet,
        planetIcon: selectedRashi.planet.includes('Sun') ? 'Sun' : selectedRashi.planet.includes('Moon') ? 'Moon' : 'Flame',
        element: selectedRashi.elem,
        archetype: selectedRashi.arch,
        score: Math.floor(78 + ((day + timeHour) % 18)),
        suitableIndustries: industries,
        careerGrowthTip: tip,
        timingWindow: timing,
        favorableDay: selectedRashi.day,
        favorableColor: selectedRashi.color,
        suggestedGemstone: selectedRashi.gem,
        dailyMicroRemedy: remedies[selectedRashi.planet] || 'Light a sesame oil lamp on Saturday evenings and recite Om Sham Shanaicharaya Namah.',
        keyStrength: strength,
        avoidPitfall: pitfall
      });

      setIsCalculating(false);
    }, 650);
  };

  const handleReset = () => {
    setResult(null);
    setBirthDate('');
    setName('');
  };

  return (
    <section id="career-calculator" className="py-16 sm:py-24 bg-white border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#E8DACD] text-[#854820] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#C68A2C]" />
            <span>Interactive Astrological Tool</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E16] tracking-tight">
            Interactive Career Horoscope &amp; Growth Calculator
          </h2>

          <p className="text-base sm:text-lg text-[#5D4E45]">
            Enter your birth date and time to calculate your Vedic career planetary archetype, 10th house strength indicator, and customized growth tips.
          </p>
        </div>

        {/* Main 2-Column Calculator Container */}
        <div className="max-w-5xl mx-auto bg-[#FAF6F0] rounded-3xl border border-[#E8DACD] shadow-xl overflow-hidden">
          
          {!result ? (
            /* Input Form View */
            <div className="p-6 sm:p-10 lg:p-12">
              <form onSubmit={calculateHoroscope} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] uppercase tracking-wider mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ankit Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8C7B8] rounded-xl text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820]"
                    />
                  </div>

                  {/* Career Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] uppercase tracking-wider mb-2">
                      Current Career Domain
                    </label>
                    <select
                      value={currentField}
                      onChange={(e) => setCurrentField(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8C7B8] rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820] cursor-pointer"
                    >
                      <option value="tech">IT, Software, AI &amp; Engineering</option>
                      <option value="finance">Banking, Finance &amp; Wealth Advisory</option>
                      <option value="govt">Govt Jobs, Civil Services &amp; PSUs</option>
                      <option value="business">Startup, Business &amp; Self-Employed</option>
                      <option value="corporate">Corporate Management, Sales &amp; HR</option>
                      <option value="creative">Design, Media, Arts &amp; Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Date of Birth */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#854820]" /> Date of Birth <span className="text-[#854820]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8C7B8] rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820]"
                    />
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#854820]" /> Time of Birth (Approx)
                    </label>
                    <input
                      type="time"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8C7B8] rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#854820]"
                    />
                  </div>

                  {/* Place of Birth */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#854820]" /> Place of Birth / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New Delhi, Pune, Dubai"
                      value={birthPlace}
                      onChange={(e) => setBirthPlace(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8C7B8] rounded-xl text-sm text-[#2C1E16] placeholder-[#8A7A70] focus:outline-none focus:ring-2 focus:ring-[#854820]"
                    />
                  </div>
                </div>

                {/* Calculate CTA Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#7A6B62] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#854820]" />
                    <span>Instant personalized calculation based on Vedic astrological coordinates</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isCalculating}
                    id="calc-submit-btn"
                    className="w-full sm:w-auto px-8 py-4 bg-[#854820] hover:bg-[#663312] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#A85A1D]"
                  >
                    {isCalculating ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Calculating Astrological Coordinates...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#E5B869]" />
                        <span>Calculate Career Horoscope</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Results View */
            <div className="p-6 sm:p-10 lg:p-12 space-y-8 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Top Result Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8DACD]">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#854820] text-white text-xs font-bold mb-2">
                    <Award className="w-3.5 h-3.5 text-[#E5B869]" />
                    <span>Career Blueprint for {name || 'Seeker'}</span>
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2C1E16]">
                    {result.rashi} <span className="text-[#854820]">({result.sanskritRashi})</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D4E45] font-medium mt-1">
                    Ruling Career Planet: <strong className="text-[#854820]">{result.rulingPlanet}</strong> | Element: <strong>{result.element}</strong>
                  </p>
                </div>

                {/* Score badge */}
                <div className="bg-white p-4 rounded-2xl border border-[#E8DACD] flex items-center gap-4 shadow-sm self-start md:self-auto">
                  <div className="w-12 h-12 rounded-xl bg-[#854820] text-white flex items-center justify-center font-serif font-bold text-xl">
                    {result.score}%
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#854820] uppercase">10th House Potency</div>
                    <div className="text-xs text-[#2C1E16] font-semibold">High Professional Growth Potential</div>
                  </div>
                </div>
              </div>

              {/* 3 Core Result Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Card 1: Archetype & Strength */}
                <div className="bg-white rounded-2xl p-5 border border-[#E8DACD] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] text-[#854820] flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#2C1E16]">Professional Archetype</h4>
                  <p className="text-xs font-semibold text-[#854820] bg-[#FAF6F0] p-2 rounded-lg border border-[#E8DACD]">
                    {result.archetype}
                  </p>
                  <p className="text-xs text-[#5D4E45] leading-relaxed">
                    <strong>Core Asset:</strong> {result.keyStrength}
                  </p>
                </div>

                {/* Card 2: Ideal Career Paths */}
                <div className="bg-white rounded-2xl p-5 border border-[#E8DACD] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] text-[#854820] flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#2C1E16]">Top Industry Alignments</h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {result.suitableIndustries.map((ind, i) => (
                      <span key={i} className="text-[11px] font-semibold bg-[#FAF6F0] text-[#854820] px-2 py-1 rounded-md border border-[#E8DACD]">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 3: Astrological Timing Window */}
                <div className="bg-white rounded-2xl p-5 border border-[#E8DACD] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] text-[#854820] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#2C1E16]">Favorable Career Timing</h4>
                  <p className="text-xs text-[#2C1E16] bg-[#FAF6F0] p-2 rounded-lg border border-[#E8DACD] font-medium">
                    {result.timingWindow}
                  </p>
                  <p className="text-[11px] text-[#7A6B62]">
                    * Exact months require deep D10 Dashamsha &amp; Vimshottari Mahadasha cross-checking.
                  </p>
                </div>

              </div>

              {/* Personalized Tip Box */}
              <div className="p-6 bg-gradient-to-r from-[#FAF6F0] via-white to-[#FAF6F0] rounded-2xl border border-[#E8DACD] space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#854820] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C68A2C]" />
                  <span>Personalized 2025–2026 Growth Strategy Tip</span>
                </div>
                <p className="text-sm sm:text-base text-[#2C1E16] leading-relaxed font-medium">
                  {result.careerGrowthTip}
                </p>
                <div className="pt-2 flex items-start gap-2 text-xs text-[#7A6B62] border-t border-[#E8DACD]">
                  <span className="font-bold text-[#854820] shrink-0">Watch Out:</span>
                  <span>{result.avoidPitfall}</span>
                </div>
              </div>

              {/* Quick Astrological Alignments (Gemstone, Day, Color, Remedy) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3.5 rounded-xl border border-[#E8DACD]">
                  <div className="text-[10px] font-bold text-[#7A6B62] uppercase">Favorable Day</div>
                  <div className="text-xs font-bold text-[#854820] mt-0.5">{result.favorableDay}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E8DACD]">
                  <div className="text-[10px] font-bold text-[#7A6B62] uppercase">Favorable Colors</div>
                  <div className="text-xs font-bold text-[#854820] mt-0.5">{result.favorableColor}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E8DACD]">
                  <div className="text-[10px] font-bold text-[#7A6B62] uppercase">Supportive Gem</div>
                  <div className="text-xs font-bold text-[#854820] mt-0.5">{result.suggestedGemstone}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E8DACD]">
                  <div className="text-[10px] font-bold text-[#7A6B62] uppercase">Daily Micro-Remedy</div>
                  <div className="text-[11px] font-medium text-[#2C1E16] mt-0.5 line-clamp-2">{result.dailyMicroRemedy}</div>
                </div>
              </div>

              {/* Next Step / Consultation Conversion Banner */}
              <div className="bg-[#854820] text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="space-y-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[#E5B869] text-[11px] font-semibold">
                    <Sparkles className="w-3 h-3" /> Go Beyond General Tips
                  </div>
                  <h4 className="font-serif-heading text-xl sm:text-2xl font-bold">
                    Need a Full 1-on-1 Kundli &amp; D10 Chart Reading?
                  </h4>
                  <p className="text-xs text-[#F2DFCE] max-w-xl">
                    Acharya Hanish Bagga will examine your exact degree placements, Mahadasha, and current transit obstacles in a private 45-min video call.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 bg-white text-[#854820] hover:bg-[#FAF6F0] font-bold text-xs sm:text-sm rounded-xl transition-all shadow cursor-pointer text-center"
                  >
                    Book Full Chart Reading
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-4 py-3 bg-black/20 hover:bg-black/30 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recalculate</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
