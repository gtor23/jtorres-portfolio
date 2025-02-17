import './App.css'
import { Header, Hero, AboutMe, ContactMe} from './index'
import { appContent } from './content/content'

function App() {
  const {aboutMeContent} = appContent

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe aboutMeContent={aboutMeContent}/>
        <ContactMe />
      </main>
    </>
  )
}

export default App
