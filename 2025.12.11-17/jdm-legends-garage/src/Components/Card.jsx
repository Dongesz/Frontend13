import React from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


export default function Card({car}) {
  const params = useParams();
  return (
    <div class="card m-3 border border-primary" style={{width: "18rem"}}>
        <img src={car.imageUrl}  alt={car.name} className="card-img-top m-2" style={{width: "250px", height: "140px"}}/>
        <div class="card-body text-center">
            <h3 class="card-title">{car.name}</h3>
            <h5 class="card-text">{car.manufacturer}</h5>
            <h6 class="card-text">{car.generation}</h6>
            <p class="card-text">{car.legendReason}</p>
            <NavLink to={'/legends/:id'}>
            <button className="btn btn-success"><i class="bi bi-three-dots"></i></button>
            </NavLink>
        </div>
    </div>
  )
}
