import React from "react";



function HomeCard(props){
       return(<div className="homeDivCentering"> <div className="homeContentCards homeCenterEnd" style={{backgroundImage: props.url,
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover"}}>
                  <div>
                      <p className="roboto homeCardTitle">{props.title}</p>
                     <p className="roboto homeCardPrice">from {props.price} incl. VAT</p>
                      <div className="homeDivCentering">
                         <button style={{marginBottom:"5px", marginTop:"14px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton homeButton">All {props.model} Models</button>
                    </div>
                  </div>
               </div>
               </div>)
}


export default HomeCard;