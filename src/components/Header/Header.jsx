import React, { useState } from 'react';

import { Link } from 'react-router-dom';

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
                    <li className='home'><Link to="/"><span className='menu'></span><a className='menu'>ÍNICIO</a></Link></li>
                    <li className='about'><Link to="/sobre"><span className='menu'></span><a className='menu'>SOBRE MIM</a></Link></li>
                    <li className='tec'><Link to="/tecnologias"><span className='menu'></span><a className='menu'>TECNOLOGIAS</a></Link></li>
                    <li className='proj'><Link to="/projetos"><span className='menu'></span><a className='menu'>PROJETOS</a></Link></li>
                </ul>
            </div>
        </div>
        </header>
    );
}