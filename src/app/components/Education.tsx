import { GraduationCap } from "lucide-react";
import React from "react";
import CardsContainer from "@/app/components/CardsContainer";

const education = [
    {
        icon: <GraduationCap size={20} />,
        href: "https://umn.edu",
        label: "Majoring in Computer Science. Graduating May 2024",
        handle: "University of Minnesota",
    },
    {
        icon: <GraduationCap size={20} />,
        href: "https://nhcc.edu",
        label: "Finished some general education courses and some CS courses.",
        handle: "North Hennepin Community College",
    },
];

export default async function Education() {
    return (
        <div className="education-component mt-4 mb-16 flex flex-col justify-center items-center animate-fade-in">
            <CardsContainer array={education} header="Education" />
        </div>
    );
}
