
import React from "react";
import Logo from '../assets/images/inbytelogo.png'
import SideMenu from '../assets/images/sidemenu.svg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className="navbar">
        <div className="leftSide img">
           <img src={Logo} alt='logo' />
        </div>
        <div className="rightSide">
            <Link to="/home" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/services" >Services</Link>
            <Link to="/solution" >Solution</Link>
            <button >
          <img src={SideMenu} alt='logo'/>
        </button>
        </div>
    </div>
  )
}

export default Navbar