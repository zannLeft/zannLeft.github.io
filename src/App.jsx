import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-30xl">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default App;
