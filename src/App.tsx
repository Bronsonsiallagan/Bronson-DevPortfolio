import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

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
            <p className="hero-subtitle" style={{ fontSize: '1.45rem', fontWeight: 600, color: '#555', marginBottom: '0.5rem' }}>Full Stack Developer & Software Engineer</p>
            <p className="hero-description" style={{ fontSize: '1.13rem', color: '#666', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              I create modern, responsive web applications using cutting-edge technologies.<br />
              Passionate about clean code, user experience, and continuous learning.
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
                Hi! I’m <span style={{ color: '#4F46E5', fontWeight: 700 }}>Bronson TM Siallagan</span>, an Information Systems student at <span style={{ color: '#06b6d4', fontWeight: 600 }}>IT Del</span> with a strong passion for technology and software development. I’m highly enthusiastic about building impactful digital solutions, especially in the roles of Mobile Developer, Software Engineer, Full Stack Developer, and Backend Developer.
              </p>
              <p style={{ fontSize: '1.13rem', marginBottom: 0, lineHeight: 1.7 }}>
                I love exploring new technologies, solving real-world problems, and continuously improving my skills through hands-on projects. My journey is driven by curiosity, collaboration, and a commitment to delivering high-quality, user-focused applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '1px', textAlign: 'center', marginBottom: '0.7rem' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills & Technologies</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 24px auto' }}></div>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Frontend Card */}
            <div style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', padding: '2rem 2.2rem', minWidth: '270px', maxWidth: '340px', flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}> <span role="img" aria-label="frontend">🎨</span> Frontend</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">Code igniter</span>
                <span className="skill-tag">Flutter and dark</span>
              </div>
            </div>
            {/* Backend Card */}
            <div style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', padding: '2rem 2.2rem', minWidth: '270px', maxWidth: '340px', flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}> <span role="img" aria-label="backend">🛠️</span> Backend</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            {/* Database & Tools Card */}
            <div style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)', padding: '2rem 2.2rem', minWidth: '270px', maxWidth: '340px', flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}> <span role="img" aria-label="database">💾</span> Database & Tools</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Mysql</span>
                <span className="skill-tag">Android Studio</span>
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
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects Experiences</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🎓</div>
              </div>
              <div className="project-content">
                <h3>Sony Sugema College Information System</h3>
                <p>A comprehensive web-based learning management system for SSC Balige tutoring center. Features student portal, course materials, discussion forums, and administrative management with role-based access control.</p>
                <div className="project-tech">
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="project-links">
                  <a href="https://www.figma.com/design/gXt5LCspBdJ0D0YjlHBDyo/SSC-Balige?node-id=0-1&p=f&t=vcGEZOEaEEZCoCWa-0" target="_blank" className="project-link">Figma Design</a>
                  <a href="https://github.com/proyek-mahasiswa/psi-2425ge-04-ssc-balige/tree/development" target="_blank" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🗂️</div>
              </div>
              <div className="project-content">
                <h3>ArsipSisfor - Academic Document Management System</h3>
                <p>A comprehensive cloud-based document management system similar to Google Drive, designed specifically for IT Del Information Systems faculty and staff. Features secure file storage, categorized document organization, and favorite marking system.</p>
                <div className="project-tech">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>Postman API</span>
                </div>
                <div className="project-links">
                  <a href="https://www.figma.com/design/gNMr62rCiSlUsPqlOjrRVi/ArsipSI-hal-mahasiswa?node-id=0-1&p=f&t=jjlWWYocTb8RnQrl-0" target="_blank" className="project-link">Figma Design</a>
                  <a href="https://github.com/agnesmosh241104/ArsipSisfor/tree/halaman_home" target="_blank" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🎨</div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>This very portfolio website! Built with React, TypeScript, and modern CSS. Features smooth animations and responsive design.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '1px', textAlign: 'center', marginBottom: '0.7rem' }}>
            <span style={{ color: '#4F46E5', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get In Touch</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', borderRadius: '2px', margin: '0 auto 24px auto' }}></div>
          <div className="contact-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            <p className="contact-description" style={{ fontSize: '1.18rem', color: '#444', textAlign: 'center', marginBottom: '1.5rem', maxWidth: 600 }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. <br/>Feel free to reach out!
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <a href="mailto:bronson@example.com" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.2rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#4F46E5', fontSize: '1.08rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 32px 0 rgba(31,38,135,0.13)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(31,38,135,0.10)';}}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span> bronsonsiallagan18@gmail.com
                </div>
              </a>
              <a href="https://wa.me/6281373026305" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.2rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#4F46E5', fontSize: '1.08rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 32px 0 rgba(31,38,135,0.13)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(31,38,135,0.10)';}}>
                  <span style={{ fontSize: '1.5rem' }}>�</span> WhatsApp
                </div>
              </a>
              <a href="https://instagram.com/bronson_siallagan" target="_blank" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.2rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#4F46E5', fontSize: '1.08rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 32px 0 rgba(31,38,135,0.13)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(31,38,135,0.10)';}}>
                  <span style={{ fontSize: '1.5rem' }}>📸</span> bronson_siallagan
                </div>
              </a>
              <a href="https://linkedin.com/in/bronsonsiallagan" target="_blank" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.2rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#4F46E5', fontSize: '1.08rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 32px 0 rgba(31,38,135,0.13)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(31,38,135,0.10)';}}>
                  <span style={{ fontSize: '1.5rem' }}>�</span> LinkedIn
                </div> 
              </a>
              <a href="https://github.com/bronsonsiallagan" target="_blank" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.2rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#4F46E5', fontSize: '1.08rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 32px 0 rgba(31,38,135,0.13)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(31,38,135,0.10)';}}>
                  <span style={{ fontSize: '1.5rem' }}>🐙</span> GitHub
                </div>
              </a>
            </div>
            {/* Resume & Portfolio Download Section */}
            <div className="resume-portfolio-section" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)', padding: '1.5rem 2rem', marginTop: '1.5rem', textAlign: 'center', maxWidth: 420, width: '100%' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.18rem', marginBottom: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: '#444' }}>📄 Resume & Portfolio</h3>
              <div className="download-buttons">
                <a href="/CV Bronson TM Siallagan.pdf" download="Bronson-TM-Siallagan-CV.pdf" className="download-btn" style={{ display: 'block', background: 'linear-gradient(90deg, #4F46E5 40%, #06b6d4 100%)', color: '#fff', fontWeight: 700, borderRadius: '10px', padding: '0.9rem 0', fontSize: '1.08rem', margin: '0 auto', width: '90%', boxShadow: '0 2px 8px 0 rgba(31,38,135,0.08)', transition: 'background 0.2s, transform 0.2s', border: 'none', textAlign: 'center', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='none'}>
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bronson Siallagan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
