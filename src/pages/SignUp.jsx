import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/InputInbox";
import Footer from "../components/Footer";
import Checkbox from '@mui/material/Checkbox';
import { createTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import ClickableButton from "../components/ClickableButton";
import Container from '@mui/material/Container';


function SignUp(){
    
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



 return(<div className="mainSignupBody"> 
     <Header />
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
      <Input type="text" text="First name*" placeholder="" classNameP="signupDiv3" className="loginInput signupInput signupDiv3 singnupInBar" />
      <Input type="text" text="Middle name*" placeholder="" classNameP="signupDiv4"className="loginInput signupInput signupDiv4 singnupInBar" />
      </div>
      <div className="signupContainer760px">
      <Input type="text" text="Last name*" placeholder="" classNameP="signupDiv3" className="loginInput signupInput signupDiv3 singnupInBar" />
      <Input type="email" text="E-mail address*" placeholder="" classNameP="signupDiv4" className="loginInput signupInput signupDiv4 singnupInBar" />
      </div>






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

      <ClickableButton className="loginInput loginButton signupInput signupButton" text="Create Porsche ID account" />
      <p style={{fontWeight: 500, marginTop:"30px", marginBottom:"0px"}} className="roboto signupP2">This website is protected by Friendly Captcha and is subject to the <a className="inputAnchor" href="/">Privacy Policy</a> and <a className="inputAnchor" href="/">Terms of Use</a> of Friendly Captcha.
      </p>
     </div>
          </div> 
     <Footer />
     </div>)
     
}
export default SignUp;