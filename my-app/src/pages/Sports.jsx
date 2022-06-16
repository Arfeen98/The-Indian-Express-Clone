import React from 'react'
import styled from './home.module.css'
import Addvertise from '../Advertise/Addvertise'
import AddBox from '../components/AddBox'
// import Edu from '../Edutac/Edu'
import Spo from '../Edutac/Spo'
// import First from '../Home/First'
const Sports = () => {
  return (
    <>
      <AddBox/>
        {/* <First/> */}
        <div className={styled.main}>
        <div className={styled.image1}>
       <img src="https://tpc.googlesyndication.com/simgad/4933651823984287320" width='160px' height='600px' alt="" />
        </div>
      <div style={{width:'50%',marginRight:'30px'}}>
        <Spo/>
      </div>
      <div style={{width:'30%'}}>
        <Addvertise/>
      </div>
      <div className={styled.image1}>
       <img src="https://tpc.googlesyndication.com/simgad/4933651823984287320" width='160px' height='600px' alt="" />
        </div>
        </div>
    </>
  )
}
export default Sports


