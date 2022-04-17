
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import MobileUi from './pages/Mobileui';
import Webpage from './pages/WebUiPage';
import WhoWereAre from './pages/WhoWereAre';
import Discussproject from './pages/Discussproject';
import Sayhello from './pages/Sayhello';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <WhoWereAre/>
       <Home/>
       <MobileUi/>
       <Webpage/>
       <Discussproject/>
        <Routes>
        <Route exact path="/home"  element={<Sayhello/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
