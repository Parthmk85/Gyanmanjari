'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashBg from "../../public/splash-bg-2.jpg";

// Module-level variable to track splash state across client-side navigations
let splashShownInSession = false;

export default function Home() {
  // Initialize based on whether we've already shown it in this session (memory)
  const [showSplash, setShowSplash] = useState(!splashShownInSession);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  // Stats state
  const [counts, setCounts] = useState({
    years: 0,
    students: 0,
    faculty: 0,
    awards: 0
  });
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef(null);

  // Splash Screen Logic
  useEffect(() => {
    if (!splashShownInSession) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        splashShownInSession = true;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll Handler (Navbar & Reveal)
  useEffect(() => {
    const handleScroll = () => {
      // Navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Reveal
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });

      // Stats Trigger
      if (statsRef.current && !statsTriggered) {
        const top = statsRef.current.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          setStatsTriggered(true);
          animateStats();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsTriggered]);

  // Animate Stats Function
  const animateStats = () => {
    const duration = 1000; // 1s
    const steps = 50;
    const intervalTime = duration / steps;
    
    const targets = {
      years: 15,
      students: 5000,
      faculty: 200,
      awards: 50
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        years: Math.min(Math.ceil(targets.years * progress), targets.years),
        students: Math.min(Math.ceil(targets.students * progress), targets.students),
        faculty: Math.min(Math.ceil(targets.faculty * progress), targets.faculty),
        awards: Math.min(Math.ceil(targets.awards * progress), targets.awards)
      });
      if (step >= steps) clearInterval(timer);
    }, intervalTime);
  };

  const facilities = [
    { 
      id: 'computer-lab', 
      icon: 'fa-laptop', 
      title: 'Computer Lab', 
      desc: 'Our state-of-the-art computer labs are equipped with the latest hardware and software to ensure students stay ahead in the digital age.',
      link: '/facilities?tab=computer-lab' 
    },
    { 
      id: 'library', 
      icon: 'fa-book', 
      title: 'Library', 
      desc: 'A digital library with over 10,000 books, journals, and e-resources serving as a quiet sanctuary for readers and scholars.',
      link: '/facilities?tab=library' 
    },
    { 
      id: 'lab-facility', 
      icon: 'fa-flask', 
      title: 'Lab Facility', 
      desc: 'Advanced Physics, Chemistry, and Biology laboratories designed to foster curiosity and scientific temper with modern equipment.',
      link: '/facilities?tab=lab-facility' 
    },
    { 
      id: 'play-ground', 
      icon: 'fa-running', 
      title: 'Playground', 
      desc: 'A vast sports complex and playground for Cricket, Football, and Athletics. We believe physical fitness is crucial for mental development.',
      link: '/facilities?tab=play-ground' 
    },
    { 
      id: 'solution-desk', 
      icon: 'fa-headset', 
      title: 'Solution Desk', 
      desc: 'A dedicated help desk for students to resolve academic and administrative queries quickly. One-stop solution for all student needs.',
      link: '/facilities?tab=solution-desk' 
    },
    { 
      id: 'dining-hall', 
      icon: 'fa-utensils', 
      title: 'Dining Hall', 
      desc: 'Nutritious and delicious meals served in a clean and hygienic environment ensuring a balanced diet for growing children.',
      link: '/facilities?tab=dining-hall' 
    },
    { 
      id: 'counselling', 
      icon: 'fa-user-friends', 
      title: 'Counseling', 
      desc: 'Professional counsellors to guide students through academic pressure, career choices, and personal growth.',
      link: '/facilities?tab=counselling' 
    }
  ];

  // Slider Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      title: "Empowering Future Leaders",
      subtitle: "Experience world-class education at Gyanmanjari"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      title: "State-of-the-art Facilities",
      subtitle: "Labs, Libraries, and Sports Complexes designed for growth"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      title: "Holistic Development",
      subtitle: "Nurturing minds through academics and beyond"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      title: "Community & Culture",
      subtitle: "Fostering a sense of belonging and cultural values"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      title: "Excellence in Sports",
      subtitle: "Building character and discipline through athletics"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Splash Screen (Preserved) */}
      <div
        className={`fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center bg-gray-900 transition-opacity duration-1000 ${
          showSplash ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src={SplashBg}
            alt="Welcome to Gyanmanjari"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white! p-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl animate-fade-in-up text-white!">
              Empowering Knowledge
            </h1>
            <p className="mt-12 text-xs sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-[0.3em] text-white! drop-shadow-lg animate-fade-in-up delay-200">
              WITH GYANMANJARI VIDYAPITH
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Static Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
             <Image 
               src={SplashBg} 
               alt="Campus" 
               fill 
               className="object-cover"
               priority
             />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Floating Slider (Foreground) */}
        <div className="absolute z-20 overflow-hidden flex items-center justify-center"
             style={{
               top: '120px', 
               bottom: '120px', 
               left: '60px', 
               right: '60px',
               borderRadius: '20px', 
               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
             }}>
            
            {/* Slider Track */}
            <div className="w-full h-full relative">
                {slides.map((slide, index) => {
                    // Logic for continuous Left -> Right flow
                    const isCurrent = index === currentSlide;
                    const isPrev = index === (currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
                    
                    // All images remain fully opaque to prevent "blank" gaps
                    // Default: Ready on the Left
                    let positionClass = 'translate-x-full z-0'; 
                    // Wait, if entering from Left, default waiting spot is Left (-translate-x-full) for 'Next' item.
                    // But here we set ALL non-current/non-prev to be on the left?
                    // Actually, if we go 0 -> 1. 1 needs to be on Left. 2 needs to be on Left?
                    // Let's stick to the previous direction: Entring from Left.
                    // So 'Next' must be on Left. 
                    // Actually 'isPrev' is exiting to 'Right'.
                    
                    positionClass = '-translate-x-full z-0'; // Waiting on Left

                    if (isCurrent) positionClass = 'translate-x-0 z-20';
                    else if (isPrev) positionClass = 'translate-x-full z-10'; // Exit Right

                    return (
                        <div 
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${positionClass}`}
                        >
                            {/* Slide Image */}
                            <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-full object-cover rounded-[20px] bg-gray-200"
                            />

                        </div>
                    );
                })}
            </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-grid">
            <div className="stat-item">
                <h2 className="counter">{counts.years}+</h2>
                <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
                <h2 className="counter">{counts.students}+</h2>
                <p>Students Enrolled</p>
            </div>
            <div className="stat-item">
                <h2 className="counter">{counts.faculty}+</h2>
                <p>Expert Faculty</p>
            </div>
            <div className="stat-item">
                <h2 className="counter">{counts.awards}+</h2>
                <p>Awards Won</p>
            </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="academic-programs reveal">
        <div className="section-header">
            <span className="section-tag" style={{background: 'var(--accent-color)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block'}}>Academic Excellence</span>
            <h2 className="section-title" style={{fontSize: '3rem', marginTop: '1rem', color: '#1a202c'}}>Our Academic <span style={{fontWeight: 700}}>Programs</span></h2>
            <p style={{maxWidth: '600px', margin: '1rem auto', color: '#718096'}}>Tailored educational paths designed to nurture talent and achieve academic milestones.</p>
        </div>

        <div className="programs-grid">
            {/* Program 1 */}
            <div className="program-card-new">
                <div className="pill-tag pill-blue">Foundation</div>
                <div className="card-content">
                    <div className="icon-box icon-blue">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <h3>Primary Education</h3>
                    <p>Building foundational skills with a focus on interactive learning and early cognitive development.</p>
                    <Link href="#" className="learn-more-link link-blue">Learn More <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>

            {/* Program 2 */}
            <div className="program-card-new">
                <div className="pill-tag pill-green">Core</div>
                <div className="card-content">
                    <div className="icon-box icon-green">
                        <i className="fas fa-school"></i>
                    </div>
                    <h3>Secondary Education</h3>
                    <p>Comprehensive curriculum preparing students for higher studies and diverse career paths.</p>
                    <Link href="#" className="learn-more-link link-green">Learn More <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>

            {/* Program 3 */}
            <div className="program-card-new">
                <div className="pill-tag pill-purple">Advanced</div>
                <div className="card-content">
                    <div className="icon-box icon-purple">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <h3>Higher Education Prep</h3>
                    <p>Specialized guidance and advanced courses for competitive exams and university admissions.</p>
                    <Link href="#" className="learn-more-link link-purple">Learn More <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="presence-section">
        <div className="section-header">
            <span className="section-tag" style={{background: 'var(--accent-color)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block'}}>Global Reach</span>
            <h2 className="section-title" style={{fontSize: '3rem', marginTop: '1rem', color: '#1a202c'}}>Our <span style={{fontWeight: 700}}>Presence</span></h2>
            <p style={{maxWidth: '600px', margin: '1rem auto', color: '#718096'}}>Spreading excellence across multiple locations to empower students everywhere.</p>
        </div>

        <div className="marquee-container">
            {/* Loop duplicated for infinite scroll */}
            {[0, 1].map((i) => (
                <div className="marquee-track" key={i} aria-hidden={i===1}>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-building"></i></div>
                        <h3 className="presence-city">Gandhinagar</h3>
                        <p className="presence-details">School of Achiever</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Koba-Gandhinagar Highway</p>
                    </div>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-landmark"></i></div>
                        <h3 className="presence-city">Rajkot</h3>
                        <p className="presence-details">Shree Swaminarayan Gurukul</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Gondal Road</p>
                    </div>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-tree"></i></div>
                        <h3 className="presence-city">Himmatnagar</h3>
                        <p className="presence-details">Tapovan Vidyamandir</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Bern Road</p>
                    </div>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-mountain"></i></div>
                        <h3 className="presence-city">Junagadh</h3>
                        <p className="presence-details">Genius Public School</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Sardar Baug</p>
                    </div>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-city"></i></div>
                        <h3 className="presence-city">Vadodara</h3>
                        <p className="presence-details">Akshar Public School</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Waghodia Road</p>
                    </div>
                    <div className="presence-card">
                        <div className="presence-icon"><i className="fas fa-university"></i></div>
                        <h3 className="presence-city">Ahmedabad</h3>
                        <p className="presence-details">Aditya International</p>
                        <p className="presence-details" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Nikol</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Facilities Home Section */}
      <section className="facilities-home reveal">
        <span className="facilities-tag">World-Class Infrastructure</span>
        <h2 className="facilities-title">Facilities for a Brighter Future</h2>

        <div className="facilities-tabs-wrapper">
            {facilities.map((fac, index) => (
                <div 
                    key={fac.id}
                    className={`facility-tab ${index === activeFacilityIndex ? 'active' : ''}`}
                    onClick={() => setActiveFacilityIndex(index)}
                >
                    <i className={`fas ${fac.icon}`}></i>
                    <span>{fac.title}</span>
                </div>
            ))}
        </div>

        <div id="facility-message-box" className={`facility-message-box ${activeFacilityIndex !== null ? 'visible' : ''}`}>
            <p id="facility-message-text" className="facility-message-text">{facilities[activeFacilityIndex]?.desc}</p>
            <Link href={facilities[activeFacilityIndex]?.link || '#'} className="facility-learn-more-btn">
                Learn More <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
      </section>

      {/* Gallery Marquee Section */}
      <section className="gallery-marquee-section reveal">
        <div className="section-header">
            <span className="section-tag" style={{background: 'var(--accent-color)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block'}}>Campus Life</span>
            <h2 className="section-title" style={{fontSize: '3rem', marginTop: '1rem', color: '#1a202c'}}>Captured <span style={{fontWeight: 700}}>Moments</span></h2>
        </div>

        <div className="marquee-container">
             {[0, 1].map((i) => (
                <div className="marquee-track" key={i} aria-hidden={i===1}>
                    <div className="gallery-card">
                        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Convocation" />
                        <div className="gallery-overlay">
                            <h4>Annual Function</h4>
                            <p>Celebrating student achievements</p>
                        </div>
                    </div>
                    <div className="gallery-card">
                        <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Science Fair" />
                        <div className="gallery-overlay">
                            <h4>Science Exhibition</h4>
                            <p>Innovations by young minds</p>
                        </div>
                    </div>
                    <div className="gallery-card">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Group Study" />
                        <div className="gallery-overlay">
                            <h4>Peer Learning</h4>
                            <p>Collaborative study sessions</p>
                        </div>
                    </div>
                    {/* Add more gallery items as per reference */}
                    <div className="gallery-card">
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Sports Day" />
                        <div className="gallery-overlay">
                            <h4>Sports Meet</h4>
                            <p>Fostering team spirit</p>
                        </div>
                    </div>
                    <div className="gallery-card">
                        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Library" />
                        <div className="gallery-overlay">
                            <h4>Reading Sessions</h4>
                            <p>Knowledge sharing</p>
                        </div>
                    </div>
                </div>
             ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
