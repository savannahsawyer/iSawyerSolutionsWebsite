import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{minHeight: '100vh', background: '#0a0d12'}}>
      {/* Nav Bar */}
      <nav
        style={{
          width: '100vw',
          maxWidth: '100vw',
          background: '#181c1f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0.5rem 0.7rem',
          boxSizing: 'border-box',
          boxShadow: '0 2px 12px rgba(20,255,233,0.07)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          overflow: 'hidden',
        }}
      >
        <button
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
            maxWidth: '100vw',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          onClick={() => navigate('/login')}
        >
          Client Login
        </button>
      </nav>
      {/* Main Content */}
      <main style={{maxWidth: 1100, margin: '0 auto', padding: '3.5rem 1rem 2rem 1rem', textAlign: 'center'}}>
  <img src="/logo.png" alt="iSawyer Logo" style={{height: 'min(180px, 32vw)', maxWidth: '90vw', borderRadius: 14, background: 'transparent', display: 'block', margin: '0 auto 2rem auto'}} />
        <h1 style={{fontSize: '1.3rem', color: '#14ffe9', fontWeight: 700, marginBottom: 24, marginTop: 0, lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
          I saw your solutions you never imagined possible.
        </h1>
        <div style={{fontSize: '1.6rem', color: '#fff', fontWeight: 700, marginBottom: 18}}>
          Efficiency Experts + Automated Data = Maximized Profitability
        </div>
        <div style={{fontSize: '1.15rem', color: '#b2fefa', marginBottom: 48}}>
          Helping businesses unlock their full potential through smarter systems and data-driven automation.
        </div>
        <section style={{marginTop: '2.5rem', textAlign: 'center'}}>
          <h2 style={{color: '#14ffe9', fontSize: '2.2rem', marginBottom: 18}}>Who We Are</h2>
          <p style={{color: '#f8fafc', fontSize: '1.1rem', maxWidth: 800, margin: '0 auto'}}>
            At <b>iSawyerSolutions</b>, we specialize in building data-driven systems and automation workflows that turn inefficiency into opportunity. Our consulting team streamlines clients' operations, integrates clients' platforms, and creates centralized databases that power decision-making. From automation strategy to technical implementation, we help organizations reduce busywork, accelerate growth, and increase profitability.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function RouterShim() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}