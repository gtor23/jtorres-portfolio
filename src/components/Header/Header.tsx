import { useState, useEffect, useRef } from "react"

import chicagoSkylineOutline from "../../assets/SVGs/chi_skyline_outline.svg"
import MenuIcon from "./MenuIcon"

export default function Header() {
    const headerRef = useRef<HTMLElement>(null)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const headerClasses = `bg-white py-2 sticky top-0 z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0 shadow-lg"
    }`

    const mobileNavClasses = `mobile-nav ${
        isMobileNavOpen
        ? "fixed top-0 left-0 w-full h-screen bg-white z-50 flex justify-center items-center"
        : "hidden"
    } shadow-lg md:hidden`

    const handleAnchorClick = (targetId: string) => {
        setIsMobileNavOpen(false)
        document.body.classList.remove("overflow-hidden")
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
            setTimeout(() => {
                const newScrollPosition = window.scrollY
                setScrollPosition(newScrollPosition)
                if (newScrollPosition > 50) {
                    setScrollDirection("down")
                } else {
                    setScrollDirection("up")
                }
            }, 300)
        }
    }

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && scrollPosition > 50) {
            setScrollDirection("down")
            } else if (currentScrollY < lastScrollY) {
            setScrollDirection("up")
            }

            setScrollPosition(currentScrollY)
            lastScrollY = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollPosition])

    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isMobileNavOpen])

return (
    <header ref={headerRef} className={headerClasses}>
        <div className="container max-w-full w-full flex justify-between md:justify-around items-center px-3 md:px-0">
            <a href="/" className="headerLogo">
                <img className="w-20 sm:w-28 md:w-32" src={chicagoSkylineOutline} alt="chicago skyline outline"/>
            </a>
            <div className="hamburger-menu block md:hidden">
                <MenuIcon isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
            </div>
            <nav className="desktop-nav hidden md:flex">
                <ul className="flex space-x-8">
                    <li><a href="#about-me" onClick={() => handleAnchorClick("about-me")}>About</a></li>
                    <li><a href="#projects" onClick={() => handleAnchorClick("projects")}>Projects</a></li>
                    <li><a href="#contact-me" onClick={() => handleAnchorClick("contact-me")}>Contact</a></li>
                </ul>
            </nav>
        </div>

        <nav className={mobileNavClasses}>
            <div className="absolute top-4 right-4">
                <MenuIcon isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
            </div>
            <div className="mobile-menu-dropdown h-full w-full">
                <ul className={`dropdown-menu px-6 py-8 flex flex-col gap-2`}>
                    <li><a href="#about-me" className="text-2xl" onClick={() => handleAnchorClick("about-me")}>About</a></li>
                    <li><a href="#projects" className="text-2xl" onClick={() => handleAnchorClick("projects")}>Projects</a></li>
                    <li><a href="#contact-me" className="text-2xl" onClick={() => handleAnchorClick("contact-me")}>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
)
}
