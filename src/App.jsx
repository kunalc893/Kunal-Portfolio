import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, ExternalLink, Github, GraduationCap, Mail, MapPin, Menu,
  X, Linkedin,
} from 'lucide-react'

const links = {
  github: 'https://github.com/kunalc893',
  linkedin: 'https://www.linkedin.com/in/kunalc893',
  email: 'mailto:kunalc893@gmail.com',
}

const skills = ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Git', 'GitHub']

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [certificateOpen, setCertificateOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Kunal Choudhary home">
          <span className="brand-mark">K</span>
          <span>KUNAL<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-wrap">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO JOBS & INTERNSHIPS</div>
            <p className="hero-kicker">WEB DEVELOPER <span>·</span> INDORE, INDIA</p>
            <h1>Hi, I’m Kunal.<br /><em>I build for the web.</em></h1>
            <p className="hero-intro">I’m a Computer Science student who enjoys turning ideas into useful, responsive web experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-quiet" href={links.email}>Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="social-links" aria-label="Social links">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={links.email} aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="/images/kunal-choudhary.png" alt="Portrait of Kunal Choudhary" /></div>
            <div className="portrait-index">KC <span>2026 — 27</span></div>
            <div className="float-note"><Code2 size={18} /><span>Curious by nature<br /><b>building every day</b></span></div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-strip">
          <div className="page-wrap intro-grid">
            <p className="intro-statement">Learning the craft.<br /><span>Building real things.</span></p>
            <div className="intro-detail"><span className="mono">01 / ABOUT</span><p>B.Tech Computer Science student at Medi-Caps University, interested in building practical, responsive web applications.</p></div>
            <div className="intro-detail"><span className="mono">02 / BASED IN</span><p><MapPin size={15} /> Indore, Madhya Pradesh</p></div>
          </div>
        </section>

        <section className="section page-wrap about-section" id="about">
          <SectionLabel number="01">A little about me</SectionLabel>
          <div className="about-grid">
            <h2>Thoughtful code.<br /><span>Practical outcomes.</span></h2>
            <div className="about-copy">
              <p>I’m a B.Tech Computer Science student at Medi-Caps University and an aspiring web developer interested in building practical, responsive web applications.</p>
              <p>From a full-stack AI recruitment platform to a live website for a local construction business, I’m learning by working on projects that solve real problems.</p>
              <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="skills-wrap">
            <span className="mono">CURRENT TOOLKIT</span>
            <div className="skill-list">{skills.map((skill) => <span className="skill-chip" key={skill}><Check size={13} />{skill}</span>)}</div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="page-wrap">
            <SectionLabel number="02">Selected work</SectionLabel>
            <div className="section-heading-row"><h2>Projects with<br /><span>a purpose.</span></h2><p>A couple of projects where I took ideas from concept toward a working product.</p></div>

            <article className="project-card recruit-card">
              <div className="project-visual recruit-visual">
                <div className="recruit-top"><span>RECRUIT-IQ</span><span className="live-pill"><i /> LIVE PROJECT</span></div>
                <div className="recruit-dashboard">
                  <div className="dash-sidebar"><b>R<span>IQ</span></b><i /><i /><i /><i /></div>
                  <div className="dash-main"><div className="dash-greeting">Recruiter dashboard <span>↗</span></div><div className="dash-title">Find your next<br /><strong>great candidate.</strong></div><div className="dash-cards"><span /><span /><span /></div><div className="dash-table"><i /><i /><i /></div></div>
                </div>
                <span className="visual-caption">AI-POWERED RECRUITMENT PLATFORM</span>
              </div>
              <div className="project-info">
                <div className="project-meta"><span>01 / FULL-STACK WEB APP</span><span>2026</span></div>
                <h3>Recruit-IQ</h3>
                <p>An AI-powered recruitment platform with Candidate, Recruiter and Admin workflows. Includes AI interview-question generation, candidate evaluation, job matching and resume parsing.</p>
                <div className="project-tags">{['Spring Boot', 'React.js', 'MySQL', 'Groq API · LLaMA 3', 'JWT', 'Redux Toolkit', 'Tailwind CSS'].map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href="https://recruit-ai-silk-mu.vercel.app/" target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a><a href="https://github.com/kunalc893/Recruit-Ai" target="_blank" rel="noreferrer"><Github size={15} /> Source code <ArrowUpRight size={16} /></a></div>
              </div>
            </article>

            <article className="project-card tawar-card">
              <a className="tawar-visual" href="https://tawarconstruction.com/" target="_blank" rel="noreferrer" aria-label="Visit Tawar Construction website">
                <img src="/images/tawar-project.png" alt="Residential construction project showcased by Tawar Construction" />
                <span className="tawar-overlay"><span>TAWAR<br />CONSTRUCTION</span><ArrowUpRight size={26} /></span>
                <span className="visual-caption">CLIENT WEBSITE · INDORE, INDIA</span>
              </a>
              <div className="project-info">
                <div className="project-meta"><span>02 / CLIENT PROJECT</span><span>2026</span></div>
                <h3>Tawar Construction</h3>
                <p>Designed and developed a responsive business website to showcase construction services and project work. Added a WhatsApp enquiry flow and handled the domain and Hostinger hosting setup.</p>
                <div className="project-tags">{['React', 'Vite', 'Tailwind CSS', 'WhatsApp integration', 'Hostinger'].map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href="https://tawarconstruction.com/" target="_blank" rel="noreferrer">Visit live website <ArrowUpRight size={16} /></a></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section page-wrap experience-section" id="experience">
          <SectionLabel number="03">Experience</SectionLabel>
          <div className="experience-grid">
            <div><p className="mono">LEARNING IN THE REAL WORLD</p><h2>First steps,<br /><span>strong foundations.</span></h2></div>
            <article className="experience-card">
              <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
              <div className="experience-content"><div className="project-meta"><span>SEP — OCT 2026</span><span>1 MONTH</span></div><h3>Web Developer Intern</h3><p className="company-name">Codec Technologies Pvt. Ltd.</p><p>Completed the one-month industrial training and internship program in web development.</p><button className="text-link certificate-trigger" onClick={() => setCertificateOpen(true)}>View internship certificate <ExternalLink size={15} /></button></div>
            </article>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="page-wrap">
            <SectionLabel number="04">Education</SectionLabel>
            <div className="education-grid">
              <div><h2>Learning, one<br /><span>chapter at a time.</span></h2><p className="education-intro">A foundation in computer science, with room to keep growing.</p></div>
              <div className="education-list">
                <article className="education-item primary-education"><div className="education-symbol"><GraduationCap size={20} /></div><div><span className="mono">2023 — 2027</span><h3>Bachelor of Technology</h3><p>Computer Science Engineering</p><strong>Medi-Caps University, Indore</strong></div><span className="score">7.12 <small>/ 10 CGPA</small></span></article>
                <article className="education-item"><div className="education-symbol"><span>12</span></div><div><span className="mono">CLASS XII</span><h3>San Marino Public School</h3></div><span className="score">69<small>%</small></span></article>
                <article className="education-item"><div className="education-symbol"><span>10</span></div><div><span className="mono">CLASS X</span><h3>Podar International School</h3></div><span className="score">75<small>%</small></span></article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-inner">
            <SectionLabel number="05">Get in touch</SectionLabel>
            <div className="contact-grid"><h2>Let’s build<br /><em>what’s next.</em></h2><div className="contact-copy"><p>I’m looking for a web development job or internship where I can contribute, learn and keep growing.</p><a className="button button-primary" href={links.email}>Email me <ArrowUpRight size={17} /></a><div className="contact-socials"><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a><a href={links.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a></div></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap"><a className="brand" href="#top"><span className="brand-mark">K</span><span>KUNAL<span className="brand-dot">.</span></span></a><span>© 2026 Kunal Choudhary · Indore, India</span><a className="back-top" href="#top">Back to top ↑</a></footer>

      {certificateOpen && <div className="modal-backdrop" role="presentation" onClick={() => setCertificateOpen(false)}><div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Internship certificate" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close certificate" onClick={() => setCertificateOpen(false)}><X size={20} /></button><img src="/images/codec-internship-certificate.png" alt="Codec Technologies Web Developer Intern certificate awarded to Kunal Choudhary" /></div></div>}
    </>
  )
}

export default App
