import {Navigation} from "@/src/app/components/nav";
import {Card} from "@/src/app/components/card";
import Link from "next/link";
import React from "react";

export interface PageProps {
    array: any[];
    header: string;
}

export default function Example(props: PageProps) {
    return (
        <div className="relative pt-8 pb-16">
            <Navigation/>
            <div className="pt-20 mx-auto space-y-8 max-w-7xl md:space-y-16 md:pt-24 lg:pt-32 animate-fade-in">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        {props.header}
                    </h2>
                </div>
            </div>
            <div className="pt-10 container flex justify-center mx-auto animate-fade-in">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    {props.array.map((item) => (
                        <Card key={item.href}>
                            <Link href={item.href} target="_blank"
                                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
                                <span
                                    className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">{item.icon}
								</span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span
                                        className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">{item.handle}</span>
                                    <span
                                        className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">{item.label}</span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
