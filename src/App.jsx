import React from 'react'
import Navbar from './views/Navbar'
import Hero from './views/Hero'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoSec from './views/InfoSec';
import Services from './views/Services';
import Procedure from './views/Procedure';
import Testimonials from './views/Testimonials';
import Featured from './views/Featured';
import Footer from './views/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden font-dosis'>
      <Navbar />
      <Hero />
      <InfoSec />
      <Services />
      <Procedure />
      <Testimonials />
      <Featured />
      <Footer />
    </div>
  )
}

export default App