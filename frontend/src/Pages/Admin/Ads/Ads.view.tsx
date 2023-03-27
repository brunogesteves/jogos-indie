import React from "react";
import Admin from "../../../components/Admin/AdminLayout.view";
import { useLogic } from "./Ads.logic";

export default function Ads() {
  const { methods } = useLogic();
  return (
    <>
      <Admin>
        <div className="flex text-center text-black flex-col">
          Atenção: Resolução da propaganda - largura: 930px, Altura: 100px
          <div>{methods.adInformation("ad1")}</div>
          <div>{methods.adInformation("ad2")}</div>
          <div>{methods.adInformation("ad3")}</div>
          <div>{methods.adInformation("apoie")}</div>
        </div>
      </Admin>
    </>
  );
}
