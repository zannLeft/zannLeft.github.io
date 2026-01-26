import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Web Apps", "Games", "AI Systems", "Animations"];
  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 w-full flex justify-start text-left">
      <div className="w-full max-w-3xl px-4 md:px-0">
        <motion.h1
          className="text-5xl md:text-7xl font-medium text-white tracking-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          Hi I'm Žan
        </motion.h1>

        <div className="mt-4">
          <motion.p
            className="text-4xl md:text-6xl font-medium text-neutral-400 leading-tight"
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
            className="mt-2"
          >
            <FlipWords
              words={words}
              className="font-black text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            />
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform"
          >
            View Work
          </a>
          <a
            href="/assets/cv.pdf"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
