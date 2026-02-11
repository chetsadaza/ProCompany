import { useState } from 'react'
import { Link } from 'react-router-dom'
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

export default function Privacy() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="home privacy-page">
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
                        <a href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
                            ปรึกษาฟรี
                        </a>
                    </nav>
                </div>
            </header>

            <main className="privacy-content">
                <div className="container">
                    <div className="privacy-card">
                        <h1 className="privacy-title">นโยบายความเป็นส่วนตัว</h1>
                        <p className="privacy-intro">เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลของคุณ</p>
                        <p className="privacy-update">อัพเดทล่าสุด: พฤศจิกายน 2025</p>

                        <section className="privacy-section">
                            <h2>1. การเก็บรวบรวมข้อมูล</h2>
                            <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณในกรณีต่อไปนี้:</p>
                            <ul>
                                <li>ข้อมูลที่คุณให้ไว้เมื่อติดต่อสอบถาม หรือใช้บริการของเรา</li>
                                <li>ข้อมูลจากการเข้าใช้งานเว็บไซต์ เช่น IP Address, Browser Type, และพฤติกรรมการใช้งาน</li>
                                <li>ข้อมูลจากการสมัครรับข่าวสาร Newsletter</li>
                                <li>ข้อมูลจากการใช้บริการ LINE Official Account</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>2. การใช้ข้อมูล</h2>
                            <p>เราใช้ข้อมูลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                            <ul>
                                <li>เพื่อให้บริการและตอบสนองต่อคำขอของคุณ</li>
                                <li>เพื่อพัฒนาและปรับปรุงคุณภาพการให้บริการ</li>
                                <li>เพื่อส่งข้อมูลข่าวสาร โปรโมชั่น และข้อเสนอพิเศษ</li>
                                <li>เพื่อวิเคราะห์การใช้งานเว็บไซต์และปรับปรุงประสบการณ์ผู้ใช้</li>
                                <li>เพื่อปฏิบัติตามข้อกำหนดทางกฎหมาย</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>3. การรักษาความปลอดภัยของข้อมูล</h2>
                            <p>เรามีมาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ:</p>
                            <ul>
                                <li>การเข้ารหัสข้อมูลด้วย SSL/TLS</li>
                                <li>การจำกัดการเข้าถึงข้อมูลเฉพาะบุคคลที่ได้รับอนุญาต</li>
                                <li>การสำรองข้อมูลอย่างสม่ำเสมอ</li>
                                <li>การตรวจสอบและอัพเดทระบบความปลอดภัยอย่างสม่ำเสมอ</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>4. การเปิดเผยข้อมูลต่อบุคคลที่สาม</h2>
                            <p>เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณต่อบุคคลที่สาม ยกเว้นในกรณีต่อไปนี้:</p>
                            <ul>
                                <li>เมื่อได้รับความยินยอมจากคุณ</li>
                                <li>เมื่อจำเป็นต้องปฏิบัติตามกฎหมาย</li>
                                <li>กับพันธมิตรทางธุรกิจที่ช่วยให้บริการ (ภายใต้ข้อตกลงความลับ)</li>
                                <li>เพื่อป้องกันสิทธิและความปลอดภัยของบริษัทและผู้ใช้งาน</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>5. การใช้ Cookies</h2>
                            <p>เว็บไซต์ของเราใช้ Cookies เพื่อ:</p>
                            <ul>
                                <li>จดจำการตั้งค่าและความชอบของคุณ</li>
                                <li>วิเคราะห์การเข้าใช้งานเว็บไซต์</li>
                                <li>ปรับปรุงประสบการณ์การใช้งาน</li>
                                <li>แสดงเนื้อหาและโฆษณาที่เหมาะสม</li>
                            </ul>
                            <p>คุณสามารถปฏิเสธหรือลบ Cookies ได้ผ่านการตั้งค่าบราวเซอร์ของคุณ</p>
                        </section>

                        <section className="privacy-section">
                            <h2>6. สิทธิของคุณ</h2>
                            <p>คุณมีสิทธิดังต่อไปนี้:</p>
                            <ul>
                                <li>สิทธิในการเข้าถึงข้อมูลส่วนบุคคลของคุณ</li>
                                <li>สิทธิในการขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                                <li>สิทธิในการขอลบข้อมูลส่วนบุคคล</li>
                                <li>สิทธิในการคัดค้านการประมวลผลข้อมูล</li>
                                <li>สิทธิในการถอนความยินยอม</li>
                            </ul>
                            <p>หากต้องการใช้สิทธิ กรุณาติดต่อเราผ่าน LINE Official: <strong>@658fozjl</strong></p>
                        </section>

                        <section className="privacy-section">
                            <h2>7. การเปลี่ยนแปลงนโยบาย</h2>
                            <p>เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว การเปลี่ยนแปลงใดๆ จะมีผลทันทีเมื่อเผยแพร่บนเว็บไซต์ เราขอแนะนำให้คุณตรวจสอบนโยบายนี้เป็นประจำ</p>
                        </section>

                        <section className="privacy-section contact-info-privacy">
                            <h2>8. ติดต่อเรา</h2>
                            <p>หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อเราได้ที่:</p>
                            <div className="contact-details">
                                <p><strong>บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</strong></p>
                                <p>376 หมู่ที่ 15 ตำบลสามพร้าว อำเภอเมืองอุดรธานี จ.อุดรธานี 41000</p>
                                <p>LINE Official: <strong>@658fozjl</strong></p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
