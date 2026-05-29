// Media URLs — real photos from Unsplash + hero video.
// All grouped here so they're easy to swap.

const MEDIA = {
  // Hero looping video (Pexels — students raising hands in class)
  heroVideo: "https://videos.pexels.com/video-files/8466804/8466804-hd_1920_1080_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",

  // Generic students / classrooms
  studentsUniform: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80",
  classroomPrimary: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  classroomSecondary: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80",
  nursery: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
  schoolBuilding: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
  graduation: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  library: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
  studentSmiling: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80",
  studentsGroup: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80",
  studyingBooks: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80",

  // Leadership portraits
  leader1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  leader2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  leader3: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  leader4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",

  // Clubs & activities
  debate: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80",
  science: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
  drama: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=900&q=80",
  literature: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80",
  coding: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
  culturalArts: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80",
  photography: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=900&q=80",
  entrepreneurship: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",

  // Extras (academics page)
  football: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80",
  culturalDance: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900&q=80",

  // Arts spread
  artsDrama: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=900&q=80",
  artsCultural: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",

  // Gallery photos (15)
  g1: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80",  // graduation
  g2: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80",  // cultural
  g3: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80", // sports wide
  g4: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",  // science
  g5: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",  // school life
  g6: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900&q=80",     // cultural dance
  g7: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80",  // football
  g8: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",  // olympiad
  g9: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80", // valedictory wide
  g10: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80", // library
  g11: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80", // traditional
  g12: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80", // athletics
  g13: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80", // spelling
  g14: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80", // lunch
  g15: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80",// class photo wide

  // Video thumbnails
  v1: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80",
  v2: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80",
  v3: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900&q=80",

  // Achievement / pillars background imagery (used in placeholders elsewhere)
  trophy: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80",
};

// Helper component: wraps an image with a hatched placeholder fallback
function Img({ src, alt, label, className, style }) {
  const [errored, setErrored] = React.useState(false);
  if (errored || !src) {
    return (
      <div
        className={`img-placeholder ${className || ""}`}
        data-label={label || alt || "image"}
        style={style}
      ></div>
    );
  }
  return (
    <img
      src={src}
      alt={alt || ""}
      className={`real-img ${className || ""}`}
      style={style}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

// Reveal-on-scroll wrapper
function Reveal({ children, delay = 0, as = "div", className = "", ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
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
}

// Stagger: wraps a list of items in Reveals with incremental delays
function Stagger({ children, step = 90, base = 0, className = "" }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <Reveal delay={base + i * step}>{child}</Reveal>
      ))}
    </div>
  );
}

