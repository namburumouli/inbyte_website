import React from 'react'
import ApplicationDesign from '../assets/images/applicationdesign.svg';
import '../styles/Mobileui.css';

function Mobileui() {
  return (
      
    <div className='mobileui'>
          <img className='mobileuiimage' src={ApplicationDesign} alt='applicationdesign'/>
      <div className='row'>
      <h1 className='mobileuititle'>Best In Class Mobile Applications</h1>
      <h2 className='mobileuidesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et</h2>  
    </div>
    </div>
  )
}

export default Mobileui