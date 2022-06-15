import React from 'react'
import './weight.css'
const Plan = () => {
  return (
      <div id="flex_4">
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div style={{width:'64px',margin:'auto'}}> <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/reportage.svg" alt="" /></div>
             </div>
             <div className='flex_4child3'>
               <p>The best investigations, interviews and deep dive reportage</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div style={{width:'50px',margin:'auto'}}><img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/Explained_1.svg" alt="" /></div>
             </div>
             <div className='flex_4child3'>
               <p>Daily dose of explainers and unbiased news coverage</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div style={{width:'47px',margin:'auto'}}><img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/Ad-lite.svg" alt="" /></div>
             </div>
             <div className='flex_4child3'>
             <p>Ad-lite experience across platforms</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div style={{width:'64px',margin:'auto'}}><img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/events.svg" alt="" /></div>
             </div>
             <div className='flex_4child3'>
             <p>Access to our events with thought leaders</p>
             </div>
           </div>
       </div>
    
  )
}

export default Plan
