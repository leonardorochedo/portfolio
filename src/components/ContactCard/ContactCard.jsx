import './ContactCard.css';

export function ContactCard({ children, title, description, link }) {

    return (
        <a href={link} target='_blank' className='link'>
            <div className='contact-card'>
                {children}
                <h2 className="title">{title}</h2>
                <p className='description'>{description}</p>
            </div>
        </a>
    );
}