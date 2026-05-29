// App + router
function App() {
  const validPages = PAGES.map(p => p.id);
  const getPageFromHash = () => {
    const h = window.location.hash.replace("#", "");
    return validPages.includes(h) ? h : "home";
  };
  const [current, setCurrent] = React.useState(getPageFromHash());

  React.useEffect(() => {
    const onHash = () => setCurrent(getPageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (page) => {
    if (page === current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = page;
    setCurrent(page);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50);
  };

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  const renderPage = () => {
    switch (current) {
      case "home": return <HomePage navigate={navigate} />;
      case "about": return <AboutPage navigate={navigate} />;
      case "academics": return <AcademicsPage navigate={navigate} />;
      case "admissions": return <AdmissionsPage navigate={navigate} />;
      case "tuition": return <TuitionPage navigate={navigate} />;
      case "student-life": return <StudentLifePage navigate={navigate} />;
      case "gallery": return <GalleryPage navigate={navigate} />;
      case "contact": return <ContactPage navigate={navigate} />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div data-screen-label={current} className="page-wrap" key={current}>
      <Navbar current={current} navigate={navigate} />
      <div className="fade-in">{renderPage()}</div>
      <Footer navigate={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
