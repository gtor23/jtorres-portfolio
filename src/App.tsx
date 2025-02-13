import './App.css'
import { Hero, AboutMe } from './index'
import { appContent } from './content/content';

export default function App() {
  const { aboutMeContent } = appContent

  return (
    <>
      <Hero />
      <AboutMe aboutMeContent={aboutMeContent}/>
    </>
  )
}
