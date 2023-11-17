// Componentes
import { Waves } from "../../../src/components/Waves/Waves";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";
import { BackButton } from "../../components/BackButton/BackButton";

import "./NotFound.css";

export function NotFound() {
    return (
        <>
        <div className="container">
            <BackButton />
            <div className="notfound">
                <h1>Ops... 🚧</h1>
                <h2>Parece que você digitou algo incorretamente</h2>
                <p><i>Volte para a página inicial pelo botão acima 😁</i></p>
            </div>
            <Waves />
        </div>
        <div className="contact-button">
            <ContactButton />
        </div>
        </>
    );
}