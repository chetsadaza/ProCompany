import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../Home/Home.css'
import './Contact.css'
import Footer from '../../components/Footer/Footer'

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
                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.h1
                            className="contact-title"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            ติดต่อเรา
                        </motion.h1>
                        <motion.p
                            className="contact-subtitle"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            พูดคุยกับทีมผู้เชี่ยวชาญ และรับคำปรึกษาโซลูชันที่เหมาะสมฟรี พร้อมยกระดับธุรกิจของคุณด้วยเทคโนโลยี
                        </motion.p>
                    </div>
                </div>
            </section>

            <section id="content" className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left Column: Contact Info & Map */}
                        <div className="contact-info-wrap">
                            <h2 className="contact-info-heading">ข้อมูลติดต่อ</h2>

                            <div className="contact-info-block">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div>
                                        <h3 className="contact-info-label">ที่อยู่</h3>
                                        <p className="contact-info-text">
                                            376 หมู่ที่ 15 ตำบลสามพร้าว<br />
                                            อำเภอเมืองอุดรธานี จ.อุดรธานี 41000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info-block">
                                <div className="info-item">
                                    <div className="info-icon line-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.531-3.951 2.531-6.035zm-15.347 3.844c-.114.228-.316.326-.316.326h-2.18s-.202-.098-.316-.326c-.114-.228-.352-.977-.352-.977s-.353 1.026-.527 1.141c-.174.114-.239.162-.239.162s-.404.016-1.121.016c-.718 0-1.223-.032-1.223-.032s-.195-.033-.31-.196c-.113-.162-.129-.407-.129-.407l.015-4.432s.016-.244.131-.407c.113-.162.31-.196.31-.196s.505-.032 1.223-.032 1.121.017 1.121.017.239.049.239.162c0 0 .146.065.342.586.196.52.23 1.254.23 1.254s.065-.733.261-1.254.341-.586.341-.586.113-.113.243-.162c.131-.049 1.122-.017 1.122-.017s.195.033.31.196c.114.162.13.407.13.407l-.017 4.432s-.016.244-.131.407c-.114.163-.31.196-.31.196s-.505.033-1.223.033-1.122-.016-1.122-.016-.098-.016-.211-.244-.457-1.352-.457-1.352-.081 1.043-.244 1.27c-.163.228-.163.228-.163.228zm3.504-.44l.017-4.432s.016-.244.131-.407c.114-.162.31-.196.31-.196s1.63-.114 1.76-.049c.13.065.261.212.261.212s.114.146.114.293-.016 4.757-.016 4.757-.016.261-.13.424c-.114.162-.31.196-.31.196s-1.875.064-2.005 0c-.08-.032-.131-.806-.131-.806zm4.619.44c-.718 0-1.223-.032-1.223-.032s-.195-.033-.31-.196c-.114-.162-.131-.407-.131-.407l.016-4.432s.016-.244.13-.407c.115-.162.311-.196.311-.196s.505-.032 1.222-.032 1.122.017 1.122.017.239.049.239.162v4.448s.049.261-.163.456c-.212.195-.162.195-.162.195s-.277.017-.995.017zm4.767 0c-.718 0-1.223-.032-1.223-.032s-.195-.033-.31-.196c-.114-.162-.131-.407-.131-.407l.017-4.432s.016-.244.13-.407.311-.196.311-.196 2.054-.049 2.184.017.228.212.228.212.115.146.115.293v1.368s-.033.245-.228.245c-.196 0-1.385-.017-1.385-.017s-.212 0-.212.163v.326s-.032.228.179.228c.211 0 1.417-.033 1.417-.033s.228-.016.228.245v1.368s.017.26-.228.26c-.244 0-1.417-.033-1.417-.033s-.228-.016-.228.212v.343s-.016.195.228.195c.244 0 1.417-.032 1.417-.032s.228-.016.228.244v1.353s.017.261-.228.261c-.244.016-2.184-.033-2.184-.033zm-4.767-1.319h-.212v-2.721h.212v2.721zm-3.504 0h-.211v-2.721h.211v2.721z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="contact-info-label">LINE Official</h3>
                                        <a
                                            href="https://line.me/ti/p/~658fozjl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-line-link"
                                        >
                                            @658fozjl
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info-block">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div>
                                        <h3 className="contact-info-label">เวลาทำการ</h3>
                                        <p className="contact-info-text">
                                            จันทร์ - ศุกร์: 9:00 - 18:00<br />
                                            เสาร์: 9:00 - 15:00<br />
                                            อาทิตย์: ปิดทำการ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info-block social-block">
                                <h3 className="contact-info-label">ติดตามเราได้ที่</h3>
                                <div className="contact-social">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link facebook" aria-label="Facebook">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="https://line.me/ti/p/~658fozjl" target="_blank" rel="noopener noreferrer" className="social-icon-link line" aria-label="Line">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.531-3.951 2.531-6.035z" /></svg>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link instagram" aria-label="Instagram">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin" aria-label="LinkedIn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-map-wrap">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.354674720173!2d102.82298731488!3d17.433230988052134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312399279177a645%3A0xc3c604618e404be1!2zMzc2IE1vbyAxNSwgU2FtIFBocmFvLCBNdWVhbmcgVWRvbiBUaGFuaSBEaXN0cmljdCwgVWRvbiBUaGFuaSA0MTAwMA!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Message Form */}
                        <div className="contact-form-wrap">
                            <h2 className="contact-form-heading">ส่งข้อความถึงเรา</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="contact-label">
                                            ชื่อ-นามสกุล <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="contact-input"
                                            placeholder="เช่น สมชาย ใจดี"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="contact-label">
                                            อีเมล <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="contact-input"
                                            placeholder="example@yourdomain.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="contact-label">
                                            เบอร์โทร <span className="required">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="contact-input"
                                            placeholder="08x-xxx-xxxx"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="contact-label">โซลูชันที่สนใจ</label>
                                        <div className="select-wrapper">
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
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="contact-label">
                                        รายละเอียดปรึกษา <span className="required">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="contact-input contact-textarea"
                                        placeholder="เล่ารายละเอียดโปรเจคหรือหัวเรื่องที่ต้องการปรึกษา..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="contact-submit full-width">
                                    ส่งข้อความถึงทีมงาน
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>

                                <p className="contact-form-note">
                                    * ทีมงานของเราจะติดต่อกลับเพื่อให้คำปรึกษาเบื้องต้นภายใน 24 ชั่วโมง
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}
