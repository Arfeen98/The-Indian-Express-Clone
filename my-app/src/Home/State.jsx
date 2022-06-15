import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getState} from '../Redux/NewsReducer/action'
import styled from './state.module.css'

const State = () => {
  const dispatch=useDispatch();
  const [country,setCountry]=useState('India')
  // const data=0;
  const data=useSelector((state)=>state.news.data2.articles)
  useEffect(()=>{
      dispatch(getState(country));
  },[country]);
  console.log(data,'4');
  const handleClick=(e)=>{
    // console.log(e.target.value);
    setCountry(e.target.value);
  }
  return (
    <div>
       <div className={styled.main}>
          <div>
            <h2>{country}News</h2>
            <select className={styled.sel} onClick={handleClick}>
                <option value="INDIA">INDIA</option>
                <option value="AMERICA">AMERICA</option>
                <option value="AUSTRALIA">AUSTRALIA</option>
                <option value="UAE">UAE</option>
            </select>
          </div>
       </div>
    </div>
  )
}

export default State
