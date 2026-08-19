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
  TrendingUp
} from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../data/careerAstrologyData';
import { YouTubeVideo } from '../types';

interface YouTubeVideoSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo>(YOUTUBE_VIDEOS[0]);
  const [isPlayingModal, setIsPlayingModal] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<YouTubeVideo | null>(null);

  const categories = [
    { id: 'all', label: 'All Videos' },
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
    <section id="youtube-videos" className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#EADBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] border border-[#F5D5C0] text-[#854820] text-xs font-bold uppercase tracking-wider">
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
                <div className="text-lg font-bold text-[#2C1E16]">500K+ Subscribers</div>
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
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#854820] text-white shadow-md'
                  : 'bg-white text-[#5D4E45] border border-[#E8DACD] hover:bg-[#F5EBE1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main 2-Column Grid: Large Featured Video Thumbnail + Video Playlist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Video Showcase (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-[#E8DACD] shadow-md space-y-4">
            
            {/* High-Resolution Dynamic Thumbnail */}
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-md"
              onClick={() => handlePlayVideo(activeVideo)}
            >
              {/* Background Thumbnail Image with subtle zoom on hover */}
              <img 
                src={activeVideo.thumbnailUrl} 
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />

              {/* Dark Gradient Overlay for Maximum Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30"></div>
              
              {/* Top Banner Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FF0000] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  <Youtube className="w-3.5 h-3.5 fill-white" /> Masterclass
                </span>
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-[#E5B869] text-[11px] font-bold border border-white/20">
                  {activeVideo.highlight}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#E60000] transition-all duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Thumbnail Overlay Typography */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 bg-gradient-to-t from-black/90 to-transparent">
                {activeVideo.hindiHeadline && (
                  <div className="inline-block bg-[#E5B869] text-[#2C1E16] font-bold text-xs sm:text-sm px-2.5 py-0.5 rounded mb-1.5 shadow-sm">
                    {activeVideo.hindiHeadline}
                  </div>
                )}
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white leading-tight drop-shadow">
                  {activeVideo.title}
                </h3>
                
                {/* Meta stats bar */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15 text-[11px] text-[#F2DFCE]">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#E5B869]" /> {activeVideo.views}
                  </span>
                  <span className="flex items-center gap-1 font-mono bg-black/60 px-2 py-0.5 rounded text-white border border-white/10">
                    <Clock className="w-3 h-3 text-[#E5B869]" /> {activeVideo.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Video Description & Direct Booking Card */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {activeVideo.topics.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-semibold bg-[#FAF6F0] text-[#854820] px-2.5 py-0.5 rounded-full border border-[#E8DACD]">
                    #{t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[#5D4E45] leading-relaxed">
                {activeVideo.description}
              </p>

              {/* Call to action within featured video box */}
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DACD] flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#854820] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5 text-[#E5B869]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2C1E16]">Want this applied to your own Kundli?</div>
                    <div className="text-[11px] text-[#7A6B62]">Acharya ji calculates exact job timing from your date of birth.</div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#854820] hover:bg-[#663312] text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Book 1-on-1 Analysis
                </button>
              </div>

            </div>
          </div>

          {/* Playlist & Video Thumbnails List (5 Columns) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8DACD]">
              <span className="text-xs font-bold text-[#854820] uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#C68A2C]" />
                All Video Episodes ({filteredVideos.length})
              </span>
              <span className="text-[11px] text-[#7A6B62]">
                Click to Watch
              </span>
            </div>

            <div className="space-y-3 max-h-[660px] overflow-y-auto pr-1">
              {filteredVideos.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3.5 items-start ${
                      isSelected
                        ? 'bg-[#F5EBE1] border-[#854820] shadow-sm'
                        : 'bg-white border-[#E8DACD] hover:bg-[#FAF6F0] hover:border-[#D4C3B5]'
                    }`}
                  >
                    {/* Visual Video Thumbnail with play icon */}
                    <div className="w-28 sm:w-32 aspect-video rounded-xl bg-black shrink-0 relative overflow-hidden group/thumb shadow-xs">
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover brightness-85 group-hover/thumb:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow">
                          <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-mono px-1 py-0.5 rounded text-white font-semibold">
                        {video.duration}
                      </span>
                    </div>

                    {/* Metadata & Headline */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-[#854820] uppercase truncate">
                          {video.highlight}
                        </span>
                        <span className="text-[10px] text-[#7A6B62] shrink-0">
                          {video.views}
                        </span>
                      </div>

                      {video.hindiHeadline && (
                        <div className="text-[11px] font-bold text-[#854820] line-clamp-1">
                          {video.hindiHeadline}
                        </div>
                      )}

                      <h4 className="text-xs font-semibold text-[#2C1E16] line-clamp-2 leading-snug">
                        {video.title}
                      </h4>

                      <div className="flex items-center gap-2 pt-0.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayVideo(video);
                          }}
                          className="text-[11px] font-bold text-[#FF0000] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-[#FF0000]" /> Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subscribe Banner Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2C1E16] to-[#5C2B0E] text-white flex items-center justify-between gap-4 shadow-sm">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[#E5B869] flex items-center gap-1">
                  <Tv className="w-3.5 h-3.5" /> Official YouTube Channel
                </div>
                <div className="text-[11px] text-[#D8C7B8]">
                  Watch 1,000+ free predictive Vedic lessons.
                </div>
              </div>
              <a
                href="https://www.youtube.com/@AcharyaGanesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#FF0000] hover:bg-[#D90000] text-white text-xs font-bold rounded-lg shrink-0 transition-colors shadow"
              >
                Subscribe
              </a>
            </div>

          </div>

        </div>

        {/* Media & TV Features Bar */}
        <div className="mt-14 pt-8 border-t border-[#E8DACD]">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-[#854820] uppercase tracking-wider">
              As Seen On National Television &amp; Leading Media Platforms
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all">
            {['Zee News', 'India TV', 'Aaj Tak', 'News18 India', 'ABP News'].map((channel, i) => (
              <div key={i} className="flex items-center gap-2 font-serif font-bold text-sm sm:text-base text-[#4A3528]">
                <div className="w-2 h-2 rounded-full bg-[#854820]"></div>
                <span>{channel}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {isPlayingModal && modalVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A0F09] rounded-2xl max-w-3xl w-full border border-white/20 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#2C1E16] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-[#FF0000] fill-[#FF0000]" />
                <span className="font-bold text-sm truncate max-w-md">
                  {modalVideo.title}
                </span>
              </div>
              <button 
                onClick={() => setIsPlayingModal(false)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Box / Embed */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Footer with Direct Consultation Booking */}
            <div className="p-4 bg-[#2C1E16] flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div className="text-xs text-[#E5B869] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Need Acharya Hanish Bagga to examine your horoscope?</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setIsPlayingModal(false);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-[#854820] hover:bg-[#A85A1D] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Book 1-on-1 Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
