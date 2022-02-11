import React from "react";
import Admin from "../Admin";
import Ad1 from "./Ad1/Ad1";
import Ad2 from "./Ad2/Ad2";
import Ad3 from "./Ad3/Ad3";
import Crowdfunding from "./crowdfunding/crowdfunding";

import "./Ads.css";

export default function Ads(props) {
  return (
    <>
      <Admin>
        <div className="ads">
          Atenção: Resolução da propaganda - largura: 930px, Altura: 100px
          <div>
            <Ad1 />
            <img src={"/ad1.jpg"} alt="Logo" />
          </div>
          <div>
            <Ad2 />
            <img src={"/ad2.jpg"} alt="Logo" />
          </div>
          <div>
            <Ad3 />
            <img src={"/ad3.jpg"} alt="Logo" />
          </div>
          <div className="crowdfunding">
            <Crowdfunding />
            <img  src={"/apoie.jpg"} alt="crowdfunding" />
          </div>
        </div>
      </Admin>
    </>
  );
}
