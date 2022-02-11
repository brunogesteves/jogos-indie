import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ImagesWIndow.css";
import FileDrop from "../FileDrop/FileDrop";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_IMAGES } from "../../Graphql/Queries";
import { DELETE_IMAGE } from "../../Graphql/Mutations";

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
  const [thumbId, setThumbId] = useState(0);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const { data, refetch } = useQuery(GET_ALL_IMAGES);
  const [deleteImage, { data: responseDelete }] = useMutation(DELETE_IMAGE);

  useEffect(() => {
    if (responseDelete && responseDelete.deleteImage.successfull) {
      refetch();
    }
  }, [responseDelete]);

  useEffect(() => {
    deleteImage({ variables: { id: thumbId } });
  }, [thumbId]);

  return (
    <div className="tab-area">
      <button className="close-button-images-tab" onClick={() => props.setModalShow(false)}>
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
          {data &&
            data.getAllImages.map((res, i) => (
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
                    <DeleteIcon onClick={() => setThumbId(res.id)} />
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
