"use client";
import React from "react";
import {FolderGit} from "lucide-react";
import Page from "@/app/components/example";

const projects = [
    {
        icon: <FolderGit size={20}/>,
        href: "https://comic-app-50173.web.app",
        label: "A react app. More details available on my GitHub",
        handle: "Marvel & Star Wars Explorer",
    },
];
export default async function Example() {
    return (
        <Page array={projects} header="Projects"/>
    );
}
