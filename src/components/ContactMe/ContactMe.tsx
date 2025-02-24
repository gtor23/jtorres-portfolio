import CallToAction from "./CallToAction"

export default function ContactMe() {
    return (
        <section
            data-testid="contact"
            id="contact-me"
            className="section-contact-me mt-0 flex flex-col items-center justify-center gap-y-2 lg:pt-8"
        >
            <div className="contact-me-heading flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                <h2 className="font-monospace text-2xl text-red-500 lg:text-4xl">Contact Me</h2>
            </div>
            <CallToAction />
            <div className="contact-me-direct-email flex flex-col justify-center items-center">
                <h3 className="font-monospace text-xl transition duration-300 pb-1">Email me anytime!</h3>
                <a
                    href="mailto:gerardo.tor23@gmail.com"
                    aria-label="gerardo.tor23@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition duration-300 hover:opacity-60 bg-yellow-400 text-blue-700 py-1 px-3 rounded-2xl"
                >
                    gerardo.tor23@gmail.com
                </a>
            </div>
        </section>
    )
}