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
      date: "2024 – Oct 2025",
      title: "Jožef Stefan Institute (Sector E9)",
      subtitle: "AI and LLM integrations developer",
      points: [
        "Built and integrated LLM features across multiple internal and applied projects.",
        "Worked on privacy-sensitive healthcare and monitoring use cases, including RAG-style retrieval workflows.",
        "Co-authored the paper “Evaluating Large Language Models for Privacy-Sensitive Healthcare Applications” (Information Society 2025).",
        "Contributed to IJS Asistent, a Slovenian AI assistant project listed in COBISS.",
      ],
    },
    {
      date: "2021 – Present",
      title: "University of Ljubljana, FRI",
      subtitle: "BSc Computer and Information Science",
      points: [
        "Built full-stack coursework projects with HTML, CSS, JavaScript, PHP, and Node.js.",
        "Worked with databases and API integrations in practical assignments.",
        "Explored blockchain basics through hands-on implementation in projects.",
        "Kept building personal projects in parallel with studies.",
      ],
    },
    {
      date: "2019",
      title: "Celtra d.o.o.",
      subtitle: "Student worker",
      points: [
        "Did data annotation work using spreadsheets.",
        "Worked with PostgreSQL tooling and basic database workflows.",
      ],
    },
    {
      date: "2017",
      title: "JKP Grosuplje d.o.o.",
      subtitle: "Web video game developer",
      points: [
        "Shipped a 2D web game in JavaScript and HTML5.",
        "Implemented a save system and high score tracking.",
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      chips: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    },
    { title: "Backend", chips: ["Node.js", "APIs", "PostgreSQL", "Docker"] },
    { title: "Game / 3D", chips: ["Unity", "C#", "Three.js / R3F", "Blender"] },
    {
      title: "AI / LLM",
      chips: ["RAG", "GraphRAG", "Prompting", "Semantic analysis"],
    },
  ];

  const researchItems = [
    {
      type: "Paper",
      title:
        "Evaluating Large Language Models for Privacy-Sensitive Healthcare Applications",
      meta: "Information Society 2025 · Co-author · Pages 16–20",
      description:
        "A conference paper on evaluating LLMs for privacy-sensitive healthcare use cases, covering privacy risks, GDPR-aware deployment, benchmarking, and practical trade-offs between frontier and open-weight models.",
      chips: ["COBISS-ID: 262140419", "Healthcare", "Privacy", "LLMs"],
    },
    {
      type: "Software",
      title: "IJS Asistent",
      meta: 'Institut "Jožef Stefan" · 2025 · Slovenian AI assistant',
      description:
        "A COBISS-listed software record connected to my applied LLM work at Jožef Stefan Institute, focused on real-world assistant development and deployment.",
      chips: ["COBISS-ID: 264777731", "Applied AI", "LLM integrations"],
    },
  ];

  // Beige accent used ONLY for the playing cards
  const BEIGE_ACCENT = "from-[#f3e7d3] to-[#caa377]";

  const strengthCards = [
    {
      rank: "A",
      suit: "♠",
      title: "Polished interaction",
      text: "I care about the small details: motion, spacing, and UI that feels responsive.",
    },
    {
      rank: "K",
      suit: "♦",
      title: "3D and real-time",
      text: "Comfortable with Unity and realtime scenes, plus the practical side of shipping them.",
    },
    {
      rank: "Q",
      suit: "♥",
      title: "LLM features",
      text: "I build LLM workflows that are useful in products, with retrieval and validation in mind.",
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
    const cornerColor = "text-[#f3e7d3]/90";

    return (
      <motion.div
        whileHover={{ y: -6, rotateZ: -0.6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative overflow-hidden rounded-[26px] border border-white/12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[0_25px_90px_rgba(0,0,0,0.45)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </div>

        <div
          className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${BEIGE_ACCENT}`}
        />

        <div className="absolute left-4 top-4 leading-none">
          <div className={`font-extrabold text-lg ${cornerColor}`}>{rank}</div>
          <div className={`text-lg ${cornerColor}`}>{suit}</div>
        </div>

        <div className="absolute right-4 bottom-4 leading-none rotate-180">
          <div className={`font-extrabold text-lg ${cornerColor}`}>{rank}</div>
          <div className={`text-lg ${cornerColor}`}>{suit}</div>
        </div>

        <div className="relative p-6 pt-14">
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
            A quick look at what I have done so far, plus the tools I use most.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-white/10" />

            <motion.div
              className="absolute left-[14px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-cyan-400 to-fuchsia-500"
              style={{ scaleY: railFill }}
            />

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
                  University and personal projects
                </h3>
                <p className="mt-2 text-white/70">
                  Currently focused on studies, building projects, and
                  sharpening my skills across web, 3D, and LLM features.
                </p>
                <div className="mt-5 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-70" />
              </div>
            </motion.div>

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

          <div className="lg:sticky lg:top-28 space-y-6">
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
                    What I bring to a project
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {strengthCards.map((c) => (
                  <PlayingCard key={c.title} {...c} />
                ))}
              </div>
            </motion.div>

            <Glass className="p-7">
              <h3 className="text-2xl font-extrabold text-white">Toolkit</h3>
              <p className="mt-2 text-white/70">
                Tools I use most often, grouped for a quick scan.
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

            <Glass className="p-7">
              <p className="text-sm font-semibold tracking-widest text-white/60">
                RESEARCH
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">
                Publications & contributions
              </h3>
              <p className="mt-2 text-white/70">
                A small snapshot of research and institutional work connected to
                my LLM experience.
              </p>

              <div className="mt-6 space-y-4">
                {researchItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/70">
                      {item.type}
                    </div>

                    <h4 className="mt-3 text-lg md:text-xl font-extrabold text-white leading-snug">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-white/55">{item.meta}</p>

                    <p className="mt-3 text-white/70 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75"
                        >
                          {chip}
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
