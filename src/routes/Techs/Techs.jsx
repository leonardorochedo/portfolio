import React from 'react';

import Tilt from 'react-parallax-tilt';

import './Techs.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";
import { CardButton } from "../../../src/components/CardButton/CardButton";

// Imagens
import reactImg from '../../assets/techs/react-icon.png'
import tsImg from '../../assets/techs/type-icon.png'
import jsImg from '../../assets/techs/js-icon.png'
import nodeImg from '../../assets/techs/node-icon.png'
import javaImg from '../../assets/techs/java-icon.png'
import mysqlImg from '../../assets/techs/mysql-icon.png'
import mongoImg from '../../assets/techs/mongo-icon.png'

export function Techs() {

    return (
        <>
        <Header />
        <div className="container-techs techs">
            <div className="frontend">
                <h1>Front End</h1>
                <div className="frontend-techs">
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="React" class="c front" style={reactImg}/>
                        </Tilt>
                    </div>
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="TypeScript" class="c front" style={tsImg}/>
                        </Tilt>
                    </div>
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="JavaScript" class="c front" style={jsImg}/>
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className="backend">
                <h1>Back End</h1>
                <div className="backend-techs">
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="Node.js" class="c front" style={nodeImg}/>
                        </Tilt>
                    </div>
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="Java" class="c front" style={javaImg}/>
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className="database">
                <h1>Banco de Dados</h1>
                <div className="database-techs">
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="MongoDB" class="c front" style={mongoImg}/>
                        </Tilt>
                    </div>
                    <div className="tilt-card">
                        <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                            <CardButton name="MySQL" class="c front" style={mysqlImg}/>
                        </Tilt>
                    </div>
                </div>
            </div>
            <Waves />
        </div>
        <div className="contact-button">
            <ContactButton />
        </div>
        </>
    );
}