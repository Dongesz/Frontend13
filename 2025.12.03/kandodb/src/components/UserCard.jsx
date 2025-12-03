import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard({ item, bgColor, border }) {

return (
        <div class="card p-3" style={{ width: "18rem", margin: "20px", backgroundColor: bgColor, border: border ? "solid 2px black" : "" }}>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email cím: {item.email}</li>
                <li class="list-group-item">Telefon: {item.phone}</li>
                <li class="list-group-item">
                    <a href={`https://www.${item.website}`} target='_blank'>{item.website}</a>
                </li>
            </ul>
            <Link to= {`/felhasznalo/${item.id}`}>
                <button className='btn btn-success'><i class="bi bi-three-dots"></i></button>
            </Link>
        </div>  
    )
}
