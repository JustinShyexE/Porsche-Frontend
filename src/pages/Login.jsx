import React from "react";
import porche from "./images/porche7.jpg"
import High from "../components/HighligthingText"
import Icon from "./images/email.png"
import { useState } from "react";
function Login(){
  
  const [email, setEmail] = useState("");
  function handleChange(event){
    setEmail(event.target.value)
  }

  return(<div className="loginBody"> 
            <img className="loginImage" src={porche} />
            <div className="loginDiv">
              <div className="login">
                <img className="porscheLogo" src="https://assets.identity.porsche.com/img/logo.png" />
                <div className="welcome roboto">Welcome</div>
                <input value={email} onChange={handleChange} placeholder="Email address" inputMode="email" type="text" className="loginInput" />
                <a href={"/login-password/"+email} ><button name="action" type="submit" className="loginInput loginButton ">Continue</button></a>
                <hr className="line"/><p className="roboto loginP">LOGIN WITHOUT PASSWORD</p> <hr className="line line2"/>
                <button name="action" type="submit" className="loginInput loginButton loginEmail"> <img className="loginIcon" src={Icon} /> Continue with email</button>
                <p className="roboto loginP2">Don't have an account? <a className="inputAnchor" href="/signup"> Sign up</a></p>
                </div>
            </div>
            <div className="loginFooter">
              <p className="loginText">Porsche Sales & Marketplace GmbH</p>
              <High text="Legal notice"/>
              <High text="Business and Human Rights"/>
              <High text="Privacy policy"/>
              <High text="Cookie Policy"/>
            </div>
     </div>)
}
export default Login;