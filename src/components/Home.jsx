import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const navItems = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
  { label: 'บริการ', href: '#services' },
  { label: 'ผลงาน', href: '#blog' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

const heroTrustCards = [
  { value: '100%', label: 'ทำงานจริงจัง', icon: '/GIF/checklist.gif', color: 'purple' },
  { value: '10+', label: 'ผู้เชี่ยวชาญ', icon: '/GIF/handshake.gif', color: 'green' },
  { value: 'คุณภาพ', label: 'ประกันผลงาน', icon: '/GIF/award.gif', color: 'pink' },
]

const carouselImages = ['/carousel/1.png', '/carousel/2.png', '/carousel/3.png']

const mainServices = [
  {
    title: 'AI Solutions',
    desc: 'โซลูชันปัญญาประดิษฐ์',
    icon: '🧠',
    image: '/services/ai.jpg',
  },
  {
    title: 'Digital Marketing',
    desc: 'การตลาดออนไลน์ครบวงจร',
    icon: '📱',
    image: '/services/marketing.jpg',
  },
  {
    title: 'Cyber Security',
    desc: 'ความปลอดภัยไซเบอร์',
    icon: '🔒',
    image: '/services/security.jpg',
  },
  {
    title: 'Automation',
    desc: 'ระบบอัตโนมัติ',
    icon: '⚙️',
    image: '/services/automation.jpg',
  },
  {
    title: 'Specialist',
    desc: 'ทีมวิทยากรที่มีประสบการณ์ตรงและผ่านการทำงานจริง',
    icon: '👨‍🏫',
    image: '/services/professional expert.jpg',
  },
  {
    title: 'Monitoring & Support',
    desc: 'มีการติดตามและให้คำปรึกษาหลังการอบรม',
    icon: '📊',
    image: '/services/Follow up.jpg',
  },
]

const stats = [
  { value: '50+', label: 'ลูกค้า' },
  { value: '100+', label: 'โปรเจกต์' },
  { value: '5+', label: 'ปีประสบการณ์' },
]

const serviceCategories = [
  {
    icon: '🧠',
    title: 'AI & Technology',
    items: ['Machine Learning', 'AI Chatbot', 'ใช้ช่วยธุรกิจให้ฉลาดขึ้น'],
  },
  {
    icon: '🔒',
    title: 'Cyber Security',
    items: ['โซลูชันป้องกันข้อมูลและระบบ', 'ป้องกันภัยไซเบอร์ให้กับองค์กร'],
  },
  {
    icon: '⚙️',
    title: 'Automation',
    items: ['ระบบอัตโนมัติช่วยงานเร็วขึ้น', 'ประหยัดเวลาและค่าใช้จ่าย'],
  },
]

const blogPosts = [
  {
    category: 'AI Solutions',
    categoryTag: '[AI Solutions]',
    title: '5 วิธีใช้ AI เพิ่มยอดขายในปี 2026',
    excerpt: 'เรียนรู้วิธีการนำระบบ Automation มาปรับใช้กับเซลล์ขายของคุณให้ได้ผลลัพธ์ที่วัดผลได้',
    date: '8 ก.พ. 2026',
    author: 'ทีม CDM',
    ctaLead: 'สนใจนำ AI ไปใช้ในธุรกิจ?',
  },
  {
    category: 'Digital Marketing',
    categoryTag: '[Digital Marketing]',
    title: 'เจาะลึกอัลกอริทึมยิงแอด 2024-2026',
    excerpt: 'เทคนิคการปรับตัวเมื่อค่าโฆษณาแพงขึ้น แต่ประสิทธิภาพต้องเท่าเดิม เพื่อรักษา ROAS ให้ธุรกิจ',
    date: '5 ก.พ. 2026',
    author: 'ทีม CDM',
    ctaLead: 'อยากยิงแอดให้ได้ผล?',
  },
  {
    category: 'Cyber Security',
    categoryTag: '[Cyber Security]',
    title: 'ป้องกันข้อมูลธุรกิจจากการโจมตีไซเบอร์',
    excerpt: 'ทำไมธุรกิจ SME ถึงเป็นเป้าหมายหลัก และวิธีป้องกันเบื้องต้นที่ทำได้ทันที',
    date: '1 ก.พ. 2026',
    author: 'ทีม CDM',
    ctaLead: 'อยากป้องกันข้อมูลองค์กร?',
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.service-card, .ai-content, .ai-image-wrapper, .cyber-content, .cyber-image-wrapper, .automation-content, .automation-image-wrapper, .blog-card')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      {/* Navigation */}
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo-text">CDM</Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="เมนู"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              ปรึกษาฟรี
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              ผู้นำด้าน <span className="hero-title-accent">AI</span><br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>การตลาด & เทคโนโลยี</span>
            </h1>
            <p className="hero-desc">
              นำเสนอโซลูชัน AI, Digital Marketing, Cyber Security และ Automation เพื่อยกระดับธุรกิจของคุณสู่อนาคต
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="cta-primary">ปรึกษาฟรี</a>
              <a href="#services" className="cta-secondary">Solution</a>
            </div>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-cards">
            {heroTrustCards.map((card) => (
              <div key={card.label} className={`hero-trust-card hero-trust-card--${card.color}`}>
                <div className="hero-trust-icon-wrapper">
                  {card.icon.endsWith('.gif') ? (
                    <img src={card.icon} alt="" className="hero-trust-gif" />
                  ) : (
                    <span className="hero-trust-icon" data-icon={card.icon} aria-hidden="true" />
                  )}
                </div>
                <div className="hero-trust-text">
                  <span className="hero-trust-value">{card.value}</span>
                  <span className="hero-trust-label">{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-trusted">
          <h2 className="hero-trusted-title">ลูกค้าที่ไว้วางใจเรา</h2>
          <p className="hero-trusted-sub">ร่วมงานกับองค์กรและธุรกิจต่างๆ</p>
          <div className="hero-carousel" aria-hidden="true">
            <div className="hero-carousel-track">
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <div key={i} className="hero-carousel-item">
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services intro */}
      <section className="section section-services-intro">
        <div className="container">
          <h2 className="section-title">บริการหลักของเรา</h2>
          <p className="section-desc">
            บริการช่วยให้ธุรกิจเติบโตและทันยุคดิจิทัล
          </p>
          <div className="services-grid">
            {mainServices.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-card-image">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="service-card-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* AI Solutions */}
      <section id="ai-solutions" className="section section-ai-solutions">
        <div className="container">
          <div className="ai-solutions-grid">
            <div className="ai-content">
              <span className="ai-badge">
                <span className="ai-badge-icon">⚛</span> Artificial Intelligence
              </span>
              <h2 className="ai-title">
                AI Solutions <br />
                <span className="text-gradient">ที่ล้ำหน้า</span>
              </h2>
              <p className="ai-desc">
                ผู้นำด้านโซลูชัน AI และ Machine Learning ที่ช่วยให้ธุรกิจ ของคุณฉลาดขึ้น
                แม่นยำขึ้น และเติบโตอย่างยั่งยืน
              </p>

              <div className="ai-features">
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4A2.5 2.5 0 0 0 14.5 2Z" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                      <circle cx="12" cy="6" r="1" fill="currentColor" stroke="none" />
                      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Machine Learning</h3>
                    <p>วิเคราะห์ข้อมูลอัจฉริยะ</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>AI Chatbot</h3>
                    <p>ตอบคำถามลูกค้าอัตโนมัติ</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13l-4 4-2-2-2 2" />
                      <path d="m8 13 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Predictive Analytics</h3>
                    <p>ใชช่วยธุรกิจให้ฉลาดขึ้น</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" opacity="0.1" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                      <text x="12" y="15" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">AI</text>
                    </svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>AI Tools</h3>
                    <p>เครื่องมือ AI สำหรับการตลาด</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="cta-primary">
                รับคำปรึกษาฟรี
              </a>
            </div>

            <div className="ai-image-wrapper">
              <div className="ai-image-container">
                <img
                  src="/services/AI And Technology.jpg"
                  alt="AI Solutions"
                  className="ai-main-image"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security */}
      <section id="cyber-security" className="section section-cyber-security">
        <div className="container">
          <div className="cyber-solutions-grid">
            <div className="cyber-image-wrapper">
              <div className="ai-image-container">
                <img
                  src="/services/securityCyber Security.jpg"
                  alt="Cyber Security"
                  className="ai-main-image"
                />
              </div>
            </div>

            <div className="cyber-content">
              <span className="ai-badge cyber-badge">
                <span className="ai-badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.9 14.41L6.75 13.06l1.41-1.41 1.94 1.94 5.25-5.25 1.41 1.41-6.66 6.66z" />
                  </svg>
                </span> Cyber Security
              </span>
              <h2 className="ai-title">
                Cyber Security <br />
                <span className="text-gradient cyber-text-gradient">ระดับมืออาชีพ</span>
              </h2>
              <p className="ai-desc">
                ผู้นำด้านโซลูชันรักษาความปลอดภัยออนไลน์ ปกป้องธุรกิจและข้อมูล
                ด้วยเทคโนโลยีล้ำสมัยและมาตรฐานระดับสากล
              </p>

              <div className="ai-features">
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Risk Assessment</h3>
                    <p>วิเคราะห์และประเมินช่องโหว่ด้านความปลอดภัย</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Preventive Measures</h3>
                    <p>แนะนำระบบรักษาความปลอดภัยที่เหมาะสม</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Data Protection</h3>
                    <p>ปกป้องข้อมูลสำคัญจากการโจรกรรม</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Incident Response</h3>
                    <p>วางแผนรับมือเหตุการณ์ด้านความปลอดภัย</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="cta-primary cyber-cta">
                รับคำปรึกษาฟรี
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section id="automation" className="section section-automation">
        <div className="container">
          <div className="ai-solutions-grid automation-grid">
            <div className="automation-content">
              <span className="ai-badge automation-badge">
                <span className="ai-badge-icon">⚙️</span> Automation
              </span>
              <h2 className="ai-title">
                Automation <br />
                <span className="text-gradient automation-text-gradient">ระดับองค์กร</span>
              </h2>
              <p className="ai-desc">
                ผู้เชี่ยวชาญด้านระบบอัตโนมัติที่ช่วยเพิ่มประสิทธิภาพการทำงาน ลดต้นทุน
                และยกระดับธุรกิจด้วยเทคโนโลยีอัจฉริยะ
              </p>

              <div className="ai-features">
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 7 5 9"></path><path d="M16 2 9 9"></path><path d="M9 22 16 15"></path><circle cx="6.5" cy="11.5" r="2.5"></circle><path d="m14.31 16 5.74-7.94"></path><path d="m20.05 17.94-5.74-7.94"></path><circle cx="15" cy="7" r="3"></circle></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>ทำงานเร็วขึ้น</h3>
                    <p>ประหยัดเวลาด้วยระบบอัตโนมัติ</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>เพิ่มประสิทธิภาพ</h3>
                    <p>ลดข้อผิดพลาดและเพิ่มความแม่นยำ</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>ประหยัดต้นทุน</h3>
                    <p>ลดค่าใช้จ่ายในระยะยาว</p>
                  </div>
                </div>
                <div className="ai-feature-card">
                  <div className="ai-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"></path><path d="M9 12H4v3"></path><path d="M15 12h5v-3"></path><path d="M4 17v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"></path><path d="M9 7v5l5 5h5"></path></svg>
                  </div>
                  <div className="ai-feature-text">
                    <h3>Workflow Design</h3>
                    <p>ออกแบบกระบวนการที่เหมาะสม</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="cta-primary automation-cta">
                รับคำปรึกษาฟรี
              </a>
            </div>

            <div className="automation-image-wrapper">
              <div className="ai-image-container">
                <img
                  src="/services/automation1.jpg"
                  alt="Automation"
                  className="ai-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Knowledge */}
      <section id="blog" className="section section-blog">
        <div className="container">
          <header className="blog-header">
            <h2 className="blog-title">อัปเดตเทรนด์การตลาดและนวัตกรรม AI</h2>
            <p className="blog-subtitle">
              เจาะลึกกลยุทธ์ Digital Marketing, Cyber Security และ Automation เพื่อก้าวให้ทันโลกยุคดิจิทัล
            </p>
          </header>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className={`blog-card ${i === 0 ? 'blog-card--left' :
                  i === 1 ? 'blog-card--middle' :
                    'blog-card--right'
                  }`}
              >
                <div className="blog-card-image" aria-hidden="true" />
                <span className="blog-card-tag">{post.categoryTag}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <a href="#contact" className="blog-card-cta">
                  {post.ctaLead} <strong>ปรึกษาเรา</strong>
                </a>
              </article>
            ))}
          </div>
          <div className="blog-actions">
            <a href="/blog" className="cta-primary cta-outline">
              อ่านบทความทั้งหมด
            </a>
          </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section id="contact" className="section section-cta">
        <div className="container">
          <h2 className="section-title">พร้อมพัฒนาธุรกิจด้วยกันไหม?</h2>
          <p className="section-desc">
            ติดต่อเราเพื่อปรึกษาฟรีและดูโซลูชันที่เหมาะกับธุรกิจคุณ
          </p>
          <a href="#contact" className="cta-primary cta-large">
            ปรึกษาฟรี
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</p>
        </div>
      </footer>
    </div>
  )
}
