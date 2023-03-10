import React from "react";
import "./Home.css";

import Slide from "../../components/Home/Slide/";
import Middle from "../../components/Home/Middle";
import GamePlays from "../../components/Home/GamePlays";
import Blocks from "../../components/Home/Blocks";
import SideBar from "../../components/SidebarFront";

import Container from "../../components/Container";

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
