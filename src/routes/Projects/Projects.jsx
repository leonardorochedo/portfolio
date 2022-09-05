import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import './Projects.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";
import { ProjectCard } from "../../../src/components/ProjectCard/ProjectCard"

export function Projects() {

    const fotonovo = {
        title: "Foto Novo",
        text: "Website de uma loja local, utilizei HTML, CSS, JavaScript",
        link: "https://www.fotonovo.com.br/",
        background: "src/assets/fotonovo.png"
    }

    const jta = {
        title: "JTA Confecções",
        text: "Website de uma loja de roupas, utilizei HTML, CSS, JavaScript",
        link: "https://jtaconfeccoes.com.br/",
        background: "src/assets/jta.png"
    }

    const rocketcard = {
        title: "RocketCard",
        text: "Desafio de consumir a API do GitHub gerando um cartão",
        link: "https://github.com/leonardorochedo/rocketcard",
        background: "src/assets/rocketcard.png"
    }

    const listapresenca = {
        title: "Lista de Presença",
        text: "Desafio de fazer uma lista de presença de alunos em ReactJS",
        link: "https://github.com/leonardorochedo/lista_presenca",
        background: "src/assets/listapresenca.png"
    }

    const countdown = {
        title: "Countdown",
        text: "Desafio de fazer uma contagem regressiva, implementei também umas animações e modais",
        link: "https://github.com/leonardorochedo/Countdown",
        background: "src/assets/countdown.png"
    }

    const nlwImpulse = {
        title: "NLW Impulse",
        text: "Maratona da Rocketseat, criamos uma aplicação inteira do zero, um widget de feedback que dê a experiência do usuário fazer um feedback do site com direito até de mandar print de uma forma muito dinâmica",
        link: "https://github.com/leonardorochedo/nlwImpulse",
        background: "src/assets/nlwimpulse.png"
    }

    const inProgress = {
        title: "Mais projetos...",
        text: "Tenho mais repositórios em meu GitHub, venha dar uma olhada",
        link: "https://github.com/leonardorochedo",
        background: "src/assets/inprogress.png"
    }


    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container projects">
            <div className="swiper">
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><ProjectCard title={fotonovo.title} text={fotonovo.text} link={fotonovo.link} image={fotonovo.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={jta.title} text={jta.text} link={jta.link} image={jta.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={rocketcard.title} text={rocketcard.text} link={rocketcard.link} image={rocketcard.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={listapresenca.title} text={listapresenca.text} link={listapresenca.link} image={listapresenca.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={countdown.title} text={countdown.text} link={countdown.link} image={countdown.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={nlwImpulse.title} text={nlwImpulse.text} link={nlwImpulse.link} image={nlwImpulse.background}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={inProgress.title} text={inProgress.text} link={inProgress.link} image={inProgress.background}/></SwiperSlide>
            </Swiper>
            </div>    
            <Waves />
            <div className="btnProjects">
                <Contact className="btnProjects"/>
            </div>
        </div>
        </>
    );
}