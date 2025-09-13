import { useState } from 'react';

const CORRECT_EMAIL = 'client@example.com'; // Placeholder email
const CORRECT_PASSWORD = 'letmein'; // Placeholder password


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [forgot, setForgot] = useState(false);
  // Forgot password state moved to top level
  const [resetEmail, setResetEmail] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const [resetError, setResetError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect username or password.');
    }
  };

  if (forgot) {
    const handleReset = (e) => {
      e.preventDefault();
      if (!resetEmail) {
        setResetError("Please enter your email.");
        setResetMsg("");
        return;
      }
      if (resetEmail === CORRECT_EMAIL) {
        setResetMsg("A link to reset your password will be sent to your email if the email exists with an account.");
        setResetError("");
      } else {
        setResetError("No account exists with that email address.");
        setResetMsg("");
      }
    };

    return (
      <div style={{textAlign: 'center', marginTop: '4rem'}}>
        <h2>Forgot Password?</h2>
        <form onSubmit={handleReset} style={{margin: '1.5rem auto', maxWidth: 320}}>
          <input
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={e => setResetEmail(e.target.value)}
            style={{width: '100%', padding: 8, marginBottom: 12, borderRadius: 6, border: '1px solid #ccc'}}
            autoComplete="username"
          />
          <button type="submit" style={{width: '100%', padding: 10, background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 700}}>Send Reset Link</button>
        </form>
        {resetMsg && <div style={{color: 'green', marginTop: 10}}>{resetMsg}</div>}
        {resetError && <div style={{color: 'red', marginTop: 10}}>{resetError}</div>}
        <button onClick={() => { setForgot(false); setResetEmail(""); setResetMsg(""); setResetError(""); }} style={{marginTop: 20, padding: '0.5rem 1.5rem', background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 700}}>Back to Login</button>
      </div>
    );
  }

  if (authenticated) {
    return (
      <div style={{textAlign: 'center', marginTop: '4rem'}}>
        <h2>Welcome, Client!</h2>
        <p>This is your protected page.</p>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 340,
      margin: '4rem auto',
      padding: 24,
      background: '#0a1a2f',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(20,255,233,0.07)',
      border: '1.5px solid #14ffe9',
      color: '#f8fafc',
      textAlign: 'center'
    }}>
            <img src="/public/logo.png" alt="iSawyer Logo" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/logo.png'}} style={{height: 180, maxWidth: '98%', display: 'block', margin: '0 auto 1.5rem auto', borderRadius: 14}} />
      <h2 style={{color: '#14ffe9', marginBottom: 18}}>Client Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{width: '100%', padding: 8, marginBottom: 12, borderRadius: 6, border: '1px solid #14ffe9', background: '#181c1f', color: '#fff'}}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{width: '100%', padding: 8, marginBottom: 12, borderRadius: 6, border: '1px solid #14ffe9', background: '#181c1f', color: '#fff'}}
          autoComplete="current-password"
        />
        <div style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
            style={{marginRight: 8}}
          />
          <label htmlFor="remember" style={{fontSize: '0.95rem', color: '#f8fafc'}}>Remember me</label>
        </div>
  <button type="submit" style={{width: '100%', padding: 10, background: 'linear-gradient(90deg, #14ffe9 0%, #0ea5e9 100%)', color: '#181c1f', border: 'none', borderRadius: 6, fontWeight: 700}}>Login</button>
        <div style={{marginTop: 10, textAlign: 'right'}}>
          <button type="button" onClick={() => setForgot(true)} style={{background: 'none', border: 'none', color: '#14ffe9', cursor: 'pointer', fontSize: '0.95rem', textDecoration: 'underline', padding: 0}}>Did you forget your password?</button>
        </div>
        {error && <div style={{color: 'red', marginTop: 10}}>{error}</div>}
      </form>
    </div>
  );
}
