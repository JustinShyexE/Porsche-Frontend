import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import {Carousel} from "react-responsive-carousel"

function ProfileCar(){
    return(<div className="customMainBody">
    <Header />
    <div style={{height:"65px",width:"50px"}}></div>
     <div className="profileBody">
         <div className="profileDiv">
            <h1 className="roboto profileWelcome">Welcome, Iustin Andrei Bacaila <hr ></hr></h1>
            
            <div className="profileSecondDiv">
            
                <div style={{display:"flex",gap:"20px",minWidth:"200px",minHeight:"70px"}}>
                <Button id="profileAnchorStyle" text="My vehicle" />
                <Button id="profileAnchorStyle" text="My configuration" />
                </div>
                 <div className="myvehicleDescritpionDiv">
                 <div className="myvehicleImageDiv">
                    <Carousel showStatus={false} emulateTouch={true} showArrows={false} showThumbs={false}>
                      <div className="myvehicleImageDiv">
                         <img src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAVbsqYSaxl0iO5M5tCvNzxzB8GXoq1I9Wr6FObM4vwRuT0kuix7Jv5c0jQvpjs7oWrfGVb2rEUA6efcRHvk" className="myvehicleImg" />      
                      </div>
                      <div className="myvehicleImageDiv">
                         <img src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAVbsqYSaxl0iO5M5tCvNzxzB8GXoq1I9Wr6FObM4vwRuT0kuix7Jv5c0jQvpjs7oWrfGVb2rEUA6efcRHvk" className="myvehicleImg" />      
                      </div>
                      <div className="myvehicleImageDiv">
                         <img src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAVbsqYSaxl0iO5M5tCvNzxzB8GXoq1I9Wr6FObM4vwRuT0kuix7Jv5c0jQvpjs7oWrfGVb2rEUA6efcRHvk" className="myvehicleImg" />      
                      </div>
                    </Carousel>
                    </div>
                      <div className="myvehicleFlex2">
                       <div style={{backgroundColor:"#DADBDD", borderRadius:"20px"}}>
                      <div className="myvehicleContent myvehicleContentPrice">
                           <p className="roboto myvehicleTitle">718 Cayman</p>
                           <p className="roboto myvehiclePrice">Paid £51,800.00 incl. VAT</p>
                       </div>
                       <div className="myvehicleContent">
                           <div className="myvehicleFlex">
                           <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">300<span className="myvehicleSpan">PS</span></p>
                              <p className="roboto myvehicleSpan">Power (PS)</p>
                           </div>
                           <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">5.1<span className="myvehicleSpan">secs</span></p>
                              <p className="roboto myvehicleSpan">Acceleration 0-62 mph (0-100 km/h)</p>
                           </div>
                           <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">170<span className="myvehicleSpan">mph</span></p>
                              <p className="roboto myvehicleSpan">Top speed</p>
                           </div>
                           </div>
                           <div className="myvehicleCarDetails2">
                              <p className="myvehicleSpan">CO2 emissions oombined*(model range): 247 - 230 g/km*</p>
                           </div>
                         </div>
                       
                         </div>
                         </div>

                </div>
              </div>
              </div>
              </div>
            <Footer />
       </div>)
}
//<p className="roboto modelStart_p_consumption">Electrical consumption combined (model range): 19.7 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km</p>

export default ProfileCar;