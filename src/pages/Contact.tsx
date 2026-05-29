import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero } from '../components/Media';
import { MEDIA } from '../data/media';

interface ContactProps {
  navigate: NavigateFn;
}

const Contact: React.FC<ContactProps> = ({ navigate }) => {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div>
      <SlidingHero
        title="Contact Us"
        subtitle="Get In Touch"
        breadcrumb="Contact"
        navigate={navigate}
        images={[MEDIA.schoolBuilding]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy mb-1">Location</h3>
                  <p className="text-text-muted">12 Independence Layout, Enugu, Enugu State, Nigeria</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Phone</h3>
                  <p className="text-text-muted">+234 (0) 803 456 7890</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <p className="text-text-muted">info@soarhighschools.edu.ng</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Hours</h3>
                  <p className="text-text-muted">Monday – Friday, 8:00am – 4:00pm</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded focus:outline-none focus:border-gold"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded focus:outline-none focus:border-gold"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded focus:outline-none focus:border-gold"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded h-32 focus:outline-none focus:border-gold resize-none"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-dark transition-colors"
              >
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
