import {Card} from "@/app/components/Card";
import React from "react";
import {PageProps} from "@/app/components/CardsContainer";

export default async function Skills(props: PageProps) {
    return (
        <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="mt-8 text-center">
                <h1 className="text-2xl text-transparent bg-white font-display bg-clip-text">
                    {props.header}
                </h1>
            </div>
            <div className="mt-8 gap-8 flex flex-wrap justify-center">
                {props.array.map((item) => (
                    <Card key={props.array.indexOf(item) + item.length}>
                        <div className="pt-4 pb-4 p-6 flex flex-col items-center duration-700 group">
                            <div className="flex flex-col items-center">
                                <span
                                    className="text-lg font-medium duration-150 text-zinc-200 group-hover:text-white font-display">{item}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}