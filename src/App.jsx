import AboutMe from "./components/AboutMe";
import FullWidthTabs from "./components/FullWidthTabs";
import Footer from "./components/Footer";
import BasicCard from "./components/BasicCard";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./styles/MuiStyles";
import "./styles/App.css";

import Person4Icon from "@mui/icons-material/Person4";

import img01 from "./images/1.jpg";
import img02 from "./images/2.jpg";
import img03 from "./images/3.jpg";
import img04 from "./images/4.jpg";
import img05 from "./images/5.jpg";
import img06 from "./images/6.jpg";
import img07 from "./images/7.jpg";
import img08 from "./images/8.jpg";
import img09 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const defaultData = { title: "Name", author: "@artist" };
const portfolioImages = [
  { ...defaultData, img: img01 },
  { ...defaultData, img: img02 },
  { ...defaultData, img: img03 },
  { ...defaultData, img: img04 },
  { ...defaultData, img: img05 },
  { ...defaultData, img: img06 },
  { ...defaultData, img: img07 },
  { ...defaultData, img: img08 },
  { ...defaultData, img: img09 },
  { ...defaultData, img: img10 },
  { ...defaultData, img: img11 },
  { ...defaultData, img: img12 },
];

const skills = [
  { label: "Illustration" },
  { label: "Digital Painting" },
  { label: "3D" },
  { label: "Prop Modeling" },
  { label: "2D" },
  { label: "Digital Sculpting" },
];

const contactButtons = [
  {
    label: "Gmail",
    link: "mailto:ivoryredgrave@gmail.com"
  },
  {
    label: "WhatsApp",
    link: "https://api.whatsapp.com/send?text=¡Hola!&phone=+18493861171",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/carlos-javier-l%C3%B3pez/",
  },
];

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AboutMe
        avatar={<Person4Icon />}
        altAvatar="Avatar of @artist"
        name="@artist"
        location="Location"
        occupation="Occupation"
      />

      <FullWidthTabs
        portfolioImages={portfolioImages}
        aboutme={
          <BasicCard
            title="@artist - about me"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            contactText="Contact"
            skillsText="Skills"
            skills={skills}
            contactButtons={contactButtons}
          />
        }
      />

      <Footer text="Developed by Ivory 💕" />
    </ThemeProvider>
  );
}

export default App;
