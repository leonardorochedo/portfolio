import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalkAnimation.json";

import './Home.css';

export function Home() {

    const scrollToContact = () => {
        const contactDiv = document.getElementById('contact');
        if (contactDiv) {
            contactDiv.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container-home" id="home">
            <div className="walk">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Olá! Me chamo <span className="name">Leonardo Rochedo</span><span className="hand">👋</span></h1>
                    <p>Desenvolvedor Full Stack</p>
                </div>
                <div className="buttons">
                    <button onClick={scrollToContact}>
                        Entrar em contato
                    </button>
                </div>
            </div>
        </div>
    );
}
