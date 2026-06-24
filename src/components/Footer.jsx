import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-gradient">ARJAN AHMAD </span>
            <p className="footer-tagline">Building next-generation web experiences with precision, performance & elegance.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/arjanahmad" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/arjan-ahmad-srmu" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:arjanahmad7861@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Designed & Developed by <span className="text-gradient">Arjan Ahmad</span></p>
          <p>  ©2026 Arjan Ahmad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
