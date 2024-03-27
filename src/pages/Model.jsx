import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import CarouselDiv from "../components/CarouselDiv";

function Model(){

  return(<div className="mainBody">
    <Header />
    <div className="modelBody" >
        <div className="modelStartDiv">
            <div className="modelStartDivContent">
            <div className="modelImageLogoDiv">
                 <img className="modelImageLogo" src="https://www.taycanforum.com/forum/attachments/taycan-jpg.11066/" />   
            </div>
            </div>
            <div className="modelStartDivContent">
            <div className="modelImageCarDiv">
             <img className="modelImageCar" src="https://images-porsche.imgix.net/-/media/A476D89B333349D39A089152383C7E85_22CDF95F742F459BBA7DA94B27AD66BC_TA24Q3BIX0010-taycan-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format" />
            </div>
            </div>
            <h1 className="roboto modelStart_h1">Taycan</h1>
            <p className="roboto modelStart_p">from £ 86,500.00 incl. VAT</p>
            <p className="roboto modelStart_p_consumption">Electrical consumption combined (model range): 19.7 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km</p>
        </div>
        <div className="modelMiddleDiv">
            <div className="modelDescriptionDiv">
            <p className="modelNumber_p roboto">4.8<span className="modelSmall_Letter">s</span></p>
            <p className="modelDescription_p roboto">Acceleration 0-62 mph (0-100 km/h) with Launch Control</p>
            <p className="modelNumber_p roboto">300<span className="modelSmall_Letter">kW / </span>408<span className="modelSmall_Letter">PS</span></p>
            <p className="modelDescription_p roboto">Maximum power (kW)/Maximum power (PS) Details of the measuring method can be found at <a className="inputAnchor" href="/model"> www.porsche.com/gtr21</a></p>
            <p className="modelNumber_p roboto">143<span className="modelSmall_Letter">mph</span></p>
            <p className="modelDescription_p roboto">Top speed</p>
            </div>
            <div className="modelImageCarDiv_padding">
              <img className="modelImageCar modelImageCarSecond" src="https://images-porsche.imgix.net/-/media/8BEAA9C5AB93489C8F2415AE4C9329F1_C2002BAFD67942E7B6E4E23C7FB5E952_TA24Q3BIX0011-taycan-front?w=750&q=85&auto=format" />
            </div>
        </div> 
        <div className="modelMiddle_SecondDiv">
           <div className="model_Second_ImageCarDiv modelDown">
             <img className="modelImageCar modelImageCarRadius" src="https://images-porsche.imgix.net/-/media/B5EE8921E27E4796A4970472BD26D260_055186BBAF4441B39A545330CD91EAAE_TA24Q3EOX0002-taycan-turbo-s-driving?w=652&ar=3%3A4&q=45&dpr=2&auto=format" />     
           </div>
           <div className="model_Second_ImageCarDiv modelUp">
             <img className="modelImageCar modelImageCarRadius" src="https://images-porsche.imgix.net/-/media/6AF5BE9FDA3C45EE9C55B01EEC780D9C_CA51670E2BD042FBAFAFD13CF41CA7B1_TA24Q3EOX0005-taycan-turbo-s-charging?w=652&ar=3%3A4&q=45&dpr=2&auto=format" />     
           </div>
           
        </div>
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv1">
             <Carousel centerMode={false} centerSlidePercentage={0} showStatus={false}  stopOnHover="true" swipeable={true} showThumbs={false} swipeScrollTolerance={2} emulateTouch={true}>             
                 <div>
                   <CarouselDiv />
                  </div>
                  <div>
                   <CarouselDiv />
                  </div>
                  <div>
                   <CarouselDiv />
                  </div>
             </Carousel>
        </div>
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv2">
             <Carousel showArrows={true} centerSlidePercentage={0} showStatus={false}  stopOnHover="true" swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>             
                  <div className="modelInlineDiv modelInlineDiv_Padding">
                   <CarouselDiv />
                   <CarouselDiv />
                   </div> 
                   <div className="modelInlineDiv modelInlineDiv_Padding2">
                   <CarouselDiv />
                   <CarouselDiv />
                   </div>
             </Carousel>
        </div>
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv3">
             <Carousel
            
            className="relative"
             color-secondary centerSlidePercentage={0} showStatus={false}  swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>             
                  <div className="modelInlineDiv modelInlineDiv_Padding" >
                   <CarouselDiv />
                   <CarouselDiv />
                   <CarouselDiv />
                   </div> 
                   <div className="modelInlineDiv modelInlineDiv_Padding2">
                   <CarouselDiv />
                   </div>
             </Carousel>
        </div>

        <div className="model_4thDiv">
            <div className="modelCard" >
                 <div className="modelCardImageCar">           
                  <img className="modelImageCar modelCardImageCar" src="https://images-porsche.imgix.net/-/media/ED87AF3422674AEDB2BAAC48412F6702_62B7E0A2379A4343BE4008366D287F48_TA24Q3BOX0001-01-taycan-front-and-side-mobile?w=407&q=45&dpr=2&auto=format" />   
                 </div>
                 <div className="modelCard2">
                    <p className="roboto modelStart_p">Finance from Porsche.</p>
                    <p className="roboto modelDescription_p14px modelMarginTop">Driving a Porsche is an exciting and unique experience. With Porsche Financial Services you unlock that dream. Explore the finance options available to help you secure your new all-electric Taycan.                   </p>
                    <div className="modelCardButton visibilitySetA">
                       <button id="modelMarginRigh33px modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">Configure & Buy</button>
                    </div>
                 </div>
            </div>
        </div>
        
        <div style={{paddingTop:"0px", minHeight:"100px"}} className="modelMiddle_SecondDiv">
          <div style={{padding:"20px", paddingTop:"20px"}}>
            <p className="roboto modelStart_p">Consumption and Emissions.</p>
            <p className="roboto modelDescription_p14px"><span className="modelDescription_p500w">Taycan Models (WLTP)*:</span> Electrical consumption combined (model range): 19.7 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km, <span className="modelDescription_p500w">Taycan 4S Models (WLTP)*:</span> Electrical consumption combined (model range): 20.9 - 17.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km, <span className="modelDescription_p500w">Taycan Turbo Models (WLTP)*:</span> Electrical consumption combined (model range): 20.5 - 18.0 kWh/100 km, CO2 emissions combined* (model range): 0 g/km, <span className="modelDescription_p500w">Taycan Turbo S Models (WLTP)*:</span> Electrical consumption combined (model range): 20.5 - 17.9 kWh/100 km, CO2 emissions combined* (model range): 0 g/km, <span className="modelDescription_p500w">Taycan Turbo GT with Weissach Package Models (WLTP)*:</span> Electrical consumption combined (model range): 21.3 - 20.6 kWh/100 km, CO2 emissions combined* (model range): 0 g/km, <span className="modelDescription_p500w">Taycan Turbo GT Models (WLTP)*:</span> Electrical consumption combined (model range): 21.6 - 20.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km</p>
          </div>
        </div>
    </div>
    <Footer />
  </div>)
}


export default Model;


//<div className="modelBody" >
