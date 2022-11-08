import React from 'react';

import Fade from 'react-reveal/Fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import './Projects.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { Contact } from "../../../src/components/Contact/Contact";
import { ProjectCard } from "../../../src/components/ProjectCard/ProjectCard";

// Imagens
import backFotonovo from '../../assets/projects/fotonovo.png';
import backJta from '../../assets/projects/jta.png';
import backRocketcard from '../../assets/projects/rocketcard.png';
import backListPresen from '../../assets/projects/listapresenca.png';
import backCountdown from '../../assets/projects/countdown.png';
import backImpulse from '../../assets/projects/nlwimpulse.png';
import backProgess from '../../assets/projects/inprogress.png';
import backSunrain from '../../assets/projects/sunrain.png';
import backPokedex from '../../assets/projects/pokedex.png';
import backToughts from '../../assets/projects/toughts.png';

// Icons
import reactImg from '../../assets/techs/react-icon.png'
import tsImg from '../../assets/techs/type-icon.png'
import jsImg from '../../assets/techs/js-icon.png'
import mysqlImg from '../../assets/techs/mysql-icon.png'
import nodeImg from '../../assets/techs/node-icon.png'
import mongoImg from '../../assets/techs/mongo-icon.png'
import hbsImg from '../../assets/techs/hbs-icon.png'
import htmlImg from '../../assets/techs/html-icon.png'
import cssImg from '../../assets/techs/css-icon.png'

export function Projects() {

    const toughts = {
        title: "Toughts",
        text: "Um lugar onde você pode publicar seus pensamentos, e também ler o de outros usuários!",
        link: "https://github.com/leonardorochedo/toughts",
        background: backToughts
    }

    const pokedex = {
        title: "Pokédex",
        text: "Pesquise sobre seu Pokémon preferido e veja sua descrição e poder!",
        link: "https://pokedex-seven-drab.vercel.app/",
        background: backPokedex
    }

    const sunrain = {
        title: "Sunrain",
        text: "Consulte a previsão do tempo atual apenas com o nome da cidade!",
        link: "https://sunrain.vercel.app/",
        background: backSunrain
    }

    const fotonovo = {
        title: "Foto Novo",
        text: "Website de uma loja local, utilizei HTML, CSS, JavaScript",
        link: "https://www.fotonovo.com.br/",
        background: backFotonovo
    }

    const jta = {
        title: "JTA Confecções",
        text: "Website de uma loja de roupas, utilizei HTML, CSS, JavaScript",
        link: "https://jtaconfeccoes.com.br/",
        background: backJta
    }

    const rocketcard = {
        title: "RocketCard",
        text: "Desafio de consumir a API do GitHub gerando um cartão",
        link: "https://github.com/leonardorochedo/rocketcard",
        background: backRocketcard
    }

    const listapresenca = {
        title: "Lista de Presença",
        text: "Desafio de fazer uma lista de presença de alunos em ReactJS",
        link: "https://github.com/leonardorochedo/lista_presenca",
        background: backListPresen
    }

    const countdown = {
        title: "Countdown",
        text: "Desafio de fazer uma contagem regressiva, implementei também umas animações e modais",
        link: "https://github.com/leonardorochedo/Countdown",
        background: backCountdown
    }

    const nlwImpulse = {
        title: "NLW Impulse",
        text: "Maratona da Rocketseat, criamos uma aplicação inteira do zero, um widget de feedback que dê a experiência do usuário fazer um feedback do site com direito até de mandar print de uma forma muito dinâmica",
        link: "https://github.com/leonardorochedo/nlwImpulse",
        background: backImpulse
    }

    const inProgress = {
        title: "Mais projetos...",
        text: "Tenho mais repositórios em meu GitHub, venha dar uma olhada",
        link: "https://github.com/leonardorochedo",
        background: backProgess
    }


    return (
        <>
        <div className="container">
            <Header />
        </div>
        <div className="container projects">
            <div className="swiper">
            <Fade>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><ProjectCard title={toughts.title} text={toughts.text} link={toughts.link} image={toughts.background} icon1={nodeImg} icon2={hbsImg} icon3={mysqlImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={pokedex.title} text={pokedex.text} link={pokedex.link} image={pokedex.background} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={sunrain.title} text={sunrain.text} link={sunrain.link} image={sunrain.background} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={rocketcard.title} text={rocketcard.text} link={rocketcard.link} image={rocketcard.background} icon1={reactImg} icon2={jsImg} icon3={tsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={countdown.title} text={countdown.text} link={countdown.link} image={countdown.background} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={listapresenca.title} text={listapresenca.text} link={listapresenca.link} image={listapresenca.background} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={nlwImpulse.title} text={nlwImpulse.text} link={nlwImpulse.link} image={nlwImpulse.background} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={fotonovo.title} text={fotonovo.text} link={fotonovo.link} image={fotonovo.background} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={jta.title} text={jta.text} link={jta.link} image={jta.background} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
                <SwiperSlide><ProjectCard title={inProgress.title} text={inProgress.text} link={inProgress.link} image={inProgress.background}/></SwiperSlide>
            </Swiper>
            </Fade>
            </div>    
            <Waves />
            {/* <div className="btnProjects">
                <Contact className="btnProjects"/>
            </div> */}
        </div>
        </>
    );
}