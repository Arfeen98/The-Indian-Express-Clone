import React,{useEffect} from 'react'
import styled from './edu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEdu } from '../Redux/NewsReducer/action'
const Edu = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.news.data8.articles)
  useEffect(()=>{
      dispatch(getEdu('Education'));
  },[]);
  return (
    <div>
        <div className={styled.line}></div>
      {data?.map((item)=>(
        <div className={styled.main}>
        <div className={styled.snaps}><img src={item.urlToImage} alt="" /></div>
        <div>
            <h1 className={styled.title}>{item.title}</h1>
            <p className={styled.para}>{item.description}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Edu
