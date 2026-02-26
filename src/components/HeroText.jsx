import { FlipWords } from "./FlipWords";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "Web Apps",
  "3D Scenes",
  "Unity Games",
  "LLM Tools",
  "RAG Systems",
  "AI Assistants",
  "Realtime UI",
  "Creative Frontends",
  "Multiplayer Prototypes",
  "Interactive Visuals",
];

const mobileWords = [
  "Web Apps",
  "3D Scenes",
  "Unity Games",
  "LLM Tools",
  "RAG Systems",
  "AI Assistants",
  "Realtime UI",
  "Creative\nFrontends",
  "Multiplayer\nPrototypes",
  "Interactive\nVisuals",
];

const HeroText = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -55]);

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 w-full select-none">
      <motion.div
        style={{ y }}
        className="relative w-full max-w-3xl px-4 md:px-0 will-change-transform"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="
      absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2
      h-[500px] w-[500px]
      md:left-[-6%] md:top-[28%] md:h-[520px] md:w-[900px]
    "
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,1), rgba(0,0,0,0) 72%)",
            }}
          />
        </div>

        <div className="flex min-h-[100svh] flex-col items-center text-center md:min-h-0 md:items-start md:text-left">
          <div className="pointer-events-none w-full pt-[14svh] sm:pt-[12svh] md:pt-0">
            <motion.h1
              className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-7xl"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              Hi, I’m Žan
            </motion.h1>

            <div className="mt-4">
              <motion.p
                className="text-3xl font-medium leading-tight text-neutral-400 sm:text-4xl md:text-6xl"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.05 }}
              >
                Computer Science <br />
                Student building
              </motion.p>

              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
                className="mt-3 flex justify-center md:justify-start"
              >
                <FlipWords
                  words={words}
                  mobileWords={mobileWords}
                  className="font-black text-[clamp(2.3rem,10vw,4rem)] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 sm:text-7xl md:text-8xl"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-auto w-full pb-14 sm:pb-16 md:mt-0 md:pb-0">
            <motion.p
              className="mx-auto mt-6 max-w-[34rem] text-base leading-relaxed text-white [text-shadow:0_10px_30px_rgba(0,0,0,1),0_0_18px_rgba(0,0,0,0.95)] sm:text-lg md:mx-0 md:mt-5 md:max-w-2xl md:text-xl md:text-white/70 md:[text-shadow:none]"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.3 }}
            >
              I like projects where visuals matter, interactions feel smooth,
              and the engineering is solid. Lately I’ve been mixing frontend
              work with 3D, multiplayer systems, and practical LLM features.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10 md:justify-start md:gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-base font-bold text-black transition-transform hover:scale-105 md:px-8 md:py-4 md:text-lg"
              >
                View work
              </a>
              <a
                href="/assets/cv.pdf"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-bold text-white transition-all hover:border-white/40 hover:bg-white/10 backdrop-blur-sm md:px-8 md:py-4 md:text-lg"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
