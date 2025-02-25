import { useState, useEffect, useRef } from "react"

import MenuIcon from "./MenuIcon"

import ChicagoSkyline from "../../assets/SVGs/ChicagoSkyline"

export default function Header() {
    const headerRef = useRef<HTMLElement>(null)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const headerClasses = `bg-white py-2 sticky top-0 z-50 transition-transform duration-300 dark:bg-theme-dark ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0 shadow-lg"}`

    const mobileNavClasses = `mobile-nav shadow-lg md:hidden 
        ${isMobileNavOpen ? "fixed top-0 left-0 w-full h-screen bg-white z-50 flex justify-center items-center" : "hidden"}`

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
                <a href="/" className="headerLogo hover:opacity-50 transition duration-300">
                    <ChicagoSkyline />
                </a>
                <div className="hamburger-menu block md:hidden">
                    <MenuIcon isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
                </div>
                <nav className="desktop-nav hidden md:flex md:flex-row">
                    <ul className="flex h-full items-center space-x-8">
                        <li>
                            <a href="#about-me" className="transition duration-300 hover:opacity-50" onClick={() => handleAnchorClick("about-me")}>
                                About
                            </a>
                        </li>
                        <li >
                            <a href="#projects" className="transition duration-300 hover:opacity-50" onClick={() => handleAnchorClick("projects")}>
                                Projects
                            </a>
                        </li>
                        <li >
                            <a href="#contact-me" className="transition duration-300 hover:opacity-50" onClick={() => handleAnchorClick("contact-me")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>

            <nav className={mobileNavClasses}>
                <div className="absolute top-4 right-4">
                    <MenuIcon isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
                </div>
                <div className="mobile-menu-pop-up h-full w-full dark:bg-theme-dark">
                    <ul className="dropdown-menu px-6 py-8 flex flex-col gap-2">
                        <li><a href="#about-me" className="text-2xl transition duration-300" onClick={() => handleAnchorClick("about-me")}>About</a></li>
                        <li><a href="#projects" className="text-2xl transition duration-300" onClick={() => handleAnchorClick("projects")}>Projects</a></li>
                        <li><a href="#contact-me" className="text-2xl transition duration-300" onClick={() => handleAnchorClick("contact-me")}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
