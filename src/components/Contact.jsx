import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';
/*import { FiGithub, FiLinkedin } from 'react-icons/fi';*/
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

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

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  }catch (error) {
  console.error("EMAILJS ERROR:", error);
  alert(JSON.stringify(error));
  setStatus('error');
}
  
};

  return (
    <section id="contact" className="contact-section container">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out for internship opportunities, project collaborations, or just to say hello.
        </motion.p>
      </div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info-panel glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="info-title">Let's build something together</h3>
          <p className="info-desc">
            I'm currently seeking junior full-stack developer roles and open to interesting project proposals. 
            If you have questions, ideas, or simply want to chat, send a message.
          </p>

          <div className="contact-details-list">
            <a href="mailto:arjan.ahmad@example.com" className="contact-detail-item">
              <div className="contact-icon-box">
                <Mail size={18} />
              </div>
              <div className="contact-detail-text">
                <span className="detail-label">Email Me At</span>
                <span className="detail-value">arjanahmad7861@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="contact-social-channels">
            <h4 className="channels-title">Find me on social channels</h4>
            <div className="channels-row">
              <a href="https://github.com/arjanahmad" target="_blank" rel="noreferrer" className="channel-btn" aria-label="GitHub">
                <FiGithub size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/arjan-ahmad-srmu/" target="_blank" rel="noreferrer" className="channel-btn" aria-label="LinkedIn">
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
  href="https://www.instagram.com/mr.arjaan786"
  target="_blank"
  rel="noreferrer"
  className="channel-btn"
>
  <FiInstagram size={20} />
  <span>Instagram</span>
</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-panel glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                className="form-success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon-wrapper">
                  <Check size={40} />
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out, Arjan will get back to you as soon as possible.
                </p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                className="contact-form-body"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-input-group">
                  <label htmlFor="contact-name" className="form-input-label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input-control"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-email" className="form-input-label">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                    className="form-input-control"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-message" className="form-input-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, internship opportunity, or question here..."
                    required
                    className="form-input-control"
                    disabled={status === 'submitting'}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-feedback">
                    <AlertCircle size={16} />
                    <span>Please fill in all inputs before submitting.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary submit-form-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span> <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
