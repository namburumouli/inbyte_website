import "./App.css";
import Home from "./pages/Home";
import MobileUi from "./pages/Mobileui";
import Webpage from "./pages/WebUiPage";
import WhoWereAre from "./pages/WhoWereAre";
import Discussproject from "./pages/Discussproject";
import Sayhello from "./pages/Sayhello";
import Videopage from "./pages/VideoPage";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import LandingScreen from "./pages/splashScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { BrowserView, MobileView } from "react-device-detect";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [active, setActive] = useState("visibility");

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/inbyte_website" element={<Footer />}></Route>
            <Route
              exact
              path="/termsandconditions"
              element={<TermsAndConditions />}
            ></Route>
            <Route
              exact
              path="/privacypolicy"
              element={<PrivacyPolicy />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
