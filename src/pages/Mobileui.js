import React, { useEffect } from "react";
import ApplicationDesign from "../assets/images/applicationdesign.png";
import "../styles/Mobileui.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Mobileui() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mobileui">
      <div data-aos="zoom-in-up">
        <img src={ApplicationDesign} className="mobileuiimage" alt="uiimage" />
      </div>
      <div data-aos="fade-right">
        <h1 className="mobileuititle">Best In Class Mobile Applications</h1>
        <h2 className="mobileuidesc">
          We deliver high-quality mobile applications that earns distinction of
          "Best In Class" for Android and iOS with high performance, consistent
          and scalable.
        </h2>
      </div>
    </div>
  );
}

export default Mobileui;
