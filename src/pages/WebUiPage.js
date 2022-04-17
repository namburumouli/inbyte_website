import React, { useEffect } from "react";
import Webui from '../assets/images/webui.png';
import '../styles/Webui.css'
import Aos from "aos";
import "aos/dist/aos.css";

function WebUiPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div  data-aos="fade-up-right"
    data-aos-anchor-placement="top-bottom" className='webuipage'>
    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='row'>
    <h1 className='webuitext'>Top Notch Web design</h1>
    <h2 className='webuidesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</h2>  
   </div >
   <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
   <img className='webuiimage' src={Webui} alt='webui'/>
   </div>
   
  <div>

  </div>
  </div>
  )
}

export default WebUiPage