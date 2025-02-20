import CallToAction from "./CallToAction"

export default function ContactMe() {
    return (
        <section
            data-testid="contact"
            id="contact"
            className="section-contact-me mt-0 flex flex-col items-center justify-center gap-y-2"
        >
            <div className="contact-me-heading flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                <h2 className="font-monospace text-2xl text-red-500 lg:text-4xl"> Contact Me </h2>
            </div>
            <CallToAction />
            <div className="contact-me-direct-email flex flex-col justify-center items-center">
                <p className="text-black dark:text-white">Email me anytime!</p>
                <a
                    href="mailto:gerardo.tor23@gmail.com"
                    aria-label="gerardo.tor23@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex transition duration-300 text-black hover:opacity-50 hover:underline dark:text-white"
                >
                    gerardo.tor23@gmail.com
                </a>
            </div>
        </section>
    )
}
