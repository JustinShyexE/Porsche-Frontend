import React from "react";
import { ReactDOM } from "react";

function InputInbox(props){
    return(
    <div className={"signupInputDiv "+props.classNameP}>
    <p className="signupInputText roboto2">{props.text}</p>
    <input placeholder={props.placeholder} inputMode="email" type={props.type} className={props.className} />
    </div>)
}



export default InputInbox;