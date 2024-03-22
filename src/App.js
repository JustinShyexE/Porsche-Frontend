import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Login2 from "./pages/Login2"
import SignUp from "./pages/SignUp";
import Model from "./pages/Model";

export default function App(){
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route  path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login-password" element={<Login2 />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/model" element={<Model />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
