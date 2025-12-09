import React from 'react'

export default function Details({setCardColor, cardColor, setScore, score}) {
  return (
    <div>
        <form>
            <input 
              type="checkbox" 
              id="show" name="desc" 
              value={score}
              onChange={(e) => setScore(!score)}/>
            <input 
              type="color" 
              id="favcolor" 
              name="favcolor" 
              value={cardColor} 
              onChange={(e) => setCardColor(e.target.value)}>
            </input>
        </form>
    </div>
    
  )
}
