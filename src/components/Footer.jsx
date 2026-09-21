import { Mail, PhoneCall, ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="footer-brand-title">
              ARJAN <span className="text-gradient">AHMAD</span>
            </div>
            <p className="footer-tagline">
              Frontend Developer & BCA Graduate. Building fast, responsive, and accessible web experiences with modern architecture.
            </p>
          </div>

          <div className="footer-actions-side">
            <div className="footer-contact-links">
              <a href="tel:+916388451366" className="footer-contact-item phone-item" title="Call Arjan Ahmad">
                <PhoneCall size={16} />
                <span>+91 6388451366</span>
              </a>
              <a href="mailto:arjanahmad7861@gmail.com" className="footer-contact-item" title="Email Arjan Ahmad">
                <Mail size={16} />
                <span>arjanahmad7861@gmail.com</span>
              </a>
            </div>

            <div className="footer-social-icons">
              <a 
                href="https://github.com/arjanahmad" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                aria-label="GitHub Profile"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/arjan-ahmad-srmu" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={18} />
              </a>
              <button 
                onClick={scrollToTop} 
                className="footer-back-to-top" 
                aria-label="Back to Top of Page"
                title="Back to Top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Arjan Ahmad. All rights reserved.
          </p>
          <p className="footer-location">
            Lucknow, Uttar Pradesh, India • Designed for Performance & Usability
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
