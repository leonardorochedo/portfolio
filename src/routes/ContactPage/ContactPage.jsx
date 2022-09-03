import React from 'react';

import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Waves } from '../../components/Waves/Waves';

import './ContactPage.css';

export function ContactPage() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hbzvywk', 'template_fqpmqda', e.target, 'uBtKO-dBql1FyAWVL')
        .then((result) => {
            alert('Email enviado seu corno')
            console.log(result.text);
        }, (error) => {
            alert(error.message)
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container contact">
            <div className="form">
            <h2 className='tittle-form'>Me mande um <i>E-mail!</i></h2>
                <form onSubmit={sendEmail}>
                    <input className='inputButtons' type="text" name='name' placeholder=' Nome' />
                    <input className='inputButtons' type="text" name='cel' placeholder=' Celular' />
                    <input className='inputButtons' type="email" name='email' placeholder=' Seu e-mail' />
                    <textarea name="message" required placeholder=' Digite aqui sua mensagem...'></textarea>
                    <Link to="/sucesso" style={{textDecoration: 'none'}}><button className='inputButtons' type='submit'>Enviar</button></Link>
                </form>
            </div>
            <div className="whatsapp">
                <h2>Fale comigo pelo <span>Whatsapp!</span></h2>
                <a href="https://api.whatsapp.com/send?phone=+5543991309477&text=Olá, queria fazer um orçamento com você!" target="_blank">
                    <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B5543991309477%26text%3DOl%C3%A1%2C%20queria%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA!&chs=180x180&choe=UTF-8&chld=L|2" alt="QR Code" />
                </a>
                <p>escaneie ou clique</p>
            </div>
            <Waves />
        </div>
        </>
    );
}