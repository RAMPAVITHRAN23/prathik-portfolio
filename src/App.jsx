import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Footer/>
    </>
  );
};

export default App;
