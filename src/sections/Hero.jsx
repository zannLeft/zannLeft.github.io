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
    <section className="relative flex items-start justify-center min-h-screen overflow-visible md:items-start md:justify-start c-space">
      {/* Pull hero up slightly under the fixed navbar (adjust if needed) */}
      <div className="relative w-full -translate-y-10">
        {/* Text on top */}
        <HeroText />

        {/* Canvas behind text */}
        <motion.figure
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ width: "100vw", height: "100vh" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: astronautLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.7 }}
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
              // keep the canvas transparent so it doesn't cover the page
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

            <ambientLight intensity={1} />
            <Environment preset="sunset" />

            <directionalLight
              position={[3, 5, 2]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-bias={-0.00015}
            />

            {/* ContactShadows back — SMALL so it doesn't look like a floor */}
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.55}
              scale={7}
              blur={2}
              resolution={512}
            />
          </Canvas>
        </motion.figure>
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
      delta
    );
  });
}

export default Hero;
