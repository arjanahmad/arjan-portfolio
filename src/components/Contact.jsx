import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, PhoneCall, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      setStatus('submitting');

      await emailjs.send(
        'service_uqu8asr',
        'template_k3kkzq1',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'xO-MfI9n-4B7NTq4F'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for frontend & full-stack developer roles, virtual internships, and high-impact web development collaborations.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Communication Hub */}
          <motion.div 
            className="contact-channels-card glass-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="channels-title">Let's discuss your next project or role</h3>
            <p className="channels-desc">
              Whether you are a recruiter looking for a dedicated frontend developer or an engineering team seeking a fresh builder, feel free to call, email, or message me directly.
            </p>

            {/* Primary Action 1: Call Me Now Box */}
            <div className="direct-action-card call-highlight-box">
              <div className="action-card-left">
                <div className="action-icon-circle call-circle">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <span className="action-sublabel">Phone Call (Immediate)</span>
                  <a href="tel:+916388451366" className="action-main-link phone-number-link">
                    +91 6388451366
                  </a>
                </div>
              </div>
              <div className="action-card-buttons">
                <a href="tel:+916388451366" className="btn btn-call btn-sm-action" aria-label="Call +91 6388451366">
                  <PhoneCall size={14} /> <span>Call Now</span>
                </a>
                <button 
                  className="btn btn-outline btn-copy-action"
                  onClick={() => handleCopy('+916388451366', 'phone')}
                  aria-label="Copy phone number"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Primary Action 2: Email Box */}
            <div className="direct-action-card email-highlight-box">
              <div className="action-card-left">
                <div className="action-icon-circle email-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="action-sublabel">Official Email</span>
                  <a href="mailto:arjanahmad7861@gmail.com" className="action-main-link">
                    arjanahmad7861@gmail.com
                  </a>
                </div>
              </div>
              <div className="action-card-buttons">
                <a href="mailto:arjanahmad7861@gmail.com" className="btn btn-outline btn-sm-action">
                  <span>Send Email</span>
                </a>
                <button 
                  className="btn btn-outline btn-copy-action"
                  onClick={() => handleCopy('arjanahmad7861@gmail.com', 'email')}
                  aria-label="Copy email address"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="contact-networks-strip">
              <h4 className="networks-label">Professional Profiles</h4>
              <div className="networks-row">
                <a 
                  href="https://linkedin.com/in/arjan-ahmad-srmu/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="network-item-btn"
                  aria-label="LinkedIn Profile of Arjan Ahmad"
                >
                  <FiLinkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href="https://github.com/arjanahmad" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="network-item-btn"
                  aria-label="GitHub Profile of Arjan Ahmad"
                >
                  <FiGithub size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            className="contact-form-card glass-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">
              Fill out the details below and your message will be forwarded directly to Arjan's inbox.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  className="form-success-feedback"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="feedback-icon-wrap">
                    <CheckCircle2 size={44} className="success-check-icon" />
                  </div>
                  <h4 className="feedback-heading">Message Sent Successfully!</h4>
                  <p className="feedback-message">
                    Thank you for reaching out. Arjan will review your inquiry and respond promptly.
                  </p>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form className="saas-contact-form" onSubmit={handleSubmit}>
                  <div className="form-field-group">
                    <label htmlFor="name" className="field-label">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="field-input"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="field-label">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      required
                      className="field-input"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your role opportunity, project scope, or inquiry..."
                      required
                      className="field-textarea"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-error-inline">
                      <AlertCircle size={16} />
                      <span>Unable to deliver message right now. Please call or email directly.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
