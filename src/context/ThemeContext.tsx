import React, { createContext, useContext, useState, useEffect } from 'react';

export type VedicThemeId = 'terracotta-gold' | 'royal-sandalwood' | 'celestial-midnight' | 'mystic-ruby' | 'panna-emerald';

export interface VedicTheme {
  id: VedicThemeId;
  name: string;
  sanskritName: string;
  tagline: string;
  primary: string;       // Main brand color (e.g. #854820)
  primaryDark: string;   // Hover / deep color (e.g. #5C2E11)
  primaryLight: string;  // Light tint for badges (e.g. #F5EBE1)
  accentGold: string;    // Accent gold/ochre (e.g. #C68A2C)
  accentGlow: string;    // Glow / shadow tint
  bgCream: string;       // Canvas background (e.g. #FAF6F0)
  cardBg: string;        // Card background (e.g. #FFFFFF)
  cardBorder: string;    // Border color (e.g. #EBDCD0)
  textDark: string;      // Main heading color (e.g. #3D2314)
  textMuted: string;     // Subtext color (e.g. #6B5B52)
  gradientHero: string;  // Hero gradient style
  heroTextColor: string;
}

export const VEDIC_THEMES: Record<VedicThemeId, VedicTheme> = {
  'terracotta-gold': {
    id: 'terracotta-gold',
    name: 'Sacred Terracotta & Surya Gold',
    sanskritName: 'Surya Tamra (सूर्य ताम्र)',
    tagline: 'Signature Acharya Ganesh Vedic Palette',
    primary: '#854820',
    primaryDark: '#5C2E11',
    primaryLight: '#F5EBE1',
    accentGold: '#C68A2C',
    accentGlow: 'rgba(133, 72, 32, 0.25)',
    bgCream: '#FAF6F0',
    cardBg: '#FFFFFF',
    cardBorder: '#EBDCD0',
    textDark: '#3D2314',
    textMuted: '#6B5B52',
    gradientHero: 'linear-gradient(135deg, #5C2E11 0%, #854820 40%, #9D5629 80%, #5E2A0E 100%)',
    heroTextColor: '#FFFFFF'
  },
  'royal-sandalwood': {
    id: 'royal-sandalwood',
    name: 'Royal Sandalwood & Kesari Ochre',
    sanskritName: 'Chandan Kesar (चन्दन केसर)',
    tagline: 'Warm Classical Gurukul Temple Theme',
    primary: '#9A3412',
    primaryDark: '#7C2D12',
    primaryLight: '#FEF3C7',
    accentGold: '#D97706',
    accentGlow: 'rgba(154, 52, 18, 0.25)',
    bgCream: '#FFFBEB',
    cardBg: '#FFFFFF',
    cardBorder: '#FDE68A',
    textDark: '#451A03',
    textMuted: '#78350F',
    gradientHero: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 40%, #B45309 80%, #451A03 100%)',
    heroTextColor: '#FFFFFF'
  },
  'celestial-midnight': {
    id: 'celestial-midnight',
    name: 'Celestial Midnight & Cosmic Copper',
    sanskritName: 'Nakshtra Nila (नक्षत्र नील)',
    tagline: 'Deep Planetary Night & Golden Constellations',
    primary: '#1E293B',
    primaryDark: '#0F172A',
    primaryLight: '#E2E8F0',
    accentGold: '#EAB308',
    accentGlow: 'rgba(30, 41, 59, 0.35)',
    bgCream: '#F8FAFC',
    cardBg: '#FFFFFF',
    cardBorder: '#CBD5E1',
    textDark: '#0F172A',
    textMuted: '#475569',
    gradientHero: 'linear-gradient(135deg, #0F172A 0%, #1E293B 45%, #334155 80%, #020617 100%)',
    heroTextColor: '#FFFFFF'
  },
  'mystic-ruby': {
    id: 'mystic-ruby',
    name: 'Mystic Vedic Ruby & Surya Amber',
    sanskritName: 'Manikya Rakta (माणिक्य रक्त)',
    tagline: 'Empowering Sun-Stone Leadership Palette',
    primary: '#881337',
    primaryDark: '#4C0519',
    primaryLight: '#FFE4E6',
    accentGold: '#F59E0B',
    accentGlow: 'rgba(136, 19, 55, 0.28)',
    bgCream: '#FFF1F2',
    cardBg: '#FFFFFF',
    cardBorder: '#FECDD3',
    textDark: '#4C0519',
    textMuted: '#881337',
    gradientHero: 'linear-gradient(135deg, #4C0519 0%, #881337 40%, #9F1239 80%, #29030E 100%)',
    heroTextColor: '#FFFFFF'
  },
  'panna-emerald': {
    id: 'panna-emerald',
    name: 'Sacred Emerald (Budha) & Gold',
    sanskritName: 'Panna Harita (पन्ना हरित)',
    tagline: 'Mercury Intellect, Wealth & Career Growth',
    primary: '#065F46',
    primaryDark: '#064E3B',
    primaryLight: '#D1FAE5',
    accentGold: '#CA8A04',
    accentGlow: 'rgba(6, 95, 70, 0.25)',
    bgCream: '#F0FDF4',
    cardBg: '#FFFFFF',
    cardBorder: '#A7F3D0',
    textDark: '#064E3B',
    textMuted: '#047857',
    gradientHero: 'linear-gradient(135deg, #064E3B 0%, #065F46 45%, #047857 80%, #022C22 100%)',
    heroTextColor: '#FFFFFF'
  }
};

interface ThemeContextType {
  currentTheme: VedicTheme;
  themeId: VedicThemeId;
  setTheme: (id: VedicThemeId) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  astrologicalMotifsEnabled: boolean;
  setAstrologicalMotifsEnabled: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<VedicThemeId>('terracotta-gold');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [astrologicalMotifsEnabled, setAstrologicalMotifsEnabled] = useState(true);

  // Load persisted theme
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('acharya_vedic_theme') as VedicThemeId;
      if (savedTheme && VEDIC_THEMES[savedTheme]) {
        setThemeId(savedTheme);
      }
      const savedMotifs = localStorage.getItem('acharya_vedic_motifs');
      if (savedMotifs !== null) {
        setAstrologicalMotifsEnabled(savedMotifs === 'true');
      }
    } catch {
      // ignore
    }
  }, []);

  const setTheme = (id: VedicThemeId) => {
    setThemeId(id);
    try {
      localStorage.setItem('acharya_vedic_theme', id);
    } catch {
      // ignore
    }
  };

  const currentTheme = VEDIC_THEMES[themeId] || VEDIC_THEMES['terracotta-gold'];

  // Apply CSS custom properties dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-terracotta-primary', currentTheme.primary);
    root.style.setProperty('--color-terracotta-dark', currentTheme.primaryDark);
    root.style.setProperty('--color-terracotta-light', currentTheme.primaryLight);
    root.style.setProperty('--color-cream-bg', currentTheme.bgCream);
    root.style.setProperty('--color-cream-card', currentTheme.primaryLight);
    root.style.setProperty('--color-gold', currentTheme.accentGold);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeId,
        setTheme,
        isCustomizerOpen,
        setIsCustomizerOpen,
        astrologicalMotifsEnabled,
        setAstrologicalMotifsEnabled: (val) => {
          setAstrologicalMotifsEnabled(val);
          try {
            localStorage.setItem('acharya_vedic_motifs', String(val));
          } catch {}
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useVedicTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useVedicTheme must be used within a ThemeProvider');
  }
  return context;
};
