//components
import AboutMe from './components/AboutMe';
import FullWidthTabs from './components/FullWidthTabs';
import Footer from './components/Footer';
import BasicSpeedDial from './components/BasicSpeedDial';

//styles
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./styles/MuiStyles";
import './styles/App.css';

function App() {
    return (
            <ThemeProvider theme={darkTheme}>

                <CssBaseline />

                <BasicSpeedDial />
                <AboutMe />
                <FullWidthTabs />
                <Footer />

            </ThemeProvider>
    )
}

export default App;