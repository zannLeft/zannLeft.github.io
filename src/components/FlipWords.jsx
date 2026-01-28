// FlipWords.jsx
"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [index, setIndex] = useState(0);

  const measureRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState(null);

  const currentWord = words[index] ?? "";

  useLayoutEffect(() => {
    if (!measureRef.current) return;
    let max = 0;

    for (const w of words) {
      measureRef.current.textContent = w;
      max = Math.max(max, measureRef.current.getBoundingClientRect().width);
    }

    setMaxWidth(Math.ceil(max));
  }, [words]);

  useEffect(() => {
    if (!words?.length) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [index, duration, words]);

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08 } },
    exit: { transition: { staggerChildren: 0.02, staggerDirection: 1 } },
  };

  // No shadow here — just blur/transform
  const letterVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: {
      opacity: 0,
      y: -100,
      x: 400,
      scale: 3,
      filter: "blur(12px)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // descender clipping fix at letter level
  const letterPadEm = 0.18;

  return (
    <span
      className={twMerge(
        "relative inline-block align-baseline overflow-visible",
        className,
      )}
      style={{
        width: maxWidth ? `${maxWidth}px` : undefined,
        height: "1.1em",
      }}
    >
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        className={twMerge(
          "absolute pointer-events-none opacity-0 whitespace-nowrap",
          className,
        )}
        style={{ left: 0, top: 0, lineHeight: 1 }}
      />

      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={`${currentWord}-${index}`}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute left-0 top-0 whitespace-nowrap overflow-visible"
          style={{ lineHeight: 1 }}
        >
          {currentWord.split("").map((letter, i, arr) => (
            <motion.span
              key={`${currentWord}-${i}`}
              variants={letterVariants}
              className="inline-block overflow-visible"
              style={{
                paddingBottom: `${letterPadEm}em`,
                marginBottom: `-${letterPadEm}em`,
                lineHeight: 1.15,

                background: "linear-gradient(to right top, #00FFFB, #DD00FF)",
                backgroundSize: `${arr.length}00%`,
                backgroundPosition: `${
                  arr.length > 1 ? (i / (arr.length - 1)) * 100 : 0
                }% 0`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                willChange: "transform, opacity, filter",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
