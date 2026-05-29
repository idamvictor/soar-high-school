import React from 'react';
import { NavigateFn } from '../types';
import { SlidingHero, Img } from '../components/Media';
import { MEDIA } from '../data/media';

interface GalleryProps {
  navigate: NavigateFn;
}

const Gallery: React.FC<GalleryProps> = ({ navigate }) => {
  const [active, setActive] = React.useState('All');
  const categories = ['All', 'Events', 'Sports', 'Academics', 'Arts', 'Life'];

  return (
    <div>
      <SlidingHero
        title="Gallery"
        subtitle="Moments from SoarHigh"
        breadcrumb="Gallery"
        navigate={navigate}
        images={[MEDIA.g1, MEDIA.g3, MEDIA.g9]}
      />
      <section className="py-20 px-[--pad-x]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  active === cat
                    ? 'bg-navy text-white'
                    : 'bg-warm-white text-navy border border-navy/20 hover:bg-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[MEDIA.g1, MEDIA.g2, MEDIA.g4, MEDIA.g5, MEDIA.g10, MEDIA.g11, MEDIA.g13, MEDIA.g14].map((img, i) => (
              <div key={i} className="bg-gray-200 rounded-lg overflow-hidden aspect-square hover:shadow-lg transition-shadow">
                <Img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
