import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WhoWereAre() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div  className="whoweare">
      <div className="margin">
        <h1 className="title">w h o w e a r e</h1>
        <h1 className="content">
          Your digital patner to create <br /> best design and robust solution
          for <br />
          Web, Mobile application
        </h1>
        <h2 className="desc">
          We at InByte, engineer modern businesses to improve everyday life and
          combine tech with business to catalyse the best results, our motive is
          to create, care and deliver innovative application from scratch to
          your satisfaction. We constantly build, imagine and redefine ourselves
          to offer robust end-to-end solutions for all applications. We believe
          taking responsibility to create a culture that enables exceptional
          outcomes.
        </h2>
      </div>
    </div>
  );
}

export default WhoWereAre;
