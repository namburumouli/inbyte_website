import React from 'react'
import Uiiimage from '../assets/images/uiimage.png';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='row'>
      <h1 className='hometitle'>Stunning Ui/UX design</h1>
      <h2 className='homedesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</h2>  
     </div>
   <img src={Uiiimage} alt='uiimage'/>
    <div>
    </div>
    </div>
  );
}

export default Home