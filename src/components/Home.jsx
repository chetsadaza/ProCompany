import { useState } from 'react'
import './Home.css'

const navItems = [
  { label: 'หน้าแรก', href: '#hero' },
  { label: 'เกี่ยวกับเรา', href: '#services' },
  { label: 'บริการ', href: '#services' },
  { label: 'ผลงาน', href: '#blog' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

const heroTrustCards = [
  { value: '100%', label: 'ทำงานจริงจัง', icon: 'bolt', color: 'purple' },
  { value: '10+', label: 'ผู้เชี่ยวชาญ', icon: 'experts', color: 'green' },
  { value: 'คุณภาพ', label: 'ประกันผลงาน', icon: 'shield', color: 'pink' },
]

const carouselImages = ['/carousel/1.png', '/carousel/2.png', '/carousel/3.png']

const mainServices = [
  {
    title: 'AI Solutions',
    desc: 'โซลูชันปัญญาประดิษฐ์',
    icon: '🧠',
  },
  {
    title: 'Digital Marketing',
    desc: 'การตลาดออนไลน์ครบวงจร',
    icon: '📱',
  },
  {
    title: 'Cyber Security',
    desc: 'ความปลอดภัยไซเบอร์',
    icon: '🔒',
  },
  {
    title: 'Automation',
    desc: 'ระบบอัตโนมัติ',
    icon: '⚙️',
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

  return (
    <div className="home">
      {/* Navigation */}
      <header className="header">
        <div className="header-inner">
          <a href="#hero" className="logo-text">CDM</a>
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
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
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
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              ผู้นำด้าน <span className="hero-title-accent">AI</span> การตลาด & เทคโนโลยี
            </h1>
            <p className="hero-desc">
              นำเสนอโซลูชัน AI, Digital Marketing, Cyber Security และ Automation เพื่อยกระดับธุรกิจของคุณสู่อนาคต
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="cta-primary">ปรึกษาฟรี</a>
              <a href="#services" className="cta-secondary">ดูโซลูชัน</a>
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
                <span className="hero-trust-icon" data-icon={card.icon} aria-hidden="true" />
                <div className="hero-trust-text">
                  <span className="hero-trust-value">{card.value}</span>
                  <span className="hero-trust-label">{card.label}</span>
                </div>
              </div>
            ))}
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
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section id="services" className="section section-categories">
        <div className="container">
          <h2 className="section-title">ประเภทบริการ</h2>
          <div className="categories-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="categories-note">
            Digital Marketing ครอบคลุมในหน้า Services
          </p>
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
              <article key={i} className="blog-card">
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
            ปรึกษาฟรีดูโซลูชัน
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
