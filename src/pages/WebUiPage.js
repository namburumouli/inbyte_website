import React, { useEffect } from "react";
import Webuislide1 from "../assets/images/webuiimages/1.png";
import Webuislide2 from "../assets/images/webuiimages/2.png";
import Webuislide3 from "../assets/images/webuiimages/3.png";
import Webuislide4 from "../assets/images/webuiimages/4.png";
import "../styles/Webui.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WebUiPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
        <div class="slider">
          <div class="slide-track">
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide1} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide2} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide3} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide4} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide1} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide2} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide3} alt="webui" />
            </div>
            <div className="webuiimage">
              <img className="webuuiimg" src={Webuislide4} alt="webui" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default WebUiPage;
