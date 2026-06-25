import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const categoryIcons = {
  Frontend: <Code2 size={22} className="category-icon" />,
  Programming: <Terminal size={22} className="category-icon" />,
  Database: <Database size={22} className="category-icon" />,
  Tools: <Wrench size={22} className="category-icon" />,
  Other: <Layers size={22} className="category-icon" />,
};

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = value;
    const duration = 1200; // 1.2 seconds
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return <span ref={ref}>{count}%</span>;
};

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 60 },
      { name: "JavaScript", level: 55 },
      { name: "React.js", level: 50 }
    ],
    Programming: [
      { name: "Core Java", level: 65 },
      { name: "C++", level: 50 },
      { name: "C", level: 45 } 
    ],
    Database: [
      { name: "MySQL", level: 70 }
    ],
    Tools: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 80 },
    ],
    Other: [
      { name: "Problem Solving", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Communication", level: 75 },
      { name: "Team Collaboration", level: 80 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="skills-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A representation of my technical capabilities and proficiency across various domains.
        </motion.p>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {Object.entries(skillsData).map(([category, list]) => (
          <motion.div 
            key={category}
            className="skills-category-card glass-card"
            variants={cardVariants}
          >
            <h3 className="category-title">
              {categoryIcons[category]}
              <span>{category}</span>
            </h3>
            <div className="skills-list">
              {list.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      <Counter value={skill.level} />
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
