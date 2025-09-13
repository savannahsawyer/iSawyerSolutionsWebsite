import React from 'react';
import { useNavigate } from 'react-router-dom';

// Default accomplishments list. We'll pair each item with a specific image via the `items` array below.
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

// Use actual images found in project root. These are served from project root (Vite/public) at '/filename'
const galleryImages = [
  '/millions saved.png', // saved clients millions
  '/feed.png', // animal feed costs
  '/product delivery designs.png', // tank & pressure vessel / manufacturing
  '/improved safety and liability.png', // truss construction safety
  '/tax calculations.png', // tax calculations interface
  '/secure and scalable.png', // cloud/kubernetes migration
  '/move to ecommerce.png', // ecommerce storefront migration
  '/migrate to open source.png', // migrate datacenter services
  '/product delivery designs.png', // manufacturing (alternate)
  '/home entertainment devices.png', // consumer electronic devices
];

// Explicit mapping: each object pairs the text with a chosen image path.
// Update the `image` values if you want to swap which image matches which accomplishment.
// By default we map images by index to the accomplishments (0 → 0, 1 → 1, ...)
//  
export default function Accomplishments() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#0a0d12', color: '#b2fefa', padding: '2.5rem 1rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 8 }}>
          <div className="brand-header brand-header--big">iSawyerSoltuions</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ color: '#14ffe9', margin: 0 }}>Accomplishments</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {accomplishments.map((text, idx) => (
            <div key={idx} style={{ background: '#0f1214', borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 30px rgba(2,6,23,0.6)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', overflow: 'hidden', background: '#0b0d0e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={galleryImages[idx % galleryImages.length]} alt={`accomplishment-${idx}`} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', maxHeight: 360 }} />
              </div>
              <div style={{ padding: '1rem 1.1rem' }}>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.25 }}>{text}</div>
                <div style={{ color: '#9aa1a6', fontSize: '0.85rem', marginTop: 8 }}>{galleryImages[idx % galleryImages.length].replace(/^\//, '')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
