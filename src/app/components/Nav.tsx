"use client";
import { Link as ScrollingLink } from 'react-scroll';
import React from "react";
import Link from "next/link";

export const Navigation: React.FC = () => {
    const resumeClick = () => {
        const link = document.createElement("a");
        link.href = "docs/resume.pdf";
        link.download = "Dhruv_Barad_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className={`duration-200 border-b bg-zinc-900/0 border-transparent`}>
            <div className="container flex flex-wrap items-center justify-between p-6 mx-auto">
                <div className="flex items-center">
                    <Link href="/" className="duration-200 text-zinc-400 hover:text-zinc-100">
                        <p className="text-4xl text-transparent duration-500 bg-white font-display whitespace-nowrap bg-clip-text">
                            Dhruv Barad
                        </p>
                    </Link>
                </div>
                <div className="flex flex-wrap items-center">
                    <ScrollingLink to="about-component" smooth={true} duration={500}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100 mr-4">About
                    </ScrollingLink>
                    <ScrollingLink to="education-component" smooth={true} duration={500}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100 mr-4">
                        Education
                    </ScrollingLink>
                    <ScrollingLink to="experience-component" smooth={true} duration={500}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100 mr-4">
                        Experience
                    </ScrollingLink>
                    <ScrollingLink to="projects-component" smooth={true} duration={500}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100 mr-4">
                        Projects
                    </ScrollingLink>
                    <ScrollingLink to="contact-component" smooth={true} duration={500}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100 mr-4">
                        Contact
                    </ScrollingLink>
                    <Link href="" onClick={resumeClick}
                        className="text-lg duration-200 text-zinc-400 hover:text-zinc-100">
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    );
};
