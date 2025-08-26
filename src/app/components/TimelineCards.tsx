import Link from "next/link";
import React from "react";
import {Card} from "@/app/components/Card";
import {CardsProps} from "@/app/components/CardsContainer";

export default function TimelineCards(props: CardsProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-8 mb-8">
                <h1 className="text-3xl text-transparent bg-white font-display bg-clip-text">
                    {props.header}
                </h1>
            </div>
            <hr className="mb-16 w-96"></hr>
            <div
                className="container flex flex-row gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                {props.array.map((item, index) => (
                    <div key={index} className="flex flex-row">
                        <Card>
                            <Link href={item.href} target="_blank"
                                  className="p-10 flex flex-row items-center gap-4 group min-w-[350px]">
                                <span
                                    className="relative flex items-center justify-center w-12 h-12 text-sm duration-500 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">{item.icon}
                                </span>
                                <div className="flex flex-col items-start">
                                    <span
                                        className="text-xl text-left duration-200 text-zinc-200 font-display">{item.name}</span>
                                    <span
                                        className="mt-4 text-lg text-left duration-200 text-zinc-200 font-display">{item.date}</span>
                                    <span
                                        className="mt-4 text-lg text-left duration-200 text-zinc-400">{item.description}</span>
                                </div>
                            </Link>
                        </Card>
                        {index !== props.array.length - 1 && (
                            <div className="h-[0.1rem] w-[7rem] mx-4 text-transparent bg-white self-center"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
