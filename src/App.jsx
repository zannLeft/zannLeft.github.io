import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default App;
