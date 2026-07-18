"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#110720]/65 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_40px_rgba(168,85,247,.15)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="px-6">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">

          <Link
            href="/"
            className="header-logo group"
          >
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Link>

          <ul className="flex items-center gap-8">

            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Lab", "#lab"],
            ].map(([title, href]) => (
              <li key={title}>
                <Link
                  href={href}
                  className="nav-link"
                >
                  {title}
                </Link>
              </li>
            ))}

          </ul>

        </div>
      </nav>
    </header>
  );
}