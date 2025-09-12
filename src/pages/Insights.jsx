import React from 'react';

const insightCardStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  borderRadius: 12,
  padding: '1.2rem 1.3rem',
  minWidth: 220,
  maxWidth: 360,
  fontSize: '1.08rem',
  boxShadow: '0 2px 12px #14ffe91a',
  marginBottom: 8,
};

export default function Insights() {
  return (
    <main style={{ maxWidth: 1100, margin: '3.5rem auto', padding: '1rem', textAlign: 'center' }}>
      <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Insights & Resources</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
        <div style={insightCardStyle}><b>Playbooks & Checklists</b><br />Automation Readiness, Integration Intake Form, Data Key Standards.</div>
        <div style={insightCardStyle}><b>Blog</b><br />Short, practical posts with checklists and downloads.</div>
        <div style={insightCardStyle}><b>Newsletter</b><br />Subscribe for updates and resources.</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
        <button style={{ background: 'none', color: '#14ffe9', fontWeight: 700, fontSize: '1.1rem', border: '1.5px solid #14ffe9', borderRadius: 8, padding: '0.7rem 1.5rem', cursor: 'pointer' }}>
          Get the Automation Readiness Checklist
        </button>
      </div>
    </main>
  );
}
