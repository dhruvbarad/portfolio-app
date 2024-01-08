"use client";
import {Github, Linkedin, Mail} from "lucide-react";
import React from "react";
import CardsContainer from "@/app/components/CardsContainer";
import {Navigation} from "@/app/components/nav";

const socials = [
    {
        icon: <Mail size={20}/>,
        href: "mailto:dbarad302@gmail.com",
        label: "Email",
        handle: "dbarad302@gmail.com",
    },
    {
        icon: <Github size={20}/>,
        href: "https://github.com/dhruvbarad",
        label: "GitHub",
        handle: "dhruvbarad",
    },
    {
        icon: <Linkedin size={20}/>,
        href: "https://linkedin.com/in/dhruv-barad",
        label: "LinkedIn",
        handle: "dhruv-barad",
    },
];

export default async function Contact() {
    return (
        <div>
            <Navigation/>
            <CardsContainer array={socials} header="Contact"/>
        </div>
    );
}
