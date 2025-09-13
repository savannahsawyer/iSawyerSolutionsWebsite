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
      <div className="brand-header brand-header--big">iSawyerSoltuions</div>
      <h2 style={{ color: '#14ffe9', fontSize: '2rem', marginBottom: 18, textAlign: 'center' }}>Industries</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        <div style={industryCardStyle}>
          <b>Finance & Payments</b>
          <div style={{ marginTop: 8 }}>Payment processing platforms, secure gateways, and resilient transaction systems to reduce downtime and losses.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Agriculture & Feed Manufacturing</b>
          <div style={{ marginTop: 8 }}>Optimization software for feed formulation and production planning to cut costs and increase yield.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Field Services & Inspections</b>
          <div style={{ marginTop: 8 }}>Mobile inspection tools, automated reporting, and asset tracking to boost field productivity and reporting accuracy.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Construction</b>
          <div style={{ marginTop: 8 }}>Project planning, site data capture, safety compliance, and resource scheduling to keep builds on time and under budget.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Construction & Structural Design</b>
          <div style={{ marginTop: 8 }}>Design optimization and safety tooling for truss and structure planning to improve reliability and reduce rework.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Tax & Accounting</b>
          <div style={{ marginTop: 8 }}>Interfaces to tax providers and automated calculation flows for more accurate client billing and compliance.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Cloud Migration & DevOps</b>
          <div style={{ marginTop: 8 }}>Cloud-native migrations, Kubernetes orchestration, and resilient architectures for scale and security.</div>
        </div>
        <div style={industryCardStyle}>
          <b>E‑commerce & Retail</b>
          <div style={{ marginTop: 8 }}>Platform migrations to Shopify/BigCommerce, storefront integrations, and conversion optimizations.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Live Events</b>
          <div style={{ marginTop: 8 }}>Ticketing integrations, sponsor reporting, allocation tools, and fraud prevention to improve revenue and operational control.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Data Center Modernization</b>
          <div style={{ marginTop: 8 }}>Replacing costly proprietary services with open-source alternatives and cost-effective infrastructure.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Manufacturing & Product Delivery</b>
          <div style={{ marginTop: 8 }}>Design-to-production workflows, offshore coordination, and tooling for repeatable commercial production.</div>
        </div>
        <div style={industryCardStyle}>
          <b>Consumer Electronics</b>
          <div style={{ marginTop: 8 }}>Product development support for home entertainment devices and embedded systems.</div>
        </div>
      </div>
    </main>
  );
}
