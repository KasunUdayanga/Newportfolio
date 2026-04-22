import { useEffect, useState } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt,
  FaMoon, FaSun, FaExternalLinkAlt, FaCode, FaServer,
  FaDatabase, FaCertificate, FaArrowRight, FaShieldAlt,
  FaCloud, FaChartLine, FaUserCheck,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import heroImage from "./assets/hero.png";
import "./App.css";

const projects = [
  {
    title: "Netflix Clone",
    tag: "Full-Stack",
    emoji: "🎬",
    description: "Responsive streaming UI with authentication flows, trailer previews, and curated categories.",
    tech: ["React", "Node.js", "TMDB API"],
    github: "https://github.com/yourname/netflix-clone",
    demo: "https://netflix-clone.example.com",
    color: "#f97316",
  },
  {
    title: "Live Chat App",
    tag: "Real-time",
    emoji: "💬",
    description: "Real-time messaging with typing indicators, file sharing, and online presence tracking.",
    tech: ["React", "Express", "Socket.IO"],
    github: "https://github.com/yourname/live-chat-app",
    demo: "https://live-chat.example.com",
    color: "#0d9488",
  },
  {
    title: "Inventory System",
    tag: "Backend",
    emoji: "📦",
    description: "Role-based inventory management with analytics dashboard and automated stock alerts.",
    tech: ["Spring Boot", "MySQL", "Docker"],
    github: "https://github.com/yourname/inventory-system",
    demo: "https://inventory.example.com",
    color: "#8b5cf6",
  },
  {
    title: "Attendance Tracker",
    tag: "API",
    emoji: "📋",
    description: "Backend-driven attendance tracker with QR validation and export-ready reports.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/yourname/attendance-tracker",
    demo: "https://attendance.example.com",
    color: "#ec4899",
  },
];

const certifications = [
  {
    title: "IBM Backend Development",
    subtitle: "Professional Certificate",
    body: "Built production-ready APIs, automated tests, and containerized services with Docker.",
    emoji: "🏆",
    color: "#0d9488",
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Essentials",
    body: "Validated fundamentals in cloud architecture, IAM, and AWS pricing models.",
    emoji: "☁️",
    color: "#f97316",
  },
  {
    title: "Google Cloud Foundations",
    subtitle: "Certification",
    body: "Core Google Cloud services, networking, and deployment strategies.",
    emoji: "🌐",
    color: "#8b5cf6",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: FaCode,
    items: ["JavaScript", "Python", "Java", "PHP"],
    color: "#f97316",
  },
  {
    title: "Frameworks & Tools",
    icon: FaServer,
    items: ["React", "Node.js", "Express", "Spring Boot", "Docker"],
    color: "#0d9488",
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MySQL", "MongoDB"],
    color: "#8b5cf6",
  },
];

const skillLevels = [
  { name: "Backend API Design", level: 85, color: "#0d9488" },
  { name: "Database Modeling", level: 80, color: "#f97316" },
  { name: "Containerization", level: 70, color: "#8b5cf6" },
  { name: "Cloud Fundamentals", level: 65, color: "#ec4899" },
];

const stats = [
  { label: "Projects", value: "12+", emoji: "🚀" },
  { label: "Certificates", value: "3", emoji: "🏅" },
  { label: "Tech Stack", value: "10+", emoji: "⚡" },
];

