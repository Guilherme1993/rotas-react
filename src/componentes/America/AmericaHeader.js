import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css'

export default function CursosHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='america/norte'>América do Norte</Link> </li>
                    <li> <Link to='america/central'>América Central</Link> </li>
                    <li> <Link to='america/sul'>América do Sul</Link> </li>
                    <li> <Link to='america/equador'>Equador</Link> </li>
                    <li> <Link to='america/inferiores'>Inferiores</Link> </li>
                </ul>
            </nav>
        </header>
    )
}