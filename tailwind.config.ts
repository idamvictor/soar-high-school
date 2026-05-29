import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'nav': '1100px',
      },
      colors: {
        navy: '#0a2463',
        'navy-dark': '#061640',
        'navy-light': '#1a3a8a',
        'navy-tint': '#e8edf7',
        gold: '#c9a84c',
        'gold-soft': '#d9bd6c',
        'gold-deep': '#a88932',
        'warm-white': '#f5f3ee',
        'text-dark': '#1a1a2e',
        'text-muted': '#5a5a72',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(10, 36, 99, 0.06)',
        md: '0 8px 24px rgba(10, 36, 99, 0.10)',
        lg: '0 20px 50px rgba(10, 36, 99, 0.18)',
      },
      maxWidth: {
        container: '1240px',
      },
      padding: {
        'pad-x': 'clamp(20px, 5vw, 80px)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slowZoom: {
          from: { transform: 'scale(1.0)' },
          to: { transform: 'scale(1.08)' },
        },
        sweepIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        statRise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { width: '0' },
          to: { width: '64px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spinBack: {
          '0%': { transform: 'rotate(0)' },
          '50%': { transform: 'rotate(-12deg) scale(1.1)' },
          '100%': { transform: 'rotate(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        tourProgress: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        ringSpin: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        captionRise: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeRoute: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        drift: 'drift 4s ease-in-out infinite',
        slowZoom: 'slowZoom 18s ease-out forwards',
        sweepIn: 'sweepIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        statRise: 'statRise 0.8s ease both',
        drawLine: 'drawLine 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both',
        shimmer: 'shimmer 4s ease-in-out infinite',
        spinBack: 'spinBack 0.6s ease',
        twinkle: 'twinkle 2.4s ease infinite',
        tourProgress: 'tourProgress 4.2s linear forwards',
        ringSpin: 'ringSpin 3s linear infinite',
        fadeUp: 'fadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 0.3s ease both',
        captionRise: 'captionRise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeRoute: 'fadeRoute 0.5s ease both',
        bounce: 'bounce 2s ease infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'in',
    'reveal',
    'reveal.in',
    'tall',
    'wide',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'row-span-2',
    'col-span-2',
  ],
} satisfies Config;
