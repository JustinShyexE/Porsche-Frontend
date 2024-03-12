import React, {useState} from "react";


function HighlightingText(props){

   return (<div className="btndiv">
     <a className="highlightText" href="/login"> {props.text}</a>
   </div>)
}

export default HighlightingText;


