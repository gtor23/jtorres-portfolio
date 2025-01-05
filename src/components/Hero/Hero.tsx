import jerryImage from '../../assets/images/jerry_image.png'

export default function Hero () {
    const imageClassName = "rounded-full opacity-90 shadow-orange/50 duration-75 hover:scale-105 hover:transform hover:opacity-50 hover:shadow-2xl aspect-[4/4]"
    return (
        <section className="section-hero mb-0 mt-0 h-auto text-center md:mb-24">
            <main className="flex flex-col-reverse items-center justify-center lg:flex-row">
                <div className="heading my-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
                    <h1 className="mb-10 font-monospace text-2xl text-black dark:text-white lg:text-4xl">
                        Hi! I'm <span className='text-red-500'>Gerardo Torres</span> and I am a Software Engineer based in Chicago, IL. You can call me <span className='text-red-500'>Jerry</span>!
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
