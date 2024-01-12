"use client";
import React from "react";
import { FolderGit } from "lucide-react";
import CardsContainer from "@/app/components/CardsContainer";

const projects = [
    {
        icon: <FolderGit size={20} />,
        href: "https://comic-app-50173.web.app",
        label: "A React app. More details available on my GitHub.",
        handle: "Marvel & Star Wars Explorer",
    },
    {
        icon: <FolderGit size={20} />,
        href: "/",
        label: "A NextJS app. More details on my GitHub.",
        handle: "Portfolio website",
    },
];
export default async function Projects() {
    return (
        <div className="projects-component mt-4 flex flex-col justify-center items-center animate-fade-in">
            <CardsContainer array={projects} header="Projects" />
        </div>
    );
}
