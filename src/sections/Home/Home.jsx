import Tilt from 'react-parallax-tilt';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

// Componentes
import { Header } from '../../../src/components/Header/Header';
import { Waves } from "../../../src/components/Waves/Waves";
import { ContactButton } from "../../../src/components/ContactButton/ContactButton";
import { CardButton } from "../../components/CardButton/CardButton";
import { ProjectCard } from "../../../src/components/ProjectCard/ProjectCard";

// Images
import perfilImg from '../../assets/about/perfil.jpg'

// Icons
import reactImg from '../../assets/techs/react-icon.png';
import tsImg from '../../assets/techs/type-icon.png';
import jsImg from '../../assets/techs/js-icon.png';
import nodeImg from '../../assets/techs/node-icon.png';
import nestImg from '../../assets/techs/nest-icon.png';
import javaImg from '../../assets/techs/java-icon.png'
import mysqlImg from '../../assets/techs/mysql-icon.png';
import mongoImg from '../../assets/techs/mongo-icon.png';
import hbsImg from '../../assets/techs/hbs-icon.png';
import htmlImg from '../../assets/techs/html-icon.png';
import cssImg from '../../assets/techs/css-icon.png';
import springImg from '../../assets/techs/spring-icon.svg';
import prismaImg from '../../assets/techs/prisma-icon.png';

// Full
import backMyAPP from '../../assets/projects/myapp.png';
import backNewCars from '../../assets/projects/newcars.png';
import backToughts from '../../assets/projects/toughts.png';
import backDsmeta from '../../assets/projects/dsmeta.png';
import backGetAPet from '../../assets/projects/getapet.png';
// Back
import backFirstapinestjs from '../../assets/projects/firstapinestjs.png';
import backMsspring from '../../assets/projects/msspring.png';
import backWorkspringmongo from '../../assets/projects/workspringmongo.png';
import backWorkspring from '../../assets/projects/workspring.png';
import backNodejsmongo from '../../assets/projects/nodejsmongo.png';
import backDaojdbc from '../../assets/projects/daojdbc.png';
import backChessmatch from '../../assets/projects/chessmatch.png';
import backBankaccount from '../../assets/projects/bankaccount.png';
// Front
import backFotonovo from '../../assets/projects/fotonovo.png';
import backJta from '../../assets/projects/jta.png';
import backRocketcard from '../../assets/projects/rocketcard.png';
import backListPresen from '../../assets/projects/listapresenca.png';
import backCountdown from '../../assets/projects/countdown.png';
import backSunrain from '../../assets/projects/sunrain.png';
import backPokedex from '../../assets/projects/pokedex.png';
import backPaduan from '../../assets/projects/paduan.png';

// Projects
import projectsData from '../../utils/projectsData';

// Animation
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalkAnimation.json";

import './Home.css';

