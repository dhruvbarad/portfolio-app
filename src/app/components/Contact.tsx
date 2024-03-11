import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import CardsContainer from "@/app/components/CardsContainer";

const socials = [
    {
        icon: <Mail size={20} />,
        href: "mailto:dbarad302@gmail.com",
        name: "Email",
        description: "dbarad302@gmail.com",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/dhruvbarad",
        name: "GitHub",
        description: "dhruvbarad",
    },
    {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/dhruv-barad",
        name: "LinkedIn",
        description: "dhruv-barad",
    },
];

export default async function Contact() {
    return (
        <div className="contact-component mb-16 flex flex-col justify-center items-center animate-fade-in">
            <CardsContainer array={socials} header="Contact" />
        </div>
    );
}
