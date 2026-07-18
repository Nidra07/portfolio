"use client";

import { useEffect, useMemo, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps): React.JSX.Element {
  const fullText = "Rudraaksh Singh";

  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 8,
        duration: Math.random() * 8 + 8,
        opacity: Math.random() * 0.8 + 0.2,
      })),
    []
  );

  // Typewriter
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 85);

    return () => clearInterval(timer);
  }, []);

  // Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 800);

          return 100;
        }

        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

      {/* Aurora */}
      <div className="aurora-bg" />
      <div className="aurora-bg second" />
      <div className="aurora-bg third" />

      {/* Particles */}
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

      <div className="relative flex h-full flex-col items-center justify-center">

        {/* Rings */}
        <div className="relative flex h-52 w-52 items-center justify-center">

          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="ring ring-three" />

          {/* Logo */}
          <div className="glass-logo">

            <div className="glass-shine" />

            <span className="relative z-10 text-5xl font-black tracking-wider text-white">
              RS
            </span>

          </div>

        </div>

        {/* Name */}
        <h1 className="mt-10 text-center text-5xl font-black tracking-wide text-white">

          {text}

          <span className="cursor-blink">|</span>

        </h1>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-center text-gray-400">
          Software Engineer • UI/UX Designer • React Native Developer
        </p>

        {/* Progress */}
        <div className="mt-12 w-80">

          <div className="mb-3 flex justify-between text-sm text-gray-400">

            <span>Loading Portfolio...</span>

            <span>{progress}%</span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">

            <div
              className="gradient-progress"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>
          {/* Glow Line */}
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-44 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,.9)]" />
          </div>

        </div>

        {/* Footer */}
        <div className="absolute bottom-10 flex flex-col items-center">

          <div className="mb-3 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Crafted by Rudraaksh Singh
          </p>

        </div>

      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute left-10 top-10 h-[240px] w-[240px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-[280px] w-[280px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[180px] w-[180px] rounded-full bg-cyan-300/10 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-[160px] w-[160px] rounded-full bg-indigo-400/10 blur-[90px]" />

      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

    </div>
  );
}