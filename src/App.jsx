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

const portfolioImagenes = [
  {
    img: img01,
    title: "Nombre",
    author: "@artista",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: img02,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img03,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img04,
    title: "Nombre",
    author: "@artista",
    cols: 2,
  },
  {
    img: img05,
    title: "Nombre",
    author: "@artista",
    cols: 2,
  },
  {
    img: img06,
    title: "Nombre",
    author: "@artista",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: img07,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img08,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img09,
    title: "Nombre",
    author: "@artista",
    rows: 2,
    cols: 2,
  },
  {
    img: img10,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img11,
    title: "Nombre",
    author: "@artista",
  },
  {
    img: img12,
    title: "Nombre",
    author: "@artista",
    cols: 2,
  },
];
const habilidades = [
  { label: "Illustration" },
  { label: "Digital Painting" },
  { label: "3D" },
  { label: "Prop Modeling" },
  { label: "2D" },
  { label: "Digital Sculpting" },
];
const botonesContacto = [
  { label: "Gmail", link: "mailto:ivoryredgrave@gmail.com" },
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
        altAvatar="Avatar de @artista"
        nombre="@artista"
        ubicacion="Ubicación"
        ocupacion="Ocupación"
      />

      <FullWidthTabs
        portfolioImagenes={portfolioImagenes}
        sobreMi={
          <BasicCard
            titulo="@artista - sobre mi"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            textoContacto="Contacto"
            textoHabilidades="Habilidades"
            habilidades={habilidades}
            botonesContacto={botonesContacto}
          />
        }
      />

      <Footer textoFooter="Desarrollado por Ivory 💕" />
    </ThemeProvider>
  );
}

export default App;
