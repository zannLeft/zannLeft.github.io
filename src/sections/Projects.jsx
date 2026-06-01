import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const Projects = () => {
  // ✅ Replace these with your real projects + image paths
  const featured = useMemo(
    () => ({
      title: "Letter Sauce",
      subtitle:
        "Multiplayer Unity prototype inspired by Letter Jam, built for a full game flow and reliable networking.",
      description:
        "Letter Sauce is a multiplayer digital prototype built in Unity 6.3 where players sit around a table and solve hidden words together. Each player enters a 5-letter word, but cannot see their own letters. A clue giver builds hints from the letters they can see on other players’ stands and places tokens in the 3D world to communicate structure. The project includes a complete UI flow (menu, lobby, word entry, gameplay), server authoritative synchronization using Netcode for GameObjects, and room joining via Unity Relay. Visually it’s set in a foggy night forest built in URP, with depth and atmosphere boosted using SSAO, layered fog, and small procedural effects like candle flicker, fireflies, and vegetation sway.",
      tags: ["Unity 6.3", "C#", "URP", "Relay", "Netcode (NGO)", "Blender"],
      image: "/assets/projects/featured.jpg",
      links: [
        {
          label: "Watch video",
          href: "https://www.youtube.com/watch?v=SAjjsrrAaUk",
        },
        {
          label: "GitHub",
          href: "https://github.com/zannLeft",
          icon: "github",
        },
      ],
    }),
    [],
  );

  const projects = useMemo(
    () => [
      {
        title: "zannLeft.io",
        subtitle:
          "My personal portfolio site with motion, 3D, and a focus on clean presentation.",
        description:
          "A portfolio build where I experiment with layout, animation, and interactive visuals. It’s where I package projects into a polished presentation and try out new UI ideas without overcomplicating the content.",
        tags: ["React", "Tailwind", "Framer Motion"],
        image: "/assets/projects/p1.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Letter Sauce (WebGPU)",
        subtitle:
          "Custom WebGPU prototype with a stylized 3D scene and multiplayer foundations.",
        description:
          "A WebGPU project set in a night forest where players are owls sitting around a table. Rendering is done with a custom WGSL lighting shader combining Lambert diffuse and Phong specular, with support for multiple directional and point lights. Assets are loaded from GLTF/GLB using a custom parser that supports WEBP textures and animations, and missing normals are computed when needed. Gameplay systems are built on an ECS architecture, with token placement handled through a geometric approach (non-overlapping random scatter and neat arcs in front of players) instead of heavy physics. Networking is host authoritative with replicated entities and snapshot sync for clients.",
        tags: ["WebGPU", "WGSL", "GLTF", "ECS", "Multiplayer"],
        image: "/assets/projects/p2.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "The Dark Ship",
        subtitle:
          "A popular Minecraft horror escape map set aboard an abandoned ocean liner.",
        description:
          "The Dark Ship is a Minecraft horror escape map where players explore a dark, abandoned ocean liner, solve puzzles, uncover what happened to the passengers, and try to escape the thing hiding below the sea. The map focuses on atmosphere and pacing, using a required resource pack with custom sounds, textures, models, and music. It supports singleplayer and multiplayer, has about one hour of playtime, and became one of my most visible Minecraft projects after launch.",
        tags: [
          "Minecraft",
          "Horror",
          "Puzzle",
          "Escape Map",
          "Resource Pack",
          "Level Design",
        ],
        image: "/assets/projects/p10.jpg",
        links: [
          {
            label: "Watch walkthrough",
            href: "https://www.youtube.com/watch?v=yDCSMWvD1GQ",
          },
          {
            label: "Download map",
            href: "https://www.minecraftmaps.com/52345-the-dark-ship",
          },
        ],
      },
      {
        title: "Multiplayer Unity Hacking Game",
        subtitle:
          "First-person competitive game prototype with custom systems and a lobby flow.",
        description:
          "A passion project built in Unity where players compete in an immersive first-person environment. It includes a lobby system built with Unity Netcode for GameObjects and a control setup designed to stay responsive and customizable. I’m continuing to iterate on environments, animations, and the overall gameplay loop.",
        tags: ["Unity", "C#", "Netcode", "Blender"],
        image: "/assets/projects/p3.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Virtual Museum",
        subtitle:
          "A Unity gallery prototype focused on atmosphere, lighting, and day-night exhibition modes.",
        description:
          "Virtual Museum is an interactive Unity prototype of a calm digital gallery where paintings, space, light, and materials work together. The museum includes a reception area, exhibition rooms, plaques, benches, a lounge area, and first-person exploration. Its main idea is an interactive transition between a bright daytime gallery and a darker night exhibition where selected paintings gain emissive details such as stars, windows, city lights, and reflections. The project also includes custom material work with normal, smoothness, and emission maps, simple interactions through raycasts and an IInteractable interface, seating interaction, and a cinematic camera mode for recording smooth showcase footage.",
        tags: ["Unity", "C#", "URP", "Lighting", "Materials", "First-Person"],
        image: "/assets/projects/p11.jpg",
        links: [
          {
            label: "Watch video",
            href: "https://www.youtube.com/watch?v=6TdkxWJGy1o",
          },
        ],
      },
      {
        title: "Koncerti.live",
        subtitle:
          "Concert discovery and ticketing with Spotify recommendations, LLM features, and blockchain payments.",
        description:
          "A modern rebuild of koncerti.net with a clean UI and a lot of real functionality. Users can browse concerts and artists, connect Spotify for personalized suggestions, buy tickets with Stripe or with an Ethereum checkout flow, and chat with other attendees. The admin side covers full CRUD, moderation, analytics, and tools for generating concert text with an LLM, including a RAG-style approach for generating concert programs from stored blueprints.",
        tags: [
          "Angular",
          "Node.js",
          "MongoDB",
          "Docker",
          "Stripe",
          "Spotify API",
          "LLM",
          "Hardhat",
        ],
        image: "/assets/projects/p4.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "AirWise",
        subtitle:
          "Personalized air-quality recommendations for safer outdoor activity planning.",
        description:
          "AirWise is a web application that turns raw air-quality measurements into clear, personalized recommendations for outdoor activities. Instead of only showing values like PM2.5, PM10, NO2, and O3, the app combines environmental data with a user health profile such as asthma, allergies, age group, or sensitivity to pollution. It calculates a risk score, explains whether conditions are safe or require caution, and recommends better time windows for going outside. The system uses an Angular frontend, a Node.js/Express REST API, MongoDB, external data from ARSO and Open-Meteo, plus separate modules for risk scoring and recommendations.",
        tags: [
          "Angular",
          "Node.js",
          "Express",
          "MongoDB",
          "ARSO API",
          "Open-Meteo",
          "Risk Engine",
        ],
        image: "/assets/projects/p12.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Routine Tracker",
        subtitle:
          "A Kotlin Android time-management app for planning routines and tracking whether they actually happened.",
        description:
          "Routine Tracker is a native Android app for defining scheduled routines such as study, exercise, and socialising. Users can create routines with a time range, active days, notification settings, and detailed routine screens. The app evolved across multiple milestones: it started with a drawer-based fragment UI, SQLite scheduling, and AlarmManager reminders; then moved to a cleaner MVVM architecture with Room, Repository, ViewModels, LiveData/Flows, WorkManager-based execution checks, and routine history; and finally added a Jetpack Compose routine list, OpenWeather API integration through Retrofit, ambient light sensing, and smart contextual suggestions for how to perform an upcoming routine.",
        tags: [
          "Kotlin",
          "Android",
          "MVVM",
          "Room",
          "Jetpack Compose",
          "WorkManager",
          "AlarmManager",
          "Retrofit",
          "Sensors",
        ],
        image: "/assets/projects/p13.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Tippy",
        subtitle:
          "A simple social app built fast with FlutterFlow and Supabase.",
        description:
          "A weekend challenge that turned into a full mini app. It includes Supabase authentication, post creation, comments, and realtime updates. The goal was to learn fast product-style iteration while keeping the UI minimal and clear.",
        tags: ["FlutterFlow", "Supabase", "Auth", "Realtime"],

        image: "/assets/projects/p5.jpg",
        live: "#",
        repo: "#",
      },
      {
        title: "Flutter Demo",
        subtitle:
          "My first Flutter app, built to learn the basics of Flutter and Dart.",
        description:
          "A small starter project where I focused on learning layout, state, navigation, and the overall Flutter workflow. It’s not huge, but it was an important step into mobile development.",
        tags: ["Flutter", "Dart"],
        image: "/assets/projects/p6.jpg",

        live: "#",
        repo: "#",
      },
      {
        title: "Recycle Rush",
        subtitle: "A published browser game made for a local utility company.",
        description:
          "A 2D educational game built for the web and published through a local public utility company. It was one of my first projects that shipped to real users and taught me a lot about finishing, polishing, and delivering something complete.",
        tags: ["JavaScript", "HTML5", "Game Dev"],
        image: "/assets/projects/p7.jpg",

        live: "#",
        repo: "#",
      },
      {
        title: "Apotos in Minecraft",
        subtitle: "Custom textures and models for a Sonic-inspired Minecraft map.",
        description:
          "A creative Minecraft project focused on recreating the feeling of Apotos through custom textures, models, and world-building. It helped me practice visual consistency, environmental design, and asset work, which later became useful for larger 3D and game projects.",
        tags: ["Minecraft", "3D Assets", "Textures", "Worldbuilding"],
        image: "/assets/projects/p8.jpg",
        links: [
          {
            label: "Watch video",
            href: "https://www.youtube.com/watch?v=shoK53_XZqk",
          },
        ],
      },
      {
        title: "Mars Citizen",
        subtitle:
          "University web app about NASA Mars rovers with live photos, charts, and Web3 likes.",
        description:
          "A university project themed around NASA’s Mars rovers. Users can pick a rover to view its basic info, then choose a date to fetch real images from the NASA Mars Rover Photos API. The app shows how many photos exist for that day, which camera was used, and displays the selected image. It also includes a CanvasJS chart to compare rover stats and a small Web3 feature where users can connect an Ethereum wallet and send a “like” transaction, with a table that lists the like history.",
        tags: [
          "HTML",
          "Bootstrap",
          "JavaScript",
          "NASA API",
          "CanvasJS",
          "Web3.js",
        ],
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

  const getProjectLinks = (project) => {
    if (project.links?.length) return project.links;

    return [
      project.live && project.live !== "#"
        ? { label: "Live", href: project.live }
        : null,
      project.repo && project.repo !== "#"
        ? { label: "Code", href: project.repo, icon: "github" }
        : null,
    ].filter(Boolean);
  };

  const renderLinkIcon = (link) =>
    link.icon === "github" ? <FiGithub /> : <FiExternalLink />;

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
                  {getProjectLinks(featured).map((link, index) => (
                    <a
                      key={`${featured.title}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={
                        index === 0
                          ? "inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform cursor-pointer"
                          : "inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md cursor-pointer"
                      }
                    >
                      {link.label} {renderLinkIcon(link)}
                    </a>
                  ))}
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
              // 1. ADDED: `flex flex-col h-full w-full` to structure the card perfectly in the grid
              className="group flex flex-col h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition-colors cursor-pointer"
              aria-label={`Open ${p.title}`}
            >
              {/* 2. ADDED: `w-full shrink-0` so the image wrapper spans the top and doesn't get squished */}
              <div className="relative w-full h-52 shrink-0 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* 3. ADDED: `flex flex-col flex-1` so this container grows to fill remaining space, anchoring the image to the top */}
              <div className="flex flex-col flex-1 p-6">
                <h4 className="text-xl font-extrabold text-white">{p.title}</h4>
                <p className="mt-2 text-white/70">{p.subtitle}</p>

                {/* ADDED: `mt-auto pt-4` to the tags wrapper pushes the tags to the very bottom if you want them aligned */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
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
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            />

            {/* Modal shell */}
            <motion.div
              className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto px-4 pb-4 pt-[calc(env(safe-area-inset-top)+5.5rem)] md:p-8"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              {/* Top spacing */}
              <div className="w-full max-w-5xl md:pt-20">
                <div
                  className="relative w-full max-h-[calc(100dvh-env(safe-area-inset-top)-6rem)] md:max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0f1115]/90 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="
  absolute right-3 top-3 z-10 rounded-full p-2
  border border-white/15 bg-white/5
  text-white/80
  hover:text-white hover:border-white/30 hover:bg-white/10
  transition-colors cursor-pointer
  md:right-4 md:top-4
"
                    aria-label="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>

                  <div className="relative h-[260px] md:h-[420px]">
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
                      {getProjectLinks(selected).map((link, index) => (
                        <a
                          key={`${selected.title}-${link.label}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            index === 0
                              ? "inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-white hover:scale-[1.03] active:scale-[0.99] transition-transform cursor-pointer"
                              : "inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors backdrop-blur-md cursor-pointer"
                          }
                        >
                          {link.label} {renderLinkIcon(link)}
                        </a>
                      ))}
                    </div>
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
