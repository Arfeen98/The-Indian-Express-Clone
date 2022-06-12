import React from 'react'
import styled from './footer.module.css'
const Footer = () => {
  return (
    <div className={styled.footer}>
      <div className={styled.head}>
        TOP CATEGORIES
      </div>
      <ul className={styled.list}>
         <li>Explained News</li>
         <li>Political Pulse</li>
         <li>Latest Opinion</li>
         <li>Mumbai News</li>
         <li>Delhi News</li>
         <li>Political News</li>
         <li>Bangalore News</li>
         <li>Bollywood News</li>
         <li>Health News</li>
         <li>India News</li>
         <li>Sports News</li>
         <li>Lifestyle News</li>
      </ul>
      <div className={styled.head}>
        TRENDING NEWS
      </div>
      <ul className={styled.list}>
         <li>Horoscope</li>
         <li>India News</li>
         <li>Art & Craft Classes For Kids</li>
         <li>Fitness Classes For Kids</li>
         <li>Dance Classes For Kids</li>
         <li>Entertainment News</li>
         <li>UPSC News</li>
         <li>IPL 2022 News</li>
         <li>Buy All-Access Pass</li>
         <li>Subscribe To The Indian Express</li>
         <li>Buy Degital Premium</li>
         <li>Buy Indian Express E-Paper</li>
         <li>KK Funeral Live</li>
         <li>Bengaluru News Live</li>
         <li>Mumbai News Live</li>
         <li>Chennai News Live</li>
      </ul>
      <div className={styled.head}>
        LATEST STORIES
      </div>
      <ul className={styled.list}>
         <li>‘Scared And Tired’: Thousands Across The US Rally Against Gun Violence</li>
         <li>A Caravan Of Migrants Is Heading Toward The US Border</li>
         <li>Decisive People Don’t Make Better Decisions – New Research</li>
         <li>3 LeT Terrorists Killed In Overnight Encounter In Pulwama</li>
         <li>Eminent Personalities Voice Dissent Over Mamata Banerjee Becoming Chancellor Of State-Run Varsities</li>
         <li>Twitter Testing Search Subscribe Feature That Will Send Push Notifications For Search Terms</li>
         <li>Kamal Haasan Celebrates Vikram’s ‘Spectacular Success’ With Salman Khan, Host Chiranjeevi. See Photos</li>
         <li>Spiritual Hibernation And The Realisation That ‘Slowing Down Is Not Giving Up’</li>
      </ul>
        <div className={styled.block}> 
      <div className={styled.sec}>
      <div className={styled.title}>Follow Us</div>
      <ul className={styled.ico}>
          <i className="fa-brands fa-facebook fa-2x"></i>
          <i className="fa-brands fa-twitter-square fa-2x"></i>
          <i className="fa-brands fa-linkedin fa-2x"></i>
          <i className="fa-brands fa-instagram-square fa-2x"></i>
        </ul>
        <div className={styled.title}>Download Apps</div>
        <ul className={styled.ico}>
        <i className="fa-brands fa-android fa-2x"></i>
        <i className="fa-brands fa-apple fa-2x"></i>
        </ul>
        <div className={styled.mete}>
        <ul>
            <li><img src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg" width='180px' height='18px' alt="" /></li>
            <li><img src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-check.svg" height='26px' width='20px' alt="" /></li>
            <li>The Indian Express website has been rated GREEN for its credibility and trustworthiness by Newsguard, a global service that rates news sources for their journalistic standards.</li>
          </ul>
        </div>
      </div>
      <div className={styled.sec}>
      <div className={styled.title}>Express Group</div>
      <ul className={styled.express}>
        <li>The Indian Express</li>
        <li>ieTamil.com</li>
        <li>The Financial Express</li>
        <li>ieBangla.com</li>
        <li>Loksatta</li>
        <li>ieMalayalam.com</li>
        <li>Jansatta</li>
        <li>inUth</li>
        <li>The ExpressGroup</li>
        <li>MyInsuranceClub</li>
        <li>Newsletters</li>
        <li>26/11 Stories of Strength</li>
        <li>Ramnath Goenka Excellence in Journalism Awards</li>
        <li>Online Classes for Kids</li>
        <li>Light House Journalism</li>
      </ul>
      </div>
      <div className={styled.sec}>
      <div className={styled.title}>QUICK LINKS</div>
      <ul className={styled.express1}>
        <li>T&C</li>
        <li>Privacy Policy</li>
        <li>Advertise with Us</li>
        <li>Brand Solutions</li>
        <li>Contact Us</li>
        <li>Subscribe</li>
        <li>Statutory provisions on reporting (sexual offenses)</li>
        <li>This website follows the DNPA’s code of conduct</li>
        <li>CSR</li>
        </ul>
      </div>
      </div>
      <div className={styled.foot}>
        <div className={styled.priva}>Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
