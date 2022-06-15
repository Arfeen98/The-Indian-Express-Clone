import React from 'react'
import Contact from '../components/Contact'
import Plan from '../components/Plan'
import SubscribeCompo from '../components/SubscribeCompo'
import styled from './subscribe.module.css'
const Subscribe = () => {
  return (
    <div>
      <div className={styled.head}>
      <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg" alt="" />
      </div>
      <SubscribeCompo/>
      <div className={styled.wrap_purp}>
        <div className={styled.purp_head}>
            <div className={styled.purp_heading}>Here is what you get</div>
            <p>Features will depend on your subscription package.</p>
        </div>
      <div style={{height:'inherit'}}><Plan/></div>
      </div>
      <div style={{marginTop:'20px'}}><Contact/></div>
      <div style={{backgroundColor:'#09112d',color:'white',marginTop:'12px'}}><SubscribeCompo/></div>
    </div>
  )
}

export default Subscribe
