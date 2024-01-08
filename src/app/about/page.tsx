"use client";
import React from "react";
import {Navigation} from "@/app/components/nav";
import Skills from "@/app/components/skills";

const languages = [
    "Java", "Python", "C/C++", "JavaScript", "TypeScript", "C#"
];

const frameworks = [
    "React.js", "Next.js"
];

export default async function About() {
    return (
        <div>
            <Navigation/>
            <Skills array={languages} header="Languages"/>
            <Skills array={frameworks} header="Frameworks"/>
            <Skills array={languages} header="Languages"/>
        </div>
    );
}
