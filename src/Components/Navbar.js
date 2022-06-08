import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Logo from "../assets/images/inbytelogo.png";
import SideMenu from "../assets/images/sidemenu.svg";
// import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import WhatWeDoPage from "../pages/WhatWeDoPage";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const navigateToServices = () => {
    navigate("/service");
  };

  const navigateTOWhatWeDoPage = () => {
    return (
      <div>
        <WhatWeDoPage />
      </div>
    );
  };

  const controlNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <div className={`navbar ${show && `nav_display`}`}>
      <div className="leftSide img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="rightSide">
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#services">Services</Link>
        <Link to="#solution">Solutions</Link>
        <div  className="navbarbutton">
        <Link to="#contactus">Contact Us  </Link>
        </div>
      
        {/* <button onClick={navigateTOWhatWeDoPage}>
          <img src={SideMenu} alt="logo" />
        </button> */}
      
      </div>
    </div>
  );
}

export default Navbar;
