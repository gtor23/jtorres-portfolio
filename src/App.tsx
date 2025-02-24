import { Header, Hero, AboutMe, ContactMe, Projects, ThemeToggle } from "./index"
import { appContent } from "./content"

function App() {
    const { aboutMeContent, projectCardsContent } = appContent

    return (
    <>
        <Header />
        <main>
            <Hero />
            <AboutMe aboutMeContent={aboutMeContent} />
            <Projects projectCardsContent={projectCardsContent}/>
            <ContactMe />
            <ThemeToggle />
        </main>
    </>
    )
}

export default App
