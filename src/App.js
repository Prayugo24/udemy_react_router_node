import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import { Route,Routes } from 'react-router-dom'

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
      </Routes>
    </div>
  )
}

export default App