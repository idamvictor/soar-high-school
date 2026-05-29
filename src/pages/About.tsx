import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero } from '../components/Media';
import { MEDIA } from '../data/media';

interface AboutProps {
  navigate: NavigateFn;
}

const About: React.FC<AboutProps> = ({ navigate }) => {
  return (
    <div>
      <SlidingHero
        title="About SoarHigh Schools"
        subtitle="Our Story, Mission & Vision"
        breadcrumb="About Us"
        navigate={navigate}
        images={[MEDIA.schoolBuilding, MEDIA.studentsGroup]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-navy text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Excellence', 'Integrity', 'Innovation', 'Community', 'Diversity', 'Growth'].map((value, i) => (
              <div key={i} className="p-8 bg-warm-white rounded-lg border border-gold/20">
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">{value}</h3>
                <p className="text-text-muted text-sm">Guiding principle for all we do.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
