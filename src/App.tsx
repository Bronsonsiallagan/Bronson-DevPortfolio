import { useState, useEffect } from 'react'
import './App.css'

interface ProjectItem {
  id: string
  title: string
  category: 'fullstack' | 'sdet' | 'enterprise' | 'ml'
  role: string
  context: string
  date: string
  image?: string
  images?: string[]
  customBadge?: string
  isSdet?: boolean
  description: string[]
  techStack: string[]
  figmaUrl?: string
  githubUrl?: string
  liveUrl?: string
  paperUrl?: string
  posterUrl?: string
  videoUrl?: string
  supervisor?: string
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState<'all' | 'fullstack' | 'sdet' | 'enterprise' | 'ml'>('all')
  const [projectImageIndexes, setProjectImageIndexes] = useState<Record<string, number>>({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const [selectedCert, setSelectedCert] = useState<'ds' | 'toefl' | null>(null)
  const [dsPage, setDsPage] = useState<1 | 2>(1)
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dataMiningImages = [
    `${import.meta.env.BASE_URL}dami.png`,
    `${import.meta.env.BASE_URL}Poster_01.png`
  ]

  const cvPdfUrl = `${import.meta.env.BASE_URL}CV-Bronson_TM_Siallagan.pdf`
  const certDsFrontUrl = `${import.meta.env.BASE_URL}12S22025_Associate%20Data%20Scientist.jpeg`
  const certDsBackUrl = `${import.meta.env.BASE_URL}WhatsApp%20Image%202026-05-18%20at%2013.35.48.jpeg`
  const certToeflUrl = `${import.meta.env.BASE_URL}TOELF%20Bronson%20Siallagan.jpeg`

  const waPreFilledUrl = `https://wa.me/6281373026305?text=${encodeURIComponent(
    'Hello Bronson, I reviewed your portfolio and would like to discuss an engineering internship opportunity'
  )}`

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    navigator.clipboard.writeText('bronsonsiallagan18@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2500)
  }

  const handlePrevImage = (projectId: string, total: number) => {
    setProjectImageIndexes(prev => {
      const current = prev[projectId] || 0
      return { ...prev, [projectId]: current === 0 ? total - 1 : current - 1 }
    })
  }

  const handleNextImage = (projectId: string, total: number) => {
    setProjectImageIndexes(prev => {
      const current = prev[projectId] || 0
      return { ...prev, [projectId]: current === total - 1 ? 0 : current + 1 }
    })
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Projects data matching CV + Data Science + Undergraduate Thesis
  const projects: ProjectItem[] = [
    {
      id: 'thesis-ulos-sdxl',
      title: 'Multimodal Conditioning of Fine-Tuned Stable Diffusion XL for Controllable and Culturally Faithful Ulos Motif Generation',
      category: 'ml',
      role: 'Lead Deep Learning & Generative AI Researcher',
      context: 'Undergraduate Thesis | Del Institute of Technology',
      date: '2025 – 2026',
      image: `${import.meta.env.BASE_URL}TA_Poster.jpeg`,
      customBadge: '🎓 Undergraduate Thesis (SDXL & LLaVA)',
      description: [
        'Undergraduate Final Thesis supervised by Humasak Tommy Argo Simanjuntak, ST, M.ISD at Del Institute of Technology.',
        'Fine-tuned Stable Diffusion XL (SDXL v1.0) coupled with Multimodal LLaVA conditioning for culturally faithful, controllable generation of traditional Batak Ulos motifs.',
        'Curated an authentic primary image dataset directly collected from traditional Ulos weavers across North Sumatra to preserve sacred cultural fidelity, symbolic palettes, and traditional weave geometry.',
        'Integrated vision-language feature extraction and multimodal prompt engineering to translate weaver domain semantics into high-resolution textile patterns.'
      ],
      techStack: [
        'Python',
        'Stable Diffusion XL (SDXL 1.0)',
        'Multimodal LLaVA',
        'PyTorch',
        'LoRA Fine-Tuning',
        'Hugging Face Diffusers',
        'Computer Vision',
        'Generative AI'
      ],
      githubUrl: 'https://github.com/Bronsonsiallagan/generative-ulos-design-SDXL-V1.0-and-Multimodal-LLaVA',
      paperUrl: `${import.meta.env.BASE_URL}Paper_Ulos_SDXL.pdf`,
      posterUrl: `${import.meta.env.BASE_URL}TA_Poster.jpeg`,
      videoUrl: 'https://youtu.be/ldWnkUik1Ic?si=eMn_Py7Hwvbc5m0o',
      supervisor: 'Humasak Tommy Argo Simanjuntak, ST, M.ISD'
    },
    {
      id: 'ssc-balige',
      title: 'Academic System for SSC Balige',
      category: 'enterprise',
      role: 'Full-Stack Web Developer & QA Tester',
      context: 'Del Institute of Technology',
      date: 'Jan 2025 – Jun 2025',
      image: `${import.meta.env.BASE_URL}ssc.png`,
      customBadge: 'Enterprise & QA',
      isSdet: true,
      description: [
        'Built an integrated information portal, material repository, discussion forum, and student management system, adopted as the primary academic hub for SSC Balige students and staff.',
        'Enhanced user access control and optimized database queries, improving page load times during peak usage.',
        'Worked in an Agile/Scrum team: designed and executed manual test cases (functional and regression) with Katalon Studio, and validated endpoints with Postman API testing.',
        'Conducted User Acceptance Testing (UAT) with students and staff and tracked defects in Jira until resolved, before deployment.'
      ],
      techStack: ['Laravel', 'MySQL', 'Figma', 'Tailwind CSS', 'Katalon Studio', 'Postman', 'Jira'],
      figmaUrl: 'https://www.figma.com/design/gXt5LCspBdJ0D0YjlHBDyo/SSC-Balige?node-id=0-1&p=f&t=vcGEZOEaEEZCoCWa-0',
      githubUrl: 'https://github.com/proyek-mahasiswa/psi-2425ge-04-ssc-balige/tree/development'
    },
    {
      id: 'arsip-sisfor',
      title: 'Information Systems Archive Platform (ArsipSisfor)',
      category: 'enterprise',
      role: 'Full-Stack Web Developer',
      context: 'Del Institute of Technology',
      date: 'Aug 2024 – Dec 2024',
      image: `${import.meta.env.BASE_URL}arsip.jpeg`,
      customBadge: 'Academic Cloud Archive',
      description: [
        'Developed an academic archive system with document categorization and role-based user access management, plus keyword-based search and optimized backend queries for faster document retrieval.',
        'Ran manual functional testing with Katalon Studio and API testing with Postman, resolved defects before launch, and conducted UAT with end users.'
      ],
      techStack: ['Laravel', 'MySQL', 'Bootstrap', 'Figma', 'Katalon Studio', 'Postman'],
      figmaUrl: 'https://www.figma.com/design/gNMr62rCiSlUsPqlOjrRVi/ArsipSI-hal-mahasiswa?node-id=0-1&p=f&t=jjlWWYocTb8RnQrl-0',
      githubUrl: 'https://github.com/agnesmosh241104/ArsipSisfor/tree/halaman_home'
    },
    {
      id: 'taskflow',
      title: 'TaskFlow: Collaborative Kanban Board Application',
      category: 'fullstack',
      role: 'Full-Stack Developer',
      context: 'Personal Project',
      date: '2026',
      images: [
        `${import.meta.env.BASE_URL}TaskFlow1.png`,
        `${import.meta.env.BASE_URL}TaskFlow2.png`
      ],
      customBadge: 'Full-Stack Architecture',
      description: [
        'Built a Trello-style kanban board with drag-and-drop organization and position persistence using Spring Boot and React + TypeScript (@dnd-kit).',
        'Implemented JWT authentication with Spring Security, role-based access control (Admin vs. Member), and BCrypt hashing, with Spring Data JPA/Hibernate on MySQL.'
      ],
      techStack: ['Java 21', 'Spring Boot 4', 'React 18', 'TypeScript', 'Vite', 'MySQL', 'JWT Auth', '@dnd-kit'],
      githubUrl: 'https://github.com/Bronsonsiallagan/taskflow-app'
    },
    {
      id: 'techmart',
      title: 'TechMart: Full-Stack E-Commerce Application',
      category: 'sdet',
      role: 'Full-Stack Developer & SDET',
      context: 'Personal Project',
      date: '2026',
      images: [
        `${import.meta.env.BASE_URL}Techmart1.png`,
        `${import.meta.env.BASE_URL}Techmart2.png`
      ],
      customBadge: 'SDET & Playwright E2E',
      isSdet: true,
      description: [
        'Built an e-commerce platform covering authentication, product catalog, cart, checkout, manual payment, and an admin dashboard using Golang/Gin/GORM and Angular 18.',
        'Built an automated E2E suite with Playwright (10+ test cases) covering login, cart, and checkout flows.'
      ],
      techStack: ['Golang (Gin)', 'GORM', 'Angular 18', 'MySQL', 'JWT', 'Playwright', 'Chart.js', 'RxJS'],
      githubUrl: 'https://github.com/Bronsonsiallagan/techmart-ecommerce'
    },
    {
      id: 'ferry-ticketing',
      title: 'Ferry Ticketing System: Ajibata–Ambarita Route',
      category: 'sdet',
      role: 'Full-Stack Developer & SDET',
      context: 'Lake Toba Route | Personal Project',
      date: '2026',
      images: [
        `${import.meta.env.BASE_URL}Ticketing1.png`,
        `${import.meta.env.BASE_URL}Ticketing2.png`,
        `${import.meta.env.BASE_URL}Ticketing3.png`
      ],
      customBadge: 'SDET & Selenium BDD',
      isSdet: true,
      description: [
        'Developed a ferry booking system for three roles (Admin, Harbor Staff, Customer) with NestJS/TypeORM and Vue 3/PrimeVue with Pinia, including real-time vehicle quota validation and QR-code e-tickets.',
        'Automated E2E scenarios with Selenium WebDriver (Java) and Cucumber (BDD), and wrote unit tests with Jest (backend) and Vitest (frontend).'
      ],
      techStack: ['NestJS', 'TypeORM', 'MySQL', 'Vue 3', 'PrimeVue', 'Selenium WebDriver', 'Cucumber (BDD)', 'Jest', 'Vitest'],
      githubUrl: 'https://github.com/Bronsonsiallagan/ferry-ticketing'
    },
    {
      id: 'svm-diabetes',
      title: 'SVM Model for Diabetes Diagnosis & Cost Estimation',
      category: 'ml',
      role: 'Machine Learning & Data Mining Researcher',
      context: 'Del Institute of Technology / BPJS Hackathon',
      date: '2024 – 2025',
      images: dataMiningImages,
      customBadge: 'AI & Data Science',
      description: [
        'Applied Support Vector Machine (SVM) models to predict Diabetes Mellitus diagnosis and estimate verification costs for BPJS healthcare participants.',
        'Engineered data preprocessing, feature selection, model validation, and deployment pipeline in Google Colab.',
        'Directly reflects certified competency as Associate Data Scientist (Digital Talent Scholarship).'
      ],
      techStack: ['Python', 'Google Colab', 'SVM', 'Machine Learning', 'Data Mining', 'Pandas/Scikit-Learn'],
      githubUrl: 'https://github.com/ReinhardBatubara/BPPJS-Hackaton'
    }
  ]

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (projectFilter === 'sdet') return p.isSdet || p.category === 'sdet'
        return p.category === projectFilter
      })

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src={`${import.meta.env.BASE_URL}brons.png`} alt="Bronson" className="nav-brand-avatar" />
            <span>Bronson</span>.dev
          </a>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => scrollToSection('credentials')} className={activeSection === 'credentials' ? 'active' : ''}>Credentials</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>

