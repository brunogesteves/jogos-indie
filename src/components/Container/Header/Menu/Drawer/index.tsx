import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./Drawer.css";
import Link from "@material-ui/core/Link";

import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../../../Graphql/Queries";
import { InfoContext } from "../../../../../Contexts/Context";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);

export default function MenuDrawer() {
  const { openDrawer, setOpenDrawer } = useContext(InfoContext);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const { data } = useQuery(GET_ALL_CATEGORIES);

  return (
    <div className="drawer-body ">
      <Drawer
        variant="permanent"
        open={openDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "red",
            color: "white",
          },
        }}
      >
        <DrawerHeader>
          {openDrawer === true ? (
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: "white",
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          ) : null}
        </DrawerHeader>
        <List>
          {data &&
            data.getAllCategories.map((res, i) => (
              <ListItem
                button
                key={i}
                component={Link}
                href={`/categories/${res.name}`}
                style={{ textDecoration: "none" }}
                color="inherit"
              >
                <ListItemText primary={res.name} className="list-name" />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
  );
}
