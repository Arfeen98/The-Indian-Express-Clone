import React from 'react';
import styled from './explained.module.css';

const Explained = () => {
  return (
    <div className={styled.expmain}>
      <div className={styled.head}>
        <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/logos/explain-widget-logo-new.png" alt="" />
      </div>
      <div className={styled.fle}>

      <div className={styled.kit}>
        <img src="https://images.indianexpress.com/2022/06/Buddha-relics-ex.jpg?resize=450%2C250&w=430" alt="" />
        <h1> The four Buddha relics travelling to Mongolia as ‘state guest’, their importance</h1>
      </div>
      <div className={styled.kit}>
        <img src="https://images.indianexpress.com/2022/06/BITCOIN-CRYPTO-CURRENCY-REUTERS.jpg?resize=450%2C250&w=430" alt="" />
        <h1>The world of crypto lending</h1>
      </div>
      </div>
    </div>
  )
}

export default Explained
