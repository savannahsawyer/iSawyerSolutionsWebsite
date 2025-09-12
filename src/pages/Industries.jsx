import React from 'react';

const industryCardStyle = {
  background: '#181c1f',
  color: '#fff',
  borderRadius: 12,
  padding: '1.2rem 1.3rem',
  minWidth: 220,
  maxWidth: 520,
  fontSize: '1.08rem',
  boxShadow: '0 2px 12px #14ffe91a',
  marginBottom: 8,
};

export default function Industries() {
  return (
    <main style={{ maxWidth: 1100, margin: '3.5rem auto', padding: '1rem' }}>
      <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18, textAlign: 'center' }}>Industries</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
        <div style={industryCardStyle}><b>Construction & Building Services</b><br />Data hygiene, job cost, efficiency asset/field data; time approvals; safety/compliance logs.</div>
        <div style={industryCardStyle}><b>Events & Live Entertainment</b><br />Suite/box lead capture, allocation dashboards, ticketing/platform integrations, anti-fraud email rules, sponsor reporting.</div>
      </div>
    </main>
  );
}
