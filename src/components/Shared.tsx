import React, { useState, useEffect, useRef } from 'react';
import { NavigateFn, PageDef, Stat } from '../types';
import { Icon } from './Icons';

export const PAGES: PageDef[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'tuition', label: 'Tuition & Fees' },
  { id: 'student-life', label: 'Student Life' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  current: string;
  navigate: NavigateFn;
}

export const Navbar: React.FC<NavbarProps> = ({ current, navigate }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-300"
      style={scrolled ? { boxShadow: '0 6px 30px rgba(6,22,64,0.35)' } : {}}
    >
      <div className="flex items-center justify-between px-[--pad-x] py-[18px] max-w-[1440px] mx-auto gap-8">
        {/* Brand */}
        <div
          onClick={() => navigate('home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 grid place-items-center border-[1.5px] border-gold rounded-full text-gold">
            <Icon.crest width={22} height={22} />
          </div>
          <div className="font-serif text-[20px] text-gold font-semibold tracking-[0.02em]">
            SoarHigh Schools
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden nav:flex items-center gap-7 list-none">
          {PAGES.map((p) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                className={`nav-link-item ${current === p.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(p.id);
                }}
              >
                {p.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#admissions"
              className="bg-gold text-navy px-[22px] py-[10px] rounded-full font-semibold text-sm tracking-[0.02em] hover:bg-gold-soft transition-all hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(201,168,76,0.35)]"
              style={{ padding: '6px 12px' }}
              onClick={(e) => {
                e.preventDefault();
                navigate('admissions');
              }}
            >
              Apply Now
            </a>
          </li>
        </ul>

        {/* Burger button */}
        <button
          className="nav:hidden w-10 h-10 grid place-items-center border border-gold rounded-lg text-gold"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="menu"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`nav:hidden bg-navy-dark overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-[--pad-x] py-3 gap-1">
          {PAGES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="text-white py-3 border-b border-white/8 text-[15px] hover:text-gold transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigate(p.id);
                setMobileOpen(false);
              }}
            >
              {p.label}
            </a>
          ))}
          <a
            className="bg-gold text-navy px-[22px] py-[10px] rounded-full font-semibold text-sm tracking-[0.02em] text-center hover:bg-gold-soft transition-all mt-3"
            style={{ padding: '6px 12px' }}
            href="#admissions"
            onClick={(e) => {
              e.preventDefault();
              navigate('admissions');
              setMobileOpen(false);
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

interface FooterProps {
  navigate: NavigateFn;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-container mx-auto px-[--pad-x] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon.crest />
              </div>
              <div className="font-serif font-semibold text-lg">SoarHigh Schools</div>
            </button>
            <p className="text-white/80 text-sm mb-6">
              A world-class nursery through secondary education in the heart of Enugu State — where every child is raised to soar.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-5 h-5 text-gold hover:text-gold-soft transition-colors">
                <Icon.facebook />
              </a>
              <a href="#" aria-label="Instagram" className="w-5 h-5 text-gold hover:text-gold-soft transition-colors">
                <Icon.instagram />
              </a>
              <a href="#" aria-label="Twitter" className="w-5 h-5 text-gold hover:text-gold-soft transition-colors">
                <Icon.twitter />
              </a>
              <a href="#" aria-label="YouTube" className="w-5 h-5 text-gold hover:text-gold-soft transition-colors">
                <Icon.youtube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {PAGES.slice(1).map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(p.id);
                    }}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-white/80 text-sm">
                <Icon.pin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  Independence Layout,
                  <br />
                  Enugu, Enugu State, Nigeria
                </div>
              </div>
              <div className="flex gap-3 text-white/80 text-sm">
                <Icon.phone className="w-5 h-5 flex-shrink-0" />
                <div>+234 (0) 803 456 7890</div>
              </div>
              <div className="flex gap-3 text-white/80 text-sm">
                <Icon.mail className="w-5 h-5 flex-shrink-0" />
                <div>info@soarhighschools.edu.ng</div>
              </div>
              <div className="flex gap-3 text-white/80 text-sm">
                <Icon.clock className="w-5 h-5 flex-shrink-0" />
                <div>Mon–Fri, 8:00am – 4:00pm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-white/60 text-sm">
          <div>© 2025 SoarHigh Schools. All rights reserved.</div>
          <div>Privacy Policy · Terms of Service</div>
        </div>
      </div>
    </footer>
  );
};

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
  navigate?: NavigateFn;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumb,
  navigate,
  children,
}) => {
  return (
    <section className="pt-32 pb-20 px-[--pad-x]">
      <div className="max-w-container mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-navy">{title}</h1>
        <div className="text-xl md:text-2xl text-navy-light mb-6">{subtitle}</div>
        {breadcrumb && (
          <div className="text-sm text-text-muted mb-6">
            <a
              href="#home"
              className="text-navy hover:text-gold transition-colors"
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
      </div>
    </section>
  );
};

interface CountUpProps {
  value: string | number;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ value, duration = 1800 }) => {
  const match = String(value).match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return <span>{value}</span>;

  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';
  const target = parseFloat(numStr);
  const isInt = !numStr.includes('.');

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current || started) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = t - t0;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setN(isInt ? Math.round(current) : Math.round(current * 10) / 10);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, isInt]);

  return (
    <span ref={ref} className="count-up">
      {prefix}
      {n}
      {suffix}
    </span>
  );
};

interface StatsStripProps {
  stats: Stat[];
}

export const StatsStrip: React.FC<StatsStripProps> = ({ stats }) => {
  return (
    <section className="bg-warm-white py-20">
      <div className="max-w-container mx-auto px-[--pad-x]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center animate-statRise" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="stat-num text-4xl md:text-5xl font-serif font-semibold text-navy mb-2">
                <CountUp value={s.num} />
              </div>
              <div className="stat-label text-text-muted text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
