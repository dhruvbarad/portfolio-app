import { Briefcase } from "lucide-react";
import React from "react";
import CardsContainer from "@/app/components/CardsContainer";

const experience = [
    {
        icon: <Briefcase size={20} />,
        href: "https://pearson.com",
        label: "Software Development Intern",
        handle: "PearsonVUE",
    },
    {
        icon: <Briefcase size={20} />,
        href: "https://umn.edu",
        label: "Undergraduate TA",
        handle: "University of Minnesota",
    },
];

export default async function Experience() {
    return (
        <div className="experience-component mt-4 mb-16 flex flex-col justify-center items-center animate-fade-in">
            <CardsContainer array={experience} header="Experience" />
        </div>
    );
}
