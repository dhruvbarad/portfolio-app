import CardRow from "./CardRow.tsx";

const Projects = () => {
    const cards = [
        {
            imageSrc: '/dist/marvel.png',
            imageAlt: 'Marvel & Star Wars',
            title: 'Marvel & Star Wars Explorer',
            description: 'A react app. More details available on my GitHub',
            href: 'https://comic-app-50173.web.app'
        }]
    return (
        <div className="container-fluid projects">
            <CardRow cards={cards}/>
        </div>
    )
}

export default Projects;