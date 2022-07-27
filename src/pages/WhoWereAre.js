import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

function WhoWereAre() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Page id="about">
      <Margin>
        <Title>w h o w e a r e</Title>
        <Content>
          Your digital buddy to create best design and robust solution for Web,
          Mobile application
        </Content>
        <Desc>
          We at InByte, engineer modern businesses to improve everyday life and
          combine tech with business to catalyse the best results, our motive is
          to create, care and deliver innovative application from scratch to
          your satisfaction. We constantly build, imagine and redefine ourselves
          to offer robust end-to-end solutions for all applications. We believe
          taking responsibility to create a culture that enables exceptional
          outcomes.
        </Desc>
      </Margin>
    </Page>
  );
}

export default WhoWereAre;

const Page = styled.div`
  min-height: 100%;
  background-color: black;
`;

const Title = styled.h1`
  color: #ff4620;
  size: 32px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;

  margin-top: 140px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  margin-top: 33px;
`;

const Desc = styled.h2`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  margin-top: 33px;
`;

const Margin = styled.div`
  margin-left: 138px;
  margin-right: 35%;
`;
