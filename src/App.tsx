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
        <div className="hero-content">
          <div className="hero-image">
            <div className="glow-effect"></div>
            <img src="/brons.png" alt="Bronson Siallagan" className="profile-image" />
          </div>
          <h1 className="hero-title">Hi, I'm <span className="highlight">Bronson TM Siallagan</span></h1>
          <p className="hero-subtitle">Full Stack Developer & Software Engineer</p>
          <p className="hero-description">
            I create modern, responsive web applications using cutting-edge technologies.
            Passionate about clean code, user experience, and continuous learning.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">View My Work</button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">Get In Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="/brons.png" alt="Bronson Siallagan" className="about-profile-image" />
            </div>
            <div className="about-text">
              <p>
                I'm a passionate software developer with a strong foundation in both frontend and backend technologies.
                Currently pursuing my studies while building real-world applications and continuously expanding my skill set.
              </p>
              <p>
                I enjoy solving complex problems, learning new technologies, and creating user-friendly applications
                that make a difference. When I'm not coding, you can find me exploring new tech trends or working on personal projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">CI</span>
                <span className="skill-tag">Flutter and dark</span>

              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Mysql</span>

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
                <div className="experience-location">📍 Indonesia</div>
                <div className="experience-description">
                  <p>Internship program as a Programmer Software Engineer where I gained hands-on experience in software development and engineering practices.</p>
                  <ul>
                    <li>Developed and maintained software applications</li>
                    <li>Collaborated with senior developers on various projects</li>
                    <li>Learned industry best practices and coding standards</li>
                    <li>Participated in code reviews and team meetings</li>
                    <li>Gained experience with software development lifecycle</li>
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
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              Feel free to reach out!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:bronson@example.com">bronson@example.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://linkedin.com/in/bronsonsiallagan" target="_blank">LinkedIn</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <a href="https://github.com/bronsonsiallagan" target="_blank">GitHub</a>
              </div>
            </div>
            
            {/* Resume & Portfolio Download Section */}
            <div className="resume-portfolio-section">
              <h3>📄 Resume & Portfolio</h3>
              <div className="download-buttons">
                <a href="/Bronson TM Siallagan.pdf" download="Bronson-TM-Siallagan-CV.pdf" className="download-btn">
                  Download My Resume
                </a>
                <a href="/portfolio-bronson-siallagan.pdf" download="Portfolio-Bronson-Siallagan.pdf" className="download-btn">
                  Download My Portfolio
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
