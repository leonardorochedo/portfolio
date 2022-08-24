import React from 'react';

import './About.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

export function About() {
    return (
        <div className="container">
            <Header />
            <h1>Sobre mim</h1>
            <Waves />
            <Contact />
        </div>
    );
}