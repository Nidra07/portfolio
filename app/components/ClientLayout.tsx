"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({
  children,
}: ClientLayoutProps): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [showSweep, setShowSweep] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleComplete = () => {
    setShowSweep(true);

    setTimeout(() => {
      setLoading(false);
      setVisible(true);
    }, 700);
  };

  useEffect(() => {
    if (!visible) return;

    document.body.classList.add("page-loaded");

    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, [visible]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}

      {showSweep && (
        <div className="page-sweep">
          <div className="page-sweep-light" />
        </div>
      )}

      <div
        className={`page-transition ${
          visible ? "page-transition-visible" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}