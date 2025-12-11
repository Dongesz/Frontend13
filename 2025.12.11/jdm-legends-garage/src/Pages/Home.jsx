import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <div className='d-flex justify-content-center m-3'>
            <h1>Üdv a JDM Legends Garage-ben!</h1>
        </div>
        <div className='d-flex justify-content-center m-3'>
            <Link to={'/legends'}><h3>Tovább a legendákra!</h3></Link>
        </div>
    </div>
  )
}
