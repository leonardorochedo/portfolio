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

// Images

// Full
import backNewCars from '../../assets/projects/newcars.png';
import backToughts from '../../assets/projects/toughts.png';
import backDsmeta from '../../assets/projects/dsmeta.png';
import backGetAPet from '../../assets/projects/get-a-pet.png';

// Back
import backBankaccount from '../../assets/projects/bankaccount.png';
import backChessmatch from '../../assets/projects/chessmatch.png';
import backDaojdbc from '../../assets/projects/daojdbc.png';
import backMsspring from '../../assets/projects/msspring.png';
import backNodejsmongo from '../../assets/projects/nodejsmongo.png';
import backWorkspring from '../../assets/projects/workspring.png';
import backWorkspringmongo from '../../assets/projects/workspringmongo.png';

// Front
import backFotonovo from '../../assets/projects/fotonovo.png';
import backJta from '../../assets/projects/jta.png';
import backRocketcard from '../../assets/projects/rocketcard.png';
import backListPresen from '../../assets/projects/listapresenca.png';
import backCountdown from '../../assets/projects/countdown.png';
import backSunrain from '../../assets/projects/sunrain.png';
import backPokedex from '../../assets/projects/pokedex.png';
import backPaduan from '../../assets/projects/paduan.png';

// Icons
import reactImg from '../../assets/techs/react-icon.png';
import tsImg from '../../assets/techs/type-icon.png';
import jsImg from '../../assets/techs/js-icon.png';
import nodeImg from '../../assets/techs/node-icon.png';
import javaImg from '../../assets/techs/java-icon.png'
import mysqlImg from '../../assets/techs/mysql-icon.png';
import mongoImg from '../../assets/techs/mongo-icon.png';
import hbsImg from '../../assets/techs/hbs-icon.png';
import htmlImg from '../../assets/techs/html-icon.png';
import cssImg from '../../assets/techs/css-icon.png';
import springImg from '../../assets/techs/spring-icon.svg';

// Projects
import projectsData from '../../utils/projectsData';

export function Projects() {

    const fullstack = projectsData.fullstack
    const backend = projectsData.backend
    const frontend = projectsData.frontend

    function verifyImage(path) {
        const icons = [{title: 'reactImg', image: reactImg}, {title: 'tsImg', image: tsImg}]

        icons.map((icon) => {
            if(path == icon.title) return icon.image
        })
    }

    return (
        <>
        <Header />
        <div className="container projects">
            <div className="fullstack-projects">
                <h1>Projetos Full Stack</h1>
                <div className="swiper">
                    <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    >
                        {Object.keys(fullstack).map((app) => {
                            const project = fullstack[app];

                            return <SwiperSlide><ProjectCard title={project.title} text={project.text} link={project.link} image={backNewCars} icon1={verifyImage(project.icon1)} icon2={project.icon2} icon3={project.icon3}/></SwiperSlide>
                        })}
                        {/* <SwiperSlide><ProjectCard title={fullstack.dsmeta.title} text={fullstack.dsmeta.text} link={fullstack.dsmeta.link} image={backDsmeta} icon1={reactImg} icon2={springImg} icon3={mysqlImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={fullstack.getapet.title} text={fullstack.getapet.text} link={fullstack.getapet.link} image={backGetAPet} icon1={reactImg} icon2={nodeImg} icon3={mongoImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={fullstack.toughts.title} text={fullstack.toughts.text} link={fullstack.toughts.link} image={backToughts} icon1={nodeImg} icon2={hbsImg} icon3={mysqlImg}/></SwiperSlide> */}
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
                    >
                        <SwiperSlide><ProjectCard title={backend.msspring.title} text={backend.msspring.text} link={backend.msspring.link} image={backMsspring} icon1={springImg} icon2={mysqlImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.workspringmongo.title} text={backend.workspringmongo.text} link={backend.workspringmongo.link} image={backWorkspringmongo} icon1={springImg} icon2={mongoImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.workspring.title} text={backend.workspring.text} link={backend.workspring.link} image={backWorkspring} icon1={springImg} icon2={mysqlImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.daojdbc.title} text={backend.daojdbc.text} link={backend.daojdbc.link} image={backDaojdbc} icon1={javaImg} icon2={mysqlImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.chessmatch.title} text={backend.chessmatch.text} link={backend.chessmatch.link} image={backChessmatch} icon1={javaImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.nodejsmongo.title} text={backend.nodejsmongo.text} link={backend.nodejsmongo.link} image={backNodejsmongo} icon1={nodeImg} icon2={mongoImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={backend.bankaccount.title} text={backend.bankaccount.text} link={backend.bankaccount.link} image={backBankaccount} icon1={nodeImg}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="frontend-projects">
                <h1>Projetos Front End</h1>
                <div className="swiper">
                    <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    >
                        <SwiperSlide><ProjectCard title={frontend.paduan.title} text={frontend.paduan.text} link={frontend.paduan.link} image={backPaduan} icon1={reactImg} icon2={cssImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.sunrain.title} text={frontend.sunrain.text} link={frontend.sunrain.link} image={backSunrain} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.pokedex.title} text={frontend.pokedex.text} link={frontend.pokedex.link} image={backPokedex} icon1={reactImg} icon2={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.rocketcard.title} text={frontend.rocketcard.text} link={frontend.rocketcard.link} image={backRocketcard} icon1={reactImg} icon2={jsImg} icon3={tsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.listapresenca.title} text={frontend.listapresenca.text} link={frontend.listapresenca.link} image={backListPresen} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.countdown.title} text={frontend.countdown.text} link={frontend.countdown.link} image={backCountdown} icon1={reactImg} icon2={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.fotonovo.title} text={frontend.fotonovo.text} link={frontend.fotonovo.link} image={backFotonovo} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
                        <SwiperSlide><ProjectCard title={frontend.jta.title} text={frontend.jta.text} link={frontend.jta.link} image={backJta} icon1={htmlImg} icon2={cssImg} icon3={jsImg}/></SwiperSlide>
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
