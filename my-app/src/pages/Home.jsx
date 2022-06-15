import React from 'react'
import First from '../Home/First';
import AddBox from '../components/AddBox';
import Second from '../Home/Second';
import Latest from '../Home/Latest';
import State from '../Home/State';

const Home = () => {
 
  return (
    <div>
      <AddBox/>
      <First/>
      <div>
        <Second/>
        <Latest/>
        <State/>
      </div>
    </div>
  )
}

export default Home
