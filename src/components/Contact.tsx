import { Box, FormControl, Input, InputLabel, Typography, Button } from "@mui/material"
import { motion } from "framer-motion"
import { styled } from "@mui/material/styles"
import { Icon } from "@iconify/react/dist/iconify.js";

// Styled components for custom styling
const StyledFormControl = styled(FormControl)({
    marginBottom: "2rem",
    width: "100%",
    "& .MuiInput-underline:before": {
        borderBottomColor: "#fff",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "rgba(255,255,255,0.5)",
    },
    "& .MuiInputLabel-root": {
        color: "#fff",
        fontSize: "1rem",
        transition: "all 0.3s ease",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#fff",
    },
    "& .MuiInput-root": {
        fontSize: "1.1rem",
        "&:after": {
            borderBottomColor: "#fff",
        },
    },
});

const Contact = () => {
    return (
        <Box component={motion.section}
            className="container mx-auto p-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Box component={motion.div} mb={10}>
                <Typography variant="h4"
                    fontSize={"2.5rem"}
                    mb={3}
                    component={motion.h4}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}>
                    Beyond the Code
                </Typography>

                <Typography variant="h4"
                    component={motion.p}
                    className="text-shadow-lg"
                    fontSize={"1.8rem"}
                    lineHeight={1.2}
                    letterSpacing={1.2}
                    fontWeight={500} >
                    In every pixel I perfect and every interaction I refine, I see more than just design, I see possibility.
                    My passion for development isn’t confined to the boundaries of my own projects. It’s fueled by curiosity, shaped by collaboration, and driven by a relentless desire to evolve.

                    I don't just build to ship. I build to grow with the teams I'm part of, and the vision we share.
                    In a world that’s ever-changing, I remain a constant learner, seeking challenges that push my craft forward.
                    I thrive in environments where innovation is nurtured, where mentorship flows both ways, and where impact is measured not just in deployments, but in the lives we touch through technology.

                    Let’s build the future together.
                </Typography>
            </Box>

            <Box component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                sx={{ margin: "0 auto" }}>
                <Typography
                    variant="h3"
                    component={motion.h3}
                    className="!text-shadow-black !text-shadow-xs"
                    sx={{
                        fontSize: "2.5rem",
                        textAlign: "center",
                        marginBottom: "3rem",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        letterSpacing: "0.2em"
                    }}>
                    contact
                </Typography>

                <Box component={motion.div} className="flex justify-between">
                    <Box
                        component={motion.form}
                        // border={1}
                        className="!flex-1 !text-white"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "2rem",
                            borderRadius: "8px",
                            background: "rgba(236, 223, 204,0.08)", // subtle white background
                            backdropFilter: "blur(2px)", // creates the blur effect
                            WebkitBackdropFilter: "blur(10px)", // for Safari support
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                            // border: "1px solid rgba(255, 255, 255, 0.18)", // subtle border
                        }}>
                        <StyledFormControl>
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input
                                id="name"
                                name="name"
                                fullWidth
                                sx={{ padding: "0.5rem 0" }}
                            />
                        </StyledFormControl>

                        <StyledFormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                fullWidth
                                sx={{ padding: "0.5rem 0" }}
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
                                sx={{ padding: "0.5rem 0" }}
                            />
                        </StyledFormControl>

                        <Button
                            variant="contained"
                            sx={{
                                marginTop: "1rem",
                                padding: "0.8rem 2rem",
                                letterSpacing: "0.1em",
                                transition: "all 0.3s ease",
                                background: "transparent",
                                "&:hover": {
                                    opacity: "80%",
                                },
                                boxShadow: "none"
                            }}>
                            Send Message
                        </Button>
                    </Box>
                    <Box component={motion.div} className="!flex-1 font-sans relative">
                        <Box component={motion.div} className="flex flex-col justify-center gap-16 absolute top-1/2 left-1/2 -translate-[50%]" fontSize={"1.5rem"}>
                            <Box component={"div"} className="group">
                                <Box component={"a"} href="mailto:rohitkhatri.dev@gmail.com" className="flex items-center gap-x-3 grayscale transition-all duration-300 group-hover:grayscale-0 !text-shadow-black !text-shadow-xs group-hover:scale-3d group-hover:scale-105 ">
                                    <Icon icon="lets-icons:e-mail" width={38} height={38} className="bg-gray-400 group-hover:bg-lime-38 rounded-3xl p-1" />
                                    rohitkhatri.dev@gmail.com
                                </Box>
                            </Box>
                            <Box component={"div"} className="group">
                                <Box component={"a"} className="flex items-center gap-x-3 grayscale !text-shadow-black !text-shadow-xs group-hover:grayscale-0 transition-all duration-300 group-hover:scale-3d group-hover:scale-105">
                                    <Icon icon="noto:telephone-receiver" width={38} height={38} className="bg-gray-400 rounded-3xl p-1" />
                                    +91 6375519489
                                </Box>
                            </Box>
                            <Box component={"div"} className="group">
                                <Box component={"a"} className="flex items-center gap-x-3 grayscale !text-shadow-black !text-shadow-xs group-hover:grayscale-0 transition-all duration-300 group-hover:scale-3d group-hover:scale-105">
                                    <Icon icon="fluent-color:location-ripple-16" width={38} height={38} className="bg-gray-400 rounded-3xl p-1" />
                                    Ajmer, Rajasthan, India
                                </Box>
                            </Box>
                            <Box component={"div"} className="flex items-center justify-between">
                                <Icon icon="mdi:github" width={50} height={50} className="bg-gray-400 rounded-3xl p-1 grayscale hover:grayscale-0 transition-all duration-300" />
                                <Icon icon="bi:twitter-x" width={50} height={50} className="bg-gray-400 rounded-2xl p-1 grayscale hover:grayscale-0 transition-all duration-300 " />
                                <Icon icon="logos:linkedin-icon" width={50} height={50} className="bg-gray-400 rounded-2xl p-1 grayscale hover:grayscale-0 transition-all duration-300 " />
                                <Icon icon="skill-icons:instagram" width={50} height={50} className="bg-gray-400 rounded-2xl p-1 grayscale hover:grayscale-0 transition-all duration-300 " />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Contact