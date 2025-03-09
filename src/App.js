import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Spaces from './components/Spaces';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <SplashCursor />
      <Header />
      <main>
        <Hero />
        <Spaces />
        
        <Portfolio />
        <Resume />
        <Tools />
        <Experience />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 