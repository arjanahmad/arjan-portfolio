import { motion } from 'framer-motion';
import { GraduationCap, Target, ShieldCheck, Cpu, Code2, Award, ArrowUpRight } from 'lucide-react';
import './About.css';

const About = () => {
  const highlightCards = [
    {
      icon: <GraduationCap className="card-icon text-cyan" size={22} />,
      title: "Academic Foundation",
      subtitle: "Bachelor of Computer Applications (BCA)",
      institution: "Shri Ramswaroop Memorial University (SRMU)",
      period: "Expected June 2026 | Lucknow, UP",
      description: "Structured computer science foundation in Object-Oriented Programming (Core Java), Data Structures & Algorithms, DBMS, and Web Architecture."
    },
    {
      icon: <Code2 className="card-icon text-violet" size={22} />,
      title: "Frontend Engineering",
      subtitle: "Responsive UI & Performance",
      institution: "Hands-on Project & Internship Work",
      period: "2024 – Present",
      description: "Specialized in creating responsive, accessible, cross-browser web applications with modern HTML5, CSS3, JavaScript (ES6+), and React.js."
    },
    {
      icon: <Target className="card-icon text-cyan" size={22} />,
      title: "Practical Execution",
      subtitle: "2x Verified Remote Internships",
      institution: "CodeAlpha & CodSoft",
      period: "Jun 2026 – Jul 2026 & May 2026",
      description: "Delivered production-ready modules, user interfaces, real-time file sharing logic, and utility tools under structured remote programs."
    },
    {
      icon: <ShieldCheck className="card-icon text-violet" size={22} />,
      title: "Security & Exploration",
      subtitle: "Cybersecurity Fundamentals",
      institution: "SRMU VIVEKA & Physics Wallah",
      period: "Continuous Learning",
      description: "Active self-directed focus on web application security, input validation, Kali Linux environment navigation, and OWASP safety standards."
    }
  ];

  const educationTimeline = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shri Ramswaroop Memorial University",
      location: "Lucknow, Uttar Pradesh",
      year: "Expected June 2026",
      details: "Focus on Web Development, Core Java, Relational Databases, and Software Engineering principles."
    },
    {
      degree: "Intermediate (12th Standard)",
      institution: "A H Inter College",
      location: "Amethi, Uttar Pradesh",
      year: "2023",
      details: "Completed higher secondary education with strong analytical and scientific reasoning foundation."
    },
    {
      degree: "High School (10th Standard)",
      institution: "Brightway Public School",
      location: "Sultanpur, Uttar Pradesh",
      year: "2021",
      details: "Solid academic foundation and initial introduction to computer science and logical thinking."
    }
  ];

  return (
    <section id="about" className="about-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Professional Background</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Arjan Ahmad</span>
          </h2>
          <p className="section-subtitle">
            Frontend developer and BCA candidate driven by clean code, intuitive user experiences, and systematic problem solving.
          </p>
        </div>

        {/* Story Intro Card */}
        <div className="about-hero-story glass-card">
          <div className="story-content">
            <h3 className="story-heading">
              Building modern web solutions with precision, usability, and speed.
            </h3>
            <p className="story-paragraph">
              I am a final-year <strong>BCA student at Shri Ramswaroop Memorial University</strong> based in Lucknow, Uttar Pradesh. 
              My passion lies in crafting high-performance, aesthetically pleasing user interfaces that deliver frictionless experiences across desktop and mobile devices.
            </p>
            <p className="story-paragraph">
              Through virtual full-stack and web development internships at <strong>CodeAlpha</strong> and <strong>CodSoft</strong>, 
              I've designed and deployed real-world applications including an <strong>AI-powered resume builder with ATS scoring</strong> and <strong>DropShxre</strong>, a high-speed file distribution tool. 
              Recognized as a <strong>Top Performer in the CodeX Coding Competition</strong> at SRMU, I blend algorithmic thinking with frontend craftsmanship.
            </p>
            <div className="story-chips">
              <span className="tech-tag">BCA Graduate Mindset</span>
              <span className="tech-tag">Responsive UI & Modern CSS</span>
              <span className="tech-tag">JavaScript (ES6+) & React</span>
              <span className="tech-tag">Core Java & DSA Basics</span>
              <span className="tech-tag">Cybersecurity Fundamentals</span>
            </div>
          </div>
        </div>

        {/* 4 Supporting Feature Cards */}
        <div className="about-cards-grid">
          {highlightCards.map((card, idx) => (
            <motion.div 
              key={idx}
              className="about-highlight-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <div className="card-top-row">
                <div className="card-icon-container">
                  {card.icon}
                </div>
                <span className="card-period-tag">{card.period}</span>
              </div>
              <h3 className="card-main-title">{card.title}</h3>
              <div className="card-sub-info">
                <strong>{card.subtitle}</strong>
                <span>{card.institution}</span>
              </div>
              <p className="card-detail-text">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education Milestone Timeline */}
        <div className="about-education-container glass-card">
          <div className="education-header">
            <div className="education-icon-box">
              <Award size={20} />
            </div>
            <div>
              <h3 className="education-heading">Educational Milestones</h3>
              <p className="education-subheading">Formal academic background and qualification timeline</p>
            </div>
          </div>

          <div className="education-items-list">
            {educationTimeline.map((item, index) => (
              <div key={index} className="education-timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  {index !== educationTimeline.length - 1 && <div className="marker-line"></div>}
                </div>
                <div className="timeline-item-body">
                  <div className="timeline-title-row">
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-institution">
                    {item.institution} — <span className="timeline-location">{item.location}</span>
                  </div>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
