import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Üdv a Kandó adatbázisban!</h1>
      <p>Böngéssz a filmek és felhasználók között</p>
      <Link to="/filmek">Filmek...</Link>
    </div>
    
  )
}
