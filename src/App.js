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
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <LandingScreen />
       
        <HomePage />
        <WhoWereAre />
        <WhatWeDoPage />
        <Videopage />
        <Home />
        <MobileUi />
        <Webpage />
        <Discussproject />
        <Sayhello />
        <Footer />

        {/* <Router>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<HomePage />}></Route>
            <Route exact path="/about" element={<WhoWereAre />}></Route>
            <Route exact path="/services" element={<WhatWeDoPage />}></Route>
          </Routes>
        </Router> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
