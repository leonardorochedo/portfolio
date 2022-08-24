import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {
    return (
        <header>
            <ul>
                <li className='home'><Link to="/"><span className='menu'></span><a className='menu'>ÍNICIO</a></Link></li>
                <li className='about'><Link to="/sobre"><span className='menu'></span><a className='menu'>SOBRE MIM</a></Link></li>
                <li className='tec'><Link to="/tecnologias"><span className='menu'></span><a className='menu'>TECNOLOGIAS</a></Link></li>
                <li className='proj'><Link to="/projetos"><span className='menu'></span><a className='menu'>PROJETOS</a></Link></li>
            </ul>
        </header>
    );
}