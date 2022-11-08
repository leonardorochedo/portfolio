import React from 'react';
import Fade from 'react-reveal/Fade';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

import "./NotFound.css";

export function NotFound() {
    return (
        <div className="container">
            <Header />
            <div className="notfound">
                <Fade>
                <h1>Ops... 🚧</h1>
                <h2>Parece que você digitou algo incorretamente</h2>
                <p><i>Volte para a navegação pelo menu acima 😁</i></p>
                </Fade>
            </div>
            <Waves />
            {/* <div className="btn">
                <Contact />
            </div> */}
        </div>
    );
}