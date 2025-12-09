import React from 'react'

export default function Card({item}) {
  return (
    <div className="card m-3" style={{width: "18rem"}}>
        <img className="card-img-top" src={item.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <p>{item.rating}</p>
        </div>
    </div>
  )
}
