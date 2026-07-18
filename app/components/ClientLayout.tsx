"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({
  children,
}: ClientLayoutProps): React.JSX.Element {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen
          onComplete={() => {
            setLoading(false);
          }}
        />
      ) : (
        <main className="fadeContent">
          {children}
        </main>
      )}
    </>
  );
}