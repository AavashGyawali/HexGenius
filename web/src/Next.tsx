import React from 'react'
import "./styles/Next.styles.css"

function Next() {
    return (
        <div className='arrow'>
            <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="25" x2="90" y2="25" style={{ stroke: 'black', strokeWidth: 3 }} />
                <polygon points="90,25 85,20 85,30" style={{ fill: 'black' }} />
            </svg>
        </div>
    )
}

export default Next