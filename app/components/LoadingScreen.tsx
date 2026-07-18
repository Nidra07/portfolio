"use client";

import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;

    const typing = setInterval(() => {
      if (current < fullText.length) {
        setText(fullText.slice(0, current + 1));
        current++;
      } else {
        clearInterval(typing);
      }
    }, 120);

    const loader = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loader);

          setTimeout(() => {
            document.body.style.overflow = "";
            onComplete();
          }, 600);

          return 100;
        }

        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(loader);
      clearInterval(typing);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #0f172a 0%, #000000 60%)",
              "radial-gradient(circle at 80% 80%, #111827 0%, #000000 60%)",
              "radial-gradient(circle at 50% 50%, #1e293b 0%, #000000 60%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Glowing Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-cyan-400 shadow-[0_0_60px_#22d3ee]"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-white/5 backdrop-blur-lg"
          >
            <span className="text-4xl font-bold text-white">
              RS
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-8 text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {text}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-3 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Software Engineer • UI/UX Designer • React Native Developer
        </motion.p>

        {/* Progress */}
        <div className="mt-12 w-72">
          <div className="mb-2 flex justify-between text-sm text-gray-400">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-cyan-400"
              animate={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}