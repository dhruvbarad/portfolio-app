import 'animate.css';
import Card from "./Card.tsx";
import {scrollToNextCard, scrollToPreviousCard} from "../../utils/util.ts";
import {useRef} from "react";

export interface CardRowProps {
    cards: any[];
}

const CardRow = ({cards}: CardRowProps) => {
    const rowRef = useRef(null);
    return (
        cards ? (
            <div className="row mb-5">
                <div className="row">
                    <div className="col text-center d-flex justify-content-end align-items-center">
                        <button className="btn float-end" onClick={() => scrollToPreviousCard(rowRef)}>&lt;</button>
                    </div>
                    <div className="col-10">
                        <div className="row flex-nowrap overflow-auto justify-content-center" ref={rowRef}>
                            {cards.map((item, index) => (
                                <Card key={index} imageSrc={item.imageSrc} title={item.title}
                                      description={item.description} imageAlt={item.imageAlt} href={item.href}/>

                            ))}
                        </div>
                    </div>
                    <div className="col text-center d-flex justify-content-start align-items-center">
                        <button className="btn" onClick={() => scrollToNextCard(rowRef)}>&gt;</button>
                    </div>
                </div>
            </div>
        ) : (
            <p className="text-center">Loading data...</p>
        ))
}
export default CardRow;