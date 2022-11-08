import React from 'react';

import Fade from 'react-reveal/Fade';

import './About.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

// Imagens
import perfilImg from '../../assets/perfil.jpg'

export function About() {

    const atualYear = new Date().getFullYear()

    const myAge = parseInt(atualYear) - 2002

    return (
        <div className="container about">
            <Header />
                <Fade>
            <div className='imageAbout'>
                <img className='perfil' src={perfilImg} alt="Foto de perfil" />
            </div>
            <div className="textAbout">
                <h2>Me chamo Leonardo atualmente tenho {myAge} anos e estou cursando TADS no IFPR de Londrina, sempre fui apaixonado por tecnologia desde pequeno e esse lado meu só cresce!
                </h2>
                <h2>
                Estou focando meus estudos atualmente voltado para o <i>Desenvolvimento Full Stack</i> e estou gostando muito, porém não me prendo apenas nisso e quero a cada dia aprender novas coisas.
                </h2>
            </div>
                </Fade>
            <Waves />
            {/* <div className="btnAbout">
                <Contact className="buttonAbout" />
            </div> */}
        </div>
    );
}