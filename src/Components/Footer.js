import React from "react";
import logotext from "../assets/logotext.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <img src={logotext} alt="" />
        <p>All rights reserved 2023 inc.</p>
      </div>
    </div>
  );
}

export default Footer;
