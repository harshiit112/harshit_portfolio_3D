import React from 'react'
import Navbar from './section/Navbar.jsx';
import Hero from './section/hero.jsx';
import About from './section/About.jsx';

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>

      <Navbar />
      <Hero />
      <About />
      {/* project */}
      {/* experience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App;