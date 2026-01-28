import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const Projects = () => {
  // ✅ Replace these with your real projects + image paths
  const featured = useMemo(
    () => ({
      title: "Letter Sauce",
      subtitle: "Short one-liner that sells it.",
      description:
        "A slightly longer description of what makes this project special. Mention impact, tech, or what you solved.",
      tags: ["React", "R3F", "Framer Motion", "Tailwind"],
      image: "/assets/projects/featured.jpg", // <-- add this image
      live: "#",
      repo: "#",
    }),
    [],
  );

  const projects = useMemo(
    () => [
      {
        title: "zannLeft.io",
        subtitle: "Short description",
        tags: ["React", "Node"],
        image: "/assets/projects/p1.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Letter Sauce WebGPU",
        subtitle: "Short description",
        tags: ["Three.js", "R3F"],
        image: "/assets/projects/p2.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Multiplayer Unity Hacking Game",
        subtitle: "Short description",
        tags: ["AI", "Python"],
        image: "/assets/projects/p3.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Koncerti.live",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p4.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Tippy",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p5.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Six",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p6.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Seven",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p7.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Eight",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p8.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Nine",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p9.jpg",
        live: "#",
        repo: "#",
      },
    ],
    [],
  );

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative w-full py-28 overflow-hidden">
      {/* Subtle section background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/assets/projects-overlay.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "screen" }}
            draggable={false}
          />
        </div>
      </div>

      {/* Header (kept in your layout width) */}
      <div className="mx-auto max-w-7xl c-space">
        <p className="text-sm font-semibold tracking-widest text-white/60">
          PROJECTS
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            work
          </span>
          .
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl">
          Click a project to view details. The first one is my highlight.
        </p>
      </div>

      {/* Featured banner (FULL WIDTH) */}
      <div className="mt-12">
        <button
          onClick={() => setSelected(featured)}
          className="group relative block w-full text-left cursor-pointer"
          aria-label={`Open ${featured.title}`}
        >
          <div className="relative w-full h-[68vh] min-h-[520px] max-h-[820px] overflow-hidden">
            {/* Image (bottom layer) */}
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700 z-0"
              draggable={false}
            />

            {/* Dark overlays (middle layer) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Content (top layer) */}
            <div className="relative z-20 mx-auto max-w-7xl c-space h-full flex items-end pb-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                  Highlighted project
                </div>

                <h3 className="mt-5 text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_14px_40px_rgba(0,0,0,0.85)]">
                  {featured.title}
                </h3>

                <p className="mt-4 text-lg md:text-xl text-white/85 drop-shadow-[0_10px_28px_rgba(0,0,0,0.75)]">
                  {featured.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 text-sm font-semibold text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={featured.live}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform cursor-pointer"
                  >
                    Live
                  </a>

                  <a
                    href={featured.repo}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md cursor-pointer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Thumbnails grid */}
      <div className="mx-auto max-w-7xl c-space mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button
              key={`${p.title}-${p.image}`}
              onClick={() => setSelected(p)}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition-colors cursor-pointer"
              aria-label={`Open ${p.title}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-extrabold text-white">{p.title}</h4>
                <p className="mt-2 text-white/70">{p.subtitle}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            />

            {/* Click-outside handler lives here */}
            <motion.div
              className="fixed inset-0 z-[1000] flex items-center justify-center p-5 md:p-8 cursor-pointer"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              {/* Card stops the outside click */}
              <div
                className="relative w-full max-w-5xl max-h-[85vh] overflow-auto rounded-3xl border border-white/10 bg-[#0f1115]/90 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.55)] cursor-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="
                    absolute right-4 top-4 z-10 rounded-full p-2
                    border border-white/15 bg-white/5
                    text-white/80
                    hover:text-white hover:border-white/30 hover:bg-white/10
                    transition-colors
                    cursor-pointer
                  "
                  aria-label="Close"
                >
                  <FiX className="w-5 h-5" />
                </button>

                <div className="relative h-[320px] md:h-[420px]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />
                </div>

                <div className="p-7 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                    {selected.title}
                  </h3>
                  <p className="mt-3 text-white/75 text-lg">
                    {selected.description || selected.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {(selected.tags || []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {selected.live && (
                      <a
                        href={selected.live}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform cursor-pointer"
                      >
                        Live <FiExternalLink />
                      </a>
                    )}

                    {selected.repo && (
                      <a
                        href={selected.repo}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md cursor-pointer"
                      >
                        Code <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
