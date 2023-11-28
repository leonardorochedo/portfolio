import { useState, useEffect } from 'react';

// Imagens
import arrowClose from '../../assets/header/close-nav.svg'
import arrowOpen from '../../assets/header/open-nav.svg'

import './Header.css'

export function Header() {

    const [isMenuOpen, setMenuOpen] = useState(null);
    const isMobile = window.innerWidth <= 1000;

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (isMobile) {
            if (isMenuOpen) {
                document.querySelector('.container').style.display = 'none';
                document.querySelector('.control-header').style.display = 'flex';
                document.querySelector('.header-projects').style.display = 'flex';
            } else if (isMenuOpen == false) {
                document.querySelector('.container').style.display = 'flex';
                document.querySelector('.control-header').style.display = 'none';
                document.querySelector('.header-projects').style.display = 'none';
            }
        }
    }, [isMenuOpen])

    const navImage = isMenuOpen ? arrowClose : arrowOpen;

    return (
        <header>
            <div className="control-button">
                <button id='openButton' onClick={toggleMenu}>
                    <img id='navicon' src={navImage} alt="Menu"/>
                </button>
            </div>
            <div className="control-header">
                <div className='header-projects'>
                    <ul>
                        <li className='home'>
                            <span className='menu'></span>
                            <a className='menu' href='#home' onClick={closeMenu}>Início</a>
                        </li>
                        <li className='tec'>
                            <span className='menu'></span>
                            <a className='menu' href='#techs' onClick={closeMenu}>Tecnologias</a>
                        </li>
                        <li className='proj'>
                            <span className='menu'></span>
                            <a className='menu' href='#projects' onClick={closeMenu}>Projetos</a>
                        </li>
                        <li className='proj'>
                            <span className='menu'></span>
                            <a className='menu' href='#contact' onClick={closeMenu}>Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}