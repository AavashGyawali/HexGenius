import React from 'react'
import "./styles/Searchbar.style.css"

const Searchbar = () => {
  return (
    <div className='box'>
        <div className="text">Start Location</div>
        <div className='search'>
            <input type="text" className='form'/>
            <button>Add</button>
        </div>
        <div className="text">Destination</div>
        <div className='search'>
            <input type="text" className='form'/>
            <button>Add</button>
        </div>
    </div>
  )
}

export default Searchbar