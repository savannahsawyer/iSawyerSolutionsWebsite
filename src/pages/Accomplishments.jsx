import React from 'react';
import { useNavigate } from 'react-router-dom';

const accomplishments = [
  'Saved clients millions of dollars by replacing old unreliable systems and delivering a resilient platform to process credit card payments',
  'Saved clients millions of dollars in animal feed costs with unique feed formulation software package that optimized production costs',
  'Enhanced field staff productivity with custom tank and pressure vessel inspection software',
  'Improved safety and reliability of truss construction with custom software to optimize layout and design',
  'Provide more accurate tax calculations for clients with custom interfaces to third party tax providers',
  'Move systems from antiquated server architecture to cloud based secure and scaleable Kubernetes environments',
  'Move clients from in-house store fronts to Shopify and Big Commerce e-commerce platforms',
  'Migrate expensive datacenter services from proprietary to cost effective open source solutions.',
  'Worked with off-shore manufacturing facility to deliver on designs and produce commercial products.',
  'Developed consumer electronic devices for home entertainment market',
];

// Image files are located in the project root; reference them from public root (served at /)
const galleryImages = [
  '/IMG_0334.png',
  '/IMG_0684.png',
  '/IMG_1436.png',
  '/IMG_2993.png',
  '/IMG_4858.png',
  '/IMG_6162.png',
  '/IMG_6401.png',
  '/IMG_6678.png',
  '/IMG_7335.png',
  '/IMG_9346.png',
];

export default function Accomplishments() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#0a0d12', color: '#b2fefa', padding: '2.5rem 1rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ color: '#14ffe9', margin: 0 }}>Accomplishments</h1>
          <div>
            <button onClick={() => navigate('/')} style={{ background: 'none', color: '#14ffe9', border: '1px solid #14ffe9', padding: '0.5rem 0.8rem', borderRadius: 8, cursor: 'pointer' }}>
              Back to Home
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }}>
          {accomplishments.map((text, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'center', background: '#181c1f', padding: 16, borderRadius: 10, boxShadow: '0 2px 12px #14ffe91a' }}>
              <img src={galleryImages[idx % galleryImages.length]} alt={`accomplishment-${idx}`} style={{ width: 96, height: 72, objectFit: 'cover', borderRadius: 8 }} />
              <div style={{ color: '#fff', fontSize: '1.02rem', fontWeight: 600 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
