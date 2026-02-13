import React from 'react'
import './TestBlock.css'
const TestBlock = () => {

    const pStyle = {
        color:'blue',
        fontSize:'28px',
    }

  return (
    <div>
        <p style={pStyle}>Hello Everyone</p>
        <p style={{color:'red'}}>Good Morning</p>
        <p className='paragraph'>Good Night</p>
    </div>
  )
}

export default TestBlock