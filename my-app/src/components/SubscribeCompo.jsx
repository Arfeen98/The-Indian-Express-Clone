import React from 'react'
import styled from '../pages/subscribe.module.css'
import {useNavigate} from 'react-router-dom'
const SubscribeCompo = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
     navigate('/payment')
  }
  return (
    <div>
       <div className={styled.frank}>
        <div className={styled.sec_head}>3 plans to choose from</div>
        <p>Subscribe to trust and journalism you can bank on</p>
      </div>
      <div className={styled.wrap}>
        <div className={styled.wrap_box}>
            <div className={styled.prod} style={{color:'black'}}>All Access</div>
            <p style={{color:'black'}}>Digital + E-paper subscription so that you don’t miss anything</p>
            <div className={styled.sep}></div>
            <div>
                <span style={{color:'black'}}>Plans starts from</span>
                <div style={{color:'black'}}className={styled.pay}>₹ 87 
                <span>/month</span></div>
            </div>
            <div className={styled.gap}>
            </div>
            <button onClick={handleClick} className={styled.btn}>Save upto 78%</button>
        </div>
        <div className={styled.wrap_box}>
            <div className={styled.prod} style={{color:'black'}}>Digital Only</div>
            <p style={{color:'black'}}>Get unlimited access to all our journalism online</p>
            <div className={styled.sep}></div>
            <div>
                <span style={{color:'black'}}>Plans starts from</span>
                <div className={styled.pay} style={{color:'black'}}>₹ 66 
                <span>/month</span></div>
            </div>
            <div className={styled.gap}>
            </div>
            <button onClick={handleClick} className={styled.btn}>Save upto 66%</button>
        </div>
        <div className={styled.wrap_box}>
            <div className={styled.prod} style={{color:'black'}}>ePaper Only</div>
            <p style={{color:'black'}}>Access to just the daily e-replica edition</p>
            <div className={styled.sep}></div>
            <div>
                <span style={{color:'black'}}>Plans starts from</span>
                <div className={styled.pay} style={{color:'black'}}>₹ 66 
                <span>/month</span></div>
            </div>
            <div className={styled.gap}>
            </div>
            <button onClick={handleClick} className={styled.btn}>Save upto 66%</button>
        </div>
      </div>
    </div>
  )
}

export default SubscribeCompo