const processSteps = [
  { title: "Discover", desc: "Clarify requirements, constraints, and success metrics.", emoji: "🔍", color: "#f97316" },
  { title: "Design", desc: "Model the data, API contracts, and system architecture.", emoji: "📐", color: "#0d9488" },
  { title: "Build", desc: "Implement, test, and document reliable backend services.", emoji: "🔧", color: "#8b5cf6" },
  { title: "Improve", desc: "Monitor, iterate, and optimize performance over time.", emoji: "📈", color: "#ec4899" },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useScrollReveal();

  return (
    <div className="root">

      {/* ─── HEADER ─── */}
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="logo">
            <span className="logo-mark"><HiOutlineSparkles /></span>
            <span className="logo-name">Kasun<span className="logo-dot">.</span></span>
          </a>

          <nav className="desktop-nav">
            {["about", "skills", "projects", "experience", "contact"].map((n) => (
              <a key={n} href={`#${n}`} className="nav-link">
                {n.charAt(0).toUpperCase() + n.slice(1)}
              </a>
            ))}
          </nav>

          <div className="header-end">
            <button className="theme-toggle" onClick={() => setDark((p) => !p)} aria-label="Toggle theme">
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#contact" className="hire-btn">
              Hire Me <FaArrowRight />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section id="home" className="hero">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />

          <div className="hero-layout">
            {/* Left */}
            <div className="hero-text reveal">
              <div className="avail-badge">
                <span className="a-dot" />
                Available for Internship
              </div>

              <h1 className="h-title">
                Hi, I'm{" "}
                <span className="h-name">Kasun</span>
                <br />
                <span className="h-role">
                  Backend <span className="h-squiggle">Developer</span>
                </span>
              </h1>

              <p className="h-body">
                Third-year ICT undergraduate who loves building{" "}
                <strong>reliable APIs</strong>, scalable databases, and
                cloud-ready backend services. Turning complex problems
                into clean, maintainable solutions.
              </p>

              <div className="h-cta">
                <a href="#projects" className="btn-primary">
                  View My Work <FaArrowRight />
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>

              <div className="h-stats">
                {stats.map((s) => (
                  <div key={s.label} className="h-stat">
                    <span className="hs-emoji">{s.emoji}</span>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="hero-visual reveal">
              <div className="hero-card">
                <div className="hc-shine" />
                <img src={heroImage} alt="Kasun" className="hero-img" />
                <div className="hc-focus">
                  <p className="hcf-label">Focus Areas</p>
                  <div className="hcf-chips">
                    {["REST APIs", "Microservices", "Cloud & DevOps", "Security"].map((t) => (
                      <span key={t} className="hcf-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-minis">
                <div className="mini">
                  <span className="mini-label">Experience</span>
                  <span className="mini-val">3+ Years</span>
                  <span className="mini-sub">Academic + projects</span>
                </div>
                <div className="mini">
                  <span className="mini-label">Focus</span>
                  <span className="mini-val">Backend</span>
                  <span className="mini-sub">APIs, DBs & cloud</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section">
          <div className="container">
            <div className="about-layout">
              <div className="about-left reveal">
                <span className="eyebrow">About Me</span>
                <h2 className="sec-title">Building systems<br />that <em>just work</em></h2>
                <p className="sec-body">
                  I'm a passionate ICT undergrad who thrives on backend
                  engineering and clean system architecture. I enjoy working
                  with APIs, designing scalable databases, and ensuring
                  performance and security in every solution I build.
                </p>
                <div className="about-cards">
                  <div className="a-card">
                    <span className="ac-emoji">🎯</span>
                    <h4>Skills & Interests</h4>
                    <p>API design, auth flows, microservices, cloud deployment, DevOps automation.</p>
                  </div>
                  <div className="a-card">
                    <span className="ac-emoji">🌱</span>
                    <h4>Career Objective</h4>
                    <p>Join an ambitious team, contribute to production systems, and grow every day.</p>
                  </div>
                </div>
              </div>

              <div className="about-right reveal">
                <div className="brings-card">
                  <h3>💡 What I Bring</h3>
                  <ul className="brings-list">
                    <li>
                      <span className="bl-dot" style={{ background: "#0d9488" }} />
                      Backend-first mindset with clean, documented APIs.
                    </li>
                    <li>
                      <span className="bl-dot" style={{ background: "#f97316" }} />
                      Experience collaborating with UI teams and product owners.
                    </li>
                    <li>
                      <span className="bl-dot" style={{ background: "#8b5cf6" }} />
                      Passion for learning cloud-native and DevOps practices.
                    </li>
                  </ul>
                </div>
                <div className="facts-card">
                  <h3>📌 Quick Facts</h3>
                  <div className="facts-grid">
                    {[
                      ["Location", "Sri Lanka 🇱🇰"],
                      ["Availability", "Immediate ✅"],
                      ["Email", "kasun.dev@email.com"],
                      ["Focus", "Backend & APIs"],
                    ].map(([l, v]) => (
                      <div key={l} className="fact-row">
                        <span className="fact-label">{l}</span>
                        <span className="fact-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow">Skills</span>
              <h2 className="sec-title">Technical Toolkit</h2>
              <p className="sec-sub">Languages, frameworks, and tools I use to craft solid backend systems.</p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="skill-card reveal"
                    style={{ "--c": g.color, animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="sc-header">
                      <span className="sc-icon"><Icon /></span>
                      <h3>{g.title}</h3>
                    </div>
                    <ul className="sc-list">
                      {g.items.map((item) => (
                        <li key={item}>
                          <span className="sc-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="strengths reveal">
              <h3>⚡ Core Strengths</h3>
              <div className="strength-grid">
                {skillLevels.map((sk) => (
                  <div key={sk.name} className="strength-row">
                    <div className="sr-top">
                      <span>{sk.name}</span>
                      <span style={{ color: sk.color, fontWeight: 700 }}>{sk.level}%</span>
                    </div>
                    <div className="sr-track">
                      <div
                        className="sr-fill"
                        style={{ "--w": `${sk.level}%`, "--c": sk.color }}
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
            <div className="sec-head-row reveal">
              <div>
                <span className="eyebrow">Projects</span>
                <h2 className="sec-title">Selected Work</h2>
                <p className="sec-sub">Backend-focused builds that highlight my technical range.</p>
              </div>
              <a href="https://github.com/yourname" className="gh-link">
                <FaGithub /> View All <FaExternalLinkAlt className="xs" />
              </a>
            </div>

            <div className="proj-grid">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="proj-card reveal"
                  style={{ "--pc": p.color, animationDelay: `${i * 0.08}s` }}
                >
                  <div className="pc-top">
                    <span className="pc-emoji">{p.emoji}</span>
                    <span className="pc-tag">{p.tag}</span>
                  </div>
                  <h3 className="pc-title">{p.title}</h3>
                  <p className="pc-desc">{p.description}</p>
                  <div className="pc-techs">
                    {p.tech.map((t) => (
                      <span key={t} className="pc-tech">{t}</span>
                    ))}
                  </div>
                  <div className="pc-footer">
                    <a href={p.github} className="pf-link"><FaGithub /> Code</a>
                    <a href={p.demo} className="pf-link pf-demo"><FaExternalLinkAlt /> Demo</a>
                  </div>
                  <div className="pc-accent-bar" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow">Experience</span>
              <h2 className="sec-title">Certifications & Process</h2>
              <p className="sec-sub">Credentials that reflect continuous learning and a clear way of working.</p>
            </div>

            <div className="cert-grid">
              {certifications.map((c, i) => (
                <div
                  key={c.title}
                  className="cert-card reveal"
                  style={{ "--cc": c.color, animationDelay: `${i * 0.1}s` }}
                >
                  <span className="cc-emoji">{c.emoji}</span>
                  <div className="cc-badge"><FaCertificate /> Certified</div>
                  <h3>{c.title}</h3>
                  <p className="cc-sub">{c.subtitle}</p>
                  <p className="cc-body">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="process-box reveal">
              <h3 className="pb-title">🗺️ How I Work</h3>
              <div className="pb-grid">
                {processSteps.map((s, i) => (
                  <div key={s.title} className="pb-step" style={{ "--psc": s.color }}>
                    <div className="pbs-num">{String(i + 1).padStart(2, "0")}</div>
                    <h4 className="pbs-h">{s.emoji} {s.title}</h4>
                    <p className="pbs-p">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-left reveal">
                <span className="eyebrow">Contact</span>
                <h2 className="sec-title">Let's build something<br /><em>amazing</em> 🚀</h2>
                <p className="sec-sub">
                  Have an internship opportunity or backend challenge?
                  My inbox is always open.
                </p>

                <div className="contact-items">
                  {[
                    { Icon: FaEnvelope, label: "Email", val: "kasun.dev@email.com", href: "mailto:kasun.dev@email.com", c: "#f97316" },
                    { Icon: FaPhoneAlt, label: "Phone", val: "+94 77 123 4567", href: "tel:+94771234567", c: "#0d9488" },
                    { Icon: FaLinkedin, label: "LinkedIn", val: "kasun-udayanga", href: "https://linkedin.com", c: "#0077b5" },
                    { Icon: FaGithub, label: "GitHub", val: "github.com/yourname", href: "https://github.com", c: "#6b7280" },
                  ].map(({ Icon, label, val, href, c }) => (
                    <a key={label} href={href} className="ci-item">
                      <span className="ci-icon" style={{ background: c + "15", color: c }}><Icon /></span>
                      <div>
                        <span className="ci-label">{label}</span>
                        <span className="ci-val">{val}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-right reveal">
                <form className="c-form">
                  <h3>✉️ Drop a Message</h3>
                  <div className="cf-2col">
                    <div className="cf-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="cf-group">
                      <label>Email</label>
                      <input type="email" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="cf-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Internship / Project Idea" />
                  </div>
                  <div className="cf-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell me more..." />
                  </div>
                  <button type="submit" className="cf-btn">
                    Send Message <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="cta-wrap">
          <div className="container">
            <div className="cta-box reveal">
              <div className="cta-blob" />
              <span className="eyebrow" style={{ color: "#0d9488" }}>Let's Work Together</span>
              <h2 className="cta-title">Ready to bring your<br />backend ideas to life?</h2>
              <p className="cta-body">
                Actively seeking internship opportunities to contribute,
                learn, and grow alongside an ambitious team.
              </p>
              <div className="cta-actions">
                <a href="#contact" className="btn-primary">Schedule a Call <FaArrowRight /></a>
                <a href="#projects" className="btn-secondary">View Projects</a>
              </div>
              <div className="cta-chips">
                <span><FaUserCheck /> Fast response</span>
                <span><FaChartLine /> Results-driven</span>
                <span><FaCloud /> Cloud-ready</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 Kasun Udayanga · Made with ❤️ in Sri Lanka</p>
          <div className="footer-socials">
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="mailto:kasun.dev@email.com"><FaEnvelope /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}