import React from "react";
import { FolderGit } from "lucide-react";
import CardsContainer from "@/app/components/CardsContainer";

const projects = [
    {
        icon: <FolderGit size={20} />,
        href: "https://comic-app-pink.vercel.app",
        description: "A Next.js app. More details available on my GitHub.",
        name: "Comic Explorer",
    },
    {
        icon: <FolderGit size={20} />,
        href: "/",
        description: "A Next.js app. More details on my GitHub.",
        name: "Portfolio website",
    },
];
export default async function Projects() {
    return (
        <div className="projects-component flex flex-col justify-center items-center animate-fade-in">
            <CardsContainer array={projects} header="Projects" />
        </div>
    );
}
