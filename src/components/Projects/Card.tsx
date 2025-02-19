import { GitHubLink, Link } from "../../assets/SVGs/icons";
interface CardProps { 
    title: string;
    description: string;
    image: string;
    links: {
        github?: string;
        web?: string;
    }
    icons: Array<() => JSX.Element>;
}

export default function Card(props: CardProps) {

    const { title, description, image, links: { github='', web='' }, icons } = props

    return (
        <div className="project-card-container w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="grid grid-rows-[auto_1fr_auto_auto] h-[500px] rounded-xl bg-white/90 p-3 shadow-lg border-solid border-[1px] border-gray-200">
                <div className="project-image-container relative overflow-hidden rounded-xl w-full h-48 border-solid border-[1px] border-black">
                    <img
                        className="object-contain w-full h-full"
                        src={image}
                        alt={'image'}
                        loading="eager"
                    />
                </div>
                <div className='project-info-container mt-1 flex flex-col p-2'>
                    <h3 className="text-xl text-black lg:text-2xl">{title}</h3>
                    <p className="text-md h-full text-black/70">{description}</p>
                </div>
                <div className="project-icons-container flex gap-x-2 p-2">
                    {icons.map((Icon, index) => {
                        return (
                            <Icon key={index} />
                        )})
                    }
                </div>
                <div className='project-links-container flex justify-between p-2'>
                    {github && (
                        <a 
                            className="transition-opacity duration-300 hover:opacity-50"
                            href={github} 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            <GitHubLink />
                        </a>
                    )}
                    {web && (
                        <a
                            className="transition-opacity duration-300 hover:opacity-50"
                            href={web} 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            <Link />
                        </a>
                    )}
                </div>
            </div>
        </div>
        
    )
}