import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
 import Navbar from '../components/Navbar'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import { PrivateRoute } from './PrivateRoute'
 import Footer from '../components/Footer'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={
              <PrivateRoute>
            <Admin/>
            </PrivateRoute>
            }/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes