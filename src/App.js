import {  CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./common/header/Header";
import { theme } from "./Theme";

function App() {
    return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
			</ThemeProvider>
		</>
    );
}

export default App;
