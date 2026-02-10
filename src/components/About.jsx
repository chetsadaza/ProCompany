import { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import './Home.css'

const navItems = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'เกี่ยวกับเรา', href: '/about' },
    { label: 'บริการ', href: '/#services' },
    { label: 'ผลงาน', href: '/#blog' },
    { label: 'ติดต่อเรา', href: '/#contact' },
]

const aboutStats = [
    { value: '5+', label: 'ปีประสบการณ์' },
    { value: '50+', label: 'ลูกค้า' },
    { value: '100+', label: 'โปรเจกต์สำเร็จ' },
    { value: '10+', label: 'ผู้เชี่ยวชาญ' },
]

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="home about-page">
            {/* Navigation - Reusing header from Home for consistency */}
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

            <section id="about" className="section section-about">
                <div className="container">
                    <header className="about-header">
                        <h2 className="section-title">เกี่ยวกับเรา</h2>
                        <p className="section-desc">
                            เราคือผู้นำด้านโซลูชัน AI, Digital Marketing, Cyber Security และ Automation มุ่งมั่นยกระดับธุรกิจของคุณสู่ยุคดิจิทัลด้วยเทคโนโลยีล้ำสมัย
                        </p>
                    </header>

                    <div className="about-grid">
                        <div className="about-content">
                            <h3 className="about-subtitle">เรื่องราวของเรา</h3>
                            <p>
                                บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด เป็นผู้นำด้านโซลูชัน ดิจิทัลที่ผสานเทคโนโลยี AI, Digital Marketing, Cyber Security และ Automation เพื่อขับเคลื่อนธุรกิจสู่ยุคดิจิทัล
                            </p>
                            <p>
                                เรามีทีมผู้เชี่ยวชาญที่มีประสบการณ์ในการพัฒนาและนำเสนอโซลูชัน เทคโนโลยีที่ทันสมัยที่สุด พร้อมด้วยความเชี่ยวชาญด้าน AI, Machine Learning, Automation และระบบรักษาความปลอดภัย
                            </p>
                            <p>
                                เรานำเสนอโซลูชันที่ครบวงจรสำหรับธุรกิจ SME และองค์กรขนาดใหญ่ ด้วยเทคโนโลยีที่ปรับแต่งได้ตามความต้องการ พร้อมการสนับสนุน และพัฒนาอย่างต่อเนื่อง
                            </p>
                        </div>
                        <div className="about-stats-grid">
                            {aboutStats.map((stat, i) => (
                                <div key={i} className="about-stat-card">
                                    <span className="about-stat-value">{stat.value}</span>
                                    <span className="about-stat-label">{stat.label}</span>
                                </div>
                            ))}
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
