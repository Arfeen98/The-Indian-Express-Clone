import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../Redux/NewsReducer/action'
import styled from './first.module.css'

const First = () => {
  const dispatch=useDispatch();
  // const data=0;
  const data=useSelector((state)=>state.news.data.articles)
  useEffect(()=>{
      dispatch(getData());
  },[]);
//  console.log(data);
  return (
    <div>
      {data? <div className={styled.main}>
         <div><img src={data[2].urlToImage} alt="" /></div>
         <div className={styled.write}>
          <h3>{data[2].title}</h3>
          <p>{data[2].description}</p>
         </div>
      </div>:''}
    </div>
  )
}

export default First
