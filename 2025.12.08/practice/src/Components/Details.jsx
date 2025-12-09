import React from 'react'

export default function Details({setCardColor, cardColor, setScore, score}) {
  return (
    <div className='container d-flex justify-content-center align-items-center  bg-secondary w-25'>
        <form className='row m-4'>
            <div className='col'>
              <p>Show ratings:</p>
              <input
                type="checkbox"
                id="show" name="desc"
                value={score}
                onChange={(e) => setScore(!score)}/>
                
            </div>
            <div className='col'>
              <p>Card color:</p>
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={cardColor}
                onChange={(e) => setCardColor(e.target.value)}>
              </input>
            </div>
        </form>
    </div>
  )
}
