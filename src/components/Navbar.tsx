import { AppBar, Box, Toolbar, Typography, useScrollTrigger, Slide, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'motion/react';

interface HideOnScrollProps {
    children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        { label: 'Skills', path: '#skills' },
        { label: 'Projects', path: '#projects' },
        { label: 'Contact', path: '#contact' }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <HideOnScroll>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    borderBottom: '0'
                }}
            >
                <Toolbar
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto p-4 py-6 flex items-center justify-between"
                >
                    <motion.div variants={logoVariants}>
                        <Typography
                            variant="h4"
                            component="h1"
                            className="text-4xl flex-1 uppercase !font-bold tracking-[0.2px]"
                            sx={{ flexGrow: 1 }}
                        >
                            Yash
                        </Typography>
                    </motion.div>

                    {!isMobile && (
                        <Box
                            component={motion.div}
                            variants={containerVariants}
                            sx={{
                                display: 'flex',
                                gap: 4,
                            }}
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.label}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Box
                                        component={"a"}
                                        href={item.path}
                                        color="inherit"
                                        sx={{
                                            fontSize: '1.25rem',
                                            textTransform: 'none',
                                            fontWeight: 'normal',
                                            '&:hover': {
                                                color: '#EAD196',
                                                backgroundColor: "transparent",
                                                opacity: 0.8,
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;
