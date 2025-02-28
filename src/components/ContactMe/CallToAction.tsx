import { Envelope, GitHub, LinkedIn } from '../../assets/SVGs/icons'

export default function CallToAction(){
    return (
        <div className="contact-me-icons flex-col-3 flex gap-8 lg:flex lg:flex-row lg:gap-20">
            <a 
                href="mailto:gerardo.tor23@gmail.com" 
                aria-label="gerardo.tor23@gmail.com" 
                rel="noopener noreferrer" 
                target="_blank"
                className="transition duration-300 hover:opacity-50"
            >
                <Envelope />
            </a>
            <a 
                href='https://github.com/gtor23' 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="github"
                className="transition duration-300 hover:opacity-50"
            >
                <GitHub />
            </a>
            <a 
                href='https://www.linkedin.com/in/gt24/' 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="transition duration-300 hover:opacity-50"
            >
                <LinkedIn />
            </a>
        </div>
    )
}