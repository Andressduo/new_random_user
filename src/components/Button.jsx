import React from 'react'

const button = ({color,random}) => {
  return (
    <button style ={{backgroundColor:`${color}`}} onClick={random} className="container__button">&#62;</button>
  )
}

export default button