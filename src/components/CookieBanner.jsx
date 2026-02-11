import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './CookieBanner.css'

export default function CookieBanner({ shouldShow }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!shouldShow) return

        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            // Show banner after a longer delay to ensure Alert is gone
            const timer = setTimeout(() => setIsVisible(true), 2500)
            return () => clearTimeout(timer)
        }
    }, [shouldShow])

    const handleConsent = (type) => {
        localStorage.setItem('cookieConsent', type)
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="cookie-banner"
                >
                    <div className="container cookie-container">
                        <div className="cookie-content">
                            <div className="cookie-icon">🍪</div>
                            <div className="cookie-text">
                                <h3>การใช้คุกกี้ (Cookie Notice)</h3>
                                <p>
                                    เว็บไซต์ของ บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด มีการใช้คุกกี้เพื่อพัฒนาประสิทธิภาพการทำงานของเว็บไซต์
                                    วิเคราะห์พฤติกรรมการใช้งาน และปรับปรุงประสบการณ์ของผู้ใช้งานให้ดียิ่งขึ้น
                                    คุกกี้บางประเภทมีความจำเป็น ขณะที่คุกกี้อื่น ๆ ใช้เพื่อวิเคราะห์และพัฒนาการให้บริการ
                                    ท่านสามารถเลือกยอมรับทั้งหมด หรือยอมรับเฉพาะคุกกี้ที่จำเป็นได้
                                    อ่านรายละเอียดเพิ่มเติมที่ <Link to="/privacy">นโยบายความเป็นส่วนตัว</Link>
                                </p>
                            </div>
                        </div>
                        <div className="cookie-actions">
                            <button className="cookie-btn btn-secondary" onClick={() => handleConsent('essential')}>
                                คุกกี้ที่จำเป็นเท่านั้น
                            </button>
                            <button className="cookie-btn btn-primary" onClick={() => handleConsent('all')}>
                                ยอมรับทั้งหมด
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
