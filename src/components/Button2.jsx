import React from "react";
import { useState } from "react";
import Car from "./Car";
import cars from "../pages/cars";


function Button2(props){
    const[click, setClick]=useState(false)
    //setting the container on right

    function find(){
        const model= cars.filter(model=> model.mainModel===props.text)
        return model
       }
    
    
   function foundedCars(car){
   return( <Car 
      key={car.id}
       id={car.id}
       model={car.model}
       image={car.image}
       link="/"
       />)
   }

    function SetClickON(){
      setClick(true)
    }

    function SetClickOFF(){
      setClick(false)
    }
  
    return (<div>
      <div onMouseLeave={SetClickOFF}  onMouseOut={find} onMouseOver={SetClickON} className="underButtonA_div"><a href="/" className={click? "underButtonB" : "underButtonA"} >{props.text}</a></div>
      {click?<div className="container" onMouseEnter={SetClickON} onMouseLeave={SetClickOFF}>
       {find().map(foundedCars)}
      </div>
      : null}
      </div>)
}


export default Button2