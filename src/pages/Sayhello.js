import React, { useState } from "react";
import "../styles/Sayhello.css";
import Mailimage from "../assets/images/mailbulk.svg";
import PhoneImage from "../assets/images/phone.svg";
import Axios from "axios";
import Loader from "../Components/loader";
import Alertdialog from "../Components/Alertdialog";
import { wait } from "@testing-library/user-event/dist/utils";

function Sayhello() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [labelvisibility1, setLableVisibility1] = useState("");
  const [labelvisibility2, setLableVisibility2] = useState("");
  const [labelvisibility3, setLableVisibility3] = useState("");
  const [labelvisibility4, setLableVisibility4] = useState("");
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [alertdisplay, setAlertDisplay] = useState(false);
  const [error, setError] = useState("");

  const payload = {
    name: name,
    email: email,
    contact: contact,
    message: message,
  };

  const projectQueriesApi =  async() => {

    await setTimeout(1000)
    setLoaderVisibility(true);
    Axios({
      method: "post",
      url: "https://f865-2405-201-c01c-106e-b108-dba4-9233-3a10.in.ngrok.io/api/projectQueries/createProjectQuery",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        setResponse(response);
        setLoaderVisibility(false);
        setAlertDisplay(true);
        setError(response)
      })
      .catch((error) => {
        setResponse(error);
        setError(error.message);
        setAlertDisplay(true);
        setLoaderVisibility(false);
      });
    console.log(payload);
  };

  const Label1 = (e) => {
    setName(e.target.value);
    if (e.target.value != "") {
      setLableVisibility1("visibile");
    } else {
      setLableVisibility1("");
    }
  };

  const Label2 = (e) => {
    setEmail(e.target.value);
    if (e.target.value != "") {
      setLableVisibility2("visibile");
    } else {
      setLableVisibility2("");
    }
  };

  const Label3 = (e) => {
    setContact(e.target.value);
    if (e.target.value != "") {
      setLableVisibility3("visibile");
    } else {
      setLableVisibility3("");
    }
  };

  const Label4 = (e) => {
    setMessage(e.target.value);
    if (e.target.value != "") {
      setLableVisibility4("visibile");
    } else {
      setLableVisibility4("");
    }
  };

  return (
    <div className="sayhello" id="contactus">
      <Loader value={loaderVisibility} />
      <Alertdialog alertdisplay={alertdisplay} error={error} />
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
            <button className="sayhellobutton">
              <h1 className="info">898537XXXX</h1>
            </button>
          </div>
        </div>
        <div className="boxed">
          <h1 className="projectinquirestext">For Project Inquires</h1>
          <div class="wrapper">
            <div class="input-data">
              <input
                type="text"
                required
                onClick={Label1}
                onInput={(e) => Label1(e)}
              />
              <div class="underline"></div>
              <label className={labelvisibility1}>Name</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onClick={Label2}
                onInput={(e) => Label2(e)}
              />
              <div class="underline"></div>
              <label className={labelvisibility2}>Email</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onClick={Label3}
                onInput={(e) => Label3(e)}
              />
              <div class="underline"></div>
              <label className={labelvisibility3}>Contact No</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                onClick={Label4}
                onInput={(e) => Label4(e)}
              />
              <div class="underline"></div>
              <label className={labelvisibility4}>Message</label>
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
