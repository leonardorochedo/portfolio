import './ProjectCard.css';

export function ProjectCard({ children, title, description, link, backgroundImage, isMobile }) {

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: isMobile ? 'contain' : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center'
    };

    return (
        <a href={link} target='_blank' className="link">
            <div className='project-card'>
                <div className='background-image' style={cardStyle}></div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="project-techs">
                    {children}
                </div>
            </div>
        </a>
    );
}