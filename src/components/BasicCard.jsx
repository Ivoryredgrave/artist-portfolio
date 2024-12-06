import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Button } from "@mui/material";

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

const Alert = React.memo(
  React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  ))
);

const BasicCard = React.memo((props) => {

  const [expanded, setExpanded] = React.useState(true);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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
              {props.title}
            </Alert>

            <TextField
              disabled
              id="outlined-disabled"
              multiline
              defaultValue={props.description}
            />

            <Accordion expanded={expanded} onChange={handleAccordionChange}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h5" gutterBottom>
                  {props.contactText}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {props.contactButtons.map((button, index) => (
                    <Button
                      color="secondary"
                      sx={{ width: button.width || "25%" }}
                      variant="outlined"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={button.link}
                      clickable
                      key={index}
                    >
                      {button.label}
                    </Button>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>

            <Typography variant="h5" gutterBottom>
              {props.skillsText}
            </Typography>

            <Grid xs={8} container spacing={2}>
              {props.skills.map((skill, index) => (
                <Chip
                  sx={{ width: skill.width || "25%" }}
                  variant="outlined"
                  color="primary"
                  label={skill.label}
                  key={index}
                />
              ))}
            </Grid>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
});

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  contactButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      width: PropTypes.string,
    })
  ).isRequired,
  skillsText: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
    })
  ).isRequired,
};

export default BasicCard;
