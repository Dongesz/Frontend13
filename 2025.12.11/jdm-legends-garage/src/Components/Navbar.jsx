import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  bg-primary ">
        <div class="container-fluid ">
            <Link className='text-dark' to={'/'}>Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse m-3" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <NavLink className='text-dark' to={'/legends'}>Legends</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
