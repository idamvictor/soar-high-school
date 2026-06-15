import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const Icon: Record<string, React.FC<Partial<IconProps>>> = {
  crest: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
      <path d="M9 11 L11 13 L15 9" />
    </svg>
  ),

  book: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5 C4 4 5 3 6 3 H11 V20 H6 C5 20 4 19 4 18 Z" />
      <path d="M20 5 C20 4 19 3 18 3 H13 V20 H18 C19 20 20 19 20 18 Z" />
    </svg>
  ),

  shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 L20 5 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V5 Z" />
    </svg>
  ),

  bulb: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18 H15" />
      <path d="M10 21 H14" />
      <path d="M12 3 C8 3 6 6 6 9 C6 11 7 12.5 9 14 V17 H15 V14 C17 12.5 18 11 18 9 C18 6 16 3 12 3 Z" />
    </svg>
  ),

  globe: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12 H21 M12 3 C15 7 15 17 12 21 M12 3 C9 7 9 17 12 21" />
    </svg>
  ),

  trophy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 4 H16 V11 C16 13 14 15 12 15 C10 15 8 13 8 11 Z" />
      <path d="M8 6 H5 C5 9 6 11 8 11 M16 6 H19 C19 9 18 11 16 11" />
      <path d="M10 19 H14 M12 15 V19 M9 21 H15" />
    </svg>
  ),

  play: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 4 L20 12 L7 20 Z" />
    </svg>
  ),

  star: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2 L14.9 8.5 L22 9.3 L16.7 14.1 L18.2 21 L12 17.4 L5.8 21 L7.3 14.1 L2 9.3 L9.1 8.5 Z" />
    </svg>
  ),

  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12 L10 17 L20 6" />
    </svg>
  ),

  arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12 H19 M13 6 L19 12 L13 18" />
    </svg>
  ),

  chevDown: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9 L12 15 L18 9" />
    </svg>
  ),

  pin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22 C12 22 19 14 19 9 C19 5 16 2 12 2 C8 2 5 5 5 9 C5 14 12 22 12 22 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),

  phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 3 H9 L11 8 L8 10 C9.5 13 11 14.5 14 16 L16 13 L21 15 V19 C21 20 20 21 19 21 C10 21 3 14 3 5 C3 4 4 3 5 3 Z" />
    </svg>
  ),

  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  ),

  clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15 14" />
    </svg>
  ),

  compass: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9 L13 13 L9 15 L11 11 Z" />
    </svg>
  ),

  eye: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12 C5 6 8 4 12 4 C16 4 19 6 22 12 C19 18 16 20 12 20 C8 20 5 18 2 12 Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),

  heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21 C7 17 3 14 3 9 C3 6 5 4 8 4 C10 4 11 5 12 7 C13 5 14 4 16 4 C19 4 21 6 21 9 C21 14 17 17 12 21 Z" />
    </svg>
  ),

  flag: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 21 V4 L13 4 L12 8 L19 8 L18 14 L5 14" />
    </svg>
  ),

  hands: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 12 V8 C6 7 7 6 8 6 C9 6 10 7 10 8 V12" />
      <path d="M14 12 V8 C14 7 15 6 16 6 C17 6 18 7 18 8 V12" />
      <path d="M4 12 H20 V16 C20 19 17 21 14 21 H10 C7 21 4 19 4 16 Z" />
    </svg>
  ),

  gear: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2 V5 M12 19 V22 M2 12 H5 M19 12 H22 M5 5 L7 7 M17 17 L19 19 M5 19 L7 17 M17 7 L19 5" />
    </svg>
  ),

  graduation: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 8 L12 4 L22 8 L12 12 Z" />
      <path d="M6 10 V15 C8 17 11 18 12 18 C13 18 16 17 18 15 V10" />
      <path d="M22 8 V14" />
    </svg>
  ),

  baby: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 9 H9.5 M14.5 9 H15" />
      <path d="M10 12 C11 13 13 13 14 12" />
      <path d="M7 19 L9 17 L12 19 L15 17 L17 19" />
    </svg>
  ),

  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 22V12h3l1-4h-4V6c0-1 .5-2 2-2h2V0h-3c-3 0-5 2-5 5v3H6v4h3v10z" />
    </svg>
  ),

  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),

  twitter: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L3 3h6l4 5z" />
    </svg>
  ),

  youtube: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M10 9 L16 12 L10 15 Z" fill="currentColor" />
    </svg>
  ),

  quote: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 11 C3 7 5 5 9 4 V7 C7 7 6 8 6 10 H9 V18 H3 Z" />
      <path d="M13 11 C13 7 15 5 19 4 V7 C17 7 16 8 16 10 H19 V18 H13 Z" />
    </svg>
  ),

  close: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 L6 18 M6 6 L18 18" />
    </svg>
  ),

  download: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 V15 M7 11 L12 16 L17 11 M5 20 H19" />
    </svg>
  ),

  calendar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10 H21 M8 3 V7 M16 3 V7" />
    </svg>
  ),

  formIcon: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8 H16 M8 12 H16 M8 16 H12" />
    </svg>
  ),

  ball: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 L15 9 L12 14 L9 9 Z M15 9 L21 11 M9 9 L3 11 M12 14 L7 20 M12 14 L17 20" />
    </svg>
  ),

  paint: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 C7 3 3 7 3 12 C3 14 4 15 6 15 H8 C8.5 15 9 15.5 9 16 V18 C9 20 10 21 12 21 C17 21 21 17 21 12 C21 7 17 3 12 3 Z" />
      <circle cx="7" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
    </svg>
  ),

  mic: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11 C5 15 8 18 12 18 C16 18 19 15 19 11 M12 18 V22 M8 22 H16" />
    </svg>
  ),

  code: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 7 L3 12 L8 17 M16 7 L21 12 L16 17 M14 5 L10 19" />
    </svg>
  ),

  music: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18 V6 L19 4 V16" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  ),

  camera: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7 L10 4 H14 L16 7" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  ),

  briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7 V5 C9 4 10 3 11 3 H13 C14 3 15 4 15 5 V7" />
    </svg>
  ),

  pen: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 4 L20 10 L9 21 H3 V15 Z M13 5 L19 11" />
    </svg>
  ),

  drama: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5 H12 V12 C12 15 10 17 8 17 C6 17 4 15 4 12 Z M8 9 H8.1 M10 9 H10.1 M6 13 C7 14 8 14 9 13" />
      <path d="M12 5 H20 V12 C20 15 18 17 16 17 C14 17 12 15 12 12" />
    </svg>
  ),

  basketball: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12 H21 M12 3 V21 M5 6 C8 9 8 15 5 18 M19 6 C16 9 16 15 19 18" />
    </svg>
  ),

  tennis: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="7" rx="6" ry="3" />
      <path d="M12 10 V21 M9 21 H15" />
    </svg>
  ),
};
