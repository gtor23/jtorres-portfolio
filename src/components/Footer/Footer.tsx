import ChicagoStars from "../../assets/SVGs/ChicagoStars"

export default function Footer() {
    return (
        <footer className="footer flex justify-center pt-8">
            <div className='flex flex-col justify-center items-center'>
                <p className="footer-text text-base transition duration-300">
                    Developed by {''} 
                    <a 
                        href='https://www.linkedin.com/in/gt24/' 
                        target="_blank" 
                        rel="noopener" 
                        aria-label="linkedin"
                        className="transition duration-300 hover:opacity-50"
                    >
                        Jerry Torres
                    </a>
                </p>
                <ChicagoStars />
            </div>
        </footer>
    )
}