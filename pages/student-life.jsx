// Student Life
function StudentLifePage({ navigate }) {
  const clubs = [
    { icon: <Icon.mic />, name: "Debate Club", body: "Weekly discussions, inter-school tournaments." },
    { icon: <Icon.gear />, name: "Science & Technology", body: "Lab projects, science fair, Olympiad team." },
    { icon: <Icon.drama />, name: "Drama & Theatre", body: "Two productions a year, plus monthly workshops." },
    { icon: <Icon.pen />, name: "Literature & Writing", body: "Creative writing circle, school magazine, poetry slams." },
    { icon: <Icon.code />, name: "Coding & Robotics", body: "Python, Scratch, Arduino — and the FIRST LEGO team." },
    { icon: <Icon.paint />, name: "Cultural Arts", body: "Igbo crafts, traditional storytelling, regional fashion." },
    { icon: <Icon.camera />, name: "Photography", body: "Darkroom, digital, and the school yearbook crew." },
    { icon: <Icon.briefcase />, name: "Entrepreneurship", body: "Junior Achievement, business pitches, market days." },
  ];

  const sports = [
    { icon: <Icon.ball />, name: "Football", body: "Daily training and a place in the Enugu Inter-Schools League." },
    { icon: <Icon.flag />, name: "Athletics", body: "Track, field, cross-country and the annual Inter-house Sports." },
    { icon: <Icon.basketball />, name: "Basketball", body: "Indoor courts, regional fixtures, both girls' and boys' teams." },
    { icon: <Icon.tennis />, name: "Table Tennis", body: "Club coaching, school championships, state-level competitions." },
  ];

  const community = [
    { icon: <Icon.hands />, title: "Community Clean-up Drives", body: "Quarterly clean-ups across Independence Layout and surrounding streets." },
    { icon: <Icon.heart />, title: "Orphanage Visits", body: "Termly visits to two partner homes — meals, books, and shared time." },
    { icon: <Icon.book />, title: "Free Tutoring Initiative", body: "Senior Secondary students tutor children from neighbouring public schools." },
  ];

  const day = [
    { time: "7:30 am", title: "Morning Assembly", body: "Hymn, address from the Head of School, and student-led news." },
    { time: "8:00 am", title: "Classes Begin", body: "Three periods of focused academic instruction in small groups." },
    { time: "10:30 am", title: "Mid-Morning Break", body: "Healthy snacks, free play, and time on the field." },
    { time: "12:00 pm", title: "Lunch", body: "Hot, balanced meals prepared on-site in our school kitchen." },
    { time: "1:00 pm", title: "Afternoon Classes", body: "Two further periods — usually science, languages or the arts." },
    { time: "3:30 pm", title: "Clubs & Sports", body: "Choose your club. Choose your sport. Show up. Get better." },
    { time: "5:00 pm", title: "Dismissal", body: "Pick-up zones, supervised buses, and a quiet end to a full day." },
  ];

  return (
    <main>
      <SlidingHero
        title="Life at SoarHigh"
        subtitle="More Than a School — A Community."
        breadcrumb="Student Life"
        navigate={navigate}
        images={[MEDIA.studentsGroup, MEDIA.football, MEDIA.culturalDance, MEDIA.drama, MEDIA.library]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Whole-Child Education</span>
          <h2 className="section-heading underline">A Rich, Balanced School Experience</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 17, marginTop: 16 }}>
            Education at SoarHigh extends far beyond the classroom. Every student is encouraged to discover their talents, build lasting friendships, and grow into a confident, well-rounded young adult — ready for whatever the world brings.
          </p>
        </div>
      </section>

      {/* Clubs */}
      <section className="section" style={{ background: "white" }}>
        <div className="container text-center">
          <span className="eyebrow">Clubs & Societies</span>
          <h2 className="section-heading underline">Twenty Clubs. Endless Possibilities.</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="club-grid">
            {clubs.map((c, i) => {
              const imgs = [MEDIA.debate, MEDIA.science, MEDIA.drama, MEDIA.literature, MEDIA.coding, MEDIA.culturalArts, MEDIA.photography, MEDIA.entrepreneurship];
              return (
                <Reveal key={i} delay={(i % 4) * 90}>
                  <div className="club-card">
                    <div className="club-image img-slot">
                      <Img src={imgs[i]} alt={c.name} label={c.name} />
                      <div className="club-icon">{c.icon}</div>
                    </div>
                    <div className="club-body">
                      <h4>{c.name}</h4>
                      <p>{c.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="sports-section">
        <div className="container">
          <div className="sports-layout">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Sports & Athletics</span>
              <h2 style={{ color: "white", fontSize: "clamp(32px, 4vw, 44px)" }}>Where Bodies Get<br/>Stronger With Minds</h2>
              <hr className="divider-gold" style={{ margin: "16px 0 24px 0" }}/>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 16.5, lineHeight: 1.75 }}>
                Sport at SoarHigh is non-negotiable. Every child plays. Every child trains. We field competitive teams across four flagship sports, and we compete — proudly and seriously — in the Enugu State Inter-Schools League. Our facilities include a full-size football pitch, two basketball courts, athletics track and indoor sports hall.
              </p>
            </div>
            <div className="grid grid-2 sport-grid">
              {sports.map((s, i) => (
                <div key={i} className="sport-tile">
                  <div className="sport-icon">{s.icon}</div>
                  <h4>{s.name}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arts */}
      <section className="section">
        <div className="container">
          <div className="arts-layout">
            <div className="arts-images">
              <div className="arts-img a img-slot">
                <Img src={MEDIA.artsDrama} alt="Drama production" label="Drama" />
              </div>
              <div className="arts-img b img-slot">
                <Img src={MEDIA.artsCultural} alt="Cultural day" label="Cultural Day" />
              </div>
            </div>
            <div>
              <span className="eyebrow">Arts & Culture</span>
              <h2 className="section-heading underline-left" style={{ textAlign: "left" }}>Arts & Culture</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 16.5, marginTop: 16 }}>
                A SoarHigh education is a creative education. From classical music to contemporary dance, from Shakespeare to Soyinka — our students see, study, perform, and produce the arts.
              </p>
              <ul className="arts-list">
                <li><span></span>Annual Cultural Day — every culture, every child</li>
                <li><span></span>Drama & Music Festival — two full productions a year</li>
                <li><span></span>Art Exhibition — student work shown publicly each term</li>
                <li><span></span>Inter-school Arts Competitions — singing, drama, dance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section" style={{ background: "white" }}>
        <div className="container text-center">
          <span className="eyebrow">Service</span>
          <h2 className="section-heading underline">Giving Back to Enugu</h2>
          <p className="section-sub">We don't just teach about citizenship. We practise it, every term.</p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 community-grid">
            {community.map((c, i) => (
              <Reveal key={i} delay={i * 110}>
                <div className="community-card">
                  <div className="community-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="day-section">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Daily Rhythm</span>
          <h2 style={{ color: "var(--gold)", fontSize: "clamp(32px, 4vw, 44px)" }}>A Day at SoarHigh</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="day-timeline">
            <div className="day-line"></div>
            {day.map((d, i) => (
              <Reveal key={i} delay={i * 80} className={`day-entry ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="day-dot"></div>
                <div className="day-card">
                  <div className="day-time">{d.time}</div>
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
window.StudentLifePage = StudentLifePage;
