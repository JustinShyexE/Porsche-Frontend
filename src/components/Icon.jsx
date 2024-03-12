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
       <div onMouseOver={SetClickON} > <LocationOnIcon  className="accountIcon accountIconPosition" style={{ color: 'white', fontSize: '29'}} /></div>
     {click?<div onMouseEnter={SetClickON} onMouseLeave={SetClickOFF} className="locationON">
     <p className="title ">Find a Dealer </p>
     <input type="search" placeholder="Post Code or City" className="locationInput" />
     <a href="/"><img className="loop" src="https://cdn-icons-png.flaticon.com/128/1561/1561753.png" /></a>
     <button style={{marginTop:'10px'}} className="locationInput"  type="submit" >Use your current location</button>
     </div>
     :<div className="locationOFF"></div>}
      </div>)
}


export default Icon;


//<img onMouseOver={SetClickON} src="https://as1.ftcdn.net/v2/jpg/01/95/07/40/1000_F_195074081_vZGcgfFXytlSufbMa6oLBd2IpxhWwzrh.jpg" style={{ color: 'white', width: '20px', height:'20px' }} />
