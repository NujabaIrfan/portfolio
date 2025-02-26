import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import Banner from './components/banner';
import Footer from './components/footer'
import 'animate.css';
import './theme.css';

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;