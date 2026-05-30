import React from "react";
import { NavigateFn } from "../types";
import { SlidingHero, Reveal, Img, CountUp } from "../components/Media";
import { Icon } from "../components/Icons";
import { MEDIA } from "../data/media";

interface AcademicsProps {
  navigate: NavigateFn;
}

const Academics: React.FC<AcademicsProps> = ({ navigate }) => {
  const extras = [
    {
      icon: <Icon.mic />,
      title: "Debate Club",
      body: "Weekly debates and inter-school competitions across Enugu and beyond.",
    },
    {
      icon: <Icon.gear />,
      title: "Science Club",
      body: "Hands-on experiments, science fairs, and the annual Olympiad team.",
    },
    {
      icon: <Icon.drama />,
      title: "Drama & Performing Arts",
      body: "Two full productions a year — from Shakespeare to original work by students.",
    },
    {
      icon: <Icon.ball />,
      title: "Football Academy",
      body: "Daily training, regional fixtures and a path for our most committed players.",
    },
    {
      icon: <Icon.code />,
      title: "Coding & Robotics",
      body: "From Scratch to Python — students build, programme and compete.",
    },
    {
      icon: <Icon.music />,
      title: "Cultural Dance",
      body: "Igbo, Hausa and Yoruba dance ensembles led by master practitioners.",
    },
  ];

  const jssSubjects = [
    "English Language",
    "Mathematics",
    "Basic Science",
    "Basic Technology",
    "Social Studies",
    "Civic Education",
    "Business Studies",
    "Computer Studies",
    "French Language",
    "Igbo Language",
    "Physical Education",
    "Creative & Cultural Arts",
  ];
  const sssSubjects = [
    "English Language & Literature",
    "Mathematics & Further Maths",
    "Physics, Chemistry, Biology",
    "Economics & Government",
    "Geography & History",
    "Accounting & Commerce",
    "Computer Science",
    "Visual & Performing Arts",
    "WAEC / NECO preparation",
    "University guidance",
  ];

  return (
    <main>
      <SlidingHero
        title="Academics at SoarHigh"
        subtitle="A Rigorous, Balanced Curriculum from Nursery to Secondary."
        breadcrumb="Academics"
        navigate={navigate}
        images={[
          MEDIA.classroomPrimary,
          MEDIA.classroomSecondary,
          MEDIA.nursery,
          MEDIA.library,
        ]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Our Approach</span>
          <h2 className="section-heading underline">Our Academic Philosophy</h2>
        </div>
        <div className="container" style={{ marginTop: 40 }}>
          <div className="grid grid-2 philosophy-grid">
            <p>
              SoarHigh blends the Nigerian national curriculum with the very
              best of international practice. We teach the syllabus required for
              WAEC, NECO and university entry — and we teach the habits required
              for a meaningful life: how to think clearly, ask hard questions,
              work with others, and stand by what you believe.
            </p>
            <p>
              Our classrooms are small. Our teachers are seasoned. Our standards
              are uncompromising. The result is a student who can argue an idea
              in English, solve a problem in mathematics, sing in Igbo, code in
              Python — and look an adult in the eye while doing it.
            </p>
          </div>
        </div>
      </section>

      {/* Nursery */}
      <section className="programme">
        <div className="programme-img has-img">
          <Img src={MEDIA.nursery} alt="Nursery learners" label="Nursery" />
        </div>
        <div className="programme-panel navy">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Programme 01
          </span>
          <h2>Nursery Programme</h2>
          <div className="programme-meta">Ages 1–5 · Foundation Years</div>
          <ul className="programme-list">
            <li>Play-based learning environments</li>
            <li>Early literacy & numeracy</li>
            <li>Music, movement & creative arts</li>
            <li>Social & emotional development</li>
            <li>Bilingual exposure (English & Igbo)</li>
          </ul>
          <button
            className="btn btn-gold"
            onClick={() => navigate("admissions")}
          >
            Nursery Admissions <Icon.arrow />
          </button>
        </div>
      </section>

      {/* Primary */}
      <section className="programme reverse">
        <div className="programme-img has-img">
          <Img
            src={MEDIA.classroomPrimary}
            alt="Primary classroom"
            label="Primary"
          />
        </div>
        <div className="programme-panel light">
          <span className="eyebrow">Programme 02</span>
          <h2>Primary Programme</h2>
          <div className="programme-meta light">
            Ages 6–11 · Building Strong Foundations
          </div>
          <ul className="programme-list dark">
            <li>English Language & Literature</li>
            <li>Mathematics</li>
            <li>Basic Science & Technology</li>
            <li>Social Studies & Civic Education</li>
            <li>French Language</li>
            <li>ICT</li>
            <li>Physical Education</li>
            <li>Fine Arts & Music</li>
          </ul>
          <button
            className="btn btn-navy"
            onClick={() => navigate("admissions")}
          >
            Primary Admissions <Icon.arrow />
          </button>
        </div>
      </section>

      {/* Secondary */}
      <section className="secondary-full">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Programme 03
          </span>
          <h2
            style={{ color: "var(--gold)", fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Secondary Programme
          </h2>
          <div className="programme-meta gold-meta">
            Ages 12–18 · Junior & Senior Secondary
          </div>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="secondary-grid">
            <div className="secondary-col">
              <h3>Junior Secondary (JSS 1–3)</h3>
              <ul>
                {jssSubjects.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="secondary-divider"></div>
            <div className="secondary-col">
              <h3>Senior Secondary (SSS 1–3)</h3>
              <ul>
                {sssSubjects.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button
              className="btn btn-outline-white"
              onClick={() => navigate("admissions")}
            >
              Secondary Admissions <Icon.arrow />
            </button>
          </div>
        </div>
      </section>

      {/* Extra-curriculars */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Beyond the Classroom</span>
          <h2 className="section-heading underline">Where Talent Meets Time</h2>
          <p className="section-sub">
            Twenty-plus clubs and teams. Every child finds something they love.
          </p>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 extras-grid">
            {extras.map((e, i) => {
              const imgs = [
                MEDIA.debate,
                MEDIA.science,
                MEDIA.drama,
                MEDIA.football,
                MEDIA.coding,
                MEDIA.culturalDance,
              ];
              return (
                <Reveal key={i} delay={(i % 3) * 90}>
                  <div className="extra-card">
                    <div className="extra-image img-slot">
                      <Img src={imgs[i]} alt={e.title} label={e.title} />
                    </div>
                    <div className="extra-body">
                      <span className="extra-tag">Co-curricular</span>
                      <h4>{e.title}</h4>
                      <p>{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Track Record</span>
          <h2 className="section-heading underline">
            Our Academic Track Record
          </h2>
        </div>
        <div className="container" style={{ marginTop: 64 }}>
          <div className="grid grid-3 results-grid">
            {[
              {
                num: "98%",
                title: "WAEC Pass Rate",
                body: "Distinction-grade results, consistent across the last 5 cohorts.",
              },
              {
                num: "Top 5",
                title: "School in Enugu State",
                body: "Independently ranked, five years running, by the Enugu Educational Council.",
              },
              {
                num: "100%",
                title: "JSS → SSS Progression",
                body: "Every Junior Secondary student progresses to Senior Secondary at SoarHigh.",
              },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="result-card">
                  <div className="result-num">
                    <CountUp value={r.num} />
                  </div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
