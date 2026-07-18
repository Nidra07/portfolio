"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps): React.JSX.Element {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");

  const fullText = "Rudraaksh Singh";

  // Typewriter effect
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

  // Progress animation
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  // Finish loader
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        onComplete();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #0f172a 0%, #000 70%)",
            "radial-gradient(circle at 80% 80%, #111827 0%, #000 70%)",
            "radial-gradient(circle at 50% 50%, #1e293b 0%, #000 70%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border-2 border-cyan-400"
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <span className="text-4xl font-bold text-white">RS</span>
        </div>
      </motion.div>

      {/* Name */}
      <h1 className="z-10 mt-8 text-3xl font-bold text-white">
        {text}
      </h1>

      {/* Subtitle */}
      <p className="z-10 mt-2 text-gray-400">
        Software Engineer • UI/UX Designer • React Native Developer
      </p>

      {/* Progress */}
      <div className="z-10 mt-10 w-72">
        <div className="mb-2 flex justify-between text-sm text-gray-400">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-cyan-400"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}