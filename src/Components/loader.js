import React from "react";
import "../styles/loader.css";
import Loader from "../assets/images/loader.gif";

const loader = (props) => {

  return (
    <div className="loader">
      {(() => {
        if (props.value) {
          return (
            <div>
              <img src={Loader} alt="loading.." />
            </div>
          )
        } else {
          return (
           <div/>
          )
        }
      })()}
    </div>
  );
};

export default loader;
