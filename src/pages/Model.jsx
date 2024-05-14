import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import CarouselDiv from "../components/CarouselDiv";
import {useNavigate, useParams } from "react-router-dom";


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
        link={model.link}
       />
      )
    }
 if(data.models){
    const array = data.models
    var rows = array.reduce(function (rows, key, index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
      console.log(rows)
    //
    const array2 = data.models
    var rows2 = array2.reduce(function (rows2, key, index) { 
          return (index % 3 == 0 ? rows2.push([key]) 
            : rows2[rows2.length-1].push(key)) && rows2;
        }, []);  
    }
  


  if(id!=="taycan" && id!=="cross-turismo" && id!=="sport-turismo" && id!=="cayman" && id!=="cayman-gt4-rs" && id!=="718-spyder-rs" && id!=="911-carrera" && id!=="911-turbo" && id!=="911-turbo-s" && id!=="911-dakar" && id!=="911-gt3"
  && id!=="911-gt3-rs" && id!=="911-st" && id!=="911-targa"
  )return (<h1>Error 404 Page not Found</h1>)


    return(<div className="mainBody">
    <Header />
    <div className="underHeader"></div>  
    <div className="modelBody" >
        <div className="modelStartDiv">
            <div className="modelStartDivContent">
            <div className="modelImageLogoDiv">
                 <img className="modelImageLogo" src={data.logo} />   
            </div>
            </div>
            <div className="modelStartDivContent">
            <div className="modelImageCarDiv">
             <img className="modelImageCar" src={data.image} />
            </div>                  {/** {data.image} */}
            </div>

            <div class="homeCarsDiv">
                {data.links? data.links.map(link =>  <a id="homeAnchorStyle" class="btn btnsize" href={link.link}>{link.name}</a> ):null}
            </div>

            <hr />           
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
             {data.models? data.models.map(model =>{
                  <div>
                     {createModel(model)}
                  </div>
                  }):null
                }
               {/*Adding array[i] to CarouselDiv*/}
            </Carousel>
            </div>

       <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv2">           
         {data.models?
             <Carousel showArrows={true} centerSlidePercentage={0} showStatus={false}  stopOnHover="true" swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>       
                          {rows.map(row=>(
                                 <div className="modelInlineDiv modelInlineDiv_Padding">
                                          {row.map(object=> createModel(object))}
                                 </div>
                          ))}                          
             </Carousel>
              :null}      
        </div>
        <div className="modelMiddle_ThirdDiv modelMiddle_ThirdDiv3">
        {data.models?
             <Carousel className="relative"  centerSlidePercentage={0} showStatus={false}  swipeable={true} showThumbs={true} swipeScrollTolerance={2} emulateTouch={true}>             
                  {rows2.map(row=>(
                                 <div className="modelInlineDiv modelInlineDiv_Padding">
                                          {row.map(object=> createModel(object))}
                                 </div>
                          ))}  
             </Carousel>
             :null}
        </div>
        <div className="model_4thDiv">
            <div className="modelCard" >
                 <div className="modelCardImageCar modelBackgroundimage" style={{backgroundImage: 'url(' + data.imageCard + ')'}}>           
                        
                 </div>
                 <div className="modelCard2">
                    <p className="roboto modelStart_p modelDivTitle">Finance from Porsche.</p>
                    <p className="roboto modelDescription_p14px modelMarginTop modelDivDescription">Driving a Porsche is an exciting and unique experience. With Porsche Financial Services you unlock that dream. Explore the finance options available to help you secure your new all models.</p>
                    <div className="modelCardButton visibilitySetA">
                       <button id="modelMarginRigh33px modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">Discover finance options</button>
                    </div>
                 </div>
            </div>
        </div>
        <div style={{paddingTop:"0px", minHeight:"100px"}} className="modelMiddle_SecondDiv">
          <div  className="modelLastDiv">
            <p className="roboto modelStart_p">Consumption and Emissions.</p>
            <p className="roboto modelDescription_p14px">
             {/*map from index 1+*/}
              {data.models? data.models.map(model =>
                <span >
                <span className="modelDescription_p500w"> {model.title} Models (WLTP)*: </span>
                {model.emissions}
                 </span>
              ):null}
               </p>
          </div>
        </div>
    </div>
    <Footer />
  </div>)
}

export default Model;


