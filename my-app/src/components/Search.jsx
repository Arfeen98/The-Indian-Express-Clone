import React from 'react'
import styled from './single.module.css'
const Search = (item) => {
  return (
    <div className={styled.smain}>
      <div>
      <img src={item.urlToImage} alt="" />
      </div>
      <div>
        <h2 className={styled.title}>{item.title}</h2>
        {/* <p>{item.description}</p> */}
      </div>
    </div>
  )
}

export default Search
