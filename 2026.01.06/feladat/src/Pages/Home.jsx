import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
        <h1>Üdv a weboldalunkn!</h1>
    <br />
    <br />
        <Link to="/jatekosok">Tovabb a jatekosainkra</Link>
    </div>
  )
}
