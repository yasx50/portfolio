import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from './mui-theme';

interface MUIProviderProps {
    children: React.ReactNode;
}

const MUIProvider: React.FC<MUIProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    );
};

export default MUIProvider;