import React, { useEffect } from "react";
import homeVideo from "../assets/videos/HomeBall.mp4";
import "../styles/HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import "../styles/Navbar.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="homepage">
      <div className="homeVideo-wrapper">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div >
        <Navbar />
      </div>
      <div className="homepagetitle">
        <h1>
          Transfrom ideas into <br />
          digital products.
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
