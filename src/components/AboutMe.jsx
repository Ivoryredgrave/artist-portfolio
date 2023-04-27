import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typewriter from "typewriter-effect";

export default function AboutMe(props) {
  return (
    <>
      <Box className="aboutme">
        <div className="animacion">
          <Container>
            <Box sx={{ marginTop: 8 }} display="flex" justifyContent="center">
              <Avatar
                alt={props.altAvatar}
                sx={{ bgcolor: "#e3e3e3", width: 148, height: 148 }}
              >
                {props.avatar}
              </Avatar>
            </Box>

            <br />

            <Typography
              align="center"
              variant="h4"
              display="block"
              gutterBottom
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(props.nombre).start();
                }}
              />
            </Typography>

            <Typography
              align="center"
              variant="subtitle1"
              display="block"
              gutterBottom
            >
              {props.ocupacion}
            </Typography>

            <Typography
              align="center"
              variant="subtitle1"
              display="block"
              gutterBottom
            >
              {props.ubicacion}
            </Typography>
          </Container>
        </div>
      </Box>
    </>
  );
}
