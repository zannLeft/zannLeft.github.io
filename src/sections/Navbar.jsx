import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
  ];

  const socials = [
    { label: "LinkedIn", href: "#", icon: <FiLinkedin className="w-6 h-6" /> },
    { label: "Facebook", href: "#", icon: <FiFacebook className="w-6 h-6" /> },
    {
      label: "Instagram",
      href: "#",
      icon: <FiInstagram className="w-6 h-6" />,
    },
    { label: "GitHub", href: "#", icon: <FiGithub className="w-6 h-6" /> },
  ];

  const { scrollY, scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  // Smooth 0->1 over first 120px scroll
  const raw = useTransform(scrollY, [0, 120], [0, 1], { clamp: true });
  const t = useSpring(raw, { stiffness: 160, damping: 26, mass: 0.7 });

  // ✅ Blur only appears when scrolling
  const blur = useTransform(t, (v) => `blur(${14 * v}px)`);

  // Dark glass ramps in (fits your dark hero)
  const bg = useTransform(t, (v) => `rgba(15, 17, 21, ${0.72 * v})`);
  const border = useTransform(t, (v) => `rgba(255,255,255,${0.1 * v})`);
  const shadow = useTransform(t, (v) => `0 10px 30px rgba(0,0,0,${0.35 * v})`);

  // Tall at top, compact on scroll
  const navHeight = useTransform(t, [0, 1], [96, 80]);

  // Progress line hidden at top
  const lineOpacity = useTransform(t, [0, 0.25, 1], [0, 1, 1]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="
        relative py-2 font-semibold tracking-wide
        text-white/90 hover:text-white transition-colors
        after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
        after:origin-left after:scale-x-0 after:rounded-full
        after:bg-gradient-to-r after:from-cyan-400 after:to-fuchsia-500
        after:transition-transform after:duration-300
        hover:after:scale-x-100
      "
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className="border-b border-transparent"
        style={{
          backgroundColor: bg,
          borderColor: border,
          backdropFilter: blur,
          boxShadow: shadow,
        }}
      >
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between"
          style={{ height: navHeight }}
        >
          {/* Left */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center group" aria-label="Home">
              <img
                src="assets/logo.svg"
                alt="Logo"
                className="h-12 md:h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity invert"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {links.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                className="text-white/65 hover:text-white transition-colors"
                href={s.href}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}

            <a
              href="#about"
              className="
                ml-3 inline-flex items-center justify-center
                px-7 py-3 rounded-full text-base font-semibold text-white
                bg-gradient-to-r from-cyan-400 to-fuchsia-500
                shadow-md transition-transform
                hover:scale-[1.03] active:scale-[0.99]
              "
            >
              Contact
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-xl border border-white/25 text-white font-semibold hover:border-white/40 transition-colors"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </motion.div>

        <motion.div
          className="h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-fuchsia-500"
          style={{ scaleX: scrollYProgress, opacity: lineOpacity }}
        />
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[86vw] max-w-sm bg-[#0f1115] shadow-2xl border-l border-white/10 p-6"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold tracking-wide text-white">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-xl border border-white/20 font-semibold text-white hover:border-white/35 transition-colors"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                ))}

                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="
                    mt-2 inline-flex items-center justify-center
                    px-6 py-3 rounded-full font-semibold text-white
                    bg-gradient-to-r from-cyan-400 to-fuchsia-500
                    shadow-md
                  "
                >
                  Contact
                </a>

                <div className="mt-6 flex items-center gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="text-white/65 hover:text-white transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
