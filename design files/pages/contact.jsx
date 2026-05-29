// Contact
function ContactPage({ navigate }) {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const handleChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main>
      <SlidingHero
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        breadcrumb="Contact"
        navigate={navigate}
        images={[MEDIA.schoolBuilding, MEDIA.studentsGroup, MEDIA.studentsUniform, MEDIA.studentSmiling]}
      />

      {/* Contact Info + Form */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — info */}
            <div className="contact-info">
              <span className="eyebrow">Visit, Call or Write</span>
              <h2 className="section-heading underline-left" style={{ textAlign: "left", fontSize: "clamp(28px, 3.5vw, 40px)" }}>Reach Us</h2>
              <div className="info-list">
                <div className="info-row">
                  <div className="info-ic"><Icon.pin /></div>
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">12 Independence Layout,<br/>Enugu, Enugu State, Nigeria</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic"><Icon.phone /></div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">+234 (0) 803 456 7890</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic"><Icon.mail /></div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">info@soarhighschools.edu.ng</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic"><Icon.clock /></div>
                  <div>
                    <div className="info-label">Office Hours</div>
                    <div className="info-value">Monday – Friday<br/>8:00 am – 4:00 pm</div>
                  </div>
                </div>
              </div>

              <div className="admissions-block">
                <h4>Admissions Enquiries</h4>
                <div className="adm-row"><Icon.phone /><span>+234 (0) 803 999 1212</span></div>
                <div className="adm-row"><Icon.mail /><span>admissions@soarhighschools.edu.ng</span></div>
              </div>

              <div className="social-block">
                <div className="social-label">Follow Us</div>
                <div className="social-row contact-social">
                  <a href="#" aria-label="Facebook"><Icon.facebook /></a>
                  <a href="#" aria-label="Instagram"><Icon.instagram /></a>
                  <a href="#" aria-label="Twitter"><Icon.twitter /></a>
                  <a href="#" aria-label="YouTube"><Icon.youtube /></a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p className="form-intro">Fill out the form and a member of our team will respond within one business day.</p>
              <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input className="form-control" required value={form.name} onChange={handleChange("name")} placeholder="Your name" />
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" type="email" required value={form.email} onChange={handleChange("email")} placeholder="you@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input className="form-control" type="tel" value={form.phone} onChange={handleChange("phone")} placeholder="+234…" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select className="form-control" required value={form.subject} onChange={handleChange("subject")}>
                    <option value="">Select…</option>
                    <option>General Enquiry</option>
                    <option>Admissions</option>
                    <option>Fees & Scholarships</option>
                    <option>Visit / Tour Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" required value={form.message} onChange={handleChange("message")} placeholder="Tell us how we can help…"></textarea>
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: "100%", padding: "16px" }}>
                  {sent ? "Message Sent — Thank You" : "Send Message"}
                </button>
                <p style={{ fontSize: 12.5, color: "var(--text-muted)", textAlign: "center", marginTop: 12 }}>
                  We typically respond within 1 business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Location</span>
          <h2 className="section-heading underline">Find Us in Enugu</h2>
        </div>
        <div className="container" style={{ marginTop: 48 }}>
          <div className="map-wrap">
            <svg className="map-svg" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="1200" height="480" fill="#0a2463"/>
              <rect width="1200" height="480" fill="url(#grid)"/>
              {/* Roads */}
              <path d="M0 200 Q 300 180, 600 230 T 1200 220" stroke="rgba(201,168,76,0.25)" strokeWidth="2" fill="none"/>
              <path d="M0 320 Q 400 280, 700 340 T 1200 310" stroke="rgba(201,168,76,0.18)" strokeWidth="2" fill="none"/>
              <path d="M300 0 L 320 480" stroke="rgba(201,168,76,0.15)" strokeWidth="2" fill="none"/>
              <path d="M800 0 L 780 480" stroke="rgba(201,168,76,0.15)" strokeWidth="2" fill="none"/>
              <path d="M520 0 L 540 480" stroke="rgba(201,168,76,0.12)" strokeWidth="2" fill="none"/>
              {/* Blocks */}
              {[[80,80],[180,90],[380,60],[420,150],[560,80],[660,140],[850,80],[920,140],[1050,90],[140,260],[260,280],[400,260],[600,260],[760,260],[920,260],[1060,260],[180,400],[340,380],[600,400],[840,380],[1020,400]].map((b, i) => (
                <rect key={i} x={b[0]} y={b[1]} width="60" height="40" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(201,168,76,0.18)"/>
              ))}
              {/* Pin */}
              <g transform="translate(600 240)">
                <circle r="44" fill="rgba(201,168,76,0.16)">
                  <animate attributeName="r" values="40;52;40" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle r="18" fill="#c9a84c"/>
                <path d="M0 -8 L0 -22 M -8 -8 L 0 -22 L 8 -8" stroke="#0a2463" strokeWidth="2" fill="none"/>
                <text x="0" y="40" fill="#c9a84c" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">SoarHigh Schools</text>
                <text x="0" y="58" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif" fontSize="11" textAnchor="middle">12 Independence Layout, Enugu</text>
              </g>
            </svg>
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="#" className="btn btn-gold">Get Directions <Icon.arrow /></a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quicklinks-section">
        <div className="container">
          <div className="grid grid-3 quicklinks-grid">
            <a href="#" className="quick-box">
              <div className="quick-icon"><Icon.download /></div>
              <h4>Download Prospectus</h4>
              <p>The full 2025/26 SoarHigh prospectus, in PDF.</p>
              <span className="quick-arrow"><Icon.arrow /></span>
            </a>
            <a href="#" className="quick-box" onClick={(e) => { e.preventDefault(); navigate("admissions"); }}>
              <div className="quick-icon"><Icon.formIcon /></div>
              <h4>Apply Online</h4>
              <p>Submit your child's enquiry in under 5 minutes.</p>
              <span className="quick-arrow"><Icon.arrow /></span>
            </a>
            <a href="#" className="quick-box">
              <div className="quick-icon"><Icon.calendar /></div>
              <h4>Book a School Visit</h4>
              <p>See the school for yourself — open every Wednesday.</p>
              <span className="quick-arrow"><Icon.arrow /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ContactPage = ContactPage;
