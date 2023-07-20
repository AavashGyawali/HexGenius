import React from 'react'
import Card from './Card'
import Next from './Next'

function RouteDetail() {
  return (
    <div className='route'>
        <div className='number'>Route</div>
        <Card/>
        <Next/>
        <Card/>
        <Next/>
        <Card/>
    </div>
  )
}

export default RouteDetail