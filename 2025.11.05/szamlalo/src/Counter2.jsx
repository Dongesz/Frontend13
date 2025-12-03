import React from 'react'

export default function Counter2({kounter2, setKounter2}) {

  function szubmit(event){
    event.preventDefault();
    let num = document.getElementById("numberInput").value;
    setKounter2(num)
  }
        
      
  return (
    <div className='shape'>
        <form className='shape' onSubmit={szubmit}>
            <input className='w-100' type="number" id='numberInput'/>
            <button className='w-60 m-1' type='submit' >küldes</button>
        </form>
    </div>
  )
}
