import React from "react";
import "../styles/Sayhello.css";
import Mailimage from "../assets/images/mailbulk.svg";
import PhoneImage from "../assets/images/phone.svg";

function Sayhello() {
  return (
    <div className="sayhello">
      <div className="flex">
        <div>
          <h1 className="outlined">HELLO !</h1>
          <h1 className="saytext">Say</h1>
          <div className="flex">
            <img className="image" src={Mailimage} alt="mailimage" />
            <h1 className="info">ask@inbyte.com</h1>
          </div>
          <div className="flex">
            <img className="image" src={PhoneImage} alt="phoneimage" />
            <h1 className="info">898537XXXX</h1>
          </div>
        </div>
        <div className="boxed">
          <h1 className="projectinquirestext">For Project Inquires</h1>
          <div class="wrapper">
            <div class="input-data">
              <input type="text" />
              <div class="underline"></div>
              <label>Name</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label>Email Address</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label>Contact No</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label>Message</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sayhello;
