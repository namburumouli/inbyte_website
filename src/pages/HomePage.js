import React, { useEffect } from "react";
import homePageImage from "../assets/images/homepage.png";
import starsImage from "../assets/images/starts.png";
import "../styles/HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import "../styles/Navbar.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // stars effect
  const starts = () => {
    var count = 50;
    let scene = document.querySelector("homepagescene");
    let i = 0;
    while (i < count) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let duration = Math.random() * 1;
      let h = Math.random() * 100;
      star.style.left = x + "px";
      star.style.width = 1 + "px";
      star.style.height = h + "px";
      scene.appendChild(star);
      i++;
    }
  };
  return (
    <div className="homepage" id="home">
      <div>
      </div>
      <div>
        <div data-aos="fade-right" className="row">
          <div className="homepagemargin">
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
              <div>
                <img
                  src={homePageImage}
                  className="homepageimage"
                  alt="uiimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
