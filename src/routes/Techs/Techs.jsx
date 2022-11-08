import React from 'react';

import Tilt from 'react-parallax-tilt';
import Zoom from 'react-reveal/Zoom';


import './Techs.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";
import { CardButton } from "../../../src/components/CardButton/CardButton";

// Imagens
import reactImg from '../../assets/techs/react-icon.png'
import tsImg from '../../assets/techs/type-icon.png'
import jsImg from '../../assets/techs/js-icon.png'
import mysqlImg from '../../assets/techs/mysql-icon.png'
import nodeImg from '../../assets/techs/node-icon.png'
import mongoImg from '../../assets/techs/mongo-icon.png'

export function Techs() {

    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container techs">
            <Zoom>
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
                    <CardButton name="Node.js" class="c front mysql" style={nodeImg}/>
                </Tilt>
            </div>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="MongoDB" class="c front mysql" style={mongoImg}/>
                </Tilt>
            </div>
            <div className="tilt-card">
                <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                    <CardButton name="MySQL" class="c front mysql" style={mysqlImg}/>
                </Tilt>
            </div>
            </Zoom> 
            <Waves />
            {/* <div className="btnTech">
                <Contact />
            </div> */}
        </div>
        </>
    );
}