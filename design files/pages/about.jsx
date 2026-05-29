// About Us
function AboutPage({ navigate }) {
  const values = [
    { icon: <Icon.shield />, name: "Integrity", body: "We do the right thing — especially when it's hard, and especially when no one is watching." },
    { icon: <Icon.trophy />, name: "Excellence", body: "We never settle. Every lesson, every match, every performance — done with care." },
    { icon: <Icon.bulb />, name: "Innovation", body: "We are restless about how we teach, learn and lead." },
    { icon: <Icon.heart />, name: "Compassion", body: "We see every child. We listen. We meet them where they are." },
    { icon: <Icon.flag />, name: "Discipline", body: "Habits make character. We build them, deliberately, every day." },
    { icon: <Icon.hands />, name: "Service", body: "Our students give back — to their families, their school, and Enugu." },
  ];

  const reasons = [
    "Qualified, experienced teaching staff",
    "Safe and nurturing learning environment",
    "Blended Nigerian and international curriculum",
    "Strong focus on character and leadership",
    "Consistent top exam results across Enugu State",
    "World-class facilities — labs, library, sports complex",
  ];

  const leaders = [
    { name: "Dr. Adaeze Nwosu", title: "Head of School", bio: "Cambridge-trained educator with 22 years leading premier institutions across Lagos and Enugu." },
    { name: "Mr. Chinedu Okafor", title: "Head of Secondary", bio: "Former examiner for WAEC, now shaping the curriculum that prepares our students for the world." },
    { name: "Mrs. Funke Adebayo", title: "Head of Primary", bio: "Specialist in early literacy. Her students consistently exceed national benchmarks by 30%+." },
    { name: "Ms. Ifeoma Eze", title: "Head of Nursery", bio: "Reggio-inspired early years leader. Builds environments where small children thrive." },
  ];

  return (
    <main>
      <SlidingHero
        title="About SoarHigh Schools"
        subtitle="Enugu's Premier Nursery through Secondary Institution."
        breadcrumb="About Us"
        navigate={navigate}
        images={[MEDIA.schoolBuilding, MEDIA.studentsGroup, MEDIA.library, MEDIA.studentsUniform]}
      />

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-img has-img">
              <Img src={MEDIA.schoolBuilding} alt="SoarHigh campus" label="Campus building" />
            </div>
            <Reveal>
            <div className="story-text">
              <span className="eyebrow">Our Story</span>
              <h2 className="section-heading underline-left" style={{ textAlign: "left" }}>Fifteen Years of Soaring</h2>
              <div className="story-body">
                <p><span className="drop-cap">S</span>oarHigh Schools was founded in 2010 by a small group of Enugu-born educators who shared a single conviction: that an African school could compete with — and beat — the best in the world, on its own terms.</p>
                <p>We started with one classroom of twelve nursery children, two teachers, and a borrowed building in Independence Layout. We had no laboratory, no library, and no graduates. What we had was a curriculum, a standard, and a refusal to compromise either.</p>
                <p>Fifteen years on, SoarHigh has grown into a full nursery-through-secondary school of more than 500 students. We have a science complex, a library of 18,000 volumes, a sports field, an art studio, and — most importantly — a faculty that has chosen, year after year, to stay.</p>
                <p>Our graduates are now studying at the University of Lagos, Covenant University, Cambridge, the University of Toronto, Howard, and many more. They send us letters. They visit at Christmas. They send us their younger siblings.</p>
                <p>This is the story we are still writing. Every child who walks through our gates writes the next chapter.</p>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-2 mv-grid">
            <div className="mv-card navy">
              <div className="mv-icon"><Icon.compass /></div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Mission</span>
              <h3>To raise principled, capable, curious young Nigerians who shape their world for the better.</h3>
              <p>We do this through a rigorous and joyful education — one that treats every child as an individual, every subject as a craft, and every day as an opportunity.</p>
            </div>
            <div className="mv-card gold">
              <div className="mv-icon"><Icon.eye /></div>
              <span className="eyebrow" style={{ color: "var(--navy)" }}>Our Vision</span>
              <h3>To be the most respected school in West Africa — and the proudest school in Enugu.</h3>
              <p>A school where excellence is ordinary, character is non-negotiable, and every graduate carries Enugu with them, wherever they go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Core Values</span>
          <h2 className="section-heading underline">The Values We Live By</h2>
          <p className="section-sub">Six commitments, repeated daily, until they become who our students are.</p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 values-grid">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="value-card">
                  <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="value-icon">{v.icon}</div>
                  <h4>{v.name}</h4>
                  <p>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-choose">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Why SoarHigh</span>
              <h2 style={{ color: "white", fontSize: "clamp(32px, 4vw, 48px)" }}>Why Families Choose SoarHigh</h2>
              <hr className="divider-gold" style={{ margin: "20px 0 0 0" }}/>
            </div>
            <ul className="reasons-list">
              {reasons.map((r, i) => (
                <Reveal key={i} delay={i * 80} as="li">
                  <span className="check"><Icon.check /></span>
                  <span>{r}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Our Leadership</span>
          <h2 className="section-heading underline">Meet Our Leadership</h2>
          <p className="section-sub">Dedicated educators committed to your child's success.</p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-4 leader-grid">
            {leaders.map((l, i) => {
              const photos = [MEDIA.leader1, MEDIA.leader2, MEDIA.leader3, MEDIA.leader4];
              return (
                <Reveal key={i} delay={i * 90}>
                  <div className="leader-card">
                    <div className="leader-photo">
                      <Img src={photos[i]} alt={l.name} label="Portrait" />
                    </div>
                    <h4>{l.name}</h4>
                    <div className="leader-title">{l.title}</div>
                    <p>{l.bio}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Affiliations</span>
          <h2 className="section-heading underline">Recognised & Accredited</h2>
        </div>
        <div className="container" style={{ marginTop: 48 }}>
          <div className="accred-row">
            {[
              { name: "Nigerian Educational Research and Development Council", abbr: "NERDC", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" },
              { name: "Enugu State Ministry of Education", abbr: "ESME", img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80" },
              { name: "West African Examinations Council", abbr: "WAEC", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80" },
              { name: "National Examinations Council", abbr: "NECO", img: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&q=80" },
              { name: "Association of Private Schools Nigeria", abbr: "APSN", img: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=600&q=80" },
              { name: "Cambridge Assessment International", abbr: "CAIE", img: "https://images.unsplash.com/photo-1526285759904-71d1170ad7e1?w=600&q=80" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="accred-card">
                  <div className="accred-logo accred-medal">
                    <div className="accred-medal-photo">
                      <Img src={a.img} alt={a.name} label={a.abbr} />
                    </div>
                    <svg className="accred-ring" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <path id={`ring-top-${i}`} d="M 60 60 m -54 0 a 54 54 0 1 1 108 0" fill="none"/>
                        <path id={`ring-bot-${i}`} d="M 60 60 m -54 0 a 54 54 0 1 0 108 0" fill="none"/>
                      </defs>
                      <circle cx="60" cy="60" r="58" fill="none" stroke="var(--gold)" strokeWidth="1.5"/>
                      <circle cx="60" cy="60" r="54" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.55"/>
                      <text fill="var(--gold)" fontSize="6.5" letterSpacing="2.2" fontWeight="700" fontFamily="Inter, sans-serif">
                        <textPath href={`#ring-top-${i}`} startOffset="50%" textAnchor="middle">ACCREDITED · {a.abbr}</textPath>
                      </text>
                      <text fill="var(--gold)" fontSize="5.5" letterSpacing="2.5" fontWeight="500" fontFamily="Inter, sans-serif">
                        <textPath href={`#ring-bot-${i}`} startOffset="50%" textAnchor="middle">SoarHigh Schools · Enugu</textPath>
                      </text>
                      {/* small star ornaments at 3 & 9 o'clock */}
                      <g fill="var(--gold)">
                        <circle cx="6" cy="60" r="1.6"/>
                        <circle cx="114" cy="60" r="1.6"/>
                      </g>
                    </svg>
                    <div className="accred-abbr">{a.abbr}</div>
                  </div>
                  <div className="accred-caption">{a.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
window.AboutPage = AboutPage;
