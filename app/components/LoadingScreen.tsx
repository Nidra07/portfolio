"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps): React.JSX.Element {

  const fullText = "Rudraaksh Singh";

  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("Initializing");

  // Stars
const [stars, setStars] = useState<any[]>([]);
const [particles, setParticles] = useState<any[]>([]);
useEffect(() => {
  setStars(
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
    }))
  );

  setParticles(
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 8,
      opacity: Math.random() * 0.8 + 0.2,
    }))
  );
}, []);

  // Typewriter
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Progress
  useEffect(() => {

    const timer = setInterval(() => {

      setProgress((prev) => {

        const next = Math.min(prev + 1, 100);

        if (next < 30) setPhase("Initializing");
        else if (next < 60) setPhase("Loading Assets");
        else if (next < 90) setPhase("Building Experience");
        else setPhase("Almost Ready");

        return next;

      });

    }, 35);

    return () => clearInterval(timer);

  }, []);

  // Finish
  useEffect(() => {

    if (progress === 100) {

      const timer = setTimeout(() => {
        onComplete();
      }, 900);

      return () => clearTimeout(timer);

    }

  }, [progress, onComplete]);
return (
  <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

    {/* Aurora Layers */}
    <div className="aurora aurora-one" />
    <div className="aurora aurora-two" />
    <div className="aurora aurora-three" />

    {/* Star Field */}
    {stars.map((star) => (
      <span
        key={star.id}
        className="star"
        style={{
          left: `${star.left}%`,
          top: `${star.top}%`,
          width: star.size,
          height: star.size,
          animationDelay: `${star.delay}s`,
          animationDuration: `${star.duration}s`,
        }}
      />
    ))}

    {/* Floating Particles */}
    {particles.map((particle) => (
      <span
        key={particle.id}
        className="particle"
        style={{
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          width: particle.size,
          height: particle.size,
          opacity: particle.opacity,
          animationDelay: `${particle.delay}s`,
          animationDuration: `${particle.duration}s`,
        }}
      />
    ))}

    {/* Ambient Glows */}
    <div className="glow glow-cyan" />
    <div className="glow glow-blue" />
    <div className="glow glow-purple" />

    <div className="relative flex h-full flex-col items-center justify-center">

      {/* Premium Logo */}
      <div className="relative flex h-64 w-64 items-center justify-center">

        {/* Outer Ring */}
        <div className="ring outer-ring">

          <span className="ring-dot top-dot" />
          <span className="ring-dot right-dot" />

        </div>

        {/* Middle Ring */}
        <div className="ring middle-ring">

          <span className="ring-dot bottom-dot" />
          <span className="ring-dot left-dot" />

        </div>

        {/* Inner Ring */}
        <div className="ring inner-ring" />

        {/* Glass Logo */}
        <div className="glass-logo">

          <div className="glass-shine" />

          <div className="logo-inner-glow" />

          <span className="relative z-10 text-6xl font-black tracking-[0.25em] text-white">
            RS
          </span>

        </div>

      </div>

      {/* Name */}
      <h1 className="mt-12 text-center text-5xl font-black tracking-wide text-white">

        {text}

        <span className="cursor-blink">|</span>

      </h1>

      {/* Loading Phase */}
      <p className="mt-4 text-center text-purple-300 tracking-[0.3em] uppercase text-sm">

        {phase}

      </p>
      {/* Progress Section */}
      <div className="mt-12 w-[320px] max-w-[90vw]">

        <div className="mb-3 flex items-center justify-between text-sm">

          <span className="tracking-[0.25em] uppercase text-gray-400">
            Loading Portfolio
          </span>

          <span className="font-semibold text-cyan-300">
            {progress}%
          </span>

        </div>

        <div className="relative h-3 overflow-hidden rounded-full border border-purple-500/20 bg-white/5">

          <div className="progress-shimmer" />

          <div
            className="gradient-progress"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="mt-6 flex justify-center">

          <div className="h-[3px] w-44 rounded-full bg-purple-400 shadow-[0_0_40px_rgba(34,211,238,.9)]" />

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-10 flex flex-col items-center">

        <div className="mb-3 h-px w-28 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          Crafted by Rudraaksh Singh
        </p>

      </div>

    </div>

    {/* Floor Reflection */}
    <div className="reflection" />

    {/* Decorative Grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />

  </div>
);
}
