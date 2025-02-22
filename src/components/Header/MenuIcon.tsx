import { useState, useEffect } from "react"

interface MenuIconProps {
  isMobileNavOpen: boolean
  setIsMobileNavOpen: (isOpen: boolean) => void
}

export default function MenuIcon({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: MenuIconProps) {
  const [isOpen, setIsOpen] = useState(isMobileNavOpen || false)

  useEffect(() => {
    setIsOpen(isMobileNavOpen)
  }, [isMobileNavOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
        setIsMobileNavOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, setIsMobileNavOpen])

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
    setIsMobileNavOpen(!isOpen)
  }

  return (
    <div
      id="toggleMenu"
      className={`grid place-content-center w-8 h-8 p-1 mx-auto ${
        isOpen ? "open" : ""
      }`}
      onClick={handleToggleMenu}
    >
      <div
        className={`w-4 h-0.5 bg-black rounded-full transition-all duration-150 
                ${isOpen && "h-0 bg-white"} 
                before:content-[''] 
                before:absolute 
                before:w-4 
                before:h-0.5 
                before:bg-black 
                before:rounded-full 
                before:transition-all 
                before:duration-150 
                ${isOpen && "before:translate-y-0 before:rotate-45"} 
                ${!isOpen && "before:-translate-y-1"} 
                after:content-[''] 
                after:absolute 
                after:w-4 
                after:h-0.5 
                after:bg-black 
                after:rounded-full 
                after:transition-all 
                after:duration-150 
                ${isOpen && "after:translate-y-0 after:-rotate-45"} 
                ${!isOpen && "after:translate-y-1"} 
            `}
      />
    </div>
  )
}
