"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({
  children,
}: ClientLayoutProps): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleComplete = () => {
    setFadeIn(true);

    // Small delay for smoother transition
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}

      <div
        className={
          loading
            ? "opacity-0 pointer-events-none"
            : fadeIn
            ? "fadeContent"
            : ""
        }
      >
        {children}
      </div>
    </>
  );
}