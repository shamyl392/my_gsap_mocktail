import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mocktails from './components/Mocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mocktails />
      <About />
      <Art />
      <Menu />
    </main>  
  )
}

export default App