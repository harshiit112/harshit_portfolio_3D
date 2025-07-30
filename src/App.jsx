import React from 'react'
import Navbar from './section/Navbar.jsx';
import Hero from './section/Hero.jsx';
import About from './section/About.jsx';
import Projects from './section/Projects.jsx';
import Experiences from './section/Experiences.jsx';
import Testimonial from './section/Testimonial.jsx';
import Contact from './section/Contact.jsx';
import Footer from './section/Footer.jsx';

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experiences /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App;