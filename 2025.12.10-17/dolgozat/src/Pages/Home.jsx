import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <p>Udv a pizzak oldalon!</p>
        <br />
        <Link to={"/Pizzak"}>Tovabb a pizzak oldalra</Link>
        <br />
        <Link to={"/Ujpizza"}>Új pizza feltöltése</Link>
    </div>
  )
}
