import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/inicio'>Início</Link> </li>
                    <li> <Link to='/america'>América</Link> </li>
                    <li> <Link to='/asia'>Ásia</Link> </li>
                    <li> <Link to='/oceania'>Oceania</Link> </li>
                    <li> <Link to='/antartica'>Antártica</Link> </li>
                    <li> <Link to='/europa'>Europa</Link> </li>
                </ul>
            </nav>
        </header>
    )
}