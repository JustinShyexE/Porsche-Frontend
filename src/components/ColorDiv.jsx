import React from "react";

function ColorDiv(props){
   return (<div className="customColor">
      <div className="customDivColor" style={{backgroundColor: props.color}}></div>
      <p className="roboto customColorName">{props.color}</p>
   </div>)
}


export default ColorDiv;