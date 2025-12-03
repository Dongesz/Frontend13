import React from 'react'

export default function BlueBox({counter1}) {
  return (
    <div className='shape' id='bluebox'>
        <span className='text'>
            {counter1}
        </span>
    </div>
  )
}
