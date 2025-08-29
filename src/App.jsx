import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  );
};

export default App;
