import React, { useState, useEffect, useRef, ReactNode } from "react";
import { MEDIA } from "../data/media";
import { Icon } from "./Icons";

interface ImgProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  label,
  className = "",
  style,
}) => {
  const [errored, setErrored] = useState<boolean>(false);

  if (errored || !src) {
    return (
      <div
        className={`img-placeholder ${className}`}
        data-label={label || alt || "image"}
        style={style}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      className={`real-img ${className}`}
      style={style}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

interface CountUpProps {
  value: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value }) => {
  const [display, setDisplay] = useState<string>("0");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentNum = Math.floor(progress * num);

      const suffix = value.replace(/[0-9]/g, "");
      setDisplay(currentNum + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible, value]);

  return <div ref={ref}>{display}</div>;
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
  as = "div",
  className = "",
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
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

export const Stagger: React.FC<StaggerProps> = ({
  children,
  step = 90,
  base = 0,
  className = "",
}) => {
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
    const t = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(t);
  }, [images, interval]);

  return (
    <section className="sliding-hero">
      {/* Background slides */}
      <div className="sliding-hero-bg">
        {images.map((src, i) => (
          <div
            key={i}
            className={`sliding-hero-slide ${idx === i ? "active" : ""}`}
          >
            <img src={src} alt="" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="sliding-hero-tint" />
      </div>

      {/* Content */}
      <div className="sliding-hero-content">
        <h1>{title}</h1>
        <div className="sub">{subtitle}</div>
        {breadcrumb && (
          <div className="breadcrumbs">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigate && navigate("home");
              }}
            >
              Home
            </a>
            {" › "}
            {breadcrumb}
          </div>
        )}
        {children}
        {images && images.length > 1 && (
          <div className="sliding-hero-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${idx === i ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
              ></button>
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

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  open,
  onClose,
}) => {
  const tour = [
    {
      src: MEDIA.schoolBuilding,
      title: "Main Campus",
      caption: "12 Independence Layout, Enugu — our home since 2010.",
    },
    {
      src: MEDIA.classroomPrimary,
      title: "Primary Classroom",
      caption: "Small classes, large windows, deep learning.",
    },
    {
      src: MEDIA.classroomSecondary,
      title: "Senior Classroom",
      caption: "Where WAEC, NECO and university futures are shaped.",
    },
    {
      src: MEDIA.library,
      title: "School Library",
      caption: "Over 18,000 volumes and quiet space to think.",
    },
    {
      src: MEDIA.science,
      title: "Science Centre",
      caption: "Three labs — biology, chemistry, physics — all equipped.",
    },
    {
      src: MEDIA.coding,
      title: "Computer Lab",
      caption: "Coding, robotics, and our FIRST LEGO competition team.",
    },
    {
      src: MEDIA.football,
      title: "Sports Field",
      caption: "Football, athletics, and Inter-house Sports every March.",
    },
    {
      src: MEDIA.drama,
      title: "Performing Arts",
      caption: "Two full theatre productions a year, plus dance and music.",
    },
    {
      src: MEDIA.nursery,
      title: "Nursery Wing",
      caption: "Bright, playful, gentle — a soft landing for our youngest.",
    },
    {
      src: MEDIA.studentsGroup,
      title: "School Life",
      caption: "Friendships, laughter, and a community that lasts.",
    },
  ];

  const [idx, setIdx] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(true);

  const goto = React.useCallback(
    (i: number) => setIdx(((i % tour.length) + tour.length) % tour.length),
    [tour.length],
  );
  const next = React.useCallback(() => goto(idx + 1), [idx, goto]);
  const prev = React.useCallback(() => goto(idx - 1), [idx, goto]);

  useEffect(() => {
    if (!open || !playing) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [open, playing, next]);

  useEffect(() => {
    if (open) {
      setIdx(0);
      setPlaying(true);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev, onClose]);

  const thumbStripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const el = thumbStripRef.current.querySelector(
      `.tour-thumb[data-i="${idx}"]`,
    ) as HTMLElement;
    if (el) {
      const strip = thumbStripRef.current;
      const elLeft = el.offsetLeft - strip.offsetLeft;
      strip.scrollTo({
        left: elLeft - strip.clientWidth / 2 + el.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [idx]);

  if (!open) return null;

  return (
    <div className="tour-modal" onClick={onClose}>
      <div
        className="tour-modal-inner slideshow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tour-header">
          <div>
            <div className="tour-eyebrow">Virtual Tour · Photo Slideshow</div>
            <h3>Welcome to SoarHigh Schools</h3>
          </div>
          <div className="tour-header-right">
            <div className="tour-counter">
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(tour.length).padStart(2, "0")}
            </div>
            <button className="tour-close" onClick={onClose} aria-label="Close">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              >
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="tour-stage slideshow-stage">
          {tour.map((s, i) => (
            <div
              key={i}
              className={`tour-slide ${idx === i ? "active" : idx > i ? "before" : "after"}`}
            >
              <img src={s.src} alt={s.title} />
            </div>
          ))}

          {/* Progress Bar */}
          <div
            className="tour-progress"
            key={`p-${idx}-${playing}`}
            style={{ animationPlayState: playing ? "running" : "paused" }}
          ></div>

          {/* Caption */}
          <div className="tour-caption" key={`c-${idx}`}>
            <div className="tour-caption-title">{tour[idx].title}</div>
            <div className="tour-caption-body">{tour[idx].caption}</div>
          </div>

          {/* Nav Arrows */}
          <button
            className="tour-nav prev"
            onClick={prev}
            aria-label="Previous"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18 L9 12 L15 6" />
            </svg>
          </button>
          <button className="tour-nav next" onClick={next} aria-label="Next">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18 L15 12 L9 6" />
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            className="tour-playpause"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M7 4 L20 12 L7 20 Z" />
              </svg>
            )}
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        </div>

        <div className="tour-thumbs" ref={thumbStripRef}>
          {tour.map((s, i) => (
            <div
              key={i}
              className={`tour-thumb ${idx === i ? "active" : ""}`}
              data-i={i}
              onClick={() => setIdx(i)}
            >
              <img src={s.src} alt={s.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface SlideshowModalProps {
  open: boolean;
  onClose: () => void;
  items: { src: string; title: string; caption?: string; date?: string }[];
  title: string;
  eyebrow?: string;
  initialIdx?: number;
  isVideo?: boolean;
}

export const SlideshowModal: React.FC<SlideshowModalProps> = ({
  open,
  onClose,
  items,
  title,
  eyebrow = "Gallery · Photo Slideshow",
  initialIdx = 0,
  isVideo = false,
}) => {
  const [idx, setIdx] = useState<number>(initialIdx);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setIdx(initialIdx);
      setPlaying(false);
    }
  }, [open, initialIdx]);

  const goto = React.useCallback(
    (i: number) => setIdx(((i % items.length) + items.length) % items.length),
    [items.length],
  );
  const next = React.useCallback(() => goto(idx + 1), [idx, goto]);
  const prev = React.useCallback(() => goto(idx - 1), [idx, goto]);

  useEffect(() => {
    if (!open || !playing || isVideo) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [open, playing, next, isVideo]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " " && !isVideo) {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev, onClose, isVideo]);

  const thumbStripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const el = thumbStripRef.current.querySelector(
      `.tour-thumb[data-i="${idx}"]`,
    ) as HTMLElement;
    if (el) {
      const strip = thumbStripRef.current;
      const elLeft = el.offsetLeft - strip.offsetLeft;
      strip.scrollTo({
        left: elLeft - strip.clientWidth / 2 + el.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [idx]);

  if (!open) return null;

  return (
    <div className="tour-modal" onClick={onClose}>
      <div
        className="tour-modal-inner slideshow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tour-header">
          <div>
            <div className="tour-eyebrow">{eyebrow}</div>
            <h3>{title}</h3>
          </div>
          <div className="tour-header-right">
            <div className="tour-counter">
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </div>
            <button className="tour-close" onClick={onClose} aria-label="Close">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              >
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="tour-stage slideshow-stage">
          {items.map((s, i) => (
            <div
              key={i}
              className={`tour-slide ${idx === i ? "active" : idx > i ? "before" : "after"}`}
            >
              {isVideo ? (
                <video
                  key={s.src}
                  src={s.src}
                  controls
                  autoPlay={idx === i}
                  muted
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <img src={s.src} alt={s.title} />
              )}
            </div>
          ))}

          {playing && !isVideo && (
            <div
              className="tour-progress"
              key={`p-${idx}-${playing}`}
              style={{ animationPlayState: playing ? "running" : "paused" }}
            ></div>
          )}

          <div className="tour-caption" key={`c-${idx}`}>
            <div className="tour-caption-title">{items[idx].title}</div>
            {items[idx].caption && (
              <div className="tour-caption-body">{items[idx].caption}</div>
            )}
            {items[idx].date && (
              <div
                className="tour-caption-body"
                style={{ color: "var(--gold)", fontWeight: 600 }}
              >
                {items[idx].date}
              </div>
            )}
          </div>

          <button
            className="tour-nav prev"
            onClick={prev}
            aria-label="Previous"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18 L9 12 L15 6" />
            </svg>
          </button>
          <button className="tour-nav next" onClick={next} aria-label="Next">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18 L15 12 L9 6" />
            </svg>
          </button>

          {!isVideo && (
            <button
              className="tour-playpause"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M7 4 L20 12 L7 20 Z" />
                </svg>
              )}
              <span>{playing ? "Pause" : "Play"}</span>
            </button>
          )}
        </div>

        <div className="tour-thumbs" ref={thumbStripRef}>
          {items.map((s, i) => (
            <div
              key={i}
              className={`tour-thumb ${idx === i ? "active" : ""}`}
              data-i={i}
              onClick={() => setIdx(i)}
            >
              {isVideo ? (
                <div className="relative w-full h-full">
                  <img
                    src={MEDIA[`v${(i % 3) + 1}`]}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Icon.play className="w-6 h-6 text-white" />
                  </div>
                </div>
              ) : (
                <img src={s.src} alt={s.title} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
