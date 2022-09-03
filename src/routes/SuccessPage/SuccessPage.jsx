import React from 'react';
import { Header } from '../../components/Header/Header';
import { Waves } from '../../components/Waves/Waves';

import "./SuccessPage.css"

export function SuccessPage() {
    return (
        <>
        <div className="container">
        <Header />
        </div>
        <div className="container success">
            <img src="src\assets\success.png" alt="Icone de sucesso" />
            <h2>E-mail enviado com sucesso!</h2>

            <Waves />
        </div>
        </>
    );
}