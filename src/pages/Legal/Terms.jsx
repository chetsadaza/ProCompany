import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Terms.css'
import '../Home/Home.css'
import Footer from '../../components/Footer/Footer'

const navItems = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'เกี่ยวกับเรา', href: '/about' },
    { label: 'บริการ', href: '/services' },
    { label: 'ผลงาน', href: '/portfolio' },
    { label: 'ติดต่อเรา', href: '/contact' },
]

const sections = [
    {
        id: 'acceptance',
        title: '1. การยอมรับข้อกำหนด',
        content: (
            <>
                <p>การเข้าถึงและใช้งานเว็บไซต์หรือบริการของเรา ถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้</p>
                <p><strong>หากคุณไม่เห็นด้วยกับข้อกำหนดเหล่านี้ กรุณาหยุดการใช้งานเว็บไซต์ทันที</strong></p>
            </>
        )
    },
    {
        id: 'service-use',
        title: '2. การใช้บริการ',
        content: (
            <div className="terms-subsection">
                <div className="sub-block">
                    <h4>2.1 การใช้งานที่ถูกต้อง</h4>
                    <p>คุณตกลงที่จะใช้บริการของเราเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น</p>
                </div>
                <div className="sub-block">
                    <h4>2.2 ข้อห้าม</h4>
                    <ul>
                        <li>ใช้บริการเพื่อวัตถุประสงค์ที่ผิดกฎหมาย</li>
                        <li>พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต</li>
                        <li>ทำลายหรือแทรกแซงการทำงานของระบบ</li>
                        <li>เผยแพร่เนื้อหาที่ละเมิดลิขสิทธิ์หรือสิทธิของผู้อื่น</li>
                        <li>ใช้ข้อมูลที่ได้รับเพื่อการค้าโดยไม่ได้รับอนุญาต</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'intellectual-property',
        title: '3. ทรัพย์สินทางปัญญา',
        content: (
            <p>เนื้อหา ข้อความ กราฟิก โลโก้ รูปภาพ และซอฟต์แวร์บนเว็บไซต์นี้เป็นทรัพย์สินของ <strong>บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</strong> การคัดลอก แจกจ่าย หรือนำไปใช้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรถือเป็นการละเมิดลิขสิทธิ์</p>
        )
    },
    {
        id: 'pricing',
        title: '4. บริการและราคา',
        content: (
            <div className="terms-subsection">
                <div className="sub-block">
                    <h4>4.1 รายละเอียดบริการ</h4>
                    <p>รายละเอียดอาจมีการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า เราขอสงวนสิทธิ์ในการแก้ไขหรือยกเลิกบริการใดๆ ได้ตลอดเวลา</p>
                </div>
                <div className="sub-block">
                    <h4>4.2 ราคาและการชำระเงิน</h4>
                    <ul>
                        <li>ราคาแสดงเป็นสกุลเงินบาทไทย (THB)</li>
                        <li>การชำระเงินตามเงื่อนไขในใบเสนอราคา</li>
                        <li>การยกเลิก/คืนเงินเป็นไปตามนโยบายที่กำหนด</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'liability',
        title: '5. ข้อจำกัดความรับผิด',
        content: (
            <div className="terms-subsection">
                <div className="sub-block">
                    <h4>5.1 การให้บริการ</h4>
                    <p>เราพยายามอย่างเต็มที่แต่ไม่รับประกันว่าบริการจะไม่มีข้อผิดพลาด หรือปราศจากไวรัสส่วนประกอบที่เป็นอันตราย</p>
                </div>
                <div className="sub-block">
                    <h4>5.2 ข้อจำกัดความรับผิด</h4>
                    <p>เราจะไม่รับผิดชอบต่อความเสียหายจากการใช้บริการ, ข้อมูลที่ผิดพลาด, หรือเหตุสุดวิสัยที่เกินความควบคุม</p>
                </div>
            </div>
        )
    },
    {
        id: 'termination',
        title: '6. การยกเลิกและระงับบริการ',
        content: (
            <p>เราขอสงวนสิทธิ์ในการระงับบริการทันทีหากคุณละเมิดข้อกำหนด หากต้องการยกเลิกบริการ กรุณาแจ้งเป็นลายลักษณ์อักษรล่วงหน้าตามระยะเวลาที่กำหนด</p>
        )
    },
    {
        id: 'privacy',
        title: '7. ความเป็นส่วนตัวของข้อมูล',
        content: (
            <p>การเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณจะเป็นไปตาม <Link to="/privacy" className="inline-link">นโยบายความเป็นส่วนตัว</Link> ของเรา</p>
        )
    },
    {
        id: 'jurisdiction',
        title: '8. กฎหมายที่ใช้บังคับ',
        content: (
            <p>ข้อกำหนดนี้อยู่ภายใต้บังคับและตีความตามกฎหมายของประเทศไทย ข้อพิพาทใดๆ จะอยู่ในเขตอำนาจศาลของประเทศไทย</p>
        )
    },
    {
        id: 'amendments',
        title: '9. การแก้ไขข้อกำหนด',
        content: (
            <p>เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดได้ตลอดเวลา การแก้ไขจะมีผลทันทีเมื่อเผยแพร่ และการใช้งานต่อถือว่าคุณยอมรับข้อกำหนดใหม่</p>
        )
    }
]

export default function Terms() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [expandedSection, setExpandedSection] = useState('acceptance')

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
        <div className="home terms-page">
            <header className="header">
                <div className="header-inner">
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

            <main className="terms-content">
                <div className="container">
                    <div className="terms-container-grid">
                        {/* TOC Sidebar */}
                        <aside className="terms-toc">
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

                        <div className="terms-main-column">
                            <h1 className="terms-title">ข้อกำหนดการใช้งาน</h1>

                            <div className="tldr-box">
                                <div className="tldr-badge">สรุปย่อ (TL;DR)</div>
                                <p>การใช้บริการของเราถือว่าคุณยอมรับข้อตกลงเหล่านี้ เราขอให้คุณใช้บริการอย่างถูกต้อง และเคารพสิทธิ์ในทรัพย์สินทางปัญญาของเรา</p>
                                <span className="terms-update">อัพเดทล่าสุด: พฤศจิกายน 2568</span>
                            </div>

                            <div className="terms-accordion">
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

                            {/* Callout Box */}
                            <section id="contact" className={`terms-contact-callout ${expandedSection === 'contact' ? 'highlight' : ''}`}>
                                <div className="callout-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="callout-body">
                                    <h3>10. ติดต่อเรา</h3>
                                    <p>หากคุณมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไข กรุณาติดต่อเราได้ที่:</p>
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
