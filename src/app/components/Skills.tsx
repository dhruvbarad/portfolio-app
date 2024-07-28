import SkillsContainer from "@/app/components/SkillsContainer";
import React from "react";

const languages = [
    "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "C/C++", "C#"
];

const frameworks = [
    "Node.js", "Express.js", "React.js", "Bootstrap", "TailwindCSS", "Next.js", "Flask", "Numpy", "Pandas", "PySpark", "Gradle"
];

const databases = [
    "SQL", "NoSQL", "PostgreSQL", "MySQL", "MongoDB", "Azure", "Firebase"
]

const other = [
    "GitHub", "Bitbucket", "TeamCity", "Agile", "Scrum", "Waterfall", "JUnit", "Google Testing"
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
            <SkillsContainer array={databases} header="Database/Cloud"/>
            <SkillsContainer array={other} header="Other"/>
        </div>
    );
}
