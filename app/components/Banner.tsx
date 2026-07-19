"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Full Stack Developer",
    "Next.js Developer",
    "UI/UX Designer",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const [heroVisible, setHeroVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);

      return () => clearTimeout(timeout);
    }

    if (displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    setIsDeleting(false);
    setTypingSpeed(100);
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  }, [
    displayedText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
  ]);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 150);
    const t2 = setTimeout(() => setImageVisible(true), 350);
    const t3 = setTimeout(() => setContentVisible(true), 600);
    const t4 = setTimeout(() => setShowGlow(true), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
      id="home"
      className={`hero-section min-h-screen flex items-center justify-center px-6 pt-20 ${
        heroVisible ? "hero-visible" : ""
      }`}
    >
      <div className="hero-background">
        <div
          className={`hero-glow ${
            showGlow ? "hero-glow-active" : ""
          }`}
        />
        <div className="hero-grid" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">

          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div
              className={`relative top-10 transition-all duration-1000 ${
                imageVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
                      {/* Mobile: Hello text */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />

                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">
                        Rudraaksh Singh
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <Image
                src="/assets/me.png"
                alt="Rudraaksh Singh"
                width={300}
                height={300}
                className="max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />

              <Image
                src="/assets/me-glow.png"
                alt="Glow"
                width={300}
                height={300}
                className="max-w-md"
                style={{ width: "auto", height: "auto" }}
                priority
              />

              <div
                className={`hero-floating-glow ${
                  showGlow ? "hero-floating-glow-active" : ""
                }`}
              />
            </div>
          </div>

          <div
            className={`flex-1 space-y-6 text-center lg:text-left transition-all duration-1000 ${
              contentVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Desktop Hello */}

            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow"
                width={100}
                height={100}
                className="absolute"
                style={{
                  left: "-100px",
                  top: "-50px",
                  width: "auto",
                  height: "auto",
                }}
              />

              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">
                    Rudraaksh Singh
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl">A Designer who</p>

              <h1
                className={`text-5xl lg:text-7xl font-semibold leading-tight transition-all duration-1000 ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Judges a book
                <br />
                by its{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />

                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    cover
                  </span>
                </span>
                ...
              </h1>

              <p
                className={`text-md text-white/80 transition-all duration-1000 delay-300 ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                Because if the cover does not impress you what else can?
              </p>
            </div>

            <div className="space-y-3 pt-15 text-center lg:text-left">
              <p className="hero-name text-5xl text-white font-bold">
                I'm a {displayedText}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-lg lg:text-xl text-white/90 tracking-wide">
                Building modern web applications with React & Next.js.
              </p>

              <p className="text-lg text-white/80 max-w-2xl mt-10">
                I'm a passionate Full Stack Developer specializing in React,
                Next.js, TypeScript and Tailwind CSS.
              </p>

              <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
                <a href="#lab" className="hero-btn-primary">
                  View Projects
                </a>

                <a href="#about" className="hero-btn-secondary">
                  About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}