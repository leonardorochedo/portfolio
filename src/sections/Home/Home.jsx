import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalkAnimation.json";

import './Home.css';

export function Home() {
    return (
        <div className="container-home" id="home">
            <div className="walk">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Olá! Me chamo <span className="name">Leonardo</span><span className="hand">👋</span></h1>
                    <p>Desenvolvedor Full Stack</p>
                </div>
                <div className="buttons">
                    <button>
                        Entrar em contato
                    </button>
                </div>
            </div>
        </div>
    );
}
