/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, FormControl, Input, InputLabel, Typography, Button } from "@mui/material"
import { motion } from "motion/react"
import { styled } from "@mui/material/styles"
import { Icon } from "@iconify/react/dist/iconify.js"

const COLORS = {
    primary: "#8A2BE2", // Vibrant purple
    secondary: "#00FFFF", // Cyan for accents
    tertiary: "#FF4081", // Pink for hover effects
    darkBg: "rgba(10, 10, 15, 0.7)",
    glassBg: "rgba(30, 30, 40, 0.4)",
    lightText: "#FFFFFF",
    darkText: "#121212",
    accentGlow: "0 0 15px rgba(138, 43, 226, 0.6)",
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: custom * 0.2,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    })
}

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

const Contact = () => {
    return (
        <Box
            id="contact"
            component={motion.section}
            className="container mx-auto px-6 py-24 md:py-32 relative"
            sx={{
                background: "radial-gradient(circle at center, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
            }}
        >
            {/* <Box
                component={motion.div}
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                }}
            /> */}
            {/* <Box
                component={motion.div}
                sx={{
                    position: "absolute",
                    bottom: "20%",
                    left: "10%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                    filter: "blur(60px)",
                    zIndex: 0,
                }}
            /> */}

            {/* Main content */}
            <Box component={motion.div}
                variants={fadeInUp}
                custom={0}
                mb={10}
                sx={{ position: "relative", zIndex: 1, paddingX: "10rem" }}
            >
                <Typography
                    variant="h4"
                    fontSize={"2.5rem"}
                    mb={3}
                    component={motion.h4}
                    variants={fadeInUp}
                    custom={1}
                    sx={{
                        background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.primary} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                    }}
                >
                    Beyond the Code
                </Typography>

                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={fadeInUp}
                    custom={2}
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        letterSpacing: "0.02em",
                        fontWeight: 300,
                        // maxWidth: "900px",
                        color: "rgba(255,255,255,0.9)",
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
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
                        textShadow: `0 0 20px ${COLORS.primary}`,
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
                        variants={fadeInUp}
                        custom={5}
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
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input
                                id="name"
                                name="name"
                                fullWidth
                            />
                        </StyledFormControl>

                        <StyledFormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </StyledFormControl>

                        <StyledFormControl>
                            <InputLabel htmlFor="message">Your Message</InputLabel>
                            <Input
                                id="message"
                                name="message"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </StyledFormControl>

                        <GlowButton
                            type="submit"
                            sx={{
                                alignSelf: "flex-start",
                                marginTop: "1rem",
                            }}
                        >
                            Send Message
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
                            <ContactItem>
                                <Box
                                    component={"a"}
                                    href="mailto:rohitkhatri.dev@gmail.com"
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
                                    href="mailto:rohitkhatri.dev@gmail.com"
                                    sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 300,
                                        letterSpacing: "0.05em",
                                        color: COLORS.lightText,
                                    }}
                                >
                                    rohitkhatri.dev@gmail.com
                                </Typography>
                            </ContactItem>

                            {/* Phone */}
                            <ContactItem >
                                <Box
                                    component={"a"}
                                    href="tel:+916375519489"
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
                                    href="tel:+916375519489"
                                    sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 300,
                                        letterSpacing: "0.05em",
                                        color: COLORS.lightText,
                                    }}
                                >
                                    +91 6375519489
                                </Typography>
                            </ContactItem>

                            {/* Location */}
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
                                    Ajmer, Rajasthan, India
                                </Typography>
                            </ContactItem>
                        </Box>

                        {/* Social icons */}
                        <Box
                            component={motion.div}
                            variants={fadeInUp}
                            custom={8}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "1rem",
                                marginTop: "1.5rem",
                                padding: "1rem",
                            }}
                        >
                            <SocialIcon>
                                <Icon
                                    icon="mdi:github"
                                    width={24}
                                    height={24}
                                    style={{ color: COLORS.lightText }}
                                    className="transition-all duration-300"
                                />
                            </SocialIcon>
                            <SocialIcon>
                                <Icon
                                    icon="bi:twitter-x"
                                    width={22}
                                    height={22}
                                    style={{ color: COLORS.lightText }}
                                    className="transition-all duration-300"
                                />
                            </SocialIcon>
                            <SocialIcon>
                                <Icon
                                    icon="logos:linkedin-icon"
                                    width={22}
                                    height={22}
                                    className="transition-all duration-300"
                                />
                            </SocialIcon>
                            <SocialIcon>
                                <Icon
                                    icon="skill-icons:instagram"
                                    width={22}
                                    height={22}
                                    className="transition-all duration-300"
                                />
                            </SocialIcon>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact