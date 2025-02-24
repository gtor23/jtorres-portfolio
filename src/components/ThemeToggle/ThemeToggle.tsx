import { useState, useEffect } from "react"
import { Moon, Sun } from "../../assets/SVGs/icons"

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkTheme])

  return (
    <button
      className="theme-toggle rounded-full p-1 transition duration-300 hover:opacity-50 fixed bottom-2 right-2 md:bottom-4 md:right-4 z-50 bg-blue-400 bg-opacity-40"
      aria-label="Toggle Theme"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  )
}
