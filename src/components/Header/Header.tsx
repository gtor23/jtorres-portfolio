import { useState } from 'react'

import chicagoSkylineOutline from '../../assets/SVGs/chi_skyline_outline.svg'
import MenuIcon from './MenuIcon'

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen)

    return (
        <header className="bg-white shadow-lg py-2 sticky top-0 z-50">
            <div className='container max-w-full w-full flex justify-between md:justify-around items-center px-3 md:px-0'>
                <a className="headerLogo">
                    <img className="w-20 sm:w-28 md:w-32"src={chicagoSkylineOutline} alt='chicago skyline outline'/>
                </a>                
                    <div className='hamburger-menu block md:hidden' onClick={toggleMobileNav}> 
                        <MenuIcon />
                    </div>
                
                <nav className="desktop-nav hidden md:flex">
                    <ul className="flex space-x-8">
                        <li><a>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>    
            </div>
            <nav className={`mobile-nav ${isMobileNavOpen ?  '' : 'hidden'} shadow-lg  md:hidden absolute top-full left-0 w-full border-t border-gray-200 bg-inherit`}>
                    <div className='mobile-menu-dropdown'>
                        <ul className={`dropdown-menu px-4 py-2`}>
                            <li><a>About</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
            </nav>
        </header>
    )
}