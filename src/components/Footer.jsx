import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Footer(props) {
  return (
    <>
      <Box
        sx={{ bgcolor: "#272727" }}
        justifyContent="center"
        component="footer"
      >
        <Container sx={{ py: 4 }} maxWidth="md">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="h1"
          >
            {props.textoFooter}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
