import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Header/Header'

export default function CursosHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Menu</Link> </li>
                    <li> <Link to='/america'>Voltar</Link> </li>
                    <li> <Link to='sul/patagonia'>Patagônia</Link> </li>
                    <li> <Link to='sul/andes'>Cordilheira dos Andes</Link> </li>
                    <li> <Link to='sul/cartagena'>Cartagena-Colômbia</Link> </li>
                    <li> <Link to='sul/pantanal'>Pantanal</Link> </li>
                    <li> <Link to='sul/quilotoa'>Vulcão Quilotoa</Link> </li>
                </ul>
            </nav>
        </header>
    )
}