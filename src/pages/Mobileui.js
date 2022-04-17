import React, { useEffect } from "react";
import ApplicationDesign from '../assets/images/applicationdesign.svg';
import '../styles/Mobileui.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Mobileui() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div  data-aos="fade-up"
    data-aos-anchor-placement="top-center"   className='mobileui'>
      <div data-aos="fade-up-right">
          <img className='mobileuiimage' src={ApplicationDesign} alt='applicationdesign'/>
          </div>
      <div data-aos="fade-up-left"  className='row'>
      <h1 className='mobileuititle'>Best In Class Mobile Applications</h1>
      <h2 className='mobileuidesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et</h2>  
    </div>
    </div>
  )
}

export default Mobileui