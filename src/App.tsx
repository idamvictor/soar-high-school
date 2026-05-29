import React, { useState, useEffect } from 'react';
import { Navbar, Footer, PAGES } from './components/Shared';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Tuition from './pages/Tuition';
import StudentLife from './pages/StudentLife';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const validPages = PAGES.map((p) => p.id);

  const getPageFromHash = (): string => {
    const h = window.location.hash.replace('#', '');
    return validPages.includes(h) ? h : 'home';
  };

  const [current, setCurrent] = useState<string>(getPageFromHash());

  useEffect(() => {
    const onHash = () => setCurrent(getPageFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (page: string) => {
    if (page === current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = page;
    setCurrent(page);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  const renderPage = () => {
    switch (current) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'about':
        return <About navigate={navigate} />;
      case 'academics':
        return <Academics navigate={navigate} />;
      case 'admissions':
        return <Admissions navigate={navigate} />;
      case 'tuition':
        return <Tuition navigate={navigate} />;
      case 'student-life':
        return <StudentLife navigate={navigate} />;
      case 'gallery':
        return <Gallery navigate={navigate} />;
      case 'contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div data-screen-label={current} className="animate-fadeRoute" key={current}>
      <Navbar current={current} navigate={navigate} />
      <main className="pt-16">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
