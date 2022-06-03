import React, { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { BrowserView, MobileView } from "react-device-detect";
import "../styles/WhatWeDoPage.css";
import Customcardpage from "../Components/card";
import { Scrollbars } from "react-custom-scrollbars-2";
import MenuVector from "../assets/images/whatwedo/menu.png";
import AsstiveVector from "../assets/images/whatwedo/assistive-listening-systems.png";
import ComputerVector from "../assets/images/whatwedo/computervector.png";
import MobileVector from "../assets/images/whatwedo/mobilevector.png";
import SpeakerVector from "../assets/images/whatwedo/speakervector.png";
import ArrowVector from "../assets/images/whatwedo/rightarrowvector.png";
import ReactDragscroll from "react-dragscroll";
import { HashLink as Link } from "react-router-hash-link";

function WhatWeDoPage() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);

  const [active, setActive] = useState("UI/UX & Graphic Design");
  const [activeDesFirstPara, setActiveDesFirstPara] = useState(
    "First stage of product development is prototyping so it is such a crucial step for the business to do research in the society to make a good digital product which should look aesthetic and user friendly."
  );
  const [activeDesSecPara, setActiveDesSecPara] = useState(
    "We do prototyping, wireframing, market research for your digital idea or product."
  );
  const [activeModule1, setActiveModule1] = useState("module1");
  const [activeModule2, setActiveModule2] = useState("module");
  const [activeModule3, setActiveModule3] = useState("module");
  const [activeModule4, setActiveModule4] = useState("module");
  const [activeModule5, setActiveModule5] = useState("module");

  const activeUI = () => {
    setActive("UI/UX & Graphic Design");
    setActiveDesFirstPara(
      "First stage of product development is prototyping so it is such a crucial step for the business to do research in the society to make a good digital product which should look aesthetic and user friendly."
    );
    setActiveDesSecPara(
      "We do prototyping, wireframing, market research for your digital idea or product."
    );
    setActiveModule1("module1");
    setActiveModule2("module");
    setActiveModule3("module");
    setActiveModule4("module");
    setActiveModule5("module");
  };

  const activeAppDevelopment = () => {
    setActive("Android & IOS App Development");
    setActiveDesFirstPara(
      "Most of the people are using mobiles than other devices, so an app is the best solution for your product or service to get into the market."
    );
    setActiveDesSecPara(
      "We have a great expertise team with several years of experience to do all kinds of mobile apps for Android and IOS using Flutter, React Native and Ionic, etc."
    );
    setActiveModule2("module2");
    setActiveModule1("module");
    setActiveModule3("module");
    setActiveModule4("module");
    setActiveModule5("module");
  };

  const activeWebDevelopment = () => {
    setActive("Web Application Development");
    setActiveDesFirstPara(
      "A website or a web app is the face of your business to enter the market. We have an expertise team to make dream come true and your business will get the wings."
    );
    setActiveDesSecPara(
      "We do web apps with all kinds of frameworks like Angular, React, Laravel, Node, Java and CMS, LMS using WordPress,Drupal etc. "
    );
    setActiveModule3("module3");
    setActiveModule2("module");
    setActiveModule1("module");
    setActiveModule4("module");
    setActiveModule5("module");
  };

  const activeDigitalMarketing = () => {
    setActive("Digital Marketing for all Businesses");
    setActiveDesFirstPara(
      " Whatever the business, digital marketing is the best solution to reach the people as most of them are using mobiles. SEO,Social Media Marketing, Paid Campaigns are our most reliable services."
    );
    setActiveDesSecPara(
      " We show analytics of your business growth for every 15 days with a crystal clear stattics."
    );
    setActiveModule4("module4");
    setActiveModule2("module");
    setActiveModule3("module");
    setActiveModule1("module");
    setActiveModule5("module");
  };

  const activeStartegy = () => {
    setActive("Strategy & Consultancy");
    setActiveDesFirstPara(
      " Whether if you are a new comer or already doing business,we do give strategic ideas and solutions to grow and run your business.."
    );
    setActiveDesSecPara(
      "Consultancy and guidance are the pillars for a new idea to research whether the product or service will exist and grow in the market based on the current trend."
    );
    setActiveModule5("module5");
    setActiveModule2("module");
    setActiveModule3("module");
    setActiveModule4("module");
    setActiveModule1("module");
  };

  /* scroll functionality */

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const dragToScroll = () => {
    const slider = document.querySelector(".mobileuiscrollbar");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  };

  //   <div>
  //   <button className="reachusbutton" onClick={scrollToBottom}>
  //     Reach us{" "}
  //     <img className="reachusimage" src={ArrowVector} />
  //   </button>
  // </div>
  return (
    <div id="services">
      <h1 className="whatwedoheading">What we do?</h1>
      <div className="whatwedo">
        <div className="browerview">
          <div className="mobileuiscrollbar" {...events} ref={ref}>
            {dragToScroll}
            <BrowserView>
              <div className="whatwedovertical">
                <div className="whatwedofirstcard">
                  <button className="whatwedobutton" onClick={activeUI}>
                    <Customcardpage
                      image={MenuVector}
                      module={activeModule1}
                      style={"module-border-wrap-card1"}
                      title={"UI/UX & Graphic Design"}
                    />
                  </button>
                </div>

                <div className="whatwedomargin">
                  <button
                    className="whatwedobutton"
                    onClick={activeAppDevelopment}
                  >
                    <Customcardpage
                      image={MobileVector}
                      module={activeModule2}
                      style={"module-border-wrap-card2"}
                      title={"Android & IOS App Development"}
                    />
                  </button>
                </div>
                <div className="whatwedomargin">
                  <button
                    className="whatwedobutton"
                    onClick={activeWebDevelopment}
                  >
                    <Customcardpage
                      image={ComputerVector}
                      module={activeModule3}
                      style={"module-border-wrap-card3"}
                      title={"Web Application Development"}
                    />
                  </button>
                </div>
                <div className="whatwedomargin">
                  <button
                    className="whatwedobutton"
                    onClick={activeDigitalMarketing}
                  >
                    <Customcardpage
                      image={SpeakerVector}
                      module={activeModule4}
                      style={"module-border-wrap-card4"}
                      title={"Digital Marketing for all Businesses"}
                    />
                  </button>
                </div>
                <div className="whatwedomargin">
                  <button className="whatwedobutton" onClick={activeStartegy}>
                    <Customcardpage
                      image={AsstiveVector}
                      module={activeModule5}
                      style={"module-border-wrap-card5"}
                      title={"Strategy & Consultancy"}
                    />
                  </button>
                </div>
              </div>
            </BrowserView>
          </div>
        </div>

        <div >
          <div className="whatwedocard" >
            <h1 className="whatwedotitle">{active}</h1>
            <p className="whatwedodesc">
              {activeDesFirstPara} <br />
              <br />
              {activeDesSecPara}
            </p>
            <div >
              <button className="reachusbutton" onClick={scrollToBottom}>
                Reach us <img className="reachusimage" src={ArrowVector} />
              </button>
            </div>
            {activeUI}
          </div>
        </div>

        {/* style={{ width: 1300, height: 150, zIndex: 2001 , }} */}

        {/* for mobile MobileView */}

        <Scrollbars>
          <MobileView>
            <div className="whatwedovertical">
              <div className="whatwedomargin">
                <button className="whatwedobutton" onClick={activeUI}>
                  <Customcardpage
                    image={MenuVector}
                    module={activeModule1}
                    style={"module-border-wrap-card1"}
                    title={"UI/UX & Graphic Design"}
                  />
                </button>
              </div>

              <div className="whatwedomargin">
                <button
                  className="whatwedobutton"
                  onClick={activeAppDevelopment}
                >
                  <Customcardpage
                    image={MobileVector}
                    module={activeModule2}
                    style={"module-border-wrap-card2"}
                    title={"Android & IOS App Development"}
                  />
                </button>
              </div>
              <div className="whatwedomargin">
                <button
                  className="whatwedobutton"
                  onClick={activeWebDevelopment}
                >
                  <Customcardpage
                    image={ComputerVector}
                    module={activeModule3}
                    style={"module-border-wrap-card3"}
                    title={"Web Application Development"}
                  />
                </button>
              </div>
              <div className="whatwedomargin">
                <button
                  className="whatwedobutton"
                  onClick={activeDigitalMarketing}
                >
                  <Customcardpage
                    image={SpeakerVector}
                    module={activeModule4}
                    style={"module-border-wrap-card4"}
                    title={"Digital Marketing for all Businesses"}
                  />
                </button>
              </div>
              <div className="whatwedomargin">
                <button className="whatwedobutton" onClick={activeStartegy}>
                  <Customcardpage
                    image={AsstiveVector}
                    module={activeModule5}
                    style={"module-border-wrap-card5"}
                    title={"Strategy & Consultancy"}
                  />
                </button>
              </div>
            </div>
          </MobileView>
        </Scrollbars>
      </div>
    </div>
  );
}

export default WhatWeDoPage;
