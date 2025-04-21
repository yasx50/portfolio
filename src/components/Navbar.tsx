import { AppBar, Box, Button, Toolbar, Typography, useScrollTrigger, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const navItems = [
        { label: 'Skills', path: '#skills' },
        { label: 'Projects', path: '#projects' },
        { label: 'Contact', path: '#contact' }
    ];

    return (
        <HideOnScroll>
            <AppBar position="sticky" elevation={0} sx={{
                bgcolor: 'transparent',
                backgroundImage: 'none',
                borderBottom: '0'
            }}>
                <Toolbar className="container mx-auto p-4 py-6">
                    <Typography
                        variant="h4"
                        component="h1"
                        className="text-4xl flex-1 uppercase !font-bold tracking-[0.2px]"
                        sx={{ flexGrow: 1 }}
                    >
                        Rohit
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 4 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                onClick={() => navigate(item.path)}
                                sx={{
                                    fontSize: '1.25rem',
                                    textTransform: 'none',
                                    fontWeight: 'normal',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        opacity: 0.8,
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;