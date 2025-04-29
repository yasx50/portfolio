import { useEffect, useRef } from "react";
import TiltCard from "./TiltCard"
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        id: 1,
        skill: "JavaScript",
        icon: <Icon icon="logos:javascript" width={70} height={70} />,
    },
    {
        id: 3,
        skill: "Python",
        icon: <Icon icon="logos:python" width={70} height={70} />,
    },
    {
        id: 4,
        skill: "TyepScript",
        icon: <Icon icon="devicon:typescript" width={70} height={70} />,
    },
    {
        id: 5,
        skill: "Flask",
        icon: <Icon icon="logos:flask" width={70} height={70} />,
    },
    {
        id: 5,
        skill: "Node Js",
        icon: <Icon icon="devicon:nodejs-wordmark" width={70} height={70} />,
    },
    {
        id: 5,
        skill: "FastApi",
        icon: <Icon icon="devicon:fastapi" width={70} height={70} />,
    },
    {
        id: 5,
        skill: "Express",
        icon: <Icon icon="skill-icons:expressjs-light" width={70} height={70} />,
    },
    {
        id: 18,
        skill: "My SQL",
        icon: <Icon icon="devicon:mysql" width={70} height={70} />,
    },
    {
        id: 18,
        skill: "MongoDB",
        icon: <Icon icon="devicon:mongodb-wordmark" width={70} height={70} />,
    },
   
    {
        id: 6,
        skill: "React",
        icon: <Icon icon="devicon:react" width={70} height={70} />,
    },
    {
        id: 7,
        skill: "Streamlit",
        icon: <Icon icon="devicon:streamlit" width={70} height={70} />,
    },
    {
        id: 18,
        skill: "GSAP",
        icon: <Icon icon="logos:greensock-icon" width={70} height={70} />,
    },
    {
        id: 9,
        skill: "Git",
        icon: <Icon icon="logos:git-icon" width={70} height={70} />,
    },
    {
        id: 10,
        skill: "GitHub",
        icon: <Icon icon="devicon:github" width={70} height={70} />,
    },
    {
        id: 13,
        skill: "Heroku",
        icon: <Icon icon="logos:heroku-icon" width={70} height={70} />,
    },
    {
        id: 2,
        skill: "Postman",
        icon: <Icon icon="devicon:postman" width={70} height={70} />,
    },
];
const Skills = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );

        // Enhanced cards animation
        if (cardsRef.current) {
            const cards = Array.from(cardsRef.current.children);

            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.8,
                    rotation: -5,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                }
            );

            cards.forEach(card => {
                gsap.to(card, {
                    paused: true,
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });
        }
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
        >
            <h3
                ref={titleRef}
                className="text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] text-center mb-12 sm:mb-16 lg:mb-20 text-shadow-black text-shadow-xs uppercase"
            >
                Languages & Technologies
            </h3>

            <div
                ref={cardsRef}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mx-auto max-w-7xl"
            >
                {skills.map((skill, index) => (
                    <TiltCard
                        key={`${skill.id}-${index}`}
                        icon={skill.icon}
                        skill={skill.skill}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
