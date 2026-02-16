import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [dataMiningImageIndex, setDataMiningImageIndex] = useState(0)
  const dataMiningImages = ['dami.png', 'Poster_01.png']

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
            <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3.5rem', flexWrap: 'wrap', padding: '2.5rem 0 2.5rem 0', minHeight: 420 }}>
          {/* Photo on the left */}
          <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hero-image" style={{ position: 'relative', width: 310, height: 310, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'conic-gradient(from 180deg at 50% 50%, #a78bfa 0deg, #38bdf8 120deg, #4F46E5 240deg, #a78bfa 360deg)', borderRadius: '50%', boxShadow: '0 8px 40px 0 rgba(80, 80, 200, 0.18)', padding: 10, zIndex: 1, overflow: 'visible' }}>
              <div style={{ width: 285, height: 285, borderRadius: '50%', background: 'linear-gradient(135deg, #f0f4ff 60%, #e0e7ff 100%)', boxShadow: '0 4px 32px 0 rgba(31,38,135,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <img src="brons.png" alt="Bronson Siallagan" style={{ width: 270, height: 270, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.13)', border: '6px solid #fff', transition: 'transform 0.3s', background: '#f8fafc', display: 'block' }} onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.045)')} onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', boxShadow: '0 0 48px 12px #a5b4fc55', pointerEvents: 'none', zIndex: 0 }} />
              </div>
            </div>
          </div>
          {/* Text on the right */}
          <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 600, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <h1 className="hero-title" style={{ fontSize: '3.1rem', fontWeight: 800, marginBottom: '0.7rem', lineHeight: 1.1 }}>Hi, I'm <span className="highlight">Bronson TM Siallagan</span></h1>
            <p className="hero-subtitle" style={{ fontSize: '1.45rem', fontWeight: 600, color: '#555', marginBottom: '0.5rem' }}>Information Systems student at IT Del</p>
            <p className="hero-description" style={{ fontSize: '1.13rem', color: '#666', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              Passionate about Full Stack Development and data insights<br />
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1.1rem' }}>
              <button onClick={() => scrollToSection('projects')} className="btn-primary">View My Work</button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Me</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 18px auto' }}></div>
          <div className="about-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <div className="about-image" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', borderRadius: '24px', overflow: 'hidden', background: '#fff' }}>
              <img 
                src="brons.png"
                alt="Bronson Siallagan" 
                className="about-profile-image" 
                style={{ 
                  width: '320px', 
                  height: '380px', 
                  borderRadius: '32px', 
                  objectFit: 'cover', 
                  boxShadow: '0 12px 40px 0 rgba(31,38,135,0.18)', 
                  border: '4px solid #4F46E5',
                  background: 'linear-gradient(135deg, #f0f4ff 60%, #e0e7ff 100%)',
                  transition: 'transform 0.3s',
                  margin: '0 auto',
                  display: 'block',
                }} 
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div className="about-text" style={{ maxWidth: '540px', textAlign: 'left', marginTop: 0 }}>
              <p style={{ fontSize: '1.18rem', marginBottom: '0.7rem', lineHeight: 1.7 }}>
                Hi! I'm <span style={{ color: '#4F46E5', fontWeight: 700 }}>Bronson TM Siallagan</span>, an Information Systems student at <span style={{ color: '#06b6d4', fontWeight: 600 }}>IT Del</span> with a strong passion for technology and software development. I'm focused on building impactful digital solutions as a Software Engineer, Full Stack Developer, Backend Developer, QA specialist, and data enthusiast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills & Technologies</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 48px auto' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Frontend Card */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f5f3ff 0%, #f0f4ff 100%)',
              borderRadius: '24px',
              boxShadow: '0 12px 40px 0 rgba(79, 70, 229, 0.12)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(79, 70, 229, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }} 
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(79, 70, 229, 0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.12)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1f2937' }}>Frontend</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'Code igniter', 'Flutter'].map((skill, i) => (
                  <span key={i} style={{ 
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(79, 70, 229, 0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.25)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div style={{ 
              background: 'linear-gradient(135deg, #fff5f0 0%, #ffe8e0 100%)',
              borderRadius: '24px',
              boxShadow: '0 12px 40px 0 rgba(239, 68, 68, 0.12)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(239, 68, 68, 0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(239, 68, 68, 0.12)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1f2937' }}>Backend</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {['Node.js', 'Express.js', 'Python', 'REST APIs', 'TypeScript', 'PHP'].map((skill, i) => (
                  <span key={i} style={{ 
                    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(239, 68, 68, 0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.25)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Tools Card */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 100%)',
              borderRadius: '24px',
              boxShadow: '0 12px 40px 0 rgba(34, 197, 94, 0.12)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(34, 197, 94, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(34, 197, 94, 0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(34, 197, 94, 0.12)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗄️</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1f2937' }}>Database & Tools</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'Git', 'Docker', 'VS Code', 'Android Studio'].map((skill, i) => (
                  <span key={i} style={{ 
                    background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.25)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(34, 197, 94, 0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.25)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">My Work Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-date">
                <span>June 2025 - Agust 2025</span>
              </div>
              <div className="experience-content">
                <div className="experience-company">PT Pos Satu Nusantara</div>
                <div className="experience-position">Software Engineer Intern</div>
                <div className="experience-location">Banten</div>
                <div className="experience-description">
                  <ul className="experience-list">
                    <li> Improved and maintained database structures using PostgreSQL to support business processes.</li>
                    <li> Developed and enhanced backend & frontend features with CodeIgniter, JavaScript, and PHP.</li>
                    <li> Collaborated in a team to deliver robust and scalable web solutions for company needs.</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Software Development</span>
                  <span className="skill-tag">Programming</span>
                  <span className="skill-tag">Team Collaboration</span>
                  <span className="skill-tag">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#f9fafb' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Projects</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 48px auto' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Project Card 1 - SSC Balige */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(31,38,135,0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.10)'
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <img src="ssc.png" alt="Sony Sugema College Information System" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1f2937', lineHeight: 1.3 }}>Sony Sugema College Information System</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>A comprehensive web-based learning management system for SSC Balige tutoring center. Features student portal, course materials, discussion forums, and administrative management.</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {['Laravel', 'MySQL', 'Tailwind CSS'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
                      color: '#4F46E5',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(79, 70, 229, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://www.figma.com/design/gXt5LCspBdJ0D0YjlHBDyo/SSC-Balige?node-id=0-1&p=f&t=vcGEZOEaEEZCoCWa-0" target="_blank" rel="noopener noreferrer" style={{
                    color: '#4F46E5',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: 'rgba(79, 70, 229, 0.1)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #4F46E5'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#4F46E5'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)'
                    e.currentTarget.style.color = '#4F46E5'
                  }}>
                    Figma Design
                  </a>
                  <a href="https://github.com/proyek-mahasiswa/psi-2425ge-04-ssc-balige/tree/development" target="_blank" rel="noopener noreferrer" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: '#1f2937',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #1f2937'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#111827'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1f2937'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 - ArsipSisfor */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(31,38,135,0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.10)'
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <img src="arsip.jpeg" alt="ArsipSisfor - Academic Document Management System" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1f2937', lineHeight: 1.3 }}>ArsipSisfor - Academic Document Management</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>A comprehensive cloud-based document management system similar to Google Drive, designed for IT Del Information Systems faculty and staff. Features secure storage and document organization.</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {['Laravel', 'PHP', 'MySQL', 'Postman API'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
                      color: '#4F46E5',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(79, 70, 229, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://www.figma.com/design/gNMr62rCiSlUsPqlOjrRVi/ArsipSI-hal-mahasiswa?node-id=0-1&p=f&t=jjlWWYocTb8RnQrl-0" target="_blank" rel="noopener noreferrer" style={{
                    color: '#4F46E5',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: 'rgba(79, 70, 229, 0.1)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #4F46E5'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#4F46E5'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)'
                    e.currentTarget.style.color = '#4F46E5'
                  }}>
                    Figma Design
                  </a>
                  <a href="https://github.com/agnesmosh241104/ArsipSisfor/tree/halaman_home" target="_blank" rel="noopener noreferrer" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: '#1f2937',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #1f2937'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#111827'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1f2937'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Portfolio */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(31,38,135,0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.10)'
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <img src="portofolio.png" alt="Portfolio Website" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1f2937', lineHeight: 1.3 }}>Portfolio Website</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>This very portfolio website! Built with React, TypeScript, and modern CSS. Features smooth animations, responsive design, and interactive components.</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {['React', 'TypeScript', 'CSS3'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
                      color: '#4F46E5',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(79, 70, 229, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#" style={{
                    color: '#4F46E5',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: 'rgba(79, 70, 229, 0.1)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #4F46E5'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#4F46E5'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)'
                    e.currentTarget.style.color = '#4F46E5'
                  }}>
                    Live Demo
                  </a>
                  <a href="https://github.com/Bronsonsiallagan/Bronson-DevPortfolio" target="_blank" rel="noopener noreferrer" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: '#1f2937',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #1f2937'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#111827'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1f2937'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 - Data Mining */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)'
              e.currentTarget.style.boxShadow = '0 20px 50px 0 rgba(31,38,135,0.20)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.10)'
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', position: 'relative' }}>
                <img src={dataMiningImages[dataMiningImageIndex]} alt="Data Mining - SVM Diabetes Prediction" style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'opacity 0.3s ease' }} />
                
                {/* Previous Button */}
                <button onClick={() => setDataMiningImageIndex(dataMiningImageIndex === 0 ? dataMiningImages.length - 1 : dataMiningImageIndex - 1)} style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s ease',
                  fontWeight: 'bold',
                  color: '#4F46E5'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)'
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.transform = 'translateY(-50%)'
                }}>
                  ❮
                </button>

                {/* Next Button */}
                <button onClick={() => setDataMiningImageIndex(dataMiningImageIndex === dataMiningImages.length - 1 ? 0 : dataMiningImageIndex + 1)} style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s ease',
                  fontWeight: 'bold',
                  color: '#4F46E5'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)'
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.transform = 'translateY(-50%)'
                }}>
                  ❯
                </button>

                {/* Indicator Dots */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}>
                  {dataMiningImages.map((_, i) => (
                    <button key={i} onClick={() => setDataMiningImageIndex(i)} style={{
                      width: dataMiningImageIndex === i ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: dataMiningImageIndex === i ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      if (dataMiningImageIndex !== i) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (dataMiningImageIndex !== i) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'
                      }
                    }} />
                  ))}
                </div>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1f2937', lineHeight: 1.3 }}>SVM Model for Diabetes Diagnosis & Verification Cost Estimation</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>Application of SVM Model to Predict Diabetes Mellitus Diagnosis and Estimate Verification Costs in BPJS Users. Using machine learning for accurate and efficient diagnosis.</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {['Python', 'Google Colab', 'SVM', 'Machine Learning', 'Deployment'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
                      color: '#4F46E5',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(79, 70, 229, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/ReinhardBatubara/BPPJS-Hackaton" target="_blank" rel="noopener noreferrer" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    background: '#1f2937',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid #1f2937'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#111827'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1f2937'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#f9fafb' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get In Touch</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 48px auto' }}></div>
          
          <div className="contact-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <p className="contact-description" style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '1rem', maxWidth: 600, lineHeight: 1.7 }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out! 🚀
            </p>
            
            {/* Contact Buttons Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1000px', width: '100%' }}>
              {/* Email */}
              <a href="mailto:bronsonsiallagan18@gmail.com" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px 0 rgba(79, 70, 229, 0.12)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.20)'
                  e.currentTarget.style.borderColor = '#4F46E5'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(79, 70, 229, 0.12)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>📧</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>Email</div>
                    <div style={{ color: '#4F46E5', fontWeight: 600, fontSize: '0.95rem' }}>bronsonsiallagan18@gmail.com</div>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/6281373026305" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px 0 rgba(79, 70, 229, 0.12)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.20)'
                  e.currentTarget.style.borderColor = '#25D366'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(79, 70, 229, 0.12)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>💬</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>WhatsApp</div>
                    <div style={{ color: '#25D366', fontWeight: 600, fontSize: '0.95rem' }}>+62 813-7302-6305</div>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/bronson_siallagan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px 0 rgba(79, 70, 229, 0.12)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.20)'
                  e.currentTarget.style.borderColor = '#E4405F'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(79, 70, 229, 0.12)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>📸</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>Instagram</div>
                    <div style={{ color: '#E4405F', fontWeight: 600, fontSize: '0.95rem' }}>@bronson_siallagan</div>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/bronsonsiallagan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px 0 rgba(79, 70, 229, 0.12)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.20)'
                  e.currentTarget.style.borderColor = '#0A66C2'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(79, 70, 229, 0.12)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>💼</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>LinkedIn</div>
                    <div style={{ color: '#0A66C2', fontWeight: 600, fontSize: '0.95rem' }}>Bronson Siallagan</div>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Bronsonsiallagan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px 0 rgba(79, 70, 229, 0.12)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(79, 70, 229, 0.20)'
                  e.currentTarget.style.borderColor = '#1F2937'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(79, 70, 229, 0.12)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>🐙</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '0.3rem' }}>GitHub</div>
                    <div style={{ color: '#1F2937', fontWeight: 600, fontSize: '0.95rem' }}>Bronsonsiallagan</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Resume & Portfolio Download Section */}
            <div className="resume-portfolio-section" style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #06b6d4 100%)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(79, 70, 229, 0.25)',
              padding: '2.5rem',
              marginTop: '2rem',
              textAlign: 'center',
              maxWidth: 500,
              width: '100%'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.8rem', color: '#fff' }}>Get My Resume</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Download my CV to learn more about my experience and qualifications</p>
              <a href="Bronson TM Siallagan.pdf" download="Bronson-TM-Siallagan-CV.pdf" className="download-btn" style={{
                display: 'inline-block',
                background: '#fff',
                color: '#4F46E5',
                fontWeight: 700,
                borderRadius: '12px',
                padding: '1rem 2rem',
                fontSize: '1rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                border: 'none',
                textAlign: 'center',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)'
              }}>
                ⬇️ Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}

export default App
