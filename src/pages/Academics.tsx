import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero } from '../components/Media';
import { MEDIA } from '../data/media';

interface AcademicsProps {
  navigate: NavigateFn;
}

const Academics: React.FC<AcademicsProps> = ({ navigate }) => {
  return (
    <div>
      <SlidingHero
        title="Academics"
        subtitle="Excellence in Education"
        breadcrumb="Academics"
        navigate={navigate}
        images={[MEDIA.classroomPrimary, MEDIA.classroomSecondary]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-navy text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Nursery', desc: 'Foundation years for young learners' },
              { title: 'Primary', desc: 'Building strong fundamentals' },
              { title: 'Secondary', desc: 'Preparing for excellence' },
            ].map((prog, i) => (
              <div key={i} className="p-8 bg-warm-white rounded-lg border border-gold/20">
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">{prog.title}</h3>
                <p className="text-text-muted">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
