import React from "react";
import { NavigateFn } from "../types";
import { SlidingHero } from "../components/Media";
import { MEDIA } from "../data/media";
import { Icon } from "../components/Icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for Leaflet default icon issues in React/Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerRetina,
  shadowUrl: markerShadow,
});

interface ContactProps {
  navigate: NavigateFn;
}

const Contact: React.FC<ContactProps> = ({ navigate }) => {
  const position: [number, number] = [6.4468, 7.5115]; // Enugu, Independence Layout

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = React.useState(false);

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
        images={[
          MEDIA.academicsHero1,
          MEDIA.academicsHero2,
          MEDIA.academicsHero3,
          MEDIA.academicsHero4,
        ]}
      />

      {/* Contact Info + Form */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — info */}
            <div className="contact-info">
              <span className="eyebrow">Visit, Call or Write</span>
              <h2
                className="section-heading underline-left"
                style={{
                  textAlign: "left",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                }}
              >
                Reach Us
              </h2>
              <div className="info-list">
                <div className="info-row">
                  <div className="info-ic">
                    <Icon.pin />
                  </div>
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">
                      12 Independence Layout,
                      <br />
                      Enugu, Enugu State, Nigeria
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic">
                    <Icon.phone />
                  </div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">+234 (0) 803 456 7890</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic">
                    <Icon.mail />
                  </div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">
                      info@soarhighschools.edu.ng
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-ic">
                    <Icon.clock />
                  </div>
                  <div>
                    <div className="info-label">Office Hours</div>
                    <div className="info-value">
                      Monday – Friday
                      <br />
                      8:00 am – 4:00 pm
                    </div>
                  </div>
                </div>
              </div>

              <div className="admissions-block">
                <h4>Admissions Enquiries</h4>
                <div className="adm-row">
                  <Icon.phone />
                  <span>+234 (0) 803 999 1212</span>
                </div>
                <div className="adm-row">
                  <Icon.mail />
                  <span>admissions@soarhighschools.edu.ng</span>
                </div>
              </div>

              <div className="social-block">
                <div className="social-label">Follow Us</div>
                <div className="social-row contact-social">
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
            </div>

            {/* Right — form */}
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p className="form-intro">
                Fill out the form and a member of our team will respond within
                one business day.
              </p>
              <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    className="form-control"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      placeholder="+234…"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select
                    className="form-control"
                    required
                    value={form.subject}
                    onChange={handleChange("subject")}
                  >
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
                  <textarea
                    className="form-control"
                    required
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us how we can help…"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "16px" }}
                >
                  {sent ? "Message Sent — Thank You" : "Send Message"}
                </button>
                <p
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-muted)",
                    textAlign: "center",
                    marginTop: 12,
                  }}
                >
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
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "480px", width: "100%", zIndex: 1 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <strong>SoarHigh Schools</strong> <br />
                  12 Independence Layout, Enugu
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
