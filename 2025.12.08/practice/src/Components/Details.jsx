import React from 'react'

export default function Details({setCardColor, cardColor}) {
  return (
    <div>
        <form>
            <input 
              type="checkbox" 
              id="show" name="desc" 
              value="Show score"/>
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
