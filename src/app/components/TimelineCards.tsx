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
            <div className="container gap-4 flex flex-col justify-center">
                {props.array.map((item, index) => (
                    <>
                        <Card key={item.description}>
                            <Link href={item.href} target="_blank"
                                  className="p-10 flex flex-col items-center gap-4 group">
                            <span
                                className="relative flex items-center justify-center w-12 h-12 text-sm duration-500 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">{item.icon}
                            </span>{" "}
                                <div className="flex flex-col items-center">
                                    <span
                                    className="text-xl text-center duration-200 text-zinc-200 font-display">{item.name}</span>
                                    <span
                                        className="mt-4 text-lg text-center duration-200 text-zinc-200 font-display">{item.date}</span>
                                    <span
                                        className="mt-4 text-lg text-center duration-200 text-zinc-400">{item.description}</span>
                                </div>
                            </Link>
                        </Card>
                        {index !== props.array.length - 1 && (
                            <div className="mx-auto h-[7rem] w-[0.1rem] text-transparent bg-white"></div>)}
                    </>
                ))}
            </div>
        </div>
    );
}
