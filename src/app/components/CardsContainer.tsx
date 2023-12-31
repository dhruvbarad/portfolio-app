import Link from "next/link";
import React from "react";
import {Card} from "@/app/components/Card";

export interface PageProps {
    array: any[];
    header: string;
}

export default function CardsContainer(props: PageProps) {
    return (
        <div className="mt-16 flex flex-col items-center justify-center">
            <div className="container gap-8 flex flex-wrap justify-center animate-fade-in">
                {props.array.map((item) => (
                    <Card key={item.href}>
                        <Link href={item.href} target="_blank"
                              className="p-20 flex flex-col items-center gap-4 duration-700 group">
                                <span
                                    className="relative flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">{item.icon}
								</span>{" "}
                            <div className="flex flex-col items-center">
                                    <span
                                        className="text-xl max-w-72 text-center font-medium duration-150 text-zinc-200 group-hover:text-white font-display">{item.handle}</span>
                                <span
                                    className="mt-4 max-w-64 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">{item.label}</span>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
