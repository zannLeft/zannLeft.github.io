import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      title: "What I build",
      items: [
        "Full-stack web apps with clean UI and fast navigation",
        "Interactive 3D scenes and motion-heavy frontends",
        "LLM features like structured generation and RAG-style search",
        "Unity prototypes, especially multiplayer gameplay systems",
      ],
    },
    {
      title: "How I work",
      items: [
        "I prototype quickly, then refactor into reusable components",
        "I care about performance, especially animation and rendering",
        "I like owning features end-to-end: UI, API, data, deployment",
        "Clear communication and steady progress over big rewrites",
      ],
    },
    {
      title: "Background",
      items: [
        "Started with 3D animation and motion design",
        "Moved from games into multiplayer systems",
        "Now focused on web, visuals, and LLM features",
      ],
    },
  ];

  const stats = [
    { label: "Based", value: "Ljubljana, Slovenia" },
    { label: "Focus", value: "Web, 3D, LLM features" },
    { label: "Now", value: "University + personal projects" },
  ];

  const proofPoints = [
    "Co-author · Information Society 2025 paper",
    "COBISS-listed software · IJS Asistent",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative isolate w-full py-28 c-space overflow-hidden"
    >
      <motion.img
        src="/assets/hero-overlay.png"
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full object-cover select-none"
        style={{
          opacity: 0.55,
          transform: "translate3d(0,0,0)",
        }}
        animate={{
          x: [0, 12, 0, -10, 0],
          y: [0, -10, 0, 12, 0],
          rotate: [0, 0.6, 0, -0.6, 0],
          scale: [1.02, 1.03, 1.02],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-widest text-white/60">
            ABOUT
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            A bit about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              me
            </span>
            .
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/70">
            I’m Žan Roštan, a Computer Science student at the University of
            Ljubljana. I started on the creative side with 3D animation, motion
            work, and editing, which got me into tools like Blender and After
            Effects early on.
          </p>

          <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/70">
            That gradually pulled me into game development, first in 2D, then in
            3D, and later into multiplayer systems. Over time, that grew into a
            broader interest in building web apps, interactive visuals, and
            polished user experiences.
          </p>

          <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/70">
            More recently, I worked on LLM integrations at the Jožef Stefan
            Institute, where I contributed to privacy-sensitive healthcare AI
            work. I also co-authored the paper{" "}
            <span className="text-white font-semibold">
              “Evaluating Large Language Models for Privacy-Sensitive Healthcare
              Applications”
            </span>{" "}
            and contributed to IJS Asistent.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/75 backdrop-blur-md"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4"
              >
                <p className="text-sm font-semibold text-white/50">{s.label}</p>
                <p className="mt-1 text-base font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform"
            >
              Let’s talk
            </a>

            <a
              href="/assets/cv.pdf"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <h3 className="text-xl font-extrabold text-white">
                {card.title}
              </h3>

              <ul className="mt-5 space-y-3 text-white/70">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
