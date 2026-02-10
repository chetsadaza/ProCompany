import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Services.css'

export default function Services() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const targetRef = useRef(null)

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Connect scroll to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"] // When section starts being sticky until it ends
    })

    // Transform scroll progress to horizontal translation
    // Mobile needs to scroll further because the track is much longer relative to the viewport
    const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-90%" : "-55%"])

    const solutions = [
        {
            title: 'Digital Marketing Solutions',
            desc: 'โซลูชันการตลาดดิจิทัลแบบครบวงจร เพื่อเพิ่มการมองเห็นและยอดขาย',
            items: [
                'Facebook & Instagram Ads Management',
                'Google Ads & SEO Optimization',
                'Content Marketing Strategy',
                'Social Media Management'
            ]
        },
        {
            title: 'Marketing Strategy & Consulting',
            desc: 'โซลูชันกลยุทธ์การตลาดเชิงลึก เพื่อเพิ่มศักยภาพการแข่งขันของธุรกิจ',
            items: [
                'Market Research & Competitor Analysis',
                'Strategic Marketing Planning',
                'Brand Development & Positioning',
                'Customer Journey Mapping',
                'Multi-channel Marketing Strategy'
            ]
        },
        {
            title: 'Growth Marketing Solutions',
            desc: 'โซลูชันการเติบโตธุรกิจแบบ Data-Driven พร้อมระบบวัดผลที่ชัดเจน',
            items: [
                'Growth Strategy Development',
                'KPI Setup & Performance Tracking',
                'Marketing Automation Implementation',
                'Budget Optimization & ROI Analysis',
                'A/B Testing & Conversion Optimization'
            ]
        },
        {
            title: 'Brand Development Solutions',
            desc: 'โซลูชันพัฒนาแบรนด์ครบวงจร สร้างความโดดเด่นและจดจำในตลาด',
            items: [
                'Brand Audit & Strategic Analysis',
                'Brand Identity Design & Development',
                'Brand Storytelling & Messaging',
                'Brand Positioning Strategy',
                'Integrated Brand Communication'
            ]
        },
        {
            title: 'Content & Creative Solutions',
            desc: 'โซลูชันคอนเทนต์ครบวงจร สร้างการมีส่วนร่วมและสร้างแบรนด์',
            items: [
                'Content Strategy & Planning',
                'Professional Content Creation',
                'Social Media Content Production',
                'Copywriting & Creative Writing',
                'Content Calendar Management'
            ]
        },
        {
            title: 'SEO & Performance Marketing',
            desc: 'โซลูชันเพิ่มการมองเห็นและยอดขาย ด้วยกลยุทธ์ที่วัดผลได้',
            items: [
                'Technical SEO Audit & Optimization',
                'Google Ads Campaign Management',
                'Social Media Advertising',
                'Campaign Performance Analysis',
                'Continuous Optimization & Reporting'
            ]
        },
        {
            title: 'Cyber Security Solutions',
            desc: 'โซลูชันรักษาความปลอดภัยระดับองค์กร ปกป้องข้อมูลและธุรกิจอย่างมืออาชีพ',
            items: [
                'Security Assessment & Penetration Testing',
                'Vulnerability Analysis & Risk Management',
                'Security Infrastructure Implementation',
                'Incident Response Planning & Management',
                '24/7 Security Monitoring & Support'
            ]
        },
        {
            title: 'Business Automation Solutions',
            desc: 'โซลูชันระบบอัตโนมัติระดับองค์กร เพิ่มประสิทธิภาพและลดต้นทุน',
            items: [
                'Business Process Analysis & Design',
                'Marketing Automation Platform Setup',
                'Workflow Automation Implementation',
                'System Integration & API Development',
                'Automation Monitoring & Optimization'
            ]
        },
        {
            title: 'AI & Machine Learning Solutions',
            desc: 'โซลูชัน AI ระดับองค์กร ยกระดับธุรกิจด้วยปัญญาประดิษฐ์',
            items: [
                'AI Strategy Consulting & Implementation',
                'AI-Powered Marketing Tools Development',
                'Chatbot & Virtual Assistant Development',
                'Predictive Analytics & Data Intelligence',
                'AI Content Generation & Personalization'
            ]
        }
    ]

    const whyChooseUs = [
        {
            title: 'ทีมผู้เชี่ยวชาญระดับโลก',
            desc: 'ทีมที่มีประสบการณ์ตรงในการพัฒนาและนำเสนอโซลูชัน'
        },
        {
            title: 'เทคโนโลยีล้ำสมัย',
            desc: 'ใช้เทคโนโลยีและเครื่องมือที่ทันสมัยที่สุด'
        },
        {
            title: 'โซลูชันที่ปรับแต่งได้',
            desc: 'ปรับให้เหมาะกับความต้องการเฉพาะของธุรกิจ'
        },
        {
            title: 'สนับสนุนต่อเนื่อง',
            desc: 'บริการ Support และพัฒนาอย่างต่อเนื่อง'
        }
    ]

    const navItems = [
        { label: 'หน้าแรก', href: '/' },
        { label: 'เกี่ยวกับเรา', href: '/about' },
        { label: 'บริการ', href: '/services', active: true },
        { label: 'ผลงาน', href: '/#blog' },
        { label: 'ติดต่อเรา', href: '/#contact' },
    ]

    return (
        <div className="services-page">
            {/* Navigation */}
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

            {/* Horizontal Scroll Section */}
            <section ref={targetRef} className="horizontal-scroll-section">
                <div className="sticky-wrapper">
                    <motion.div
                        style={{ x }}
                        className="horizontal-track"
                    >
                        {solutions.map((item, index) => (
                            <div key={index} className="horizontal-card">
                                <div className="h-card-content">
                                    <div className="h-card-header">
                                        <h3 className="h-card-title">{item.title}</h3>
                                        <p className="h-card-desc">{item.desc}</p>
                                    </div>
                                    <ul className="h-card-items">
                                        {item.items.map((subItem, idx) => (
                                            <li key={idx}>{subItem}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="h-card-actions">
                                    <a href="#quote" className="btn-outline">สอบถามราคา</a>
                                    <a href="#consult" className="btn-primary">รับคำปรึกษา</a>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us-section">
                <div className="why-us-container">
                    <h2 className="why-us-title">ทำไมต้องเลือกเรา?</h2>
                    <p className="why-us-subtitle">เราคือพันธมิตรเทคโนโลยีที่ขับเคลื่อนธุรกิจของคุณสู่อนาคต</p>
                    <div className="why-us-grid">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="why-us-item">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="services-footer">
                <p>© บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด</p>
            </footer>
        </div>
    )
}
