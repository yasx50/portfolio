import TiltCard from "./TiltCard"
import { Icon } from "@iconify/react";

const skills = [
    {
        id: 1,
        skill: "JavaScript",
        icon: <Icon icon="cib:javascript" width={70} height={70} />,
    },
    {
        id: 3,
        skill: "ReactJS",
        icon: <Icon icon="simple-icons:react" width={70} height={70} />,
    },
    {
        id: 4,
        skill: "TyepScript",
        icon: <Icon icon="file-icons:typescript-alt" width={70} height={70} />,
    },
    {
        id: 5,
        skill: "Tailwind CSS",
        icon: <Icon icon="simple-icons:tailwindcss" width={70} height={70} />,
    },
    {
        id: 6,
        skill: "HTML",
        icon: <Icon icon="flowbite:html-solid" width={70} height={70} />,
    },
    {
        id: 7,
        skill: "CSS",
        icon: <Icon icon="flowbite:css-solid" width={70} height={70} />,
    },
    {
        id: 8,
        skill: "Node.js",
        icon: <Icon icon="lineicons:nodejs-alt" width={70} height={70} />,
    },
    {
        id: 9,
        skill: "Express",
        icon: <Icon icon="skill-icons:expressjs-light" width={70} height={70} />,
    },
    {
        id: 10,
        skill: "MongoDB",
        icon: <Icon icon="devicon-plain:mongodb-wordmark" width={70} height={70} />,
    },
    {
        id: 13,
        skill: "GitHub",
        icon: <Icon icon="line-md:github-loop" width={70} height={70} />,
    },
    {
        id: 18,
        skill: "GSAP",
        icon: <Icon icon="simple-icons:greensock" width={70} height={70} />,
    },
    {
        id: 2,
        skill: "Java",
        icon: <Icon icon="ri:java-fill" width={70} height={70} />,
    },
];

const Skills = () => {

    return (
        <section className="container mx-auto p-32 pt-20">
            <h3 className="text-3xl text-center pb-16">Languages & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 px-16 md:p-0 gap-5">
                {skills.map((skill) => (
                    <TiltCard key={skill.id}>
                        {skill.icon}
                    </TiltCard>
                ))}
            </div>
        </section>
    )
}

export default Skills