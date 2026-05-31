import React from "react";

const NOISE_TEXTURE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
};

const blobs = [
  {
    className:
      "absolute -top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-purple-900/20",
    blur: "blur(60px)",
  },
  {
    className:
      "absolute -bottom-[10%] -right-[10%] h-[60%] w-[70%] rounded-full bg-indigo-900/30",
    blur: "blur(80px)",
  },
  {
    className:
      "absolute top-[40%] right-[5%] h-[40%] w-[40%] rounded-full bg-blue-900/20",
    blur: "blur(50px)",
  },
  {
    className:
      "absolute bottom-[10%] left-[10%] h-[30%] w-[30%] rounded-full bg-primary/30",
    blur: "blur(60px)",
  },
];

const BlurBackground = React.memo(() => {
  return (
    <div
      className="fixed inset-0 -z-20 overflow-hidden"
      style={{
        contain: "layout style paint",
      }}
      aria-hidden="true"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Gradient blobs */}
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={blob.className}
          style={{
            filter: blob.blur,
          }}
        />
      ))}

      {/* Contrast overlay */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={NOISE_TEXTURE}
      />
    </div>
  );
});

BlurBackground.displayName = "BlurBackground";

export default BlurBackground;
