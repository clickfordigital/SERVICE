import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useVedicTheme } from '../context/ThemeContext';

interface StickyBottomCtaProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const { currentTheme } = useVedicTheme();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DACD] p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenWhatsApp}
          id="sticky-whatsapp-btn"
          className="w-full py-2.5 px-3 bg-[#25D366] active:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Now</span>
        </button>

        <button
          onClick={onOpenBooking}
          id="sticky-book-btn"
          className="w-full py-2.5 px-3 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          style={{ backgroundColor: currentTheme.primary }}
        >
          <Phone className="w-4 h-4" />
          <span>Book Session</span>
        </button>
      </div>
    </div>
  );
};
