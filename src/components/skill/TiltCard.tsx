import { useRef } from "react"
import gsap from "gsap"

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return

        const bounds = card.getBoundingClientRect()
        const x = e.clientX - bounds.left
        const y = e.clientY - bounds.top
        const centerX = bounds.width / 2
        const centerY = bounds.height / 2

        const maxRotation = 4
        const rotateX = Math.max(-maxRotation, Math.min(maxRotation, -(y - centerY) / 10))
        const rotateY = Math.max(-maxRotation, Math.min(maxRotation, (x - centerX) / 10))

        gsap.set(card, {
            rotateX,
            rotateY,
            scale: 1.015,
            transformPerspective: 800,
            transformOrigin: "center center",
        })
    }

    const handleMouseLeave = () => {
        const card = cardRef.current
        if (!card) return

        gsap.set(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
        })
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="[perspective:800px] cursor-pointer">
            <div
                ref={cardRef}
                className="will-change-transform transform-style-preserve-3d
                   bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700
                   flex items-center justify-center p-16 rounded-2xl 
                   hover:opacity-[99%] hover:ring-2 hover:ring-white/10 hover:backdrop-blur-sm">
                {children}
            </div>
        </div>
    )
}

export default TiltCard
