const PageOverlay = ({
  src = "/assets/hero-overlay.png",
  opacity = 0.6,
  blendMode = "screen", // use "normal" if you want max performance
}) => {
  return (
    <img
      src={src}
      alt=""
      draggable={false}
      className="pointer-events-none fixed inset-0 w-screen h-screen object-cover select-none z-0"
      style={{
        opacity,
        mixBlendMode: blendMode,
        transform: "translate3d(0,0,0)", // helps keep it GPU composited
      }}
    />
  );
};

export default PageOverlay;
