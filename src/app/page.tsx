import React from "react";
import {Navigation} from "src/app/components/nav";

export default function Home() {
    return (
        <div>
            <Navigation/>
            <div className="flex flex-col items-center justify-center">
                <div
                    className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
                <h1 className="text-4xl text-transparent duration-500 bg-white font-display bg-clip-text animate-title">
                    Hello! I'm Dhruv
                </h1>
                <div
                    className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
                <div className="mt-8 text-center">
                    <h1 className="text-xl text-zinc-500 animate-fade-in">
                        Welcome to my portfolio.
                    </h1>
                    <p className="text-lg text-zinc-500 animate-fade-in">
                        I am a passionate Computer Science undergraduate with a focus on Software Engineering and Web
                        Development.
                    </p>
                </div>
            </div>
        </div>
    );
}
