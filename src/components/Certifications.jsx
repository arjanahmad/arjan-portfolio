import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: "Full Stack Development Internship Certificate",
    issuer: "CodeAlpha",
    date: "10 June 2026 – 10 July 2026",
    certId: "Student ID: CA/DF1/132132",
    description: "Official Certificate of Completion awarded for building full-stack modules and responsive web interfaces during the CodeAlpha Virtual Internship Program.",
    verifyUrl: "https://drive.google.com/file/d/14iVg6byzUjMURBxQDYN_vAHxgOlrcoip/view?usp=sharing"
  },
  {
    id: 2,
    title: "Web Development Virtual Internship Certificate",
    issuer: "CodSoft",
    date: "May 2026 – June 2026",
    certId: "Verified Internship",
    description: "Certificate of Completion awarded for designing and delivering real-world web applications, responsive tools, and client-side web interfaces.",
    verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Cybersecurity Workshop: Hack With Smile",
    issuer: "Shri Ramswaroop Memorial University (SRMU)",
    date: "February 2026",
    certId: "SRMU VIVEKA Techfest 2k26",
    description: "Hands-on participation exploring system security, vulnerability analysis, risk mitigation, and ethical hacking fundamentals in lab simulations.",
    verifyUrl: "https://drive.google.com/file/d/1Ta9IYNJsUhZHY_KRw5364e1f0dlvlBvi/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Ethical Hacking Bootcamp Certificate",
    issuer: "Physics Wallah",
    date: "19th August 2026",
    certId: "NO: fa4e7b83-4d50-4632-af87-8ec757ebcbef",
    description: "Comprehensive training covering network fundamentals, defensive protocols, footprinting methodologies, and web application security standards.",
    verifyUrl: "https://drive.google.com/file/d/1Ta9IYNJsUhZHY_KRw5364e1f0dlvlBvi/view?usp=sharing"
  },
  {
    id: 5,
    title: "Tech4Hack Buildathon Certificate of Participation",
    issuer: "Tech4Hack @ Thoughtworks Technology",
    date: "01st August 2026",
    certId: "Buildathon AI Participation",
    description: "Recognized for initiative, collaborative problem solving, and enthusiasm toward learning modern AI concepts during the Thoughtworks Buildathon.",
    verifyUrl: "https://drive.google.com/file/d/1-zN7NewF1PLgrSAstwLuZlhf4XmAtP2A/view?usp=sharing"
  },
  {
    id: 6,
    title: "Top Lyria Artist – Music Night Edition",
    issuer: "Google Student Ambassador Program",
    date: "June 2026",
    certId: "Ambassador Recognition",
    description: "Awarded for creativity and innovation in AI-assisted audio generation using Google Lyria during the official Google Ambassador initiative.",
    verifyUrl: "https://drive.google.com/file/d/1MI8h7jrfl5HnAsNzuTPrtVv0tYQ-9Tjf/view?usp=sharing"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Accomplishments</span>
          </h2>
          <p className="section-subtitle">
            Authenticated credentials from virtual internships, technical bootcamps, and competitive collegiate hackathons.
          </p>
        </div>

        {/* Featured Accomplishment Spotlight Card */}
        <motion.div 
          className="codex-achievement-banner glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="achievement-left">
            <div className="trophy-glow-wrap">
              <Trophy size={34} className="trophy-icon" />
            </div>
            <div>
              <div className="achievement-pill">
                <Sparkles size={13} />
                <span>Featured Collegiate Honor</span>
              </div>
              <h3 className="achievement-title">Top Performer — CodeX Coding Competition</h3>
              <p className="achievement-institution">Shri Ramswaroop Memorial University (SRMU)</p>
            </div>
          </div>

          <div className="achievement-right">
            <p className="achievement-text">
              Ranked among top participants in SRMU's flagship competitive programming challenge. 
              Demonstrated strong problem-solving acumen, logical reasoning, and coding efficiency under strict time constraints.
            </p>
            <div className="achievement-highlights">
              <span className="achieve-tag"><CheckCircle2 size={13} /> Problem Solving</span>
              <span className="achieve-tag"><CheckCircle2 size={13} /> Logical Reasoning</span>
              <span className="achieve-tag"><CheckCircle2 size={13} /> Time-Bound Efficiency</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="certifications-card-grid">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="cert-card-saas glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="cert-top-row">
                <div className="cert-badge-wrap">
                  <Award size={22} className="cert-award-icon" />
                </div>
                <div className="cert-meta-tags">
                  <span className="cert-date-tag">
                    <Calendar size={12} /> {cert.date}
                  </span>
                  <span className="cert-verified-pill">
                    <ShieldCheck size={12} /> Verified
                  </span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer-row">
                <span className="cert-issuer-name">{cert.issuer}</span>
                {cert.certId && (
                  <span className="cert-id-badge">{cert.certId}</span>
                )}
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-action-footer">
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline cert-link-btn"
                  aria-label={`View Certificate Document for ${cert.title}`}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
