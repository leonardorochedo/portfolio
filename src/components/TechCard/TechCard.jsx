import Tilt from 'react-parallax-tilt';

import "./TechCard.css";

export function TechCard({ children, name }) {
    return (
        <Tilt glareEnable='true' glareColor='#6161f7' glareMaxOpacity='1' glareBorderRadius='20px' className='card'>
            <p className='title'>{name}</p>
            {children}
        </Tilt>
    );
}