import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../Redux/NewsReducer/action'
import styled from './second.module.css'

const Second = () => {
  const dispatch=useDispatch();
  // const data=0;
  const data=useSelector((state)=>state.news.data.articles)
  useEffect(()=>{
      dispatch(getData());
  },[]);
//  console.log(data);
  return (
    <>
    {data?  <div className={styled.main2}>
      <div className={styled.cont}>
        <h2>{data[0].title}</h2>
        <img src={data[0].urlToImage} alt="" />
        <p>{data[0].description}</p>
      </div>
      <div className={styled.left}>
        <h2 className={styled.top}>TOP NEWS STORIES</h2>
        <div>
            <ul className={styled.ul}>
                <li>{data[4].title}</li>
                <li>{data[5].title}</li>
                <li>{data[6].title}</li>
                <li>{data[7].title}</li>
                <li>{data[8].title}</li>
            </ul>
        </div>
      </div>
    </div>:''}
    </>
  )
}
export default Second
