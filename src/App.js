import {  CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./Theme";

function App() {
    return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Typography  color="initial">My App</Typography>
			</ThemeProvider>
		</>
    );
}

export default App;
