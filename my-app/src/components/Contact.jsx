import React from 'react'
import styled from './contact.module.css'

const Contact = () => {
  return (
    <div className={styled.head}>
      <div className={styled.sec_head}>Contact Us</div>
      <div className={styled.container}></div>
      <ul className={styled.unlist}>
        <li className={styled.li}>
            <p>9289033229 </p>
        </li>
        <li className={styled.lii}>
            <p>subscriptions@indianexpress.com</p>
        </li>
        <li className={styled.liii}>
            <p>Monday to Friday 10 am to 6 pm</p>
        </li>
      </ul>
    </div>
  )
}

export default Contact
