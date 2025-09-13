import React from 'react';

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

export default function Services() {
  return (
    <main style={{ maxWidth: 1100, margin: '3.5rem auto', padding: '1rem', textAlign: 'center' }}>
      <div className="brand-header brand-header--services">iSawyerSoltuions</div>
      <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18 }}>Our Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
        <div style={serviceCardStyle}><b>Automation Ops</b><br />Remove hours of manual work with resilient, monitored automations.</div>
        <div style={serviceCardStyle}><b>Systems Integration</b><br />Make apps that organizations use talk using robust APIs and battle-tested programs.</div>
        <div style={serviceCardStyle}><b>Data & Analytics</b><br />Consolidate scattered spreadsheets into a trustworthy analytics layer.</div>
        <div style={serviceCardStyle}><b>AI Readiness & Governance</b><br />Adopt AI with guardrails (data lineage, role-based access, change control).</div>
      </div>
    </main>
  );
}
