'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header 
        className="hero"
        style={{
            minHeight: '40vh',
            backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="hero-content">
            <span className="breadcrumb">GET IN TOUCH</span>
            <h1>Contact Us</h1>
        </div>
      </header>

      <section className="founders-container" style={{paddingTop: '4rem'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '4rem'}}>
            {/* Contact Info */}
            <div style={{flex: '1', minWidth: '300px'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)'}}>Reach Out To Us</h2>
                <div style={{marginBottom: '2rem'}}>
                    <h4 style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Address</h4>
                    <p style={{color: 'var(--text-gray)'}}>Kalvibid, Bhavnagar - 364002<br/>Gujarat, India</p>
                </div>
                <div style={{marginBottom: '2rem'}}>
                    <h4 style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Phone</h4>
                    <p style={{color: 'var(--text-gray)'}}>+91 90999 41251<br/>+91 89800 15310</p>
                </div>
                <div style={{marginBottom: '2rem'}}>
                    <h4 style={{color: 'var(--accent-color)', marginBottom: '0.5rem'}}>Email</h4>
                    <p style={{color: 'var(--text-gray)'}}>gyanmanjaribvn@gmail.com</p>
                </div>
            </div>

            {/* Contact Form */}
            <div
                style={{
                    flex: '1', 
                    minWidth: '300px', 
                    background: 'white', 
                    padding: '2rem', 
                    boxShadow: 'var(--shadow-lg)', 
                    borderRadius: '8px'
                }}
            >
                <h3 style={{marginBottom: '1.5rem'}}>Send a Message</h3>
                <form>
                    <div style={{marginBottom: '1rem'}}>
                        <input type="text" placeholder="Your Name"
                            style={{width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none'}} />
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                        <input type="email" placeholder="Your Email"
                            style={{width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none'}} />
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                        <input type="text" placeholder="Subject"
                            style={{width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none'}} />
                    </div>
                    <div style={{marginBottom: '1.5rem'}}>
                        <textarea placeholder="Message" rows="5"
                            style={{width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none'}}></textarea>
                    </div>
                    <button type="button" className="cta-button" style={{width: '100%', border: 'none', cursor: 'pointer'}}>Send
                        Message</button>
                </form>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
