import React from 'react';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

import "./NotFound.css";

export function NotFound() {
    return (
        <>
            <Header />
            <h1>NADA AQUI</h1>
            <Waves />
            <Contact />
        </>
    );
}