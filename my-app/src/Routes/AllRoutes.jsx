import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Footer from '../components/Footer';
import { InitialFocus } from '../components/Modal';
import Navbar from '../components/Navbar';
// import Search from '../components/Search';
import { Login } from '../userlogin/Login';
import {Signup} from '../userlogin/Signup';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/search' element={<InitialFocus/>}/>
         <Route path='/login' element={<Login />} />
  <Route path='/SignUp' element={<Signup />} />
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default AllRoutes
