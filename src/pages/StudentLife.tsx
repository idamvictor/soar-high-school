import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero, Reveal } from '../components/Media';
import { MEDIA } from '../data/media';

interface StudentLifeProps {
  navigate: NavigateFn;
}

const StudentLife: React.FC<StudentLifeProps> = ({ navigate }) => {
  return (
    <div>
      <SlidingHero
        title="Student Life"
        subtitle="Beyond Academics"
        breadcrumb="Student Life"
        navigate={navigate}
        images={[MEDIA.studentsGroup, MEDIA.drama]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-navy text-center mb-12">Our Clubs & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Debate', 'Science', 'Drama', 'Literature', 'Coding', 'Sports', 'Arts', 'Music'].map((club, i) => (
              <Reveal key={i} delay={i * 80} className="p-6 bg-warm-white rounded-lg border border-gold/20 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-lg font-semibold text-navy">{club}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
