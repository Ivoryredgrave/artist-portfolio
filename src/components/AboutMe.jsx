import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typewriter from "typewriter-effect";
import PropTypes from "prop-types";

const AboutMe = React.memo((props) => {
  return (
    <>
      <Box className="aboutme">
          <Container>
            
            <Box sx={{ marginTop: 8 }} display="flex" justifyContent="center">
              <Avatar
                alt={props.altAvatar}
                sx={{ bgcolor: "#e3e3e3", width: 148, height: 148 }}
              >
                {props.avatar}
              </Avatar>
            </Box>

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography align="center" variant="h4" display="block" gutterBottom>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(props.name).start();
                  }}
                />
              </Typography>

              <Typography align="center" variant="subtitle1" display="block" gutterBottom>
                {props.occupation}
              </Typography>

              <Typography align="center" variant="subtitle1" display="block" gutterBottom>
                {props.location}
              </Typography>
            </Box>

          </Container>
      </Box>
    </>
 );
});

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired,
  avatar: PropTypes.node,
};

export default AboutMe;