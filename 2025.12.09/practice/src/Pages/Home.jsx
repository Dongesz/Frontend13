import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Üdv a Kandó adatbázisban!</h1>
      <Link to="/books">Books...</Link>
    </div>
    
  )
}