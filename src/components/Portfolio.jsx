import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import './Portfolio.css'
import NumberCounter from './NumberCounter'

const navItems = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
  { label: 'บริการ', href: '/services' },
  { label: 'ผลงาน', href: '/portfolio' },
  { label: 'ติดต่อเรา', href: '/#contact' },
]

const projects = [
  {
    category: 'เว็บไซต์ E-Commerce',
    tag: 'Web Development',
    title: 'เว็บไซต์ E-Commerce',
    desc: 'ออกแบบและพัฒนาเว็บไซต์อีคอมเมิร์ซสำหรับร้านค้าออนไลน์',
  },
  {
    category: 'แคมเปญโซเชียลมีเดีย',
    tag: 'Social Media',
    title: 'แคมเปญโซเชียลมีเดีย',
    desc: 'สร้างคอนเทนต์และบริหารโซเชียลมีเดียให้แบรนด์เครื่องสำอาง',
  },
  {
    category: 'บทความ Blog SEO',
    tag: 'Content Creation',
    title: 'บทความ Blog SEO',
    desc: 'เขียนบทความและเนื้อหาสำหรับเว็บไซต์ท่องเที่ยว',
  },
  {
    category: 'โฆษณา Google Ads',
    tag: 'Digital Marketing',
    title: 'โฆษณา Google Ads',
    desc: 'ดูแลและบริหารโฆษณาออนไลน์สำหรับธุรกิจอสังหาริมทรัพย์',
  },
  {
    category: 'ถ่ายภาพสินค้า',
    tag: 'Photography',
    title: 'ถ่ายภาพสินค้า',
    desc: 'ถ่ายภาพผลิตภัณฑ์และสร้างคอนเทนต์สำหรับแบรนด์แฟชั่น',
  },
  {
    category: 'วิดีโอโฆษณา',
    tag: 'Video Production',
    title: 'วิดีโอโฆษณา',
    desc: 'สร้างวิดีโอโฆษณาสำหรับแคมเปญเปิดตัวสินค้าใหม่',
  },
]

const portfolioStats = [
  { value: 100, suffix: '+', label: 'โปรเจคที่สำเร็จ' },
  { value: 50, suffix: '+', label: 'ลูกค้า' },
  { value: 5, suffix: '+', label: 'ปีประสบการณ์' },
  { value: 10, suffix: '+', label: 'ผู้เชี่ยวชาญ' },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="home portfolio-page">
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
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="/#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              ปรึกษาฟรี
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">ผลงานของเรา</h1>
          <p className="portfolio-subtitle">
            ชมโปรเจคและโซลูชันที่เราพัฒนา สำหรับลูกค้าทั่วโลก
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section section-portfolio-grid">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <article key={project.title} className="portfolio-card">
                <div className="portfolio-card-header">
                  <span className="portfolio-card-tag">
                    <span className="portfolio-card-tag-main">{project.category}</span>
                    <span className="portfolio-card-tag-sub">{project.tag}</span>
                  </span>
                  <h2 className="portfolio-card-title">{project.title}</h2>
                  <p className="portfolio-card-desc">{project.desc}</p>
                </div>
                <div className="portfolio-card-footer">
                  <button type="button" className="portfolio-card-cta">
                    ดูรายละเอียด
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section portfolio-stats-section">
        <div className="container">
          <h2 className="section-title">ผลงานที่ผ่านมา</h2>
          <p className="section-desc">
            ประสบการณ์ที่สร้างความสำเร็จให้กับลูกค้าหลากหลายอุตสาหกรรม
          </p>
          <div className="portfolio-stats-grid">
            {portfolioStats.map((stat) => (
              <div key={stat.label} className="portfolio-stat-card">
                <div className="portfolio-stat-value">
                  <NumberCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="portfolio-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section portfolio-cta-section">
        <div className="container">
          <h2 className="section-title">พร้อมสร้างโซลูชันสำหรับธุรกิจคุณ?</h2>
          <p className="section-desc">
            ปรึกษาฟรี! พูดคุยกับทีมผู้เชี่ยวชาญวันนี้
          </p>
          <a href="/#contact" className="cta-primary cta-large">
            รับคำปรึกษาฟรี
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

