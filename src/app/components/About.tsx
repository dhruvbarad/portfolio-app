import React from "react";

export default async function About() {
    return (
        <div className="about-component flex flex-col justify-center items-center animate-fade-in">
            <div className="mx-40 mt-2 mb-4 text-center">
                <p className="text-xl text-zinc-400">
                    I am a software engineer with 3+ years of experience building and scaling backend systems for a
                    high-traffic assessment platform that supports over 1,000,000 exams each year. I specialize in
                    modernizing legacy systems, designing RESTful APIs, and creating event-driven solutions on Azure.
                    I have hands-on experience with Spring Boot, Hibernate/JPA, Docker, Kubernetes, and cloud cost
                    optimization, and I enjoy solving complex engineering problems while working closely with agile
                    teams to deliver reliable, production-ready systems.
                </p>
            </div>
        </div>
    );
}
