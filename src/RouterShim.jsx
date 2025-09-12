import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Accomplishments from './pages/Accomplishments';

function Home() {
  const navigate = useNavigate();
  // Scroll to section by id
 // Scroll to section by id, with offset for sticky nav
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // Offset for sticky nav height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
  return (
    <div style={{ minHeight: '100vh', background: '#0a0d12' }}>
      {/* Main Content */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 1rem 2rem 1rem', textAlign: 'center' }}>
        {/* Hero Section */}
        <section id="hero" style={{ position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          {/* Background video - using existing root video IMG_2668.mov. For best results convert to webm/mp4 and add both sources. */}
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/millions saved.png"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          >
            <source src="/IMG_2668.mov" type="video/quicktime" />
            {/* Recommended: add /background.webm and /background.mp4 if you convert the file for better browser support */}
          </video>

          {/* Dark overlay so text stays readable */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 1 }} />

          {/* Hero content above video */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
            <img src="/logo.png" alt="iSawyer Logo" style={{ width: 'min(70vw, 520px)', height: 'auto', maxWidth: '90vw', borderRadius: 14, background: 'transparent', display: 'block', margin: '0 auto 2.2rem auto' }} />
            <h1 style={{ fontSize: '2.1rem', color: '#14ffe9', fontWeight: 700, marginBottom: 18, marginTop: 0, lineHeight: 1.1 }}>
              I saw your solutions you never imagined possible.
            </h1>
            <div style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 700, marginBottom: 18 }}>
              Efficiency Experts + Automated Data = Maximized Profitability
            </div>
            <div style={{ fontSize: '1.15rem', color: '#b2fefa', marginBottom: 32 }}>
              Helping businesses unlock their full potential through smarter systems and data-driven automation.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12 }}>
              <button style={{ background: 'linear-gradient(90deg,#14ffe9,#0ea5e9)', color: '#181c1f', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px #14ffe933' }}>
                Book a consultation
              </button>
              <button style={{ background: 'none', color: '#14ffe9', fontWeight: 700, fontSize: '1.1rem', border: '1.5px solid #14ffe9', borderRadius: 8, padding: '0.7rem 1.5rem', cursor: 'pointer', marginLeft: 8 }} onClick={() => navigate('/accomplishments')}>
                See accomplishments & case studies
              </button>
            </div>
          </div>

          {/* Minimal CSS for fallbacks: hide video on small screens and respect reduced-motion */}
          <style>{`
            .hero-video { display:block; }
            @media (max-width: 700px) {
              .hero-video { display: none !important; }
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-video { display: none !important; }
            }
          `}</style>
        </section>
        {/* Services Section */}
        <section id="services" style={{ margin: '64px 0 48px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Our Services</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
            {/* Service Cards */}
            <div style={serviceCardStyle}><b>Automation Ops</b><br />Remove hours of manual work with resilient, monitored automations.</div>
            <div style={serviceCardStyle}><b>Systems Integration</b><br />Make apps that organizations use talk using robust APIs and battle-tested programs.</div>
            <div style={serviceCardStyle}><b>Data & Analytics</b><br />Consolidate scattered spreadsheets into a trustworthy analytics layer.</div>
            <div style={serviceCardStyle}><b>AI Readiness & Governance</b><br />Adopt AI with guardrails (data lineage, role-based access, change control).</div>
          </div>
        </section>
        {/* Industries Section */}
        <section id="industries" style={{ margin: '64px 0 48px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Industries</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
            <div style={industryCardStyle}><b>Construction & Building Services</b><br />Data hygiene, job cost, efficiency asset/field data; time approvals; safety/compliance logs.</div>
            <div style={industryCardStyle}><b>Events & Live Entertainment</b><br />Suite/box lead capture, allocation dashboards, ticketing/platform integrations, anti-fraud email rules, sponsor reporting.</div>
          </div>
        </section>
  {/* Outcomes Section removed as requested */}
        {/* Insights Section */}
        <section id="insights" style={{ margin: '64px 0 48px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Insights & Resources</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
            <div style={insightCardStyle}><b>Playbooks & Checklists</b><br />Automation Readiness, Integration Intake Form, Data Key Standards.</div>
            <div style={insightCardStyle}><b>Blog</b><br />Short, practical posts with checklists and downloads.</div>
            <div style={insightCardStyle}><b>Newsletter</b><br />Subscribe for updates and resources.</div>
          </div>
          <button style={{ background: 'none', color: '#14ffe9', fontWeight: 700, fontSize: '1.1rem', border: '1.5px solid #14ffe9', borderRadius: 8, padding: '0.7rem 1.5rem', cursor: 'pointer', marginTop: 18 }}>
            Get the Automation Readiness Checklist
          </button>
        </section>
        {/* About Section */}
        <section id="about" style={{ margin: '64px 0 48px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>About iSawyerSolutions</h2>
          <p style={{ color: '#f8fafc', fontSize: '1.1rem', maxWidth: 800, margin: '0 auto' }}>
            Why iSawyerSolutions? We bypass onboarding bureaucracy so we can start immediately. The industry standard has layers of consultants and multiple handoffs during projects; we work directly with your lead consultant (hands-on from idea to completion). Where the industry standard has email chains, ticketing systems, and extremely delayed replies, we offer direct communication via personal phone numbers & dedicated contacts, and priority support. Our tooling & partners, and pricing, are designed with your company's success at heart.
          </p>
        </section>
        {/* Contact Section */}
        <section id="contact" style={{ margin: '64px 0 48px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Contact Us</h2>
          <form style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input type="text" placeholder="Name" style={inputStyle} required />
            <input type="email" placeholder="Email" style={inputStyle} required />
            <input type="text" placeholder="Company" style={inputStyle} />
            <textarea placeholder="What's broken?" style={{ ...inputStyle, minHeight: 80 }} />
            <input type="text" placeholder="Timeline" style={inputStyle} />
            <button type="submit" style={{ background: 'linear-gradient(90deg,#14ffe9,#0ea5e9)', color: '#181c1f', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', cursor: 'pointer', marginTop: 8 }}>
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

// top-level nav component so it's always visible across routes
function NavBar() {
  const navigate = useNavigate();
  const navHeight = 72;
  return (
    <>
  <nav
        style={{
          width: '100vw',
          maxWidth: '100vw',
          background: '#181c1f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1.2rem',
          boxSizing: 'border-box',
          boxShadow: '0 2px 12px rgba(20,255,233,0.07)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          overflow: 'hidden',
          height: navHeight,
        }}
      >
  <img src="/logo.png" alt="iSawyer Logo" style={{ height: 64, borderRadius: 8, background: 'transparent', marginRight: 16, cursor: 'pointer' }} onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Home', id: 'home', route: '/' },
            { label: 'Services', id: 'services' },
            { label: 'Industries', id: 'industries' },
            { label: 'Accomplishments', id: 'accomplishments', route: '/accomplishments' },
            { label: 'Insights', id: 'insights' },
            { label: 'About', id: 'about' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              style={{
                background: 'none',
                color: '#b2fefa',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                textShadow: '0 1px 8px #0ea5e9',
                padding: '0.3rem 0.7rem',
                borderRadius: 6,
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onClick={() => {
                if (item.route) {
                  navigate(item.route);
                  // if going home, ensure page top is visible
                  if (item.route === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                } else {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const yOffset = -navHeight + 8;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            style={{
              background: 'none',
              color: '#14ffe9',
              fontWeight: 700,
              fontSize: '1rem',
              border: '1px solid #14ffe9',
              cursor: 'pointer',
              textShadow: '0 1px 8px #0ea5e9',
              padding: '0.3rem 0.7rem',
              borderRadius: 6,
              marginLeft: 8,
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
            onClick={() => navigate('/login')}
          >
            Client Login
          </button>
        </div>
      </nav>
      {/* spacer to prevent content being hidden under fixed nav */}
      <div style={{ height: 72 }} />
    </>
  );
}

// Card styles for sections
const serviceCardStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  borderRadius: 12,
  padding: '1.2rem 1.3rem',
  minWidth: 220,
  maxWidth: 260,
  fontSize: '1.08rem',
  boxShadow: '0 2px 12px #14ffe91a',
  marginBottom: 8,
};
const industryCardStyle = {
  ...serviceCardStyle,
  color: '#fff',
};
const outcomeCardStyle = {
  ...serviceCardStyle,
  color: '#14ffe9',
  fontWeight: 700,
  fontSize: '1.1rem',
};
const insightCardStyle = {
  ...serviceCardStyle,
  color: '#b2fefa',
};
const inputStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  border: '1.5px solid #14ffe9',
  borderRadius: 8,
  padding: '0.7rem 1rem',
  fontSize: '1.05rem',
  outline: 'none',
};

export default function RouterShim() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}