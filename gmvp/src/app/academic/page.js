'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Academic() {
  const [activeTab, setActiveTab] = useState('teaching-program');

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header 
        className="hero"
        style={{
            backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="hero-content">
            <span className="breadcrumb">CURRICULUM</span>
            <h1>Academic Overview</h1>
            <p>Fostering intellect and creativity through a comprehensive educational framework.</p>
        </div>
      </header>

      <section className="facilities-container">
        {/* Sidebar Navigation */}
        <aside className="facilities-sidebar">
            <div 
                className={`facility-list-item ${activeTab === 'teaching-program' ? 'active' : ''}`} 
                onClick={() => setActiveTab('teaching-program')}
            >
                <div className="facility-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                Teaching Program
            </div>
            <div 
                className={`facility-list-item ${activeTab === 'jee' ? 'active' : ''}`} 
                onClick={() => setActiveTab('jee')}
            >
                <div className="facility-icon"><i className="fas fa-atom"></i></div>
                JEE
            </div>
            <div 
                className={`facility-list-item ${activeTab === 'neet' ? 'active' : ''}`} 
                onClick={() => setActiveTab('neet')}
            >
                <div className="facility-icon"><i className="fas fa-heartbeat"></i></div>
                NEET
            </div>
        </aside>

        {/* Content Area */}
        <main className="facility-content-area">

            {/* Teaching Program */}
            <div id="teaching-program" className={`facility-detail ${activeTab === 'teaching-program' ? 'active' : ''}`}>
                <h2 className="section-title">Comprehensive Teaching Model</h2>
                <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Teaching Model"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Our teaching methodology is designed to foster critical thinking and conceptual clarity. We move
                    beyond rote memorization to instill curiosity and deep understanding.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-child"></i>
                        <h4>Activity Based</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-brain"></i>
                        <h4>Concept Focus</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-laptop"></i>
                        <h4>Smart Learning</h4>
                    </div>
                </div>
            </div>

            {/* JEE */}
            <div id="jee" className={`facility-detail ${activeTab === 'jee' ? 'active' : ''}`}>
                <h2 className="section-title">JEE Preparation (Engineering)</h2>
                <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="JEE Preparation"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    A rigorous program for aspiring engineers. We provide intensive coaching for JEE Main and Advanced,
                    with a focus on problem-solving skills and regular assessment.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-cogs"></i>
                        <h4>Mock Tests</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-user-graduate"></i>
                        <h4>Expert Faculty</h4>
                    </div>
                </div>
            </div>

            {/* NEET */}
            <div id="neet" className={`facility-detail ${activeTab === 'neet' ? 'active' : ''}`}>
                <h2 className="section-title">NEET Preparation (Medical)</h2>
                <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="NEET Preparation"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Dedicated coaching for medical aspirants. Our NEET program covers the entire syllabus with depth,
                    ensuring students are well-prepared for the competitive exam.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-stethoscope"></i>
                        <h4>Biology Focus</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-book-medical"></i>
                        <h4>Deep Analysis</h4>
                    </div>
                </div>
            </div>

        </main>
      </section>

      <Footer />
    </div>
  );
}
