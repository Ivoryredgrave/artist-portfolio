import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import Typewriter from "typewriter-effect";
import Person4Icon from '@mui/icons-material/Person4';

export default function AboutMe() {

  return (
    <Box className="aboutme">
      <div className="animacion">

        <Container>

          <Box sx={{ marginTop: 8 }} display="flex" justifyContent="center">
            <Avatar alt="Tu nombre" sx={{ bgcolor: "#e3e3e3", width: 148, height: 148 }}>
              <Person4Icon />
            </Avatar>
          </Box>

          <br />

          <Typography align="center" variant="h4" display="block" gutterBottom>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Tu nombre")
                  .start();
              }}
            />
          </Typography>

          <Typography align="center" variant="subtitle1" display="block" gutterBottom>
            Ocupación
          </Typography>

          <Typography align="center" variant="subtitle1" display="block" gutterBottom>
            Ubicación
          </Typography>

        </Container>
        
      </div>
    </Box>
  );
}
