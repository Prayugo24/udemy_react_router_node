import React from 'react';
import Home from './views/Home';
import About from './views/About';
import { Route,Routes } from 'react-router-dom'

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} exact/>
      </Routes>
    </div>
  )
}

export default App