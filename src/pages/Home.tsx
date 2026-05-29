import React from 'react';
import { NavigateFn } from '../types';
import { VirtualTourModal, Reveal, Img } from '../components/Media';
import { StatsStrip } from '../components/Shared';
import { Icon } from '../components/Icons';
import { MEDIA } from '../data/media';

interface HomeProps {
  navigate: NavigateFn;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const [tourOpen, setTourOpen] = React.useState(false);
  const [heroIdx, setHeroIdx] = React.useState(0);

  const heroLines = [
    "Where Excellence Takes Flight.",
    "Raising Tomorrow's Leaders.",
    "Rooted in Enugu. Reaching the World."
  ];

  const pillars = [
    {
      icon: <Icon.book />,
      title: "Academic Excellence",
      body: "A rigorous, balanced curriculum that prepares students for top universities and a changing world."
    },
    {
      icon: <Icon.shield />,
      title: "Character & Integrity",
      body: "We nurture honest, principled young people who lead with conviction and humility."
    },
    {
      icon: <Icon.bulb />,
      title: "Creative Thinking",
      body: "Inquiry, problem-solving, and the arts are woven into everything our students do."
    },
    {
      icon: <Icon.globe />,
      title: "Global Citizenship",
      body: "Proudly Nigerian. Prepared for the world. Our students belong everywhere."
    }
  ];

  const achievements = [
    {
      title: "Best School in Enugu 2023",
      body: "Enugu State Education Excellence Awards"
    },
    {
      title: "National Mathematics Olympiad",
      body: "Top 3 finish, three years running"
    },
    {
      title: "WAEC Distinction Cohort",
      body: "98% pass rate in 2024"
    },
    {
      title: "Cowbellpedia Champions",
      body: "Regional finalists, 2024"
    }
  ];

  const levels = [
    {
      icon: <Icon.baby />,
      name: "Nursery",
      age: "Ages 1–5",
      body: "Play-based learning where curiosity, kindness and confidence take root."
    },
    {
      icon: <Icon.book />,
      name: "Primary",
      age: "Ages 6–11",
      body: "Strong foundations in literacy, numeracy and inquiry — across nine subject areas."
    },
    {
      icon: <Icon.graduation />,
      name: "Secondary",
      age: "Ages 12–18",
      body: "JSS and SSS programmes with WAEC/NECO preparation and university guidance."
    }
  ];

  const testimonials = [
    {
      quote: "SoarHigh has given our daughter not only a brilliant academic start but the confidence to stand up and lead. We could not have asked for more.",
      name: "Mrs. Ngozi Eze",
      level: "Parent of Primary 4 student"
    },
    {
      quote: "The teachers know each child personally. My son walks into school excited every single morning — that tells you everything.",
      name: "Dr. Emeka Okafor",
      level: "Parent of JSS 2 student"
    },
    {
      quote: "From the moment we visited, we knew this was different. The discipline, the warmth, the standard — it all just felt right.",
      name: "Mr. & Mrs. Adaeze",
      level: "Parents of Nursery 2 student"
    }
  ];

