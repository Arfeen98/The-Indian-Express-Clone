// import { Box } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { InitialFocus } from './Modal';
import styled from './Navbar.module.css'
const Navbar = () => {
  // const[odd,setOdd]=useState(false);
  const current=new Date();
  const date = `${current.getDate()}/${current.getUTCMonth()+1}/${current.getFullYear()}`;
  const navigate=useNavigate();
  const handleClick=()=>{
      navigate('/search')
    // setOdd(!odd);
  }

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
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/education'>Education</Link></li>
        <li><Link to='/entertainment'>Entertainment</Link></li>
        <li>Premium</li>
        <li><Link to='/sports'>Sports</Link></li>
        <li>Cities</li>
        <li className={styled.butn} style={{color:'black'}}><Link to='/subscribe'>Subscribe</Link></li>
        <li><Link to='/signup'>My Account</Link></li>
        {/* <li onClick={handleClick} style={{color:'white'}}><InitialFocus/></li> */}
        {/* <li onClick={handleClick} style={{color:'white'}}><i className="fa-solid fa-magnifying-glass"></i></li> */}
        <li onClick={handleClick} style={{color:'white'}}>Search</li>
       </ul>
     </div>
     </>
  )
}

export default Navbar
