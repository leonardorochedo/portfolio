import React, { useState } from 'react';

import './Techs.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";
import { CardButton } from "../../../src/components/CardButton/CardButton";

export function Techs() {
    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container techs">
            <CardButton name="React" class="c front react"/>
            <CardButton name="TypeScript" class="c front typescript"/>
            <CardButton name="JavaScript" class="c front javascript"/>
            <CardButton name="MySQL" class="c front html"/>
            <Waves />
            <div className="btnTech">
                <Contact />
            </div>
        </div>
        </>
    );
}