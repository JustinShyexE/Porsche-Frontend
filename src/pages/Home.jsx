import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer"
import ReactPlayer from 'react-player'
import Video from "./images/porschemp4.mp4"
import Card from "../components/HomeCard"
import IconButton from '@mui/material/IconButton';
import PlayCircle from '@mui/icons-material/PlayCircleOutline';
import PauseCircle from '@mui/icons-material/PauseCircleOutline';

function Home(){
   const[pause, setPause]=useState(true)

   function onClickON(){
         setPause(true)
   }
   function onClickOFF(){
         setPause(false)
}

  return(<div className="customMainBody"> 
     <Header />
        <div className="homeBody">
           <div className="homePlayer">
             <ReactPlayer playIcon={true} playing={pause} loop={true} height="100%" width="100%"  muted={true} url={Video} />
             <div className="homePlayerButton">
              <div className="homePositionButton">
                    {!pause? 
                      <div onClick={onClickON}>
                      <IconButton>
                        <PlayCircle className="playcircle" sx={{color:"white", fontSize: 60 }} />  
                      </IconButton>
                      </div>
                      :
                        <div onClick={onClickOFF}>
                      <IconButton>
                        <PauseCircle sx={{color:"white", fontSize: 60 }} />      
                      </IconButton>
                      </div>
                     } 
               </div>
             </div>
           </div>
           <div>
           </div>


           <div className="homeDiv1">
                <div className="homeDivCentering"><p className="roboto homeDiv1h2">Models</p></div>
           </div>
           <div className="homeDivCentering">
            <div className="homeDiv1Content">          
                <Card model="Taycan" title="The mid engine sports car for two made for pure driving pleasure"
                 price="£51.800.00"
                  url="url('https://images.unsplash.com/photo-1570432215913-b66fff4a50a4?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                   />
                 <Card model="911" title="The iconic, rear-engine sport car with exceptional performance."
                   price="£87,000.00"
                   url="url('https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 />
                 <Card model="Panamera" title="The sports car limousine for an active lifestyle with highest comford."
                 price="£72,500.00"
                 url="url('https://images.unsplash.com/photo-1656077940825-23f4c9108141?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 />
                 <Card model="Macan" title="The sports car of compact SUVs.Check the new Macan at the his best price."
                 price="£69,000.00"
                 url="url('https://images.unsplash.com/photo-1672169537839-32e12845ccef?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 />
                 <Card model="Cayenne" title="The versatile SUV with sports car performance and up to five seats."
                 price="£70,400.00"
                 url="url('https://images.unsplash.com/photo-1643055359735-908c15445d09?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 />
                 <Card model="918" title="The mid-engine esports car for two, made for pure driving pleasure."
                 price="£51.800.00"
                 url="url('https://images.unsplash.com/photo-1592853625589-1a5bc69f9c95?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 />
             </div>
            </div>
        </div>
     <Footer />
     </div>)
}
export default Home;
 