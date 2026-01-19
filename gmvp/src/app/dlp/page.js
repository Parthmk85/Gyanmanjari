'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dlp() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header 
        className="hero"
        style={{
            backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="hero-content">
            <span className="breadcrumb">ACADEMICS</span>
            <h1>DLP & Programs</h1>
            <p>Comprehensive Distance Learning Programs and detailed academic pathways.</p>
        </div>
      </header>

      <section className="founders-container">
        <div className="section-header reveal active">
            <span className="section-tag">Detailed Curriculum</span>
            <h2 className="section-title">Academic Excellence</h2>
        </div>

        {/* Detailed Program 1 */}
        <article className="founder-card reveal active">
            <div className="founder-image-wrapper">
                <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Primary Education" 
                    className="founder-image"
                />
            </div>
            <div className="founder-content">
                <div className="founder-role">Foundation</div>
                <h3 className="founder-name">Primary Education</h3>
                <div className="founder-bio">
                    <p>Our primary section focuses on activity-based learning. We move beyond rote memorization to
                        instill curiosity. The curriculum matches CBSE standards but is enhanced with Vedic Mathematics
                        and value education.</p>
                    <ul style={{marginTop: '1rem', color: 'var(--text-gray)'}}>
                        <li><i className="fas fa-check" style={{color: 'var(--accent-color)'}}></i> Montessori based methods
                        </li>
                        <li><i className="fas fa-check" style={{color: 'var(--accent-color)'}}></i> Interactive Smart Classes
                        </li>
                        <li><i className="fas fa-check" style={{color: 'var(--accent-color)'}}></i> Focus on verbal fluency
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        {/* Detailed Program 2 */}
        <article className="founder-card reveal active">
            <div className="founder-image-wrapper">
                <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="JEE NEET" 
                    className="founder-image"
                />
            </div>
            <div className="founder-content">
                <div className="founder-role">Competitive Wing</div>
                <h3 className="founder-name">JEE / NEET Preparation</h3>
                <div className="founder-bio">
                    <p>For aspiring engineers and doctors, our integrated coaching program offers rigorous training.
                        This includes the DLP (Distance Learning Program) support with online test series, recorded
                        lectures, and doubt-solving sessions.</p>
                    <br />
                    <p>We have a track record of producing city toppers. Our faculty consists of IIT alumni and medical
                        experts.</p>
                </div>
                <div className="founder-quote">"Turning Aspirations into Achievements"</div>
            </div>
        </article>

        {/* Detailed Program 3 */}
        <article className="founder-card reveal active">
            <div className="founder-image-wrapper">
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Higher Secondary" 
                    className="founder-image"
                />
            </div>
            <div className="founder-content">
                <div className="founder-role">Advanced Studies</div>
                <h3 className="founder-name">Higher Secondary (Science)</h3>
                <div className="founder-bio">
                    <p>Classes 11 and 12 are crucial. We offer specialized streams in Pure Science (Group A & B). Our
                        labs are open for longer hours for research projects, and we prepare students not just for
                        exams, but for university research life.</p>
                </div>
            </div>
        </article>
      </section>

      <Footer />
    </div>
  );
}
