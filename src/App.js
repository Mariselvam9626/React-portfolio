import React from 'react'
import "./App.css";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App