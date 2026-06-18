import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-gradient">Arjan Ahmad</span>
            <p className="footer-tagline">Building premium, responsive, and secure web solutions.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:arjan.ahmad@example.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Arjan Ahmad. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
