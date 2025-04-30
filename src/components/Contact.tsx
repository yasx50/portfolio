import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { Box, FormControl, Input, InputLabel, Typography, Button, Alert, Snackbar, SnackbarCloseReason } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Icon } from "@iconify/react/dist/iconify.js"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const COLORS = {
    primary: "#8A2BE2",
    secondary: "#00FFFF",
    tertiary: "#FF4081",
    darkBg: "rgba(10, 10, 15, 0.7)",
    glassBg: "rgba(30, 30, 40, 0.4)",
    lightText: "#FFFFFF",
    darkText: "#121212",
    accentGlow: "0 0 15px rgba(138, 43, 226, 0.6)",
}

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay: custom * 0.1,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    })
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const StyledFormControl = styled(FormControl)({
    marginBottom: "1.5rem",
    width: "100%",
    "& .MuiInput-underline:before": {
        borderBottomColor: "rgba(255,255,255,0.3)",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: COLORS.secondary,
    },
    "& .MuiInputLabel-root": {
        color: "rgba(255,255,255,0.8)",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        fontWeight: 300,
        letterSpacing: "0.05em",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: COLORS.secondary,
        fontWeight: 400,
    },
    "& .MuiInput-root": {
        fontSize: "1.1rem",
        color: COLORS.lightText,
        "&:after": {
            borderBottomColor: COLORS.primary,
        },
    },
    "& .MuiInput-input": {
        padding: "0.6rem 0",
        "&::placeholder": {
            color: "rgba(255,255,255,0.5)",
        },
    },
});

const GlowButton = styled(Button)({
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
    color: COLORS.lightText,
    fontWeight: 500,
    letterSpacing: "0.15em",
    padding: "0.9rem 2.5rem",
    borderRadius: "4px",
    textTransform: "uppercase",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(138, 43, 226, 0.3)",
    transition: "all 0.4s ease",
    "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 7px 25px rgba(138, 43, 226, 0.5)",
    },
    "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
        transition: "0.5s",
    },
    "&:hover:before": {
        left: "100%",
    },
});

const SocialIcon = styled(Box)(() => ({
    borderRadius: "50%",
    background: COLORS.glassBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: COLORS.accentGlow,
        border: `1px solid ${COLORS.secondary}`,
    }
}));

const ContactItem = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    background: COLORS.glassBg,
    backdropFilter: "blur(8px)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    "&:hover": {
        transform: "translateX(10px)",
        background: "rgba(40, 40, 60, 0.6)",
        boxShadow: COLORS.accentGlow,
        border: `1px solid ${COLORS.secondary}`,
    }
}));

type Form = {
    name: string,
    email: string,
    message: string
}

