import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from './only.module.css'
import { getEnter } from '../Redux/NewsReducer/action'

const Entertainment = () => {
    const dispatch = useDispatch();
    const data=useSelector((state)=>state.news.data4.articles)

  useEffect(()=>{
        dispatch(getEnter('Entertainment'));
  },[]);
  // console.log(data);
  return (
    <div>
      <div className={styled.onlymain}>
        <div className={styled.only1}>
            <h2>Entertainment</h2>
        </div>
       {data? <div>
       <div className={styled.leftPanel}>
            <img src={data[0].urlToImage} alt="" />
            <h3>{data[0].title}</h3>
            <p>{data[0].description}</p>
        </div>
        <div className={styled.rightPanel}>
            <div className={styled.small}>
                <img src={data[1].urlToImage} alt="" />
                <h4>{data[1].title}</h4>
            </div>
            <div className={styled.small}>
                <h4>{data[2].title}</h4>
            </div>
            <div className={styled.small}>
                <h4>{data[3].title}</h4>
            </div>
            <div className={styled.small}>
                <h4>{data[4].title}</h4>
            </div>
        </div>
        </div>:''}
      </div>
    </div>
  )
}

export default Entertainment
