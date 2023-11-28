import { TechCard } from '../../components/TechCard/TechCard';

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

import './Techs.css';

export function Techs() {
    return (
        <div className="container-techs" id="techs">
            <h1 className='title'>Tecnologias</h1>
            <div className="techs">
                <TechCard name="Java">
                    <FaJava size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="Spring Boot">
                    <SiSpring size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="JavaScript">
                    <BiLogoJavascript size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="TypeScript">
                    <BiLogoTypescript size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="Node.js">
                    <FaNodeJs size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="NestJS">
                    <SiNestjs size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="HTML">
                    <FaHtml5 size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="CSS3">
                    <FaCss3Alt size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="React">
                    <FaReact size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="MySQL">
                    <GrMysql size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="MongoDB">
                    <SiMongodb size={70} color='#6161f7'/>
                </TechCard>
                <TechCard name="Docker">
                    <FaDocker size={70} color='#6161f7'/>
                </TechCard>
            </div>
        </div>
    );
}