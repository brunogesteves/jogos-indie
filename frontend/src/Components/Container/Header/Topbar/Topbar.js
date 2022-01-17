import React from "react";

import "./Topbar.css";

import AdHeader from "./AdHeader/AdHeader";
import Logotype from "./Logotype/Logotype";

export default function Topbar(){
  return (
    <>
      <div className="topbar-header">
        <Logotype />
        <AdHeader />
      </div>
    </>
  );
};


