import React from 'react';

import './About.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";

// Imagens
import perfilImg from '../../assets/perfil.jpg'

export function About() {

    const atualYear = new Date().getFullYear()

    const myAge = parseInt(atualYear) - 2002

    return (
        <>
        <Header />
        <div className="container about">
            <div className='imageAbout'>
                <img className='perfil' src={perfilImg} alt="Foto de perfil" />
            </div>
            <div className="textAbout">
                <p>Me chamo Leonardo atualmente tenho {myAge} anos e estou cursando TADS no IFPR de Londrina, sempre fui apaixonado por tecnologia desde pequeno e esse lado meu só cresce!
                </p>
                <p>
                Estou focando meus estudos atualmente voltado para o <i>Desenvolvimento Full Stack</i> e estou gostando muito, porém não me prendo apenas nisso e quero a cada dia aprender novas coisas.
                </p>
            </div>
            <Waves />
        </div>
        <div className="contact-button">
            <ContactButton />
        </div>
        </>
    );
}