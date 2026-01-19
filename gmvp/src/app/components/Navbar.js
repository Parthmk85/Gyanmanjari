'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
        if (typeof window !== "undefined") {
            window.removeEventListener('scroll', handleScroll);
        }
    };
  }, []);

  const isActive = (path) => pathname === path;
  const isLoginPage = pathname?.includes('/login');

  return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLoginPage ? 'login-nav' : ''}`}>
        <div className="logo">
            <Link href="/">
                <Image 
                    src="/logo-new.png" 
                    alt="Gyanmanjari Vidyapith Logo" 
                    width={200} 
                    height={60} 
                    className="object-contain h-12 w-auto"
                    priority
                />
            </Link>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'flex' : ''}`} style={mobileMenuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', background: 'white', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' } : {}}>
            <Link href="/" className={isActive('/') ? "active" : ""}>Home</Link>
            <Link href="/about" className={isActive('/about') ? "active" : ""}>About Us</Link>
            <Link href="/academic" className={isActive('/academic') ? "active" : ""}>Academic</Link>
            <Link href="/facilities" className={isActive('/facilities') ? "active" : ""}>Facilities</Link>
            <Link href="/dlp" className={isActive('/dlp') ? "active" : ""}>DLP</Link>
            <Link href="/other" className={isActive('/other') ? "active" : ""}>Other</Link>
            <Link href="/contact" className={isActive('/contact') ? "active" : ""}>Contact Us</Link>
            <Link href="/login" className={isActive('/login') ? "active" : ""}>Login</Link>
        </div>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fas fa-bars"></i>
        </div>
      </nav>
  );
}
