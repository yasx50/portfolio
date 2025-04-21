import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Box, Card, CardContent, Tooltip } from "@mui/material";

interface CardProps {
    icon: React.ReactNode;
    skill: string;
}

const TiltCard = ({ icon, skill }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current && glowRef.current) {
            gsap.set(glowRef.current, {
                opacity: 0,
                scale: 0.85,
            });
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxRotation = 4;
        const rotateX = Math.max(-maxRotation, Math.min(maxRotation, -(y - centerY) / 10));
        const rotateY = Math.max(-maxRotation, Math.min(maxRotation, (x - centerX) / 10));

        gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.02,
            transformPerspective: 1000,
            transformOrigin: "center center",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseEnter = () => {
        if (cardRef.current && glowRef.current) {
            gsap.to(glowRef.current, {
                opacity: 0.8,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const glow = glowRef.current;

        if (card && glow) {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            });

            gsap.to(glow, {
                opacity: 0,
                scale: 0.85,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    };

    return (
        <Box sx={{ perspective: "1000px", cursor: "pointer" }}>
            <Tooltip title={skill} placement="top" arrow>
                <Card
                    ref={cardRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    elevation={0}
                    className="relative min-h-44 w-full !bg-gradient-to-tl !from-slate-800 !via-[#162236] !to-zinc-900 to-75% !rounded-2xl overflow-hidden !flex !items-center !justify-center transform-gpu will-change-transform grayscale hover:grayscale-0 transition-colors duration-500"
                    sx={{
                        transition: "filter 500ms",
                        "&:hover": {
                            filter: "grayscale(0)",
                        },
                        filter: "grayscale(1)",
                    }}
                >
                    <Box
                        ref={glowRef}
                        className="absolute inset-0 rounded-2xl blur-xl shadow-[0_0_50px_20px_rgb(255, 248, 248)] ring-[15px] ring-[#ffffff]"
                    />

                    <CardContent className="relative z-10 w-3/4 h-3/4 flex items-center justify-center">
                        {icon}
                    </CardContent>
                </Card>
            </Tooltip>
        </Box>
    );
};

export default TiltCard;

// bg-gradient-to-br from-indigo-900/30 via-purple-800/30 to-cyan-700/30
// bg-gradient-to-tl from-slate-800 via-gray-800 to-zinc-900 to-75%
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect, useRef } from "react"
// import gsap from "gsap"

// interface CardProps {
//     icon: React.ReactNode,
//     skill: string
// }

// const TiltCard = ({ icon, skill }: CardProps) => {
//     const cardRef = useRef(null);
//     const glowRef = useRef(null);

//     useEffect(() => {
//         // Set initial states
//         if (cardRef.current && glowRef.current) {
//             gsap.set(glowRef.current, {
//                 opacity: 0,
//                 scale: 0.85,
//             });
//         }
//     }, []);

//     const handleMouseEnter = () => {
//         if (cardRef.current && glowRef.current) {
//             // Animate glow effect
//             gsap.to(glowRef.current, {
//                 opacity: 0.8,
//                 scale: 1,
//                 duration: 0.3,
//                 ease: "power2.out",
//             });

//             // Slightly scale up the card
//             gsap.to(cardRef.current, {
//                 scale: 1.02,
//                 duration: 0.3,
//                 ease: "power2.out",
//             });
//         }
//     };

//     const handleMouseLeave = () => {
//         if (cardRef.current && glowRef.current) {
//             // Hide glow effect
//             gsap.to(glowRef.current, {
//                 opacity: 0,
//                 scale: 0.85,
//                 // duration: 0.001,
//                 ease: "power2.in",
//             });

//             // Return card to original size
//             gsap.to(cardRef.current, {
//                 scale: 1,
//                 // duration: 0.2,
//                 ease: "power2.in",
//             });
//         }
//     };
//     // const cardRef = useRef<HTMLDivElement>(null)

//     // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     //     const card = cardRef.current
//     //     if (!card) return

//     //     const bounds = card.getBoundingClientRect()
//     //     const x = e.clientX - bounds.left
//     //     const y = e.clientY - bounds.top
//     //     const centerX = bounds.width / 2
//     //     const centerY = bounds.height / 2

//     //     const maxRotation = 3
//     //     const rotateX = Math.max(-maxRotation, Math.min(maxRotation, -(y - centerY) / 10))
//     //     const rotateY = Math.max(-maxRotation, Math.min(maxRotation, (x - centerX) / 10))

//     //     gsap.set(card, {
//     //         rotateX,
//     //         rotateY,
//     //         scale: 1.015,
//     //         transformPerspective: 800,
//     //         transformOrigin: "center center",
//     //         duration: 0.2
//     //     })
//     // }

//     // const handleMouseLeave = () => {
//     //     const card = cardRef.current
//     //     if (!card) return

//     //     gsap.set(card, {
//     //         rotateX: 0,
//     //         rotateY: 0,
//     //         scale: 1,
//     //     })
//     // }

//     return (
//         <div
//             ref={cardRef}
//             className="relative h-40 w-full bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}>
//             {/* Glow effect layer */}
//             <div
//                 ref={glowRef}
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
//             />

//             {/* Content container */}
//             <div className="relative z-10 w-3/4 h-3/4 flex items-center justify-center">
//                 {icon}
//             </div>
//         </div>
//         // <div
//         //     onMouseMove={handleMouseMove}
//         //     onMouseLeave={handleMouseLeave}
//         //     className="[perspective:800px] cursor-pointer">
//         //     <div
//         //         ref={cardRef}
//         //         className="will-change-transform transform-style-preserve-3d
//         //            bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700
//         //            flex items-center justify-center p-16 rounded-2xl">
//         //         {children}
//         //     </div>
//         // </div>
//     )
// }

// export default TiltCard
