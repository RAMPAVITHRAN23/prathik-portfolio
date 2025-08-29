import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
    </>
  );
};

export default App;
