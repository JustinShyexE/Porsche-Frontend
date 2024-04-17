import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer"
import ReactPlayer from 'react-player'
import Video1 from "./images/porschemp4.mp4"
import Video2 from "./images/presentation1.mp4"
import Video3 from "./images/presentation2.mp4"
import Video4 from "./images/presentation3.mp4"
import Card from "../components/HomeCard"
import IconButton from '@mui/material/IconButton';
import PlayCircle from '@mui/icons-material/PlayCircleOutline';
import PauseCircle from '@mui/icons-material/PauseCircleOutline';
import Video from "../components/Video";
import Photo1 from "./images/instagram1.jpg"
import Porche from "./images/porche.jpg"

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
        <div style={{height:"65px",width:"50px"}}></div>
        <div className="homeBody">
           <div className="homePlayer">
             <ReactPlayer playIcon={true} playing={pause} loop={true} height="100%" width="100%"  muted={true} url={Video1} />
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
                  link="/model/taycan"
                />
                 <Card model="911" title="The iconic, rear-engine sport car with exceptional performance."
                   price="£87,000.00"
                   url="url('https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                   link="/model/911-carrera"
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
                 <Card model="718" title="The mid-engine esports car for two, made for pure driving pleasure."
                 price="£51.800.00"
                 url="url('https://images.unsplash.com/photo-1592853625589-1a5bc69f9c95?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 link="/model/cayman"
               />
             </div>
            </div>
   

          

            <div className="homeDivCentering">
            <div className="homeDiv3">
                <div className="homeInstaCard">
                     <div className="homeInstaBig homeInstagramPosition homeInstagram1" >                   
                            <a target="_blank" href="https://www.instagram.com/p/C5Ds9RovIfG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="homeImage" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" /></a>
                     </div>
                 
                  <div className="homeDivCentering">
                     <div className="homeInstaSmall homeInstagram2" style={{marginRight:"5px"}}>                     
                      <a target="_blank" href="https://www.instagram.com/p/C47nFO5I3vg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" className="homeImage" /></a>         
                     </div>
                     <div className="homeInstaSmall" style={{marginLeft:"5px"}}>
                            <Video src={Video3} />  
                     </div> 
                  </div>
                 </div>

                 <div className="homeInstaCard homeHide">
                 <div className="homeDivCentering">
                     <div className="homeInstaSmall homeInstaSmall2" style={{marginRight:"5px"}}>
                            <Video src={Video2} />
                     </div>
                     <div className="homeInstaSmall homeInstaSmall2 homeInstagram3 homeInstagramPosition" style={{marginLeft:"5px"}}>
                        <a target="_blank" href="https://www.instagram.com/p/C4nHlx_KxX0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" className="homeImage" /></a>
                     </div>
                  </div>
                  <div>
                     <div className="homeInstaBig homeInstagram4 homeInstagramPosition">
                     <a target="_blank" href="https://www.instagram.com/p/C4igVkNqJmb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" className="homeImage" /></a>
                     </div>
                  </div>
                 </div>

                 <div className="homeInstaCard homeHide2">
                 <div>
                     <div className="homeInstaBig homeInstagram5"> 
                        <a target="_blank" href="https://www.instagram.com/p/C4I-GXIKMMg/?utm_source=ig_web_copy_link"> <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" className="homeImage" /></a> 
                     </div>
                  </div>

                  <div className="homeDivCentering">
                     <div className="homeInstaSmall homeInstagram6" style={{marginRight:"5px"}}>                     
                     <a target="_blank" href="https://www.instagram.com/p/C2973cCqtsx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" className="homeImage" /></a> 
                     </div>
                     <div className="homeInstaSmall" style={{marginLeft:"5px"}}>
                            <Video src={Video4} />
                     </div>
                  </div>
                 </div>
                </div>
              </div>

            <div className="homeDiv2">
            <div className="homeAddPadding">
               <p className="roboto homeCardTitle homeDiv2P">The the new GT3 models are here. Explore the driving experience whith the new engines</p>
              <div className="homeDivCentering"><button style={{marginBottom:"5px", marginTop:"14px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">Explore the range</button></div>
            </div>
            </div>
        </div>
        <div className="homeCarsDiv">
        </div>
     <Footer />
     </div>)
}


export default Home;
 