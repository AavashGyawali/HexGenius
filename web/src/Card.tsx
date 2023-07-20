import React from 'react'
import "./styles/Card.styles.css"
import {FaBus} from "react-icons/fa"
function Card() {
  return (
    <div className='card'>
        <FaBus size='50px'/>
        <div className='name'>Bus B1</div>
        <div className="way">L1-->L2</div>
    </div>
  )
}

export default Card