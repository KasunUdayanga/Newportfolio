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
import heroImage from "./assets/hero.png";
import "./App.css";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "Responsive streaming UI with authentication flows, trailer previews, and curated categories.",
    tech: ["React", "Node.js", "TMDB API"],
    github: "https://github.com/yourname/netflix-clone",
    demo: "https://netflix-clone.example.com",
  },
  {
    title: "Live Chat App",
    description:
      "Real-time messaging with typing indicators, file sharing, and online presence tracking.",
    tech: ["React", "Express", "Socket.IO"],
    github: "https://github.com/yourname/live-chat-app",
    demo: "https://live-chat.example.com",
  },
  {
    title: "Inventory Management System",
    description:
      "Role-based inventory management with analytics dashboard and automated stock alerts.",
    tech: ["Spring Boot", "MySQL", "Docker"],
    github: "https://github.com/yourname/inventory-system",
    demo: "https://inventory.example.com",
  },
  {
    title: "Smart Attendance Tracker",
    description:
      "Backend-driven attendance tracker with QR validation and export-ready reports.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/yourname/attendance-tracker",
    demo: "https://attendance.example.com",
  },
];

const certifications = [
  {
    title: "IBM Backend Development Professional Certificate",
    description:
      "Built production-ready APIs, automated tests, and containerized services with Docker.",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    description:
      "Validated fundamentals in cloud architecture, IAM, and AWS pricing models.",
  },
  {
    title: "Google Cloud Foundations",
    description:
      "Learned core Google Cloud services, networking, and deployment strategies.",
  },
];

