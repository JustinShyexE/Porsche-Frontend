import React from "react";
import { ReactDOM } from "react";

function ClickableButton(props){
    
    

    return(<a><button onClick={()=> props.onChecked()}  name="action" type="submit" className={props.className}>{props.text}</button></a>)
}



export default ClickableButton;