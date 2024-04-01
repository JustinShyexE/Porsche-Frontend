import React from "react";
import { useState } from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Icon(props){
const[click, setClick]=useState(false)
    //setting the container on right

    function SetClickON(){
      setClick(true)
      console.log("Mouse ON")
    }
  
    function SetClickOFF(){
      setClick(false)
      console.log("Mouse OFF")
    }
  
    return (<div>
       <div onMouseOver={SetClickON} > <LocationOnIcon  className="accountIcon accountIconPosition accountIconHome" style={{ color: 'white', fontSize: '29'}} /></div>
     {click?<div onMouseEnter={SetClickON} onMouseLeave={SetClickOFF} className="locationON"> 
     <p className="title">Find a Dealer </p>
     <div className="locationInputPos title_inputSpace">
     <input type="search" placeholder="Post Code or City" className="locationInput locationInputPadd" />
     <a href="/"><img className="loop" src="https://cdn-icons-png.flaticon.com/128/1561/1561753.png" /></a>
     </div>
     <div className="locationInputPos">
     <button className="locationInput"  type="button" >Use your current location</button>
     </div>
     </div>
     :<div className="locationOFF"></div>}
      </div>)
}
export default Icon;


/*
<p className="title ">Find a Dealer </p>
<input type="search" placeholder="Post Code or City" className="locationInput locationInput2" />
<a href="/"><img className="loop" src="https://cdn-icons-png.flaticon.com/128/1561/1561753.png" /></a>
<button style={{marginTop:'10px'}}  className="locationInput"  type="submit" >Use your current location</button>
</div>
*/
