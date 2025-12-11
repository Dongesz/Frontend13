import React from 'react'

export default function Card({car}) {
  return (
    <div class="card" style={{width: "18rem"}}>
        <img src={car.imageUrl} class="card-img-top" alt={car.name}/>
        <div class="card-body">
            <h5 class="card-title">{car.name}</h5>
            <p class="card-text">{car.legendReason}</p>
        </div>
    </div>
  )
}
