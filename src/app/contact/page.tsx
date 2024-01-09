"use client";
import {Github, Linkedin, Mail} from "lucide-react";
import React from "react";
import CardsContainer from "@/app/components/CardsContainer";
import {Navigation} from "@/app/components/Nav";

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
            <div className="mt-4 flex flex-col justify-center items-center animate-fade-in">
                <div className="mt-8">
                    <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                        Contact
                    </h1>
                </div>
                <hr className="mt-4 w-96"></hr>
                <CardsContainer array={socials} header="Contact"/>
            </div>
        </div>
    );
}
