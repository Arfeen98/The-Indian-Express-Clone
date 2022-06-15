import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getLatest} from '../Redux/NewsReducer/action'
import styled from './latest.module.css'

const Latest = () => {
  const dispatch=useDispatch();
  // const data=0;
  const data=useSelector((state)=>state.news.data1.articles)
  useEffect(()=>{
      dispatch(getLatest());
  },[]);
//  console.log(data);
  return (
    <>
    {data?  <div className={styled.main2}>
      <div className={styled.cont}>
        <div className={styled.lat}>
            <img src={data[0].urlToImage} alt="" />
            <h3>{data[0].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[1].urlToImage} alt="" />
            <h3>{data[1].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[2].urlToImage} alt="" />
            <h3>{data[2].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[3].urlToImage} alt="" />
            <h3>{data[3].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[4].urlToImage} alt="" />
            <h3>{data[4].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[5].urlToImage} alt="" />
            <h3>{data[5].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[6].urlToImage} alt="" />
            <h3>{data[6].title}</h3>
        </div>
        <div className={styled.lat}>
            <img src={data[7].urlToImage} alt="" />
            <h3>{data[7].title}</h3>
        </div>
      </div>
      <div className={styled.left}>
        <h2 className={styled.top}>LATEST NEWS</h2>
        <div>
            <ul className={styled.ul}>
                <li>{data[10].title}</li>
                <li>{data[11].title}</li>
                <li>{data[12].title}</li>
                <li>{data[13].title}</li>
                <li>{data[15].title}</li>
                <li>{data[16].title}</li>
                <li>{data[17].title}</li>
                <li>{data[18].title}</li>
                <li>{data[19].title}</li>
                <li>{data[14].title}</li>
            </ul>
        </div>
      </div>
    </div>:''}
    </>
  )
}
export default Latest
