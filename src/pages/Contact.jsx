import React from 'react';

const inputStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  border: '1.5px solid #14ffe9',
  borderRadius: 8,
  padding: '0.7rem 1rem',
  fontSize: '1.05rem',
  outline: 'none',
  width: '100%'
};

export default function Contact() {
  return (
    <main style={{ maxWidth: 800, margin: '3.5rem auto', padding: '1rem', textAlign: 'center' }}>
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
    </main>
  );
}
