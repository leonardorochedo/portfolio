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

    function verifyImage(titleIcon) {
        const icons = [
          { title: 'reactImg', image: reactImg },
          { title: 'tsImg', image: tsImg },
          { title: 'jsImg', image: jsImg },
          { title: 'tsImg', image: tsImg },
          { title: 'nodeImg', image: nodeImg },
          { title: 'javaImg', image: javaImg },
          { title: 'mysqlImg', image: mysqlImg },
          { title: 'mongoImg', image: mongoImg },
          { title: 'hbsImg', image: hbsImg },
          { title: 'htmlImg', image: htmlImg },
          { title: 'cssImg', image: cssImg },
          { title: 'springImg', image: springImg },
        ];
      
        const matchingIcon = icons.find((icon) => icon.title === titleIcon);

        return matchingIcon ? matchingIcon.image : null;
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
                        {Object.keys(fullstack).map((app, index) => {
                            const project = fullstack[app];

                            return <SwiperSlide key={index} ><ProjectCard title={project.title} text={project.text} link={project.link} image={project.imageURL} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
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

                            return <SwiperSlide key={index} ><ProjectCard title={project.title} text={project.text} link={project.link} image={project.imageURL} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
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

                            return <SwiperSlide key={index}><ProjectCard title={project.title} text={project.text} link={project.link} image={project.imageURL} icon1={verifyImage(project.icon1)} icon2={verifyImage(project.icon2)} icon3={verifyImage(project.icon3)}/></SwiperSlide>
                        })}
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
