import React from 'react';

import "./ProjectCard.css"

export function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank" className='project-cards'>
        <div className='project-card'>
            <div className="text-card">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <img src={props.image} alt="Foto de fundo" />
        </div>
        </a>
    );
}