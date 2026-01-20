'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('founder');

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header className="hero hero-about">
        <div className="hero-content">
          <span className="breadcrumb">ABOUT US / FOUNDERS</span>
          <h1>Legacy of Excellence</h1>
          <p>Guiding generations towards knowledge, character, and success through visionary leadership.</p>
        </div>
      </header>

      {/* Quote Section */}
      <section className="quote-section reveal active">
        <i className="fas fa-quote-left quote-icon"></i>
        <p className="main-quote">
          "Education is not just about filling a bucket, but lighting a fire. At Gyanmanjari, we ignite the spark of
          curiosity and the flame of wisdom in every student."
        </p>
      </section>

      {/* Founders Section */}
      <section className="facilities-container">
        {/* Sidebar Navigation */}
        <aside className="facilities-sidebar">
          <div
            className={`facility-list-item ${activeTab === 'founder' ? 'active' : ''}`}
            onClick={() => setActiveTab('founder')}
          >
            <div className="facility-icon"><i className="fas fa-user-tie"></i></div>
            Founder
          </div>
          <div
            className={`facility-list-item ${activeTab === 'administrator' ? 'active' : ''}`}
            onClick={() => setActiveTab('administrator')}
          >
            <div className="facility-icon"><i className="fas fa-user-cog"></i></div>
            Administrator
          </div>
          <div
            className={`facility-list-item ${activeTab === 'advisory' ? 'active' : ''}`}
            onClick={() => setActiveTab('advisory')}
          >
            <div className="facility-icon"><i className="fas fa-users"></i></div>
            Advisory Committee
          </div>
        </aside>

        {/* Content Area */}
        <main className="facility-content-area">

          {/* Founder Section */}
          <div id="founder" className={`facility-detail ${activeTab === 'founder' ? 'active' : ''}`}>
            <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <span className="section-tag">Visionary Leaders</span>
              <h2 className="section-title">Meet Our Founders</h2>
            </div>

            {/* Founder 1 */}
            <article className="founder-card" style={{ marginBottom: '3rem' }}>
              <div className="founder-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Rajesh Verma"
                  className="founder-image"
                />
              </div>
              <div className="founder-content">
                <div className="founder-role">Chairman & Founder</div>
                <h3 className="founder-name">Dr. Rajesh Verma</h3>
                <div className="founder-bio">
                  <p>With over 40 years of experience in the educational sector, Dr. Verma established
                    Gyanmanjari
                    School with a singular vision: to create an institution where Indian values meet global
                    standards of education.</p>
                  <br />
                  <p>A recipient of the National Award for Teachers, his philosophy centers on holistic
                    development—nurturing the mind, body, and spirit of every child who walks through our
                    gates.</p>
                </div>
                <div className="founder-quote">
                  "We build not just students, but future leaders who carry the torch of humanity."
                </div>
                <div className="signature">Rajesh Verma</div>
              </div>
            </article>

            {/* Founder 2 */}
            <article className="founder-card">
              <div className="founder-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Mrs. Anjali Desai"
                  className="founder-image"
                />
              </div>
              <div className="founder-content">
                <div className="founder-role">Co-Founder & Principal</div>
                <h3 className="founder-name">Mrs. Anjali Desai</h3>
                <div className="founder-bio">
                  <p>Mrs. Anjali Desai brings a dynamic approach to the school's administration, focusing on
                    innovative pedagogy and student well-being. Her background in Child Psychology allows
                    her to
                    understand the unique needs of every student.</p>
                  <br />
                  <p>She has been instrumental in introducing STEM education and Arts integration into our
                    curriculum,
                    ensuring that Gyanmanjari students are prepared for the challenges of the 21st century.
                  </p>
                </div>
                <div className="founder-quote">
                  "Every child is a universe of potential waiting to be discovered."
                </div>
                <div className="signature">Anjali Desai</div>
              </div>
            </article>
          </div>

          {/* Administrator Section */}
          <div id="administrator" className={`facility-detail ${activeTab === 'administrator' ? 'active' : ''}`}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>School Administration</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Admin 1 */}
              <div style={{ background: 'var(--bg-light)', backgroundImage: 'radial-gradient(rgba(40, 67, 144, 0.08) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
                  alt="Admin"
                />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Mr. Vikram Mehta</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1rem' }}>Chief
                  Administrator Officer</p>
                <p style={{ color: 'var(--text-gray)' }}>Ensuring smooth operations and world-class infrastructure
                  management for the campus.</p>
              </div>
              {/* Admin 2 */}
              <div style={{ background: 'var(--bg-light)', backgroundImage: 'radial-gradient(rgba(40, 67, 144, 0.08) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
                  alt="Admin"
                />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ms. Sarah Khan</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1rem' }}>Academic
                  Coordinator</p>
                <p style={{ color: 'var(--text-gray)' }}>Overseeing curriculum implementation and faculty development
                  programs.</p>
              </div>
            </div>
          </div>

          {/* Advisory Committee Section */}
          <div id="advisory" className={`facility-detail ${activeTab === 'advisory' ? 'active' : ''}`}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Advisory Committee</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Advisor 1 */}
              <div
                style={{ display: 'flex', gap: '1.5rem', background: 'white', backgroundImage: 'radial-gradient(rgba(40, 67, 144, 0.08) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', alignItems: 'center' }}
              >
                <div
                  style={{ background: 'var(--bg-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                >
                  <i className="fas fa-university" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Prof. Hasmukh Patel</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Ex. Vice
                    Chancellor, Gujarat University</p>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>Guiding our higher education
                    pathways and academic policies.</p>
                </div>
              </div>
              {/* Advisor 2 */}
              <div
                style={{ display: 'flex', gap: '1.5rem', background: 'white', backgroundImage: 'radial-gradient(rgba(40, 67, 144, 0.08) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', alignItems: 'center' }}
              >
                <div
                  style={{ background: 'var(--bg-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                >
                  <i className="fas fa-microscope" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Dr. Rrenu Malhotra</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Senior
                    Scientist, ISRO</p>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>Mentoring our STEM initiatives and
                    innovation labs.</p>
                </div>
              </div>
              <div className="feature-box" style={{ marginTop: '1rem' }}>
                <p>Our advisory committee meets quarterly to review school performance and set strategic goals
                  for the future.</p>
              </div>
            </div>
          </div>

        </main>
      </section>

      {/* Legacy / Values Section */}
      <section className="legacy-section">
        <div className="section-header reveal active">
          <h2 className="section-title">A Journey of Milestones</h2>
        </div>
        <div className="legacy-grid reveal active">
          <div className="legacy-item">
            <div className="legacy-year">1995</div>
            <h4 className="legacy-title">The Inception</h4>
            <p className="text-gray-600">Founded with just 50 students and a dream to redefine quality education.</p>
          </div>
          <div className="legacy-item">
            <div className="legacy-year">2005</div>
            <h4 className="legacy-title">Expansion</h4>
            <p className="text-gray-600">Inaugurated the new 10-acre campus with state-of-the-art facilities.</p>
          </div>
          <div className="legacy-item">
            <div className="legacy-year">2015</div>
            <h4 className="legacy-title">Global Recognition</h4>
            <p className="text-gray-600">Awarded the "International School of Excellence" for academic achievements.</p>
          </div>
          <div className="legacy-item">
            <div className="legacy-year">2024</div>
            <h4 className="legacy-title">Future Ready</h4>
            <p className="text-gray-600">Launching the AI & Robotics innovation hub for advanced learning.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
