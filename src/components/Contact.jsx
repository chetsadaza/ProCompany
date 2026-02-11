import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import './Contact.css'

const navItems = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
  { label: 'บริการ', href: '/services' },
  { label: 'ผลงาน', href: '/portfolio' },
  { label: 'ติดต่อเรา', href: '/contact' },
]

const solutionOptions = [
  'เลือกโซลูชัน',
  'AI & Technology',
  'Digital Marketing',
  'Cyber Security',
  'Automation',
  'อื่นๆ',
]

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    solution: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send to backend or email service
    console.log('Contact form:', formData)
  }

  return (
    <div className="home contact-page">
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
            <a href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              ปรึกษาฟรี
            </a>
          </nav>
        </div>
      </header>

      <section className="contact-hero">
        <div className="container">
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ติดต่อเรา
          </motion.h1>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            พูดคุยกับทีมผู้เชี่ยวชาญ และรับคำปรึกษาโซลูชันที่เหมาะสมฟรี
          </motion.p>
        </div>
      </section>

      <section id="form" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <h2 className="contact-form-heading">ส่งข้อความถึงเรา</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-label">
                  ชื่อ-นามสกุล <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="contact-input"
                  placeholder="กรอกชื่อของคุณ"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="contact-label">
                  อีเมล <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="contact-label">
                  เบอร์โทร <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="contact-input"
                  placeholder="0x-xxxx-xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label className="contact-label">โซลูชันที่สนใจ</label>
                <select
                  name="solution"
                  className="contact-input contact-select"
                  value={formData.solution}
                  onChange={handleChange}
                >
                  {solutionOptions.map((opt) => (
                    <option key={opt} value={opt === 'เลือกโซลูชัน' ? '' : opt} disabled={opt === 'เลือกโซลูชัน'}>
                      {opt}
                    </option>
                  ))}
                </select>
                <label className="contact-label">
                  รายละเอียด <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder="บอกเราเพิ่มเติมเกี่ยวกับโปรเจคของคุณ..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="contact-submit">
                  ส่งข้อความ
                </button>
                <p className="contact-form-note">
                  เราจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </form>
            </div>

            <div className="contact-info-wrap">
              <h2 className="contact-info-heading">ข้อมูลติดต่อ</h2>
              <div className="contact-info-block">
                <h3 className="contact-info-label">ที่อยู่</h3>
                <p className="contact-info-text">
                  376 หมู่ที่ 15 ตำบลสามพร้าว<br />
                  อำเภอเมืองอุดรธานี จ.อุดรธานี 41000
                </p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">LINE Official</h3>
                <a
                  href="https://line.me/ti/p/~658fozjl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-line-link"
                >
                  @658fozjl
                </a>
                <span className="contact-line-hint">คลิกเพื่อเพิ่มเพื่อน</span>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">เวลาทำการ</h3>
                <p className="contact-info-text">
                  จันทร์ - ศุกร์: 9:00 - 18:00<br />
                  เสาร์: 9:00 - 15:00<br />
                  อาทิตย์: ปิดทำการ
                </p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">ติดตามเราได้ที่</h3>
                <div className="contact-social">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">Facebook</a>
                  <a href="https://line.me/ti/p/~658fozjl" target="_blank" rel="noopener noreferrer" className="contact-social-link">LINE @</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
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
