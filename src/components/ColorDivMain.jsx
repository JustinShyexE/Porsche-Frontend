import React from "react";
import ColorDiv from "../components/ColorDiv";


function ColorDivMain(props){
         return (
        <div className="customBoxes">
       <div style={{width:"100%"}}>
          <ColorDiv colorName={props.colorName1} colorCode={props.colorCode1} />
        </div>
        <div style={{width:"100%"}}>
         {props.colorName2?
         <ColorDiv colorName={props.colorName2} colorCode={props.colorCode2}/>
         :null}
       </div>
            </div>
   )
}


export default ColorDivMain;