import React from 'react'
import "../styles/Alertdialog.css";


const Alertdialog = (props) => {
  return (
    <div className="alertdialog">
       {(() => {
        if (props.alertdisplay) {
          return (
            <div>
             <h1>{props.error}</h1>
            </div>
          )
        } else {
          return (
           <div/>
          )
        }
      })()}
    </div>
  )
}

export default Alertdialog