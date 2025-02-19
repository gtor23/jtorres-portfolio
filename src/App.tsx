import "./App.css"
import { Header, Hero, AboutMe, ContactMe, Projects } from "./index"
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
    </>
  )
}

export default App
