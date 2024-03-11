import React from "react";

export default async function About() {
    return (
        <div className="about-component flex flex-col justify-center items-center animate-fade-in">
            <div className="mt-8 text-center">
                <p className="text-xl text-zinc-400">
                    Welcome to my portfolio.
                </p>
                <p className="text-xl text-zinc-400">
                    I am a passionate Computer Science undergraduate with a focus on Software Engineering and Web
                    Development.
                </p>
            </div>
        </div>
    );
}
