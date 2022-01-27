import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import { makeStyles } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { TiThMenu } from "react-icons/ti";
import Menu from "../../../../../Services/Menu";

import "./Drawer.css";

// const useStyles = makeStyles({
//   list: {
//     width: 150,
//     backgroundColor: "red",
//     color: "white",
//     flex: 1,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

export default function SwipeableTemporaryDrawer() {
  const [menu, setMenu] = useState([""]);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    Menu.menu().then((res) => {
      setMenu(res.map((res) => res.name));
    });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === "top" || anchor === "bottom",
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       <ListItem button key={"Home"}>
  //         <Link to="/" className="drawer-menu-item">
  //           <ListItemText primary={"Home"} />
  //         </Link>
  //       </ListItem>
  //       <ListItem button key={"Search"}>
  //         <Link to="/procurar" className="drawer-menu-item">
  //           <ListItemText primary={"Procurar"} />
  //         </Link>
  //       </ListItem>
  //       {menu.map((cat, i) => {
  //         return (
  //           <ListItem button key={i}>
  //             <Link to={`/categories/${cat}`} className="drawer-menu-item">
  //               <ListItemText primary={cat} />
  //             </Link>
  //           </ListItem>
  //         );
  //       })}
  //     </List>
  //   </div>
  // );
  // const anchor = "left";
  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={true}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            oi
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
