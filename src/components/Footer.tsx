import { Box, Typography } from "@mui/material"
import { motion } from "motion/react"

const Footer = () => {
    return (
        <Box component={motion.footer} paddingBottom={5}>
            <Typography component={motion.p} textAlign={"center"} fontSize={"0.8rem"}>
                © 2025 Yash Yadav
            </Typography>
        </Box >
    )
}

export default Footer