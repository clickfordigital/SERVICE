import React, { useState } from 'react';
import { 
  Play, 
  Youtube, 
  Eye, 
  Clock, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Phone, 
  Tv, 
  X,
  Radio,
  TrendingUp,
  Compass
} from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../data/careerAstrologyData';
import { YouTubeVideo } from '../types';
import { useVedicTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface YouTubeVideoSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const { currentTheme, astrologicalMotifsEnabled } = useVedicTheme();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo>(YOUTUBE_VIDEOS[0]);
  const [isPlayingModal, setIsPlayingModal] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<YouTubeVideo | null>(null);

  const categories = [
    { id: 'all', label: 'All Masterclasses' },
    { id: 'job-timing', label: 'Job Change Timing' },
    { id: 'govt-job', label: 'Govt & Civil Services' },
    { id: 'business', label: 'Business vs Job' },
    { id: 'promotion', label: 'Saturn & Promotions' },
    { id: 'remedies', label: 'Workplace Remedies' },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? YOUTUBE_VIDEOS 
    : YOUTUBE_VIDEOS.filter(v => v.category === selectedCategory);

  const handlePlayVideo = (video: YouTubeVideo) => {
    setModalVideo(video);
    setIsPlayingModal(true);
  };

  return (
    <section 
      id="videos" 
      className="py-16 sm:py-24 border-b relative overflow-hidden transition-colors duration-500"
      style={{ 
        backgroundColor: currentTheme.bgCream,
        borderColor: currentTheme.cardBorder 
      }}
    >
      {/* Astrological motifs background watermarks */}
      {astrologicalMotifsEnabled && (
        <>
          <div className="absolute -top-10 -right-10 w-96 h-96 pointer-events-none opacity-5">
            <svg viewBox="0 0 300 300" className="w-full h-full text-[#854820]">
              <circle cx="150" cy="150" r="130" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <polygon points="150,30 270,240 30,240" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              style={{ 
                backgroundColor: currentTheme.primaryLight,
                borderColor: currentTheme.cardBorder,
                color: currentTheme.primary
              }}
            >
              <Youtube className="w-4 h-4 text-[#FF0000] fill-[#FF0000]" />
              <span>Free Vedic Career Masterclasses</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E16] tracking-tight">
              Watch Career Astrology Video Guides &amp; Insights
            </h2>
            <p className="text-base text-[#5D4E45]">
              Real astrological case studies, 10th house planetary combinations, job switch timings, and remedies explained by Acharya Hanish Bagga.
            </p>
          </div>

          {/* YouTube Channel Stats Badge */}
          <div className="bg-white p-4 rounded-2xl border border-[#E8DACD] flex items-center gap-5 self-start md:self-auto shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-md shrink-0">
                <Youtube className="w-7 h-7 fill-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#854820] uppercase tracking-wide">Acharya Ganesh</div>
                <div className="text-lg font-bold text-[#2C1E16]">155K+ Subscribers</div>
                <div className="text-[11px] text-[#7A6B62]">10M+ Career Video Views</div>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@AcharyaGanesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] hover:bg-[#D90000] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Subscribe</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'text-white shadow-md'
                  : 'bg-white text-[#5D4E45] border-[#E8DACD] hover:border-[#854820]/40'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.id ? currentTheme.primary : undefined,
                borderColor: selectedCategory === cat.id ? currentTheme.primary : undefined
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Video + Video Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Large Video Player Preview (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-[#E8DACD] shadow-md space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black group cursor-pointer" onClick={() => handlePlayVideo(activeVideo)}>
              <img
                src={activeVideo.thumbnailUrl}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FF0000] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Radio className="w-3 h-3 animate-pulse" /> Featured Masterclass
                </span>
              </div>

              <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/75 text-white text-xs font-semibold backdrop-blur-xs">
                {activeVideo.duration}
              </div>
            </div>

            {/* Video Details */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#7A6B62]">
                <span className="flex items-center gap-1 font-semibold text-[#854820]">
                  <Eye className="w-3.5 h-3.5" /> {activeVideo.views} views
                </span>
                <span>•</span>
                <span>Astrology Analysis by Acharya Hanish Bagga</span>
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#2C1E16]">
                {activeVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5D4E45] leading-relaxed">
                {activeVideo.description}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DACD] space-y-2">
              <span className="text-xs font-bold text-[#854820] uppercase tracking-wider block">
                Key Astrological Concepts Explained:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3D2314]">
                {(activeVideo.topics || []).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#854820] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation CTA below video */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8DACD]">
              <div className="text-xs text-[#5D4E45]">
                Want your personal horoscope analyzed like this?
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span>Book 1-on-1 Session</span>
              </button>
            </div>
          </div>

          {/* Video Playlist Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h4 className="text-xs font-bold text-[#854820] uppercase tracking-wider mb-2">
              Recommended Masterclasses ({filteredVideos.length})
            </h4>

            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {filteredVideos.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3.5 group ${
                      isSelected
                        ? 'bg-white shadow-md ring-2'
                        : 'bg-white/70 hover:bg-white border-[#E8DACD] hover:shadow-xs'
                    }`}
                    style={{
                      borderColor: isSelected ? currentTheme.primary : undefined
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="w-28 sm:w-32 aspect-video rounded-xl overflow-hidden bg-black shrink-0 relative">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center">
                        <Play className="w-5 h-5 fill-white text-white drop-shadow-md" />
                      </div>
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-white text-[9px] rounded font-semibold">
                        {video.duration}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <h5 className="text-xs sm:text-sm font-bold text-[#2C1E16] group-hover:text-[#854820] transition-colors line-clamp-2 leading-snug">
                        {video.title}
                      </h5>
                      <div className="flex items-center gap-2 text-[10px] text-[#7A6B62] mt-1">
                        <span>{video.views} views</span>
                        <span>•</span>
                        <span className="text-[#854820] font-semibold">Watch Now</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlayingModal && modalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlayingModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPlayingModal(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${modalVideo.youtubeId}?autoplay=1`}
                  title={modalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-5 bg-[#1F2937] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif-heading text-lg font-bold">{modalVideo.title}</h4>
                  <p className="text-xs text-gray-300">Acharya Ganesh Vedic Astrology Series</p>
                </div>
                <button
                  onClick={() => {
                    setIsPlayingModal(false);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#854820] text-white text-xs font-bold hover:bg-[#663312] transition-colors cursor-pointer"
                >
                  Book Private Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
