import './App.css'
import AnimationBg from './components/AnimationBg'
import About from './sections/About'
import Banner from './sections/Banner'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <AnimationBg></AnimationBg>
    </>
  )
}

export default App
