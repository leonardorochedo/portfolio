import React, { useState, useEffect } from 'react';

import emailjs from 'emailjs-com';

import { Header } from '../../components/Header/Header';
import { Waves } from '../../components/Waves/Waves';

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './ContactPage.css';

// MASK
import { IMaskInput } from 'react-imask';

export function ContactPage() {

    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault();

        const promiseEmail = emailjs.sendForm('service_hbzvywk', 'template_fqpmqda', e.target, 'uBtKO-dBql1FyAWVL')

        if (promiseEmail.pending) {
            toast.info("Enviando e-mail...", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }

        promiseEmail.then((result) => {
            toast.success("E-mail enviado com sucesso!", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }, (error) => {
            toast.error("Não foi possível enviar o e-mail!", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        });
        e.target.reset();
    }

    // Desabilitar e habilitar o botão
    useEffect(() => {
        const button = document.querySelector("#buttonForm");

            if (message) {
                button.disabled = false;
                button.classList.remove("disabled")
                button.classList.add("enabled")
            } else {
                button.disabled = true;
                button.classList.remove("enabled")
                button.classList.add("disabled")
            }
    }, [message])

    return (
        <>
        <Header />
        <div className="container contact">
            <div className="form">
            <h2 className='tittle-form'>Me mande um <i>E-mail!</i></h2>
                <form onSubmit={sendEmail}>
                    <input className='inputButtons' type="text" name='name' placeholder='Nome' required />
                    {/* <input className='inputButtons' type="text" name='cel' placeholder='Celular' required /> */}
                    <IMaskInput mask={"(00) 000000000"} name="cel" id="cel" placeholder="Celular" className="imask inputButtons" required />
                    <input className='inputButtons' type="email" name='email' placeholder='Seu e-mail' required />
                    <textarea className='messageValue' name="message" placeholder='Digite aqui sua mensagem...' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button className='inputButtons' id="buttonForm" type='submit' >Enviar</button>
                </form>
            </div>
            <div className="whatsapp">
                <h3>Fale comigo pelo <span>Whatsapp!</span></h3>
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