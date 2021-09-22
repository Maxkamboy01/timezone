import React from "react";
import Logo from "../components/assets/img/logo/logo.png";

function Loading() {
  return (
    <div className="loading-wrapper">
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Loading;
