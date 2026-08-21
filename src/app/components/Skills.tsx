import SkillsContainer from "@/app/components/SkillsContainer";
import React from "react";

const languages = [
    "Java", "Python", "TypeScript", "JavaScript", "SQL"
];

const backend = [
    "Spring Boot", "Hibernate/JPA", "REST", "Service-Oriented Architecture", "Event-Driven Architecture", "Microservices"
];

const cloudData = [
    "Azure", "Azure Service Bus", "Kubernetes", "Docker", "Terraform", "PostgreSQL", "MySQL", "MongoDB", "NoSQL"
];

const tooling = [
    "Git", "GitHub", "Bitbucket", "JUnit", "Postman", "Maven", "Gradle", "Jira", "Confluence", "Agile", "Scrum"
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
            <SkillsContainer array={backend} header="Backend / Architecture"/>
            <SkillsContainer array={cloudData} header="Cloud / Messaging / Database"/>
            <SkillsContainer array={tooling} header="Tools / Methodology"/>
        </div>
    );
}
