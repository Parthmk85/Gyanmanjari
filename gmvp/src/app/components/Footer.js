import Link from "next/link";

export default function Footer() {
  return (
      <footer>
        <div className="footer-content">
            <div className="footer-col reveal">
                <div className="footer-logo">
                    <i className="fas fa-graduation-cap"></i> Gyanmanjari
                </div>
                <p className="footer-desc">
                    Empowering students through innovation, character, and scientific excellence. A journey of educational transformation since 2006.
                </p>
                <div className="footer-socials">
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                </div>
            </div>

            <div className="footer-col reveal">
                <h3>Quick Links</h3>
                <ul className="footer-links-list">
                    <li><Link href="#">Founder Profile</Link></li>
                    <li><Link href="#">Administrator</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                </ul>
            </div>

            <div className="footer-col reveal">
                <h3>Programs</h3>
                <ul className="footer-links-list">
                    <li><Link href="#">Teaching Model</Link></li>
                    <li><Link href="#">JEE Preparation</Link></li>
                    <li><Link href="#">NEET Preparation</Link></li>
                    <li><Link href="#">Infrastructure</Link></li>
                </ul>
            </div>

            <div className="footer-col reveal">
                <h3>Get In Touch</h3>
                <div className="contact-item">
                    <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="contact-info">Kalvibid, Bhavnagar - 364002,<br/>Gujarat, India</div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                    <div className="contact-info">gyanmanjaribvn@gmail.com</div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon"><i className="fas fa-mobile-alt"></i></div>
                    <div className="contact-info">+91 90999 41251<br/>+91 89800 15310</div>
                </div>
            </div>
        </div>

        <div className="footer-bottom reveal">
            <div className="copyright">
                &copy; 2026 <strong>GYANMANJARI VIDYAPITH</strong>. All rights reserved.
            </div>
            <div className="bottom-links">
                <Link href="#">Privacy</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Sitemap</Link>
            </div>
        </div>
      </footer>
  );
}
