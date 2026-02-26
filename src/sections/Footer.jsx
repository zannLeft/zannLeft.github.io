// src/sections/Footer.jsx
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUpRight,
  FiCopy,
} from "react-icons/fi";
import { useState } from "react";

const Footer = () => {
  const EMAIL = "zan.rostan@gmail.com";
  const NAME = "Žan";

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%C5%BEan-ro%C5%A1tan-a787b92b2/",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/zannLeft",
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/zan_rostan/",
      icon: <FiInstagram className="w-5 h-5" />,
    },
  ];

  const [copied, setCopied] = useState(false);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Hi ${NAME} from your portfolio`,
  )}&body=${encodeURIComponent(
    `Hey ${NAME},\n\nI found your portfolio and I'd like to talk about:\n\n`,
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const fade = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  // navbar-like glass values
  const glassBg = "rgba(15, 17, 21, 0.72)";
  const glassBorder = "rgba(255,255,255,0.10)";
  const glassShadow = "0 10px 30px rgba(0,0,0,0.35)";
  const glassBlur = "blur(14px)";

  return (
    <footer
      id="contact"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
    >
      {/* Subtle section background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/assets/footer-overlay.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "screen" }}
          draggable={false}
        />
      </div>

      {/* Main footer content */}
      <div className="flex-1 py-50">
        <div className="mx-auto max-w-7xl c-space">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                {/* Left */}
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold tracking-widest text-white/60">
                    CONTACT
                  </p>

                  <h3 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    Want to build something{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                      cool
                    </span>
                    ?
                  </h3>

                  <p className="mt-5 text-white/70 text-lg leading-relaxed">
                    I’m open to collaborations, freelance work, and interesting
                    full-time opportunities. The fastest way to reach me is
                    email or LinkedIn.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={mailto}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform"
                    >
                      Email me <FiArrowUpRight />
                    </a>

                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
                      type="button"
                      aria-label="Copy email"
                    >
                      <FiCopy />
                      {copied ? "Copied!" : "Copy email"}
                    </button>

                    <span className="text-white/60 text-sm">{EMAIL}</span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="assets/cv.pdf"
                      className="px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white/85 font-semibold hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
                    >
                      Download CV
                    </a>

                    <a
                      href="#projects"
                      className="px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white/85 font-semibold hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
                    >
                      View projects
                    </a>

                    <a
                      href="#top"
                      className="px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white/85 font-semibold hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
                    >
                      Back to top
                    </a>
                  </div>
                </div>

                {/* Right */}
                <div className="w-full lg:w-[360px]">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <p className="text-sm font-semibold tracking-widest text-white/60">
                      FIND ME
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={s.label}
                          className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>

                    <div className="mt-5 text-white/60 text-sm leading-relaxed">
                      Prefer DMs? LinkedIn works great.
                      <br />
                      Based in Europe (CET/CEST).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width copyright strip */}
      <motion.div
        className="w-full border-t border-transparent"
        style={{
          backgroundColor: glassBg,
          borderColor: glassBorder,
          backdropFilter: glassBlur,
          boxShadow: glassShadow,
        }}
      >
        <div className="mx-auto max-w-7xl c-space h-20 flex items-center">
          <p className="text-white/60 text-sm leading-snug">
            © 2026 Žan. All rights reserved.{" "}
            <span className="text-white/40">·</span> Built with React + Tailwind
            + Framer Motion.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
