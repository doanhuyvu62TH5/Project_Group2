import React  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginAndSignup/Login';
import Signup from './LoginAndSignup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Login />}></Route>
          <Route path='/signup' element = {<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
