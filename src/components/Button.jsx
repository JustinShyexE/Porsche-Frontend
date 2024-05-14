import React, {useState} from "react";


function Button(props){


   return (<div style={{cursor:"pointer"}} className="btndiv">
      <a id={props.id} className="btn" href={props.href}>{props.text}</a>
   </div>)
}

export default Button;


