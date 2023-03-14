import React from "react";
import "./Home.css";

import Slide from "../../components/Home/Slide/Slide.view";
import Middle from "../../components/Home/Middle/Middle.view";
import GamePlays from "../../components/Home/GamePlays/Gameplay.view";
import Blocks from "../../components/Home/Blocks";
import SideBar from "../../components/SidebarFront";

import Container from "../../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col">
        <div className="flex justify-between w-full mt-10 h-auto max-sm:flex-col max-sm:gap-y-10">
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
