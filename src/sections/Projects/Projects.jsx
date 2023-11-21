import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

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

import projectsData from '../../utils/projectsData';

import './Projects.css';

export function Projects() {

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
    );
}