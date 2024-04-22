import React, { useState } from "react";
import porche from "./images/porche7.jpg"
import High from "../components/HighligthingText"
import Icon from "./images/email.png"
import {Await, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  
  const navigate = useNavigate();
  let {modelId, id} = useParams();
 
  const [data, setData] = useState({
    email:"",
    password:""
  })
  
  function handleChange(event){
    const {value, name} = event.target;
    setData(prevValue=>{
    if(name==="email") return {email: value, password: prevValue.password}
    else if(name==="password") return {email: prevValue.email, password: value}
  })
  }

  var submit=async(e)=>{
    e.preventDefault();
    setTimeout(function () {
      window.location.reload();
    }, 1000)
    const dataa = data
    await fetch("http://localhost:5000/login-password",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataa)
   })
}
  
  useEffect(() =>{
   fetch("/login-password").then(
     response => response.json()
    ).then(dataa =>{ 
      console.log(dataa)
       if(dataa.status===true){
        if(modelId==="email" && id==="password"){
          navigate("/profile")
        }else{
          navigate("/custom/"+modelId+"/"+id)
        }
       }
      })
  },[])
   

  return(<div className="loginBody"> 
            <img className="loginImage" src={porche} />
            <div className="loginDiv">
              <div className="login">
                <img className="porscheLogo" src="https://assets.identity.porsche.com/img/logo.png" />
                <div className="welcome roboto">Welcome</div>
                <input onChange={handleChange} name="email" value={data.email} placeholder="Email address" inputMode="email" type="text" className="loginInput" />
                <input onChange={handleChange} name="password" value={data.password} placeholder="Password" inputMode="password" type="password" className="loginInput loginInputPassword" />
                <button onClick={submit} name="action" type="submit" className="loginInput loginButton ">Continue</button>
                <hr className="line"/><p className="roboto loginP">LOGIN WITHOUT PASSWORD</p> <hr className="line line2"/>

                <button type="submit" className="loginInput loginButton loginEmail"> <img className="loginIcon" src={Icon} /> Continue with email</button>
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