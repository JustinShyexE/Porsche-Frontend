import React from "react";



function Video(props){
    return(<div style={{width: "100%", height: "100%"}}>
    <video  style={{width: "100%", height: "100%"}} controls="controls" controlslist="nodownload" src={props.src} autoPlay="autoplay" muted="muted" preload="auto"  loop="loop">
      </video>
    </div>)
}


export default Video;