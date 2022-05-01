import React from 'react'
import  homeVideo from '../assets/videos/HomeBall.mp4'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <div className='homeVideo-wrapper' >
     
        <video
        autoPlay
        loop
        muted >
           <h1 className='homepagetitle'>Transform ideas into <br/>
        digital products
         </h1>
            <source src={homeVideo} type="video/mp4" />
        </video>
        
    </div>
  )
}

export default HomePage