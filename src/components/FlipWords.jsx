"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  mobileWords,
  duration = 3000,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const measureRef = useRef(null);
  const [metrics, setMetrics] = useState({
    maxWidth: null,
    maxLines: 1,
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const activeWords = isMobile && mobileWords?.length ? mobileWords : words;

  const currentWord = activeWords[index] ?? "";

  useEffect(() => {
    if (!activeWords?.length) return;
    if (index >= activeWords.length) setIndex(0);
  }, [activeWords, index]);

  useLayoutEffect(() => {
    if (!measureRef.current || !activeWords?.length) return;

    let maxWidth = 0;
    let maxLines = 1;

    for (const word of activeWords) {
      const lines = String(word).split("\n");
      maxLines = Math.max(maxLines, lines.length);

      for (const line of lines) {
        measureRef.current.textContent = line || " ";
        maxWidth = Math.max(
          maxWidth,
          measureRef.current.getBoundingClientRect().width,
        );
      }
    }

    setMetrics({
      maxWidth: Math.ceil(maxWidth),
      maxLines,
    });
  }, [activeWords, className]);

  useEffect(() => {
    if (!activeWords?.length) return;

    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % activeWords.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [index, duration, activeWords]);

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08 } },
    exit: { transition: { staggerChildren: 0.02, staggerDirection: 1 } },
  };

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

  const letterPadEm = 0.18;
  const lines = String(currentWord).split("\n");

  return (
    <span
      className={twMerge(
        "relative inline-flex flex-col items-center overflow-visible align-baseline md:items-start",
        className,
      )}
      style={{
        width: metrics.maxWidth ? `${metrics.maxWidth}px` : undefined,
        height: `${metrics.maxLines * 1.05}em`,
      }}
    >
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
          className="absolute left-1/2 top-0 -translate-x-1/2 overflow-visible md:left-0 md:translate-x-0"
          style={{ lineHeight: 1 }}
        >
          {lines.map((line, lineIndex) => (
            <span
              key={`${currentWord}-line-${lineIndex}`}
              className="block whitespace-nowrap text-center md:text-left"
              style={{ lineHeight: 0.95 }}
            >
              {line.split("").map((letter, i, arr) => (
                <motion.span
                  key={`${currentWord}-${lineIndex}-${i}`}
                  variants={letterVariants}
                  className="inline-block overflow-visible"
                  style={{
                    paddingBottom: `${letterPadEm}em`,
                    marginBottom: `-${letterPadEm}em`,
                    lineHeight: 1.15,
                    background:
                      "linear-gradient(to right top, #00FFFB, #DD00FF)",
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
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
