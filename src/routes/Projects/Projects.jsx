import React from 'react';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

export function Projects() {
    return (
        <>
            <Header />
            <h1>Projetos</h1>
            <Waves />
            <Contact />
        </>
    );
}