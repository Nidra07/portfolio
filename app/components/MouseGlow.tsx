"use client";

import { useEffect, useState } from "react";

export default function MouseGlow(): React.JSX.Element {
  const [position, setPosition] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}