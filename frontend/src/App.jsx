import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Technologies from './components/Technologies';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <div className="portfolio-bg">
        <div className="main"></div>
        <NavBar />
        <Banner />
        <About/>
        <Technologies />
        <Project />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
