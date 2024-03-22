import React from "react";


function CarouselDiv(props){
  return ( <div className="modelCarouselDivStyle"> 
  <div className="modelImageCarDiv2">
      <img style={{ backgroundColor: "#DADBDD", paddingTop:"20px",paddingBottom:"20px"}} className="modelImageCar" src="https://images-porsche.imgix.net/-/media/261EF9F86B2B4F45AC57EA8D26C3B081_A4BAE2D2A1C74C5E87E3AB8A5B8F5124_TA24Q3BIX0010-taycan-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format" />
  </div>   
  <div className="modelThird_DescriptionDiv">
      <p className="roboto modelStart_p">Taycan</p>
      <p className="modelDescription_p14px">from £ 86,500.00 incl. VAT</p>               
      <p className="roboto modelDescription_p14px">	Electrical consumption combined (model range): 19.7 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km	</p>
      <p className="roboto modelStart_p modelMarginBotOff">4.8 s</p>
      <p className="roboto modelDescription_p14px">Acceleration 0-62 mph (0-100 km/h) with Launch Control</p>
      <p className="roboto modelStart_p modelMarginBotOff">408 PS / 300 kW</p>
      <p className="roboto modelDescription_p14px">Maximum power (PS) / Maximum power (kW)</p>
      <p className="roboto modelStart_p modelMarginBotOff">143 mph</p>
      <p className="roboto modelDescription_p14px">Top Speed</p>
  </div>
  <button style={{marginBottom:"20px"}} className="loginInput loginButton signupInput signupButton modelButton">Configure & Buy</button>
</div>)
}


export default CarouselDiv;