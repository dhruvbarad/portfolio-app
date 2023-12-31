"use client";
import React from "react";
import {FolderGit} from "lucide-react";
import CardsContainer from "@/app/components/CardsContainer";
import {Navigation} from "@/app/components/Nav";

const projects = [
    {
        icon: <FolderGit size={20}/>,
        href: "https://comic-app-50173.web.app",
        label: "A React app. More details available on my GitHub.",
        handle: "Marvel & Star Wars Explorer",
    },
    {
        icon: <FolderGit size={20}/>,
        href: "/",
        label: "A NextJS app. More details on my GitHub.",
        handle: "Portfolio website",
    },
];
export default async function Projects() {
    return (
        <div>
            <Navigation/>
            <div className="mt-4 flex flex-col justify-center items-center animate-fade-in">
                <div className="mt-8">
                    <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                        Projects
                    </h1>
                </div>
                <hr className="mt-4 w-96"></hr>
                <CardsContainer array={projects} header="Projects"/>
            </div>
        </div>
    );
}