  React.useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroLines.length), 3600);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen grid place-items-center overflow-hidden pt-[120px] pb-[100px] px-[--pad-x] text-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={MEDIA.heroPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={MEDIA.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/65 to-navy-dark/85"></div>
        </div>

        <div className="relative z-10 max-w-[980px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-8 animate-[sweepIn_1.1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
            <span className="h-px w-12 bg-gold"></span>
            <span>SoarHigh Schools · Est. 2010</span>
            <span className="h-px w-12 bg-gold"></span>
          </div>

          {/* Rotating Headline */}
          <div className="relative h-[clamp(180px,22vw,280px)] mb-7 animate-[sweepIn_1.1s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
            {heroLines.map((line, i) => (
              <h1
                key={i}
                className={`absolute inset-0 text-white text-[clamp(40px,6.5vw,86px)] font-serif font-semibold tracking-[-0.02em] leading-[1.05] flex items-center justify-center transition-all duration-900 ${
                  heroIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
                }`}
              >
                {line}
              </h1>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-[clamp(15px,1.7vw,19px)] text-white/88 max-w-[640px] mx-auto mb-10 leading-relaxed animate-[sweepIn_1.1s_cubic-bezier(0.22,1,0.36,1)_0.8s_both]">
            A world-class nursery through secondary school experience in the heart of Enugu State.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap animate-[sweepIn_1.1s_cubic-bezier(0.22,1,0.36,1)_1s_both]">
            <button
              onClick={() => navigate('admissions')}
              className="inline-flex items-center gap-2.5 px-9 py-[17px] bg-gold text-navy font-semibold text-base tracking-[0.02em] rounded-full hover:bg-gold-soft transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(201,168,76,0.35)]"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => setTourOpen(true)}
              className="inline-flex items-center gap-2.5 px-9 py-[17px] border-2 border-white text-white font-semibold text-base tracking-[0.02em] rounded-full hover:bg-white hover:text-navy transition-all hover:-translate-y-0.5"
            >
              Take a Virtual Tour
            </button>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-[sweepIn_1.1s_cubic-bezier(0.22,1,0.36,1)_1.4s_both]">
          <hr className="h-0.5 bg-gold w-20 mx-auto mb-4 border-none" />
          <div className="inline-flex flex-col items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-semibold animate-bounce">
            <span>Scroll</span>
            <Icon.chevDown width={18} height={18} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsStrip
        stats={[
          { num: "500+", label: "Students Enrolled" },
          { num: "3", label: "Academic Levels" },
          { num: "15+", label: "Years of Excellence" },
          { num: "100%", label: "University Placement" }
        ]}
      />

      {/* PILLARS */}
      <section className="py-[clamp(72px,9vw,120px)] px-[--pad-x]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-deep text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">What We Stand For</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-navy inline-block relative">
              Built on Four Pillars
              <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-16 h-0.75 bg-gold block animate-[drawLine_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"></span>
            </h2>
            <p className="text-text-muted text-base max-w-[680px] mx-auto pt-12">Everything we do at SoarHigh is guided by four core commitments to every child in our care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
            {pillars.map((pillar, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-none border-t-3 border-navy p-9 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gold/14 text-gold-deep flex items-center justify-center mb-5 place-items-center">
                    {React.cloneElement(pillar.icon as React.ReactElement, { width: 28, height: 28 })}
                  </div>
                  <h3 className="font-serif text-[22px] text-navy font-semibold mb-2.5">{pillar.title}</h3>
                  <p className="text-text-muted text-base leading-relaxed">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-[clamp(72px,9vw,120px)] px-[--pad-x] bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* Left column */}
            <div>
              <span className="text-gold-deep text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">Recognition</span>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-navy relative inline-block mb-4.5">
                Award-Winning.<br />Recognised. Celebrated.
                <span className="absolute bottom-[-18px] left-0 w-16 h-0.75 bg-gold block animate-[drawLine_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"></span>
              </h2>
              <p className="text-text-muted text-base max-w-[460px] mt-9 leading-relaxed">
                Across academics, sports and the arts, SoarHigh students consistently rank among the very best in Enugu State and beyond. Our trophy cabinet keeps growing — but what matters most is the confidence it builds in every child.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('about');
                }}
                className="inline-flex items-center gap-2 text-gold-deep font-semibold text-base tracking-[0.02em] border-b-1.5 border-gold pb-1 mt-8 hover:gap-3.5 transition-all"
              >
                See all achievements <Icon.arrow width={16} height={16} />
              </a>
            </div>

            {/* Right column - achievements grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="bg-white p-6.5 border border-[rgba(10,36,99,0.12)] rounded-xl hover:border-gold hover:-translate-y-0.75 hover:shadow-md transition-all">
                    <Icon.trophy width={32} height={32} className="text-gold-deep mb-3.5" />
                    <h4 className="font-serif text-navy font-semibold text-base mb-1.5">{a.title}</h4>
                    <p className="text-text-muted text-sm">{a.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative overflow-hidden bg-navy">
          <Img src={MEDIA.studentsUniform} alt="SoarHigh students in uniform" label="Students" />
        </div>
        <div className="bg-navy text-white px-[clamp(32px,5vw,80px)] py-[clamp(48px,6vw,96px)] flex flex-col justify-center">
          <span className="text-gold text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">Our Story</span>
          <h2 className="text-white text-[clamp(32px,4vw,44px)] font-serif font-semibold leading-tight mb-5">About SoarHigh Schools</h2>
          <p className="text-white/85 text-base leading-relaxed mb-4">
            Founded in Enugu in 2010, SoarHigh Schools has spent more than a decade quietly redefining what excellent African education looks like. We blend the Nigerian national curriculum with international best practice, holding every student to a single, simple standard: be the best version of yourself.
          </p>
          <p className="text-white/85 text-base leading-relaxed mb-7">
            Today, our graduates study at leading universities across Nigeria, the UK, the US and Canada — but they all return home for the same reason. SoarHigh shaped them.
          </p>
          <button
            onClick={() => navigate('about')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 border-2 border-white text-white font-semibold text-sm tracking-[0.02em] rounded-full hover:bg-white hover:text-navy transition-all hover:-translate-y-0.5 self-start"
          >
            Learn More About Us <Icon.arrow width={14} height={14} />
          </button>
        </div>
      </section>

      {/* ACADEMICS PREVIEW */}
      <section className="py-[clamp(72px,9vw,120px)] px-[--pad-x] bg-warm-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-deep text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">Academic Levels</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-navy inline-block relative">
              Three Levels of Excellence
              <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-16 h-0.75 bg-gold block animate-[drawLine_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"></span>
            </h2>
            <p className="text-text-muted text-base max-w-[680px] mx-auto pt-12">From a child's very first day to their university send-off — a single, continuous journey of growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {levels.map((level, i) => (
              <Reveal key={i} delay={i * 130}>
                <div className="bg-white rounded-sm border-t-3 border-navy p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-start">
                  <div className="w-14 h-14 rounded-xl bg-gold/14 text-gold-deep flex items-center justify-center mb-5 place-items-center">
                    {React.cloneElement(level.icon as React.ReactElement, { width: 28, height: 28 })}
                  </div>
                  <div className="text-gold-deep text-xs tracking-[0.12em] uppercase mb-1.5">{level.age}</div>
                  <h3 className="font-serif text-navy font-semibold text-[26px] mb-3.5">{level.name}</h3>
                  <p className="text-text-muted text-base leading-relaxed mb-6 flex-grow">{level.body}</p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('academics');
                    }}
                    className="inline-flex items-center gap-2 text-gold-deep font-semibold text-sm tracking-[0.02em] border-b-1.5 border-gold hover:gap-3.5 transition-all"
                  >
                    Explore <Icon.arrow width={14} height={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="bg-navy py-[clamp(80px,10vw,140px)] px-[--pad-x] text-center relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <span className="text-gold text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">Step Inside</span>
          <h2 className="text-gold text-[clamp(32px,4vw,48px)] font-serif font-semibold mb-5">Experience Our Campus</h2>
          <p className="text-white/85 text-base max-w-[560px] mx-auto mb-12">
            Take a 360° virtual walkthrough of our world-class facilities — from our science labs and library to our sports complex and arts centre.
          </p>

          {/* Play orb with pulsing rings */}
          <button
            onClick={() => setTourOpen(true)}
            className="relative w-[100px] h-[100px] rounded-full bg-gold text-navy flex items-center justify-center mx-auto mb-8 cursor-pointer hover:scale-105 transition-transform"
            aria-label="Play virtual tour"
          >
            <span className="absolute inset-[-16px] border-1.5 border-gold/40 rounded-full animate-pulse"></span>
            <span className="absolute inset-[-32px] border-1.5 border-gold/40 rounded-full animate-pulse" style={{ animationDelay: '1.25s' }}></span>
            <Icon.play width={36} height={36} className="ml-1" />
          </button>

          <button
            onClick={() => setTourOpen(true)}
            className="inline-flex items-center gap-2.5 px-7 py-[14px] border-2 border-white text-white font-semibold text-base tracking-[0.02em] rounded-full hover:bg-white hover:text-navy transition-all hover:-translate-y-0.5"
          >
            Start Virtual Tour
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[clamp(72px,9vw,120px)] px-[--pad-x] bg-warm-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-deep text-xs tracking-[0.18em] uppercase font-semibold inline-block mb-4">Parent Voices</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-navy inline-block relative">
              What Parents Are Saying
              <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-16 h-0.75 bg-gold block animate-[drawLine_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-white border-1.5 border-navy p-9 rounded-sm relative">
                  <div className="text-gold mb-4 animate-drift">
                    <Icon.quote width={32} height={32} />
                  </div>
                  <p className="italic text-text-dark text-base leading-relaxed mb-6">{t.quote}</p>
                  <div className="flex gap-1 text-gold mb-4">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Icon.star
                        key={s}
                        width={16}
                        height={16}
                        className="animate-twinkle"
                        style={{ animationDelay: `${s * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-navy font-bold text-base">{t.name}</div>
                  <div className="text-text-muted text-sm mt-0.5">{t.level}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gold py-[clamp(72px,9vw,112px)] px-[--pad-x] text-center">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold text-navy max-w-[820px] mx-auto mb-4">
            Ready to Give Your Child the SoarHigh Advantage?
          </h2>
          <p className="text-navy text-base max-w-[600px] mx-auto mb-8 opacity-85">
            Applications for the 2025/2026 academic session are now open.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('admissions')}
              className="inline-flex items-center gap-2.5 px-9 py-[17px] bg-navy text-white font-semibold text-base tracking-[0.02em] rounded-full hover:bg-navy-light transition-all hover:-translate-y-0.5"
            >
              Apply Now
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2.5 px-9 py-[17px] border-2 border-navy text-navy font-semibold text-base tracking-[0.02em] rounded-full hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      <VirtualTourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </main>
  );
};

export default Home;
