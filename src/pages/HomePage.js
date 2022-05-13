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
      {/* <div className="homeVideo-wrapper">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div> */}
      <div>
        <Navbar />
      </div>
      <div className="homepagetext">
        <div>
        <h1 className="homepagetitle">
          Transfrom ideas into        
        </h1>
        <h1 className="homepagetitle1">
        digital products.
        </h1>
        </div>
        <h2 className="homepagedesc">
          We create realistic and futuristic products which offers <br/> best digital
          solutions to make an impact on next-generation.{" "}
        </h2>
        <button type="Button" className="homepagebutton">GET IN TOUCH</button>
        
      </div>
    </div>
  );
}

export default HomePage;
