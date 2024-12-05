import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BasicCard(props) {
  return (
    <>
      <Card
        sx={{
          margin: "auto",
          width: "100%",
          maxWidth: 800,
          bgcolor: "background.paper",
        }}
      >
        <CardContent>
          <Stack sx={{ marginTop: 0 }} spacing={2}>
            <Alert
              variant="filled"
              severity="warning"
              sx={{ width: "100%", backgroundColor: "#709fc4" }}
            >
              {props.titulo}
            </Alert>

            <TextField
              disabled
              id="outlined-disabled"
              multiline
              defaultValue={props.descripcion}
            />

            <Accordion expanded>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h5" gutterBottom>
                  {props.textoContacto}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {props.botonesContacto.map((boton, index) => (
                  <Chip
                    sx={{ width: boton.width || "25%" }}
                    variant="outlined"
                    label={boton.label}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={boton.link}
                    clickable
                    key={index}
                  />
                ))}
              </AccordionDetails>
            </Accordion>

            <Typography variant="h5" gutterBottom>
              {props.textoHabilidades}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={8}>
                {props.habilidades.map((habilidad, index) => (
                  <Chip
                    sx={{ width: habilidad.width || "25%" }}
                    variant="outlined"
                    label={habilidad.label}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
