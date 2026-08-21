import {Briefcase} from "lucide-react";
import React from "react";
import TimelineCards from "@/app/components/TimelineCards";

const experience = [
    {
        icon: <Briefcase size={20}/>,
        href: "https://pearsonvue.com",
        description: "Software Engineer II",
        name: "Pearson",
        date: "August 2026 - Present"
    },
    {
        icon: <Briefcase size={20}/>,
        href: "https://pearsonvue.com",
        description: "Software Engineer I",
        name: "Pearson",
        date: "January 2025 - August 2026"
    },
    {
        icon: <Briefcase size={20}/>,
        href: "https://pearsonvue.com",
        description: "Software Engineer Intern",
        name: "Pearson",
        date: "June 2023 - January 2025"
    },
    {
        icon: <Briefcase size={20}/>,
        href: "https://umn.edu",
        description: "Undergraduate TA",
        name: "University of Minnesota",
        date: "January 2023 - May 2023"
    },
];

export default async function Experience() {
    return (
        <div className="experience-component flex flex-col justify-center items-center animate-fade-in">
            <TimelineCards array={experience} header="Experience"/>
        </div>
    );
}
