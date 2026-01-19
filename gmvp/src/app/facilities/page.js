'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FacilitiesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('computer-lab');

  useEffect(() => {
    if (initialTab) {
        setActiveTab(initialTab);
    }
  }, [initialTab]);

  const facilityItems = [
    { id: 'computer-lab', icon: 'fa-desktop', label: 'Computer Lab' },
    { id: 'lab-facility', icon: 'fa-flask', label: 'Lab Facility' },
    { id: 'play-ground', icon: 'fa-futbol', label: 'Play Ground' },
    { id: 'solution-desk', icon: 'fa-question-circle', label: 'Solution Desk' },
    { id: 'dining-hall', icon: 'fa-utensils', label: 'Dining Hall' },
    { id: 'library', icon: 'fa-book-open', label: 'Library' },
    { id: 'counselling', icon: 'fa-comments', label: 'Counselling' },
    { id: 'safety', icon: 'fa-shield-alt', label: 'Safety & Security' },
  ];
  
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header 
        className="hero"
        style={{
            backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="hero-content">
            <span className="breadcrumb">INFRASTRUCTURE</span>
            <h1>World-Class Facilities</h1>
            <p>Creating an environment that fosters learning, innovation, and well-being.</p>
        </div>
      </header>

      <section className="facilities-container">
        {/* Sidebar Navigation */}
        <aside className="facilities-sidebar">
            {facilityItems.map((item) => (
                <div 
                    key={item.id}
                    className={`facility-list-item ${activeTab === item.id ? 'active' : ''}`} 
                    onClick={() => setActiveTab(item.id)}
                >
                    <div className="facility-icon"><i className={`fas ${item.icon}`}></i></div>
                    {item.label}
                </div>
            ))}
        </aside>

        {/* Content Area */}
        <main className="facility-content-area">

            {/* Computer Lab */}
            <div id="computer-lab" className={`facility-detail ${activeTab === 'computer-lab' ? 'active' : ''}`}>
                <h2 className="section-title">Computer Lab</h2>
                <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Computer Lab"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Our state-of-the-art computer labs are equipped with the latest hardware and software to ensure
                    students stay ahead in the digital age.
                    Each student gets hands-on experience with supervision from expert instructors.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-wifi"></i>
                        <h4>High Speed Internet</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-laptop-code"></i>
                        <h4>Coding Bootcamps</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-server"></i>
                        <h4>Cloud Computing</h4>
                    </div>
                </div>
            </div>

            {/* Lab Facility */}
            <div id="lab-facility" className={`facility-detail ${activeTab === 'lab-facility' ? 'active' : ''}`}>
                <h2 className="section-title">Advanced Science Labs</h2>
                <img 
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Science Labs"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Physics, Chemistry, and Biology laboratories designed to foster curiosity and scientific temper.
                    Safety is our priority while students explore chemical reactions and physical laws.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-vial"></i>
                        <h4>Modern Equipment</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-microscope"></i>
                        <h4>Research Focus</h4>
                    </div>
                </div>
            </div>

            {/* Play Ground */}
            <div id="play-ground" className={`facility-detail ${activeTab === 'play-ground' ? 'active' : ''}`}>
                <h2 className="section-title">Sports Complex & Playground</h2>
                <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Playground"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    A vast playground for Cricket, Football, and Athletics. We believe physical fitness is crucial for
                    mental development.
                </p>
                <div className="facility-features">
                    <div className="feature-box">
                        <i className="fas fa-running"></i>
                        <h4>Athletics Track</h4>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-futbol"></i>
                        <h4>Team Sports</h4>
                    </div>
                </div>
            </div>

            {/* Solution Desk */}
            <div id="solution-desk" className={`facility-detail ${activeTab === 'solution-desk' ? 'active' : ''}`}>
                <h2 className="section-title">Student Solution Desk</h2>
                <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Solution Desk"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    A dedicated help desk for students to resolve academic and administrative queries quickly. One-stop
                    solution for all student needs.
                </p>
            </div>

            {/* Dining Hall */}
            <div id="dining-hall" className={`facility-detail ${activeTab === 'dining-hall' ? 'active' : ''}`}>
                <h2 className="section-title">Hygienic Dining Hall</h2>
                <img 
                    src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Dining Hall"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Nutritious and delicious meals served in a clean and hygienic environment. We ensure a balanced diet
                    for growing children.
                </p>
            </div>

            {/* Library */}
            <div id="library" className={`facility-detail ${activeTab === 'library' ? 'active' : ''}`}>
                <h2 className="section-title">Digital Library</h2>
                <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Library"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Over 10,000 books, journals, and e-resources. A quiet sanctuary for readers and scholars.
                </p>
            </div>

            {/* Counselling */}
            <div id="counselling" className={`facility-detail ${activeTab === 'counselling' ? 'active' : ''}`}>
                <h2 className="section-title">Student Counselling</h2>
                <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Counselling"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Professional counsellors to guide students through academic pressure, career choices, and personal
                    growth.
                </p>
            </div>

            {/* Safety */}
            <div id="safety" className={`facility-detail ${activeTab === 'safety' ? 'active' : ''}`}>
                <h2 className="section-title">Safety & Security</h2>
                <img 
                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Security"
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    24/7 CCTV surveillance and trained security personnel to ensure a safe campus environment for all.
                </p>
            </div>

        </main>
      </section>

      <Footer />
    </>
  );
}

export default function Facilities() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <FacilitiesContent />
      </Suspense>
    </div>
  );
}
