import React, { useState } from "react";
import fbVector from "../assets/images/fotter/fb.png";
import instaVector from "../assets/images/fotter/insta.png";
import linkedinVector from "../assets/images/fotter/linkedin.png";
import twitterVector from "../assets/images/fotter/twitter.png";
import youtubeVector from "../assets/images/fotter/youtube.png";
import topArrowVector from "../assets/images/fotter/toparrow.png";

import "../styles/Fotter.css";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import WhoWereAre from "./WhoWereAre";
import WhatWeDoPage from "./WhatWeDoPage";
import Videopage from "./VideoPage";
import Home from "./Home";
import MobileScreen from "./Mobileui";
import Webpage from "./WebUiPage";
import Discussproject from "./Discussproject";
import LandingScreen from "./splashScreen";
import Sayhello from "./Sayhello";
import { act } from "react-dom/test-utils";
function Footer() {
  //click events
  const fb = () => {
    window.open("https://www.instagram.com/inbytetech/");
  };

  const linkedin = () => {
    window.open("https://www.linkedin.com/company/inbytesolutions");
  };

  const [active, setActive] = useState("");

  const visibile = () => {
    setActive("visibility");
  };

  return (
    <div>
      <div className={active}>
        <div>
          <LandingScreen />
          <HomePage />
          <WhoWereAre />
          <WhatWeDoPage />
          <Videopage />
          <Home />
          <MobileScreen />
          <Webpage />
          <Discussproject />
          <Sayhello />
        </div>

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
            <img
              className="fotterimage twitter"
              src={twitterVector}
              alt="logo"
            />
          </button>
          <button className="footerbutton">
            <img
              className="fotterimage youtube"
              src={youtubeVector}
              alt="logo"
            />
          </button>
          <text className="footertext">
            Copyright © 2022 by InByte Technologies. &nbsp;
            <Link onClick={visibile} to="/termsandconditions">
              {" "}
              Terms & Conditions
            </Link>
            &nbsp; | &nbsp;
            <Link onClick={visibile} to="/privacypolicy">
              PrivacyPolicy
            </Link>
          </text>
        </div>
      </div>
    </div>
  );
}

export default Footer;
