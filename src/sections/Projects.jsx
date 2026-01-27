import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const Projects = () => {
  // ✅ Replace these with your real projects + image paths
  const featured = useMemo(
    () => ({
      title: "Featured Project Name",
      subtitle: "Short one-liner that sells it.",
      description:
        "A slightly longer description of what makes this project special. Mention impact, tech, or what you solved.",
      tags: ["React", "R3F", "Framer Motion", "Tailwind"],
      image: "/assets/projects/featured.jpg", // <-- add this image
      live: "#",
      repo: "#",
    }),
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Project One",
        subtitle: "Short description",
        tags: ["React", "Node"],
        image: "/assets/projects/p1.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Two",
        subtitle: "Short description",
        tags: ["Three.js", "R3F"],
        image: "/assets/projects/p2.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Three",
        subtitle: "Short description",
        tags: ["AI", "Python"],
        image: "/assets/projects/p3.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Project Four",
        subtitle: "Short description",
        tags: ["Animations", "Framer Motion"],
        image: "/assets/projects/p4.jpg",
        live: "#",
        repo: "#",
      },
    ],
    []
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/25" />
        <div className="absolute inset-0 opacity-40">
          <img
            src="/assets/hero-overlay.png"
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
          className="group relative block w-full text-left"
          aria-label={`Open ${featured.title}`}
        >
          <div className="relative w-full h-[68vh] min-h-[520px] max-h-[820px] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
              draggable={false}
            />
            {/* Contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Content */}
            <div className="mx-auto max-w-7xl c-space h-full flex items-end pb-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 text-white/80">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                  Highlighted project
                </div>

                <h3 className="mt-5 text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                  {featured.title}
                </h3>
                <p className="mt-4 text-lg md:text-xl text-white/75">
                  {featured.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 text-sm font-semibold text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={featured.live}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform"
                  >
                    Live <FiExternalLink />
                  </a>

                  <a
                    href={featured.repo}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md"
                  >
                    Code <FiGithub />
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
              key={p.title}
              onClick={() => setSelected(p)}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition-colors"
              aria-label={`Open ${p.title}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-f
