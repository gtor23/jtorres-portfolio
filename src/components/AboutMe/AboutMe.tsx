interface AboutMeProps {
    aboutMeContent: string;
}

export default function AboutMe({ aboutMeContent }: AboutMeProps) {
    return (
        <section id="about-me" className="section-about-me mt-0 flex flex-col items-center justify-center md:mt-10">
            <div className="about-me-heading flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                <h2 className="font-monospace text-2xl text-red-500 lg:text-4xl">
                    About Me
                </h2>
            </div>
            <div className="about-me-text whitespace-pre-line">
                {aboutMeContent}
            </div>
        </section>
    )
}