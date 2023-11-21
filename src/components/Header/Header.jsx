import { useState } from 'react';

import { ToastContainer } from "react-toastify";

// Imagens
import arrowClose from '../../assets/header/close-nav.svg'
import arrowOpen from '../../assets/header/open-nav.svg'

import './Header.css'

export function Header() {

    let [count, setCount] = useState(1)

    let navImage;

    // Alterar o nav icon
    if (count % 2 == 0) {
        navImage = arrowClose
    } else {
        navImage = arrowOpen
    }

    function openModal() {
        setCount(count = count + 1)

        if (count % 2 == 0) {
            document.querySelector('.control-header').style.display = 'flex';
            document.querySelector('.header-projects').style.display = 'flex';
        } else {
            document.querySelector('.control-header').style.display = 'none';
            document.querySelector('.header-projects').style.display = 'none';
        }
    }

    return (
        <header>
            <ToastContainer 
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        <div className="control-button">
            <button id='openButton' onClick={openModal}><img id='navicon' src={navImage} alt="Menu" /></button>
        </div>
        <div className="control-header">
            <div className='header-projects'>
                <ul>
                    <li className='home'>
                        <span className='menu'></span>
                        <a className='menu' href='#home'>Início</a>
                    </li>
                    <li className='tec'>
                        <span className='menu'></span>
                        <a className='menu' href='#techs'>Tecnologias</a>
                    </li>
                    <li className='proj'>
                        <span className='menu'></span>
                        <a className='menu' href='#projects'>Projetos</a>
                    </li>
                    <li className='proj'>
                        <span className='menu'></span>
                        <a className='menu' href='#contact'>Contato</a>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    );
}