import React from "react";
import ColorDiv from "../components/ColorDiv";
import { useState } from "react";

function ColorDivMain(props){
         return (
      <div className="customBoxes">
         <div onClick={() => props.onChecked(props.images1, props.price)} style={{width:"100%"}}>
            <ColorDiv colorName={props.colorName1} colorCode={props.colorCode1} />
         </div>
         <div  onClick={() => props.onChecked(props.images2, props.price)}
           style={{width:"100%"}}>
         {props.colorName2?
         <ColorDiv colorName={props.colorName2} colorCode={props.colorCode2}/>
          :null}
         </div>
      </div>
   )
}


export default ColorDivMain;