const Contact = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const ctaRef = useRef(null);
    const formRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<Form>({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<'success' | 'error' | 'info'>('success');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate the form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('info');
            setMessage("Please complete all fields before sending.");
            setOpen(true);
            return;
        }
        
        setLoading(true);
        
        // Use EmailJS to send the email
        emailjs
            .sendForm(
                'service_nmpi3tp', 
                'template_ita3xki', 
                formRef.current, 
                '_PaY40W8-ouYRmV8k'
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setFormData({ name: "", email: "", message: "" });
                    setStatus('success');
                    setMessage("Your message has been sent successfully!");
                    setOpen(true);
                },
                (error) => {
                    console.error('Failed to send email:', error.text);
                    setStatus('error');
                    setMessage("Failed to send your message. Please try again later.");
                    setOpen(true);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        gsap.set([titleRef.current, textRef.current, ctaRef.current], {
            opacity: 0,
            y: 50
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        tl.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(textRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5")
            .to(ctaRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            tl.kill();
        };
    }, []);

    return (
        <>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={status}
                    variant="filled"
                    sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <Box
                id="contact"
                component={motion.section}
                className="container mx-auto px-6 py-24 md:py-32 relative"
                sx={{
                    padding: {
                        xs: "2rem 1rem",
                        sm: "3rem 2rem",
                        md: "4rem 3rem",
                        lg: "6rem 4rem"
                    }
                }}>

                {/* Main content */}
                <Box
                    ref={containerRef}
                    component="div"
                    mb={10}
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        paddingX: {
                            xs: "1rem",
                            sm: "2rem",
                            md: "5rem",
                            lg: "10rem"
                        }
                    }}
                >
                    <Typography
                        ref={titleRef}
                        variant="h4"
                        mb={3}
                        sx={{
                            background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.primary} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            fontSize: {
                                xs: "1.8rem",
                                sm: "2rem",
                                md: "2.5rem"
                            },
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                        }}
                    >
                        Beyond the Code
                    </Typography>

                    <Typography
                        ref={textRef}
                        variant="body1"
                        sx={{
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.2rem"
                            },
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                            lineHeight: 1.5,
                            letterSpacing: "0.02em",
                            fontWeight: 400,
                            textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                        }}
                    >
                        In every pixel I perfect and every interaction I refine, I see more than just design, I see possibility.
                        My passion for development isn't confined to the boundaries of my own projects. It's fueled by curiosity, shaped by collaboration, and driven by a relentless desire to evolve.
                        <br /><br />
                        I don't just build to ship. I build to grow with the teams I'm part of, and the vision we share.
                        In a world that's ever-changing, I remain a constant learner, seeking challenges that push my craft forward.
                        I thrive in environments where innovation is nurtured, where mentorship flows both ways, and where impact is measured not just in deployments, but in the lives we touch through technology.
                        <br /><br />
                        <Box component="span" sx={{
                            color: COLORS.secondary,
                            fontWeight: 500,
                            letterSpacing: "0.05em",
                            fontSize: "1.5rem",
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}>
                            Let's build the future together.
                        </Box>
                    </Typography>
                </Box>

                <Box
                    component={motion.div}
                    variants={fadeInUp}
                    custom={3}
                    sx={{
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "1200px",
                    }}
                >
                    <Typography
                        variant="h3"
                        component={motion.h3}
                        variants={fadeInUp}
                        custom={4}
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            textAlign: "center",
                            marginBottom: "3rem",
                            textTransform: "uppercase",
                            fontWeight: 800,
                            letterSpacing: "0.3em",
                            color: COLORS.lightText,
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            position: "relative",
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                bottom: "-15px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "80px",
                                height: "3px",
                                background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                                borderRadius: "3px",
                            }
                        }}
                    >
                        contact
                    </Typography>

                    <Box
                        component={motion.div}
                        className="flex flex-col md:flex-row gap-6 lg:gap-12"
                        sx={{ position: "relative" }}
                    >
                        {/* Contact form */}
                        <Box
                            component={motion.form}
                            ref={formRef}
                            onSubmit={handleSubmit}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={5}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex-1"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                padding: { xs: "1.5rem", md: "2.5rem" },
                                borderRadius: "12px",
                                background: COLORS.glassBg,
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                position: "relative",
                                overflow: "hidden",
                                "&:before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "3px",
                                    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.tertiary})`,
                                }
                            }}
                        >
                            <StyledFormControl>
                                <InputLabel htmlFor="user_name">Your Name</InputLabel>
                                <Input
                                    id="user_name"
                                    name="user_name"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                    value={formData.name}
                                    fullWidth
                                />
                            </StyledFormControl>

                            <StyledFormControl>
                                <InputLabel htmlFor="user_email">Your Email</InputLabel>
                                <Input
                                    id="user_email"
                                    name="user_email"
                                    type="email"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                    value={formData.email}
                                    fullWidth
                                />
                            </StyledFormControl>

                            <StyledFormControl>
                                <InputLabel htmlFor="message">Your Message</InputLabel>
                                <Input
                                    id="message"
                                    name="message"
                                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                    value={formData.message}
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </StyledFormControl>

                            <GlowButton
                                type="submit"
                                disabled={loading}
                                sx={{
                                    alignSelf: "flex-start",
                                    marginTop: "1rem",
                                    opacity: loading ? 0.7 : 1,
                                }}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </GlowButton>
                        </Box>

                        {/* Contact info */}
                        <Box
                            component={motion.div}
                            variants={fadeInUp}
                            custom={6}
                            className="flex-1"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "1.5rem",
                                padding: { xs: "1rem", md: "2rem" },
                            }}
                        >
                            <Box component={motion.div}
                                variants={fadeInUp}
                                custom={7}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.5rem"
                                }}
                            >
                                {/* Email */}
                                <Box
                                    component={motion.div}
                                    whileHover={{
                                        x: 20,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}>

                                    <ContactItem>
                                        <Box
                                            component={"a"}
                                            href="mailto:yasxcode@gmail.com"
                                            sx={{
                                                borderRadius: "50%",
                                                width: "45px",
                                                height: "45px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: `linear-gradient(135deg, ${COLORS.primary}40, ${COLORS.secondary}40)`,
                                                boxShadow: `0 0 15px ${COLORS.primary}40`,
                                            }}
                                        >
                                            <Icon
                                                icon="lets-icons:e-mail"
                                                width={24}
                                                height={24}
                                                style={{ color: COLORS.secondary }}
                                            />
                                        </Box>
                                        <Typography
                                            component={"a"}
                                            href="mailto:yasxcode@gmail.com"
                                            sx={{
                                                fontSize: "1.1rem",
                                                fontWeight: 300,
                                                letterSpacing: "0.05em",
                                                color: COLORS.lightText,
                                            }}
                                        >
                                        yasxcode@gmail.com
                                        </Typography>
                                    </ContactItem>
                                </Box>

                                {/* Phone */}
                                <Box
                                    component={motion.div}
                                    whileHover={{
                                        x: 20,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}>
                                    <ContactItem>
                                        <Box
                                            component={"a"}
                                            href="tel:+918668267011"
                                            sx={{
                                                borderRadius: "50%",
                                                width: "45px",
                                                height: "45px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: `linear-gradient(135deg, ${COLORS.primary}40, ${COLORS.secondary}40)`,
                                                boxShadow: `0 0 15px ${COLORS.primary}40`,
                                            }}
                                        >
                                            <Icon
                                                icon="noto:telephone-receiver"
                                                width={24}
                                                height={24}
                                                style={{ color: COLORS.secondary }}
                                            />
                                        </Box>
                                        <Typography
                                            component={"a"}
                                            href="tel:+918668267011"
                                            sx={{
                                                fontSize: "1.1rem",
                                                fontWeight: 300,
                                                letterSpacing: "0.05em",
                                                color: COLORS.lightText,
                                            }}
                                        >
                                            +91 8668267011
                                        </Typography>
                                    </ContactItem>
                                </Box>

                                {/* Location */}
                                <Box
                                    component={motion.div}
                                    whileHover={{
                                        x: 20,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}>
                                    <ContactItem>
                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                width: "45px",
                                                height: "45px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: `linear-gradient(135deg, ${COLORS.primary}40, ${COLORS.secondary}40)`,
                                                boxShadow: `0 0 15px ${COLORS.primary}40`,
                                            }}
                                        >
                                            <Icon
                                                icon="fluent-color:location-ripple-16"
                                                width={24}
                                                height={24}
                                                style={{ color: COLORS.secondary }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: "1.1rem",
                                                fontWeight: 300,
                                                letterSpacing: "0.05em",
                                                color: COLORS.lightText,
                                            }}
                                        >
                                            Mumbai, Maharashtra, India
                                        </Typography>
                                    </ContactItem>
                                </Box>
                            </Box>

                            {/* Social icons */}
                            <Box
                                component={motion.div}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                sx={{
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        sm: "space-between"
                                    },
                                    flexWrap: "wrap",
                                    gap: "1rem",
                                    marginTop: "1.5rem",
                                    padding: "1rem",
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <SocialIcon>
                                        <Box component={"a"} href="https://github.com/yasx50">
                                            <Icon
                                                icon="mdi:github"
                                                width={24}
                                                height={24}
                                                style={{ color: COLORS.lightText }}
                                                className="transition-all duration-300"
                                            />
                                        </Box>
                                    </SocialIcon>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <SocialIcon>
                                        <Box component={"a"} href="https://x.com/">
                                            <Icon
                                                icon="bi:twitter-x"
                                                width={22}
                                                height={22}
                                                style={{ color: COLORS.lightText }}
                                                className="transition-all duration-300"
                                            />
                                        </Box>
                                    </SocialIcon>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <SocialIcon>
                                        <Box component={"a"} href="https://www.linkedin.com/in/yash-yadav-y05/">
                                            <Icon
                                                icon="logos:linkedin-icon"
                                                width={22}
                                                height={22}
                                                className="transition-all duration-300"
                                            />
                                        </Box>
                                    </SocialIcon>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <SocialIcon>
                                        <Box component={"a"} href="https://www.instagram.com/yash___yadu1c/">
                                            <Icon
                                                icon="skill-icons:instagram"
                                                width={22}
                                                height={22}
                                                className="transition-all duration-300"
                                            />
                                        </Box>
                                    </SocialIcon>
                                </motion.div>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </Box >
        </>
    )
}

export default Contact