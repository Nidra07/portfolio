"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem("portfolio-loaded");

    if (loaded) {
      setLoading(false);
    }
  }, []);

  const finishLoading = () => {
    sessionStorage.setItem("portfolio-loaded", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onComplete={finishLoading} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}