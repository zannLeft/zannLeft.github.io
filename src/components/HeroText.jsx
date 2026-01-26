import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = [
    "Web Apps",
    "Games",
    "AI Systems",
    "Animations",
    "Prototypes",
    "Databases",
    "Solutions",
    "Experiences",
    "Monitoring",
    "Security",
    "LLM-Powered",
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex justify-start text-left pt-[10vh]">
      <div className="w-full max-w-3xl">
        <motion.h1
          className="text-5xl font-medium text-white/90 drop-shadow-sm"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          Hi I'm Žan
        </motion.h1>

        <div className="flex flex-col items-start space-y-3 mt-2">
          <motion.p
            className="text-6xl font-medium text-white/70 leading-[0.95] drop-shadow-sm"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.05 }}
          >
            A Developer <br /> Crafting Diverse
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords
              words={words}
              className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            />
          </motion.div>

          <motion.p
            className="text-5xl font-medium text-white/65 drop-shadow-sm"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.35 }}
          >
            for Modern Platforms
          </motion.p>

          {/* ✅ Action row */}
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.55,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-cyan-400 to-fuchsia-500
                shadow-md transition-transform
                hover:scale-[1.03] active:scale-[0.99]
              "
            >
              View Projects
            </a>

            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-full font-semibold
                text-white/90 border border-white/20
                bg-white/5 backdrop-blur-sm
                hover:border-white/35 hover:bg-white/10
                transition-colors
              "
            >
              Download CV
            </a>

            <a
              href="#about"
              className="text-white/70 hover:text-white transition-colors font-semibold"
            >
              Contact →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
