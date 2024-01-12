import SkillsContainer from "@/app/components/SkillsContainer";

const languages = [
    "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "C/C++", "C#", "SQL"
];

const frameworks = [
    "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "TailwindCSS"
];

const other = [
    "GitHub", "Bitbucket", "Agile/Scrum", "Waterfall", "Firebase", "Docker"
];
export default async function Skills() {
    return (
        <div className="skills-component mt-4 mb-16 flex flex-col justify-center items-center animate-fade-in">
            <div className="mt-16">
                <p className="text-3xl text-transparent bg-white font-display bg-clip-text">
                    Skills
                </p>
            </div>
            <hr className="mt-4 w-96"></hr>
            <SkillsContainer array={languages} header="Languages" />
            <SkillsContainer array={frameworks} header="Frameworks/Libraries" />
            <SkillsContainer array={other} header="Other" />
        </div>
    );
}
