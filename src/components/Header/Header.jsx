import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">ÍNICIO</Link></li>
                <li><Link to="/sobre">SOBRE MIM</Link></li>
                <li><Link to="/tecnologias">TECNOLOGIAS</Link></li>
                <li><Link to="/projetos">PROJETOS</Link></li>
            </ul>
        </header>
    );
}