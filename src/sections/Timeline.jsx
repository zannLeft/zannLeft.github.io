import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = () => {
  const wrapRef = useRef(null);

  // Progress for this section only
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start center", "end center"],
  });

  const railFill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const items = [
    {
      date: "2026 — Present",
      title: "Freelance / Personal Projects",
      subtitle: "Building interactive web experiences",
      points: [
        "Shipped multiple portfolio + product-style builds with React + Tailwind.",
        "Focused on smooth motion, performance, and clean UI systems.",
        "Explored 3D scenes + animation pipelines with R3F.",
      ],
    },
    {
      date: "2025",
      title: "School / Practice Projects",
      subtitle: "Learning by building",
      points: [
        "Built web apps and small games to sharpen fundamentals.",
        "Learned modern frontend patterns, component architecture, and tooling.",
        "Worked with APIs, auth, storage, and deployment basics.",
      ],
    },
    {
      date: "2024",
      title: "Started Programming Seriously",
      subtitle: "Found the craft",
      points: [
        "Got comfortable with JavaScript and the frontend workflow.",
        "Built first real projects and iterated rapidly on UI/UX.",
        "Developed a strong interest in animation + interactive design.",
      ],
    },
  ];

  const skillGroups = [
    { title: "Frontend", chips: ["React", "TypeScript", "Tailwind", "Vite"] },
    {
      title: "Motion / 3D",
      chips: ["Framer Motion", "Three.js", "R3F", "GLTF"],
    },
    { title: "Backend", chips: ["Node.js", "APIs", "Postgres", "Docker"] },
    { title: "AI", chips: ["Prompting", "Tools", "Python", "RAG basics"] },
  ];

  // Beige accent used ONLY for the playing cards
  const BEIGE_ACCENT = "from-[#f3e7d3] to-[#caa377]";

  const strengthCards = [
    {
      rank: "A",
      suit: "♠",
      title: "Performance-minded",
      text: "I optimize rendering + interaction so things feel smooth and intentional.",
    },
    {
      rank: "K",
      suit: "♦",
      title: "Polished UI",
      text: "Spacing, typography, micro-interactions — the details that make it feel premium.",
    },
    {
      rank: "Q",
      suit: "♥",
      title: "Fast iteration",
      text: "I prototype quickly, then refine into clean, reusable components.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const Glass = ({ className = "", children }) => (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md",
        "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );

  const PlayingCard = ({ rank, suit, title, text }) => {
    const cornerColor = "text-[#f3e7d3]/90"; // beige corner rank/suit

    return (
      <motion.div
        whileHover={{ y: -6, rotateZ: -0.6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative overflow-hidden rounded-[26px] border border-white/12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[0_25px_90px_rgba(0,0,0,0.45)]"
      >
        {/* soft sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </div>

        {/* beige accent edge */}
        <div
          className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${BEIGE_ACCENT}`}
        />

        {/* corner rank/suit */}
        <div className="absolute left-4 top-4 leading-none">
          <div className={`font-extrabold text-lg ${cornerColor}`}>{rank}</div>
          <div className={`text-lg ${cornerColor}`}>{suit}</div>
        </div>

        {/* mirrored corner */}
        <div className="absolute right-4 bottom-4 leading-none rotate-180">
          <div className={`font-extrabold text-lg ${cornerColor}`}>{rank}</div>
          <div className={`text-lg ${cornerColor}`}>{suit}</div>
        </div>

        {/* center content */}
        <div className="relative p-6 pt-14">
          {/* strength pill */}
          <div className="absolute left-20 top-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
              <span
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${BEIGE_ACCENT}`}
              />
              Strength
            </div>
          </div>

          <h4 className="mt-4 text-xl font-extrabold text-white">{title}</h4>
          <p className="mt-2 text-white/70 leading-relaxed">{text}</p>

          {/* beige underline */}
          <div
            className={`mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r ${BEIGE_ACCENT} opacity-85`}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="timeline"
      ref={wrapRef}
      className="relative w-full py-28 c-space overflow-hidden"
    >
      {/* Subtle section background (same as Projects) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/assets/timeline-overlay.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "screen" }}
            draggable={false}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-widest text-white/60">
            TIMELINE
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              timeline
            </span>
            .
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70">
            The story + the toolkit — presented with motion and hierarchy.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Timeline */}
          <div className="relative">
            {/* Rail */}
            <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-white/10" />

            {/* Rail fill (scroll progress) */}
            <motion.div
              className="absolute left-[14px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-cyan-400 to-fuchsia-500"
              style={{ scaleY: railFill }}
            />

            {/* “Now” milestone */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 mb-8"
            >
              <div className="absolute left-0 top-6 h-8 w-8 rounded-full border border-white/15 bg-[#0f1115] flex items-center justify-center">
                <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <p className="text-sm font-semibold tracking-widest text-white/60">
                  NOW
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                  Shipping polished work
                </h3>
                <p className="mt-2 text-white/70">
                  Focused on interactive UI, 3D scenes, and AI features — with
                  performance and detail as the baseline.
                </p>
                <div className="mt-5 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-70" />
              </div>
            </motion.div>

            {/* Items */}
            <div className="space-y-8">
              {items.map((it, idx) => (
                <motion.article
                  key={`${it.date}-${idx}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-7 h-7 w-7 rounded-full border border-white/15 bg-[#0f1115] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                  </div>

                  <Glass className="p-7">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/70">
                      {it.date}
                    </span>

                    <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-white/70">{it.subtitle}</p>

                    <ul className="mt-5 space-y-3 text-white/70">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Glass>
                </motion.article>
              ))}
            </div>
          </div>

          {/* RIGHT: Strength cards + Toolkit */}
          <div className="lg:sticky lg:top-28 space-y-6">
            {/* Strength cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <p className="text-sm font-semibold tracking-widest text-white/60">
                    STRENGTHS
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                    What you can expect
                  </h3>
                </div>
                <div className="text-white/60 text-sm">(real strengths)</div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {strengthCards.map((c) => (
                  <PlayingCard key={c.title} {...c} />
                ))}
              </div>
            </motion.div>

            {/* Toolkit */}
            <Glass className="p-7">
              <h3 className="text-2xl font-extrabold text-white">Toolkit</h3>
              <p className="mt-2 text-white/70">
                Tools I use most often — grouped and compact.
              </p>

              <div className="mt-6 space-y-5">
                {skillGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-sm font-semibold tracking-widest text-white/60">
                      {g.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.chips.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white/75 hover:bg-white/10 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
