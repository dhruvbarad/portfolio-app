import {Card} from "@/app/components/Card";
import React from "react";
import {CardsProps} from "@/app/components/CardsContainer";

export default async function SkillsContainer(props: CardsProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-8 mb-8">
                <h1 className="text-2xl text-transparent bg-white font-display bg-clip-text">
                    {props.header}
                </h1>
            </div>
            <div className="container gap-4 flex flex-wrap justify-center">
                {props.array.map((item, index) => (
                    <Card key={index}>
                        <div className="pt-4 pb-4 p-6 flex flex-col items-center group">
                            <div className="flex flex-col items-center">
                                <span
                                    className="text-lg font-medium duration-150 text-zinc-200 font-display">{item}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
