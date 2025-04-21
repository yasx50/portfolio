import { Box, Typography, Container } from '@mui/material';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <Container component="section" maxWidth={false} className="p-32 space-y-10 container">
            <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="uppercase text-center !text-[7rem] leading-0 !font-bold tracking-widest"
            >
                frontend developer
            </Typography>

            <Typography
                variant="h5"
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-3xl w-1/2 !mx-auto text-center font-extralight !mt-10"
                paragraph
            >
                Hi, I'm{' '}
                <Box
                    component="span"
                    className="!font-semibold tracking-[1px] italic text-2xl hover:not-italic transition-all duration-150 cursor-text"
                >
                    Rohit Khatri
                </Box>
                , a developer from Rajasthan, India. I love creating impactful solutions and constantly learning through technology.
            </Typography>
        </Container>
    );
};

export default Hero;