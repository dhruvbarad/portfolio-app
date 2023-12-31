export interface CardProps {
    imageSrc: string,
    imageAlt: string,
    title: string,
    description: string,
    href: string
}

const Card = ({imageSrc, imageAlt, title, description, href}: CardProps) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={imageSrc} className="card-img-top" alt={imageAlt}></img>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <a type='button' className="btn" target="_blank" href={href}>Click for details</a>
            </div>
        </div>
    )

};
export default Card;