// Home page
function HomePage({ navigate }) {
  const [tourOpen, setTourOpen] = React.useState(false);
  const heroLines = [
  "Where Excellence Takes Flight.",
  "Raising Tomorrow's Leaders.",
  "Rooted in Enugu. Reaching the World."];

  const [heroIdx, setHeroIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroLines.length), 3600);
    return () => clearInterval(t);
  }, []);

  const pillars = [
  { icon: <Icon.book />, title: "Academic Excellence", body: "A rigorous, balanced curriculum that prepares students for top universities and a changing world." },
  { icon: <Icon.shield />, title: "Character & Integrity", body: "We nurture honest, principled young people who lead with conviction and humility." },
  { icon: <Icon.bulb />, title: "Creative Thinking", body: "Inquiry, problem-solving, and the arts are woven into everything our students do." },
  { icon: <Icon.globe />, title: "Global Citizenship", body: "Proudly Nigerian. Prepared for the world. Our students belong everywhere." }];


  const achievements = [
  { title: "Best School in Enugu 2023", body: "Enugu State Education Excellence Awards" },
  { title: "National Mathematics Olympiad", body: "Top 3 finish, three years running" },
  { title: "WAEC Distinction Cohort", body: "98% pass rate in 2024" },
  { title: "Cowbellpedia Champions", body: "Regional finalists, 2024" }];


  const levels = [
  { icon: <Icon.baby />, name: "Nursery", age: "Ages 1–5", body: "Play-based learning where curiosity, kindness and confidence take root." },
  { icon: <Icon.book />, name: "Primary", age: "Ages 6–11", body: "Strong foundations in literacy, numeracy and inquiry — across nine subject areas." },
  { icon: <Icon.graduation />, name: "Secondary", age: "Ages 12–18", body: "JSS and SSS programmes with WAEC/NECO preparation and university guidance." }];


  const testimonials = [
  { quote: "SoarHigh has given our daughter not only a brilliant academic start but the confidence to stand up and lead. We could not have asked for more.", name: "Mrs. Ngozi Eze", level: "Parent of Primary 4 student" },
  { quote: "The teachers know each child personally. My son walks into school excited every single morning — that tells you everything.", name: "Dr. Emeka Okafor", level: "Parent of JSS 2 student" },
  { quote: "From the moment we visited, we knew this was different. The discipline, the warmth, the standard — it all just felt right.", name: "Mr. & Mrs. Adaeze", level: "Parents of Nursery 2 student" }];


  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            poster={MEDIA.heroPoster} style={{ padding: "0px" }}>
            
            <source src={MEDIA.heroVideo} type="video/mp4" />
          </video>
          <div className="hero-bg-tint"></div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="line"></span>
            <span>SoarHigh Schools · Est. 2010</span>
            <span className="line"></span>
          </div>
          <div className="hero-headline-wrap">
            {heroLines.map((line, i) =>
            <h1 key={i} className={`hero-headline ${heroIdx === i ? "active" : ""}`}>{line}</h1>
            )}
          </div>
          <p className="hero-sub">A world-class nursery through secondary school experience in the heart of Enugu State.</p>
          <div className="hero-ctas">
            <button className="btn btn-gold btn-lg" onClick={() => navigate("admissions")}>Apply for Admission</button>
            <button className="btn btn-outline-white btn-lg" onClick={() => setTourOpen(true)}>Take a Virtual Tour</button>
          </div>
        </div>
        <div className="hero-bottom">
          <hr className="divider-gold" />
          <div className="hero-scroll">
            <span>Scroll</span>
            <Icon.chevDown />
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsStrip stats={[
      { num: "500+", label: "Students Enrolled" },
      { num: "3", label: "Academic Levels" },
      { num: "15+", label: "Years of Excellence" },
      { num: "100%", label: "University Placement" }]
      } />

      {/* PILLARS */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">What We Stand For</span>
          <h2 className="section-heading underline">Built on Four Pillars</h2>
          <p className="section-sub">Everything we do at SoarHigh is guided by four core commitments to every child in our care.</p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-4 pillar-grid">
            {pillars.map((p, i) =>
            <Reveal key={i} delay={i * 100}>
                <div className="card pillar-card">
                  <div className="icon-bubble">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section" style={{ background: "white" }}>
        <div className="container achievements-wrap">
          <div>
            <span className="eyebrow">Recognition</span>
            <h2 className="section-heading underline-left" style={{ textAlign: "left" }}>Award-Winning.<br />Recognised. Celebrated.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 460, marginTop: 18 }}>
              Across academics, sports and the arts, SoarHigh students consistently rank among the very best in Enugu State and beyond. Our trophy cabinet keeps growing — but what matters most is the confidence it builds in every child.
            </p>
            <a href="#" className="gold-link" style={{ marginTop: 32, display: "inline-flex" }}>See all achievements <Icon.arrow /></a>
          </div>
          <div className="grid grid-2 achievements-grid">
            {achievements.map((a, i) =>
            <Reveal key={i} delay={i * 90}>
                <div className="achievement-card">
                  <Icon.trophy />
                  <h4>{a.title}</h4>
                  <p>{a.body}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <div className="img-fill">
          <Img src={MEDIA.studentsUniform} alt="SoarHigh students in uniform" label="Students" />
        </div>
        <div className="about-preview-text">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Story</span>
          <h2 style={{ color: "white", fontSize: "clamp(32px, 4vw, 44px)", marginBottom: 20 }}>About SoarHigh Schools</h2>
          <p>Founded in Enugu in 2010, SoarHigh Schools has spent more than a decade quietly redefining what excellent African education looks like. We blend the Nigerian national curriculum with international best practice, holding every student to a single, simple standard: be the best version of yourself.</p>
          <p style={{ marginTop: 16 }}>Today, our graduates study at leading universities across Nigeria, the UK, the US and Canada — but they all return home for the same reason. SoarHigh shaped them.</p>
          <button className="btn btn-outline-white btn-sm" style={{ marginTop: 28, alignSelf: "flex-start" }} onClick={() => navigate("about")}>Learn More About Us <Icon.arrow /></button>
        </div>
      </section>

      {/* ACADEMICS PREVIEW */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Academic Levels</span>
          <h2 className="section-heading underline">Three Levels of Excellence</h2>
          <p className="section-sub">From a child's very first day to their university send-off — a single, continuous journey of growth.</p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 level-grid">
            {levels.map((l, i) =>
            <Reveal key={i} delay={i * 130}>
                <div className="level-card">
                  <div className="icon-bubble">{l.icon}</div>
                  <div className="level-meta">{l.age}</div>
                  <h3>{l.name}</h3>
                  <p>{l.body}</p>
                  <a href="#" className="gold-link" onClick={(e) => {e.preventDefault();navigate("academics");}}>Explore <Icon.arrow /></a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="virtual-tour">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Step Inside</span>
          <h2 style={{ color: "var(--gold)", fontSize: "clamp(32px, 4vw, 48px)", marginBottom: 20 }}>Experience Our Campus</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
            Take a 360° virtual walkthrough of our world-class facilities — from our science labs and library to our sports complex and arts centre.
          </p>
          <button className="play-orb" aria-label="Play virtual tour" onClick={() => setTourOpen(true)}>
            <span className="play-orb-ring"></span>
            <span className="play-orb-ring outer"></span>
            <Icon.play />
          </button>
          <button className="btn btn-outline-white" onClick={() => setTourOpen(true)}>Start Virtual Tour</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Parent Voices</span>
          <h2 className="section-heading underline">What Parents Are Saying</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3">
            {testimonials.map((t, i) =>
            <Reveal key={i} delay={i * 120}>
                <div className="testimonial">
                <div className="quote-mark"><Icon.quote /></div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="stars">
                  {[0, 1, 2, 3, 4].map((s) => <Icon.star key={s} />)}
                </div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-level">{t.level}</div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2>Ready to Give Your Child the SoarHigh Advantage?</h2>
          <p>Applications for the 2025/2026 academic session are now open.</p>
          <div className="hero-ctas" style={{ justifyContent: "center", marginTop: 32 }}>
            <button className="btn btn-navy btn-lg" onClick={() => navigate("admissions")}>Apply Now</button>
            <button className="btn btn-outline-navy btn-lg" onClick={() => navigate("contact")}>Contact Admissions</button>
          </div>
        </div>
      </section>

      <VirtualTourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </main>);

}

window.HomePage = HomePage;