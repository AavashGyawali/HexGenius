import React from 'react'
import RouteDetail from './RouteDetail'
import './styles/Route.styles.css'

function Route() {
  return (
    <div className='box2'>
        <div className="trace">Traced Routes</div>
        <RouteDetail/>
    </div>
  )
}

export default Route