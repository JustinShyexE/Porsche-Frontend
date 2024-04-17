import React from "react";


function ColorDiv(props){

   
   return (<div className="customColor" >
      <div className="customDivColor" style={{backgroundColor: props.colorCode, cursor: "pointer"}}></div>
      <p className="roboto customColorName">{props.colorName}</p>
   </div>)
   
}


export default ColorDiv;