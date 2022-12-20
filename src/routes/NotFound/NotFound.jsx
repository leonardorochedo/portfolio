import React from 'react';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";

import "./NotFound.css";

export function NotFound() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="notfound">
                <h1>Ops... 🚧</h1>
                <h2>Parece que você digitou algo incorretamente</h2>
                <p><i>Volte para a navegação pelo menu acima 😁</i></p>
            </div>
        </div>
            <Waves />
        <div className="contact-button">
            <ContactButton />
        </div>
        </>
    );
}