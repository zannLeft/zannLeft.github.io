import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Backdrop + border for visibility */}
      <div className="bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-24 md:h-28">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-10">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                delay: 0.2,
              }}
              className="flex items-center group"
            >
              <img
                src="assets/logo.svg"
                alt="Logo"
                className="h-14 md:h-16 w-auto transition-opacity opacity-90 group-hover:opacity-100"
              />
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {links.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="relative text-neutral-900 text-lg font-semibold tracking-wide hover:text-black transition-colors"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-neutral-900 rounded-full transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right: Socials + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-7 h-7" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
              href="#"
              aria-label="Facebook"
            >
              <FiFacebook className="w-7 h-7" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
              href="#"
              aria-label="Instagram"
            >
              <FiInstagram className="w-7 h-7" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
              href="#"
              aria-label="GitHub"
            >
              <FiGithub className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="#about"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                delay: 0.75,
                duration: 0.4,
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="ml-4 inline-flex items-center justify-center px-7 py-3 rounded-full text-base md:text-lg font-semibold text-white bg-neutral-900 hover:bg-black transition-colors shadow-md"
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile: simple "Menu" placeholder (optional) */}
          <div className="md:hidden">
            <button className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-900 font-semibold">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
