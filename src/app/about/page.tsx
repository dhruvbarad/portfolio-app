"use client";
import React from "react";
import {Navigation} from "@/app/components/Nav";
import CardsContainer from "@/app/components/CardsContainer";
import {GraduationCap} from "lucide-react";
import Skills from "@/app/components/Skills";

const languages = [
    "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "C/C++", "C#", "SQL"
];

const frameworks = [
    "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "TailwindCSS"
];

const other = [
    "GitHub", "Bitbucket", "Agile/Scrum", "Waterfall", "Firebase", "Docker"
];

const education = [
    {
        icon: <GraduationCap size={20}/>,
        href: "https://umn.edu",
        label: "Majoring in Computer Science. Graduating May 2024",
        handle: "University of Minnesota",
    },
    {
        icon: <GraduationCap size={20}/>,
        href: "https://nhcc.edu",
        label: "Finished some general education courses and some CS courses.",
        handle: "North Hennepin Community College",
    },
];

export default async function About() {
    return (
        <div>
            <Navigation/>
            <div className="mt-4 flex flex-col justify-center items-center animate-fade-in">
                <div className="mt-8">
                    <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                        Education
                    </h1>
                </div>
                <hr className="mt-4 w-96"></hr>
                <CardsContainer array={education} header="Hello"/>
                <div className="mt-8">
                    <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                        Skills
                    </h1>
                </div>
                <hr className="mt-4 w-96"></hr>
                <Skills array={languages} header="Languages"/>
                <Skills array={frameworks} header="Frameworks/Libraries"/>
                <Skills array={other} header="Other"/>
            </div>
        </div>
    );
}
