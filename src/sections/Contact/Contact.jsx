import { ContactCard } from '../../components/ContactCard/ContactCard';

import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import './Contact.css';

export function Contact() {

    return (
        <div className="container-contact" id='contact'>
            <h1 className="title">Contatos</h1>
            <div className="contacts">
                <ContactCard title="E-mail" description="leonardrochedo@gmail.com" link="mailto:leonardrochedo@gmail.com">
                    <AiOutlineMail size={50} color='#6161f7' />
                </ContactCard>
                <ContactCard title="Celular" description="(43) 99130-9477" link="https://api.whatsapp.com/send?phone=5543991309477">
                    <IoIosPhonePortrait size={50} color='#6161f7' />
                </ContactCard>
                <ContactCard title="Linkedln" description="@leonardorochedo" link="https://www.linkedin.com/in/leonardorochedo">
                    <FaLinkedinIn size={50} color='#6161f7' />
                </ContactCard>
                <ContactCard title="Github" description="@leonardorochedo" link="https://github.com/leonardorochedo">
                    <FaGithub size={50} color='#6161f7' />
                </ContactCard>
            </div>
        </div>
    );
}