import { useEffect, useRef, useState } from 'react'

export default function NumberCounter({
    end,
    suffix = '',
    duration = 1500,
}) {
    const [value, setValue] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.4 }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
        if (!hasAnimated) return

        let start = null
        const startValue = 0
        const target = Number(end) || 0
        const diff = target - startValue
        let frameId

        const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const current = Math.round(startValue + diff * progress)
            setValue(current)

            if (progress < 1) {
                frameId = requestAnimationFrame(step)
            }
        }

        frameId = requestAnimationFrame(step)

        return () => {
            if (frameId) cancelAnimationFrame(frameId)
        }
    }, [hasAnimated, end, duration])

    return (
        <span ref={ref}>
            {value.toLocaleString()}
            {suffix}
        </span>
    )
}
