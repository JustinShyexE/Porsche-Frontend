import React from "react";


function CarouselDiv(props){
  return ( <div className="modelCarouselDivStyle"> 
  <div className="modelImageCarDiv2">
      <img style={{ backgroundColor: "#DADBDD", paddingTop:"20px",paddingBottom:"20px"}} className="modelImageCar" src={props.image} />
  </div>   
  <div className="modelThird_DescriptionDiv">
      <p className="roboto modelStart_p">Taycan</p>
      <p className="modelDescription_p14px">from {props.price} incl. VAT</p>               
      <p className="roboto modelDescription_p14px">	{props.emissions}	</p>
      <p className="roboto modelStart_p modelMarginBotOff">{props.acceleration} s</p>
      <p className="roboto modelDescription_p14px">Acceleration 0-62 mph (0-100 km/h) with Launch Control</p>
      <p className="roboto modelStart_p modelMarginBotOff">{props.ps} PS / {props.kw} kW</p>
      <p className="roboto modelDescription_p14px">Maximum power (PS) / Maximum power (kW)</p>
      <p className="roboto modelStart_p modelMarginBotOff">{props.speed} mph</p>
      <p className="roboto modelDescription_p14px">Top Speed</p>
  </div>
  <button style={{marginBottom:"20px"}} className="loginInput loginButton signupInput signupButton modelButton">Configure & Buy</button>
</div>)
}


export default CarouselDiv;