import './App.css'
import AnimationBg from './components/AnimationBg'
import Background from './components/Background'
import About from './sections/About'
import Banner from './sections/Banner'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      {/* <Background></Background> */}
      <div className="fixed h-screen w-[100%] top-0 -z-10">
      <AnimationBg></AnimationBg>
      </div>
    </div>
  )
}

export default App