const skillGroups = [
  {
    title: "Technical Skills",
    icon: FaCode,
    items: ["JavaScript", "Python", "Java", "PHP"],
  },
  {
    title: "Frameworks & Tools",
    icon: FaServer,
    items: ["React", "Node.js", "Express", "Spring Boot", "Docker"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MySQL", "MongoDB"],
  },
];

const skillLevels = [
  { name: "Backend API Design", level: 85 },
  { name: "Database Modeling", level: 80 },
  { name: "Containerization", level: 70 },
  { name: "Cloud Fundamentals", level: 65 },
];

const highlights = [
  {
    title: "API-First Engineering",
    description:
      "Designing scalable, well-documented APIs with security and performance in mind.",
    icon: FaServer,
  },
  {
    title: "Quality & Reliability",
    description:
      "Testing, monitoring, and clean architecture to keep services stable and maintainable.",
    icon: FaShieldAlt,
  },
  {
    title: "Cloud-Ready Delivery",
    description:
      "Containerized deployments and CI-ready workflows for modern teams.",
    icon: FaCloud,
  },
];

const stats = [
  { label: "Projects Delivered", value: "12+" },
  { label: "Certifications", value: "3" },
  { label: "Tech Stack", value: "10+" },
];

const processSteps = [
  {
    title: "Discover",
    description: "Clarify requirements, constraints, and success metrics.",
  },
  {
    title: "Design",
    description: "Model the data, API contracts, and system architecture.",
  },
  {
    title: "Build",
    description: "Implement, test, and document reliable backend services.",
  },
  {
    title: "Improve",
    description: "Monitor, iterate, and optimize performance over time.",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="page-bg min-h-screen text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
        <nav className="content-shell flex items-center justify-between py-4">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-soft dark:bg-white dark:text-slate-900">
              <HiOutlineSparkles className="text-lg" />
            </span>
            Kasun Udayanga
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Let’s Connect
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:pt-24"
        >
          <div className="hero-glow" />
          <div className="content-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="section-kicker inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-soft dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                Available for Internship
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Kasun Udayanga
                <br />
                <span className="gradient-text">
                  ICT Undergraduate | Backend Developer
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                Third-year ICT undergraduate focused on designing reliable
                backend systems, clean APIs, and scalable data services. I love
                turning complex requirements into secure, production-ready
                solutions for real-world users.
              </p>
              <div className="btn-group justify-center lg:justify-start">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <FaArrowRight />
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </div>
              <div className="mt-6 grid justify-items-center gap-3 sm:grid-cols-3 sm:justify-items-start">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-xs font-semibold uppercase text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="card relative overflow-hidden p-6">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 blur-3xl dark:bg-blue-500/20" />
                <img
                  src={heroImage}
                  alt="Backend developer illustration"
                  className="relative mx-auto h-52 w-auto object-contain"
                />
                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
                    <span className="chip">REST APIs</span>
                    <span className="chip">Microservices</span>
                    <span className="chip">Cloud & DevOps</span>
                    <span className="chip">Security</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Experience
                  </p>
                  <h4 className="mt-2 text-2xl font-semibold">3+ Years</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Academic + project work
                  </p>
                </div>
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Focus
                  </p>
                  <h4 className="mt-2 text-2xl font-semibold">
                    Backend Systems
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    APIs, DBs & integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="content-shell">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="section-kicker">About</p>
                <h2 className="section-title mt-2">About Me</h2>
                <p className="section-subtitle mt-4">
                  I am a third-year ICT undergraduate who thrives on backend
                  engineering and clean system architecture. I enjoy working
                  with APIs, designing scalable databases, and ensuring
                  performance and security in every solution I build.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="card p-5">
                    <h3 className="text-sm font-semibold uppercase text-slate-400">
                      Skills & Interests
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      API design, authentication, microservices, cloud
                      deployment, DevOps automation.
                    </p>
                  </div>
                  <div className="card p-5">
                    <h3 className="text-sm font-semibold uppercase text-slate-400">
                      Career Objective
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Join a product team to deliver reliable backend platforms
                      and gain real-world internship experience in scalable
                      systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-lg font-semibold">What I Bring</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                      Backend-first mindset with clean, documented APIs.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                      Experience collaborating with UI teams and product owners.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                      Passion for learning cloud-native and DevOps practices.
                    </li>
                  </ul>
                </div>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold">Quick Facts</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Location</p>
                      <p className="font-semibold">Sri Lanka</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Availability</p>
                      <p className="font-semibold">Immediate</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Email</p>
                      <p className="font-semibold">kasun.dev@email.com</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Focus</p>
                      <p className="font-semibold">Backend & APIs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="content-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-kicker">Why Me</p>
                <h2 className="section-title mt-2">
                  Backend Capabilities That Drive Results
                </h2>
                <p className="section-subtitle mt-4">
                  I blend technical depth with product awareness to build
                  secure, scalable backend services.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  API Design
                </span>
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  Data Modeling
                </span>
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  Reliability
                </span>
              </div>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card card-hover p-6">
                    <div className="flex items-center gap-3">
                      <span className="icon-badge">
                        <Icon />
                      </span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section-block bg-slate-100/70 dark:bg-slate-900/60"
        >
          <div className="content-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-kicker">Skills</p>
                <h2 className="section-title mt-2">Technical Expertise</h2>
                <p className="section-subtitle mt-4">
                  A balanced mix of backend engineering, tooling, and data
                  management skills.
                </p>
              </div>
              <div className="flex gap-2 text-xs font-semibold text-slate-500">
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  APIs
                </span>
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  Cloud
                </span>
                <span className="chip bg-white/80 shadow-soft dark:bg-slate-950">
                  DevOps
                </span>
              </div>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="card card-hover p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft dark:bg-white dark:text-slate-900">
                        <Icon />
                      </span>
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="card mt-10 grid gap-4 p-6">
              <h3 className="text-lg font-semibold">Core Strengths</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillLevels.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="font-semibold text-slate-500 dark:text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-slate-900 transition-all duration-500 dark:bg-white"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="content-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-kicker">Projects</p>
                <h2 className="section-title mt-2">Selected Work</h2>
                <p className="section-subtitle mt-4">
                  A selection of backend-focused projects that highlight my
                  technical range.
                </p>
              </div>
              <a
                href="https://github.com/yourname"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300"
              >
                View GitHub
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="card card-hover p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip dark:bg-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-300"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-300"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section-block bg-slate-100/70 dark:bg-slate-900/60"
        >
          <div className="content-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-kicker">Experience</p>
                <h2 className="section-title mt-2">
                  Experience & Certifications
                </h2>
                <p className="section-subtitle mt-4">
                  Certifications and academic projects that reflect continuous
                  learning.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-soft dark:bg-slate-950">
                <FaCertificate /> 3 Certifications
              </span>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="card card-hover p-6">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="card p-5">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase text-slate-400">
                    <span>Step {index + 1}</span>
                    <FaChartLine />
                  </div>
                  <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block">
          <div className="content-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="section-title mt-2">Let’s Connect</h2>
                <p className="section-subtitle mt-4">
                  Have an internship opportunity or a backend challenge? Let’s
                  build something impactful.
                </p>
                <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div className="info-card">
                    <FaEnvelope />
                    <div>
                      <p className="text-xs uppercase text-slate-400">Email</p>
                      <p className="font-semibold">kasun.dev@email.com</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaPhoneAlt />
                    <div>
                      <p className="text-xs uppercase text-slate-400">Phone</p>
                      <p className="font-semibold">+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaLinkedin />
                    <div>
                      <p className="text-xs uppercase text-slate-400">
                        LinkedIn
                      </p>
                      <p className="font-semibold">kasun-udayanga</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaGithub />
                    <div>
                      <p className="text-xs uppercase text-slate-400">GitHub</p>
                      <p className="font-semibold">github.com/yourname</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group mt-6 text-sm font-semibold">
                  <a href="https://linkedin.com" className="btn-secondary">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://github.com" className="btn-secondary">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
              <form className="card p-6">
                <h3 className="text-lg font-semibold">Send a Message</h3>
                <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <label className="text-slate-500">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <div>
                    <label className="text-slate-500">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Tell me about the opportunity"
                      className="input-field"
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="content-shell">
            <div className="cta-band">
              <div>
                <p className="section-kicker">Let’s Work Together</p>
                <h2 className="section-title mt-2">
                  Ready to bring your backend ideas to life?
                </h2>
                <p className="section-subtitle mt-4">
                  I’m actively looking for internship opportunities where I can
                  contribute and grow alongside an ambitious engineering team.
                </p>
              </div>
              <div className="btn-group">
                <a href="#contact" className="btn-primary">
                  Schedule a Call
                  <FaArrowRight />
                </a>
                <a href="#projects" className="btn-secondary">
                  View Case Studies
                </a>
              </div>
              <div className="cta-list">
                <div>
                  <FaUserCheck />
                  <span>Fast response time</span>
                </div>
                <div>
                  <FaChartLine />
                  <span>Data-driven decisions</span>
                </div>
                <div>
                  <FaCloud />
                  <span>Cloud-ready delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-8 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="content-shell flex flex-wrap items-center justify-between gap-4">
          <p>© 2026 Kasun Udayanga. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kasun.dev@email.com"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
