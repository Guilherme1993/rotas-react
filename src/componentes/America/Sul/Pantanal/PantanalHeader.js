import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../Header/Header'

export default function CursosHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Menu</Link> </li>
                    <li> <Link to='/america/sul'>Voltar</Link> </li>
                    <li> <Link to='pantanal/hidrografia'>Hidrografia</Link> </li>
                    <li> <Link to='pantanal/clima'>Clima</Link> </li>
                    <li> <Link to='pantanal/fauna'>Fauna</Link> </li>
                    <li> <Link to='pantanal/flora'>Flora</Link> </li>
                    <li> <Link to='pantanal/desmatamento'>Desmatamento</Link> </li>
                </ul>
            </nav>
        </header>
    )
}