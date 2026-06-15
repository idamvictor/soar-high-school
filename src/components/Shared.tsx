import React, { useState, useEffect, useRef } from "react";
import { NavigateFn, PageDef, Stat } from "../types";
import { Icon } from "./Icons";
import { MEDIA } from "../data/media";

export const PAGES: PageDef[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "academics", label: "Academics" },
  { id: "admissions", label: "Admissions" },
  { id: "tuition", label: "Tuition & Fees" },
  { id: "student-life", label: "Student Life" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Brand */}
        <div onClick={() => navigate("home")} className="brand">
          <div className="brand-crest">
            <img src={MEDIA.schoolLogo} alt="SoarHigh Logo" />
          </div>
          <div className="brand-name">SoarHigh Schools</div>
        </div>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {PAGES.map((p) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                className={current === p.id ? "active" : ""}
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
            <button className="nav-cta" onClick={() => navigate("admissions")}>
              Apply Now
            </button>
          </li>
        </ul>

        {/* Burger button */}
        <button
          className="nav-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
        {PAGES.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(p.id);
              setMobileOpen(false);
            }}
          >
            {p.label}
          </a>
        ))}
        <button
          className="nav-cta"
          onClick={() => {
            navigate("admissions");
            setMobileOpen(false);
          }}
        >
          Apply Now
        </button>
      </div>
    </nav>
  );
};

interface FooterProps {
  navigate: NavigateFn;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand" onClick={() => navigate("home")}>
            <div className="brand-crest">
              <img src={MEDIA.schoolLogo} alt="SoarHigh Logo" />
            </div>
            <div className="brand-name">SoarHigh Schools</div>
          </div>
          <p>
            A world-class nursery through secondary education in the heart of
            Enugu State — where every child is raised to soar.
          </p>
          <div className="social-row">
            <a href="#" aria-label="Facebook">
              <Icon.facebook />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon.instagram />
            </a>
            <a href="#" aria-label="Twitter">
              <Icon.twitter />
            </a>
            <a href="#" aria-label="YouTube">
              <Icon.youtube />
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {PAGES.slice(1).map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
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
          <h4>Contact</h4>
          <div className="footer-contact-row">
            <Icon.pin />
            <div>
              Independence Layout,
              <br />
              Enugu, Enugu State, Nigeria
            </div>
          </div>
          <div className="footer-contact-row">
            <Icon.phone />
            <div>+234 (0) 803 456 7890</div>
          </div>
          <div className="footer-contact-row">
            <Icon.mail />
            <div>info@soarhighschools.edu.ng</div>
          </div>
          <div className="footer-contact-row">
            <Icon.clock />
            <div>Mon–Fri, 8:00am – 4:00pm</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 SoarHigh Schools. All rights reserved.</div>
        <div>Privacy Policy · Terms of Service</div>
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
    <section className="page-hero">
      <h1>{title}</h1>
      <div className="sub">{subtitle}</div>
      {breadcrumb && (
        <div className="breadcrumbs">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigate?.("home");
            }}
          >
            Home
          </a>
          {" › "}
          {breadcrumb}
        </div>
      )}
      {children}
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

  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";
  const target = parseFloat(numStr);
  const isInt = !numStr.includes(".");

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
      { threshold: 0.4 },
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
    <section className="stats-strip">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-block">
            <div className="stat-num">
              <CountUp value={s.num} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
