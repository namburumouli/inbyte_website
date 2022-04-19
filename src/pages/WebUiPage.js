import React, { useEffect } from "react";
import Webui from "../assets/images/webui.png";
import "../styles/Webui.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WebUiPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="webuipage">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="row"
      >
        <h1 className="webuitext">Top Notch Web design</h1>
        <h2 className="webuidesc">
          We create secure and flexible web solutions tailored exclusively for
          all modern businesses where people can access services and connect
          with each other.
        </h2>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img className="webuiimage" src={Webui} alt="webui" />
      </div>

      <div></div>
    </div>
  );
}

export default WebUiPage;
