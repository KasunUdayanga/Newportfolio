import { useEffect, useState } from "react";
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
import heroImage from "./assets/a17cf244-2b80-4c92-8855-bba82662a8ae.jpg";
import "./App.css";

const projects = [
  {
    title: "TechHaven",
    tag: "Full Stack",
    emoji: "🛍️",
    description:
      "MERN e-commerce platform with dynamic product catalog, secure authentication, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/kasunudayanga/techhaven",
    demo: "https://techhaven.example.com",
    color: "#f59e0b",
  },
  {
    title: "StudyChat",
    tag: "Real-time",
    emoji: "💬",
    description:
      "Mobile-first chat platform for students with topic-based rooms and real-time messaging.",
    tech: ["React Native", "Expo", "Appwrite"],
    github: "https://github.com/kasunudayanga/studychat",
    demo: "https://studychat.example.com",
    color: "#2563eb",
  },
];

const certifications = [
  {
    title: "Meta Front-End & Back-End",
    subtitle: "Developer Specializations",
    body: "Comprehensive front-end and back-end specialization covering modern web stacks.",
    color: "#2563eb",
  },
  {
    title: "IBM Full Stack Software Developer",
    subtitle: "Professional Certificate",
    body: "Full-stack development, DevOps practices, and cloud-ready application delivery.",
    color: "#f59e0b",
  },
  {
    title: "University of Moratuwa",
    subtitle: "Front-End & Server-side Web",
    body: "Front-end web development and server-side programming foundations.",
    color: "#7c3aed",
  },
  {
    title: "Developing AI Apps with Python",
    subtitle: "Flask & APIs",
    body: "Built AI-powered web services with Python, Flask, and RESTful APIs.",
    color: "#db2777",
  },
  {
    title: "Deploying MERN on Azure",
    subtitle: "CICD Pipelines",
    body: "End-to-end deployment of MERN apps with Azure CI/CD automation.",
    color: "#0ea5e9",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: FaCode,
    items: [
      "JavaScript",
      "Python",
      "PHP",
      "Java",
      "C#",
      "C++",
      "C",
      "SQL",
      "HTML",
      "CSS",
    ],
    color: "#f59e0b",
  },
  {
    title: "Frameworks & Tools",
    icon: FaServer,
    items: [
      "React",
      "Node.js",
      "Express",
      "Django",
      "Spring Boot",
      "React Native",
      "Docker",
    ],
    color: "#2563eb",
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MongoDB", "SQL", "Firebase", "Appwrite", "AWS", "Azure"],
    color: "#7c3aed",
  },
];

const skillLevels = [
  { name: "Full-Stack Web Development", level: 88, color: "#2563eb" },
  { name: "REST API Design", level: 82, color: "#f59e0b" },
  { name: "Database Engineering", level: 78, color: "#7c3aed" },
  { name: "Cloud & DevOps", level: 60, color: "#db2777" },
];

