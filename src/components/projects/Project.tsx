import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "motion/react"; // use framer-motion instead of motion/react
import { useState } from "react";

const Project = () => {

    const [img1, setImg1] = useState(1);
    const [img2, setImg2] = useState(1);

    return (
        <Container component={motion.section} className="container py-20">
            <Typography
                variant="h3"
                component={motion.h3}
                className="!text-[2.5rem] text-center !mb-20 !text-shadow-black !text-shadow-xs uppercase !font-semibold"
            >
                Projects
            </Typography>

            <Grid container spacing={6}>
                {/* Subscription Tracker */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" className="font-semibold mb-3 text-white text-xl tracking-wide">
                        Subscription Tracker
                    </Typography>

                    <Box className="group relative p-4 border rounded-2xl bg-white/10 transition-all">
                        <img
                            src={`/img/projects/subscription/${img1}.png`}
                            className="rounded-xl group-hover:blur-xs duration-500 h-[18.4rem]"
                            alt="subscription tracker"
                        />
                        <Box className="absolute inset-0 flex items-center justify-center rounded-2xl">
                            <Button
                                variant="outlined"
                                color="inherit"
                                className="!text-2xl invisible group-hover:visible transition-opacity duration-500"
                                style={{ padding: ".5rem 1rem", fontSize: "2rem" }}
                                href="https://subtracking.vercel.app/"
                            >
                                View
                            </Button>
                        </Box>
                    </Box>

                    <Grid container columnSpacing={0.5} marginTop={3}>
                        {[2, 3, 4, 5].map((num) => (
                            <Grid size={{ xs: 3 }} key={num}>
                                <motion.img
                                    onMouseEnter={() => setImg1(num)}
                                    onMouseLeave={() => setImg1(1)}
                                    src={`/img/projects/subscription/${num}.png`}
                                    className="rounded-lg"
                                    alt={`subscription tracker ${num}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Dev Discuss */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" className="font-semibold mb-3 text-white text-xl tracking-wide">
                        Dev Discuss
                    </Typography>

                    <Box className="group relative p-4 border rounded-2xl bg-white/10 transition-all">
                        <img
                            src={`/img/projects/devdiscuss/${img2}.png`}
                            className="rounded-xl group-hover:blur-xs duration-500 h-[18.4rem]"
                            alt="dev discuss"
                        />
                        <Box className="absolute inset-0 flex items-center justify-center rounded-2xl">
                            <Button
                                variant="outlined"
                                color="inherit"
                                className="!text-2xl invisible group-hover:visible transition-opacity duration-500"
                                style={{ padding: ".5rem 1rem", fontSize: "2rem" }}
                                href="https://discussdev.vercel.app/"
                            >
                                View
                            </Button>
                        </Box>
                    </Box>

                    <Grid container spacing={1} marginTop={3}>
                        {[1, 2, 3, 4].map((num) => (
                            <Grid size={{ xs: 3 }} key={num}>
                                <motion.img
                                    onMouseEnter={() => setImg2(num)}
                                    onMouseLeave={() => setImg2(1)}
                                    src={`/img/projects/devdiscuss/${num}.png`}
                                    className="rounded-lg"
                                    alt={`subscription tracker ${num}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Project;
