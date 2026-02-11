import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-v2">
            <div className="container footer-container">
                <div className="footer-grid">
                    {/* Column 1: Company Info */}
                    <div className="footer-col footer-brand">
                        <Link to="/" className="footer-logo">CDM</Link>
                        <p className="footer-brand-title">CONTENTS Digital Marketing</p>
                        <p className="footer-brand-desc">
                            บริษัทฝึกอบรมและให้คำปรึกษาทางด้านการตลาดออนไลน์
                            เพื่อเพิ่มศักยภาพแบรนด์และพัฒนาแผนสำหรับการตลาดยุคใหม่
                        </p>
                        <div className="footer-social-inline">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://line.me/ti/p/~658fozjl" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Line">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.531-3.951 2.531-6.035z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">ลิงก์ด่วน</h4>
                        <ul className="footer-links">
                            <li><Link to="/">หน้าแรก</Link></li>
                            <li><Link to="/about">เกี่ยวกับเรา</Link></li>
                            <li><Link to="/services">บริการ</Link></li>
                            <li><Link to="/portfolio">ผลงาน</Link></li>
                            <li><Link to="/contact">ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className="footer-col">
                        <h4 className="footer-heading">โซลูชันของเรา</h4>
                        <ul className="footer-links">
                            <li><Link to="/services#digital-marketing">Digital Marketing</Link></li>
                            <li><Link to="/services#ai-ml">AI & Machine Learning</Link></li>
                            <li><Link to="/services#cyber-security">Cyber Security</Link></li>
                            <li><Link to="/services#automation">Automation</Link></li>
                            <li><Link to="/services#brand-development">Brand Development</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer-col">
                        <h4 className="footer-heading">ติดต่อเรา</h4>
                        <address className="footer-contact">
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <a href="tel:08x-xxx-xxxx">08x-xxx-xxxx</a>
                            </div>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <a href="mailto:contact@cdm-thailand.com">contact@cdm-thailand.com</a>
                            </div>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.531-3.951 2.531-6.035z" /></svg>
                                <a href="https://line.me/ti/p/~658fozjl" target="_blank" rel="noopener noreferrer">@658fozjl</a>
                            </div>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>376 หมู่ที่ 15 ตำบลสามพร้าว อำเภอเมืองอุดรธานี จ.อุดรธานี 41000</span>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {currentYear} บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด. สงวนลิขสิทธิ์.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">นโยบายความเป็นส่วนตัว</Link>
                        <Link to="/terms">ข้อกำหนดการใช้งาน</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
