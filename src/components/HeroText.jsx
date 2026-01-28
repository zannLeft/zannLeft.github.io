// HeroText.jsx
import { FlipWords } from "./FlipWords";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroText = () => {
  const words = ["Web Apps", "Games", "AI Systems", "Animations"];
  const { scrollY } = useScroll();

  // Foreground moves a bit MORE than the page (feels closer)
  const y = useTransform(scrollY, [0, 500], [0, -55]);

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 w-full flex justify-start text-left select-none">
      <motion.div
        style={{ y }}
        className="relative w-full max-w-3xl px-4 md:px-0 will-change-transform"
      >
        {/* Dark smooth blob backdrop */}
        <div
          className="pointer-events-none absolute -z-10 rounded-[48px]"
          style={{
            left: "-30%",
            right: "10%",
            top: "-20%",
            bottom: "-40%",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.78), rgba(0,0,0,0) 72%)",
          }}
        />

        {/* Text block (not clickable anyway) */}
        <div className="pointer-events-none">
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
        </div>

        {/* Action Buttons (still clickable) */}
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
      </motion.div>
    </div>
  );
};

export default HeroText;
