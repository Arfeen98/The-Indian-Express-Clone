import React, { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getTecho} from '../Redux/NewsReducer/action'
import styled from './state.module.css'

const Technology = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.news.data6.articles)
  useEffect(()=>{
      dispatch(getTecho('Technology'));
  },[]);
  return (
    <div>
       <div className={styled.main}>
          <div>
            <h2>Technology</h2>
          </div>
          {data? <div className={styled.flex}>
          <div className={styled.left}>
            <img src={data[0].urlToImage} alt="" />
            <h4>{data[0].title}</h4>
            <p>{data[0].description}</p>
          </div>
          <div className={styled.right}>
            <div><img src={data[1].urlToImage} alt="" />
            <h2>{data[1].title}</h2>
            </div>
            <div><img src={data[2].urlToImage} alt="" />
            <h2>{data[2].title}</h2>
            </div>
            <div><img src={data[3].urlToImage} alt="" />
            <h2>{data[3].title}</h2>
            </div>
          </div>
          </div> :''}
       </div>
    </div>
  )
}

export default Technology
