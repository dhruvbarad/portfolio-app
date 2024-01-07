"use client";
import {Github, Linkedin, Mail} from "lucide-react";
import React from "react";
import Page from "@/app/components/example";

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
        label: "Github",
        handle: "dhruvbarad",
    },
    {
        icon: <Linkedin size={20}/>,
        href: "https://linkedin.com/in/dhruv-barad",
        label: "LinkedIn",
        handle: "dhruv-barad",
    },
];

export default async function Example() {
    return (
        <Page array={socials} header="Contact"/>
    );
}
