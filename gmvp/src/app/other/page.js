'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Other() {
  const [activeTab, setActiveTab] = useState('alumni');

  const facilities = [
    { id: 'alumni', icon: 'fa-user-graduate', label: 'Alumni' },
    { id: 'app-login', icon: 'fa-mobile-alt', label: 'App Login' },
    { id: 'revision-app', icon: 'fa-sync-alt', label: 'Revision App' },
    { id: 'online-exam', icon: 'fa-clipboard-list', label: 'Online Exam' },
    { id: 'gallery', icon: 'fa-images', label: 'Gallery' },
    { id: 'brochure', icon: 'fa-file-pdf', label: 'Brochure' },
    { id: 'rules', icon: 'fa-gavel', label: 'Rules & Regulations' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header 
        className="hero"
        style={{
            minHeight: '50vh',
            backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="hero-content">
            <span className="breadcrumb">EXTRAS</span>
            <h1>Student Life & More</h1>
            <p>Exploring the vibrant culture, resources, and digital tools at Gyanmanjari.</p>
        </div>
      </header>

      <section className="facilities-container">
        {/* Sidebar Navigation */}
        <aside className="facilities-sidebar">
            {facilities.map((item) => (
                <div 
                    key={item.id}
                    className={`facility-list-item ${activeTab === item.id ? 'active' : ''}`} 
                    onClick={() => setActiveTab(item.id)}
                >
                    <div className="facility-icon"><i className={`fas ${item.icon}`} style={{color: 'var(--primary-color)'}}></i></div>
                    {item.label}
                </div>
            ))}
        </aside>

        {/* Content Area */}
        <main className="facility-content-area">

            {/* Alumni Section */}
            <div id="alumni" className={`facility-detail ${activeTab === 'alumni' ? 'active' : ''}`}>
                <h2 className="section-title">Alumni Association</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Alumni Interaction"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem'}}
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Our alumni are our pride. Spread across the globe, they are leaders in various fields including
                    engineering, medicine, civil services, and entrepreneurship. Use this platform to connect with
                    seniors, find mentors, and stay updated with alumni meets.
                </p>
                <div className="feature-box" style={{border: '1px solid rgba(197, 160, 89, 0.3)'}}>
                    <h4 style={{color: 'var(--primary-color)'}}>Stay Connected</h4>
                    <p>Join our exclusive Alumni Network to network with fellow graduates.</p>
                    <a href="#"
                        style={{display: 'inline-block', marginTop: '1rem', padding: '0.8rem 1.5rem', background: 'var(--primary-color)', color: 'white', borderRadius: '4px', fontWeight: '500', border: '1px solid var(--primary-color)', transition: 'all 0.3s'}}>Register
                        as Alumni</a>
                </div>
            </div>

            {/* App Login Section */}
            <div id="app-login" className={`facility-detail ${activeTab === 'app-login' ? 'active' : ''}`}>
                <h2 className="section-title">App Login</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap'}}>
                    <div style={{flex: '1', minWidth: '300px'}}>
                        <img 
                            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Mobile App" 
                            style={{width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-md)'}}
                        />
                    </div>
                    <div style={{flex: '1'}}>
                        <p style={{marginBottom: '1.5rem', color: 'var(--text-gray)'}}>
                            Access your student dashboard, check attendance, view results, and get school notifications
                            instantly on your mobile device.
                        </p>
                        <div
                            style={{marginBottom: '1rem', padding: '1.5rem', background: '#fff', borderLeft: '4px solid var(--accent-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
                            <h4 style={{marginBottom: '0.5rem', color: 'var(--primary-color)'}}>For Students & Parents</h4>
                            <p style={{fontSize: '0.9rem', color: '#666'}}>Login with your registered mobile number and
                                password.</p>
                        </div>
                        <a href="#"
                            style={{display: 'inline-block', padding: '0.8rem 2rem', background: 'var(--primary-color)', color: 'white', borderRadius: '4px', fontWeight: '600', textAlign: 'center', border: '1px solid var(--primary-color)'}}><i
                                className="fas fa-sign-in-alt"></i> Login Now</a>
                    </div>
                </div>
            </div>

            {/* Revision App Section */}
            <div id="revision-app" className={`facility-detail ${activeTab === 'revision-app' ? 'active' : ''}`}>
                <h2 className="section-title">Revision App</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Revision App"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem'}}
                />
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    Boost your learning with our specialized Revision App. Access video lectures, summary notes, and
                    practice quizzes for all subjects.
                </p>
                <div className="facility-features">
                    <div className="feature-box" style={{border: '1px solid rgba(26, 54, 93, 0.1)'}}>
                        <i className="fas fa-video" style={{color: 'var(--accent-color)'}}></i>
                        <h4 style={{color: 'var(--primary-color)'}}>Video Lectures</h4>
                    </div>
                    <div className="feature-box" style={{border: '1px solid rgba(26, 54, 93, 0.1)'}}>
                        <i className="fas fa-book-reader" style={{color: 'var(--accent-color)'}}></i>
                        <h4 style={{color: 'var(--primary-color)'}}>Quick Notes</h4>
                    </div>
                    <div className="feature-box" style={{border: '1px solid rgba(26, 54, 93, 0.1)'}}>
                        <i className="fas fa-question-circle" style={{color: 'var(--accent-color)'}}></i>
                        <h4 style={{color: 'var(--primary-color)'}}>Daily Quizzes</h4>
                    </div>
                </div>
                <div style={{marginTop: '2rem', textAlign: 'center'}}>
                    <a href="#"
                        style={{display: 'inline-block', padding: '0.8rem 2rem', background: 'var(--accent-color)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600'}}><i
                            className="fas fa-download"></i> Download App</a>
                </div>
            </div>

            {/* Online Exam Section */}
            <div id="online-exam" className={`facility-detail ${activeTab === 'online-exam' ? 'active' : ''}`}>
                <h2 className="section-title">Online Exam Portal</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <p style={{marginBottom: '2rem', color: 'var(--text-gray)'}}>
                    A secure and safe environment for conducting online assessments. Students can take scheduled exams,
                    view instant analysis, and track their performance over time.
                </p>
                <div
                    style={{background: '#fff', padding: '3rem', borderRadius: '8px', boxShadow: 'var(--shadow-lg)', textAlign: 'center', maxWidth: '600px', margin: '0 auto', border: '1px solid rgba(0,0,0,0.05)'}}>
                    <div
                        style={{width: '80px', height: '80px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'}}>
                        <i className="fas fa-laptop-code" style={{fontSize: '2.5rem', color: 'var(--accent-color)'}}></i>
                    </div>
                    <h3 style={{marginBottom: '1rem', color: 'var(--primary-color)'}}>Exam Login</h3>
                    <p style={{marginBottom: '2rem', color: '#666'}}>Please ensure you have a stable internet connection
                        before starting the exam.</p>
                    <a href="#"
                        style={{display: 'inline-block', padding: '0.8rem 2.5rem', background: 'var(--primary-color)', color: 'white', borderRadius: '4px', fontWeight: '600'}}>Start
                        Exam</a>
                </div>
            </div>

            {/* Gallery Section */}
            <div id="gallery" className={`facility-detail ${activeTab === 'gallery' ? 'active' : ''}`}>
                <h2 className="section-title">Campus Gallery</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <div className="gallery-grid"
                    style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Cultural Events" className="gallery-img" />
                        <div className="gallery-caption">Cultural Events</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Social Service" className="gallery-img" />
                        <div className="gallery-caption">Social Service</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Tech Fest" className="gallery-img" />
                        <div className="gallery-caption">Tech Fest</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Debate Club" className="gallery-img" />
                        <div className="gallery-caption">Debate Club</div>
                    </div>
                </div>
            </div>

            {/* Brochure Section */}
            <div id="brochure" className={`facility-detail ${activeTab === 'brochure' ? 'active' : ''}`}>
                <h2 className="section-title">School Brochure</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <div
                    style={{display: 'flex', gap: '2rem', alignItems: 'center', background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(26, 54, 93, 0.05)'}}>
                    <div style={{fontSize: '4rem', color: 'var(--primary-color)'}}>
                        <i className="fas fa-file-pdf"></i>
                    </div>
                    <div>
                        <h3 style={{marginBottom: '0.5rem', color: 'var(--primary-color)'}}>Gyanmanjari Prospectus 2025-26
                        </h3>
                        <p style={{marginBottom: '1.5rem', color: 'var(--text-gray)'}}>Download our detailed brochure to
                            know more about our academic programs, fee structure, facilities, and admission process.</p>
                        <a href="#"
                            style={{display: 'inline-block', padding: '0.8rem 1.5rem', background: 'var(--accent-color)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600'}}><i
                                className="fas fa-download"></i> Download PDF (5.2 MB)</a>
                    </div>
                </div>
            </div>

            {/* Rules Section */}
            <div id="rules" className={`facility-detail ${activeTab === 'rules' ? 'active' : ''}`}>
                <h2 className="section-title">Rules & Regulations</h2>
                <div style={{borderBottom: '3px solid var(--accent-color)', width: '60px', marginBottom: '2rem'}}></div>
                <div style={{maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-gray)'}}>
                    <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                        <li style={{marginBottom: '1rem', position: 'relative', paddingLeft: '25px'}}>
                            <i className="fas fa-check-circle"
                                style={{color: 'var(--accent-color)', position: 'absolute', left: '0', top: '5px'}}></i>
                            Students must adhere to the school uniform policy at all times.
                        </li>
                        <li style={{marginBottom: '1rem', position: 'relative', paddingLeft: '25px'}}>
                            <i className="fas fa-check-circle"
                                style={{color: 'var(--accent-color)', position: 'absolute', left: '0', top: '5px'}}></i>
                            Attendance of 75% is mandatory for appearing in final examinations.
                        </li>
                        <li style={{marginBottom: '1rem', position: 'relative', paddingLeft: '25px'}}>
                            <i className="fas fa-check-circle"
                                style={{color: 'var(--accent-color)', position: 'absolute', left: '0', top: '5px'}}></i>
                            Use of mobile phones is strictly prohibited within the academic block (except for authorized
                            digital learning).
                        </li>
                        <li style={{marginBottom: '1rem', position: 'relative', paddingLeft: '25px'}}>
                            <i className="fas fa-check-circle"
                                style={{color: 'var(--accent-color)', position: 'absolute', left: '0', top: '5px'}}></i>
                            Respect for teachers, staff, and fellow students is paramount to our ethos.
                        </li>
                    </ul>
                </div>
            </div>

        </main>
      </section>

      <Footer />
    </div>
  );
}
