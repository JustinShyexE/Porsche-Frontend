import React from "react";
import { ReactDOM } from "react";

function ClickableButton(props){
    return(<button name="action" type="submit" className={props.className}>{props.text}</button>)
}



export default ClickableButton;