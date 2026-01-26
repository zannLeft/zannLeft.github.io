import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PageOverlay from "./components/PageOverlay";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Fixed overlay that stays pinned to the viewport */}
      <PageOverlay
        src="/assets/hero-overlay.png"
        opacity={0.6}
        blendMode="screen"
      />

      {/* All page content above the overlay */}
      <div className="relative z-10">
        <Hero />
        <div className="mx-auto max-w-7xl">
          <About />
        </div>
      </div>
    </>
  );
};

export default App;
