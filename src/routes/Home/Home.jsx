import React from 'react';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";

// Libs
//import { useSpring, animated } from 'react-spring';
//import { useDrag } from '@use-gesture/react';

import './Home.css';

export function Home() {

    // const imagePos = useSpring({ x: 0, y: 0 });

    // const bindLogoPos = useDrag((params) => {
    //     imagePos.x.set(params.offset[0]);
    //     imagePos.y.set(params.offset[1]);
    // });

    return (
        <div className='container headerHome'>
            <Header />
        <div className='container-home'>
            <div className="text">
                <h1>Olá! Me chamo Leonardo. Prazer <span>👋</span></h1>
                <h2>Desenvolvedor Front End</h2>
                <p><i>Freelancer</i></p>
                <div className="icons">
                    <a href="https://github.com/leonardorochedo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <a href="https://www.linkedin.com/in/leonardo-rochedo-28b6a41a2/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                </div>
            </div>
            <div className="image">
                <img src="src\static\coding.png" alt="Homem sentado usando o computador" />
            </div>
            <Waves />
            <Contact />
        </div>
        </div>
    );
}