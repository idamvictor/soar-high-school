import React from "react";
import { NavigateFn } from "../types";
import { SlidingHero, Reveal } from "../components/Media";
import { Icon } from "../components/Icons";
import { MEDIA } from "../data/media";

interface AdmissionsProps {
  navigate: NavigateFn;
}

const Admissions: React.FC<AdmissionsProps> = ({ navigate }) => {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({
    parent: "",
    child: "",
    dob: "",
    level: "",
    school: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);

  const steps = [
    {
      num: "01",
      title: "Submit Online Enquiry",
      body: "Fill out our quick enquiry form and our admissions team will be in touch within one business day.",
    },
    {
      num: "02",
      title: "Receive Application Pack",
      body: "We send over a full application pack, prospectus and fee schedule by email.",
    },
    {
      num: "03",
      title: "School Visit & Assessment",
      body: "Come and see us. Your child meets their potential teachers; you tour the campus.",
    },
    {
      num: "04",
      title: "Receive Offer Letter",
      body: "A formal offer of admission for your child, with next-step paperwork.",
    },
    {
      num: "05",
      title: "Enrol & Pay Fees",
      body: "Complete enrolment, settle fees, and prepare for the first day of school.",
    },
  ];

  const requirements = [
    {
      level: "Nursery",
      tag: "Ages 1–5",
      items: [
        "Child between 12 months and 5 years",
        "Birth certificate or sworn declaration of age",
        "Completed enquiry form",
        "Two passport photographs",
        "Informal play assessment with the Nursery team",
      ],
    },
    {
      level: "Primary",
      tag: "Ages 6–11",
      items: [
        "Child between 6 and 11 years",
        "Birth certificate",
        "Last report card from current school",
        "Two passport photographs",
        "Entrance assessment: Maths, English, comprehension",
      ],
    },
    {
      level: "Secondary",
      tag: "Ages 12–18",
      items: [
        "Child between 12 and 18 years",
        "Birth certificate",
        "Last two report cards",
        "Two passport photographs",
        "Entrance exam + face-to-face interview",
      ],
    },
  ];

  const dates = [
    {
      event: "Online Enquiry Window Opens",
      date: "1 Jan 2026",
      level: "All levels",
    },
    {
      event: "First Round Entrance Assessment",
      date: "15 Feb 2026",
      level: "Primary & Secondary",
    },
    {
      event: "First Round Offer Letters Sent",
      date: "10 Mar 2026",
      level: "All levels",
    },
    {
      event: "Final Acceptance Deadline",
      date: "30 Apr 2026",
      level: "All levels",
    },
    {
      event: "Second Round Assessment (subject to space)",
      date: "15 May 2026",
      level: "Primary & Secondary",
    },
    { event: "Term Begins", date: "8 Sept 2026", level: "All levels" },
  ];

  const faqs = [
    {
      q: "What is the school fees structure?",
      a: "Fees vary by level — see our Tuition & Fees page for the full 2025/26 schedule. We offer full-term and instalment payment options.",
    },
    {
      q: "Do you offer scholarships?",
      a: "Yes. We award a small number of merit and need-based scholarships every year, covering up to 100% of tuition. Speak to admissions to enquire.",
    },
    {
      q: "Is there a school bus service?",
      a: "Yes — we operate a fleet of CCTV-monitored, GPS-tracked buses across Enugu, Independence Layout, GRA, New Haven, Trans-Ekulu and Achara Layout.",
    },
    {
      q: "What uniform does SoarHigh use?",
      a: "Deep navy and gold. Nursery and Primary uniforms are provided by the school; Secondary uniforms are tailored. Sports kit is included.",
    },
    {
      q: "How do you handle additional learning needs?",
      a: "Our learning support team works closely with families to put in place a plan tailored to each child. We are a fully inclusive school.",
    },
    {
      q: "What is your class size?",
      a: "Nursery: max 12 per class with two teachers. Primary: max 18 per class. Secondary: max 22 per class. Every child is known.",
    },
    {
      q: "Is there a sibling discount?",
      a: "Yes. The second child receives 10% off tuition; the third child and beyond receives 20% off.",
    },
    {
      q: "What languages are taught?",
      a: "English is the language of instruction throughout. We also teach French (compulsory to JSS3), Igbo (compulsory throughout), and offer Mandarin as an elective at SSS level.",
    },
  ];

  const handleChange =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      parent: "",
      child: "",
      dob: "",
      level: "",
      school: "",
      email: "",
      phone: "",
      source: "",
      message: "",
    });
  };

  return (
    <main>
      <SlidingHero
        title="Join the SoarHigh Family"
        subtitle="Admissions Open for the 2026/2027 Academic Session."
        breadcrumb="Admissions"
        navigate={navigate}
        images={[
          MEDIA.studentsUniform,
          MEDIA.studentsGroup,
          MEDIA.studentSmiling,
          MEDIA.graduation,
        ]}
      >
        <div style={{ marginTop: 32 }}>
          <a
            href="#enquiry"
            className="btn btn-gold btn-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("enquiry")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Apply Now <Icon.arrow />
          </a>
        </div>
      </SlidingHero>

      {/* Intro */}
      <section className="section-tight">
        <div className="container text-center">
          <p
            style={{
              fontSize: 19,
              color: "var(--text-muted)",
              maxWidth: 760,
              margin: "0 auto",
              fontStyle: "italic",
            }}
          >
            "We welcome applications from families who share our commitment to
            excellence, character, and the holistic development of every child."
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">How to Apply</span>
          <h2 className="section-heading underline">The Admissions Process</h2>
          <p className="section-sub">
            Five clear steps, from first enquiry to first day of school.
          </p>
        </div>
        <div className="container" style={{ marginTop: 64 }}>
          <div className="steps-timeline">
            <div className="steps-line"></div>
            {steps.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 120}
                className={`step ${step === i ? "active" : ""}`}
                onClick={() => setStep(i)}
              >
                <div className="step-circle">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-body">{s.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Entry Requirements</span>
          <h2 className="section-heading underline">What You'll Need</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 req-grid">
            {requirements.map((r, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="req-card">
                  <div className="req-top"></div>
                  <span className="req-tag">{r.tag}</span>
                  <h3>{r.level}</h3>
                  <ul>
                    {r.items.map((it, j) => (
                      <li key={j}>
                        <Icon.check /> <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="req-note">Limited spaces available.</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="section">
        <div className="container text-center">
          <span className="eyebrow">Get Started</span>
          <h2 className="section-heading underline">Start Your Application</h2>
          <p className="section-sub">
            Our admissions team will respond within one business day.
          </p>
        </div>
        <div className="container" style={{ marginTop: 48, maxWidth: 820 }}>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Parent / Guardian Full Name</label>
                <input
                  className="form-control"
                  required
                  value={form.parent}
                  onChange={handleChange("parent")}
                  placeholder="Mrs. Ngozi Eze"
                />
              </div>
              <div className="form-group">
                <label>Child's Full Name</label>
                <input
                  className="form-control"
                  required
                  value={form.child}
                  onChange={handleChange("child")}
                  placeholder="Adaeze Eze"
                />
              </div>
              <div className="form-group">
                <label>Child's Date of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  required
                  value={form.dob}
                  onChange={handleChange("dob")}
                />
              </div>
              <div className="form-group">
                <label>Level Applying For</label>
                <select
                  className="form-control"
                  required
                  value={form.level}
                  onChange={handleChange("level")}
                >
                  <option value="">Select a level…</option>
                  <option>Nursery (Ages 1–5)</option>
                  <option>Primary (Ages 6–11)</option>
                  <option>Secondary (Ages 12–18)</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Current School (if any)</label>
                <input
                  className="form-control"
                  value={form.school}
                  onChange={handleChange("school")}
                  placeholder="Lighthouse Academy, Enugu"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="parent@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="+234 803…"
                />
              </div>
              <div className="form-group full">
                <label>How did you hear about us?</label>
                <select
                  className="form-control"
                  value={form.source}
                  onChange={handleChange("source")}
                >
                  <option value="">Choose one…</option>
                  <option>A friend or family member</option>
                  <option>Online search</option>
                  <option>Instagram / Facebook</option>
                  <option>School visit / Open Day</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Message / Additional Information</label>
                <textarea
                  className="form-control"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Anything you'd like us to know about your child…"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-gold btn-lg"
              style={{ width: "100%", marginTop: 8 }}
            >
              {submitted ? "Enquiry Received — Thank You" : "Submit Enquiry"}
            </button>
            <p
              style={{
                fontSize: 12.5,
                color: "var(--text-muted)",
                marginTop: 14,
                textAlign: "center",
              }}
            >
              By submitting this form, you agree to our privacy policy. We will
              never share your details with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">FAQs</span>
          <h2 className="section-heading underline">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="container" style={{ marginTop: 48, maxWidth: 880 }}>
          {faqs.map((f, i) => (
            <div key={i} className={`faq ${openFaq === i ? "open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenFaq((o) => (o === i ? -1 : i))}
              >
                <span>{f.q}</span>
                <span className="faq-icon">
                  <Icon.chevDown />
                </span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Admissions;
