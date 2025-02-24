import Card from "./Card"
interface ProjectsProps {
    projectCardsContent: Array<{
        title: string;
        description: string;
        image: string;
        links: {
            github?: string;
            web?: string;
        };
        icons: Array<() => JSX.Element>;
    }>
}

export default function Projects({projectCardsContent}: ProjectsProps) { 
    return (
        <section id="projects" className="section-projects mt-0 flex flex-col items-center justify-center pt-8">
            <div className="projects-heading flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                <h2 className="font-monospace text-2xl text-red-500 lg:text-4xl">
                    Projects
                </h2>
            </div>
            <div className="project-cards-section flex w-full flex-col flex-wrap items-center md:flex-row">
                {projectCardsContent.map((project, index) => {
                    return (
                        <Card 
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            links={project.links}
                            icons={project.icons}
                        />
                    )})
                }
            </div>
        </section>
    )
}