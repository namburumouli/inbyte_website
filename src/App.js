import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import MobileUi from "./pages/Mobileui";
import Webpage from "./pages/WebUiPage";
import WhoWereAre from "./pages/WhoWereAre";
import Discussproject from "./pages/Discussproject";
import Sayhello from "./pages/Sayhello";
import Videopage from './pages/VideoPage'
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HomePage/>
        <WhoWereAre />
        <Videopage/>
        <Home />
        <MobileUi />
        <Webpage />
        <Discussproject />
        <Sayhello />
        <Routes>
          <Route exact path="/home" element={<Videopage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
