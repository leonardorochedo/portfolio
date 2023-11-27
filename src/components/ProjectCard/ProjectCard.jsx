import './ProjectCard.css';

export function ProjectCard({ children, title, link, backgroundImage }) {

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center'
    };

    return (
        <a href={link} target='_blank' className="link">
            <div className='project-card'>
                <div className='background-image' style={cardStyle}></div>
                <h2>{title}</h2>
                <div className="project-techs">
                    {children}
                </div>
            </div>
        </a>
    );
}