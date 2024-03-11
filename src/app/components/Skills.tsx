import SkillsContainer from "@/app/components/SkillsContainer";
import React from "react";

const languages = [
    "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "C/C++", "C#", "SQL"
];

const frameworks = [
    "Node.js", "Express.js", "React.js", "Flask", "Next.js", "Bootstrap", "TailwindCSS"
];

const other = [
    "GitHub", "Bitbucket", "Agile/Scrum", "Waterfall", "Firebase", "Docker"
];
export default async function Skills() {
    return (
        <div className="skills-component flex flex-col justify-center items-center animate-fade-in">
            <div className="mt-8 mb-8">
                <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                    Skills
                </h1>
            </div>
            <hr className="mb-4 w-96"></hr>
            <SkillsContainer array={languages} header="Languages"/>
            <SkillsContainer array={frameworks} header="Frameworks/Libraries"/>
            <SkillsContainer array={other} header="Other"/>
        </div>
    );
}