export function Home() {
    
    // About
    const atualYear = new Date();
    const myDate = '2002-07-16';
    const diffInMs   = new Date(atualYear) - new Date(myDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const diffInYears = diffInDays/364;
    
    const myYear = Math.floor(diffInYears);

    // Projects
    const fullstack = projectsData.fullstack
    const backend = projectsData.backend
    const frontend = projectsData.frontend

    function verifyImage(titleImage) {
        const icons = [
          { title: 'reactImg', image: reactImg },
          { title: 'tsImg', image: tsImg },
          { title: 'jsImg', image: jsImg },
          { title: 'tsImg', image: tsImg },
          { title: 'nodeImg', image: nodeImg },
          { title: 'nestImg', image: nestImg },
          { title: 'javaImg', image: javaImg },
          { title: 'mysqlImg', image: mysqlImg },
          { title: 'mongoImg', image: mongoImg },
          { title: 'hbsImg', image: hbsImg },
          { title: 'htmlImg', image: htmlImg },
          { title: 'cssImg', image: cssImg },
          { title: 'springImg', image: springImg },
          { title: 'prismaImg', image: prismaImg },
        ];

        const images = [
            { title: 'backMyAPP', image: backMyAPP },
            { title: 'backNewCars', image: backNewCars },
            { title: 'backGetAPet', image: backGetAPet },
            { title: 'backDsmeta', image: backDsmeta },
            { title: 'backToughts', image: backToughts },
            { title: 'backFirstapinestjs', image: backFirstapinestjs },
            { title: 'backMsspring', image: backMsspring },
            { title: 'backWorkspringmongo', image: backWorkspringmongo },
            { title: 'backWorkspring', image: backWorkspring },
            { title: 'backDaojdbc', image: backDaojdbc },
            { title: 'backChessmatch', image: backChessmatch },
            { title: 'backNodejsmongo', image: backNodejsmongo },
            { title: 'backBankaccount', image: backBankaccount },
            { title: 'backPaduan', image: backPaduan },
            { title: 'backPokedex', image: backPokedex },
            { title: 'backSunrain', image: backSunrain },
            { title: 'backFotonovo', image: backFotonovo },
            { title: 'backJta', image: backJta },
            { title: 'backRocketcard', image: backRocketcard },
            { title: 'backListPresen', image: backListPresen },
            { title: 'backCountdown', image: backCountdown },
        ];
      
        const matchingIcon = icons.find((icon) => icon.title === titleImage);

        const matchingImage = images.find((image) => image.title === titleImage);

        return matchingIcon && matchingIcon.image || matchingImage && matchingImage.image;
    }

    return (
        <>
        <Header />
        <div className="container">
            {/* Home */}
            <div className="container-home" id="home">
                <div className="walk">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className="text">
                    <div className="title">
                        <h1>Olá! Me chamo Leonardo. Prazer <span>👋</span></h1>
                        <h2>Desenvolvedor Full Stack</h2>
                    </div>
                    <p><i>Freelancer</i></p>
                    <div className="icons">
                        <a href="https://github.com/leonardorochedo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href="https://www.linkedin.com/in/leonardorochedo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </div>
                </div>
            </div>
            {/* About */}
            <div className="container-about" id="about">
                <div className='imageAbout'>
                    <img className='perfil' src={perfilImg} alt="Foto de perfil" />
                </div>
                <div className="textAbout">
                    <p>Me chamo Leonardo atualmente tenho {myYear} anos e estou cursando TADS no IFPR de Londrina, sempre fui apaixonado por tecnologia desde pequeno e esse lado meu só cresce!
                    </p>
                    <p>
                    Estou focando meus estudos atualmente voltado para o <i>Desenvolvimento Full Stack</i> me especializando no <i>Backend</i> e estou gostando muito, porém não me prendo apenas nisso e quero a cada dia aprender novas coisas.
                    </p>
                </div>
            </div>
            {/* Techs */}
            <div className="container-techs" id="techs">
                <div className="frontend">
                    <h1>Front End</h1>
                    <div className="frontend-techs">
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="React" class="c front" style={reactImg}/>
                            </Tilt>
                        </div>
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="TypeScript" class="c front" style={tsImg}/>
                            </Tilt>
                        </div>
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="JavaScript" class="c front" style={jsImg}/>
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div className="backend">
                    <h1>Back End</h1>
                    <div className="backend-techs">
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="Java" class="c front" style={javaImg}/>
                            </Tilt>
                        </div>
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="Spring" class="c front" style={springImg}/>
                            </Tilt>
                        </div>   
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="Node.js" class="c front" style={nodeImg}/>
                            </Tilt>
                        </div>
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="NestJS" class="c front" style={nestImg}/>
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div className="database">
                    <h1>Banco de Dados</h1>
                    <div className="database-techs">
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="MongoDB" class="c front" style={mongoImg}/>
                            </Tilt>
                        </div>
                        <div className="tilt-card">
                            <Tilt glareEnable='true' glareColor='#ffffff' glareMaxOpacity='0.3' glareBorderRadius='50px'>
                                <CardButton name="MySQL" class="c front" style={mysqlImg}/>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects */}
            <div className="container-projects" id="projects">
                <div className="fullstack-projects">
                    <h1>Projetos Full Stack</h1>
                    <div className="swiper">
                        <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={100}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        >
                            {Object.keys(fullstack).map((app, index) => {
                                const project = fullstack[app];

                                return <SwiperSlide key={index} ><ProjectCard title={project.title} text={project.text} link={project.link} image={verifyImage(project.image)} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
                            })}
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
                            {Object.keys(backend).map((app, index) => {
                                const project = backend[app];

                                return <SwiperSlide key={index} ><ProjectCard title={project.title} text={project.text} link={project.link} image={verifyImage(project.image)} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
                            })}
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
                            {Object.keys(frontend).map((app, index) => {
                                const project = frontend[app];

                                return <SwiperSlide key={index}><ProjectCard title={project.title} text={project.text} link={project.link} image={verifyImage(project.image)} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
                            })}
                        </Swiper>
                    </div>
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
