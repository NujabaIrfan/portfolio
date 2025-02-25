import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Banner  from "./components/banner"
import 'animate.css';
import './theme.css';


function App() {
  return (
    <div className="dark:bg-gray-900">
      <Header />\
      <Banner/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;