import React from "react";
import {Navigation} from "@/app/components/nav";

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <Navigation/>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <h1 className="z-10 text-4xl text-transparent duration-500 bg-white font-display bg-clip-text">
                Hey! I'm Dhruv
            </h1>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-center">
                <h1 className="text-lg text-zinc-500 ">
                    I am an undergraduate at the University of Minnesota
                </h1>
            </div>
        </div>
    );
}
