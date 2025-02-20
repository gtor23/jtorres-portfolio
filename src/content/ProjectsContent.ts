import { arcade, artCollector, calculator, fitnessTracker, retroDraw, spadeStation,stockHeightCalculator, strangerThings, toolSearchGUI } from "../assets/images/projects"
import { ExpressIcon, HTMLIcon, JSIcon, NodeIcon, PSQLIcon, PythonIcon, ReactIcon, CSSIcon } from "../assets/SVGs/icons"

export const projectCardsContent = [
    {
        title: "Spade Station",
        description: "Modern retail platform focused on preserving and collecting retro video games",
        image: spadeStation,
        links: {
            github: "https://github.com/gtor23/SpadeStation",
            web: ""
        },
        icons: [ReactIcon, JSIcon, CSSIcon, NodeIcon, PSQLIcon, ExpressIcon]
    },
    {
        title: "Fitness Tracker",
        description: "Web application designed to follow routines and activities to achieve fitness goals",
        image: fitnessTracker,
        links: {
            github: "https://github.com/gtor23/fitness_tracker_front_end",
            web: "https://festive-clarke-e2e7b8.netlify.app/#/"
        },
        icons: [ReactIcon, JSIcon, CSSIcon]
    },
    {
        title: "Stranger's Things",
        description: "Online marketplace for users to list their items for sale",
        image: strangerThings,
        links: {
            github: "https://github.com/gtor23/StrangerThingsApp",
            web: "https://sleepy-kepler-cda749.netlify.app/#/"
        },
        icons: [ReactIcon, JSIcon, CSSIcon]
    },
    {
        title: "Arcade",
        description: "Web arcade application featuring Tic-Tac-Toe and Whac-A-Mole",
        image: arcade,
        links: {
            github: "https://github.com/gtor23/Arcade",
            web: "https://happy-neumann-2f47d7.netlify.app/"
        },
        icons: [JSIcon, HTMLIcon, CSSIcon]
    },
    {
        title: "Stock Height Calculator",
        description: "GUI application that calculates the aluminum stock size and required machining parallels",
        image: stockHeightCalculator,
        links: {
            github: "https://github.com/gtor23/Stock_Height_Calc",
            web: ""
        },
        icons: [PythonIcon]
    },
    {
        title: "Tool Search GUI",
        description: "Desktop application for finding tool information in plant facility",
        image: toolSearchGUI,
        links: {
            github: "https://github.com/gtor23/Tool_Search_GUI_App",
            web: ""
        },
        icons: [PythonIcon]
    },
    {
        title: "Art Collector",
        description: "Search engine for The Harvard Art Museums",
        image: artCollector,
        links: {
            github: "https://github.com/gtor23/Art_Collector",
            web: "https://vigilant-feynman-f63d82.netlify.app/"
        },
        icons: [JSIcon, HTMLIcon, CSSIcon]
    },
    {
        title: "Calculator",
        description: "Classic calculator that handles basic math operations",
        image: calculator,
        links: {
            github: "https://github.com/gtor23/Calculator",
            web: "https://eager-roentgen-ca2b94.netlify.app/"
        },
        icons: [JSIcon, HTMLIcon, CSSIcon]
    },
    {
        title: "Retro Draw",
        description: "Pixel-based drawing application",
        image: retroDraw,
        links: {
            github: "https://github.com/gtor23/Retro_Draw",
            web: "https://compassionate-wright-7d3fd5.netlify.app/"
        },
        icons: [JSIcon, HTMLIcon, CSSIcon]
    }
]