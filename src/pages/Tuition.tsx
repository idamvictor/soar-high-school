import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero } from '../components/Media';
import { MEDIA } from '../data/media';

interface TuitionProps {
  navigate: NavigateFn;
}

const Tuition: React.FC<TuitionProps> = ({ navigate }) => {
  return (
    <div>
      <SlidingHero
        title="Tuition & Fees"
        subtitle="Transparent Pricing"
        breadcrumb="Tuition & Fees"
        navigate={navigate}
        images={[MEDIA.schoolBuilding]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-navy text-center mb-12">Fee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: 'Nursery', annual: '₦350,000' },
              { level: 'Primary', annual: '₦520,000' },
              { level: 'Secondary', annual: '₦720,000' },
            ].map((fee, i) => (
              <div key={i} className="p-8 bg-warm-white rounded-lg border border-gold/20 text-center">
                <h3 className="font-serif text-2xl font-semibold text-navy mb-4">{fee.level}</h3>
                <div className="text-4xl font-semibold text-gold mb-2">{fee.annual}</div>
                <p className="text-sm text-text-muted">per annum</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tuition;
