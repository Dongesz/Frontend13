import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({id, name, image_url}) {
  return (
    <div class="card m-3" style={{width: "500px"}}>
        <img class="card-img-top img-fluid" style={{width: "500px", height: "500px"}} src={image_url}/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <Link to= {`/felhasznalo/${id}`}>
                <button className='btn btn-success'><i class="bi bi-three-dots"></i></button>
            </Link>
        </div>
    </div>
  )
}
