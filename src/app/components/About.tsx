import React from "react";

export default async function About() {
    return (
        <div className="about-component mb-16 flex flex-col justify-center items-center animate-fade-in">
            <div className="mt-16">
                <p className="text-3xl text-transparent bg-white font-display bg-clip-text">
                    About
                </p>
            </div>
            <hr className="mt-4 w-96"></hr>
        </div>
    );
}
