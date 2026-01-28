import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const PageOverlay = ({
  src = "/assets/hero-overlay.png",
  opacity = 0.6,
  blendMode = "screen",
}) => {
  const { scrollYProgress } = useScroll();

  // 0 at top -> 1 at bottom
  const oRaw = useTransform(scrollYProgress, [0, 1], [opacity, 0], {
    clamp: true,
  });

  const o = useSpring(oRaw, { stiffness: 140, damping: 30, mass: 0.6 });

  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      className="pointer-events-none fixed inset-0 w-full h-full object-cover select-none z-0"
      style={{
        opacity: o,
        mixBlendMode: blendMode,
        transform: "translate3d(0,0,0)",
      }}
    />
  );
};

export default PageOverlay;
