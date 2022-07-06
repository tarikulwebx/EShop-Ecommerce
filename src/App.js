import {  CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import { theme } from "./Theme";

function App() {
    return (
		<>
			<BrowserRouter >
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Header />
					<AppRoutes />
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</>
    );
}

export default App;
