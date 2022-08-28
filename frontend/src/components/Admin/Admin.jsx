import React from "react";
import Cards from "./AdminCards";

const Admin = () => {
  return (
    <div className="w-full h-[90rem] ">
      <div className="flex flex-col m-4">
        <Cards />
        <Cards productName="ABC" productInfo="hoidajdpk[adkpad,;akfp" />
        <Cards productName="ABC" productInfo="hoidajdpk[adkpad,;akfp" />
      </div>
    </div>
  );
};

export default Admin;
