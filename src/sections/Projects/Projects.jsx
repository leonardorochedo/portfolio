import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

// Icons
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

import './Projects.css';

export function Projects() {

    return (
        <div className="container-projects" id="projects">
            <h1 className='title'>Projetos</h1>
            <div className="projects">
                <ProjectCard title="NewCars" link="https://github.com/leonardorochedo/newcars" backgroundImage="https://user-images.githubusercontent.com/62243365/218235172-dd68a2c2-9fcb-4532-b239-89a5ea5140c6.png">
                    <FaReact size={30} color='#6161f7'/>
                    <FaCss3Alt size={30} color='#6161f7'/>
                    <SiSpring size={30} color='#6161f7'/>
                    <GrMysql size={30} color='#6161f7'/>
                </ProjectCard>
                <ProjectCard title="MyApp" link="https://github.com/leonardorochedo/myapp" backgroundImage="https://private-user-images.githubusercontent.com/62243365/241771765-a202561c-fd51-41e2-ad10-781cc67dad82.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEwODkzOTYsIm5iZiI6MTcwMTA4OTA5NiwicGF0aCI6Ii82MjI0MzM2NS8yNDE3NzE3NjUtYTIwMjU2MWMtZmQ1MS00MWUyLWFkMTAtNzgxY2M2N2RhZDgyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDEyNDQ1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlMjAwN2EwZTU0YWNmYWIwYWZlYjhmM2VmMjBiZThjOTc1YjM3ZTg2ZWZmYWE3MTQ0NGMwMzg3ZWMxOTAyZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9-U-RR-_9Yrhk6-VaR082WjEfDpAMaNLFs5n0e4S48A">
                    <FaReact size={30} color='#6161f7'/>
                    <FaNodeJs size={30} color='#6161f7'/>
                    <GrMysql size={30} color='#6161f7'/>
                </ProjectCard>
                <ProjectCard title="Netflix Servlet" link="https://github.com/leonardorochedo/netflix-project" backgroundImage="https://user-images.githubusercontent.com/62243365/242132069-4580f0fd-534f-49ae-acfb-30fd8069b516.png">
                    <FaReact size={30} color='#6161f7'/>
                    <FaJava size={30} color='#6161f7'/>
                </ProjectCard>
            </div>
        </div>
    );
}