import React from 'react';

import { Link } from 'react-router-dom';

// Imagens
import planePaper from '../../assets/send.svg'

import './Contact.css';

export function Contact() {

    return (
        <>
        <div className="button">
            <Link to="/contato" style={{textDecoration: 'none'}}><button><img src={planePaper} alt="Aviao de papel voando" />Contato</button></Link>
        </div>
        </>
    );
}