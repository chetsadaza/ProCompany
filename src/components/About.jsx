import { useState, useEffect } from 'react'
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
    { value: '5+', label: 'ปีประสบการณ์', icon: '/GIF/clock About.gif' },
    { value: '50+', label: 'ลูกค้า', icon: '/GIF/loyalty About.gif' },
    { value: '100+', label: 'โปรเจกต์สำเร็จ', icon: '/GIF/paper-document About.gif' },
    { value: '10+', label: 'ผู้เชี่ยวชาญ', icon: '/GIF/graduation-cap About.gif' },
]

const coreValues = [
    {
        icon: '💡',
        title: 'Innovation',
        desc: 'เราไม่เคยหยุดนิ่งในการคิดค้นและนำเทคโนโลยี AI ล่าสุดมาปรับใช้เพื่อสร้างความได้เปรียบให้กับธุรกิจของคุณ'
    },
    {
        icon: '🎯',
        title: 'Expertise',
        desc: 'ทีมงานของเราประกอบด้วยผู้เชี่ยวชาญที่มีประสบการณ์ตรงในสายงาน ทั้ง AI, Cyber Security และ Automation'
    },
    {
        icon: '🤝',
        title: 'Trust',
        desc: 'ความไว้วางใจของลูกค้าคือหัวใจสำคัญ เรามุ่งเน้นการส่งมอบผลงานที่มีคุณภาพและรักษาความปลอดภัยของข้อมูลสูงสุด'
    }
]

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="home about-page">
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

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg" aria-hidden="true" />
                <div className="about-hero-content container">
                    <span className="about-hero-tag animate-fade-up">About Our Company</span>
                    <h1 className="about-hero-title animate-fade-up delay-1">
                        ขับเคลื่อนอนาคตด้วย <br />
                        <span className="text-gradient">นวัตกรรมดิจิทัล</span>
                    </h1>
                    <p className="about-hero-desc animate-fade-up delay-2">
                        เราคือผู้นำด้านโซลูชัน AI, Digital Marketing, Cyber Security และ Automation
                        ที่มุ่งมั่นยกระดับธุรกิจของคุณสู่ระดับสากล
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section id="about" className="section section-about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content animate-fade-up delay-3">
                            <h2 className="about-subtitle">เรื่องราวของเรา</h2>
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
                        <div className="about-stats-container animate-fade-up delay-4">
                            <div className="about-stats-grid">
                                {aboutStats.map((stat, i) => (
                                    <div key={i} className="about-stat-card">
                                        <span className="about-stat-icon">
                                            {stat.icon.endsWith('.gif') ? (
                                                <img src={stat.icon} alt="" className="about-stat-gif" />
                                            ) : (
                                                stat.icon
                                            )}
                                        </span>
                                        <span className="about-stat-value">{stat.value}</span>
                                        <span className="about-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section section-values">
                <div className="container">
                    <header className="about-header text-center">
                        <h2 className="section-title">คุณค่าหลักของเรา</h2>
                        <p className="section-desc">ความมุ่งมั่นที่เรายึดถือเพื่อความสำเร็จของลูกค้า</p>
                    </header>
                    <div className="values-grid">
                        {coreValues.map((value, i) => (
                            <div key={i} className={`value-card animate-fade-up delay-${i + 1}`}>
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="section section-cta">
                <div className="container text-center">
                    <h2 className="section-title">พร้อมที่จะร่วมงานกับเราหรือยัง?</h2>
                    <p className="section-desc">เริ่มต้นเส้นทางดิจิทัลของคุณด้วยทีมงานมืออาชีพ</p>
                    <a href="/#contact" className="cta-primary cta-large">
                        ติดต่อทีมงานของเรา
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
