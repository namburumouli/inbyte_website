import React from "react";
import fbVector from "../assets/images/fotter/fb.png";
import instaVector from "../assets/images/fotter/insta.png";
import linkedinVector from "../assets/images/fotter/linkedin.png";
import twitterVector from "../assets/images/fotter/twitter.png";
import youtubeVector from "../assets/images/fotter/youtube.png";
import topArrowVector from "../assets/images/fotter/toparrow.png";

import "../styles/Fotter.css";
import { Link } from "react-router-dom";

function Footer() {
  //click events
  const fb = () => {
    window.open("https://www.instagram.com/inbytetech/");
  };

  const linkedin = () => {
    window.open("https://www.linkedin.com/company/inbytesolutions");
  };
  
  return (
    <div className="footer">
      <button className="footerbutton">
        <img className="fotterimage fb" src={fbVector} alt="logo" />
      </button>
      <button className="footerbutton" type="button" onClick={fb}>
        <img className="fotterimage insta" src={instaVector} alt="logo" />
      </button>
      <button className="footerbutton" type="button" onClick={linkedin}>
        <img className="fotterimage in" src={linkedinVector} alt="logo" />
      </button>
      <button className="footerbutton">
        <img className="fotterimage twitter" src={twitterVector} alt="logo" />
      </button>
      <button className="footerbutton">
        <img className="fotterimage youtube" src={youtubeVector} alt="logo" />
      </button>
      {/* <text className="footertext">
        Copyright © 2022 by InByte. Privacy & Policy | Terms & Conditions
      </text> */}
      {/* <div className="fotter">
      <img className="fotterimage" src={topArrowVector} alt="logo" />
      </div> */}
       <div className="footertext">
       <Link to="/services">sample</Link>
      </div>
    </div>
  );
}

export default Footer;
