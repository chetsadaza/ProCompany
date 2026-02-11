import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Privacy.css'
import './Home.css'
import Footer from './Footer'

const navItems = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'เกี่ยวกับเรา', href: '/about' },
    { label: 'บริการ', href: '/services' },
    { label: 'ผลงาน', href: '/portfolio' },
    { label: 'ติดต่อเรา', href: '/contact' },
]

const sections = [
    {
        id: 'collection',
        title: '1. การเก็บรวบรวมข้อมูล',
        content: (
            <>
                <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณในกรณีต่อไปนี้:</p>
                <ul>
                    <li>ข้อมูลที่คุณให้ไว้เมื่อติดต่อสอบถาม หรือใช้บริการของเรา</li>
                    <li>ข้อมูลจากการเข้าใช้งานเว็บไซต์ เช่น IP Address, Browser Type</li>
                    <li>ข้อมูลจากการสมัครรับข่าวสาร Newsletter</li>
                    <li>ข้อมูลจากการใช้บริการ LINE Official Account</li>
                </ul>
            </>
        )
    },
    {
        id: 'usage',
        title: '2. การใช้ข้อมูล',
        content: (
            <div className="privacy-table-wrapper">
                <table className="privacy-table">
                    <thead>
                        <tr>
                            <th>ประเภทข้อมูล</th>
                            <th>วัตถุประสงค์การใช้งาน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ข้อมูลติดต่อ / บริการ</td>
                            <td>เพื่อให้บริการและตอบสนองต่อคำขอของคุณ</td>
                        </tr>
                        <tr>
                            <td>พฤติกรรมการใช้งาน</td>
                            <td>เพื่อพัฒนาและปรับปรุงคุณภาพการให้บริการ</td>
                        </tr>
                        <tr>
                            <td>อีเมล / ช่องทางโซเชียล</td>
                            <td>เพื่อส่งข้อมูลข่าวสาร โปรโมชั่น และข้อเสนอพิเศษ</td>
                        </tr>
                        <tr>
                            <td>ข้อมูลทางเทคนิค (Cookies/IP)</td>
                            <td>เพื่อวิเคราะห์การใช้งานเว็บไซต์และปรับปรุงประสบการณ์ผู้ใช้</td>
                        </tr>
                        <tr>
                            <td>ข้อมูลตามกฎหมาย</td>
                            <td>เพื่อปฏิบัติตามข้อกำหนดทางกฎหมาย</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    },
    {
        id: 'security',
        title: '3. การรักษาความปลอดภัยของข้อมูล',
        content: (
            <ul>
                <li><strong>การเข้ารหัสข้อมูล:</strong> ใช้มาตรฐาน SSL/TLS ในการรับส่งข้อมูล</li>
                <li><strong>การคัดกรองสิทธิ์:</strong> จำกัดการเข้าถึงข้อมูลเฉพาะบุคคลที่ได้รับอนุญาต</li>
                <li><strong>ระบบสำรอง:</strong> มีการสำรองข้อมูลอย่างสม่ำเสมอเพื่อความปลอดภัย</li>
                <li><strong>การตรวจสอบ:</strong> ตรวจสอบและอัพเดทระบบความปลอดภัยเป็นประจำ</li>
            </ul>
        )
    },
    {
        id: 'third-party',
        title: '4. การเปิดเผยข้อมูลต่อบุคคลที่สาม',
        content: (
            <p>เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณต่อบุคคลที่สาม ยกเว้น: เมื่อได้รับความยินยอมจากคุณ, เมื่อจำเป็นต้องปฏิบัติตามกฎหมาย, หรือร่วมกับพันธมิตรทางธุรกิจภายใต้ข้อตกลงรักษาความลับ</p>
        )
    },
    {
        id: 'cookies',
        title: '5. การใช้ Cookies',
        content: (
            <>
                <p>เว็บไซต์ของเราใช้ Cookies เพื่อจดจำการตั้งค่าของคุณ และวิเคราะห์การเข้าใช้งานเพื่อปรับปรุงประสบการณ์ คุณสามารถปฏิเสธหรือลบ Cookies ได้ผ่านการตั้งค่าบราวเซอร์</p>
            </>
        )
    },
    {
        id: 'rights',
        title: '6. สิทธิของคุณ',
        content: (
            <ul>
                <li>สิทธิในการเข้าถึงและขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                <li>สิทธิในการขอลบข้อมูลส่วนบุคคล (Right to be Forgotten)</li>
                <li>สิทธิในการคัดค้านหรือถอนความยินยอมในการประมวลผล</li>
            </ul>
        )
    },
    {
        id: 'changes',
        title: '7. การเปลี่ยนแปลงนโยบาย',
        content: (
            <p>เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลทันทีเมื่อเผยแพร่บนเว็บไซต์</p>
        )
    }
]

export default function Privacy() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [expandedSection, setExpandedSection] = useState('collection')

    const toggleSection = (id) => {
        setExpandedSection(expandedSection === id ? null : id)

        // Smooth scroll to the section
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }

    return (
        <div className="home privacy-page">
            <header className="header">
                <div className="header-inner">
                    <Link to="/" className="logo-text">CDM</Link>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                        <a href="/contact" className="nav-cta">ปรึกษาฟรี</a>
                    </nav>
                </div>
            </header>

            <main className="privacy-content">
                <div className="container">
                    <div className="privacy-container-grid">
                        {/* Table of Contents - Sidebar on Desktop */}
                        <aside className="privacy-toc">
                            <h3>สารบัญ</h3>
                            <ul>
                                {sections.map(s => (
                                    <li key={s.id}>
                                        <button
                                            onClick={() => toggleSection(s.id)}
                                            className={expandedSection === s.id ? 'active' : ''}
                                        >
                                            {s.title.split('.')[1]}
                                        </button>
                                    </li>
                                ))}
                                <li><button onClick={() => toggleSection('contact')}>ติดต่อเรา</button></li>
                            </ul>
                        </aside>

                        <div className="privacy-main-column">
                            <h1 className="privacy-title">นโยบายความเป็นส่วนตัว</h1>

                            {/* TL;DR Summary */}
                            <div className="tldr-box">
                                <div className="tldr-badge">สรุปย่อ (TL;DR)</div>
                                <p>เราเก็บข้อมูลเท่าที่จำเป็นเพื่อให้บริการที่ดีที่สุด และคุณมีสิทธิ์ควบคุมข้อมูลของคุณได้เสมอ เราใช้มาตรฐานความปลอดภัยสูงสุดเพื่อปกป้องความเป็นส่วนตัวของคุณ</p>
                                <span className="privacy-update">อัพเดทล่าสุด: พฤศจิกายน 2568</span>
                            </div>

                            {/* Accordion Sections */}
                            <div className="privacy-accordion">
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className={`accordion-item ${expandedSection === section.id ? 'expanded' : ''}`}
                                    >
                                        <button
                                            className="accordion-header"
                                            onClick={() => toggleSection(section.id)}
                                        >
                                            <span>{section.title}</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <AnimatePresence>
                                            {expandedSection === section.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="accordion-body"
                                                >
                                                    <div className="accordion-content">
                                                        {section.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Callout Box */}
                            <section id="contact" className={`privacy-contact-callout ${expandedSection === 'contact' ? 'highlight' : ''}`}>
                                <div className="callout-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="callout-body">
                                    <h3>8. ติดต่อเรา</h3>
                                    <p>หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อเราได้ที่:</p>
                                    <div className="callout-details">
                                        <p className="callout-company">บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</p>
                                        <p>376 หมู่ที่ 15 ตำบลสามพร้าว อำเภอเมืองอุดรธานี จ.อุดรธานี 41000</p>
                                        <a href="https://line.me/ti/p/~658fozjl" target="_blank" rel="noopener noreferrer" className="callout-line">
                                            LINE Official: <strong>@658fozjl</strong>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
