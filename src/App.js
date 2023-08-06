import React from 'react'
import './App.css'
import Variable from './Header/Variable'
import VMainpage from './Header/VMainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Signin from './Home/Signin'
import Signup from './Home/Signup'
import Profile from './Home/Profile'
import Menu from './Home/Menu'
import About from './Home/About' 
export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Variable />
        <Routes>
          <Route path='/vari' element={<VMainpage />} />
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={< Signup />} />
          <Route path='/profile' element={< Profile />} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  )
}
