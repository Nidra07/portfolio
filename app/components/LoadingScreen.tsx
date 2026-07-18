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

  // Floating particles
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
      })),
    []
  );

  // Typewriter
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      index++;

      setText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  // Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 700);

          return 100;
        }

        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg" />

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
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div className="relative flex h-full flex-col items-center justify-center">

        {/* Rotating Rings */}
        <div className="relative flex h-40 w-40 items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-cyan-400/40 ring-one" />

          <div className="absolute inset-4 rounded-full border border-purple-400/40 ring-two" />

          {/* Glass Logo */}
          <div className="glass-logo">
            <span className="text-5xl font-extrabold text-white">
              RS
            </span>
          </div>

        </div>

        {/* Name */}
        <h1 className="mt-10 text-center text-4xl font-bold text-white">
          {text}
          <span className="cursor-blink">|</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-center text-gray-400">
          Software Engineer • UI/UX Designer • React Native Developer
        </p>

        {/* Progress Section */}
        <div className="mt-12 w-80">

          <div className="mb-2 flex justify-between text-sm text-gray-400">
            <span>Loading Portfolio...</span>
            <span>{progress}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="gradient-progress h-full rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
          {/* Glow Under Progress */}
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-40 rounded-full bg-cyan-400/70 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
          </div>

        </div>

        {/* Footer */}
        <div className="absolute bottom-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Crafted with ❤️ by Rudraaksh Singh
          </p>
        </div>

      </div>

      {/* Extra Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/3 top-1/3 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

    </div>
  );
}