import { Canvas, useFrame, useThree } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";
import { ContactShadows, Environment } from "@react-three/drei";
import { easing } from "maath";
import { useRef, useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const astronautRef = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const [astronautLoaded, setAstronautLoaded] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e) => {
      const t = e.touches[0];
      if (!t) return;
      pointer.current.x = (t.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(t.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Static hero background (stays still) */}
      <img
        src="/assets/hero-bg.png"
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 -z-20 w-full h-full object-cover select-none"
      />

      {/* Canvas behind text but above background */}
      <motion.figure
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: astronautLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
          camera={{ position: [0, -1, 5] }}
          onCreated={(state) => {
            state.gl.setClearColor("#ffffff", 0);
          }}
        >
          <Suspense fallback={null}>
            <Astronaut
              ref={astronautRef}
              onLoaded={() => setAstronautLoaded(true)}
            />
            <Rig astronautRef={astronautRef} pointer={pointer} />
          </Suspense>

          <ambientLight intensity={0.1} />
          <Environment preset="warehouse" />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.6}
            scale={10}
            blur={1}
            resolution={512}
          />
        </Canvas>
      </motion.figure>

      {/* Centered content wrapper */}
      <div className="relative mx-auto max-w-7xl c-space min-h-screen flex items-center">
        <HeroText />
      </div>
    </section>
  );
};

function Rig({ astronautRef, pointer }) {
  const { size } = useThree();
  const isMobile = size.width < 768;

  return useFrame((_, delta) => {
    if (!astronautRef.current) return;

    const baseY = isMobile ? 0 : -0.5;
    const targetOffsetY = pointer.current.x * 0.2;

    easing.dampE(
      astronautRef.current.rotation,
      [0, baseY - targetOffsetY, 0],
      0.25,
      delta,
    );
  });
}

export default Hero;
