import React from "react";
import "./Home.css";

import Slide from "./Slide/Slide";
import Middle from "./Middle/Middle";
import GamePlays from "./GamePlays/GamePlays";
import Gallery from "./Gallery/Gallery";
import Blocks from "./Blocks/Blocks";

export default function Home() {
  return (
    <>
      <div className="topContent">
        <Slide />
        <Middle />
        <GamePlays />
      </div>
      <Gallery />
      {/* <div className="topContent">
        <Blocks />
      </div> */}
    </>
  );
}
