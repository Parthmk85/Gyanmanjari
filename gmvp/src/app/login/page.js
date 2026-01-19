'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="min-h-screen font-sans text-gray-900 flex items-center justify-center relative overscroll-none">
      <Navbar />

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1rem 2rem',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-xl)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          <div style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '1rem' }}>
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Sign in to your student portal</p>

          <form>
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-dark)',
                }}
              >
                Student ID / Email
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  outline: 'none',
                  transition: '0.3s',
                }}
              />
            </div>
            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-dark)',
                }}
              >
                Password
              </label>
              <input
                type="password"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  outline: 'none',
                  transition: '0.3s',
                }}
              />
            </div>
            <button type="button" className="cta-button" style={{ width: '100%', border: 'none' }}>
              Login
            </button>
          </form>

          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            Forgot your password?{' '}
            <a href="#" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
