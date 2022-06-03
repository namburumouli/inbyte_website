import React, { useEffect } from "react";
import webVideo from '../assets/videos/RENDER.mp4'
import "../styles/VideoPage.css"
import Aos from "aos";
import "aos/dist/aos.css";

function Videopage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='videowrapper'>
        <video 
        autoPlay
        loop
        muted
         >
      <source src={webVideo} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Videopage