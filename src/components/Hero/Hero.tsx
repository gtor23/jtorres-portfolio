import jerryImage from '../../assets/images/jerry_image.png'

export default function Hero () {
    const imageClassName = "rounded-full opacity-90 duration-75 aspect-[4/4]"
    return (
        <section className="section-hero mb-0 mt-0 h-auto text-center md:mb-24">
            <main className="flex flex-col-reverse items-center justify-center lg:flex-row">
                <div className="heading my-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
                    <h1 className="mb-10 font-monospace text-2xl text-black dark:text-white lg:text-4xl">
                        Hi! My name is <span className='text-red-500'>Jerry</span> and I am a Software Engineer based in Chicago, IL.
                    </h1>
                </div>
                <div className="my-10 flex w-1/2 items-center justify-center">
                    <img
                        className={imageClassName}
                        src={jerryImage} 
                        alt="Jerry Torres"
                        width={450}
                        height={450}
                        loading='eager'
                    />
                </div>
            </main>
        </section>
    )
}
