// import { Box } from '@chakra-ui/react'
import React from 'react'
import styled from './Navbar.module.css'
const Navbar = () => {
  const current=new Date();
  const date = `${current.getDate()}/${current.getUTCMonth()+1}/${current.getFullYear()}`;
  return (
    <>
       <div className={styled.lang}>
          <div>
              <h2>ENGLISH</h2>
              <h2>தமிழ்</h2>
              <h2>বাংলা </h2>
              <h2>മലയാളം</h2>
              <h2>हिंदी</h2>
              <h2>मराठी</h2>
          </div>
       </div>
    <div className={styled.container}>
     <div className={styled.logos}>
      <h5>Follow Us:</h5>
      <i style={{marginLeft:'7px'}} className="fa-brands fa-facebook fa-2x"></i>
      <i style={{marginLeft:'7px'}} className="fa-brands fa-twitter-square fa-2x"></i>
     </div>
     <div className={styled.image}>
      <img className={styled.navimage} src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" width='400px' height='40px' alt="" />
     <div>{date}</div>
     </div>
     <div className={styled.add}>
       <h3>Ads by Google</h3>
     </div>
     </div>
     <div className={styled.blnav}>
       <ul>
        <li>Home</li>
        <li>Education</li>
        <li>Entertainment</li>
        <li>Premium</li>
        <li>Sports</li>
        <li>Cities</li>
       </ul>
     </div>
     </>
  )
}

export default Navbar
