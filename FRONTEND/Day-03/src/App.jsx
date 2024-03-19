import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Academy from './pages/Academy'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/academy' element={<Academy/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
  </BrowserRouter>    


    </div>
  )
}

export default App
