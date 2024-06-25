import React from 'react'
import Header from './container/header/header';
import SectionOne from './pages/sectionOne';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Footer from './pages/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className=''>
      <Header />
      <SectionOne />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App