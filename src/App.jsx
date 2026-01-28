import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </>
  );
};

export default App;
