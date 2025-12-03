import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav class="navbar bg-body-tertiary">
            <form class="container-fluid justify-content-start">
                <NavLink to="/">
                    <button class="btn btn-outline-success me-2" type="button">Főoldal</button>
                </NavLink>
                <NavLink to="/filmek">
                    <button class="btn btn-sm btn-outline-secondary" type="button">Filmek</button>
                </NavLink>
                <NavLink to="/felhasznalok">
                    <button class="btn btn-sm btn-outline-secondary" type="button">Felhasználók</button>
                </NavLink>
                <NavLink to="/beallitasok">
                    <button class="btn btn-sm btn-outline-secondary" type="button">Beállítások</button>
                </NavLink>
            </form>
        </nav>
    )
}
