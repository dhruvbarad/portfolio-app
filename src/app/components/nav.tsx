"use client";
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {FileText} from "lucide-react";

export const Navigation: React.FC = () => {
    const resumeClick = () => {
        const link = document.createElement("a");
        link.href = "docs/resume.pdf";
        link.download = "Dhruv_Barad_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500  border-zinc-800 "}`}>
                <div className="container flex flex-row items-center justify-between p-6 mx-auto">
                    <div className="flex items-center">
                        <Image
                            src="/images/me.jpeg"
                            alt="Logo"
                            width={120}
                            height={100}
                            className="rounded-full"
                        />
                        <Link href="/" className="duration-200 text-zinc-400 hover:text-zinc-100">
                            <h2 className="pl-4 z-10 text-xl text-transparent duration-500 bg-white font-display whitespace-nowrap bg-clip-text">
                                Dhruv Barad
                            </h2>
                        </Link>

                    </div>
                    <div className="flex justify-between gap-8">
                        <Link href="/" className="duration-200 text-zinc-400 hover:text-zinc-100">
                            About
                        </Link>
                        <Link href="/projects" className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Projects
                        </Link>
                        <Link href="/experience" className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Experience
                        </Link>
                        <Link href="/contact" className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Contact
                        </Link>
                        <FileText onClick={resumeClick} size={20}
                                  className="duration-200 text-zinc-400 hover:text-zinc-100"/>
                    </div>
                </div>
            </div>
        </header>
    );
};
