import React from "react";
import { useState } from "react";


function Button2B(props){
    const[click, setClick]=useState(false)
    //setting the container on right

    function SetClickON(){
        setClick(true)
      }
    
      function SetClickOFF(){
        setClick(false)
      }
    
    return (<div>
      <div onMouseLeave={SetClickOFF} onMouseOver={SetClickON}  style={{width:'300px'}} className="underButtonA_div"><a className={click? "underButtonB" : "underButtonA"} href="/">{props.text}</a></div>
      </div>)
}


export default Button2B;