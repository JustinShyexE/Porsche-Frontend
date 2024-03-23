import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Carousel} from "react-responsive-carousel"
import ColorDiv from "../components/ColorDiv";


function Model(){
    return (<div className="customMainBody">
    <Header />
    <h1 className="roboto customTitle">Panamera 4</h1>
      <div className="customBody">
        <div className="customCarouselDiv">
         <Carousel showStatus={false} emulateTouch={true} showArrows={false} thumbWidth={150}>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D34oQDcFG1EuWXsOat2eV6iTrdPzhRc2wFlqA7fQi4DOJUPYctiTBsN5NcD2dioCoEvQDcFGdvNYnfurRAeV6iTxjlzhRc2GapqA7fQrZDOJUPYwqfTBsN5xsy2dEhev5HFhLHn0POxSeZYoOaD8JiXvBCX0" />
                </div>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D34oQDcFG1EuWXsOat2eV6iTrdPzhRc2wFlqA7fQi4DOJUPYctiTBsN5NcD2dioCoEvQDcFGdvNYnfurRAeV6iTxjlzhRc2GapqA7fQrZDOJUPYwqfTBsN5xsy2dEhev5HFhLHn0POxSeZYoOaD8JiXvBCX0" />
                </div>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D34oQDcFG1EuWXsOat2eV6iTrdPzhRc2wFlqA7fQi4DOJUPYctiTBsN5NcD2dioCoEvQDcFGdvNYnfurRAeV6iTxjlzhRc2GapqA7fQrZDOJUPYwqfTBsN5xsy2dEhev5HFhLHn0POxSeZYoOaD8JiXvBCX0" />
                </div>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjZuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3Utd21UzQKLJYnfurEhx5yPewS7OCvNzxMQ%25GXoq1edUr6FObzhewRuT0TzUx7e2H2Jc1UzQK7cTbsqYSNX5yPewk8%25CvNzxKEWGXoq1SVUr6FObMGqwRuT0kuix7Jv5c0jQvpjs3Orkm5Vb2rEUA6efcRHf3" />
                </div>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3Utd21UzQKLJYnfurEhx5yPewS7OCvNzxMQ%25GXoq1edUr6FObzhewRuT0TzUx7e2H2Jc1UzQK7cTbsqYSNX5yPewk8%25CvNzxKEWGXoq1SVUr6FObMGqwRuT0kuix7Jv5c0jQvpjs3Orkm5Vb2rEUA6efcRHf3" />
                </div>
                <div className="customCarouselImg">
                    <img className="customCarouselImg" src="https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3Utd21UzQKLJYnfurEhx5yPewS7OCvNzxMQ%25GXoq1edUr6FObzhewRuT0TzUx7e2H2Jc1UzQK7cTbsqYSNX5yPewk8%25CvNzxKEWGXoq1SVUr6FObMGqwRuT0kuix7Jv5c0jQvpjs3Orkm5Vb2rEUA6efcRHf3" />
                </div>
            </Carousel>
            </div>
        <div className="customColorsDiv">
            <p className="roboto customH1">Colors</p>
            <div className="customAllColorsDiv">
              <p className="roboto customH1" style={{fontSize:"25px",paddingBottom:"0px"}}>Contrasts</p>
              <div className="customColor"></div>
              <ColorDiv color="White" />
              <ColorDiv color="Black" />
              <ColorDiv color="Yellow" />
              <ColorDiv color="Red" />
            </div>
        </div>
      </div>
      <Footer />  
    </div>)
}



export default Model;
