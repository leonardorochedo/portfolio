import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import './Projects.css';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { ProjectCard } from "../../../src/components/ProjectCard/ProjectCard";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";

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
import backDsmeta from '../../assets/projects/dsmeta.png';
import backGetAPet from '../../assets/projects/get-a-pet.png';
import paduanViagens from '../../assets/projects/paduan.png';

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
import springImg from '../../assets/techs/spring-icon.svg'

export function Projects() {

    const paduan = {
        title: "Padúan",
        text: "Trabalho que fiz para uma agência de viagens!!",
        link: "https://www.paduanviagens.com.br",
        background: paduanViagens
    }

    const getapet = {
        title: "Get A Pet",
        text: "Site para você que quer adotar um animalzinho e também publicar que está doando seu pet!!",
        link: "https://github.com/leonardorochedo/get-a-pet",
        background: backGetAPet
    }

    const dsmeta = {
        title: "DSMeta",
        text: "Sistema de verificar as vendas dos funcionários e notifica via SMS qual foi o melhor!",
        link: "https://github.com/leonardorochedo/dsmeta",
        background: backDsmeta
    }

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
        <Header />
        <div className="container projects">
            <div className="frontend-projects">
                <h1>Projetos Front End</h1>
                <div className="swiper">
                    <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><ProjectCard title={paduan.title} text={paduan.text} link={paduan.link} image={paduan.background} icon1={reactImg} icon2={cssImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={sunrain.title} text={sunrain.text} link={sunrain.link} image={sunrain.background} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={pokedex.title} text={pokedex.text} link={pokedex.link} image={pokedex.background} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={rocketcard.title} text={rocketcard.text} link={rocketcard.link} image={rocketcard.background} icon1={reactImg} icon2={jsImg} icon3={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={listapresenca.title} text={listapresenca.text} link={listapresenca.link} image={listapresenca.background} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={countdown.title} text={countdown.text} link={countdown.link} image={countdown.background} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={fotonovo.title} text={fotonovo.text} link={fotonovo.link} image={fotonovo.background} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={jta.title} text={jta.text} link={jta.link} image={jta.background} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="backend-projects">
                <h1>Projetos Back End</h1>
                <div className="swiper">
                    <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><ProjectCard title={dsmeta.title} text={dsmeta.text} link={dsmeta.link} image={dsmeta.background} icon1={reactImg} icon2={springImg} icon3={mysqlImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={getapet.title} text={getapet.text} link={getapet.link} image={getapet.background} icon1={reactImg} icon2={nodeImg} icon3={mongoImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={toughts.title} text={toughts.text} link={toughts.link} image={toughts.background} icon1={nodeImg} icon2={hbsImg} icon3={mysqlImg}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Waves />
        </div>
        <div className="contact-button">
            <ContactButton />
        </div>
        </>
    );
}
