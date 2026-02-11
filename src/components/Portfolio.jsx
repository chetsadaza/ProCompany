import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
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

const MAGNETIC_STRENGTH = 0.22
const MAGNETIC_CLAMP = 10

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [magnetic, setMagnetic] = useState({})
  const buttonRefs = useRef([])
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, amount: 0.15 })

  const handleCardMouseMove = (e, index) => {
    const btn = buttonRefs.current[index]
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    let dx = (e.clientX - cx) * MAGNETIC_STRENGTH
    let dy = (e.clientY - cy) * MAGNETIC_STRENGTH
    dx = Math.max(-MAGNETIC_CLAMP, Math.min(MAGNETIC_CLAMP, dx))
    dy = Math.max(-MAGNETIC_CLAMP, Math.min(MAGNETIC_CLAMP, dy))
    setMagnetic((prev) => ({ ...prev, [index]: { x: dx, y: dy } }))
  }

  const handleCardMouseLeave = () => {
    setMagnetic({})
  }

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

      {/* Hero + Grid with spotlight */}
      <div className="portfolio-spotlight-wrap">
        <div className="portfolio-spotlight" aria-hidden="true" />
        <section className="portfolio-hero">
          <div className="container">
            <motion.h1
              className="portfolio-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              ผลงานของเรา
            </motion.h1>
            <motion.p
              className="portfolio-subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              ชมโปรเจคและโซลูชันที่เราพัฒนา สำหรับลูกค้าทั่วโลก
            </motion.p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="section section-portfolio-grid">
        <div className="container">
          <div className="portfolio-grid" ref={gridRef}>
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="portfolio-card"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="portfolio-card-mesh" aria-hidden="true" />
                <div className="portfolio-card-inner">
                  <div className="portfolio-card-header">
                    <span className="portfolio-card-tag">
                      <span className="portfolio-card-tag-main">{project.category}</span>
                      <span className="portfolio-card-tag-sub">{project.tag}</span>
                    </span>
                    <div className="portfolio-card-title-wrap">
                      <h2 className="portfolio-card-title">{project.title}</h2>
                    </div>
                    <p className="portfolio-card-desc">{project.desc}</p>
                  </div>
                  <div className="portfolio-card-footer">
                    <button
                      type="button"
                      className="portfolio-card-cta"
                      ref={(el) => (buttonRefs.current[index] = el)}
                      style={{
                        transform: magnetic[index]
                          ? `translate(${magnetic[index].x}px, ${magnetic[index].y}px)`
                          : undefined,
                      }}
                    >
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        </section>
      </div>

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