// Sliding image hero — a crossfading carousel with navy overlay, used on every secondary page
function SlidingHero({ title, subtitle, breadcrumb, navigate, images, interval = 5000, children }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (!images || images.length < 2) return;
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images, interval]);

  return (
    <section className="page-hero sliding-hero">
      <div className="sliding-hero-bg">
        {(images || []).map((src, i) => (
          <div key={i} className={`sliding-hero-slide ${idx === i ? "active" : ""}`}>
            <img src={src} alt="" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="sliding-hero-tint"></div>
      </div>
      <div className="sliding-hero-content">
        <h1>{title}</h1>
        <div className="sub">{subtitle}</div>
        {breadcrumb && (
          <div className="breadcrumbs">
            <a href="#home" onClick={(e) => { e.preventDefault(); navigate && navigate("home"); }}>Home</a>
            {" › "}{breadcrumb}
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
}

// Virtual Tour Modal — fullscreen photo slideshow carousel of the campus
function VirtualTourModal({ open, onClose }) {
  const tour = [
    { src: MEDIA.schoolBuilding, title: "Main Campus", caption: "12 Independence Layout, Enugu — our home since 2010." },
    { src: MEDIA.classroomPrimary, title: "Primary Classroom", caption: "Small classes, large windows, deep learning." },
    { src: MEDIA.classroomSecondary, title: "Senior Classroom", caption: "Where WAEC, NECO and university futures are shaped." },
    { src: MEDIA.library, title: "School Library", caption: "Over 18,000 volumes and quiet space to think." },
    { src: MEDIA.science, title: "Science Centre", caption: "Three labs — biology, chemistry, physics — all equipped." },
    { src: MEDIA.coding, title: "Computer Lab", caption: "Coding, robotics, and our FIRST LEGO competition team." },
    { src: MEDIA.football, title: "Sports Field", caption: "Football, athletics, and Inter-house Sports every March." },
    { src: MEDIA.drama, title: "Performing Arts", caption: "Two full theatre productions a year, plus dance and music." },
    { src: MEDIA.nursery, title: "Nursery Wing", caption: "Bright, playful, gentle — a soft landing for our youngest." },
    { src: MEDIA.studentsGroup, title: "School Life", caption: "Friendships, laughter, and a community that lasts." },
  ];
  const [idx, setIdx] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);

  const goto = React.useCallback((i) => setIdx(((i % tour.length) + tour.length) % tour.length), [tour.length]);
  const next = React.useCallback(() => goto(idx + 1), [idx, goto]);
  const prev = React.useCallback(() => goto(idx - 1), [idx, goto]);

  // Autoplay
  React.useEffect(() => {
    if (!open || !playing) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [open, playing, next]);

  // Reset on open
  React.useEffect(() => {
    if (open) {
      setIdx(0);
      setPlaying(true);
    }
  }, [open]);

  // Keyboard
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") { e.preventDefault(); setPlaying(p => !p); }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev, onClose]);

  // Scroll active thumbnail into view
  const thumbStripRef = React.useRef(null);
  React.useEffect(() => {
    if (!thumbStripRef.current) return;
    const el = thumbStripRef.current.querySelector(`.tour-thumb[data-i="${idx}"]`);
    if (el) {
      const strip = thumbStripRef.current;
      const elLeft = el.offsetLeft - strip.offsetLeft;
      strip.scrollTo({ left: elLeft - strip.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [idx]);

  if (!open) return null;

  return (
    <div className="tour-modal" onClick={onClose}>
      <div className="tour-modal-inner slideshow" onClick={(e) => e.stopPropagation()}>
        <div className="tour-header">
          <div>
            <div className="tour-eyebrow">Virtual Tour · Photo Slideshow</div>
            <h3>Welcome to SoarHigh Schools</h3>
          </div>
          <div className="tour-header-right">
            <div className="tour-counter">{String(idx + 1).padStart(2, "0")} / {String(tour.length).padStart(2, "0")}</div>
            <button className="tour-close" onClick={onClose} aria-label="Close">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>
            </button>
          </div>
        </div>

        <div className="tour-stage slideshow-stage">
          {tour.map((s, i) => (
            <div key={i} className={`tour-slide ${idx === i ? "active" : idx > i ? "before" : "after"}`}>
              <img src={s.src} alt={s.title} />
            </div>
          ))}
          {/* progress bar */}
          <div className="tour-progress" key={`p-${idx}-${playing}`} style={{ animationPlayState: playing ? "running" : "paused" }}></div>
          {/* caption */}
          <div className="tour-caption" key={`c-${idx}`}>
            <div className="tour-caption-title">{tour[idx].title}</div>
            <div className="tour-caption-body">{tour[idx].caption}</div>
          </div>
          {/* nav arrows */}
          <button className="tour-nav prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18 L9 12 L15 6"/></svg>
          </button>
          <button className="tour-nav next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18 L15 12 L9 6"/></svg>
          </button>
          {/* play/pause */}
          <button className="tour-playpause" onClick={() => setPlaying(p => !p)} aria-label={playing ? "Pause" : "Play"}>
            {playing ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 4 L20 12 L7 20 Z"/></svg>
            )}
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        </div>

        <div className="tour-thumbs" ref={thumbStripRef}>
          {tour.map((s, i) => (
            <button
              key={i}
              data-i={i}
              className={`tour-thumb ${idx === i ? "active" : ""}`}
              onClick={() => goto(i)}
              aria-label={s.title}
            >
              <img src={s.src} alt="" />
              <span className="tour-thumb-label">{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MEDIA, Img, Reveal, Stagger, SlidingHero, VirtualTourModal });
