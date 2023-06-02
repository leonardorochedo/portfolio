import React from 'react';

import "./ProjectCard.css"

export function ProjectCard(props) {

    const icon1 = props.icon1 || null
    const icon2 = props.icon2 || null
    const icon3 = props.icon3 || null
    const backImage = props.image || null

    return (
        <a href={props.link} target="_blank" className='project-cards'>
        <div className='project-card'>
            <div className="text-card">
                <div className="text">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="icons">
                    <i><img src={icon1} alt="" /></i>
                    <i><img src={icon2} alt="" /></i>
                    <i><img src={icon3} alt="" /></i>
                </div>
            </div>
            <img id='background' src={backImage} alt="Foto de fundo" />
        </div>
        </a>
    );
}