import { alpha, createTheme, experimental_sx as sx } from '@mui/material';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#e33054"
        },
        secondary: {
            main: "#19325c"
        },
        blue_background: {
            main: alpha(blue[100], 0.15)
        }
    },

    typography: {
        fontFamily: ['"Poppins"','sans-serif'].join(','),
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: sx({
                    px: {md: "2rem !important", lg: "3rem !important", xl: "4rem !important"},
                })
            }
        },

        MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
                body: {
                    backgroundColor: alpha(blue[100], 0.15)
                }
            })
        }
    }
});