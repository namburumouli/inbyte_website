import React, { useEffect } from "react";
import homePageImage from "../assets/images/homepage.png";
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
      <div>
        <Navbar />
      </div>
      <div data-aos="fade-right" className="row">
        <div>
          <h1 className="homepagetext">
            Transforms
            <br />
            <span className="homepagespan">Ideas</span> Into Digital Products.
          </h1>
          <h1 className="homepagedescp">
            We create realistic and futuristic products which offers best
            digital solutions to make an impact on next-generation.
          </h1>
          <div data-aos="zoom-in-up">
            <img src={homePageImage} className="homepageimage" alt="uiimage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
