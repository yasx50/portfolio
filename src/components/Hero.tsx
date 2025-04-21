import { Box, Typography, Container } from '@mui/material';
import { motion } from 'motion/react';

const Hero = () => {
    // Animation variants for the title
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    // Animation variants for the description
    const descriptionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
            }
        }
    };

    // Letter animation for name
    const nameLetters = "Rohit Khatri".split("");
    const letterVariants = {
        hover: {
            y: -5,
            color: "#8A2BE2",
            transition: { duration: 0.2 }
        }
    };

    return (
        <Container
            component="section"
            maxWidth={false}
            className="p-8 md:p-16 lg:p-32 space-y-6 md:space-y-10 container"
        >
            <Typography
                variant="h1"
                component={motion.h1}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="uppercase text-center !text-4xl sm:!text-5xl md:!text-6xl lg:!text-[7rem] leading-tight !font-bold tracking-wider md:tracking-widest"
            >
                frontend developer
            </Typography>

            <Typography
                variant="h5"
                component={motion.p}
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                className="!text-xl md:!text-2xl lg:!text-3xl w-full md:w-3/4 lg:w-1/2 !mx-auto text-center font-extralight !mt-4 md:!mt-6 lg:!mt-10"
                sx={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
                paragraph
            >
                Hi, I'm{' '}
                <Box component="span" className="inline-flex">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            whileHover="hover"
                            className="!font-semibold tracking-[1px] italic hover:not-italic transition-all duration-150 cursor-pointer"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </Box>
                {', '}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="block sm:inline mt-2 sm:mt-0"
                >
                    a developer from Rajasthan, India. I love creating impactful solutions and constantly learning through technology.
                </motion.span>
            </Typography>
        </Container>
    );
};

export default Hero;