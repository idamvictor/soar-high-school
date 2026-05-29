import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero } from '../components/Media';
import { MEDIA } from '../data/media';

interface AdmissionsProps {
  navigate: NavigateFn;
}

const Admissions: React.FC<AdmissionsProps> = ({ navigate }) => {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div>
      <SlidingHero
        title="Admissions"
        subtitle="Join Our Community"
        breadcrumb="Admissions"
        navigate={navigate}
        images={[MEDIA.studentsUniform, MEDIA.classroomPrimary]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-navy text-center mb-4">Apply Today</h2>
          <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">Send us your inquiry and we'll be in touch</p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-warm-white p-8 rounded-lg border border-gold/20">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-2 border border-navy/20 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 border border-navy/20 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="md:col-span-2 px-4 py-2 border border-navy/20 rounded h-24"
              required
            />
            <button
              type="submit"
              className="md:col-span-2 px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-dark transition-colors"
            >
              {submitted ? 'Sent!' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
