import { Header, Hero, AboutMe, ContactMe, Projects, Footer } from "./index"
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
        </main>
        <Footer />
    </>
    )
}

export default App
