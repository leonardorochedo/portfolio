import React from 'react';

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';


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
            <Fade>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="React" class="c front react" style={reactImg}/>
                </Tilt>
            </div>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="TypeScript" class="c front typescript" style={tsImg}/>
                </Tilt>
            </div>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="JavaScript" class="c front javascript" style={jsImg}/>
                </Tilt>
            </div>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="MySQL" class="c front mysql" style={mysqlImg}/>
                </Tilt>
            </div>       
            </Fade> 
            <Waves />
            <div className="btnTech">
                <Contact />
            </div>
        </div>
        </>
    );
}