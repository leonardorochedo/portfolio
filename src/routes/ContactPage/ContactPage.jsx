import React from 'react';

import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { Waves } from '../../components/Waves/Waves';

import './ContactPage.css';

export function ContactPage() {

    const navigate = useNavigate()

    function sendEmail(e) { // function emailJS
        //e.preventDefault();

        emailjs.sendForm('service_hbzvywk', 'template_fqpmqda', e.target, 'uBtKO-dBql1FyAWVL')
        .then((result) => {
            console.log(result.text)
            navigate('/sucesso') // Navega para a /sucesso caso der certo
        }, (error) => {
            alert("Email não enviado, verifique os dados e tente novamente!");
            console.log(error.text);
        });
        e.target.reset();
    }

    function toggleButton() {
  
        const button = document.querySelector("#buttonForm");

        const messageValue = document.querySelector(".messageValue").value;

        if (messageValue != null && messageValue != "" && messageValue != undefined) {
            button.disabled = false;
            button.classList.remove("disabled")
            button.classList.add("enabled")
        } else {
            button.disabled = true;
            button.classList.remove("enabled")
            button.classList.add("disabled")
        }
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
                    <textarea className='messageValue' name="message" placeholder=' Digite aqui sua mensagem...' onFocus={setInterval(toggleButton, 100)} required></textarea>
                    <button className='inputButtons' id="buttonForm" type='submit' >Enviar</button>
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