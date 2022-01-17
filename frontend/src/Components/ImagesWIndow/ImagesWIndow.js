import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ImagesWIndow.css";
import FileDrop from "../FileDrop/FileDrop";
import Windows from "../../Services/Windows";

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ImagesWindow(props) {
  const [images, setImages] = useState([]);
  const [deleteThumb, setDeleteThumb] = useState([]);
  const [loadImages, setLoadImages] = useState(false);

  useEffect(() => {
    Windows.thumbs().then((res) => {
      setImages(res);
    });
  }, [loadImages]);

  useEffect(() => {
    Windows.images(deleteThumb.id, deleteThumb.name);
    setImages(images.filter((item) => item !== deleteThumb));
    // eslint-disable-next-line
  }, [deleteThumb]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLoadImages(true);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="tab-area">
      <button
        className="close-button-images-tab"
        onClick={() => props.setModalShow(false)}
      >
        Fechar
      </button>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Imagens" {...a11yProps(0)} />
          <Tab label="Uploads" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          {images.map((res, i) => (
            <div key={i} className="thumbs">
              <div>
                <img
                  className="imgshow"
                  src={`/${res.name}`}
                  alt={res.name.slice(0, -4)}
                  onClick={() => props.setThumb(res.name)}
                />
              </div>
              <div className="button-delete-thumbs">
                <IconButton aria-label="delete" style={{ color: "white" }}>
                  <DeleteIcon onClick={() => setDeleteThumb(res)} />
                </IconButton>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FileDrop />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
