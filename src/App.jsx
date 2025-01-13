import Floatingbar from "./components/Floatingbar"
import { ThemeProvider } from "./Context/Theme"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import FAQ from "./Sections/FAQ"
import Footer from "./Sections/Footer"
import Home from "./Sections/Home"
import Navbar from './Sections/Navbar'
import Portfolio from "./Sections/Portfolio"
import Skill from './Sections/Skill'
import Testimonial from "./Sections/Testimonial"



function App() {
  return (
    <ThemeProvider>
    <Navbar/>
     <Home/>
     <Floatingbar/>
     <About/>
     <Skill/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <FAQ/>
     <Footer/>
    </ThemeProvider>
  )
}

export default App
