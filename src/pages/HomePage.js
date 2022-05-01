import React from "react";
import  homeVideo from '../assets/videos/HomeBall.mp4'
import '../styles/HomePage.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (

    <div className="homepage"> 
    <div className='homeVideo-wrapper'>
    <video
        autoPlay
        loop
        muted >
            <source src={homeVideo} type="video/mp4" />
        </video>
    </div>
     <div className="homepagetitle">
       <h1>Transfroms ideas into <br/>
         digital products.
       </h1>
     </div>
    
        
    </div>

  )
}

export default HomePage