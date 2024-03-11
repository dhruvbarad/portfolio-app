import React from "react";
import {Navigation} from "@/app/components/Nav";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";

export default function Home() {
    return (
        <>
            <Navigation />
            <div className="mt-16 flex flex-col items-center justify-center">
                <div
                    className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <h1 className="text-3xl text-transparent duration-500 bg-white font-display bg-clip-text animate-title">
                    Hello! I'm Dhruv
                </h1>
                <div
                    className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}
