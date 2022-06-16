import React from 'react'
import First from '../Home/First';
import AddBox from '../components/AddBox';
import Second from '../Home/Second';
import Latest from '../Home/Latest';
import State from '../Home/State';
import Explained from '../Home/Explained';
import Only from '../Home/Only'
import Entertainment from '../Home/Entertainment';
import Sports from '../Home/Sports';
import Technology from '../Home/Technology';
import Trending from '../Home/Trending';
import Education from '../Home/Education';
import styled from './home.module.css';
import Addvertise from '../Advertise/Addvertise';
const Home = () => {
 
  return (
    <>
      <AddBox/>
        <First/>
        <div className={styled.main}>
        <div className={styled.image1}>
       <img src="https://tpc.googlesyndication.com/simgad/4933651823984287320" width='160px' height='600px' alt="" />
        </div>
      <div style={{width:'50%',marginRight:'30px'}}>
        <Second/>
        <Latest/>
        <State/>
        <Explained/>
        <Only/>
        <Entertainment/>
        <Sports/>
        <Technology/>
        <Trending/>
        <Education/>
      </div>
      <div style={{width:'30%'}}>
        <Addvertise/>
      </div>
      <div className={styled.image1}>
       <img src="https://tpc.googlesyndication.com/simgad/4933651823984287320" width='160px' height='600px' alt="" />
        </div>
        </div>
    </>
  )
}

export default Home
