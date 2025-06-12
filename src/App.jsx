import './styles/App.scss'
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './pages/Skills';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="font-sans scroll-smooth transition-colors duration-500 bg-gray-900 text-white">
          <Home id="home"/>
          <Projects id="projects" />
          <Skills id="skills"/>
          <About id="about"/>
          <Contact id="contact"/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
