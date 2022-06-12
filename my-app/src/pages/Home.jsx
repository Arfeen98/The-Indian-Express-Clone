import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import AddBox from '../components/AddBox';
import { getData } from '../Redux/NewsReducer/action';

const Home = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(getData());
  },[])
  return (
    <div>
      <AddBox/>
    </div>
  )
}

export default Home