const stats = [
  { label: "Projects", value: "25+", emoji: "🚀" },
  { label: "Certifications", value: "20+", emoji: "🏅" },
  { label: "Tech stack", value: "10+", emoji: "⚛️" },
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
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  useScrollReveal();

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const mailSubject = subject || "Portfolio inquiry";
    const bodyLines = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message || "",
    ].filter(Boolean);

    const mailto = `mailto:udayangakasun696@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  };

  return (
    <div className="root">
      {/* ─── HEADER ─── */}
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="logo">
            <span className="logo-name">
              KIU<span className="logo-dot">.</span>
            </span>
          </a>

          <nav className="desktop-nav">
            {["about", "skills", "projects", "experience", "contact"].map(
              (n) => (
                <a key={n} href={`#${n}`} className="nav-link">
                  {n.charAt(0).toUpperCase() + n.slice(1)}
                </a>
              )
            )}
          </nav>

          <div className="header-end">
            <button
              className="theme-toggle"
              onClick={() => setDark((p) => !p)}
              aria-label="Toggle theme"
            >
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
                Available
              </div>

              <h1 className="h-title">
                Hi, I'm <span className="h-name">Kasun</span>
                <br />
                <span className="h-role">
                  Software <span className="h-squiggle">Developer</span>
                </span>
              </h1>

              <p className="h-body">
                BICT (Hons) undergraduate focused on building modern
                <strong> full-stack web applications</strong> with reliable
                APIs, responsive interfaces, and scalable databases. I enjoy
                turning complex problems into fast, maintainable products.
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
              <div className="hero-card hero-card-profile">
                <div className="hc-shine" />
                <img
                  src={heroImage}
                  alt="Kasun Udayanga"
                  className="hero-img hero-img-profile"
                />
                <div className="hero-caption">
                  <h3>Kasun Udayanga</h3>
                  <p>BICT (Hons)Graduate • Software Developer</p>
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
                  <span className="mini-val">Full-Stack</span>
                  <span className="mini-sub">Web, APIs & cloud</span>
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
                <h2 className="sec-title">
                  Building systems
                  <br />
                  that <em>just work</em>
                </h2>
                <p className="sec-body">
                  I’m a motivated BICT (Hons) undergraduate at the University of
                  Jaffna with a GPA of 3.15/4.0. My focus is full-stack
                  development, cloud computing, and building high-quality
                  RESTful APIs with responsive user interfaces. I also have
                  internship experience as a Full-Stack Developer at Infinity
                  AI.
                </p>
                <div className="about-cards">
                  <div className="a-card">
                    <h4>Skills & Interests</h4>
                    <p>
                      API design, auth flows, microservices, cloud deployment,
                      DevOps automation.
                    </p>
                  </div>
                  <div className="a-card">
                    <h4>Career Objective</h4>
                    <p>
                      Join an ambitious team, contribute to production systems,
                      and grow every day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-right reveal">
                <div className="brings-card">
                  <h3> What I Bring</h3>
                  <ul className="brings-list">
                    <li>
                      <span
                        className="bl-dot"
                        style={{ background: "#0d9488" }}
                      />
                      Fullstack -first mindset with clean, documented APIs.
                    </li>
                    <li>
                      <span
                        className="bl-dot"
                        style={{ background: "#f97316" }}
                      />
                      Experience collaborating with UI teams and product owners.
                    </li>
                    <li>
                      <span
                        className="bl-dot"
                        style={{ background: "#8b5cf6" }}
                      />
                      Passion for learning cloud-native and DevOps practices.
                    </li>
                  </ul>
                </div>
                <div className="facts-card">
                  <h3> Quick Facts</h3>
                  <div className="facts-grid">
                    {[
                      ["Location", "Karandeniya  🇱🇰"],
                      ["Focus", "Full-stack "],
                      ["Education", "BICT (Hons) "],
                      ["GPA", "3.15 / 4.0"],
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
              <p className="sec-sub">
                Languages, frameworks, and tools I use to craft full-stack web
                products.
              </p>
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
                      <span className="sc-icon">
                        <Icon />
                      </span>
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
                      <span style={{ color: sk.color, fontWeight: 700 }}>
                        {sk.level}%
                      </span>
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
                <p className="sec-sub">
                  Full-stack builds that highlight my technical range.
                </p>
              </div>
              <a
                href="https://github.com/KasunUdayanga?tab=repositories"
                className="gh-link"
              >
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
                      <span key={t} className="pc-tech">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pc-footer">
                    <a href={p.github} className="pf-link">
                      <FaGithub /> Code
                    </a>
                    <a href={p.demo} className="pf-link pf-demo">
                      <FaExternalLinkAlt /> Demo
                    </a>
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
              <h2 className="sec-title">Certifications</h2>
              <p className="sec-sub">
                Internship experience and certifications that reflect continuous
                learning.
              </p>
              <br />
              <a
                href="https://www.credly.com/users/kasun-udayanga.822e289c"
                className="gh-link"
                target="_blank"
                rel="noreferrer"
              >
                View Credly Profile <FaExternalLinkAlt className="xs" />
              </a>
            </div>

            <div className="cert-grid">
              <div className="cert-card reveal" style={{ "--cc": "#2563eb" }}>
                <div className="cc-badge">
                  <FaCertificate /> Internship
                </div>
                <h3>Full-Stack Developer Intern</h3>
                <p className="cc-sub">
                  Infinity AI Pvt Ltd • Apr 2025 – Oct 2025
                </p>
                <p className="cc-body">
                  Contributed to InfinityOS SaaS, built RESTful APIs with
                  Node.js and Express, integrated MongoDB/Mongoose, and
                  delivered React UI features in an agile team.
                </p>
              </div>
            </div>

            <div className="cert-grid">
              {certifications.map((c, i) => (
                <div
                  key={c.title}
                  className="cert-card reveal"
                  style={{ "--cc": c.color, animationDelay: `${i * 0.1}s` }}
                >
                  <span className="cc-emoji">{c.emoji}</span>
                  <div className="cc-badge">
                    <FaCertificate /> Certified
                  </div>
                  <h3>{c.title}</h3>
                  <p className="cc-sub">{c.subtitle}</p>
                  <p className="cc-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-left reveal">
                <span className="eyebrow">Contact</span>
                <h2 className="sec-title">
                  Let's build something
                  <br />
                  <em>amazing</em>
                </h2>
                <p className="sec-sub">
                  Have a job opportunity or full-stack challenge? My inbox is
                  always open.
                </p>

                <div className="contact-items">
                  {[
                    {
                      Icon: FaEnvelope,
                      label: "Email",
                      val: "udayangakasun696@gmail.com",
                      href: "mailto:udayangakasun696@gmail.com",
                      c: "#f97316",
                    },
                    {
                      Icon: FaPhoneAlt,
                      label: "Phone",
                      val: "+94 76 585 5386",
                      href: "tel:+94765855386",
                      c: "#0d9488",
                    },
                    {
                      Icon: FaLinkedin,
                      label: "LinkedIn",
                      val: "kasun Imasha Udayanga",
                      href: "https://www.linkedin.com/in/kasunimashaudayanga/",
                      c: "#0077b5",
                    },
                    {
                      Icon: FaGithub,
                      label: "GitHub",
                      val: "Kasun Udayanga",
                      href: "https://github.com/KasunUdayanga",
                      c: "#6b7280",
                    },
                  ].map(({ label, val, href, c }) => (
                    <a key={label} href={href} className="ci-item">
                      <span
                        className="ci-icon"
                        style={{ background: c + "15", color: c }}
                      >
                        {label === "Email" && <FaEnvelope />}
                        {label === "Phone" && <FaPhoneAlt />}
                        {label === "LinkedIn" && <FaLinkedin />}
                        {label === "GitHub" && <FaGithub />}
                      </span>
                      <div>
                        <span className="ci-label">{label}</span>
                        <span className="ci-val">{val}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-right reveal">
                <form className="c-form" onSubmit={handleContactSubmit}>
                  <h3>✉️ Drop a Message</h3>
                  <div className="cf-2col">
                    <div className="cf-group">
                      <label>Full Name</label>
                      <input type="text" name="name" placeholder="Your name" />
                    </div>
                    <div className="cf-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="cf-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Job or Project Idea"
                    />
                  </div>
                  <div className="cf-group">
                    <label>Message</label>
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Tell me about..."
                    />
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
              <span className="eyebrow" style={{ color: "#0d9488" }}>
                Let's Work Together
              </span>
              <h2 className="cta-title">
                Ready to bring your
                <br />
                mind ideas to life?
              </h2>
              <p className="cta-body">
                Actively seeking Job opportunities to contribute, learn, and
                grow alongside an ambitious team.
              </p>
              <div className="cta-actions">
                <a href="#contact" className="btn-primary">
                  Schedule a Call <FaArrowRight />
                </a>
                <a href="#projects" className="btn-secondary">
                  View Projects
                </a>
              </div>
              <div className="cta-chips">
                <span>
                  <FaUserCheck /> Open to roles
                </span>
                <span>
                  <FaChartLine /> Full-stack focus
                </span>
                <span>
                  <FaCloud /> Remote-friendly
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 Kasun Udayanga </p>
          <div className="footer-socials">
            <a href="https://github.com/KasunUdayanga">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kasunimashaudayanga/">
              <FaLinkedin />
            </a>
            <a href="mailto:udayangakasun696@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
