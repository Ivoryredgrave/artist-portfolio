import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const TabPanel = React.memo(function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const FullWidthTabs = React.memo(function FullWidthTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { portfolioImages } = props;

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          aria-label="full width tabs"
          centered
        >
          <Tab icon={<WorkIcon />} label="Portfolio" {...a11yProps(0)} />
          <Tab icon={<InfoIcon />} label="About me" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box sx={{ marginTop: 0 }} display="flex" justifyContent="center">
          <ImageList variant="woven" sx={{ width: 1000 }} cols={3}>
            {portfolioImages.map((item) => (
              <ImageListItem key={item.img} sx={{
                position: 'relative',
                '&:hover img': {
                  opacity: 0.9,
                },
                margin: '2px',
              }}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    border: '2px solid #d3a0d0',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  sx={{ padding: '5px' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {props.aboutme}
      </TabPanel>
    </Box>
  );
});

FullWidthTabs.propTypes = {
  portfolioImages: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
    })
  ).isRequired,
  aboutme: PropTypes.node.isRequired,
};

export default FullWidthTabs;
