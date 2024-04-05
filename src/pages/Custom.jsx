import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Carousel} from "react-responsive-carousel"
import ColorDivMain from "../components/ColorDivMain";
import ClickableButton from "../components/ClickableButton";

function Model(){
    return (<div className="customMainBody">
    <Header />
      <div className="customBody">
        <h1 className="roboto customTitle">Panamera 4</h1>
        <div className="customMainDivs">
        <div className="customCarouselDiv">
         <Carousel showStatus={false} emulateTouch={true} showArrows={false} thumbWidth={100}>
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
{/*style={{minWidth:"100px",maxWidth:"220px",minHeight:"30px",display:"flex", justifyContent:"center"}} */}
            <div className="customColorsDiv">
            <p className="roboto customH1">Colors <span className="roboto" style={{float:"right",fontWeight:"400",fontSize:"22px",paddingRight:"20px"}}>£ 312.121</span></p>
            <div className="customAllColorsDiv">
              <p className="roboto customH1" style={{fontSize:"19px",paddingBottom:"0px"}}>Contrasts </p>
               <ColorDivMain colorName1="White" colorName2="Black" colorCode1="#efefef" colorCode2="#000000" />
               </div>
               <div className="customAllColorsDiv">
               <p className="roboto customH1" style={{fontSize:"19px",paddingBottom:"0px"}}>Metallic Shades </p>
              <ColorDivMain colorName1="Black Metallic" colorName2="White Metallic" colorCode1="#000000" colorCode2="#eff5f9" />
              <ColorDivMain colorName1="Volcano Grey" colorName2="Dolomite Silver" colorCode1="#252625" colorCode2="#c3cdd3" />
              <ColorDivMain colorName1="Ice Grey" colorCode1="#DFE2E9"  />
               </div>
             <div className="customAllColorsDiv">
            <p className="roboto customH1" style={{fontSize:"19px",paddingBottom:"0px"}}>Dreams </p>
              <ColorDivMain colorName1="Provence" colorName2="Maderia Gold Metallic" colorCode1="#94849c" colorCode2="#b87c44" />
              <ColorDivMain colorName1="Lugano Blue" colorName2="Gentain Blue Metallic" colorCode1="#3864b4" colorCode2="#00194b" />
            </div>
            <div className="customAllColorsDiv">
            <p className="roboto customH1" style={{fontSize:"19px",paddingBottom:"0px"}}>Legends </p>
              <ColorDivMain colorName1="Oak Green Metallic neo" colorName2="Crayon" colorCode1="#484c3c" colorCode2="#c7c7bf" />
              <ColorDivMain colorName1="Montego Blue Metallic" colorName2="Aventurine Green Metallic" colorCode1="#387c94" colorCode2="#6c746c" />
             </div>
             <div style={{display:"flex",justifyContent:"center"}}>
             <button style={{marginBottom:"5px", marginTop:"14px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">Configure & Buy</button>
             </div>
            </div>
            </div>
    </div>
      <Footer />  
    </div>)
}



export default Model;
