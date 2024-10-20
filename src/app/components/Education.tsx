import { GraduationCap } from "lucide-react";
import React from "react";
import TimelineCards from "@/app/components/TimelineCards";

const education = [
    {
        icon: <GraduationCap size={20} />,
        href: "https://umn.edu",
        description: "Bachelor of Science in Computer Science.",
        name: "University of Minnesota",
        date: "September 2021 - May 2024"
    }
];

export default async function Education() {
    return (
        <div className="education-component flex flex-col justify-center items-center animate-fade-in">
            <TimelineCards array={education} header="Education" />
        </div>
    );
}
