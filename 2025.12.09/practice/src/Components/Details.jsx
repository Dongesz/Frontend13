import React from 'react'

export default function Details({setcolor, color}) {
  return (
    <div className='container d-flex justify-content-center align-items-center  bg-secondary w-25'>
        <form className='row m-4'>
            <div className='col'>
              <p>Card color:</p>
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={color}
                onChange={(e) => setcolor(e.target.value)}>
              </input>
            </div>
        </form>
    </div>
  )
}