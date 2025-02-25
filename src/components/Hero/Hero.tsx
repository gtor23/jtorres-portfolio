import jerryImage from "../../assets/images/jerry_image.png"

export default function Hero() {
  const imageClassName = "rounded-full opacity-90 aspect-[4/4]"
  return (
    <section className="section-hero mb-0 mt-0 h-auto text-center">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="heading my-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
          <h1 className="font-monospace text-2xl lg:text-4xl transition duration-300">
            Hi! I'm <span className="text-red-500">Gerardo Torres</span> and I
            am a Software Engineer based in Chicago, IL. You can call me{" "}
            <span className="text-red-500">Jerry</span>!
          </h1>
        </div>
        <div className="my-10 flex w-9/12 xs:w-7/12 sm:w-1/2 items-center justify-center">
          <img
            className={imageClassName}
            src={jerryImage}
            alt="Jerry Torres"
            width={450}
            height={450}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