          <div className="nav-actions">
            <button onClick={() => setIsCvModalOpen(true)} className="nav-cv-btn">
              📄 View CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Avatar */}
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <img
                    src={`${import.meta.env.BASE_URL}brons.png`}
                    alt="Bronson TM Siallagan"
                    className="hero-avatar-img"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="hero-content">
              <div className="hero-status-pill">
                <span className="pulse-dot"></span>
                <span>Fresh Graduate • Immediate Availability | Open to Engineering Roles</span>
              </div>

              <h1 className="hero-title">
                Hi, I'm <span>Bronson TM Siallagan</span>
              </h1>

              <div className="hero-subtitle">
                Software Engineer | Full-Stack Developer & SDET
              </div>

              <p className="hero-desc">
                Fresh Information Systems graduate from <strong>Del Institute of Technology</strong>. Full-stack developer & SDET who also conducts Deep Learning research: <strong>Java Spring Boot</strong>, <strong>Golang</strong>, <strong>NestJS</strong>, <strong>React</strong>, <strong>Playwright</strong>, and <strong>Generative AI (SDXL & LLaVA)</strong>.
              </p>

              <div className="hero-cta-group">
                <button onClick={() => setIsCvModalOpen(true)} className="btn-primary">
                  📄 View Digital CV (ATS)
                </button>
                <a href={cvPdfUrl} download="CV-Bronson_TM_Siallagan.pdf" className="btn-accent">
                  ⬇️ Download CV (PDF)
                </a>
                <button onClick={() => scrollToSection('projects')} className="btn-secondary">
                  🚀 Explore Projects
                </button>
              </div>

              {/* Quick Social & Recruiter Connect Row */}
              <div className="hero-social-row">
                <span className="hero-social-label">Connect:</span>
                <a href="https://github.com/bronsonsiallagan" target="_blank" rel="noopener noreferrer" className="hero-social-badge" title="GitHub Profile">
                  🐙 <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/bronson-tm-siallagan-47986a28a" target="_blank" rel="noopener noreferrer" className="hero-social-badge linkedin" title="LinkedIn Profile">
                  💼 <span>LinkedIn</span>
                </a>
                <a href={waPreFilledUrl} target="_blank" rel="noopener noreferrer" className="hero-social-badge whatsapp" title="Direct WhatsApp Chat">
                  💬 <span>WhatsApp</span>
                </a>
                <button onClick={(e) => handleCopyEmail(e)} className="hero-social-badge email" title="Copy Email Address">
                  📧 <span>{emailCopied ? 'Email Copied! ✓' : 'Copy Email'}</span>
                </button>
              </div>

              {/* Quick Stats Grid */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">3.03 / 4.00</div>
                  <div className="stat-label">GPA (Bachelor of IS, IT Del)</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1x Internship</div>
                  <div className="stat-label">PT Pos Satu Nusantara (ERP)</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Deep Learning TA</div>
                  <div className="stat-label">SDXL & LLaVA Conditioning</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2 Credentials</div>
                  <div className="stat-label">Data Scientist & TOEFL ITP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">About Me</span>
            <h2 className="section-title">Background & <span className="gradient-text">Profile</span></h2>
            <p className="section-subtitle">
              Bridging full-stack engineering with comprehensive automated testing and quality assurance
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <img
                src={`${import.meta.env.BASE_URL}brons.png`}
                alt="Bronson TM Siallagan"
                className="about-card-img"
              />
              <div className="about-edu-box">
                <div className="about-edu-degree">Bachelor of Information Systems</div>
                <div className="about-edu-univ">Del Institute of Technology, Sitoluama</div>
                <div className="about-edu-gpa">GPA: 3.03 / 4.00 (Sep 2022 – Sep 2026)</div>
                <div style={{ marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '0.78rem', color: '#475569', lineHeight: 1.45 }}>
                  <strong>Undergraduate Thesis:</strong> Multimodal Conditioning of Fine-Tuned SDXL & LLaVA for Culturally Faithful Ulos Motif Generation
                  <br />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Advisor: Humasak Tommy Argo Simanjuntak, ST, M.ISD</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <h3>
                Software Engineer Focused on System Scalability & Test Automation
              </h3>
              <p>
                Information Systems graduate from <strong>Del Institute of Technology</strong> with hands-on experience across the entire software development lifecycle (SDLC & STLC). Completed an industry internship in ERP systems and built five production-ready full-stack applications.
              </p>
              <p>
                Experienced in architecting scalable web & ERP applications, designing robust RESTful APIs with <strong>Java Spring Boot</strong>, <strong>Golang</strong>, <strong>NestJS</strong>, <strong>Laravel</strong>, and <strong>CodeIgniter</strong>, paired with modern frontends in <strong>React</strong>, <strong>Angular 18</strong>, and <strong>Vue 3</strong>.
              </p>

              <div className="about-highlights-grid">
                <div className="about-feature">
                  <div className="about-feature-icon">⚙️</div>
                  <div>
                    <div className="about-feature-title">Enterprise & Full-Stack</div>
                    <div className="about-feature-desc">Modular ERP architecture, RBAC, JWT Auth, relational PostgreSQL & MySQL modeling.</div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🧪</div>
                  <div>
                    <div className="about-feature-title">SDET & Automated Testing</div>
                    <div className="about-feature-desc">Playwright E2E suites, Selenium + Cucumber (BDD), Jest, Vitest, and Postman API testing.</div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">📊</div>
                  <div>
                    <div className="about-feature-title">Data Science Certified</div>
                    <div className="about-feature-desc">Certified Associate Data Scientist by Ministry of Communication and Informatics (2025).</div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🤝</div>
                  <div>
                    <div className="about-feature-title">Agile & Collaboration</div>
                    <div className="about-feature-desc">Experienced in Scrum workflows, Jira sprint tracking, and Git version control.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Industry Experience</span>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
            <p className="section-subtitle">
              Professional internship developing and automating enterprise ERP business modules
            </p>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-company">PT Pos Satu Nusantara</div>
                    <div className="timeline-role">Programmer Intern</div>
                  </div>
                  <div className="timeline-badge">Jun 2025 – Aug 2025</div>
                </div>
                <div className="timeline-location">📍 Banten, Indonesia (PT Ebako ERP Project)</div>

                <ul className="timeline-bullets">
                  <li>
                    Developed and maintained ERP modules for <strong>PT Ebako</strong> using <strong>CodeIgniter (PHP)</strong>, <strong>PostgreSQL</strong>, and <strong>JavaScript</strong>, covering inventory, procurement, and sales processes.
                  </li>
                  <li>
                    Designed relational database models and a modular backend structure, replacing manual cross-department reconciliation with an automated process.
                  </li>
                  <li>
                    Collaborated cross-functionally within the engineering team to deliver resilient web modules and optimize operational workflow efficiency.
                  </li>
                </ul>

                <div className="skill-tags-group">
                  <span className="skill-pill skill-pill-primary">CodeIgniter (PHP)</span>
                  <span className="skill-pill skill-pill-primary">PostgreSQL</span>
                  <span className="skill-pill skill-pill-primary">JavaScript</span>
                  <span className="skill-pill skill-pill-secondary">ERP Architecture</span>
                  <span className="skill-pill skill-pill-secondary">Inventory & Procurement</span>
                  <span className="skill-pill skill-pill-success">Process Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Technical Proficiency</span>
            <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
            <p className="section-subtitle">
              Core technologies proven across enterprise ERP, academic platforms, and modern web applications
            </p>
          </div>

          <div className="skills-grid">
            {/* Testing & QA (SDET) Card */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ background: '#ecfdf5', color: '#059669' }}>🧪</div>
                <div>
                  <div className="skill-card-title">Testing & QA (SDET)</div>
                  <div className="skill-card-sub">Automated & Manual Quality Engineering</div>
                </div>
              </div>
              <div className="skill-tags-group">
                {[
                  'Playwright (E2E)',
                  'Selenium WebDriver',
                  'Cucumber (BDD)',
                  'Katalon Studio',
                  'Jest (Unit Testing)',
                  'Vitest',
                  'Postman API Testing',
                  'Manual Functional Testing',
                  'Regression Testing',
                  'User Acceptance Testing (UAT)',
                  'SDLC & STLC',
                  'Agile / Scrum (Jira)'
                ].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-success">{skill}</span>
                ))}
              </div>
            </div>

            {/* Backend Engineering Card */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ background: '#eef2ff', color: '#4f46e5' }}>⚙️</div>
                <div>
                  <div className="skill-card-title">Backend Engineering</div>
                  <div className="skill-card-sub">Scalable APIs & Modular Architecture</div>
                </div>
              </div>
              <div className="skill-tags-group">
                {[
                  'Java (Spring Boot)',
                  'Golang (Gin)',
                  'NestJS',
                  'PHP (Laravel)',
                  'CodeIgniter',
                  'Node.js',
                  'RESTful API Design',
                  'JWT Authentication',
                  'Role-Based Access Control (RBAC)',
                  'GORM',
                  'TypeORM',
                  'Spring Data JPA / Hibernate'
                ].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-primary">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frontend Development Card */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>🎨</div>
                <div>
                  <div className="skill-card-title">Frontend Development</div>
                  <div className="skill-card-sub">Modern, Responsive & Component-Driven UI</div>
                </div>
              </div>
              <div className="skill-tags-group">
                {[
                  'React.js',
                  'Angular 18',
                  'Vue 3',
                  'TypeScript',
                  'JavaScript (ES6+)',
                  'Tailwind CSS',
                  'Bootstrap',
                  'PrimeVue',
                  'Pinia State Management',
                  'Vite',
                  'HTML5 & CSS3',
                  '@dnd-kit (Kanban DnD)'
                ].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-purple">{skill}</span>
                ))}
              </div>
            </div>

            {/* Database & Tools Card */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ background: '#ecfeff', color: '#0891b2' }}>🗄️</div>
                <div>
                  <div className="skill-card-title">Database, Tools & Soft Skills</div>
                  <div className="skill-card-sub">Data Stores, DevOps & Team Collaboration</div>
                </div>
              </div>
              <div className="skill-tags-group">
                {[
                  'PostgreSQL',
                  'MySQL',
                  'SQL Server',
                  'MongoDB',
                  'Git & GitHub',
                  'Jira Software',
                  'Maven',
                  'Figma UI/UX',
                  'Chart.js',
                  'Attention to Detail',
                  'Collaborative Teamwork',
                  'Adaptability & Fast Learner'
                ].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-secondary">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Featured Work</span>
            <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">
              Undergraduate Thesis in Deep Learning + 5 Core CV Projects & Data Science Research
            </p>
          </div>

          {/* Filters */}
          <div className="project-filters">
            <button
              className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
              onClick={() => setProjectFilter('all')}
            >
              All Projects ({projects.length})
            </button>
            <button
              className={`filter-btn ${projectFilter === 'ml' ? 'active' : ''}`}
              onClick={() => setProjectFilter('ml')}
            >
              🎓 Thesis & AI/ML (2)
            </button>
            <button
              className={`filter-btn ${projectFilter === 'sdet' ? 'active' : ''}`}
              onClick={() => setProjectFilter('sdet')}
            >
              🧪 SDET & Automated QA (3)
            </button>
            <button
              className={`filter-btn ${projectFilter === 'enterprise' ? 'active' : ''}`}
              onClick={() => setProjectFilter('enterprise')}
            >
              🏢 Enterprise & Academic (2)
            </button>
            <button
              className={`filter-btn ${projectFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setProjectFilter('fullstack')}
            >
              ⚡ Modern Full-Stack (1)
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                {/* Media / Carousel */}
                <div className="project-media">
                  {project.images ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#0f172a' }}>
                      <img
                        src={project.images[projectImageIndexes[project.id] || 0]}
                        alt={project.title}
                        onClick={() => setPreviewImage({
                          src: project.images![projectImageIndexes[project.id] || 0],
                          title: `${project.title} (Screenshot ${(projectImageIndexes[project.id] || 0) + 1} of ${project.images!.length})`
                        })}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: (project.id === 'techmart' || project.id === 'ferry-ticketing' || project.id === 'taskflow') ? 'cover' : 'contain',
                          objectPosition: 'top',
                          padding: (project.id === 'techmart' || project.id === 'ferry-ticketing' || project.id === 'taskflow') ? 0 : '0.6rem',
                          cursor: 'zoom-in'
                        }}
                        title="Click to view full image"
                      />
                      <button
                        onClick={() => handlePrevImage(project.id, project.images!.length)}
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255,255,255,0.92)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          color: '#4f46e5',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2
                        }}
                        aria-label="Previous image"
                      >
                        ❮
                      </button>
                      <button
                        onClick={() => handleNextImage(project.id, project.images!.length)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255,255,255,0.92)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          color: '#4f46e5',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2
                        }}
                        aria-label="Next image"
                      >
                        ❯
                      </button>

                      {/* Dots indicator */}
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '6px',
                        zIndex: 2,
                        background: 'rgba(0,0,0,0.4)',
                        padding: '3px 8px',
                        borderRadius: '12px'
                      }}>
                        {project.images.map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: (projectImageIndexes[project.id] || 0) === i ? '16px' : '6px',
                              height: '6px',
                              borderRadius: '3px',
                              background: (projectImageIndexes[project.id] || 0) === i ? '#4f46e5' : 'rgba(255, 255, 255, 0.7)',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onClick={() => setPreviewImage({ src: project.image!, title: project.title })}
                      style={{
                        cursor: 'zoom-in',
                        objectFit: project.id === 'thesis-ulos-sdxl' ? 'cover' : 'contain',
                        objectPosition: 'top'
                      }}
                      title="Click to view full image"
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: project.id === 'taskflow'
                        ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
                        : project.id === 'techmart'
                        ? 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'
                        : 'linear-gradient(135deg, #083344 0%, #0891b2 100%)',
                      color: '#fff',
                      padding: '1.5rem',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '3rem', marginBottom: '0.3rem' }}>
                        {project.id === 'taskflow' ? '📋' : project.id === 'techmart' ? '🛒' : '🚢'}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{project.title}</div>
                      <div style={{ fontSize: '0.82rem', opacity: 0.85 }}>{project.role}</div>
                    </div>
                  )}

                  <span className={`project-badge-tag ${project.id === 'thesis-ulos-sdxl' ? 'thesis' : project.isSdet ? 'sdet' : ''}`}>
                    {project.customBadge || project.category}
                  </span>

                  {(project.images || project.image) && (
                    <button
                      className="project-zoom-btn"
                      onClick={() => setPreviewImage({
                        src: project.images ? project.images[projectImageIndexes[project.id] || 0] : project.image!,
                        title: project.title
                      })}
                      title="Enlarge screenshot"
                      aria-label="Enlarge screenshot"
                    >
                      🔍 Zoom
                    </button>
                  )}
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="project-context">{project.context} ({project.date})</div>
                  <h3 className="project-title">{project.title}</h3>

                  <ul className="project-desc-bullets">
                    {project.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="project-tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="project-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                        🐙 GitHub Repository
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn figma">
                        🎨 Figma Design
                      </a>
                    )}
                    {project.paperUrl && (
                      <a href={project.paperUrl} download="Paper_Ulos_SDXL.pdf" target="_blank" rel="noopener noreferrer" className="project-link-btn paper">
                        📄 Academic Paper (PDF)
                      </a>
                    )}
                    {project.posterUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewImage({ src: project.posterUrl!, title: `${project.title} — Research Poster` })}
                        className="project-link-btn poster"
                      >
                        🖼️ Research Poster
                      </button>
                    )}
                    {project.videoUrl && (
                      <button
                        type="button"
                        onClick={() => setVideoModalOpen(true)}
                        className="project-link-btn video"
                      >
                        🎬 Watch Promo Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Organization Section */}
      <section id="credentials" className="credentials">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Official Qualifications</span>
            <h2 className="section-title">Certifications & <span className="gradient-text">Leadership</span></h2>
            <p className="section-subtitle">
              Verified certifications and collaborative leadership across campus initiatives
            </p>
          </div>

          <div className="credentials-grid">
            {/* Certifications Column */}
            <div className="credentials-col">
              <h3>📜 Professional Certifications</h3>

              {/* Associate Data Scientist Card */}
              <div className="cert-card">
                <div className="cert-card-header">
                  <span className="cert-badge bnsp">BNSP & Kominfo RI Verified</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Valid: 2025 – 2028</span>
                </div>
                <div className="cert-card-title">Associate Data Scientist (Ilmuwan Data Muda)</div>
                <div className="cert-card-issuer">Badan Nasional Sertifikasi Profesi (BNSP) & LSP Teknologi Digital</div>

                <div className="cert-meta-row">
                  <span className="cert-meta-tag">Reg: DMI 1565 47568 2025</span>
                  <span className="cert-meta-tag">Cert: 63111 2511 5 0162879 2025</span>
                  <span className="cert-meta-tag">VSGA Digital Talent Scholarship</span>
                </div>

                <div className="cert-card-desc">
                  Nationally certified competency across 9 core data science units: Data Collection, Examination, Validation, Object Definition, Data Cleaning, Data Construction, Label Determination, Model Building, and Model Evaluation.
                </div>

                <div className="cert-preview-wrapper">
                  <div className="cert-thumb-preview" onClick={() => { setSelectedCert('ds'); setDsPage(1); }} title="Click to view full certificate">
                    <img src={certDsFrontUrl} alt="BNSP Associate Data Scientist Certificate" />
                  </div>
                  <button className="cert-view-btn" onClick={() => { setSelectedCert('ds'); setDsPage(1); }}>
                    📜 View Official Certificate (BNSP)
                  </button>
                </div>
              </div>

              {/* TOEFL ITP Card */}
              <div className="cert-card">
                <div className="cert-card-header">
                  <span className="cert-badge toefl">ETS Official • Bronze Level</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Test Date: 04 Aug 2025</span>
                </div>
                <div className="cert-card-title">TOEFL ITP® (Institutional Testing Program)</div>
                <div className="cert-card-issuer">Educational Testing Service (ETS) & Del Institute of Technology</div>

                <div className="cert-meta-row">
                  <span className="cert-meta-tag" style={{ background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>Total Score: 460</span>
                  <span className="cert-meta-tag">Listening: 38</span>
                  <span className="cert-meta-tag">Structure: 49</span>
                  <span className="cert-meta-tag">Reading: 51</span>
                  <span className="cert-meta-tag">ID: 14911460</span>
                </div>

                <div className="cert-card-desc">
                  Certified English proficiency for technical problem solving, system architecture documentation, and cross-functional engineering collaboration.
                </div>

                <div className="cert-preview-wrapper">
                  <div className="cert-thumb-preview" onClick={() => setSelectedCert('toefl')} title="Click to view full certificate">
                    <img src={certToeflUrl} alt="ETS TOEFL ITP Certificate" />
                  </div>
                  <button className="cert-view-btn" onClick={() => setSelectedCert('toefl')}>
                    📜 View Official Certificate (ETS)
                  </button>
                </div>
              </div>
            </div>

            {/* Organizations Column */}
            <div className="credentials-col">
              <h3>👥 Organizational Experience</h3>

              <div className="org-card">
                <div className="org-card-title">Google Developer Student Club (GDSC)</div>
                <div className="org-card-role">Member | Aug 2023 – Dec 2024</div>
                <div className="org-card-desc">
                  Participated in technical sessions with Google Developer Experts (GDE), workshops on Google developer technologies, and collaborative student project teams.
                </div>
              </div>

              <div className="org-card">
                <div className="org-card-title">Information Systems Student Association (HIMSI)</div>
                <div className="org-card-role">Arts Division Member | Oct 2023 – Oct 2025</div>
                <div className="org-card-desc">
                  Organized and coordinated student arts and cultural events, logistics management, and community-building programs.
                </div>
              </div>

              <div className="org-card">
                <div className="org-card-title">Student Election Commission (KPU Mahasiswa)</div>
                <div className="org-card-role">Security Division Member | Sep 2023 – May 2024</div>
                <div className="org-card-desc">
                  Maintained security, protocol compliance, and procedural integrity throughout the campus student government election process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Resume Download Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Get In Touch</span>
            <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
            <p className="section-subtitle">
              Available for Software Engineer, Full-Stack Developer, QA Engineer, and SDET opportunities.
            </p>
          </div>

          <div className="contact-card-main">
            {/* Availability & Career Preferences Banner */}
            <div className="availability-banner">
              <div className="availability-header">
                <span className="pulse-dot"></span>
                <div className="availability-title">Candidate Availability & Work Preferences</div>
              </div>
              <div className="availability-grid">
                <div className="availability-item">
                  <div className="availability-label">Candidate Status</div>
                  <div className="availability-value">Fresh Graduate (Bachelor of IS)</div>
                </div>
                <div className="availability-item">
                  <div className="availability-label">Availability</div>
                  <div className="availability-value" style={{ color: '#059669' }}>Immediate / Available Anytime</div>
                </div>
                <div className="availability-item">
                  <div className="availability-label">Work Model</div>
                  <div className="availability-value">On-site, Hybrid, or Remote</div>
                </div>
                <div className="availability-item">
                  <div className="availability-label">Target Roles</div>
                  <div className="availability-value">Software Engineer | Full-Stack | SDET</div>
                </div>
              </div>
            </div>

            <div className="contact-channels-grid">
              {/* Email with 1-Click Copy */}
              <div className="contact-channel-item" style={{ cursor: 'pointer' }} onClick={() => handleCopyEmail()}>
                <div className="channel-icon">📧</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="channel-info-title">Email (Click to Copy)</div>
                  <div className="channel-info-val">bronsonsiallagan18@gmail.com</div>
                  <button
                    className={`copy-email-btn ${emailCopied ? 'copied' : ''}`}
                    onClick={(e) => handleCopyEmail(e)}
                    type="button"
                  >
                    {emailCopied ? '✓ Email Copied!' : '📋 Copy Email'}
                  </button>
                </div>
              </div>

              {/* WhatsApp with Direct Message Template */}
              <a href={waPreFilledUrl} target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                <div className="channel-icon" style={{ background: '#ecfdf5', color: '#10b981' }}>💬</div>
                <div>
                  <div className="channel-info-title">WhatsApp / Direct Chat</div>
                  <div className="channel-info-val">+62 813-7302-6305</div>
                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '0.4rem' }}>
                    💬 Send Pre-filled Message
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/bronson-tm-siallagan-47986a28a" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                <div className="channel-icon" style={{ background: '#eff6ff', color: '#0a66c2' }}>💼</div>
                <div>
                  <div className="channel-info-title">LinkedIn</div>
                  <div className="channel-info-val">Bronson TM Siallagan</div>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/bronsonsiallagan" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                <div className="channel-icon" style={{ background: '#f8fafc', color: '#0f172a' }}>🐙</div>
                <div>
                  <div className="channel-info-title">GitHub</div>
                  <div className="channel-info-val">github.com/bronsonsiallagan</div>
                </div>
              </a>
            </div>

            {/* Resume Banner */}
            <div className="resume-banner">
              <div className="resume-banner-text">
                <h3>Looking for Detailed Qualifications?</h3>
                <p>
                  Review my full work history at PT Pos Satu Nusantara, 5 production projects, Kominfo data science certification, and academic background.
                </p>
              </div>
              <div className="resume-actions-group">
                <button onClick={() => setIsCvModalOpen(true)} className="btn-primary" style={{ background: '#fff', color: '#4f46e5' }}>
                  👁️ View Digital CV
                </button>
                <a href={cvPdfUrl} download="CV-Bronson_TM_Siallagan.pdf" className="btn-accent">
                  ⬇️ Download Official PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Interactive ATS CV Modal
         ========================================================================== */}
      {isCvModalOpen && (
        <div className="cv-modal-backdrop" onClick={() => setIsCvModalOpen(false)}>
          <div className="cv-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#111827' }}>
                📄 Official Resume — Bronson TM Siallagan
              </div>
              <div className="cv-modal-header-actions">
                <a href={cvPdfUrl} download="CV-Bronson_TM_Siallagan.pdf" className="nav-cv-btn" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                  ⬇️ Download PDF
                </a>
                <button
                  onClick={() => setIsCvModalOpen(false)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: '#475569'
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            <div className="cv-modal-body">
              <div className="cv-paper">
                {/* Header */}
                <h1 className="cv-name">BRONSON TM SIALLAGAN</h1>
                <div className="cv-contact-bar">
                  Samosir, Sumatera Utara | 081373026305 | bronsonsiallagan18@gmail.com
                </div>
                <div className="cv-links-bar">
                  <a href="https://linkedin.com/in/bronson-tm-siallagan-47986a28a" target="_blank" rel="noopener noreferrer">linkedin.com/in/bronson-tm-siallagan-47986a28a</a> | 
                  <a href="https://github.com/bronsonsiallagan" target="_blank" rel="noopener noreferrer">github.com/bronsonsiallagan</a> | 
                  <a href="https://bronsonsiallagan.github.io/Bronson-DevPortfolio" target="_blank" rel="noopener noreferrer">bronsonsiallagan.github.io/Bronson-DevPortfolio</a>
                </div>

                {/* Summary */}
                <p className="cv-summary-text">
                  Information Systems graduate with one internship and five projects spanning full-stack development and software testing. Builds web and ERP applications with Laravel, CodeIgniter, Spring Boot, NestJS, and Golang on the backend and Angular, React, and Vue on the frontend. Tests with manual functional, regression, UAT, and API (Postman) approaches, and builds automated E2E suites with Playwright and Selenium + Cucumber (BDD), applying SDLC, STLC, and Agile/Scrum practices. Experienced in RESTful API design, relational modeling (MySQL, PostgreSQL), and JWT authentication with role-based access control.
                </p>

                {/* Work Experience */}
                <h2 className="cv-section-heading">WORK EXPERIENCE</h2>
                <div className="cv-entry-header">
                  <div className="cv-entry-title">PT Pos Satu Nusantara — Banten</div>
                  <div className="cv-entry-date">Jun 2025 – Aug 2025</div>
                </div>
                <div className="cv-entry-sub">Programmer Intern</div>
                <ul className="cv-list">
                  <li>Developed and maintained ERP modules for PT Ebako using CodeIgniter (PHP), PostgreSQL, and JavaScript, covering inventory, procurement, and sales processes.</li>
                  <li>Designed relational database models and a modular backend structure, replacing manual cross-department reconciliation with an automated process.</li>
                </ul>

                {/* Education */}
                <h2 className="cv-section-heading">EDUCATION</h2>
                <div className="cv-entry-header">
                  <div className="cv-entry-title">Del Institute of Technology, Sitoluama, Sumatera Utara</div>
                  <div className="cv-entry-date">Sep 2022 – Sep 2026</div>
                </div>
                <div className="cv-entry-sub">Bachelor of Information Systems, GPA 3.03/4.00</div>
                <div style={{ fontSize: '0.85rem', color: '#1e293b', marginTop: '0.35rem', background: '#f8fafc', padding: '0.5rem 0.8rem', borderRadius: '4px', borderLeft: '3px solid #4f46e5' }}>
                  <strong>Undergraduate Thesis:</strong> Multimodal Conditioning of Fine-Tuned Stable Diffusion XL for Controllable and Culturally Faithful Ulos Motif Generation
                  <br />
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Advisor: Humasak Tommy Argo Simanjuntak, ST, M.ISD | Tech: Stable Diffusion XL (SDXL 1.0), Multimodal LLaVA, PyTorch, LoRA</span>
                </div>

                {/* Projects */}
                <h2 className="cv-section-heading">PROJECTS</h2>

                {/* Undergraduate Thesis */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">Undergraduate Thesis: Controllable Ulos Motif Generation with Fine-Tuned SDXL & Multimodal LLaVA</div>
                  <div className="cv-entry-date">Del Institute of Technology, 2025 – 2026</div>
                </div>
                <div className="cv-entry-sub">Lead Generative AI Researcher | Advisor: Humasak Tommy Argo Simanjuntak, ST, M.ISD | Python, SDXL, LLaVA, PyTorch, LoRA, Hugging Face</div>
                <ul className="cv-list">
                  <li>Fine-tuned Stable Diffusion XL (SDXL v1.0) with Multimodal LLaVA conditioning for culturally faithful, controllable generation of traditional Batak Ulos motifs.</li>
                  <li>Curated an authentic primary image dataset directly collected from traditional Ulos weavers across North Sumatra to preserve sacred cultural fidelity and geometric motifs.</li>
                  <li>Integrated vision-language multimodal feature extraction to translate weaver domain semantics and design prompts into high-resolution textile patterns.</li>
                  <li>Delivered full academic research paper, scientific exhibition poster, and promotional video demonstration.</li>
                </ul>

                {/* Project 1 */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">Academic System for SSC Balige, Del Institute of Technology</div>
                  <div className="cv-entry-date">Jan 2025 – Jun 2025</div>
                </div>
                <div className="cv-entry-sub">Full-Stack Web Developer & QA Tester | Laravel, MySQL, Figma, Tailwind CSS, Katalon Studio, Postman, Jira</div>
                <ul className="cv-list">
                  <li>Built an integrated information portal, material repository, discussion forum, and student management system, adopted as the primary academic hub for SSC Balige students and staff.</li>
                  <li>Enhanced user access control and optimized database queries, improving page load times during peak usage.</li>
                  <li>Worked in an Agile/Scrum team: designed and executed manual test cases (functional and regression) with Katalon Studio, and validated endpoints with Postman API testing.</li>
                  <li>Conducted User Acceptance Testing (UAT) with students and staff and tracked defects in Jira until resolved, before deployment.</li>
                </ul>

                {/* Project 2 */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">Information Systems Archive Platform, Del Institute of Technology</div>
                  <div className="cv-entry-date">Aug 2024 – Dec 2024</div>
                </div>
                <div className="cv-entry-sub">Full-Stack Web Developer | Laravel, MySQL, Bootstrap, Figma, Katalon Studio, Postman</div>
                <ul className="cv-list">
                  <li>Developed an academic archive system with document categorization and role-based user access management, plus keyword-based search and optimized backend queries for faster document retrieval.</li>
                  <li>Ran manual functional testing with Katalon Studio and API testing with Postman, resolved defects before launch, and conducted UAT with end users.</li>
                </ul>

                {/* Project 3 */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">TaskFlow: Collaborative Kanban Board Application</div>
                  <div className="cv-entry-date">Personal Project, 2026</div>
                </div>
                <div className="cv-entry-sub">Full-Stack Developer | Java Spring Boot, React + TypeScript + Vite, MySQL, JWT</div>
                <ul className="cv-list">
                  <li>Built a Trello-style kanban board with drag-and-drop organization and position persistence using Spring Boot and React + TypeScript.</li>
                  <li>Implemented JWT authentication with Spring Security, role-based access control (Admin vs. Member), and BCrypt hashing, with Spring Data JPA/Hibernate on MySQL.</li>
                </ul>

                {/* Project 4 */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">TechMart: Full-Stack E-Commerce Application</div>
                  <div className="cv-entry-date">Personal Project, 2026</div>
                </div>
                <div className="cv-entry-sub">Full-Stack Developer & SDET | Golang, Gin, GORM, Angular, MySQL, JWT, Playwright</div>
                <ul className="cv-list">
                  <li>Built an e-commerce platform covering authentication, product catalog, cart, checkout, manual payment, and an admin dashboard using Golang/Gin/GORM and Angular 18.</li>
                  <li>Built an automated E2E suite with Playwright (10+ test cases) covering login, cart, and checkout.</li>
                </ul>

                {/* Project 5 */}
                <div className="cv-entry-header">
                  <div className="cv-entry-title">Ferry Ticketing System: Ajibata–Ambarita Route, Lake Toba</div>
                  <div className="cv-entry-date">Personal Project, 2026</div>
                </div>
                <div className="cv-entry-sub">Full-Stack Developer & SDET | NestJS, TypeORM, MySQL, Vue 3, PrimeVue, Selenium, Cucumber, Jest, Vitest</div>
                <ul className="cv-list">
                  <li>Developed a ferry booking system for three roles (Admin, Harbor Staff, Customer) with NestJS/TypeORM and Vue 3/PrimeVue with Pinia, including real-time vehicle quota validation and QR-code e-tickets.</li>
                  <li>Automated E2E scenarios with Selenium WebDriver (Java) and Cucumber (BDD), and wrote unit tests with Jest (backend) and Vitest (frontend).</li>
                </ul>

                {/* Certifications */}
                <h2 className="cv-section-heading">CERTIFICATIONS</h2>
                <ul className="cv-list">
                  <li><strong>Associate Data Scientist</strong>, Vocational School Graduate Academy, Digital Talent Scholarship (2025)</li>
                  <li><strong>TOEFL ITP</strong> Score 460 (August 2025)</li>
                </ul>

                {/* Organizational Experience */}
                <h2 className="cv-section-heading">ORGANIZATIONAL EXPERIENCE</h2>
                <ul className="cv-list">
                  <li><strong>Google Developer Student Club (GDSC)</strong> | Member | tech talks with Google Developer Experts, team projects (Aug 2023 – Dec 2024)</li>
                  <li><strong>Himpunan Mahasiswa Sistem Informasi (HIMSI)</strong> | Arts Division Member | arts and cultural events, logistics (Oct 2023 – Oct 2025)</li>
                  <li><strong>Student Election Commission (KPU Mahasiswa)</strong> | Security Division Member | student election activities (Sep 2023 – May 2024)</li>
                </ul>

                {/* Technical Skills */}
                <h2 className="cv-section-heading">TECHNICAL SKILLS</h2>
                <div className="cv-skill-category">
                  <strong>Testing & QA:</strong> Manual Functional, Regression & UAT; SDLC & STLC; Agile/Scrum; Automated E2E (Playwright, Selenium WebDriver, Cucumber/BDD, Katalon Studio); Unit Testing (Jest, Vitest); API Testing (Postman)
                </div>
                <div className="cv-skill-category">
                  <strong>Languages:</strong> Java, JavaScript, TypeScript, PHP, Golang, Python, C#, .Net, SQL.
                </div>
                <div className="cv-skill-category">
                  <strong>Backend:</strong> Spring Boot, Laravel, CodeIgniter, NestJS, Gin; RESTful API Design, JWT, RBAC, GORM, TypeORM, JPA/Hibernate
                </div>
                <div className="cv-skill-category">
                  <strong>Frontend:</strong> Angular, React, Vue.js, HTML, CSS, Tailwind CSS, Bootstrap, PrimeVue
                </div>
                <div className="cv-skill-category">
                  <strong>Database:</strong> MySQL, PostgreSQL, SQL Server, MongoDB
                </div>
                <div className="cv-skill-category">
                  <strong>Tools:</strong> Git, Jira, Katalon Studio, Postman, Maven, Node.js, Figma
                </div>
                <div className="cv-skill-category">
                  <strong>Soft Skills:</strong> Attention to Detail, Adaptability, Collaborative Teamwork, Eager to Learn.
                </div>
                <div className="cv-skill-category">
                  <strong>Languages:</strong> Indonesian (Native), English (Intermediate).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          Certificate Viewer Modal (High-Res Verification)
         ========================================================================== */}
      {selectedCert && (
        <div className="cv-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827' }}>
                {selectedCert === 'ds'
                  ? '📜 BNSP Certificate of Competence — Associate Data Scientist'
                  : '📜 ETS TOEFL ITP® — Certificate of Achievement'}
              </div>
              <div className="cv-modal-header-actions">
                <a
                  href={
                    selectedCert === 'ds'
                      ? dsPage === 1 ? certDsFrontUrl : certDsBackUrl
                      : certToeflUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cv-btn"
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                >
                  🔗 Open Full Image
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: '#475569'
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {selectedCert === 'ds' && (
              <div className="cert-modal-tabs">
                <button
                  className={`cert-modal-tab ${dsPage === 1 ? 'active' : ''}`}
                  onClick={() => setDsPage(1)}
                >
                  📄 Page 1: Certificate of Competence (BNSP Seal)
                </button>
                <button
                  className={`cert-modal-tab ${dsPage === 2 ? 'active' : ''}`}
                  onClick={() => setDsPage(2)}
                >
                  📋 Page 2: 9 Units of Competency Table
                </button>
              </div>
            )}

            <div className="cert-modal-img-container">
              <img
                src={
                  selectedCert === 'ds'
                    ? dsPage === 1 ? certDsFrontUrl : certDsBackUrl
                    : certToeflUrl
                }
                alt={selectedCert === 'ds' ? 'Associate Data Scientist Certificate' : 'TOEFL ITP Certificate'}
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}
      {/* ==========================================================================
          Project Screenshot Lightbox Modal (Click-to-Zoom)
         ========================================================================== */}
      {previewImage && (
        <div className="cv-modal-backdrop" onClick={() => setPreviewImage(null)}>
          <div className="cert-modal-window" style={{ maxWidth: '980px', width: '92%' }} onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🔍</span>
                <span>{previewImage.title}</span>
              </div>
              <div className="cv-modal-header-actions">
                <a
                  href={previewImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cv-btn"
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                >
                  🔗 Open Raw Image
                </a>
                <button
                  onClick={() => setPreviewImage(null)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: '#475569'
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            <div className="cert-modal-img-container" style={{ maxHeight: '78vh', background: '#0f172a', padding: '0.8rem', display: 'flex', justifyContent: 'center' }}>
              <img
                src={previewImage.src}
                alt={previewImage.title}
                style={{ maxWidth: '100%', maxHeight: '74vh', objectFit: 'contain', borderRadius: '6px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          Undergraduate Thesis YouTube Video Modal
         ========================================================================== */}
      {videoModalOpen && (
        <div className="cv-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="cert-modal-window" style={{ maxWidth: '850px', width: '92%' }} onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🎬</span>
                <span>Thesis Promotional Video: Ulos Motif Generation (SDXL & LLaVA)</span>
              </div>
              <div className="cv-modal-header-actions">
                <a
                  href="https://youtu.be/ldWnkUik1Ic?si=eMn_Py7Hwvbc5m0o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cv-btn"
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem', background: '#ef4444', color: '#fff' }}
                >
                  ▶ Open on YouTube
                </a>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: '#475569'
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000', borderRadius: '0 0 12px 12px' }}>
              <iframe
                src="https://www.youtube.com/embed/ldWnkUik1Ic?autoplay=1"
                title="Undergraduate Thesis Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Clean Minimalist Footer */}
      <footer className="footer-minimal">
        <div className="container">
          <p className="footer-copy">© 2026 Bronson TM Siallagan. Built with React, TypeScript & Vite.</p>
          <p className="footer-subtext">Del Institute of Technology Graduate • Open to Software Engineer, Full-Stack Developer & SDET Roles</p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}

      {/* Toast Notification */}
      {emailCopied && (
        <div className="toast-notification">
          <span style={{ fontSize: '1.2rem' }}>✓</span>
          <span>Email Copied! bronsonsiallagan18@gmail.com is ready to paste.</span>
        </div>
      )}
    </div>
  )
}

export default App
