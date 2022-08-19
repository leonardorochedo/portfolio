import React from 'react';

import './Home.css'

export function Home() {
    return (
        <div className='container'>
            <div className="text">
                <h1>Olá, me chamo Leonardo prazer!</h1>
                <h2>Dev Front End</h2>
                <p>Freelancer</p>
            </div>
            <div className="image">
                <img src="src\assets\coding.png" alt="Homem sentado usando o computador" />
            </div>
        </div>
    );
}