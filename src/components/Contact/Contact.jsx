import React from 'react';

import { Link } from 'react-router-dom';

import './Contact.css';

export function Contact() {

    return (
        <>
        <div className="button">
            <Link to="/contato" style={{textDecoration: 'none'}}><button><img src="src\assets\send.svg" alt="Aviao de papel voando" />Contato</button></Link>
        </div>
        </>
    );
}