import React from 'react';

import './Techs.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

export function Techs() {
    return (
        <div className="container">
            <Header />
            <h1>Tecnologias</h1>
            <Waves />
            <Contact />
        </div>
    );
}