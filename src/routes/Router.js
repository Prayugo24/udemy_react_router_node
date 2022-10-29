import React from "react";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import { Route,Routes } from 'react-router-dom'

const Router = () =>{
    return(
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
        </Routes>
      </React.Fragment>
    )
  }
  
  export default Router