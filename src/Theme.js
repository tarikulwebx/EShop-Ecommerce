import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#e33054"
        },
        secondary: {
            main: "#19325c"
        },
    },

    typography: {
        fontFamily: ['"Poppins"','sans-serif'].join(','),
    },
});