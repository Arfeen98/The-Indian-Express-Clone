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
const Home = () => {
 
  return (
    <div>
      <AddBox/>
      <First/>
      <div>
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
    </div>
  )
}

export default Home
