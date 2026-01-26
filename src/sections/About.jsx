import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-32 min-h-screen w-full flex items-start justify-center c-space py-24"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900">
          About
        </h2>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-700 max-w-3xl">
          This is a minimal placeholder section so you can test scrolling and
          layout. Replace this with your real content later.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-neutral-900">Section</h3>
            <p className="mt-2 text-neutral-700">
              Simple card layout for spacing.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-neutral-900">Scroll</h3>
            <p className="mt-2 text-neutral-700">
              Enough height to test smooth scrolling.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-neutral-900">Replace</h3>
            <p className="mt-2 text-neutral-700">
              Swap this out when you redesign.
            </p>
          </div>
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
};

export default About;
