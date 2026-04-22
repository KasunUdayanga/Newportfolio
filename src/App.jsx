import { useEffect, useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMoon,
  FaSun,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaCertificate,
  FaArrowRight,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaUserCheck,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import heroImage from "./assets/hero.png";
import "./App.css";

const projects = [
  {
    title: "Netflix Clone",
    tag: "Full-Stack",
    description:
      "Responsive streaming UI with authentication flows, trailer previews, and curated categories.",
    tech: ["React", "Node.js", "TMDB API"],
    github: "https://github.com/yourname/netflix-clone",
    demo: "https://netflix-clone.example.com",
    number: "01",
  },
  {
    title: "Live Chat App",
    tag: "Real-time",
    description:
      "Real-time messaging with typing indicators, file sharing, and online presence tracking.",
    tech: ["React", "Express", "Socket.IO"],
    github: "https://github.com/yourname/live-chat-app",
    demo: "https://live-chat.example.com",
    number: "02",
  },
  {
    title: "Inventory Management",
    tag: "Backend",
    description:
      "Role-based inventory management with analytics dashboard and automated stock alerts.",
    tech: ["Spring Boot", "MySQL", "Docker"],
    github: "https://github.com/yourname/inventory-system",
    demo: "https://inventory.example.com",
    number: "03",
  },
  {
    title: "Smart Attendance Tracker",
    tag: "API",
    description:
      "Backend-driven attendance tracker with QR validation and export-ready reports.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/yourname/attendance-tracker",
    demo: "https://attendance.example.com",
    number: "04",
  },
];

const certifications = [
  {
    title: "IBM Backend Development",
    subtitle: "Professional Certificate",
    description:
      "Built production-ready APIs, automated tests, and containerized services with Docker.",
    icon: "🏆",
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Essentials",
    description:
      "Validated fundamentals in cloud architecture, IAM, and AWS pricing models.",
    icon: "☁️",
  },
  {
    title: "Google Cloud Foundations",
    subtitle: "Certification",
    description:
      "Core Google Cloud services, networking, and deployment strategies.",
    icon: "🌐",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: FaCode,
    items: ["JavaScript", "Python", "Java", "PHP"],
    accent: "#f59e0b",
  },
  {
    title: "Frameworks",
    icon: FaServer,
    items: ["React", "Node.js", "Express", "Spring Boot", "Docker"],
    accent: "#3b82f6",
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MySQL", "MongoDB"],
    accent: "#10b981",
  },
];

const skillLevels = [
  { name: "Backend API Design", level: 85 },
  { name: "Database Modeling", level: 80 },
  { name: "Containerization", level: 70 },
  { name: "Cloud Fundamentals", level: 65 },
];

const stats = [
  { label: "Projects Delivered", value: "12+", icon: "◈" },
  { label: "Certifications", value: "3", icon: "◆" },
  { label: "Tech Stack", value: "10+", icon: "◉" },
];

const processSteps = [
  {
    title: "Discover",
    description: "Clarify requirements, constraints, and success metrics.",
    num: "01",
  },
  {
    title: "Design",
    description: "Model the data, API contracts, and system architecture.",
    num: "02",
  },
  {
    title: "Build",
    description: "Implement, test, and document reliable backend services.",
    num: "03",
  },
  {
    title: "Improve",
    description: "Monitor, iterate, and optimize performance over time.",
    num: "04",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useScrollReveal();

  return (
    <div className={`portfolio-root ${darkMode ? "dark" : ""}`}>
      {/* ─── HEADER ─── */}
      <header className="site-header">
        <nav className="nav-inner">
          <a href="#home" className="nav-brand">
            <span className="brand-icon">
              <HiOutlineSparkles />
            </span>
            <span className="brand-name">Kasun<span className="brand-dot">.</span></span>
          </a>

          <div className="nav-links">
            {["about", "skills", "projects", "experience", "contact"].map((s) => (
              <a key={s} className="nav-link" href={`#${s}`}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((p) => !p)}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#contact" className="btn-hire">
              Hire Me <FaArrowRight />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section id="home" className="hero-section">
          <div className="hero-bg-orb orb-1" />
          <div className="hero-bg-orb orb-2" />
          <div className="hero-grid-overlay" />

          <div className="hero-inner">
            <div className="hero-content reveal">
              <div className="hero-badge">
                <span className="badge-dot" />
                Available for Internship
              </div>

              <h1 className="hero-title">
                <span className="hero-name">Kasun Udayanga</span>
                <span className="hero-role">
                  Backend <em>Developer</em>
                </span>
              </h1>

              <p className="hero-desc">
                Third-year ICT undergraduate specializing in scalable backend
                systems, RESTful APIs, and cloud-ready architectures. Turning
                complex requirements into elegant, production-grade solutions.
              </p>

              <div className="hero-cta">
                <a href="#projects" className="btn-primary">
                  View Work <FaArrowRight />
                </a>
                <a href="#contact" className="btn-ghost">
                  Let's Talk
                </a>
              </div>

              <div className="hero-stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat-item">
                    <span className="stat-icon">{s.icon}</span>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal reveal-right">
              <div className="hero-card-main">
                <div className="card-glow" />
                <img
                  src={heroImage}
                  alt="Developer illustration"
                  className="hero-img"
                />
                <div className="hero-focus-tags">
                  <p className="focus-label">Focus Areas</p>
                  <div className="focus-chips">
                    {["REST APIs", "Microservices", "Cloud & DevOps", "Security"].map((t) => (
                      <span key={t} className="focus-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-mini-cards">
                <div className="mini-card">
                  <span className="mini-label">Experience</span>
                  <span className="mini-value">3+ Years</span>
                  <span className="mini-sub">Academic + projects</span>
                </div>
                <div className="mini-card">
                  <span className="mini-label">Focus</span>
                  <span className="mini-value">Backend</span>
                  <span className="mini-sub">APIs, DBs & integrations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header reveal">
              <span className="kicker">About</span>
              <h2 className="section-title">Crafting reliable systems<br />from the ground up</h2>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <p className="about-para">
                  I'm a third-year ICT undergraduate who thrives on backend
                  engineering and clean system architecture. I enjoy working with
                  APIs, designing scalable databases, and ensuring performance
                  and security in every solution I build.
                </p>
                <div className="about-cards">
                  <div className="about-card">
                    <h4>Skills & Interests</h4>
                    <p>API design, authentication, microservices, cloud deployment, DevOps automation.</p>
                  </div>
                  <div className="about-card">
                    <h4>Career Objective</h4>
                    <p>Join a product team to deliver reliable backend platforms and gain real-world internship experience.</p>
                  </div>
                </div>
              </div>

              <div className="about-facts reveal reveal-right">
                <div className="facts-card">
                  <h3>What I Bring</h3>
                  <ul className="brings-list">
                    <li>
                      <span className="brings-bullet" />
                      Backend-first mindset with clean, documented APIs.
                    </li>
                    <li>
                      <span className="brings-bullet" />
                      Experience collaborating with UI teams and product owners.
                    </li>
                    <li>
                      <span className="brings-bullet" />
                      Passion for learning cloud-native and DevOps practices.
                    </li>
                  </ul>
                </div>
                <div className="quick-facts">
                  {[
                    { label: "Location", value: "Sri Lanka" },
                    { label: "Availability", value: "Immediate" },
                    { label: "Email", value: "kasun.dev@email.com" },
                    { label: "Focus", value: "Backend & APIs" },
                  ].map((f) => (
                    <div key={f.label} className="fact-item">
                      <span className="fact-label">{f.label}</span>
                      <span className="fact-value">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <span className="kicker">Skills</span>
              <h2 className="section-title">Technical Expertise</h2>
              <p className="section-sub">A balanced mix of backend engineering, tooling, and data management.</p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, i) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="skill-card reveal"
                    style={{ "--accent": group.accent, animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="skill-card-header">
                      <span className="skill-icon" style={{ color: group.accent }}>
                        <Icon />
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <ul className="skill-list">
                      {group.items.map((item) => (
                        <li key={item} className="skill-item">
                          <span className="skill-dot" style={{ background: group.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="strengths-panel reveal">
              <h3>Core Strengths</h3>
              <div className="strengths-grid">
                {skillLevels.map((skill) => (
                  <div key={skill.name} className="strength-item">
                    <div className="strength-header">
                      <span>{skill.name}</span>
                      <span className="strength-pct">{skill.level}%</span>
                    </div>
                    <div className="strength-track">
                      <div
                        className="strength-bar"
                        style={{ "--w": `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header-row reveal">
              <div>
                <span className="kicker">Projects</span>
                <h2 className="section-title">Selected Work</h2>
                <p className="section-sub">Backend-focused projects that highlight my technical range.</p>
              </div>
              <a href="https://github.com/yourname" className="link-github">
                <FaGithub /> View All on GitHub <FaExternalLinkAlt className="ext-icon" />
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project, i) => (
                <article
                  key={project.title}
                  className="project-card reveal"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="project-number">{project.number}</div>
                  <div className="project-tag">{project.tag}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="proj-link">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} className="proj-link proj-link-demo">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                  <div className="project-accent" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <span className="kicker">Experience</span>
              <h2 className="section-title">Certifications & Process</h2>
              <p className="section-sub">Continuous learning reflected in credentials and a proven workflow.</p>
            </div>

            <div className="certs-grid">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className="cert-card reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-badge">
                    <FaCertificate /> Certified
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              ))}
            </div>

            <div className="process-track reveal">
              <h3 className="process-heading">How I Work</h3>
              <div className="process-steps">
                {processSteps.map((step, i) => (
                  <div key={step.title} className="process-step">
                    <div className="step-num">{step.num}</div>
                    {i < processSteps.length - 1 && <div className="step-line" />}
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info reveal">
                <span className="kicker">Contact</span>
                <h2 className="section-title">Let's Build Something<br /><em>Remarkable</em></h2>
                <p className="section-sub">
                  Have an internship opportunity or a backend challenge?
                  I'm actively looking for teams to grow with.
                </p>

                <div className="contact-items">
                  {[
                    { icon: FaEnvelope, label: "Email", value: "kasun.dev@email.com", href: "mailto:kasun.dev@email.com" },
                    { icon: FaPhoneAlt, label: "Phone", value: "+94 77 123 4567", href: "tel:+94771234567" },
                    { icon: FaLinkedin, label: "LinkedIn", value: "kasun-udayanga", href: "https://linkedin.com" },
                    { icon: FaGithub, label: "GitHub", value: "github.com/yourname", href: "https://github.com" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="contact-item">
                        <span className="contact-icon">
                          <Icon />
                        </span>
                        <div>
                          <span className="contact-label">{item.label}</span>
                          <span className="contact-value">{item.value}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="contact-form-wrap reveal reveal-right">
                <form className="contact-form">
                  <h3>Send a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Internship opportunity" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell me about the opportunity..." />
                  </div>
                  <button type="submit" className="btn-submit">
                    Send Message <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BAND ─── */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner reveal">
              <div className="cta-bg-orb" />
              <span className="kicker" style={{ color: "#f59e0b" }}>Let's Work Together</span>
              <h2 className="cta-title">Ready to bring your<br />backend ideas to life?</h2>
              <p className="cta-sub">
                Actively seeking internship opportunities to contribute and grow
                alongside an ambitious engineering team.
              </p>
              <div className="cta-actions">
                <a href="#contact" className="btn-primary">
                  Schedule a Call <FaArrowRight />
                </a>
                <a href="#projects" className="btn-ghost">
                  View Case Studies
                </a>
              </div>
              <div className="cta-badges">
                <span><FaUserCheck /> Fast response</span>
                <span><FaChartLine /> Data-driven</span>
                <span><FaCloud /> Cloud-ready</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-copy">© 2026 Kasun Udayanga. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="mailto:kasun.dev@email.com"><FaEnvelope /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;