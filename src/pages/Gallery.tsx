import React from "react";
import { NavigateFn } from "../types";
import { SlidingHero, Reveal, Img, SlideshowModal } from "../components/Media";
import { MEDIA } from "../data/media";
import { Icon } from "../components/Icons";

interface GalleryProps {
  navigate: NavigateFn;
}

const Gallery: React.FC<GalleryProps> = ({ navigate }) => {
  const [slideshowOpen, setSlideshowOpen] = React.useState(false);
  const [videoOpen, setVideoOpen] = React.useState(false);
  const [initialIdx, setInitialIdx] = React.useState(0);

  const photos = [
    {
      cat: "Graduation",
      title: "Class of 2024 Graduation",
      date: "13 Jul 2024",
      span: "tall",
      src: MEDIA.academicsHero3,
    },
    {
      cat: "Cultural Day",
      title: "Cultural Day Procession",
      date: "14 Feb 2024",
      span: "",
      src: MEDIA.aboutHero2,
    },
    {
      cat: "Sports",
      title: "Inter-house Sports Final",
      date: "6 Mar 2024",
      span: "wide",
      src: MEDIA.tourSportsField,
    },
    {
      cat: "Academic Events",
      title: "Science Fair Winners",
      date: "22 Nov 2023",
      span: "",
      src: MEDIA.academicsHero1,
    },
    {
      cat: "Cultural Day",
      title: "Igbo Dance Ensemble",
      date: "14 Feb 2024",
      span: "tall",
      src: MEDIA.tourPerformingArts,
    },
    {
      cat: "Sports",
      title: "Football Champions",
      date: "Apr 2024",
      span: "",
      src: MEDIA.academicsHero4,
    },
    {
      cat: "Academic Events",
      title: "Maths Olympiad",
      date: "Oct 2023",
      span: "",
      src: MEDIA.tourComputerLab,
    },
    {
      cat: "Graduation",
      title: "Valedictory Speech",
      date: "13 Jul 2024",
      span: "wide",
      src: MEDIA.aboutHero3,
    },
    {
      cat: "School Life",
      title: "Library Quiet Hour",
      date: "Daily",
      span: "",
      src: MEDIA.tourSchoolLibrary,
    },
    {
      cat: "Cultural Day",
      title: "Traditional Attire",
      date: "14 Feb 2024",
      span: "",
      src: MEDIA.aboutHero4,
    },
    {
      cat: "Sports",
      title: "Athletics Day",
      date: "Mar 2024",
      span: "tall",
      src: MEDIA.academicsHero2,
    },
    {
      cat: "Academic Events",
      title: "Science Exhibition",
      date: "Nov 2023",
      span: "",
      src: MEDIA.tourScienceCenter,
    },
    {
      cat: "School Life",
      title: "Nursery Playtime",
      date: "Daily",
      span: "",
      src: MEDIA.tourNurseryWing,
    },
    {
      cat: "Graduation",
      title: "Leadership Excellence",
      date: "Jul 2024",
      span: "wide",
      src: MEDIA.leaderDefault,
    },
    {
      cat: "School Life",
      title: "Students in Class",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g16,
    },
    {
      cat: "School Life",
      title: "Outdoor Activity",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g17,
    },
    {
      cat: "School Life",
      title: "Group Discussion",
      date: "Jun 2026",
      span: "tall",
      src: MEDIA.g18,
    },
    {
      cat: "Academic Events",
      title: "Library Study Session",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g19,
    },
    {
      cat: "School Life",
      title: "Break Time",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g20,
    },
    {
      cat: "Sports",
      title: "Football Practice",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g21,
    },
    {
      cat: "Cultural Day",
      title: "Dance Practice",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g22,
    },
    {
      cat: "Academic Events",
      title: "Science Lab Experiment",
      date: "Jun 2026",
      span: "tall",
      src: MEDIA.g23,
    },
    {
      cat: "School Life",
      title: "Campus Walk",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g24,
    },
    {
      cat: "School Life",
      title: "Student Presentation",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g25,
    },
    {
      cat: "School Life",
      title: "Reading Room",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g26,
    },
    {
      cat: "Cultural Day",
      title: "Art Class",
      date: "Jun 2026",
      span: "tall",
      src: MEDIA.g27,
    },
    {
      cat: "School Life",
      title: "Morning Exercise",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g28,
    },
    {
      cat: "Academic Events",
      title: "Project Work",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g29,
    },
    {
      cat: "School Life",
      title: "Peer Learning",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g30,
    },
    {
      cat: "Graduation",
      title: "Preparation for Graduation",
      date: "Jun 2026",
      span: "tall",
      src: MEDIA.g31,
    },
    {
      cat: "School Life",
      title: "Classroom Discussion",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g32,
    },
    {
      cat: "School Life",
      title: "School Hall Event",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g33,
    },
    {
      cat: "School Life",
      title: "Student Interaction",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g34,
    },
    {
      cat: "Academic Events",
      title: "Workshop Session",
      date: "Jun 2026",
      span: "tall",
      src: MEDIA.g35,
    },
    {
      cat: "School Life",
      title: "After School Activities",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g36,
    },
    {
      cat: "Sports",
      title: "Sports Complex",
      date: "Jun 2026",
      span: "wide",
      src: MEDIA.g37,
    },
    {
      cat: "School Life",
      title: "Main Entrance",
      date: "Jun 2026",
      span: "",
      src: MEDIA.g38,
    },
  ];

  const openSlideshow = (idx: number) => {
    setInitialIdx(idx);
    setSlideshowOpen(true);
  };

  const videos = [
    {
      title: "Graduation Day 2024",
      duration: "4:32",
      src: MEDIA.v1,
      videoUrl:
        "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
    },
    {
      title: "Annual Sports Day 2024",
      duration: "6:18",
      src: MEDIA.v2,
      videoUrl:
        "https://videos.pexels.com/video-files/4763824/4763824-hd_1920_1080_24fps.mp4",
    },
    {
      title: "Cultural Day Showcase 2023",
      duration: "3:55",
      src: MEDIA.v3,
      videoUrl:
        "https://videos.pexels.com/video-files/4255146/4255146-hd_1920_1080_24fps.mp4",
    },
  ];

  const openVideo = (idx: number) => {
    setInitialIdx(idx);
    setVideoOpen(true);
  };

  const achievements = [
    {
      name: "Best School in Enugu",
      year: "2023",
      body: "Enugu State Education Excellence Awards",
    },
    {
      name: "Cowbellpedia Regional Finalists",
      year: "2024",
      body: "Top 4 in the South-East zone",
    },
    {
      name: "WAEC Distinction Cohort",
      year: "2024",
      body: "98% pass rate across the cohort",
    },
    {
      name: "National Mathematics Olympiad",
      year: "2023",
      body: "Third place finish, national level",
    },
    {
      name: "Inter-Schools Football Champions",
      year: "2024",
      body: "Enugu State League title",
    },
    {
      name: "Junior Achievement Top Pitch",
      year: "2024",
      body: "Regional entrepreneurship competition",
    },
  ];

  return (
    <main>
      <SlidingHero
        title="Our Gallery"
        subtitle="Moments That Define the SoarHigh Experience."
        breadcrumb="Gallery"
        navigate={navigate}
        images={[
          MEDIA.academicsHero1,
          MEDIA.academicsHero2,
          MEDIA.academicsHero3,
          MEDIA.academicsHero4,
        ]}
      />

      {/* Photo Grid */}
      <section className="section">
        <div className="container">
          <div className="masonry">
            {photos.map((p, i) => (
              <div
                key={i}
                className={`masonry-tile ${p.span}`}
                onClick={() => openSlideshow(i)}
              >
                <Img src={p.src} alt="Gallery image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="videos-section">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Video Highlights
          </span>
          <h2
            style={{ color: "var(--gold)", fontSize: "clamp(32px, 4vw, 44px)" }}
          >
            Video Highlights
          </h2>
        </div>
        <div className="container" style={{ marginTop: 48 }}>
          <div className="grid grid-3 video-grid">
            {videos.map((v, i) => (
              <Reveal key={i} delay={i * 130}>
                <div className="video-card" onClick={() => openVideo(i)}>
                  <div className="video-thumb img-slot">
                    <Img src={v.src} alt={v.title} label="Video" />
                    <button className="video-play">
                      <Icon.play />
                    </button>
                    <span className="video-duration">{v.duration}</span>
                  </div>
                  <h4>{v.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Excellence */}
      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="container text-center">
          <span className="eyebrow">Achievements</span>
          <h2 className="section-heading underline">Wall of Excellence</h2>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid grid-3 wall-grid">
            {achievements.map((a, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="wall-card">
                  <div className="wall-icon">
                    <Icon.trophy />
                  </div>
                  <div className="wall-year">{a.year}</div>
                  <h4>{a.name}</h4>
                  <p>{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Slideshow Modal */}
      <SlideshowModal
        open={slideshowOpen}
        onClose={() => setSlideshowOpen(false)}
        items={photos}
        title="Gallery Showcase"
        initialIdx={initialIdx}
      />

      {/* Video Slideshow Modal */}
      <SlideshowModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        items={videos.map((v) => ({
          src: v.videoUrl,
          title: v.title,
          caption: `Duration: ${v.duration}`,
        }))}
        title="Video Highlights"
        eyebrow="Gallery · Video Showcase"
        initialIdx={initialIdx}
        isVideo={true}
      />
    </main>
  );
};

export default Gallery;
