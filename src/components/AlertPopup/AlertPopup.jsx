import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AlertPopup.css'

export default function AlertPopup({ onFinish }) {
    const [isOpen, setIsOpen] = useState(false)
    const [dontShowAgain, setDontShowAgain] = useState(false)
    const onFinishRef = useRef(onFinish)

    // Keep ref up to date
    useEffect(() => {
        onFinishRef.current = onFinish
    }, [onFinish])

    useEffect(() => {
        const isHidden = localStorage.getItem('hideWarningAlert')
        if (!isHidden) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsOpen(true), 1000)
            return () => clearTimeout(timer)
        } else {
            // Signal finish after a tiny delay to ensure state is stable
            const timer = setTimeout(() => {
                onFinishRef.current?.()
            }, 100)
            return () => clearTimeout(timer)
        }
    }, []) // Only once on mount

    const handleClose = () => {
        if (dontShowAgain) {
            localStorage.setItem('hideWarningAlert', 'true')
        }
        setIsOpen(false)
        onFinishRef.current?.()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="alert-overlay">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="alert-modal"
                    >
                        <div className="alert-header">
                            <div className="alert-badge">
                                <span className="alert-pulse"></span>
                                ประกาศสำคัญ
                            </div>
                            <button className="alert-close-btn" onClick={handleClose}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <div className="alert-body">
                            <h2 className="alert-title">🔴 เตือน ผู้ใช้งานเว็บไซต์</h2>
                            <div className="alert-content">
                                <p>บริษัท คอนเท็นต์ ดิจิตอล มาเก็ตติ้ง จำกัด ขอแจ้งให้ทราบว่า เว็บไซต์นี้จัดทำขึ้นเพื่อเผยแพร่ข้อมูลเกี่ยวกับบริการด้าน Digital Marketing, AI Solutions, Cyber Security และระบบ Automation ของบริษัทเท่านั้น</p>
                                <p>บริษัท<strong>ไม่มีนโยบาย</strong>ติดต่อเพื่อขอข้อมูลส่วนตัว ข้อมูลทางการเงิน หรือเรียกเก็บค่าธรรมเนียมใด ๆ ผ่านช่องทางที่ไม่เป็นทางการ เช่น ข้อความ SMS บัญชีโซเชียลมีเดียส่วนตัว หรือแแอปพลิเคชันอื่น ๆ</p>
                                <div className="alert-highlight">
                                    <p>หากท่านได้รับการติดต่อที่แอบอ้างชื่อบริษัท กรุณาตรวจสอบความถูกต้องผ่าน<strong>ช่องทางติดต่ออย่างเป็นทางการ</strong>ของบริษัทเท่านั้น</p>
                                </div>
                                <p className="alert-disclaimer">บริษัทขอสงวนสิทธิ์ในการไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดจากการให้ข้อมูลแก่บุคคลหรือหน่วยงานที่แอบอ้างชื่อบริษัท</p>
                            </div>
                        </div>

                        <div className="alert-footer">
                            <label className="dont-show-label">
                                <input
                                    type="checkbox"
                                    checked={dontShowAgain}
                                    onChange={(e) => setDontShowAgain(e.target.checked)}
                                />
                                <span className="checkbox-custom"></span>
                                ไม่ต้องแสดงหน้านี้อีก
                            </label>
                            <button className="alert-action-btn" onClick={handleClose}>รับทราบ</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
