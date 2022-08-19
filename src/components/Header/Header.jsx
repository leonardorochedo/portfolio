import React from 'react';

import './Header.css'

export function Header() {
    return (
        <header>
            <ul>
                <li><a href="/">ÍNICIO</a></li>
                <li><a href="/sobre">SOBRE MIM</a></li>
                <li><a href="/tecnologias">TECNOLOGIAS</a></li>
                <li><a href="/projetos">PROJETOS</a></li>
            </ul>
        </header>
    );
}