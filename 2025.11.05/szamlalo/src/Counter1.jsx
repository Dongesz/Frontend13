import React from 'react'

export default function Counter1({kounter1, setKounter1}) {

function Increase(){
    setKounter1(kounter1+1)
}
function Decrease(){
    setKounter1(kounter1-1)
}

  return (
    <div className='shape'>
        <button className='btn btn-secondary m-1' onClick={Increase}>+</button>
        <button className='btn btn-secondary m-1 w-40' onClick={Decrease}>- </button>
    </div>
  )
}
