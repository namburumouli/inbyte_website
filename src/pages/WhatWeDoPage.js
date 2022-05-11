import React, { useState } from "react";
import "../styles/WhatWeDoPage.css";
import Customcardpage from "../Components/card";
import { Scrollbars } from "react-custom-scrollbars-2";
import MenuVector from "../assets/images/whatwedo/menu.png";
import AsstiveVector from "../assets/images/whatwedo/assistive-listening-systems.png";
import ComputerVector from "../assets/images/whatwedo/computervector.png";
import MobileVector from "../assets/images/whatwedo/mobilevector.png";
import SpeakerVector from "../assets/images/whatwedo/speakervector.png";

function WhatWeDoPage() {
  const [active, setActive] = useState("UI/UX & Graphic Design");
  const [activeDesFirstPara, setActiveDesFirstPara] = useState(
    "First stage of product development is prototyping so it is such a crucial step for the business to do research in the society to make a good digital product which should look aesthetic and user friendly."
  );
  const [activeDesSecPara, setActiveDesSecPara] = useState(
    "We do prototyping, wireframing, market research for your digital idea or product."
  );

  const activeUI = () => {
    setActive("UI/UX & Graphic Design");
    setActiveDesFirstPara(
      "First stage of product development is prototyping so it is such a crucial step for the business to do research in the society to make a good digital product which should look aesthetic and user friendly."
    );
    setActiveDesSecPara(
      "We do prototyping, wireframing, market research for your digital idea or product."
    );
  };

  const activeAppDevelopment = () => {
    setActive("Android & IOS App Development");
    setActiveDesFirstPara(
      "Most of the people are using mobiles than other devices, so an app is the best solution for your product or service to get into the market."
    );
    setActiveDesSecPara(
      "We have a great expertise team with several years of experience to do all kinds of mobile apps for Android and IOS using Flutter, React Native and Ionic, etc."
    );
  };

  const activeWebDevelopment = () => {
    setActive("Web Application Development");
    setActiveDesFirstPara(
      "A website or a web app is the face of your business to enter the market. We have an expertise team to make dream come true and your business will get the wings."
    );
    setActiveDesSecPara(
      "We do web apps with all kinds of frameworks like Angular, React, Laravel, Node, Java and CMS, LMS using WordPress,Drupal etc. "
    );
  };

  const activeDigitalMarketing = () => {
    setActive("Digital Marketing for all Businesses");
    setActiveDesFirstPara(
      " Whatever the business, digital marketing is the best solution to reach the people as most of them are using mobiles. SEO,Social Media Marketing, Paid Campaigns are our most reliable services."
    );
    setActiveDesSecPara(
      " We show analytics of your business growth for every 15 days with a crystal clear stattics."
    );
  };

  const activeStartegy = () => {
    setActive("Strategy & Consultancy");
    setActiveDesFirstPara(
      " Whether if you are a new comer or already doing business,we do give strategic ideas and solutions to grow and run your business.."
    );
    setActiveDesSecPara(
      "Consultancy and guidance are the pillars for a new idea to research whether the product or service will exist and grow in the market based on the current trend."
    );
  };

  return (
    <div className="whatwedo">
      <h1 className="whatwedoheading">What we do?</h1>
      <div className="whatwedocard">
        <h1 className="whatwedotitle">{active}</h1>
        <p className="whatwedodesc">
          {activeDesFirstPara} <br />
          <br />
          {activeDesSecPara}
        </p>
        <button className="reachusbutton">Reach us</button>
      </div>
      
      <Scrollbars style={{ width: 500, height: 600 }}>
        <button className="whatwedobutton" onClick={activeUI}>
          <Customcardpage
            image={MenuVector}
            style={"module-border-wrap-card1"}
            title={"UI/UX & Graphic Design"}
          />
        </button>

        <div className="whatwedosecoundcard">
          <button className="whatwedobutton" onClick={activeAppDevelopment}>
            <Customcardpage
              image={MobileVector}
              style={"module-border-wrap-card2"}
              title={"Android & IOS App Development"}
            />
          </button>
        </div>
        <div className="whatwedomargin">
          <button className="whatwedobutton" onClick={activeWebDevelopment}>
            <Customcardpage
              image={ComputerVector}
              style={"module-border-wrap-card3"}
              title={"Web Application Development"}
            />
          </button>
        </div>
        <div className="whatwedomargin">
          <button className="whatwedobutton" onClick={activeDigitalMarketing}>
            <Customcardpage
              image={SpeakerVector}
              style={"module-border-wrap-card4"}
              title={"Digital Marketing for all Businesses"}
            />
          </button>
        </div>
        <div className="whatwedomargin">
          <button className="whatwedobutton" onClick={activeStartegy}>
            <Customcardpage
              image={AsstiveVector}
              style={"module-border-wrap-card5"}
              title={"Strategy & Consultancy"}
            />
          </button>
        </div>
      </Scrollbars>
    </div>
  );
}

export default WhatWeDoPage;
