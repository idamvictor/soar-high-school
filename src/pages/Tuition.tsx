import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero, Reveal } from '../components/Media';
import { MEDIA } from '../data/media';
import { Icon } from '../components/Icons';

interface TuitionProps {
  navigate: NavigateFn;
}

const Tuition: React.FC<TuitionProps> = ({ navigate }) => {
  const fees = [
    {
      level: "Nursery",
      featured: false,
      items: [
        { label: "Tuition (per term)", value: "₦ 350,000" },
        { label: "Development Levy (annual)", value: "₦ 80,000" },
        { label: "Uniform & Books (one-time)", value: "₦ 90,000" },
        { label: "Optional: School Bus", value: "₦ 60,000" },
      ],
      total: "₦ 1,140,000",
      totalLabel: "Total Year One",
    },
    {
      level: "Primary",
      featured: true,
      items: [
        { label: "Tuition (per term)", value: "₦ 480,000" },
        { label: "Development Levy (annual)", value: "₦ 100,000" },
        { label: "Uniform & Books (one-time)", value: "₦ 120,000" },
        { label: "Optional: School Bus", value: "₦ 70,000" },
      ],
      total: "₦ 1,580,000",
      totalLabel: "Total Year One",
    },
    {
      level: "Secondary",
      featured: false,
      items: [
        { label: "Tuition (per term)", value: "₦ 620,000" },
        { label: "Development Levy (annual)", value: "₦ 120,000" },
        { label: "Uniform & Books (one-time)", value: "₦ 150,000" },
        { label: "Optional: School Bus", value: "₦ 80,000" },
      ],
      total: "₦ 2,010,000",
      totalLabel: "Total Year One",
    },
  ];

  const covers = [
    { icon: <Icon.book />, label: "Qualified, experienced teaching staff" },
    { icon: <Icon.gear />, label: "Modern classrooms & laboratories" },
    { icon: <Icon.bulb />, label: "Library & digital learning resources" },
    { icon: <Icon.ball />, label: "Sports facilities & equipment" },
    { icon: <Icon.flag />, label: "School events & off-campus excursions" },
    { icon: <Icon.shield />, label: "24/7 security & welfare of every student" },
  ];

  return (
    <main>
      <SlidingHero
        title="Tuition & Fees"
        subtitle="Investing in Your Child's Future."
        breadcrumb="Tuition & Fees"
        navigate={navigate}
        images={[
          MEDIA.academicsHero1,
          MEDIA.academicsHero2,
          MEDIA.academicsHero3,
          MEDIA.academicsHero4,
        ]}
      />

      <section className="section-tight">
        <div className="container text-center">
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 760, margin: "0 auto" }}>
            At SoarHigh, we believe every child deserves a world-class education. Our fees reflect the quality of our facilities, staff and programmes — with flexible payment options to support your family.
          </p>
        </div>
      </section>

      {/* Fee cards */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Schedule</span>
          <h2 className="section-heading underline">2025/2026 Academic Year Fees</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="fee-grid">
            {fees.map((f, i) => (
              <Reveal key={i} delay={i * 140}>
                <div className={`fee-card ${f.featured ? "featured" : ""}`}>
                  {f.featured && <div className="fee-badge">Most Popular</div>}
                  <h3>{f.level}</h3>
                  <div className="fee-items">
                    {f.items.map((it, j) => (
                      <div key={j} className="fee-row">
                        <span className="fee-label">{it.label}</span>
                        <span className="fee-dash"></span>
                        <span className="fee-value">{it.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="fee-total">
                    <div className="fee-total-label">{f.totalLabel}</div>
                    <div className="fee-total-value">{f.total}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: 14, color: "var(--text-muted)", fontStyle: "italic", textAlign: "center" }}>
            All fees quoted in Nigerian Naira (NGN). USD payment accepted — contact admissions for the current rate.
          </p>
        </div>
      </section>

      {/* Covers */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Value</span>
          <h2 className="section-heading underline">What Your Investment Covers</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="covers-grid">
            {covers.map((c, i) => (
              <Reveal key={i} delay={(i % 2) * 80}>
                <div className="cover-row">
                  <div className="cover-icon">{c.icon}</div>
                  <div className="cover-text">{c.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Flexibility</span>
          <h2 className="section-heading underline">Payment Options</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 payment-grid">
            <div className="payment-card featured">
              <div className="payment-badge"><Icon.star /> Best Value</div>
              <h3>Full Payment</h3>
              <div className="payment-sub">Annual, one-time</div>
              <ul>
                <li><Icon.check /> 5% discount on total tuition</li>
                <li><Icon.check /> Priority class allocation</li>
                <li><Icon.check /> Locked-in rate for the year</li>
                <li><Icon.check /> No mid-year top-ups</li>
              </ul>
              <button className="btn btn-gold" onClick={() => navigate("contact")}>Choose Full Payment</button>
            </div>
            <div className="payment-card">
              <h3>Termly Payment</h3>
              <div className="payment-sub">Three terms per year</div>
              <ul>
                <li><Icon.check /> Pay at the start of each term</li>
                <li><Icon.check /> Standard fee schedule</li>
                <li><Icon.check /> Predictable, simple cycle</li>
                <li><Icon.check /> Most popular among parents</li>
              </ul>
              <button className="btn btn-outline-navy" onClick={() => navigate("contact")}>Choose Termly</button>
            </div>
            <div className="payment-card">
              <h3>Instalment Plan</h3>
              <div className="payment-sub">Monthly, by arrangement</div>
              <ul>
                <li><Icon.check /> Spread costs over 9 months</li>
                <li><Icon.check /> Direct debit available</li>
                <li><Icon.check /> Small administration fee</li>
                <li><Icon.check /> Discussed case-by-case</li>
              </ul>
              <button className="btn btn-outline-navy" onClick={() => navigate("contact")}>Discuss Instalments</button>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="scholarships">
        <div className="container">
          <div className="scholar-inner">
            <div className="scholar-icon"><Icon.trophy /></div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Scholarships</span>
            <h2 style={{ color: "white", fontSize: "clamp(32px, 4vw, 48px)", margin: "12px 0 20px" }}>Scholarships & Financial Support</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, maxWidth: 640, margin: "0 auto 32px" }}>
              SoarHigh awards a small number of merit-based and need-based scholarships every academic year — covering up to 100% of tuition. We believe excellence shouldn't be limited by means.
            </p>
            <button className="btn btn-gold btn-lg" onClick={() => navigate("contact")}>Enquire About Scholarships <Icon.arrow /></button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tuition;
