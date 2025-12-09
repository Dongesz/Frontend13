import React from 'react'

export default function Card({image, title, text, rating, cardColor}) {
  return (
    <div class="card m-3" style={{width: "18rem", backgroundColor: cardColor}}>
        <img class="card-img-top " style={{height: "400px"}} src={image}/>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{text}</p>
            <p class="card-text">{rating}</p>
            <a href="#" class="btn btn-success">Expand</a>
        </div>
    </div>
  )
}
