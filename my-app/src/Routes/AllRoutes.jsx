import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Footer from '../components/Footer';
import { InitialFocus } from '../components/Modal';
import Navbar from '../components/Navbar';
// import Search from '../components/Search';
import { Login } from '../userlogin/Login';
import {Signup} from '../userlogin/Signup';
import Home from '../pages/Home';
import Subscribe from '../pages/Subscribe';
import Pay from '../pages/Pay';
import { RequiredAuth } from '../userlogin/RequiredAuth';
// import Edu from '../Edutac/Edu';
import Educat from '../pages/Educat';
// import Spo from '../Edutac/Spo';
import Sports from '../pages/Sports';
import Ent from '../pages/Ent';
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
         <Route path='/education' element={<Educat/>}/>
         <Route path='/sports' element={<Sports/>}/>
         <Route path='/entertainment' element={<Ent/>}/>
         <Route path='/subscribe' element={<Subscribe/>}/>
         <Route path='/payment' element={
        <RequiredAuth>
          <Pay/>
        </RequiredAuth>
         }/>
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default AllRoutes
