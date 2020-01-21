import React from "react";
import Logo from "../images/brandLogoWhite.png";

export default function brandLogo() {
  return (
    <div className="brandLogoContainer">
        <img src={Logo} alt="Tutup Panci Bistro" className="brandLogo" />
    </div>
  );
}
