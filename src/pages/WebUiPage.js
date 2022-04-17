import React from 'react'
import Webui from '../assets/images/webui.png';
import '../styles/Webui.css'

function WebUiPage() {

  return (
    <div className='webuipage'>
    <div className='row'>
    <h1 className='webuitext'>Top Notch Web design</h1>
    <h2 className='webuidesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</h2>  
   </div>
   <img className='webuiimage' src={Webui} alt='webui'/>
  <div>

  </div>
  </div>
  )
}

export default WebUiPage