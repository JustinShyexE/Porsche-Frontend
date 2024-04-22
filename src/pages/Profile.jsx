import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile(){

const navigate = useNavigate()
const [name, setName]=useState()

//checking if user is logged in
useEffect(() =>{
    fetch("/isLoggedIn").then(
      response => response.json()
     ).then(logged =>{ 
         if(logged.status===false){
          navigate("/login-password/email/password")
         }
       })
   },[])

 //recieving data from backend
useEffect(() =>{
    fetch("/details").then(
      response => response.json()
     ).then(dataa =>{ 
       console.log(dataa)
       setName(dataa.name)
       })
   },[])

 //sending singout status to backend
 let submit=async(e)=>{
    e.preventDefault();
    navigate("/")
    await fetch("http://localhost:5000/signout",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({status:false})
   })
 }
      
      return(<div className="customMainBody">
            <Header />
            <div className="underHeader"></div>
             <div className="profileBody">
                 <div className="profileDiv">
                    <h1 className="roboto profileWelcome">Welcome, {name} <span onClick={submit} style={{float:"right", paddingRight:"10px", cursor:"pointer", height:"25px"}}>Sign Out</span> <hr ></hr></h1>               
                    <div className="profileSecondDiv">               
                        <div style={{display:"flex",gap:"20px",minWidth:"200px",minHeight:"70px"}}>
                        <Button id="profileAnchorStyle" text="My profile" href="/profile" />
                        <Button id="profileAnchorStyle" text="My configuration" href="/my-vehicle" />
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
                            <a href="my-vehicle"><button style={{marginBottom:"5px", marginTop:"50px"}} id=" modelMarginTop" className="loginInput loginButton signupInput signupButton modelButton">My Vehicle</button></a>
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