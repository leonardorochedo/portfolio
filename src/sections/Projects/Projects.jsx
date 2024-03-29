import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

// Icons
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpo } from "react-icons/si";

import './Projects.css';

export function Projects() {

    return (
        <div className="container-projects" id="projects">
            <h1 className='title'>Projetos</h1>
            <div className="projects">
                <ProjectCard title="NewCars" description="Um lugar onde você pode vender seu carro e também comprar um novo" link="https://github.com/leonardorochedo/newcars" backgroundImage="https://user-images.githubusercontent.com/62243365/286038177-11a03a73-7b9d-49e0-a969-b1cc67d42d67.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMjM5MDIsIm5iZiI6MTcwMTEyMzYwMiwicGF0aCI6Ii82MjI0MzM2NS8yODYwMzgxNzctMTFhMDNhNzMtN2I5ZC00OWUwLWE5NjktYjFjYzY3ZDQyZDY3LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyN1QyMjIwMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYmIwYzAyMmM2NDdkZTI2MzIzM2ZlYjk3NjM5N2U1N2VlMjhiNTdkMGYxNWQ5OGRjMTQ5NmVhNWE4ZmJhZDY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CvSb18oQEAwoeVu_zxC4qhCo9bjVUMPoHSHPZOLm7Dw" isMobile={false}>
                    <FaReact size={30} color='#6161f7'/>
                    <FaCss3Alt size={30} color='#6161f7'/>
                    <SiSpring size={30} color='#6161f7'/>
                    <GrMysql size={30} color='#6161f7'/>
                </ProjectCard>
                <ProjectCard title="MyApp" description="Um lugar onde você pode postar seus pensamentos e dicas sobre qualquer coisa" link="https://github.com/leonardorochedo/myapp" backgroundImage="https://user-images.githubusercontent.com/62243365/241771765-a202561c-fd51-41e2-ad10-781cc67dad82.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMjM5NTYsIm5iZiI6MTcwMTEyMzY1NiwicGF0aCI6Ii82MjI0MzM2NS8yNDE3NzE3NjUtYTIwMjU2MWMtZmQ1MS00MWUyLWFkMTAtNzgxY2M2N2RhZDgyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDIyMjA1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk4OGU0NjhmZjQzMjA5OGE1MjVhODIyMDg5ZDZkNWYyOWIyY2MzZDU5Y2YwMGFiYmNhNzRiMWI4YmI0ZjlhNDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VCPqUQkqm9HYtXk5rv7SNknBEtHJQvPoxtPmAUtwoZA" isMobile={true}>
                    <FaReact size={30} color='#6161f7'/>
                    <FaNodeJs size={30} color='#6161f7'/>
                    <GrMysql size={30} color='#6161f7'/>
                    <SiExpo size={30} color='#6161f7'/>
                </ProjectCard>
                <ProjectCard title="Netflix Servlet" description="API em Servlet filtrando filmes e séries" link="https://github.com/leonardorochedo/netflix-project" backgroundImage="https://user-images.githubusercontent.com/62243365/242132069-4580f0fd-534f-49ae-acfb-30fd8069b516.png" isMobile={false}>
                    <FaReact size={30} color='#6161f7'/>
                    <FaJava size={30} color='#6161f7'/>
                </ProjectCard>
                <ProjectCard title="Calmind" description="Aplicativo que traz um alívio momentâneo para o usuário" link="https://github.com/leonardorochedo/calmind" backgroundImage="https://user-images.githubusercontent.com/62243365/286046242-55fd1c5a-f41d-4ba2-928d-67bbd1d6e658.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMjU4OTcsIm5iZiI6MTcwMTEyNTU5NywicGF0aCI6Ii82MjI0MzM2NS8yODYwNDYyNDItNTVmZDFjNWEtZjQxZC00YmEyLTkyOGQtNjdiYmQxZDZlNjU4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDIyNTMxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU0MzE2MmViZjBmZmNmY2EyMmIyMWJlYzI3M2VhM2Y0N2Y3OGEzZGM0ZjE5Yjc4YjAxMTQ5NDJmNzI4NjZkNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.FL14aworTaKw27lTP0wsUtAz4c1Pk04gDMEdVAJHhhc" isMobile={true}>
                    <FaReact size={30} color='#6161f7'/>
                    <SiExpo size={30} color='#6161f7'/>
                </ProjectCard>
            </div>
        </div>
    );
}