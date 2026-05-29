import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { MEDIA } from '../data/media';

interface ImgProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Img: React.FC<ImgProps> = ({ src, alt, label, className = '', style }) => {
  const [errored, setErrored] = useState<boolean>(false);

  if (errored || !src) {
    return (
      <div
        className={`img-placeholder ${className}`}
        data-label={label || alt || 'image'}
        style={style}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={`real-img ${className}`}
      style={style}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  [key: string]: any;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as = 'div',
  className = '',
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

interface StaggerProps {
  children: ReactNode[];
  step?: number;
  base?: number;
  className?: string;
}

export const Stagger: React.FC<StaggerProps> = ({ children, step = 90, base = 0, className = '' }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <Reveal delay={base + i * step}>{child}</Reveal>
      ))}
    </div>
  );
};

interface SlidingHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
  navigate?: (page: string) => void;
  images?: string[];
  interval?: number;
  children?: ReactNode;
}

export const SlidingHero: React.FC<SlidingHeroProps> = ({
  title,
  subtitle,
  breadcrumb,
  navigate,
  images = [],
  interval = 5000,
  children,
}) => {
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images, interval]);

  return (
    <section className="relative pt-32 pb-20 px-[--pad-x] overflow-hidden isolate before:absolute before:inset-0 before:bg-gradient-to-b before:from-navy/40 before:to-navy-dark/85 before:pointer-events-none before:z-10">
      {/* Background slides */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 opacity-0 transform scale-108 transition-all duration-[1.4s] ease-out ${
              idx === i ? 'opacity-100 scale-100' : ''
            }`}
          >
            <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/35 to-navy-dark/75 radial-gradient pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-4">{title}</h1>
        <div className="text-xl md:text-2xl text-gold mb-6">{subtitle}</div>
        {breadcrumb && (
          <div className="text-sm text-white/70 mb-6">
            <a
              href="#home"
              className="text-gold hover:text-gold-soft transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigate?.('home');
              }}
            >
              Home
            </a>
            {' › '}
            {breadcrumb}
          </div>
        )}
        {children}
        {images && images.length > 1 && (
          <div className="flex gap-2.5 justify-center mt-9">
            {images.map((_, i) => (
              <button
                key={i}
                className={`transition-all duration-300 rounded-sm h-0.75 ${
                  idx === i
                    ? 'bg-gold w-12'
                    : 'bg-white/30 w-7 hover:bg-white/60'
                }`}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface VirtualTourModalProps {
  open: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ open, onClose }) => {
  const tour = [
    { src: MEDIA.schoolBuilding, title: 'Main Campus', caption: '12 Independence Layout, Enugu — our home since 2010.' },
    { src: MEDIA.classroomPrimary, title: 'Primary Classroom', caption: 'Small classes, large windows, deep learning.' },
    { src: MEDIA.classroomSecondary, title: 'Senior Classroom', caption: 'Where WAEC, NECO and university futures are shaped.' },
    { src: MEDIA.library, title: 'School Library', caption: 'Over 18,000 volumes and quiet space to think.' },
    { src: MEDIA.science, title: 'Science Centre', caption: 'Three labs — biology, chemistry, physics — all equipped.' },
    { src: MEDIA.coding, title: 'Computer Lab', caption: 'Coding, robotics, and our FIRST LEGO competition team.' },
    { src: MEDIA.football, title: 'Sports Field', caption: 'Football, athletics, and Inter-house Sports every March.' },
    { src: MEDIA.drama, title: 'Performing Arts', caption: 'Two full theatre productions a year, plus dance and music.' },
    { src: MEDIA.nursery, title: 'Nursery Wing', caption: 'Bright, playful, gentle — a soft landing for our youngest.' },
    { src: MEDIA.studentsGroup, title: 'School Life', caption: 'Friendships, laughter, and a community that lasts.' },
  ];

  const [idx, setIdx] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(true);

  const goto = (i: number) => setIdx(((i % tour.length) + tour.length) % tour.length);
  const next = () => goto(idx + 1);
  const prev = () => goto(idx - 1);

  // Autoplay
  useEffect(() => {
    if (!open || !playing) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [open, playing, idx]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setIdx(0);
      setPlaying(true);
    }
  }, [open]);

  // Keyboard
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Scroll active thumbnail into view
  const thumbStripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const el = thumbStripRef.current.querySelector(`[data-i="${idx}"]`) as HTMLElement;
    if (el) {
      const strip = thumbStripRef.current;
      const elLeft = el.offsetLeft - strip.offsetLeft;
      strip.scrollTo({
        left: elLeft - strip.clientWidth / 2 + el.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [idx]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-navy-dark/92 z-50 grid place-items-center p-6 animate-fadeIn backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-navy-dark border border-gold/40 rounded-lg w-full max-w-4xl max-h-screen overflow-hidden flex flex-col animate-fadeUp shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-7 py-5 border-b border-gold/20">
          <div>
            <div className="text-xs text-gold font-semibold tracking-widest uppercase mb-1">Virtual Tour · Photo Slideshow</div>
            <h3 className="text-white text-xl font-serif font-semibold">Welcome to SoarHigh Schools</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gold font-serif text-sm tracking-wide border border-gold/30 px-3 py-1 rounded-full">
              {String(idx + 1).padStart(2, '0')} / {String(tour.length).padStart(2, '0')}
            </div>
            <button
              className="w-10 h-10 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
              onClick={onClose}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stage */}
        <div className="relative bg-black aspect-video max-h-96 overflow-hidden">
          {tour.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 opacity-0 transform scale-104 transition-all duration-[0.9s] ease-out pointer-events-none ${
                idx === i ? 'opacity-100 scale-100 pointer-events-auto' : ''
              }`}
            >
              <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Progress bar */}
          <div
            key={`p-${idx}-${playing}`}
            className="absolute top-0 left-0 h-0.75 bg-gold animate-tourProgress"
            style={{ animationPlayState: playing ? 'running' : 'paused' }}
          />

          {/* Caption */}
          <div key={`c-${idx}`} className="absolute bottom-0 left-0 right-0 px-24 py-8 bg-gradient-to-t from-navy-dark/95 to-transparent text-white z-10 animate-captionRise">
            <div className="font-serif text-2xl text-gold font-semibold mb-1.5">{tour[idx].title}</div>
            <div className="text-sm text-white/85 max-w-2xl">{tour[idx].caption}</div>
          </div>

          {/* Nav arrows */}
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/70 text-gold flex items-center justify-center z-20 transition-all hover:bg-gold hover:text-navy border border-gold/30 backdrop-blur-sm"
            onClick={prev}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18 L9 12 L15 6" />
            </svg>
          </button>

          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/70 text-gold flex items-center justify-center z-20 transition-all hover:bg-gold hover:text-navy border border-gold/30 backdrop-blur-sm"
            onClick={next}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18 L15 12 L9 6" />
            </svg>
          </button>

          {/* Play/pause */}
          <button
            className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-full bg-navy/75 text-gold text-xs font-semibold tracking-widest uppercase z-20 transition-all hover:bg-gold hover:text-navy border border-gold/30 backdrop-blur-sm"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M7 4 L20 12 L7 20 Z" />
              </svg>
            )}
            <span>{playing ? 'Pause' : 'Play'}</span>
          </button>
        </div>

        {/* Thumbnails */}
        <div ref={thumbStripRef} className="flex gap-2 px-5 py-4 overflow-x-auto bg-black/20 scroll-smooth scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
          {tour.map((s, i) => (
            <button
              key={i}
              data-i={i}
              className={`flex-shrink-0 w-32 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                idx === i
                  ? 'border-gold opacity-100'
                  : 'border-transparent opacity-55 hover:opacity-100 hover:-translate-y-0.5'
              }`}
              onClick={() => goto(i)}
              aria-label={s.title}
            >
              <img src={s.src} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-navy-dark/92 text-white text-xs font-medium">
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
