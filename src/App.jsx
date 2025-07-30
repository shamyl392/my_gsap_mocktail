import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mocktails from './components/Mocktails';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mocktails />
      <About />
    </main>  
  )
}

export default App