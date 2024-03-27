import React, {useState} from "react";


function Button(props){


   return (<div className="btndiv">
      <a id={props.id} className="btn" href="/">{props.text}</a>
   </div>)
}

export default Button;


