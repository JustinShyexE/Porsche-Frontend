import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import CarouselDiv from "../components/CarouselDiv";
import {useParams } from "react-router-dom";


function Model(props){
   
  const [data, setData]=useState([{}])

  const {id} = useParams();

  useEffect(() =>{
    fetch("/model/"+id).then(
      response => response.json()
    ).then(dataa =>{
         setData(dataa)
    })
  },[])
   
function createModel(model){
  return (
    <CarouselDiv 
       key={model.id} 
        id={model.id} 
      image={model.image}
       title={model.title}
      price={model.price}
      emissions={model.emissions}
      acceleration={model.acceleration}
      kw={model.kw}
      ps={model.ps}
      speed={model.speed}
     />
  )
}
   const len = data.lengthh
  
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
             <img className="modelImageCar" src={data.image} />
            </div>
            </div>
            <h1 className="roboto modelStart_h1">{data.title}</h1>
             
            
  

            <p className="roboto modelStart_p">from {data.price} incl. VAT</p>
            <p className="roboto modelStart_p_consumption">{data.emissions}</p>
        </div>
        <div className="modelMiddleDiv">
            <div className="modelDescriptionDiv">
            <p className="modelNumber_p roboto">{data.acceleration}<span className="modelSmall_Letter">s</span></p>
            <p className="modelDescription_p roboto">Acceleration 0-62 mph (0-100 km/h) with Launch Control</p>
            <p className="modelNumber_p roboto">{data.kw}<span className="modelSmall_Letter">kW / </span>{data.ps}<span className="modelSmall_Letter">PS</span></p>
            <p className="modelDescription_p roboto">Maximum power (kW)/Maximum power (PS) Details of the measuring method can be found at <a className="inputAnchor" href="/model"> www.porsche.com/gtr21</a></p>
            <p className="modelNumber_p roboto">{data.speed}<span className="modelSmall_Letter">mph</span></p>
            <p className="modelDescription_p roboto">Top speed</p>
            </div>
            <div className="modelImageCarDiv_padding">
              <img className="modelImageCar modelImageCarSecond" src={data.imageFront} />
            </div>
        </div> 
        <div className="modelMiddle_SecondDiv">
           <div className="model_Second_ImageCarDiv modelDown">
             <img className="modelImageCar modelImageCarRadius" src={data.imageFirst} />     
           </div>
           <div className="model_Second_ImageCarDiv modelUp">
             <img className="modelImageCar modelImageCarRadius" src={data.imageSecond} />     
           </div>
        </div>
        
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv1">
             <Carousel centerMode={false} centerSlidePercentage={0} showStatus={false}  stopOnHover="true" swipeable={true} showThumbs={false} swipeScrollTolerance={2} emulateTouch={true}>    
             {/*Adding array[i] to CarouselDiv*/}
             {data.models? data.models.map(model =>(
                  <div>
                  <CarouselDiv 
                  key={model.id} 
                  id={model.id} 
                  image={model.image}
                  title={model.title}
                  price={model.price}
                  emissions={model.emissions}
                  acceleration={model.acceleration}
                  kw={model.kw}
                  ps={model.ps}
                  speed={model.speed}
                  />
                  </div>
                 ))
                :null
                }
               {/*Adding array[i] to CarouselDiv*/}
            </Carousel>
            </div>

       <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv2">           
         {data.models?
             <Carousel showArrows={true} centerSlidePercentage={0} showStatus={false}  stopOnHover="true" swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>             
                            {len === 1?
                             <div className="modelInlineDiv modelInlineDiv_Padding2">
                                {createModel(data.models[0])}
                             </div>
                             :
                             <div className="modelInlineDiv modelInlineDiv_Padding">
                               {createModel(data.models[0])}
                               {createModel(data.models[1])}
                             </div> 
                            }

                           {len === 3?
                           <div className="modelInlineDiv modelInlineDiv_Padding2">
                               {createModel(data.models[2])}
                            </div> 
                              :
                            <div className="modelInlineDiv modelInlineDiv_Padding">
                              {createModel(data.models[2])}
                              {createModel(data.models[3])}
                            </div> 
                           }

                           {len === 5?
                           <div className="modelInlineDiv modelInlineDiv_Padding">
                              {createModel(data.models[4])}
                           </div> 
                           :
                            <div className="modelInlineDiv modelInlineDiv_Padding">
                               {createModel(data.models[4])}
                               {createModel(data.models[5])}
                            </div>
                            }
             </Carousel>
                       :null}                            
        </div>
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv3">
        {data.models?
             <Carousel className="relative"  centerSlidePercentage={0} showStatus={false}  swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>             
                  <div className="modelInlineDiv modelInlineDiv_Padding">
                           {createModel(data.models[0])}
                           {createModel(data.models[1])}
                           {createModel(data.models[2])}
                  </div> 
                  <div className="modelInlineDiv modelInlineDiv_Padding2">
                           {createModel(data.models[3])}
                           {createModel(data.models[4])}
                           {createModel(data.models[5])}
                  </div>
             </Carousel>
             :null}
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
