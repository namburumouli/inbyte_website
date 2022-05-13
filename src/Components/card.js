import React from "react";
import "../styles/card.css";


const card = (props) => {
  return (
    <div className="cardpage">
      <div class={props.style}>
        <div class={props.module}>
        <img className="cardpageimage" src={props.image}/>      
          <h1 className="cardpagetitle"> {props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default card;
