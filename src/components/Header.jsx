import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
import Button2B from "./Button2B";
import Icon from "./Icon";
import { useState } from "react";



function Header(props){
   const[isExpanded, setExpand] = useState(false)
   const[whichButton, setButton]=useState([0])

   function handleExpand1(){
      setExpand(true)
      setButton([1])
         }
   function handleExpand2(){
      setExpand(true)
      setButton([2])
         }
   
   function handleExpand3(){
      setExpand(true)
      setButton([3])
         }


   function ExpandOff(){
      setExpand(false)
         }
    
   

   return(<div>
   <div className="header">
   <div className="btn1_position">
   <div onMouseOver={handleExpand1}><Button text="Models"/></div>
   <div onMouseOver={ExpandOff}><Button text="Shop"/></div>
   <div onMouseOver={handleExpand2}><Button text="Vehicle Purchase"/></div>
   <div onMouseOver={handleExpand3}><Button text="Experience"/></div>
   </div>
   <a href="/"><h2 className="logo">Porsche</h2></a>
   {isExpanded? <div onMouseLeave={ExpandOff} className="underHeaderON">
   {whichButton[0]===1?
   <div className="Row1">
   <Button2 text="718" link="/model/cayman" />
   <Button2 text="911" link="/model/911-carrera" />
   <Button2 text="Taycan" link="/model/taycan" />
   <Button2 text="Panamera" link="/" />
   <Button2 text="Macan" link="/" />
   <Button2 text="Cayenne" link="/" />
   </div>
   :null}
   {whichButton[0]===2?
   <div className="Row1 Row2" >
    <Button2B text="Configure" />
    <Button2B text="Compare Models" />
    <Button2B text="Find New and Pre-owned Vehicles" />
    <Button2B text="E-Mobility & E-Performance" />
   </div>
   :null}
   {whichButton[0]===3?
   <div className="Row1 Row3">
    <Button2B text="Events & Partenership" />
    <Button2B text="Porsche Clubs" />
    <Button2B text="Golf Sports" />
    <Button2B text="Sprin Challange" />
    <Button2B text="Motorsport" />
  </div>
   :null}

   </div > : <div className="underHeaderOFF"></div>}
   <a href="/login-password/email/password">{/*<AccountCircleIcon style={{ color: 'white', fontSize: '30'}} className="accountIcon" />*/}</a>
   <Icon />
   </div>
   </div>)
}


export default Header;
