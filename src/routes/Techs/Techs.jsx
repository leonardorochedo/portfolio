import React, { useState } from 'react';

import './Techs.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";
import { CardButton } from "../../../src/components/CardButton/CardButton";

// Imagens
import reactImg from '../../assets/react-icon.png'
import tsImg from '../../assets/type-icon.png'
import jsImg from '../../assets/js-icon.png'
import mysqlImg from '../../assets/mysql-icon.png'

export function Techs() {

    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container techs">
            <CardButton name="React" class="c front react" style={reactImg}/>
            <CardButton name="TypeScript" class="c front typescript" style={tsImg}/>
            <CardButton name="JavaScript" class="c front javascript" style={jsImg}/>
            <CardButton name="MySQL" class="c front mysql" style={mysqlImg}/>
            <Waves />
            <div className="btnTech">
                <Contact />
            </div>
        </div>
        </>
    );
}