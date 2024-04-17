import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

function Profile(){
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
                        <div className="profileImageDiv profileVisibilityA">
                         <img className="profileImage" src="https://my.porsche.com/static/myportal/assets/home/garage/empty_add_vehicle.png" />
                        </div>
                        <div className="profileDescritpionDiv profileVisibilityA">
                            <h1 className="roboto profileTitle">Add my Porsche</h1>
                            <p className="profileContent">Do you already own the Porsche of your dreams? Then simply "park" it in My Porsche to access it at any time.</p>
                            <button style={{marginBottom:"5px", marginTop:"50px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">Configure & Buy</button>
                        </div>
                        
                        <div className="profileDescritpionDiv profileVisibilityB">
                            <h1 className="roboto profileTitle">Add my Porsche</h1>
                            <p className="profileContent">Do you already own the Porsche of your dreams? Then simply go to "my vehicle" in My Porsche to access it at any time.</p>
                            <button style={{marginBottom:"5px", marginTop:"50px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">My Vehicle</button>
                        </div>
                        <div className="profileImageDiv profileVisibilityB">
                         <img className="profileImage" src="https://my.porsche.com/static/myportal/assets/home/garage/empty_add_vehicle.png" />
                        </div>
                    </div>
                 </div>
                 
             </div>
            <Footer />
      </div>)
}


export default Profile;