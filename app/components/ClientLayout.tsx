"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen
          key="loader"
          onComplete={() => setLoading(false)}
        />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}