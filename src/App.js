import React from 'react';
import Navbar       from './components/Navbar';
import Marquee      from './components/Marquee';
import Hero         from './components/Hero';
import Stats        from './components/Stats';
import Products     from './components/Products';
import Brands       from './components/Brands';
import Testimonials from './components/Testimonials';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Marquee />
      <Hero />
      <Stats />
      <Products />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
