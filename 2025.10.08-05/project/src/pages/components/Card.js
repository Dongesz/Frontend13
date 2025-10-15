import React from 'react'

function Card({title, content, image, wiki}) {
  return (
    <div className="card w-25 m-2 ">
    <img src={image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      <a href={wiki} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
} 

export default Card