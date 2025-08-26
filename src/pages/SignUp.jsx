import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/InputInbox";
import Footer from "../components/Footer";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import ClickableButton from "../components/ClickableButton";
import { useNavigate } from "react-router-dom";

function SignUp(){

 const navigate = useNavigate();
 const [data, setData] =useState({
  fName:"",
  mName:"",
  lName:"",
  email:"",
  password1:"",
  password2:""
})
 // const [status, setStatus] = useState(false)
  const[match, setMatch] = useState(false)
  const [empty, setNotEmpty] = useState(false)
  function handleChangee(event){
    const {name, value} = event.target
    setData(prevValue=>{
      if(name==="fName") return {fName:value, mName:prevValue.mName,lName:prevValue.lName,email:prevValue.email,password:prevValue.password}
      else if(name==="mName") return {fName:prevValue.fName, mName:value,lName:prevValue.lName,email:prevValue.email,password1:prevValue.password1,password2:prevValue.password2}
      else if(name==="lName") return {fName:prevValue.fName, mName:prevValue.mName,lName:value,email:prevValue.email,password1:prevValue.password1,password2:prevValue.password2}
      else if(name==="email") return {fName:prevValue.fName, mName:prevValue.mName,lName:prevValue.lName,email:value,password1:prevValue.password1,password2:prevValue.password2}
      else if(name==="password1") return {fName:prevValue.fName, mName:prevValue.mName,lName:prevValue.lName,email:prevValue.email,password1:value,password2:prevValue.password2}
      else if(name==="password2") return {fName:prevValue.fName, mName:prevValue.mName,lName:prevValue.lName,email:prevValue.email,password1:prevValue.password1,password2:value}
    })
    console.log(data)
    if(data.fName.length>0 || data.lName.length>0){
      setNotEmpty(false)
  } 
  }

     {/*Checkbox Code*/}
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
     {/*Checkbox Code*/}
    

     
     //sending data to backend with some requirments
     var submit=async(e)=>{
      if(data.password1 !== data.password2 || !data.password1 || !data.password2){
              setMatch(true)
      }
      else if(data.fName.length===0 && data.lName.length===0){
          setNotEmpty(true)
      }
      else{
      setMatch(false)
      setNotEmpty(false)
     // e.preventDefault();
      navigate("/login-password/email/password"); 
      await fetch("/signup",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
     })
    }
    }
    

   {/*  
    //recieving data from backend
    useEffect(() =>{
      fetch("/signup").then(
        response => response.json()
      ).then(dataa =>{  
           console.log("Recieving status from backend", dataa.status)    
           setStatus(dataa.status)
      })
    },[])
  */}


   


 return(<div className="mainSignupBody"> 
     <Header />
   <div className="underHeader"></div>  
   <div className="signupBody"> 
          <div className="signupContainer">
      <p className="roboto signupText signupTitle">Create your Porsche ID.</p>
      <p className="roboto signupText signupP">Become part of the Porsche family and create your Porsche ID.
Your key to all Porsche digital services and functions.</p>

      <div className="signupContainer760px">
      <Input type="text" text="Salutation*" placeholder="Miss Mr. Mrs. Ms. ..." classNameP="signupGap signupDiv1" className="loginInput signupInput signupDiv1 singnupInBar" />
      <Input type="text" text="Title*" placeholder="Dr. Prof. MA. BSc. BEng..." classNameP="signupGap signupDiv2" className="loginInput signupInput signupDiv2 singnupInBar" />
      </div>
      <div className="signupContainer760px">
        <div className="signupInputDiv signupDiv3" >
          <p className="signupInputText roboto2">First name*</p>
          <input value={data.fName} onChange={handleChangee} name="fName" placeholder="" inputMode="email" type="text" className="loginInput signupInput signupDiv3 singnupInBar" required/>
        </div>
        <div  className="signupInputDiv signupDiv4">
          <p className="signupInputText roboto2">Middle name*</p>
          <input value={data.mName} onChange={handleChangee} name="mName" placeholder="" inputMode="email" type="text" className="loginInput signupInput signupDiv4 singnupInBar" />
        </div>
      </div>
      <div className="signupContainer760px">
          <div  className="signupInputDiv signupDiv3">
            <p className="signupInputText roboto2">Last name*</p>
            <input value={data.lName} onChange={handleChangee} name="lName" placeholder="" inputMode="email" type="text" className="loginInput signupInput signupDiv3 singnupInBar" />
          </div>
        <div  className="signupInputDiv signupDiv4">
          <p className="signupInputText roboto2">E-mail address*</p>
          <input value={data.email} onChange={handleChangee} name="email" placeholder="" inputMode="email" type="email" className="loginInput signupInput signupDiv4 singnupInBar" />
        </div>
      </div>
      <div className="signupContainer760px">
       <div  className="signupInputDiv signupDiv3">
        <p className="signupInputText roboto2">Password*</p>
        <input value={data.password1} onChange={handleChangee} name="password1" placeholder="" inputMode="email" type="password"  className="loginInput signupInput signupDiv3 singnupInBar" />
       </div>
       <div  className="signupInputDiv signupDiv4">
         <p className="signupInputText roboto2">Confirm Password*</p>
         <input value={data.password2} onChange={handleChangee} name="password2" placeholder="" inputMode="email" type="password"  className="loginInput signupInput signupDiv4 singnupInBar" />
       </div>
      </div>
      {match?
      <h1 style={{color:"red", fontFamily:"roboto", fontSize:"18px", fontWeight:"400"}}>Passwords don't match!</h1>
      :null
      }
      {empty?
      <h1 className="MuiFormLabel-root MuiFormLabel-colorGrey Mui-error Mui-required css-sbdo8b-MuiFormLabel-root">Name and Password are mandatory fields!</h1>
      :null
      }
      
      {/*
       {status?
        <h1 className="MuiFormLabel-root MuiFormLabel-colorGrey Mui-error Mui-required css-sbdo8b-MuiFormLabel-root">Email already exist. Try <a href="/login" className="inputAnchor" style={{color:"red"}}>Log in</a>!</h1>
      :null
    }
      */} 
    
      
  
      





<div style={{marginLeft:"-30px",paddingRight:"50px"}}>
   {/*Checkbox Code*/}
      <FormControl
        style={{width:"100%"}}
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
       <FormLabel color="grey" component="primary" >This fields are mandatory</FormLabel> 
        <FormGroup>
          <FormControlLabel
           className="hihi"
            control={
              <Checkbox sx={{color:"grey",'&.Mui-checked': {
                 color: "grey"},  '& .MuiSvgIcon-root': {fontSize: 28} }} checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="I have read the general terms and conditions and I accept them."
          />
          <FormControlLabel
           className="hihi"
            control={
              <Checkbox sx={{color:"grey",'&.Mui-checked': {
                color: "grey"},  '& .MuiSvgIcon-root': {fontSize: 28} }} checked={jason} onChange={handleChange} name="jason" />
            }
            label="I have read and accepted the Data Privacy Statement."
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
     {/*Checkbox Code*/}
     </div>

      <ClickableButton  onChecked={submit} className="loginInput loginButton signupInput signupButton" text="Create Porsche Account" />
      <p style={{fontWeight: 500, marginTop:"30px", marginBottom:"0px"}} className="roboto signupP2">This website is protected by Friendly Captcha and is subject to the <a className="inputAnchor" href="/">Privacy Policy</a> and <a className="inputAnchor" href="/">Terms of Use</a> of Friendly Captcha.
      </p>
     </div>
          </div> 
     <Footer />
     </div>)
     
}
export default SignUp;






