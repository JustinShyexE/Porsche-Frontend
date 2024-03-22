import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import { useState } from "react";



function Home(){


  return(<div> 
     <Header />
     <h1> Hello There</h1> 
     <div id="hidden" style={{visibility: "hidden"}}>Reveal Div 2 after 5 seconds</div>
     </div>)
}
export default Home;