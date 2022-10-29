import React from 'react';
import Home from './views/Home';
import { Route } from 'react-router-dom'

const App = () =>{
  return(
    <div>
      <Route path='/' component={Home}></Route>
    </div>
  )
}

export default App