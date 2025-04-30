import { Box, Button, Container, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Project = () => {
    const [img1, setImg1] = useState(1);
    const [img2, setImg2] = useState(1);

    const sectionRef = useRef<HTMLDivElement>(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const projectVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    useEffect(() => {
        // Main project container animation
        gsap.fromTo(
            "#project",
            {
                opacity: 0,
                y: 100,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: {
                    amount: 0.4,
                    from: "start"
                },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    // markers: true,
                    scrub: 1,
                    toggleActions: "play none none reverse"
                },
            }
        );

        // Add hover animation
        gsap.utils.toArray("#project").forEach((project: any) => {
            gsap.to(project, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
                paused: true,
                yoyo: true,
                repeat: 0,
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                }
            });

            // Add hover listeners
            project.addEventListener("mouseenter", () => {
                gsap.to(project, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            project.addEventListener("mouseleave", () => {
                gsap.to(project, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in"
                });
            });
        });

        // Cleanup
        return () => {
            gsap.killTweensOf("#project");
        };
    }, []);
    return (
        <Container
            id="projects"
            component={motion.section}
            className="container py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            ref={sectionRef}
        >
            <Typography
                variant="h3"
                component={motion.h3}
                variants={titleVariants}
                className="!text-[2.5rem] md:!text-[3rem] text-center !mb-20 !text-shadow-black !text-shadow-xs uppercase !font-semibold"
            >
                Projects
            </Typography>

            <Grid container spacing={{ xs: 4, md: 6 }}>
                {/* Subscription Tracker */}
                <Grid id="project" size={{ xs: 12, md: 6 }}>
                    <motion.div variants={projectVariants}>
                        <Typography variant="h5" className="font-semibold mb-3 text-white text-xl md:text-2xl tracking-wide">
                            Subscription Tracker
                        </Typography>

                        <Box className="group relative p-2 md:p-4 border rounded-2xl bg-white/10 transition-all hover:shadow-lg">
                            <motion.img
                                src={`/img/projects/subscription/${img1}.png`}
                                className="rounded-xl group-hover:blur-xs duration-500 h-[15rem] md:h-[18.4rem] w-full object-cover"
                                alt="subscription tracker"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <Box className="absolute inset-0 flex items-center justify-center rounded-2xl">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        className="!text-xl md:!text-2xl invisible group-hover:visible transition-opacity duration-500"
                                        style={{ padding: ".5rem 1rem" }}
                                        href="https://subtracking.vercel.app/"
                                    >
                                        View
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box>

                        <Grid container columnSpacing={0.5} marginTop={3}>
                            {[1, 2, 3, 4].map((num) => (
                                <Grid size={{ xs: 3 }} key={num}>
                                    <motion.img
                                        onMouseEnter={() => setImg1(num)}
                                        onMouseLeave={() => setImg1(1)}
                                        src={`/img/projects/subscription/${num}.png`}
                                        className="rounded-lg w-full h-[4rem] md:h-[6rem] object-cover"
                                        alt={`subscription tracker ${num}`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Grid>

                {/* Dev Discuss */}
                <Grid id="project" size={{ xs: 12, md: 6 }}>
                    <motion.div variants={projectVariants}>
                        <Typography variant="h5" className="font-semibold mb-3 text-white text-xl md:text-2xl tracking-wide">
                            Talk To Titanic
                        </Typography>

                        <Box className="group relative p-2 md:p-4 border rounded-2xl bg-white/10 transition-all hover:shadow-lg">
                            <motion.img
                                src={`/img/projects/tailortalk/${img2}.png`}
                                className="rounded-xl group-hover:blur-xs duration-500 h-[15rem] md:h-[18.4rem] w-full object-cover"
                                alt="dev discuss"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <Box className="absolute inset-0 flex items-center justify-center rounded-2xl">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        className="!text-xl md:!text-2xl invisible group-hover:visible transition-opacity duration-500"
                                        style={{ padding: ".5rem 1rem" }}
                                        href="https://tailortalk.streamlit.app/"
                                    >
                                        View
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box>

                        <Grid container spacing={1} marginTop={3}>
                            {[1, 2, 3, 4].map((num) => (
                                <Grid size={{ xs: 3 }} key={num}>
                                    <motion.img
                                        onMouseEnter={() => setImg2(num)}
                                        onMouseLeave={() => setImg2(1)}
                                        src={`/img/projects/tailortalk/${num}.png`}
                                        className="rounded-lg w-full h-[4rem] md:h-[6rem] object-cover"
                                        alt={`dev discuss ${num}`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Project;