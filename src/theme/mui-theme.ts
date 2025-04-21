import { createTheme } from '@mui/material/styles';

// Create a theme instance that matches your current design aesthetic
const muiTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1', // Indigo color that matches your gradient
        },
        secondary: {
            main: '#a855f7', // Purple color from your gradient
        },
        background: {
            default: '#000000', // Dark slate color matching your background
            paper: '#1e293b', // Slightly lighter for cards
        },
        text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.1em',
        },
        h3: {
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

export default muiTheme;