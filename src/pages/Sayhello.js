import React, { useState } from "react";
import "../styles/Sayhello.css";
import Mailimage from "../assets/images/mailbulk.svg";
import PhoneImage from "../assets/images/phone.svg";
import Axios from "axios";

function Sayhello() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [response,setResponse] = useState("");

  const payload = {
    name:name,
    email:email,
    contact:contact,
    message:message,
  }

  const projectQueriesApi = () => {
    Axios({
      method :'post',
      url: 'http://192.168.29.7:8080/api/projectQueries/createProjectQuery',
      data:payload,
      headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) =>{
      setResponse(response)
    }).catch((error)=>{
      setResponse(error)
    })
    console.log(payload)
  };

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
              <input type="text" onInput={(e) => setName(e.target.value)} />
              <div class="underline"></div>
              <label>Name</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onInput={(e) => setEmail(e.target.value)}
              />
              <div class="underline"></div>
              <label>Email</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onInput={(e) => setContact(e.target.value)}
              />
              <div class="underline"></div>
              <label>Contact No</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onInput={(e) => setMessage(e.target.value)}
              />
              <div class="underline"></div>
              <label>Message</label>
            </div>
            <div className="container">
              <button
                type="button"
                className="buttoni"
                onClick={projectQueriesApi}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sayhello;
