import React from "react";
import "./Home.css";

import Slide from "./Slide";
import Middle from "./Middle";
import GamePlays from "./GamePlays";
import Blocks from "./Blocks";
import SideBar from "../../Components/SidebarFront";

import Container from "../../Components/Container";

export default function Home() {
  return (
    <Container>
      <div className="home-body">
        <div className="topContent">
          <Slide />
          <Middle />
          <GamePlays />
        </div>
        <div className="MidContent">
          <Blocks />
          <SideBar />
        </div>
      </div>
    </Container>
  );
}
