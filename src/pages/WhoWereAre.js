import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WhoWereAre() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" className="whoweare">
      <div className="margin">
        <h1 className="title">w h o w e a r e</h1>
        <h1 className="content">
          Your digital patner to create <br /> best design and robust solution
          for <br />
          web, Mobile application
        </h1>
        <h2 className="desc">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          <br />
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
          <br />
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure
          <br />
          dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          <br />
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </h2>
      </div>
    </div>
  );
}

export default WhoWereAre;
