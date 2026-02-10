import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { label: 'หน้าแรก', href: '/' },
        { label: 'เกี่ยวกับเรา', href: '/about' },
        { label: 'บริการ', href: '/services', active: true },
        { label: 'ผลงาน', href: '/#blog' }, // Pointing back to home sections for now as per likely structure
        { label: 'ติดต่อเรา', href: '/#contact' },
    ]

    return (
        <div className="services-page">
            {/* Navigation - Duplicated from Home for standalone capability */}
            <header className="services-header">
                <div className="services-header-inner">
                    <Link to="/" className="logo-text">CDM</Link>
                    <nav className={`services-nav ${menuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={item.active ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link to="/#contact" className="services-nav-cta">
                            ปรึกษาฟรี
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="services-hero">
                <h1 className="services-title">โซลูชันของเรา</h1>
                <p className="services-subtitle">
                    โซลูชันครบวงจรด้าน AI, Digital Marketing, Cyber Security และ Automation <br />
                    เพื่อยกระดับธุรกิจของคุณสู่ยุคดิจิทัล
                </p>
            </section>

            <footer className="services-footer">
                <p>© บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</p>
            </footer>
        </div>
    )
}
