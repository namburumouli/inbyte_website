import React, { useEffect } from "react";
import Uiiimage from "../assets/images/uiimage.png";
import "../styles/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div data-aos="fade-right" className="row">
        <h1 className="hometitle">Stunning Ui/UX design</h1>
        <h2 className="homedesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </h2>
      </div>

    
      <div data-aos="zoom-in-up" >
      <img  src={Uiiimage} alt="uiimage" />
      </div>
    </div>
  );
}

export default Home;
