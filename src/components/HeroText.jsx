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
    "Graph AI",
    "Monitoring",
    "Security",
    "LLM-Powered",
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    // Make this a full-width left-anchored block (like your original)
    <div className="relative z-10 min-h-screen flex items-center justify-start text-left">
      <div className="w-full max-w-3xl">
        <motion.h1
          className="text-5xl font-medium text-neutral-900"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          Hi I'm Žan
        </motion.h1>

        <div className="flex flex-col items-start space-y-3 mt-2">
          <motion.p
            className="text-6xl font-medium text-neutral-700"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.15 }}
          >
            A Developer <br /> Crafting Diverse
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            <FlipWords words={words} className="font-black text-9xl" />
          </motion.div>

          <motion.p
            className="text-5xl font-medium text-neutral-700"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.45 }}
          >
            for Modern Platforms
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
