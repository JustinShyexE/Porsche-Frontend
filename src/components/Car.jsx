import React from "react";


function Car(props){
    return ( <div className="car_container">
    <a href={props.link}>
    <img style={{width: "274px", height:"139"}} src={props.image} /> 
    <p className="textPosition">{props.model}</p>
    </a>
    </div>)
}


export default Car;